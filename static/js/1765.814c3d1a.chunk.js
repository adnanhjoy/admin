"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[1765],{47904:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(72791);const n=function(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e}),[e]),t}},39007:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(72791),n=r(47904);function i(e){const t=(0,n.Z)(e);return(0,a.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}},11784:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(72791);r(47904);var n=r(39007);"undefined"!==typeof r.g&&r.g.navigator&&r.g.navigator.product,new WeakMap;var i=r(15341),o=r(80184);const s=["onKeyDown"];const l=a.forwardRef(((e,t)=>{let{onKeyDown:r}=e,a=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);const[l]=(0,i.FT)(Object.assign({tagName:"a"},a)),c=(0,n.Z)((e=>{l.onKeyDown(e),null==r||r(e)}));return(d=a.href)&&"#"!==d.trim()&&"button"!==a.role?(0,o.jsx)("a",Object.assign({ref:t},a,{onKeyDown:r})):(0,o.jsx)("a",Object.assign({ref:t},a,l,{onKeyDown:c}));var d}));l.displayName="Anchor";const c=l},15341:(e,t,r)=>{r.d(t,{FT:()=>o,ZP:()=>l});var a=r(72791),n=r(80184);const i=["as","disabled"];function o(e){let{tagName:t,disabled:r,href:a,target:n,rel:i,role:o,onClick:s,tabIndex:l=0,type:c}=e;t||(t=null!=a||null!=n||null!=i?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:r},d];const u=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),r?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),r&&(a=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:l,href:a,target:"a"===t?n:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const s=a.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,s=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);const[l,{tagName:c}]=o(Object.assign({tagName:r,disabled:a},s));return(0,n.jsx)(c,Object.assign({},s,l,{ref:t}))}));s.displayName="Button";const l=s},43360:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(41418),n=r.n(a),i=r(72791),o=r(15341),s=r(10162),l=r(80184);const c=i.forwardRef(((e,t)=>{let{as:r,bsPrefix:a,variant:i="primary",size:c,active:d=!1,disabled:u=!1,className:f,...g}=e;const v=(0,s.vE)(a,"btn"),[b,{tagName:p}]=(0,o.FT)({tagName:r,disabled:u,...g}),m=p;return(0,l.jsx)(m,{...b,...g,ref:t,disabled:u,className:n()(f,v,d&&"active",i&&"".concat(v,"-").concat(i),c&&"".concat(v,"-").concat(c),g.href&&u&&"disabled")})}));c.displayName="Button";const d=c},44266:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(41418),n=r.n(a),i=r(72791),o=r(10162);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.Hz,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.cs;const a=[];return Object.entries(e).forEach((e=>{let[n,i]=e;null!=i&&("object"===typeof i?t.forEach((e=>{const t=i[e];if(null!=t){const i=e!==r?"-".concat(e):"";a.push("".concat(n).concat(i,"-").concat(t))}})):a.push("".concat(n,"-").concat(i)))})),a}var l=r(80184);const c=i.forwardRef(((e,t)=>{let{as:r="div",bsPrefix:a,className:i,direction:c,gap:d,...u}=e;a=(0,o.vE)(a,"horizontal"===c?"hstack":"vstack");const f=(0,o.pi)(),g=(0,o.zG)();return(0,l.jsx)(r,{...u,ref:t,className:n()(i,a,...s({gap:d},f,g))})}));c.displayName="Stack";const d=c},12880:(e,t,r)=>{r.d(t,{B:()=>l});var a=r(72791);function n(e,t){let r=(0,a.useRef)(!1);(0,a.useEffect)((()=>{r.current?e():r.current=!0}),t)}function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e=>e)).join(" ")}function o(e){let{text:t,remove:r,disabled:n,className:o}=e;return a.createElement("span",{className:i("rti--tag",o)},a.createElement("span",null,t),!n&&a.createElement("button",{type:"button",onClick:e=>{e.stopPropagation(),r(t)},"aria-label":"remove ".concat(t)},"\u2715"))}!function(e){let{insertAt:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}(".rti--container *{box-sizing:border-box;transition:all .2s ease}.rti--container{--rti-bg: #fff;--rti-border: #ccc;--rti-main: #3182ce;--rti-radius: .375rem;--rti-s: .5rem;--rti-tag: #edf2f7;--rti-tag-remove: #e53e3e;--rti-tag-padding: .15rem .25rem;align-items:center;background:var(--rti-bg);border:1px solid var(--rti-border);border-radius:var(--rti-radius);display:flex;flex-wrap:wrap;gap:var(--rti-s);line-height:1.4;padding:var(--rti-s)}.rti--container:focus-within{border-color:var(--rti-main);box-shadow:var(--rti-main) 0 0 0 1px}.rti--input{border:0;outline:0;font-size:inherit;line-height:inherit;width:50%}.rti--tag{align-items:center;background:var(--rti-tag);border-radius:var(--rti-radius);display:inline-flex;justify-content:center;padding:var(--rti-tag-padding)}.rti--tag button{background:none;border:0;border-radius:50%;cursor:pointer;line-height:inherit;padding:0 var(--rti-s)}.rti--tag button:hover{color:var(--rti-tag-remove)}\n");var s=["Enter"],l=e=>{let{name:t,placeHolder:r,value:l,onChange:c,onBlur:d,separators:u,disableBackspaceRemove:f,onExisting:g,onRemoved:v,disabled:b,isEditOnRemove:p,beforeAddValidate:m,onKeyUp:h,classNames:y}=e,[x,N]=(0,a.useState)(l||[]);n((()=>{c&&c(x)}),[x]),n((()=>{JSON.stringify(l)!==JSON.stringify(x)&&N(l)}),[l]);let k=e=>{N(x.filter((t=>t!==e))),v&&v(e)};return a.createElement("div",{"aria-labelledby":t,className:"rti--container"},x.map((e=>a.createElement(o,{key:e,className:null==y?void 0:y.tag,text:e,remove:k,disabled:b}))),a.createElement("input",{className:i("rti--input",null==y?void 0:y.input),type:"text",name:t,placeholder:r,onKeyDown:e=>{e.stopPropagation();let t=e.target.value;if(!t&&!f&&x.length&&"Backspace"===e.key&&(e.target.value=p?"".concat(x.at(-1)," "):"",N([...x.slice(0,-1)])),t&&(u||s).includes(e.key)){if(e.preventDefault(),m&&!m(t,x))return;if(x.includes(t))return void(g&&g(t));N([...x,t]),e.target.value=""}},onBlur:d,disabled:b,onKeyUp:h}))}}}]);
//# sourceMappingURL=1765.814c3d1a.chunk.js.map