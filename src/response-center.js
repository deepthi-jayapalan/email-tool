let replyTokenClient = null;
let replyAccessToken = '';
let replyClientId = '';
let unreadReplyThreads = [];
let selectedReplyThread = null;
let selectedReplyDraft = 0;
let replyDraftOptions = [];
let approvedReplyDraft = null;
let pendingSendApprovedReply = false;

const previewContact = {
  FirstName: 'Priya',
  CompanyName: 'Acme Digital',
  Designation: 'Operations Director'
};

const languageClosings = {
  English: 'Best regards',
  Hindi: 'Regards',
  Spanish: 'Saludos',
  French: 'Cordialement',
  German: 'Mit freundlichen Grussen'
};

function value(id) {
  return document.getElementById(id).value.trim();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function personalize(text) {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => previewContact[key] || match);
}

function setInboxStatus(message, type = '') {
  const status = document.getElementById('replyInboxStatus');
  status.textContent = message;
  status.dataset.type = type;
}

function setAssistantStatus(message, type = '') {
  const status = document.getElementById('replyAssistantStatus');
  status.textContent = message;
  status.dataset.type = type;
}

function parseEnvValue(envText, key) {
  const pattern = new RegExp(`^\\s*${key}\\s*=\\s*(.+?)\\s*$`, 'm');
  const match = envText.match(pattern);
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : '';
}

function publicConfigValue(key) {
  return window.EMAIL_TOOL_CONFIG?.[key]?.trim() || '';
}

async function loadEnvConfig() {
  let nextClientId = publicConfigValue('GMAIL_CLIENT_ID');

  if (!nextClientId) {
    const response = await fetch('.env', { cache: 'no-store' });

    if (!response.ok) {
      setInboxStatus('Gmail config missing', 'error');
      return false;
    }

    nextClientId = parseEnvValue(await response.text(), 'GMAIL_CLIENT_ID');
  }

  replyClientId = nextClientId;

  if (!/^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(replyClientId)) {
    setInboxStatus('Gmail client ID missing', 'error');
    return false;
  }

  setInboxStatus('Gmail ready');
  return true;
}

function initReplyGmailClient() {
  if (!replyClientId) {
    setInboxStatus('Gmail config missing', 'error');
    return false;
  }

  if (!window.google?.accounts?.oauth2) {
    setInboxStatus('Google library still loading', 'error');
    return false;
  }

  replyTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: replyClientId,
    scope: 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send',
    callback: (response) => {
      if (response.error) {
        setInboxStatus(response.error, 'error');
        return;
      }

      replyAccessToken = response.access_token;
      setInboxStatus('Gmail connected', 'success');

      if (pendingSendApprovedReply) {
        pendingSendApprovedReply = false;
        sendApprovedReply().catch((error) => {
          console.error(error);
          setAssistantStatus('Reply send failed', 'error');
        });
        return;
      }

      loadUnreadReplies().catch((error) => {
        console.error(error);
        setInboxStatus('Could not load replies', 'error');
      });
    }
  });

  return true;
}

async function requestReplyGmailAccess() {
  if (!replyClientId && !(await loadEnvConfig())) {
    return false;
  }

  if (!replyTokenClient && !initReplyGmailClient()) {
    return false;
  }

  setInboxStatus('Opening Google sign-in');
  replyTokenClient.requestAccessToken({ prompt: replyAccessToken ? '' : 'consent' });
  return true;
}

