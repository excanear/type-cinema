# Font pairing engine

A pairing works when the two faces **contrast on one or two axes and agree on the rest**. If they contrast on everything, the result is chaos. If they contrast on nothing, it is mud.

## 1. Dimensions that must agree or contrast

| Dimension | Agree on this (usually) | Contrast on this (usually) |
|---|---|---|
| x-height ratio | ✔ Within about 10%, so mixed lines don't wobble | |
| Proportions (width) | | ✔ Condensed display with normal-width text is a classic |
| Stroke contrast | | ✔ High-contrast display with low-contrast text |
| Construction logic | ✔ Similar underlying skeleton or era, or a deliberate clash of them | |
| Weight range | ✔ Both cover the roles they are assigned | |
| Texture (color) | ✔ Paragraph darkness looks similar at body sizes | |
| Personality volume | | ✔ One face speaks loudly and the other stays quiet |

## 2. Pairing patterns

| Pattern | When it works | How it fails | Checks |
|---|---|---|---|
| **Serif × Sans** | Editorial and prestige work. The serif carries voice and the sans carries function | Two faces with the same "volume", such as a geometric sans next to a Didone where both shout | Who leads? Only one face should be expressive |
| **Display × Grotesk** | A cinematic hero over a functional UI | The display face leaks into body text or buttons | The display face appears only at ≥ 40px |
| **Condensed × Extended** | Architectural and futuristic work, and strong rhythm | Both are extreme and nothing stays neutral | Body text uses a normal width, or one face is variable on `wdth` |
| **High contrast × Neutral** | Luxury and fashion | Hairlines at small sizes | Keep high-contrast faces at ≥ 32px, or use an `opsz` axis |
| **Experimental × Functional** | Art-house work, portfolios, culture | The experimental face is used too often | Cap it at 1 to 3 uses per screen |
| **Editorial × Cinematic** | Long-form storytelling | Mismatched historical logic without intent | Write down the rationale for the time and place each face evokes |
| **Variable × Static** | Motion-led sites | Animating everything | One animated axis, with a clear meaning |
| **Superfamily** (one family, several widths or optical sizes) | The best default for coherence | Monotony | Use the width or `opsz` axis to create contrast |

## 3. Rules

1. **Start from a single family.** Add a second one only when the first cannot express a needed role. Add a third only for a defined utility such as mono data, captions or code, and name that role.
2. **Define roles, not fonts:** `display`, `heading`, `text`, `ui`, `mono/utility`. Then assign a family to each role.
3. **Justify on two levels:**
   - *Visual:* the dimensions that contrast or agree, with letterform evidence.
   - *Functional:* sizes, reading length, UI density, script coverage, performance cost (number of files) and license compatibility.
4. **Test on real copy** at real sizes, in both themes (light and dark). Thin strokes look heavier on dark backgrounds, so you may need a lighter weight or the `GRAD` axis.
5. **Anti-generic gate:** if the pairing appears in `anti-generic.md` §2, give a project-specific reason or replace it.

## 4. Building pairs from the libraries

Use these as starting hypotheses only, and test them before you ship. Every family below has a verified entry in `libraries/`.

- *Prestige / editorial:* **Fraunces** (opsz 9–144, SOFT, WONK axes) for display with **Switzer** for text. A soft-wonky serif voice against a neutral, wide-range grotesk.
- *Neo-noir:* **Bodoni Moda** (opsz 6–96) for display with **Schibsted Grotesk** for text. Didone contrast handled by opsz, plus a sturdy news grotesk.
- *Sci-fi interface:* **Martian Mono** (wdth 75–112.5) as utility, with **Mona Sans** or **Hubot Sans** (wdth 75–125) for display and UI. Width axes on both let you express state changes.
- *Art-house:* **Le Murmure** (Velvetyne, OFL) for display with **General Sans** for text. Tall, sharp display caps against a calm grotesk.
- *Monumental:* **Big Shoulders** (opsz 10–72) for display with **Newsreader** (opsz 6–72) for text. A compressed display face over an optically sized text serif.
- *Experimental archive:* **Sligoil** (Velvetyne mono with ink traps) as utility, with **Sentient** for text.

Each one still needs the full scoring and license step for the specific project.
