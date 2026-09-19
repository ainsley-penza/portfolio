# Ainsley Penza - Portfolio

Source code for Ainsley Penza's personal portfolio site.

## Stack

- React 18 + TypeScript
- Vite (build tool)
- Hand-written CSS (`src/style.css`), no CSS framework

The site is a single static page. There is no backend, database, or API.

### A note on `@instinct/files`

This page was originally built with Instinct's hosted file kit, imported as
`@instinct/files` (see `src/App.tsx` and `src/main.tsx`). That package is only
available inside Instinct's hosted environment, so this standalone copy maps
that import to a local replacement at `src/instinct-files.tsx` (wired up via
an alias in `vite.config.ts`). `src/tokens.css` reproduces the design tokens
(colors) the original kit supplied. `src/App.tsx`, `src/main.tsx` and
`src/style.css` are byte-for-byte the original source.

One visual difference: the original used a serif display font (Aime) that ships
with the hosted kit. The standalone build falls back to Georgia, which looks
very similar. To match exactly, drop the font files into `public/fonts` and
add an `@font-face` rule in `src/tokens.css`.

## Project structure

    index.html               entry HTML
    vite.config.ts           Vite config + @instinct/files alias
    src/main.tsx             React entrypoint (original)
    src/App.tsx              the whole portfolio page (original)
    src/style.css            all page styling (original)
    src/instinct-files.tsx   local replacement for the hosted component kit
    src/tokens.css           design tokens (colors) + base body styles

## Run locally

Requires Node.js 18 or newer.

    npm install
    npm run dev

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

    npm run build

Outputs a static site to `dist/`. Preview it locally with:

    npm run preview

## Hosting it yourself

The `dist/` folder is plain static files - host it anywhere:

- Netlify: drag the `dist/` folder onto app.netlify.com/drop, or connect the repo (build command `npm run build`, publish directory `dist`)
- Vercel: `npx vercel` from the project folder, or import the repo (same build command and output directory)
- GitHub Pages: push the repo, run `npm run build`, and publish `dist/` via the `gh-pages` branch or an Actions workflow
- Cloudflare Pages: connect the repo with build command `npm run build` and output `dist`
- Any web server (nginx, Apache, cPanel): upload the contents of `dist/`

## Editing content

Almost everything a visitor reads lives in `src/App.tsx`: the hero text,
project cards, experience list, skills groups, education entries and contact
links. Edit the text there, rebuild, and redeploy. Styling lives in
`src/style.css`.
