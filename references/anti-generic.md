# Anti-generic typography system

Use this file as a gate before anything is finalized. Every item flagged here needs either a **project-specific justification** or a replacement.

## 1. Reject list (patterns)

| Pattern | Why it fails | Fix |
|---|---|---|
| A single neutral sans for everything, in default weights (400/600/700) | Reads as a template with no voice | Give display its own voice (a different family, a width axis, or opsz) |
| A decorative face in body text, buttons or forms | Hurts legibility and accessibility | Keep it at display sizes and use it rarely |
| 3+ families with no utility role | Noise, extra weight, no system | Collapse to 1 or 2 families and name the third's role or remove it |
| Loading every weight "just in case" | Costs performance and invites inconsistency | Load only the weights in the token table |
| A random or arbitrary scale (13, 15, 17, 22, 27px…) | No rhythm | Use a modular, fluid scale (see `systems/type-scale.md`) |
| Display text overflowing its container on mobile | Unreadable and causes overflow bugs | Set a `clamp()` minimum. Test at 320px |
| Wide-tracked caps for every heading | Trailer cliché and slower reading | Reserve it for labels and short lines |
| Gradient-filled oversized headline + glow + blur | The "AI landing page" signature | Let scale, spacing and the letterforms carry the impact |
| Letter-by-letter animation on every heading | Unnecessary motion and an accessibility cost | One signature motion moment. Honor `prefers-reduced-motion` |
| Faux bold or faux italic (synthesized) | Distorted forms | Load the real style, or set `font-synthesis: none` |
| Hairline weights on dark backgrounds at small sizes | Strokes break up and shimmer | Use ≥ 300 weight below 24px, or the `GRAD` axis if present |
| An image of text for headings | Not searchable or accessible, and blurry | Use live text |

## 2. Overused combinations (need a reason)

These are not banned. They are common enough to read as default, so each needs a sentence tied to the project.

- Inter for everything, or Inter with any geometric display face
- Playfair Display with any neutral sans for "elegance"
- Montserrat with Open Sans or Lato
- Poppins for headings in SaaS
- Space Grotesk with Space Mono for "tech"
- Bebas Neue or Anton as an automatic "cinematic" headline
- Cormorant Garamond for "luxury" with hairline weights at small sizes

## 3. Questions to ask about every recommendation

1. **Why this face?** Point to visible letterform evidence, not adjectives.
2. **Why not the obvious alternative?** Name it and explain the difference.
3. **What role does it serve, and at what sizes?**
4. **Does it survive 16px on a 1× screen, and 320px viewport width?**
5. **Is the license verified for this exact use?**
6. **What would make it read as generic, and what prevents that here?** Give the specific tracking, case, feature or axis choice.

## 4. Animation rules for type

- Animate `opacity`, `transform`, `clip-path`/masks, or variable axes (`font-variation-settings`, or `font-weight` / `font-stretch` on variable fonts). Avoid animating `font-size` and `letter-spacing` on large text blocks, because they trigger layout on every frame.
- When you split text into characters (for example with GSAP SplitText), keep the original string accessible with `aria-label` on the parent and `aria-hidden` on the split spans, or use a library mode that keeps the accessible text. Revert the split on resize when line breaks change.
- Every type motion needs a `prefers-reduced-motion: reduce` path that shows the final state.
