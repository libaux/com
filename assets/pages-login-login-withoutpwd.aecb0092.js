import{ak as e,al as s,P as i,a2 as n,o as t,c as o,w as a,i as l,e as u,l as p,q as r,u as m,j as d,k as c,ad as g}from"./index-421af18f.js";import{_ as f}from"./uni-easyinput.70bb58de.js";import{_ as h}from"./u-pupu-sms-code.65453c63.js";import{m as y,c as _,_ as b,a as j}from"./login-page.mixin.213bfa2a.js";import{_ as x}from"./uni-id-pages-agreements.e045dbdb.js";import{_ as k}from"./uni-id-pages-fab-login.531885e5.js";import{_ as w}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-icons.5f4bc775.js";import"./u-icon.a3efbc8f.js";import"./u-button.ee425019.js";import"./u-loading-icon.9c1f50d7.js";import"./u-toast.53642ca1.js";import"./u-transition.33b40ec0.js";import"./uni-popup.e17e2066.js";const C=w({mixins:[y],data:()=>({type:"",phone:"",logo:"/static/logo.png"}),computed:{loginTypes:async()=>_.loginTypes,imgSrc(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},async onLoad(s){let i=s.type||_.loginTypes[0];this.type=i,this.$nextTick((()=>{["weixin","apple"].includes(i)&&(this.$refs.uniFabLogin.servicesList=this.$refs.uniFabLogin.servicesList.filter((e=>e.id!=i)))})),e("uni-id-pages-setLoginType",(e=>{this.type=e}))},onShow(){document.onkeydown=e=>{var s=e||window.event;s&&13==s.keyCode&&this.submit()}},onUnload(){s("uni-id-pages-setLoginType")},methods:{chooseArea(){i({title:"暂不支持其他国家",icon:"none",duration:1e3})},submit(){const e=this.$refs.refsms.getSMSCode();if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup();if(4!=e.length)return i({title:"验证码不能为空",icon:"none",duration:1e3});n.importObject("uni-id-co",{errorOptions:{type:"toast"}}).loginBySms({mobile:this.phone,smsCode:e}).then((e=>{this.loginSuccess(e)}))}}},[["render",function(e,s,i,n,y,_){const w=r,C=l,L=m,v=d(c("uni-easyinput"),f),S=d(c("u-pupu-sms-code"),h),T=d(c("uni-forms-item"),b),$=d(c("uni-forms"),j),A=d(c("uni-id-pages-agreements"),x),B=g,F=d(c("uni-id-pages-fab-login"),k);return t(),o(C,{class:"uni-content"},{default:a((()=>[u(C,{class:"login-logo"},{default:a((()=>[u(w,{src:y.logo},null,8,["src"])])),_:1}),u(L,{class:"title"},{default:a((()=>[p("短信验证登录")])),_:1}),u(C,null,{default:a((()=>[u($,null,{default:a((()=>[u(T,null,{default:a((()=>[u(C,{class:"phone-box"},{default:a((()=>[u(C,{onClick:_.chooseArea,class:"area"},{default:a((()=>[p("+86")])),_:1},8,["onClick"]),u(v,{class:"input-box",type:"number",inputBorder:!1,modelValue:y.phone,"onUpdate:modelValue":s[0]||(s[0]=e=>y.phone=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),u(C,{style:{"margin-top":"12px"}},{default:a((()=>[u(S,{mobile:y.phone,ref:"refsms"},null,8,["mobile"])])),_:1})])),_:1})])),_:1}),u(A,{scope:"register",ref:"agreements"},null,512),u(B,{class:"uni-btn send-btn",type:"primary",onClick:_.submit},{default:a((()=>[p("登录")])),_:1},8,["onClick"]),u(C,{class:"tip"},{default:a((()=>[u(L,null,{default:a((()=>[p("确认手机已绑定图书馆？否则请勿发验证码")])),_:1})])),_:1})])),_:1}),u(F,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-1eb11c33"]]);export{C as default};
