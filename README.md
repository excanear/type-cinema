# type-cinema

A Claude Code skill for typography research and implementation on premium, cinematic, editorial and Awwwards-level web projects.

It has three modes:

- **DISCOVER**: turns a creative brief into a short list of verified, scored and license-checked typefaces.
- **DIRECT**: builds typographic directions, pairings, fluid scales and roles, each with a written rationale.
- **IMPLEMENT**: inspects a codebase and applies the type system with tokens, loading, fallbacks and an audit. Supports Next.js, React, Tailwind v3/v4, HTML/CSS and GSAP.

Workflow: `CONTEXT → DISCOVERY → CLASSIFICATION → ART DIRECTION → PAIRING → VALIDATION → IMPLEMENTATION → AUDIT`

## Install

Copy or symlink the folder into your skills directory:

```bash
# user-level (all projects)
cp -r type-cinema ~/.claude/skills/type-cinema
# or project-level
cp -r type-cinema <project>/.claude/skills/type-cinema
```

Claude loads the skill when you ask about fonts, pairings, type scales, variable fonts, webfont loading or font licensing. You can also invoke it with `/type-cinema`.

## Structure

```
type-cinema/
├── SKILL.md                      core workflow, modes, loading rules, quality bar
├── references/
│   ├── classification.md         structural classes + expressive directions (all 20 brief categories), hybrids
│   ├── cinematic-direction.md    13 evaluation criteria, 8 cinematic archetypes, composition rules
│   ├── pairing.md                pairing dimensions, 8 patterns, rules, starting hypotheses
│   ├── scoring.md                separate Aesthetic and Technical/Legal weighted scores, hard gates
│   ├── anti-generic.md           reject list, overused combinations, questions to ask, type-motion rules
│   ├── licensing.md              usage scopes, OFL / Apache / ITF FFL v2.0 / retail, verification protocol
│   ├── performance.md            budgets, WOFF2, subsetting, font-display, metric fallbacks, preload
│   ├── variable-fonts.md         axes, CSS gotchas, axis tokens, axis animation
│   └── sources.md                what each research source offers and how far to trust it
├── libraries/                    VERIFIED data only
│   ├── README.md                 entry schema and status labels
│   ├── fontshare.md              all 100 Fontshare families (API, 2026-11-06)
│   ├── google-fonts.md           ~80 curated Google families (metadata + license dir, 2026-11-06)
│   ├── velvetyne.md              Velvetyne libre fonts (GitLab LICENSE/COPYRIGHT/METADATA)
│   └── foundries.md              independent/retail foundries to research live (unverified leads)
├── systems/
│   ├── implement.md              codebase inspection → plan → implement → verify
│   ├── type-scale.md             fluid clamp() method + computed Editorial & Cinematic presets
│   ├── tokens.md                 role-based typography tokens, dark-mode compensation
│   └── audit-checklist.md        direction / system / a11y / performance / license audit
├── examples/
│   ├── discover-output.md        sample DISCOVER deliverable
│   ├── direct-output.md          sample DIRECT deliverable
│   ├── nextjs.md                 next/font/google + next/font/local
│   ├── tailwind.md               Tailwind v4 @theme and v3 config
│   ├── html-css.md               @font-face, preload, width-axis system
│   └── gsap-kinetic.md           axis animation, SplitText accessibility, reduced motion
└── scripts/
    ├── font-lookup.mjs           live lookup in Fontshare API / Google Fonts metadata / Velvetyne GitLab
    └── type-scale.mjs            fluid scale generator
```

## Scripts (Node 18+)

```bash
node scripts/font-lookup.mjs "Fraunces"          # axes, styles, subsets, license dir, status
node scripts/font-lookup.mjs "Satoshi" --json
node scripts/font-lookup.mjs --refresh-check     # catalog sizes, to check whether libraries/ is stale
node scripts/type-scale.mjs --preset cinematic   # or --min-base/--max-ratio/... for custom scales
```

## Research findings that shape the skill (2026-11-06)

- **Fontshare's ITF Free Font License v2.0** (17 Aug 2026) allows commercial, web, app and logo use. It **forbids subsetting and format conversion**, and forbids handing the files to agencies or SaaS users. Self-host the WOFF2 files as shipped. 64 of the 100 Fontshare families use it; the other 36 are SIL OFL.
- **Fontshare's CSS API** dropped the second family in some multi-family requests during testing. The license marks the API as optional with no uptime guarantee. Prefer self-hosting.
- **Velvetyne's website** showed only a strike banner. Its GitLab repositories are reachable and carry the licenses. *Le Murmure* and *Sporting Grotesque* declare **Reserved Font Names**.
- **1001fonts' cinema tag** showed only "free for personal use" fonts on page 1. Aggregator "free" labels are not commercial licenses.
- **Art of the Title** blocks automated fetching (HTTP 403), and **cinematypography.com** and **fontshare.com** render client-side. Browse them manually.
- The Google Fonts family **Big Shoulders** (2025, with `opsz`) replaces the old "Big Shoulders Display" name.

## Principles

- Never invent fonts, designers, axes, licenses or URLs. Every fact carries a `VERIFIED`, `CATALOG` or `UNVERIFIED` label.
- Score aesthetics separately from technical and legal fitness. An unclear license blocks a recommendation.
- Use one or two families, and a third only with a named functional role.
- Inspect the project before changing fonts, and keep its architecture and content.

## Keeping it current

The libraries are snapshots. Run `--refresh-check` from time to time. When official data disagrees with a library file, update the file and its date. Don't add fonts from memory.
