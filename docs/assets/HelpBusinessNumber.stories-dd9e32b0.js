var _=Object.defineProperty;var b=(a,e,s)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var t=(a,e,s)=>(b(a,typeof e!="symbol"?e+"":e,s),s);import{V as f}from"./vue.esm-b1e57a2f.js";import{C as y,P as d,n as g}from"./_plugin-vue2_normalizer-b11a0120.js";var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,u=(a,e,s,n)=>{for(var r=n>1?void 0:n?T(e,s):e,l=a.length-1,p;l>=0;l--)(p=a[l])&&(r=(n?p(e,s,r):p(r))||r);return n&&r&&P(e,s,r),r};let i=class extends f{constructor(){super(...arguments);t(this,"isTypeSoleProp");t(this,"isTypePartnership");t(this,"Header","Help with Business Number");t(this,"ProgramAccountUrl","https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/registering-your-business/you-need-a-business-number-a-program-account.html");t(this,"BusNumInfoUrl","https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/business-number");t(this,"helpToggle",!1)}};u([d({default:!1})],i.prototype,"isTypeSoleProp",2);u([d({default:!1})],i.prototype,"isTypePartnership",2);i=u([y({})],i);var C=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",{attrs:{id:"help-business-number"}},[s("div",{staticClass:"help-btn",on:{click:function(n){e.helpToggle=!e.helpToggle}}},[s("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-help-circle-outline ")]),e.helpToggle?s("span",{staticClass:"pl-2"},[e._v("Hide Help")]):s("span",{staticClass:"pl-2"},[e._v(e._s(e.Header))])],1),s("v-expand-transition",[e.helpToggle?s("section",{staticClass:"help-section"},[s("header",{staticClass:"help-header"},[s("h2",{staticClass:"py-4 px-0"},[e._v(" "+e._s(e.Header)+" ")])]),s("p",{staticClass:"my-4"},[e._v(" The supplied business number will be used to link this registration with "),s("a",{attrs:{href:e.ProgramAccountUrl,target:"_blank"}},[e._v(" a program account by Canada Revenue Agency "),s("v-icon",{attrs:{dense:"",color:"primary"}},[e._v("mdi-open-in-new")])],1),e._v(". "),e.isTypeSoleProp?s("span",[e._v(" You will have a business number if the sole proprietorship you are registering already has one of the following accounts: ")]):e._e(),e.isTypePartnership?s("span",[e._v(" You will have a business number if the firm you are registering already has one of the following accounts: ")]):e._e()]),s("ul",{staticClass:"bulleted-list"},[s("li",[e._v("Goods and services tax/harmonized sales tax (GST/HST)")]),s("li",[e._v("Payroll deductions")]),s("li",[e._v("Import/export")]),s("li",[e._v("Provincial sales tax (PST)")]),s("li",[e._v("WorkSafeBC")])]),s("p",{staticClass:"my-4"},[e._v(" You can find your business number on the correspondence sent to you for the accounts listed above. ")]),e.isTypeSoleProp?[s("p",{staticClass:"my-4"},[e._v(" You may also have a business number that you can use for this registration if the following applies: ")]),s("ul",{staticClass:"bulleted-list"},[s("li",[e._v(" You are an individual registering a sole proprietorship: you may already have a business number if you have previously registered a sole proprietorship (in any province) as an individual. ")])])]:e._e(),s("p",{staticClass:"my-4"},[e._v(" Please contact the Canada Revenue Agency (CRA) at "),s("a",{attrs:{href:"tel:+1-800-959-5525"}},[e._v("1-800-959-5525")]),e._v(" if you have forgotten or can't find your business number. ")]),s("p",{staticClass:"my-4"},[e._v(" To learn more, "),s("a",{attrs:{href:e.BusNumInfoUrl,target:"_blank"}},[e._v(" visit the Business Number information page "),s("v-icon",{attrs:{dense:"",color:"primary"}},[e._v("mdi-open-in-new")])],1),e._v(". ")]),s("div",{staticClass:"help-btn bottom",on:{click:function(n){e.helpToggle=!e.helpToggle}}},[e._v(" Hide Help ")])],2):e._e()])],1)},w=[],h=g(i,C,w,!1,null,"6448c191",null,null);const H=h.exports;h.exports.__docgenInfo={exportName:"default",displayName:"HelpBusinessNumber",description:"",tags:{},props:[{name:"isTypeSoleProp",tags:{},description:"Whether this is a Sole Proprietorship entity.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTypePartnership",tags:{},description:"Whether this is a General Partnership entity.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/Users/kjazzar/Downloads/repos/bcrs-shared-components/src/components/help-business-number/HelpBusinessNumber.vue"]};const $={title:"component/HelpBusinessNumber"},x=(a,{argTypes:e})=>({props:Object.keys(e),components:{HelpBusinessNumber:H},template:'<help-business-number v-bind="$props" />'}),o=x.bind({});o.args={isTypeSoleProp:!1,isTypePartnership:!1};var c,m,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    HelpBusinessNumber
  },
  template: '<help-business-number v-bind="$props" />' // $props comes from args below
})`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=HelpBusinessNumber.stories-dd9e32b0.js.map