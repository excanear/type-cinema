# Velvetyne library: verified via GitLab

**Context:** Velvetyne (velvetyne.fr) is a French libre type foundry known for experimental, art-school and display faces. On **2026-11-06** its website served only a strike banner. The font repositories at `https://gitlab.com/velvetyne` (34 projects) stayed reachable, and the data below comes from them.

**Status:**
- **Full entries** (§1) are `VERIFIED (GitLab repo files, 2026-11-06)`: `LICENSE.txt`, `COPYRIGHT.md`, `METADATA.yml` and the font file list.
- **License-only entries** (§2) are verified for license only. Inspect styles yourself.
- **Catalog entries** (§3) come from the repo description only, so treat them as `CATALOG`.
- Visual notes are editorial judgment, so confirm them on the specimen in each repo's `documentation/` folder.

**Reserved Font Names matter here.** Some copyright files declare RFNs. Under OFL, if you **subset, convert or modify** those fonts, the modified files must be renamed in the font's internal name tables, not only in the CSS. When in doubt, ship the repo's own WOFF2 files unmodified.

## 1. Full entries

### Le Murmure
- **Designer:** Jérémy Landes, with Alex Slobzheninov and George Triantafyllakos (COPYRIGHT.md, 2020). It was made for the design agency Murmure.
- **Class / direction:** Sans · Condensed · Display. METADATA tags: `sans, condensed, titling, contrast, magazine`. Directions: *Cinematic, Fashion, Editorial, Avant-garde*.
- **Styles:** Regular (`le-murmure.otf/.ttf`, `LeMurmure-Regular.woff2`).
- **License:** SIL OFL 1.1, **with Reserved Font Names "Murmure" and "Le Murmure"**.
- **Source:** https://gitlab.com/velvetyne/murmure
- **Best for:** titling at large sizes and magazine-style display. One weight only, so pair it with a full-range text family.

### Ouroboros
- **Designer:** Ariel Martín Pérez (2018–2020).
- **Class / direction:** METADATA tags `Human made, Serif, Fantasy`. The repo describes it as "a typeface for alchemists, witches, heretics, outsiders and curious people in general." Directions: *Experimental, Organic, Avant-garde*.
- **Styles:** Regular (OTF, WOFF2).
- **License:** SIL OFL 1.1.
- **Source:** https://gitlab.com/velvetyne/ouroboros
- **Best for:** occult, folk and art-house display. Display sizes only.

### Basteleur
- **Designer:** Keussel (2021).
- **Class / direction:** METADATA tags `Human made, Serif, Fantasy`. The repo says it was designed "with the Tarot de Marseille in mind". Directions: *Retro, Organic, Experimental*.
- **Styles:** Moonlight and Bold (OTF, TTF, WOFF2).
- **License:** SIL OFL 1.1.
- **Source:** https://gitlab.com/velvetyne/basteleur

### Sligoil
- **Designer:** Ariel Martín Pérez (2025).
- **Class / direction:** Mono · Sans. Repo: "A monospace typeface with large inktraps." METADATA tags `monospace, micro, sans, medium, bold, Vietnamese`. Directions: *Brutalist, Sci-Fi, Experimental*.
- **Styles:** Micro, MicroMedium, MicroBold (OTF, TTF, WOFF2), plus a **variable** file (`SligoilVF.ttf` / `.woff2`). Read the axes from the file or the repo docs.
- **License:** SIL OFL 1.1.
- **Source:** https://gitlab.com/velvetyne/sligoil
- **Best for:** utility or caption voice with personality, metadata and timecodes.

### Sporting Grotesque
- **Designer:** Lucas Le Bihan (2016–2021).
- **Class / direction:** Grotesk. Directions: *Retro, Editorial, Display*.
- **Styles:** Regular and Bold (OTF). The repo also has a `webfonts/` folder.
- **License:** SIL OFL 1.1, **with the Reserved Font Name "Sporting Grotesque"**.
- **Source:** https://gitlab.com/velvetyne/Sporting-Grotesque

### Mess
- **Designer:** Tezzo Suzuki (2019).
- **Class / direction:** METADATA tags `illegible, punk, sharp`. The repo calls it "An illegible typeface". Directions: *Experimental, Brutalist*.
- **Styles:** Mess (OTF), Light web (TTF, WOFF2).
- **License:** SIL OFL 1.1.
- **Source:** https://gitlab.com/velvetyne/Mess
- **Best for:** texture and graphic gestures only. **Never put readable content in it.** Give decorative uses an accessible name.

### Grotesk (Velvetyne)
- **Designer:** Frank Adebiaye (copyright 2010–2023).
- **Class / direction:** METADATA tags `sans serif, geometric, art déco`. Repo: "geometric sans serif typeface with extra-large spacing." Directions: *Architectural, Retro, Luxury*.
- **Styles:** 01 Extrafin, 02 Mince, 03 Regular, 04 Gras (OTF, TTF, WOFF2), plus a **variable** `GroteskVF.ttf`.
- **License:** SIL OFL 1.1.
- **Source:** https://gitlab.com/velvetyne/grotesk

## 2. License verified (SIL OFL 1.1), styles not yet inspected

| Family | Repo description | Repo |
|---|---|---|
| Trickster | "Libre font Trickster" | https://gitlab.com/velvetyne/Trickster |
| Happy Times at the IKOB | "A contemporary take of the Times New Roman typeface by Lucas Le Bihan" | https://gitlab.com/velvetyne/Happy-Times-at-the-IKOB |
| Format 1452 | "a Din-like typeface built with modules, without any optical corrections" | https://gitlab.com/velvetyne/format-1452 |
| Cantique | "marks the marriage between human calligraphy and geometric construction" | https://gitlab.com/velvetyne/cantique |

## 3. Catalog only (license not yet confirmed in repo root)

These come from the repo descriptions. **Avara** and **Lack** had no license file at the repo root, so check `documentation/` or the font metadata before you use them.

| Family | Repo description |
|---|---|
| Avara | "Transitional serif curveless font." |
| Lack | "a brave, contemporary and experimental typeface which comes in a single weight" |
| Façade | built "from the architectural grid of the ÉSAD Orléans façade" |
| Mourier | "a quasi-abstract geometric typeface originally created by Eric Mourier in 1971" |
| VG5000 | "inspired by the homonymous computer manufactured by Phillips" |
| Fungal | "Libre variable font inspired by mycelium growth, forked from DejaVu Sans" |
| Letters | "a display typeface available in regular and italic styles" |
| Interlope | "a script typeface" |
| Gulax | "experimental monolinear sans" |
| Amdal | "a Tifinagh typeface designed by Walid Bouchouchi" |
| BackOut, Compagnon, Feroniapi, Flor des ruina, Kaerukaeru, Lineal, Jgs, Anthony | See the repo descriptions at gitlab.com/velvetyne |

To verify any of them, open `https://gitlab.com/velvetyne/<repo>` and read `LICENSE.txt`, `COPYRIGHT.md`, `METADATA.yml` and `fonts/`. The GitLab API is rate-limited for anonymous requests, so batch your requests.
