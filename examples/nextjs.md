# Next.js implementation (App Router)

Scenario: **Fraunces** (Google, OFL, axes `opsz 9–144`, `wght 100–900`, `SOFT 0–100`, `WONK 0–1`) for display, with **Switzer** (Fontshare, ITF FFL, `wght 100–900`) for text. All facts are verified in `libraries/`.

## 1. Files

Switzer comes from the official zip at `https://api.fontshare.com/v2/fonts/download/switzer`. Copy these files **unchanged**, because FFL forbids conversion and subsetting:
```
Switzer_Complete/Fonts/WEB/fonts/Switzer-Variable.woff2        (43,220 bytes, checked 2026-11-06)
Switzer_Complete/Fonts/WEB/fonts/Switzer-VariableItalic.woff2  (33,408 bytes; copy only if italics are used)
Switzer_Complete/License/FFL.txt
```
Put them in `app/fonts/switzer/`.

## 2. `app/fonts.ts`

```ts
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";

export const fraunces = Fraunces({
  subsets: ["latin"],            // add "latin-ext" for PT/ES/FR diacritics beyond Latin-1
  axes: ["opsz", "SOFT", "WONK"], // wght is included automatically when `weight` is omitted
  style: ["normal"],             // add "italic" only if the design uses it
  display: "swap",
  variable: "--font-fraunces",
});

export const switzer = localFont({
  src: [
    { path: "./fonts/switzer/Switzer-Variable.woff2", weight: "100 900", style: "normal" },
    // { path: "./fonts/switzer/Switzer-VariableItalic.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-switzer",
  adjustFontFallback: "Arial",   // generates a metric-matched fallback to limit CLS
});
```

## 3. `app/layout.tsx`

```tsx
import { fraunces, switzer } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${switzer.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## 4. `app/globals.css` (tokens)

```css
:root {
  --font-display: var(--font-fraunces), ui-serif, Georgia, serif;
  --font-text: var(--font-switzer), ui-sans-serif, system-ui, sans-serif;
  /* paste the Editorial or Cinematic preset from systems/type-scale.md */
}
html { font-synthesis: none; }
body { font-family: var(--font-text); font-size: var(--step-0); line-height: 1.6; }

.t-display {
  font-family: var(--font-display);
  font-size: var(--step-6);
  line-height: .92;
  letter-spacing: -0.03em;
  font-weight: 600;
  --soft: 0; --wonk: 0;
  font-variation-settings: "SOFT" var(--soft), "WONK" var(--wonk);
  /* opsz follows font-size automatically (font-optical-sizing: auto) */
}
.t-display--warm { --soft: 100; --wonk: 1; }
```

## Notes

- `next/font` self-hosts Google fonts at build time, so there is no runtime request to Google. It also preloads them and computes fallback metrics.
- Keep `preload: true` (the default) only for fonts used above the fold on most routes. For a font used on one route only, define it in that route's layout.
- The Pages Router works the same way: apply `className` or `variable` in `_app.tsx`.
- Check the result in DevTools: two WOFF2 font requests for the roman styles, and CLS close to 0.
