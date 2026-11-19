# How much room is there for balanced flows?

## Understanding dimension by counting free numbers

Here **dimension** counts independent real choices. The equation $x+y=0$ has two variables but only one free number: choosing $x$ determines $y$. Balanced flows also solve homogeneous linear equations, so we can count their free numbers.

Take a three-vertex bidirected path with a loop at the first vertex. Label the five arc flows $z_{11},z_{12},z_{21},z_{23},z_{32}$. Balance at the endpoints gives

$$
z_{12}=z_{21},\qquad z_{23}=z_{32}.
$$

The middle equation then holds automatically. A loop leaves and returns to the same vertex, so its flow is unrestricted. We may choose $z_{11},z_{12},z_{23}$ freely, and the other two numbers follow: three independent choices. This illustrates the general formula $m-n+c$, where $m=5$ arcs, $n=3$ vertices, and $c=1$ component after directions are ignored.

Why does the formula hold generally? Each arc supplies a variable and each vertex a balance equation. Within a component, summing all the equations gives $0=0$: every arc appears once positively and once negatively. Each component therefore removes one independent condition. To make this exact, define the **incidence matrix** $B$: its column for $i\to j$ is $e_j-e_i$, where $e_i$ has a single $1$ in position $i$. A loop gives a zero column. A vertex function $p$ satisfies $B^{\mathsf T}p=0$ precisely when its values agree at the ends of every arc. Such functions are exactly those constant on each weak component, with $c$ independent choices. Hence $B$ has rank $n-c$, and its balanced-flow space $\ker B$ has dimension $m-n+c$. Isolated vertices count as components too.

## Fitting commuting matrices into that space

All matrices commuting with $A$ form a linear space, the **centralizer** $\mathcal Z(A)$. Its dimension is always at least $n$. It is tempting to claim that $I,A,\ldots,A^{n-1}$ are independent, but this fails when $A=I$! The general argument decomposes the vector space into cyclic blocks and uses polynomial actions within each block. The free choices supplied by the blocks total $n$. The [centralizer dimension lemma](statements.md#lem-centralizer) gives the complete argument.

For $F\in\mathcal Z(A)$, set $z_{ij}=a_{ij}f_{ji}$. At vertex $v$,

$$
\sum_i z_{iv}=(FA)_{vv},
$$

$$
\sum_j z_{vj}=(AF)_{vv}.
$$

Commutation makes these quantities equal, so $z\in\ker B$. The nSSP test makes $F\mapsto z$ injective. A space with at least $n$ free numbers cannot fit linearly into a smaller space without losing information. Therefore

$$
n\leq\dim\mathcal Z(A)\leq m-n+c,
$$

$$
m\geq2n-c.
$$

For a connected support, $c=1$, giving $m\geq2n-1$. This argument concerns a **single** matrix with nSSP. That already restricts a connected support allowing the property; we have not assumed that every weighting works.

## Why does requiring force connectivity?

A logical step remains: the original question did not assume connectivity. We must show that a guarantee for every weighting cannot survive several components.

First, each component needs a loop. Otherwise let $F$ be $1$ on that component's diagonal and zero elsewhere. With no arcs crossing between components, it commutes with $A$. With no loops in that component, it obeys every forced zero, yet $F\ne0$.

Now suppose there are at least two components. Divide them into two nonempty groups. Each group has a loop, and its weights can be adjusted so that the two group matrices $C,D$ both have eigenvalue $1$, while every prescribed nonzero entry stays nonzero. An eigenvalue $1$ means there is a nonzero column $u$ with $Cu=u$; for the other group choose a nonzero row $v^{\mathsf T}$ with $v^{\mathsf T}D=v^{\mathsf T}$. Place $uv^{\mathsf T}$ between the groups:

$$
F=\begin{pmatrix}0&uv^{\mathsf T}\\0&0\end{pmatrix}.
$$

This nonzero matrix commutes with $A=\operatorname{diag}(C,D)$. There are no cross-group arcs, so it also obeys the forced zeros. One bad weighting disproves a guarantee for every weighting. The [complete proof](statements.md#lem-loop) explains the small-parameter argument that adjusts the loop without deleting arcs, including the empty-cofactor convention at $n=1$.

The inference order is now complete: requiring nSSP implies connectivity, which implies at least $2n-1$ arcs.

## Why does the endpoint-looped path always work?

To prove that the lower bound is sharp, return to the path. The support constraint first zeros the two bands next to the diagonal of $F$, together with $f_{11}$. Commutation propagates these zeros to offsets $3,5,7,\ldots$: start at the right boundary of the path and work left. Transposition gives the corresponding lower-triangular zeros.

Once every odd offset vanishes, the nonzero endpoint loop $d$ forces the remaining first-column entries to vanish. Thus $Fe_1=0$. Finally, $e_1,Ae_1,\ldots,A^{n-1}e_1$ form a basis. The vector $A^ke_1$ reaches no farther than coordinate $k+1$, where its value is the nonzero product $\ell_1\cdots\ell_k$. Since $F$ commutes with $A$, we have $FA^ke_1=A^kFe_1=0$. It kills a whole basis and must be zero. The argument works for arbitrary nonzero real weights. The [endpoint-path lemma](statements.md#lem-path) supplies the recurrence and all index bounds.

For one vertex, one nonzero loop directly forces $f_{11}=0$; no arcs cannot do so. The bidirected path is strongly connected. It therefore attains both strongly connected minima—requiring and allowing—at $2n-1$ as well.

## What does equality tell us?

If a connected nSSP matrix has exactly $2n-1$ nonzero entries, both spaces have dimension exactly $n$: commuting matrices correspond one-to-one with balanced flows. This does not classify all minimum supports. Nor does the paper give a complete allowability criterion for arbitrary sign patterns. The answer to the STP question uses the equivalence recorded in the original literature; we do not reprove that equivalence here. The next chapter separates the precise conclusions, sources, and proofs.
