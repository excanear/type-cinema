# Typography audit checklist

Report each line as ✅ pass, ⚠️ partial or ❌ fail, with evidence such as a file and line, a measurement, or a screenshot note. Don't mark something passed if you haven't checked it.

## Direction
- [ ] Every family has a named role, and there are at most 2 families plus 1 utility
- [ ] Each family's choice has a written justification tied to the brief
- [ ] The reject list in `references/anti-generic.md` passes, or each exception is justified
- [ ] Display and body scale contrast fits the direction (cinematic 6–12×, UI 2–4×)

## System
- [ ] Sizes come from a fluid scale of tokens, with no stray hard-coded px in the files changed
- [ ] Line-height and tracking are set for each step, with negative tracking at display sizes
- [ ] Body measure is 45–75ch
- [ ] Headings use `text-wrap: balance` where supported, and nothing breaks without it
- [ ] Figures: `tabular-nums` where numbers change or align
- [ ] Real italics and bold are loaded, and `font-synthesis: none` is set

## Legibility and accessibility
- [ ] Body text is ≥ 16px on mobile
- [ ] Minimum text is ≥ 12px, and only for labels
- [ ] Text contrast meets WCAG AA (4.5:1 for body, 3:1 for ≥ 24px or ≥ 18.66px bold)
- [ ] Zooming to 200% doesn't break the layout or clip text
- [ ] No text overflows at 320px viewport width
- [ ] Decorative or illegible display text has an accessible name, and split-text keeps a readable label
- [ ] `prefers-reduced-motion` turns off type animation, or reduces it to the end state

## Performance
- [ ] WOFF2 only, and only the weights and axes the tokens use
- [ ] At most 2 preloaded fonts, each used above the fold on its route, each with `crossorigin`
- [ ] `font-display` is chosen per role
- [ ] Metric-matched fallbacks are in place (next/font automatic, or computed with fontaine or capsize)
- [ ] Measured CLS has not regressed
- [ ] Total first-view font payload is measured (report the number in KB)

## Licensing
- [ ] Every font has a verified license for each scope it is used in (web, app, logo…)
- [ ] Subsetting or conversion only where the license allows it (ITF FFL forbids it, and OFL has the Reserved Font Name caveat)
- [ ] License files ship with the self-hosted fonts
- [ ] No personal-use-only or trial fonts in production

## Report format
```
AUDIT: <project> · <date>
Direction ✅ | System ⚠️ (3 hard-coded sizes in Footer.tsx:12,18,40) | A11y ✅ | Perf ✅ (86 KB, CLS 0.01) | License ✅
Next actions: …
```
