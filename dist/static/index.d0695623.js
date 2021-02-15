var e=Object.assign;import{j as t,y as o,M as a,p as n,a as l,g as r,r as c,o as s,c as i,b as d,R as u,F as p,N as h,w as m,A as v,G as f}from"./vendor.ff816962.js";import{I as g}from"./index.1c13fdd5.js";const T={name:"Catalog",props:{list:Array,activeIndex:Number},setup(){const{proxy:n}=r(),l=t({value:"",inputFlag:!1});o((()=>{n.$nextTick((()=>{let e=document.querySelector(".menu"),t=document.querySelector(".menu .active");t&&Number(t.offsetTop)>window.innerHeight-150&&(e.scrollTop=Number(t.offsetTop)-100)}))}));return e(e({close:()=>{n.$emit("close")}},a(l)),{onCancel:()=>{n.$emit("search",""),l.value="",l.inputFlag=!1},handle:e=>{n.$emit("scrollTo",e)}})}},y=m("data-v-5602f137");n("data-v-5602f137");const x={class:"bg"},C={key:0,action:"/"},w={class:"main menu"};l();const L=y(((e,t,o,a,n,l)=>{const r=c("van-icon"),m=c("van-nav-bar"),v=c("van-search");return s(),i("div",x,[d(m,{title:"目录","left-arrow":"/"!==e.$route.path,onClickLeft:a.close},{right:y((()=>["/"!==e.$route.path?(s(),i(r,{key:0,onClick:t[1]||(t[1]=t=>e.inputFlag=!0),name:"search",size:"20"})):u("",!0)])),_:1},8,["left-arrow","onClickLeft"]),e.inputFlag?(s(),i("form",C,[d(v,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value=t),"show-action":"",shape:"round",background:"transparent",placeholder:"请输入搜索关键词",onSearch:t[3]||(t[3]=t=>e.$emit("search",e.value)),onCancel:a.onCancel},null,8,["modelValue","onCancel"])])):u("",!0),d("div",w,[(s(!0),i(p,null,h(o.list,((e,t)=>(s(),i("div",{class:{active:t===o.activeIndex},innerHTML:e.outerHTML,key:e.outerHTML,onClick:e=>a.handle(t)},null,10,["innerHTML","onClick"])))),128))])])}));T.render=L,T.__scopeId="data-v-5602f137";const $={components:{Catalog:T},setup(){const{proxy:n}=r(),l=t({html:"",code:n.$route.query.id,authorList:[],activeIndex:0,showCatalog:!1,topFlag:!1});v((()=>n.$route),((e,t)=>{l.code=e.query.id,n.$nextTick((()=>{t.query.id!==l.code&&l.code&&s()}))})),o((()=>{s();let e=document.querySelector(".main");n.$utils.watchScroll(u,500,e)}));const c=()=>{let e=[],t=document.querySelectorAll(".md .md-header-anchor");t.forEach((o=>{"H2"===o.parentNode.nodeName&&1!==t.length||e.push({outerHTML:o.parentNode.outerHTML.replace(/<a.*?>([\s\S]*)<\/a>/,""),innerText:o.parentNode.innerText,nodeName:o.parentNode.nodeName,offsetTop:o.parentNode.offsetTop,classActive:!1})}));let o=n.$route.query.index;l.authorList=e,o&&d(o)},s=async()=>{let e=await n.$api.HOME.getFileOption(l.code);l.html=e,n.$nextTick((()=>{c(),[...document.querySelectorAll("#write a")].filter((e=>e.outerHTML.includes("#"))).forEach((e=>{e.onclick=e=>{let t=l.authorList.findIndex((t=>e.target.parentNode.hash.replace("#","")===t.innerText));return t>=0&&d(t),!1}})),document.querySelectorAll(".CodeMirror").forEach((e=>{let t=document.createElement("div");t.setAttribute("class","copy_code"),e.appendChild(t)}))}))},i=e=>{const{$route:t}=n;n.$router.replace({path:t.path,query:{title:t.query.title,id:t.query.id,index:e}})},d=e=>{let t=document.querySelector(".main");l.activeIndex=e,i(e),t.scrollTop=l.authorList[e].offsetTop-100},u=()=>{let e=document.querySelector(".main").scrollTop||document.documentElement.scrollTop;l.topFlag=e>=400;let t=l.authorList.findIndex((t=>t.offsetTop>e));t>0&&i(t)};return e(e({},a(l)),{scrollTo:d,handleCatalog:()=>{c();let e=document.querySelector(".main").scrollTop||document.documentElement.scrollTop;l.activeIndex=l.authorList.findIndex((t=>t.offsetTop>e)),l.activeIndex>0&&i(l.activeIndex),l.showCatalog=!0},proview:e=>{if("copy_code"===e.target.className)return n.$utils.copy(e.target.parentElement),void n.$toast.success("复制成功");"IMG"===e.target.nodeName&&g([e.target.currentSrc])},search:e=>{c(),e&&(l.authorList=l.authorList.filter((t=>t.innerText.includes(e))),0===l.authorList.length&&c())}})}},k=m("data-v-3e3c6e95");n("data-v-3e3c6e95");const I={class:"flex"},S=f(" 回首页 ");l();const q=k(((e,t,o,a,n,l)=>{const r=c("van-button"),p=c("van-empty"),h=c("LeftBtn"),m=c("Catalog"),v=c("van-popup");return s(),i("div",I,[e.html?u("",!0):(s(),i(p,{key:0,description:"开发中..."},{default:k((()=>[d(r,{round:"",class:"bottom-button",onClick:t[1]||(t[1]=t=>e.$router.replace("/"))},{default:k((()=>[S])),_:1})])),_:1})),d("div",{class:"md",innerHTML:e.html,onClick:t[2]||(t[2]=(...e)=>a.proview&&a.proview(...e))},null,8,["innerHTML"]),d(h,{topFlag:e.topFlag,onHandleCatalog:a.handleCatalog},null,8,["topFlag","onHandleCatalog"]),d(v,{show:e.showCatalog,"onUpdate:show":t[4]||(t[4]=t=>e.showCatalog=t),position:"right",style:{height:"100%",width:"80%"},"lock-scroll":!1},{default:k((()=>[e.showCatalog?(s(),i(m,{key:0,onClose:t[3]||(t[3]=t=>e.showCatalog=!1),onScrollTo:a.scrollTo,onSearch:a.search,list:e.authorList,activeIndex:e.activeIndex},null,8,["onScrollTo","onSearch","list","activeIndex"])):u("",!0)])),_:1},8,["show"])])}));$.render=q,$.__scopeId="data-v-3e3c6e95";export default $;
