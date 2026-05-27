const fields = [
  'campaignName',
  'senderName',
  'senderIdentity',
  'subjectLine',
  'preheader',
  'variantA',
  'variantB',
  'bannerHeadline',
  'mainHeading',
  'bodyCopy',
  'bullets',
  'primaryCta',
  'primaryUrl',
  'secondaryCta',
  'ctaAlign',
  'bannerImage',
  'campaignType',
  'emailTone',
  'emailIndustry',
  'emailUseCase'
];

const bannerPresets = {
  lead: {
    label: 'Lead generation',
    type: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    headline: 'Find The Gaps In Your Digital Workflow',
    heading: 'Get a practical growth assessment for your business',
    cta: 'Get Free Assessment'
  },
  automation: {
    label: 'AI automation',
    type: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    headline: 'Automate Workflows. Accelerate Growth.',
    heading: 'Practical automation planning for growing teams',
    cta: 'Start an Automation Assessment'
  },
  development: {
    label: 'Development',
    type: 'Software Development Services',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    headline: 'Build Reliable Software Around Your Workflow',
    heading: 'Custom software designed for scale and clarity',
    cta: 'Discuss Your Project'
  },
  success: {
    label: 'Client success',
    type: 'Client Success',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    headline: 'Better Digital Systems. Stronger Business Outcomes.',
    heading: 'Help your team move faster with connected systems',
    cta: 'Read the Case Study'
  },
  webinar: {
    label: 'Webinar',
    type: 'Webinar/Event Promotion',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80',
    headline: 'Live Webinar: Digital Workflows For Growing Teams',
    heading: 'Join a practical session on software and automation strategy',
    cta: 'Register Now'
  },
  launch: {
    label: 'Product launch',
    type: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80',
    headline: 'Launch Smarter Digital Products',
    heading: 'Move from idea to scalable platform with Kodexter',
    cta: 'Explore the Solution'
  }
};

const subjectSuggestions = {
  'Lead Generation': [
    'Ready for smarter digital growth?',
    'Find workflow gaps faster',
    'Get a practical tech assessment',
    'Simplify your business systems',
    'Turn interest into qualified leads',
    'Improve follow-ups with automation',
    'Build a clearer growth engine',
    'Spot delays before they cost you'
  ],
  'Product Launch': [
    'Launch your product smarter',
    'Build momentum for your launch',
    'New systems for growing teams',
    'Take your idea to market',
    'Launch with better workflows',
    'Move from plan to platform',
    'See what is new from Kodexter',
    'Scale your next product launch'
  ],
  'AI & Automation': [
    'Reduce manual work with AI',
    'Automate what slows you down',
    'Turn tasks into smart workflows',
    'Find your automation opportunities',
    'Make reporting less manual',
    'Use AI where it actually helps',
    'Save time with practical automation',
    'Connect tools with smarter systems'
  ],
  'Software Development Services': [
    'Build software around your workflow',
    'Move faster with custom software',
    'From idea to scalable platform',
    'Modernize your business systems',
    'Create tools your team can trust',
    'Replace manual work with software',
    'Plan your next software build',
    'Build cleaner digital foundations'
  ],
  'Client Success': [
    'See how teams move faster',
    'Better systems, stronger outcomes',
    'A practical workflow success story',
    'Improve visibility across teams',
    'How connected systems help growth',
    'What better workflows changed',
    'A smarter path to daily operations',
    'Proof that systems matter'
  ],
  'Webinar/Event Promotion': [
    'Join our live workflow session',
    'Reserve your webinar seat',
    'AI automation for growing teams',
    'Live: simplify manual workflows',
    'Learn practical automation steps',
    'Save your spot with Kodexter',
    'A tech growth session for teams',
    'Bring better systems to work'
  ]
};

const previewContact = {
  FirstName: 'Priya',
  CompanyName: 'Acme Digital',
  Designation: 'Operations Director',
  Industry: 'Technology Services',
  PainPoint: 'manual reporting',
  MeetingLink: 'https://kodexter.example.com/meeting',
  ServiceInterest: 'AI automation'
};

const samples = {
  campaignName: 'AI Automation Discovery Campaign',
  senderName: 'Kodexter Growth Team',
  senderIdentity: 'Kodexter Technologies Pvt. Ltd.',
  subjectLine: 'Automate the work slowing your team down',
  preheader: 'See practical AI and automation opportunities for your business.',
  variantA: 'Reduce manual effort with intelligent workflows',
  variantB: 'A practical automation review for your team',
  bannerHeadline: 'Automate Workflows. Accelerate Growth.',
  mainHeading: 'Practical AI automation for growing teams',
  bodyCopy: `Hi Priya,

Many teams at growing companies spend valuable hours on repeated tasks, disconnected tools, and manual reporting.

Kodexter helps businesses identify automation opportunities and build reliable digital workflows that improve speed, accuracy, and customer engagement.`,
  bullets: `Workflow automation planning
AI-enabled business tools
CRM and marketing automation support
Custom dashboards and reporting systems`,
  primaryCta: 'Start an Automation Assessment',
  primaryUrl: 'https://kodexter.example.com/automation-assessment',
  secondaryCta: 'Explore AI Use Cases',
  ctaAlign: 'left',
  bannerImage: 'automation',
  campaignType: 'AI & Automation',
  emailTone: 'consultative',
  emailIndustry: 'technology',
  emailUseCase: 'automation'
};

