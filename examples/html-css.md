# Plain HTML / CSS (also Vite, Astro, any static site)

Scenario: **Mona Sans** (Google, OFL, `wdth 75–125`, `wght 200–900`) as the single superfamily for display and text, plus **Martian Mono** (Google, OFL, `wdth 75–112.5`, `wght 100–800`) for utility. This is the *Sci-Fi Interface* archetype with a width-axis system.

## 1. Get the files

Use the variable WOFF2 files from an official distribution: the family's GitHub release, Google Fonts, or the Fontsource variable packages (`@fontsource-variable/<slug>`; check on npm that the package exists). Both fonts are OFL, so subsetting to `latin` is allowed (see `references/performance.md` §3). Keep `OFL.txt` next to the files.

```
/fonts/mona-sans/MonaSans-Variable-latin.woff2
/fonts/martian-mono/MartianMono-Variable-latin.woff2
```
Use the real file names from your source. These paths are examples.

## 2. `<head>`

```html
<link rel="preload" href="/fonts/mona-sans/MonaSans-Variable-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/type.css">
```
Only Mona Sans is preloaded. The mono appears below the fold in this layout.

## 3. `type.css`

```css
@font-face {
  font-family: "Mona Sans";
  src: url("/fonts/mona-sans/MonaSans-Variable-latin.woff2") format("woff2");
  font-weight: 200 900;
  font-stretch: 75% 125%;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Martian Mono";
  src: url("/fonts/martian-mono/MartianMono-Variable-latin.woff2") format("woff2");
  font-weight: 100 800;
  font-stretch: 75% 112.5%;
  font-display: swap;
}

/* Metric-matched fallback. Compute the values with fontaine or capsize, never guess them. */
@font-face {
  font-family: "Mona Sans Fallback";
  src: local("Arial");
  /* size-adjust / ascent-override / descent-override / line-gap-override: <computed> */
}

:root {
  --font-sans: "Mona Sans", "Mona Sans Fallback", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Martian Mono", ui-monospace, monospace;
  /* --step-* : paste the Cinematic preset from systems/type-scale.md */
}
html { font-synthesis: none; }
body { font-family: var(--font-sans); font-size: var(--step-0); line-height: 1.55; font-stretch: 100%; }

/* width does the expressive work */
.t-display { font-size: var(--step-6); font-weight: 800; font-stretch: 125%; line-height: .9; letter-spacing: -0.03em; }
.t-h2      { font-size: var(--step-3); font-weight: 650; font-stretch: 87.5%; line-height: 1.1; }
.t-label   { font-family: var(--font-mono); font-size: .75rem; font-stretch: 87.5%; letter-spacing: .08em;
             text-transform: uppercase; font-variant-numeric: tabular-nums; }
```

## Why this system works

Display and text come from the same skeleton, so they agree on x-height, construction and texture. They contrast **only on width and weight**, which is the "Condensed × Extended" pattern with a single file. The mono adds a machine voice for metadata. Its width axis matches the sans so labels align. The whole system needs two font files.
