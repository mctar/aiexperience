
# One-Page Website Placeholder

This is a code bundle for One-Page Website Placeholder. The original project is available at https://www.figma.com/design/0boXj6JQ7v22fXIoebx0kN/One-Page-Website-Placeholder.

## Development

Install dependencies with `npm install` and start the dev server with `npm run dev`.

## Deployment (GitHub Pages)

The project is wired for the repository `git@github.com:mctar/aiexperience.git` and publishes to `https://mctar.github.io/aiexperience/`. Vite is configured with `base: '/aiexperience/'` so asset paths resolve correctly when served from GitHub Pages.

### Automatic deploys

1. Push to `main` or trigger the `Deploy to GitHub Pages` workflow manually from the Actions tab.
2. The workflow runs `npm ci && npm run build`, uploads the `dist` folder, and deploys it to GitHub Pages via the official Pages action.
3. The deployed site will be available under the `github-pages` environment with the URL surfaced in the workflow summary.

> Enable GitHub Pages (Settings → Pages) and select "GitHub Actions" as the source if it is not already configured.

### Manual checks

To preview the production build locally run:

```bash
npm run build
npx vite preview --host
```

Push the resulting commits to the SSH remote when you're ready:

```bash
git push git@github.com:mctar/aiexperience.git main
```
  
