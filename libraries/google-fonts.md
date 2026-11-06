# Google Fonts library: curated and verified

**Source:** the Google Fonts metadata `https://fonts.google.com/metadata/fonts`, fetched on **2026-11-06** (1,959 families). For licenses, I checked that the family's `METADATA.pb` exists in `github.com/google/fonts/<license>/<family>/`. **All families below are in `ofl/` (SIL OFL 1.1).** `VERIFIED (2026-11-06)`.

This is a curated subset for cinematic, editorial and experimental work, not the whole catalog. For any other family, run `node scripts/font-lookup.mjs "<Family>"`.

## Using these fonts

- **Web:** use the CSS2 API (`https://fonts.googleapis.com/css2?family=…&display=swap`), `next/font/google`, or self-host. Fontsource (`@fontsource-variable/<slug>`) packages Google families for npm.
- **License:** OFL 1.1 allows commercial use, embedding, subsetting and modification, but a modified build must not use any Reserved Font Name. Check the family's `OFL.txt` copyright line.
- **Axes:** use the ranges below exactly. Custom (uppercase) axes need `font-variation-settings`. See `references/variable-fonts.md`.
- **Popularity warning:** Inter, Anton, Bebas Neue and Playfair are included for completeness and are flagged in `references/anti-generic.md`. Use them only with a project-specific reason.

## Notes on standout families (editorial judgment, confirm on specimen)

- **Fraunces**: four axes (`opsz`, `wght`, `SOFT`, `WONK`). It moves from crisp, high-contrast display to soft, wonky shapes. Few free faces allow this much expressive range inside one family.
- **Bodoni Moda**: a Didone with `opsz` 6–96. Hairlines thicken at small optical sizes, which avoids the usual collapse of Didones on screen.
- **Playfair** (the 2023 family, not *Playfair Display*): `opsz` 5–1200 plus `wdth`. Treat it as a different and more flexible tool than the overused Playfair Display.
- **Newsreader**, **Literata**, **Source Serif 4**, **Piazzolla**: optically sized text serifs for long-form reading.
- **Mona Sans** and **Hubot Sans**: `wdth` 75–125 and `wght` 200–900, so condensed-to-extended systems need only one family.
- **Roboto Flex**: 13 axes, including `GRAD` (adjusts weight without reflowing text, useful for dark mode and hover) and parametric axes. Powerful but heavy, so subset it and restrict axes.
- **Science Gothic** (added 2025-11): `wdth` 50–200 and a `CTRS` contrast axis, giving an extreme width range for architectural and title work.
- **Big Shoulders** (2025 family with `opsz`): the successor family name. The old name "Big Shoulders Display" no longer appears in the metadata.
- **Experimental axes:** Tilt Warp (`XROT`/`YROT`), Climate Crisis (`YEAR`), Nabla (color font: `EDPT`/`EHLT`), Agu Display (`MORF`), Handjet (`ELGR`/`ELSH`), Workbench and Sixtyfour (`BLED`/`SCAN`), Doto and Kode Mono (`ROND`). Each is display-only, and each axis is a motion opportunity.

## Verified data

