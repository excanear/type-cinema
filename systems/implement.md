# IMPLEMENT mode: applying typography to a real codebase

## §1. Inspect first (required, before you change anything)

Run these checks and write down what you find:

1. **Stack:** check `package.json` for `next`, `react`, `vite`, `astro`, `tailwindcss` (v3 or v4), `gsap`, `@fontsource*` and `next/font` usage.
2. **Current fonts:** grep for `font-family`, `@font-face`, `next/font`, `fonts.googleapis`, `api.fontshare`, `@fontsource`, `fontFamily` (Tailwind config), and `--font-`.
   ```bash
   rg -n "font-family|@font-face|next/font|fonts.googleapis|fontshare|@fontsource|fontFamily|--font-" --glob '!node_modules'
   ```
3. **Font files:** look for `*.woff2`, `*.woff`, `*.ttf` and `*.otf` under `public/`, `src/`, `assets/` or `app/`. Note the formats and sizes.
4. **Scale and usage:** look for existing type tokens, Tailwind `fontSize` overrides, and hard-coded `px` sizes. Count the distinct font sizes in use.
5. **Design intent:** read README, brand docs, Figma links and comments. **Ask why the current fonts were chosen if that isn't clear.** Never replace a font that is part of the brand identity without explicit approval.
6. **Motion:** check whether GSAP SplitText or a custom split is used, and whether anything animates text or font axes.
7. **Licensing of current fonts:** check whether the license files are in the repo, and whether retail fonts carry the right web license.

Report a short inventory: *stack · fonts and roles · loading method · scale health · issues*.

## §2. Plan

Propose changes as a diff list before you edit:

- which fonts load where, with their weights and axes
- the token file location (`styles/tokens.css`, `app/globals.css`, or the Tailwind theme)
- which components change. Content and layout stay as they are unless the user asks.
- the expected payload, the files to preload, and the fallback strategy

If the change replaces existing brand fonts, get confirmation first.

## §3. Implement by stack

| Stack | Recipe |
|---|---|
| Next.js (App Router or Pages) | `examples/nextjs.md`: `next/font/local` or `next/font/google`, CSS variables, automatic fallback metrics |
| Tailwind v3 / v4 | `examples/tailwind.md` |
| Plain HTML/CSS, Vite, Astro | `examples/html-css.md`: `@font-face`, preload, fallback metrics |
| GSAP / motion | `examples/gsap-kinetic.md`: axis tweens, SplitText accessibility, reduced motion |

### Self-hosting steps

1. Get the files from the **official source** (the foundry zip, the repo, or Google Fonts or Fontsource).
2. Put them in `public/fonts/<family>/` for Next.js, Vite or static sites, or in `src/fonts/` when using `next/font/local`.
3. Keep the license file next to the fonts, for example `public/fonts/<family>/LICENSE.txt` or `OFL.txt`.
4. Use the WOFF2 files. Convert or subset **only** if the license allows it (see `references/performance.md` §3).

## §4. Rules while you edit

- Preserve the architecture. Follow the existing conventions for file names, CSS methodology and component patterns.
- Don't touch copy, content or layout structure, except to fix typography-related overflow.
- Replace hard-coded sizes with tokens **only in files you are already changing**, unless the user asked for a full sweep.
- Load only the weights and axes that appear in the token table.
- Set `font-synthesis: none` globally once real styles are loaded.
- Use `font-display: swap` together with metric-matched fallbacks for text fonts. Consider `optional` for decorative display fonts.

## §5. Verify

- Build and run the app, then check the pages at 320, 768, 1280 and 1920px widths, in both themes if the site has them.
- DevTools Network filtered to fonts: each file loads once, there are no 404s, and preloads are used.
- Lighthouse: CLS stays at or below its previous value, and no "preloaded but not used" warnings appear.
- Check that no text overflows at 320px.
- Run `systems/audit-checklist.md` and report the results.
