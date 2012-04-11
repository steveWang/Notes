#!/bin/bash

if `test -n "$1" && test -f $1`; then
    fname=`echo $1 | sed -r "s/\.[^.]*$//"`.html
    echo "<div class='wrapper'>"
    cat $1 | markdown_py -x mathjax
    echo "</div><div class='pos'></div>"
    echo "<script src='mathjax/unpacked/MathJax.js?config=default'></script>
<script type=\"text/x-mathjax-config\">
MathJax.Hub.Register.StartupHook(\"TeX Jax Ready\",function () {
var TEX = MathJax.InputJax.TeX;
var PREFILTER = TEX.prefilterMath;
TEX.Augment({
  prefilterMath: function (math,displaymode,script) {
      math = \"\\\\displaystyle{\"+math+\"}\";
      return PREFILTER.call(TEX,math,displaymode,script);
    }
  });
});

var a  = document.getElementsByTagName('a'),
    ll = a.length;
if (ll > 0) {
  var div = document.getElementsByClassName('pos')[0];
  div.style.float = 'right';
  div.style.position = 'fixed';
  div.style.background = '#FFF';
  div.style.fontSize = '90%';
  div.style.top = '10%';
  div.style.right = '5%';
  div.style.width = '15%';
  for (var i = 0; i < ll; i++) {
    div.innerHTML += '<a href=\"\#' + a[i].name + '\">'
                     + a[i].parentElement.nextElementSibling
                           .nextElementSibling.innerText
                     + '</a><br />';
  }
  var div = document.getElementsByClassName('wrapper')[0];
  div.style.width = '80%';
}
</script>"
fi
