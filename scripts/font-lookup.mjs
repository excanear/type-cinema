#!/usr/bin/env node
// type-cinema · font-lookup
// Looks up a typeface in the OFFICIAL metadata of Fontshare and Google Fonts, plus Velvetyne's GitLab group.
// It prints only what those sources return, and prints NOT FOUND otherwise.
//
// Usage:
//   node scripts/font-lookup.mjs "Fraunces"
//   node scripts/font-lookup.mjs "Satoshi" --json
//   node scripts/font-lookup.mjs --refresh-check      (catalog sizes + license-type counts)
// Requires Node 18+ (global fetch).

const UA = { "User-Agent": "type-cinema-font-lookup" };
const args = process.argv.slice(2);
const asJson = args.includes("--json");
const refresh = args.includes("--refresh-check");
const query = args.filter((a) => !a.startsWith("--")).join(" ").trim();
const today = new Date().toISOString().slice(0, 10);
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

async function getJSON(url, strip = false) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  let txt = await res.text();
  if (strip) txt = txt.replace(/^\)\]\}'/, "");
  return JSON.parse(txt);
}

async function fontshare() {
  const d = await getJSON("https://api.fontshare.com/v2/fonts?limit=500");
  return d.fonts || [];
}
async function google() {
  const d = await getJSON("https://fonts.google.com/metadata/fonts", true);
  return d.familyMetadataList || [];
}
async function velvetyne() {
  return getJSON("https://gitlab.com/api/v4/groups/velvetyne/projects?per_page=100&include_subgroups=true");
}
async function googleLicenseDir(family) {
  const dir = family.toLowerCase().replace(/\s+/g, "");
  for (const lic of ["ofl", "apache", "ufl"]) {
    const r = await fetch(`https://raw.githubusercontent.com/google/fonts/main/${lic}/${dir}/METADATA.pb`, { method: "HEAD", headers: UA });
    if (r.ok) return lic;
  }
  return null;
}

function fsRecord(f) {
  const styles = f.styles || [];
  const axes = [...new Set((f.axes || []).map((a) => `${a.tag || a.property} ${a.range_left}–${a.range_right}`))];
  const statics = styles.filter((s) => !s.is_variable).map((s) => (s.weight?.name || "") + (s.is_italic ? " (italic)" : ""));
  return {
    source: "Fontshare API",
    name: f.name,
    slug: f.slug,
    designer_foundry: `${(f.designers || []).map((d) => d.name).join(", ")} · ${f.publisher?.name || ""}`,
    category: f.category,
    tags: (f.font_tags || []).map((t) => t.name || t),
    variable_axes: axes.length ? axes : "static",
    static_styles: statics,
    script: f.script,
    license: f.license_type === "itf_ffl" ? "ITF Free Font License (no subsetting/conversion — see references/licensing.md)" : f.license_type === "sil_ofl" ? "SIL OFL 1.1" : f.license_type,
    specimen_url: `https://www.fontshare.com/fonts/${f.slug}`,
    download_url: `https://api.fontshare.com/v2/fonts/download/${f.slug}`,
    css_api: `https://api.fontshare.com/v2/css?f[]=${f.slug}@${axes.length ? "1" : "400"}&display=swap`,
    status: `VERIFIED (Fontshare API, ${today})`,
  };
}

async function gfRecord(f) {
  const lic = await googleLicenseDir(f.family).catch(() => null);
  const styles = Object.keys(f.fonts || {});
  return {
    source: "Google Fonts metadata",
    name: f.family,
    designer_foundry: (f.designers || []).join(", "),
    category: f.category,
    variable_axes: (f.axes || []).length ? f.axes.map((a) => `${a.tag} ${a.min}–${a.max} (default ${a.defaultValue})`) : "static",
    static_styles: styles,
    italic: styles.some((k) => k.endsWith("i")),
    subsets: (f.subsets || []).filter((s) => s !== "menu"),
    date_added: f.dateAdded,
    color_capabilities: f.colorCapabilities?.length ? f.colorCapabilities : undefined,
    license: lic ? { ofl: "SIL OFL 1.1", apache: "Apache 2.0", ufl: "Ubuntu Font License" }[lic] + ` (google/fonts/${lic}/)` : "UNVERIFIED — license dir not found",
    specimen_url: `https://fonts.google.com/specimen/${f.family.replace(/ /g, "+")}`,
    status: `VERIFIED (Google Fonts metadata, ${today})`,
  };
}

