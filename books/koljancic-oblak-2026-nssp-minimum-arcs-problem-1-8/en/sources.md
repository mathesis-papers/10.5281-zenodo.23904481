# Sources, scope, and contributions

## The paper and its predecessors

- Haobo Ma and Wenlin Zhang, *The 2n−1 arc minimum in Koljančić–Oblak, Problem 1.8 (p. 759)*, version 3, 2026. [Exact-version paper and source](https://doi.org/10.5281/zenodo.23904482), CC BY 4.0. Haobo Ma: ChronoAI Pte Ltd, Singapore. Wenlin Zhang: National University of Singapore and ChronoAI Pte Ltd, Singapore. The concept DOI [10.5281/zenodo.23904481](https://doi.org/10.5281/zenodo.23904481) groups versions; the citations in this reading refer to version 3.
- S. Koljančić and P. Oblak, *Combinatorial aspects of the nonsymmetric strong spectral property for graphs*, Electronic Journal of Linear Algebra **42** (2026), 755–779, [DOI:10.13001/ela.2026.10523](https://doi.org/10.13001/ela.2026.10523), [versioned preprint](https://arxiv.org/abs/2604.21552v1). Problem 1.8 is on journal p. 759; Problem 2.9 is on p. 764. The endpoint construction is Theorem 5.5 with $m=1$, p. 771, and Remark 2.10(A), p. 764. Theorem 2.7(B), p. 763, gives the earlier tree-support obstruction generalized here.
- M. Arav, F. J. Hall, H. van der Holst, Z. Li, A. Mathivanan, J. Pan, H. Xu and Z. Yang, *Advances on similarity via transversal intersection of manifolds*, Linear Algebra and its Applications **721** (2025), 102–121, [DOI:10.1016/j.laa.2024.05.013](https://doi.org/10.1016/j.laa.2024.05.013). The identification with their Problem 6.2 and the equivalence of STP with nSSP are those recorded by Koljančić–Oblak on pp. 756 and 759.
- Carptopus, *Spectral separation and the non-symmetric strong spectral property for looped double paths*, MathExplore Notes, v0.1-beta, 19 August 2026, [commit-pinned text](https://github.com/Carptopus/MathExplore-Notes/blob/e57ee007380cbc351eb371d8e991303cab5f1e48/research/nssp-looped-double-paths/nssp-looped-double-paths.tex). Source Theorem 6.1 and Corollary 6.2 provide earlier path allowability results. This is a public mathematical note, not a journal publication.

Original theorem numbers above refer to their original publications. In the present paper, one shared counter numbers Theorem 1, Lemma 2, Theorem 3, Corollary 4, and Lemmas 5–7. The [precise chapter](statements.md) links its statements to those source items.

## What the formal proof establishes

The [public Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) proves the all-positive-order requiring minimum, the connected lower bound for a single nSSP realization, requiring-support connectivity, a loop-preserving eigenvalue-one realization, and the endpoint-looped path's requiring property. It uses arbitrary real weights of either sign and the same transpose convention as the paper. The formal indexing starts at zero; the exposition starts at one.

The full component-dimension chain and its equality isomorphism are written deductions explained here in full. The two strongly connected minima also follow by the explicit directed-path argument given here. The unrestricted centralizer dimension bound is already proved inside the formal source; a contribution can expose it for direct reuse. These distinctions concern the exact statements available in the formal library. They do not turn proved mathematical deductions into conjectures. The [statement comparison](https://github.com/mathesis-papers/10.5281-zenodo.23904481/blob/main/.mathesis/review.json) records the declaration correspondence.

Finite rational and finite-field checks reported with the source concern only their recorded finite ranges. They do not establish the theorem for all orders or all real weights. The universal result follows from the argument above.

The result does not classify all equality supports, settle arbitrary sign-pattern allowability, or give the full require/allow/not-allow classification for looped paths. The unrestricted allowing minimum is a different question, as the two-loop example shows. Earlier answers concerning looped-path allowability and Question 5.11 are credited to Carptopus in the paper's source-coverage discussion.

## Contribute to the remaining formal statements

Use the canonical shared requests below. Each task reuses existing centralizer and endpoint proofs.

- [Expose the existing centralizer dimension lemma](https://github.com/the-omega-institute/trureturing-requests/issues/189): the mathematical proof already exists internally; provide a public reusable statement.
- [Complete the component formula and equality isomorphism](https://github.com/the-omega-institute/trureturing-requests/issues/190): reuse the centralizer-to-flow injection, prove the component incidence-rank identity, and deduce the same-dimension isomorphism. The equality consequence shares the parent argument.
- [Derive the strongly connected minima](https://github.com/the-omega-institute/trureturing-requests/issues/191): reuse the connected lower bound and endpoint attainment, adding the directed connectivity bridge.

Coordinate mathematical scope on the request, then develop a focused branch in your contributor fork and submit a PR directly to upstream `dev` under its [contribution rules](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md). The shared request is the coordination point. GitHub activity alone does not establish exact statement coverage or grant Mathesis credit.
