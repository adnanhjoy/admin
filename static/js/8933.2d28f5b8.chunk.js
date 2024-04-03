"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[8933],{83812:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var i=a(72282),t=a(24846),l=a(78983),r=a(72791),d=a(92592),n=a(57689),o=a(9085),u=a(53180),c=a(98859),p=a(84579),v=a(67060),g=a(43034),f=a(80184);const m=()=>{const{id:e}=(0,n.UO)(),[s,a]=(0,r.useState)(!0),[m,S]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),[y,b]=(0,r.useState)(""),[j,T]=(0,r.useState)([]),[N,P]=(0,r.useState)(),[O,k]=(0,r.useState)(""),[D,E]=(0,r.useState)([]),[w,C]=(0,r.useState)(""),[F,I]=(0,r.useState)(),[J,L]=(0,r.useState)([]),[Z,{isLoading:q,isSuccess:z,isError:A,error:M}]=(0,v.Ey)(),[V,{isLoading:B,isSuccess:H,isError:Q,error:R}]=(0,v.Qw)(),{data:U,isLoading:_,isError:G}=(0,v.T9)(e,{skip:s}),{data:K,isLoading:W,isError:X}=(0,p.CT)();(0,r.useMemo)((()=>{var e,s;A&&o.Am.error((null===M||void 0===M||null===(e=M.data)||void 0===e?void 0:e.message)||"Product updated failed"),Q&&o.Am.error((null===R||void 0===R||null===(s=R.data)||void 0===s?void 0:s.message)||"Product added failed")}),[A,Q]);const Y=(0,n.s0)();(0,r.useEffect)((()=>{H&&Y(-1),z&&Y(-1)}),[z,H]),(0,r.useMemo)((()=>{var s,i,t,l,r,d,n;e&&(a(!1),T(null===U||void 0===U||null===(s=U.result)||void 0===s?void 0:s.tags),S(null===U||void 0===U||null===(i=U.result)||void 0===i?void 0:i.description),x(null===U||void 0===U||null===(t=U.result)||void 0===t?void 0:t.shortDescription),k(null===U||void 0===U||null===(l=U.result)||void 0===l?void 0:l.flashSaleOfferType),C(null===U||void 0===U||null===(r=U.result)||void 0===r||null===(d=r.manufacturer)||void 0===d?void 0:d._id),I(null===U||void 0===U||null===(n=U.result)||void 0===n?void 0:n.slug))}),[e,null===U||void 0===U?void 0:U.result]);return(0,f.jsx)(l.rb,{children:(0,f.jsx)(l.b7,{xs:12,children:(0,f.jsxs)(l.xH,{className:"mb-4",children:[(0,f.jsx)(l.bn,{children:(0,f.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,f.jsxs)("strong",{children:[e?"Edit":"Add"," Product"]}),(0,f.jsxs)("div",{className:"text-end",children:[(0,f.jsxs)(l.u5,{disabled:B||q,type:"submit",form:"addProductForm1",color:"success",className:"",children:[(0,f.jsx)(t.Z,{icon:i.F,className:"me-2"}),B||q?"Loading...":" Save"]}),(0,f.jsx)(l.If,{content:"Back",children:(0,f.jsx)(l.u5,{onClick:()=>Y(-1),color:"",className:"border ms-2",children:(0,f.jsx)(d.Z,{fluid:!0,src:c,style:{width:"20px"}})})})]})]})}),(0,f.jsx)(l.sl,{children:_?(0,f.jsx)(g.Z,{}):G?(0,f.jsx)("p",{children:"There was an error"}):(0,f.jsx)(u.Z,{images:D,setImages:E,data:null===U||void 0===U?void 0:U.result,description:m,setDescription:S,shortDescription:h,setShortDescription:x,specification:y,setSpecification:b,productTags:j,setProductTags:T,selectedStatus:N,setSelectedStatus:P,onSubmit:s=>{var a,i,t;const l=new FormData;for(const e of Object.keys(D))l.append("images",s.images[e]);l.append("flashSale",!0),s.name&&l.append("name",s.name),s.altTag&&l.append("altTag",s.altTag),m&&l.append("description",m),h&&l.append("shortDescription",h),y&&l.append("specification",y),O&&l.append("flashSaleOfferType",O),F&&l.append("slug",F),w&&"Pick one"!==w&&l.append("manufacturer",w),s.status&&l.append("status",s.status),s.expireDate&&l.append("expireDate",s.expireDate),s.model&&l.append("model",s.model),s.price&&l.append("price",parseFloat(s.price)),s.offerPrice&&l.append("offerPrice",parseFloat(s.offerPrice)),s.discountPercentage&&l.append("discountPercentage",parseFloat(s.discountPercentage)||0),s.quantity&&l.append("quantity",parseInt(s.quantity)),j&&l.append("tags",JSON.stringify(j)),s.color&&l.append("color",JSON.stringify(null===s||void 0===s?void 0:s.color)),s.size&&l.append("size",JSON.stringify(null===s||void 0===s?void 0:s.size)),null!==(a=s.categories)&&void 0!==a&&a.value&&l.append("categories",JSON.stringify(null===s||void 0===s?void 0:s.categories.value)),null!==(i=s.subcategories)&&void 0!==i&&i.value&&l.append("subcategories",JSON.stringify(null===s||void 0===s?void 0:s.subcategories.value)),null!==(t=s.subcategoryChildren)&&void 0!==t&&t.value&&l.append("subcategoryChildren",JSON.stringify(null===s||void 0===s?void 0:s.subcategoryChildren.value)),e?(J.forEach((e=>{l.append("prevImage",e)})),Z({id:e,data:l})):V(l)},remainingImages:J,setRemainingImages:L,setFlashSaleType:k,flashSaleType:O,flashSale:!0,allTypes:null===K||void 0===K?void 0:K.data,manufacturer:w,setManufacturer:C,slugValue:F,setSlugValue:I})})]})})})}}}]);
//# sourceMappingURL=8933.2d28f5b8.chunk.js.map