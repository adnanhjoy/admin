"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[8785],{24518:(e,i,t)=>{t.d(i,{It:()=>s,Ji:()=>o,lH:()=>l,v3:()=>r,vd:()=>d});const n=t(61347).apiSlice.injectEndpoints({tagTypes:["AlltermsCondition"],endpoints:e=>({getAllTermsCondition:e.query({query:()=>({url:"/termsCondition",method:"GET"}),providesTags:["AlltermsCondition"]}),getSingleTermsCondition:e.query({query:e=>({url:"/termsCondition/".concat(e),method:"GET"}),invalidatesTags:["AlltermsCondition"]}),addNewTermCondition:e.mutation({query:e=>({url:"/termsCondition",method:"POST",body:e}),invalidatesTags:["AlltermsCondition"]}),updateSingleTermCondition:e.mutation({query:e=>{let{id:i,data:t}=e;return{url:"/termsCondition/".concat(i),method:"PUT",body:t}},invalidatesTags:["AlltermsCondition"]}),deleteSingleTermCondition:e.mutation({query:e=>({url:"/termsCondition/".concat(e),method:"DELETE"}),invalidatesTags:["AlltermsCondition"]})})}),{useGetAllTermsConditionQuery:o,useGetSingleTermsConditionQuery:s,useAddNewTermConditionMutation:d,useUpdateSingleTermConditionMutation:l,useDeleteSingleTermConditionMutation:r}=n},48771:(e,i,t)=>{t.d(i,{z:()=>n});const n=()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"],["clean"]]})},38785:(e,i,t)=>{t.r(i),t.d(i,{default:()=>C});var n=t(28671),o=t(6145),s=t(93946),d=t(65043),l=t(24858),r=t(92823),a=t.n(r),c=t(73216),u=t(42145),m=t(24518),g=t(94404),v=t(4388),h=t(48771),p=t(70579);const C=()=>{const e=(0,h.z)(),i=(0,c.Zp)(),[t,r]=(0,d.useState)(!0),{id:C}=(0,c.g)(),{handleSubmit:T,setValue:x}=(0,l.mN)(),[b,j]=(0,d.useState)(),[E,S]=(0,d.useState)(),{data:y,isLoading:A,isError:N,error:f}=(0,m.It)(C,{skip:t}),[k,{isLoading:q,isError:w,isSuccess:L,error:U}]=(0,m.vd)(),[M,{isLoading:D,isError:G,isSuccess:I,error:Q}]=(0,m.lH)();return(0,d.useMemo)((()=>{var e,i;C&&(j(null===y||void 0===y||null===(e=y.data)||void 0===e?void 0:e.description),S(null===y||void 0===y||null===(i=y.data)||void 0===i?void 0:i.banglaDescription))}),[C,null===y||void 0===y?void 0:y.data]),(0,d.useEffect)((()=>{var e,i;w&&u.oR.error(null===w||void 0===w||null===(e=w.data)||void 0===e?void 0:e.message),G&&u.oR.error(null===G||void 0===G||null===(i=G.data)||void 0===i?void 0:i.message)}),[w,G]),(0,d.useEffect)((()=>{C&&r(!1)}),[C]),(0,d.useEffect)((()=>{L&&i(-1),I&&i(-1)}),[L,I]),(0,p.jsx)(s.qI,{onSubmit:T((()=>{const e={};b&&(e.description=b),E&&(e.banglaDescription=E),C?M({id:C,data:e}):k(e)})),children:(0,p.jsxs)(s.E$,{children:[(0,p.jsx)(v.A,{title:C?"Update terms and condition":"Add terms and condition"}),A?(0,p.jsx)("p",{children:"Loading.."}):(0,p.jsxs)(s.W6,{children:[(0,p.jsxs)(s.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Terms & Condition (English)"}),(0,p.jsx)(a(),{className:"mt-2",theme:"snow",placeholder:"Enter terms & condition",modules:e,value:b,onChange:j})]}),(0,p.jsxs)(s.UF,{className:"mt-2",xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Return policy (Bangla)"}),(0,p.jsx)(a(),{className:"mt-2",theme:"snow",placeholder:"Enter return policy",modules:e,value:E,onChange:S})]}),(0,p.jsxs)("div",{className:"text-end  ",children:[(0,p.jsx)(g.A,{}),(0,p.jsxs)(s.Q_,{type:"submit",color:"success",className:"mt-3 text-white",children:[(0,p.jsx)(o.A,{icon:n.M,className:"me-2"}),D||q?"Loading...":C?"Update":"Save"]})]})]})]})})}}}]);
//# sourceMappingURL=8785.c810a4f4.chunk.js.map