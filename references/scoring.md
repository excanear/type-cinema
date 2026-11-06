# Typography scoring

Keep the **aesthetic** score and the **technical/legal** score separate. A font can be beautiful and still unshippable, or shippable and still wrong for the brief. Report both scores.

## 1. Criteria

Score each criterion from 1 to 5, and give one line of evidence for every score.

### A. Aesthetic fit (does it serve the art direction?)
| Criterion | Weight | 5 means |
|---|---|---|
| Art-direction compatibility | 30% | Clearly produces the brief's adjectives and avoids the anti-adjective |
| Originality | 20% | Not on the overused list, and recognisable without being a gimmick |
| Visual impact | 25% | Holds a hero composition by itself |
| Legibility, at the role's sizes | 25% | Comfortable at the actual sizes this role will use |

### B. Technical and legal suitability (can we ship it well?)
| Criterion | Weight | 5 means |
|---|---|---|
| Family versatility | 20% | The weights, italics, widths and opsz needed for every assigned role |
| Technical quality | 25% | Good spacing, kerning, hinting and OpenType features (tnum, smcp, onum), plus the scripts the brief needs |
| Web suitability | 25% | WOFF2 available, variable or a small file count, good rendering at the sizes used |
| Licensing clarity | 30% | License verified for every required scope, including subsetting if planned |

`Aesthetic = Σ(score × weight)` and `Technical = Σ(score × weight)`. Each falls between 1.0 and 5.0.

## 2. Decision rules

- **Hard gate:** if Licensing clarity is below 3, mark the font *not recommendable* until the license is verified, however high it scores elsewhere.
- **Hard gate:** if Legibility is below 3 for a text or UI role, the font cannot hold that role. It may still work as display.
- **Recommend** when both scores are ≥ 3.8.
- **Consider** when one score is ≥ 3.8 and the other is ≥ 3.0. Name the trade-off.
- **Reject** otherwise.
- Breaking ties: prefer fewer files, then broader script coverage, then the more distinctive voice.

## 3. Output table

```
| Font | Role | Aesthetic | Technical | License | Verdict | Why (one line) |
|---|---|---|---|---|---|---|
| Fraunces | display | 4.4 | 4.6 | OFL ✔ web/app/logo | Recommend | opsz + SOFT give a warm, literary voice at 120px without hairline collapse |
```

Note who or what produced each score, for example "evaluated on specimen at 16/32/120px, dark and light". Don't present a score as more objective than it is.
