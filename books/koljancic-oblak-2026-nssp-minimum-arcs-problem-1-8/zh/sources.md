# 来源、范围与参与

## 本文与先前文献

- Haobo Ma 与 Wenlin Zhang，*The 2n−1 arc minimum in Koljančić–Oblak, Problem 1.8 (p. 759)*，第 3 版，2026 年。[精确版本论文及源码](https://doi.org/10.5281/zenodo.23904482)，CC BY 4.0。Haobo Ma：ChronoAI Pte Ltd，Singapore；Wenlin Zhang：National University of Singapore 及 ChronoAI Pte Ltd，Singapore。[概念 DOI 10.5281/zenodo.23904481](https://doi.org/10.5281/zenodo.23904481) 汇集各版，本文引用指向第 3 版。
- S. Koljančić 与 P. Oblak，*Combinatorial aspects of the nonsymmetric strong spectral property for graphs*，Electronic Journal of Linear Algebra **42** (2026)，755–779，[DOI:10.13001/ela.2026.10523](https://doi.org/10.13001/ela.2026.10523)，[固定版本预印本](https://arxiv.org/abs/2604.21552v1)。问题 1.8 位于期刊第 759 页，问题 2.9 位于第 764 页。端点构造见定理 5.5 中 $m=1$ 的情形（第 771 页）及注记 2.10(A)（第 764 页）。本文推广的树支撑障碍来自定理 2.7(B)（第 763 页）。
- M. Arav、F. J. Hall、H. van der Holst、Z. Li、A. Mathivanan、J. Pan、H. Xu 与 Z. Yang，*Advances on similarity via transversal intersection of manifolds*，Linear Algebra and its Applications **721** (2025)，102–121，[DOI:10.1016/j.laa.2024.05.013](https://doi.org/10.1016/j.laa.2024.05.013)。与其问题 6.2 的对应，以及 STP 与 nSSP 的等价性，依据 Koljančić–Oblak 第 756、759 页的记载。
- Carptopus，*Spectral separation and the non-symmetric strong spectral property for looped double paths*，MathExplore Notes，v0.1-beta，2026 年 8 月 19 日，[固定提交文本](https://github.com/Carptopus/MathExplore-Notes/blob/e57ee007380cbc351eb371d8e991303cab5f1e48/research/nssp-looped-double-paths/nssp-looped-double-paths.tex)。其定理 6.1 及推论 6.2 给出先前的路径允许性结果。这是公开数学笔记，并非期刊论文。

以上编号均指各自原文。本文所解释论文使用共享计数器：定理 1、引理 2、定理 3、推论 4、引理 5–7。[精确陈述一章](statements.md) 逐项标明对应来源。

## 形式证明究竟建立了什么

[公开 Lean 源码](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Combinatorics/SpectralGraph/KoljancicOblakMinimumArcs.lean) 证明了所有正阶的要求最小值、单个 nSSP 实现的连通下界、要求支撑的连通性、保留自环支撑的特征值一实现，以及端点带环路径的要求性质。权重为任意非零实数，正负不限；转置约定与论文一致。形式下标从零开始，本文讲解从一开始。

完整的分量维数链及等号同构属于这里已给出完整证明的书面推论。两个强连通最小值也由这里明确写出的有向路径论证得到。无附加条件的中心化子维数下界已在形式源码内部证明，参与者可将它提供为公开可复用的结论。这些区别说明形式库中可直接引用的准确陈述范围，不把已证数学推论变成猜想。[陈述对照记录](https://github.com/mathesis-papers/10.5281-zenodo.23904481/blob/main/.mathesis/review.json) 给出逐声明对应关系。

源文件报告的有理数及有限域检验只覆盖其明确记录的有限范围，不能证明所有阶数及所有实权重；全称结论来自前述论证。

本文没有分类全部等号支撑，没有解决任意符号模式的允许性，也没有给出带环路径的完整“要求／允许／不允许”分类。不限连通性的允许最小值是另一个问题，两自环例子已说明差别。源文的覆盖范围讨论将有关路径允许性及问题 5.11 的先前结论归于 Carptopus。

## 参与剩余形式陈述的完善

使用以下统一请求；各项都复用已有中心化子及端点路径证明。

- [公开已有中心化子维数引理](https://github.com/the-omega-institute/trureturing-requests/issues/189)：内部数学证明已经存在，提供可直接复用的公开陈述。
- [补齐分量公式及等号同构](https://github.com/the-omega-institute/trureturing-requests/issues/190)：复用中心化子到平衡流的单射，证明分量关联秩公式，再推出同维同构；等号推论与母论证共用同一任务。
- [推出强连通最小值](https://github.com/the-omega-institute/trureturing-requests/issues/191)：复用连通下界及端点达到性，补上有向连通的桥梁。

先在请求中协调数学范围，再在自己的贡献者 fork 中开聚焦分支，依照[上游贡献规则](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md) 直接向上游 `dev` 提交 PR。共享请求是协调点；GitHub 活动本身不建立精确陈述覆盖，也不授予 Mathesis 积分。
