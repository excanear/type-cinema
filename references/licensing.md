# Licensing: verification protocol

A typeface is only a valid recommendation if its license covers the **intended use**. Check the license before you finish judging the aesthetics. Never take the license from an aggregator's label alone.

## 1. Usage scopes. Ask which ones apply.

| Scope | What it covers | Typical trap |
|---|---|---|
| Desktop | Installing the font on computers to make static artwork (print, images, video frames) | Many people assume this covers websites. It does not. |
| Webfont | Serving the font files to browsers through `@font-face` | Retail EULAs often meter this by monthly pageviews or by domain |
| App | Embedding the font in iOS, Android or desktop app binaries | Usually priced per app title |
| ePub / digital documents | Embedding in PDFs and ebooks | PDF embedding is often allowed. Ebooks often are not. |
| Broadcast / video | Use on-screen in film, TV or streaming | Some EULAs restrict this or price it separately |
| Logo / trademark | Using the font in a wordmark you register | Some free licenses forbid it. Others, like ITF FFL v2.0, allow it. |
| Modification | Subsetting, converting format, renaming, editing glyphs | **Subsetting and WOFF2 conversion count as modification under some licenses** |
| Third-party / SaaS | End users choose the font in your product, as in a template editor or a design tool | Forbidden by most free and retail licenses |
| Personal / non-commercial | Private, unpaid use only | **Excludes client work, portfolio pieces for a business, and any revenue-generating site** |
| Trial | Testing and pitching before you buy | Production use is forbidden |

## 2. License families. Check each against the actual text.

### SIL Open Font License 1.1 (OFL). Most Google Fonts and all checked Velvetyne repos use it.
- Commercial use, web embedding, app embedding and logos are allowed.
- You may modify the font, but a modified version must not use a **Reserved Font Name** if the copyright notice declares one. Subsetting and format conversion produce modified versions. Read the OFL FAQ and the font's own copyright line before you ship a renamed or subset build under the original name.
- You may not sell the font files **by themselves**. Bundling them with software is allowed.
- Source: https://openfontlicense.org/

### Apache License 2.0
- Permissive. Commercial use, modification and redistribution are allowed. You must keep the license and attribution notices.

### ITF Free Font License (FFL) v2.0, dated 17 Aug 2026. Used by Fontshare's `itf_ffl` fonts.
`VERIFIED (license file in the official Fontshare download, 2026-11-06)`. Key clauses:
- Allowed: "personal or commercial purposes, free of charge". Covers "Print, Websites, Mobile or Desktop Applications, … Video, Broadcasting and Games".
- Allowed: self-hosting, which the license calls "permitted and recommended". "Use of the Fontshare API is optional and is not required for web use."
- Allowed: logos and wordmarks, including registering them as trademarks.
- **Forbidden without written consent:** "modifying or replacing glyphs, **subsetting, format conversion**, or altering font names". **So you may not subset these fonts, and you may not convert TTF to WOFF2 yourself.** Use the WOFF2 files exactly as Fontshare ships them in the official zip, under `Fonts/WEB/fonts/`.
- **Forbidden:** handing the files to external agencies or contractors (they must download their own copy), and offering the font "as a selectable font for third-party users" (SaaS, template editors).
- The API comes with no availability guarantee, so self-hosting is the safer production choice.
- Not every font on Fontshare uses FFL. Some are `sil_ofl`, such as Archivo, Anton, Space Grotesk and JetBrains Mono. Check the `license_type` field. See `libraries/fontshare.md`.

### Retail EULAs: commercial foundries and marketplaces
- Each foundry writes its own terms. Read the actual EULA for each scope you need. Common models: desktop licenses priced by seat count, web licenses by pageviews or domains, app licenses by title.
- MyFonts and other marketplaces sell under the foundry's EULA or a marketplace EULA. Check which applies on the product page.

### "Free" on aggregators: high risk
- In the cinema tag on 1001fonts, every font on the first page carried the label "free for personal use" `CATALOG (2026-11-06)`. Commercial use requires the separate "Commercial free" filter, and then the author's own terms.
- The Awwwards "100 Best Free Fonts" list mixes "Free for personal use", "Demo font for personal use", "Trial License" and "Desktop and Web License. Commercial use allowed". Read the label on each item, then confirm with the author.
- Font trials, such as the free trial of PP Mori that Awwwards notes as limited to "personal projects, portfolio, pitches", are not production licenses.

## 3. Verification protocol (do it for every final font)

1. Find the **official source**: the foundry site, the foundry's repository, or Google Fonts. Do not stop at the aggregator.
2. Locate the license text: a `LICENSE`/`OFL.txt` file in the zip or repo, or the EULA page.
3. Check each scope the project needs from §1.
4. If the project will subset, convert, or rename files, check that the license allows modification.
5. Record the result as `font · license · scopes OK · restrictions · source URL · date checked`.
6. If anything stays ambiguous, mark it `LICENSE UNCLEAR`, recommend contacting the foundry, and offer a cleanly licensed alternative.

## 4. Output format

```
License: SIL OFL 1.1, VERIFIED (gitlab.com/velvetyne/murmure/LICENSE.txt, 2026-11-06)
Web ✔ · App ✔ · Logo ✔ · Subset ✔ (no Reserved Font Name issue found, confirm copyright line) · Resale of files ✘
```

Never write "free to use" without naming the license.
