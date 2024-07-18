"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[5315],{13247:(e,l,s)=>{s.d(l,{Aw:()=>d,IJ:()=>n,XA:()=>i,YN:()=>o,s$:()=>a});const t=s(61347).apiSlice.injectEndpoints({tagTypes:["AllBlogs","singleBlog"],endpoints:e=>({getAllBlogs:e.query({query:()=>({url:"/blogs",method:"GET"}),providesTags:["AllBlogs"]}),getSingleBlogs:e.query({query:e=>({url:"/blogs/".concat(e),method:"GET"}),providesTags:["singleBlog"]}),addNewBlog:e.mutation({query:e=>({url:"/blogs",method:"POST",body:e}),invalidatesTags:["AllBlogs"]}),updateSingleBlog:e.mutation({query:e=>{let{id:l,formData:s}=e;return{url:"/blogs/".concat(l),method:"PUT",body:s}},invalidatesTags:["AllBlogs","singleBlog"]}),deleteSingleBlog:e.mutation({query:e=>({url:"/blogs/".concat(e),method:"DELETE"}),invalidatesTags:["AllBlogs"]})})}),{useGetAllBlogsQuery:a,useGetSingleBlogsQuery:i,useAddNewBlogMutation:o,useUpdateSingleBlogMutation:d,useDeleteSingleBlogMutation:n}=t},88320:(e,l,s)=>{s.d(l,{UK:()=>n,Wf:()=>o,Yd:()=>d,bE:()=>a,cL:()=>i});const t=s(61347).apiSlice.injectEndpoints({tagTypes:["AllFaq","singleFaq"],endpoints:e=>({getAllFaq:e.query({query:()=>({url:"/faq",method:"GET"}),providesTags:["AllFaq"]}),getSingleFaq:e.query({query:e=>({url:"/faq/".concat(e),method:"GET"}),providesTags:["singleFaq"]}),addNewFaq:e.mutation({query:e=>({url:"/faq",method:"POST",body:e}),invalidatesTags:["AllFaq"]}),updateSingleFaq:e.mutation({query:e=>{let{id:l,data:s}=e;return{url:"/faq/".concat(l),method:"PUT",body:s}},invalidatesTags:["AllFaq","singleFaq"]}),deleteSingleFaq:e.mutation({query:e=>({url:"/faq/".concat(e),method:"DELETE"}),invalidatesTags:["AllFaq"]})})}),{useGetAllFaqQuery:a,useGetSingleFaqQuery:i,useAddNewFaqMutation:o,useUpdateSingleFaqMutation:d,useDeleteSingleFaqMutation:n}=t},48771:(e,l,s)=>{s.d(l,{z:()=>t});const t=()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"],["clean"]]})},95315:(e,l,s)=>{s.r(l),s.d(l,{default:()=>v});var t=s(28671),a=s(6145),i=s(93946),o=s(65043),d=s(24858),n=s(92823),r=s.n(n),u=s(73216),c=s(42145),g=(s(13247),s(88320)),q=s(94404),m=s(4388),p=s(48771),h=s(70579);const v=()=>{const e=(0,p.z)(),l=(0,u.Zp)(),[s,n]=(0,o.useState)(!0),{id:v}=(0,u.g)(),{handleSubmit:b,setValue:y}=(0,d.mN)(),[S,T]=(0,o.useState)(),[A,E]=(0,o.useState)(),{data:F,isLoading:f,isError:x,error:B}=(0,g.cL)(v,{skip:s}),[j,{isLoading:N,isError:w,isSuccess:k,error:L}]=(0,g.Wf)(),[U,{isLoading:G,isError:M,isSuccess:D,error:Q}]=(0,g.Yd)();return(0,o.useMemo)((()=>{var e,l;v&&(T(null===F||void 0===F||null===(e=F.data)||void 0===e?void 0:e.description),E(null===F||void 0===F||null===(l=F.data)||void 0===l?void 0:l.title))}),[v,null===F||void 0===F?void 0:F.data]),(0,o.useEffect)((()=>{var e,l;w&&c.oR.error(null===w||void 0===w||null===(e=w.data)||void 0===e?void 0:e.message),M&&c.oR.error(null===M||void 0===M||null===(l=M.data)||void 0===l?void 0:l.message)}),[w,M]),(0,o.useEffect)((()=>{v&&n(!1)}),[v]),(0,o.useEffect)((()=>{k&&l(-1),D&&l(-1)}),[k,D]),(0,h.jsx)(i.qI,{onSubmit:b((()=>{if(v){U({id:v,data:{description:S,title:A}})}else j({description:S,title:A})})),children:(0,h.jsxs)(i.E$,{children:[(0,h.jsx)(m.A,{title:v?"Update faq":"Add faq"}),f?(0,h.jsx)("p",{children:"Loading.."}):(0,h.jsxs)(i.W6,{children:[(0,h.jsxs)(i.UF,{xs:12,children:[(0,h.jsx)("label",{className:"w-100",children:"Faq Title"}),(0,h.jsx)(r(),{className:"mt-2",theme:"snow",placeholder:"Enter blog title here",modules:e,value:A,onChange:E})]}),(0,h.jsxs)(i.UF,{xs:12,children:[(0,h.jsx)("label",{className:"w-100",children:"Faq Description"}),(0,h.jsx)(r(),{className:"mt-2",theme:"snow",placeholder:"Enter blog descriptions here",modules:e,value:S,onChange:T})]}),(0,h.jsxs)("div",{className:"text-end  ",children:[(0,h.jsx)(q.A,{}),(0,h.jsxs)(i.Q_,{type:"submit",color:"success",className:"mt-3 text-white",children:[(0,h.jsx)(a.A,{icon:t.M,className:"me-2"}),G||N?"Loading...":v?"Update":"Save"]})]})]})]})})}}}]);
//# sourceMappingURL=5315.6986be4c.chunk.js.map