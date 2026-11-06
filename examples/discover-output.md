# Example: DISCOVER output

> **Brief (example):** Website for an independent documentary film festival. Bilingual, Portuguese and English. Nocturnal, investigative and precise, **never retro**. Free fonts only. Web plus festival app. The logo will be custom lettering, so no logo font is needed.

## Context recap
- Adjectives: nocturnal, investigative, precise. Anti-adjective: retro.
- Roles needed: display (hero titles and film titles), text (synopses, 150–400 words), utility (schedule, timecodes, venues).
- Scripts: Latin with Portuguese diacritics (ã õ ç á é í ó ú â ê ô à), so `latin` plus `latin-ext` where relevant.
- License scope: web and app, commercial. Subsetting is wanted for performance, so **ITF FFL fonts are acceptable but cannot be subset**. That cost is reflected in the Web suitability scores.
- Directions: *Documentary / Archive* primary, *Nocturnal Thriller* secondary (see `references/cinematic-direction.md` §2).

## Shortlist

The scores are illustrative and show the format. Real scores come from testing the specimen at 16, 32 and 120px on dark and light backgrounds.

| # | Font | Role | Source · License | Aesthetic | Technical | Verdict | Why |
|---|---|---|---|---|---|---|---|
| 1 | **Big Shoulders** | display | Google · OFL ✔ web/app/subset | 4.3 | 4.6 | Recommend | Compressed and gridded; `opsz` 10–72 keeps headings sturdy as they shrink. Reads as investigative signage, not nostalgia |
| 2 | **Newsreader** | text | Google · OFL ✔ | 4.2 | 4.8 | Recommend | `opsz` 6–72 text serif from Production Type, a journalistic voice for synopses. Has italics for film titles |
| 3 | **Martian Mono** | utility | Google · OFL ✔ | 4.0 | 4.5 | Recommend | `wdth` 75–112.5 lets the schedule columns compress. A machine voice for timecodes |
| 4 | **Schibsted Grotesk** | text alt / UI | Google · OFL ✔ | 3.7 | 4.6 | Consider | A sturdy news grotesk. Use it if the team wants a sans-led system |
| 5 | **Science Gothic** | display alt | Google · OFL ✔ | 4.4 | 3.9 | Consider | `wdth` 50–200 plus a `CTRS` axis allow dramatic width shifts for titles. New in 2025-11, so test kerning carefully |
| 6 | **Sligoil** | utility alt | Velvetyne · OFL ✔ | 4.5 | 3.6 | Consider | Ink-trap mono with more personality. Only Micro sizes and a variable file, so check readability at 12px |
| 7 | **Sentient** | text alt | Fontshare · ITF FFL ✔ web/app, ✘ subset | 4.0 | 3.7 | Consider | An attractive text serif, but no subsetting allowed. The payload depends on the shipped files |

## Rejected
- **Bebas Neue / Anton**: on the overused list in `references/anti-generic.md` §2 and read as "trailer". The brief rejects cliché.
- **Fonts from the 1001fonts cinema tag**: the first page was all labelled "free for personal use", which conflicts with the commercial scope.
- **Limelight**: Art Deco styling contradicts the "never retro" anti-adjective.

## Next step
Go to DIRECT with candidates 1, 2 and 3, and keep 5 as the expressive alternative.
