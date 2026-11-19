# Precise statements and complete proofs

All matrices and vector spaces below are over $\mathbb R$. Let $E\subseteq[n]\times[n]$, $m=|E|$, and let $\mathcal M(E)$ be the matrices whose nonzero positions are exactly $E$. Loops are allowed and counted once. A support allows nSSP if some $A\in\mathcal M(E)$ has it, and requires nSSP if every such $A$ has it. The condition is

$$
A\circ X=0,\quad AX^{\mathsf T}=X^{\mathsf T}A
\quad\Longrightarrow\quad X=0
$$

for every real $X$, with no additional diagonal, trace, or symmetry condition. Here $\circ$ means multiplying corresponding entries. Setting $F=X^{\mathsf T}$ gives the commuting-matrix test used in the story. Weak connectivity ignores arc directions; strong connectivity means a directed path exists between every ordered pair of vertices, allowing a path of length zero.

The main theorem of the source bundles an unrestricted minimum with two strongly connected minima. We separate those clauses here so that each has its precise evidence.

::: {.theorem #thm-minimum title="The requiring minimum" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s1" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.result"}
For every integer $n\geq1$, every support requiring nSSP has at least $2n-1$ arcs, and a requiring support with exactly $2n-1$ arcs exists at that same order $n$.
:::

The proof is completed below after the connectivity and endpoint-path lemmas. This is the unrestricted clause of source Theorem 1, Section 1.

::: {.theorem #thm-strong title="The two strongly connected minima" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s1" status="written-proof" proof="pf-strong" doi="10.5281/zenodo.23904482" source="Theorem 1, Section 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/191"}
For every $n\geq1$, the minimum arc count over strongly connected supports requiring nSSP is $2n-1$. The minimum over strongly connected supports merely allowing nSSP is also $2n-1$.
:::

These are the remaining clauses of source Theorem 1. Their deduction appears after the endpoint construction; they are not included in the preceding formal statement.

## The dimension argument

Write $\mathcal Z(A)=\{F:AF=FA\}$. Let $B$ be the real $n\times m$ incidence matrix, with column $e_j-e_i$ for arc $(i,j)$. In particular a loop column is zero. Let $c$ count weak components, including isolated vertices. Define

$$
(T_AF)_{(i,j)}=a_{ij}f_{ji}\quad((i,j)\in E).
$$

::: {.lemma #lem-centralizer title="Centralizer dimension" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s2" status="written-proof" proof="pf-centralizer" doi="10.5281/zenodo.23904482" source="Lemma 2, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/189"}
Every real $n\times n$ matrix satisfies $\dim_{\mathbb R}\mathcal Z(A)\geq n$.
:::

::: {.proof #pf-centralizer}
Give $V=\mathbb R^n$ the $\mathbb R[t]$-module action $t\cdot v=Av$. It is finitely generated and torsion: the characteristic polynomial annihilates $A$. The cyclic decomposition theorem over the principal ideal domain $\mathbb R[t]$ gives

$$
V\simeq\bigoplus_r\mathbb R[t]/(p_r),
\qquad\sum_r\deg p_r=n.
$$

On each summand, multiplication by an arbitrary residue class commutes with multiplication by $t$. Extend that operation by zero on the other summands. Together these operations define a linear injection from $\bigoplus_r\mathbb R[t]/(p_r)$ into $\mathcal Z(A)$: evaluating on the class of $1$ in the $r$th summand recovers its multiplier. The domain has real dimension $n$, giving the bound. For $n=0$ both spaces have dimension zero. This is the argument of source Lemma 2. The same bound already occurs as an internal lemma of the linked formal proof; the contribution request concerns its public reuse.
:::

::: {.theorem #thm-cycle title="The component dimension chain" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s3" status="written-proof" proof="pf-cycle" doi="10.5281/zenodo.23904482" source="Theorem 3, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/190"}
If $A\in\mathcal M(E)$ has nSSP, then

$$
n\leq\dim\mathcal Z(A)\leq\dim\ker B,
$$

$$
\dim\ker B=m-n+c,\qquad m\geq2n-c.
$$
:::

::: {.proof #pf-cycle}
The map $T_A$ is linear. If $T_AF=0$, then $A\circ F^{\mathsf T}=0$: on $E$ this is the definition, and off $E$ it follows from $A=0$. Since $AF=FA$, nSSP applied to $X=F^{\mathsf T}$ gives $F=0$. Thus $T_A$ is injective. At each vertex $v$,

$$
(BT_AF)_v=\sum_i a_{iv}f_{vi}-\sum_j a_{vj}f_{jv}
$$

$$
=(FA)_{vv}-(AF)_{vv}=0.
$$

Hence its image lies in $\ker B$. Injectivity and the preceding lemma prove the two dimension inequalities. An element $p\in\ker B^{\mathsf T}$ satisfies $p_j-p_i=0$ on every arc. It is exactly a function constant on each weak component, so this kernel has dimension $c$. Rank-nullity and equality of the ranks of $B$ and $B^{\mathsf T}$ give $\operatorname{rank}B=n-c$ and $\dim\ker B=m-n+c$. Rearranging proves the arc bound. This includes loops and isolated vertices (and the empty support at order zero). This is source Theorem 3's complete argument.
:::

The public formal conclusion of the centralizer argument is the following rank form. Its proof constructs the injection above; its statement does not include the complete component formula.

::: {.theorem #thm-rank title="The formal rank bound" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s3" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_centralizer_cycle_bound"}
For any real matrix $A$ with exact support $E$ and nSSP,

$$
n+\operatorname{rank}B\leq m.
$$
:::

::: {.corollary #cor-bound title="Connected allowing supports" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s4" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_arc_bound_of_connected"}
For $n\geq1$, if a weakly connected support $E$ allows nSSP, then $m\geq2n-1$.
:::

::: proof
Choose its nSSP realization and use the connected lower bound, or set $c=1$ in the component chain. Consequently no sign pattern on a weakly connected support with at most $2n-2$ positions allows nSSP: a matrix with those signs would still have that exact support. This is the first part and immediate sign restriction of source Corollary 4.
:::

::: {.corollary #cor-equality title="Equality identifies the two spaces" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s4" status="written-proof" proof="pf-equality" doi="10.5281/zenodo.23904482" source="Corollary 4, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/190"}
If a weakly connected nSSP matrix of positive order has $m=2n-1$ nonzero entries, then $\dim\mathcal Z(A)=n$ and $T_A:\mathcal Z(A)\to\ker B$ is a linear isomorphism.
:::

::: {.proof #pf-equality}
For $c=1$ and $m=2n-1$, the component chain has $n$ at both ends. Thus both spaces have dimension $n$. The already injective linear map $T_A$ is therefore onto as well. This is the equality clause of source Corollary 4; it does not characterize which supports attain equality.
:::

## Why requiring implies connectivity

::: {.lemma #lem-loop title="A loop permits eigenvalue one" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s5" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.loop_support_eigenvalue_one"}
Every finite real exact support containing a loop has a realization with eigenvalue $1$.
:::

::: proof
Choose a loop $(r,r)$. Let $N$ equal $1$ on all prescribed positions except $(r,r)$, and $0$ elsewhere. Put $A(\epsilon,t)=\epsilon N+t e_re_r^{\mathsf T}$. The determinant is affine in $t$:

$$
\det(I-A(\epsilon,t))=u(\epsilon)-t v(\epsilon).
$$

Here $u(\epsilon)=\det(I-\epsilon N)$ and $v(\epsilon)$ is its $(r,r)$ cofactor. Both are polynomials with $u(0)=v(0)=1$; the empty cofactor when $n=1$ is $1$. Continuity gives a neighborhood of zero where both are nonzero. Choose a nonzero $\epsilon$ there and set $t=u(\epsilon)/v(\epsilon)\ne0$. All prescribed positions, including the chosen loop, remain nonzero, and $\det(I-A)=0$. Over the reals this is precisely that $1$ is an eigenvalue. Source Lemma 5 gives this argument.
:::

::: {.lemma #lem-connected title="Requiring supports are connected" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s6" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.requires_connected"}
A support on a nonempty vertex set requiring nSSP is weakly connected.
:::

::: proof
Each weak component contains a loop. Otherwise its nonzero diagonal indicator $F$ commutes with every realization and has $A\circ F^{\mathsf T}=0$, contradicting nSSP. If there are at least two components, split them into two nonempty groups. By the loop lemma choose exact-support matrices $C,D$ on the groups with eigenvalue $1$. There exist nonzero real vectors $u,v$ with $Cu=u$ and $v^{\mathsf T}D=v^{\mathsf T}$, since $I-C$ and $(I-D)^{\mathsf T}$ are singular. For

$$
A=\begin{pmatrix}C&0\\0&D\end{pmatrix},\qquad
F=\begin{pmatrix}0&uv^{\mathsf T}\\0&0\end{pmatrix},
$$

we have $AF=FA$ and $F\ne0$. The transpose of $F$ is supported only between the groups, where $A$ vanishes. This contradicts the requirement for this particular realization. This is source Lemma 6. It deliberately uses the universal quantifier; the example $\operatorname{diag}(1,2)$ shows the same claim fails for merely allowing supports.
:::

## Attainment for arbitrary nonzero weights

Let $P_{n,\{1\}}$ contain $(1,1)$ and both arcs between each pair of consecutive vertices. This is the prior construction in Koljančić–Oblak, Theorem 5.5 with $m=1$, p. 771, and Remark 2.10(A), p. 764. It has $2(n-1)+1=2n-1$ arcs.

::: {.lemma #lem-path title="The endpoint-looped double path" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s7" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.endpoint_requires"}
For every $n\geq1$, every real matrix with exact support $P_{n,\{1\}}$ has nSSP.
:::

::: proof
The case $n=1$ is immediate. Otherwise let $a_{11}=d\ne0$, $a_{i,i+1}=u_i\ne0$, and $a_{i+1,i}=\ell_i\ne0$ for $1\leq i<n$, with all other entries zero. Suppose $AF=FA$ and $A\circ F^{\mathsf T}=0$. Then $f_{11}=0$ and $f_{i,i+1}=f_{i+1,i}=0$. Extend entries outside $[1,n]$ by zero and set $\ell_n=0$.

We show every odd offset of $F$ vanishes. Offset $1$ already does. If $k\geq3$ is odd and all smaller odd offsets vanish, compare the $(i+1,i+k)$ entries of $AF$ and $FA$. Both diagonal coefficients of $A$ are zero, and terms at offset $k-2$ vanish, leaving

$$
\ell_i f_{i,i+k}=\ell_{i+k}f_{i+1,i+k+1},
\quad1\leq i\leq n-k.
$$

At $i=n-k$ the right side is zero. Descend in $i$, dividing only by nonzero $\ell_i$, to zero the entire upper offset $k$. Apply the argument to $(A^{\mathsf T},F^{\mathsf T})$ for the lower offset. Induction handles every odd offset.

The first column now vanishes. Its first entry was zero; entries in even rows have odd offset. For odd $i\geq3$, the $(i,1)$ commutation equation reduces to $0=d f_{i1}$: neighboring entries in column $1$ and $f_{i2}$ have odd offset. Since $d\ne0$, these remaining entries vanish too.

For $0\leq k<n$, $A^ke_1$ is supported in the first $k+1$ coordinates and has coordinate $k+1$ equal to $\ell_1\cdots\ell_k$ (the empty product for $k=0$ is $1$). This follows by induction using the tridiagonal shape. These vectors form a triangular basis with nonzero successive coordinates. Since $Fe_1=0$ and $FA=AF$, we have $FA^ke_1=A^kFe_1=0$ on that basis, so $F=0$. Taking $F=X^{\mathsf T}$ proves nSSP. This is source Lemma 7's arbitrary-weight proof.
:::

::: proof
To finish the requiring-minimum theorem, a requiring support is weakly connected by the connectivity lemma. Its $0$–$1$ realization exists and has nSSP, so the connected bound applies. The endpoint-looped path supplies a requiring support attaining the lower bound at the same $n$. For $n=1$ this support is just one nonzero loop.
:::

::: {.proof #pf-strong}
Every strongly connected support is weakly connected, so the connected allowing bound applies to either strongly connected class. The endpoint-looped bidirected path is strongly connected: follow consecutive arrows in either direction between any two vertices. At $n=1$ use a length-zero path. It requires nSSP and hence allows it. Its $2n-1$ arcs attain both lower bounds. These are the remaining clauses of source Theorem 1.
:::