const defaults = {
  campaignName: 'Digital Growth Assessment',
  senderName: 'Kodexter Growth Team',
  senderIdentity: 'Kodexter Technologies Pvt. Ltd.',
  subjectLine: 'Ready to simplify your business workflows?',
  preheader: 'Explore how Kodexter helps teams build, automate, and grow with scalable technology.',
  variantA: 'Build smarter systems for your business',
  variantB: 'Reduce manual work with practical automation',
  bannerHeadline: 'Turn Manual Workflows Into Scalable Digital Systems',
  mainHeading: 'Build smarter technology foundations for your business',
  bodyCopy: `Hi Priya,

Many growing teams lose time managing disconnected tools, manual workflows, and delayed reporting.

Kodexter helps businesses design and build scalable software systems, automation workflows, and digital platforms that improve speed, visibility, and customer engagement.`,
  bullets: `Custom web and software development
Workflow automation
AI-enabled business tools
Digital marketing and lead engagement systems`,
  primaryCta: 'Book a Consultation',
  primaryUrl: 'https://kodexter.example.com/contact',
  secondaryCta: 'View Our Services',
  ctaAlign: 'left',
  bannerImage: 'lead',
  campaignType: 'Lead Generation',
  emailTone: 'consultative',
  emailIndustry: 'technology',
  emailUseCase: 'automation'
};

const quickBlocks = {
  intro: `Hi Priya,

Many growing teams lose time managing disconnected tools, manual workflows, and delayed reporting.`,
  services: `Kodexter can support your team with custom software development, workflow automation, AI-enabled business tools, and customer engagement systems.`,
  proof: `Our approach focuses on practical technology decisions, clean implementation, and measurable business outcomes for growing teams.`,
  meeting: `If this is a priority for your team, we can schedule a short discovery call and map the next best steps.`
};

const personalizationProfiles = {
  technology: {
    label: 'technology teams',
    pain: 'fragmented tools, manual reporting, and slow handoffs between teams',
    outcome: 'cleaner workflows, better visibility, and faster execution'
  },
  healthcare: {
    label: 'healthcare operations',
    pain: 'manual coordination, scattered patient or team updates, and process delays',
    outcome: 'more reliable workflows, clearer follow-ups, and stronger operational control'
  },
  retail: {
    label: 'retail and commerce teams',
    pain: 'manual campaign work, disconnected customer data, and inconsistent follow-ups',
    outcome: 'better customer engagement, smoother operations, and faster campaign execution'
  },
  finance: {
    label: 'finance teams',
    pain: 'manual checks, disconnected reporting, and limited visibility across processes',
    outcome: 'more accurate workflows, clearer reporting, and stronger process governance'
  },
  education: {
    label: 'education teams',
    pain: 'manual communication, disconnected systems, and repeated administrative work',
    outcome: 'simpler coordination, better learner engagement, and reduced administrative effort'
  },
  manufacturing: {
    label: 'manufacturing teams',
    pain: 'manual tracking, disconnected operational data, and delays across teams',
    outcome: 'improved visibility, faster coordination, and more dependable operations'
  }
};

const useCaseProfiles = {
  automation: {
    focus: 'workflow automation',
    service: 'identify repeatable tasks, connect tools, and build practical automation systems',
    cta: 'map the highest-impact automation opportunities'
  },
  lead: {
    focus: 'lead generation',
    service: 'improve landing journeys, follow-up flows, and lead engagement systems',
    cta: 'review where better systems can improve conversion'
  },
  launch: {
    focus: 'product launch',
    service: 'prepare campaign assets, launch workflows, and customer communication systems',
    cta: 'plan a cleaner path from launch activity to measurable follow-up'
  },
  reengagement: {
    focus: 'customer re-engagement',
    service: 'segment audiences, personalize outreach, and automate timely follow-ups',
    cta: 'identify re-engagement moments worth acting on now'
  }
};

const toneOpeners = {
  consultative: 'Many',
  executive: 'For leadership teams at',
  concise: 'At',
  warm: 'Teams at'
};

const languageClosings = {
  English: 'Best regards',
  Hindi: 'Regards',
  Spanish: 'Saludos',
  French: 'Cordialement',
  German: 'Mit freundlichen Grussen'
};

let lastEditable = null;
let gmailTokenClient = null;
let gmailAccessToken = '';
let gmailClientId = '';
let scheduledSendTimer = null;
let pendingGmailAction = null;
let selectedReplyDraft = 0;
let replyDraftOptions = [];

