"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[368],{84579:(e,s,l)=>{l.d(s,{CT:()=>a,XX:()=>i,_3:()=>n,ez:()=>d,ih:()=>r});const t=l(60470).apiSlice.injectEndpoints({tagTypes:["AllTypes","SingleTypes"],endpoints:e=>({getAllTypes:e.query({query:()=>({url:"/flashSale-types",method:"GET"}),providesTags:["AllTypes"]}),getSingleTypes:e.query({query:e=>({url:"/flashSale-types/".concat(e),method:"GET"}),providesTags:["SingleTypes"]}),deleteSingleTypes:e.mutation({query:e=>({url:"/flashSale-types/".concat(e),method:"DELETE"}),invalidatesTags:["AllTypes"]}),updateSingleTypes:e.mutation({query:e=>{let{id:s,data:l}=e;return{url:"/flashSale-types/".concat(s),method:"PUT",body:l}},invalidatesTags:["AllTypes","SingleTypes"]}),addSingleTypes:e.mutation({query:e=>({url:"/flashSale-types",method:"POST",body:e}),invalidatesTags:["AllTypes"]})})}),{useGetAllTypesQuery:a,useGetSingleTypesQuery:i,useDeleteSingleTypesMutation:n,useAddSingleTypesMutation:r,useUpdateSingleTypesMutation:d}=t},74047:(e,s,l)=>{l.d(s,{Z:()=>i});l(72791);var t=l(56355),a=l(80184);const i=e=>{let{sizes:s}=e;return(0,a.jsx)("div",{className:"d-flex mt-4 justify-content-center",children:(0,a.jsxs)("label",{htmlFor:"file-upload",className:"d-flex flex-column align-items-center border justify-content-center",style:{height:"180px",width:"360px",display:"block",cursor:"pointer"},children:[(0,a.jsx)(t.Qvc,{size:35,style:{color:"green"}}),(0,a.jsx)("p",{style:{color:"#0CB363",fontWeight:"bold",marginBottom:"0px",fontSize:"1rem"},children:"Choose file to upload"}),(0,a.jsx)("span",{style:{color:"#ccc"},children:"Allowed JPG, JPEG, PNG and GIF"}),(0,a.jsxs)("span",{style:{color:"#ccc"},children:["File must be less than ",(0,a.jsx)("span",{style:{color:"#afafaf"},children:"2 MB"})]}),(0,a.jsxs)("span",{style:{color:"#0CB363"},children:["Size: ",s]})]})})}},90368:(e,s,l)=>{l.r(s),l.d(s,{default:()=>x});var t=l(72282),a=l(24846),i=l(78983),n=l(72791),r=l(92592),d=l(61134),o=l(57689),c=l(9085),u=l(84579),p=l(73779),y=l(39432),h=l(74047),g=l(43034),m=l(80184);const x=()=>{var e,s;const[l,x]=(0,n.useState)(""),[f,j]=(0,n.useState)(!0),{id:v}=(0,o.UO)(),{handleSubmit:S,register:T}=(0,d.cI)(),b=(0,o.s0)(),[E,z]=(0,n.useState)(null),[A,w]=(0,n.useState)(null),{data:C,isLoading:F,isError:N,error:G}=(0,u.XX)(v,{skip:f}),[Z,{isLoading:k,isError:q,isSuccess:I,error:L}]=(0,u.ih)(),[P,{isLoading:U,isError:B,isSuccess:M,error:O}]=(0,u.ez)();return(0,n.useEffect)((()=>{var e;v&&x(null===C||void 0===C||null===(e=C.data)||void 0===e?void 0:e.name)}),[v,null===C||void 0===C?void 0:C.data]),(0,n.useEffect)((()=>{var e,s;q&&c.Am.error(null===q||void 0===q||null===(e=q.data)||void 0===e?void 0:e.message),B&&c.Am.error(null===B||void 0===B||null===(s=B.data)||void 0===s?void 0:s.message)}),[q,B]),(0,n.useEffect)((()=>{I&&b(-1),M&&b(-1)}),[I,M]),(0,n.useEffect)((()=>{v&&j(!1)}),[v]),(0,m.jsx)(i.lx,{onSubmit:S((e=>{const s=e.image[0],t=new FormData;l&&t.append("name",l),s&&t.append("image",s),v?P({id:v,data:t}):Z(t)})),children:(0,m.jsxs)(i.xH,{children:[(0,m.jsx)(y.Z,{title:v?"Customize types":"Add types"}),F?(0,m.jsx)(g.Z,{}):(0,m.jsxs)(i.sl,{children:[(0,m.jsxs)(i.b7,{xs:12,children:[(0,m.jsx)("label",{className:"w-100",children:"FlashSale Types Name"}),(0,m.jsx)(i.jO,{type:"text",id:"titleInputField",placeholder:"Enter types name","aria-describedby":"titleInputField",value:l,onChange:e=>x(e.target.value)})]}),(0,m.jsxs)(i.b7,{xs:12,children:[(0,m.jsx)("label",{children:"Flash Image"}),(0,m.jsx)(h.Z,{sizes:"bannerSize"}),(0,m.jsx)(i.jO,{type:"file",id:"file-upload",accept:".jpg, .png, .jpeg, .gif","aria-describedby":"file-upload",style:{border:"none",outline:"none",backgroundColor:"transparent",color:"transparent",width:"0.1px",height:"0.1px",overflow:"hidden",position:"absolute",zIndex:"-1"},...T("image"),onChange:e=>function(e){const s=e.target.files[0];s.size>2097152?(w("File size should be less than 2MB"),z(null)):(z(URL.createObjectURL(s)),w(null))}(e)}),A&&(0,m.jsx)("p",{style:{color:"red"},children:A}),E&&(0,m.jsx)(r.Z,{fluid:!0,className:"my-2",height:300,src:E,alt:"Preview Image"}),(0,m.jsx)("br",{}),(null===C||void 0===C||null===(e=C.data)||void 0===e?void 0:e.image)&&(0,m.jsx)(r.Z,{fluid:!0,className:"my-2",height:300,src:null===C||void 0===C||null===(s=C.data)||void 0===s?void 0:s.image})]}),(0,m.jsxs)("div",{className:"text-end  ",children:[(0,m.jsx)(p.Z,{}),(0,m.jsxs)(i.u5,{type:"submit",color:"success",className:"mt-3 text-white",children:[(0,m.jsx)(a.Z,{icon:t.F,className:"me-2"}),U||k?"Loading...":v?"Update":"Save"]})]})]})]})})}}}]);
//# sourceMappingURL=368.afa703ff.chunk.js.map