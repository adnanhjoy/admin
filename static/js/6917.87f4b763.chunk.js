"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[6917],{84579:(e,t,l)=>{l.d(t,{CT:()=>i,XX:()=>a,_3:()=>n,ez:()=>r,ih:()=>d});const s=l(60470).apiSlice.injectEndpoints({tagTypes:["AllTypes","SingleTypes"],endpoints:e=>({getAllTypes:e.query({query:()=>({url:"/flashSale-types",method:"GET"}),providesTags:["AllTypes"]}),getSingleTypes:e.query({query:e=>({url:"/flashSale-types/".concat(e),method:"GET"}),providesTags:["SingleTypes"]}),deleteSingleTypes:e.mutation({query:e=>({url:"/flashSale-types/".concat(e),method:"DELETE"}),invalidatesTags:["AllTypes"]}),updateSingleTypes:e.mutation({query:e=>{let{id:t,data:l}=e;return{url:"/flashSale-types/".concat(t),method:"PUT",body:l}},invalidatesTags:["AllTypes","SingleTypes"]}),addSingleTypes:e.mutation({query:e=>({url:"/flashSale-types",method:"POST",body:e}),invalidatesTags:["AllTypes"]})})}),{useGetAllTypesQuery:i,useGetSingleTypesQuery:a,useDeleteSingleTypesMutation:n,useAddSingleTypesMutation:d,useUpdateSingleTypesMutation:r}=s},57849:(e,t,l)=>{l.d(t,{Z:()=>o});var s=l(17540),i=l(24846),a=l(78983),n=l(61134),d=l(57689),r=(l(94440),l(80184));const o=e=>{let{onSubmit:t,tableData:l,isNavigate:o}=e;const c=(0,d.s0)(),u=[...l],{register:h,handleSubmit:m,reset:p}=(0,n.cI)();return(0,r.jsx)("div",{className:"mx-3 px-3 mt-3 pb-3 border rounded",style:{backgroundColor:"#f5f5f5"},children:(0,r.jsxs)(a.lx,{onSubmit:m(t),children:[(0,r.jsx)(a.rb,{children:u.map(((e,t)=>(0,r.jsx)(a.b7,{xs:4,className:"mt-3",children:(0,r.jsx)(a.jO,{type:e.type,id:"exampleFormControlInput1",label:e.name,placeholder:e.name,disabled:e.disabled,"aria-describedby":"exampleFormControlInputHelpInline",...h(e.register)})},t)))}),(0,r.jsxs)("div",{className:"d-flex align-items-center justify-content-end mt-3 ",children:[(0,r.jsx)(a.u5,{className:"me-2 text-white",color:"info",onClick:()=>(o&&c("."),void p()),children:"Clear"}),(0,r.jsxs)(a.u5,{color:"info",className:" text-white me-2",type:"submit",children:[(0,r.jsx)(i.Z,{icon:s.j,style:{width:"12px",height:"12px"}})," Filter"]})]})]})})}},30026:(e,t,l)=>{l.d(t,{Z:()=>r});var s=l(72791),i=l(8116),a=l(57689),n=l(13691),d=l(80184);const r=e=>{let{totalPageNumber:t,searchUrl:l}=e;const[r,o]=(0,s.useState)(1),c=(0,a.s0)(),u=e=>{o(e),c((0,n.G)(l||"?","page",e.toString()))};let h=t?Array.from({length:t},((e,t)=>t+1)):[],m=[];for(let s=1;s<=h.length;s++)m.push((0,d.jsx)(i.Z.Item,{active:s===r,onClick:()=>u(s),children:s},s));return(0,d.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,d.jsxs)(i.Z,{size:"sm",children:[r>1&&(0,d.jsx)(i.Z.Prev,{onClick:()=>u(r-1)}),m,r<t&&(0,d.jsx)(i.Z.Next,{onClick:()=>u(r+1)}),t>1&&(0,d.jsx)(i.Z.Last,{onClick:()=>u(t)})]})})}},13691:(e,t,l)=>{l.d(t,{G:()=>s});const s=(e,t,l)=>{const s=e.split("&");let i=!1;for(let a=0;a<s.length;a++){const e=s[a].split("=");if(e[0]===t){e[1]=l,s[a]=e.join("="),i=!0;break}}i||s.push("".concat(t,"=").concat(l));return[...new Set(s)].join("&")}},76917:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var s=l(78983),i=l(61734),a=l(60748),n=l(57689),d=l(84579),r=l(1645),o=l(43034),c=l(30026),u=l(57849),h=l(13691),m=l(72791),p=l(11087),x=l(9085),v=l(67060),j=l(97605),y=l(51118),g=l(30160),N=l(80184);const S=e=>{var t;let{product:l,index:i}=e;const[a,n]=(0,m.useState)(!1),[d,{isLoading:r,isSuccess:o,isError:c}]=(0,v.KL)();return(0,m.useEffect)((()=>{o&&x.Am.success("Product deleted successfully"),c&&x.Am.error("Product deleted failed")}),[o,c]),(0,N.jsxs)(s.T6,{children:[(0,N.jsx)(s.is,{scope:"row",children:i+1}),(0,N.jsx)(s.NN,{children:(0,N.jsx)("img",{src:null===l||void 0===l||null===(t=l.images)||void 0===t?void 0:t[0],alt:null===l||void 0===l?void 0:l.model,style:{height:"2.5rem",width:"2.5rem",borderRadius:"0.25rem",objectFit:"cover"},className:"border"})}),(0,N.jsx)(s.NN,{children:null===l||void 0===l?void 0:l.name}),(0,N.jsx)(s.NN,{children:null===l||void 0===l?void 0:l.model}),(0,N.jsxs)(s.NN,{children:[null===l||void 0===l?void 0:l.discountPercentage,"%"]}),(0,N.jsx)(s.NN,{children:l.status}),(0,N.jsx)(s.NN,{className:"".concat(l.quantity<=15&&"text-danger"),children:l.quantity}),(0,N.jsxs)(s.NN,{children:["\u09f3",l.price]}),(0,N.jsx)(s.NN,{children:(0,N.jsxs)("div",{className:"",children:[(0,N.jsx)(p.rU,{to:"/flashSale-product/edit/".concat(null===l||void 0===l?void 0:l._id),children:(0,N.jsx)(y.Z,{})}),(0,N.jsx)(j.Z,{setShowModal:n})]})}),(0,N.jsx)(g.Z,{deleteThis:e=>{d(e)},showModal:a,setShowModal:n,id:l._id,deleteLoading:r})]})},f=()=>{var e,t,l,m;const p=(0,n.TH)(),{data:x,isLoading:j,isError:y}=(0,v.Cw)(p.search),{data:g,isLoading:f,isError:b}=(0,d.CT)(),T=(0,n.s0)();let w=null,Z=null;var C;(j&&(Z=(0,N.jsx)(o.Z,{})),!j&&y&&(Z=(0,N.jsx)("p",{className:"text-danger",children:"Something was wrong!"})),j||y||0!==(null===x||void 0===x||null===(e=x.result)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)||(w=(0,N.jsx)("p",{className:"text-danger",children:"No user here"})),j||y)||(w=null===g||void 0===g||null===(C=g.data)||void 0===C?void 0:C.map(((e,t)=>{var l,a,n,d,r,o;return(0,N.jsxs)(i.Z,{eventKey:null===e||void 0===e?void 0:e.name,title:null===e||void 0===e?void 0:e.name,children:[(0,N.jsxs)(s.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,N.jsx)(s.V,{color:"light",children:(0,N.jsxs)(s.T6,{className:"text-start",children:[(0,N.jsx)(s.is,{scope:"col",style:{paddingLeft:0,paddingRight:0},children:"Sl. No."}),(0,N.jsx)(s.is,{scope:"col",style:{width:"3rem"},children:"Photo"}),(0,N.jsx)(s.is,{scope:"col",style:{width:"30rem"},children:"Name"}),(0,N.jsx)(s.is,{scope:"col",children:"Model"}),(0,N.jsx)(s.is,{scope:"col",children:"Discount"}),(0,N.jsx)(s.is,{scope:"col",children:"Stock Status"}),(0,N.jsx)(s.is,{scope:"col",children:"Quantity"}),(0,N.jsx)(s.is,{scope:"col",children:"Price"}),(0,N.jsx)(s.is,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(null===x||void 0===x||null===(l=x.result)||void 0===l||null===(a=l.data)||void 0===a?void 0:a.length)>0?null===x||void 0===x||null===(n=x.result)||void 0===n||null===(d=n.data)||void 0===d||null===(r=d.filter((t=>{var l,s;return(null===t||void 0===t||null===(l=t.flashSaleOfferType)||void 0===l?void 0:l.toLowerCase())===(null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.toLowerCase())})))||void 0===r?void 0:r.map(((e,t)=>(0,N.jsx)(s.NR,{children:(0,N.jsx)(S,{index:t,product:e})},t))):(0,N.jsx)(s.NN,{className:"text-center py-4 fw-bold text-warning",colSpan:"100%",children:"No products found"})]}),(0,N.jsx)(c.Z,{searchUrl:p.search,totalPageNumber:null===x||void 0===x||null===(o=x.result)||void 0===o?void 0:o.totalPageNumber})]},t)})));return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(s.rb,{children:(0,N.jsx)(s.b7,{xs:12,children:(0,N.jsxs)(s.xH,{className:"mb-4",children:[(0,N.jsx)(r.Z,{to:"/flashSale-product/add",title:"All FlashSale Product"}),(0,N.jsx)(u.Z,{onSubmit:e=>{let t="?";e.name&&(t+="search=".concat(e.name.trim())),e.price&&(t+="&price=".concat(e.price.trim())),e.status&&(t+="&status=".concat(e.status.trim())),e.model&&(t+="&model=".concat(e.model.trim())),e.quantity&&(t+="&quantity=".concat(e.quantity.trim())),e.date&&(t+="&date=".concat(e.date.trim())),T(t)},tableData:[{name:"Product Name",register:"name",type:"text"},{name:"Price",register:"price",type:"text"},{name:"Status",register:"status",type:"text"},{name:"Model",register:"model",type:"text"},{name:"Quantity",register:"quantity",type:"text"},{name:"Date Added",register:"date",type:"date"}],isNavigate:!0}),(0,N.jsxs)(s.sl,{children:[(0,N.jsx)("p",{className:"text-medium-emphasis small",children:"Here is the list of all flash sale products"}),Z||(0,N.jsx)(a.Z,{defaultActiveKey:null===g||void 0===g||null===(l=g.data)||void 0===l||null===(m=l[0])||void 0===m?void 0:m.groupName,id:"uncontrolled-tab-example",className:"mb-3",onSelect:e=>(e=>{const t=(0,h.G)("?","page",1);T((0,h.G)(t,"flashStatus",e))})(e),children:w})]})]})})})})}}}]);
//# sourceMappingURL=6917.87f4b763.chunk.js.map