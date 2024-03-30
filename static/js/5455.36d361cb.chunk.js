"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[5455],{21456:(e,t,r)=>{r.d(t,{NG:()=>o,UO:()=>u,_5:()=>d,c8:()=>n,d2:()=>s,zG:()=>l});const a=r(60470).apiSlice.injectEndpoints({tagTypes:["SubCategoryChildren","SingleSubCategoryChildren","SubCategoryChildLimit"],endpoints:e=>({getAllSubCategoryChildren:e.query({query:()=>({url:"/subcategory-children",method:"GET"}),providesTags:["SubCategoryChildren"]}),getFilterSubCategoryChildren:e.query({query:e=>({url:"/subcategory-children/filter?parent=".concat(e),method:"GET"}),providesTags:["SubCategoryChildren"]}),getAllSubCategoryChildrenByPage:e.query({query:e=>({url:"/subcategory-children/limit".concat(e),method:"GET"}),providesTags:["SubCategoryChildLimit"]}),getSingleSubCategoryChildren:e.query({query:e=>({url:"/subcategory-children/".concat(e),method:"GET"}),providesTags:["SingleSubCategoryChildren"]}),addSubCategoryChildren:e.mutation({query:e=>({url:"/subcategory-children",method:"POST",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategoryChildLimit"]}),updateSubCategoryChildren:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/subcategory-children/".concat(t),method:"PUT",body:r,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}},invalidatesTags:["SubCategoryChildren","SingleSubCategoryChildren","SubCategoryChildLimit"]}),deleteSubCategoryChildren:e.mutation({query:e=>({url:"/subcategory-children/".concat(e),method:"DELETE",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategoryChildLimit"]})})}),{useGetAllSubCategoryChildrenQuery:i,useGetFilterSubCategoryChildrenQuery:l,useGetAllSubCategoryChildrenByPageQuery:s,useDeleteSubCategoryChildrenMutation:o,useAddSubCategoryChildrenMutation:n,useUpdateSubCategoryChildrenMutation:d,useGetSingleSubCategoryChildrenQuery:u}=a},86892:(e,t,r)=>{r.d(t,{PC:()=>l,cm:()=>o,iI:()=>s,me:()=>d,sl:()=>i,wZ:()=>n});const a=r(60470).apiSlice.injectEndpoints({tagTypes:["SubCategory","SingleSubCategory"],endpoints:e=>({getAllSubCategory:e.query({query:()=>({url:"/subcategory",method:"GET"}),providesTags:["SubCategory"]}),getFilterSubCategory:e.query({query:e=>({url:"/subcategory/filter?parent=".concat(e),method:"GET"}),providesTags:["SubCategory"]}),getSingleSubCategory:e.query({query:e=>({url:"/subcategory/".concat(e),method:"GET"}),invalidatesTags:["SubCategory"],providesTags:["SingleSubCategory"]}),addSubCategory:e.mutation({query:e=>({url:"/subcategory",method:"POST",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]}),updateSubCategory:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/subcategory/".concat(t),method:"PUT",body:r,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}},invalidatesTags:["SubCategory","SingleSubCategory"]}),deleteSubCategory:e.mutation({query:e=>({url:"/subcategory/".concat(e),method:"DELETE",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]})})}),{useGetAllSubCategoryQuery:i,useGetFilterSubCategoryQuery:l,useDeleteSubCategoryMutation:s,useAddSubCategoryMutation:o,useUpdateSubCategoryMutation:n,useGetSingleSubCategoryQuery:d}=a},57849:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(17540),i=r(24846),l=r(78983),s=r(61134),o=r(57689),n=(r(94440),r(80184));const d=e=>{let{onSubmit:t,tableData:r,isNavigate:d}=e;const u=(0,o.s0)(),c=[...r],{register:g,handleSubmit:h,reset:y}=(0,s.cI)();return(0,n.jsx)("div",{className:"mx-3 px-3 mt-3 pb-3 border rounded",style:{backgroundColor:"#f5f5f5"},children:(0,n.jsxs)(l.lx,{onSubmit:h(t),children:[(0,n.jsx)(l.rb,{children:c.map(((e,t)=>(0,n.jsx)(l.b7,{xs:4,className:"mt-3",children:(0,n.jsx)(l.jO,{type:e.type,id:"exampleFormControlInput1",label:e.name,placeholder:e.name,disabled:e.disabled,"aria-describedby":"exampleFormControlInputHelpInline",...g(e.register)})},t)))}),(0,n.jsxs)("div",{className:"d-flex align-items-center justify-content-end mt-3 ",children:[(0,n.jsx)(l.u5,{className:"me-2 text-white",color:"info",onClick:()=>(d&&u("."),void y()),children:"Clear"}),(0,n.jsxs)(l.u5,{color:"info",className:" text-white me-2",type:"submit",children:[(0,n.jsx)(i.Z,{icon:a.j,style:{width:"12px",height:"12px"}})," Filter"]})]})]})})}},30026:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(72791),i=r(8116),l=r(57689),s=r(13691),o=r(80184);const n=e=>{let{totalPageNumber:t,searchUrl:r}=e;const[n,d]=(0,a.useState)(1),u=(0,l.s0)(),c=e=>{d(e),u((0,s.G)(r||"?","page",e.toString()))};let g=t?Array.from({length:t},((e,t)=>t+1)):[],h=[];for(let a=1;a<=g.length;a++)h.push((0,o.jsx)(i.Z.Item,{active:a===n,onClick:()=>c(a),children:a},a));return(0,o.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,o.jsxs)(i.Z,{size:"sm",children:[n>1&&(0,o.jsx)(i.Z.Prev,{onClick:()=>c(n-1)}),h,n<t&&(0,o.jsx)(i.Z.Next,{onClick:()=>c(n+1)}),t>1&&(0,o.jsx)(i.Z.Last,{onClick:()=>c(t)})]})})}},13691:(e,t,r)=>{r.d(t,{G:()=>a});const a=(e,t,r)=>{const a=e.split("&");let i=!1;for(let l=0;l<a.length;l++){const e=a[l].split("=");if(e[0]===t){e[1]=r,a[l]=e.join("="),i=!0;break}}i||a.push("".concat(t,"=").concat(r));return[...new Set(a)].join("&")}},85455:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});r(24846);var a=r(78983),i=r(57689),l=(r(86892),r(21456)),s=r(72791),o=r(11087),n=r(9085),d=r(97605),u=r(51118),c=r(30160),g=r(80184);const h=e=>{var t,r,i;let{subcategory:h,index:y}=e;const[b,m]=(0,s.useState)(!1),[C,{isLoading:S,isSuccess:x,isError:p}]=(0,l.NG)();return(0,s.useEffect)((()=>{n.Am.dismiss(),p&&n.Am.error("Delete failed",{id:"dError"}),x&&n.Am.success("Delete successfully",{id:"dSuccess"})}),[p,x]),(0,g.jsxs)(a.T6,{children:[(0,g.jsx)(a.is,{scope:"row",children:y+1}),(0,g.jsx)(a.NN,{children:null===h||void 0===h?void 0:h.title}),(0,g.jsx)(a.NN,{children:null===h||void 0===h||null===(t=h.subcategory)||void 0===t?void 0:t.title}),(0,g.jsx)(a.NN,{children:null===h||void 0===h||null===(r=h.subcategory)||void 0===r||null===(i=r.parent)||void 0===i?void 0:i.title}),(0,g.jsx)(a.NN,{children:null!==h&&void 0!==h&&h.nicheCategory?(0,g.jsx)("span",{className:"bg-success p-1 text-white rounded",children:"Yes"}):(0,g.jsx)("span",{className:"bg-danger p-1 text-white rounded",children:"No"})}),(0,g.jsx)(a.NN,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(o.rU,{to:"/subcategory-children/edit/".concat(null===h||void 0===h?void 0:h._id),children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)(d.Z,{setShowModal:m})]})}),(0,g.jsx)(c.Z,{deleteThis:e=>{C(e)},showModal:b,setShowModal:m,id:h._id,deleteLoading:S})]})};var y=r(1645),b=r(30026),m=r(57849);const C=()=>{var e,t;const r=(0,i.s0)(),s=(0,i.TH)().search,{data:o,isLoading:n,isError:d}=(0,l.d2)(s);let u=null;var c;(n&&(u=(0,g.jsx)("p",{className:"px-2 my-2 fs-5 text-primary",children:"Loading.."})),!n&&d&&(u=(0,g.jsx)("p",{className:"text-danger",children:"There was an error"})),n||d||0!==(null===o||void 0===o||null===(e=o.result)||void 0===e?void 0:e.length)||(u=(0,g.jsx)("p",{children:"There is no category"})),!n&&!d&&(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.length)>0)&&(u=null===o||void 0===o||null===(c=o.result)||void 0===c?void 0:c.map(((e,t)=>(0,g.jsx)(h,{subcategory:e,index:t},null===e||void 0===e?void 0:e._id))));return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(a.rb,{children:(0,g.jsx)(a.b7,{xs:12,children:(0,g.jsxs)(a.xH,{className:"mb-4",children:[(0,g.jsx)(y.Z,{title:"All Subcategory Children",to:"/subcategory-children/add"}),(0,g.jsx)(m.Z,{onSubmit:e=>{let t="?";e.title&&(t+="title".concat("=",e.title.trim())),r(t)},tableData:[{name:"Name / title",register:"title",type:"text"},{name:"Subcategory parent",register:"subCategory",type:"text",disabled:!0},{name:"Category parent",register:"subCategoryChild",type:"text",disabled:!0}],isNavigate:!0}),(0,g.jsxs)(a.sl,{children:[(0,g.jsx)("p",{className:"text-medium-emphasis small",children:"Here is the list of all subcategories."}),(0,g.jsxs)(a.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,g.jsx)(a.V,{color:"light",children:(0,g.jsxs)(a.T6,{className:"text-start",children:[(0,g.jsx)(a.is,{scope:"col",style:{width:"60px"},children:"Sl. No."}),(0,g.jsx)(a.is,{scope:"col",children:"Sub Children"}),(0,g.jsx)(a.is,{scope:"col",children:"Subcategory Parent"}),(0,g.jsx)(a.is,{scope:"col",children:"Category Parent"}),(0,g.jsx)(a.is,{scope:"col",children:"Niche Category"}),(0,g.jsx)(a.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,g.jsx)(a.NR,{children:u})]})]}),(0,g.jsx)(b.Z,{searchUrl:s,totalPageNumber:null===o||void 0===o?void 0:o.totalPageNumber})]})})})})}}}]);
//# sourceMappingURL=5455.36d361cb.chunk.js.map