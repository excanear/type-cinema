# Cinematic art direction

Cinematic typography works like a shot in a film. Each piece of type is framed, given a duration, and given a purpose in the narrative. Use the criteria below to judge each candidate. Use the archetypes to build directions. **Draw on principles and archetypes. Never copy a specific film, title sequence, poster or brand.**

## 1. Evaluation criteria

Score each criterion from 1 to 5, with a single sentence of evidence that points to something visible in the letterforms.

| Criterion | Question | What to look at |
|---|---|---|
| **Visual tension** | Does the type create energy or unease? | Contrast between thick and thin, sharp joins, compressed counters, asymmetric details |
| **Letterform personality** | Could you recognise it from three letters? | The R leg, the G spur, the a and g structure, the shape of terminals and ink traps |
| **Contrast** | How do thick and thin strokes behave at the sizes used? | Hairlines at 48px and below on 1× screens. A Didone can fall apart there |
| **Proportions** | Width, x-height, cap-height and descender length | Large x-height reads better at small sizes. Small x-height looks more elegant at display sizes |
| **Rhythm** | What pattern of stems and counters does a word make? | Set "minimum" or "hamburgefonstiv" and check that the texture is even |
| **Density** | How dark does a block of text look? | Compare paragraph color at the same size and line-height |
| **Tracking** | How should spacing change with size? | Display sizes usually need negative tracking. Caps and small sizes need positive |
| **Kerning** | How good is the pair kerning? | Check AV, To, Ty, LT, "r." and quote marks. Poor kerning disqualifies a display font |
| **Negative space** | Does the type keep its shape when isolated? | Set one word over large empty space and check whether it still holds |
| **Hierarchy** | Do the weights, widths and italics support 4 to 6 clearly separate levels? | Count the steps that are genuinely distinct |
| **Emotional impact** | Does it produce the brief's adjectives? | Ask yourself, then compare against the anti-adjective |
| **Editorial sophistication** | Real italics, small caps, old-style and tabular figures, ligatures | Check `font-feature-settings` support: `smcp`, `onum`, `tnum`, `ss0x` |
| **Screen readability** | Does it work at 14 to 18px on both 1× and 2× screens? | Hinting, stroke weight at small sizes, and an `opsz` axis if available |

## 2. Archetypes: cinematic typographic directions

Each archetype is a recipe built from principles. Bring it into the brief and fill it with verified fonts.

1. **Nocturnal Thriller**. Classes: compressed grotesk with a mono for captions. Tight negative tracking on huge words. Small caps captions tracked +0.08em. Long vertical gaps. Cuts are hard; no easing flourishes in motion.
2. **Prestige Drama**. Classes: high-contrast serif with an `opsz` axis, plus a quiet text sans. Centered or asymmetric single lines. Italic used as a second voice. Opacity-only reveals timed at a slow, breathing pace.
3. **Sci-Fi Interface**. Classes: mono or modular sans, with an extended display. Tabular figures, uppercase labels and coordinate-style metadata. Type behaves like data. Expose variable axes such as `wdth` or `wght` as a state change, not as decoration.
4. **Auteur / Art-house**. Classes: an experimental display face (Velvetyne-type faces) with a neutral grotesk. One word per screen. Asymmetric margins. The display face appears rarely, and that rarity is the point.
5. **Epic / Monumental**. Classes: glyphic or wide-caps serif, or an extended grotesk. Caps only at display sizes, wide tracking, symmetric framing. **Risk:** it turns into trailer cliché quickly, so keep the body text modern and quiet.
6. **Documentary / Archive**. Classes: grotesk with a typewriter-like mono or a text serif. Captions treated as evidence, with dates, places and footnotes. Low-key motion.
7. **Neo-Noir Editorial**. Classes: Didone or transitional serif with a grotesk. Strong black-and-white contrast and oversized drop numbers. Italic pulled into the display layer.
8. **Kinetic Title Card**. Classes: a variable display face with `wght` and/or `wdth`. Letters animate along their axes instead of moving across the screen. Reduced-motion fallback shows the static end state.

## 3. Composition rules

- **Scale contrast is the drama.** The ratio between display and body should be 6× to 12× on desktop, versus 2× to 4× in generic UI.
- **Use one hero gesture per view.** A single oversized element. Everything else steps back.
- **Treat tracking as a function of size:** about −0.04em at 120px+, −0.02em at 48 to 96px, 0 at body sizes, +0.06 to +0.12em for caps labels.
- **Tighten line-height as size grows:** 0.85 to 1.0 for display, 1.1 to 1.25 for headings, 1.45 to 1.7 for body.
- **Write a motion brief for the type.** Specify what animates (opacity, mask, axis), the duration, and the reduced-motion fallback. Animate as little as possible. Static type with great spacing beats busy motion.
- **Keep text real.** Live HTML text, not images or canvas, unless it is purely decorative and has an accessible name.

## 4. Deliverable for each direction

```
Direction name: one line of mood (2–3 adjectives + 1 anti-adjective)
Display: <family> <weights/axes>, why (letterform evidence)
Text: <family> <weights/axes>, why
Utility (optional): <family>, functional role
Scale: ratio, clamp values (see systems/type-scale.md)
Signature details: tracking, case, figures, features, motion note
Risks and mitigations
License status per family
```
