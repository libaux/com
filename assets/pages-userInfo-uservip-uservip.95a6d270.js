import{d as e,m as t,a as i,o as l,c as a,b as s,i as n,j as d,k as r,w as o,e as u,l as c,t as h,f,u as p,J as y,K as m,X as _,ae as x,O as S,L as v,g,r as b,F as k,T as C,Y as B}from"./index-3db58787.js";import{_ as L}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as $}from"./uni-icons.b041f6dc.js";const w=L({name:"u-line",mixins:[t,i,{props:{color:{type:String,default:e.line.color},length:{type:[String,Number],default:e.line.length},direction:{type:String,default:e.line.direction},hairline:{type:Boolean,default:e.line.hairline},margin:{type:[String,Number],default:e.line.margin},dashed:{type:Boolean,default:e.line.dashed}}}],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}},[["render",function(e,t,i,d,r,o){const u=n;return l(),a(u,{class:"u-line",style:s([o.lineStyle])},null,8,["style"])}],["__scopeId","data-v-d80a5a46"]]);const z=L({name:"u-divider",mixins:[t,i,{props:{dashed:{type:Boolean,default:e.divider.dashed},hairline:{type:Boolean,default:e.divider.hairline},dot:{type:Boolean,default:e.divider.dot},textPosition:{type:String,default:e.divider.textPosition},text:{type:[String,Number],default:e.divider.text},textSize:{type:[String,Number],default:e.divider.textSize},textColor:{type:String,default:e.divider.textColor},lineColor:{type:String,default:e.divider.lineColor}}}],computed:{textStyle(){const e={};return e.fontSize=uni.$u.addUnit(this.textSize),e.color=this.textColor,e},leftLineStyle(){const e={};return"left"===this.textPosition?e.width="80rpx":e.flex=1,e},rightLineStyle(){const e={};return"right"===this.textPosition?e.width="80rpx":e.flex=1,e}},methods:{click(){this.$emit("click")}}},[["render",function(e,t,i,y,m,_){const x=d(r("u-line"),w),S=p,v=n;return l(),a(v,{class:"u-divider",style:s([e.$u.addStyle(e.customStyle)]),onClick:_.click},{default:o((()=>[u(x,{color:e.lineColor,customStyle:_.leftLineStyle,hairline:e.hairline,dashed:e.dashed},null,8,["color","customStyle","hairline","dashed"]),e.dot?(l(),a(S,{key:0,class:"u-divider__dot"},{default:o((()=>[c("●")])),_:1})):e.text?(l(),a(S,{key:1,class:"u-divider__text",style:s([_.textStyle])},{default:o((()=>[c(h(e.text),1)])),_:1},8,["style"])):f("",!0),u(x,{color:e.lineColor,customStyle:_.rightLineStyle,hairline:e.hairline,dashed:e.dashed},null,8,["color","customStyle","hairline","dashed"])])),_:1},8,["style","onClick"])}],["__scopeId","data-v-d0681d51"]]),j=L({__name:"uservip",setup(e){C((e=>({"3caf17a6":i.value})));const t=y().privilege,i=m("#FEE8B7");_((async()=>{x({frontColor:"#000000",backgroundColor:i.value})}));const s=S((()=>B.userInfo));return(e,i)=>{const f=n,p=d(r("u-divider"),z),y=d(r("uni-icons"),$);return l(),a(f,{class:"container"},{default:o((()=>[u(f,{class:"vip_box"},{default:o((()=>[u(f,{class:"content"},{default:o((()=>[c(" Dear, "+h(v(s).nickname)+" ~ ",1)])),_:1}),u(f,{class:"vip_str"},{default:o((()=>[c(h(v(s).vip_date_str)+" 到期 ",1)])),_:1})])),_:1}),u(f,{class:"vip_function"},{default:o((()=>[u(f,{class:"vip_function_title"},{default:o((()=>[c(" 服务权益 ")])),_:1}),u(p),(l(!0),g(k,null,b(v(t),(e=>(l(),a(f,{class:"vipfun_item"},{default:o((()=>[u(f,{class:"vipfun_item_text"},{default:o((()=>[c(h(e.name),1)])),_:2},1024),u(f,{class:"vipfun_item_text"},{default:o((()=>[u(y,{type:"checkmarkempty",color:"#ffbd41",size:"20"})])),_:1})])),_:2},1024)))),256))])),_:1})])),_:1})}}},[["__scopeId","data-v-bf69a0af"]]);export{j as default};
