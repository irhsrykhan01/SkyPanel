# SkyPanel

SkyPanel is a custom infrastructure control panel with one web UI and a shared backend core. A WhatsApp management bot is being built against the same core so web and bot can use the same server-management logic.

## Current structure

```text
SkyPanel/
├── index.html
├── style.css
├── script.js
├── package.json
├── .env.example
├── .gitignore
├── DESIGN.md
└── backend/
    ├── server.js
    ├── core/
    │   └── panel-core.js
    └── bot/
        └── whatsapp.js
```

## Web

The frontend remains a three-file UI:

- `index.html` — login and panel views
- `style.css` — all web styling
- `script.js` — all frontend interaction

There is intentionally no fabricated operational data.

## Core

`backend/core/panel-core.js` is the shared interface that the web API and the WhatsApp bot will use. The server engine is not connected yet, so server actions currently return an explicit `ENGINE_NOT_CONNECTED` state.

## WhatsApp bot

The WhatsApp connector uses Baileys. The session directory is intentionally excluded from Git through `.gitignore`. The connection can be enabled with:

```env
SKYPANEL_START_WHATSAPP=true
```

Keep the session path outside version control. Never commit WhatsApp credentials or session keys.

## Next backend phases

1. Authentication for the `owner` account with a hashed password.
2. Session/cookie handling for the web panel.
3. Owner-only WhatsApp command router.
4. Real server-engine adapter.
5. WebSocket console and file management.
