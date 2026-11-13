# The 2n−1 arc minimum in Koljančić–Oblak, Problem 1.8 (p. 759)

Creators, in order: Haobo Ma (ChronoAI Pte Ltd, Singapore); Wenlin Zhang
(National University of Singapore; ChronoAI Pte Ltd, Singapore).

License for the original note and its original supporting files: CC BY 4.0
(`cc-by-4.0`). Third-party works are cited, not redistributed.

## Contents

- `note.tex`: the sole main LaTeX source; its bibliography is embedded.
- `note.pdf`: the corresponding readable note.
- `metadata.json`: stable identity, creators, license, and mathematical scope.
- `verify.py`: deterministic finite checks using Python's standard library.
- `verification.json`: finite-check results.
- `claim-evidence.json`: exact statement, source locators, and proof correspondence.

## Build

Use Tectonic 0.17.0:

```sh
tectonic note.tex
```

Alternatively, use a standard LaTeX installation:

```sh
pdflatex -interaction=nonstopmode -halt-on-error note.tex
pdflatex -interaction=nonstopmode -halt-on-error note.tex
```

No external bibliography file, figure, or nonstandard font is required.

## Finite checks

```sh
python3 verify.py --output verification.json
```

The script uses rational row reduction for all zero–one supports of orders
1–3 and modular full-rank certificates for integer endpoint-path matrices.
A nonzero minor modulo the prime 1000003 is a nonzero integer minor, so
these certificates imply full rank over the reals. The script also checks
the transpose convention on a nonsymmetric pair of explicit matrices,
the disconnected allowing example, and a repeated-spectrum obstruction.
The exact ranges and case counts appear in its JSON output.

## Mathematical scope

The note gives written proofs of the all-positive-order minimum, the
`2n−c` component bound, the connected-allowing bound, both questions of
Problem 2.9, and the extremal centralizer isomorphism. The arbitrary-real-
weight endpoint construction is credited to Koljančić–Oblak, Theorem 5.5.

The same minimum answers Arav et al., Problem 6.2: a zero–nonzero pattern
requiring the similarity-transversality property (STP) needs exactly
`2n−1` nonzero entries. Problem numbering and the equivalent reformulation
are attributed to Koljančić–Oblak, pp. 756 and 759. The bibliography gives
Arav et al., *Linear Algebra and its Applications* 721 (2025), 102–121,
DOI `10.1016/j.laa.2024.05.013`.

The corresponding Lean file is pinned at:

https://github.com/the-omega-institute/trureturing/blob/cc684e6326490f9173bfefcadb0294ee6ccbb0b5/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean

Its `result` is the all-positive-order requiring minimum;
`nssp_centralizer_cycle_bound` gives the incidence-rank inequality;
`nssp_arc_bound_of_connected` gives the connected allowing lower bound;
`requires_connected` supplies weak connectivity; and `endpoint_requires`
and `endpoint_attainment` supply the universal sharp family.
The component-count formulation and equality isomorphism are written
deductions in the note. Finite checks corroborate specified integer
instances and do not substitute for these general proofs.

The coverage table credits Carptopus's dated public proof of Question 5.11
and the allow/not-allow part of Problem 1.6. It does not claim the full
require/allow/not-allow classification or a classification of all equality
supports.
