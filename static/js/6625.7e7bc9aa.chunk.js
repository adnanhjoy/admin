"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[6625],{76625:(e,a,d)=>{d.r(a),d.d(a,{default:()=>o});var i=d(72791),r=d(57689),n=d(9085),l=d(57427),s=d(94296),u=d(43034),t=d(80184);const o=()=>{const{id:e}=(0,r.UO)(),[a,{isLoading:d,isError:o,isSuccess:g}]=(0,l.UY)(),p=(0,r.s0)(),[v,c]=(0,i.useState)(""),[f,{isLoading:m,isError:b,isSuccess:C}]=(0,l.hl)(),{data:S,isLoading:h}=(0,l.x9)(e);return(0,i.useEffect)((()=>{o&&n.Am.error("Banner added failed"),b&&n.Am.error("Banner update failed")}),[o,b]),(0,i.useEffect)((()=>{g&&p(-1),C&&p(-1)}),[g,C]),(0,i.useEffect)((()=>{var e;c(null===S||void 0===S||null===(e=S.data)||void 0===e?void 0:e.slug)}),[S]),(0,t.jsx)(t.Fragment,{children:h?(0,t.jsx)(u.Z,{}):(0,t.jsx)(s.Z,{onSubmit:d=>{var i,r,n,l,s,u;const t=d.image[0],o=new FormData;o.append("image",t),null!==(i=d.categories)&&void 0!==i&&i.value&&o.append("categories",JSON.stringify(null===(r=d.categories)||void 0===r?void 0:r.value)),null!==(n=d.subCategories)&&void 0!==n&&n.value&&o.append("subCategories",JSON.stringify(null===(l=d.subCategories)||void 0===l?void 0:l.value)),null!==(s=d.subCategoryChildren)&&void 0!==s&&s.value&&o.append("subCategoryChildren",JSON.stringify(null===(u=d.subCategoryChildren)||void 0===u?void 0:u.value)),d.name&&o.append("name",d.name),d.product&&o.append("product",d.product),d.related&&o.append("related",d.related),v&&o.append("slug",v),e?f({id:e,formData:o}):a(o)},addLoading:d||m,title:"Add side banner",bannerData:null===S||void 0===S?void 0:S.data,bannerSize:"300 x free",slugValue:v,setSlugValue:c})})}}}]);
//# sourceMappingURL=6625.7e7bc9aa.chunk.js.map