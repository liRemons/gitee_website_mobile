var e=Object.assign;import{r as t,t as a,p as o,a as l,b as n,o as r,c,d as s,R as i,F as d,N as u,g as h,w as p,B as m,z as v,H as g}from"./vendor.f2707b4f.js";import{I as f}from"./index.84abf1aa.js";const x={name:"Catalog",props:{list:Array,activeIndex:Number},setup(){const{proxy:o}=h(),l=t({value:"",inputFlag:!1});return e(e({close:()=>{o.$emit("close")}},a(l)),{onCancel:()=>{o.$emit("search",""),l.value="",l.inputFlag=!1},handle:e=>{o.$emit("scrollTo",e)}})}},y=p("data-v-49124c54");o("data-v-49124c54");const C={class:"child_bg"},T={key:0,action:"/"},w={class:"main menu"};l();const L=y(((e,t,a,o,l,h)=>{const p=n("van-icon"),m=n("van-nav-bar"),v=n("van-search");return r(),c("div",C,[s(m,{title:"目录","left-arrow":"/"!==e.$route.path,onClickLeft:o.close},{right:y((()=>["/"!==e.$route.path?(r(),c(p,{key:0,onClick:t[1]||(t[1]=t=>e.inputFlag=!0),name:"search",size:"20"})):i("",!0)])),_:1},8,["left-arrow","onClickLeft"]),e.inputFlag?(r(),c("form",T,[s(v,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value=t),"show-action":"",shape:"round",background:"transparent",placeholder:"请输入搜索关键词",onSearch:t[3]||(t[3]=t=>e.$emit("search",e.value)),onCancel:o.onCancel},null,8,["modelValue","onCancel"])])):i("",!0),s("div",w,[(r(!0),c(d,null,u(a.list,((e,t)=>(r(),c("div",{class:{active:t==a.activeIndex},innerHTML:e.outerHTML,key:e.outerHTML,onClick:e=>o.handle(t)},null,10,["innerHTML","onClick"])))),128))])])}));x.render=L,x.__scopeId="data-v-49124c54";const $={components:{Catalog:x},setup(){const{proxy:o}=h(),l=t({html:"",code:o.$route.query.id,authorList:[],activeIndex:0,showCatalog:!1,topFlag:!1,watchScrollFlag:!0});m((()=>o.$route),((e,t)=>{l.code=e.query.id,o.$nextTick((()=>{t.query.id!==l.code&&l.code&&r()}))})),v((()=>{r();let e=document.querySelector(".main");o.$utils.watchScroll(i,500,e)}));const n=()=>{let e=[],t=document.querySelectorAll(".md .md-header-anchor");t.forEach((a=>{"H2"===a.parentNode.nodeName&&1!==t.length||e.push({outerHTML:a.parentNode.outerHTML.replace(/<a.*?>([\s\S]*)<\/a>/,""),innerText:a.parentNode.innerText,nodeName:a.parentNode.nodeName,offsetTop:a.parentNode.offsetTop,classActive:!1})})),l.authorList=e},r=async()=>{let e=await o.$api.HOME.getFileOption(l.code);l.html=e,o.$nextTick((()=>{n(),[...document.querySelectorAll("#write a")].filter((e=>e.outerHTML.includes("#"))).forEach((e=>{e.onclick=e=>{let t=l.authorList.findIndex((t=>decodeURIComponent(e.target.parentNode.hash).replace("#","")===t.innerText));return t>=0&&s(t),!1}})),o.$route.query.index&&s(o.$route.query.index),document.querySelectorAll(".md-fences").forEach((e=>{let t=document.createElement("div");t.setAttribute("class","copy_code"),e.appendChild(t)}))}))},c=e=>{const{$route:t}=o;o.$router.replace({path:t.path,query:{title:t.query.title,id:t.query.id,index:e}})},s=e=>{let t;l.watchScrollFlag=!1,document.querySelectorAll(".md-header-anchor").forEach((a=>{a.parentNode.innerText===l.authorList[e].innerText&&(t=a)})),t&&(t.scrollIntoView({behavior:"smooth"}),l.activeIndex=e,c(e))},i=()=>{if(!l.watchScrollFlag)return void(l.watchScrollFlag=!0);let e=document.querySelector(".main").scrollTop||document.documentElement.scrollTop;l.topFlag=e>=400,l.activeIndex=Math.max(...l.authorList.map(((t,a)=>{if(e>=t.offsetTop)return a})).filter((e=>void 0!==e))),l.activeIndex>0&&c(l.activeIndex)};return e(e({},a(l)),{scrollTo:s,handleCatalog:()=>{l.showCatalog=!0},proview:e=>{if("copy_code"===e.target.className)return o.$utils.copy(e.target.parentElement),void o.$toast.success("复制成功");"IMG"===e.target.nodeName&&f([e.target.currentSrc])},search:e=>{n(),e&&(l.authorList=l.authorList.filter((t=>t.innerText.includes(e))),0===l.authorList.length&&n())}})}},S=p("data-v-e4fe0a68");o("data-v-e4fe0a68");const k={class:"flex"},I=g(" 回首页 ");l();const F=S(((e,t,a,o,l,d)=>{const u=n("van-button"),h=n("van-empty"),p=n("LeftBtn"),m=n("Catalog"),v=n("van-popup");return r(),c("div",k,[e.html?i("",!0):(r(),c(h,{key:0,description:"开发中..."},{default:S((()=>[s(u,{round:"",class:"bottom-button",onClick:t[1]||(t[1]=t=>e.$router.replace("/"))},{default:S((()=>[I])),_:1})])),_:1})),s("div",{class:"md",innerHTML:e.html,onClick:t[2]||(t[2]=(...e)=>o.proview&&o.proview(...e))},null,8,["innerHTML"]),s(p,{topFlag:e.topFlag,onHandleCatalog:o.handleCatalog},null,8,["topFlag","onHandleCatalog"]),s(v,{show:e.showCatalog,"onUpdate:show":t[4]||(t[4]=t=>e.showCatalog=t),position:"right",teleport:".bg",style:{height:"100%",width:"80%"},"lock-scroll":!1},{default:S((()=>[e.showCatalog?(r(),c(m,{key:0,onClose:t[3]||(t[3]=t=>e.showCatalog=!1),onScrollTo:o.scrollTo,onSearch:o.search,list:e.authorList,activeIndex:e.activeIndex},null,8,["onScrollTo","onSearch","list","activeIndex"])):i("",!0)])),_:1},8,["show"])])}));$.render=F,$.__scopeId="data-v-e4fe0a68";export default $;
