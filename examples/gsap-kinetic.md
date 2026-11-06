# GSAP: kinetic type with variable axes

This implements the *Kinetic Title Card* archetype: letters change along their axes instead of moving across the screen. The example uses **Fraunces** (`wght`, `opsz`, `SOFT`, `WONK`).

## 1. Markup (accessible)

```html
<h1 class="title" aria-label="Midnight Archive">
  <span class="title__word" aria-hidden="true">Midnight</span>
  <span class="title__word" aria-hidden="true">Archive</span>
</h1>
```

## 2. CSS

```css
.title__word {
  display: inline-block;
  font-family: var(--font-display);
  font-size: var(--step-6);
  line-height: .9;
  --wght: 300; --soft: 0; --wonk: 0;
  font-weight: var(--wght);
  font-variation-settings: "SOFT" var(--soft), "WONK" var(--wonk);
}
```

## 3. JS

```js
import { gsap } from "gsap";

const words = gsap.utils.toArray(".title__word");
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.from(words, { autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" });
  gsap.fromTo(words,
    { "--wght": 300, "--soft": 0 },
    { "--wght": 720, "--soft": 100, duration: 1.4, stagger: 0.12, ease: "power3.inOut" }
  );
});

mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(words, { autoAlpha: 1, "--wght": 720, "--soft": 100 }); // final state, no motion
});
```

## 4. Per-character splits (SplitText)

When you split text into characters for per-character effects:
- Keep a readable accessible name. Recent versions of SplitText have options for this, so check the docs for the version you use. Otherwise set `aria-label` on the parent and `aria-hidden="true"` on the split children, as above.
- **Re-split on resize** when line breaks matter. Call `revert()` when the component unmounts (React: `useGSAP` cleanup).
- Animate `transform`, `opacity` or masks per character. Don't animate `letter-spacing` or `font-size` across a whole paragraph.

## 5. Rules

- One signature type motion per view. Everything else stays static or uses a simple opacity fade.
- An axis change alters glyph widths, so give animated words `display: inline-block` and enough container width. Never animate axes inside running paragraphs.
- Test at 60fps on a mid-range phone. If it drops frames, animate fewer elements or switch to opacity and transform only.
