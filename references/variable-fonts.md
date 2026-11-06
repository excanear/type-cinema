# Variable fonts

A variable font is a single file with continuous **axes**. Use variable fonts for three things: weight and width systems from one file, optical sizing, and expressive motion.

## 1. Registered axes (lowercase tags, mapped to CSS properties)

| Tag | Axis | Preferred CSS |
|---|---|---|
| `wght` | Weight | `font-weight: 100 900` in `@font-face`, then `font-weight: 537` |
| `wdth` | Width (%) | `font-stretch: 75% 125%` in `@font-face`, then `font-stretch: 87.5%` |
| `opsz` | Optical size | `font-optical-sizing: auto` (the default), or `font-variation-settings: "opsz" 72` to override |
| `ital` | Italic (0/1) | `font-style: italic` |
| `slnt` | Slant (degrees) | `font-style: oblique -10deg` |

Custom axes use UPPERCASE tags and work **only** through `font-variation-settings`. Examples from verified library entries: Fraunces `SOFT`, `WONK`; Roboto Flex `GRAD`, `XTRA`, `YOPQ`…; Science Gothic `CTRS`; Tilt Warp `XROT`, `YROT`; Handjet `ELGR`, `ELSH`; Climate Crisis `YEAR`; Nabla `EDPT`, `EHLT`; Agu Display `MORF`; Kode Mono and Doto `ROND`; Workbench and Sixtyfour `BLED`, `SCAN`.

Always read the real axis ranges from the source: the Google Fonts metadata `axes`, the Fontshare API `axes`, or V-Fonts. Don't assume them.

## 2. Gotchas

- **`font-variation-settings` does not inherit per axis.** Setting `"SOFT" 100` on a child **resets every other axis you haven't listed** to its default. Use CSS custom properties:
  ```css
  .display {
    --soft: 0; --wonk: 0;
    font-variation-settings: "SOFT" var(--soft), "WONK" var(--wonk);
  }
  .display--warm { --soft: 100; }
  ```
- Declare ranges in `@font-face` (`font-weight: 100 900; font-stretch: 75% 125%;`). Otherwise the browser treats the font as a single weight and synthesizes bold.
- **Google Fonts CSS2 API:** list axes **alphabetically, lowercase tags before uppercase**, and give values in the same order, for example
  `family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1`.
  `VERIFIED (request returned CSS, 2026-11-06)`.
- **Fontshare CSS API:** the weight value `1` requests the variable roman and `2` the variable italic. For example `f[]=satoshi@1` returned `font-weight: 300 900`. `VERIFIED (2026-11-06)`.
- **next/font/google:** `wght` is included automatically when you omit `weight`. Request other axes with `axes: ['opsz','SOFT']`.
- Italics are often a separate variable file, so load it only if you use italic.

## 3. Axes as a design system

Define tokens that map **roles** to axis positions:

```css
:root {
  --wght-display: 680; --wdth-display: 82%;
  --wght-text: 400;    --wdth-text: 100%;
  --wght-ui: 520;
}
h1 { font-weight: var(--wght-display); font-stretch: var(--wdth-display); }
```

Fine weights such as 520 or 680 are a key advantage of variable fonts. Tune the display weight per theme, for example a lighter weight on dark backgrounds.

## 4. Axes in motion (GSAP or CSS)

- **CSS:** `transition: font-variation-settings 600ms cubic-bezier(.2,.7,.2,1);` or transition `font-weight` directly.
- **GSAP:** tween a CSS variable and apply it, rather than tweening the settings string:
  ```js
  gsap.to(el, { "--wght": 800, duration: 0.8, ease: "power3.out" });
  // CSS: font-variation-settings: "wght" var(--wght);
  ```
  You can also tween `fontWeight` directly when only `wght` changes.
- Axis changes alter glyph widths, which **reflows text**. Animate short words and fixed-width containers. Avoid paragraphs, and avoid any layout that would jump.
- Reduced motion: jump to the final axis value.