async function gmailFetch(path) {
  const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/${path}`, {
    headers: {
      Authorization: `Bearer ${replyAccessToken}`
    }
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

async function gmailSend(payload) {
  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${replyAccessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

function headerValue(headers, name) {
  return headers.find((header) => header.name.toLowerCase() === name.toLowerCase())?.value || '';
}

function decodeBase64Url(data = '') {
  const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
  return decodeURIComponent(escape(atob(padded)));
}

function encodeBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function emailAddressFromHeader(header) {
  const bracketMatch = header.match(/<([^<>@\s]+@[^<>@\s]+\.[^<>@\s]+)>/);

  if (bracketMatch) {
    return bracketMatch[1];
  }

  return header.match(/[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+/)?.[0] || '';
}

function replySubject(subject) {
  return /^re:/i.test(subject) ? subject : `Re: ${subject || 'Your message'}`;
}

function extractText(payload) {
  if (payload.mimeType === 'text/plain' && payload.body?.data) {
    return decodeBase64Url(payload.body.data);
  }

  if (payload.parts) {
    const plainPart = payload.parts.find((part) => part.mimeType === 'text/plain');

    if (plainPart?.body?.data) {
      return decodeBase64Url(plainPart.body.data);
    }

    return payload.parts.map(extractText).filter(Boolean).join('\n');
  }

  return '';
}

function stripQuotedReply(text) {
  return text
    .split(/\nOn .+wrote:|\nFrom:|\nSent:|\n> /)[0]
    .trim();
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function analyzeReplyText(reply) {
  const text = reply.toLowerCase();
  const intent = includesAny(text, ['price', 'pricing', 'cost', 'budget', 'quote', 'proposal'])
    ? 'Pricing / proposal'
    : includesAny(text, ['meeting', 'call', 'demo', 'schedule', 'available', 'calendar'])
      ? 'Meeting request'
      : includesAny(text, ['architecture', 'technical', 'integration', 'api', 'security', 'stack'])
        ? 'Technical evaluation'
        : includesAny(text, ['issue', 'problem', 'not working', 'support', 'error'])
          ? 'Support need'
          : includesAny(text, ['not interested', 'unsubscribe', 'stop', 'remove'])
            ? 'Opt-out / not interested'
            : includesAny(text, ['thanks', 'thank you', 'received', 'noted'])
              ? 'Acknowledgement'
              : 'General inquiry';
  const sentiment = includesAny(text, ['great', 'interested', 'yes', 'sounds good', 'helpful', 'perfect'])
    ? 'Positive'
    : includesAny(text, ['not interested', 'concern', 'expensive', 'issue', 'problem', 'delay'])
      ? 'Concerned'
      : 'Neutral';
  const urgency = includesAny(text, ['urgent', 'asap', 'today', 'tomorrow', 'this week', 'immediately'])
    ? 'High'
    : includesAny(text, ['next week', 'soon', 'timeline', 'when'])
      ? 'Medium'
      : 'Normal';
  const score = Math.min(98, 55
    + (intent === 'Pricing / proposal' ? 18 : 0)
    + (intent === 'Meeting request' ? 16 : 0)
    + (intent === 'Technical evaluation' ? 12 : 0)
    + (sentiment === 'Positive' ? 10 : 0)
    + (urgency === 'High' ? 10 : urgency === 'Medium' ? 5 : 0));

  return { intent, sentiment, urgency, score };
}

function buildNextActions(analysis) {
  if (analysis.intent === 'Meeting request') {
    return ['Schedule meeting', 'Assign sales owner', 'Create CRM opportunity'];
  }

  if (analysis.intent === 'Pricing / proposal') {
    return ['Share pricing', 'Create CRM opportunity', 'Prepare proposal or SOW draft'];
  }

  if (analysis.intent === 'Technical evaluation') {
    return ['Send architecture deck', 'Escalate to presales/support', 'Share relevant knowledge-base notes'];
  }

  if (analysis.intent === 'Support need') {
    return ['Escalate to presales/support', 'Assign support owner', 'Summarize issue for ticket creation'];
  }

  if (analysis.intent === 'Opt-out / not interested') {
    return ['Mark preference in CRM', 'Pause follow-up sequence'];
  }

  return ['Send contextual follow-up', 'Log interaction in CRM'];
}

function buildReplyDrafts(analysis, actions) {
  const style = value('replyStyle');
  const language = value('replyLanguage');
  const customerContext = value('customerContext') || `${previewContact.CompanyName}, ${previewContact.Designation}`;
  const threadContext = value('threadContext') || 'No additional knowledge notes provided.';
  const closing = languageClosings[language] || languageClosings.English;
  const nextAction = actions[0] || 'send a useful next step';
  const styleLine = {
    professional: 'Thanks for getting back to us. Based on your note, it sounds like the next useful step is to align on the business context and share the most relevant details.',
    technical: 'Thanks for the context. From a technical standpoint, we can map the workflow, integration points, data flow, and implementation considerations before recommending the right approach.',
    executive: 'Thank you for the update. At this stage, the priority is to clarify business impact, timeline, and the decision path so the next step is practical and measurable.',
    sales: 'Thanks for your response. This looks like a good opportunity to move the conversation forward with the right information and a clear next step.'
  }[style] || '';

  return [
    {
      title: `${style[0].toUpperCase()}${style.slice(1)} reply`,
      confidence: analysis.score,
      text: `Hi {{FirstName}},

${styleLine}

I can ${nextAction.toLowerCase()} and tailor it to your current priorities.

Context I am using: ${customerContext}

${closing},
Kodexter Growth Team`
    },
    {
      title: 'Concise follow-up',
      confidence: Math.max(50, analysis.score - 8),
      text: `Hi {{FirstName}},

Thanks for the reply. I reviewed your note and the best next step is to ${nextAction.toLowerCase()}.

I can include the relevant background so the response stays specific to your team.

${closing},
Kodexter Growth Team`
    },
    {
      title: 'Context-rich response',
      confidence: Math.max(50, analysis.score - 4),
      text: `Hi {{FirstName}},

Thanks for sharing this. I understand the current intent as ${analysis.intent.toLowerCase()}.

Based on the thread and available context, I recommend we ${nextAction.toLowerCase()}. We can also reference the relevant service details, proposal notes, architecture inputs, or pricing context as needed.

Reference context: ${threadContext.slice(0, 240)}

${closing},
Kodexter Growth Team`
    }
  ];
}

function logAssistantEvent(type, payload = {}) {
  const logs = JSON.parse(localStorage.getItem('responseCenterAuditLog') || '[]');
  logs.push({ type, payload, createdAt: new Date().toISOString() });
  localStorage.setItem('responseCenterAuditLog', JSON.stringify(logs.slice(-50)));
}

function renderReplyDrafts() {
  document.getElementById('replyDrafts').innerHTML = replyDraftOptions
    .map((draft, index) => `
      <article class="draft-card${index === selectedReplyDraft ? ' is-selected' : ''}">
        <button type="button" data-draft-index="${index}">
          <strong>${escapeHtml(draft.title)}</strong>
          <p>${escapeHtml(personalize(draft.text))}</p>
          <small>${draft.confidence}% confidence</small>
        </button>
      </article>
    `)
    .join('');

  const editorWrap = document.getElementById('replyDraftEditorWrap');
  const editor = document.getElementById('replyDraftEditor');
  const draft = replyDraftOptions[selectedReplyDraft];
  editorWrap.hidden = !draft;

  if (draft && !editor.value) {
    editor.value = personalize(draft.text);
  }
}

function analyzeIncomingReply() {
  const reply = value('incomingReply');
  const threshold = Number(value('replyConfidence')) || 80;

  if (!reply) {
    setAssistantStatus('Paste or select a client reply first', 'error');
    return;
  }

  const analysis = analyzeReplyText(reply);
  const actions = buildNextActions(analysis);
  replyDraftOptions = buildReplyDrafts(analysis, actions);
  selectedReplyDraft = 0;
  approvedReplyDraft = null;
  document.getElementById('replyDraftEditor').value = '';
  document.getElementById('sendApprovedReply').hidden = true;

  document.getElementById('replyIntent').textContent = analysis.intent;
  document.getElementById('replyIntentDetail').textContent = 'Classified from unread reply content.';
  document.getElementById('replySentiment').textContent = analysis.sentiment;
  document.getElementById('replySentimentDetail').textContent = `${analysis.sentiment} tone detected.`;
  document.getElementById('replyUrgency').textContent = analysis.urgency;
  document.getElementById('replyUrgencyDetail').textContent = analysis.urgency === 'High' ? 'Respond quickly or escalate.' : 'Standard follow-up cadence.';
  document.getElementById('replyScore').textContent = `${analysis.score}%`;
  document.getElementById('replyScoreDetail').textContent = analysis.score >= threshold ? 'Above auto-suggest threshold.' : 'Human review recommended.';
  document.getElementById('replySummary').textContent = `The reply is classified as ${analysis.intent.toLowerCase()} with ${analysis.sentiment.toLowerCase()} sentiment and ${analysis.urgency.toLowerCase()} urgency. Use thread history, CRM context, and knowledge notes before approval.`;
  document.getElementById('replyActions').innerHTML = actions.map((action) => `<li>${escapeHtml(action)}</li>`).join('');

  renderReplyDrafts();

  const lowRisk = analysis.intent === 'Acknowledgement' && analysis.score >= threshold && document.getElementById('autoReplyLowRisk').checked;
  setAssistantStatus(lowRisk ? 'Low-risk auto-response eligible' : 'Drafts ready for approval', lowRisk ? 'success' : '');
  logAssistantEvent('analysis_generated', { analysis, actions });
}

function renderUnreadReplies() {
  const list = document.getElementById('unreadReplyList');

  if (!unreadReplyThreads.length) {
    list.innerHTML = '<p class="empty-note">No unread client replies found.</p>';
    return;
  }

  list.innerHTML = unreadReplyThreads
    .map((thread, index) => `
      <article class="reply-thread-card">
        <button type="button" data-thread-index="${index}">
          <strong>${escapeHtml(thread.subject || '(No subject)')}</strong>
          <span>${escapeHtml(thread.from)}</span>
          <small>${escapeHtml(thread.date)}</small>
          <p>${escapeHtml(thread.snippet)}</p>
        </button>
      </article>
    `)
    .join('');
}

async function loadUnreadReplies() {
  if (!replyAccessToken) {
    setInboxStatus('Connect Gmail first', 'error');
    requestReplyGmailAccess();
    return;
  }

  setInboxStatus('Loading unread replies...');
  const list = await gmailFetch('messages?q=in:inbox is:unread -from:me&maxResults=25');
  const messages = list.messages || [];
  const replyOnly = value('replyFilter') === 'replies';
  const threads = [];
  const seenThreads = new Set();

  for (const item of messages) {
    const message = await gmailFetch(`messages/${item.id}?format=full`);

    if (seenThreads.has(message.threadId)) {
      continue;
    }

    const thread = await gmailFetch(`threads/${message.threadId}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date`);
    const hasSentMessage = thread.messages.some((threadMessage) => threadMessage.labelIds?.includes('SENT'));

    if (replyOnly && !hasSentMessage) {
      continue;
    }

    const headers = message.payload.headers || [];
    const replyText = stripQuotedReply(extractText(message.payload)) || message.snippet || '';
    threads.push({
      id: message.id,
      threadId: message.threadId,
      from: headerValue(headers, 'From'),
      subject: headerValue(headers, 'Subject'),
      date: headerValue(headers, 'Date'),
      messageId: headerValue(headers, 'Message-ID'),
      snippet: message.snippet,
      replyText,
      threadSummary: thread.messages
        .map((threadMessage) => `${threadMessage.labelIds?.includes('SENT') ? 'Sent' : 'Received'}: ${threadMessage.snippet}`)
        .join('\n\n')
    });
    seenThreads.add(message.threadId);
  }

  unreadReplyThreads = threads;
  renderUnreadReplies();
  setInboxStatus(`${threads.length} unread ${replyOnly ? 'replies' : 'emails'} found`, threads.length ? 'success' : '');
}

async function copySelectedReplyDraft() {
  const draft = replyDraftOptions[selectedReplyDraft];

  if (!draft) {
    setAssistantStatus('Generate drafts first', 'error');
    return;
  }

  await navigator.clipboard.writeText(value('replyDraftEditor') || personalize(draft.text));
  setAssistantStatus('Selected draft copied', 'success');
}

function approveSelectedReplyDraft() {
  const draft = replyDraftOptions[selectedReplyDraft];

  if (!draft) {
    setAssistantStatus('Generate drafts first', 'error');
    return;
  }

  approvedReplyDraft = {
    ...draft,
    text: value('replyDraftEditor') || personalize(draft.text)
  };
  document.getElementById('sendApprovedReply').hidden = false;
  logAssistantEvent('draft_approved', {
    title: approvedReplyDraft.title,
    confidence: approvedReplyDraft.confidence,
    edited: approvedReplyDraft.text !== personalize(draft.text)
  });
  setAssistantStatus('Edited draft approved. You can send the reply now.', 'success');
}

function buildReplyMimeMessage(thread, draft) {
  const recipient = emailAddressFromHeader(thread.from);
  const subject = replySubject(thread.subject);
  const headers = [
    `To: ${recipient}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
  ];

  if (thread.messageId) {
    headers.splice(2, 0, `In-Reply-To: ${thread.messageId}`, `References: ${thread.messageId}`);
  }

  return `${headers.join('\r\n')}\r\n\r\n${draft.text}`;
}