### High-contrast & display serifs (cinematic, luxury, fashion, neo-noir)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Fraunces | Serif | Undercase Type, Phaedra Charles, Flavia Zimbardi | SOFT 0–100, WONK 0–1, opsz 9–144, wght 100–900 | yes | latin, latin-ext, vietnamese | 2020-07-23 |
| Bodoni Moda | Serif | Owen Earl | opsz 6–96, wght 400–900 | yes | latin, latin-ext, math, symbols | 2020-11-25 |
| Playfair | Serif | Claus Eggers Sørensen | opsz 5–1200, wdth 87.5–112.5, wght 300–900 | yes | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2023-04-12 |
| Libre Bodoni | Serif | Pablo Impallari, Rodrigo Fuenzalida | wght 400–700 | yes | latin, latin-ext, vietnamese | 2022-04-13 |
| Noto Serif Display | Serif | Google | wdth 62.5–100, wght 100–900 | yes | cyrillic, cyrillic-ext, greek, greek-ext, latin, latin-ext, vietnamese | 2020-11-19 |
| Gloock | Serif | Duarte Pinto | static 400 | — | cyrillic-ext, latin, latin-ext | 2023-01-05 |
| Instrument Serif | Serif | Rodrigo Fuenzalida, Jordan Egstad | static 400 | yes | latin, latin-ext | 2023-03-21 |
| Young Serif | Serif | Bastien Sozeau | static 400 | — | latin, latin-ext | 2023-09-26 |
| Italiana | Sans Serif | Santiago Orozco | static 400 | — | latin | 2012-03-14 |
| Redaction | Serif | MCKL | static 400/700 | yes | latin, latin-ext | 2026-10-28 |
| Brygada 1918 | Serif | Capitalics, Mateusz Machalski, Borys Kosmynka, Ania Wieluńska, Przemysław Hoffer | wght 400–700 | yes | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2021-01-27 |
| Cinzel | Serif | Natanael Gama | wght 400–900 | — | latin, latin-ext | 2012-10-24 |
| Limelight | Display | Nicole Fally, Sorkin Type | static 400 | — | latin, latin-ext | 2011-05-25 |

### Editorial text serifs (long reading, optical sizes)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Newsreader | Serif | Production Type | opsz 6–72, wght 200–800 | yes | latin, latin-ext, vietnamese | 2020-07-01 |
| Source Serif 4 | Serif | Frank Grießhammer | opsz 8–60, wght 200–900 | yes | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2021-11-16 |
| Literata | Serif | TypeTogether | opsz 7–72, wght 200–900 | yes | cyrillic, cyrillic-ext, greek, greek-ext, latin, latin-ext, vietnamese | 2018-12-06 |
| Piazzolla | Serif | Juan Pablo del Peral, HT Fonts | opsz 8–30, wght 100–900 | yes | cyrillic, cyrillic-ext, greek, greek-ext, latin, latin-ext, vietnamese | 2020-08-27 |
| Imbue | Serif | Tyler Finck, ETC | opsz 10–100, wght 100–900 | — | latin, latin-ext, vietnamese | 2020-12-02 |
| EB Garamond | Serif | Georg Duffner, Octavio Pardo | wght 400–800 | yes | cyrillic, cyrillic-ext, greek, greek-ext, latin, latin-ext, vietnamese | 2011-03-23 |
| Petrona | Serif | Ringo R. Seeber | wght 100–900 | yes | latin, latin-ext, vietnamese | 2020-07-14 |
| Besley | Serif | Owen Earl | wght 400–900 | yes | latin, latin-ext | 2021-01-05 |
| IBM Plex Serif | Serif | Mike Abbink, Bold Monday | static 100/200/300/400/500/600/700 | yes | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2018-03-11 |

### Grotesks & neutral sans (text / UI voice)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Schibsted Grotesk | Sans Serif | Bakken & Bæck, Henrik Kongsvoll | wght 400–900 | yes | latin, latin-ext | 2023-03-02 |
| Hanken Grotesk | Sans Serif | Alfredo Marco Pradil, Hanken Design Co. | wght 100–900 | yes | cyrillic-ext, latin, latin-ext, vietnamese | 2022-11-16 |
| Familjen Grotesk | Sans Serif | Familjen STHLM AB | wght 400–700 | yes | latin, latin-ext, vietnamese | 2022-03-02 |
| Host Grotesk | Sans Serif | Element Type, Doğukan Karapınar, İbrahim Kaçtıoğlu | wght 300–800 | yes | latin, latin-ext | 2024-11-05 |
| Geist | Sans Serif | Andrés Briganti, Mateo Zaragoza, Guillermo Rauch, Evil Rabbit, José Rago, Facundo Santana | wght 100–900 | yes | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2024-10-01 |
| Instrument Sans | Sans Serif | Rodrigo Fuenzalida, Jordan Egstad | wdth 75–100, wght 400–700 | yes | latin, latin-ext | 2023-05-08 |
| IBM Plex Sans | Sans Serif | Mike Abbink, Bold Monday | wdth 75–100, wght 100–700 | yes | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2018-03-11 |
| Inter | Sans Serif | Rasmus Andersson | opsz 14–32, wght 100–900 | yes | cyrillic, cyrillic-ext, greek, greek-ext, latin, latin-ext, vietnamese | 2020-01-24 |
| Funnel Display | Display | NORD ID, Kristian Möller | wght 300–800 | — | latin, latin-ext | 2024-11-05 |
| Stack Sans Headline | Sans Serif | Koto | wght 200–700 | — | latin, latin-ext | 2025-11-03 |

