# Classification and discovery engine

Classify a typeface on two layers:

1. **Structural class.** This is objective and describes how the letters are built.
2. **Expressive direction.** This is subjective and describes what the letters feel like.

A font gets one or two structural classes and one to three directions. Briefs usually ask for **hybrids**, for example "Editorial × Brutalist" or "Luxury × Futuristic". Score a candidate for a hybrid against both of its parent directions.

## Layer 1: structural classes

| Class | Tells to look for |
|---|---|
| **Serif**: old-style, transitional, Didone/modern, slab, wedge, glyphic | Stress axis, how much thick and thin contrast there is, bracketed versus unbracketed serifs |
| **Sans-serif** | No serifs |
| **Grotesk / Neo-grotesk** | Closed apertures, uniform weight, a spurred "G", 19th-century roots (grotesk) or rationalized (neo) |
| **Geometric** | Built from circles and lines, round "o", often a single-storey "a" |
| **Humanist** | Calligraphic modulation, open apertures, highly legible |
| **Display** | Built for large sizes, often with extreme contrast, width or ornament |
| **Condensed / Compressed** | Narrow widths that pack a lot of text into a headline |
| **Extended / Wide** | Wide proportions that read as horizontal and slow |
| **Mono** | Every glyph has the same advance width |
| **Variable** | A technical property, not a style: one file carries continuous axes (see `variable-fonts.md`) |

## Layer 2: expressive directions

For each direction: what it signals, the letterform cues to look for, and the risk to watch.

| Direction | Signals | Cues | Risk |
|---|---|---|---|
| **Cinematic** | Scale, suspense, a sense of era | High-contrast serifs or compressed sans, wide tracking on caps, crisp large sizes | Drifting into movie-poster cliché, such as trailer-style tracked caps on everything |
| **Luxury** | Restraint, craft, price | Didones or hairline serifs, generous space, optical sizes, small caps | Hairlines vanishing on low-DPI screens, and the "perfume-ad" look |
| **Editorial** | Voice and reading culture | Text serifs with real italics, grotesks with good figures, optical sizing | Too much hierarchy everywhere |
| **Experimental** | Research and an art-school edge | Unusual construction, ink traps, modular or stencil forms | Hurting legibility. Use only at display sizes |
| **Brutalist** | Honesty and rawness | Monos, heavy grotesks, default-looking forms, hard edges | Reading as unfinished when the system around it is not rigorous |
| **Futuristic** | Speed and technology | Extended widths, squared curves, low contrast | 1990s sci-fi cliché |
| **Sci-Fi** | Interface and machine | Monos, squarish or modular glyphs, stencil cuts | Costume-like and hard to read |
| **Minimalist** | Clarity | Neutral grotesk or geometric, few weights | Generic SaaS. See `anti-generic.md` |
| **Avant-garde** | Rupture | Wonky axes, mixed construction, irregular rhythm | Gimmick |
| **Retro / Vintage** | Era quotation | Revivals, soft or flared terminals, period-specific widths | Nostalgia without a concept behind it |
| **Fashion** | Attitude and the silhouette of the letter | Extreme contrast, condensed Didones, tight tracking at huge sizes | Copying recognisable fashion mastheads |
| **Architectural** | Structure and grid | Modular construction, extended or monolinear forms, geometric logic | Feeling cold and inhuman |
| **Organic** | Warmth and growth | Soft terminals, calligraphic stress, irregular curves | Wellness-brand cliché |
| **Geometric**, **Grotesk**, **Serif**, **Sans**, **Display**, **Condensed** | Also usable as directions when the brief names them | — | — |

## Discovery method

1. **Translate the brief into constraints.** Pull out three kinds of need:
   - emotional: 2 or 3 adjectives, plus an anti-adjective ("tense, nocturnal, precise, never retro")
   - functional: reading length, UI density, languages and scripts, sizes
   - legal and budget: free only or retail, and the scopes needed (see `licensing.md`)
2. **Map the brief to directions.** Pick a primary direction, plus a secondary one if the brief is a hybrid, and the structural classes they imply.
3. **Pull candidates.** Search `libraries/*.md` first, filtering by tags. Then search live sources (see `sources.md`). Aim for 8 to 12 candidates.
4. **Screen out.** Drop anything with the wrong script coverage, an incompatible license, or a weight range too thin for the role.
5. **Compare in a specimen.** Set the brief's real headline and body copy at 3 sizes: display around 96px+, a heading around 32px, text at 16 to 18px. Evaluate with `cinematic-direction.md`.
6. **Score.** Use `scoring.md` and keep 4 to 8 candidates.

## Fields to record for each candidate

Use the schema in `libraries/README.md`, which covers name, designer and foundry, classes, directions, visual characteristics, best applications, weights and styles, axes, script coverage, specimen URL, official source, download or purchase URL, license, restrictions, web embedding, and status label.
