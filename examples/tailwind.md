# Tailwind CSS

## Tailwind v4 (CSS-first `@theme`)

```css
/* app/globals.css or src/index.css */
@import "tailwindcss";

@theme {
  --font-display: var(--font-fraunces), ui-serif, Georgia, serif;
  --font-sans: var(--font-switzer), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-martian), ui-monospace, monospace;

  /* fluid steps become text-* utilities: text-step-0, text-step-6 … */
  --text-step-0: clamp(1rem, 0.9167rem + 0.3704vw, 1.25rem);
  --text-step-0--line-height: 1.6;
  --text-step-4: clamp(2.4414rem, 1.1458rem + 5.7581vw, 6.3281rem);
  --text-step-4--line-height: 1.05;
  --text-step-4--letter-spacing: -0.02em;
  --text-step-6: clamp(3.8147rem, 0.3402rem + 15.4423vw, 14.2383rem);
  --text-step-6--line-height: 0.9;
  --text-step-6--letter-spacing: -0.035em;

  --tracking-caps: 0.1em;
}
```

Usage:
```html
<h1 class="font-display text-step-6 font-semibold text-balance">Night shift</h1>
<p class="font-sans text-step-0 max-w-[65ch] text-pretty">…</p>
<span class="font-mono text-xs uppercase tracking-caps tabular-nums">00:42:17</span>
```

`--font-fraunces` and the other source variables come from `next/font` (see `nextjs.md`) or from your own `@font-face` (see `html-css.md`).

## Tailwind v3 (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-switzer)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-martian)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "step-0": ["clamp(1rem, 0.9167rem + 0.3704vw, 1.25rem)", { lineHeight: "1.6" }],
        "step-4": ["clamp(2.4414rem, 1.1458rem + 5.7581vw, 6.3281rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "step-6": ["clamp(3.8147rem, 0.3402rem + 15.4423vw, 14.2383rem)", { lineHeight: "0.9", letterSpacing: "-0.035em" }],
      },
      letterSpacing: { caps: "0.1em" },
    },
  },
};
```

## Notes

- Don't redefine Tailwind's whole default scale unless the project asks for it. Add `step-*` alongside the defaults and migrate gradually.
- Variable axes beyond weight and width have no utilities. Use an arbitrary property such as `[font-variation-settings:'SOFT'_100,'WONK'_1]`, or better, a small component class.