async function sendApprovedReply() {
  const selectedDraft = approvedReplyDraft || replyDraftOptions[selectedReplyDraft];
  const draft = selectedDraft
    ? { ...selectedDraft, text: value('replyDraftEditor') || selectedDraft.text }
    : null;

  if (!draft) {
    setAssistantStatus('Approve a draft first', 'error');
    return;
  }

  if (!selectedReplyThread) {
    setAssistantStatus('Select an unread reply before sending', 'error');
    return;
  }

  const recipient = emailAddressFromHeader(selectedReplyThread.from);

  if (!recipient) {
    setAssistantStatus('Could not find recipient email', 'error');
    return;
  }

  if (!replyAccessToken) {
    pendingSendApprovedReply = true;
    setAssistantStatus('Connect Gmail to send reply', 'error');
    requestReplyGmailAccess();
    return;
  }

  setAssistantStatus('Sending reply...');
  await gmailSend({
    raw: encodeBase64Url(buildReplyMimeMessage(selectedReplyThread, draft)),
    threadId: selectedReplyThread.threadId
  });

  logAssistantEvent('reply_sent', {
    to: recipient,
    subject: replySubject(selectedReplyThread.subject),
    draftTitle: draft.title
  });
  document.getElementById('sendApprovedReply').hidden = true;
  setAssistantStatus('Reply sent with Gmail', 'success');
}

