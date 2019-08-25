'use strict';var input=document.getElementById("input"),minimum=document.getElementById("min"),maximum=document.getElementById("max"),number=document.getElementById("num"),button=document.getElementById("generate"),result=document.getElementById("result"),inputText=function(){// split based on any punctuation, line breaks, or spaces
return input.value.toLowerCase().split(/[\n .,\/#!$%\^&\*;:{}=\-_`~\[\]()]/).filter(function(a){return 0<a.length})},errorText="",choose=function(a){return a[Math.floor(a.length*Math.random())]},build=function(a){// if the minimum length is greater than the maximum
if(minimum>maximum)return errorText="Maximum length must be greater or equal to minimum length.",!1;// build the dictionary, terminals, and starters
for(var b,c=inputText(),d=[],e={},f={},g=0;g<c.length;g++){b=c[g].split(""),d.push(b[0]),e[b[b.length-1]]=!0;// build the dictionary and stats
for(var k=0;k<b.length-1;k++)f.hasOwnProperty(b[k])?// if the letter is already in the dictionary, add its following letter
f[b[k]].push(b[k+1]):// otherwise, add the letter and its following letter
f[b[k]]=[b[k+1]]}var h=function(a){// build words
if(0<c.length){// start with a starter letter
for(var b,g=choose(d),i=[g];f.hasOwnProperty(g)&&(b=f[g],g=choose(b),i.push(g),!(i.length>=a&&e.hasOwnProperty(g))););// if the word isn't long enough, try again
return i.length<a?h(a):i.join("")}};return h(a)},makeWords=function(){// randomize the length of the words between the min and max
for(var a=Math.floor,b,c=[],d=!1,e=+minimum.value,f=+maximum.value,g=0;g<num.value;g++)b=e+a((f+1-e)*Math.random()),c.push(build(b));// if the results array includes a falsy value, it errored
for(var h=0;h<c.length;h++)c[h]||(d=!0);result.innerHTML=d?errorText:c.join(" ")};button.addEventListener("click",makeWords);