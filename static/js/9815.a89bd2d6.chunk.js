"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[9815],{89815:(e,a,r)=>{r.r(a),r.d(a,{default:()=>u});var d=r(72791),n=r(57689),o=r(9085),i=r(57427),s=r(94296),l=r(43034),t=r(80184);const u=()=>{const{id:e}=(0,n.UO)(),[a,{isLoading:r,isError:u,error:p,isSuccess:c}]=(0,i.zD)(),g=(0,n.s0)(),[v,m]=(0,d.useState)("#000000"),[f,b]=(0,d.useState)(""),{data:C,isLoading:S,isError:k}=(0,i.jZ)(e),[h,{isLoading:y,isError:D,isSuccess:E}]=(0,i.t4)();return(0,d.useEffect)((()=>{var e;u&&o.Am.error((null===p||void 0===p||null===(e=p.data)||void 0===e?void 0:e.message)||"Desktop banner added failed"),D&&o.Am.error("Desktop banner updated failed")}),[u,D]),(0,d.useEffect)((()=>{c&&g(-1),E&&g(-1)}),[c,E]),(0,d.useEffect)((()=>{var e;b(null===C||void 0===C||null===(e=C.data)||void 0===e?void 0:e.slug)}),[C]),(0,t.jsx)(t.Fragment,{children:S?(0,t.jsx)(l.Z,{}):(0,t.jsx)(s.Z,{onSubmit:r=>{var d,n,o,i,s,l;const t=r.image[0],u=new FormData;u.append("image",t),null!==(d=r.categories)&&void 0!==d&&d.value&&u.append("categories",JSON.stringify(null===(n=r.categories)||void 0===n?void 0:n.value)),null!==(o=r.subCategories)&&void 0!==o&&o.value&&u.append("subCategories",JSON.stringify(null===(i=r.subCategories)||void 0===i?void 0:i.value)),null!==(s=r.subCategoryChildren)&&void 0!==s&&s.value&&u.append("subCategoryChildren",JSON.stringify(null===(l=r.subCategoryChildren)||void 0===l?void 0:l.value)),r.name&&u.append("name",r.name),r.product&&u.append("product",r.product),r.campaignProducts&&u.append("campaignProducts",JSON.stringify(r.campaignProducts)),r.related&&u.append("related",r.related),v&&u.append("bannerColor",v),f&&u.append("slug",f),e?h({id:e,formData:u}):a(u),console.log(r)},addLoading:r||y,title:"Add Desktop Banner",bannerData:null===C||void 0===C?void 0:C.data,bannerSize:"1280 x 570",desktopBanner:!0,color:v,setColor:m,slugValue:f,setSlugValue:b})})}}}]);
//# sourceMappingURL=9815.a89bd2d6.chunk.js.map