### Width-axis families (architectural, condensed × extended systems)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Mona Sans | Sans Serif | Tobias Bjerrome Ahlin, Github, Degarism Studio, Sebastian Carewe | wdth 75–125, wght 200–900 | yes | latin, latin-ext, vietnamese | 2024-11-04 |
| Hubot Sans | Sans Serif | Tobias Bjerrome Ahlin, Github, Degarism Studio, Sebastian Carewe | wdth 75–125, wght 200–900 | yes | latin, latin-ext, vietnamese | 2024-11-04 |
| Archivo | Sans Serif | Omnibus-Type | wdth 62–125, wght 100–900 | yes | latin, latin-ext, vietnamese | 2016-12-03 |
| Roboto Flex | Sans Serif | Font Bureau, David Berlow, Santiago Orozco, Irene Vlachou, Ilya Ruderman, Yury Ostromentsky, Mikhail Strukov | GRAD -200–150, XOPQ 27–175, XTRA 323–603, YOPQ 25–135, YTAS 649–854, YTDE -305–-98, YTFI 560–788, YTLC 416–570, YTUC 528–760, opsz 8–144, slnt -10–0, wdth 25–151, wght 100–1000 | — | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2022-05-02 |
| Science Gothic | Sans Serif | Thomas Phinney, Vassil Kateliev, Brandon Buerkle | CTRS 0–85, slnt -10–0, wdth 50–200, wght 100–900 | — | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2025-11-19 |
| Bricolage Grotesque | Sans Serif | Mathieu Triay | opsz 12–96, wdth 75–100, wght 200–800 | — | latin, latin-ext, vietnamese | 2023-06-14 |
| Special Gothic | Sans Serif | Alistair McCready | wdth 75–125, wght 400–700 | — | latin, latin-ext | 2025-04-07 |
| Mozilla Headline | Sans Serif | Studio DRAMA | wdth 75–125, wght 200–700 | — | latin, latin-ext | 2025-07-28 |
| Saira | Sans Serif | Omnibus-Type | wdth 50–125, wght 100–900 | yes | latin, latin-ext, vietnamese | 2017-07-31 |
| Encode Sans | Sans Serif | Impallari Type, Andres Torresi, Jacques Le Bailly | wdth 75–125, wght 100–900 | — | latin, latin-ext, vietnamese | 2017-02-08 |

### Condensed & poster sans (titles, credits, monumental)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Big Shoulders | Display | Patric King | opsz 10–72, wght 100–900 | — | latin, latin-ext, vietnamese | 2025-02-05 |
| Big Shoulders Stencil | Display | Patric King | opsz 10–72, wght 100–900 | — | latin, latin-ext, vietnamese | 2025-02-05 |
| League Gothic | Sans Serif | Tyler Finck, Caroline Hadilaksono, Micah Rich | wdth 75–100 | — | latin, latin-ext, vietnamese | 2021-12-09 |
| Antonio | Sans Serif | Vernon Adams | wght 100–700 | — | latin, latin-ext | 2013-03-05 |
| Alumni Sans | Sans Serif | Robert Leuschke | wght 100–900 | yes | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2021-06-19 |
| Darker Grotesque | Sans Serif | Gabriel Lam, ViệtAnh Nguyễn | wght 300–900 | — | latin, latin-ext, vietnamese | 2019-06-19 |
| Anton | Sans Serif | Vernon Adams | static 400 | — | latin, latin-ext, vietnamese | 2011-02-23 |
| Bebas Neue | Sans Serif | Ryoichi Tsunekawa | static 400 | — | latin, latin-ext | 2019-10-16 |

