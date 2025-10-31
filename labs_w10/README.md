# Week 10 — Broken Accessibility Demo (Lab)

This starter page intentionally includes **common WCAG issues** so you can practice auditing and fixing them.

## Files
- `index.html` — broken page
- `styles.css` — styles that cause accessibility issues
- `script.js` — JS that creates traps / auto-advance
- `README.md` — this guide
- `index_fixed.html`, `styles_fixed.css` — reference fixed versions (optional)

## Your Tasks
1. Open `index.html` in Chrome.
2. Run **Lighthouse (Mobile)** accessibility audit and **axe DevTools**.
3. Do **manual tests**:
   - Keyboard only (`Tab`, `Shift+Tab`, `Enter`, `Space`)
   - Screen reader (VoiceOver/NVDA)
   - Pinch-to-zoom on mobile
4. Fix **at least 3 issues** (more encouraged).
5. Re-run audits; aim for **≥90 Accessibility**.
6. Submit: before/after screenshots, audit reports, and fixed files.

## Intentional Issues (Find + Fix)
- **Zoom disabled** (`user-scalable=no` in `<meta viewport>`)
- **Bad heading order** (starts at `<h3>`)
- **Low contrast text** (`.muted` class)
- **Non-semantic controls** (e.g., `.cta` div as button, `.submit-like` span)
- **Color-only meaning** (green “OK” without icon/text)
- **Vague link text** (“Click here”)
- **Image without `alt`**
- **Tiny tap targets** in nav
- **Form fields with no `<label>`**; wrong `type` (should be email/tel/password)
- **Useless error message** (“Invalid”)
- **Focus outline removed** globally (`:focus { outline: none }`)
- **Keyboard trap** in modal (can’t ESC, no focus trap, no return focus)
- **Auto-advancing carousel** without controls or pause

## Fix Hints
- Allow zoom: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Heading: start with `<h1>`, use proper hierarchy
- Contrast: darken text or lighten background; test with Lighthouse/axe
- Controls: replace `<div>`/`<span>` with `<button>` or add proper roles/keyboard handlers
- Color meaning: add icons or text (e.g., ✓ OK / ✕ Error)
- Links: use descriptive text (e.g., “Create account”)
- Image: `alt="Scenic placeholder image"` (or empty alt if decorative)
- Labels: add `<label for>` and correct `type` + `autocomplete`
- Focus: **never** remove outlines; design visible focus states
- Modal: trap focus, close on `Esc`, restore focus to trigger, hide background from AT
- Carousel: provide Play/Pause and previous/next controls; stop auto-advance

Good luck! Document every change you make.