function parseEnvValue(envText, key) {
  const pattern = new RegExp(`^\\s*${key}\\s*=\\s*(.+?)\\s*$`, 'm');
  const match = envText.match(pattern);

  if (!match) {
    return '';
  }

  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

function isLikelyGoogleClientId(clientId) {
  return /^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(clientId);
}

function value(id) {
  return document.getElementById(id).value.trim();
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function personalize(text) {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => previewContact[key] || match);
}

function displayValue(id) {
  return personalize(value(id));
}

function parseEmailList(text) {
  return text
    .split(/[\n,;]+/)
    .map((email) => email.trim())
    .filter(Boolean);
}

function invalidEmails(emails) {
  return emails.filter((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}

function validateGmailInputs() {
  const recipients = parseEmailList(value('gmailTo'));
  const badRecipients = invalidEmails(recipients);
  const badReplyTo = invalidEmails(parseEmailList(value('gmailReplyTo')));

  if (!recipients.length) {
    setGmailStatus('Add recipient email', 'error');
    return false;
  }

  if (badRecipients.length || badReplyTo.length) {
    setGmailStatus(`Check email address: ${badRecipients[0] || badReplyTo[0]}`, 'error');
    return false;
  }

  return true;
}

function optimizeBodyCopy() {
  const industry = personalizationProfiles[value('emailIndustry')] || personalizationProfiles.technology;
  const useCase = useCaseProfiles[value('emailUseCase')] || useCaseProfiles.automation;
  const tone = value('emailTone');
  const opener = toneOpeners[tone] || toneOpeners.consultative;
  const companyReference = tone === 'concise' ? '{{CompanyName}}' : `{{CompanyName}} in ${industry.label}`;
  const proofLine = tone === 'executive'
    ? `Kodexter helps leadership teams prioritize ${useCase.focus} initiatives that connect directly to efficiency, visibility, and growth.`
    : `Kodexter helps businesses ${useCase.service} so teams can move with more clarity and less manual effort.`;
  const closingLine = tone === 'warm'
    ? `If this feels relevant, we would be happy to share a practical starting point and ${useCase.cta}.`
    : `If this is a priority, we can ${useCase.cta} for your team.`;

  document.getElementById('bodyCopy').value = `Hi {{FirstName}},

${opener} ${companyReference} are working through ${industry.pain}.

${proofLine}

The goal is simple: ${industry.outcome}.

${closingLine}`;

  document.getElementById('bullets').value = [
    `${useCase.focus[0].toUpperCase()}${useCase.focus.slice(1)} planning`,
    'Process and system gap review',
    'Automation-ready workflow recommendations',
    'Clear next steps for implementation'
  ].join('\n');

  render();
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
  const actions = [];

  if (analysis.intent === 'Meeting request') {
    actions.push('Schedule meeting');
    actions.push('Assign sales owner');
    actions.push('Create CRM opportunity');
  } else if (analysis.intent === 'Pricing / proposal') {
    actions.push('Share pricing');
    actions.push('Create CRM opportunity');
    actions.push('Prepare proposal or SOW draft');
  } else if (analysis.intent === 'Technical evaluation') {
    actions.push('Send architecture deck');
    actions.push('Escalate to presales/support');
    actions.push('Share relevant knowledge-base notes');
  } else if (analysis.intent === 'Support need') {
    actions.push('Escalate to presales/support');
    actions.push('Assign support owner');
    actions.push('Summarize issue for ticket creation');
  } else if (analysis.intent === 'Opt-out / not interested') {
    actions.push('Mark preference in CRM');
    actions.push('Pause follow-up sequence');
  } else {
    actions.push('Send contextual follow-up');
    actions.push('Log interaction in CRM');
  }

  if (analysis.urgency === 'High') {
    actions.unshift('Prioritize same-day response');
  }

  return actions;
}

function buildReplyDrafts(analysis, actions) {
  const style = value('replyStyle');
  const language = value('replyLanguage');
  const customerContext = value('customerContext') || `${previewContact.CompanyName}, ${previewContact.Designation}`;
  const threadContext = value('threadContext') || value('bodyCopy');
  const serviceFocus = value('campaignType');
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

Given your interest around ${serviceFocus}, I can ${nextAction.toLowerCase()} and tailor it to your current priorities.

Context I am using: ${customerContext}

${closing},
${value('senderName')}`
    },
    {
      title: 'Concise follow-up',
      confidence: Math.max(50, analysis.score - 8),
      text: `Hi {{FirstName}},

Thanks for the reply. I reviewed your note and the best next step is to ${nextAction.toLowerCase()}.

I can also include the relevant background from our campaign and previous context so the response stays specific to your team.

${closing},
${value('senderName')}`
    },
    {
      title: 'Context-rich response',
      confidence: Math.max(50, analysis.score - 4),
      text: `Hi {{FirstName}},

Thanks for sharing this. Here is how I understand the conversation so far: you are responding to ${value('campaignName')} and the current intent appears to be ${analysis.intent.toLowerCase()}.

Based on the thread and available context, I recommend we ${nextAction.toLowerCase()}. We can also reference the relevant service details, proposal notes, architecture inputs, or pricing context as needed.

Reference context: ${threadContext.slice(0, 240)}

${closing},
${value('senderName')}`
    }
  ];
}

function logAssistantEvent(type, payload = {}) {
  const logs = JSON.parse(localStorage.getItem('responseCenterAuditLog') || '[]');
  logs.push({
    type,
    payload,
    createdAt: new Date().toISOString()
  });
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
}

function analyzeIncomingReply() {
  const reply = value('incomingReply');
  const threshold = Number(value('replyConfidence')) || 80;

  if (!reply) {
    document.getElementById('replyAssistantStatus').textContent = 'Paste a client reply first';
    document.getElementById('replyAssistantStatus').dataset.type = 'error';
    return;
  }

  const analysis = analyzeReplyText(reply);
  const actions = buildNextActions(analysis);
  replyDraftOptions = buildReplyDrafts(analysis, actions);
  selectedReplyDraft = 0;

  document.getElementById('replyIntent').textContent = analysis.intent;
  document.getElementById('replyIntentDetail').textContent = `Campaign context: ${value('campaignType')}`;
  document.getElementById('replySentiment').textContent = analysis.sentiment;
  document.getElementById('replySentimentDetail').textContent = `${analysis.sentiment} tone detected from reply language.`;
  document.getElementById('replyUrgency').textContent = analysis.urgency;
  document.getElementById('replyUrgencyDetail').textContent = analysis.urgency === 'High' ? 'Respond quickly or escalate.' : 'Standard follow-up cadence.';
  document.getElementById('replyScore').textContent = `${analysis.score}%`;
  document.getElementById('replyScoreDetail').textContent = analysis.score >= threshold ? 'Above auto-suggest threshold.' : 'Human review recommended.';
  document.getElementById('replySummary').textContent = `The client reply is classified as ${analysis.intent.toLowerCase()} with ${analysis.sentiment.toLowerCase()} sentiment and ${analysis.urgency.toLowerCase()} urgency. Use campaign content, thread history, CRM context, and knowledge notes before approving a response.`;
  document.getElementById('replyActions').innerHTML = actions.map((action) => `<li>${escapeHtml(action)}</li>`).join('');

  renderReplyDrafts();

  const lowRisk = analysis.intent === 'Acknowledgement' && analysis.score >= threshold && document.getElementById('autoReplyLowRisk').checked;
  document.getElementById('replyAssistantStatus').textContent = lowRisk ? 'Low-risk auto-response eligible' : 'Drafts ready for approval';
  document.getElementById('replyAssistantStatus').dataset.type = lowRisk ? 'success' : '';
  logAssistantEvent('analysis_generated', { analysis, actions });
}

async function copySelectedReplyDraft() {
  const draft = replyDraftOptions[selectedReplyDraft];

  if (!draft) {
    document.getElementById('replyAssistantStatus').textContent = 'Generate drafts first';
    document.getElementById('replyAssistantStatus').dataset.type = 'error';
    return;
  }

  await navigator.clipboard.writeText(personalize(draft.text));
  document.getElementById('replyAssistantStatus').textContent = 'Selected draft copied';
  document.getElementById('replyAssistantStatus').dataset.type = 'success';
}

function approveSelectedReplyDraft() {
  const draft = replyDraftOptions[selectedReplyDraft];

  if (!draft) {
    document.getElementById('replyAssistantStatus').textContent = 'Generate drafts first';
    document.getElementById('replyAssistantStatus').dataset.type = 'error';
    return;
  }

  logAssistantEvent('draft_approved', { title: draft.title, confidence: draft.confidence });
  document.getElementById('replyAssistantStatus').textContent = 'Draft approved and logged';
  document.getElementById('replyAssistantStatus').dataset.type = 'success';
}

function formatParagraphs(text) {
  return escapeHtml(personalize(text))
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replaceAll('\n', '<br>')}</p>`)
    .join('');
}

function formatBullets(text) {
  const items = text
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

  if (!items.length) {
    return '';
  }

  return `<ul>${items.map((item) => `<li>${escapeHtml(personalize(item))}</li>`).join('')}</ul>`;
}

function formatEmailParagraphs(text) {
  return escapeHtml(personalize(text))
    .split(/\n{2,}/)
    .map((paragraph) => `<p style="margin:0 0 14px;color:#344054;font-size:15px;line-height:1.65;">${paragraph.replaceAll('\n', '<br>')}</p>`)
    .join('');
}

function formatEmailBullets(text) {
  const items = text
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

  if (!items.length) {
    return '';
  }

  return `<ul style="margin:12px 0 0;padding-left:20px;color:#344054;font-size:15px;line-height:1.65;">${items
    .map((item) => `<li style="margin:0 0 6px;">${escapeHtml(personalize(item))}</li>`)
    .join('')}</ul>`;
}

function buildEmailHtml(options = {}) {
  const align = value('ctaAlign');
  const preset = bannerPresets[value('bannerImage')] || bannerPresets.lead;
  const logoSrc = options.absoluteAssets
    ? new URL('assets/kodexter-logo-official.png', window.location.href).href
    : 'assets/kodexter-logo-official.png';

  return `
    <article class="email-card">
      <header class="email-header">
        <img class="email-logo-img" src="${escapeHtml(logoSrc)}" alt="Kodexter Technologies Pvt. Ltd. official logo" onerror="this.remove()">
        <div class="email-meta">
          <strong>${escapeHtml(value('campaignName'))}</strong><br>
          ${escapeHtml(value('senderName'))}<br>
          ${escapeHtml(value('senderIdentity'))}
        </div>
      </header>
      <section class="email-banner human-banner" style="--banner-image: url('${preset.image}')">
        <div class="email-banner-copy">
          <span>${escapeHtml(value('campaignType'))}</span>
          <h4>${escapeHtml(value('bannerHeadline'))}</h4>
          <p>${escapeHtml(displayValue('preheader'))}</p>
        </div>
      </section>
      <section class="email-body">
        <h4>${escapeHtml(displayValue('mainHeading'))}</h4>
        ${formatParagraphs(value('bodyCopy'))}
        ${formatBullets(value('bullets'))}
        <div class="email-cta ${align}">
          <a class="email-button" href="${escapeHtml(value('primaryUrl'))}">${escapeHtml(value('primaryCta'))}</a>
          <a class="email-secondary" href="${escapeHtml(value('primaryUrl'))}">${escapeHtml(value('secondaryCta'))}</a>
        </div>
      </section>
      <footer class="email-footer">
        Kodexter Technologies Pvt. Ltd. | You are receiving this email because you connected with Kodexter.
      </footer>
    </article>
  `;
}

function buildExportHtml(options = {}) {
  const preset = bannerPresets[value('bannerImage')] || bannerPresets.lead;
  const logoSrc = options.logoSrc || new URL('assets/kodexter-logo-official.png', window.location.href).href;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(value('campaignName'))}</title>
  </head>
  <body style="margin:0;padding:0;background:#f1fbf7;color:#344054;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0;">${escapeHtml(displayValue('preheader'))}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1fbf7;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #cde9dc;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:18px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left" valign="middle" style="width:190px;">
                      <img src="${escapeHtml(logoSrc)}" width="160" alt="Kodexter Technologies Pvt. Ltd." style="display:block;width:160px;max-width:160px;height:auto;border:0;outline:none;text-decoration:none;">
                    </td>
                    <td align="right" valign="middle" style="font-size:12px;color:#66758a;line-height:1.45;">
                      <strong style="color:#344054;">${escapeHtml(value('campaignName'))}</strong><br>
                      ${escapeHtml(value('senderName'))}<br>
                      ${escapeHtml(value('senderIdentity'))}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img src="${escapeHtml(preset.image)}" width="640" alt="" style="display:block;width:100%;max-width:640px;height:auto;border:0;">
              </td>
            </tr>
            <tr>
              <td style="padding:24px 22px;background:#111426;color:#ffffff;">
                <p style="margin:0 0 8px;color:#d8fff0;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:0;">${escapeHtml(value('campaignType'))}</p>
                <h1 style="margin:0 0 8px;color:#ffffff;font-size:25px;line-height:1.18;">${escapeHtml(value('bannerHeadline'))}</h1>
                <p style="margin:0;color:#d7dee8;font-size:15px;line-height:1.55;">${escapeHtml(displayValue('preheader'))}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 22px;">
                <h2 style="margin:0 0 14px;color:#111426;font-size:22px;line-height:1.25;">${escapeHtml(displayValue('mainHeading'))}</h2>
                ${formatEmailParagraphs(value('bodyCopy'))}
                ${formatEmailBullets(value('bullets'))}
                <p style="margin:24px 0 0;">
                  <a href="${escapeHtml(value('primaryUrl'))}" style="display:inline-block;background:#00c781;color:#ffffff;text-decoration:none;padding:13px 18px;border-radius:6px;font-weight:bold;">${escapeHtml(value('primaryCta'))}</a>
                  <a href="${escapeHtml(value('primaryUrl'))}" style="display:inline-block;margin-left:12px;color:#008f5d;text-decoration:none;font-weight:bold;">${escapeHtml(value('secondaryCta'))}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 22px;border-top:1px solid #d6ede3;color:#66758a;font-size:12px;line-height:1.5;">
                Kodexter Technologies Pvt. Ltd. | You are receiving this email because you connected with Kodexter.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function setGmailStatus(message, type = '') {
  const status = document.getElementById('gmailStatus');
  status.textContent = message;
  status.dataset.type = type;
}

async function loadEnvConfig(options = {}) {
  try {
    const response = await fetch('.env', { cache: 'no-store' });

    if (!response.ok) {
      setGmailStatus('Gmail config missing', 'error');
      return false;
    }

    const envText = await response.text();
    const nextClientId = parseEnvValue(envText, 'GMAIL_CLIENT_ID');

    if (!nextClientId) {
      setGmailStatus('Gmail config missing', 'error');
      return false;
    }

    if (!isLikelyGoogleClientId(nextClientId)) {
      setGmailStatus('Gmail client ID format looks wrong', 'error');
      return false;
    }

    if (nextClientId !== gmailClientId) {
      gmailClientId = nextClientId;
      gmailTokenClient = null;
      gmailAccessToken = '';
    }

    if (!options.silent) {
      setGmailStatus('Gmail ready');
    }

    return true;
  } catch (error) {
    console.error(error);
    setGmailStatus('Gmail config unavailable', 'error');
    return false;
  }
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

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

function wrapBase64(text) {
  return text.match(/.{1,76}/g)?.join('\r\n') || text;
}

async function loadInlineLogo() {
  const response = await fetch('assets/kodexter-logo-official.png', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Logo asset unavailable');
  }

  return arrayBufferToBase64(await response.arrayBuffer());
}

async function buildMimeMessage() {
  const recipients = parseEmailList(value('gmailTo'));
  const replyTo = parseEmailList(value('gmailReplyTo'));
  const subject = value('subjectLine') || value('campaignName');
  const boundary = `kodexter_related_${Date.now()}`;
  const logoContentId = 'kodexter-logo-official';
  const html = buildExportHtml({ logoSrc: `cid:${logoContentId}` });
  const logoBase64 = await loadInlineLogo();
  const headers = [
    `To: ${recipients.join(', ')}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/related; boundary="${boundary}"`
  ];

  if (replyTo.length) {
    headers.splice(2, 0, `Reply-To: ${replyTo.join(', ')}`);
  }

  return `${headers.join('\r\n')}\r\n\r\n` +
    `--${boundary}\r\n` +
    'Content-Type: text/html; charset=UTF-8\r\n\r\n' +
    `${html}\r\n\r\n` +
    `--${boundary}\r\n` +
    'Content-Type: image/png; name="kodexter-logo-official.png"\r\n' +
    'Content-Transfer-Encoding: base64\r\n' +
    `Content-ID: <${logoContentId}>\r\n` +
    'Content-Disposition: inline; filename="kodexter-logo-official.png"\r\n\r\n' +
    `${wrapBase64(logoBase64)}\r\n` +
    `--${boundary}--`;
}

function initGmailClient() {
  if (!gmailClientId) {
    setGmailStatus('Gmail config missing', 'error');
    return false;
  }

  if (!window.google?.accounts?.oauth2) {
    setGmailStatus('Google library still loading', 'error');
    return false;
  }

  gmailTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: gmailClientId,
    scope: 'https://www.googleapis.com/auth/gmail.send',
    callback: (response) => {
      if (response.error) {
        if (response.error === 'invalid_client') {
          setGmailStatus('Invalid Gmail client ID. Use a Web application OAuth client.', 'error');
          return;
        }

        setGmailStatus(response.error, 'error');
        return;
      }

      gmailAccessToken = response.access_token;
      setGmailStatus('Gmail connected', 'success');

      if (pendingGmailAction === 'send') {
        pendingGmailAction = null;
        sendWithGmail().catch((error) => {
          console.error(error);
          setGmailStatus('Send failed', 'error');
        });
      }

      if (pendingGmailAction === 'schedule') {
        pendingGmailAction = null;
        scheduleGmailSend();
      }
    }
  });

  return true;
}

async function requestGmailAccess() {
  const configLoaded = await loadEnvConfig({ silent: Boolean(gmailClientId) });

  if (!configLoaded) {
    return false;
  }

  if (!gmailTokenClient && !initGmailClient()) {
    return false;
  }

  setGmailStatus('Opening Google sign-in');
  gmailTokenClient.requestAccessToken({ prompt: gmailAccessToken ? '' : 'consent' });
  return true;
}

async function sendWithGmail() {
  if (!validateGmailInputs()) {
    return;
  }

  if (!gmailAccessToken) {
    pendingGmailAction = 'send';
    setGmailStatus('Connect Gmail to send', 'error');
    requestGmailAccess();
    return;
  }

  setGmailStatus('Sending...', '');

  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${gmailAccessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      raw: encodeBase64Url(await buildMimeMessage())
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    setGmailStatus(`Send failed: ${response.status}`, 'error');
    console.error(errorText);
    return;
  }

  setGmailStatus('Sent with Gmail', 'success');
}

function scheduleGmailSend() {
  const scheduleInput = document.getElementById('gmailScheduleAt');
  const scheduledAt = new Date(scheduleInput.value);
  const delay = scheduledAt.getTime() - Date.now();

  if (!validateGmailInputs()) {
    return;
  }

  if (!scheduleInput.value || Number.isNaN(scheduledAt.getTime())) {
    setGmailStatus('Choose schedule time', 'error');
    return;
  }

  if (delay <= 0) {
    setGmailStatus('Choose a future time', 'error');
    return;
  }

  if (!gmailAccessToken) {
    pendingGmailAction = 'schedule';
    setGmailStatus('Connect Gmail to finish scheduling', 'error');
    requestGmailAccess();
    return;
  }

  if (scheduledSendTimer) {
    clearTimeout(scheduledSendTimer);
  }

  scheduledSendTimer = setTimeout(() => {
    scheduledSendTimer = null;
    document.getElementById('cancelSchedule').hidden = true;
    setGmailStatus('Scheduled send starting...');
    sendWithGmail().catch((error) => {
      console.error(error);
      setGmailStatus('Scheduled send failed', 'error');
    });
  }, delay);

  document.getElementById('cancelSchedule').hidden = false;
  setGmailStatus(`Scheduled for ${scheduledAt.toLocaleString()}`, 'success');
}

function cancelScheduledSend() {
  if (!scheduledSendTimer) {
    return;
  }

  clearTimeout(scheduledSendTimer);
  scheduledSendTimer = null;
  document.getElementById('cancelSchedule').hidden = true;
  setGmailStatus('Schedule cancelled');
}

function localDateTimeValue(date) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 16);
}

