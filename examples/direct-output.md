# Example: DIRECT output

This continues the festival brief from `discover-output.md`. It presents **two** directions and recommends one.

---

## Direction A: "Evidence Board" (recommended)

**Mood:** nocturnal, investigative, precise. Not retro.

| Role | Family | Load | Why |
|---|---|---|---|
| Display | **Big Shoulders** | `wght` 600–900 and `opsz` (variable, 1 file) | Compressed proportions fit long Portuguese film titles on one line at large sizes. The gridded construction suggests archive labels. `opsz` holds stroke weight at the h2 and h3 sizes |
| Text | **Newsreader** | `opsz` + `wght` 400–600, roman and italic (2 files) | Journalistic texture for synopses. A real italic marks film titles inside the text, which is an editorial convention |
| Utility | **Martian Mono** | `wdth` 87.5–100, `wght` 400–500 (1 file) | Timecodes, venues and schedule. Tabular figures. Its width axis fits table columns on mobile |

**Pairing logic:**
- Condensed sans display against an optically sized serif text: the faces contrast on **width and stroke modulation** and agree on a sober, low-ornament attitude.
- The mono is the third voice, with a defined function: data.

**Scale:** the Cinematic preset (`systems/type-scale.md`). Hero film titles use `step-6` at 61 → 228px, with `line-height .88` and `letter-spacing -0.02em`. Compressed faces need less negative tracking.

**Signature details:**
- Film titles are always set in display caps with `font-feature-settings` left at the defaults. Directors' names use Newsreader italic.
- Timecodes look like `00:42:17`, set in Martian Mono with `tabular-nums` and tracked at `+0.04em`.
- Motion: a hero title fades in with an `opsz` and weight settle from 600 to 800 over 1.2s. Under reduced motion it appears in its final state.

**Risks and fixes:**
- Compressed caps at small sizes reduce legibility. Display is used only at ≥ `step-3`.
- Three families means three requests. Total payload is 4 variable files at most, and only Big Shoulders plus Newsreader roman are preloaded.

**License:** all three fonts are SIL OFL 1.1, `VERIFIED (google/fonts ofl/, 2026-11-06)`. Web, app and subsetting are allowed. Ship `OFL.txt` with each.

---

## Direction B: "Width as Narrative"

| Role | Family | Why |
|---|---|---|
| Display + UI | **Science Gothic** (`wdth` 50–200, `CTRS`) | A single family that moves from compressed to ultra-wide, so width can mark a change of section or mood |
| Text | **Newsreader** | Same reasoning as Direction A |

This one is more striking but riskier. Science Gothic is new (2025-11), so it needs careful kerning QA. Animating `wdth` causes reflow and needs fixed containers. Choose it if the festival's identity centres on transformation.

---

## Recommendation

Direction **A** best serves the brief's "investigative and precise" tone, has the lowest technical risk, and gives each family one clear job. Direction B is the way to go if the team wants a single, bolder signature gesture.

> Why this typography fits: the festival shows films that examine evidence. Direction A sets every piece of information in the voice it would have in an investigation: titles as labels, synopses as reporting, schedules as records.
