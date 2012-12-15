/*************************************************************
 *
 *  MathJax/config/local/local.js
 *
 *  Include changes and configuration local to your installation
 *  in this file.  For example, common macros can be defined here
 *  (see below).  To use this file, add "local/local.js" to the
 *  config array in MathJax.js or your MathJax.Hub.Config() call.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009 Design Science, Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;

  // place macros here.  E.g.:
  //   TEX.Macro("R","{\\bf R}");
  //   TEX.Macro("op","\\mathop{\\rm #1}",1); // a macro with 1 parameter
  TEX.Macro("mag", "\\left\\Vert #1 \\right\\Vert", 1);
  TEX.Macro("Re", "\\mathbb{R}", 0);
  TEX.Macro("fn", "#1 : #2 \\rightarrow #3", 3);
  TEX.Macro("set", "\\{ #1 \\vert #2 \\}", 2);
  TEX.Macro("st", "\\text{\ s.t.\ }", 0);
  TEX.Macro("const", "\\mathrm{const}", 0);
  TEX.Macro("tensor", "\\otimes", 0);
  TEX.Macro("cplx", "\\mathbb{C}", 0);
  TEX.Macro("fourier", "\\overset{\\mathcal{F}}{\\Longleftrightarrow}", 0);
  TEX.Macro("ztrans", "\\overset{\\mathcal{Z}}{\\Longleftrightarrow}", 0);
  TEX.Macro("ltrans", "\\overset{\\mathcal{H}}{\\Longleftrightarrow}", 0);
  TEX.Macro("prob", "\\Pr\\left[#1 \\right]", 1);
  TEX.Macro("abs", "\\left\\vert #1 \\right\\vert", 1);
  TEX.Macro("vec", "\\overset{\\rightharpoonup}{#1}", 1);
  TEX.Macro("pdiff", "{\\partial #1}", 1);
  TEX.Macro("diff", "{d #1}", 1);
  TEX.Macro("pderiv", "\\frac{\\pdiff{#1}}{\\pdiff{#2}}", 2);
  TEX.Macro("deriv", "\\frac{\\diff{#1}}{\\diff{#2}}", 2);
  TEX.Macro("avg", "\\left< #1 \\right>", 1);
  TEX.Macro("braket", "\\left<#1 \\middle|#2 \\right>", 2);
  TEX.Macro("braKet", "\\left<#1 \\middle|#2 \\middle|#3 \\right>", 3);
  TEX.Macro("ketbra", "\\left|#1 \\middle>\\!\\!\\middle< #2 \\right|", 2);
  TEX.Macro("op", "\\ketbra{#1}{#1}", 1);
  TEX.Macro("ket", "\\left| #1 \\right>", 1);
  TEX.Macro("div", "\\nabla \\cdot}", 0);
  TEX.Macro("curl", "\\nabla \\times}", 0);
  TEX.Macro("divv", "\\div \\left(#1 \\right)}", 1);
  TEX.Macro("curlv", "\\curl \\left(#1 \\right)}", 1);
  TEX.Macro("tens", "\\overset{\\rightharpoonup\\hspace-6pt" +
            "\\rightharpoonup}{\\mathbf{#1}}", 1);
  TEX.Macro("implies", "\\Rightarrow", 0);
  TEX.Macro("infint", "\\int_{-\\infty}^\\infty", 0);
  TEX.Macro("parens", "\\left(#1 \\right)", 1);
  TEX.Macro("bracks", "\\left[#1 \\right]", 1);
  TEX.Macro("defequals", "\\triangleq", 0);
  TEX.Macro("dag", "\\dagger", 0);
  TEX.Macro("sinc", "\\mathrm{sinc\ }", 0);
  TEX.Macro("comm", "\\bracks{#1 , #2\ }", 2);
  TEX.Macro("infsum", "\\sum_{#1 =-\\infty}^\\infty", 1);
  TEX.Macro("expfrac", "\\parens{\\frac{#1}{#2}}^{#3}", 3);
  TEX.Macro("Oplus", "\\bigoplus", 0);
  TEX.Macro("Otimes", "\\bigotimes", 0);
});

MathJax.Ajax.loadComplete("[MathJax]/config/local/local.js");
