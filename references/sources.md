# Research sources

What each source is good for, how far to trust it, and how to use it. Fetch results are dated 2026-11-06.

**Trust order:** foundry page, repository or API → Google Fonts or Fontshare official metadata → specimen sites → curators and archives → download aggregators.

## Primary sources (verifiable)

| Source | What it is | How to use it | Notes |
|---|---|---|---|
| **Fontshare**, fontshare.com | Indian Type Foundry's free library, about 100 families | Public JSON API: `https://api.fontshare.com/v2/fonts` returns name, slug, designers, category, tags, weights, variable axes and `license_type` (`itf_ffl` or `sil_ofl`). CSS API: `https://api.fontshare.com/v2/css?f[]=<slug>@<weights>&display=swap` | The website is rendered client-side, so plain fetching returns only the title. Use the API. In testing, the CSS API sometimes **dropped the second family** in multi-family requests. Check that the response contains every family, or self-host instead. Downloads: `https://api.fontshare.com/v2/fonts/download/<slug>` (zip with OTF, TTF, a WEB folder and `License/FFL.txt`) |
| **Google Fonts**, fonts.google.com | About 1,950 open-source families | Metadata JSON: `https://fonts.google.com/metadata/fonts` (strip the `)]}'` prefix). It includes family, category, designers, `axes` with min and max, `subsets` and `dateAdded`. CSS2 API for embedding | The license sits in the family's directory in `github.com/google/fonts` (`ofl/`, `apache/` or `ufl/`) |
| **Velvetyne**, velvetyne.fr | French libre foundry focused on experimental and display type | Repos on GitLab: `https://gitlab.com/api/v4/groups/velvetyne/projects`. Each repo has `LICENSE.txt`, `METADATA.yml` and `fonts/` | **On 2026-11-06 the website showed only a strike banner.** The GitLab repos stayed reachable and carry the license files |
| **V-Fonts**, v-fonts.com | Variable-font catalog by Nick Sherman | Filters by tag, designer, publisher, character set and **license** ("Paid/commercial", "Trial", "Free for non-commercial use", "Free for commercial use", "Open source"). Each entry lists axes with ranges | It is a catalog, so confirm the license at the publisher |

## Curators and editorial archives (taste and context, not licensing)

| Source | Use it for | Limits |
|---|---|---|
| **Fonts In Use**, fontsinuse.com | Real-world use across about 35k entries: posters, film, branding, web. Filter by topic and format, search typefaces | Some entries say "unidentified typeface". Use it to see how a face behaves in context, not to confirm a license |
| **Typewolf**, typewolf.com | Trend reading, "Site of the Day", lists of alternatives (Helvetica, Futura and others), free font lists | Shows popularity, and popularity breeds **generic** choices. See `anti-generic.md` |
| **Free Faces**, freefaces.gallery | Small, high-quality curated free typefaces (Display, Serif, Sans, Mono, Slab, Cursive) | It says fonts come under "a variety of free licences". Check each one |
| **Art of the Title**, artofthetitle.com | Title-sequence analysis, the best reference for cinematic typography | **Returned HTTP 403 to automated fetching.** Use it through a browser for reference only. Never copy a specific sequence |
| **Cinema Typography**, cinematypography.com | Typography from film posters and titles | Rendered client-side, so a fetch returns only the title. Browse it manually |

## Aggregators and stores (discovery leads only)

| Source | Notes |
|---|---|
| **1001 Fonts**, cinema tag | 199 fonts carry the tag. All 12 on page 1 were labelled "free for personal use". Use the "Commercial free" filter, then confirm with the author. Mostly retro or novelty display faces, so they are seldom right for premium work |
| **Awwwards**, "100 Best Free Fonts" and the free-font collections | A mix of licenses: personal, demo, trial and commercial. Check the label on each item |
| **MyFonts**, cinema tag | Retail marketplace (Monotype). The product list did not appear in a static fetch. Licenses follow each product's EULA |

## Independent foundries and libre sources worth checking live

These are listed as places to look. This skill has not verified their catalogs. Mark anything you take from them `UNVERIFIED` until you confirm it.

- Libre or free: **Collletttivo**, **Use & Modify** (Raphaël Bastide's list), **Open Foundry**, **The League of Moveable Type**, **Uncut.wtf**, **Badass Libre Fonts by Womxn**, **Bye Bye Binary**, **Tunera Type Foundry**
- Retail independents (premium, licenses metered by scope): **Pangram Pangram**, **Dinamo**, **Grilli Type**, **Klim Type Foundry**, **Commercial Type**, **Production Type**, **Colophon**, **Displaay**, **Sharp Type**, **OH no Type Co.**, **Lineto**, **Swiss Typefaces**, **Blaze Type**, **Future Fonts**, **Typotheque**, **TypeTogether**, **ATIPO**

## Research method when browsing is available

1. Start from the brief's classification (see `classification.md`), then search curators (Fonts In Use, Typewolf, Free Faces, V-Fonts) for candidates.
2. For each candidate, go to the **official source**. Note designer, styles, axes, scripts and the license URL.
3. Use `scripts/font-lookup.mjs <name>` to pull authoritative data from the Fontshare and Google Fonts metadata.
4. Record every candidate with the schema in `libraries/README.md`, including the status label.
