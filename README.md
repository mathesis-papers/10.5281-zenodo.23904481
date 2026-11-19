# The 2n−1 arc minimum in Koljančić–Oblak, Problem 1.8 (p. 759)

**Authors:** Haobo Ma, Wenlin Zhang

Koljančić–Oblak's Problem 1.8, Electronic Journal of Linear Algebra 42 (2026), p. 759, has an affirmative answer: the minimum number of arcs in an n-vertex digraph requiring the nonsymmetric strong spectral property is 2n−1 for every n≥1. By their identification with Arav et al.'s Problem 6.2, this also gives the minimum 2n−1 of nonzero entries in a zero–nonzero pattern requiring the similarity-transversality property (STP). We give a self-contained exposition of the centralizer–incidence proof formalized in Lean. More generally, every real matrix with this property and with c weak support components has at least 2n−c nonzero entries. For connected supports, even allowing one such matrix forces 2n−1 arcs. Together with the endpoint-looped double path of Koljančić–Oblak, this also answers both questions in their Problem 2.9 (p. 764). The endpoint construction is prior work.

- PDF: [frozen public file](paper.pdf)
- DOI: [https://doi.org/10.5281/zenodo.23904482](https://doi.org/10.5281/zenodo.23904482)
- Concept DOI: [https://doi.org/10.5281/zenodo.23904481](https://doi.org/10.5281/zenodo.23904481)
- License: CC-BY-4.0
- Version: 3
- Mathesis record: [koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8](https://mathesis-omega-research.apps.chrono-ai.fun/papers/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8?version=3)

## How to cite

Haobo Ma, Wenlin Zhang (2026). The 2n−1 arc minimum in Koljančić–Oblak, Problem 1.8 (p. 759). Mathesis, version 3. https://doi.org/10.5281/zenodo.23904482

## Statement progress

| Statement | Formalization status | Source | Verification basis |
|---|---|---|---|
| Theorem (s1) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Lemma (s2) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Theorem (s3) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Corollary (s4) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Lemma (s5) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Lemma (s6) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |
| Lemma (s7) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) | No public receipt |

## Contributions

Original authors are listed above. Formalization contributors and attribution are retained in `formalization/nodes.json`; repository pull requests do not confer verification or credit. Submit formalization attempts through the Mathesis attempt path described in [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- Mathesis generated repository guide; refresh with paper.py front. -->

## Reading and materials

[Paper site](https://papers.trureturing.org/10.5281-zenodo.23904481/) · [Frozen PDF](paper.pdf) · [Citation](CITATION.cff)

[中文阅读](https://papers.trureturing.org/10.5281-zenodo.23904481/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/zh/) · [Read in English](https://papers.trureturing.org/10.5281-zenodo.23904481/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/en/)

[Slides](https://papers.trureturing.org/10.5281-zenodo.23904481/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/slides/) ([sources](books/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/slides/)) · [Videos](https://papers.trureturing.org/10.5281-zenodo.23904481/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/films/) ([sources](books/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/films/))

These are publication routes; available built materials are inventoried in [mathesis-materials.json](https://papers.trureturing.org/10.5281-zenodo.23904481/mathesis-materials.json).

## Book and formalization

Catalog formalization status above is separate from the statement comparisons below. A nearby declaration does not verify the complete written result.

| Book result | Comparison with formal base | Compared declaration |
|---|---|---|
| `thm-minimum` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.result` |
| `thm-strong` | variant | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.result` |
| `lem-centralizer` | none | — |
| `thm-cycle` | variant | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_centralizer_cycle_bound` |
| `thm-rank` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_centralizer_cycle_bound` |
| `cor-bound` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_arc_bound_of_connected` |
| `cor-equality` | variant | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_arc_bound_of_connected` |
| `lem-loop` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.loop_support_eigenvalue_one` |
| `lem-connected` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.requires_connected` |
| `lem-path` | same | `D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.endpoint_requires` |

Book stage: **complete**; 0 pending claims. [Statement comparisons](.mathesis/review.json).

## Repository map

| Zone | Location |
|---|---|
| Paper record | `paper.json`, `CITATION.cff`, `paper.pdf`, `manuscript/`, `formalization/nodes.json`, `LICENSES/`, `.mathesis/` |
| Content | `books/koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8/`: Chinese/English text, figures, visualizations, videos, slides, assets |
| Machinery | Upstream and layer managed paths; update with `tbook template update` |
| Repository front | This README, changelog, contribution guide, licence, project/site/pin configuration, `template.d/` |

See [the enforced layout](docs/layer-mathesis/LAYOUT.md). Preparation run records and built outputs stay outside the committed tree.
