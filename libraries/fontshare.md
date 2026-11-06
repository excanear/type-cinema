# Fontshare library: verified

**Source:** the official Fontshare API `https://api.fontshare.com/v2/fonts`, fetched on **2026-11-06**. It returned 100 families. The license text comes from `License/FFL.txt` inside the official download zip.
**Status:** every fact in the table below is `VERIFIED (Fontshare API, 2026-11-06)`. Visual notes in §2 are editorial judgment. Check them against the specimen at `https://www.fontshare.com/fonts/<slug>`.

## 1. Licensing at a glance

- `ITF FFL` is the **ITF Free Font License v2.0**. Commercial, web, app, video, broadcast, games and logo use are allowed. **Subsetting, format conversion, renaming, redistribution and offering the font to third parties (agencies, SaaS) are forbidden.** See `references/licensing.md`.
- `SIL OFL` is the SIL Open Font License 1.1. These families (Archivo, Anton, Space Grotesk and others) are open source, and Fontshare redistributes them.
- **Download:** `https://api.fontshare.com/v2/fonts/download/<slug>` returns a zip with `Fonts/OTF`, `Fonts/TTF` and `Fonts/WEB/fonts/*.woff2`, plus `Fonts/WEB/css/`, a README and the license.
- **CSS API (optional):** `https://api.fontshare.com/v2/css?f[]=<slug>@<weights>&display=swap`. Weight `1` is the variable roman and `2` the variable italic. Production: self-host the shipped WOFF2 files.
- Script coverage: the API reports `script: latin` for every family. Check language support (for example Vietnamese) in the specimen before you commit.

## 2. Picks by direction (editorial notes, confirm on specimen)

| Direction | Families | Why they're worth a look |
|---|---|---|
| Editorial / prestige serif | **Zodiak** (wght 100–900, italics), **Boska** (Serif, Display; 200–900), **Erode**, **Gambetta**, **Sentient**, **Rowan**, **Bespoke Serif** | Fontshare tags them for Editorial, Magazines and Books. All have true italics and wide weight ranges, so you can build a full display-to-text serif system in one family |
| Neutral / grotesk text & UI | **Switzer** (100–900 + italics), **General Sans**, **Satoshi**, **Supreme**, **Synonym**, **Author**, **Plein** | Wide weight ranges with italics. A calmer counterpart to an expressive display face |
| Expressive grotesk display | **Cabinet Grotesk** (100–900), **Clash Display** / **Clash Grotesk** (200–700), **Technor**, **Expose**, **Excon** | A display voice inside the grotesk genre. Note: Clash, Satoshi and Cabinet are popular, so justify them (see `references/anti-generic.md`) |
| Cinematic / titles | **New Title** (tags: Titles, Films, Credits, Magazines), **Melodrama** (Sans, Display), **Tanker**, **Kola**, **Gambarino** | Display-only voices. Keep them at ≥ 40px |
| Architectural / wide | **Panchang** (200–800), **Array** (has *Wide* styles: Regular/Wide, Semibold/SemiboldWide, Bold/BoldWide) | Built-in width contrast for condensed × extended systems |
| Stencil / slab / industrial | **Bespoke Stencil**, **Bespoke Slab**, **Trench Slab**, **Hoover** | Bespoke Serif, Sans, Slab and Stencil form a **superfamily** with the same designers and weight range (300–800). That makes coherent multi-voice systems possible |
| Experimental / poster | **Kihim**, **Stardom**, **Striper**, **Zina**, **Segment**, **Styro**, **Bevellier**, **Aktura** (Blackletter/Display) | Single-gesture display faces. Use them sparingly |
| Utility / mono | **JetBrains Mono**, **Azeret Mono** (OFL); **RX100** (tags: Monospaced, Signage) | Captions, data, timecode |

## 3. Full verified catalog

Static styles counts uprights, with italics noted separately. Variable axes are as reported by the API. A doubled axis in the raw data means separate roman and italic variable files.

