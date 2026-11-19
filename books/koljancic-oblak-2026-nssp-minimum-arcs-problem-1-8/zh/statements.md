# 精确陈述与完整证明

以下矩阵及向量空间均在 $\mathbb R$ 上。设 $E\subseteq[n]\times[n]$，$m=|E|$，$\mathcal M(E)$ 为非零位置恰好是 $E$ 的所有矩阵。自环允许存在，每条算一次。支撑允许 nSSP，指其中存在一个 nSSP 矩阵；要求 nSSP，指其中每个矩阵都有 nSSP。准确条件是：对每个实矩阵 $X$，

$$
A\circ X=0,\quad AX^{\mathsf T}=X^{\mathsf T}A
\quad\Longrightarrow\quad X=0.
$$

$\circ$ 表示对应位置相乘，没有额外的对角线、迹或对称性限制。令 $F=X^{\mathsf T}$ 就得到故事中的可交换矩阵检验。弱连通忽略弧方向；强连通要求每对有序顶点之间有有向路径，允许长度为零的路径。

源文主定理把无连通限制的最小值与两个强连通最小值写在一起。这里分开陈述，使每一部分的证据范围准确对应。

::: {.theorem #thm-minimum title="要求 nSSP 的最少弧数" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s1" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.result"}
对每个整数 $n\geq1$，所有要求 nSSP 的支撑都至少有 $2n-1$ 条弧，并且在同一个阶数 $n$ 上，存在恰有 $2n-1$ 条弧的要求支撑。
:::

证明在后面的连通性与端点路径引理之后完成。这是源文第 1 节定理 1 的无连通限制部分。

::: {.theorem #thm-strong title="两个强连通最小值" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s1" status="written-proof" proof="pf-strong" doi="10.5281/zenodo.23904482" source="Theorem 1, Section 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/191"}
对每个 $n\geq1$，在强连通且要求 nSSP 的支撑中，最少弧数是 $2n-1$；在强连通且仅要求允许 nSSP 的支撑中，最少弧数也为 $2n-1$。
:::

这是源文定理 1 的其余部分，在端点构造后推出；前一个形式陈述没有包含这两个强连通最小值。

## 维数论证

记 $\mathcal Z(A)=\{F:AF=FA\}$。令 $B$ 为实 $n\times m$ 关联矩阵，弧 $(i,j)$ 的列为 $e_j-e_i$，故自环列为零。令 $c$ 为弱连通分量数，包括孤立点。定义

$$
(T_AF)_{(i,j)}=a_{ij}f_{ji}\quad((i,j)\in E).
$$

::: {.lemma #lem-centralizer title="中心化子的维数" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s2" status="written-proof" proof="pf-centralizer" doi="10.5281/zenodo.23904482" source="Lemma 2, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/189"}
每个实 $n\times n$ 矩阵都满足 $\dim_{\mathbb R}\mathcal Z(A)\geq n$。
:::

::: {.proof #pf-centralizer}
给 $V=\mathbb R^n$ 定义 $\mathbb R[t]$-模作用 $t\cdot v=Av$。这个模有限生成且为挠模：特征多项式代入 $A$ 后为零。主理想整环 $\mathbb R[t]$ 上的循环分解定理给出

$$
V\simeq\bigoplus_r\mathbb R[t]/(p_r),
\qquad\sum_r\deg p_r=n.
$$

在每个直和项内，乘以任意剩余类都与乘以 $t$ 可交换；在其余项上把该操作延拓为零。这些操作一起定义从 $\bigoplus_r\mathbb R[t]/(p_r)$ 到 $\mathcal Z(A)$ 的线性单射：把操作作用于第 $r$ 项中的 $1$ 的剩余类，就能取回该项的乘数。定义域的实维数为 $n$，故得到下界。$n=0$ 时两边维数均为零。这是源文引理 2 的论证。同一维数下界已在所链接形式证明的内部引理中出现；参与请求关注的是把它作为可公开复用的结论提供。
:::

::: {.theorem #thm-cycle title="含分量数的完整维数链" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s3" status="written-proof" proof="pf-cycle" doi="10.5281/zenodo.23904482" source="Theorem 3, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/190"}
若 $A\in\mathcal M(E)$ 有 nSSP，则

$$
n\leq\dim\mathcal Z(A)\leq\dim\ker B,
$$

$$
\dim\ker B=m-n+c,\qquad m\geq2n-c.
$$
:::

::: {.proof #pf-cycle}
映射 $T_A$ 线性。若 $T_AF=0$，则 $A\circ F^{\mathsf T}=0$：在 $E$ 上由定义，在 $E$ 外由 $A=0$ 得到。又有 $AF=FA$，对 $X=F^{\mathsf T}$ 使用 nSSP 得 $F=0$，所以 $T_A$ 为单射。在每个顶点 $v$，

$$
(BT_AF)_v=\sum_i a_{iv}f_{vi}-\sum_j a_{vj}f_{jv}
$$

$$
=(FA)_{vv}-(AF)_{vv}=0.
$$

故像空间在 $\ker B$ 内，单射及前一引理给出两个维数不等式。$p\in\ker B^{\mathsf T}$ 当且仅当每条弧上有 $p_j-p_i=0$，即 $p$ 恰好在每个弱分量上取常数。因此该核的维数为 $c$。由秩–零化度公式及 $B$ 与 $B^{\mathsf T}$ 的秩相同，得到 $\operatorname{rank}B=n-c$、$\dim\ker B=m-n+c$；移项即为弧数下界。自环、孤立点以及零阶空支撑都包含在此论证内。这是源文定理 3 的完整论证。
:::

中心化子论证的公开形式结论如下。证明构造了上述单射，而陈述本身没有包括完整的分量维数公式。

::: {.theorem #thm-rank title="形式证明的秩下界" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s3" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_centralizer_cycle_bound"}
任意具有精确支撑 $E$ 和 nSSP 的实矩阵 $A$ 满足

$$
n+\operatorname{rank}B\leq m.
$$
:::

::: {.corollary #cor-bound title="允许 nSSP 的连通支撑" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s4" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.nssp_arc_bound_of_connected"}
设 $n\geq1$。若弱连通支撑 $E$ 允许 nSSP，则 $m\geq2n-1$。
:::

::: proof
选取其 nSSP 实现并应用连通下界，或在分量维数链中取 $c=1$。于是，在至多有 $2n-2$ 个位置的弱连通支撑上，任何符号模式都不允许 nSSP：任何符合那些符号的矩阵仍具有该精确支撑。这是源文推论 4 的第一部分及其直接的符号限制。
:::

::: {.corollary #cor-equality title="等号使两个空间同构" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s4" status="written-proof" proof="pf-equality" doi="10.5281/zenodo.23904482" source="Corollary 4, Section 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/190"}
若正阶弱连通 nSSP 矩阵恰有 $m=2n-1$ 个非零元，则 $\dim\mathcal Z(A)=n$，且 $T_A:\mathcal Z(A)\to\ker B$ 为线性同构。
:::

::: {.proof #pf-equality}
在分量维数链中代入 $c=1$、$m=2n-1$，两端都等于 $n$，所以两个空间的维数均为 $n$。已有的线性单射 $T_A$ 因而也为满射。这是源文推论 4 的等号部分，没有刻画哪些支撑能取等号。
:::

## 要求 nSSP 为何蕴含连通

::: {.lemma #lem-loop title="一个自环允许实现特征值一" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s5" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.loop_support_eigenvalue_one"}
任何含有自环的有限实精确支撑，都有一个以 $1$ 为特征值的实现。
:::

::: proof
选定自环 $(r,r)$。令 $N$ 在其余所有规定位置上为 $1$，在 $(r,r)$ 及支撑外为零，置 $A(\epsilon,t)=\epsilon N+t e_re_r^{\mathsf T}$。行列式关于 $t$ 为仿射函数：

$$
\det(I-A(\epsilon,t))=u(\epsilon)-t v(\epsilon).
$$

其中 $u(\epsilon)=\det(I-\epsilon N)$，$v(\epsilon)$ 为其 $(r,r)$ 代数余子式。两者均为多项式且 $u(0)=v(0)=1$；$n=1$ 时空余子式取 $1$。由连续性，零的某个邻域内两者均非零。在此选非零 $\epsilon$ 并令 $t=u(\epsilon)/v(\epsilon)\ne0$。所有规定位置都仍非零，而 $\det(I-A)=0$，在实数域上恰好表示 $1$ 是特征值。这是源文引理 5 的论证。
:::

::: {.lemma #lem-connected title="要求 nSSP 的支撑必连通" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s6" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.requires_connected"}
非空顶点集上的支撑若要求 nSSP，就必弱连通。
:::

::: proof
每个弱分量必须含自环，否则该分量的非零对角指示矩阵 $F$ 与所有实现可交换，又满足 $A\circ F^{\mathsf T}=0$，与 nSSP 矛盾。若至少有两个分量，将其分为两个非空组。利用自环引理，在两组上分别选取以 $1$ 为特征值的精确实现 $C,D$。由于 $I-C$ 及 $(I-D)^{\mathsf T}$ 奇异，存在非零实向量 $u,v$ 使 $Cu=u$、$v^{\mathsf T}D=v^{\mathsf T}$。令

$$
A=\begin{pmatrix}C&0\\0&D\end{pmatrix},\qquad
F=\begin{pmatrix}0&uv^{\mathsf T}\\0&0\end{pmatrix}.
$$

则 $AF=FA$、$F\ne0$。$F$ 的转置仅在跨组位置非零，那些位置的 $A$ 为零。这与该实现应有 nSSP 矛盾。这是源文引理 6；它必须使用全称量词，$\operatorname{diag}(1,2)$ 已说明允许支撑不满足同样结论。
:::

## 任意非零权重下达到下界

令 $P_{n,\{1\}}$ 包含 $(1,1)$ 及所有相邻顶点间的双向弧。这是 Koljančić–Oblak 的先前构造，见其定理 5.5 中 $m=1$ 的情形（第 771 页）及注记 2.10(A)（第 764 页）。弧数为 $2(n-1)+1=2n-1$。

::: {.lemma #lem-path title="端点带环的双向路径" mathesis="collected:koljancic-oblak-2026-nssp-minimum-arcs-problem-1-8:3:s7" lean="D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.endpoint_requires"}
对每个 $n\geq1$，精确支撑为 $P_{n,\{1\}}$ 的每个实矩阵都具有 nSSP。
:::

::: proof
$n=1$ 直接成立。否则记 $a_{11}=d\ne0$，$a_{i,i+1}=u_i\ne0$、$a_{i+1,i}=\ell_i\ne0$（$1\leq i<n$），其余为零。设 $AF=FA$ 且 $A\circ F^{\mathsf T}=0$，则 $f_{11}=0$，且 $f_{i,i+1}=f_{i+1,i}=0$。把 $[1,n]$ 外的条目延拓为零，并置 $\ell_n=0$。

证明 $F$ 的所有奇数偏移带为零。偏移 $1$ 已成立。若奇数 $k\geq3$ 的所有更小奇数偏移均已为零，比较 $AF=FA$ 的 $(i+1,i+k)$ 条目。涉及的两个 $A$ 对角元都为零，偏移 $k-2$ 的项也消失，留下

$$
\ell_i f_{i,i+k}=\ell_{i+k}f_{i+1,i+k+1},
\quad1\leq i\leq n-k.
$$

在 $i=n-k$ 处右边为零。然后递减 $i$，仅除以非零的 $\ell_i$，便得到整个上偏移 $k$ 为零。对 $(A^{\mathsf T},F^{\mathsf T})$ 作相同论证得到下偏移，归纳覆盖所有奇数偏移。

现在第一列全为零：第一项已经为零，偶数行具有奇数偏移；对奇数 $i\geq3$，$(i,1)$ 处的可交换方程化为 $0=d f_{i1}$，因为第一列邻项及 $f_{i2}$ 都处于奇数偏移。$d\ne0$ 迫使这些剩余条目为零。

对 $0\leq k<n$，$A^ke_1$ 仅在前 $k+1$ 个坐标有支撑，第 $k+1$ 个坐标为 $\ell_1\cdots\ell_k$（$k=0$ 时空积为 $1$）。这由三对角形状逐步归纳得到。这些向量的连续新坐标都非零，形成三角形的一组基。由 $Fe_1=0$ 及 $FA=AF$，得到 $FA^ke_1=A^kFe_1=0$。$F$ 消灭整组基，故 $F=0$。令 $F=X^{\mathsf T}$ 即得 nSSP。这是源文引理 7 对任意权重的证明。
:::

::: proof
完成要求最小值定理的证明：由连通性引理，要求支撑必弱连通；它的 $0$–$1$ 实现存在且有 nSSP，故满足连通下界。端点带环路径在同一阶数 $n$ 上达到此下界。$n=1$ 时，它就是一个非零自环。
:::

::: {.proof #pf-strong}
强连通支撑必弱连通，故两类强连通支撑都适用连通允许下界。端点带环的双向路径强连通：任意两点间沿相邻箭头向所需方向行走即可；$n=1$ 时使用长度为零的路径。它要求 nSSP，因而也允许 nSSP，其 $2n-1$ 条弧同时达到两个下界。这就推出源文定理 1 的其余部分。
:::
