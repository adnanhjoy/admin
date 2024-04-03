"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[5731],{51009:(e,t,r)=>{r.d(t,{AA:()=>l,P:()=>o,Vf:()=>i,Xs:()=>a,fN:()=>d});const s=r(60470).apiSlice.injectEndpoints({tagTypes:["AllProductType","SingleProductType"],endpoints:e=>({getAllproductType:e.query({query:()=>({url:"/product-type",method:"GET"}),providesTags:["AllProductType"]}),addProductType:e.mutation({query:e=>{let{data:t}=e;return{url:"/product-type",method:"POST",body:t}},invalidatesTags:["AllProductType","SingleProductType"]}),getSingleProductType:e.query({query:e=>({url:"/product-type/".concat(e),method:"GET"}),providesTags:["SingleProductType"]}),updateSingleProductType:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/product-type/".concat(t),method:"PUT",body:r}},invalidatesTags:["AllProductType","SingleProductType"]}),deleteSingleProductType:e.mutation({query:e=>({url:"/product-type/".concat(e),method:"DELETE"}),invalidatesTags:["AllProductType","SingleProductType"]})})}),{useGetAllproductTypeQuery:o,useAddProductTypeMutation:d,useGetSingleProductTypeQuery:l,useUpdateSingleProductTypeMutation:i,useDeleteSingleProductTypeMutation:a}=s},86892:(e,t,r)=>{r.d(t,{PC:()=>d,cm:()=>i,iI:()=>l,me:()=>u,sl:()=>o,wZ:()=>a});const s=r(60470).apiSlice.injectEndpoints({tagTypes:["SubCategory","SingleSubCategory"],endpoints:e=>({getAllSubCategory:e.query({query:()=>({url:"/subcategory",method:"GET"}),providesTags:["SubCategory"]}),getFilterSubCategory:e.query({query:e=>({url:"/subcategory/filter?".concat(e),method:"GET"}),providesTags:["SubCategory"]}),getSingleSubCategory:e.query({query:e=>({url:"/subcategory/".concat(e),method:"GET"}),invalidatesTags:["SubCategory"],providesTags:["SingleSubCategory"]}),addSubCategory:e.mutation({query:e=>({url:"/subcategory",method:"POST",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]}),updateSubCategory:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/subcategory/".concat(t),method:"PUT",body:r,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}},invalidatesTags:["SubCategory","SingleSubCategory"]}),deleteSubCategory:e.mutation({query:e=>({url:"/subcategory/".concat(e),method:"DELETE",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]})})}),{useGetAllSubCategoryQuery:o,useGetFilterSubCategoryQuery:d,useDeleteSubCategoryMutation:l,useAddSubCategoryMutation:i,useUpdateSubCategoryMutation:a,useGetSingleSubCategoryQuery:u}=s},45731:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var s=r(78983),o=r(51009),d=r(21527),l=(r(879),r(72791)),i=r(11087),a=r(9085),u=r(97605),c=r(51118),n=r(30160),y=r(80184);const g=e=>{let{proType:t,index:r}=e;const[d,g]=(0,l.useState)(!1),[p,{isLoading:h,isSuccess:S,isError:T}]=(0,o.Xs)();return(0,l.useEffect)((()=>{a.Am.dismiss(),T&&a.Am.error("Delete failed",{id:"dError"}),S&&a.Am.success("Delete successfully",{id:"dSuccess"})}),[T,S]),(0,y.jsxs)(s.T6,{children:[(0,y.jsx)(s.is,{scope:"row",children:r+1}),(0,y.jsx)(s.NN,{children:null===t||void 0===t?void 0:t.title}),(0,y.jsx)(s.NN,{children:(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)(i.rU,{to:"/product-type/edit/".concat(null===t||void 0===t?void 0:t._id),children:(0,y.jsx)(c.Z,{})}),(0,y.jsx)(u.Z,{setShowModal:g})]})}),(0,y.jsx)(n.Z,{deleteThis:e=>{p(e)},showModal:d,setShowModal:g,id:t._id,deleteLoading:h})]})},p=()=>{var e,t;const{data:r,isLoading:l,isError:i}=(0,o.P)();let a=null;var u;(l&&(a=(0,y.jsx)("p",{className:"px-2 my-2 fs-5 text-primary",children:"Loading.."})),!l&&i&&(a=(0,y.jsx)("p",{className:"text-danger",children:"There was an error"})),l||i||0!==(null===r||void 0===r||null===(e=r.result)||void 0===e?void 0:e.length)||(a=(0,y.jsx)("p",{children:"There is no category"})),!l&&!i&&(null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t.length)>0)&&(a=null===r||void 0===r||null===(u=r.result)||void 0===u?void 0:u.map(((e,t)=>(0,y.jsx)(g,{proType:e,index:t},null===e||void 0===e?void 0:e._id))));return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(s.rb,{children:(0,y.jsx)(s.b7,{xs:12,children:(0,y.jsxs)(s.xH,{className:"mb-4",children:[(0,y.jsx)(d.Z,{title:"All ProductType",to:"/product-type/add"}),(0,y.jsxs)(s.sl,{children:[(0,y.jsx)("p",{className:"text-medium-emphasis small",children:"Here is the list of all Product type."}),(0,y.jsxs)(s.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,y.jsx)(s.V,{color:"light",children:(0,y.jsxs)(s.T6,{className:"text-start",children:[(0,y.jsx)(s.is,{scope:"col",style:{width:"60px"},children:"Sl. No."}),(0,y.jsx)(s.is,{scope:"col",children:"Product Type"}),(0,y.jsx)(s.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,y.jsx)(s.NR,{children:a})]})]})]})})})})}},879:(e,t,r)=>{r.d(t,{Z:()=>y});r(24846);var s=r(78983),o=r(72791),d=r(11087),l=r(9085),i=r(86892),a=r(97605),u=r(51118),c=r(30160),n=r(80184);const y=e=>{var t;let{subcategory:r,index:y}=e;const[g,p]=(0,o.useState)(!1),[h,{isLoading:S,isSuccess:T,isError:m}]=(0,i.iI)();return(0,o.useEffect)((()=>{l.Am.dismiss(),m&&l.Am.error("Delete failed",{id:"dError"}),T&&l.Am.success("Delete successfully",{id:"dSuccess"})}),[m,T]),(0,n.jsxs)(s.T6,{children:[(0,n.jsx)(s.is,{scope:"row",children:y+1}),(0,n.jsx)(s.NN,{children:null===r||void 0===r?void 0:r.title}),(0,n.jsx)(s.NN,{children:null===r||void 0===r||null===(t=r.parent)||void 0===t?void 0:t.title}),(0,n.jsx)(s.NN,{children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(d.rU,{to:"/subcategory/edit/".concat(null===r||void 0===r?void 0:r._id),children:(0,n.jsx)(u.Z,{})}),(0,n.jsx)(a.Z,{setShowModal:p})]})}),(0,n.jsx)(c.Z,{deleteThis:e=>{h(e)},showModal:g,setShowModal:p,id:r._id,deleteLoading:S})]})}}}]);
//# sourceMappingURL=5731.0fa4b9ba.chunk.js.map