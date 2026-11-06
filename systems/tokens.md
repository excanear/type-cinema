# Typography tokens

Tokens map **roles** to values. Components consume roles and never use raw font names or pixel sizes.

## 1. Token layers

```
primitive  →  --font-serif-fraunces, --step-5, --wght-680
semantic   →  --font-display, --text-display-size, --text-display-weight
component  →  .hero-title { font: var(--text-display) }   (or a utility class)
```

## 2. Reference CSS (framework-agnostic)

```css
:root {
  /* families: name + metric-matched fallback + generic */
  --font-display: "Display Family", "Display Fallback", ui-serif, Georgia, serif;
  --font-text:    "Text Family", "Text Fallback", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "Mono Family", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  /* scale: paste a preset from systems/type-scale.md */
  /* --step-n1 … --step-6, --step-caption */

  /* weights (variable fonts allow fine values) */
  --wght-text: 400; --wght-text-strong: 600;
  --wght-display: 650; --wght-ui: 500;

  /* leading */
  --lh-tight: 0.9; --lh-heading: 1.15; --lh-body: 1.6; --lh-ui: 1.35;

  /* tracking */
  --track-hero: -0.04em; --track-display: -0.025em; --track-heading: -0.015em;
  --track-body: 0; --track-caps: 0.1em;

  /* measure */
  --measure-body: 65ch; --measure-lead: 34ch;
}

/* semantic roles */
.t-display { font-family: var(--font-display); font-size: var(--step-6); font-weight: var(--wght-display);
             line-height: var(--lh-tight); letter-spacing: var(--track-display); text-wrap: balance; }
.t-h1      { font-family: var(--font-display); font-size: var(--step-4); line-height: var(--lh-heading);
             letter-spacing: var(--track-heading); text-wrap: balance; }
.t-h2      { font-family: var(--font-display); font-size: var(--step-3); line-height: var(--lh-heading); }
.t-lead    { font-family: var(--font-text); font-size: var(--step-1); line-height: 1.4; max-width: var(--measure-lead); }
.t-body    { font-family: var(--font-text); font-size: var(--step-0); line-height: var(--lh-body); max-width: var(--measure-body); text-wrap: pretty; }
.t-label   { font-family: var(--font-mono); font-size: var(--step-caption); letter-spacing: var(--track-caps);
             text-transform: uppercase; font-variant-numeric: tabular-nums; }

html { font-synthesis: none; -webkit-text-size-adjust: 100%; }
```

## 3. Dark-mode compensation

Light text on a dark background looks heavier and blurrier. Pull the weight down slightly:
```css
@media (prefers-color-scheme: dark) {
  :root { --wght-text: 380; --wght-display: 620; }
}
```
This needs a variable font. With static fonts, keep the same weight and add a little letter-spacing to body text instead (+0.005em). If the font has a `GRAD` axis (for example Roboto Flex), use it, because it changes weight without reflowing text.

## 4. Mapping to frameworks

- **Tailwind v4:** declare the tokens in `@theme` (see `examples/tailwind.md`).
- **Tailwind v3:** in `theme.extend.fontFamily` and `fontSize`, point to the CSS variables.
- **Next.js:** the `next/font` `variable` option outputs `--font-*` variables. Map those into the tokens above (see `examples/nextjs.md`).
- **Design tools:** export the same names, such as `display`, `h1` and `body`, so code and design files share one vocabulary.
