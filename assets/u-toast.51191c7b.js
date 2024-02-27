import{_ as t}from"./u-loading-icon.3820d343.js";import{d as e,m as o,a as i,o as n,c as s,b as a,i as r,j as l,k as u,w as m,p as c,e as p,n as g,f as d,l as y,t as h,u as f}from"./index-9c69a4ad.js";import{_ as C}from"./u-icon.44e97e9b.js";import{_}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as S}from"./u-transition.da536e2e.js";const b=_({name:"u-gap",mixins:[o,i,{props:{bgColor:{type:String,default:e.gap.bgColor},height:{type:[String,Number],default:e.gap.height},marginTop:{type:[String,Number],default:e.gap.marginTop},marginBottom:{type:[String,Number],default:e.gap.marginBottom}}}],computed:{gapStyle(){const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}},[["render",function(t,e,o,i,l,u){const m=r;return n(),s(m,{class:"u-gap",style:a([u.gapStyle])},null,8,["style"])}],["__scopeId","data-v-ef5cc2d5"]]);const w=_({name:"u-overlay",mixins:[o,i,{props:{show:{type:Boolean,default:e.overlay.show},zIndex:{type:[String,Number],default:e.overlay.zIndex},duration:{type:[String,Number],default:e.overlay.duration},opacity:{type:[String,Number],default:e.overlay.opacity}}}],computed:{overlayStyle(){const t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler(){this.$emit("click")}}},[["render",function(t,e,o,i,a,r){const p=l(u("u-transition"),S);return n(),s(p,{show:t.show,"custom-class":"u-overlay",duration:t.duration,"custom-style":r.overlayStyle,onClick:r.clickHandler},{default:m((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-3065f2d4"]]);const x=_({name:"u-toast",mixins:[o,i],data:()=>({isShow:!1,timer:null,config:{message:"",type:"",duration:2e3,icon:!0,position:"center",complete:null,overlay:!1,loading:!1},tmpConfig:{}}),computed:{iconName(){return this.tmpConfig.icon&&"none"!=this.tmpConfig.icon&&["error","warning","success","primary"].includes(this.tmpConfig.type)?uni.$u.type2icon(this.tmpConfig.type):""},overlayStyle(){const t={justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:"rgba(0, 0, 0, 0)"};return t},iconStyle(){const t={marginRight:"4px"};return t},loadingIconColor(){let t="rgb(255, 255, 255)";return["error","warning","success","primary"].includes(this.tmpConfig.type)&&(t=uni.$u.hexToRgb(uni.$u.color[this.tmpConfig.type])),t},contentStyle(){const t=uni.$u.sys().windowHeight,e={};let o=0;return"top"===this.tmpConfig.position?o=.25*-t:"bottom"===this.tmpConfig.position&&(o=.25*t),e.transform=`translateY(${o}px)`,e}},created(){["primary","success","error","warning","default","loading"].map((t=>{this[t]=e=>this.show({type:t,message:e})}))},methods:{show(t){this.tmpConfig=uni.$u.deepMerge(this.config,t),this.clearTimer(),this.isShow=!0,this.timer=setTimeout((()=>{this.clearTimer(),"function"==typeof this.tmpConfig.complete&&this.tmpConfig.complete()}),this.tmpConfig.duration)},hide(){this.clearTimer()},clearTimer(){this.isShow=!1,clearTimeout(this.timer),this.timer=null}},beforeDestroy(){this.clearTimer()}},[["render",function(e,o,i,c,_,S){const x=l(u("u-loading-icon"),t),v=l(u("u-icon"),C),$=l(u("u-gap"),b),k=f,T=r,I=l(u("u-overlay"),w);return n(),s(T,{class:"u-toast"},{default:m((()=>[p(I,{show:_.isShow,"custom-style":S.overlayStyle},{default:m((()=>[p(T,{class:g(["u-toast__content",["u-type-"+_.tmpConfig.type,"loading"===_.tmpConfig.type||_.tmpConfig.loading?"u-toast__content--loading":""]]),style:a([S.contentStyle])},{default:m((()=>["loading"===_.tmpConfig.type?(n(),s(x,{key:0,mode:"circle",color:"rgb(255, 255, 255)",inactiveColor:"rgb(120, 120, 120)",size:"25"})):"defalut"!==_.tmpConfig.type&&S.iconName?(n(),s(v,{key:1,name:S.iconName,size:"17",color:_.tmpConfig.type,customStyle:S.iconStyle},null,8,["name","color","customStyle"])):d("",!0),"loading"===_.tmpConfig.type||_.tmpConfig.loading?(n(),s($,{key:2,height:"12",bgColor:"transparent"})):d("",!0),p(k,{class:g(["u-toast__content__text",["u-toast__content__text--"+_.tmpConfig.type]]),style:{"max-width":"400rpx"}},{default:m((()=>[y(h(_.tmpConfig.message),1)])),_:1},8,["class"])])),_:1},8,["style","class"])])),_:1},8,["show","custom-style"])])),_:1})}],["__scopeId","data-v-b25abb65"]]);export{x as _};
