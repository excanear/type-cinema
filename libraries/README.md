# Libraries

These are verified font data that the skill can rely on. They are **deliberately incomplete**. Quality over quantity: an entry exists only when it was checked against an official source.

| File | Scope | Verified how |
|---|---|---|
| `fontshare.md` | All 100 Fontshare families plus picks by direction | Fontshare API and the license file in the official zip |
| `google-fonts.md` | About 80 curated Google Fonts families for cinematic, editorial and experimental work | Google Fonts metadata JSON, and the license directory in google/fonts |
| `velvetyne.md` | Velvetyne libre foundry | GitLab repos: LICENSE, COPYRIGHT and METADATA files |
| `foundries.md` | Independent and retail foundries to research live | **Not verified.** Pointers only |

## Entry schema (use it when adding fonts or reporting candidates)

```yaml
name:               # exact family name as published
designer_foundry:   # from the official source
classes:            # structural, see references/classification.md
directions:         # expressive, 1–3
visual:             # letterform evidence, not adjectives
best_for:           # roles + size ranges
weights_styles:     # e.g. 100–900 + italics
variable_axes:      # tag min–max, or "static"
scripts_languages:  # subsets / glyph coverage
specimen_url:
official_source:
download_or_buy:
license:            # exact name + version
restrictions:       # subsetting, logo, SaaS, pageviews…
web_embedding:      # allowed? self-host? CDN?
status:             # VERIFIED (source, date) | CATALOG | UNVERIFIED
```

## Maintenance

- Refresh with `node scripts/font-lookup.mjs --refresh-check`. It prints live counts and license types so you can compare them with these files.
- When the official data disagrees with a library file, **the official data wins**. Update the file and its date.
- Never add an entry from memory. If it can't be verified, it stays in `foundries.md` as a lead.
