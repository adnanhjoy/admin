"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[9293],{51009:(e,t,d)=>{d.d(t,{AA:()=>u,P:()=>s,Vf:()=>o,Xs:()=>a,fN:()=>l});const r=d(60470).apiSlice.injectEndpoints({tagTypes:["AllProductType","SingleProductType"],endpoints:e=>({getAllproductType:e.query({query:()=>({url:"/product-type",method:"GET"}),providesTags:["AllProductType"]}),addProductType:e.mutation({query:e=>{let{data:t}=e;return{url:"/product-type",method:"POST",body:t}},invalidatesTags:["AllProductType","SingleProductType"]}),getSingleProductType:e.query({query:e=>({url:"/product-type/".concat(e),method:"GET"}),providesTags:["SingleProductType"]}),updateSingleProductType:e.mutation({query:e=>{let{id:t,data:d}=e;return{url:"/product-type/".concat(t),method:"PUT",body:d}},invalidatesTags:["AllProductType","SingleProductType"]}),deleteSingleProductType:e.mutation({query:e=>({url:"/product-type/".concat(e),method:"DELETE"}),invalidatesTags:["AllProductType","SingleProductType"]})})}),{useGetAllproductTypeQuery:s,useAddProductTypeMutation:l,useGetSingleProductTypeQuery:u,useUpdateSingleProductTypeMutation:o,useDeleteSingleProductTypeMutation:a}=r},59293:(e,t,d)=>{d.r(t),d.d(t,{default:()=>T});var r=d(78983),s=d(72791),l=d(57689),u=d(9085),o=d(42439),a=d(24846),i=d(61134),c=d(73779),n=d(80184);const p=e=>{var t;const{register:d,handleSubmit:s,watch:l,formState:{errors:u},control:p}=(0,i.cI)();return console.log(e),(0,n.jsxs)(r.lx,{onSubmit:s(e.onSubmit),children:[(0,n.jsx)(r.rb,{className:"g-3",children:(0,n.jsx)(r.b7,{xs:12,children:(0,n.jsx)(r.jO,{type:"text",id:"manufacturerNameInputField",label:"Product Type",placeholder:"Enter Product type",defaultValue:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.title,"aria-describedby":"manufacturerNameInputField",...d("title",{required:null===e||void 0===e||!e.data})})})}),(0,n.jsxs)("div",{className:"text-end",children:[(0,n.jsx)(c.Z,{}),(0,n.jsxs)(r.u5,{type:"submit",color:"primary",className:"mt-3",children:[(0,n.jsx)(a.Z,{icon:o.q,className:"me-2"}),null!==e&&void 0!==e&&e.isLoading?"Loading..":"Save"]})]})]})};var y=d(51009);const T=()=>{const{id:e}=(0,l.UO)(),[t,d]=(0,s.useState)(!0),{data:o}=(0,y.AA)(e,{skip:t});console.log(o);const[a,{isLoading:i,isSuccess:c,isError:T}]=(0,y.Vf)(),[m,{isLoading:g,isSuccess:P,isError:h}]=(0,y.fN)();(0,s.useEffect)((()=>{e&&d(!1)}),[e]);const x=(0,l.s0)();return(0,s.useEffect)((()=>{P&&x(-1),c&&x(-1)}),[c,P]),(0,s.useEffect)((()=>{u.Am.dismiss(),h&&u.Am.error("Product Type added failed"),T&&u.Am.error("Product Type updated")}),[h,T]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.rb,{children:(0,n.jsx)(r.b7,{xs:12,children:(0,n.jsxs)(r.xH,{className:"mb-4",children:[(0,n.jsx)(r.bn,{children:(0,n.jsxs)("strong",{children:[e?"Edit":"Add"," Product Type"]})}),(0,n.jsx)(r.sl,{children:(0,n.jsx)(p,{isLoading:i||g,data:null===o||void 0===o?void 0:o.result,onSubmit:t=>{e?a({id:e,data:t}):m({data:t})}})})]})})})})}}}]);
//# sourceMappingURL=9293.04b0ac98.chunk.js.map