import{o as a,c as t,w as o,i as s,e,l as r,a2 as i,q as n,u as l,j as u,k as c}from"./index-a54b26d9.js";import{_ as p}from"./u-button.6226be45.js";import{_ as m}from"./u-toast.a21edfb0.js";import{_ as d}from"./plugin-vueexport-helper.1b428a4d.js";import"./u-loading-icon.eb3938dd.js";import"./u-icon.f4540124.js";import"./u-transition.bddc12a9.js";const g=d({__name:"debug",setup(d){const g=async()=>{const a=i.importObject("timeTrigger"),t=await(async()=>(await i.database().collection("libraux-users").where("_id==$cloudEnv_uid").field("mobile,nickname,avatar,vip_date").get()).result.data[0])();await a.test1(t.mobile)},f=async()=>{},_=async()=>{const a=i.importObject("libauxConfig");await a.querySeatClash.call(this)};return(i,d)=>{const b=n,x=l,y=u(c("u-button"),p),j=u(c("u-toast"),m),w=s;return a(),t(w,{class:"content"},{default:o((()=>[e(b,{class:"logo",src:"/com/assets/logo-bd38af4d.png"}),e(x,{style:{color:"#6a6a6a","margin-top":"80px"}},{default:o((()=>[r("1. 开发者调试页，随意点击可能引起异常")])),_:1}),e(x,{style:{color:"#6a6a6a","margin-top":"15px"}},{default:o((()=>[r("2. 注意，此页功能均无任何实际作用")])),_:1}),e(x,{style:{color:"#6a6a6a","margin-top":"15px"}},{default:o((()=>[r("3. 温提，请确保本软件安装来源安全")])),_:1}),e(x,{style:{color:"#6a6a6a",margin:"15px 0 200rpx 0"}},{default:o((()=>[r("4. 如遇其他问题请联系开发者")])),_:1}),e(y,{class:"uni-btn-group",type:"primary",text:"预约测试",onClick:g}),e(y,{class:"uni-btn-group",type:"warning",text:"取消测试",onClick:f}),e(y,{class:"uni-btn-group",plain:!0,type:"error",text:"设置测试",onClick:_}),e(j,{ref:"refToast",duration:"200",position:"bottom"},null,512),e(x,{style:{color:"#8f939c",margin:"5px auto"}},{default:o((()=>[r("开发 | 测试")])),_:1})])),_:1})}}},[["__scopeId","data-v-c326f788"]]);export{g as default};
