"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[6535],{65670:(e,t,r)=>{r.d(t,{MO:()=>u,OB:()=>l,YI:()=>n,gm:()=>i,us:()=>a});const s=r(61347).apiSlice.injectEndpoints({tagTypes:["AllReturns","SingleReturn"],endpoints:e=>({getAllReturns:e.query({query:()=>({url:"/return",method:"GET"}),providesTags:["AllReturns"]}),getSingleReturn:e.query({query:e=>({url:"/return/".concat(e),method:"GET"}),providesTags:["SingleReturn"]}),addNewReturn:e.mutation({query:e=>({url:"/return",method:"POST",body:e}),invalidatesTags:["AllReturns"]}),updateSingleReturn:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/return/".concat(t),method:"PUT",body:r}},invalidatesTags:["AllReturns","SingleReturn"]}),deleteSingleReturn:e.mutation({query:e=>({url:"/return/".concat(e),method:"DELETE"}),invalidatesTags:["AllReturns"]})})}),{useGetAllReturnsQuery:n,useGetSingleReturnQuery:l,useAddNewReturnMutation:i,useUpdateSingleReturnMutation:a,useDeleteSingleReturnMutation:u}=s},48771:(e,t,r)=>{r.d(t,{z:()=>s});const s=()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"],["clean"]]})},96535:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(28671),n=r(6145),l=r(93946),i=r(65043),a=r(24858),u=r(92823),o=r.n(u),d=r(73216),c=r(42145),m=r(65670),g=r(94404),p=r(4388),h=r(61297),v=r(48771),R=r(70579);const x=()=>{const e=(0,v.z)(),[t,r]=(0,i.useState)(!0),{id:u}=(0,d.g)(),{handleSubmit:x}=(0,a.mN)(),[y,S]=(0,i.useState)(),[b,j]=(0,i.useState)(),E=(0,d.Zp)(),{data:A,isLoading:N,isError:T,error:f}=(0,m.OB)(u,{skip:t}),[k,{isLoading:q,isError:w,isSuccess:M,error:U}]=(0,m.gm)(),[L,{isLoading:C,isError:D,isSuccess:G,error:O}]=(0,m.us)();return(0,i.useMemo)((()=>{var e,t;u&&(S(null===A||void 0===A||null===(e=A.data)||void 0===e?void 0:e.description),j(null===A||void 0===A||null===(t=A.data)||void 0===t?void 0:t.banglaDescription))}),[u,null===A||void 0===A?void 0:A.data]),(0,i.useEffect)((()=>{M&&E(-1),G&&E(-1)}),[M,G]),(0,i.useEffect)((()=>{var e,t;w&&c.oR.error(null===w||void 0===w||null===(e=w.data)||void 0===e?void 0:e.message),D&&c.oR.error(null===D||void 0===D||null===(t=D.data)||void 0===t?void 0:t.message)}),[w,D]),(0,i.useEffect)((()=>{u&&r(!1)}),[u]),(0,R.jsx)(l.qI,{onSubmit:x((()=>{const e={};y&&(e.description=y),b&&(e.banglaDescription=b),u?L({id:u,data:e}):k(e)})),children:(0,R.jsxs)(l.E$,{children:[(0,R.jsx)(p.A,{title:u?"Update return policy":"Add return policy"}),N?(0,R.jsx)(h.A,{}):(0,R.jsxs)(l.W6,{children:[(0,R.jsxs)(l.UF,{xs:12,children:[(0,R.jsx)("label",{className:"w-100",children:"Return policy (English)"}),(0,R.jsx)(o(),{className:"mt-2",theme:"snow",placeholder:"Enter return policy",modules:e,value:y,onChange:S})]}),(0,R.jsxs)(l.UF,{className:"mt-2",xs:12,children:[(0,R.jsx)("label",{className:"w-100",children:"Return policy (Bangla)"}),(0,R.jsx)(o(),{className:"mt-2",theme:"snow",placeholder:"Enter return policy",modules:e,value:b,onChange:j})]}),(0,R.jsxs)("div",{className:"text-end  ",children:[(0,R.jsx)(g.A,{}),(0,R.jsxs)(l.Q_,{type:"submit",color:"success",className:"mt-3 text-white",children:[(0,R.jsx)(n.A,{icon:s.M,className:"me-2"}),C||q?"Loading...":u?"Update":"Save"]})]})]})]})})}}}]);
//# sourceMappingURL=6535.f15b9063.chunk.js.map