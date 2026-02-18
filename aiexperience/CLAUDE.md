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

### Pages

- **`index.html`** — Primary v3 landing page (dark theme, ~1000 lines). Full-screen scrolling sections: Hero with SVG AX Loop animation, Pillars, Problems (bento grid), Services, Playbook (timeline), Pricing, Examples (horizontal scroll), CTA.
- **`index-experimental.html` / `index-v2.html`** — Earlier design variants (dark/experimental theme)
- **`index2.html`** — Alternative light beige layout using `styles.css`
- **`keynote-onepager.html`** — 16:9 fixed-ratio presentation slide for Keynote/PowerPoint embedding

### Stylesheets

- **`styles.css`** — Light theme (warm beige `#f7f4ef`, mauve accent `#d2537a`)
- **`styles-experimental.css`** — Dark theme with blur effects and gradients (purple/pink/cyan accents)
- **`styles-keynote-onepager.css`** — Presentation-specific 1920x1080 layout
- `index.html` uses **inline `<style>`** — dark theme with mint `#34d399` / cyan `#22d3ee` accents

### JavaScript (inline in index.html)

- **Intersection Observer** — Tracks visible section, updates side-nav dot indicators
- **Character matrix generator** — Seeded random text background with highlighted "bright" words
- **Dynamic footer year** — Auto-updates copyright

### Key Design Decisions

- **Self-hosted fonts** (Space Grotesk + Space Mono as WOFF2 in `assets/fonts/`) — GDPR-compliant, no external CDN requests
- **Responsive breakpoints**: 1024px (tablet), 768px (mobile). Side-nav and coordinate labels hidden on mobile.
- **Responsive sizing** via `clamp()` — e.g., `clamp(2.6rem, 5.4vw, 4.25rem)`
- **All content is in Norwegian**

## Deployment

GitHub Pages hosted at `aiexperience.no`. The CNAME file lives at the repo root (`/Users/thordur/experiments/CNAME`), one level above this subfolder. Push to `main` to deploy.
