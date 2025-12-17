# AI Experience placeholder

A single-page static site with no build tooling. Landing page variants live in:

- `index.html` — current landing page
- `index_old.html` — archived previous landing page
- `index2.html` — alternate copy/layout
- `index-experimental.html` — experimental variant (same markup as `index.html`)
- `keynote-onepager.html` — 16:9 one-pager for Keynote

Styles are split so old pages stay intact:

- `styles-experimental.css` for `index.html` and `index-experimental.html`
- `styles.css` for `index_old.html` and `index2.html`
- `styles-keynote-onepager.css` for `keynote-onepager.html`

## Local editing

1. Open the page you want to preview (`index.html`, `index_old.html`, `index2.html`, `index-experimental.html`, or `keynote-onepager.html`) in your browser.
2. Update the markup or styles directly in the files.
3. Keep `CNAME` as `aiexperience.no` so GitHub Pages wires the custom domain automatically.

## Deploying to GitHub Pages

The repository is ready for the default GitHub Pages flow:

- **Branch**: `main`
- **Folder**: `/` (root)
- **Custom domain**: `aiexperience.no`

Push to `main` and Pages will serve the new version immediately—no build step required.
