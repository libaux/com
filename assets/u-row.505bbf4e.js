import{d as t,m as e,a as i,o as s,c as u,w as n,p as r,b as a,i as o}from"./index-421af18f.js";import{_ as l}from"./plugin-vueexport-helper.1b428a4d.js";const d=l({name:"u-row",mixins:[e,i,{props:{gutter:{type:[String,Number],default:t.row.gutter},justify:{type:String,default:t.row.justify},align:{type:String,default:t.row.align}}}],data:()=>({}),computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle(){const t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=uni.$u.addUnit(-Number(this.gutter)/2),t.marginRight=uni.$u.addUnit(-Number(this.gutter)/2)),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler(t){this.$emit("click")},async getComponentWidth(){return await uni.$u.sleep(),new Promise((t=>{this.$uGetRect(".u-row").then((e=>{t(e.width)}))}))}}},[["render",function(t,e,i,l,d,f){const h=o;return s(),u(h,{class:"u-row",ref:"u-row",style:a([f.rowStyle]),onClick:f.clickHandler},{default:n((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-12f0684c"]]);export{d as _};
