import{a9 as e,ai as s,a2 as a,P as t,aj as n,N as l,z as o,o as c,c as i,w as d,i as u,V as p,e as r,l as _,u as f,ad as m}from"./index-3db58787.js";import{_ as h}from"./plugin-vueexport-helper.1b428a4d.js";const k=h({data:()=>({}),onLoad(){},methods:{cancel(){e()},nextStep(){s({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:s=>{if(s.confirm){a.importObject("uni-id-co").closeAccount().then((e=>{t({title:"注销成功",duration:3e3}),n("uni_id_token"),l("uni_id_token_expired",0),o({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else e()}})}}},[["render",function(e,s,a,t,n,l){const o=f,h=m,k=u;return c(),i(k,{class:"uni-content"},{default:d((()=>[p("h3",{class:"title"},"一、注销是不可逆操作，注销后:"),r(o,{class:"words",space:"emsp"},{default:d((()=>[_(" 1.帐号将无法登录、无法找回。\\n 2.帐号所有信息都会清除(用户信息、积分信息、会员权益等)。\\n 3.注销成功则代表您自愿放弃该账号所有权益。 \\n ")])),_:1}),p("h3",{class:"title"},"二、重要提示，申请注销后无法自主操作账号"),r(o,{class:"words",space:"emsp"},{default:d((()=>[_(" 1.封禁帐号以及违规账号等不能申请注销。\\n 2.申请注销后7工作日完成注销，期间账号无法自主操作，也无法重新注册。\\n 3.在未完成注销前，误操作请在两个工作日联系开发者恢复。\\n 4.完成注销后，您的手机号等绑定关系将解除，解除后可以绑定到其他帐号。\\n 5.完成注销后，手机号可以注册新的帐号，新帐号不会存在之前帐号的任何信息。\\n ")])),_:1}),p("h3",{class:"title"},"三、请仔细阅读以上内容，否则请点击取消 "),r(o,{class:"words",space:"emsp"},{default:d((()=>[_("\\n")])),_:1}),r(k,{class:"button-group"},{default:d((()=>[r(h,{onClick:l.nextStep,class:"next",type:"default"},{default:d((()=>[_("下一步")])),_:1},8,["onClick"]),r(h,{onClick:l.cancel,type:"warn"},{default:d((()=>[_("取消")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-2d064628"]]);export{k as default};