| Family | Slug | Category | Designer(s) | Variable axes | Static styles | License | Fontshare tags |
|---|---|---|---|---|---|---|---|
| Aktura | `aktura` | Serif, Blackletter, Display | Gaetan Baehr | static | 1 | ITF FFL | Websites, Poster, Magazines |
| Alpino | `alpino` | Sans | Alisa Nowak, Jérémie Hornus | wght 100–900 | 6 | ITF FFL | Magazines, Posters, Branding, Books |
| Amulya | `amulya` | Sans | Joana Correia | wght 300–700 | 4 + italics | ITF FFL | Books, Logos, Posters, Magazines |
| Anton | `anton` | Sans, Display | Vernon Adams | static | 1 | SIL OFL | Headlines, Banners, Books, Apps, Tight |
| Archivo | `archivo` | Sans | Omnibus-Type | wght 100–900 | 9 + italics | SIL OFL | Legible, Banners, Clean, Websites, Screen |
| Array | `array` | Display | Frode Helland | static | 6 | ITF FFL | Branding, Magazines, Signage, Posters |
| Asap | `asap` | Sans | Omnibus-Type | wght 400–700 | 4 + italics | SIL OFL | friendly, Packaging, Soft, Posters |
| Author | `author` | Sans | Satya Rajpurohit | wght 200–700 | 6 + italics | ITF FFL | Branding, Books, Logos, Magazines |
| Azeret Mono | `azeret-mono` | Sans | Displaay, Martin Vácha, Daniel Quisek | wght 100–900 | 9 + italics | SIL OFL | Programming, coding, Apps |
| Be Vietnam Pro | `beVietnam-pro` | Sans | Lam Bao, Tony Le, Vietanh Nguyen | wght 100–900 | 9 + italics | SIL OFL | Websites, Apps, Banners, Legible |
| Bebas Neue | `bebas-neue` | Sans | Ryoichi Tsunekawa, Dharma Type | static | 1 | SIL OFL | Credits, Websites, Packaging, Menus |
| Bespoke Sans | `bespoke-sans` | Sans | Jérémie Hornus, Théo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu | wght 300–800 | 5 + italics | ITF FFL | Poster, Websites, Logos, Magazines |
| Bespoke Serif | `bespoke-serif` | Serif | Jeremie Hornus, Theo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu | wght 300–800 | 5 + italics | ITF FFL | Magazines, Posters, Books, Branding, Editorial |
| Bespoke Slab | `bespoke-slab` | Slab | Jérémie Hornus, Théo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu | wght 300–800 | 5 + italics | ITF FFL | Poster, Magazines, Websites, Logos |
| Bespoke Stencil | `bespoke-stencil` | Sans | Jérémie Hornus, Théo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu | wght 300–800 | 5 + italics | ITF FFL | Magazines, Poster, Logos, Websites |
| Bevellier | `bevellier` | Display | Arya Purohit, Barbara Bigosinska | wght 100–900 | 8 + italics | ITF FFL | Logos, Poster, Magazines, Websites |
| Bonny | `bonny` | Serif | Barbara Bigosinska | wght 100–700 | 5 | ITF FFL | Banners, Books, Logos, Magazines, Poster |
| Boska | `boska` | Serif, Display | Barbara Bigosinska | wght 200–900 | 6 + italics | ITF FFL | Magazines, Poster, Websites, Books, Logo, Screen |
| Boxing | `boxing` | Display | Ruosi Huang | static | 1 | ITF FFL | Editorial, Poster, Books |
| Britney | `britney` | Script | Diana Ovezea & Sabina Chipară | wght 300–900 | 4 | ITF FFL | Packaging, Poster, Screen, Websites, Album Covers, Books, Headlines, Logo, Magazines |
| Cabinet Grotesk | `cabinet-grotesk` | Sans | ITF | wght 100–900 | 8 | ITF FFL | Books, Magazines, Editorial, Posters |
| Chillax | `chillax` | Sans | Manushi Parikh | wght 200–700 | 6 | ITF FFL | Magazines, Logos, Books, Banners, Poster |
| Chubbo | `chubbo` | Display | Rafał Buchner | wght 200–700 | 5 + italics | ITF FFL | Logos, Magazines, Poster, Banners, Books |
| Clash Display | `clash-display` | Sans | Indian Type Foundry | wght 200–700 | 6 | ITF FFL | Banners, Editorial, Magazines |
| Clash Grotesk | `clash-grotesk` | Sans | Indian Type Foundry | wght 200–700 | 6 | ITF FFL | Text, Editorial, Magazines, Reading |
| Comico | `comico` | Handwritten | Frode Helland | static | 1 | ITF FFL | Handwriting, Comic, Editorial, Funny, Books |
| Crimson Pro | `crimson-pro` | Serif | Jacques Le Bailly | wght 200–900 | 8 + italics | SIL OFL | Magazines, Publishing, Editorial |
| Dancing Script | `dancing-script` | Script | Impallari Type | wght 400–700 | 2 | SIL OFL | Packaging, Banners, luxury, Posters, Beauty |
| Epilogue | `epilogue` | Sans | Tyler Finck, Etcetera Type Co | wght 100–900 | 9 + italics | SIL OFL | Headline, Banners, Logo, Websites, Products |
| Erode | `erode` | Serif | Nikhil Ranganathan | wght 300–700 | 5 + italics | ITF FFL | Magazines, Posters, Books, Branding |
| Excon | `excon` | Sans | Alisa Nowak | wght 100–900 | 6 | ITF FFL | Books, Editorial, Logos |
| Expose | `expose` | Sans | Lukas Schneider | wght 400–900 | 4 | ITF FFL | Magazines, Branding, Banners, Apps, Websites |
| Familjen Grotesk | `familjen-grotesk` | Sans | Familjen STHLM AB | wght 400–700 | 4 + italics | SIL OFL | Headline, Websites, Packaging, General, Banners |
| Fira Sans | `fira-sans` | Sans | Carrois Apostrophe | wght 1–950, wght 1–925 | 9 + italics | SIL OFL | Apps, Magazines, Screen, Branding |
| Gambarino | `gambarino` | Serif | Théo Guillard | static | 1 | ITF FFL | Magazines, Posters, Books, Editorial |
| Gambetta | `gambetta` | Serif | Paul Troppmar | wght 300–700 | 5 + italics | ITF FFL | Newspapers, Text, Books, Magazines |
| General Sans | `general-sans` | Sans | Frode Helland | wght 200–700 | 6 + italics | ITF FFL | Branding, Logos, Poster, Websites |
| Hind | `hind` | Sans | Manushi Parikh | wght 300–700 | 5 | SIL OFL | Broadcast, Books, Banners, Beauty, Branding |
| Hoover | `hoover` | Slab | Gaetan Baehr | wght 200–700 | 5 | ITF FFL | Logo, Magazines, Poster, Banners, Editorial, Logotype |
| JetBrains Mono | `jet-brains-mono` | Sans | JetBrains, Philipp Nurullin, Konstantin Bulenkov | wght 100–800 | 8 + italics | SIL OFL | Monospaced, Display, Code, Programming |
| Kalam | `kalam` | Handwritten | Indian Type Foundry | wght 300–700 | 3 | SIL OFL | handwritten, Comic, Children |
| Karma | `karma` | Serif | Joana Correia | wght 300–700 | 5 | SIL OFL | Banners, Editorial |
| Khand | `khand` | Sans | Satya Rajpurohit | wght 300–700 | 5 | SIL OFL | Banners, Broadcast, Display, Logotype |
| Kihim | `kihim` | Display | Rocky Malaviya | static | 1 | ITF FFL | Posters, Magazines, Experimental, Banners |
| Kohinoor Zerone | `kohinoor-zerone` | Display | Satya Rajpurohit | static | 2 | ITF FFL | Beauty, Headlines, Posters, Lettering, Cosmetic |
| Kola | `kola` | Display | Jean-Baptiste Morizot | static | 1 | ITF FFL | Editorial, Poster, Books |
| Literata | `literata` | Serif | TypeTogether | wght 200–900, opsz 7–72 | 8 + italics | SIL OFL | Legible, Clean, Books |
| Lora | `lora` | Serif | Cyreal, Olga Karpushina, Alexei Vanyashin | wght 400–700 | 4 + italics | SIL OFL | Publishing, Legible, Websites, Clean |
| Manrope | `manrope` | Sans | Mikhail Sharanda | wght 200–800 | 7 | SIL OFL | Logos, Websites, Banners, Apps |
| Melodrama | `melodrama` | Sans, Display | Shaily Patel | wght 300–700 | 5 | ITF FFL | Websites, Magazines, Branding, Banners, Posters |
| Merriweather Sans | `merriweather-sans` | Sans | Eben Sorkin, Sorkin Type | wght 300–800 | 6 + italics | SIL OFL | Branding, Legible, Readable |
| Montserrat | `montserrat` | Sans | Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly | wght 100–900 | 9 + italics | SIL OFL | Banners, Packaging, General, Posters, Websites |
| Neco | `neco` | Serif | Jitka Janečková | wght 400–900 | 4 + italics | ITF FFL | Reading, Menus, Magazines, Books |
| New Title | `new-title` | Sans, Display | Julie Soudanne, Jérémie Hornus | wght 200–700 | 5 | ITF FFL | Magazines, Branding, Titles, Films, Credits, Logos |
| Nippo | `nippo` | Display | Manushi Parikh | wght 200–700 | 5 | ITF FFL | Jerseys, Magazines, Sports, Posters, Websites, Banners |
| Nunito | `nunito` | Sans | Vernon Adams, Cyreal, Jacques Le Bailly | wght 200–1000, ital 0–1 | 8 + italics | SIL OFL | Invitation, Films, friendly, Headline |
| Oswald | `oswald` | Sans, Display | Vernon Adams, Kalapi Gajjar, Cyreal | wght 200–700 | 6 | SIL OFL | Compact, Magazines, Posters, Headlines |
| Outfit | `outfit` | Sans | On Brand Investments Pty Ltd, Rodrigo Fuenzalida | wght 100–900 | 9 | SIL OFL | Screen, Headline, Magazines, Websites, Packaging |
| Pally | `pally` | Sans | Indian Type Foundry | wght 400–700 | 3 | ITF FFL | Books, Comics, Editorial, Funny, Informal, Kids, Poster |
| Panchang | `panchang` | Sans | Barbara Bigosinska, Hitesh Malaviya | wght 200–800 | 7 | ITF FFL | Editorial, Magazines, Posters, Books |
| Paquito | `paquito` | Serif, Slab | Juanjo Lopez | wght 300–700 | 3 | ITF FFL | Funny, Books, Comics, Informal, Kids, Poster |
| Pencerio | `pencerio` | Script | Manushi Parikh | static | 1 | ITF FFL | Wedding, Titles, Signboards, Packaging, Fashion, Calligraphy |
| Pilcrow Rounded | `pilcrow-rounded` | Sans | Satya Rajpurohit | wght 400–900 | 5 | ITF FFL | Logos, Magazines, Branding, Books |
| Plein | `plein` | Sans | Inga Plönnigs | wght 300–900 | 5 + italics | ITF FFL | Poster, Books, Magazines, Newspapers |
| Plus Jakarta Sans | `plus-jakarta-sans` | Sans | Tokotype | wght 200–800 | 7 + italics | SIL OFL | Screen, Banners, Apps, General |
| Poppins | `poppins` | Sans | Jonny Pinhorn, Indian Type Foundry | wght 100–900 | 9 + italics | SIL OFL | Apps, Corporate, Poppins, Broadcast, Banners |
| Pramukh Rounded | `pramukh-rounded` | Sans | Aarya Purohit, Indian Type Foundry | wght 200–900 | 8 + italics | ITF FFL | Headlines, Books, Editorial, Text, Posters |
| Public Sans | `public-sans` | Sans | Pablo Impallari, Rodrigo Fuenzalida, Dan Williams, USWDS | wght 100–900 | 9 + italics | SIL OFL | Headlines, Reading, Clean, Logos |
| Quicksand | `quicksand` | Sans | Andrew Paglinawan | wght 300–700 | 5 | SIL OFL | Headlines, Branding, Fashion, Poster |
| Quilon | `quilon` | Sans | Jonny Pinhorn | wght 400–700 | 4 | ITF FFL | Websites, Banners, Magazines, Posters |
| Rajdhani | `rajdhani` | Sans | Shiva Nallaperumal, Indian Type Foundry | wght 300–700 | 5 | SIL OFL | Headlines, Tech, Websites, Branding, Broadcast |
| Ranade | `ranade` | Sans | Easha Ranade, Indian Type Foundry | wght 100–700 | 5 + italics | ITF FFL | Magazines, Books, Editorial, Posters |
| Recia | `recia` | Serif | Carlos de Toro | wght 300–700 | 5 + italics | ITF FFL | Code, Posters, Websites, Magazines |
| Red Hat Display | `red-hat-display` | Sans | MCKL, Jeremy Mickel | wght 300–900 | 7 + italics | SIL OFL | Magazines, Banners, Corporate, Websites |
| Rosaline | `rosaline` | Script | Jérémie Hornus | static | 1 | ITF FFL | Fashion, Editorial |
| Roundo | `roundo` | Sans | Indian Type Foundry | wght 200–700 | 6 | SIL OFL | App, Websites, Headline, Editorial |
| Rowan | `rowan` | Serif | Inga Plönnigs | wght 300–700 | 5 + italics | ITF FFL | Books, Text, Reading, Editorial |
| RX100 | `rx-100` | Sans | Anurag Gautam, Indian Type Foundry | wght 1–1000 | 1 | ITF FFL | Signage, Monospaced, Editorial, Programming |
| Satoshi | `satoshi` | Sans | Deni Anggara | wght 300–900 | 5 + italics | ITF FFL | Logos, Magazines, Branding |
| Segment | `segment` | Display | Frode Helland | static | 1 | ITF FFL | Posters, Magazines, Branding, Packaging |
| Sentient | `sentient` | Serif | Noopur Choksi | wght 200–700 | 5 + italics | ITF FFL | Poster, Newspapers, Books, Magazines |
| Sharpie | `sharpie` | Display | Théo Guillard | wght 300–900 | 5 | ITF FFL | Posters, Magazines, Lettering, Calligraphy, Pen |
| Sora | `sora` | Sans | Jonathan Barnbrook, Julián Moncada | wght 100–800 | 8 + italics | SIL OFL | Legible, Logotype, Websites, Products |
| Space Grotesk | `space-grotesk` | Sans | Florian Karsten | wght 300–700 | 5 | SIL OFL | Modern, Corporate, Banners, Apps |
| Spline Sans | `spline-sans` | Sans | Eben Sorkin, Mirko Velimirović | wght 300–700 | 5 | SIL OFL | Apps, workhorse, Headlines |
| Stardom | `stardom` | Display | Indian Type Foundry | static | 1 | ITF FFL | Branding, Fun, Poster, Experimental, Logos |
| Striper | `striper` | Display | Jitka Janečková | static | 1 | ITF FFL | Poster, Fun, Branding, Experimental, Logos |
| Styro | `styro` | Display | Aarya Purohit, Indian Type Foundry | wght 200–900 | 8 | ITF FFL | Posters, Headlines, Logos |
| Supreme | `supreme` | Sans | Jérémie Hornus, Ilya Naumoff | wght 100–800 | 7 + italics | ITF FFL | Poster, Magazines, Books, Logo, Websites, Screen |
| Switzer | `switzer` | Sans | Jérémie Hornus | wght 100–900 | 9 + italics | ITF FFL | Websites, Books, Logo, Magazines, Poster, Screen |
| Synonym | `synonym` | Sans | Hugo Dumont | wght 200–700 | 6 | ITF FFL | Posters, Editorial, Books, Branding, Magazines |
| Tabular | `tabular` | Sans | Jérémie Hornus, Julie Soudanne | wght 300–700 | 5 + italics | ITF FFL | Code, Websites, Posters, Magazines |
| Tanker | `tanker` | Sans | Ruosi Huang | static | 1 | ITF FFL | Books, Banners, Editorial, Logos, Poster |
| Technor | `technor` | Sans | Jean-Baptiste Morizot | wght 200–900 | 7 | ITF FFL | Books, Poster, Magazines, Logos |
| Teko | `teko` | Sans | Manushi Parikh | wght 300–700 | 5 | SIL OFL | Banners, Headlines, Credits |
| Telma | `telma` | Script | Jitka Janečková | wght 300–900 | 5 | ITF FFL | Invitation, Logos, Poster, Banners |
| Trench Slab | `trench-slab` | Slab | Shiva Nallaperumal | wght 300–700 | 5 | ITF FFL | Magazines, Logos, Headlines, Publishing, Books, Posters |
| Work Sans | `work-sans` | Sans | Wei Huang | wght 100–900 | 9 + italics | SIL OFL | News, Headline, workhorse, Corporate |
| Zina | `zina` | Display | Théo Guillard | static | 1 | ITF FFL | Bold, Readable, Display, Grunge, Posters |
| Zodiak | `zodiak` | Serif | Jérémie Hornus, Gaetan Baehr, Jean-Baptiste Morizot, Alisa Nowak, Theo Guillard | wght 100–900 | 6 + italics | ITF FFL | Editorial, Magazines, Books |
