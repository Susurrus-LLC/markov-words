(window["webpackJsonpmarkov-words"]=window["webpackJsonpmarkov-words"]||[]).push([[0],[,function(e,t,n){e.exports={form:"form_form__1G0jk",text:"form_text__1E_v6",options:"form_options__3lfSz",generate:"form_generate__1Br-P",results:"form_results__3J2XQ",num:"form_num__1o_QM"}},,function(e,t,n){},function(e,t,n){e.exports={results:"results_results__rKSEs"}},function(e,t,n){e.exports={footer:"pageFooter_footer__19AKf"}},,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=(n(14),n(3)),l=n.n(i),s=function(){return a.a.createElement("header",{className:l.a.header},a.a.createElement("h1",{className:l.a.title},"Markov Word Generator"))},u=n(8),m=n(2),f=n(4),h=n.n(f),p=function(e){return a.a.createElement("div",{className:h.a.results},a.a.createElement("p",{className:h.a.result},e.results))},g=n(1),b=n.n(g);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(3),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(r.useState)(10),f=Object(m.a)(u,2),h=f[0],g=f[1],d=Object(r.useState)(100),w=Object(m.a)(d,2),O=w[0],j=w[1],E=Object(r.useState)([]),y=Object(m.a)(E,2),_=y[0],k=y[1],S=Object(r.useState)([]),x=Object(m.a)(S,2),N=x[0],P=x[1],C=Object(r.useState)(!1),A=Object(m.a)(C,2),W=A[0],M=A[1],D=Object(r.useState)({}),G=Object(m.a)(D,2),L=G[0],B=G[1],I=Object(r.useState)(!1),F=Object(m.a)(I,2),J=F[0],R=F[1],T=Object(r.useState)({}),U=Object(m.a)(T,2),K=U[0],Q=U[1],$=Object(r.useState)(!1),q=Object(m.a)($,2),z=q[0],H=q[1],X=Object(r.useState)(""),Y=Object(m.a)(X,2),V=Y[0],Z=Y[1];Object(r.useEffect)(function(){k(n.toLowerCase().split(/[\n ."\u201c\u201d\u2018\u2019,\/#!?$#%@^&*;:{}\u2013\u2014=_`~[\]()0-9]/).filter(function(e){return e.length>0})),M(!1),R(!1),H(!1)},[n]),Object(r.useEffect)(function(){W&&J&&z&&ne()},[W,J,z]);var ee=function(e){return e[Math.floor(e.length*Math.random())]},te=function e(t){for(var n=function(e){return e.length<2?e[e.length-1]:e.slice(-2).join("")},r=ee(N),a=r.split(""),o=a,c=n(o);K.hasOwnProperty(c)&&(a=K[c],r=ee(a),o.push(r),c=n(o),!(o.length>=t&&L.hasOwnProperty(c))););return o.length<t?e(t):o.join("")},ne=function(){if(W&&J&&z){var e=[];if(l>h)e.push("Maximum length must be greater or equal to minimum length.");else if(0===_.length)e.push("No input provided.");else if(0===N.length||""===N[0])e.push("Internal error.");else for(var t=0;t<O;t++){var n=l+Math.floor((h+1-l)*Math.random());e.push(te(n))}Z(e.join(" "))}else!function(){if(!W||!J||!z){for(var e=[],t={},n={},r=0;r<_.length;r++){var a=_[r].split("");e.push(a.slice(0,2).join("")),t[a.slice(-2).join("")]=!0;for(var o=0;o<a.length-1;o++)n.hasOwnProperty(a[o])?n[a[o]].push(a[o+1]):n[a[o]]=[a[o+1]],o>0&&(n.hasOwnProperty(a[o-1]+a[o])?n[a[o-1]+a[o]].push(a[o+1]):n[a[o-1]+a[o]]=[a[o+1]])}P([].concat(e)),B(v({},t)),Q(v({},n))}M(!0),R(!0),H(!0)}()};return a.a.createElement("main",{className:b.a.main},a.a.createElement("form",{className:b.a.form},a.a.createElement("textarea",{id:b.a.text,className:b.a.text,name:"text input",placeholder:"Enter as many words as you can. The more the better.",value:n,onChange:function(e){return o(e.target.value)}}),a.a.createElement("div",{id:b.a.options,className:b.a.options},a.a.createElement("label",null,"minimum length:"," ",a.a.createElement("input",{id:b.a.min,className:b.a.num,name:"minimum length",type:"number",min:"1",max:"10",value:l,onChange:function(e){return s(+e.target.value)}})),a.a.createElement("label",null,"maximum length:"," ",a.a.createElement("input",{id:b.a.max,className:b.a.num,name:"maximum length",type:"number",min:"3",max:"20",value:h,onChange:function(e){return g(+e.target.value)}})),a.a.createElement("label",null,"number of words:"," ",a.a.createElement("input",{id:b.a.num,className:b.a.num,name:"number of words",type:"number",min:"1",max:"9999",value:O,onChange:function(e){return j(+e.target.value)}}))),a.a.createElement("button",{id:b.a.generate,className:b.a.generate,name:"generate",onClick:ne},"Generate")),a.a.createElement(p,{results:V}))},O=n(5),j=n.n(O),E=function(){return a.a.createElement("footer",{className:j.a.footer},a.a.createElement("p",{className:j.a.copyright},"Built by ",a.a.createElement("a",{href:"https://github.com/nai888",target:"_blank",rel:"noopener noreferrer"},"Ian A.\xa0Cook"),", copyright \xa9 ",function(){var e=(new Date).getFullYear();return e>2019?"".concat(2019,"\u2013").concat(e):2019..toString()}()," under the ",a.a.createElement("a",{href:"https://github.com/nai888/markov-words/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},"AGPL-3.0 license"),". See the project on ",a.a.createElement("a",{href:"https://github.com/nai888/markov-words",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."))},y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(w,null),a.a.createElement(E,null))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/markov-words",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/markov-words","/service-worker.js");_?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.1ecd3ec2.chunk.js.map