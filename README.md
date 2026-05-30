# Pryvax Emailer Tool

Professional email template creation system for Pryvax Ltd.

This project includes a strategy specification, a static working prototype, starter email templates, correction-engine prompts, banner concept data, and an implementation roadmap.

## Run The Prototype

Open `index.html` directly in a browser, or run a local server:

```powershell
cd C:\email-tool
python -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

## Gmail OAuth Setup

The Gmail send panel needs a Google OAuth client ID that was created as a **Web application** client.

1. Open Google Cloud Console and select the project that has the Gmail API enabled.
2. Go to **APIs & Services > Credentials > Create credentials > OAuth client ID**.
3. Choose **Web application** as the application type.
4. Add this Authorized JavaScript origin:

```text
http://localhost:5173
https://YOUR-VERCEL-DOMAIN.vercel.app
```

5. Copy the generated client ID into `config.js` for deployed static hosting:

```js
window.EMAIL_TOOL_CONFIG = {
  GMAIL_CLIENT_ID: 'YOUR_WEB_APPLICATION_CLIENT_ID.apps.googleusercontent.com'
};
```

For local-only testing, `.env` is also supported as a fallback:

```text
GMAIL_CLIENT_ID=YOUR_WEB_APPLICATION_CLIENT_ID.apps.googleusercontent.com
```

`Error 401: invalid_client` means Google rejected the client ID itself. Replace `.env` with the Web application client ID from the same Google Cloud project; do not use a Desktop, Android, iOS, service account, API key, or client secret value.

## Files

- `index.html` - Static Emailer Tool prototype.
- `src/styles.css` - Pryvax-aligned UI styling.
- `src/app.js` - Builder interactions, live preview, suggestions, and rule-based review checks.
- `data/banner-concepts.json` - Structured banner design concepts.
- `templates/pryvax-base-email.html` - Starter email-safe HTML template.
- `templates/pryvax-email.mjml` - Starter MJML template.
- `prompts/correction-engine.md` - AI correction and brand review prompt framework.
- `docs/pryvax-emailer-tool-strategy.md` - Full brand, UX, marketing, and product specification.
- `docs/implementation-roadmap.md` - Suggested build phases.

## Purpose

The Emailer Tool is intended to help marketing teams create high-quality branded email templates for campaigns, announcements, lead nurturing, product promotions, onboarding, and customer engagement.
