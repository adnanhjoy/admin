"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[9538],{26573:(e,a,l)=>{l.d(a,{RJ:()=>s,d5:()=>n,qV:()=>d,vN:()=>i,wv:()=>r});const t=l(60470).apiSlice.injectEndpoints({tagTypes:["FlashSaleOffer","SingleFlashSaleOffer"],endpoints:e=>({getFlashSaleOffer:e.query({query:()=>({url:"/flashSale-offer",method:"GET"}),providesTags:["FlashSaleOffer"]}),getSingleFlashSaleOffer:e.query({query:e=>({url:"/flashSale-offer/".concat(e),method:"GET",headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),providesTags:["SingleFlashSaleOffer"]}),addFlashSaleOffer:e.mutation({query:e=>({url:"/flashSale-offer",method:"POST",body:e}),invalidatesTags:["FlashSaleOffer"]}),updateSingleFlashSaleOffer:e.mutation({query:e=>{let{id:a,data:l}=e;return{url:"/flashSale-offer/".concat(a),method:"PUT",body:l}},invalidatesTags:["FlashSaleOffer"]}),deleteSingleFlashSaleOfferById:e.mutation({query:e=>({url:"/flashSale-offer/".concat(e),method:"DELETE",body:e}),invalidatesTags:["FlashSaleOffer","SingleFlashSaleOffer"]})})}),{useGetFlashSaleOfferQuery:s,useGetSingleFlashSaleOfferQuery:r,useAddFlashSaleOfferMutation:i,useUpdateSingleFlashSaleOfferMutation:n,useDeleteSingleFlashSaleOfferByIdMutation:d}=t},84579:(e,a,l)=>{l.d(a,{CT:()=>s,XX:()=>r,_3:()=>i,ez:()=>d,ih:()=>n});const t=l(60470).apiSlice.injectEndpoints({tagTypes:["AllTypes","SingleTypes"],endpoints:e=>({getAllTypes:e.query({query:()=>({url:"/flashSale-types",method:"GET"}),providesTags:["AllTypes"]}),getSingleTypes:e.query({query:e=>({url:"/flashSale-types/".concat(e),method:"GET"}),providesTags:["SingleTypes"]}),deleteSingleTypes:e.mutation({query:e=>({url:"/flashSale-types/".concat(e),method:"DELETE"}),invalidatesTags:["AllTypes"]}),updateSingleTypes:e.mutation({query:e=>{let{id:a,data:l}=e;return{url:"/flashSale-types/".concat(a),method:"PUT",body:l}},invalidatesTags:["AllTypes","SingleTypes"]}),addSingleTypes:e.mutation({query:e=>({url:"/flashSale-types",method:"POST",body:e}),invalidatesTags:["AllTypes"]})})}),{useGetAllTypesQuery:s,useGetSingleTypesQuery:r,useDeleteSingleTypesMutation:i,useAddSingleTypesMutation:n,useUpdateSingleTypesMutation:d}=t},9538:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var t=l(78983),s=l(72791),r=l(57689),i=l(9085),n=l(43034),d=l(26573),o=l(72282),u=l(24846),c=l(63108),f=l(61134),h=l(5560),p=l(84579),m=l(73779);const S=e=>{const a=[];return null===e||void 0===e||e.forEach((e=>{a.push({value:e,label:e})})),a};var v=l(80184);const y=e=>{var a,l,i,n,d;let{onSubmit:y,loading:g,data:x,startDate:T,setStartDate:j,endDate:b,color:D,setColor:F,setEndDate:E}=e;const{id:O}=(0,r.UO)(),{handleSubmit:q,control:N,register:w,errors:A,setValue:C}=(0,f.cI)(),{data:L,isLoading:k,isError:G}=(0,p.CT)(),U=null===L||void 0===L||null===(a=L.data)||void 0===a?void 0:a.map((e=>({value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})));(0,s.useEffect)((()=>{if(x){for(const e in x)C(e,x[e]);j(x.startDate),E(x.endDate)}}),[x,C]);return(0,v.jsxs)(t.lx,{onSubmit:q(y),children:[(0,v.jsxs)(t.b7,{xs:12,children:[(0,v.jsx)("label",{className:"w-100",children:"Offer name"}),(0,v.jsx)(t.jO,{type:"text",id:"titleInputField",placeholder:"Enter types name","aria-describedby":"titleInputField",...w("name",{required:!0})}),"required"===(null===A||void 0===A||null===(l=A.name)||void 0===l?void 0:l.type)&&(0,v.jsx)("p",{className:"text-danger",children:"Name is required"})]}),(0,v.jsxs)(t.b7,{xs:12,children:[(0,v.jsx)("label",{className:"mb-0",children:"Select types for make offer"}),(0,v.jsx)(f.Qr,{control:N,name:"offerType",rules:{required:!0},render:e=>{let{field:{onChange:a,value:l,name:t,ref:s}}=e;return(0,v.jsx)(h.ZP,{className:"mt-2",defaultValue:S(null===x||void 0===x?void 0:x.offerType),inputRef:s,options:U,value:null===U||void 0===U?void 0:U.find((e=>(null===e||void 0===e?void 0:e.value)===l)),onChange:e=>a(null===e||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e.value))),isMulti:!0})}}),"required"===(null===A||void 0===A||null===(i=A.offerType)||void 0===i?void 0:i.type)&&(0,v.jsx)("p",{className:"text-danger",children:"OfferType is required"})]}),(0,v.jsxs)(t.rb,{children:[(0,v.jsxs)(t.b7,{xs:6,children:[(0,v.jsx)("label",{className:"text-primary",children:"Start Date"}),x&&(0,v.jsxs)("label",{htmlFor:"",className:" d-flex justify-content-between mb-1",children:[(0,v.jsx)("span",{children:new Date(T).toLocaleDateString()}),(0,v.jsx)("span",{children:new Date(T).toLocaleTimeString()})]}),(0,v.jsx)(t.jO,{placeholder:"Enter Start Date","aria-describedby":"startDate",defaultValue:T,onChange:e=>j(e.target.value),required:!x,onFocus:e=>e.target.type="datetime-local",onBlur:e=>e.target.type="text"}),"required"===(null===A||void 0===A||null===(n=A.startDate)||void 0===n?void 0:n.type)&&(0,v.jsx)("p",{className:"text-danger",children:"Start date is required"})]}),(0,v.jsxs)(t.b7,{xs:6,children:[(0,v.jsx)("label",{className:"text-primary",children:"End Date"}),x&&(0,v.jsxs)("label",{htmlFor:"",className:" d-flex justify-content-between mb-1",children:[(0,v.jsx)("span",{children:new Date(b).toLocaleDateString()}),(0,v.jsx)("span",{children:new Date(b).toLocaleTimeString()})]}),(0,v.jsx)(t.jO,{placeholder:"Enter End Date","aria-describedby":"endDate",defaultValue:b,required:!x,onChange:e=>E(e.target.value),onFocus:e=>e.target.type="datetime-local",onBlur:e=>e.target.type="text"}),"required"===(null===A||void 0===A||null===(d=A.endDate)||void 0===d?void 0:d.type)&&(0,v.jsx)("p",{className:"text-danger",children:"End date is required"})]}),(0,v.jsxs)(t.b7,{className:"mt-2",xs:12,children:[(0,v.jsxs)("label",{className:"mb-2",children:["Background Color ",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(c.xS,{width:"350px",color:D,onChangeComplete:e=>{F(e.hex)}}),(0,v.jsxs)("p",{className:"mt-2",style:{color:"".concat(D)},children:["Selected color: ",D]})]})]}),(0,v.jsxs)("div",{className:"text-end  ",children:[(0,v.jsx)(m.Z,{}),(0,v.jsxs)(t.u5,{type:"submit",color:"success",className:"mt-3 text-white",children:[(0,v.jsx)(u.Z,{icon:o.F,className:"me-2"}),g?"Loading...":O?"Update":"Save"]})]})]})};var g=l(39432);const x=()=>{const[e,a]=(0,s.useState)(!0),{id:l}=(0,r.UO)(),[o,u]=(0,s.useState)(""),[c,f]=(0,s.useState)(""),h=(0,r.s0)(),[p,m]=(0,s.useState)("#FFFFFF"),{data:S,isLoading:x,isError:T,error:j}=(0,d.wv)(l,{skip:e}),[b,{isLoading:D,isError:F,isSuccess:E,error:O}]=(0,d.vN)(),[q,{isLoading:N,isError:w,isSuccess:A,error:C}]=(0,d.d5)();return(0,s.useEffect)((()=>{var e,a;F&&i.Am.error((null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.message)||"Added Failed"),w&&i.Am.error((null===C||void 0===C||null===(a=C.data)||void 0===a?void 0:a.message)||"Updated Failed")}),[F,w]),(0,s.useEffect)((()=>{E&&h(-1),A&&h(-1)}),[E,A]),(0,s.useEffect)((()=>{l&&a(!1)}),[l]),(0,v.jsxs)(t.xH,{children:[(0,v.jsx)(g.Z,{title:l?"Customize flashSale offer":"Add flashSale offer"}),x?(0,v.jsx)(n.Z,{}):(0,v.jsx)(t.sl,{children:(0,v.jsx)(y,{loading:N||D,data:null===S||void 0===S?void 0:S.result,onSubmit:e=>{const a=new Date(o).getTime(),t=new Date(c).getTime()-a+(a-Date.now())+Date.now(),s=null===S||void 0===S?void 0:S.result,r={...s,name:e.name||(null===s||void 0===s?void 0:s.name),startDate:o||(null===s||void 0===s?void 0:s.startDate),endDate:c||(null===s||void 0===s?void 0:s.startDate),timeStamps:t||(null===s||void 0===s?void 0:s.timeStamps),offerType:e.offerType||(null===s||void 0===s?void 0:s.offerType),status:"active",color:p};l?q({id:l,data:r}):b(r)},startDate:o,setStartDate:u,endDate:c,setEndDate:f,color:p,setColor:m})})]})}}}]);
//# sourceMappingURL=9538.5803b31e.chunk.js.map