function reviewEmail() {
  const body = `${value('subjectLine')} ${value('preheader')} ${value('bodyCopy')} ${value('primaryCta')}`;
  const review = [];
  let clarity = 94;
  let brand = 90;
  let cta = 90;

  if (value('subjectLine').length > 70) {
    review.push('Subject line is long. Consider keeping it under 60-70 characters for mobile inboxes.');
    clarity -= 8;
  }

  if (!body.includes('{{FirstName}}') && !body.includes('{{CompanyName}}')) {
    review.push('Add at least one personalization token to make the message feel more relevant.');
    brand -= 8;
  }

  if (value('bodyCopy').split(/\s+/).length > 130) {
    review.push('Body copy is getting long. Consider shortening paragraphs or moving details into bullets.');
    clarity -= 7;
  }

  if (!/book|schedule|start|get|explore|register|download|discuss/i.test(value('primaryCta'))) {
    review.push('CTA could be more action-oriented. Use verbs like Book, Start, Explore, Register, or Download.');
    cta -= 10;
  }

  if (/best|guaranteed|revolutionary|world[- ]class/i.test(body)) {
    review.push('Avoid generic superlatives. Replace them with specific business outcomes or proof.');
    brand -= 9;
  }

  if (!review.length) {
    review.push('Copy is clear, professional, and aligned with a B2B technology tone.');
    review.push('CTA is direct and suitable for conversion-focused campaigns.');
  }

  document.getElementById('clarityScore').textContent = Math.max(0, clarity);
  document.getElementById('brandScore').textContent = Math.max(0, brand);
  document.getElementById('ctaScore').textContent = Math.max(0, cta);
  document.getElementById('reviewMetric').textContent = `${Math.round((clarity + brand + cta) / 3)}%`;
  document.getElementById('subjectMetric').textContent = value('subjectLine').length > 70 ? 'Long' : 'Ready';
  document.getElementById('contentMetric').textContent = value('bodyCopy').split(/\s+/).length > 130 ? 'Dense' : 'B2B';
  document.getElementById('reviewList').innerHTML = review
    .slice(0, 2)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

function renderSuggestions() {
  const type = value('campaignType');
  const suggestions = subjectSuggestions[type] || subjectSuggestions['Lead Generation'];
  document.getElementById('subjectSuggestions').innerHTML = suggestions
    .map((suggestion) => `<button type="button" data-subject="${escapeHtml(suggestion)}">${escapeHtml(personalize(suggestion))}</button>`)
    .join('');
}

function renderBannerOptions() {
  const active = value('bannerImage');
  document.getElementById('bannerOptions').innerHTML = Object.entries(bannerPresets)
    .map(([key, preset]) => {
      const selected = key === active ? ' is-active' : '';
      return `<button class="banner-option${selected}" type="button" data-banner="${key}">${escapeHtml(preset.label)}</button>`;
    })
    .join('');
}

function render() {
  renderBannerOptions();
  renderSuggestions();
  document.getElementById('emailPreview').innerHTML = buildEmailHtml();
  reviewEmail();
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
      lastEditable = field;
      render();
    });
  });
}

