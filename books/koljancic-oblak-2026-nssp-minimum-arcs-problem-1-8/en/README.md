# Why exactly $2n-1$ arcs?

Connect $n$ vertices with arrows and put a nonzero real number on every arrow. How few arrows can guarantee the same rigidity property **whatever numbers we choose**? Haobo Ma and Wenlin Zhang's paper answers: exactly $2n-1$ arcs, for every positive integer $n$. Opposite arrows count separately, a loop counts once, and parallel arcs are absent.

The most economical example is easy to draw. Put the vertices in a row, join each neighboring pair in both directions, and add one loop at the first vertex. For four vertices:

$$
\underset{\circlearrowleft}{1}\rightleftarrows2\rightleftarrows3\rightleftarrows4.
$$

Three pairs of opposite arrows contribute six arcs; the loop makes seven, which is $2\times4-1$. This construction is prior work of S. Koljančić and P. Oblak. The central question here is why no support that guarantees the property can use fewer arcs.

## A graph is also a table of numbers

A matrix is a square table. Our convention assigns an arrow from $i$ to $j$ to the nonzero number $a_{ij}$ in row $i$, column $j$. A position without an arrow must contain zero. The collection of nonzero positions is the matrix's **support**. Every weighting of our four-vertex example has this shape:

$$
A=\begin{pmatrix}
d&u_1&0&0\\
\ell_1&0&u_2&0\\
0&\ell_2&0&u_3\\
0&0&\ell_3&0
\end{pmatrix}.
$$

Each $d,u_i,\ell_i$ must be nonzero, but signs and sizes are unrestricted. The arrow convention specifies positions; we do not assume that $A$ describes probabilities or a random walk.

A matrix acts on a column of numbers to produce another column. Matrix multiplication describes successive actions. When $AF=FA$, the matrices **commute**: the order of their actions makes no difference. The identity matrix $I$ commutes with every $A$, so commutation by itself cannot force $F$ to vanish.

The rigidity test adds a constraint: every arrow $i\to j$ forces the reversed position $f_{ji}$ to be zero. If commutation together with these forced zeros permits only $F=0$, then $A$ has the **nonsymmetric strong spectral property**, abbreviated nSSP. The test ranges over all real matrices $F$. It does not require $F$ to be symmetric and adds no diagonal or trace constraint. [Precise statements and proofs](statements.md) relate this formulation to the source's transpose notation.

## One successful weighting versus every weighting

A graph can have successful weightings and unsuccessful ones. A support **allows** nSSP when at least one weighting works. It **requires** nSSP when every assignment of nonzero real weights works. These quantifiers change the problem.

Consider two isolated loops, with no arrows between the vertices. Write

$$
A=\begin{pmatrix}1&0\\0&2\end{pmatrix},\qquad
F=\begin{pmatrix}p&q\\r&s\end{pmatrix}.
$$

The loops force $p=s=0$. Comparing off-diagonal entries in $AF=FA$ gives $q=2q$ and $2r=r$, so $q=r=0$. This weighting works. Give both loops weight $1$, however, and $A=I$ commutes with everything. The matrix whose only nonzero entry is $f_{12}=1$ obeys the forced zeros and is a nonzero obstruction. Thus this support allows nSSP but does not require it.

The theorem therefore does not say that every support allowing nSSP needs $2n-1$ arcs: this two-vertex example uses only two. It says that every support requiring nSSP needs that many. Even allowing nSSP needs that many when the graph is connected after directions are ignored.

## Why would a matrix problem lead to flows?

The lower bound transfers information from a table to the arrows. Given a commuting matrix $F$, record $a_{ij}f_{ji}$ on arrow $i\to j$. Commutation says precisely that the total incoming record equals the total outgoing record at every vertex. These numbers can be negative: they are algebraic flows rather than one-way quantities of water.

When $A$ has nSSP, the recording loses no information about a commuting matrix. If every record is zero, then $F=0$. If two commuting matrices have identical records, subtract them to see that they were equal. The graph must therefore have room for enough independent balanced flows. The next chapter counts that room and explains why a support requiring nSSP must be connected.

This short film follows the whole route: arrows and quantifiers, balanced-flow counting, and the example attaining the bound.

::: {.film src="001-balanced-flows"}
One film with English narration and aligned Chinese/English subtitles uses the four-vertex, seven-arc example to explain the general result.
:::

For a seminar, the academic presentation follows the same proof route.

::: {.slides src="seminar"}
Frame-aligned Chinese and English editions include speaker notes and the precise scope of the formal evidence.
:::

This reading explains version 3 of Haobo Ma and Wenlin Zhang's paper, version DOI [10.5281/zenodo.23904482](https://doi.org/10.5281/zenodo.23904482). See [sources and contributions](sources.md) for the original question, prior construction, and further reading.
