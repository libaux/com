import{z as e,j as t,k as s,o as n,c as a,w as r,g as o,F as i,e as l,l as p,r as u,t as m,f as c,ar as g,u as d,as as f,at as h,i as A}from"./index-6e05845e.js";import{_,a as k}from"./uni-popup.bccb79eb.js";import{c as x}from"./login-page.mixin.b8016276.js";import{_ as v}from"./plugin-vueexport-helper.1b428a4d.js";let y=()=>console.log("为定义");const C=v({name:"uni-agreements",computed:{agreements(){if(!x.agreements)return[];let{serviceUrl:e,privacyUrl:t}=x.agreements;return[{url:e,title:"用户服务协议"},{url:t,title:"隐私政策条款"}]}},props:{scope:{type:String,default:()=>"register"}},onShow(){document.onkeydown=e=>{var t=e||window.event;t&&13==t.keyCode&&this.popupConfirm()}},methods:{popupConfirm(){this.isAgree=!0,y(),this.$emit("popupConfirm")},popup(e){this.needPopupAgreements=!0,this.$nextTick((()=>{e&&(y=e),this.$refs.popupAgreement.open()}))},navigateTo({url:t,title:s}){e({url:"/pages/common/webview/webview?url="+t+"&title="+s,success:e=>{},fail:()=>{},complete:()=>{}})},hasAnd:(e,t)=>e.length-1>t,setAgree(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created(){var e,t;this.needAgreements=((null==(t=null==(e=x)?void 0:e.agreements)?void 0:t.scope)||[]).includes(this.scope)},data:()=>({isAgree:!1,needAgreements:!0,needPopupAgreements:!1})},[["render",function(e,x,v,y,C,b){const w=g,j=d,T=f,$=h,P=A,S=t(s("uni-popup-dialog"),_),U=t(s("uni-popup"),k);return b.agreements.length?(n(),a(P,{key:0,class:"root"},{default:r((()=>[C.needAgreements?(n(),o(i,{key:0},[l($,{onChange:b.setAgree},{default:r((()=>[l(T,{class:"checkbox-box"},{default:r((()=>[l(w,{checked:C.isAgree,style:{transform:"scale(0.65)","margin-right":"-2px","margin-bottom":"1px"}},null,8,["checked"]),l(j,{class:"text",space:"nbsp"},{default:r((()=>[p("同意 ")])),_:1})])),_:1})])),_:1},8,["onChange"]),l(P,{class:"content"},{default:r((()=>[(n(!0),o(i,null,u(b.agreements,((e,t)=>(n(),a(P,{class:"item",key:t},{default:r((()=>[l(j,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(m(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(n(),a(j,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p(" 和 ")])),_:1})):c("",!0)])),_:2},1024)))),128))])),_:1})],64)):c("",!0),C.needAgreements||C.needPopupAgreements?(n(),a(U,{key:1,ref:"popupAgreement",type:"center"},{default:r((()=>[l(S,{confirmText:"同意",onConfirm:b.popupConfirm},{default:r((()=>[l(P,{class:"content"},{default:r((()=>[l(j,{class:"text"},{default:r((()=>[p("请先阅读并同意")])),_:1}),(n(!0),o(i,null,u(b.agreements,((e,t)=>(n(),a(P,{class:"item",key:t},{default:r((()=>[l(j,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(m(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(n(),a(j,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p("和")])),_:1})):c("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onConfirm"])])),_:1},512)):c("",!0)])),_:1})):c("",!0)}],["__scopeId","data-v-41bb121f"]]);export{C as _};