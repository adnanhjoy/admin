"use strict";(self.webpackChunkmarcella=self.webpackChunkmarcella||[]).push([[690],{26573:(e,t,o)=>{o.d(t,{RJ:()=>i,d5:()=>a,qV:()=>l,vN:()=>s,wv:()=>r});const n=o(60470).apiSlice.injectEndpoints({tagTypes:["FlashSaleOffer","SingleFlashSaleOffer"],endpoints:e=>({getFlashSaleOffer:e.query({query:()=>({url:"/flashSale-offer",method:"GET"}),providesTags:["FlashSaleOffer"]}),getSingleFlashSaleOffer:e.query({query:e=>({url:"/flashSale-offer/".concat(e),method:"GET",headers:{Authorization:JSON.parse(localStorage.getItem("auth")).accessToken}}),providesTags:["SingleFlashSaleOffer"]}),addFlashSaleOffer:e.mutation({query:e=>({url:"/flashSale-offer",method:"POST",body:e}),invalidatesTags:["FlashSaleOffer"]}),updateSingleFlashSaleOffer:e.mutation({query:e=>{let{id:t,data:o}=e;return{url:"/flashSale-offer/".concat(t),method:"PUT",body:o}},invalidatesTags:["FlashSaleOffer"]}),deleteSingleFlashSaleOfferById:e.mutation({query:e=>({url:"/flashSale-offer/".concat(e),method:"DELETE",body:e}),invalidatesTags:["FlashSaleOffer","SingleFlashSaleOffer"]})})}),{useGetFlashSaleOfferQuery:i,useGetSingleFlashSaleOfferQuery:r,useAddFlashSaleOfferMutation:s,useUpdateSingleFlashSaleOfferMutation:a,useDeleteSingleFlashSaleOfferByIdMutation:l}=n},10690:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var n=o(78983),i=o(1645),r=o(26573),s=o(43034),a=o(79094),l=o(79041),c=o(24846),u=o(72791),d=o(92702),f=o(11087),p=o(9085),m=o(97605),h=o(51118),v=o(30160),S=o(80184);const y=e=>{let{offer:t,index:o}=e;const[i,s]=(0,u.useState)(!1),[a,{isLoading:y,isError:T,isSuccess:g,error:x}]=(0,r.d5)(),[b,{isLoading:O,isError:j,isSuccess:D,error:w}]=(0,r.qV)(),P=(e,o)=>{const n=null===t||void 0===t?void 0:t._id;a({id:n,data:{status:e,timeStamps:o}})};let E="";return(0,u.useEffect)((()=>{p.Am.dismiss(),j&&p.Am.error(null===w||void 0===w?void 0:w.data.message,{id:"dError"}),D&&p.Am.success("Delete Success",{id:"dSuccess"}),T&&p.Am.error(null===x||void 0===x?void 0:x.data.message,{id:"uError"}),g&&p.Am.success("Offer Updated Success",{id:"uSuccess"})}),[D,j,g,T]),(0,S.jsxs)(n.T6,{children:[(0,S.jsx)(n.is,{scope:"row",children:o+1}),(0,S.jsx)(n.NN,{children:null===t||void 0===t?void 0:t.name}),(0,S.jsx)(n.NN,{style:{backgroundColor:null===t||void 0===t?void 0:t.color},children:null===t||void 0===t?void 0:t.color}),(0,S.jsx)(n.NN,{children:null!==t&&void 0!==t&&t.timeStamps&&"active"===(null===t||void 0===t?void 0:t.status)?(0,S.jsx)(d.ZP,{date:null===t||void 0===t?void 0:t.timeStamps,renderer:e=>{let{days:t,hours:o,minutes:n,seconds:i,completed:r}=e;if(!r)return E=(0,S.jsxs)("span",{style:{backgroundColor:"#251B37",color:"#38E54D",letterSpacing:"1px",fontFamily:"digital-clock-font",fontWeight:"700"},className:" p-1 rounded",children:[t,":",o,":",n,":",i]})},children:E}):""}),"active"===(null===t||void 0===t?void 0:t.status)?(0,S.jsx)(n.NN,{children:(0,S.jsx)("span",{className:" bg-success text-white rounded px-2 py-1",children:null===t||void 0===t?void 0:t.status})}):(0,S.jsx)(n.NN,{children:(0,S.jsx)("span",{className:" bg-danger text-white rounded px-2 py-1",children:null===t||void 0===t?void 0:t.status})}),(0,S.jsxs)(n.NN,{children:["active"===(null===t||void 0===t?void 0:t.status)?(0,S.jsx)(n.If,{content:"De Active Offer",children:(0,S.jsx)(n.u5,{color:"info",variant:"outline",disabled:y,className:"ms-2",onClick:()=>P("in-active",null===t||void 0===t?void 0:t.timeStamps),style:{height:"30px",width:"32px",position:"relative"},children:(0,S.jsx)(c.Z,{icon:l._,style:{position:"absolute",top:"25%",left:"25%"}})})}):(0,S.jsx)(n.If,{content:"Active",children:(0,S.jsx)(n.u5,{color:"info",variant:"outline",disabled:y,className:"ms-2",onClick:()=>P("active",null===t||void 0===t?void 0:t.timeStamps),style:{height:"30px",width:"32px",position:"relative"},children:(0,S.jsx)(c.Z,{icon:l._,style:{position:"absolute",top:"25%",left:"25%"}})})}),(0,S.jsx)(f.rU,{to:"/flashSale-offer/edit/".concat(null===t||void 0===t?void 0:t._id),children:(0,S.jsx)(h.Z,{})}),(0,S.jsx)(m.Z,{setShowModal:s})]}),(0,S.jsx)(v.Z,{deleteThis:b,showModal:i,setShowModal:s,id:t._id,deleteLoading:O})]})},T=()=>{var e,t;const{data:o,isLoading:l,isError:c}=(0,r.RJ)();let u=null;var d;(l&&(u=(0,S.jsx)(s.Z,{})),!l&&c&&(u=(0,S.jsx)(a.Z,{children:"Something was wrong!"})),l||c||0!==(null===o||void 0===o||null===(e=o.result)||void 0===e?void 0:e.length)||(u=(0,S.jsx)(a.Z,{children:"No Flash Offer here"})),!l&&!c&&(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.length)>0)&&(u=null===o||void 0===o||null===(d=o.result)||void 0===d?void 0:d.map(((e,t)=>(0,S.jsx)(y,{offer:e,index:t},null===e||void 0===e?void 0:e._id))));return(0,S.jsxs)(n.xH,{children:[(0,S.jsx)(i.Z,{title:"All Offers",to:"/flashSale-offer/add"}),(0,S.jsx)(n.sl,{children:(0,S.jsxs)(n.Sx,{align:"middle",className:"mb-0 border",bordered:!0,hover:!0,responsive:!0,children:[(0,S.jsx)(n.V,{color:"light",children:(0,S.jsxs)(n.T6,{className:"text-start",children:[(0,S.jsx)(n.is,{scope:"col",style:{width:"60px"},children:"Sl. No."}),(0,S.jsx)(n.is,{scope:"col",style:{width:"300px",minWidth:"300px"},children:"Name"}),(0,S.jsx)(n.is,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"Color"}),(0,S.jsx)(n.is,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"timer"}),(0,S.jsx)(n.is,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"Status"}),(0,S.jsx)(n.is,{scope:"col",style:{width:"150px",minWidth:"150px"},children:"Actions"})]})}),(0,S.jsx)(n.NR,{children:u})]})})]})}},79041:(e,t,o)=>{o.d(t,{_:()=>n});const n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808' class='ci-primary'/>"]},92702:(e,t,o)=>{o.d(t,{ZP:()=>g});var n=o(72791),i=o(52007);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,o){return t&&s(e.prototype,t),o&&s(e,o),e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=c(e);if(t){var i=c(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return d(this,o)}}function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=String(e);if(0===t)return o;var n=o.match(/(.*?)([0-9]+)(.*)/),i=n?n[1]:"",r=n?n[3]:"",s=n?n[2]:o,a=s.length>=t?s:(p(Array(t)).map((function(){return"0"})).join("")+s).slice(-1*t);return"".concat(i).concat(a).concat(r)}var v={daysInHours:!1,zeroPadTime:2};function S(e,t){var o=e.days,n=e.hours,i=e.minutes,r=e.seconds,s=Object.assign(Object.assign({},v),t),a=s.daysInHours,l=s.zeroPadTime,c=s.zeroPadDays,u=void 0===c?l:c,d=Math.min(2,l),f=a?h(n+24*o,l):h(n,d);return{days:a?"":h(o,u),hours:f,minutes:h(i,d),seconds:h(r,d)}}var y=function(e){l(o,e);var t=f(o);function o(){var e;return r(this,o),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return a(o,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),o}(n.Component);y.propTypes={count:i.number,children:i.element,onComplete:i.func};var T=function(e){l(o,e);var t=f(o);function o(e){var i;if(r(this,o),(i=t.call(this,e)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,n.createRef)(),i.tick=function(){var e=i.calcTimeDelta(),t=e.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(e,void 0,t)},i.start=function(){if(!i.isStarted()){var e=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=e?i.calcOffsetStartTimestamp()-e:0;var t=i.calcTimeDelta();i.setTimeDeltaState(t,"STARTED",i.props.onStart),i.props.controlled||t.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},e.date){var s=i.calcTimeDelta();i.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return a(o,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,o=e.now,n=e.precision,i=e.controlled,r=e.overtime;return function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.now,i=void 0===n?Date.now:n,r=o.precision,s=void 0===r?0:r,a=o.controlled,l=o.offsetTime,c=void 0===l?0:l,u=o.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,a||(t+=c);var d=a?t:t-i(),f=Math.min(20,Math.max(0,s)),p=Math.round(1e3*parseFloat(((u?d:Math.max(0,d))/1e3).toFixed(f))),m=Math.abs(p)/1e3;return{total:p,days:Math.floor(m/86400),hours:Math.floor(m/3600%24),minutes:Math.floor(m/60%60),seconds:Math.floor(m%60),milliseconds:Number((m%1*1e3).toFixed()),completed:p<=0}}(t,{now:o,precision:n,controlled:i,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,o){var n=this;if(this.mounted){var i=e.completed&&!this.state.timeDelta.completed,r=e.completed&&"STARTED"===t;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(o){var i=t||o.status;return e.completed&&!n.props.overtime?i="COMPLETED":t||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:e,status:i}}),(function(){o&&o(n.state.timeDelta),n.props.onComplete&&(i||r)&&n.props.onComplete(e,r)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,o=e.zeroPadTime,n=e.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:S(i,{daysInHours:t,zeroPadTime:o,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,o=e.children,i=e.onComplete;return(0,n.createElement)(y,{ref:this.legacyCountdownRef,count:t,onComplete:i},o)}var r=this.props,s=r.className,a=r.overtime,l=r.children,c=r.renderer,u=this.getRenderProps();if(c)return c(u);if(l&&this.state.timeDelta.completed&&!a)return(0,n.cloneElement)(l,{countdown:u});var d=u.formatted,f=d.days,p=d.hours,m=d.minutes,h=d.seconds;return(0,n.createElement)("span",{className:s},u.total<0?"-":"",f,f?":":"",p,":",m,":",h)}}]),o}(n.Component);T.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),T.propTypes={date:(0,i.oneOfType)([(0,i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func};const g=T}}]);
//# sourceMappingURL=690.4a48d73c.chunk.js.map