# Fluid type scale

## 1. Method

A fluid scale has two modular scales, one for mobile and one for desktop. Each step interpolates between the two with `clamp()`.

For each step `s`:
```
min = baseMin × ratioMin^s        (at viewport vMin)
max = baseMax × ratioMax^s        (at viewport vMax)
slope     = (max − min) / (vMax − vMin)
intercept = min − slope × vMin
font-size: clamp(min/16 rem, intercept/16 rem + slope×100 vw, max/16 rem)
```

- **The preferred value keeps a `rem` term** so it still grows when the user zooms or changes the default font size. Keep `max ≤ 2.5 × min` on reading text so text zooming stays within WCAG 1.4.4. Display steps can exceed that because they are already large.
- Generate the values with `node scripts/type-scale.mjs`, and don't do the arithmetic by hand.
- **Ratio choice:**
  - 1.2 / 1.25 for UI
  - 1.333 for editorial
  - 1.5 / 1.618 for cinematic heroes
- Use a **wider desktop ratio than mobile ratio**. Drama scales up with the screen, while mobile stays readable.

## 2. Ready presets

Both presets were computed with `scripts/type-scale.mjs` for viewports 360 → 1440px.

### Editorial: 16px × 1.2 → 19px × 1.333
```css
:root {
  --step-n1: clamp(0.8333rem, 0.8142rem + 0.0852vw, 0.8908rem); /* 13.3 → 14.3px */
  --step-0:  clamp(1rem, 0.9375rem + 0.2778vw, 1.1875rem);      /* 16 → 19px */
  --step-1:  clamp(1.2rem, 1.0724rem + 0.5673vw, 1.5829rem);    /* 19.2 → 25.3px */
  --step-2:  clamp(1.44rem, 1.2166rem + 0.9927vw, 2.1101rem);   /* 23 → 33.8px */
  --step-3:  clamp(1.728rem, 1.3664rem + 1.607vw, 2.8127rem);   /* 27.6 → 45px */
  --step-4:  clamp(2.0736rem, 1.515rem + 2.4826vw, 3.7493rem);  /* 33.2 → 60px */
  --step-5:  clamp(2.4883rem, 1.6518rem + 3.7178vw, 4.9979rem); /* 39.8 → 80px */
  --step-6:  clamp(2.986rem, 1.7606rem + 5.4462vw, 6.6622rem);  /* 47.8 → 106.6px */
  --step-caption: 0.75rem; /* fixed floor, 12px */
}
```

### Cinematic: 16px × 1.25 → 20px × 1.5
```css
:root {
  --step-n1: clamp(0.8rem, 0.7889rem + 0.0494vw, 0.8333rem);     /* 12.8 → 13.3px */
  --step-0:  clamp(1rem, 0.9167rem + 0.3704vw, 1.25rem);         /* 16 → 20px */
  --step-1:  clamp(1.25rem, 1.0417rem + 0.9259vw, 1.875rem);     /* 20 → 30px */
  --step-2:  clamp(1.5625rem, 1.1458rem + 1.8519vw, 2.8125rem);  /* 25 → 45px */
  --step-3:  clamp(1.9531rem, 1.1979rem + 3.3565vw, 4.2188rem);  /* 31.3 → 67.5px */
  --step-4:  clamp(2.4414rem, 1.1458rem + 5.7581vw, 6.3281rem);  /* 39.1 → 101.3px */
  --step-5:  clamp(3.0518rem, 0.9049rem + 9.5414vw, 9.4922rem);  /* 48.8 → 151.9px */
  --step-6:  clamp(3.8147rem, 0.3402rem + 15.4423vw, 14.2383rem);/* 61 → 227.8px, hero only */
  --step-caption: 0.75rem;
}
```

For a **hero beyond step 6**, for example one word filling the viewport, size it to the container instead of the viewport:
```css
.hero-wrap { container-type: inline-size; }
.hero-word { font-size: clamp(3.5rem, 18cqi, 16rem); line-height: .85; }
```
Test the longest real word at 320px width. If it overflows, lower the `cqi` factor or the minimum.

## 3. Line-height and tracking for each step

| Step | Role | line-height | letter-spacing |
|---|---|---|---|
| caption / n1 | Labels, metadata | 1.4 | +0.02em (+0.08 to 0.12em in all caps) |
| 0 | Body | 1.5–1.7 | 0 |
| 1–2 | Lead, h4–h3 | 1.3–1.4 | −0.005em |
| 3–4 | h2–h1 | 1.1–1.2 | −0.015em |
| 5–6 | Display | 0.92–1.05 | −0.025em |
| hero | Cinematic word | 0.82–0.9 | −0.035 to −0.05em |

These are starting values. Adjust for each font: condensed and wide faces need different tracking, and caps-only settings need positive tracking. Check that descenders and ascenders don't collide with line-height below 1 in multi-line headings.

## 4. Measure (line length)

- Body text: `max-width: 65ch` (aim for 45–75 characters).
- Lead or intro text: up to `34ch` at step 2.
- Display: break lines by meaning. Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs as progressive enhancement.
