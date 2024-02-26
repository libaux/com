import{d as e,m as t,a as o,j as s,k as a,o as n,c as r,w as i,e as l,b as d,n as u,p as g,f as c,i as h,J as f,K as m,g as p,r as _,L as x,F as y,l as S,t as w,D as b}from"./index-a54b26d9.js";import{_ as H}from"./u--text.cb65c0b8.js";import{_ as I}from"./u-icon.f4540124.js";import{_ as M}from"./plugin-vueexport-helper.1b428a4d.js";import"./u-text.694e0c74.js";const T=M({name:"u-read-more",mixins:[t,o,{props:{showHeight:{type:[String,Number],default:e.readMore.showHeight},toggle:{type:Boolean,default:e.readMore.toggle},closeText:{type:String,default:e.readMore.closeText},openText:{type:String,default:e.readMore.openText},color:{type:String,default:e.readMore.color},fontSize:{type:[String,Number],default:e.readMore.fontSize},shadowStyle:{type:Object,default:()=>({backgroundImage:"linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",paddingTop:"100px",marginTop:"-100px"})},textIndent:{type:String,default:e.readMore.textIndent},name:{type:[String,Number],default:e.readMore.name}}}],data:()=>({isLongContent:!1,status:"close",elId:uni.$u.guid(),contentHeight:100}),computed:{innerShadowStyle(){return"open"===this.status?{}:this.shadowStyle}},mounted(){this.init()},methods:{async init(){this.getContentHeight().then((e=>{this.contentHeight=e,e>uni.$u.getPx(this.showHeight)&&(this.isLongContent=!0,this.status="close")}))},async getContentHeight(){return await uni.$u.sleep(30),new Promise((e=>{this.$uGetRect("."+this.elId).then((t=>{e(t.height)}))}))},toggleReadMore(){this.status="close"===this.status?"open":"close",0==this.toggle&&(this.isLongContent=!1),this.$emit(this.status,this.name)}}},[["render",function(e,t,o,f,m,p){const _=h,x=s(a("u--text"),H),y=s(a("u-icon"),I);return n(),r(_,{class:"u-read-more"},{default:i((()=>[l(_,{class:"u-read-more__content",style:d({height:m.isLongContent&&"close"===m.status?e.$u.addUnit(e.showHeight):e.$u.addUnit(m.contentHeight),textIndent:e.textIndent})},{default:i((()=>[l(_,{class:u(["u-read-more__content__inner",[m.elId]]),ref:"u-read-more__content__inner"},{default:i((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])])),_:3},8,["style"]),m.isLongContent?(n(),r(_,{key:0,class:"u-read-more__toggle",style:d([p.innerShadowStyle])},{default:i((()=>[g(e.$slots,"toggle",{},(()=>[l(_,{class:"u-read-more__toggle__text",onClick:p.toggleReadMore},{default:i((()=>[l(x,{text:"close"===m.status?e.closeText:e.openText,color:e.color,size:e.fontSize,lineHeight:e.fontSize,margin:"0 5px 0 0"},null,8,["text","color","size","lineHeight"]),l(_,{class:"u-read-more__toggle__icon"},{default:i((()=>[l(y,{color:e.color,size:e.fontSize+2,name:"close"===m.status?"arrow-down":"arrow-up"},null,8,["color","size","name"])])),_:1})])),_:1},8,["onClick"])]),!0)])),_:3},8,["style"])):c("",!0)])),_:3})}],["__scopeId","data-v-ebb2c3fa"]]),z=M({__name:"noticePage",setup(e){const t=f(),o=m({backgroundImage:"linear-gradient(-180deg, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 255) 100%)",paddingTop:"100px",marginTop:"-100px"});return(e,d)=>{const u=h,g=b,c=s(a("u-read-more"),T);return n(),r(u,{class:"container_message"},{default:i((()=>[(n(!0),p(y,null,_(x(t).messages,(e=>(n(),r(u,{class:"messageBox"},{default:i((()=>[l(u,{class:"title"},{default:i((()=>[S(w(e.timeStr),1)])),_:2},1024),l(c,{ref_for:!0,ref:"readMore",shadowStyle:o.value,toggle:!0,showHeight:"60",style:{"background-color":"#fff"}},{default:i((()=>[l(g,{nodes:e.content},null,8,["nodes"])])),_:2},1032,["shadowStyle"])])),_:2},1024)))),256))])),_:1})}}},[["__scopeId","data-v-b8f6822d"]]);export{z as default};
