import{m as e,a as t,B as a,o as s,c as o,w as n,p as i,a1 as l,e as r,l as u,t as c,g as p,F as d,r as m,C as h,u as f,i as g,q as b,ad as v,J as x,O as k,K as y,X as _,ae as w,Y as C,Z as T,a8 as j,$ as I,a0 as L,j as U,L as E,f as $,T as z,E as S,z as q,af as B,P as D,k as K}from"./index-9d542c38.js";import{_ as V}from"./u-avatar.2a285b69.js";import{_ as Y}from"./u--text.1a4af432.js";import{a as F,u as G,p as M}from"./pushConfigDialog.c17d577d.js";import{_ as P}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as A}from"./uni-list-item.09f251af.js";import{_ as Q}from"./uni-list.1b22445d.js";import{_ as J}from"./u-button.0d47c43d.js";import{m as O,p as X,a as Z,_ as H}from"./uni-popup.8a79102a.js";import"./u-icon.7c4a6546.js";import"./u-text.880b16e5.js";import"./u-transition.45c2b047.js";import"./uni-icons.0f08574e.js";import"./uni-easyinput.805e297c.js";import"./u-row.e2a29c29.js";import"./u-loading-icon.d1f88861.js";const N=P({name:"u--image",mixins:[e,F,t],components:{uvImage:G},emits:["click","error","load"]},[["render",function(e,t,l,r,u,c){const p=a("uvImage");return s(),o(p,{src:e.src,mode:e.mode,width:e.width,height:e.height,shape:e.shape,radius:e.radius,lazyLoad:e.lazyLoad,showMenuByLongpress:e.showMenuByLongpress,loadingIcon:e.loadingIcon,errorIcon:e.errorIcon,showLoading:e.showLoading,showError:e.showError,fade:e.fade,webp:e.webp,duration:e.duration,bgColor:e.bgColor,customStyle:e.customStyle,onClick:t[0]||(t[0]=t=>e.$emit("click")),onError:t[1]||(t[1]=t=>e.$emit("error")),onLoad:t[2]||(t[2]=t=>e.$emit("load"))},{loading:n((()=>[i(e.$slots,"loading")])),error:n((()=>[i(e.$slots,"error")])),_:3},8,["src","mode","width","height","shape","radius","lazyLoad","showMenuByLongpress","loadingIcon","errorIcon","showLoading","showError","fade","webp","duration","bgColor","customStyle"])}]]),{t:R}=l(O);const W=P({name:"UniPopupShare",mixins:[X],emits:["select"],props:{title:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:()=>({bottomData:[{text:"微信",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c2b17470-50be-11eb-b680-7980c8a877b8.png",name:"wx"},{text:"支付宝",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d684ae40-50be-11eb-8ff1-d5dcf8779628.png",name:"wx"},{text:"QQ",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e7a79520-50be-11eb-b997-9918a5dda011.png",name:"qq"},{text:"新浪",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/0dacdbe0-50bf-11eb-8ff1-d5dcf8779628.png",name:"sina"}]}),created(){},computed:{cancelText:()=>R("uni-popup.cancel"),shareTitleText(){return this.title||R("uni-popup.shareTitle")}},methods:{select(e,t){this.$emit("select",{item:e,index:t}),this.close()},close(){this.beforeClose||this.popup.close()}}},[["render",function(e,t,a,i,l,x){const k=f,y=g,_=b,w=v;return s(),o(y,{class:"uni-popup-share"},{default:n((()=>[r(y,{class:""},{default:n((()=>[r(y,{class:"uni-share-title"},{default:n((()=>[r(k,{class:"uni-share-title-text"},{default:n((()=>[u(c(x.shareTitleText),1)])),_:1})])),_:1}),r(y,{class:"uni-share-content"},{default:n((()=>[r(y,{class:"uni-share-content-box"},{default:n((()=>[(s(!0),p(d,null,m(l.bottomData,((e,t)=>(s(),o(y,{class:"uni-share-content-item",key:t,onClick:h((a=>x.select(e,t)),["stop"])},{default:n((()=>[r(_,{class:"uni-share-image",src:e.icon,mode:"aspectFill"},null,8,["src"]),r(k,{class:"uni-share-text"},{default:n((()=>[u(c(e.text),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),r(y,{class:"uni-share-button-box"},{default:n((()=>[r(w,{class:"uni-share-button",onClick:x.close},{default:n((()=>[u(c(x.cancelText),1)])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-a8ca4d4a"]]),ee=P({__name:"userInfo",setup(e){z((e=>({"4ba4c600":i.value})));const t=x(),a=k((()=>t.useritems)),i=y("#fff");_((async()=>{w({frontColor:"#000000",backgroundColor:i.value}),C.userInfo.status&&1===C.userInfo.status&&T.logout(),await t.getAppInfo()})),j((async e=>{e.showLoginManage&&(m.value=!0)})),I((async()=>{await T.updateUserInfo(),L()}));const l=k((()=>C.userInfo)),c=k((()=>S().appVersion)),m=y(!1),h=()=>{q({url:"/pages/login/login"})},f=()=>{T.logout()},b=y(""),F=y(null),G=(e,t)=>{if(!e)return!1;b.value=e,F.value.open()},P=()=>{window.location.href=b.value},O=()=>{q({url:"/pages/userInfo/uservip/uservip"})},X=()=>{q({url:"/pages/userInfo/userdetail/userdetail"})},R=async()=>{try{const e=await B();0==e.result.code&&D({title:e.result.message,icon:"none",duration:1e3})}catch(e){D({title:"当前为最新版",icon:"none",duration:1e3})}},ee=y(null),te=()=>{ee.value.open()};return(e,t)=>{const i=U(K("u-avatar"),V),m=U(K("u--text"),Y),b=g,x=U(K("u--image"),N),k=U(K("uni-list-item"),A),y=U(K("uni-list"),Q),_=U(K("u-button"),J),w=v,C=U(K("uni-popup-share"),W),T=U(K("uni-popup"),Z),j=U(K("uni-popup-dialog"),H);return s(),p(d,null,[r(b,{class:"content"},{default:n((()=>[r(b,{border:!1,class:"avatar-content",onClick:X},{default:n((()=>[r(i,{src:E(l).avatar,shape:"square",size:"80",style:{"margin-left":"2px"}},null,8,["src"]),r(b,{class:"abstract"},{default:n((()=>[r(b,{class:"ab-name"},{default:n((()=>[r(b,{class:"text vip-name"},{default:n((()=>[r(m,{text:E(l).nickname,bold:"",size:"20",lines:"1"},null,8,["text"])])),_:1}),E(l).vip_date>Date.now()?(s(),o(x,{key:0,class:"text vip-icon",src:"/static/vip.png",width:"25px",height:"30px",mode:"aspectFit"})):(s(),o(x,{key:1,class:"text vip-icon",src:"/static/vip-black.png",width:"25px",height:"30px",mode:"aspectFit"}))])),_:1}),r(k,{class:"smallspan",border:!1,title:E(l).mobile,link:""},null,8,["title"])])),_:1})])),_:1}),r(y,{class:"mt10"},{default:n((()=>{var e,n,i,u,p,d,m,h,f,g,b,v,x;return[(null==(e=E(a).vipdate)?void 0:e.enable)?(s(),o(k,{key:0,class:"uitem",title:null==(n=E(a).vipdate)?void 0:n.name,rightText:(null==(i=E(l))?void 0:i.vip_date_str)||"--",onClick:O,link:""},null,8,["title","rightText"])):$("",!0),(null==(u=E(a).tutorial)?void 0:u.enable)?(s(),o(k,{key:1,class:"uitem",title:null==(p=E(a).tutorial)?void 0:p.name,rightText:null==(d=E(a).tutorial)?void 0:d.content,onClick:t[0]||(t[0]=e=>{var t;return G(null==(t=E(a).tutorial)?void 0:t.url)}),link:""},null,8,["title","rightText"])):$("",!0),(null==(m=E(a).customPush)?void 0:m.enable)?(s(),o(M,{key:2})):$("",!0),(null==(h=E(a).contact)?void 0:h.enable)?(s(),o(k,{key:3,class:"uitem",title:null==(f=E(a).contact)?void 0:f.name,rightText:null==(g=E(a).contact)?void 0:g.content,onClick:t[1]||(t[1]=e=>{var t;return G(null==(t=E(a).contact)?void 0:t.url)}),link:""},null,8,["title","rightText"])):$("",!0),r(k,{class:"uitem",title:"版本更新",rightText:"v"+E(c),onClick:R,link:""},null,8,["rightText"]),(null==(b=E(a).share)?void 0:b.enable)?(s(),o(k,{key:4,class:"uitem",title:null==(v=E(a).share)?void 0:v.name,rightText:null==(x=E(a).share)?void 0:x.content,onClick:te,link:""},null,8,["title","rightText"])):$("",!0)]})),_:1}),E(l)._id?(s(),o(_,{key:0,class:"login-button",onClick:f,plain:"",customStyle:{height:"47px","border-radius":"0px",color:"#3b4144"}},{default:n((()=>[u("退出登录")])),_:1})):(s(),o(w,{key:1,onClick:h,type:"primary"},{default:n((()=>[u("前往登录")])),_:1}))])),_:1}),r(T,{ref_key:"share",ref:ee,type:"share",safeArea:"",backgroundColor:"#fff"},{default:n((()=>[r(C)])),_:1},512),r(T,{ref_key:"alertDialog",ref:F,type:"dialog"},{default:n((()=>[r(j,{type:"info",cancelText:"关闭",confirmText:"确定",onConfirm:P,title:"提示",content:"自动跳转至浏览器"})])),_:1},512)],64)}}},[["__scopeId","data-v-58320c93"]]);export{ee as default};