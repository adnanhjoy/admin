(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[4216],{85612:(e,t,r)=>{"use strict";r.d(t,{BI:()=>m,CT:()=>s,Fp:()=>o,GH:()=>v,OJ:()=>x,P6:()=>c,P8:()=>a,Qb:()=>d,RU:()=>h,YA:()=>u,e$:()=>n,iO:()=>i,jp:()=>j,mg:()=>g,v1:()=>y,wx:()=>p});const l=r(61347).apiSlice.injectEndpoints({tagTypes:["AllOrder","SingleOrder","RecentOrder","AllFilterOrder"],endpoints:e=>({getAllOrders:e.query({query:e=>({url:"/order".concat(e),method:"GET"}),providesTags:["AllOrder"]}),getAllOrdersByFilter:e.query({query:e=>({url:"/order/filterOrder?".concat(e),method:"GET"}),providesTags:["AllFilterOrder"]}),getRecentOrder:e.query({query:()=>({url:"/order/recentOrder",method:"GET"}),providesTags:["RecentOrder"]}),getTotalSaleByYear:e.query({query:()=>({url:"/order/totalSaleByYear",method:"GET"})}),getTotalOrdersByYear:e.query({query:()=>({url:"/order/totalOrdersByYear",method:"GET"})}),getTotalSaleByMonth:e.query({query:()=>({url:"/order/totalSaleByMonth",method:"GET"})}),getTotalOrderByMonth:e.query({query:()=>({url:"/order/totalOrdersByMonth",method:"GET"})}),getTotalSaleByDay:e.query({query:()=>({url:"/order/totalSaleByDay",method:"GET"})}),getTotalOrderByDay:e.query({query:()=>({url:"/order/totalOrdersByDay",method:"GET"})}),getTotalSales:e.query({query:()=>({url:"/order/totalSales",method:"GET"})}),getTotalSalesByDate:e.mutation({query:e=>{let{data:t}=e;return{url:"/order/totalSales/byDate",method:"POST",body:t}}}),getTotalOrders:e.query({query:()=>({url:"/order/totalOrders",method:"GET"})}),getSingleOrderById:e.query({query:e=>({url:"/order/".concat(e),method:"GET"}),providesTags:["SingleOrder"]}),updateSingleOrderById:e.mutation({query:e=>{let{id:t,data:r}=e;return{url:"/order/".concat(t),method:"PUT",body:r}},invalidatesTags:["AllOrder","SingleOrder","RecentOrder","AllFilterOrder","Products"]}),deleteOrderById:e.mutation({query:e=>({url:"/order/".concat(e),method:"DELETE",body:e}),invalidatesTags:["AllOrder","AllFilterOrder"]}),updatePaymentOrder:e.mutation({query:e=>{let{orderId:t,productId:r,data:l}=e;return{url:"/order/".concat(t,"/products/").concat(r,"/transaction"),method:"PUT",body:l}},invalidatesTags:["AllOrder","AllFilterOrder"]})})}),{useGetAllOrdersQuery:s,useGetAllOrdersByFilterQuery:o,useGetRecentOrderQuery:a,useDeleteOrderByIdMutation:n,useUpdateSingleOrderByIdMutation:i,useGetSingleOrderByIdQuery:d,useGetTotalSaleByYearQuery:c,useGetTotalSaleByMonthQuery:u,useGetTotalOrderByMonthQuery:h,useGetTotalSaleByDayQuery:x,useGetTotalOrderByDayQuery:m,useGetTotalSalesQuery:v,useGetTotalSalesByDateMutation:p,useGetTotalOrdersQuery:j,useGetTotalOrdersByYearQuery:y,useUpdatePaymentOrderMutation:g}=l},41860:(e,t,r)=>{"use strict";r.d(t,{Uz:()=>i,VU:()=>n,cJ:()=>o,cl:()=>a});const{apiSlice:l}=r(61347),s=l.injectEndpoints({tagTypes:["AllReview"],endpoints:e=>({getAllReviews:e.query({query:e=>({url:"review".concat(e),method:"GET"}),providesTags:["AllReview"]}),getTotalReviews:e.query({query:()=>({url:"review/totalReviews",method:"GET"})}),getTotalReviewsByMonth:e.query({query:()=>({url:"review/totalReviewsByMonth",method:"GET"})}),deleteSingleReview:e.mutation({query:e=>({url:"review/".concat(e),method:"DELETE"}),invalidatesTags:["AllReview"]})})}),{useGetAllReviewsQuery:o,useDeleteSingleReviewMutation:a,useGetTotalReviewsQuery:n,useGetTotalReviewsByMonthQuery:i}=s},48907:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var l=r(1118),s=r(6145),o=r(93946),a=r(70579);const n=e=>{let{setShowModal:t}=e;return(0,a.jsx)(o.jl,{content:"Delete",children:(0,a.jsx)(o.Q_,{color:"danger",variant:"outline",style:{height:"30px",width:"32px",position:"relative"},className:"ms-2 mb-1",onClick:()=>t(!0),children:(0,a.jsx)(s.A,{icon:l.Z,style:{position:"absolute",top:"25%",left:"25%"}})})})}},71643:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var l=r(93946),s=r(2127),o=r(70579);const a=e=>{let{handleClick:t}=e;return(0,o.jsx)(l.jl,{content:"View",children:(0,o.jsx)(l.Q_,{onClick:t,className:"mb-1  ms-2",style:{height:"30px",width:"32px",position:"relative"},color:"info",variant:"outline",children:(0,o.jsx)(s.JPe,{style:{position:"absolute",top:"25%",left:"25%"}})})})}},25529:(e,t,r)=>{"use strict";function l(e){let t,r,l,s;for(t=[],t=(new Date).getFullYear()%4===0?[31,29,31,30,31,30,31,31,30,31,30,31]:[31,28,31,30,31,30,31,31,30,31,30,31],s=[],r=0,l=t[e-1];r<l;r++)s.push(r+1);return s}function s(e,t){const r=[...e];for(let l=0;l<(null===r||void 0===r?void 0:r.length);l++){let e=!1;for(let s=0;s<(null===t||void 0===t?void 0:t.length);s++)if(r[l]===t[s]._id.day){r[l]=t[s].total,e=!0;break}e||(r[l]=0)}return r}function o(e,t){let r=[...e];for(let l=0;l<r.length;l++){let e=!1;for(let s=0;s<(null===t||void 0===t?void 0:t.length);s++)if(r[l]===t[s].month){r[l]=t[s].total,e=!0;break}e||(r[l]=0)}return r}r.d(t,{F0:()=>l,O4:()=>a,VC:()=>o,ZG:()=>s});const a=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]},4216:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var l=r(65043),s=r(85612),o=r(36412),a=r(25529),n=r(93946),i=r(70579);function d(e,t,r){let l=null;return e&&(l=(0,i.jsx)("p",{className:"text-center  my-2 fs-5 text-primary",children:"Loading.."})),!e&&t&&(l=(0,i.jsx)("p",{className:"text-danger",children:"There was an error"})),e||t||0!==(null===r||void 0===r?void 0:r.length)||(l=(0,i.jsx)("p",{children:"There is no result"})),l}var c=r(35475),u=r(48907),h=r(92990),x=r(71643);const m=e=>{var t;let{order:r,index:l}=e;return(0,i.jsxs)(n.YI,{children:[(0,i.jsx)(n.$s,{scope:"row",children:l+1}),(0,i.jsx)(n.cC,{children:null===r||void 0===r||null===(t=r.address)||void 0===t?void 0:t.shippingName}),(0,i.jsx)(n.cC,{children:null===r||void 0===r?void 0:r.totalAmount}),(0,i.jsx)(n.cC,{children:null===r||void 0===r?void 0:r.paymentType}),(0,i.jsx)(n.cC,{children:new Date(null===r||void 0===r?void 0:r.createdAt).toLocaleDateString()}),(0,i.jsx)(n.cC,{children:new Date(null===r||void 0===r?void 0:r.updatedAt).toLocaleDateString()}),(0,i.jsx)(n.cC,{children:null===r||void 0===r?void 0:r.status}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(c.N_,{to:"/order/details/".concat(null===r||void 0===r?void 0:r._id),children:(0,i.jsx)(x.A,{})}),(0,i.jsx)(c.N_,{to:"/order/details/".concat(null===r||void 0===r?void 0:r._id),children:(0,i.jsx)(h.A,{})}),(0,i.jsx)(u.A,{})]})]})},v=()=>{const{data:e,isLoading:t,isError:r}=(0,s.P8)();let l=d(t,r,e);return!t&&!r&&(null===e||void 0===e?void 0:e.length)>0&&(l=null===e||void 0===e?void 0:e.map(((e,t)=>(0,i.jsx)(m,{order:e,index:t},null===e||void 0===e?void 0:e._id)))),(0,i.jsx)(n.sK,{children:(0,i.jsx)(n.UF,{xs:!0,children:(0,i.jsxs)(n.E$,{className:"mb-4",children:[(0,i.jsx)(n.V0,{children:"Recent Five Orders"}),(0,i.jsx)(n.W6,{children:(0,i.jsxs)(n._v,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)(n.wV,{color:"light",children:(0,i.jsxs)(n.YI,{className:"text-start",children:[(0,i.jsx)(n.$s,{scope:"col",style:{width:"3.75rem"},children:"Sl. No."}),(0,i.jsx)(n.$s,{scope:"col",children:"Customer"}),(0,i.jsx)(n.$s,{scope:"col",children:"Total"}),(0,i.jsx)(n.$s,{scope:"col",children:"Payment Method"}),(0,i.jsx)(n.$s,{scope:"col",children:"Order Date"}),(0,i.jsx)(n.$s,{scope:"col",children:"Modify Date"}),(0,i.jsx)(n.$s,{scope:"col",children:"Status"}),(0,i.jsx)(n.$s,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"Actions"})]})}),(0,i.jsx)(n.jS,{children:l})]})})]})})})};var p=r(20246),j=r(24916);const y=()=>{var e;const{data:t,isLoading:r,isError:l}=(0,p.$q)();let s=d(r,l,null===t||void 0===t?void 0:t.data);var o;!r&&!l&&(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.length)>0&&(s=null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.map(((e,t)=>(0,i.jsx)(j.A,{product:e,index:t},null===e||void 0===e?void 0:e._id))));return(0,i.jsx)(n.sK,{children:(0,i.jsx)(n.UF,{xs:!0,children:(0,i.jsxs)(n.E$,{className:"mb-4",children:[(0,i.jsx)(n.V0,{children:"Low Quantity Products"}),(0,i.jsx)(n.W6,{style:{maxHeight:"350px",overflowY:"scroll"},children:(0,i.jsxs)(n._v,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)(n.wV,{color:"light",children:(0,i.jsxs)(n.YI,{className:"text-center",children:[(0,i.jsx)(n.$s,{scope:"col",style:{paddingLeft:0,paddingRight:0},children:"Sl. No."}),(0,i.jsx)(n.$s,{scope:"col",children:"Photo"}),(0,i.jsx)(n.$s,{scope:"col",children:"Name"}),(0,i.jsx)(n.$s,{scope:"col",children:"Discount"}),(0,i.jsx)(n.$s,{scope:"col",children:"Stock Status"}),(0,i.jsx)(n.$s,{scope:"col",children:"Quantity"}),(0,i.jsx)(n.$s,{scope:"col",children:"Price"}),(0,i.jsx)(n.$s,{scope:"col",style:{width:"100px",minWidth:"100px"},children:"Actions"})]})}),(0,i.jsx)(n.jS,{children:s})]})})]})})})};var g=r(90504),f=r(61072),b=r(78602),w=r(24858),S=r(29189),O=r(61297);const T=e=>{var t,r;let{showModal:l,setShowModal:o}=e;const{register:a,errors:d,handleSubmit:c,reset:u}=(0,w.mN)(),[h,{data:x,isLoading:m,isError:v}]=(0,s.wx)(),[p,{isLoading:j,isSuccess:y,isError:g}]=(0,s.e$)(),f=e=>{p(e)};let b=null;var T;(m&&(b=(0,i.jsx)(O.A,{})),!m&&v&&(b=(0,i.jsx)(n.cC,{className:"text-center py-4 fw-bold text-warning",colSpan:"100%",children:"There was an error, try again."})),m||v||0!==(null===x||void 0===x||null===(t=x.orders)||void 0===t?void 0:t.length)||(b=(0,i.jsx)(n.cC,{className:"text-center py-4 fw-bold text-warning",colSpan:"100%",children:"No data found"})),!m&&!v&&(null===x||void 0===x||null===(r=x.orders)||void 0===r?void 0:r.length)>0)&&(b=(0,i.jsxs)(n._v,{style:{overflowY:"scroll"},align:"middle",className:"my-3 border",bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)(n.wV,{color:"light",children:(0,i.jsxs)(n.YI,{className:"text-start",children:[(0,i.jsx)(n.$s,{scope:"col",style:{width:"60px"},children:"Sl. No."}),(0,i.jsx)(n.$s,{scope:"col",style:{width:"200px"},children:"Customer"}),(0,i.jsx)(n.$s,{scope:"col",children:"Order Id"}),(0,i.jsx)(n.$s,{scope:"col",children:"Phone"}),(0,i.jsx)(n.$s,{scope:"col",children:"Total"}),(0,i.jsx)(n.$s,{scope:"col",children:"Payment Method"}),(0,i.jsx)(n.$s,{scope:"col",children:"Order Date"}),(0,i.jsx)(n.$s,{scope:"col",children:"Modify Date"}),(0,i.jsx)(n.$s,{scope:"col",children:"Order Status"}),(0,i.jsx)(n.$s,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"Actions"})]})}),null===x||void 0===x||null===(T=x.orders)||void 0===T?void 0:T.map(((e,t)=>(0,i.jsx)(n.jS,{children:(0,i.jsx)(S.A,{handleDeleteOrder:f,deleteLoading:j,index:t,order:e})},null===e||void 0===e?void 0:e._id)))]}));let N=e=>null===e||void 0===e?void 0:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,i.jsxs)(n.zS,{visible:l,onClose:()=>{o(!1)},className:"salesModal",children:[(0,i.jsx)(n.E4,{closeButton:!0,children:"Search Here"}),(0,i.jsxs)(n.Tc,{children:[(0,i.jsxs)(n.qI,{id:"filter",onSubmit:c((e=>{const t={fromDate:e.fromDate,toDate:e.toDate};h({data:t})})),children:[(0,i.jsxs)("div",{className:"d-flex gap-2 justify-content-between",children:[(0,i.jsxs)("div",{style:{width:"45%"},children:[(0,i.jsx)("label",{htmlFor:"",children:"From"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.OG,{type:"date",...a("fromDate",{required:{value:!0}})}),(null===d||void 0===d?void 0:d.fromDate)&&(0,i.jsx)("p",{className:"text-danger",children:"From date required"})]})]}),(0,i.jsxs)("div",{style:{width:"45%"},children:[(0,i.jsx)("label",{htmlFor:"",children:"To"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.OG,{type:"date",...a("toDate",{required:{value:!0,message:"To date required"}})}),(null===d||void 0===d?void 0:d.toDate)&&(0,i.jsx)("p",{className:"text-danger",children:"To date required"})]})]})]}),(0,i.jsx)("div",{className:"d-flex justify-content-end mt-3",children:(0,i.jsx)(n.Q_,{type:"submit",form:"filter",color:"success",children:m?"Loading..":"Search"})})]}),x&&(0,i.jsxs)("div",{className:"d-flex justify-content-between my-4",children:[(0,i.jsxs)("div",{className:"salesCard sales",children:[(0,i.jsx)("p",{className:"fs-5 fw-bold",children:N(null===x||void 0===x?void 0:x.totalSales)}),(0,i.jsx)("p",{children:"Total sales"})]}),(0,i.jsxs)("div",{className:"salesCard shipping",children:[(0,i.jsx)("p",{className:"fs-5 fw-bold",children:N(null===x||void 0===x?void 0:x.totalShipping)}),(0,i.jsx)("p",{children:"Total shipping"})]}),(0,i.jsxs)("div",{className:"salesCard orders",children:[(0,i.jsx)("p",{className:"fs-5 fw-bold",children:N(null===x||void 0===x?void 0:x.totalOrders)}),(0,i.jsx)("p",{children:"Total orders"})]})]}),b]}),(0,i.jsx)(n.If,{})]})},N=e=>{let{selectedSalesData:t,selectedOrderData:r,selectedLabel:s,selectValue:o,handleButtonValueChanges:a}=e;const[d,c]=(0,l.useState)(!1);return(0,i.jsxs)(f.A,{children:[(0,i.jsx)(b.A,{children:(0,i.jsx)(n.E$,{className:"mb-4",children:(0,i.jsxs)(n.W6,{children:[(0,i.jsxs)(n.sK,{children:[(0,i.jsxs)(n.UF,{sm:5,children:[(0,i.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Orders & Sales"}),(0,i.jsx)("div",{className:"small text-medium-emphasis",children:(new Date).toDateString()})]}),(0,i.jsx)(n.UF,{sm:7,className:"d-none d-md-block",children:(0,i.jsxs)(n.$l,{className:"float-end me-3",children:[["Day","Month","Year"].map((e=>(0,i.jsx)(n.Q_,{color:"outline-info",onClick:()=>a(e),className:"mx-0 shadow-none",active:e===o,children:e},e))),(0,i.jsx)(n.Q_,{color:"outline-info",onClick:()=>c(!0),className:"mx-0 shadow-none",children:"Custom"})]})})]}),(0,i.jsx)(g.Kf,{style:{maxHeight:"300px",marginTop:"40px"},type:"bar",data:{labels:s,datasets:[{label:"Total Orders",backgroundColor:"red",data:r},{label:"Total Sales",backgroundColor:"#9FC1ED",data:t}]},labels:"months"})]})})}),(0,i.jsx)(T,{showModal:d,setShowModal:c})]})},A=()=>{const{data:e}=(0,s.P6)(),{data:t}=(0,s.v1)(),{data:r}=(0,s.YA)(),{data:n}=(0,s.RU)(),{data:d}=(0,s.OJ)(),{data:c}=(0,s.BI)(),u=(0,a.F0)((new Date).getMonth()+1),h=(0,a.ZG)(u,d),x=(0,a.ZG)(u,c),m=null===e||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e._id.year)),p=null===e||void 0===e?void 0:e.map((e=>e.total)),j=null===t||void 0===t?void 0:t.map((e=>e.total)),g=(0,a.VC)(a.O4,r),f=(0,a.VC)(a.O4,n),[b,w]=(0,l.useState)("Day"),[S,O]=(0,l.useState)(u),[T,A]=(0,l.useState)(""),[C,D]=(0,l.useState)("");(0,l.useEffect)((()=>(d&&(A(h),D(x)),()=>{})),[d,c]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{monthOrdersData:f,monthSalesData:g}),(0,i.jsx)(N,{handleButtonValueChanges:e=>{w(e),"Day"===e&&(O(u),A(h),D(x)),"Month"===e&&(O(a.O4),A(g),D(f)),"Year"===e&&(O(m),A(p),D(j))},selectValue:b,selectedLabel:S,selectedSalesData:T,selectedOrderData:C}),(0,i.jsx)(v,{}),(0,i.jsx)(y,{})]})},C=(0,l.memo)(A)},29189:(e,t,r)=>{"use strict";r.d(t,{A:()=>h});var l=r(93946),s=r(65043),o=r(35475),a=r(85612),n=r(48907),i=r(92990),d=r(71643),c=r(39353),u=r(70579);const h=e=>{let{index:t,order:r,handleDeleteOrder:h,deleteLoading:x}=e;const[m,v]=(0,s.useState)(!1),{totalAmount:p,createdAt:j,updatedAt:y,paymentType:g,status:f,userName:b,userPhone:w,orderId:S,report:O}=r||{},[T,N]=(0,s.useState)(f),[A,{isLoading:C,updateError:D}]=(0,a.iO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.A,{deleteThis:h,showModal:m,setShowModal:v,id:null===r||void 0===r?void 0:r._id,deleteLoading:x}),(0,u.jsxs)(l.YI,{children:[(0,u.jsx)(l.$s,{scope:"row",children:t+1}),(0,u.jsx)(l.cC,{children:b}),(0,u.jsx)(l.cC,{children:S}),(0,u.jsx)(l.cC,{children:w}),(0,u.jsx)(l.cC,{children:p}),(0,u.jsxs)(l.cC,{children:[g," ",O&&(0,u.jsxs)("span",{className:"text-danger text-uppercase",children:["REQ: ",null===O||void 0===O?void 0:O.requestedFor]})]}),(0,u.jsx)(l.cC,{children:new Date(j).toLocaleDateString()}),(0,u.jsx)(l.cC,{children:new Date(y).toLocaleDateString()}),(0,u.jsxs)(l.cC,{children:[C&&(0,u.jsx)("small",{children:"Loading.."}),D&&(0,u.jsx)("small",{className:"text-danger",children:"Error occured"}),(0,u.jsx)(l.MT,{style:{width:"150px"},"aria-label":"Product Select Selection Field",options:[{value:"pending",label:"Pending"},{value:"processing",label:"Processing"},{value:"shipped",label:"shipped"},{value:"cancelled",label:"Cancelled"},{value:"returned",label:"Returned"},{value:"delivered",label:"Delivered"},{value:"expired",label:"Expired"}],value:T,disabled:C,onChange:e=>{((e,t)=>{const r=e.target.value;N(r),A({id:t,data:{status:r}})})(e,null===r||void 0===r?void 0:r._id)}})]}),(0,u.jsx)(l.cC,{children:(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(o.N_,{to:"/order/details/".concat(null===r||void 0===r?void 0:r._id),children:(0,u.jsx)(d.A,{})}),(0,u.jsx)(o.N_,{to:"/order/details/".concat(null===r||void 0===r?void 0:r._id),children:(0,u.jsx)(i.A,{})}),(0,u.jsx)(n.A,{setShowModal:v})]})})]})]})}},24916:(e,t,r)=>{"use strict";r.d(t,{A:()=>h});var l=r(93946),s=r(65043),o=r(35475),a=r(42145),n=r(20246),i=r(48907),d=r(92990),c=r(39353),u=r(70579);const h=e=>{var t;let{product:r,index:h}=e;const[x,m]=(0,s.useState)(!1),[v,{isLoading:p,isSuccess:j,isError:y}]=(0,n.Jk)();return(0,s.useEffect)((()=>{j&&a.oR.success("Product deleted successfully"),y&&a.oR.error("Product deleted failed")}),[j,y]),(0,u.jsxs)(l.YI,{children:[(0,u.jsx)(l.$s,{scope:"row",children:h+1}),(0,u.jsx)(l.cC,{children:(0,u.jsx)("img",{src:null===r||void 0===r||null===(t=r.images)||void 0===t?void 0:t[0],alt:null===r||void 0===r?void 0:r.model,style:{height:"2.5rem",width:"2.5rem",borderRadius:"0.25rem",objectFit:"cover"},className:"border"})}),(0,u.jsx)(l.cC,{children:null===r||void 0===r?void 0:r.name}),(0,u.jsxs)(l.cC,{children:[null===r||void 0===r?void 0:r.discountPercentage," %"]}),(0,u.jsx)(l.cC,{children:r.status}),(0,u.jsx)(l.cC,{className:"".concat(r.quantity<=15&&"text-danger"),children:r.quantity}),(0,u.jsxs)(l.cC,{children:["\u09f3",r.price]}),(0,u.jsx)(l.cC,{children:(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(o.N_,{to:"/product/edit/".concat(null===r||void 0===r?void 0:r._id),children:(0,u.jsx)(d.A,{})}),(0,u.jsx)(i.A,{setShowModal:m})]})}),(0,u.jsx)(c.A,{deleteThis:e=>{v(e)},showModal:x,setShowModal:m,id:r._id,deleteLoading:p})]})}},36412:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});const l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"];var s=r(6145),o=r(93946),a=r(85612),n=r(41860),i=r(31696);const d=function(e){return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))};var c=r(35475),u=r(90504),h=r(27236),x=r(25529),m=r(70579);const v=e=>{let{data:t,title:r,color:l}=e;return(0,m.jsx)(u.WE,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:x.O4,datasets:[{label:r,backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,h.getStyle)("--cui-".concat(l)),data:t}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:0,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})},p=e=>{let{monthSalesData:t,monthOrdersData:r}=e;const{data:u}=(0,a.GH)(),{data:h}=(0,a.jp)(),{data:p}=(0,i.zZ)(),{data:j}=(0,n.VU)(),{data:y}=(0,i.jn)(),{data:g}=(0,n.Uz)(),f=(0,x.VC)(x.O4,y),b=(0,x.VC)(x.O4,g);return(0,m.jsxs)(o.sK,{children:[(0,m.jsx)(o.UF,{sm:6,lg:3,children:(0,m.jsx)(o.Uz,{className:"mb-4",color:"primary",style:{height:"150px"},value:(0,m.jsx)(m.Fragment,{children:d(null!==h&&void 0!==h&&h.totalOrders?null===h||void 0===h?void 0:h.totalOrders:0)}),title:"Total Orders",action:(0,m.jsxs)(o.ji,{alignment:"end",children:[(0,m.jsx)(o.VH,{color:"transparent",caret:!1,className:"p-0",children:(0,m.jsx)(s.A,{icon:l,className:"text-high-emphasis-inverse"})}),(0,m.jsx)(o.QR,{className:"p-0 overflow-hidden",children:(0,m.jsx)(c.N_,{to:"/order",className:"text-decoration-none d-block ",children:(0,m.jsx)(o.kd,{style:{cursor:"pointer"},children:"See Details"})})})]}),chart:(0,m.jsx)(v,{data:r,title:"order",color:"primary"})})}),(0,m.jsx)(o.UF,{sm:6,lg:3,children:(0,m.jsx)(o.Uz,{className:"mb-4",color:"info",style:{height:"150px"},value:(0,m.jsxs)(m.Fragment,{children:["\u09f3 ",d(null!==u&&void 0!==u&&u.totalSales?null===u||void 0===u?void 0:u.totalSales:0)," "]}),title:"Total Sales",action:(0,m.jsxs)(o.ji,{alignment:"end",children:[(0,m.jsx)(o.VH,{color:"transparent",caret:!1,className:"p-0",children:(0,m.jsx)(s.A,{icon:l,className:"text-high-emphasis-inverse"})}),(0,m.jsx)(o.QR,{className:"p-0 overflow-hidden",children:(0,m.jsx)(c.N_,{to:"/order",className:"text-decoration-none ",children:(0,m.jsx)(o.kd,{style:{cursor:"pointer"},children:" See Details"})})})]}),chart:(0,m.jsx)(v,{data:t,title:"Sales",color:"info"})})}),(0,m.jsx)(o.UF,{sm:6,lg:3,children:(0,m.jsx)(o.Uz,{style:{height:"150px"},className:"mb-4",color:"warning",value:(0,m.jsx)(m.Fragment,{children:d(null!==p&&void 0!==p&&p.totalUsers?null===p||void 0===p?void 0:p.totalUsers:0)}),title:"Total Customers",action:(0,m.jsxs)(o.ji,{alignment:"end",children:[(0,m.jsx)(o.VH,{color:"transparent",caret:!1,className:"p-0",children:(0,m.jsx)(s.A,{icon:l,className:"text-high-emphasis-inverse"})}),(0,m.jsx)(c.N_,{to:"/customer",className:"text-decoration-none ",children:(0,m.jsx)(o.QR,{className:"p-0 overflow-hidden",children:(0,m.jsx)(o.kd,{style:{cursor:"pointer"},children:" See Details"})})})]}),chart:(0,m.jsx)(v,{data:f,title:"Customers",color:"warning"})})}),(0,m.jsx)(o.UF,{sm:6,lg:3,children:(0,m.jsx)(o.Uz,{style:{height:"150px"},className:"mb-4",color:"danger",value:(0,m.jsx)(m.Fragment,{children:d(null!==j&&void 0!==j&&j.totalReviews?null===j||void 0===j?void 0:j.totalReviews:0)}),title:"Total Reviews",action:(0,m.jsxs)(o.ji,{alignment:"end",children:[(0,m.jsx)(o.VH,{color:"transparent",caret:!1,className:"p-0",children:(0,m.jsx)(s.A,{icon:l,className:"text-high-emphasis-inverse"})}),(0,m.jsx)(o.QR,{className:"p-0 overflow-hidden",children:(0,m.jsx)(c.N_,{to:"/all-reviews",className:"text-decoration-none ",children:(0,m.jsx)(o.kd,{style:{cursor:"pointer"},children:" See Details"})})})]}),chart:(0,m.jsx)(v,{data:b,title:"Reviews",color:"danger"})})})]})}},27236:(e,t)=>{!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(l,s,function(t){return e[t]}.bind(null,s));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return l})),r.d(t,"getColor",(function(){return o})),r.d(t,"getStyle",(function(){return s})),r.d(t,"hexToRgb",(function(){return a})),r.d(t,"hexToRgba",(function(){return n})),r.d(t,"makeUid",(function(){return i})),r.d(t,"omitByKeys",(function(){return d})),r.d(t,"pickByKeys",(function(){return c})),r.d(t,"rgbToHex",(function(){return u}));var l=function e(t,r){for(var l=0,s=Object.keys(r);l<s.length;l++){var o=s[l];r[o]instanceof Object&&Object.assign(r[o],e(t[o],r[o]))}return Object.assign(t||{},r),t},s=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(function(e){return e.match(/^--.*/i)}(e)&&Boolean(document.documentMode)&&document.documentMode>=10){var l=function(){for(var e={},t=document.styleSheets,r="",l=t.length-1;l>-1;l--){for(var s=t[l].cssRules,o=s.length-1;o>-1;o--)if(".ie-custom-properties"===s[o].selectorText){r=s[o].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],l=t.split(": ")[1];r&&l&&(e["--".concat(r.trim())]=l.trim())}})),e}();t=l[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e);return s(r,t)||e},a=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,l;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),l=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(l,")")},n=function(e){var t,r,l,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),l=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(l,", ").concat(s/100,")")},i=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var r={},l=Object.keys(e),s=0;s<l.length;s++)!t.includes(l[s])&&(r[l[s]]=e[l[s]]);return r},c=function(e,t){for(var r={},l=0;l<t.length;l++)r[t[l]]=e[t[l]];return r},u=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),l="0".concat(parseInt(t[2],10).toString(16)),s="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(l.slice(-2)).concat(s.slice(-2))},h={deepObjectsMerge:l,getColor:o,getStyle:s,hexToRgb:a,hexToRgba:n,makeUid:i,omitByKeys:d,pickByKeys:c,rgbToHex:u};t.default=h}]))}}]);
//# sourceMappingURL=4216.1d2e845b.chunk.js.map