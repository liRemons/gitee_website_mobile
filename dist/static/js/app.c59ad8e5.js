(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-2edd2540":"f642be42","chunk-e48cc52c":"34af2539"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2edd2540":1,"chunk-e48cc52c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2edd2540":"24c1b884","chunk-e48cc52c":"8dd399c4"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/fe_mobile/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["E"])("Layout");return Object(r["x"])(),Object(r["f"])("div",null,[Object(r["i"])(i)])}n("ac1f"),n("5319");var c=Object(r["N"])("data-v-2f3cc008");Object(r["A"])("data-v-2f3cc008");var a={class:"bg"},i={class:"main"};Object(r["y"])();var u=c((function(e,t,n,o,u,l){var s=Object(r["E"])("van-nav-bar"),f=Object(r["E"])("router-view");return Object(r["x"])(),Object(r["f"])("div",a,[Object(r["i"])(s,{"left-arrow":"/"!==e.$route.path,onClickLeft:t[2]||(t[2]=function(t){return e.$router.replace("/")})},{title:c((function(){return[Object(r["i"])("div",{onClick:t[1]||(t[1]=function(){return o.reload&&o.reload.apply(o,arguments)})},Object(r["H"])(e.$route.meta.title||"Remons"),1)]})),_:1},8,["left-arrow"]),Object(r["i"])("div",i,[Object(r["i"])(f)])])})),l={components:{},setup:function(){var e=function(){window.location.reload()};return{reload:e}}};n("c64e");l.render=u,l.__scopeId="data-v-2f3cc008";var s=l,f={components:{Layout:s},setup:function(){var e=Object(r["k"])(),t=e.proxy;return t.$utils.IsPC()&&(window.location.href="https://remons.gitee.io"),{}}};n("f066");f.render=o;var d=f,p=(n("d3b7"),n("6c02")),b=[{path:"/",name:"Home",component:function(){return n.e("chunk-e48cc52c").then(n.bind(null,"7abe"))}},{path:"/markdown",name:"markdown",component:function(){return n.e("chunk-2edd2540").then(n.bind(null,"b6ba"))}}],m=Object(p["a"])({history:Object(p["b"])(),routes:b}),v=m,h=n("5502"),g=Object(h["a"])({state:{},mutations:{},actions:{},modules:{}}),O=n("930e"),j=n.n(O),y=n("b970"),w=(n("157a"),n("bc3a")),k=n.n(w),_=n("d399"),P=k.a.create({baseURL:"/feq",timeout:2e4});P._requestCount=0,P.interceptors.request.use((function(e){return P._requestCount++,_["a"].loading({duration:0,message:"加载中...",forbidClick:!0}),e}),(function(e){console.log(e),Promise.reject(e)})),P.interceptors.response.use((function(e){P._requestCount--,P._requestCount<=0&&_["a"].clear();var t=e.data;return t}),(function(e){P._requestCount--,P._requestCount<=0&&_["a"].clear(),Promise.reject(e)}));var C={service:P},E=C.service,x={getFileOption:function(e){return E({url:"/summarize/html/".concat(e,".html"),method:"get"})}},q=x,S={HOME:q},T=(n("b0c0"),Object(r["N"])("data-v-a72ec0fc"));Object(r["A"])("data-v-a72ec0fc");var $={class:"leftBtn"};Object(r["y"])();var L=T((function(e,t,n,o,c,a){var i=Object(r["E"])("van-icon");return Object(r["x"])(),Object(r["f"])("div",$,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(e.option,(function(t){return Object(r["x"])(),Object(r["f"])("div",null,[Object(r["i"])(r["c"],{name:"van-slide-right"},{default:T((function(){return[Object(r["M"])((Object(r["x"])(),Object(r["f"])("div",{class:"btn",key:t.name,onClick:function(e){return o.handle(t.name)}},[Object(r["i"])(i,{name:t.icon},null,8,["name"])],8,["onClick"])),[[r["K"],"top"!==t.name||e.flag]])]})),_:2},1024)])})),256))])})),A=(n("4de4"),n("caad"),n("2532"),n("5530")),N={props:{options:{type:Array,default:[]}},setup:function(){var e=Object(r["k"])(),t=e.proxy,n=Object(r["B"])({option:[{name:"top",icon:"upgrade"},{name:"catalog",icon:"apps-o"},{name:"home",icon:"wap-home-o"}],flag:!1});0!==t.options.length&&(n.options=n.option.filter((function(e){return t.option.includes(e)})));var o=function(e){if("home"===e)t.$router.replace("/");else if("top"===e)var n=document.querySelector(".main"),r=(n.scrollTop,Math.floor(n.scrollTop/8)),o=setInterval((function(){n.scrollTop<=0?clearInterval(o):n.scrollTop-=r}),30);else t.$emit("handleCatalog")},c=function(){var e=document.querySelector(".main"),t=e.scrollTop||document.documentElement.scrollTop;n.flag=t>=400};return Object(r["u"])((function(){var e=document.querySelector(".main");t.$utils.watchScroll(c,500,e)})),Object(A["a"])(Object(A["a"])({},Object(r["I"])(n)),{},{handle:o})}};n("df28");N.render=L,N.__scopeId="data-v-a72ec0fc";var I=N,M=n("28a2"),B=Object(r["e"])(d);B.component("LeftBtn",I),B.config.globalProperties.$api=S,B.config.globalProperties.ImagePreview=M["a"],B.config.globalProperties.$utils=j.a,B.config.globalProperties.$img="https://remons.gitee.io/feq/summarize/website/assets/img/",B.config.globalProperties.$store=Object(h["b"])(),B.config.globalProperties.$route=Object(p["c"])(),B.config.globalProperties.NODE_ENV="production",B.use(g).use(v).use(y["a"]).mount("#app")},"5f5e":function(e,t,n){},c64e:function(e,t,n){"use strict";n("5f5e")},df28:function(e,t,n){"use strict";n("f377")},eecc:function(e,t,n){},f066:function(e,t,n){"use strict";n("eecc")},f377:function(e,t,n){}});