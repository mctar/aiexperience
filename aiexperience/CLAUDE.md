# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS landing page for **AI Experience** (aiexperience.no), a Norwegian AI consulting company. No build tools, no package manager, no framework — vanilla HTML5, CSS3, and inline JavaScript.

## Development

```bash
# Serve locally (any method works)
python3 -m http.server 8000
npx http-server
# Or open index.html directly in browser
```

No build step, no tests, no linters. Deployment is automatic via GitHub Pages on push to `main`.

## Architecture

### Primary site: `index.html`

The main landing page (~1040 lines) is a single self-contained file with inline `<style>` and `<script>`. Dark theme using CSS custom properties (defined in `:root`): mint `#34d399`, cyan `#22d3ee`, dark backgrounds `#060608`/`#0c0c10`.

**Full-screen scrolling sections** (each a `.panel` with `scroll-snap-align: start`):
Hero → Pillars → Problems (bento grid) → Services → Playbook (timeline) → Pricing → Examples (horizontal scroll) → CTA

**Inline JavaScript** (bottom of file):
- Intersection Observer tracking visible `.panel` and updating `.side-nav` dot indicators
- Seeded random character matrix generator (`generateMatrix()`) — creates decorative text backgrounds with highlighted words. Each section has its own seed and word list.
- Dynamic footer year

### Case studies: `cases/`

Separate section linked from the main page's Examples section. Uses its own shared stylesheet `cases/case-styles.css` (with `../assets/fonts/` relative paths for fonts).

- `cases/index.html` — Overview listing all four cases
- `cases/*.html` — Individual case study pages (feilrapport-klassifisering, 10x-hastighet, innkjopskontroll, prosessoptimalisering)

All case pages share the same topbar structure with back-navigation to either the cases overview or the main page.

### Legacy/alternate pages

- `index-experimental.html` / `index-v2.html` — Earlier design variants (use `styles-experimental.css`)
- `index2.html` — Alternative light beige layout (uses `styles.css`)
- `keynote-onepager.html` — 16:9 fixed-ratio presentation slide (uses `styles-keynote-onepager.css`)

### Key Design Decisions

- **Self-hosted fonts** (Space Grotesk + Space Mono as WOFF2 in `assets/fonts/`) — GDPR-compliant, no external CDN requests
- **Responsive breakpoints**: 1024px (tablet), 768px (mobile). Side-nav and coordinate labels hidden on mobile.
- **Responsive sizing** via `clamp()` — e.g., `clamp(2.6rem, 5.4vw, 4.25rem)`
- **All content is in Norwegian** — keep all user-facing text in Norwegian

## Deployment

GitHub Pages hosted at `aiexperience.no`. The CNAME file lives at the repo root (`/Users/thordur/experiments/CNAME`), one level above this subfolder. Push to `main` to deploy.
