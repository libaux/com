import{o as t,c as e,w as i,p as s,n as a,b as l,l as o,t as n,f as d,u as r,i as c,z as u,A as h,ag as p,ah as g,j as f,k as m,e as y,q as b,ac as k}from"./index-3db58787.js";import{_ as S}from"./uni-icons.b041f6dc.js";import{_ as x}from"./plugin-vueexport-helper.1b428a4d.js";const _=x({name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:()=>[0,0]},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:()=>({})}},data:()=>({}),computed:{width(){return 8*String(this.text).length+12},classNames(){const{inverted:t,type:e,size:i,absolute:s}=this;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,s?"uni-badge--absolute":""].join(" ")},positionStyle(){if(!this.absolute)return{};let t=this.width/2,e=10;this.isDot&&(t=5,e=5);const i=`${-t+this.offset[0]}px`,s=`${-e+this.offset[1]}px`,a={rightTop:{right:i,top:s},rightBottom:{right:i,bottom:s},leftBottom:{left:i,bottom:s},leftTop:{left:i,top:s}},l=a[this.absolute];return l||a.rightTop},dotStyle(){return this.isDot?{width:"10px",minWidth:"0",height:"10px",padding:"0",borderRadius:"10px"}:{}},displayValue(){const{isDot:t,text:e,maxNum:i}=this;return t?"":Number(e)>i?`${i}+`:e}},methods:{onClick(){this.$emit("click")}}},[["render",function(u,h,p,g,f,m){const y=r,b=c;return t(),e(b,{class:"uni-badge--x"},{default:i((()=>[s(u.$slots,"default",{},void 0,!0),p.text?(t(),e(y,{key:0,class:a([m.classNames,"uni-badge"]),style:l([m.positionStyle,p.customStyle,m.dotStyle]),onClick:h[0]||(h[0]=t=>m.onClick())},{default:i((()=>[o(n(m.displayValue),1)])),_:1},8,["class","style"])):d("",!0)])),_:3})}],["__scopeId","data-v-414d462c"]]);const w=x({name:"UniListItem",emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},badgeStyle:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({type:"",color:"#000000",size:20,customPrefix:""})},border:{type:Boolean,default:!0},customStyle:{type:Object,default:()=>({padding:"",backgroundColor:"#FFFFFF"})},keepScrollPosition:{type:Boolean,default:!1}},watch:{"customStyle.padding":{handler(t){"number"==typeof t&&(t+="");let e=t.split(" ");if(1===e.length){const t=e[0];this.padding={top:t,right:t,bottom:t,left:t}}else if(2===e.length){const[t,i]=e;this.padding={top:t,right:i,bottom:t,left:i}}else if(4===e.length){const[t,i,s,a]=e;this.padding={top:t,right:i,bottom:s,left:a}}},immediate:!0}},data:()=>({isFirstChild:!1,padding:{top:"",right:"",bottom:"",left:""}}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t.detail)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:u(e);break;case"redirectTo":g(e);break;case"reLaunch":p(e);break;case"switchTab":h(e)}}}},[["render",function(u,h,p,g,x,w){const C=c,B=b,T=f(m("uni-icons"),S),$=r,v=f(m("uni-badge"),_),F=k;return t(),e(C,{class:a([{"uni-list-item--disabled":p.disabled},"uni-list-item"]),style:l({"background-color":p.customStyle.backgroundColor}),"hover-class":!p.clickable&&!p.link||p.disabled||p.showSwitch?"":"uni-list-item--hover",onClick:w.onClick},{default:i((()=>[x.isFirstChild?d("",!0):(t(),e(C,{key:0,class:a(["border--left",{"uni-list--border":p.border}])},null,8,["class"])),y(C,{class:a(["uni-list-item__container",{"container--right":p.showArrow||p.link,"flex--direction":"column"===p.direction}]),style:l({paddingTop:x.padding.top,paddingLeft:x.padding.left,paddingRight:x.padding.right,paddingBottom:x.padding.bottom})},{default:i((()=>[s(u.$slots,"header",{},(()=>[y(C,{class:"uni-list-item__header"},{default:i((()=>[p.thumb?(t(),e(C,{key:0,class:"uni-list-item__icon"},{default:i((()=>[y(B,{src:p.thumb,class:a(["uni-list-item__icon-img",["uni-list--"+p.thumbSize]])},null,8,["src","class"])])),_:1})):p.showExtraIcon?(t(),e(C,{key:1,class:"uni-list-item__icon"},{default:i((()=>[y(T,{customPrefix:p.extraIcon.customPrefix,color:p.extraIcon.color,size:p.extraIcon.size,type:p.extraIcon.type},null,8,["customPrefix","color","size","type"])])),_:1})):d("",!0)])),_:1})]),!0),s(u.$slots,"body",{},(()=>[y(C,{class:a(["uni-list-item__content",{"uni-list-item__content--center":p.thumb||p.showExtraIcon||p.showBadge||p.showSwitch}])},{default:i((()=>[p.title?(t(),e($,{key:0,class:a(["uni-list-item__content-title",[0!==p.ellipsis&&p.ellipsis<=2?"uni-ellipsis-"+p.ellipsis:""]])},{default:i((()=>[o(n(p.title),1)])),_:1},8,["class"])):d("",!0),p.note?(t(),e($,{key:1,class:"uni-list-item__content-note"},{default:i((()=>[o(n(p.note),1)])),_:1})):d("",!0)])),_:1},8,["class"])]),!0),s(u.$slots,"footer",{},(()=>[p.rightText||p.showBadge||p.showSwitch?(t(),e(C,{key:0,class:a(["uni-list-item__extra",{"flex--justify":"column"===p.direction}])},{default:i((()=>[p.rightText?(t(),e($,{key:0,class:"uni-list-item__extra-text"},{default:i((()=>[o(n(p.rightText),1)])),_:1})):d("",!0),p.showBadge?(t(),e(v,{key:1,type:p.badgeType,text:p.badgeText,"custom-style":p.badgeStyle},null,8,["type","text","custom-style"])):d("",!0),p.showSwitch?(t(),e(F,{key:2,disabled:p.disabled,checked:p.switchChecked,onChange:w.onSwitchChange},null,8,["disabled","checked","onChange"])):d("",!0)])),_:1},8,["class"])):d("",!0)]),!0)])),_:3},8,["class","style"]),p.showArrow||p.link?(t(),e(T,{key:1,size:16,class:"uni-icon-wrapper",color:"#bbb",type:"arrowright"})):d("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-2c452325"]]);export{w as _};
