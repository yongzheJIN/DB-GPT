"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{81643:function(e,n,t){t.d(n,{Z:function(){return r}});let r=e=>e?"function"==typeof e?e():e:null},84567:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(94184),a=t.n(r),l=t(50132),o=t(67294),i=t(53124),c=t(98866),s=t(65223);let d=o.createContext(null);var p=t(63185),u=t(45353),m=t(17415),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let v=o.forwardRef((e,n)=>{var t;let{prefixCls:r,className:v,rootClassName:b,children:g,indeterminate:x=!1,style:y,onMouseEnter:$,onMouseLeave:h,skipGroup:C=!1,disabled:O}=e,E=f(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:k,direction:Z,checkbox:I}=o.useContext(i.E_),w=o.useContext(d),{isFormItemInput:N}=o.useContext(s.aM),P=o.useContext(c.Z),j=null!==(t=(null==w?void 0:w.disabled)||O)&&void 0!==t?t:P,S=o.useRef(E.value);o.useEffect(()=>{null==w||w.registerValue(E.value)},[]),o.useEffect(()=>{if(!C)return E.value!==S.current&&(null==w||w.cancelValue(S.current),null==w||w.registerValue(E.value),S.current=E.value),()=>null==w?void 0:w.cancelValue(E.value)},[E.value]);let R=k("checkbox",r),[M,A]=(0,p.ZP)(R),_=Object.assign({},E);w&&!C&&(_.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),w.toggleOption&&w.toggleOption({label:g,value:E.value})},_.name=w.name,_.checked=w.value.includes(E.value));let B=a()(`${R}-wrapper`,{[`${R}-rtl`]:"rtl"===Z,[`${R}-wrapper-checked`]:_.checked,[`${R}-wrapper-disabled`]:j,[`${R}-wrapper-in-form-item`]:N},null==I?void 0:I.className,v,b,A),K=a()({[`${R}-indeterminate`]:x},m.A,A);return M(o.createElement(u.Z,{component:"Checkbox",disabled:j},o.createElement("label",{className:B,style:Object.assign(Object.assign({},null==I?void 0:I.style),y),onMouseEnter:$,onMouseLeave:h},o.createElement(l.Z,Object.assign({"aria-checked":x?"mixed":void 0},_,{prefixCls:R,className:K,disabled:j,ref:n})),void 0!==g&&o.createElement("span",null,g))))});var b=t(74902),g=t(98423),x=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let y=o.forwardRef((e,n)=>{let{defaultValue:t,children:r,options:l=[],prefixCls:c,className:s,rootClassName:u,style:m,onChange:f}=e,y=x(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:$,direction:h}=o.useContext(i.E_),[C,O]=o.useState(y.value||t||[]),[E,k]=o.useState([]);o.useEffect(()=>{"value"in y&&O(y.value||[])},[y.value]);let Z=o.useMemo(()=>l.map(e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e),[l]),I=$("checkbox",c),w=`${I}-group`,[N,P]=(0,p.ZP)(I),j=(0,g.Z)(y,["value","disabled"]),S=l.length?Z.map(e=>o.createElement(v,{prefixCls:I,key:e.value.toString(),disabled:"disabled"in e?e.disabled:y.disabled,value:e.value,checked:C.includes(e.value),onChange:e.onChange,className:`${w}-item`,style:e.style,title:e.title},e.label)):r,R={toggleOption:e=>{let n=C.indexOf(e.value),t=(0,b.Z)(C);-1===n?t.push(e.value):t.splice(n,1),"value"in y||O(t),null==f||f(t.filter(e=>E.includes(e)).sort((e,n)=>{let t=Z.findIndex(n=>n.value===e),r=Z.findIndex(e=>e.value===n);return t-r}))},value:C,disabled:y.disabled,name:y.name,registerValue:e=>{k(n=>[].concat((0,b.Z)(n),[e]))},cancelValue:e=>{k(n=>n.filter(n=>n!==e))}},M=a()(w,{[`${w}-rtl`]:"rtl"===h},s,u,P);return N(o.createElement("div",Object.assign({className:M,style:m},j,{ref:n}),o.createElement(d.Provider,{value:R},S)))});var $=o.memo(y);v.Group=$,v.__ANT_CHECKBOX=!0;var h=v},47221:function(e,n,t){t.d(n,{Z:function(){return W}});var r=t(18073),a=t(94184),l=t.n(a),o=t(97685),i=t(74902),c=t(71002),s=t(21770),d=t(80334),p=t(67294),u=t(87462),m=t(45987),f=t(50344),v=t(4942),b=t(82225),g=t(15105),x=p.forwardRef(function(e,n){var t,r=e.prefixCls,a=e.forceRender,i=e.className,c=e.style,s=e.children,d=e.isActive,u=e.role,m=p.useState(d||a),f=(0,o.Z)(m,2),b=f[0],g=f[1];return(p.useEffect(function(){(a||d)&&g(!0)},[a,d]),b)?p.createElement("div",{ref:n,className:l()("".concat(r,"-content"),(t={},(0,v.Z)(t,"".concat(r,"-content-active"),d),(0,v.Z)(t,"".concat(r,"-content-inactive"),!d),t),i),style:c,role:u},p.createElement("div",{className:"".concat(r,"-content-box")},s)):null});x.displayName="PanelContent";var y=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],$=p.forwardRef(function(e,n){var t,r,a=e.showArrow,o=void 0===a||a,i=e.headerClass,c=e.isActive,s=e.onItemClick,d=e.forceRender,f=e.className,$=e.prefixCls,h=e.collapsible,C=e.accordion,O=e.panelKey,E=e.extra,k=e.header,Z=e.expandIcon,I=e.openMotion,w=e.destroyInactivePanel,N=e.children,P=(0,m.Z)(e,y),j="disabled"===h,S="header"===h,R="icon"===h,M=null!=E&&"boolean"!=typeof E,A=function(){null==s||s(O)},_="function"==typeof Z?Z(e):p.createElement("i",{className:"arrow"});_&&(_=p.createElement("div",{className:"".concat($,"-expand-icon"),onClick:["header","icon"].includes(h)?A:void 0},_));var B=l()((t={},(0,v.Z)(t,"".concat($,"-item"),!0),(0,v.Z)(t,"".concat($,"-item-active"),c),(0,v.Z)(t,"".concat($,"-item-disabled"),j),t),f),K={className:l()(i,(r={},(0,v.Z)(r,"".concat($,"-header"),!0),(0,v.Z)(r,"".concat($,"-header-collapsible-only"),S),(0,v.Z)(r,"".concat($,"-icon-collapsible-only"),R),r)),"aria-expanded":c,"aria-disabled":j,onKeyDown:function(e){("Enter"===e.key||e.keyCode===g.Z.ENTER||e.which===g.Z.ENTER)&&A()}};return S||R||(K.onClick=A,K.role=C?"tab":"button",K.tabIndex=j?-1:0),p.createElement("div",(0,u.Z)({},P,{ref:n,className:B}),p.createElement("div",K,o&&_,p.createElement("span",{className:"".concat($,"-header-text"),onClick:"header"===h?A:void 0},k),M&&p.createElement("div",{className:"".concat($,"-extra")},E)),p.createElement(b.ZP,(0,u.Z)({visible:c,leavedClassName:"".concat($,"-content-hidden")},I,{forceRender:d,removeOnLeave:w}),function(e,n){var t=e.className,r=e.style;return p.createElement(x,{ref:n,prefixCls:$,className:t,style:r,isActive:c,forceRender:d,role:C?"tabpanel":void 0},N)}))}),h=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],C=function(e,n){var t=n.prefixCls,r=n.accordion,a=n.collapsible,l=n.destroyInactivePanel,o=n.onItemClick,i=n.activeKey,c=n.openMotion,s=n.expandIcon;return e.map(function(e,n){var d=e.children,f=e.label,v=e.key,b=e.collapsible,g=e.onItemClick,x=e.destroyInactivePanel,y=(0,m.Z)(e,h),C=String(null!=v?v:n),O=null!=b?b:a,E=!1;return E=r?i[0]===C:i.indexOf(C)>-1,p.createElement($,(0,u.Z)({},y,{prefixCls:t,key:C,panelKey:C,isActive:E,accordion:r,openMotion:c,expandIcon:s,header:f,collapsible:O,onItemClick:function(e){"disabled"!==O&&(o(e),null==g||g(e))},destroyInactivePanel:null!=x?x:l}),d)})},O=function(e,n,t){if(!e)return null;var r=t.prefixCls,a=t.accordion,l=t.collapsible,o=t.destroyInactivePanel,i=t.onItemClick,c=t.activeKey,s=t.openMotion,d=t.expandIcon,u=e.key||String(n),m=e.props,f=m.header,v=m.headerClass,b=m.destroyInactivePanel,g=m.collapsible,x=m.onItemClick,y=!1;y=a?c[0]===u:c.indexOf(u)>-1;var $=null!=g?g:l,h={key:u,panelKey:u,header:f,headerClass:v,isActive:y,prefixCls:r,destroyInactivePanel:null!=b?b:o,openMotion:s,accordion:a,children:e.props.children,onItemClick:function(e){"disabled"!==$&&(i(e),null==x||x(e))},expandIcon:d,collapsible:$};return"string"==typeof e.type?e:(Object.keys(h).forEach(function(e){void 0===h[e]&&delete h[e]}),p.cloneElement(e,h))};function E(e){var n=e;if(!Array.isArray(n)){var t=(0,c.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map(function(e){return String(e)})}var k=Object.assign(p.forwardRef(function(e,n){var t,r=e.prefixCls,a=void 0===r?"rc-collapse":r,c=e.destroyInactivePanel,u=e.style,m=e.accordion,v=e.className,b=e.children,g=e.collapsible,x=e.openMotion,y=e.expandIcon,$=e.activeKey,h=e.defaultActiveKey,k=e.onChange,Z=e.items,I=l()(a,v),w=(0,s.Z)([],{value:$,onChange:function(e){return null==k?void 0:k(e)},defaultValue:h,postState:E}),N=(0,o.Z)(w,2),P=N[0],j=N[1];(0,d.ZP)(!b,"`children` will be removed in next major version. Please use `items` instead.");var S=(t={prefixCls:a,accordion:m,openMotion:x,expandIcon:y,collapsible:g,destroyInactivePanel:void 0!==c&&c,onItemClick:function(e){return j(function(){return m?P[0]===e?[]:[e]:P.indexOf(e)>-1?P.filter(function(n){return n!==e}):[].concat((0,i.Z)(P),[e])})},activeKey:P},Array.isArray(Z)?C(Z,t):(0,f.Z)(b).map(function(e,n){return O(e,n,t)}));return p.createElement("div",{ref:n,className:I,style:u,role:m?"tablist":void 0},S)}),{Panel:$});k.Panel;var Z=t(98423),I=t(33603),w=t(96159),N=t(53124),P=t(98675);let j=p.forwardRef((e,n)=>{let{getPrefixCls:t}=p.useContext(N.E_),{prefixCls:r,className:a,showArrow:o=!0}=e,i=t("collapse",r),c=l()({[`${i}-no-arrow`]:!o},a);return p.createElement(k.Panel,Object.assign({ref:n},e,{prefixCls:i,className:c}))});var S=t(14747),R=t(33507),M=t(67968),A=t(45503);let _=e=>{let{componentCls:n,collapseContentBg:t,padding:r,collapseContentPaddingHorizontal:a,collapseHeaderBg:l,collapseHeaderPadding:o,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:c,collapsePanelBorderRadius:s,lineWidth:d,lineType:p,colorBorder:u,colorText:m,colorTextHeading:f,colorTextDisabled:v,fontSize:b,fontSizeLG:g,lineHeight:x,marginSM:y,paddingSM:$,paddingLG:h,paddingXS:C,motionDurationSlow:O,fontSizeIcon:E}=e,k=`${d}px ${p} ${u}`;return{[n]:Object.assign(Object.assign({},(0,S.Wf)(e)),{backgroundColor:l,border:k,borderBottom:0,borderRadius:`${s}px`,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:k,"&:last-child":{[`
            &,
            & > ${n}-header`]:{borderRadius:`0 0 ${s}px ${s}px`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:o,paddingInlineStart:$,color:f,lineHeight:x,cursor:"pointer",transition:`all ${O}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:b*x,display:"flex",alignItems:"center",paddingInlineEnd:y,marginInlineStart:r-$},[`${n}-arrow`]:Object.assign(Object.assign({},(0,S.Ro)()),{fontSize:E,svg:{transition:`transform ${O}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-header-collapsible-only`]:{cursor:"default",[`${n}-header-text`]:{flex:"none",cursor:"pointer"}},[`${n}-icon-collapsible-only`]:{cursor:"default",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:m,backgroundColor:t,borderTop:k,[`& > ${n}-content-box`]:{padding:`${r}px ${a}px`},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:i,paddingInlineStart:C,[`> ${n}-expand-icon`]:{marginInlineStart:$-C}},[`> ${n}-content > ${n}-content-box`]:{padding:$}}},"&-large":{[`> ${n}-item`]:{fontSize:g,[`> ${n}-header`]:{padding:c,paddingInlineStart:r,[`> ${n}-expand-icon`]:{height:g*x,marginInlineStart:h-r}},[`> ${n}-content > ${n}-content-box`]:{padding:h}}},[`${n}-item:last-child`]:{[`> ${n}-content`]:{borderRadius:`0 0 ${s}px ${s}px`}},[`& ${n}-item-disabled > ${n}-header`]:{[`
          &,
          & > .arrow
        `]:{color:v,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:y}}}}})}},B=e=>{let{componentCls:n}=e,t=`> ${n}-item > ${n}-header ${n}-arrow svg`;return{[`${n}-rtl`]:{[t]:{transform:"rotate(180deg)"}}}},K=e=>{let{componentCls:n,collapseHeaderBg:t,paddingXXS:r,colorBorder:a}=e;return{[`${n}-borderless`]:{backgroundColor:t,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:r}}}},T=e=>{let{componentCls:n,paddingSM:t}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:t}}}}}};var z=(0,M.Z)("Collapse",e=>{let n=(0,A.TS)(e,{collapseContentBg:e.colorBgContainer,collapseHeaderBg:e.colorFillAlter,collapseHeaderPadding:`${e.paddingSM}px ${e.padding}px`,collapseHeaderPaddingSM:`${e.paddingXS}px ${e.paddingSM}px`,collapseHeaderPaddingLG:`${e.padding}px ${e.paddingLG}px`,collapsePanelBorderRadius:e.borderRadiusLG,collapseContentPaddingHorizontal:16});return[_(n),K(n),T(n),B(n),(0,R.Z)(n)]});let L=p.forwardRef((e,n)=>{let{getPrefixCls:t,direction:a,collapse:o}=p.useContext(N.E_),{prefixCls:i,className:c,rootClassName:s,style:d,bordered:u=!0,ghost:m,size:v,expandIconPosition:b="start",children:g,expandIcon:x}=e,y=(0,P.Z)(e=>{var n;return null!==(n=null!=v?v:e)&&void 0!==n?n:"middle"}),$=t("collapse",i),h=t(),[C,O]=z($),E=p.useMemo(()=>"left"===b?"start":"right"===b?"end":b,[b]),j=l()(`${$}-icon-position-${E}`,{[`${$}-borderless`]:!u,[`${$}-rtl`]:"rtl"===a,[`${$}-ghost`]:!!m,[`${$}-${y}`]:"middle"!==y},null==o?void 0:o.className,c,s,O),S=Object.assign(Object.assign({},(0,I.Z)(h)),{motionAppear:!1,leavedClassName:`${$}-content-hidden`}),R=p.useMemo(()=>g?(0,f.Z)(g).map((e,n)=>{var t,r;if(null===(t=e.props)||void 0===t?void 0:t.disabled){let t=null!==(r=e.key)&&void 0!==r?r:String(n),{disabled:a,collapsible:l}=e.props,o=Object.assign(Object.assign({},(0,Z.Z)(e.props,["disabled"])),{key:t,collapsible:null!=l?l:a?"disabled":void 0});return(0,w.Tm)(e,o)}return e}):null,[g]);return C(p.createElement(k,Object.assign({ref:n,openMotion:S},(0,Z.Z)(e,["rootClassName"]),{expandIcon:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=x?x(e):p.createElement(r.Z,{rotate:e.isActive?90:void 0});return(0,w.Tm)(n,()=>({className:l()(n.props.className,`${$}-arrow`)}))},prefixCls:$,className:j,style:Object.assign(Object.assign({},null==o?void 0:o.style),d)}),R))});var W=Object.assign(L,{Panel:j})},66330:function(e,n,t){var r=t(94184),a=t.n(r),l=t(92419),o=t(67294),i=t(53124),c=t(81643),s=t(20136),d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let p=(e,n,t)=>{if(n||t)return o.createElement(o.Fragment,null,n&&o.createElement("div",{className:`${e}-title`},(0,c.Z)(n)),o.createElement("div",{className:`${e}-inner-content`},(0,c.Z)(t)))},u=e=>{let{hashId:n,prefixCls:t,className:r,style:i,placement:c="top",title:s,content:d,children:u}=e;return o.createElement("div",{className:a()(n,t,`${t}-pure`,`${t}-placement-${c}`,r),style:i},o.createElement("div",{className:`${t}-arrow`}),o.createElement(l.G,Object.assign({},e,{className:n,prefixCls:t}),u||p(t,s,d)))};n.ZP=e=>{let{prefixCls:n}=e,t=d(e,["prefixCls"]),{getPrefixCls:r}=o.useContext(i.E_),a=r("popover",n),[l,c]=(0,s.Z)(a);return l(o.createElement(u,Object.assign({},t,{prefixCls:a,hashId:c})))}},55241:function(e,n,t){var r=t(94184),a=t.n(r),l=t(67294),o=t(81643),i=t(33603),c=t(53124),s=t(83062),d=t(66330),p=t(20136),u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let m=e=>{let{title:n,content:t,prefixCls:r}=e;return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${r}-title`},(0,o.Z)(n)),l.createElement("div",{className:`${r}-inner-content`},(0,o.Z)(t)))},f=l.forwardRef((e,n)=>{let{prefixCls:t,title:r,content:o,overlayClassName:d,placement:f="top",trigger:v="hover",mouseEnterDelay:b=.1,mouseLeaveDelay:g=.1,overlayStyle:x={}}=e,y=u(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:$}=l.useContext(c.E_),h=$("popover",t),[C,O]=(0,p.Z)(h),E=$(),k=a()(d,O);return C(l.createElement(s.Z,Object.assign({placement:f,trigger:v,mouseEnterDelay:b,mouseLeaveDelay:g,overlayStyle:x},y,{prefixCls:h,overlayClassName:k,ref:n,overlay:r||o?l.createElement(m,{prefixCls:h,title:r,content:o}):null,transitionName:(0,i.m)(E,"zoom-big",y.transitionName),"data-popover-inject":!0})))});f._InternalPanelDoNotUseOrYouWillBeFired=d.ZP,n.Z=f},20136:function(e,n,t){var r=t(14747),a=t(50438),l=t(77786),o=t(8796),i=t(67968),c=t(45503);let s=e=>{let{componentCls:n,popoverColor:t,minWidth:a,fontWeightStrong:o,popoverPadding:i,boxShadowSecondary:c,colorTextHeading:s,borderRadiusLG:d,zIndexPopup:p,marginXS:u,colorBgElevated:m,popoverBg:f}=e;return[{[n]:Object.assign(Object.assign({},(0,r.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":m,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:f,backgroundClip:"padding-box",borderRadius:d,boxShadow:c,padding:i},[`${n}-title`]:{minWidth:a,marginBottom:u,color:s,fontWeight:o},[`${n}-inner-content`]:{color:t}})},(0,l.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},d=e=>{let{componentCls:n}=e;return{[n]:o.i.map(t=>{let r=e[`${t}6`];return{[`&${n}-${t}`]:{"--antd-arrow-background-color":r,[`${n}-inner`]:{backgroundColor:r},[`${n}-arrow`]:{background:"transparent"}}}})}},p=e=>{let{componentCls:n,lineWidth:t,lineType:r,colorSplit:a,paddingSM:l,controlHeight:o,fontSize:i,lineHeight:c,padding:s}=e,d=o-Math.round(i*c);return{[n]:{[`${n}-inner`]:{padding:0},[`${n}-title`]:{margin:0,padding:`${d/2}px ${s}px ${d/2-t}px`,borderBottom:`${t}px ${r} ${a}`},[`${n}-inner-content`]:{padding:`${l}px ${s}px`}}}};n.Z=(0,i.Z)("Popover",e=>{let{colorBgElevated:n,colorText:t,wireframe:r}=e,l=(0,c.TS)(e,{popoverPadding:12,popoverBg:n,popoverColor:t});return[s(l),d(l),r&&p(l),(0,a._y)(l,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]})}}]);