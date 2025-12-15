# AI Experience placeholder

A single-page static site with no build tooling. Landing page variants live in:

- `index.html` — current version
- `index2.html` — alternate copy/layout
- `index-experimental.html` — new experimental landing page

Styles are split so old pages stay intact:

- `styles.css` for `index.html` and `index2.html`
- `styles-experimental.css` for `index-experimental.html`

## Local editing

1. Open the landing page you want to preview (`index.html`, `index2.html`, or `index-experimental.html`) in your browser.
2. Update the markup or styles directly in the files.
3. Keep `CNAME` as `aiexperience.no` so GitHub Pages wires the custom domain automatically.

## Deploying to GitHub Pages

The repository is ready for the default GitHub Pages flow:

- **Branch**: `main`
- **Folder**: `/` (root)
- **Custom domain**: `aiexperience.no`

Push to `main` and Pages will serve the new version immediately—no build step required.