fields.forEach((id) => {
  const element = document.getElementById(id);
  element.addEventListener('input', render);
  if (['INPUT', 'TEXTAREA'].includes(element.tagName)) {
    element.addEventListener('focus', () => {
      lastEditable = element;
    });
  }
});

document.querySelectorAll('.nav-list a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-list a').forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.scrollTarget).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('[data-block]').forEach((button) => {
  button.addEventListener('click', () => {
    const current = value('bodyCopy');
    const nextBlock = quickBlocks[button.dataset.block];
    document.getElementById('bodyCopy').value = current ? `${current}\n\n${nextBlock}` : nextBlock;
    document.getElementById('bodyCopy').focus();
    lastEditable = document.getElementById('bodyCopy');
    render();
  });
});

document.getElementById('newCampaign').addEventListener('click', () => {
  Object.entries(defaults).forEach(([id, nextValue]) => {
    document.getElementById(id).value = nextValue;
  });
  document.getElementById('campaign').scrollIntoView({ behavior: 'smooth', block: 'start' });
  render();
});

document.getElementById('clearResetToggle').addEventListener('click', (event) => {
  const button = event.currentTarget;

  if (button.dataset.mode === 'clear') {
    document.querySelectorAll('input, textarea').forEach((field) => {
      field.value = '';
    });
    document.getElementById('campaignType').value = 'Lead Generation';
    document.getElementById('bannerImage').value = 'lead';
    document.getElementById('ctaAlign').value = 'left';
    document.getElementById('emailTone').value = 'consultative';
    document.getElementById('emailIndustry').value = 'technology';
    document.getElementById('emailUseCase').value = 'automation';
    button.dataset.mode = 'reset';
    button.textContent = 'Reset';
    button.classList.remove('danger');
  } else {
    Object.entries(defaults).forEach(([id, nextValue]) => {
      document.getElementById(id).value = nextValue;
    });
    button.dataset.mode = 'clear';
    button.textContent = 'Clear';
    button.classList.add('danger');
  }

  render();
});

