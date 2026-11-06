#!/usr/bin/env node
// type-cinema · fluid type scale generator
// Usage:
//   node scripts/type-scale.mjs                       (Editorial preset)
//   node scripts/type-scale.mjs --preset cinematic
//   node scripts/type-scale.mjs --min-base 16 --min-ratio 1.2 --max-base 19 --max-ratio 1.333 \
//        --min-vw 360 --max-vw 1440 --steps -1..6 --prefix step
// Output: CSS custom properties using clamp(rem, rem + vw, rem).

const PRESETS = {
  ui:        { minBase: 16, minRatio: 1.2,  maxBase: 17, maxRatio: 1.25 },
  editorial: { minBase: 16, minRatio: 1.2,  maxBase: 19, maxRatio: 1.333 },
  cinematic: { minBase: 16, minRatio: 1.25, maxBase: 20, maxRatio: 1.5 },
};

const a = process.argv.slice(2);
const opt = (k, d) => { const i = a.indexOf(`--${k}`); return i >= 0 ? a[i + 1] : d; };
const p = PRESETS[opt("preset", "editorial")] || PRESETS.editorial;
const cfg = {
  minBase: +opt("min-base", p.minBase), minRatio: +opt("min-ratio", p.minRatio),
  maxBase: +opt("max-base", p.maxBase), maxRatio: +opt("max-ratio", p.maxRatio),
  minVw: +opt("min-vw", 360), maxVw: +opt("max-vw", 1440),
  prefix: opt("prefix", "step"),
};
const [s0, s1] = opt("steps", "-1..6").split("..").map(Number);
const r = (x) => +x.toFixed(4);

console.log(`/* fluid scale: ${cfg.minBase}px×${cfg.minRatio} @${cfg.minVw}px → ${cfg.maxBase}px×${cfg.maxRatio} @${cfg.maxVw}px */`);
console.log(":root {");
for (let s = s0; s <= s1; s++) {
  const min = cfg.minBase * cfg.minRatio ** s;
  const max = cfg.maxBase * cfg.maxRatio ** s;
  const slope = (max - min) / (cfg.maxVw - cfg.minVw);
  const intercept = min - slope * cfg.minVw;
  const lo = Math.min(min, max), hi = Math.max(min, max);
  const name = `--${cfg.prefix}-${s < 0 ? "n" + -s : s}`;
  const warn = hi < 12 ? "  /* below 12px: use a fixed floor instead */" : "";
  console.log(`  ${name}: clamp(${r(lo / 16)}rem, ${r(intercept / 16)}rem + ${r(slope * 100)}vw, ${r(hi / 16)}rem); /* ${min.toFixed(1)} → ${max.toFixed(1)}px */${warn}`);
}
console.log("}");
