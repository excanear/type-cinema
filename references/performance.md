# Font performance and loading

Goals: deliver the critical text quickly, avoid layout shift (CLS) from swapping fonts, and send as few bytes and requests as possible.

## 1. Budget heuristics

- **Critical fonts:** at most 2 files preloaded. That is usually the display face for above-the-fold content plus the text regular.
- **Total font payload on first view:** aim for ≤ 150 KB of WOFF2 for a typical Latin site. Treat this as a starting heuristic and measure the real site.
- **Families × styles:** every extra static style is an extra request. Switch to a variable file once you need about 3 or more weights from one family. Measure both options, because a large variable file with many axes can be heavier than two static files.

## 2. Formats

- Serve **WOFF2 only** to modern browsers. Add WOFF only if the project explicitly supports very old browsers. Never use EOT or SVG fonts.
- **Converting or subsetting requires license permission.** OFL and Apache fonts allow it, though the OFL Reserved Font Name caveat applies. **ITF FFL v2.0 (Fontshare) forbids it**, so use the shipped WOFF2 files as they are. See `licensing.md`.

## 3. Subsetting (only when the license allows)

- Use `unicode-range` splits (latin, latin-ext, and so on) the way Google Fonts does, so the browser downloads only the ranges a page uses.
- Tool: `pyftsubset` from fonttools:
  ```bash
  pyftsubset Font.ttf --flavor=woff2 --layout-features='*' \
    --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" \
    --output-file=Font-latin.woff2
  ```
  Keep `--layout-features='*'` so kerning, ligatures and stylistic sets survive. Check the brief's languages, for example Portuguese (ã, õ, ç), Vietnamese, or Central European, before you cut glyph ranges.
- Never subset a font whose license forbids modification.

## 4. `font-display`

| Value | Use for |
|---|---|
| `swap` | Body and UI text. The text appears at once in the fallback font. **Pair it with metric-matched fallbacks** (§5) so the swap doesn't shift layout |
| `optional` | Non-essential decorative faces, or when zero CLS matters more than brand fidelity on the first visit |
| `block` | Avoid. Use it only for icon fonts. Prefer SVG icons anyway |
| `fallback` | A middle ground: a short block period followed by a short swap window |

## 5. Metric-matched fallbacks (kill CLS)

Define a fallback `@font-face` around a local system font and adjust its metrics to match the webfont:

```css
@font-face {
  font-family: "Display Fallback";
  src: local("Arial");
  size-adjust: <computed>%;
  ascent-override: <computed>%;
  descent-override: <computed>%;
  line-gap-override: <computed>%;
}
:root { --font-display: "Display", "Display Fallback", system-ui, sans-serif; }
```

**Never guess these numbers.** Compute them from the font file:
- **Next.js:** `next/font` generates them automatically (`adjustFontFallback`).
- **Other stacks:** use `fontaine` (unjs), `@capsizecss/metrics` / `@capsizecss/unpack`, or a fallback-generator tool that reads the file's metrics.

## 6. Preload

```html
<link rel="preload" href="/fonts/Display-Variable.woff2" as="font" type="font/woff2" crossorigin>
```
- `crossorigin` is required, even for same-origin fonts. Without it the browser downloads the file twice.
- Preload only fonts that are used above the fold on **this** route. Unused preloads produce console warnings and waste bandwidth.
- In Next.js, `next/font` preloads automatically. Set `preload: false` for fonts that aren't critical.

## 7. Third-party CDNs versus self-hosting

- Self-hosting avoids the extra DNS, TLS and connection setup, gives you full control of caching, and avoids privacy concerns (some EU rulings have targeted Google Fonts CDN use).
- If you do use a CDN: add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` (for Google), and keep `display=swap` in the URL.
- The **Fontshare CSS API** is optional under FFL v2.0, comes without uptime guarantees, and dropped families in some multi-family requests during testing. Prefer self-hosting the WOFF2 files from the official zip.
- Cache: `Cache-Control: public, max-age=31536000, immutable` on fingerprinted font files.

## 8. Rendering details

- `font-synthesis: none` stops the browser from faking bold or italic when a style is missing.
- `text-rendering: optimizeLegibility` costs performance on long text. Prefer leaving it unset; kerning is on by default (`font-kerning: auto`).
- Use `font-optical-sizing: auto` (the default) so fonts with an `opsz` axis adapt to size by themselves.
- Use `font-variant-numeric: tabular-nums` for counters, prices and timecodes, so the digits don't jitter as they change.

## 9. Measuring

- Lighthouse and WebPageTest: check the CLS score, the "Ensure text remains visible during webfont load" audit, and the font waterfall.
- DevTools → Network, filtered to font. Confirm that each file downloads exactly once and that only the expected files load on each route.
- Check visually at 3G throttling to see the swap happen.