document.getElementById('desktopPreview').addEventListener('click', () => {
  document.getElementById('emailPreview').classList.remove('mobile-mode');
  document.getElementById('desktopPreview').classList.add('is-active');
  document.getElementById('mobilePreview').classList.remove('is-active');
});

document.getElementById('mobilePreview').addEventListener('click', () => {
  document.getElementById('emailPreview').classList.add('mobile-mode');
  document.getElementById('mobilePreview').classList.add('is-active');
  document.getElementById('desktopPreview').classList.remove('is-active');
});

document.getElementById('scrollTopButton').addEventListener('click', () => {
  document.querySelector('.scroll-workarea').scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('bannerOptions').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-banner]');
  if (!button) {
    return;
  }

  const key = button.dataset.banner;
  const preset = bannerPresets[key];
  document.getElementById('bannerImage').value = key;
  document.getElementById('campaignType').value = preset.type;
  document.getElementById('bannerHeadline').value = preset.headline;
  document.getElementById('mainHeading').value = preset.heading;
  document.getElementById('primaryCta').value = preset.cta;
  render();
});

document.getElementById('campaignType').addEventListener('change', () => {
  const match = Object.entries(bannerPresets).find(([, preset]) => preset.type === value('campaignType'));
  if (match) {
    document.getElementById('bannerImage').value = match[0];
  }
  render();
});

