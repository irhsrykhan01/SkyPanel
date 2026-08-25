# SkyPanel UI/UX Blueprint

## Design Direction

SkyPanel uses a clean, premium, modern SaaS aesthetic with subtle glass accents, compact spacing, strong typography, and restrained color usage. The interface should feel like a dedicated infrastructure control center rather than a reskinned generic hosting panel.

## Core Navigation

- Dashboard
- Servers
  - Server List
  - Server Detail
    - Overview
    - Console
    - Files
    - Resources
    - Settings
- Activity
- Settings

## Dashboard

The dashboard is a command center for infrastructure. It must not display fabricated server names, resource numbers, console logs, activity, or other dummy operational data.

When no real data exists, use intentional empty states such as:

- No servers yet
- No active resources
- No activity yet
- No data available

## Server List

Each real server can be represented by a compact card containing:

- Server name
- Runtime/type
- Current state
- CPU/RAM information when available
- Console action
- Manage action

The empty state should encourage creation of the first server without inventing a sample server.

## Server Detail

The server detail page is the operational center. Its header contains the server identity, current state, and context-aware power controls.

Tabs:

1. Overview
2. Console
3. Files
4. Resources
5. Settings

### Overview

Show server status, address, runtime, creation information, location, and other real metadata. Missing values should use neutral empty states rather than fabricated values.

### Console

Use a professional terminal-style interface with:

- Live output area
- Clear control
- Command input
- Send control

When no backend is connected, the console should be an empty state rather than fake logs.

### Files

Use a file-manager layout inspired by modern developer tools:

- Breadcrumb path
- Upload
- New folder
- New file
- File/folder list
- Context actions

Empty directories should use a clear folder empty state.

### Resources

Display CPU, memory, disk, and network information only when real telemetry is available. Before that, show empty/loading states instead of fake charts or numbers.

### Settings

Keep server configuration separate from operational controls. Use clear sections and confirmation states for destructive actions.

## State System

Every major component should support four states:

- Loading
- Empty
- Active
- Error

This is important because the frontend will eventually be connected to a real API and infrastructure engine without requiring a visual redesign.

## Visual System

Suggested palette:

- Background: `#F6F8FC`
- Surface: `#FFFFFF`
- Primary: `#172033`
- Text: `#172033`
- Muted: `#8B94A5`
- Border: `#E7EBF2`
- Success: `#31A96B`
- Warning: `#D89B32`
- Danger: `#D85A5A`
- Accent: restrained blue

Use rounded cards, subtle borders, minimal shadows, and short transitions. Avoid excessive blur, gradients, or decorative effects.

## Responsive Design

The experience must be mobile-first friendly:

- Desktop sidebar becomes a mobile drawer
- Server cards collapse to one column
- Metrics stack cleanly
- Console remains horizontally usable
- File manager remains readable on narrow screens

## Data Rule

**No dummy operational data.** UI prototypes must use real data when connected, and meaningful empty/loading/error states when data is unavailable.
