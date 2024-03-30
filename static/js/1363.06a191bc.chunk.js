"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[1363],{57427:(e,n,t)=>{t.d(n,{$R:()=>A,BZ:()=>v,Bm:()=>h,Jc:()=>o,Kh:()=>B,Kl:()=>i,Ml:()=>r,Nc:()=>c,UY:()=>y,_C:()=>j,c9:()=>p,g9:()=>S,hl:()=>x,jZ:()=>l,m_:()=>T,p3:()=>D,pX:()=>m,rl:()=>u,t4:()=>s,x9:()=>g,zD:()=>d});const a=t(60470).apiSlice.injectEndpoints({tagTypes:["AllDesktopBanner","AllRelatedBanner","SingleRelatedBanner","AllTopBanner","SingleDesktopBanner","BottomBanner","SingleTopBanner","SingleBottomBanner"],endpoints:e=>({getDesktopAllBanner:e.query({query:()=>({url:"/desktopBanner",method:"GET"}),providesTags:["AllDesktopBanner"]}),getAllBannerName:e.query({query:()=>({url:"/desktopBanner/allBannerName",method:"GET"})}),getSingleDesktopBanner:e.query({query:e=>({url:"/desktopBanner/".concat(e),method:"GET"}),providesTags:["SingleDesktopBanner"]}),deleteDesktopBanner:e.mutation({query:e=>({url:"/desktopBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllDesktopBanner"]}),addDesktopBanner:e.mutation({query:e=>({url:"/desktopBanner",method:"POST",body:e}),invalidatesTags:["AllDesktopBanner"]}),updateDesktopBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/desktopBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleDesktopBanner","AllDesktopBanner"]}),getRelatedAllBanner:e.query({query:()=>({url:"/relatedBanner",method:"GET"}),providesTags:["AllRelatedBanner"]}),getRelatedBanner:e.query({query:e=>({url:"/relatedBanner/".concat(e),method:"GET"}),providesTags:["SingleRelatedBanner"]}),deleteRelatedBanner:e.mutation({query:e=>({url:"/relatedBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllRelatedBanner"]}),addRelatedBanner:e.mutation({query:e=>({url:"/relatedBanner",method:"POST",body:e}),invalidatesTags:["AllRelatedBanner"]}),updateRelatedBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/relatedBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleRelatedBanner","AllRelatedBanner"]}),getSideAllBanner:e.query({query:()=>({url:"/sideBanner",method:"GET"}),providesTags:["AllTopBanner"]}),getSideBanner:e.query({query:e=>({url:"/sideBanner/".concat(e),method:"GET"}),providesTags:["SingleTopBanner"]}),updateSideBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/sideBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleTopBanner","AllTopBanner"]}),deleteSideBanner:e.mutation({query:e=>({url:"/sideBanner/".concat(e),method:"DELETE"}),invalidatesTags:["AllTopBanner"]}),addSideBanner:e.mutation({query:e=>({url:"/sideBanner",method:"POST",body:e}),invalidatesTags:["AllTopBanner"]}),getBottomAllBanner:e.query({query:()=>({url:"/bottomBanner",method:"GET"}),providesTags:["BottomBanner"]}),getSingleBottomBanner:e.query({query:e=>({url:"/bottomBanner/".concat(e),method:"GET"}),providesTags:["SingleBottomBanner"]}),deleteBottomBanner:e.mutation({query:e=>({url:"/bottomBanner/".concat(e),method:"DELETE"}),invalidatesTags:["BottomBanner"]}),addBottomBanner:e.mutation({query:e=>({url:"/bottomBanner",method:"POST",body:e}),invalidatesTags:["BottomBanner"]}),updateBottomBanner:e.mutation({query:e=>{let{formData:n,id:t}=e;return{url:"/bottomBanner/".concat(t),method:"PUT",body:n}},invalidatesTags:["SingleBottomBanner","BottomBanner"]})})}),{useGetDesktopAllBannerQuery:r,useGetSingleDesktopBannerQuery:l,useDeleteDesktopBannerMutation:o,useAddDesktopBannerMutation:d,useUpdateDesktopBannerMutation:s,useGetAllBannerNameQuery:i,useGetRelatedAllBannerQuery:u,useGetRelatedBannerQuery:B,useDeleteRelatedBannerMutation:c,useUpdateRelatedBannerMutation:m,useAddRelatedBannerMutation:p,useDeleteSideBannerMutation:h,useGetSideBannerQuery:g,useGetSideAllBannerQuery:T,useAddSideBannerMutation:y,useUpdateSideBannerMutation:x,useGetBottomAllBannerQuery:v,useGetSingleBottomBannerQuery:S,useDeleteBottomBannerMutation:j,useAddBottomBannerMutation:A,useUpdateBottomBannerMutation:D}=a},18494:(e,n,t)=>{t.d(n,{Z:()=>B});var a=t(78983),r=t(72791),l=t(92592),o=t(11087),d=t(97605),s=t(51118),i=t(30160),u=t(80184);const B=e=>{let{data:n,index:t,deleteBannerHook:B,deleteLoading:c,to:m}=e;const{image:p,_id:h,name:g}=n||{},[T,y]=(0,r.useState)(!1);return(0,u.jsxs)(a.T6,{children:[(0,u.jsx)(a.is,{scope:"row",children:t+1}),(0,u.jsx)(a.is,{scope:"row",children:g}),(0,u.jsx)(a.NN,{children:(0,u.jsx)(l.Z,{src:p,alt:"banner_image",height:200,style:{width:"100%",objectFit:"contain"}})}),(0,u.jsx)(a.NN,{children:(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(o.rU,{to:"/".concat(m,"/edit/").concat(h),children:(0,u.jsx)(s.Z,{})}),(0,u.jsx)(d.Z,{setShowModal:y})]})}),(0,u.jsx)(i.Z,{deleteThis:B,showModal:T,setShowModal:y,id:h,deleteLoading:c})]})}},35780:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(78983),r=t(1645),l=t(80184);const o=e=>{let{title:n,to:t,content:o}=e;return(0,l.jsx)(a.rb,{children:(0,l.jsx)(a.b7,{xs:12,children:(0,l.jsxs)(a.xH,{className:"mb-4",children:[(0,l.jsx)(r.Z,{title:n,to:t}),(0,l.jsxs)(a.sl,{children:[(0,l.jsx)("p",{className:"text-medium-emphasis small",children:"Here is the list of all banners."}),(0,l.jsxs)(a.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,l.jsx)(a.V,{color:"light",children:(0,l.jsxs)(a.T6,{className:"text-start",children:[(0,l.jsx)(a.is,{scope:"col",style:{width:"3.75rem"},children:"Sl. No."}),(0,l.jsx)(a.is,{scope:"col",children:"Name"}),(0,l.jsx)(a.is,{scope:"col",children:"Image"}),(0,l.jsx)(a.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,l.jsx)(a.NR,{children:o})]})]})]})})})}},51363:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(72791),r=t(9085),l=t(57427),o=t(18494),d=t(35780),s=t(79094),i=t(80184);const u=()=>{var e;const[n,{isLoading:t,isError:u,isSuccess:B}]=(0,l.Nc)(),{data:c,isLoading:m,isError:p}=(0,l.rl)();let h=null;var g;(m&&(h=(0,i.jsx)("p",{children:"Loading..."})),!m&&p&&(h=(0,i.jsx)(s.Z,{children:"There is something wrong"})),m||p||0!==(null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.length)||(h=(0,i.jsx)(s.Z,{children:"There is no banner !!"})),c)&&(h=null===c||void 0===c||null===(g=c.data)||void 0===g?void 0:g.map(((e,a)=>(0,i.jsx)(o.Z,{data:e,index:a,deleteBannerHook:n,deleteLoading:t,to:"related-banner"},null===e||void 0===e?void 0:e._id))));return(0,a.useEffect)((()=>{B&&r.Am.success("Delete banner successfully"),u&&r.Am.error("Delete banner failed")}),[B,u]),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{title:"All related banner",to:"/related-banner/add",content:h})})}}}]);
//# sourceMappingURL=1363.06a191bc.chunk.js.map