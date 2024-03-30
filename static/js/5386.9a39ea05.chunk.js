"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[5386],{57427:(e,n,t)=>{t.d(n,{$R:()=>j,BZ:()=>v,Bm:()=>h,Jc:()=>l,Kh:()=>B,Kl:()=>i,Ml:()=>r,Nc:()=>c,UY:()=>y,_C:()=>b,c9:()=>p,g9:()=>S,hl:()=>x,jZ:()=>o,m_:()=>T,p3:()=>A,pX:()=>m,rl:()=>u,t4:()=>s,x9:()=>g,zD:()=>d});const a=t(60470).apiSlice.injectEndpoints({tagTypes:["AllDesktopBanner","AllRelatedBanner","SingleRelatedBanner","AllTopBanner","SingleDesktopBanner","BottomBanner","SingleTopBanner","SingleBottomBanner"],endpoints:e=>({getDesktopAllBanner:e.query({query:()=>({url:"/desktopBanner",method:"GET"}),providesTags:["AllDesktopBanner"]}),getAllBannerName:e.query({query:()=>({url:"/desktopBanner/allBannerName",method:"GET"})}),getSingleDesktopBanner:e.query({query:e=>({url:"/desktopBanner/".concat(e),method:"GET"}),providesTags:["SingleDesktopBanner"]}),deleteDesktopBanner:e.mutation({query:e=>({url:"/desktopBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllDesktopBanner"]}),addDesktopBanner:e.mutation({query:e=>({url:"/desktopBanner",method:"POST",body:e}),invalidatesTags:["AllDesktopBanner"]}),updateDesktopBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/desktopBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleDesktopBanner","AllDesktopBanner"]}),getRelatedAllBanner:e.query({query:()=>({url:"/relatedBanner",method:"GET"}),providesTags:["AllRelatedBanner"]}),getRelatedBanner:e.query({query:e=>({url:"/relatedBanner/".concat(e),method:"GET"}),providesTags:["SingleRelatedBanner"]}),deleteRelatedBanner:e.mutation({query:e=>({url:"/relatedBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllRelatedBanner"]}),addRelatedBanner:e.mutation({query:e=>({url:"/relatedBanner",method:"POST",body:e}),invalidatesTags:["AllRelatedBanner"]}),updateRelatedBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/relatedBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleRelatedBanner","AllRelatedBanner"]}),getSideAllBanner:e.query({query:()=>({url:"/sideBanner",method:"GET"}),providesTags:["AllTopBanner"]}),getSideBanner:e.query({query:e=>({url:"/sideBanner/".concat(e),method:"GET"}),providesTags:["SingleTopBanner"]}),updateSideBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/sideBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleTopBanner","AllTopBanner"]}),deleteSideBanner:e.mutation({query:e=>({url:"/sideBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllTopBanner"]}),addSideBanner:e.mutation({query:e=>({url:"/sideBanner",method:"POST",body:e}),invalidatesTags:["AllTopBanner"]}),getBottomAllBanner:e.query({query:()=>({url:"/bottomBanner",method:"GET"}),providesTags:["BottomBanner"]}),getSingleBottomBanner:e.query({query:e=>({url:"/bottomBanner/".concat(e),method:"GET"}),providesTags:["SingleBottomBanner"]}),deleteBottomBanner:e.mutation({query:e=>({url:"/bottomBanner/".concat(e),method:"DELETE"}),invalidatesTags:["BottomBanner"]}),addBottomBanner:e.mutation({query:e=>({url:"/bottomBanner",method:"POST",body:e}),invalidatesTags:["BottomBanner"]}),updateBottomBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/bottomBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleBottomBanner","BottomBanner"]})})}),{useGetDesktopAllBannerQuery:r,useGetSingleDesktopBannerQuery:o,useDeleteDesktopBannerMutation:l,useAddDesktopBannerMutation:d,useUpdateDesktopBannerMutation:s,useGetAllBannerNameQuery:i,useGetRelatedAllBannerQuery:u,useGetRelatedBannerQuery:B,useDeleteRelatedBannerMutation:c,useUpdateRelatedBannerMutation:m,useAddRelatedBannerMutation:p,useDeleteSideBannerMutation:h,useGetSideBannerQuery:g,useGetSideAllBannerQuery:T,useAddSideBannerMutation:y,useUpdateSideBannerMutation:x,useGetBottomAllBannerQuery:v,useGetSingleBottomBannerQuery:S,useDeleteBottomBannerMutation:b,useAddBottomBannerMutation:j,useUpdateBottomBannerMutation:A}=a},18494:(e,n,t)=>{t.d(n,{Z:()=>B});var a=t(78983),r=t(72791),o=t(92592),l=t(11087),d=t(97605),s=t(51118),i=t(30160),u=t(80184);const B=e=>{let{data:n,index:t,deleteBannerHook:B,deleteLoading:c,to:m}=e;const{image:p,_id:h,name:g}=n||{},[T,y]=(0,r.useState)(!1);return(0,u.jsxs)(a.T6,{children:[(0,u.jsx)(a.is,{scope:"row",children:t+1}),(0,u.jsx)(a.is,{scope:"row",children:g}),(0,u.jsx)(a.NN,{children:(0,u.jsx)(o.Z,{src:p,alt:"banner_image",height:200,style:{width:"100%",objectFit:"contain"}})}),(0,u.jsx)(a.NN,{children:(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(l.rU,{to:"/".concat(m,"/edit/").concat(h),children:(0,u.jsx)(s.Z,{})}),(0,u.jsx)(d.Z,{setShowModal:y})]})}),(0,u.jsx)(i.Z,{deleteThis:B,showModal:T,setShowModal:y,id:h,deleteLoading:c})]})}},35780:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(78983),r=t(1645),o=t(80184);const l=e=>{let{title:n,to:t,content:l}=e;return(0,o.jsx)(a.rb,{children:(0,o.jsx)(a.b7,{xs:12,children:(0,o.jsxs)(a.xH,{className:"mb-4",children:[(0,o.jsx)(r.Z,{title:n,to:t}),(0,o.jsxs)(a.sl,{children:[(0,o.jsx)("p",{className:"text-medium-emphasis small",children:"Here is the list of all banners."}),(0,o.jsxs)(a.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,o.jsx)(a.V,{color:"light",children:(0,o.jsxs)(a.T6,{className:"text-start",children:[(0,o.jsx)(a.is,{scope:"col",style:{width:"3.75rem"},children:"Sl. No."}),(0,o.jsx)(a.is,{scope:"col",children:"Name"}),(0,o.jsx)(a.is,{scope:"col",children:"Image"}),(0,o.jsx)(a.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,o.jsx)(a.NR,{children:l})]})]})]})})})}},15386:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(9085),r=t(57427),o=t(18494),l=t(35780),d=t(80184);const s=()=>{var e,n;const[t,{isLoading:s,isSuccess:i,isError:u}]=(0,r._C)(),{data:B,isLoading:c,isError:m}=(0,r.BZ)();let p=null;var h;(c&&(p=(0,d.jsx)("p",{children:"Loading..."})),!c&&m&&(p=(0,d.jsx)("p",{className:"text-danger",children:"There is something wrong"})),c||m||0!==(null===B||void 0===B||null===(e=B.data)||void 0===e?void 0:e.length)||(p=(0,d.jsx)("p",{children:"There is no banner !!"})),(null===B||void 0===B||null===(n=B.data)||void 0===n?void 0:n.length)>0)&&(p=null===B||void 0===B||null===(h=B.data)||void 0===h?void 0:h.map(((e,n)=>(0,d.jsx)(o.Z,{data:e,index:n,deleteBannerHook:t,deleteLoading:s,to:"bottom-banner"},null===e||void 0===e?void 0:e._id))));return i&&a.Am.success("Delete bottom banner successfully"),u&&a.Am.error("Delete bottom banner failed"),(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{title:"All bottom banner",to:"/bottom-banner/add",content:p})})}}}]);
//# sourceMappingURL=5386.9a39ea05.chunk.js.map