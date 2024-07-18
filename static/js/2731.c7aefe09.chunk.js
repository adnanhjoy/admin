"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[2731],{82731:(e,t,a)=>{a.d(t,{A:()=>R});var l=a(93946),i=a(65043),r=a(24858),s=a(68069),n=a(5328),o=a(48771),d=a(14282),u=a(92823),c=a.n(u),g=a(57650),m=a(94281),p=a(70579);const v=e=>{var t,a;let{description:r,setDescription:s,shortDescription:n,setShortDescription:o,specification:u,setSpecification:v,register:h,modules:y,errors:x,productTags:b,setProductTags:S,setActiveTab:j,slugValue:f,setSlugValue:C}=e;const[T,N]=(0,i.useState)(f);return(0,p.jsxs)(l.sK,{className:"g-3",children:[(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Name ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.OG,{type:"text",id:"nameInputField",placeholder:"Enter Name","aria-describedby":"nameInputField",...h("name",{required:{value:!0,message:"Name is required"}}),onFocus:e=>N(e.target.value),onChange:e=>N(e.target.value)}),"required"===(null===(t=x.name)||void 0===t?void 0:t.type)&&(0,p.jsx)("p",{className:"text-danger",children:x.name.message})]}),(0,p.jsxs)(l.UF,{md:11,children:[(0,p.jsxs)("label",{className:"mb-2",children:["URL Slug ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.OG,{type:"text",id:"nameInputField",placeholder:"Enter Url slug","aria-describedby":"nameInputField",required:!0,value:f,onChange:e=>C(e.target.value)}),"required"===(null===(a=x.name)||void 0===a?void 0:a.type)&&(0,p.jsx)("p",{className:"text-danger",children:x.name.message})]}),(0,p.jsx)(l.UF,{style:{marginTop:"2.8rem"},md:1,children:(0,p.jsx)(d.A,{className:"p-1",onClick:()=>C((0,m.W)(T.toLocaleLowerCase())),children:"Generate"})}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Description"}),(0,p.jsx)(c(),{className:"mt-2",theme:"snow",placeholder:"Enter description",modules:y,value:r,onChange:s})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Short Description"}),(0,p.jsx)(c(),{className:"mt-2",theme:"snow",placeholder:"Enter short description",modules:y,value:n,onChange:o})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Specification"}),(0,p.jsx)(c(),{className:"mt-2",theme:"snow",placeholder:"Enter specification",modules:y,value:u,onChange:v})]}),b&&(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Tags ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(g.u,{separators:",",required:!0,value:b,onChange:S,name:"tags"}),(0,p.jsx)("div",{className:"text-muted",children:"Press commas , to add new tag"})]}),(0,p.jsx)("div",{className:"d-flex justify-content-end",children:(0,p.jsx)(d.A,{onClick:()=>{j(1)},children:"Next"})})]})};var h=a(25236),y=a(68564),x=a(77130);const b=e=>{let{register:t,errors:a,control:i,color:s,size:n,setActiveTab:o}=e;const{data:u}=(0,x.Sv)(),{data:c}=(0,x.SL)(),g=(0,y.SY)(null===u||void 0===u?void 0:u.data),m=(0,y.SY)(null===c||void 0===c?void 0:c.data);return(0,p.jsxs)(l.sK,{className:"g-3",children:[(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"mb-2",children:"Model"}),(0,p.jsx)(l.OG,{type:"text",id:"modelInputField",placeholder:"Enter Model",cd:!0,"aria-describedby":"modelInputField",...t("model")})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)(l.A6,{children:"Expire Date"}),(0,p.jsx)(l.OG,{type:"text",id:"expireDate",placeholder:"Enter Expire Date","aria-describedby":"expireDate",onFocus:e=>e.target.type="date",onBlur:e=>e.target.type="text",...t("expireDate")})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Size"}),(0,p.jsx)(r.xI,{control:i,name:"size",render:e=>{let{field:{onChange:t,value:a,name:l,ref:i}}=e;return(0,p.jsx)(h.Ay,{className:"mt-2",defaultValue:(0,y.c5)(n),inputRef:i,options:m,value:null===m||void 0===m?void 0:m.find((e=>e.value===a)),onChange:e=>t(null===e||void 0===e?void 0:e.map((e=>e.value))),isMulti:!0})}})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"w-100",children:"Color"}),(0,p.jsx)(r.xI,{control:i,name:"color",render:e=>{let{field:{onChange:t,value:a,name:l,ref:i}}=e;return(0,p.jsx)(h.Ay,{className:"mt-2",defaultValue:(0,y.c5)(s),inputRef:i,options:g,value:null===g||void 0===g?void 0:g.find((e=>e.value===a)),onChange:e=>t(null===e||void 0===e?void 0:e.map((e=>e.value))),isMulti:!0})}})]}),(0,p.jsxs)("div",{className:"d-flex justify-content-end gap-2",children:[(0,p.jsx)(d.A,{onClick:()=>{o(0)},children:"Prev"}),(0,p.jsx)(d.A,{onClick:()=>{o(2)},children:"Next"})]})]})};var S=a(20038),j=a(51644),f=a(64952),C=a(39796),T=a(40132);const N=[{value:"IN-STOCK",label:"In-stock"},{value:"OUT-OF-STOCK",label:"Out-of-stock"},{value:"PRE-ORDER",label:"Pre-order"}],A=e=>{var t,a,s,n,o;let{flashSale:u,flashSaleType:c,setFlashSaleType:g,errors:m,register:v,control:x,data:b,allTypes:A,selectedStatus:q,setSelectedStatus:E,manufacturer:P,setManufacturer:U,setActiveTab:F}=e;const[M,I]=(0,i.useState)(""),[k,z]=(0,i.useState)(""),[w,G]=(0,i.useState)(""),{data:D}=(0,T.gA)(),{data:O}=(0,S.HP)(),{data:L}=(0,j.IZ)(M),{data:R}=(0,f.VS)(k),{data:Q}=(0,C.ox)(),K=(0,y.SY)(null===O||void 0===O?void 0:O.result),_=(0,y.SY)(null===L||void 0===L?void 0:L.result),V=(0,y.SY)(null===R||void 0===R?void 0:R.result),B=(0,y.iT)(null===Q||void 0===Q?void 0:Q.result),J=[];null===A||void 0===A||A.forEach((e=>{J.push({label:e.name,value:e.name})}));const W=[];null===D||void 0===D||null===(t=D.result)||void 0===t||t.forEach((e=>{W.push({label:e.title,value:e.title})}));return(0,p.jsxs)(l.sK,{className:"g-3",children:[u?(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["FlashSale type ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.MT,{"aria-label":"Product Select Selection Field",value:c,onChange:e=>g(e.target.value),required:!0,options:[{value:"",label:"Select"},...J]}),"required"===(null===(a=m.offerType)||void 0===a?void 0:a.type)&&(0,p.jsx)("p",{className:"text-danger",children:m.offerType.message})]}):(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Product type ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.MT,{"aria-label":"Product Select Selection Field",options:W,...v("productType",{required:!0})}),"required"===(null===(s=m.productType)||void 0===s?void 0:s.type)&&(0,p.jsx)("p",{className:"text-danger",children:null===m||void 0===m||null===(n=m.price)||void 0===n?void 0:n.message})]}),!u&&(0,p.jsx)(l.UF,{xs:12,children:(0,p.jsxs)(l.sK,{children:[(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Categories ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(r.xI,{control:x,name:"categories",rules:{required:!0},render:e=>{let{field:{onChange:t,value:a,name:l,ref:i}}=e;return(0,p.jsx)(h.Ay,{className:"mt-2",defaultValue:(0,y.c5)(null===b||void 0===b?void 0:b.categories),inputRef:i,options:K,value:null===K||void 0===K?void 0:K.find((e=>e.value===a)),onChange:e=>{t(e.map((e=>e.value))),(e=>{const t=(null===e||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e._id))).map((e=>"parent=".concat(e))).join("&");I(t),G(""),z("")})(e.map((e=>e.value)))},isMulti:!0})}}),m.categories&&(0,p.jsx)("p",{className:"text-danger",children:"Category is required"})]}),(0,p.jsxs)(l.UF,{xs:12,className:"",children:[(0,p.jsx)("label",{className:"w-100",children:"Subcategories"}),(0,p.jsx)(r.xI,{control:x,name:"subcategories",render:e=>{let{field:{onChange:t,value:a,name:l,ref:i}}=e;return(0,p.jsx)(h.Ay,{className:"mt-2",defaultValue:(0,y.c5)(null===b||void 0===b?void 0:b.subcategories),inputRef:i,isDisabled:!M,options:_,value:null===_||void 0===_?void 0:_.find((e=>e.value===a)),onChange:e=>{t(e.map((e=>e.value))),(e=>{const t=(null===e||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e._id))).map((e=>"parent=".concat(e))).join("&");z(t),G("")})(e.map((e=>e.value)))},isMulti:!0})}})]}),(0,p.jsxs)(l.UF,{xs:12,className:"",children:[(0,p.jsx)("label",{className:"w-100",children:"Subcategory Children"}),(0,p.jsx)(r.xI,{control:x,name:"subcategoryChildren",render:e=>{let{field:{onChange:t,value:a,name:l,ref:i}}=e;return(0,p.jsx)(h.Ay,{className:"mt-2",defaultValue:(0,y.c5)(null===b||void 0===b?void 0:b.subcategoryChildren),inputRef:i,isDisabled:!k,options:V,value:null===V||void 0===V?void 0:V.find((e=>e.value===a)),onChange:e=>{t(e.map((e=>e.value))),(e=>{const t=(null===e||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e._id))).map((e=>"parent=".concat(e))).join("&");G(t)})(e.map((e=>e.value)))},isMulti:!0})}})]})]})}),(0,p.jsx)(l.UF,{xs:12,children:(0,p.jsx)(l.MT,{label:"Brand","aria-label":"Product Select Selection Field",value:P,onChange:e=>{var t;return U(null===(t=e.target)||void 0===t?void 0:t.value)},options:B})}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Status ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.MT,{"aria-label":"Product Select Selection Field",options:N,...v("status",{required:{value:!0,message:"Status is required"}}),value:q,onChange:e=>E(e.target.value)}),"required"===(null===(o=m.status)||void 0===o?void 0:o.type)&&(0,p.jsx)("p",{className:"text-danger",children:m.status.message})]}),(0,p.jsxs)("div",{className:"d-flex justify-content-end gap-2",children:[(0,p.jsx)(d.A,{onClick:()=>{F(2)},children:"Prev"}),(0,p.jsx)(d.A,{onClick:()=>{F(4)},children:"Next"})]})]})};var q=a(98139),E=a.n(q),P=a(67852);function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.Jy,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P.ff;const l=[];return Object.entries(e).forEach((e=>{let[i,r]=e;null!=r&&("object"===typeof r?t.forEach((e=>{const t=r[e];if(null!=t){const r=e!==a?"-".concat(e):"";l.push("".concat(i).concat(r,"-").concat(t))}})):l.push("".concat(i,"-").concat(r)))})),l}const F=i.forwardRef(((e,t)=>{let{as:a="div",bsPrefix:l,className:i,direction:r,gap:s,...n}=e;l=(0,P.oU)(l,"horizontal"===r?"hstack":"vstack");const o=(0,P.gy)(),d=(0,P.Jm)();return(0,p.jsx)(a,{...n,ref:t,className:E()(i,l,...U({gap:s},o,d))})}));F.displayName="Stack";const M=F;var I=a(33637),k=a(22285),z=(a(13346),a(20246));const w=e=>{var t;let{showModal:a,setShowModal:r,handleUpload:s}=e;const[n,o]=(0,i.useState)(1),{data:u}=(0,z.Lo)("page=".concat(n)),[c,g]=(0,i.useState)([]);return(0,p.jsxs)(l.zS,{visible:a,onClose:()=>{r(!1)},className:"image-library",children:[(0,p.jsx)(l.E4,{style:{border:"none"},closeButton:!0,children:"Upload from gallery"}),(0,p.jsxs)(l.Tc,{children:[(0,p.jsx)("div",{className:"library-image-container",children:null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.map((e=>e.images.map(((e,t)=>(0,p.jsxs)("div",{className:"library-image ",children:[(0,p.jsx)(I.A,{src:e}),(0,p.jsx)("input",{onClick:()=>(e=>{const t=null===c||void 0===c?void 0:c.includes(e);g(t?t=>t.filter((t=>t!==e)):t=>[...t,e])})(e),className:"".concat(null!==c&&void 0!==c&&c.includes(e)?"image-selected":""),type:"checkbox",defaultChecked:null===c||void 0===c?void 0:c.includes(e)})]},t)))))}),(0,p.jsxs)("div",{className:"text-center mt-3 ",children:[(0,p.jsx)(d.A,{disabled:n<=1,className:"me-2",onClick:()=>o(n-1),size:"sm",children:"Prev"}),(0,p.jsx)(d.A,{onClick:()=>o(n+1),size:"sm",children:"Next"})]})]}),(0,p.jsxs)(l.If,{children:[(0,p.jsx)(l.Q_,{color:"secondary",onClick:()=>{r(!1)},children:"Cancel"}),(0,p.jsx)(l.Q_,{color:"success",onClick:()=>{s(c),r(!1)},children:"Upload"})]})]})},G=e=>{var t;let{register:a,setImages:r,errors:s,images:n,setRemainingImages:o,remainingImages:u,data:c,handleDeletePreview:g,libraryUrls:m,setLibraryUrls:v}=e;const[h,y]=(0,i.useState)(null),[x,b]=(0,i.useState)(!1),[S,j]=(0,i.useState)(null);(0,i.useEffect)((()=>{o(null===c||void 0===c?void 0:c.images)}),[null===c||void 0===c?void 0:c.images]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{htmlFor:"",className:"mb-2",children:["Product Images ",(0,p.jsx)("small",{children:"(1080 x 1080)"})]}),(0,p.jsxs)("div",{className:"d-flex align-items-end gap-2",children:[(0,p.jsx)(l.OG,{type:"file",id:"file-upload",accept:".jpg, .png, .jpeg, .gif",multiple:!0,"aria-describedby":"file-upload",...a("images",{}),onChange:e=>{r(e.target.files),function(e){const t=e.target.files[0];t.size>2097152?(y("File size should be less than 2MB"),j(null)):(j(URL.createObjectURL(t)),y(null))}(e)}}),(0,p.jsx)(d.A,{type:"button",onClick:()=>b(!0),className:"p-1 w-50",children:"Upload from Image Library"}),(0,p.jsx)(w,{handleUpload:e=>{v(e)},setShowModal:b,showModal:x})]})]}),h&&(0,p.jsx)("p",{style:{color:"red"},children:h}),s.images&&(0,p.jsx)("p",{className:"text-danger",children:"Image is required"}),!h&&n&&(0,p.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:null===(t=[...n])||void 0===t?void 0:t.map(((e,t)=>(0,p.jsxs)("div",{className:"image-container",children:[(0,p.jsx)("img",{src:URL.createObjectURL(e),alt:"Product Imaged Preview ".concat(t+1),className:"image-preview"}),(0,p.jsx)("button",{type:"button",className:"delete-button",onClick:()=>g(t),children:(0,p.jsx)(k.WFf,{size:24,color:"white"})})]},t)))}),(0,p.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:null===m||void 0===m?void 0:m.map(((e,t)=>(0,p.jsxs)("div",{className:"image-container",children:[(0,p.jsx)("img",{src:e,alt:"Product Imaged Preview ".concat(t+1),className:"image-preview"}),(0,p.jsx)("button",{type:"button",className:"delete-button",onClick:()=>{return t=e,void v((e=>e.filter((e=>e!==t))));var t},children:(0,p.jsx)(k.WFf,{size:24,color:"white"})})]},t)))}),(0,p.jsx)(M,{gap:4,direction:"horizontal",className:"d-flex flex-wrap mt-4",children:null===u||void 0===u?void 0:u.map(((e,t)=>(0,p.jsx)(l.UF,{md:3,xs:1,children:(0,p.jsxs)("div",{className:"border p-2 position-relative",style:{maxWidth:"200px"},children:[(0,p.jsx)(I.A,{src:e,alt:"Product Img",fluid:!0}),(0,p.jsx)("div",{className:" position-absolute ",style:{top:"-22px",left:"93%",width:"100%"},children:(0,p.jsx)("button",{type:"button",onClick:()=>(e=>{(null===u||void 0===u?void 0:u.length)>1&&o((t=>t.filter((t=>t!==e))))})(e),className:"rounded-circle fs-5 border-0 px-2 d-flex justify-content-center align-items-center ",children:"x"})})]})},t)))})]})},D=e=>{let{errors:t,register:a,data:r,images:s,setImages:n,remainingImages:o,setRemainingImages:u,setActiveTab:c,libraryUrls:g,setLibraryUrls:m}=e;const[v,h]=(0,i.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.sK,{className:"g-3 product_image_row",children:[(0,p.jsx)(l.UF,{xs:12,children:(0,p.jsx)(l.OG,{type:"text",id:"altTag",label:"Images alt tag ",placeholder:"Images alt tag","aria-describedby":"altTag",...a("altTag")})}),(0,p.jsx)(G,{data:r,errors:t,images:s,register:a,remainingImages:o,setImages:n,setRemainingImages:u,handleDeletePreview:function(e,t){const a=[...t?v:s];a.splice(e,1),t?h(a):n(a)},libraryUrls:g,setLibraryUrls:m})]}),(0,p.jsx)("div",{className:"d-flex justify-content-end gap-2",children:(0,p.jsx)(d.A,{onClick:()=>{c(3)},children:"Prev"})})]})},O=e=>{var t,a,i,r;let{register:s,errors:n,setActiveTab:o}=e;return(0,p.jsxs)(l.sK,{className:"g-3",children:[(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Price ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.OG,{type:"Number",id:"priceInputField",placeholder:"Enter Price","aria-describedby":"priceInputField",min:"0",...s("price",{required:{value:!0,message:"Price  is required"}})}),"required"===(null===(t=n.price)||void 0===t?void 0:t.type)&&(0,p.jsx)("p",{className:"text-danger",children:n.price.message})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsx)("label",{className:"mb-2",children:"Offer Price"}),(0,p.jsx)(l.OG,{type:"Number",id:"priceInputField",placeholder:"Enter Price","aria-describedby":"priceInputField",min:"0",...s("offerPrice",{})}),"required"===(null===(a=n.price)||void 0===a?void 0:a.type)&&(0,p.jsx)("p",{className:"text-danger",children:n.price.message})]}),(0,p.jsxs)(l.UF,{xs:12,children:[(0,p.jsxs)("label",{className:"mb-2",children:["Quantity ",(0,p.jsx)("span",{className:"text-danger",children:"*"})]}),(0,p.jsx)(l.OG,{type:"number",id:"quantityInputField",placeholder:"Enter quantity","aria-describedby":"quantityInputField",min:"1",...s("quantity",{required:{value:!0,message:"Quantity is required"},min:{value:1,message:"Quantity must be greater than 1"}})}),"required"===(null===(i=n.quantity)||void 0===i?void 0:i.type)&&(0,p.jsx)("p",{className:"text-danger",children:n.quantity.message}),"min"===(null===(r=n.quantity)||void 0===r?void 0:r.type)&&(0,p.jsx)("p",{className:"text-danger",children:n.quantity.message})]}),(0,p.jsx)(l.UF,{children:(0,p.jsx)(l.CK,{...s("freeShipping",{}),id:"flexCheckDefault",label:"Free Shipping"})}),(0,p.jsxs)("div",{className:"d-flex justify-content-end gap-2",children:[(0,p.jsx)(d.A,{onClick:()=>{o(1)},children:"Prev"}),(0,p.jsx)(d.A,{onClick:()=>{o(3)},children:"Next"})]})]})},L=e=>{let{data:t,onSubmit:a,productTags:d,setProductTags:u,images:c,setImages:g,description:m,setDescription:h,shortDescription:y,setShortDescription:x,specification:S,setSpecification:j,selectedStatus:f,setSelectedStatus:C,setRemainingImages:T,remainingImages:N,manufacturer:q,setManufacturer:E,setLibraryUrls:P,libraryUrls:U,slugValue:F,setSlugValue:M,setFlashSaleType:I,flashSaleType:k,flashSale:z,allTypes:w}=e;const[G,L]=(0,i.useState)(0),{register:R,handleSubmit:Q,formState:{errors:K},setValue:_,control:V}=(0,r.mN)();(0,i.useEffect)((()=>{if(t)for(const e in t)"expireDate"===e&&_(e,new Date(t[e]).toLocaleDateString()),_(e,t[e])}),[t,_]);const B=(0,o.z)();return(0,p.jsx)(l.qI,{id:"addProductForm1",onSubmit:Q(a),children:(0,p.jsxs)(s.A,{onSelect:e=>{L(e)},activeKey:G,id:"uncontrolled-tab-example",className:"mb-3",children:[(0,p.jsx)(n.A,{eventKey:0,title:"General",children:(0,p.jsx)(v,{register:R,modules:B,errors:K,description:m,setDescription:h,shortDescription:y,setShortDescription:x,specification:S,setSpecification:j,productTags:d,setProductTags:u,setActiveTab:L,slugValue:F,setSlugValue:M})}),(0,p.jsx)(n.A,{eventKey:1,title:"Data",children:(0,p.jsx)(b,{register:R,control:V,errors:K,color:null===t||void 0===t?void 0:t.color,size:null===t||void 0===t?void 0:t.size,setActiveTab:L})}),(0,p.jsx)(n.A,{eventKey:2,title:"Product",children:(0,p.jsx)(O,{errors:K,register:R,setActiveTab:L})}),(0,p.jsx)(n.A,{eventKey:3,title:"Links",children:(0,p.jsx)(A,{errors:K,register:R,control:V,data:t,setFlashSaleType:I,flashSaleType:k,flashSale:z,allTypes:w,selectedStatus:f,setSelectedStatus:C,manufacturer:q,setManufacturer:E,setActiveTab:L})}),(0,p.jsx)(n.A,{eventKey:4,title:"Image",children:(0,p.jsx)(D,{errors:K,register:R,data:t,remainingImages:N,setRemainingImages:T,images:c,setImages:g,setLibraryUrls:P,libraryUrls:U,setActiveTab:L,setValue:_})})]})})},R=(0,i.memo)(L)},68564:(e,t,a)=>{a.d(t,{SY:()=>l,c5:()=>i,iT:()=>r});const l=e=>null===e||void 0===e?void 0:e.map((e=>{var t,a,l;return null!==e&&void 0!==e&&null!==(t=e.subcategory)&&void 0!==t&&null!==(a=t.parent)&&void 0!==a&&a.title||null!==e&&void 0!==e&&null!==(l=e.parent)&&void 0!==l&&l.title?{value:{_id:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e.title},label:null===e||void 0===e?void 0:e.title}:null!==e&&void 0!==e&&e.title?{value:{_id:null===e||void 0===e?void 0:e._id,name:null!==e&&void 0!==e&&e.title?null===e||void 0===e?void 0:e.title:null===e||void 0===e?void 0:e.name},label:null!==e&&void 0!==e&&e.title?null===e||void 0===e?void 0:e.title:null===e||void 0===e?void 0:e.name}:null!==e&&void 0!==e&&e.price?{value:null===e||void 0===e?void 0:e._id,label:null===e||void 0===e?void 0:e.name}:null!==e&&void 0!==e&&e.name?{value:{_id:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e.name},label:null===e||void 0===e?void 0:e.name}:{value:{_id:null===e||void 0===e?void 0:e._id,name:null!==e&&void 0!==e&&e.title?null===e||void 0===e?void 0:e.title:null===e||void 0===e?void 0:e.name},label:null!==e&&void 0!==e&&e.title?null===e||void 0===e?void 0:e.title:null===e||void 0===e?void 0:e.name}})),i=e=>{const t=[];return null===e||void 0===e||e.forEach((e=>{t.push({value:e,label:e.name})})),t},r=e=>{const t=[{label:"Pick one",value:null}];return null===e||void 0===e||e.forEach((e=>{t.push({value:null===e||void 0===e?void 0:e._id,label:null!==e&&void 0!==e&&e.title?null===e||void 0===e?void 0:e.title:null===e||void 0===e?void 0:e.name})})),t}},39796:(e,t,a)=>{a.d(t,{ZO:()=>n,bQ:()=>r,ox:()=>i,t1:()=>o,vu:()=>s});const l=a(61347).apiSlice.injectEndpoints({tagTypes:["Manufacture","SingleManufacture"],endpoints:e=>({getAllManufacture:e.query({query:()=>({url:"/manufacturer",method:"GET"}),providesTags:["Manufacture"]}),getSingleManufacture:e.query({query:e=>({url:"/manufacturer/".concat(e),method:"GET"}),invalidatesTags:["Manufacture"],providesTags:["SingleManufacture"]}),addManufacture:e.mutation({query:e=>({url:"/manufacturer",method:"POST",body:e}),invalidatesTags:["Manufacture"]}),updateManufacture:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/manufacturer/".concat(t),method:"PUT",body:a}},invalidatesTags:["Manufacture","SingleManufacture"]}),deleteBrand:e.mutation({query:e=>({url:"/manufacturer/".concat(e),method:"DELETE",body:e}),invalidatesTags:["Manufacture"]})})}),{useGetAllManufactureQuery:i,useDeleteBrandMutation:r,useAddManufactureMutation:s,useUpdateManufactureMutation:n,useGetSingleManufactureQuery:o}=l},40132:(e,t,a)=>{a.d(t,{HE:()=>n,XT:()=>o,f5:()=>s,gA:()=>i,lA:()=>r});const l=a(61347).apiSlice.injectEndpoints({tagTypes:["AllProductType","SingleProductType"],endpoints:e=>({getAllproductType:e.query({query:()=>({url:"/product-type",method:"GET"}),providesTags:["AllProductType"]}),addProductType:e.mutation({query:e=>{let{data:t}=e;return{url:"/product-type",method:"POST",body:t}},invalidatesTags:["AllProductType","SingleProductType"]}),getSingleProductType:e.query({query:e=>({url:"/product-type/".concat(e),method:"GET"}),providesTags:["SingleProductType"]}),updateSingleProductType:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/product-type/".concat(t),method:"PUT",body:a}},invalidatesTags:["AllProductType","SingleProductType"]}),deleteSingleProductType:e.mutation({query:e=>({url:"/product-type/".concat(e),method:"DELETE"}),invalidatesTags:["AllProductType","SingleProductType"]})})}),{useGetAllproductTypeQuery:i,useAddProductTypeMutation:r,useGetSingleProductTypeQuery:s,useUpdateSingleProductTypeMutation:n,useDeleteSingleProductTypeMutation:o}=l},64952:(e,t,a)=>{a.d(t,{$:()=>o,Ot:()=>s,Rh:()=>n,VS:()=>r,j9:()=>d,lV:()=>u});const l=a(61347).apiSlice.injectEndpoints({tagTypes:["SubCategoryChildren","SingleSubCategoryChildren","SubCategoryChildLimit"],endpoints:e=>({getAllSubCategoryChildren:e.query({query:()=>({url:"/subcategory-children",method:"GET"}),providesTags:["SubCategoryChildren"]}),getFilterSubCategoryChildren:e.query({query:e=>({url:"/subcategory-children/filter?".concat(e),method:"GET"}),providesTags:["SubCategoryChildren"]}),getAllSubCategoryChildrenByPage:e.query({query:e=>({url:"/subcategory-children/limit".concat(e),method:"GET"}),providesTags:["SubCategoryChildLimit"]}),getSingleSubCategoryChildren:e.query({query:e=>({url:"/subcategory-children/".concat(e),method:"GET"}),providesTags:["SingleSubCategoryChildren"]}),addSubCategoryChildren:e.mutation({query:e=>({url:"/subcategory-children",method:"POST",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategoryChildLimit"]}),updateSubCategoryChildren:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/subcategory-children/".concat(t),method:"PUT",body:a,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}},invalidatesTags:["SubCategoryChildren","SingleSubCategoryChildren","SubCategoryChildLimit"]}),deleteSubCategoryChildren:e.mutation({query:e=>({url:"/subcategory-children/".concat(e),method:"DELETE",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategoryChildLimit"]})})}),{useGetAllSubCategoryChildrenQuery:i,useGetFilterSubCategoryChildrenQuery:r,useGetAllSubCategoryChildrenByPageQuery:s,useDeleteSubCategoryChildrenMutation:n,useAddSubCategoryChildrenMutation:o,useUpdateSubCategoryChildrenMutation:d,useGetSingleSubCategoryChildrenQuery:u}=l},51644:(e,t,a)=>{a.d(t,{I0:()=>o,IZ:()=>r,N_:()=>i,Ql:()=>n,U9:()=>s,cs:()=>d});const l=a(61347).apiSlice.injectEndpoints({tagTypes:["SubCategory","SingleSubCategory"],endpoints:e=>({getAllSubCategory:e.query({query:()=>({url:"/subcategory",method:"GET"}),providesTags:["SubCategory"]}),getFilterSubCategory:e.query({query:e=>({url:"/subcategory/filter?".concat(e),method:"GET"}),providesTags:["SubCategory"]}),getSingleSubCategory:e.query({query:e=>({url:"/subcategory/".concat(e),method:"GET"}),invalidatesTags:["SubCategory"],providesTags:["SingleSubCategory"]}),addSubCategory:e.mutation({query:e=>({url:"/subcategory",method:"POST",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]}),updateSubCategory:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/subcategory/".concat(t),method:"PUT",body:a,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}},invalidatesTags:["SubCategory","SingleSubCategory"]}),deleteSubCategory:e.mutation({query:e=>({url:"/subcategory/".concat(e),method:"DELETE",body:e,headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),invalidatesTags:["SubCategory"]})})}),{useGetAllSubCategoryQuery:i,useGetFilterSubCategoryQuery:r,useDeleteSubCategoryMutation:s,useAddSubCategoryMutation:n,useUpdateSubCategoryMutation:o,useGetSingleSubCategoryQuery:d}=l},77130:(e,t,a)=>{a.d(t,{$M:()=>o,SL:()=>d,Sv:()=>i,Tl:()=>s,X6:()=>m,XS:()=>u,b5:()=>g,b7:()=>r,p8:()=>c,t6:()=>n});const l=a(61347).apiSlice.injectEndpoints({tagTypes:["AllColor","SingleColor","AllColor","SingleSize"],endpoints:e=>({getAllColor:e.query({query:()=>({url:"/color",method:"GET"}),providesTags:["AllColor"]}),getSingleColor:e.query({query:e=>({url:"/color/".concat(e),method:"GET"}),providesTags:["SingleColor"]}),deleteSingleColor:e.mutation({query:e=>({url:"/color/".concat(e),method:"DELETE"}),invalidatesTags:["AllColor"]}),updateSingleColor:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/color/".concat(t),method:"PUT",body:a}},invalidatesTags:["AllColor","SingleColor"]}),addSingleColor:e.mutation({query:e=>({url:"/color",method:"POST",body:e}),invalidatesTags:["AllColor"]}),getAllSize:e.query({query:()=>({url:"/size",method:"GET"}),providesTags:["AllSize"]}),getSingleSize:e.query({query:e=>({url:"/size/".concat(e),method:"GET"}),providesTags:["SingleSize"]}),deleteSingleSize:e.mutation({query:e=>({url:"/size/".concat(e),method:"DELETE"}),invalidatesTags:["AllSize"]}),updateSingleSize:e.mutation({query:e=>{let{id:t,data:a}=e;return{url:"/size/".concat(t),method:"PUT",body:a}},invalidatesTags:["AllSize","SingleSize"]}),addSingleSize:e.mutation({query:e=>({url:"/size",method:"POST",body:e}),invalidatesTags:["AllSize"]})})}),{useGetAllColorQuery:i,useGetSingleColorQuery:r,useDeleteSingleColorMutation:s,useAddSingleColorMutation:n,useUpdateSingleColorMutation:o,useGetAllSizeQuery:d,useGetSingleSizeQuery:u,useDeleteSingleSizeMutation:c,useAddSingleSizeMutation:g,useUpdateSingleSizeMutation:m}=l},48771:(e,t,a)=>{a.d(t,{z:()=>l});const l=()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"],["clean"]]})},94281:(e,t,a)=>{a.d(t,{W:()=>l});const l=e=>{var t;return null===(t=e.replace(/'/g,"").replace(/&/g,"and").replace(/"/g,"").replace(/,/g,"").replace(/:/g,""))||void 0===t?void 0:t.replace(/\s/g,"-")}},57650:(e,t,a)=>{a.d(t,{u:()=>o});var l=a(65043);function i(e,t){let a=(0,l.useRef)(!1);(0,l.useEffect)((()=>{a.current?e():a.current=!0}),t)}function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e=>e)).join(" ")}function s(e){let{text:t,remove:a,disabled:i,className:s}=e;return l.createElement("span",{className:r("rti--tag",s)},l.createElement("span",null,t),!i&&l.createElement("button",{type:"button",onClick:e=>{e.stopPropagation(),a(t)},"aria-label":"remove ".concat(t)},"\u2715"))}!function(e){let{insertAt:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}(".rti--container *{box-sizing:border-box;transition:all .2s ease}.rti--container{--rti-bg: #fff;--rti-border: #ccc;--rti-main: #3182ce;--rti-radius: .375rem;--rti-s: .5rem;--rti-tag: #edf2f7;--rti-tag-remove: #e53e3e;--rti-tag-padding: .15rem .25rem;align-items:center;background:var(--rti-bg);border:1px solid var(--rti-border);border-radius:var(--rti-radius);display:flex;flex-wrap:wrap;gap:var(--rti-s);line-height:1.4;padding:var(--rti-s)}.rti--container:focus-within{border-color:var(--rti-main);box-shadow:var(--rti-main) 0 0 0 1px}.rti--input{border:0;outline:0;font-size:inherit;line-height:inherit;width:50%}.rti--tag{align-items:center;background:var(--rti-tag);border-radius:var(--rti-radius);display:inline-flex;justify-content:center;padding:var(--rti-tag-padding)}.rti--tag button{background:none;border:0;border-radius:50%;cursor:pointer;line-height:inherit;padding:0 var(--rti-s)}.rti--tag button:hover{color:var(--rti-tag-remove)}\n");var n=["Enter"],o=e=>{let{name:t,placeHolder:a,value:o,onChange:d,onBlur:u,separators:c,disableBackspaceRemove:g,onExisting:m,onRemoved:p,disabled:v,isEditOnRemove:h,beforeAddValidate:y,onKeyUp:x,classNames:b}=e,[S,j]=(0,l.useState)(o||[]);i((()=>{d&&d(S)}),[S]),i((()=>{JSON.stringify(o)!==JSON.stringify(S)&&j(o)}),[o]);let f=e=>{j(S.filter((t=>t!==e))),p&&p(e)};return l.createElement("div",{"aria-labelledby":t,className:"rti--container"},S.map((e=>l.createElement(s,{key:e,className:null==b?void 0:b.tag,text:e,remove:f,disabled:v}))),l.createElement("input",{className:r("rti--input",null==b?void 0:b.input),type:"text",name:t,placeholder:a,onKeyDown:e=>{e.stopPropagation();let t=e.target.value;if(!t&&!g&&S.length&&"Backspace"===e.key&&(e.target.value=h?"".concat(S.at(-1)," "):"",j([...S.slice(0,-1)])),t&&(c||n).includes(e.key)){if(e.preventDefault(),y&&!y(t,S))return;if(S.includes(t))return void(m&&m(t));j([...S,t]),e.target.value=""}},onBlur:u,disabled:v,onKeyUp:x}))}}}]);
//# sourceMappingURL=2731.c7aefe09.chunk.js.map