function addClearButtons() {
  document.querySelectorAll('input, textarea').forEach((field) => {
    if (field.closest('.clearable-field') || ['checkbox', 'radio', 'hidden'].includes(field.type)) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'clearable-field';
    field.parentNode.insertBefore(wrapper, field);
    wrapper.appendChild(field);

    const clearButton = document.createElement('button');
    clearButton.className = 'clear-field-button';
    clearButton.type = 'button';
    clearButton.setAttribute('aria-label', `Clear ${field.id || 'field'}`);
    clearButton.textContent = 'x';
    wrapper.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
      field.value = '';
      field.focus();
    });
  });
}

document.getElementById('backToBuilder').addEventListener('click', () => {
  window.location.href = 'email-builder.html';
});

document.getElementById('connectReplyGmail').addEventListener('click', requestReplyGmailAccess);
document.getElementById('loadUnreadReplies').addEventListener('click', () => {
  loadUnreadReplies().catch((error) => {
    console.error(error);
    setInboxStatus('Could not load replies', 'error');
  });
});
document.getElementById('replyFilter').addEventListener('change', () => {
  if (replyAccessToken) {
    loadUnreadReplies().catch((error) => {
      console.error(error);
      setInboxStatus('Could not load replies', 'error');
    });
  }
});
document.getElementById('unreadReplyList').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-thread-index]');

  if (!button) {
    return;
  }

  const thread = unreadReplyThreads[Number(button.dataset.threadIndex)];
  selectedReplyThread = thread;
  approvedReplyDraft = null;
  document.getElementById('sendApprovedReply').hidden = true;
  document.getElementById('incomingReply').value = thread.replyText;
  document.getElementById('threadContext').value = thread.threadSummary;
  document.getElementById('customerContext').value = `Sender: ${thread.from}\nSubject: ${thread.subject}`;
  analyzeIncomingReply();
  document.getElementById('assistantPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('analyzeReply').addEventListener('click', analyzeIncomingReply);
document.getElementById('copyReplyDraft').addEventListener('click', () => {
  copySelectedReplyDraft().catch((error) => {
    console.error(error);
    setAssistantStatus('Copy failed', 'error');
  });
});
document.getElementById('approveReplyDraft').addEventListener('click', approveSelectedReplyDraft);
document.getElementById('sendApprovedReply').addEventListener('click', () => {
  sendApprovedReply().catch((error) => {
    console.error(error);
    setAssistantStatus('Reply send failed', 'error');
  });
});
document.getElementById('replyDrafts').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-draft-index]');

  if (!button) {
    return;
  }

  selectedReplyDraft = Number(button.datasetDraftIndex || button.dataset.draftIndex);
  approvedReplyDraft = null;
  document.getElementById('sendApprovedReply').hidden = true;
  document.getElementById('replyDraftEditor').value = personalize(replyDraftOptions[selectedReplyDraft].text);
  renderReplyDrafts();
});

let replyAnalysisDebounce = null;
document.getElementById('incomingReply').addEventListener('input', () => {
  clearTimeout(replyAnalysisDebounce);

  if (value('incomingReply').length < 24) {
    return;
  }

  selectedReplyThread = null;

  replyAnalysisDebounce = setTimeout(analyzeIncomingReply, 700);
});

addClearButtons();
loadEnvConfig().catch((error) => {
  console.error(error);
  setInboxStatus('Gmail config unavailable', 'error');
});