document.getElementById('subjectSuggestions').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-subject]');
  if (!button) {
    return;
  }
  document.getElementById('subjectLine').value = button.dataset.subject;
  render();
});

document.querySelectorAll('[data-token]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
      ? document.activeElement
      : lastEditable || document.getElementById('bodyCopy');
    if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) {
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const token = button.dataset.token;
      target.value = `${target.value.slice(0, start)}${token}${target.value.slice(end)}`;
      target.focus();
      target.selectionStart = target.selectionEnd = start + token.length;
      render();
    }
  });
});

document.getElementById('loadSample').addEventListener('click', () => {
  Object.entries(samples).forEach(([id, nextValue]) => {
    document.getElementById(id).value = nextValue;
  });
  render();
});

document.getElementById('copyHtml').addEventListener('click', async () => {
  const html = buildExportHtml();
  await navigator.clipboard.writeText(html);
  document.getElementById('copyHtml').textContent = 'Copied';
  setTimeout(() => {
    document.getElementById('copyHtml').textContent = 'Copy HTML';
  }, 1200);
});

document.getElementById('optimizeBody').addEventListener('click', optimizeBodyCopy);

document.getElementById('connectGmail').addEventListener('click', requestGmailAccess);

document.getElementById('sendGmail').addEventListener('click', () => {
  sendWithGmail().catch((error) => {
    console.error(error);
    setGmailStatus('Send failed', 'error');
  });
});

document.getElementById('scheduleGmail').addEventListener('click', scheduleGmailSend);
document.getElementById('cancelSchedule').addEventListener('click', cancelScheduledSend);

document.getElementById('gmailScheduleAt').min = localDateTimeValue(new Date(Date.now() + 60000));
document.getElementById('gmailScheduleAt').addEventListener('focus', () => {
  document.getElementById('gmailScheduleAt').min = localDateTimeValue(new Date(Date.now() + 60000));
});

addClearButtons();
render();
loadEnvConfig();
