(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2edd2540"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"2f80":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5c4a":function(t,e,n){"use strict";n("e549")},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},8058:function(t,e,n){"use strict";n("2f80")},"841c":function(t,e,n){"use strict";var r=n("d784"),o=n("825a"),i=n("1d80"),a=n("129f"),c=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),u=String(this),l=i.lastIndex;a(l,0)||(i.lastIndex=0);var f=c(i,u);return a(i.lastIndex,l)||(i.lastIndex=l),null===f?-1:f.index}]}))},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=E(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var s="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function b(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,O=w&&w(w(_([])));O&&O!==n&&r.call(O,i)&&(m=O);var x=b.prototype=y.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"===typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=s;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=I(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),c=n("5135"),u=n("c6b6"),l=n("7156"),f=n("c04e"),s=n("d039"),h=n("7c73"),d=n("241c").f,p=n("06cf").f,v=n("9bf2").f,y=n("58a8").trim,g="Number",b=o[g],m=b.prototype,w=u(h(m))==g,O=function(t){var e,n,r,o,i,a,c,u,l=f(t,!1);if("string"==typeof l&&l.length>2)if(l=y(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(i=l.slice(2),a=i.length,c=0;c<a;c++)if(u=i.charCodeAt(c),u<48||u>o)return NaN;return parseInt(i,r)}return+l};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(w?s((function(){m.valueOf.call(n)})):u(n)!=g)?l(new b(O(e)),n,j):O(e)},L=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;L.length>E;E++)c(b,x=L[E])&&!c(j,x)&&v(j,x,p(b,x));j.prototype=m,m.constructor=j,a(o,g,j)}},b6ba:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319"),n("841c");var r=n("7a23"),o=Object(r["N"])("data-v-0b3f3822");Object(r["A"])("data-v-0b3f3822");var i={class:"flex"},a=Object(r["h"])(" 回首页 ");Object(r["y"])();var c=o((function(t,e,n,c,u,l){var f=Object(r["E"])("van-button"),s=Object(r["E"])("van-empty"),h=Object(r["E"])("LeftBtn"),d=Object(r["E"])("Catalog"),p=Object(r["E"])("van-popup");return Object(r["x"])(),Object(r["f"])("div",i,[t.html?Object(r["g"])("",!0):(Object(r["x"])(),Object(r["f"])(s,{key:0,description:"开发中..."},{default:o((function(){return[Object(r["i"])(f,{round:"",class:"bottom-button",onClick:e[1]||(e[1]=function(e){return t.$router.replace("/")})},{default:o((function(){return[a]})),_:1})]})),_:1})),Object(r["i"])("div",{class:"md",innerHTML:t.html,onClick:e[2]||(e[2]=function(){return c.proview&&c.proview.apply(c,arguments)})},null,8,["innerHTML"]),Object(r["i"])(h,{onHandleCatalog:c.handleCatalog},null,8,["onHandleCatalog"]),Object(r["i"])(p,{show:t.showCatalog,"onUpdate:show":e[4]||(e[4]=function(e){return t.showCatalog=e}),position:"right",style:{height:"100%",width:"80%"},"lock-scroll":!1},{default:o((function(){return[t.showCatalog?(Object(r["x"])(),Object(r["f"])(d,{key:0,onClose:e[3]||(e[3]=function(e){return t.showCatalog=!1}),onScrollTo:c.scrollTo,onSearch:c.search,list:t.authorList,activeIndex:t.activeIndex},null,8,["onScrollTo","onSearch","list","activeIndex"])):Object(r["g"])("",!0)]})),_:1},8,["show"])])})),u=(n("4de4"),n("c740"),n("4160"),n("caad"),n("2532"),n("159b"),n("5530"));n("96cf"),n("d3b7");function l(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}}var s=Object(r["N"])("data-v-98061750");Object(r["A"])("data-v-98061750");var h={class:"bg"},d={key:0,action:"/"},p={class:"main menu"};Object(r["y"])();var v=s((function(t,e,n,o,i,a){var c=Object(r["E"])("van-icon"),u=Object(r["E"])("van-nav-bar"),l=Object(r["E"])("van-search");return Object(r["x"])(),Object(r["f"])("div",h,[Object(r["i"])(u,{title:"目录","left-arrow":"/"!==t.$route.path,onClickLeft:o.close},{right:s((function(){return["/"!==t.$route.path?(Object(r["x"])(),Object(r["f"])(c,{key:0,onClick:e[1]||(e[1]=function(e){return t.inputFlag=!0}),name:"search",size:"20"})):Object(r["g"])("",!0)]})),_:1},8,["left-arrow","onClickLeft"]),t.inputFlag?(Object(r["x"])(),Object(r["f"])("form",d,[Object(r["i"])(l,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.value=e}),"show-action":"",shape:"round",background:"transparent",placeholder:"请输入搜索关键词",onSearch:e[3]||(e[3]=function(e){return t.$emit("search",t.value)}),onCancel:o.onCancel},null,8,["modelValue","onCancel"])])):Object(r["g"])("",!0),Object(r["i"])("div",p,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(n.list,(function(t,e){return Object(r["x"])(),Object(r["f"])("div",{class:{active:e===n.activeIndex},innerHTML:t.outerHTML,key:t.outerHTML,onClick:function(t){return o.handle(e)}},null,10,["innerHTML","onClick"])})),128))])])})),y=(n("a9e3"),{props:{list:Array,activeIndex:Number},setup:function(){var t=Object(r["k"])(),e=t.proxy,n=Object(r["B"])({value:"",inputFlag:!1});Object(r["u"])((function(){e.$nextTick((function(){var t=document.querySelector(".menu"),e=document.querySelector(".menu .active");e&&Number(e.offsetTop)>window.innerHeight-150&&(t.scrollTop=Number(e.offsetTop)-100)}))}));var o=function(){e.$emit("close")},i=function(t){e.$emit("scrollTo",t)},a=function(){e.$emit("search",""),n.value="",n.inputFlag=!1};return Object(u["a"])(Object(u["a"])({close:o},Object(r["I"])(n)),{},{onCancel:a,handle:i})}});n("5c4a");y.render=v,y.__scopeId="data-v-98061750";var g=y,b=n("28a2"),m={components:{Catalog:g},setup:function(){var t=Object(r["k"])(),e=t.proxy,n=Object(r["B"])({html:"",code:e.$route.query.id,authorList:[],activeIndex:0,showCatalog:!1});Object(r["L"])((function(){return e.$route}),(function(t,r){[],n.code=t.query.id,n.authorList=[],e.$nextTick((function(){i()}))})),Object(r["u"])((function(){i()}));var o=function(){var t=[];document.querySelectorAll(".md .md-header-anchor").forEach((function(e){"H2"!==e.parentNode.nodeName&&t.push({outerHTML:e.parentNode.outerHTML,innerText:e.parentNode.innerText,nodeName:e.parentNode.nodeName,offsetTop:e.parentNode.offsetTop,classActive:!1})})),n.authorList=t},i=function(){var t=f(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.HOME.getFileOption(n.code);case 2:r=t.sent,n.html=r,setTimeout((function(){o()}),1e3);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(t){var e=document.querySelector(".main");n.activeIndex=t,e.scrollTop=n.authorList[t].offsetTop-100},c=function(){var t=document.querySelector(".main"),e=t.scrollTop||document.documentElement.scrollTop;n.activeIndex=n.authorList.findIndex((function(t){return t.offsetTop>e})),n.showCatalog=!0},l=function(t){"IMG"===t.target.nodeName&&Object(b["a"])([t.target.currentSrc])},s=function(t){o(),t&&(n.authorList=n.authorList.filter((function(e){return e.innerText.includes(t)})),0===n.authorList.length&&o())};return Object(u["a"])(Object(u["a"])({},Object(r["I"])(n)),{},{scrollTo:a,handleCatalog:c,proview:l,search:s})}};n("8058");m.render=c,m.__scopeId="data-v-0b3f3822";e["default"]=m},c740:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,i=n("44d2"),a=n("ae40"),c="findIndex",u=!0,l=a(c);c in[]&&Array(1)[c]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},e549:function(t,e,n){}}]);