### Futuristic, sci-fi & experimental display

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Unbounded | Sans Serif | NaN | wght 200–900 | — | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2022-11-07 |
| Syne | Sans Serif | Bonjour Monde, Lucas Descroix, George Triantafyllakos | wght 400–800 | — | greek, latin, latin-ext | 2020-08-25 |
| Tektur | Display | Adam Jagosz | wdth 75–100, wght 400–900 | — | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2023-06-15 |
| Major Mono Display | Monospace | Emre Parlak | static 400 | — | latin, latin-ext, vietnamese | 2018-12-11 |
| Kode Mono | Monospace | Isa Ozler | ROND 0–100, wdth 75–125, wght 400–700 | — | latin, latin-ext | 2023-05-19 |
| Doto | Sans Serif | Óliver Lalan | ROND 0–100, wght 100–900 | — | latin, latin-ext | 2024-11-05 |
| Handjet | Display | Rosetta, David Březina | ELGR 1–2, ELSH 0–16, wght 100–900 | — | arabic, armenian, cyrillic, cyrillic-ext, greek, hebrew, latin, latin-ext, vietnamese | 2020-09-11 |
| Workbench | Monospace | Jens Kutílek | BLED 0–100, SCAN -53–100 | — | latin, math, symbols | 2024-01-23 |
| Sixtyfour | Monospace | Jens Kutílek | BLED 0–100, SCAN -53–100 | — | latin, latin-ext, math, symbols | 2024-01-23 |
| Jacquard 24 | Display | Sarah Cadigan-Fried | static 400 | — | latin, latin-ext | 2024-04-10 |
| Tilt Warp | Display | Andy Clymer | XROT -45–45, YROT -45–45 | — | latin, latin-ext, vietnamese | 2022-12-01 |
| Climate Crisis | Display | Daniel Coull, Eino Korkala | YEAR 1979–2050 | — | cyrillic, cyrillic-ext, latin, latin-ext | 2022-09-30 |
| Nabla | Display | Arthur Reinders Folmer, Just van Rossum | EDPT 0–200, EHLT 0–24 | — | cyrillic-ext, latin, latin-ext, math, vietnamese | 2022-08-15 |
| Agu Display | Display | Seun Badejo | MORF 0–60 | — | latin, latin-ext, vietnamese | 2024-12-09 |
| Jaro | Sans Serif | Agyei Archer, Céline Hurka, Mirko Velimirović | opsz 6–72 | — | latin, latin-ext, vietnamese | 2024-03-14 |

### Mono / utility (captions, data, timecode)

| Family | Category | Designer(s) | Axes / styles | Italic | Subsets | Added |
|---|---|---|---|---|---|---|
| Martian Mono | Monospace | Roman Shamin, Evil Martians | wdth 75–112.5, wght 100–800 | — | cyrillic, cyrillic-ext, latin, latin-ext | 2022-11-25 |
| IBM Plex Mono | Monospace | Mike Abbink, Bold Monday | static 100/200/300/400/500/600/700 | yes | cyrillic, cyrillic-ext, latin, latin-ext, vietnamese | 2018-03-12 |
| JetBrains Mono | Monospace | JetBrains, Philipp Nurullin, Konstantin Bulenkov | wght 100–800 | yes | cyrillic, cyrillic-ext, greek, latin, latin-ext, vietnamese | 2020-11-18 |
| Geist Mono | Monospace | Andrés Briganti, Mateo Zaragoza, Guillermo Rauch, Evil Rabbit, José Rago, Facundo Santana | wght 100–900 | yes | cyrillic, cyrillic-ext, latin, latin-ext, symbols2, vietnamese | 2024-10-02 |
| Fragment Mono | Monospace | Wei Huang, URW Design Studio | static 400 | yes | cyrillic-ext, latin, latin-ext | 2022-10-23 |
| Chivo Mono | Monospace | Omnibus-Type | wght 100–900 | yes | latin, latin-ext, vietnamese | 2022-11-02 |
| Red Hat Mono | Monospace | MCKL | wght 300–700 | yes | latin, latin-ext | 2021-06-10 |