function print(rec) {
  if (asJson) return console.log(JSON.stringify(rec, null, 2));
  console.log(`\n── ${rec.name}  [${rec.source}]`);
  for (const [k, v] of Object.entries(rec)) {
    if (k === "name" || k === "source" || v === undefined) continue;
    console.log(`  ${k.padEnd(18)} ${Array.isArray(v) ? v.join(", ") : v}`);
  }
}

async function main() {
  if (refresh) {
    const [fs, gf, vv] = await Promise.allSettled([fontshare(), google(), velvetyne()]);
    if (fs.status === "fulfilled") {
      const c = fs.value.reduce((m, f) => ((m[f.license_type] = (m[f.license_type] || 0) + 1), m), {});
      console.log(`Fontshare: ${fs.value.length} families · license types ${JSON.stringify(c)}`);
    } else console.log(`Fontshare: ERROR ${fs.reason.message}`);
    console.log(gf.status === "fulfilled" ? `Google Fonts: ${gf.value.length} families` : `Google Fonts: ERROR ${gf.reason.message}`);
    console.log(vv.status === "fulfilled" ? `Velvetyne GitLab: ${vv.value.length} projects` : `Velvetyne GitLab: ERROR ${vv.reason.message}`);
    console.log(`Checked ${today}. Compare with the dates in libraries/*.md.`);
    return;
  }
  if (!query) {
    console.error('Usage: node scripts/font-lookup.mjs "<Family name>" [--json] | --refresh-check');
    process.exit(1);
  }
  const q = norm(query);
  let found = 0;

  const [fs, gf, vv] = await Promise.allSettled([fontshare(), google(), velvetyne()]);

  if (fs.status === "fulfilled") {
    for (const f of fs.value.filter((f) => norm(f.name) === q || norm(f.slug) === q)) { print(fsRecord(f)); found++; }
  } else console.error(`Fontshare unavailable: ${fs.reason.message}`);

  if (gf.status === "fulfilled") {
    for (const f of gf.value.filter((f) => norm(f.family) === q)) { print(await gfRecord(f)); found++; }
  } else console.error(`Google Fonts unavailable: ${gf.reason.message}`);

  if (vv.status === "fulfilled" && Array.isArray(vv.value)) {
    for (const p of vv.value.filter((p) => norm(p.name) === q || norm(p.path) === q)) {
      print({
        source: "Velvetyne GitLab",
        name: p.name,
        repo: p.web_url,
        description: p.description || "",
        license: "Read LICENSE.txt / COPYRIGHT.md in the repo (Reserved Font Names may apply)",
        status: `CATALOG until LICENSE.txt is read (${today})`,
      });
      found++;
    }
  } else if (vv.status === "rejected") console.error(`Velvetyne GitLab unavailable: ${vv.reason.message}`);

  if (!found) {
    const names = { 0: "Fontshare", 1: "Google Fonts", 2: "Velvetyne" };
    const ok = [fs, gf, vv].map((r, i) => (r.status === "fulfilled" ? names[i] : null)).filter(Boolean);
    const down = [fs, gf, vv].map((r, i) => (r.status === "rejected" ? names[i] : null)).filter(Boolean);
    console.log(`\nNOT FOUND in ${ok.join(", ") || "any reachable source"}: "${query}".`);
    if (down.length) console.log(`Not searched (unavailable, retry later): ${down.join(", ")}. Velvetyne entries are also in libraries/velvetyne.md.`);
    console.log("Check the foundry's own site (see libraries/foundries.md) and mark the font UNVERIFIED until confirmed.");
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
