var o=Object.assign;import{E as a}from"./index.f9a320c2.js";import{a as s,j as t,C as e,A as n,B as l,D as d,E as i,G as r,k as c,F as u,H as p,g as f,I as w,s as m}from"./vendor.79447e6e.js";const v={setup(){const{proxy:n}=f(),l=s({docList:[],show:!0,password:""});t((()=>{}));return o(o({},e(l)),{viewDoc:o=>{window.open(n.$url+"/website/assets/documents/"+o)},confirmPWD:()=>{l.password==="remons"+a.dateFormat("","yyyy-MM-dd").replace(/-/g,"")?(async()=>{const o=await n.$api.HOME.getDocList();o.length?l.docList=o:n.$toast.fail("暂无数据")})():n.$toast.fail("密码错误请联系开发者")}})}},y=w("data-v-3132d54f");n("data-v-3132d54f");const h=m(" 回首页 "),b={key:1};l();const g=y(((o,a,s,t,e,n)=>{const l=d("van-button"),f=d("van-empty"),w=d("van-cell"),m=d("van-field"),v=d("van-dialog");return i(),r("div",null,[o.docList.length?(i(),r("div",b,[(i(!0),r(u,null,p(o.docList,(o=>(i(),r(w,{"is-link":"",title:o,key:o,onClick:a=>t.viewDoc(o)},null,8,["title","onClick"])))),128))])):(i(),r(f,{key:0,description:"暂无数据"},{default:y((()=>[c(l,{round:"",class:"bottom-button",onClick:a[1]||(a[1]=a=>o.$router.replace("/"))},{default:y((()=>[h])),_:1})])),_:1})),c(v,{show:o.show,"onUpdate:show":a[3]||(a[3]=a=>o.show=a),onConfirm:t.confirmPWD,title:"验证密码","show-cancel-button":""},{default:y((()=>[c(m,{modelValue:o.password,"onUpdate:modelValue":a[2]||(a[2]=a=>o.password=a),"label-align":"center",autofocus:"",type:"password",label:"密码",placeholder:"请输入"},null,8,["modelValue"])])),_:1},8,["show","onConfirm"])])}));v.render=g,v.__scopeId="data-v-3132d54f";export default v;