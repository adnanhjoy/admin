"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[8184],{62477:(e,i,l)=>{l.d(i,{O3:()=>a,PM:()=>c,Ud:()=>r,cX:()=>o,yd:()=>d});const s=l(60470).apiSlice.injectEndpoints({tagTypes:["AllPrivacy","SinglePrivacy"],endpoints:e=>({getAllPrivacy:e.query({query:()=>({url:"/privacy-policy",method:"GET"}),providesTags:["AllPrivacy"]}),getSinglePrivacy:e.query({query:e=>({url:"/privacy-policy/".concat(e),method:"GET"}),providesTags:["SinglePrivacy"]}),addNewPrivacy:e.mutation({query:e=>({url:"/privacy-policy",method:"POST",body:e}),invalidatesTags:["AllPrivacy"]}),updateSinglePrivacy:e.mutation({query:e=>{let{id:i,data:l}=e;return{url:"/privacy-policy/".concat(i),method:"PUT",body:l}},invalidatesTags:["AllPrivacy","SinglePrivacy"]}),deleteSinglePrivacy:e.mutation({query:e=>({url:"/privacy-policy/".concat(e),method:"DELETE"}),invalidatesTags:["AllPrivacy"]})})}),{useGetAllPrivacyQuery:d,useGetSinglePrivacyQuery:r,useAddNewPrivacyMutation:c,useUpdateSinglePrivacyMutation:o,useDeleteSinglePrivacyMutation:a}=s},68184:(e,i,l)=>{l.r(i),l.d(i,{default:()=>h});var s=l(78983),d=l(62477),r=l(1645),c=l(72791),o=l(11087),a=l(9085),n=l(97605),t=l(51118),v=l(30160),y=l(80184);const u=e=>{let{index:i,blog:l}=e;const[r,u]=(0,c.useState)(!1),[h,{isLoading:p,isError:g,error:x,isSuccess:j}]=(0,d.O3)();return(0,c.useEffect)((()=>{a.Am.dismiss(),j&&a.Am.success("Delete blog successfully",{id:"dSuccess"}),g&&a.Am.error("Delete blog failed",{id:"dFailed"})}),[j,g]),(0,y.jsxs)(s.T6,{children:[(0,y.jsx)(s.is,{scope:"row",children:i+1}),(0,y.jsx)(s.is,{scope:"row",children:(0,y.jsx)("p",{children:new Date(null===l||void 0===l?void 0:l.createdAt).toDateString()})}),(0,y.jsx)(s.NN,{children:(0,y.jsx)("div",{dangerouslySetInnerHTML:{__html:null===l||void 0===l?void 0:l.description}})}),(0,y.jsx)(s.NN,{children:(0,y.jsx)("div",{dangerouslySetInnerHTML:{__html:null===l||void 0===l?void 0:l.banglaDescription}})}),(0,y.jsx)(s.NN,{children:(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)(o.rU,{to:"/pages/privacy-policy/edit/".concat(null===l||void 0===l?void 0:l._id),children:(0,y.jsx)(t.Z,{})}),(0,y.jsx)(n.Z,{setShowModal:u})]})}),(0,y.jsx)(v.Z,{deleteThis:()=>{h(null===l||void 0===l?void 0:l._id)},showModal:r,setShowModal:u,id:l._id,deleteLoading:p})]})},h=()=>{var e,i;const{data:l,isLoading:c,isError:o}=(0,d.yd)();let a=null;return c&&(a=(0,y.jsx)("p",{children:"Loading.."})),!c&&o&&(a=(0,y.jsx)("p",{children:"There is something wrong!"})),c||o||0!==(null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.length)||(a=(0,y.jsx)("p",{children:"There is no Privacy policy"})),!c&&!o&&(null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.length)>0&&(a=null===l||void 0===l?void 0:l.data.map(((e,i)=>(0,y.jsx)(u,{blog:e,index:i},null===e||void 0===e?void 0:e._id)))),(0,y.jsxs)(s.xH,{children:[(0,y.jsx)(r.Z,{title:"All Privacy Policy",to:"/pages/privacy-policy/add"}),(0,y.jsx)(s.sl,{children:(0,y.jsxs)(s.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,y.jsx)(s.V,{color:"light",children:(0,y.jsxs)(s.T6,{className:"text-start",children:[(0,y.jsx)(s.is,{scope:"col",style:{width:"3.75rem"},children:"Sl. No."}),(0,y.jsx)(s.is,{scope:"col",style:{width:"10rem"},children:"Added Dated"}),(0,y.jsx)(s.is,{scope:"col",children:"Description"}),(0,y.jsx)(s.is,{scope:"col",children:"Bangla description"}),(0,y.jsx)(s.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,y.jsx)(s.NR,{children:a})]})})]})}}}]);
//# sourceMappingURL=8184.f2d66927.chunk.js.map