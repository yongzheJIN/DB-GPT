"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{27496:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(87462),r=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},l=n(84089),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:a}))})},1375:function(e,t,n){async function o(e,t){let n;let o=e.getReader();for(;!(n=await o.read()).done;)t(n.value)}function r(){return{data:"",event:"",id:"",retry:void 0}}n.d(t,{a:function(){return l},L:function(){return c}});var a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let l="text/event-stream",i="last-event-id";function c(e,t){var{signal:n,headers:c,onopen:d,onmessage:u,onclose:f,onerror:p,openWhenHidden:b,fetch:g}=t,m=a(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise((t,a)=>{let h;let y=Object.assign({},c);function v(){h.abort(),document.hidden||C()}y.accept||(y.accept=l),b||document.addEventListener("visibilitychange",v);let $=1e3,O=0;function E(){document.removeEventListener("visibilitychange",v),window.clearTimeout(O),h.abort()}null==n||n.addEventListener("abort",()=>{E(),t()});let w=null!=g?g:window.fetch,x=null!=d?d:s;async function C(){var n,l;h=new AbortController;try{let n,a,c,s;let d=await w(e,Object.assign(Object.assign({},m),{headers:y,signal:h.signal}));await x(d),await o(d.body,(l=function(e,t,n){let o=r(),a=new TextDecoder;return function(l,i){if(0===l.length)null==n||n(o),o=r();else if(i>0){let n=a.decode(l.subarray(0,i)),r=i+(32===l[i+1]?2:1),c=a.decode(l.subarray(r));switch(n){case"data":o.data=o.data?o.data+"\n"+c:c;break;case"event":o.event=c;break;case"id":e(o.id=c);break;case"retry":let s=parseInt(c,10);isNaN(s)||t(o.retry=s)}}}}(e=>{e?y[i]=e:delete y[i]},e=>{$=e},u),s=!1,function(e){void 0===n?(n=e,a=0,c=-1):n=function(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(n,e);let t=n.length,o=0;for(;a<t;){s&&(10===n[a]&&(o=++a),s=!1);let e=-1;for(;a<t&&-1===e;++a)switch(n[a]){case 58:-1===c&&(c=a-o);break;case 13:s=!0;case 10:e=a}if(-1===e)break;l(n.subarray(o,e),c),o=a,c=-1}o===t?n=void 0:0!==o&&(n=n.subarray(o),a-=o)})),null==f||f(),E(),t()}catch(e){if(!h.signal.aborted)try{let t=null!==(n=null==p?void 0:p(e))&&void 0!==n?n:$;window.clearTimeout(O),O=window.setTimeout(C,t)}catch(e){E(),a(e)}}}C()})}function s(e){let t=e.headers.get("content-type");if(!(null==t?void 0:t.startsWith(l)))throw Error(`Expected content-type to be ${l}, Actual: ${t}`)}},58299:function(e,t,n){n.d(t,{Z:function(){return G}});var o=n(87462),r=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},l=n(84089),i=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:a}))}),c=n(94184),s=n.n(c),d=n(82225),u=n(98423),f=n(40411),p=n(53124),b=n(83062),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},m=r.forwardRef(function(e,t){return r.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:g}))}),h=(0,r.memo)(e=>{let{icon:t,description:n,prefixCls:o,className:a}=e,l=r.createElement("div",{className:`${o}-icon`},r.createElement(m,null));return r.createElement("div",{onClick:e.onClick,onFocus:e.onFocus,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,className:s()(a,`${o}-content`)},t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${o}-icon`},t),n&&r.createElement("div",{className:`${o}-description`},n)):l)});let y=r.createContext(void 0),{Provider:v}=y;var $=n(23183),O=n(14747),E=n(16932),w=n(93590),x=n(67968),C=n(45503),S=e=>0===e?0:e-Math.sqrt(Math.pow(e,2)/2);let k=e=>{let{componentCls:t,floatButtonSize:n,motionDurationSlow:o,motionEaseInOutCirc:r}=e,a=`${t}-group`,l=new $.E4("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${n}px, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),i=new $.E4("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${n}px, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${a}-wrap`]:Object.assign({},(0,w.R)(`${a}-wrap`,l,i,o,!0))},{[`${a}-wrap`]:{[`
          &${a}-wrap-enter,
          &${a}-wrap-appear
        `]:{opacity:0,animationTimingFunction:r},[`&${a}-wrap-leave`]:{animationTimingFunction:r}}}]},j=e=>{let{antCls:t,componentCls:n,floatButtonSize:o,margin:r,borderRadiusLG:a,borderRadiusSM:l,badgeOffset:i,floatButtonBodyPadding:c}=e,s=`${n}-group`;return{[s]:Object.assign(Object.assign({},(0,O.Wf)(e)),{zIndex:99,display:"block",border:"none",position:"fixed",width:o,height:"auto",boxShadow:"none",minHeight:o,insetInlineEnd:e.floatButtonInsetInlineEnd,insetBlockEnd:e.floatButtonInsetBlockEnd,borderRadius:a,[`${s}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:r},[`&${s}-rtl`]:{direction:"rtl"},[n]:{position:"static"}}),[`${s}-circle`]:{[`${n}-circle:not(:last-child)`]:{marginBottom:e.margin,[`${n}-body`]:{width:o,height:o,borderRadius:"50%"}}},[`${s}-square`]:{[`${n}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-badge`]:{[`${t}-badge-count`]:{top:-(c+i),insetInlineEnd:-(c+i)}}},[`${s}-wrap`]:{display:"block",borderRadius:a,boxShadow:e.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:c,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${n}-body`]:{width:e.floatButtonBodySize,height:e.floatButtonBodySize}}}},[`${s}-circle-shadow`]:{boxShadow:"none"},[`${s}-square-shadow`]:{boxShadow:e.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",padding:c,[`${n}-body`]:{width:e.floatButtonBodySize,height:e.floatButtonBodySize,borderRadius:l}}}}},B=e=>{let{antCls:t,componentCls:n,floatButtonBodyPadding:o,floatButtonIconSize:r,floatButtonSize:a,borderRadiusLG:l,badgeOffset:i,dotOffsetInSquare:c,dotOffsetInCircle:s}=e;return{[n]:Object.assign(Object.assign({},(0,O.Wf)(e)),{border:"none",position:"fixed",cursor:"pointer",zIndex:99,width:a,height:a,insetInlineEnd:e.floatButtonInsetInlineEnd,insetBlockEnd:e.floatButtonInsetBlockEnd,boxShadow:e.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${t}-badge`]:{width:"100%",height:"100%",[`${t}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:-i,insetInlineEnd:-i}},[`${n}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${e.motionDurationMid}`,[`${n}-content`]:{overflow:"hidden",textAlign:"center",minHeight:a,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${o/2}px ${o}px`,[`${n}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${n}-rtl`]:{direction:"rtl"},[`${n}-circle`]:{height:a,borderRadius:"50%",[`${t}-badge`]:{[`${t}-badge-dot`]:{top:s,insetInlineEnd:s}},[`${n}-body`]:{borderRadius:"50%"}},[`${n}-square`]:{height:"auto",minHeight:a,borderRadius:l,[`${t}-badge`]:{[`${t}-badge-dot`]:{top:c,insetInlineEnd:c}},[`${n}-body`]:{height:"auto",borderRadius:l}},[`${n}-default`]:{backgroundColor:e.floatButtonBackgroundColor,transition:`background-color ${e.motionDurationMid}`,[`${n}-body`]:{backgroundColor:e.floatButtonBackgroundColor,transition:`background-color ${e.motionDurationMid}`,"&:hover":{backgroundColor:e.colorFillContent},[`${n}-content`]:{[`${n}-icon`]:{color:e.colorText},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:`${e.fontSizeLG}px`,color:e.colorText,fontSize:e.fontSizeSM}}}},[`${n}-primary`]:{backgroundColor:e.colorPrimary,[`${n}-body`]:{backgroundColor:e.colorPrimary,transition:`background-color ${e.motionDurationMid}`,"&:hover":{backgroundColor:e.colorPrimaryHover},[`${n}-content`]:{[`${n}-icon`]:{color:e.colorTextLightSolid},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:`${e.fontSizeLG}px`,color:e.colorTextLightSolid,fontSize:e.fontSizeSM}}}}}};var I=(0,x.Z)("FloatButton",e=>{let{colorTextLightSolid:t,colorBgElevated:n,controlHeightLG:o,marginXXL:r,marginLG:a,fontSize:l,fontSizeIcon:i,controlItemBgHover:c,paddingXXS:s,borderRadiusLG:d}=e,u=(0,C.TS)(e,{floatButtonBackgroundColor:n,floatButtonColor:t,floatButtonHoverBackgroundColor:c,floatButtonFontSize:l,floatButtonIconSize:1.5*i,floatButtonSize:o,floatButtonInsetBlockEnd:r,floatButtonInsetInlineEnd:a,floatButtonBodySize:o-2*s,floatButtonBodyPadding:s,badgeOffset:1.5*s,dotOffsetInCircle:S(o/2),dotOffsetInSquare:S(d)});return[j(u),B(u),(0,E.J$)(e),k(u)]}),P=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let z="float-btn",N=r.forwardRef((e,t)=>{let{prefixCls:n,className:o,rootClassName:a,type:l="default",shape:i="circle",icon:c,description:d,tooltip:g,badge:m={}}=e,v=P(e,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:$,direction:O}=(0,r.useContext)(p.E_),E=(0,r.useContext)(y),w=$(z,n),[x,C]=I(w),S=s()(C,w,o,a,`${w}-${l}`,`${w}-${E||i}`,{[`${w}-rtl`]:"rtl"===O}),k=(0,r.useMemo)(()=>(0,u.Z)(m,["title","children","status","text"]),[m]),j=(0,r.useMemo)(()=>({prefixCls:w,description:d,icon:c,type:l}),[w,d,c,l]),B=r.createElement("div",{className:`${w}-body`},r.createElement(h,Object.assign({},j)));return"badge"in e&&(B=r.createElement(f.Z,Object.assign({},k),B)),"tooltip"in e&&(B=r.createElement(b.Z,{title:g,placement:"rtl"===O?"right":"left"},B)),x(e.href?r.createElement("a",Object.assign({ref:t},v,{className:S}),B):r.createElement("button",Object.assign({ref:t},v,{className:S,type:"button"}),B))});var M=n(66367),T=n(58375),R=n(74902),Z=n(75164),L=function(e){let t;let n=n=>()=>{t=null,e.apply(void 0,(0,R.Z)(n))},o=function(){if(null==t){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];t=(0,Z.Z)(n(o))}};return o.cancel=()=>{Z.Z.cancel(t),t=null},o},H=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},F=(0,r.memo)(e=>{let{prefixCls:t,className:n,type:o="default",shape:a="circle",visibilityHeight:l=400,icon:c=r.createElement(i,null),target:u,onClick:f,duration:b=450}=e,g=H(e,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[m,h]=(0,r.useState)(0===l),v=(0,r.useRef)(null),$=()=>v.current&&v.current.ownerDocument?v.current.ownerDocument:window,O=L(e=>{let t=(0,M.Z)(e.target,!0);h(t>=l)});(0,r.useEffect)(()=>{let e=u||$,t=e();return O({target:t}),null==t||t.addEventListener("scroll",O),()=>{O.cancel(),null==t||t.removeEventListener("scroll",O)}},[u]);let E=e=>{(0,T.Z)(0,{getContainer:u||$,duration:b}),null==f||f(e)},{getPrefixCls:w}=(0,r.useContext)(p.E_),x=w(z,t),C=w(),[S]=I(x),k=(0,r.useContext)(y),j=Object.assign({prefixCls:x,icon:c,type:o,shape:k||a},g);return S(r.createElement(d.ZP,{visible:m,motionName:`${C}-fade`},e=>{let{className:t}=e;return r.createElement(N,Object.assign({ref:v},j,{onClick:E,className:s()(n,t)}))}))}),D=n(97937),_=n(21770),W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},A=(0,r.memo)(e=>{let{prefixCls:t,className:n,style:o,shape:a="circle",type:l="default",icon:i=r.createElement(m,null),closeIcon:c=r.createElement(D.Z,null),description:u,trigger:f,children:b,onOpenChange:g,open:h}=e,y=W(e,["prefixCls","className","style","shape","type","icon","closeIcon","description","trigger","children","onOpenChange","open"]),{direction:$,getPrefixCls:O}=(0,r.useContext)(p.E_),E=O(z,t),[w,x]=I(E),C=`${E}-group`,S=s()(C,x,n,{[`${C}-rtl`]:"rtl"===$,[`${C}-${a}`]:a,[`${C}-${a}-shadow`]:!f}),k=s()(x,`${C}-wrap`),[j,B]=(0,_.Z)(!1,{value:h}),P=(0,r.useRef)(null),M=(0,r.useRef)(null),T=(0,r.useMemo)(()=>"hover"===f?{onMouseEnter(){B(!0),null==g||g(!0)},onMouseLeave(){B(!1),null==g||g(!1)}}:{},[f]),R=()=>{B(e=>(null==g||g(!e),!e))},Z=(0,r.useCallback)(e=>{var t,n;if(null===(t=P.current)||void 0===t?void 0:t.contains(e.target)){(null===(n=M.current)||void 0===n?void 0:n.contains(e.target))&&R();return}B(!1),null==g||g(!1)},[f]);return(0,r.useEffect)(()=>{if("click"===f)return document.addEventListener("click",Z),()=>{document.removeEventListener("click",Z)}},[f]),w(r.createElement(v,{value:a},r.createElement("div",Object.assign({ref:P,className:S,style:o},T),f&&["click","hover"].includes(f)?r.createElement(r.Fragment,null,r.createElement(d.ZP,{visible:j,motionName:`${C}-wrap`},e=>{let{className:t}=e;return r.createElement("div",{className:s()(t,k)},b)}),r.createElement(N,Object.assign({ref:M,type:l,shape:a,icon:j?c:i,description:u,"aria-label":e["aria-label"]},y))):b)))}),q=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let V=e=>{var{backTop:t}=e,n=q(e,["backTop"]);return t?r.createElement(F,Object.assign({},n,{visibilityHeight:0})):r.createElement(N,Object.assign({},n))};N.BackTop=F,N.Group=A,N._InternalPanelDoNotUseOrYouWillBeFired=e=>{var{className:t,items:n}=e,o=q(e,["className","items"]);let{prefixCls:a}=o,{getPrefixCls:l}=r.useContext(p.E_),i=l(z,a),c=`${i}-pure`;return n?r.createElement(A,Object.assign({className:s()(t,c)},o),n.map((e,t)=>r.createElement(V,Object.assign({key:t},e)))):r.createElement(V,Object.assign({className:s()(t,c)},o))};var G=N},66309:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(67294),r=n(97937),a=n(94184),l=n.n(a),i=n(98787),c=n(69760),s=n(45353),d=n(53124),u=n(14747),f=n(45503),p=n(67968);let b=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r}=e,a=o-n;return{[r]:Object.assign(Object.assign({},(0,u.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:t-n,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},g=e=>{let{lineWidth:t,fontSizeIcon:n}=e,o=e.fontSizeSM,r=`${e.lineHeightSM*o}px`,a=(0,f.TS)(e,{tagFontSize:o,tagLineHeight:r,tagIconSize:n-2*t,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return a},m=e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText});var h=(0,p.Z)("Tag",e=>{let t=g(e);return b(t)},m),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},v=n(98719);let $=e=>(0,v.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var O=(0,p.b)(["Tag","preset"],e=>{let t=g(e);return $(t)},m);let E=(e,t,n)=>{let o=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{[`${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var w=(0,p.b)(["Tag","status"],e=>{let t=g(e);return[E(t,"success","Success"),E(t,"processing","Info"),E(t,"error","Error"),E(t,"warning","Warning")]},m),x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let C=o.forwardRef((e,t)=>{let{prefixCls:n,className:a,rootClassName:u,style:f,children:p,icon:b,color:g,onClose:m,closeIcon:y,closable:v,bordered:$=!0}=e,E=x(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:C,direction:S,tag:k}=o.useContext(d.E_),[j,B]=o.useState(!0);o.useEffect(()=>{"visible"in E&&B(E.visible)},[E.visible]);let I=(0,i.o2)(g),P=(0,i.yT)(g),z=I||P,N=Object.assign(Object.assign({backgroundColor:g&&!z?g:void 0},null==k?void 0:k.style),f),M=C("tag",n),[T,R]=h(M),Z=l()(M,null==k?void 0:k.className,{[`${M}-${g}`]:z,[`${M}-has-color`]:g&&!z,[`${M}-hidden`]:!j,[`${M}-rtl`]:"rtl"===S,[`${M}-borderless`]:!$},a,u,R),L=e=>{e.stopPropagation(),null==m||m(e),e.defaultPrevented||B(!1)},[,H]=(0,c.Z)(v,y,e=>null===e?o.createElement(r.Z,{className:`${M}-close-icon`,onClick:L}):o.createElement("span",{className:`${M}-close-icon`,onClick:L},e),null,!1),F="function"==typeof E.onClick||p&&"a"===p.type,D=b||null,_=D?o.createElement(o.Fragment,null,D,p&&o.createElement("span",null,p)):p,W=o.createElement("span",Object.assign({},E,{ref:t,className:Z,style:N}),_,H,I&&o.createElement(O,{key:"preset",prefixCls:M}),P&&o.createElement(w,{key:"status",prefixCls:M}));return T(F?o.createElement(s.Z,{component:"Tag"},W):W)});C.CheckableTag=e=>{let{prefixCls:t,className:n,checked:r,onChange:a,onClick:i}=e,c=y(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:s}=o.useContext(d.E_),u=s("tag",t),[f,p]=h(u),b=l()(u,`${u}-checkable`,{[`${u}-checkable-checked`]:r},n,p);return f(o.createElement("span",Object.assign({},c,{className:b,onClick:e=>{null==a||a(!r),null==i||i(e)}})))};var S=C}}]);