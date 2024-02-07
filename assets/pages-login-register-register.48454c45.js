import{a2 as e,P as s,a9 as t,z as o,o as a,c as r,w as i,i as n,e as u,l,V as m,q as d,u as c,j as p,k as f,ad as g}from"./index-3db58787.js";import{_ as h}from"./uni-match-media.0bcbc9e7.js";import{_ as w}from"./uni-easyinput.e929b319.js";import{c as b,m as _,_ as $,a as x}from"./login-page.mixin.27616cb9.js";import{_ as j}from"./u-pupu-sms-code.cf1c35fe.js";import{_ as v}from"./uni-id-pages-agreements.ef06b81b.js";import{_ as S}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-icons.b041f6dc.js";import"./u-icon.0ebaf88f.js";import"./u-button.d3ec5006.js";import"./u-loading-icon.8d3bb908.js";import"./u-toast.90e238fc.js";import"./u-transition.4e89c79a.js";import"./uni-popup.464c1a12.js";const{passwordStrength:k}=b,D={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,24}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,24}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,24}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,24}$/},C={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-24位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-24位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-24位之间",weak:"密码必须包含字母，密码长度必须在6-24位之间"}};function P(e){return!(k&&D[k]&&!new RegExp(D[k]).test(e))||C.passwordStrengthError[k]}const M={mobile:{rules:[{required:!0,errorMessage:"请输入手机号"},{validateFunction:function(e,s,t,o){return/^\d+$/.test(s)||o("手机号只能是纯数字"),!0}}],label:"手机号"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,s,t,o){return(/^1\d{10}$/.test(s)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(s))&&o("昵称不能是：手机号或邮箱"),/^\d+$/.test(s)&&o("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(s)&&o("昵称不能包含中文"),!0}}],label:"昵称"},...{ERROR:C,validPwd:P,getPwdRules:function(e="password",s="password2"){const t={};return t[e]={rules:[{required:!0,errorMessage:C.normal.noPwd},{validateFunction:function(e,s,t,o){const a=P(s);return!0!==a&&o(a),!0}}]},s&&(t[s]={rules:[{required:!0,errorMessage:C.normal.noRePwd},{validateFunction:function(s,t,o,a){return t!=o[e]&&a(C.normal.rePwdErr),!0}}]}),t}}.getPwdRules()},y=e.importObject("uni-id-co");const A=S({mixins:[_],data:()=>({formData:{username:"",mobile:"",password:"",smsCode:""},rules:M,focusMobile:!0,focusPassword:!1,logo:"/static/logo.png",sms_tips:"获取验证码"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var s=e||window.event;s&&13==s.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((()=>4!=this.$refs.refSMS.getSMSCode().length?s({title:"请输入短信验证码",icon:"none",duration:1e3}):this.needAgreements&&!this.agree?this.$refs.agreements.popup((()=>{this.submitForm()})):void this.submitForm())).catch((e=>{let s=e[0].key;s=s.replace(s[0],s[0].toUpperCase()),this["focus"+s]=!0}))},submitForm(){this.formData.username=parseInt(this.formData.mobile).toString(32).toUpperCase(),this.formData.smsCode=this.$refs.refSMS.getSMSCode(),y.registerUser(this.formData).then((e=>{this.loginSuccess(e)})).catch((e=>{console.log(e.message,"xxxxxxx"),this.$refs.captcha.getImageCaptcha()}))},navigateBack(){t()},toLogin(){o({url:"/pages/login/login"})}}},[["render",function(e,s,t,o,b,_){const S=d,k=n,D=c,C=p(f("uni-match-media"),h),P=p(f("uni-easyinput"),w),M=p(f("uni-forms-item"),$),y=p(f("u-pupu-sms-code"),j),A=p(f("uni-id-pages-agreements"),v),z=g,F=p(f("uni-forms"),x);return a(),r(k,{class:"uni-content"},{default:i((()=>[u(C,{"min-width":690},{default:i((()=>[u(k,{class:"login-logo"},{default:i((()=>[u(S,{src:b.logo},null,8,["src"])])),_:1}),u(D,{class:"title title-box"},{default:i((()=>[l("用户名密码注册，推荐短信登录")])),_:1})])),_:1}),m("br"),u(F,{ref:"form",value:b.formData,rules:b.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:i((()=>[u(M,{name:"mobile",required:""},{default:i((()=>[u(P,{inputBorder:!1,focus:b.focusMobile,onBlur:s[0]||(s[0]=e=>b.focusMobile=!1),class:"input-box",placeholder:"请输入手机号 ( 需先绑定图书馆,见教程)",maxlength:"11",modelValue:b.formData.mobile,"onUpdate:modelValue":s[1]||(s[1]=e=>b.formData.mobile=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),u(M,{name:"password",modelValue:b.formData.password,"onUpdate:modelValue":s[4]||(s[4]=e=>b.formData.password=e),required:""},{default:i((()=>[u(P,{inputBorder:!1,focus:b.focusPassword,onBlur:s[2]||(s[2]=e=>b.focusPassword=!1),class:"input-box",maxlength:"24",placeholder:"请设置 6-24 位密码",type:"password",modelValue:b.formData.password,"onUpdate:modelValue":s[3]||(s[3]=e=>b.formData.password=e),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),u(M,null,{default:i((()=>[u(y,{ref:"refSMS",mobile:b.formData.mobile},null,8,["mobile"])])),_:1}),u(A,{scope:"register",ref:"agreements"},null,512),u(z,{class:"uni-btn",type:"primary",onClick:_.submit},{default:i((()=>[l("注册")])),_:1},8,["onClick"]),u(z,{onClick:_.navigateBack,class:"register-back"},{default:i((()=>[l("返回")])),_:1},8,["onClick"])])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-c16b3e4d"]]);export{A as default};
