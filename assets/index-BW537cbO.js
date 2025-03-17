(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Bf={exports:{}},_a={},zf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function gM(){if(Qg)return ht;Qg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(F,ne,Ue){this.props=F,this.context=ne,this.refs=E,this.updater=Ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(F,ne,Ue){this.props=F,this.context=ne,this.refs=E,this.updater=Ue||S}var b=L.prototype=new y;b.constructor=L,M(b,x.prototype),b.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(F,ne,Ue){var Q,he={},Me=null,ye=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)I.call(ne,Q)&&!U.hasOwnProperty(Q)&&(he[Q]=ne[Q]);var we=arguments.length-2;if(we===1)he.children=Ue;else if(1<we){for(var Ie=Array(we),Je=0;Je<we;Je++)Ie[Je]=arguments[Je+2];he.children=Ie}if(F&&F.defaultProps)for(Q in we=F.defaultProps,we)he[Q]===void 0&&(he[Q]=we[Q]);return{$$typeof:n,type:F,key:Me,ref:ye,props:he,_owner:O.current}}function P(F,ne){return{$$typeof:n,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function H(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ue){return ne[Ue]})}var ae=/\/+/g;function te(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?H(""+F.key):ne.toString(36)}function ce(F,ne,Ue,Q,he){var Me=typeof F;(Me==="undefined"||Me==="boolean")&&(F=null);var ye=!1;if(F===null)ye=!0;else switch(Me){case"string":case"number":ye=!0;break;case"object":switch(F.$$typeof){case n:case e:ye=!0}}if(ye)return ye=F,he=he(ye),F=Q===""?"."+te(ye,0):Q,R(he)?(Ue="",F!=null&&(Ue=F.replace(ae,"$&/")+"/"),ce(he,ne,Ue,"",function(Je){return Je})):he!=null&&(C(he)&&(he=P(he,Ue+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(ae,"$&/")+"/")+F)),ne.push(he)),1;if(ye=0,Q=Q===""?".":Q+":",R(F))for(var we=0;we<F.length;we++){Me=F[we];var Ie=Q+te(Me,we);ye+=ce(Me,ne,Ue,Ie,he)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),we=0;!(Me=F.next()).done;)Me=Me.value,Ie=Q+te(Me,we++),ye+=ce(Me,ne,Ue,Ie,he);else if(Me==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function pe(F,ne,Ue){if(F==null)return F;var Q=[],he=0;return ce(F,Q,"","",function(Me){return ne.call(Ue,Me,he++)}),Q}function ue(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Ue){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ue)},function(Ue){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ue)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var re={current:null},B={transition:null},le={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:pe,forEach:function(F,ne,Ue){pe(F,function(){ne.apply(this,arguments)},Ue)},count:function(F){var ne=0;return pe(F,function(){ne++}),ne},toArray:function(F){return pe(F,function(ne){return ne})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=x,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ht.act=se,ht.cloneElement=function(F,ne,Ue){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=M({},F.props),he=F.key,Me=F.ref,ye=F._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ye=O.current),ne.key!==void 0&&(he=""+ne.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(Ie in ne)I.call(ne,Ie)&&!U.hasOwnProperty(Ie)&&(Q[Ie]=ne[Ie]===void 0&&we!==void 0?we[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Q.children=Ue;else if(1<Ie){we=Array(Ie);for(var Je=0;Je<Ie;Je++)we[Je]=arguments[Je+2];Q.children=we}return{$$typeof:n,type:F.type,key:he,ref:Me,props:Q,_owner:ye}},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},ht.createElement=z,ht.createFactory=function(F){var ne=z.bind(null,F);return ne.type=F,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:c,render:F}},ht.isValidElement=C,ht.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ue}},ht.memo=function(F,ne){return{$$typeof:h,type:F,compare:ne===void 0?null:ne}},ht.startTransition=function(F){var ne=B.transition;B.transition={};try{F()}finally{B.transition=ne}},ht.unstable_act=se,ht.useCallback=function(F,ne){return re.current.useCallback(F,ne)},ht.useContext=function(F){return re.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return re.current.useDeferredValue(F)},ht.useEffect=function(F,ne){return re.current.useEffect(F,ne)},ht.useId=function(){return re.current.useId()},ht.useImperativeHandle=function(F,ne,Ue){return re.current.useImperativeHandle(F,ne,Ue)},ht.useInsertionEffect=function(F,ne){return re.current.useInsertionEffect(F,ne)},ht.useLayoutEffect=function(F,ne){return re.current.useLayoutEffect(F,ne)},ht.useMemo=function(F,ne){return re.current.useMemo(F,ne)},ht.useReducer=function(F,ne,Ue){return re.current.useReducer(F,ne,Ue)},ht.useRef=function(F){return re.current.useRef(F)},ht.useState=function(F){return re.current.useState(F)},ht.useSyncExternalStore=function(F,ne,Ue){return re.current.useSyncExternalStore(F,ne,Ue)},ht.useTransition=function(){return re.current.useTransition()},ht.version="18.3.1",ht}var Jg;function zh(){return Jg||(Jg=1,zf.exports=gM()),zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function vM(){if(ev)return _a;ev=1;var n=zh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return _a.Fragment=t,_a.jsx=u,_a.jsxs=u,_a}var tv;function _M(){return tv||(tv=1,Bf.exports=vM()),Bf.exports}var ie=_M(),Oe=zh(),au={},Vf={exports:{}},Gn={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function yM(){return nv||(nv=1,function(n){function e(B,le){var se=B.length;B.push(le);e:for(;0<se;){var F=se-1>>>1,ne=B[F];if(0<o(ne,le))B[F]=le,B[se]=ne,se=F;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],se=B.pop();if(se!==le){B[0]=se;e:for(var F=0,ne=B.length,Ue=ne>>>1;F<Ue;){var Q=2*(F+1)-1,he=B[Q],Me=Q+1,ye=B[Me];if(0>o(he,se))Me<ne&&0>o(ye,he)?(B[F]=ye,B[Me]=se,F=Me):(B[F]=he,B[Q]=se,F=Q);else if(Me<ne&&0>o(ye,se))B[F]=ye,B[Me]=se,F=Me;else break e}}return le}function o(B,le){var se=B.sortIndex-le.sortIndex;return se!==0?se:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,v=3,S=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=B)r(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function R(B){if(E=!1,b(B),!M)if(t(d)!==null)M=!0,ue(I);else{var le=t(h);le!==null&&re(R,le.startTime-B)}}function I(B,le){M=!1,E&&(E=!1,y(z),z=-1),S=!0;var se=v;try{for(b(le),g=t(d);g!==null&&(!(g.expirationTime>le)||B&&!H());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var ne=F(g.expirationTime<=le);le=n.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&r(d),b(le)}else r(d);g=t(d)}if(g!==null)var Ue=!0;else{var Q=t(h);Q!==null&&re(R,Q.startTime-le),Ue=!1}return Ue}finally{g=null,v=se,S=!1}}var O=!1,U=null,z=-1,P=5,C=-1;function H(){return!(n.unstable_now()-C<P)}function ae(){if(U!==null){var B=n.unstable_now();C=B;var le=!0;try{le=U(!0,B)}finally{le?te():(O=!1,U=null)}}else O=!1}var te;if(typeof L=="function")te=function(){L(ae)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=ae,te=function(){pe.postMessage(null)}}else te=function(){x(ae,0)};function ue(B){U=B,O||(O=!0,te())}function re(B,le){z=x(function(){B(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,ue(I))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var se=v;v=le;try{return B()}finally{v=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=v;v=B;try{return le()}finally{v=se}},n.unstable_scheduleCallback=function(B,le,se){var F=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,B={id:m++,callback:le,priorityLevel:B,startTime:se,expirationTime:ne,sortIndex:-1},se>F?(B.sortIndex=se,e(h,B),t(d)===null&&B===t(h)&&(E?(y(z),z=-1):E=!0,re(R,se-F))):(B.sortIndex=ne,e(d,B),M||S||(M=!0,ue(I))),B},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(B){var le=v;return function(){var se=v;v=le;try{return B.apply(this,arguments)}finally{v=se}}}}(Gf)),Gf}var iv;function xM(){return iv||(iv=1,Hf.exports=yM()),Hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function SM(){if(rv)return Gn;rv=1;var n=zh(),e=xM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function S(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||S(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,f){var p=x.hasOwnProperty(s)?x[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,f)&&(a=null),f||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,F;function ne(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Ue=!1;function Q(i,s){if(!i||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var f=ee}Reflect.construct(i,[],s)}else{try{s.call()}catch(ee){f=ee}i.call(s.prototype)}else{try{throw Error()}catch(ee){f=ee}i()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,N=_.length-1;1<=T&&0<=N&&p[T]!==_[N];)N--;for(;1<=T&&0<=N;T--,N--)if(p[T]!==_[N]){if(T!==1||N!==1)do if(T--,N--,0>N||p[T]!==_[N]){var k=`
`+p[T].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=T&&0<=N);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ne(i):""}function he(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case z:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case ae:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:Me(i.type)||"Memo";case ue:s=i._payload,i=i._init;try{return Me(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pt(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ie(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Rn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=we(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ft(i,s){pt(i,s);var a=we(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(i,s.type,a):s.hasOwnProperty("defaultValue")&&Rt(i,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function qe(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Rt(i,s,a){(s!=="number"||It(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var je=Array.isArray;function D(i,s,a,f){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&f&&(i[a].defaultSelected=!0)}else{for(a=""+we(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Z(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:we(a)}}function me(i,s){var a=we(s.value),f=we(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ve(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ae,Fe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,p)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){Be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function Ke(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function nt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=Ke(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,p):i[a]=p}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(ze[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,oe=null,de=null;function De(i){if(i=ia(i)){if(typeof Ce!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ml(s),Ce(i.stateNode,i.type,s))}}function be(i){oe?de?de.push(i):de=[i]:oe=i}function ot(){if(oe){var i=oe,s=de;if(de=oe=null,De(i),s)for(i=0;i<s.length;i++)De(s[i])}}function Ft(i,s){return i(s)}function en(){}var St=!1;function On(i,s,a){if(St)return i(s,a);St=!0;try{return Ft(i,s,a)}finally{St=!1,(oe!==null||de!==null)&&(en(),ot())}}function Pn(i,s){var a=i.stateNode;if(a===null)return null;var f=Ml(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Rs=!1;if(c)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Rs=!1}function Ii(i,s,a,f,p,_,T,N,k){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(a,ee)}catch(_e){this.onError(_e)}}var Ui=!1,Yr=null,qr=!1,lr=null,el={onError:function(i){Ui=!0,Yr=i}};function Ps(i,s,a,f,p,_,T,N,k){Ui=!1,Yr=null,Ii.apply(el,arguments)}function tl(i,s,a,f,p,_,T,N,k){if(Ps.apply(this,arguments),Ui){if(Ui){var ee=Yr;Ui=!1,Yr=null}else throw Error(t(198));qr||(qr=!0,lr=ee)}}function Ei(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function nl(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function il(i){if(Ei(i)!==i)throw Error(t(188))}function ac(i){var s=i.alternate;if(!s){if(s=Ei(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return il(p),i;if(_===f)return il(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var T=!1,N=p.child;N;){if(N===a){T=!0,a=p,f=_;break}if(N===f){T=!0,f=p,a=_;break}N=N.sibling}if(!T){for(N=_.child;N;){if(N===a){T=!0,a=_,f=p;break}if(N===f){T=!0,f=_,a=p;break}N=N.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function rl(i){return i=ac(i),i!==null?sl(i):null}function sl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=sl(i);if(s!==null)return s;i=i.sibling}return null}var ol=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,J=e.unstable_requestPaint,q=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,Ge=null;function _t(i){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(tt,i,void 0,(i.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Xt=Math.log,zt=Math.LN2;function xt(i){return i>>>=0,i===0?32:31-(Xt(i)/zt|0)|0}var $e=64,Yt=4194304;function vt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vn(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,p=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var N=T&~p;N!==0?f=vt(N):(_&=T,_!==0&&(f=vt(_)))}else T=a&~p,T!==0?f=vt(T):_!==0&&(f=vt(_));if(f===0)return 0;if(s!==0&&s!==f&&!(s&p)&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if(f&4&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-at(s),p=1<<a,f|=i[a],s&=~p;return f}function ur(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-at(_),N=1<<T,k=p[T];k===-1?(!(N&a)||N&f)&&(p[T]=ur(N,s)):k<=s&&(i.expiredLanes|=N),_&=~N}}function Fi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nt(){var i=$e;return $e<<=1,!($e&4194240)&&($e=64),i}function _n(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function on(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-at(s),i[s]=a}function dn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-at(a),_=1<<p;s[p]=0,f[p]=-1,i[p]=-1,a&=~_}}function an(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-at(a),p=1<<f;p&s|i[f]&s&&(i[f]|=s),a&=~p}}var Mt=0;function Ti(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Dp,lc,Lp,Np,Ip,uc=!1,al=[],cr=null,fr=null,dr=null,Vo=new Map,Ho=new Map,hr=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(i,s){switch(i){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Vo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(s.pointerId)}}function Go(i,s,a,f,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ia(s),s!==null&&lc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function zx(i,s,a,f,p){switch(s){case"focusin":return cr=Go(cr,i,s,a,f,p),!0;case"dragenter":return fr=Go(fr,i,s,a,f,p),!0;case"mouseover":return dr=Go(dr,i,s,a,f,p),!0;case"pointerover":var _=p.pointerId;return Vo.set(_,Go(Vo.get(_)||null,i,s,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,Ho.set(_,Go(Ho.get(_)||null,i,s,a,f,p)),!0}return!1}function Fp(i){var s=$r(i.target);if(s!==null){var a=Ei(s);if(a!==null){if(s=a.tag,s===13){if(s=nl(a),s!==null){i.blockedOn=s,Ip(i.priority,function(){Lp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ll(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=fc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);At=f,a.target.dispatchEvent(f),At=null}else return s=ia(a),s!==null&&lc(s),i.blockedOn=a,!1;s.shift()}return!0}function Op(i,s,a){ll(i)&&a.delete(s)}function Vx(){uc=!1,cr!==null&&ll(cr)&&(cr=null),fr!==null&&ll(fr)&&(fr=null),dr!==null&&ll(dr)&&(dr=null),Vo.forEach(Op),Ho.forEach(Op)}function Wo(i,s){i.blockedOn===s&&(i.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vx)))}function jo(i){function s(p){return Wo(p,i)}if(0<al.length){Wo(al[0],i);for(var a=1;a<al.length;a++){var f=al[a];f.blockedOn===i&&(f.blockedOn=null)}}for(cr!==null&&Wo(cr,i),fr!==null&&Wo(fr,i),dr!==null&&Wo(dr,i),Vo.forEach(s),Ho.forEach(s),a=0;a<hr.length;a++)f=hr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Fp(a),a.blockedOn===null&&hr.shift()}var bs=R.ReactCurrentBatchConfig,ul=!0;function Hx(i,s,a,f){var p=Mt,_=bs.transition;bs.transition=null;try{Mt=1,cc(i,s,a,f)}finally{Mt=p,bs.transition=_}}function Gx(i,s,a,f){var p=Mt,_=bs.transition;bs.transition=null;try{Mt=4,cc(i,s,a,f)}finally{Mt=p,bs.transition=_}}function cc(i,s,a,f){if(ul){var p=fc(i,s,a,f);if(p===null)Rc(i,s,f,cl,a),Up(i,f);else if(zx(p,i,s,a,f))f.stopPropagation();else if(Up(i,f),s&4&&-1<Bx.indexOf(i)){for(;p!==null;){var _=ia(p);if(_!==null&&Dp(_),_=fc(i,s,a,f),_===null&&Rc(i,s,f,cl,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else Rc(i,s,f,null,a)}}var cl=null;function fc(i,s,a,f){if(cl=null,i=W(f),i=$r(i),i!==null)if(s=Ei(i),s===null)i=null;else if(a=s.tag,a===13){if(i=nl(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return cl=i,null}function kp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Se:return 1;case Re:return 4;case Le:case Ve:return 16;case it:return 536870912;default:return 16}default:return 16}}var pr=null,dc=null,fl=null;function Bp(){if(fl)return fl;var i,s=dc,a=s.length,f,p="value"in pr?pr.value:pr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===p[_-f];f++);return fl=p.slice(i,1<f?1-f:void 0)}function dl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function zp(){return!1}function jn(i){function s(a,f,p,_,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(a=i[N],this[N]=a?a(_):_[N]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?hl:zp,this.isPropagationStopped=zp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),s}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=jn(Ds),Xo=se({},Ds,{view:0,detail:0}),Wx=jn(Xo),pc,mc,Yo,pl=se({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Yo&&(Yo&&i.type==="mousemove"?(pc=i.screenX-Yo.screenX,mc=i.screenY-Yo.screenY):mc=pc=0,Yo=i),pc)},movementY:function(i){return"movementY"in i?i.movementY:mc}}),Vp=jn(pl),jx=se({},pl,{dataTransfer:0}),Xx=jn(jx),Yx=se({},Xo,{relatedTarget:0}),gc=jn(Yx),qx=se({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=jn(qx),Kx=se({},Ds,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Zx=jn(Kx),Qx=se({},Ds,{data:0}),Hp=jn(Qx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=tS[i])?!!s[i]:!1}function vc(){return nS}var iS=se({},Xo,{key:function(i){if(i.key){var s=Jx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=dl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?eS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(i){return i.type==="keypress"?dl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?dl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),rS=jn(iS),sS=se({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=jn(sS),oS=se({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),aS=jn(oS),lS=se({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=jn(lS),cS=se({},pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=jn(cS),dS=[9,13,27,32],_c=c&&"CompositionEvent"in window,qo=null;c&&"documentMode"in document&&(qo=document.documentMode);var hS=c&&"TextEvent"in window&&!qo,Wp=c&&(!_c||qo&&8<qo&&11>=qo),jp=" ",Xp=!1;function Yp(i,s){switch(i){case"keyup":return dS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ls=!1;function pS(i,s){switch(i){case"compositionend":return qp(s);case"keypress":return s.which!==32?null:(Xp=!0,jp);case"textInput":return i=s.data,i===jp&&Xp?null:i;default:return null}}function mS(i,s){if(Ls)return i==="compositionend"||!_c&&Yp(i,s)?(i=Bp(),fl=dc=pr=null,Ls=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wp&&s.locale!=="ko"?null:s.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!gS[i.type]:s==="textarea"}function Kp(i,s,a,f){be(f),s=yl(s,"onChange"),0<s.length&&(a=new hc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var $o=null,Ko=null;function vS(i){pm(i,0)}function ml(i){var s=Os(i);if(gt(s))return i}function _S(i,s){if(i==="change")return s}var Zp=!1;if(c){var yc;if(c){var xc="oninput"in document;if(!xc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),xc=typeof Qp.oninput=="function"}yc=xc}else yc=!1;Zp=yc&&(!document.documentMode||9<document.documentMode)}function Jp(){$o&&($o.detachEvent("onpropertychange",em),Ko=$o=null)}function em(i){if(i.propertyName==="value"&&ml(Ko)){var s=[];Kp(s,Ko,i,W(i)),On(vS,s)}}function yS(i,s,a){i==="focusin"?(Jp(),$o=s,Ko=a,$o.attachEvent("onpropertychange",em)):i==="focusout"&&Jp()}function xS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(Ko)}function SS(i,s){if(i==="click")return ml(s)}function MS(i,s){if(i==="input"||i==="change")return ml(s)}function ES(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var ci=typeof Object.is=="function"?Object.is:ES;function Zo(i,s){if(ci(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!ci(i[p],s[p]))return!1}return!0}function tm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function nm(i,s){var a=tm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tm(a)}}function im(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?im(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var i=window,s=It();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=It(i.document)}return s}function Sc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function TS(i){var s=rm(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&im(a.ownerDocument.documentElement,a)){if(f!==null&&Sc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!i.extend&&_>f&&(p=f,f=_,_=p),p=nm(a,_);var T=nm(a,f);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var wS=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,Mc=null,Qo=null,Ec=!1;function sm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ns==null||Ns!==It(f)||(f=Ns,"selectionStart"in f&&Sc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Qo&&Zo(Qo,f)||(Qo=f,f=yl(Mc,"onSelect"),0<f.length&&(s=new hc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function gl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Is={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Tc={},om={};c&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function vl(i){if(Tc[i])return Tc[i];if(!Is[i])return i;var s=Is[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in om)return Tc[i]=s[a];return i}var am=vl("animationend"),lm=vl("animationiteration"),um=vl("animationstart"),cm=vl("transitionend"),fm=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(i,s){fm.set(i,s),l(s,[i])}for(var wc=0;wc<dm.length;wc++){var Ac=dm[wc],AS=Ac.toLowerCase(),CS=Ac[0].toUpperCase()+Ac.slice(1);mr(AS,"on"+CS)}mr(am,"onAnimationEnd"),mr(lm,"onAnimationIteration"),mr(um,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(cm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function hm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,tl(f,s,void 0,i),i.currentTarget=null}function pm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var N=f[T],k=N.instance,ee=N.currentTarget;if(N=N.listener,k!==_&&p.isPropagationStopped())break e;hm(p,N,ee),_=k}else for(T=0;T<f.length;T++){if(N=f[T],k=N.instance,ee=N.currentTarget,N=N.listener,k!==_&&p.isPropagationStopped())break e;hm(p,N,ee),_=k}}}if(qr)throw i=lr,qr=!1,lr=null,i}function Ot(i,s){var a=s[Ic];a===void 0&&(a=s[Ic]=new Set);var f=i+"__bubble";a.has(f)||(mm(s,i,2,!1),a.add(f))}function Cc(i,s,a){var f=0;s&&(f|=4),mm(a,i,f,s)}var _l="_reactListening"+Math.random().toString(36).slice(2);function ea(i){if(!i[_l]){i[_l]=!0,r.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||Cc(a,!1,i),Cc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[_l]||(s[_l]=!0,Cc("selectionchange",!1,s))}}function mm(i,s,a,f){switch(kp(s)){case 1:var p=Hx;break;case 4:p=Gx;break;default:p=cc}a=p.bind(null,s,a,i),p=void 0,!Rs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Rc(i,s,a,f,p){var _=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var N=f.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;T=T.return}for(;N!==null;){if(T=$r(N),T===null)return;if(k=T.tag,k===5||k===6){f=_=T;continue e}N=N.parentNode}}f=f.return}On(function(){var ee=_,_e=W(a),xe=[];e:{var ge=fm.get(i);if(ge!==void 0){var Ne=hc,He=i;switch(i){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":Ne=rS;break;case"focusin":He="focus",Ne=gc;break;case"focusout":He="blur",Ne=gc;break;case"beforeblur":case"afterblur":Ne=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=aS;break;case am:case lm:case um:Ne=$x;break;case cm:Ne=uS;break;case"scroll":Ne=Wx;break;case"wheel":Ne=fS;break;case"copy":case"cut":case"paste":Ne=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Gp}var We=(s&4)!==0,Kt=!We&&i==="scroll",Y=We?ge!==null?ge+"Capture":null:ge;We=[];for(var G=ee,K;G!==null;){K=G;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=Pn(G,Y),Te!=null&&We.push(ta(G,Te,K)))),Kt)break;G=G.return}0<We.length&&(ge=new Ne(ge,He,null,a,_e),xe.push({event:ge,listeners:We}))}}if(!(s&7)){e:{if(ge=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",ge&&a!==At&&(He=a.relatedTarget||a.fromElement)&&($r(He)||He[Oi]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(He=a.relatedTarget||a.toElement,Ne=ee,He=He?$r(He):null,He!==null&&(Kt=Ei(He),He!==Kt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ne=null,He=ee),Ne!==He)){if(We=Vp,Te="onMouseLeave",Y="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(We=Gp,Te="onPointerLeave",Y="onPointerEnter",G="pointer"),Kt=Ne==null?ge:Os(Ne),K=He==null?ge:Os(He),ge=new We(Te,G+"leave",Ne,a,_e),ge.target=Kt,ge.relatedTarget=K,Te=null,$r(_e)===ee&&(We=new We(Y,G+"enter",He,a,_e),We.target=K,We.relatedTarget=Kt,Te=We),Kt=Te,Ne&&He)t:{for(We=Ne,Y=He,G=0,K=We;K;K=Us(K))G++;for(K=0,Te=Y;Te;Te=Us(Te))K++;for(;0<G-K;)We=Us(We),G--;for(;0<K-G;)Y=Us(Y),K--;for(;G--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=Us(We),Y=Us(Y)}We=null}else We=null;Ne!==null&&gm(xe,ge,Ne,We,!1),He!==null&&Kt!==null&&gm(xe,Kt,He,We,!0)}}e:{if(ge=ee?Os(ee):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Ye=_S;else if($p(ge))if(Zp)Ye=MS;else{Ye=xS;var Ze=yS}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=SS);if(Ye&&(Ye=Ye(i,ee))){Kp(xe,Ye,a,_e);break e}Ze&&Ze(i,ge,ee),i==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ze=ee?Os(ee):window,i){case"focusin":($p(Ze)||Ze.contentEditable==="true")&&(Ns=Ze,Mc=ee,Qo=null);break;case"focusout":Qo=Mc=Ns=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,sm(xe,a,_e);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":sm(xe,a,_e)}var Qe;if(_c)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Ls?Yp(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Wp&&a.locale!=="ko"&&(Ls||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ls&&(Qe=Bp()):(pr=_e,dc="value"in pr?pr.value:pr.textContent,Ls=!0)),Ze=yl(ee,rt),0<Ze.length&&(rt=new Hp(rt,i,null,a,_e),xe.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=qp(a),Qe!==null&&(rt.data=Qe)))),(Qe=hS?pS(i,a):mS(i,a))&&(ee=yl(ee,"onBeforeInput"),0<ee.length&&(_e=new Hp("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ee}),_e.data=Qe))}pm(xe,s)})}function ta(i,s,a){return{instance:i,listener:s,currentTarget:a}}function yl(i,s){for(var a=s+"Capture",f=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Pn(i,a),_!=null&&f.unshift(ta(i,_,p)),_=Pn(i,s),_!=null&&f.push(ta(i,_,p))),i=i.return}return f}function Us(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function gm(i,s,a,f,p){for(var _=s._reactName,T=[];a!==null&&a!==f;){var N=a,k=N.alternate,ee=N.stateNode;if(k!==null&&k===f)break;N.tag===5&&ee!==null&&(N=ee,p?(k=Pn(a,_),k!=null&&T.unshift(ta(a,k,N))):p||(k=Pn(a,_),k!=null&&T.push(ta(a,k,N)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var PS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function vm(i){return(typeof i=="string"?i:""+i).replace(PS,`
`).replace(bS,"")}function xl(i,s,a){if(s=vm(s),vm(i)!==s&&a)throw Error(t(425))}function Sl(){}var Pc=null,bc=null;function Dc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(i){return _m.resolve(null).then(i).catch(NS)}:Lc;function NS(i){setTimeout(function(){throw i})}function Nc(i,s){var a=s,f=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){i.removeChild(p),jo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);jo(s)}function gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function ym(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),wi="__reactFiber$"+Fs,na="__reactProps$"+Fs,Oi="__reactContainer$"+Fs,Ic="__reactEvents$"+Fs,IS="__reactListeners$"+Fs,US="__reactHandles$"+Fs;function $r(i){var s=i[wi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Oi]||a[wi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=ym(i);i!==null;){if(a=i[wi])return a;i=ym(i)}return s}i=a,a=i.parentNode}return null}function ia(i){return i=i[wi]||i[Oi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ml(i){return i[na]||null}var Uc=[],ks=-1;function vr(i){return{current:i}}function kt(i){0>ks||(i.current=Uc[ks],Uc[ks]=null,ks--)}function Ut(i,s){ks++,Uc[ks]=i.current,i.current=s}var _r={},yn=vr(_r),kn=vr(!1),Kr=_r;function Bs(i,s){var a=i.type.contextTypes;if(!a)return _r;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Bn(i){return i=i.childContextTypes,i!=null}function El(){kt(kn),kt(yn)}function xm(i,s,a){if(yn.current!==_r)throw Error(t(168));Ut(yn,s),Ut(kn,a)}function Sm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,ye(i)||"Unknown",p));return se({},a,f)}function Tl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||_r,Kr=yn.current,Ut(yn,i),Ut(kn,kn.current),!0}function Mm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Sm(i,s,Kr),f.__reactInternalMemoizedMergedChildContext=i,kt(kn),kt(yn),Ut(yn,i)):kt(kn),Ut(kn,a)}var ki=null,wl=!1,Fc=!1;function Em(i){ki===null?ki=[i]:ki.push(i)}function FS(i){wl=!0,Em(i)}function yr(){if(!Fc&&ki!==null){Fc=!0;var i=0,s=Mt;try{var a=ki;for(Mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}ki=null,wl=!1}catch(p){throw ki!==null&&(ki=ki.slice(i+1)),ol(Se,yr),p}finally{Mt=s,Fc=!1}}return null}var zs=[],Vs=0,Al=null,Cl=0,Jn=[],ei=0,Zr=null,Bi=1,zi="";function Qr(i,s){zs[Vs++]=Cl,zs[Vs++]=Al,Al=i,Cl=s}function Tm(i,s,a){Jn[ei++]=Bi,Jn[ei++]=zi,Jn[ei++]=Zr,Zr=i;var f=Bi;i=zi;var p=32-at(f)-1;f&=~(1<<p),a+=1;var _=32-at(s)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Bi=1<<32-at(s)+p|a<<p|f,zi=_+i}else Bi=1<<_|a<<p|f,zi=i}function Oc(i){i.return!==null&&(Qr(i,1),Tm(i,1,0))}function kc(i){for(;i===Al;)Al=zs[--Vs],zs[Vs]=null,Cl=zs[--Vs],zs[Vs]=null;for(;i===Zr;)Zr=Jn[--ei],Jn[ei]=null,zi=Jn[--ei],Jn[ei]=null,Bi=Jn[--ei],Jn[ei]=null}var Xn=null,Yn=null,Vt=!1,fi=null;function wm(i,s){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Am(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Xn=i,Yn=gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Xn=i,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Zr!==null?{id:Bi,overflow:zi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Xn=i,Yn=null,!0):!1;default:return!1}}function Bc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function zc(i){if(Vt){var s=Yn;if(s){var a=s;if(!Am(i,s)){if(Bc(i))throw Error(t(418));s=gr(a.nextSibling);var f=Xn;s&&Am(i,s)?wm(f,a):(i.flags=i.flags&-4097|2,Vt=!1,Xn=i)}}else{if(Bc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,Xn=i}}}function Cm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Xn=i}function Rl(i){if(i!==Xn)return!1;if(!Vt)return Cm(i),Vt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Dc(i.type,i.memoizedProps)),s&&(s=Yn)){if(Bc(i))throw Rm(),Error(t(418));for(;s;)wm(i,s),s=gr(s.nextSibling)}if(Cm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Yn=gr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Yn=null}}else Yn=Xn?gr(i.stateNode.nextSibling):null;return!0}function Rm(){for(var i=Yn;i;)i=gr(i.nextSibling)}function Hs(){Yn=Xn=null,Vt=!1}function Vc(i){fi===null?fi=[i]:fi.push(i)}var OS=R.ReactCurrentBatchConfig;function ra(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var p=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var N=p.refs;T===null?delete N[_]:N[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Pl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Pm(i){var s=i._init;return s(i._payload)}function bm(i){function s(Y,G){if(i){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function a(Y,G){if(!i)return null;for(;G!==null;)s(Y,G),G=G.sibling;return null}function f(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function p(Y,G){return Y=Cr(Y,G),Y.index=0,Y.sibling=null,Y}function _(Y,G,K){return Y.index=K,i?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=2,G):K):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,G,K,Te){return G===null||G.tag!==6?(G=Nf(K,Y.mode,Te),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function k(Y,G,K,Te){var Ye=K.type;return Ye===U?_e(Y,G,K.props.children,Te,K.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ue&&Pm(Ye)===G.type)?(Te=p(G,K.props),Te.ref=ra(Y,G,K),Te.return=Y,Te):(Te=Jl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ra(Y,G,K),Te.return=Y,Te)}function ee(Y,G,K,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=If(K,Y.mode,Te),G.return=Y,G):(G=p(G,K.children||[]),G.return=Y,G)}function _e(Y,G,K,Te,Ye){return G===null||G.tag!==7?(G=os(K,Y.mode,Te,Ye),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function xe(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Nf(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return K=Jl(G.type,G.key,G.props,null,Y.mode,K),K.ref=ra(Y,null,G),K.return=Y,K;case O:return G=If(G,Y.mode,K),G.return=Y,G;case ue:var Te=G._init;return xe(Y,Te(G._payload),K)}if(je(G)||le(G))return G=os(G,Y.mode,K,null),G.return=Y,G;Pl(Y,G)}return null}function ge(Y,G,K,Te){var Ye=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:N(Y,G,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return K.key===Ye?k(Y,G,K,Te):null;case O:return K.key===Ye?ee(Y,G,K,Te):null;case ue:return Ye=K._init,ge(Y,G,Ye(K._payload),Te)}if(je(K)||le(K))return Ye!==null?null:_e(Y,G,K,Te,null);Pl(Y,K)}return null}function Ne(Y,G,K,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,N(G,Y,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return Y=Y.get(Te.key===null?K:Te.key)||null,k(G,Y,Te,Ye);case O:return Y=Y.get(Te.key===null?K:Te.key)||null,ee(G,Y,Te,Ye);case ue:var Ze=Te._init;return Ne(Y,G,K,Ze(Te._payload),Ye)}if(je(Te)||le(Te))return Y=Y.get(K)||null,_e(G,Y,Te,Ye,null);Pl(G,Te)}return null}function He(Y,G,K,Te){for(var Ye=null,Ze=null,Qe=G,rt=G=0,cn=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(cn=Qe,Qe=null):cn=Qe.sibling;var Tt=ge(Y,Qe,K[rt],Te);if(Tt===null){Qe===null&&(Qe=cn);break}i&&Qe&&Tt.alternate===null&&s(Y,Qe),G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt,Qe=cn}if(rt===K.length)return a(Y,Qe),Vt&&Qr(Y,rt),Ye;if(Qe===null){for(;rt<K.length;rt++)Qe=xe(Y,K[rt],Te),Qe!==null&&(G=_(Qe,G,rt),Ze===null?Ye=Qe:Ze.sibling=Qe,Ze=Qe);return Vt&&Qr(Y,rt),Ye}for(Qe=f(Y,Qe);rt<K.length;rt++)cn=Ne(Qe,Y,rt,K[rt],Te),cn!==null&&(i&&cn.alternate!==null&&Qe.delete(cn.key===null?rt:cn.key),G=_(cn,G,rt),Ze===null?Ye=cn:Ze.sibling=cn,Ze=cn);return i&&Qe.forEach(function(Rr){return s(Y,Rr)}),Vt&&Qr(Y,rt),Ye}function We(Y,G,K,Te){var Ye=le(K);if(typeof Ye!="function")throw Error(t(150));if(K=Ye.call(K),K==null)throw Error(t(151));for(var Ze=Ye=null,Qe=G,rt=G=0,cn=null,Tt=K.next();Qe!==null&&!Tt.done;rt++,Tt=K.next()){Qe.index>rt?(cn=Qe,Qe=null):cn=Qe.sibling;var Rr=ge(Y,Qe,Tt.value,Te);if(Rr===null){Qe===null&&(Qe=cn);break}i&&Qe&&Rr.alternate===null&&s(Y,Qe),G=_(Rr,G,rt),Ze===null?Ye=Rr:Ze.sibling=Rr,Ze=Rr,Qe=cn}if(Tt.done)return a(Y,Qe),Vt&&Qr(Y,rt),Ye;if(Qe===null){for(;!Tt.done;rt++,Tt=K.next())Tt=xe(Y,Tt.value,Te),Tt!==null&&(G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt);return Vt&&Qr(Y,rt),Ye}for(Qe=f(Y,Qe);!Tt.done;rt++,Tt=K.next())Tt=Ne(Qe,Y,rt,Tt.value,Te),Tt!==null&&(i&&Tt.alternate!==null&&Qe.delete(Tt.key===null?rt:Tt.key),G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt);return i&&Qe.forEach(function(mM){return s(Y,mM)}),Vt&&Qr(Y,rt),Ye}function Kt(Y,G,K,Te){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case I:e:{for(var Ye=K.key,Ze=G;Ze!==null;){if(Ze.key===Ye){if(Ye=K.type,Ye===U){if(Ze.tag===7){a(Y,Ze.sibling),G=p(Ze,K.props.children),G.return=Y,Y=G;break e}}else if(Ze.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ue&&Pm(Ye)===Ze.type){a(Y,Ze.sibling),G=p(Ze,K.props),G.ref=ra(Y,Ze,K),G.return=Y,Y=G;break e}a(Y,Ze);break}else s(Y,Ze);Ze=Ze.sibling}K.type===U?(G=os(K.props.children,Y.mode,Te,K.key),G.return=Y,Y=G):(Te=Jl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ra(Y,G,K),Te.return=Y,Y=Te)}return T(Y);case O:e:{for(Ze=K.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(Y,G.sibling),G=p(G,K.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else s(Y,G);G=G.sibling}G=If(K,Y.mode,Te),G.return=Y,Y=G}return T(Y);case ue:return Ze=K._init,Kt(Y,G,Ze(K._payload),Te)}if(je(K))return He(Y,G,K,Te);if(le(K))return We(Y,G,K,Te);Pl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a(Y,G.sibling),G=p(G,K),G.return=Y,Y=G):(a(Y,G),G=Nf(K,Y.mode,Te),G.return=Y,Y=G),T(Y)):a(Y,G)}return Kt}var Gs=bm(!0),Dm=bm(!1),bl=vr(null),Dl=null,Ws=null,Hc=null;function Gc(){Hc=Ws=Dl=null}function Wc(i){var s=bl.current;kt(bl),i._currentValue=s}function jc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function js(i,s){Dl=i,Hc=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(zn=!0),i.firstContext=null)}function ti(i){var s=i._currentValue;if(Hc!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(Dl===null)throw Error(t(308));Ws=i,Dl.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var Jr=null;function Xc(i){Jr===null?Jr=[i]:Jr.push(i)}function Lm(i,s,a,f){var p=s.interleaved;return p===null?(a.next=a,Xc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Vi(i,f)}function Vi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var xr=!1;function Yc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Sr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Et&2){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Vi(i,a)}return p=f.interleaved,p===null?(s.next=s,Xc(f)):(s.next=p.next,p.next=s),f.interleaved=s,Vi(i,a)}function Ll(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,an(i,a)}}function Im(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Nl(i,s,a,f){var p=i.updateQueue;xr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var k=N,ee=k.next;k.next=null,T===null?_=ee:T.next=ee,T=k;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,N=_e.lastBaseUpdate,N!==T&&(N===null?_e.firstBaseUpdate=ee:N.next=ee,_e.lastBaseUpdate=k))}if(_!==null){var xe=p.baseState;T=0,_e=ee=k=null,N=_;do{var ge=N.lane,Ne=N.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=i,We=N;switch(ge=s,Ne=a,We.tag){case 1:if(He=We.payload,typeof He=="function"){xe=He.call(Ne,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,ge=typeof He=="function"?He.call(Ne,xe,ge):He,ge==null)break e;xe=se({},xe,ge);break e;case 2:xr=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,ge=p.effects,ge===null?p.effects=[N]:ge.push(N))}else Ne={eventTime:Ne,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_e===null?(ee=_e=Ne,k=xe):_e=_e.next=Ne,T|=ge;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(_e===null&&(k=xe),p.baseState=k,p.firstBaseUpdate=ee,p.lastBaseUpdate=_e,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ns|=T,i.lanes=T,i.memoizedState=xe}}function Um(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var sa={},Ai=vr(sa),oa=vr(sa),aa=vr(sa);function es(i){if(i===sa)throw Error(t(174));return i}function qc(i,s){switch(Ut(aa,s),Ut(oa,i),Ut(Ai,sa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Xe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Xe(s,i)}kt(Ai),Ut(Ai,s)}function Xs(){kt(Ai),kt(oa),kt(aa)}function Fm(i){es(aa.current);var s=es(Ai.current),a=Xe(s,i.type);s!==a&&(Ut(oa,i),Ut(Ai,a))}function $c(i){oa.current===i&&(kt(Ai),kt(oa))}var Gt=vr(0);function Il(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kc=[];function Zc(){for(var i=0;i<Kc.length;i++)Kc[i]._workInProgressVersionPrimary=null;Kc.length=0}var Ul=R.ReactCurrentDispatcher,Qc=R.ReactCurrentBatchConfig,ts=0,Wt=null,tn=null,ln=null,Fl=!1,la=!1,ua=0,kS=0;function xn(){throw Error(t(321))}function Jc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!ci(i[a],s[a]))return!1;return!0}function ef(i,s,a,f,p,_){if(ts=_,Wt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ul.current=i===null||i.memoizedState===null?HS:GS,i=a(f,p),la){_=0;do{if(la=!1,ua=0,25<=_)throw Error(t(301));_+=1,ln=tn=null,s.updateQueue=null,Ul.current=WS,i=a(f,p)}while(la)}if(Ul.current=Bl,s=tn!==null&&tn.next!==null,ts=0,ln=tn=Wt=null,Fl=!1,s)throw Error(t(300));return i}function tf(){var i=ua!==0;return ua=0,i}function Ci(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Wt.memoizedState=ln=i:ln=ln.next=i,ln}function ni(){if(tn===null){var i=Wt.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=ln===null?Wt.memoizedState:ln.next;if(s!==null)ln=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?Wt.memoizedState=ln=i:ln=ln.next=i}return ln}function ca(i,s){return typeof s=="function"?s(i):s}function nf(i){var s=ni(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var N=T=null,k=null,ee=_;do{var _e=ee.lane;if((ts&_e)===_e)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:i(f,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(N=k=xe,T=f):k=k.next=xe,Wt.lanes|=_e,ns|=_e}ee=ee.next}while(ee!==null&&ee!==_);k===null?T=f:k.next=N,ci(f,s.memoizedState)||(zn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=k,a.lastRenderedState=f}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Wt.lanes|=_,ns|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function rf(i){var s=ni(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);ci(_,s.memoizedState)||(zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Om(){}function km(i,s){var a=Wt,f=ni(),p=s(),_=!ci(f.memoizedState,p);if(_&&(f.memoizedState=p,zn=!0),f=f.queue,sf(Vm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,fa(9,zm.bind(null,a,f,p,s),void 0,null),un===null)throw Error(t(349));ts&30||Bm(a,s,p)}return p}function Bm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function zm(i,s,a,f){s.value=a,s.getSnapshot=f,Hm(s)&&Gm(i)}function Vm(i,s,a){return a(function(){Hm(s)&&Gm(i)})}function Hm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!ci(i,a)}catch{return!0}}function Gm(i){var s=Vi(i,1);s!==null&&mi(s,i,1,-1)}function Wm(i){var s=Ci();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},s.queue=i,i=i.dispatch=VS.bind(null,Wt,i),[s.memoizedState,i]}function fa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function jm(){return ni().memoizedState}function Ol(i,s,a,f){var p=Ci();Wt.flags|=i,p.memoizedState=fa(1|s,a,void 0,f===void 0?null:f)}function kl(i,s,a,f){var p=ni();f=f===void 0?null:f;var _=void 0;if(tn!==null){var T=tn.memoizedState;if(_=T.destroy,f!==null&&Jc(f,T.deps)){p.memoizedState=fa(s,a,_,f);return}}Wt.flags|=i,p.memoizedState=fa(1|s,a,_,f)}function Xm(i,s){return Ol(8390656,8,i,s)}function sf(i,s){return kl(2048,8,i,s)}function Ym(i,s){return kl(4,2,i,s)}function qm(i,s){return kl(4,4,i,s)}function $m(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Km(i,s,a){return a=a!=null?a.concat([i]):null,kl(4,4,$m.bind(null,s,i),a)}function of(){}function Zm(i,s){var a=ni();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Jc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Qm(i,s){var a=ni();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Jc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function Jm(i,s,a){return ts&21?(ci(a,s)||(a=Nt(),Wt.lanes|=a,ns|=a,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=a)}function BS(i,s){var a=Mt;Mt=a!==0&&4>a?a:4,i(!0);var f=Qc.transition;Qc.transition={};try{i(!1),s()}finally{Mt=a,Qc.transition=f}}function eg(){return ni().memoizedState}function zS(i,s,a){var f=wr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},tg(i))ng(s,a);else if(a=Lm(i,s,a,f),a!==null){var p=Ln();mi(a,i,f,p),ig(a,s,f)}}function VS(i,s,a){var f=wr(i),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(tg(i))ng(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,N=_(T,a);if(p.hasEagerState=!0,p.eagerState=N,ci(N,T)){var k=s.interleaved;k===null?(p.next=p,Xc(s)):(p.next=k.next,k.next=p),s.interleaved=p;return}}catch{}finally{}a=Lm(i,s,p,f),a!==null&&(p=Ln(),mi(a,i,f,p),ig(a,s,f))}}function tg(i){var s=i.alternate;return i===Wt||s!==null&&s===Wt}function ng(i,s){la=Fl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function ig(i,s,a){if(a&4194240){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,an(i,a)}}var Bl={readContext:ti,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},HS={readContext:ti,useCallback:function(i,s){return Ci().memoizedState=[i,s===void 0?null:s],i},useContext:ti,useEffect:Xm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Ol(4194308,4,$m.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Ol(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ol(4,2,i,s)},useMemo:function(i,s){var a=Ci();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ci();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=zS.bind(null,Wt,i),[f.memoizedState,i]},useRef:function(i){var s=Ci();return i={current:i},s.memoizedState=i},useState:Wm,useDebugValue:of,useDeferredValue:function(i){return Ci().memoizedState=i},useTransition:function(){var i=Wm(!1),s=i[0];return i=BS.bind(null,i[1]),Ci().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Wt,p=Ci();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),un===null)throw Error(t(349));ts&30||Bm(f,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,Xm(Vm.bind(null,f,_,i),[i]),f.flags|=2048,fa(9,zm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ci(),s=un.identifierPrefix;if(Vt){var a=zi,f=Bi;a=(f&~(1<<32-at(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=kS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},GS={readContext:ti,useCallback:Zm,useContext:ti,useEffect:sf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:nf,useRef:jm,useState:function(){return nf(ca)},useDebugValue:of,useDeferredValue:function(i){var s=ni();return Jm(s,tn.memoizedState,i)},useTransition:function(){var i=nf(ca)[0],s=ni().memoizedState;return[i,s]},useMutableSource:Om,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1},WS={readContext:ti,useCallback:Zm,useContext:ti,useEffect:sf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:rf,useRef:jm,useState:function(){return rf(ca)},useDebugValue:of,useDeferredValue:function(i){var s=ni();return tn===null?s.memoizedState=i:Jm(s,tn.memoizedState,i)},useTransition:function(){var i=rf(ca)[0],s=ni().memoizedState;return[i,s]},useMutableSource:Om,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1};function di(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function af(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var zl={isMounted:function(i){return(i=i._reactInternals)?Ei(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Ln(),p=wr(i),_=Hi(f,p);_.payload=s,a!=null&&(_.callback=a),s=Sr(i,_,p),s!==null&&(mi(s,i,p,f),Ll(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Ln(),p=wr(i),_=Hi(f,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Sr(i,_,p),s!==null&&(mi(s,i,p,f),Ll(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Ln(),f=wr(i),p=Hi(a,f);p.tag=2,s!=null&&(p.callback=s),s=Sr(i,p,f),s!==null&&(mi(s,i,f,a),Ll(s,i,f))}};function rg(i,s,a,f,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!Zo(a,f)||!Zo(p,_):!0}function sg(i,s,a){var f=!1,p=_r,_=s.contextType;return typeof _=="object"&&_!==null?_=ti(_):(p=Bn(s)?Kr:yn.current,f=s.contextTypes,_=(f=f!=null)?Bs(i,p):_r),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function og(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&zl.enqueueReplaceState(s,s.state,null)}function lf(i,s,a,f){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Yc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ti(_):(_=Bn(s)?Kr:yn.current,p.context=Bs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(af(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&zl.enqueueReplaceState(p,p.state,null),Nl(i,a,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ys(i,s){try{var a="",f=s;do a+=he(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function uf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function cf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function ag(i,s,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Yl||(Yl=!0,wf=f),cf(i,s)},a}function lg(i,s,a){a=Hi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){cf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){cf(i,s),typeof f!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function ug(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new jS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),i=sM.bind(null,i,s,a),s.then(i,i))}function cg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function fg(i,s,a,f,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Hi(-1,1),s.tag=2,Sr(a,s,1))),a.lanes|=1),i)}var XS=R.ReactCurrentOwner,zn=!1;function Dn(i,s,a,f){s.child=i===null?Dm(s,null,a,f):Gs(s,i.child,a,f)}function dg(i,s,a,f,p){a=a.render;var _=s.ref;return js(s,p),f=ef(i,s,a,f,_,p),a=tf(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(Vt&&a&&Oc(s),s.flags|=1,Dn(i,s,f,p),s.child)}function hg(i,s,a,f,p){if(i===null){var _=a.type;return typeof _=="function"&&!Lf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,pg(i,s,_,f,p)):(i=Jl(a.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,!(i.lanes&p)){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(T,f)&&i.ref===s.ref)return Gi(i,s,p)}return s.flags|=1,i=Cr(_,f),i.ref=s.ref,i.return=s,s.child=i}function pg(i,s,a,f,p){if(i!==null){var _=i.memoizedProps;if(Zo(_,f)&&i.ref===s.ref)if(zn=!1,s.pendingProps=f=_,(i.lanes&p)!==0)i.flags&131072&&(zn=!0);else return s.lanes=i.lanes,Gi(i,s,p)}return ff(i,s,a,f,p)}function mg(i,s,a){var f=s.pendingProps,p=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut($s,qn),qn|=a;else{if(!(a&1073741824))return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ut($s,qn),qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Ut($s,qn),qn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Ut($s,qn),qn|=f;return Dn(i,s,p,a),s.child}function gg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ff(i,s,a,f,p){var _=Bn(a)?Kr:yn.current;return _=Bs(s,_),js(s,p),a=ef(i,s,a,f,_,p),f=tf(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(Vt&&f&&Oc(s),s.flags|=1,Dn(i,s,a,p),s.child)}function vg(i,s,a,f,p){if(Bn(a)){var _=!0;Tl(s)}else _=!1;if(js(s,p),s.stateNode===null)Hl(i,s),sg(s,a,f),lf(s,a,f,p),f=!0;else if(i===null){var T=s.stateNode,N=s.memoizedProps;T.props=N;var k=T.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=ti(ee):(ee=Bn(a)?Kr:yn.current,ee=Bs(s,ee));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==f||k!==ee)&&og(s,T,f,ee),xr=!1;var ge=s.memoizedState;T.state=ge,Nl(s,f,T,p),k=s.memoizedState,N!==f||ge!==k||kn.current||xr?(typeof _e=="function"&&(af(s,a,_e,f),k=s.memoizedState),(N=xr||rg(s,a,N,f,ge,k,ee))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=k),T.props=f,T.state=k,T.context=ee,f=N):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Nm(i,s),N=s.memoizedProps,ee=s.type===s.elementType?N:di(s.type,N),T.props=ee,xe=s.pendingProps,ge=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=ti(k):(k=Bn(a)?Kr:yn.current,k=Bs(s,k));var Ne=a.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==xe||ge!==k)&&og(s,T,f,k),xr=!1,ge=s.memoizedState,T.state=ge,Nl(s,f,T,p);var He=s.memoizedState;N!==xe||ge!==He||kn.current||xr?(typeof Ne=="function"&&(af(s,a,Ne,f),He=s.memoizedState),(ee=xr||rg(s,a,ee,f,ge,He,k)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,He,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,He,k)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),T.props=f,T.state=He,T.context=k,f=ee):(typeof T.componentDidUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return df(i,s,a,f,_,p)}function df(i,s,a,f,p,_){gg(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return p&&Mm(s,a,!1),Gi(i,s,_);f=s.stateNode,XS.current=s;var N=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Gs(s,i.child,null,_),s.child=Gs(s,null,N,_)):Dn(i,s,N,_),s.memoizedState=f.state,p&&Mm(s,a,!0),s.child}function _g(i){var s=i.stateNode;s.pendingContext?xm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&xm(i,s.context,!1),qc(i,s.containerInfo)}function yg(i,s,a,f,p){return Hs(),Vc(p),s.flags|=256,Dn(i,s,a,f),s.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(i){return{baseLanes:i,cachePool:null,transitions:null}}function xg(i,s,a){var f=s.pendingProps,p=Gt.current,_=!1,T=(s.flags&128)!==0,N;if((N=T)||(N=i!==null&&i.memoizedState===null?!1:(p&2)!==0),N?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ut(Gt,p&1),i===null)return zc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=eu(T,f,0,null),i=os(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=pf(a),s.memoizedState=hf,i):mf(s,T));if(p=i.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return YS(i,s,T,f,N,p,a);if(_){_=f.fallback,T=s.mode,p=i.child,N=p.sibling;var k={mode:"hidden",children:f.children};return!(T&1)&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=k,s.deletions=null):(f=Cr(p,k),f.subtreeFlags=p.subtreeFlags&14680064),N!==null?_=Cr(N,_):(_=os(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?pf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=hf,f}return _=i.child,i=_.sibling,f=Cr(_,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function mf(i,s){return s=eu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vl(i,s,a,f){return f!==null&&Vc(f),Gs(s,i.child,null,a),i=mf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function YS(i,s,a,f,p,_,T){if(a)return s.flags&256?(s.flags&=-257,f=uf(Error(t(422))),Vl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=eu({mode:"visible",children:f.children},p,0,null),_=os(_,p,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,s.mode&1&&Gs(s,i.child,null,T),s.child.memoizedState=pf(T),s.memoizedState=hf,_);if(!(s.mode&1))return Vl(i,s,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var N=f.dgst;return f=N,_=Error(t(419)),f=uf(_,f,void 0),Vl(i,s,T,f)}if(N=(T&i.childLanes)!==0,zn||N){if(f=un,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(f.suspendedLanes|T)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Vi(i,p),mi(f,i,p,-1))}return Df(),f=uf(Error(t(421))),Vl(i,s,T,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=oM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Yn=gr(p.nextSibling),Xn=s,Vt=!0,fi=null,i!==null&&(Jn[ei++]=Bi,Jn[ei++]=zi,Jn[ei++]=Zr,Bi=i.id,zi=i.overflow,Zr=s),s=mf(s,f.children),s.flags|=4096,s)}function Sg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),jc(i.return,s,a)}function gf(i,s,a,f,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function Mg(i,s,a){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(Dn(i,s,f.children,a),f=Gt.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Sg(i,a,s);else if(i.tag===19)Sg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ut(Gt,f),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Il(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),gf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Il(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}gf(s,!0,a,null,_);break;case"together":gf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hl(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Gi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ns|=s.lanes,!(a&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Cr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Cr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function qS(i,s,a){switch(s.tag){case 3:_g(s),Hs();break;case 5:Fm(s);break;case 1:Bn(s.type)&&Tl(s);break;case 4:qc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Ut(bl,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Gt,Gt.current&1),s.flags|=128,null):a&s.child.childLanes?xg(i,s,a):(Ut(Gt,Gt.current&1),i=Gi(i,s,a),i!==null?i.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,i.flags&128){if(f)return Mg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Gt,Gt.current),f)break;return null;case 22:case 23:return s.lanes=0,mg(i,s,a)}return Gi(i,s,a)}var Eg,vf,Tg,wg;Eg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vf=function(){},Tg=function(i,s,a,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,es(Ai.current);var _=null;switch(a){case"input":p=V(i,p),f=V(i,f),_=[];break;case"select":p=se({},p,{value:void 0}),f=se({},f,{value:void 0}),_=[];break;case"textarea":p=w(i,p),f=w(i,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Sl)}dt(a,f);var T;a=null;for(ee in p)if(!f.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var N=p[ee];for(T in N)N.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?_||(_=[]):(_=_||[]).push(ee,null));for(ee in f){var k=f[ee];if(N=p!=null?p[ee]:void 0,f.hasOwnProperty(ee)&&k!==N&&(k!=null||N!=null))if(ee==="style")if(N){for(T in N)!N.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&N[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(_||(_=[]),_.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(_=_||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ot("scroll",i),_||N===k||(_=[])):(_=_||[]).push(ee,k))}a&&(_=_||[]).push("style",a);var ee=_;(s.updateQueue=ee)&&(s.flags|=4)}},wg=function(i,s,a,f){a!==f&&(s.flags|=4)};function da(i,s){if(!Vt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function $S(i,s,a){var f=s.pendingProps;switch(kc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return Bn(s.type)&&El(),Sn(s),null;case 3:return f=s.stateNode,Xs(),kt(kn),kt(yn),Zc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Rl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,fi!==null&&(Rf(fi),fi=null))),vf(i,s),Sn(s),null;case 5:$c(s);var p=es(aa.current);if(a=s.type,i!==null&&s.stateNode!=null)Tg(i,s,a,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=es(Ai.current),Rl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[wi]=s,f[na]=_,i=(s.mode&1)!==0,a){case"dialog":Ot("cancel",f),Ot("close",f);break;case"iframe":case"object":case"embed":Ot("load",f);break;case"video":case"audio":for(p=0;p<Jo.length;p++)Ot(Jo[p],f);break;case"source":Ot("error",f);break;case"img":case"image":case"link":Ot("error",f),Ot("load",f);break;case"details":Ot("toggle",f);break;case"input":Rn(f,_),Ot("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ot("invalid",f);break;case"textarea":Z(f,_),Ot("invalid",f)}dt(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var N=_[T];T==="children"?typeof N=="string"?f.textContent!==N&&(_.suppressHydrationWarning!==!0&&xl(f.textContent,N,i),p=["children",N]):typeof N=="number"&&f.textContent!==""+N&&(_.suppressHydrationWarning!==!0&&xl(f.textContent,N,i),p=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ot("scroll",f)}switch(a){case"input":Pt(f),qe(f,_,!0);break;case"textarea":Pt(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Sl)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[wi]=s,i[na]=f,Eg(i,s,!1,!1),s.stateNode=i;e:{switch(T=st(a,f),a){case"dialog":Ot("cancel",i),Ot("close",i),p=f;break;case"iframe":case"object":case"embed":Ot("load",i),p=f;break;case"video":case"audio":for(p=0;p<Jo.length;p++)Ot(Jo[p],i);p=f;break;case"source":Ot("error",i),p=f;break;case"img":case"image":case"link":Ot("error",i),Ot("load",i),p=f;break;case"details":Ot("toggle",i),p=f;break;case"input":Rn(i,f),p=V(i,f),Ot("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=se({},f,{value:void 0}),Ot("invalid",i);break;case"textarea":Z(i,f),p=w(i,f),Ot("invalid",i);break;default:p=f}dt(a,p),N=p;for(_ in N)if(N.hasOwnProperty(_)){var k=N[_];_==="style"?nt(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(i,k)):_==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ct(i,k):typeof k=="number"&&ct(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Ot("scroll",i):k!=null&&b(i,_,k,T))}switch(a){case"input":Pt(i),qe(i,f,!1);break;case"textarea":Pt(i),ve(i);break;case"option":f.value!=null&&i.setAttribute("value",""+we(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?D(i,!!f.multiple,_,!1):f.defaultValue!=null&&D(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Sl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)wg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(aa.current),es(Ai.current),Rl(s)){if(f=s.stateNode,a=s.memoizedProps,f[wi]=s,(_=f.nodeValue!==a)&&(i=Xn,i!==null))switch(i.tag){case 3:xl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&xl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[wi]=s,s.stateNode=f}return Sn(s),null;case 13:if(kt(Gt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&Yn!==null&&s.mode&1&&!(s.flags&128))Rm(),Hs(),s.flags|=98560,_=!1;else if(_=Rl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[wi]=s}else Hs(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Sn(s),_=!1}else fi!==null&&(Rf(fi),fi=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||Gt.current&1?nn===0&&(nn=3):Df())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return Xs(),vf(i,s),i===null&&ea(s.stateNode.containerInfo),Sn(s),null;case 10:return Wc(s.type._context),Sn(s),null;case 17:return Bn(s.type)&&El(),Sn(s),null;case 19:if(kt(Gt),_=s.memoizedState,_===null)return Sn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)da(_,!1);else{if(nn!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(T=Il(i),T!==null){for(s.flags|=128,da(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ut(Gt,Gt.current&1|2),s.child}i=i.sibling}_.tail!==null&&q()>Ks&&(s.flags|=128,f=!0,da(_,!1),s.lanes=4194304)}else{if(!f)if(i=Il(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),da(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Vt)return Sn(s),null}else 2*q()-_.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,f=!0,da(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=q(),s.sibling=null,a=Gt.current,Ut(Gt,f?a&1|2:a&1),s):(Sn(s),null);case 22:case 23:return bf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?qn&1073741824&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function KS(i,s){switch(kc(s),s.tag){case 1:return Bn(s.type)&&El(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Xs(),kt(kn),kt(yn),Zc(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return $c(s),null;case 13:if(kt(Gt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Hs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return kt(Gt),null;case 4:return Xs(),null;case 10:return Wc(s.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Gl=!1,Mn=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function qs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){qt(i,s,f)}else a.current=null}function _f(i,s,a){try{a()}catch(f){qt(i,s,f)}}var Ag=!1;function QS(i,s){if(Pc=ul,i=rm(),Sc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,N=-1,k=-1,ee=0,_e=0,xe=i,ge=null;t:for(;;){for(var Ne;xe!==a||p!==0&&xe.nodeType!==3||(N=T+p),xe!==_||f!==0&&xe.nodeType!==3||(k=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(Ne=xe.firstChild)!==null;)ge=xe,xe=Ne;for(;;){if(xe===i)break t;if(ge===a&&++ee===p&&(N=T),ge===_&&++_e===f&&(k=T),(Ne=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ne}a=N===-1||k===-1?null:{start:N,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:i,selectionRange:a},ul=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var He=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Kt=He.memoizedState,Y=s.stateNode,G=Y.getSnapshotBeforeUpdate(s.elementType===s.type?We:di(s.type,We),Kt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){qt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return He=Ag,Ag=!1,He}function ha(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&_f(s,a,_)}p=p.next}while(p!==f)}}function Wl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function yf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Cg(i){var s=i.alternate;s!==null&&(i.alternate=null,Cg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[wi],delete s[na],delete s[Ic],delete s[IS],delete s[US])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Rg(i){return i.tag===5||i.tag===3||i.tag===4}function Pg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Rg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function xf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Sl));else if(f!==4&&(i=i.child,i!==null))for(xf(i,s,a),i=i.sibling;i!==null;)xf(i,s,a),i=i.sibling}function Sf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Sf(i,s,a),i=i.sibling;i!==null;)Sf(i,s,a),i=i.sibling}var hn=null,hi=!1;function Mr(i,s,a){for(a=a.child;a!==null;)bg(i,s,a),a=a.sibling}function bg(i,s,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 5:Mn||qs(a,s);case 6:var f=hn,p=hi;hn=null,Mr(i,s,a),hn=f,hi=p,hn!==null&&(hi?(i=hn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(hi?(i=hn,a=a.stateNode,i.nodeType===8?Nc(i.parentNode,a):i.nodeType===1&&Nc(i,a),jo(i)):Nc(hn,a.stateNode));break;case 4:f=hn,p=hi,hn=a.stateNode.containerInfo,hi=!0,Mr(i,s,a),hn=f,hi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&_f(a,s,T),p=p.next}while(p!==f)}Mr(i,s,a);break;case 1:if(!Mn&&(qs(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(N){qt(a,s,N)}Mr(i,s,a);break;case 21:Mr(i,s,a);break;case 22:a.mode&1?(Mn=(f=Mn)||a.memoizedState!==null,Mr(i,s,a),Mn=f):Mr(i,s,a);break;default:Mr(i,s,a)}}function Dg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new ZS),s.forEach(function(f){var p=aM.bind(null,i,f);a.has(f)||(a.add(f),f.then(p,p))})}}function pi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=i,T=s,N=T;e:for(;N!==null;){switch(N.tag){case 5:hn=N.stateNode,hi=!1;break e;case 3:hn=N.stateNode.containerInfo,hi=!0;break e;case 4:hn=N.stateNode.containerInfo,hi=!0;break e}N=N.return}if(hn===null)throw Error(t(160));bg(_,T,p),hn=null,hi=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(ee){qt(p,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Lg(s,i),s=s.sibling}function Lg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(pi(s,i),Ri(i),f&4){try{ha(3,i,i.return),Wl(3,i)}catch(We){qt(i,i.return,We)}try{ha(5,i,i.return)}catch(We){qt(i,i.return,We)}}break;case 1:pi(s,i),Ri(i),f&512&&a!==null&&qs(a,a.return);break;case 5:if(pi(s,i),Ri(i),f&512&&a!==null&&qs(a,a.return),i.flags&32){var p=i.stateNode;try{ct(p,"")}catch(We){qt(i,i.return,We)}}if(f&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,N=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{N==="input"&&_.type==="radio"&&_.name!=null&&pt(p,_),st(N,T);var ee=st(N,_);for(T=0;T<k.length;T+=2){var _e=k[T],xe=k[T+1];_e==="style"?nt(p,xe):_e==="dangerouslySetInnerHTML"?Fe(p,xe):_e==="children"?ct(p,xe):b(p,_e,xe,ee)}switch(N){case"input":ft(p,_);break;case"textarea":me(p,_);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ne=_.value;Ne!=null?D(p,!!_.multiple,Ne,!1):ge!==!!_.multiple&&(_.defaultValue!=null?D(p,!!_.multiple,_.defaultValue,!0):D(p,!!_.multiple,_.multiple?[]:"",!1))}p[na]=_}catch(We){qt(i,i.return,We)}}break;case 6:if(pi(s,i),Ri(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(We){qt(i,i.return,We)}}break;case 3:if(pi(s,i),Ri(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{jo(s.containerInfo)}catch(We){qt(i,i.return,We)}break;case 4:pi(s,i),Ri(i);break;case 13:pi(s,i),Ri(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Tf=q())),f&4&&Dg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Mn=(ee=Mn)||_e,pi(s,i),Mn=ee):pi(s,i),Ri(i),f&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!_e&&i.mode&1)for(ke=i,_e=i.child;_e!==null;){for(xe=ke=_e;ke!==null;){switch(ge=ke,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:ha(4,ge,ge.return);break;case 1:qs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(We){qt(f,a,We)}}break;case 5:qs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ug(xe);continue}}Ne!==null?(Ne.return=ge,ke=Ne):Ug(xe)}_e=_e.sibling}e:for(_e=null,xe=i;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,ee?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(N=xe.stateNode,k=xe.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Ke("display",T))}catch(We){qt(i,i.return,We)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(We){qt(i,i.return,We)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:pi(s,i),Ri(i),f&4&&Dg(i);break;case 21:break;default:pi(s,i),Ri(i)}}function Ri(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Rg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ct(p,""),f.flags&=-33);var _=Pg(i);Sf(i,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,N=Pg(i);xf(i,N,T);break;default:throw Error(t(161))}}catch(k){qt(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function JS(i,s,a){ke=i,Ng(i)}function Ng(i,s,a){for(var f=(i.mode&1)!==0;ke!==null;){var p=ke,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Gl;if(!T){var N=p.alternate,k=N!==null&&N.memoizedState!==null||Mn;N=Gl;var ee=Mn;if(Gl=T,(Mn=k)&&!ee)for(ke=p;ke!==null;)T=ke,k=T.child,T.tag===22&&T.memoizedState!==null?Fg(p):k!==null?(k.return=T,ke=k):Fg(p);for(;_!==null;)ke=_,Ng(_),_=_.sibling;ke=p,Gl=N,Mn=ee}Ig(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,ke=_):Ig(i)}}function Ig(i){for(;ke!==null;){var s=ke;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mn||Wl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Mn)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:di(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Um(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Um(s,T,a)}break;case 5:var N=s.stateNode;if(a===null&&s.flags&4){a=N;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&jo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&yf(s)}catch(ge){qt(s,s.return,ge)}}if(s===i){ke=null;break}if(a=s.sibling,a!==null){a.return=s.return,ke=a;break}ke=s.return}}function Ug(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ke=a;break}ke=s.return}}function Fg(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Wl(4,s)}catch(k){qt(s,a,k)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(k){qt(s,p,k)}}var _=s.return;try{yf(s)}catch(k){qt(s,_,k)}break;case 5:var T=s.return;try{yf(s)}catch(k){qt(s,T,k)}}}catch(k){qt(s,s.return,k)}if(s===i){ke=null;break}var N=s.sibling;if(N!==null){N.return=s.return,ke=N;break}ke=s.return}}var eM=Math.ceil,jl=R.ReactCurrentDispatcher,Mf=R.ReactCurrentOwner,ii=R.ReactCurrentBatchConfig,Et=0,un=null,Qt=null,pn=0,qn=0,$s=vr(0),nn=0,pa=null,ns=0,Xl=0,Ef=0,ma=null,Vn=null,Tf=0,Ks=1/0,Wi=null,Yl=!1,wf=null,Er=null,ql=!1,Tr=null,$l=0,ga=0,Af=null,Kl=-1,Zl=0;function Ln(){return Et&6?q():Kl!==-1?Kl:Kl=q()}function wr(i){return i.mode&1?Et&2&&pn!==0?pn&-pn:OS.transition!==null?(Zl===0&&(Zl=Nt()),Zl):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:kp(i.type)),i):1}function mi(i,s,a,f){if(50<ga)throw ga=0,Af=null,Error(t(185));on(i,a,f),(!(Et&2)||i!==un)&&(i===un&&(!(Et&2)&&(Xl|=a),nn===4&&Ar(i,pn)),Hn(i,f),a===1&&Et===0&&!(s.mode&1)&&(Ks=q()+500,wl&&yr()))}function Hn(i,s){var a=i.callbackNode;bn(i,s);var f=vn(i,i===un?pn:0);if(f===0)a!==null&&A(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&A(a),s===1)i.tag===0?FS(kg.bind(null,i)):Em(kg.bind(null,i)),LS(function(){!(Et&6)&&yr()}),a=null;else{switch(Ti(f)){case 1:a=Se;break;case 4:a=Re;break;case 16:a=Le;break;case 536870912:a=it;break;default:a=Le}a=Xg(a,Og.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Og(i,s){if(Kl=-1,Zl=0,Et&6)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=vn(i,i===un?pn:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=Ql(i,f);else{s=f;var p=Et;Et|=2;var _=zg();(un!==i||pn!==s)&&(Wi=null,Ks=q()+500,rs(i,s));do try{iM();break}catch(N){Bg(i,N)}while(!0);Gc(),jl.current=_,Et=p,Qt!==null?s=0:(un=null,pn=0,s=nn)}if(s!==0){if(s===2&&(p=Fi(i),p!==0&&(f=p,s=Cf(i,p))),s===1)throw a=pa,rs(i,0),Ar(i,f),Hn(i,q()),a;if(s===6)Ar(i,f);else{if(p=i.current.alternate,!(f&30)&&!tM(p)&&(s=Ql(i,f),s===2&&(_=Fi(i),_!==0&&(f=_,s=Cf(i,_))),s===1))throw a=pa,rs(i,0),Ar(i,f),Hn(i,q()),a;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ss(i,Vn,Wi);break;case 3:if(Ar(i,f),(f&130023424)===f&&(s=Tf+500-q(),10<s)){if(vn(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){Ln(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Lc(ss.bind(null,i,Vn,Wi),s);break}ss(i,Vn,Wi);break;case 4:if(Ar(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var T=31-at(f);_=1<<T,T=s[T],T>p&&(p=T),f&=~_}if(f=p,f=q()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*eM(f/1960))-f,10<f){i.timeoutHandle=Lc(ss.bind(null,i,Vn,Wi),f);break}ss(i,Vn,Wi);break;case 5:ss(i,Vn,Wi);break;default:throw Error(t(329))}}}return Hn(i,q()),i.callbackNode===a?Og.bind(null,i):null}function Cf(i,s){var a=ma;return i.current.memoizedState.isDehydrated&&(rs(i,s).flags|=256),i=Ql(i,s),i!==2&&(s=Vn,Vn=a,s!==null&&Rf(s)),i}function Rf(i){Vn===null?Vn=i:Vn.push.apply(Vn,i)}function tM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!ci(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ar(i,s){for(s&=~Ef,s&=~Xl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-at(s),f=1<<a;i[a]=-1,s&=~f}}function kg(i){if(Et&6)throw Error(t(327));Zs();var s=vn(i,0);if(!(s&1))return Hn(i,q()),null;var a=Ql(i,s);if(i.tag!==0&&a===2){var f=Fi(i);f!==0&&(s=f,a=Cf(i,f))}if(a===1)throw a=pa,rs(i,0),Ar(i,s),Hn(i,q()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ss(i,Vn,Wi),Hn(i,q()),null}function Pf(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&(Ks=q()+500,wl&&yr())}}function is(i){Tr!==null&&Tr.tag===0&&!(Et&6)&&Zs();var s=Et;Et|=1;var a=ii.transition,f=Mt;try{if(ii.transition=null,Mt=1,i)return i()}finally{Mt=f,ii.transition=a,Et=s,!(Et&6)&&yr()}}function bf(){qn=$s.current,kt($s)}function rs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,DS(a)),Qt!==null)for(a=Qt.return;a!==null;){var f=a;switch(kc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&El();break;case 3:Xs(),kt(kn),kt(yn),Zc();break;case 5:$c(f);break;case 4:Xs();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Wc(f.type._context);break;case 22:case 23:bf()}a=a.return}if(un=i,Qt=i=Cr(i.current,null),pn=qn=s,nn=0,pa=null,Ef=Xl=ns=0,Vn=ma=null,Jr!==null){for(s=0;s<Jr.length;s++)if(a=Jr[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}a.pending=f}Jr=null}return i}function Bg(i,s){do{var a=Qt;try{if(Gc(),Ul.current=Bl,Fl){for(var f=Wt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}Fl=!1}if(ts=0,ln=tn=Wt=null,la=!1,ua=0,Mf.current=null,a===null||a.return===null){nn=1,pa=s,Qt=null;break}e:{var _=i,T=a.return,N=a,k=s;if(s=pn,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,_e=N,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=cg(T);if(Ne!==null){Ne.flags&=-257,fg(Ne,T,N,_,s),Ne.mode&1&&ug(_,ee,s),s=Ne,k=ee;var He=s.updateQueue;if(He===null){var We=new Set;We.add(k),s.updateQueue=We}else He.add(k);break e}else{if(!(s&1)){ug(_,ee,s),Df();break e}k=Error(t(426))}}else if(Vt&&N.mode&1){var Kt=cg(T);if(Kt!==null){!(Kt.flags&65536)&&(Kt.flags|=256),fg(Kt,T,N,_,s),Vc(Ys(k,N));break e}}_=k=Ys(k,N),nn!==4&&(nn=2),ma===null?ma=[_]:ma.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=ag(_,k,s);Im(_,Y);break e;case 1:N=k;var G=_.type,K=_.stateNode;if(!(_.flags&128)&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Er===null||!Er.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=lg(_,N,s);Im(_,Te);break e}}_=_.return}while(_!==null)}Hg(a)}catch(Ye){s=Ye,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function zg(){var i=jl.current;return jl.current=Bl,i===null?Bl:i}function Df(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||!(ns&268435455)&&!(Xl&268435455)||Ar(un,pn)}function Ql(i,s){var a=Et;Et|=2;var f=zg();(un!==i||pn!==s)&&(Wi=null,rs(i,s));do try{nM();break}catch(p){Bg(i,p)}while(!0);if(Gc(),Et=a,jl.current=f,Qt!==null)throw Error(t(261));return un=null,pn=0,nn}function nM(){for(;Qt!==null;)Vg(Qt)}function iM(){for(;Qt!==null&&!j();)Vg(Qt)}function Vg(i){var s=jg(i.alternate,i,qn);i.memoizedProps=i.pendingProps,s===null?Hg(i):Qt=s,Mf.current=null}function Hg(i){var s=i;do{var a=s.alternate;if(i=s.return,s.flags&32768){if(a=KS(a,s),a!==null){a.flags&=32767,Qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Qt=null;return}}else if(a=$S(a,s,qn),a!==null){Qt=a;return}if(s=s.sibling,s!==null){Qt=s;return}Qt=s=i}while(s!==null);nn===0&&(nn=5)}function ss(i,s,a){var f=Mt,p=ii.transition;try{ii.transition=null,Mt=1,rM(i,s,a,f)}finally{ii.transition=p,Mt=f}return null}function rM(i,s,a,f){do Zs();while(Tr!==null);if(Et&6)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(dn(i,_),i===un&&(Qt=un=null,pn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ql||(ql=!0,Xg(Le,function(){return Zs(),null})),_=(a.flags&15990)!==0,a.subtreeFlags&15990||_){_=ii.transition,ii.transition=null;var T=Mt;Mt=1;var N=Et;Et|=4,Mf.current=null,QS(i,a),Lg(a,i),TS(bc),ul=!!Pc,bc=Pc=null,i.current=a,JS(a),J(),Et=N,Mt=T,ii.transition=_}else i.current=a;if(ql&&(ql=!1,Tr=i,$l=p),_=i.pendingLanes,_===0&&(Er=null),_t(a.stateNode),Hn(i,q()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(Yl)throw Yl=!1,i=wf,wf=null,i;return $l&1&&i.tag!==0&&Zs(),_=i.pendingLanes,_&1?i===Af?ga++:(ga=0,Af=i):ga=0,yr(),null}function Zs(){if(Tr!==null){var i=Ti($l),s=ii.transition,a=Mt;try{if(ii.transition=null,Mt=16>i?16:i,Tr===null)var f=!1;else{if(i=Tr,Tr=null,$l=0,Et&6)throw Error(t(331));var p=Et;for(Et|=4,ke=i.current;ke!==null;){var _=ke,T=_.child;if(ke.flags&16){var N=_.deletions;if(N!==null){for(var k=0;k<N.length;k++){var ee=N[k];for(ke=ee;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:ha(8,_e,_)}var xe=_e.child;if(xe!==null)xe.return=_e,ke=xe;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ne=_e.return;if(Cg(_e),_e===ee){ke=null;break}if(ge!==null){ge.return=Ne,ke=ge;break}ke=Ne}}}var He=_.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Kt=We.sibling;We.sibling=null,We=Kt}while(We!==null)}}ke=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,ke=T;else e:for(;ke!==null;){if(_=ke,_.flags&2048)switch(_.tag){case 0:case 11:case 15:ha(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,ke=Y;break e}ke=_.return}}var G=i.current;for(ke=G;ke!==null;){T=ke;var K=T.child;if(T.subtreeFlags&2064&&K!==null)K.return=T,ke=K;else e:for(T=G;ke!==null;){if(N=ke,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:Wl(9,N)}}catch(Ye){qt(N,N.return,Ye)}if(N===T){ke=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,ke=Te;break e}ke=N.return}}if(Et=p,yr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(tt,i)}catch{}f=!0}return f}finally{Mt=a,ii.transition=s}}return!1}function Gg(i,s,a){s=Ys(a,s),s=ag(i,s,1),i=Sr(i,s,1),s=Ln(),i!==null&&(on(i,1,s),Hn(i,s))}function qt(i,s,a){if(i.tag===3)Gg(i,i,a);else for(;s!==null;){if(s.tag===3){Gg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Er===null||!Er.has(f))){i=Ys(a,i),i=lg(s,i,1),s=Sr(s,i,1),i=Ln(),s!==null&&(on(s,1,i),Hn(s,i));break}}s=s.return}}function sM(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Ln(),i.pingedLanes|=i.suspendedLanes&a,un===i&&(pn&a)===a&&(nn===4||nn===3&&(pn&130023424)===pn&&500>q()-Tf?rs(i,0):Ef|=a),Hn(i,s)}function Wg(i,s){s===0&&(i.mode&1?(s=Yt,Yt<<=1,!(Yt&130023424)&&(Yt=4194304)):s=1);var a=Ln();i=Vi(i,s),i!==null&&(on(i,s,a),Hn(i,a))}function oM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Wg(i,a)}function aM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Wg(i,a)}var jg;jg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||kn.current)zn=!0;else{if(!(i.lanes&a)&&!(s.flags&128))return zn=!1,qS(i,s,a);zn=!!(i.flags&131072)}else zn=!1,Vt&&s.flags&1048576&&Tm(s,Cl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Hl(i,s),i=s.pendingProps;var p=Bs(s,yn.current);js(s,a),p=ef(null,s,f,i,p,a);var _=tf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(f)?(_=!0,Tl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Yc(s),p.updater=zl,s.stateNode=p,p._reactInternals=s,lf(s,f,i,a),s=df(null,s,f,!0,_,a)):(s.tag=0,Vt&&_&&Oc(s),Dn(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Hl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=uM(f),i=di(f,i),p){case 0:s=ff(null,s,f,i,a);break e;case 1:s=vg(null,s,f,i,a);break e;case 11:s=dg(null,s,f,i,a);break e;case 14:s=hg(null,s,f,di(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),ff(i,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),vg(i,s,f,p,a);case 3:e:{if(_g(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,Nm(i,s),Nl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Ys(Error(t(423)),s),s=yg(i,s,f,a,p);break e}else if(f!==p){p=Ys(Error(t(424)),s),s=yg(i,s,f,a,p);break e}else for(Yn=gr(s.stateNode.containerInfo.firstChild),Xn=s,Vt=!0,fi=null,a=Dm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),f===p){s=Gi(i,s,a);break e}Dn(i,s,f,a)}s=s.child}return s;case 5:return Fm(s),i===null&&zc(s),f=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Dc(f,p)?T=null:_!==null&&Dc(f,_)&&(s.flags|=32),gg(i,s),Dn(i,s,T,a),s.child;case 6:return i===null&&zc(s),null;case 13:return xg(i,s,a);case 4:return qc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):Dn(i,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),dg(i,s,f,p,a);case 7:return Dn(i,s,s.pendingProps,a),s.child;case 8:return Dn(i,s,s.pendingProps.children,a),s.child;case 12:return Dn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,Ut(bl,f._currentValue),f._currentValue=T,_!==null)if(ci(_.value,T)){if(_.children===p.children&&!kn.current){s=Gi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var N=_.dependencies;if(N!==null){T=_.child;for(var k=N.firstContext;k!==null;){if(k.context===f){if(_.tag===1){k=Hi(-1,a&-a),k.tag=2;var ee=_.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),ee.pending=k}}_.lanes|=a,k=_.alternate,k!==null&&(k.lanes|=a),jc(_.return,a,s),N.lanes|=a;break}k=k.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,N=T.alternate,N!==null&&(N.lanes|=a),jc(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Dn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,js(s,a),p=ti(p),f=f(p),s.flags|=1,Dn(i,s,f,a),s.child;case 14:return f=s.type,p=di(f,s.pendingProps),p=di(f.type,p),hg(i,s,f,p,a);case 15:return pg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),Hl(i,s),s.tag=1,Bn(f)?(i=!0,Tl(s)):i=!1,js(s,a),sg(s,f,p),lf(s,f,p,a),df(null,s,f,!0,i,a);case 19:return Mg(i,s,a);case 22:return mg(i,s,a)}throw Error(t(156,s.tag))};function Xg(i,s){return ol(i,s)}function lM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(i,s,a,f){return new lM(i,s,a,f)}function Lf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function uM(i){if(typeof i=="function")return Lf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ae)return 11;if(i===pe)return 14}return 2}function Cr(i,s){var a=i.alternate;return a===null?(a=ri(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Jl(i,s,a,f,p,_){var T=2;if(f=i,typeof i=="function")Lf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return os(a.children,p,_,s);case z:T=8,p|=8;break;case P:return i=ri(12,a,s,p|2),i.elementType=P,i.lanes=_,i;case te:return i=ri(13,a,s,p),i.elementType=te,i.lanes=_,i;case ce:return i=ri(19,a,s,p),i.elementType=ce,i.lanes=_,i;case re:return eu(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:T=10;break e;case H:T=9;break e;case ae:T=11;break e;case pe:T=14;break e;case ue:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ri(T,a,s,p),s.elementType=i,s.type=f,s.lanes=_,s}function os(i,s,a,f){return i=ri(7,i,f,s),i.lanes=a,i}function eu(i,s,a,f){return i=ri(22,i,f,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Nf(i,s,a){return i=ri(6,i,null,s),i.lanes=a,i}function If(i,s,a){return s=ri(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function cM(i,s,a,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Uf(i,s,a,f,p,_,T,N,k){return i=new cM(i,s,a,N,k),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ri(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(_),i}function fM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Yg(i){if(!i)return _r;i=i._reactInternals;e:{if(Ei(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Bn(a))return Sm(i,a,s)}return s}function qg(i,s,a,f,p,_,T,N,k){return i=Uf(a,f,!0,i,p,_,T,N,k),i.context=Yg(null),a=i.current,f=Ln(),p=wr(a),_=Hi(f,p),_.callback=s??null,Sr(a,_,p),i.current.lanes=p,on(i,p,f),Hn(i,f),i}function tu(i,s,a,f){var p=s.current,_=Ln(),T=wr(p);return a=Yg(a),s.context===null?s.context=a:s.pendingContext=a,s=Hi(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Sr(p,s,T),i!==null&&(mi(i,p,T,_),Ll(i,p,T)),T}function nu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function $g(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Ff(i,s){$g(i,s),(i=i.alternate)&&$g(i,s)}var Kg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Of(i){this._internalRoot=i}iu.prototype.render=Of.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));tu(i,s,null,null)},iu.prototype.unmount=Of.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;is(function(){tu(null,i,null,null)}),s[Oi]=null}};function iu(i){this._internalRoot=i}iu.prototype.unstable_scheduleHydration=function(i){if(i){var s=Np();i={blockedOn:null,target:i,priority:s};for(var a=0;a<hr.length&&s!==0&&s<hr[a].priority;a++);hr.splice(a,0,i),a===0&&Fp(i)}};function kf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ru(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function dM(i,s,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var ee=nu(T);_.call(ee)}}var T=qg(s,f,i,0,null,!1,!1,"",Zg);return i._reactRootContainer=T,i[Oi]=T.current,ea(i.nodeType===8?i.parentNode:i),is(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var N=f;f=function(){var ee=nu(k);N.call(ee)}}var k=Uf(i,0,!1,null,null,!1,!1,"",Zg);return i._reactRootContainer=k,i[Oi]=k.current,ea(i.nodeType===8?i.parentNode:i),is(function(){tu(s,k,a,f)}),k}function su(i,s,a,f,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var N=p;p=function(){var k=nu(T);N.call(k)}}tu(s,T,i,p)}else T=dM(a,s,i,p,f);return nu(T)}Dp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=vt(s.pendingLanes);a!==0&&(an(s,a|1),Hn(s,q()),!(Et&6)&&(Ks=q()+500,yr()))}break;case 13:is(function(){var f=Vi(i,1);if(f!==null){var p=Ln();mi(f,i,1,p)}}),Ff(i,1)}},lc=function(i){if(i.tag===13){var s=Vi(i,134217728);if(s!==null){var a=Ln();mi(s,i,134217728,a)}Ff(i,134217728)}},Lp=function(i){if(i.tag===13){var s=wr(i),a=Vi(i,s);if(a!==null){var f=Ln();mi(a,i,s,f)}Ff(i,s)}},Np=function(){return Mt},Ip=function(i,s){var a=Mt;try{return Mt=i,s()}finally{Mt=a}},Ce=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var p=Ml(f);if(!p)throw Error(t(90));gt(f),ft(f,p)}}}break;case"textarea":me(i,a);break;case"select":s=a.value,s!=null&&D(i,!!a.multiple,s,!1)}},Ft=Pf,en=is;var hM={usingClientEntryPoint:!1,Events:[ia,Os,Ml,be,ot,Pf]},va={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pM={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=rl(i),i===null?null:i.stateNode},findFiberByHostInstance:va.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{tt=ou.inject(pM),Ge=ou}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM,Gn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(s))throw Error(t(200));return fM(i,s,null,a)},Gn.createRoot=function(i,s){if(!kf(i))throw Error(t(299));var a=!1,f="",p=Kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Uf(i,1,!1,null,null,a,!1,f,p),i[Oi]=s.current,ea(i.nodeType===8?i.parentNode:i),new Of(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=rl(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return is(i)},Gn.hydrate=function(i,s,a){if(!ru(s))throw Error(t(200));return su(null,i,s,!0,a)},Gn.hydrateRoot=function(i,s,a){if(!kf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",T=Kg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=qg(s,null,i,1,a??null,p,!1,_,T),i[Oi]=s.current,ea(i),f)for(i=0;i<f.length;i++)a=f[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new iu(s)},Gn.render=function(i,s,a){if(!ru(s))throw Error(t(200));return su(null,i,s,!1,a)},Gn.unmountComponentAtNode=function(i){if(!ru(i))throw Error(t(40));return i._reactRootContainer?(is(function(){su(null,null,i,!1,function(){i._reactRootContainer=null,i[Oi]=null})}),!0):!1},Gn.unstable_batchedUpdates=Pf,Gn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!ru(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return su(i,s,a,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var sv;function MM(){if(sv)return Vf.exports;sv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vf.exports=SM(),Vf.exports}var ov;function EM(){if(ov)return au;ov=1;var n=MM();return au.createRoot=n.createRoot,au.hydrateRoot=n.hydrateRoot,au}var TM=EM();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T_=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>Oe.createElement("svg",{ref:d,...AM,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:T_("lucide",o),...c},[...u.map(([h,m])=>Oe.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=(n,e)=>{const t=Oe.forwardRef(({className:r,...o},l)=>Oe.createElement(CM,{ref:l,iconNode:e,className:T_(`lucide-${wM(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],PM=gn("Award",RM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],DM=gn("CircleCheckBig",bM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],w_=gn("Code",LM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],IM=gn("ContactRound",NM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],FM=gn("ExternalLink",UM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]],A_=gn("FolderOpenDot",OM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],C_=gn("Github",kM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],R_=gn("GraduationCap",BM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],VM=gn("House",zM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],GM=gn("Linkedin",HM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],jM=gn("Mail",WM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],YM=gn("Phone",XM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$M=gn("RefreshCw",qM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ZM=gn("Send",KM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]],JM=gn("UserPen",QM);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],P_=gn("Video",eE);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nE=gn("X",tE);function iE(){const n=[{icon:jM,type:"Email",value:"fatma.mohamed13499@gmail.com",link:"mailto:fatma.mohamed13499@gmail.com"},{icon:GM,type:"LinkedIn",value:"Fatma Mohamed Ali",link:"https://www.linkedin.com/in/fatma-mohamed-alii"},{icon:C_,type:"GitHub",value:"fatma-mohamed99",link:"https://github.com/fatma-mohamed99"},{icon:YM,type:"Phone",value:"+20 106 029 9607",link:""}];return ie.jsx("div",{className:" text-amber-100  p-3 sm:p-2  flex items-center border-t-8 border-primary/40 rounded-4xl",children:ie.jsxs("div",{className:"container mx-auto pt-4 ",children:[ie.jsxs("h2",{className:"text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4",children:[ie.jsx(ZM,{className:"text-primary"}),"Connect with Me"]}),ie.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:n.map((e,t)=>e.link?ie.jsxs("a",{href:e.link,target:"_blank",className:"bg-primary/40 sm:max-w-fit  sm:min-w-[100%] min-w-[10%] max-w-[100%] p-6 rounded-xl flex items-center gap-4 hover:shadow-md hover:shadow-amber-100 cursor-pointer transition-transform",children:[ie.jsx(e.icon,{className:"w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10"}),ie.jsxs("div",{children:[ie.jsx("h3",{className:"text-xl font-semibold",children:e.type}),ie.jsx("p",{className:"break-all",children:e.value})]})]},t):ie.jsxs("div",{className:"bg-primary/40 p-6 rounded-xl flex items-center gap-4",children:[ie.jsx(e.icon,{className:" w-6 h-6  sm:w-8 sm:h-8  md:w-10 md:h-10"}),ie.jsxs("div",{children:[ie.jsx("h3",{className:"text-xl font-semibold",children:e.type}),ie.jsx("p",{children:e.value})]})]},t))})]})})}const b_=Oe.createContext({});function rE(n){const e=Oe.useRef(null);return e.current===null&&(e.current=n()),e.current}const Vh=Oe.createContext(null),D_=Oe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function sE(n=!0){const e=Oe.useContext(Vh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Oe.useId();Oe.useEffect(()=>{n&&o(l)},[n]);const u=Oe.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Hh=typeof window<"u",oE=Hh?Oe.useLayoutEffect:Oe.useEffect,Qn=n=>n;let Ud=Qn;function Gh(n){let e;return()=>(e===void 0&&(e=n()),e)}const Co=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},tr=n=>n*1e3,nr=n=>n/1e3,aE={skipAnimations:!1,useManualTiming:!1};function lE(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const S=g&&r?e:t;return m&&l.add(h),S.has(h)||S.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const lu=["read","resolveKeyframes","update","preRender","render","postRender"],uE=40;function L_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=lu.reduce((y,L)=>(y[L]=lE(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:v}=u,S=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,uE),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(S))},M=()=>{t=!0,r=!0,o.isProcessing||n(S)};return{schedule:lu.reduce((y,L)=>{const b=u[L];return y[L]=(R,I=!1,O=!1)=>(t||M(),b.schedule(R,I,O)),y},{}),cancel:y=>{for(let L=0;L<lu.length;L++)u[lu[L]].cancel(y)},state:o,steps:u}}const{schedule:Bt,cancel:Vr,state:mn,steps:Wf}=L_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qn,!0),N_=Oe.createContext({strict:!1}),av={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ro={};for(const n in av)Ro[n]={isEnabled:e=>av[n].some(t=>!!e[t])};function cE(n){for(const e in n)Ro[e]={...Ro[e],...n[e]}}const fE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Wu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||fE.has(n)}let I_=n=>!Wu(n);function dE(n){n&&(I_=e=>e.startsWith("on")?!Wu(e):n(e))}try{dE(require("@emotion/is-prop-valid").default)}catch{}function hE(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(I_(o)||t===!0&&Wu(o)||!e&&!Wu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function pE(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Ju=Oe.createContext({});function Oa(n){return typeof n=="string"||Array.isArray(n)}function ec(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Wh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jh=["initial",...Wh];function tc(n){return ec(n.animate)||jh.some(e=>Oa(n[e]))}function U_(n){return!!(tc(n)||n.variants)}function mE(n,e){if(tc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Oa(t)?t:void 0,animate:Oa(r)?r:void 0}}return n.inherit!==!1?e:{}}function gE(n){const{initial:e,animate:t}=mE(n,Oe.useContext(Ju));return Oe.useMemo(()=>({initial:e,animate:t}),[lv(e),lv(t)])}function lv(n){return Array.isArray(n)?n.join(" "):n}const vE=Symbol.for("motionComponentSymbol");function _o(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _E(n,e,t){return Oe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):_o(t)&&(t.current=r))},[e])}const Xh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yE="framerAppearId",F_="data-"+Xh(yE),{schedule:Yh,cancel:pL}=L_(queueMicrotask,!1),O_=Oe.createContext({});function xE(n,e,t,r,o){var l,u;const{visualElement:c}=Oe.useContext(Ju),d=Oe.useContext(N_),h=Oe.useContext(Vh),m=Oe.useContext(D_).reducedMotion,g=Oe.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=g.current,S=Oe.useContext(O_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&SE(g.current,t,o,S);const M=Oe.useRef(!1);Oe.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[F_],x=Oe.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return oE(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Yh.render(v.render),x.current&&v.animationState&&v.animationState.animateChanges())}),Oe.useEffect(()=>{v&&(!x.current&&v.animationState&&v.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),x.current=!1))}),v}function SE(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:k_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&_o(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function k_(n){if(n)return n.options.allowProjection!==!1?n.projection:k_(n.parent)}function ME({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&cE(n);function c(h,m){let g;const v={...Oe.useContext(D_),...h,layoutId:EE(h)},{isStatic:S}=v,M=gE(h),E=r(h,S);if(!S&&Hh){TE();const x=wE(v);g=x.MeasureLayout,M.visualElement=xE(o,E,v,e,x.ProjectionNode)}return ie.jsxs(Ju.Provider,{value:M,children:[g&&M.visualElement?ie.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,_E(E,M.visualElement,m),E,S,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Oe.forwardRef(c);return d[vE]=o,d}function EE({layoutId:n}){const e=Oe.useContext(b_).id;return e&&n!==void 0?e+"-"+n:n}function TE(n,e){Oe.useContext(N_).strict}function wE(n){const{drag:e,layout:t}=Ro;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const AE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qh(n){return typeof n!="string"||n.includes("-")?!1:!!(AE.indexOf(n)>-1||/[A-Z]/u.test(n))}function uv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function $h(n,e,t,r){if(typeof e=="function"){const[o,l]=uv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=uv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Fd=n=>Array.isArray(n),CE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),RE=n=>Fd(n)?n[n.length-1]||0:n,An=n=>!!(n&&n.getVelocity);function Uu(n){const e=An(n)?n.get():n;return CE(e)?e.toValue():e}function PE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:bE(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const B_=n=>(e,t)=>{const r=Oe.useContext(Ju),o=Oe.useContext(Vh),l=()=>PE(n,e,r,o);return t?l():rE(l)};function bE(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Uu(l[v]);let{initial:u,animate:c}=n;const d=tc(n),h=U_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;if(g&&typeof g!="boolean"&&!ec(g)){const v=Array.isArray(g)?g:[g];for(let S=0;S<v.length;S++){const M=$h(n,v[S]);if(M){const{transitionEnd:E,transition:x,...y}=M;for(const L in y){let b=y[L];if(Array.isArray(b)){const R=m?b.length-1:0;b=b[R]}b!==null&&(o[L]=b)}for(const L in E)o[L]=E[L]}}}return o}const Oo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cs=new Set(Oo),z_=n=>e=>typeof e=="string"&&e.startsWith(n),Kh=z_("--"),DE=z_("var(--"),Zh=n=>DE(n)?LE.test(n.split("/*")[0].trim()):!1,LE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,V_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,rr=(n,e,t)=>t>e?e:t<n?n:t,ko={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ka={...ko,transform:n=>rr(0,1,n)},uu={...ko,default:1},ja=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ur=ja("deg"),Li=ja("%"),et=ja("px"),NE=ja("vh"),IE=ja("vw"),cv={...Li,parse:n=>Li.parse(n)/100,transform:n=>Li.transform(n*100)},UE={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},FE={rotate:Ur,rotateX:Ur,rotateY:Ur,rotateZ:Ur,scale:uu,scaleX:uu,scaleY:uu,scaleZ:uu,skew:Ur,skewX:Ur,skewY:Ur,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:ka,originX:cv,originY:cv,originZ:et},fv={...ko,transform:Math.round},Qh={...UE,...FE,zIndex:fv,size:et,fillOpacity:ka,strokeOpacity:ka,numOctaves:fv},OE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},kE=Oo.length;function BE(n,e,t){let r="",o=!0;for(let l=0;l<kE;l++){const u=Oo[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=V_(c,Qh[u]);if(!d){o=!1;const m=OE[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Jh(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Cs.has(d)){u=!0;continue}else if(Kh(d)){o[d]=h;continue}else{const m=V_(h,Qh[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=BE(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const zE={offset:"stroke-dashoffset",array:"stroke-dasharray"},VE={offset:"strokeDashoffset",array:"strokeDasharray"};function HE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?zE:VE;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function dv(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function GE(n,e,t){const r=dv(e,n.x,n.width),o=dv(t,n.y,n.height);return`${r} ${o}`}function ep(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g){if(Jh(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:S,dimensions:M}=n;v.transform&&(M&&(S.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||S.transform)&&(S.transformOrigin=GE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&HE(v,u,c,d,!1)}const tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),H_=()=>({...tp(),attrs:{}}),np=n=>typeof n=="string"&&n.toLowerCase()==="svg";function G_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const W_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function j_(n,e,t,r){G_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(W_.has(o)?o:Xh(o),e.attrs[o])}const Ba={};function WE(n){for(const e in n)Ba[e]=n[e],Kh(e)&&(Ba[e].isCSSVariable=!0)}function X_(n,{layout:e,layoutId:t}){return Cs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ba[n]||n==="opacity")}function ip(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(An(o[u])||e.style&&An(e.style[u])||X_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function Y_(n,e,t){const r=ip(n,e,t);for(const o in n)if(An(n[o])||An(e[o])){const l=Oo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function jE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const hv=["x","y","width","height","cx","cy","r"],XE={useVisualState:B_({scrapeMotionValuesFromProps:Y_,createRenderState:H_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Cs.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<hv.length;c++){const d=hv[c];n[d]!==e[d]&&(u=!0)}u&&Bt.read(()=>{jE(t,r),Bt.render(()=>{ep(r,o,np(t.tagName),n.transformTemplate),j_(t,r)})})}})},YE={useVisualState:B_({scrapeMotionValuesFromProps:ip,createRenderState:tp})};function q_(n,e,t){for(const r in e)!An(e[r])&&!X_(r,t)&&(n[r]=e[r])}function qE({transformTemplate:n},e){return Oe.useMemo(()=>{const t=tp();return Jh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function $E(n,e){const t=n.style||{},r={};return q_(r,t,n),Object.assign(r,qE(n,e)),r}function KE(n,e){const t={},r=$E(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function ZE(n,e,t,r){const o=Oe.useMemo(()=>{const l=H_();return ep(l,e,np(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};q_(l,n.style,n),o.style={...l,...o.style}}return o}function QE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(qh(t)?ZE:KE)(r,l,u,t),h=hE(r,typeof t=="string",n),m=t!==Oe.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=Oe.useMemo(()=>An(g)?g.get():g,[g]);return Oe.createElement(t,{...m,children:v})}}function JE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...qh(r)?XE:YE,preloadedFeatures:n,useRender:QE(o),createVisualElement:e,Component:r};return ME(u)}}function $_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function nc(n,e,t){const r=n.getProps();return $h(r,e,t!==void 0?t:r.custom,n)}const eT=Gh(()=>window.ScrollTimeline!==void 0);class tT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(eT()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class nT extends tT{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function rp(n,e){return n?n[e]||n.default||n:void 0}const Od=2e4;function K_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Od;)e+=t,r=n.next(e);return e>=Od?1/0:e}function sp(n){return typeof n=="function"}function pv(n,e){n.timeline=e,n.onfinish=null}const op=n=>Array.isArray(n)&&typeof n[0]=="number",iT={linearEasing:void 0};function rT(n,e){const t=Gh(n);return()=>{var r;return(r=iT[e])!==null&&r!==void 0?r:t()}}const ju=rT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Z_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Co(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function Q_(n){return!!(typeof n=="function"&&ju()||!n||typeof n=="string"&&(n in kd||ju())||op(n)||Array.isArray(n)&&n.every(Q_))}const Ra=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,kd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ra([0,.65,.55,1]),circOut:Ra([.55,0,1,.45]),backIn:Ra([.31,.01,.66,-.59]),backOut:Ra([.33,1.53,.69,.99])};function J_(n,e){if(n)return typeof n=="function"&&ju()?Z_(n,e):op(n)?Ra(n):Array.isArray(n)?n.map(t=>J_(t,e)||kd.easeOut):kd[n]}const yi={x:!1,y:!1};function ey(){return yi.x||yi.y}function ty(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function ny(n,e){const t=ty(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function mv(n){return!(n.pointerType==="touch"||ey())}function sT(n,e,t={}){const[r,o,l]=ny(n,t),u=c=>{if(!mv(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const m=g=>{mv(g)&&(h(g),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const iy=(n,e)=>e?n===e?!0:iy(n,e.parentElement):!1,ap=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,oT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aT(n){return oT.has(n.tagName)||n.tabIndex!==-1}const Pa=new WeakSet;function gv(n){return e=>{e.key==="Enter"&&n(e)}}function jf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const lT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=gv(()=>{if(Pa.has(t))return;jf(t,"down");const o=gv(()=>{jf(t,"up")}),l=()=>jf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function vv(n){return ap(n)&&!ey()}function uT(n,e,t={}){const[r,o,l]=ny(n,t),u=c=>{const d=c.currentTarget;if(!vv(c)||Pa.has(d))return;Pa.add(d);const h=e(d,c),m=(S,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!vv(S)||!Pa.has(d))&&(Pa.delete(d),typeof h=="function"&&h(S,{success:M}))},g=S=>{m(S,t.useGlobalTarget||iy(d,S.target))},v=S=>{m(S,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!aT(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>lT(h,o),o)}),l}function cT(n){return n==="x"||n==="y"?yi[n]?null:(yi[n]=!0,()=>{yi[n]=!1}):yi.x||yi.y?null:(yi.x=yi.y=!0,()=>{yi.x=yi.y=!1})}const ry=new Set(["width","height","top","left","right","bottom",...Oo]);let Fu;function fT(){Fu=void 0}const Ni={now:()=>(Fu===void 0&&Ni.set(mn.isProcessing||aE.useManualTiming?mn.timestamp:performance.now()),Fu),set:n=>{Fu=n,queueMicrotask(fT)}};function lp(n,e){n.indexOf(e)===-1&&n.push(e)}function up(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class cp{constructor(){this.subscriptions=[]}add(e){return lp(this.subscriptions,e),()=>up(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function sy(n,e){return e?n*(1e3/e):0}const _v=30,dT=n=>!isNaN(parseFloat(n));class hT{constructor(e,t={}){this.version="12.0.6",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ni.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ni.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new cp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Bt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>_v)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,_v);return sy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function za(n,e){return new hT(n,e)}function pT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,za(t))}function mT(n,e){const t=nc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=RE(l[u]);pT(n,u,c)}}function gT(n){return!!(An(n)&&n.add)}function Bd(n,e){const t=n.getValue("willChange");if(gT(t))return t.add(e)}function oy(n){return n.props[F_]}const ay=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,vT=1e-7,_T=12;function yT(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=ay(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>vT&&++c<_T);return u}function Xa(n,e,t,r){if(n===e&&t===r)return Qn;const o=l=>yT(l,0,1,n,t);return l=>l===0||l===1?l:ay(o(l),e,r)}const ly=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,uy=n=>e=>1-n(1-e),cy=Xa(.33,1.53,.69,.99),fp=uy(cy),fy=ly(fp),dy=n=>(n*=2)<1?.5*fp(n):.5*(2-Math.pow(2,-10*(n-1))),dp=n=>1-Math.sin(Math.acos(n)),hy=uy(dp),py=ly(dp),my=n=>/^0[^.\s]+$/u.test(n);function xT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||my(n):!0}const Na=n=>Math.round(n*1e5)/1e5,hp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ST(n){return n==null}const MT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(n,e)=>t=>!!(typeof t=="string"&&MT.test(t)&&t.startsWith(n)||e&&!ST(t)&&Object.prototype.hasOwnProperty.call(t,e)),gy=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(hp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},ET=n=>rr(0,255,n),Xf={...ko,transform:n=>Math.round(ET(n))},xs={test:pp("rgb","red"),parse:gy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Xf.transform(n)+", "+Xf.transform(e)+", "+Xf.transform(t)+", "+Na(ka.transform(r))+")"};function TT(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const zd={test:pp("#"),parse:TT,transform:xs.transform},yo={test:pp("hsl","hue"),parse:gy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Li.transform(Na(e))+", "+Li.transform(Na(t))+", "+Na(ka.transform(r))+")"},wn={test:n=>xs.test(n)||zd.test(n)||yo.test(n),parse:n=>xs.test(n)?xs.parse(n):yo.test(n)?yo.parse(n):zd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?xs.transform(n):yo.transform(n)},wT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function AT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(hp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(wT))===null||t===void 0?void 0:t.length)||0)>0}const vy="number",_y="color",CT="var",RT="var(",yv="${}",PT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Va(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(PT,d=>(wn.test(d)?(r.color.push(l),o.push(_y),t.push(wn.parse(d))):d.startsWith(RT)?(r.var.push(l),o.push(CT),t.push(d)):(r.number.push(l),o.push(vy),t.push(parseFloat(d))),++l,yv)).split(yv);return{values:t,split:c,indexes:r,types:o}}function yy(n){return Va(n).values}function xy(n){const{split:e,types:t}=Va(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===vy?l+=Na(o[u]):c===_y?l+=wn.transform(o[u]):l+=o[u]}return l}}const bT=n=>typeof n=="number"?0:n;function DT(n){const e=yy(n);return xy(n)(e.map(bT))}const Hr={test:AT,parse:yy,createTransformer:xy,getAnimatableNone:DT},LT=new Set(["brightness","contrast","saturate","opacity"]);function NT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(hp)||[];if(!r)return n;const o=t.replace(r,"");let l=LT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const IT=/\b([a-z-]*)\(.*?\)/gu,Vd={...Hr,getAnimatableNone:n=>{const e=n.match(IT);return e?e.map(NT).join(" "):n}},UT={...Qh,color:wn,backgroundColor:wn,outlineColor:wn,fill:wn,stroke:wn,borderColor:wn,borderTopColor:wn,borderRightColor:wn,borderBottomColor:wn,borderLeftColor:wn,filter:Vd,WebkitFilter:Vd},mp=n=>UT[n];function Sy(n,e){let t=mp(n);return t!==Vd&&(t=Hr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const FT=new Set(["auto","none","0"]);function OT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!FT.has(l)&&Va(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Sy(t,o)}const xv=n=>n===ko||n===et,Sv=(n,e)=>parseFloat(n.split(", ")[e]),Mv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Sv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?Sv(l[1],n):0}},kT=new Set(["x","y","z"]),BT=Oo.filter(n=>!kT.has(n));function zT(n){const e=[];return BT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Po={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Mv(4,13),y:Mv(5,14)};Po.translateX=Po.x;Po.translateY=Po.y;const Es=new Set;let Hd=!1,Gd=!1;function My(){if(Gd){const n=Array.from(Es).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=zT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gd=!1,Hd=!1,Es.forEach(n=>n.complete()),Es.clear()}function Ey(){Es.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Gd=!0)})}function VT(){Ey(),My()}class gp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Es.add(this),Hd||(Hd=!0,Bt.read(Ey),Bt.resolveKeyframes(My))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Es.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Es.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ty=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),HT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function GT(n){const e=HT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function wy(n,e,t=1){const[r,o]=GT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return Ty(u)?parseFloat(u):u}return Zh(o)?wy(o,e,t+1):o}const Ay=n=>e=>e.test(n),WT={test:n=>n==="auto",parse:n=>n},Cy=[ko,et,Li,Ur,IE,NE,WT],Ev=n=>Cy.find(Ay(n));class Ry extends gp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Zh(h))){const m=wy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!ry.has(r)||e.length!==2)return;const[o,l]=e,u=Ev(o),c=Ev(l);if(u!==c)if(xv(u)&&xv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)xT(e[o])&&r.push(o);r.length&&OT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Po[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Po[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Tv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Hr.test(n)||n==="0")&&!n.startsWith("url("));function jT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function XT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Tv(o,e),c=Tv(l,e);return!u||!c?!1:jT(n)||(t==="spring"||sp(t))&&r}const YT=n=>n!==null;function ic(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(YT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const qT=40;class Py{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ni.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>qT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&VT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ni.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!XT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(ic(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const jt=(n,e,t)=>n+(e-n)*t;function Yf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function $T({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Yf(d,c,n+1/3),l=Yf(d,c,n),u=Yf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Xu(n,e){return t=>t>0?e:n}const qf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},KT=[zd,xs,yo],ZT=n=>KT.find(e=>e.test(n));function wv(n){const e=ZT(n);if(!e)return!1;let t=e.parse(n);return e===yo&&(t=$T(t)),t}const Av=(n,e)=>{const t=wv(n),r=wv(e);if(!t||!r)return Xu(n,e);const o={...t};return l=>(o.red=qf(t.red,r.red,l),o.green=qf(t.green,r.green,l),o.blue=qf(t.blue,r.blue,l),o.alpha=jt(t.alpha,r.alpha,l),xs.transform(o))},QT=(n,e)=>t=>e(n(t)),Ya=(...n)=>n.reduce(QT),Wd=new Set(["none","hidden"]);function JT(n,e){return Wd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function e1(n,e){return t=>jt(n,e,t)}function vp(n){return typeof n=="number"?e1:typeof n=="string"?Zh(n)?Xu:wn.test(n)?Av:i1:Array.isArray(n)?by:typeof n=="object"?wn.test(n)?Av:t1:Xu}function by(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>vp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function t1(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=vp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function n1(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const i1=(n,e)=>{const t=Hr.createTransformer(e),r=Va(n),o=Va(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Wd.has(n)&&!o.values.length||Wd.has(e)&&!r.values.length?JT(n,e):Ya(by(n1(r,o),o.values),t):Xu(n,e)};function Dy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?jt(n,e,t):vp(n)(n,e)}const r1=5;function Ly(n,e,t){const r=Math.max(e-r1,0);return sy(t-n(r),e-r)}const $t={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cv=.001;function s1({duration:n=$t.duration,bounce:e=$t.bounce,velocity:t=$t.velocity,mass:r=$t.mass}){let o,l,u=1-e;u=rr($t.minDamping,$t.maxDamping,u),n=rr($t.minDuration,$t.maxDuration,nr(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,S=jd(h,u),M=Math.exp(-g);return Cv-v/S*M},l=h=>{const g=h*u*n,v=g*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=jd(Math.pow(h,2),u);return(-o(h)+Cv>0?-1:1)*((v-S)*M)/E}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-.001+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const c=5/n,d=a1(o,l,c);if(n=tr(n),isNaN(d))return{stiffness:$t.stiffness,damping:$t.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const o1=12;function a1(n,e,t){let r=t;for(let o=1;o<o1;o++)r=r-n(r)/e(r);return r}function jd(n,e){return n*Math.sqrt(1-e*e)}const l1=["duration","bounce"],u1=["stiffness","damping","mass"];function Rv(n,e){return e.some(t=>n[t]!==void 0)}function c1(n){let e={velocity:$t.velocity,stiffness:$t.stiffness,damping:$t.damping,mass:$t.mass,isResolvedFromDuration:!1,...n};if(!Rv(n,u1)&&Rv(n,l1))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*rr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:$t.mass,stiffness:o,damping:l}}else{const t=s1(n);e={...e,...t,mass:$t.mass},e.isResolvedFromDuration=!0}return e}function Ny(n=$t.visualDuration,e=$t.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:S}=c1({...t,velocity:-nr(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(d*m)),x=u-l,y=nr(Math.sqrt(d/m)),L=Math.abs(x)<5;r||(r=L?$t.restSpeed.granular:$t.restSpeed.default),o||(o=L?$t.restDelta.granular:$t.restDelta.default);let b;if(E<1){const I=jd(y,E);b=O=>{const U=Math.exp(-E*y*O);return u-U*((M+E*y*x)/I*Math.sin(I*O)+x*Math.cos(I*O))}}else if(E===1)b=I=>u-Math.exp(-y*I)*(x+(M+y*x)*I);else{const I=y*Math.sqrt(E*E-1);b=O=>{const U=Math.exp(-E*y*O),z=Math.min(I*O,300);return u-U*((M+E*y*x)*Math.sinh(z)+I*x*Math.cosh(z))/I}}const R={calculatedDuration:S&&g||null,next:I=>{const O=b(I);if(S)c.done=I>=g;else{let U=0;E<1&&(U=I===0?tr(M):Ly(b,I,O));const z=Math.abs(U)<=r,P=Math.abs(u-O)<=o;c.done=z&&P}return c.value=c.done?u:O,c},toString:()=>{const I=Math.min(K_(R),Od),O=Z_(U=>R.next(I*U).value,I,30);return I+"ms "+O}};return R}function Pv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},S=z=>c!==void 0&&z<c||d!==void 0&&z>d,M=z=>c===void 0?d:d===void 0||Math.abs(c-z)<Math.abs(d-z)?c:d;let E=t*e;const x=g+E,y=u===void 0?x:u(x);y!==x&&(E=y-g);const L=z=>-E*Math.exp(-z/r),b=z=>y+L(z),R=z=>{const P=L(z),C=b(z);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let I,O;const U=z=>{S(v.value)&&(I=z,O=Ny({keyframes:[v.value,M(v.value)],velocity:Ly(b,z,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return U(0),{calculatedDuration:null,next:z=>{let P=!1;return!O&&I===void 0&&(P=!0,R(z),U(z)),I!==void 0&&z>=I?O.next(z-I):(!P&&R(z),v)}}}const f1=Xa(.42,0,1,1),d1=Xa(0,0,.58,1),Iy=Xa(.42,0,.58,1),h1=n=>Array.isArray(n)&&typeof n[0]!="number",bv={linear:Qn,easeIn:f1,easeInOut:Iy,easeOut:d1,circIn:dp,circInOut:py,circOut:hy,backIn:fp,backInOut:fy,backOut:cy,anticipate:dy},Dv=n=>{if(op(n)){Ud(n.length===4);const[e,t,r,o]=n;return Xa(e,t,r,o)}else if(typeof n=="string")return Ud(bv[n]!==void 0),bv[n];return n};function p1(n,e,t){const r=[],o=t||Dy,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Qn:e;c=Ya(d,c)}r.push(c)}return r}function m1(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Ud(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=p1(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=Co(n[g],n[g+1],m);return c[g](v)};return t?m=>h(rr(n[0],n[l-1],m)):h}function g1(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Co(0,e,r);n.push(jt(t,1,o))}}function v1(n){const e=[0];return g1(e,n.length-1),e}function _1(n,e){return n.map(t=>t*e)}function y1(n,e){return n.map(()=>e||Iy).splice(0,n.length-1)}function Yu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=h1(r)?r.map(Dv):Dv(r),l={done:!1,value:e[0]},u=_1(t&&t.length===e.length?t:v1(e),n),c=m1(u,e,{ease:Array.isArray(o)?o:y1(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const x1=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Bt.update(e,!0),stop:()=>Vr(e),now:()=>mn.isProcessing?mn.timestamp:Ni.now()}},S1={decay:Pv,inertia:Pv,tween:Yu,keyframes:Yu,spring:Ny},M1=n=>n/100;class _p extends Py{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||gp,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=sp(t)?t:S1[t]||Yu;let d,h;c!==Yu&&typeof e[0]!="number"&&(d=Ya(M1,Dy(e[0],e[1])),e=[0,100]);const m=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=K_(m));const{calculatedDuration:g}=m,v=g+o,S=v*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:S}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:z}=this.options;return{done:!0,value:z[z.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:S,repeatType:M,repeatDelay:E,onUpdate:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),L=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let b=this.currentTime,R=l;if(S){const z=Math.min(this.currentTime,m)/g;let P=Math.floor(z),C=z%1;!C&&z>=1&&(C=1),C===1&&P--,P=Math.min(P,S+1),!!(P%2)&&(M==="reverse"?(C=1-C,E&&(C-=E/g)):M==="mirror"&&(R=u)),b=rr(0,1,C)*g}const I=L?{done:!1,value:d[0]}:R.next(b);c&&(I.value=c(I.value));let{done:O}=I;!L&&h!==null&&(O=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return U&&o!==void 0&&(I.value=ic(d,this.options,o)),x&&x(I.value),U&&this.finish(),I}get duration(){const{resolved:e}=this;return e?nr(e.calculatedDuration):0}get time(){return nr(this.currentTime)}set time(e){e=tr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=nr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=x1,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const E1=new Set(["opacity","clipPath","filter","transform"]);function T1(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=J_(c,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const w1=Gh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qu=10,A1=2e4;function C1(n){return sp(n.type)||n.type==="spring"||!Q_(n.ease)}function R1(n,e){const t=new _p({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<A1;)r=t.sample(l),o.push(r.value),l+=qu;return{times:void 0,keyframes:o,duration:l-qu,ease:"linear"}}const Uy={anticipate:dy,backInOut:fy,circInOut:py};function P1(n){return n in Uy}class Lv extends Py{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Ry(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&ju()&&P1(l)&&(l=Uy[l]),C1(this.options)){const{onComplete:g,onUpdate:v,motionValue:S,element:M,...E}=this.options,x=R1(e,E);e=x.keyframes,e.length===1&&(e[1]=e[0]),r=x.duration,o=x.times,l=x.ease,u="keyframes"}const m=T1(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(pv(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;c.set(ic(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return nr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return nr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=tr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Qn;const{animation:r}=t;pv(r,e)}return Qn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:v,...S}=this.options,M=new _p({...S,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),E=tr(this.time);h.setWithVelocity(M.sample(E-qu).value,M.sample(E).value,qu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return w1()&&r&&E1.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const b1={type:"spring",stiffness:500,damping:25,restSpeed:10},D1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),L1={type:"keyframes",duration:.8},N1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I1=(n,{keyframes:e})=>e.length>2?L1:Cs.has(n)?n.startsWith("scale")?D1(e[1]):b1:N1;function U1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const yp=(n,e,t,r={},o,l)=>u=>{const c=rp(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-tr(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};U1(c)||(m={...m,...I1(n,m)}),m.duration&&(m.duration=tr(m.duration)),m.repeatDelay&&(m.repeatDelay=tr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=ic(m.keyframes,c);if(v!==void 0)return Bt.update(()=>{m.onUpdate(v),m.onComplete()}),new nT([])}return!l&&Lv.supports(m)?new Lv(m):new _p(m)};function F1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Fy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),S=d[g];if(S===void 0||m&&F1(m,g))continue;const M={delay:t,...rp(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=oy(n);if(y){const L=window.MotionHandoffAnimation(y,g,Bt);L!==null&&(M.startTime=L,E=!0)}}Bd(n,g),v.start(yp(g,v,S,n.shouldReduceMotion&&ry.has(g)?{type:!1}:M,n,E));const x=v.animation;x&&h.push(x)}return c&&Promise.all(h).then(()=>{Bt.update(()=>{c&&mT(n,c)})}),h}function Xd(n,e,t={}){var r;const o=nc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(Fy(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:v}=l;return O1(n,e,m+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(t.delay)])}function O1(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(k1).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Xd(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function k1(n,e){return n.sortNodePosition(e)}function B1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Xd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Xd(n,e,t);else{const o=typeof e=="function"?nc(n,e,t.custom):e;r=Promise.all(Fy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const z1=jh.length;function Oy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Oy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<z1;t++){const r=jh[t],o=n.props[r];(Oa(o)||o===!1)&&(e[r]=o)}return e}const V1=[...Wh].reverse(),H1=Wh.length;function G1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>B1(n,t,r)))}function W1(n){let e=G1(n),t=Nv(),r=!0;const o=d=>(h,m)=>{var g;const v=nc(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:S,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Oy(n.parent)||{},g=[],v=new Set;let S={},M=1/0;for(let x=0;x<H1;x++){const y=V1[x],L=t[y],b=h[y]!==void 0?h[y]:m[y],R=Oa(b),I=y===d?L.isActive:null;I===!1&&(M=x);let O=b===m[y]&&b!==h[y]&&R;if(O&&r&&n.manuallyAnimateOnMount&&(O=!1),L.protectedKeys={...S},!L.isActive&&I===null||!b&&!L.prevProp||ec(b)||typeof b=="boolean")continue;const U=j1(L.prevProp,b);let z=U||y===d&&L.isActive&&!O&&R||x>M&&R,P=!1;const C=Array.isArray(b)?b:[b];let H=C.reduce(o(y),{});I===!1&&(H={});const{prevResolvedValues:ae={}}=L,te={...ae,...H},ce=re=>{z=!0,v.has(re)&&(P=!0,v.delete(re)),L.needsAnimating[re]=!0;const B=n.getValue(re);B&&(B.liveStyle=!1)};for(const re in te){const B=H[re],le=ae[re];if(S.hasOwnProperty(re))continue;let se=!1;Fd(B)&&Fd(le)?se=!$_(B,le):se=B!==le,se?B!=null?ce(re):v.add(re):B!==void 0&&v.has(re)?ce(re):L.protectedKeys[re]=!0}L.prevProp=b,L.prevResolvedValues=H,L.isActive&&(S={...S,...H}),r&&n.blockInitialAnimation&&(z=!1),z&&(!(O&&U)||P)&&g.push(...C.map(re=>({animation:re,options:{type:y}})))}if(v.size){const x={};v.forEach(y=>{const L=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),x[y]=L??null}),g.push({animation:x})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function c(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(v=>{var S;return(S=v.animationState)===null||S===void 0?void 0:S.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Nv(),r=!0}}}function j1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!$_(e,n):!1}function as(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nv(){return{animate:as(!0),whileInView:as(),whileHover:as(),whileTap:as(),whileDrag:as(),whileFocus:as(),exit:as()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class X1 extends jr{constructor(e){super(e),e.animationState||(e.animationState=W1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ec(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Y1=0;class q1 extends jr{constructor(){super(...arguments),this.id=Y1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const $1={animation:{Feature:X1},exit:{Feature:q1}};function Ha(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function qa(n){return{point:{x:n.pageX,y:n.pageY}}}const K1=n=>e=>ap(e)&&n(e,qa(e));function Ia(n,e,t,r){return Ha(n,e,K1(t),r)}const Iv=(n,e)=>Math.abs(n-e);function Z1(n,e){const t=Iv(n.x,e.x),r=Iv(n.y,e.y);return Math.sqrt(t**2+r**2)}class ky{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Kf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=Z1(g.offset,{x:0,y:0})>=3;if(!v&&!S)return;const{point:M}=g,{timestamp:E}=mn;this.history.push({...M,timestamp:E});const{onStart:x,onMove:y}=this.handlers;v||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=$f(v,this.transformPagePoint),Bt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:S,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Kf(g.type==="pointercancel"?this.lastMoveEventInfo:$f(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(g,x),M&&M(g,x)},!ap(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=qa(e),c=$f(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=mn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Kf(c,this.history)),this.removeListeners=Ya(Ia(this.contextWindow,"pointermove",this.handlePointerMove),Ia(this.contextWindow,"pointerup",this.handlePointerUp),Ia(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Vr(this.updatePoint)}}function $f(n,e){return e?{point:e(n.point)}:n}function Uv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Kf({point:n},e){return{point:n,delta:Uv(n,By(e)),offset:Uv(n,Q1(e)),velocity:J1(e,.1)}}function Q1(n){return n[0]}function By(n){return n[n.length-1]}function J1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=By(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>tr(e)));)t--;if(!r)return{x:0,y:0};const l=nr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const zy=1e-4,ew=1-zy,tw=1+zy,Vy=.01,nw=0-Vy,iw=0+Vy;function Un(n){return n.max-n.min}function rw(n,e,t){return Math.abs(n-e)<=t}function Fv(n,e,t,r=.5){n.origin=r,n.originPoint=jt(e.min,e.max,n.origin),n.scale=Un(t)/Un(e),n.translate=jt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=ew&&n.scale<=tw||isNaN(n.scale))&&(n.scale=1),(n.translate>=nw&&n.translate<=iw||isNaN(n.translate))&&(n.translate=0)}function Ua(n,e,t,r){Fv(n.x,e.x,t.x,r?r.originX:void 0),Fv(n.y,e.y,t.y,r?r.originY:void 0)}function Ov(n,e,t){n.min=t.min+e.min,n.max=n.min+Un(e)}function sw(n,e,t){Ov(n.x,e.x,t.x),Ov(n.y,e.y,t.y)}function kv(n,e,t){n.min=e.min-t.min,n.max=n.min+Un(e)}function Fa(n,e,t){kv(n.x,e.x,t.x),kv(n.y,e.y,t.y)}function ow(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?jt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?jt(t,n,r.max):Math.min(n,t)),n}function Bv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function aw(n,{top:e,left:t,bottom:r,right:o}){return{x:Bv(n.x,t,o),y:Bv(n.y,e,r)}}function zv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function lw(n,e){return{x:zv(n.x,e.x),y:zv(n.y,e.y)}}function uw(n,e){let t=.5;const r=Un(n),o=Un(e);return o>r?t=Co(e.min,e.max-r,n.min):r>o&&(t=Co(n.min,n.max-o,e.min)),rr(0,1,t)}function cw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Yd=.35;function fw(n=Yd){return n===!1?n=0:n===!0&&(n=Yd),{x:Vv(n,"left","right"),y:Vv(n,"top","bottom")}}function Vv(n,e,t){return{min:Hv(n,e),max:Hv(n,t)}}function Hv(n,e){return typeof n=="number"?n:n[e]||0}const Gv=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:Gv(),y:Gv()}),Wv=()=>({min:0,max:0}),Zt=()=>({x:Wv(),y:Wv()});function ai(n){return[n("x"),n("y")]}function Hy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function dw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function hw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Zf(n){return n===void 0||n===1}function qd({scale:n,scaleX:e,scaleY:t}){return!Zf(n)||!Zf(e)||!Zf(t)}function ps(n){return qd(n)||Gy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Gy(n){return jv(n.x)||jv(n.y)}function jv(n){return n&&n!=="0%"}function $u(n,e,t){const r=n-t,o=e*r;return t+o}function Xv(n,e,t,r,o){return o!==void 0&&(n=$u(n,o,r)),$u(n,t,r)+e}function $d(n,e=0,t=1,r,o){n.min=Xv(n.min,e,t,r,o),n.max=Xv(n.max,e,t,r,o)}function Wy(n,{x:e,y:t}){$d(n.x,e.translate,e.scale,e.originPoint),$d(n.y,t.translate,t.scale,t.originPoint)}const Yv=.999999999999,qv=1.0000000000001;function pw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Mo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Wy(n,u)),r&&ps(l.latestValues)&&Mo(n,l.latestValues))}e.x<qv&&e.x>Yv&&(e.x=1),e.y<qv&&e.y>Yv&&(e.y=1)}function So(n,e){n.min=n.min+e,n.max=n.max+e}function $v(n,e,t,r,o=.5){const l=jt(n.min,n.max,o);$d(n,e,t,l,r)}function Mo(n,e){$v(n.x,e.x,e.scaleX,e.scale,e.originX),$v(n.y,e.y,e.scaleY,e.scale,e.originY)}function jy(n,e){return Hy(hw(n.getBoundingClientRect(),e))}function mw(n,e,t){const r=jy(n,t),{scroll:o}=e;return o&&(So(r.x,o.offset.x),So(r.y,o.offset.y)),r}const Xy=({current:n})=>n?n.ownerDocument.defaultView:null,gw=new WeakMap;class vw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(qa(m).point)},l=(m,g)=>{const{drag:v,dragPropagation:S,onDragStart:M}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cT(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ai(x=>{let y=this.getAxisMotionValue(x).get()||0;if(Li.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const b=L.layout.layoutBox[x];b&&(y=Un(b)*(parseFloat(y)/100))}}this.originPoint[x]=y}),M&&Bt.postRender(()=>M(m,g)),Bd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:x}=g;if(S&&this.currentDirection===null){this.currentDirection=_w(x),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,x),this.updateAxis("y",g.point,x),this.visualElement.render(),E&&E(m,g)},c=(m,g)=>this.stop(m,g),d=()=>ai(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new ky(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Xy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Bt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!cu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=ow(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&_o(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=aw(o.layoutBox,t):this.constraints=!1,this.elastic=fw(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ai(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=cw(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!_o(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=mw(r,o.root,this.visualElement.getTransformPagePoint());let u=lw(o.layout.layoutBox,l);if(t){const c=t(dw(u));this.hasMutatedConstraints=!!c,c&&(u=Hy(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ai(m=>{if(!cu(m,t,this.currentDirection))return;let g=d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Bd(this.visualElement,e),r.start(yp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ai(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ai(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ai(t=>{const{drag:r}=this.getProps();if(!cu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-jt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!_o(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ai(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=uw({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ai(u=>{if(!cu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(jt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;gw.set(this.visualElement,this);const e=this.visualElement.current,t=Ia(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();_o(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Bt.read(r);const u=Ha(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ai(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())});return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Yd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function cu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function _w(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class yw extends jr{constructor(e){super(e),this.removeGroupControls=Qn,this.removeListeners=Qn,this.controls=new vw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Kv=n=>(e,t)=>{n&&Bt.postRender(()=>n(e,t))};class xw extends jr{constructor(){super(...arguments),this.removePointerDownListener=Qn}onPointerDown(e){this.session=new ky(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Kv(e),onStart:Kv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Bt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ia(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ou={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ya={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=Zv(n,e.target.x),r=Zv(n,e.target.y);return`${t}% ${r}%`}},Sw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Hr.parse(n);if(o.length>5)return r;const l=Hr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=jt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class Mw extends Oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;WE(Ew),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Ou.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Bt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Yh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Yy(n){const[e,t]=sE(),r=Oe.useContext(b_);return ie.jsx(Mw,{...n,layoutGroup:r,switchLayoutGroup:Oe.useContext(O_),isPresent:e,safeToRemove:t})}const Ew={borderRadius:{...ya,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ya,borderTopRightRadius:ya,borderBottomLeftRadius:ya,borderBottomRightRadius:ya,boxShadow:Sw};function Tw(n,e,t){const r=An(n)?n:za(n);return r.start(yp("",r,e,t)),r.animation}function ww(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Aw=(n,e)=>n.depth-e.depth;class Cw{constructor(){this.children=[],this.isDirty=!1}add(e){lp(this.children,e),this.isDirty=!0}remove(e){up(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Aw),this.isDirty=!1,this.children.forEach(e)}}function Rw(n,e){const t=Ni.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Vr(r),n(l-e))};return Bt.read(r,!0),()=>Vr(r)}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],Pw=qy.length,Qv=n=>typeof n=="string"?parseFloat(n):n,Jv=n=>typeof n=="number"||et.test(n);function bw(n,e,t,r,o,l){o?(n.opacity=jt(0,t.opacity!==void 0?t.opacity:1,Dw(r)),n.opacityExit=jt(e.opacity!==void 0?e.opacity:1,0,Lw(r))):l&&(n.opacity=jt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<Pw;u++){const c=`border${qy[u]}Radius`;let d=e0(e,c),h=e0(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Jv(d)===Jv(h)?(n[c]=Math.max(jt(Qv(d),Qv(h),r),0),(Li.test(h)||Li.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=jt(e.rotate||0,t.rotate||0,r))}function e0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Dw=$y(0,.5,hy),Lw=$y(.5,.95,Qn);function $y(n,e,t){return r=>r<n?0:r>e?1:t(Co(n,e,r))}function t0(n,e){n.min=e.min,n.max=e.max}function si(n,e){t0(n.x,e.x),t0(n.y,e.y)}function n0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function i0(n,e,t,r,o){return n-=e,n=$u(n,1/t,r),o!==void 0&&(n=$u(n,1/o,r)),n}function Nw(n,e=0,t=1,r=.5,o,l=n,u=n){if(Li.test(e)&&(e=parseFloat(e),e=jt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=jt(l.min,l.max,r);n===l&&(c-=e),n.min=i0(n.min,e,t,c,o),n.max=i0(n.max,e,t,c,o)}function r0(n,e,[t,r,o],l,u){Nw(n,e[t],e[r],e[o],e.scale,l,u)}const Iw=["x","scaleX","originX"],Uw=["y","scaleY","originY"];function s0(n,e,t,r){r0(n.x,e,Iw,t?t.x:void 0,r?r.x:void 0),r0(n.y,e,Uw,t?t.y:void 0,r?r.y:void 0)}function o0(n){return n.translate===0&&n.scale===1}function Ky(n){return o0(n.x)&&o0(n.y)}function a0(n,e){return n.min===e.min&&n.max===e.max}function Fw(n,e){return a0(n.x,e.x)&&a0(n.y,e.y)}function l0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Zy(n,e){return l0(n.x,e.x)&&l0(n.y,e.y)}function u0(n){return Un(n.x)/Un(n.y)}function c0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Ow{constructor(){this.members=[]}add(e){lp(this.members,e),e.scheduleRender()}remove(e){if(up(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kw(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:S,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const ms={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ba=typeof window<"u"&&window.MotionDebug!==void 0,Qf=["","X","Y","Z"],Bw={visibility:"hidden"},f0=1e3;let zw=0;function Jf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Qy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=oy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Bt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Qy(r)}function Jy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=zw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ba&&(ms.totalNodes=ms.resolvedTargetDeltas=ms.recalculatedProjection=0),this.nodes.forEach(Gw),this.nodes.forEach(qw),this.nodes.forEach($w),this.nodes.forEach(Ww),ba&&window.MotionDebug.record(ms)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Cw)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new cp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ww(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=Rw(v,250),Ou.hasAnimatedSinceResize&&(Ou.hasAnimatedSinceResize=!1,this.nodes.forEach(h0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:S,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||eA,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=m.getProps(),L=!this.targetLayout||!Zy(this.targetLayout,M),b=!v&&S;if(this.options.layoutRoot||this.resumeFrom||b||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const R={...rp(E,"layout"),onPlay:x,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else v||h0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Vr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Kw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Qy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(d0);return}this.isUpdating||this.nodes.forEach(Xw),this.isUpdating=!1,this.nodes.forEach(Yw),this.nodes.forEach(Vw),this.nodes.forEach(Hw),this.clearAllSnapshots();const c=Ni.now();mn.delta=rr(0,1e3/60,c-mn.timestamp),mn.timestamp=c,mn.isProcessing=!0,Wf.update.process(mn),Wf.preRender.process(mn),Wf.render.process(mn),mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jw),this.sharedNodes.forEach(Zw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Un(this.snapshot.measuredBox.x)&&!Un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Zt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Ky(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||ps(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),tA(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return Zt();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(nA))){const{scroll:m}=this.root;m&&(So(d.x,m.offset.x),So(d.y,m.offset.y))}return d}removeElementScroll(u){var c;const d=Zt();if(si(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:v}=m;m!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&si(d,u),So(d.x,g.offset.x),So(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=Zt();si(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Mo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ps(m.latestValues)&&Mo(d,m.latestValues)}return ps(this.latestValues)&&Mo(d,this.latestValues),d}removeTransform(u){const c=Zt();si(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ps(h.latestValues))continue;qd(h.latestValues)&&h.updateSnapshot();const m=Zt(),g=h.measurePageBox();si(m,g),s0(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return ps(this.latestValues)&&s0(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=mn.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Fa(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),si(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Zt(),this.targetWithTransforms=Zt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):si(this.target,this.layout.layoutBox),Wy(this.target,this.targetDelta)):si(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Fa(this.relativeTargetOrigin,this.target,S.target),si(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ba&&ms.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||qd(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===mn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;si(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;pw(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Zt());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(n0(this.prevProjectionDelta.x,this.projectionDelta.x),n0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!c0(this.projectionDelta.x,this.prevProjectionDelta.x)||!c0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),ba&&ms.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xo(),this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=Zt(),S=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=S!==M,x=this.getStack(),y=!x||x.members.length<=1,L=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(Jw));this.animationProgress=0;let b;this.mixTargetDelta=R=>{const I=R/1e3;p0(g.x,u.x,I),p0(g.y,u.y,I),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Qw(this.relativeTarget,this.relativeTargetOrigin,v,I),b&&Fw(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Zt()),si(b,this.relativeTarget)),E&&(this.animationValues=m,bw(m,h,this.latestValues,I,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Vr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bt.update(()=>{Ou.hasAnimatedSinceResize=!0,this.currentAnimation=Tw(0,f0,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(f0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&ex(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Zt();const g=Un(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Un(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}si(c,d),Mo(c,m),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Ow),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Jf("z",u,h,this.animationValues);for(let m=0;m<Qf.length;m++)Jf(`rotate${Qf[m]}`,u,h,this.animationValues),Jf(`skew${Qf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Bw;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Uu(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Uu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!ps(this.latestValues)&&(E.transform=m?m({},""):"none",this.hasProjected=!1),E}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=kw(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x:S,y:M}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in Ba){if(v[E]===void 0)continue;const{correct:x,applyTo:y,isCSSVariable:L}=Ba[E],b=h.transform==="none"?v[E]:x(v[E],g);if(y){const R=y.length;for(let I=0;I<R;I++)h[y[I]]=b}else L?this.options.visualElement.renderState.vars[E]=b:h[E]=b}return this.options.layoutId&&(h.pointerEvents=g===this?Uu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(d0),this.root.sharedNodes.clear()}}}function Vw(n){n.updateLayout()}function Hw(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?ai(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=Un(v);v.min=r[g].min,v.max=v.min+S}):ex(l,t.layoutBox,r)&&ai(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=Un(r[g]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+S)});const c=xo();Ua(c,r,t.layoutBox);const d=xo();u?Ua(d,n.applyTransform(o,!0),t.measuredBox):Ua(d,r,t.layoutBox);const h=!Ky(c);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:S}=g;if(v&&S){const M=Zt();Fa(M,t.layoutBox,v.layoutBox);const E=Zt();Fa(E,r,S.layoutBox),Zy(M,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function Gw(n){ba&&ms.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Ww(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function jw(n){n.clearSnapshot()}function d0(n){n.clearMeasurements()}function Xw(n){n.isLayoutDirty=!1}function Yw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function h0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function qw(n){n.resolveTargetDelta()}function $w(n){n.calcProjection()}function Kw(n){n.resetSkewAndRotation()}function Zw(n){n.removeLeadSnapshot()}function p0(n,e,t){n.translate=jt(e.translate,0,t),n.scale=jt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function m0(n,e,t,r){n.min=jt(e.min,t.min,r),n.max=jt(e.max,t.max,r)}function Qw(n,e,t,r){m0(n.x,e.x,t.x,r),m0(n.y,e.y,t.y,r)}function Jw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const eA={duration:.45,ease:[.4,0,.1,1]},g0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),v0=g0("applewebkit/")&&!g0("chrome/")?Math.round:Qn;function _0(n){n.min=v0(n.min),n.max=v0(n.max)}function tA(n){_0(n.x),_0(n.y)}function ex(n,e,t){return n==="position"||n==="preserve-aspect"&&!rw(u0(e),u0(t),.2)}function nA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const iA=Jy({attachResizeListener:(n,e)=>Ha(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ed={current:void 0},tx=Jy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ed.current){const n=new iA({});n.mount(window),n.setOptions({layoutScroll:!0}),ed.current=n}return ed.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),rA={pan:{Feature:xw},drag:{Feature:yw,ProjectionNode:tx,MeasureLayout:Yy}};function y0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Bt.postRender(()=>l(e,qa(e)))}class sA extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=sT(e,(t,r)=>(y0(this.node,r,"Start"),o=>y0(this.node,o,"End"))))}unmount(){}}class oA extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ya(Ha(this.node.current,"focus",()=>this.onFocus()),Ha(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function x0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Bt.postRender(()=>l(e,qa(e)))}class aA extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=uT(e,(t,r)=>(x0(this.node,r,"Start"),(o,{success:l})=>x0(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Kd=new WeakMap,td=new WeakMap,lA=n=>{const e=Kd.get(n.target);e&&e(n)},uA=n=>{n.forEach(lA)};function cA({root:n,...e}){const t=n||document;td.has(t)||td.set(t,{});const r=td.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(uA,{root:n,...e})),r[o]}function fA(n,e,t){const r=cA(e);return Kd.set(n,t),r.observe(n),()=>{Kd.delete(n),r.unobserve(n)}}const dA={some:0,all:1};class hA extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:dA[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return fA(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(pA(e,t))&&this.startObserver()}unmount(){}}function pA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const mA={inView:{Feature:hA},tap:{Feature:aA},focus:{Feature:oA},hover:{Feature:sA}},gA={layout:{ProjectionNode:tx,MeasureLayout:Yy}},Zd={current:null},nx={current:!1};function vA(){if(nx.current=!0,!!Hh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Zd.current=n.matches;n.addListener(e),e()}else Zd.current=!1}const _A=[...Cy,wn,Hr],yA=n=>_A.find(Ay(n)),S0=new WeakMap;function xA(n,e,t){for(const r in e){const o=e[r],l=t[r];if(An(o))n.addValue(r,o);else if(An(l))n.addValue(r,za(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,za(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const M0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class SA{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=gp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ni.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Bt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=tc(t),this.isVariantNode=U_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in v){const M=v[S];d[S]!==void 0&&An(M)&&M.set(d[S],!1)}}mount(e){this.current=e,S0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),nx.current||vA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){S0.delete(this.current),this.projection&&this.projection.unmount(),Vr(this.notifyUpdate),Vr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Cs.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Bt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ro){const t=Ro[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Zt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<M0.length;r++){const o=M0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=xA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=za(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Ty(o)||my(o))?o=parseFloat(o):!yA(o)&&Hr.test(t)&&(o=Sy(e,t)),this.setBaseTarget(e,An(o)?o.get():o)),An(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=$h(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!An(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new cp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class ix extends SA{constructor(){super(...arguments),this.KeyframeResolver=Ry}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function MA(n){return window.getComputedStyle(n)}class EA extends ix{constructor(){super(...arguments),this.type="html",this.renderInstance=G_}readValueFromInstance(e,t){if(Cs.has(t)){const r=mp(t);return r&&r.default||0}else{const r=MA(e),o=(Kh(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return jy(e,t)}build(e,t,r){Jh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return ip(e,t,r)}}class TA extends ix{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Cs.has(t)){const r=mp(t);return r&&r.default||0}return t=W_.has(t)?t:Xh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Y_(e,t,r)}build(e,t,r){ep(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){j_(e,t,r,o)}mount(e){this.isSVGTag=np(e.tagName),super.mount(e)}}const wA=(n,e)=>qh(n)?new TA(e):new EA(e,{allowProjection:n!==Oe.Fragment}),AA=JE({...$1,...mA,...rA,...gA},wA),Fr=pE(AA),CA={some:0,all:1};function RA(n,e,{root:t,margin:r,amount:o="some"}={}){const l=ty(n),u=new WeakMap,c=h=>{h.forEach(m=>{const g=u.get(m.target);if(m.isIntersecting!==!!g)if(m.isIntersecting){const v=e(m.target,m);typeof v=="function"?u.set(m.target,v):d.unobserve(m.target)}else typeof g=="function"&&(g(m),u.delete(m.target))})},d=new IntersectionObserver(c,{root:t,rootMargin:r,threshold:typeof o=="number"?o:CA[o]});return l.forEach(h=>d.observe(h)),()=>d.disconnect()}function rx(n,{root:e,margin:t,amount:r,once:o=!1}={}){const[l,u]=Oe.useState(!1);return Oe.useEffect(()=>{if(!n.current||o&&l)return;const c=()=>(u(!0),o?void 0:()=>u(!1)),d={root:e&&e.current||void 0,margin:t,amount:r};return RA(n.current,c,d)},[e,n,t,o,r]),l}const E0=[{degree:"Web Development Track (MEARN)",institution:"Information Technology Institute",year:"2024"},{degree:"Maximilian React Course",institution:"Online (Maximilian Schwarzmüller)",year:"2024"},{degree:"Bachelor's of Civil Engineering",institution:"Elshorouk Academy",year:"2018-2023"}],PA={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.8}}},bA={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}};function DA(){const n=Oe.useRef(null),e=rx(n,{once:!1});return ie.jsx("div",{className:"text-amber-100 p-3 sm:p-2",children:ie.jsxs("div",{className:"container mx-auto flex-col flex items-center",ref:n,children:[ie.jsxs(Fr.h2,{initial:{opacity:0,x:-100},animate:e?{opacity:1,x:0}:{opacity:0,x:-100},transition:{duration:.8},className:"text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4",children:[ie.jsx(R_,{className:"text-primary"}),"My Education"]}),ie.jsx(Fr.div,{className:"relative",variants:PA,initial:"hidden",animate:e?"visible":"hidden",children:E0.map((t,r)=>ie.jsxs(Fr.div,{variants:bA,className:"relative flex items-center gap-2 sm:gap-8 mb-8 md:mb-12",children:[r<E0.length-1&&ie.jsx(Fr.div,{initial:{height:0},animate:e?{height:"116%"}:{height:0},transition:{duration:.5,delay:.8},className:"absolute left-4 top-[50%] w-0.5 h-[calc(100%-50%)] bg-primary/50"}),ie.jsx(Fr.div,{initial:{scale:0},animate:e?{scale:1}:{scale:0},transition:{duration:.7,delay:.5},className:"relative z-10  sm:block hidden",children:ie.jsx(DM,{className:"w-8 h-8 text-primary"})}),ie.jsxs("div",{className:"flex-1 bg-primary p-6 rounded-xl sm:max-w-fit sm:min-w-[100%] min-w-[10%] max-w-[100%]",children:[ie.jsx("h3",{className:"text-xl xl:text-2xl font-semibold",children:t.degree}),ie.jsx("p",{className:"text-lg mt-2",children:t.institution}),ie.jsx("p",{className:"mt-1",children:t.year})]})]},r))})]})})}const LA="/Portfolio/assets/My-photo-70luUSfT.jpg";function NA(){return ie.jsx("div",{children:ie.jsx("section",{className:" max-w-xl",children:ie.jsxs("div",{className:"text-amber-100 flex flex-col sm:flex-row-reverse sm:gap-1.5",children:[ie.jsxs("div",{className:"flex flex-col self-center",children:[ie.jsx("h1",{className:" sm:text-xl xl:text-2xl font-bold mb-2 md:mb-4 text-center ",children:"Hello, I'm Fatma Mohamed"}),ie.jsx("p",{className:"hidden sm:block self-center text-center break-words flex-shrink-1",children:"Front-End Developer crafting beautiful, responsive websites. Let's create something amazing together!"})]}),ie.jsxs("div",{className:" flex flex-col sm:flex-row",children:[ie.jsx("div",{className:"relative  self-center flex-shrink-0 h-32 w-32 sm:h-44 sm:w-44 md:h-50 md:w-50  xl:h-52 xl:w-52 border-4 rounded-full border-primary/40 ",children:ie.jsx("img",{src:LA,alt:"Fatma Mohamed",className:" rounded-full h-full w-full"})}),ie.jsx("p",{className:"sm:hidden  block self-center text-center break-words",children:"Front-End Developer crafting beautiful, responsive websites. Let's create something amazing together!"})]})]})})})}const IA="/Portfolio/assets/field-talent-BJRD3xmm.mp4",UA="/Portfolio/assets/exam-qMwnhMPu.mp4",FA="/Portfolio/assets/auto-geer-mn-FuuB1.mp4",OA={fieldTalent:IA,exam:UA,autoGeer:FA},kA=[{title:"Wardlin",description:"Wardlin specializes in creating sustainable websites with a focus on performance, accessibility, and eco-friendly web solutions. We implement energy-efficient coding practices to optimize user experience while reducing environmental impact.",technologies:[],githubLink:"",liveLink:"https://www.wardlin.com"},{title:"IKNOWLY",description:"iknowly is Germany's premier marketplace connecting you with top professionals from leading companies. Discover expert guidance and career growth opportunities today.",technologies:["Next.js","Tailwind CSS"],githubLink:"",liveLink:"https://www.iknowly.com"},{title:"The-Badr-Lab",description:"The Badr Lab is a freelance project developed for Dr. Badr, a microbiome researcher in Germany. The website serves as a platform for introducing Dr. Badr and his team, showcasing their research, publications, and scientific contributions.",technologies:["React","TS","Tailwind CSS"],githubLink:"https://github.com/fatma-mohamed99/the-badr-lab",liveLink:"https://the-badr-lab-iutb.vercel.app"},{title:"Field-Talent",description:"A freelance platform connecting civil engineers with clients for construction projects like building or renovation. Engineers are verified with ID and graduation certificates.",technologies:["React","Tailwind CSS"],githubLink:"https://github.com/fatma-mohamed99/Field-Talent",liveLink:"",viewVideo:"fieldTalent"},{title:"AutoGeer",description:"An e-commerce platform selling car spare parts.",technologies:["Angular","TS","Bootstrap"],githubLink:"https://github.com/fatma-mohamed99/AutoGeer",liveLink:"",viewVideo:"autoGeer"},{title:"Examination System",description:"A pure JavaScript-based system for online exams.",technologies:["JavaScript","HTML","CSS"],githubLink:"https://github.com/fatma-mohamed99/Examination_System",liveLink:"",viewVideo:"exam"}],BA=()=>ie.jsx("div",{className:"flex items-center justify-center w-full h-64",children:ie.jsxs("div",{className:"relative",children:[ie.jsx("div",{className:"w-16 h-16 border-4 border-amber-100/30 rounded-full"}),ie.jsx("div",{className:"w-16 h-16 border-4 border-amber-100 border-t-transparent animate-spin rounded-full absolute top-0"}),ie.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:ie.jsx(P_,{className:"text-amber-100 animate-pulse",size:24})})]})});function zA(){const[n,e]=Oe.useState(null),[t,r]=Oe.useState(!1),o=u=>{e(OA[u]),r(!0)},l=()=>{e(null),r(!1)};return ie.jsxs("div",{className:"text-amber-100 p-3 sm:p-2",children:[ie.jsxs("div",{className:"container mx-auto",children:[ie.jsxs("h2",{className:"text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4",children:[ie.jsx(A_,{className:"text-primary"}),"Experience"]}),ie.jsx("div",{className:"grid lg:grid-cols-2 gap-6",children:kA.map((u,c)=>ie.jsxs("div",{className:"bg-primary lg:max-h-fit lg:min-h-52 sm:max-w-fit sm:min-w-full min-w-[10%] max-w-full flex flex-col lg:justify-between p-6 rounded-xl transition-all duration-300 hover:scale-101 hover:shadow-sm hover:shadow-amber-100 ",children:[ie.jsx("h3",{className:"text-2xl font-semibold mb-4",children:u.title}),ie.jsx("p",{className:"mb-4",children:u.description}),ie.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-1",children:[ie.jsx("div",{className:"flex justify-between items-center flex-wrap gap-1",children:u.technologies&&u.technologies.length>0&&ie.jsx("div",{className:"flex gap-1 sm:gap-2 flex-wrap",children:u.technologies.map((d,h)=>ie.jsx("span",{className:"bg-main/40 px-2 rounded-md text-sm",children:d},h))})}),ie.jsxs("div",{className:"flex gap-3 pl-2 sm:pl-0 pt-2 sm:pt-0",children:[u.githubLink&&ie.jsx("a",{href:u.githubLink,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:ie.jsx(C_,{})}),u.viewVideo&&ie.jsx("button",{onClick:()=>o(u.viewVideo),className:"hover:text-white transition-colors cursor-pointer",children:ie.jsx(P_,{})}),u.liveLink&&ie.jsx("a",{href:u.liveLink,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:ie.jsx(FM,{})})]})]})]},c))})]}),n&&ie.jsx("div",{className:"fixed inset-0 bg-main/80 bg-opacity-70 z-50 flex items-center justify-center p-4",children:ie.jsxs("div",{className:"rounded-lg max-w-3xl w-full relative",children:[ie.jsx("div",{className:"flex justify-end",children:ie.jsx("button",{onClick:l,className:"hover:bg-primary p-2 rounded-sm cursor-pointer",children:ie.jsx(nE,{className:"text-amber-100"})})}),t&&ie.jsx(BA,{}),ie.jsx("video",{src:n,autoPlay:!0,className:`w-full h-auto rounded-lg ${t?"hidden":"block"}`,onLoadedData:()=>r(!1),onLoadedMetadata:u=>u.target.playbackRate=2})]})})]})}const VA=()=>{const[n,e]=Oe.useState(!1);Oe.useEffect(()=>{const o=()=>{e(window.scrollY>300)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const t=[{icon:VM,label:"Home",sectionId:"hero"},{icon:w_,label:"Skills",sectionId:"skills"},{icon:A_,label:"Experience",sectionId:"experience"},{icon:R_,label:"Education",sectionId:"education"},{icon:IM,label:"Contact",sectionId:"contact"}],r=o=>{const l=document.getElementById(o);if(l){const u=l.offsetTop,c=n?55:0;window.scrollTo({top:u-c,behavior:"smooth"})}};return ie.jsx("aside",{className:n?" fixed top-1 left-1/2 -translate-x-1/2 z-50":"",children:ie.jsx("div",{className:`flex ${n?" flex-row p-2 sm:p-5 gap-4 sm:gap-6 md:gap-10 xl:gap-12 bg-gradient-to-b from-primary/80 shadow-sm px-10 sm:px-32 md:px-52":"flex-col gap-4 animate-wiggle"} shadow-amber-100/40 shadow-md  text-amber-100 bg-gradient-to-b from-primary to-main h-auto w-fit p-4 rounded-2xl border-main `,children:t.map(({icon:o,label:l,sectionId:u},c)=>ie.jsxs("div",{onClick:()=>r(u),className:"flex items-center gap-2 transition-all duration-200 cursor-pointer transform hover:scale-103 hover:translate-x-1",style:{animationDelay:`${c*100}ms`},children:[ie.jsx(o,{className:`${n?"w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8":"w-6 h-6 animate-pulse"}`}),!n&&ie.jsx("span",{className:"hidden md:inline",children:l})]},l))})})},HA=[{name:"HTML",iconPath:"/Portfolio/icons/html.svg",color:"from-orange-500/20 to-transparent"},{name:"CSS",iconPath:"/Portfolio/icons/css.svg",color:"from-blue-500/20 to-transparent"},{name:"JavaScript",iconPath:"/Portfolio/icons/javascript.svg",color:"from-yellow-500/20 to-transparent"},{name:"TypeScript",iconPath:"/Portfolio/icons/typescript.svg",color:"from-blue-600/20 to-transparent"},{name:"React",iconPath:"/Portfolio/icons/react.svg",color:"from-cyan-500/20 to-transparent"},{name:"Next.js",iconPath:"/Portfolio/icons/next.svg",color:"from-gray-500/20 to-transparent"},{name:"Angular",iconPath:"/Portfolio/icons/angular.svg",color:"from-red-500/20 to-transparent"},{name:"Tailwind CSS",iconPath:"/Portfolio/icons/tailwind.svg",color:"from-teal-500/20 to-transparent"},{name:"Bootstrap",iconPath:"/Portfolio/icons/bootstrap.svg",color:"from-purple-500/20 to-transparent"},{name:"Material UI",iconPath:"/Portfolio/icons/material-ui.svg",color:"from-blue-500/20 to-transparent"},{name:"SASS",iconPath:"/Portfolio/icons/sass.svg",color:"from-pink-500/20 to-transparent"}],GA={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.5}}},WA={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5}}};function jA(){const n=Oe.useRef(null),e=rx(n,{once:!1});return ie.jsx("div",{className:"text-amber-100 p-3 sm:p-2 sm:mx-0 mx-auto",children:ie.jsxs("div",{className:"container mx-auto",ref:n,children:[ie.jsxs(Fr.h2,{initial:{opacity:0,x:-20},animate:e?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.8},className:"text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4  justify-center sm:justify-start",children:[ie.jsx(w_,{className:"text-primary "}),"My Skills"]}),ie.jsx(Fr.div,{className:"grid grid-cols-1 px-8 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",variants:GA,initial:"hidden",animate:e?"visible":"hidden",children:HA.map((t,r)=>ie.jsxs(Fr.div,{variants:WA,className:"group relative  overflow-hidden rounded-xl transition-all duration-300 cursor-pointer",children:[ie.jsxs("div",{className:"relative z-0 flex flex-col items-center justify-center p-6 h-40",children:[ie.jsx("img",{src:t.iconPath,alt:t.name,className:"w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110 "}),ie.jsx("span",{className:"text-lg font-medium text-center",children:t.name})]}),ie.jsx("div",{className:` absolute  inset-0 bg-gradient-to-br ${t.color} opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-2xl`}),ie.jsx("div",{className:"absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]},r))})]})})}const XA=()=>ie.jsx("section",{className:" text-amber-100  ",children:ie.jsxs("div",{className:"container mx-auto  p-3 sm:p-2  ",children:[ie.jsxs("h2",{className:"text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4",children:[ie.jsx(JM,{className:"text-primary"}),"About Me"]}),ie.jsxs("p",{className:"text-base xl:text-lg leading-relaxed p-4 bg-gradient-to-b from-primary/10 to-main rounded-4xl",children:["I am a passionate ",ie.jsx("span",{className:"text-lg xl:text-xl font-extrabold",children:"Front-End Developer"})," with a strong background in Civil Engineering. While pursuing my degree in Civil Engineering, I discovered my true calling in the world of web development. This realization inspired me to pursue extensive studies and courses in the field, which led me to take part in a Full Stack Web Development program, provided by the ITI in Egypt. The MERN stack course covered both front-end and back-end development, but I found myself drawn more towards Front-End Development, where I have been focusing my energy and learning continuously."]}),ie.jsx("p",{className:"text-base xl:text-lg leading-relaxed mt-4 p-4 bg-gradient-to-b from-primary/10 to-main rounded-4xl",children:"Every day, I strive to improve my skills and stay updated with the latest technologies. I am passionate about creating visually appealing, responsive, and intuitive user interfaces. With a keen eye for design and functionality, I aim to build engaging experiences that delight users."})]})}),YA=()=>{const[n,e]=Oe.useState(Math.floor(Math.random()*100)+1),[t,r]=Oe.useState(""),[o,l]=Oe.useState("Start guessing!"),[u,c]=Oe.useState(0),[d,h]=Oe.useState(0),[m,g]=Oe.useState("playing"),[v,S]=Oe.useState(!1),[M,E]=Oe.useState([]),x=R=>{const I=Math.abs(n-R);return I===0?0:I<=5?100:I<=10?80:I<=20?60:I<=30?40:I<=50?20:0},y=R=>{switch(!0){case R===100:return"🔥 BURNING HOT! You're almost there!";case R>=80:return"🌋 Very Hot! Super Close!";case R>=60:return"🔥 Hot! Getting Closer!";case R>=40:return"🌞 Warm! Keep Trying!";case R>=20:return"❄️ Cool. A bit far.";default:return"🧊 Freezing Cold! Far Away!"}},L=()=>{if(!t||isNaN(Number(t))||Number(t)<1||Number(t)>100){S(!0),l("Please enter a valid number between 1 and 100");return}S(!1);const R=Number(t);if(M.includes(R)){l(`⚠️ You already guessed ${R} ! Try a different number.`);return}if(E([...M,R]),S(!1),h(d+1),R===n)l("🎉🎉 Congratulations! You guessed it!"),g("won");else{const I=x(R);c(I),l(y(I))}},b=()=>{e(Math.floor(Math.random()*100)+1),r(""),l("Start guessing!"),c(0),h(0),g("playing"),S(!1),E([])};return ie.jsx("div",{className:"min-h-[400px] flex p-1 sm:p-5 rounded-2xl shadow-2xl shadow-primary mt-4",children:ie.jsxs("div",{className:"bg-primary/5 p-5 rounded-xl text-center sm:min-w-fit md:min-w-lg w-full shadow-lg shadow-amber-100/20",children:[ie.jsx("h2",{className:"text-lg md:text-2xl text-amber-100 mb-4 w-fit bg-primary/20 p-2 rounded-2xl mx-auto",children:"Guess the Number"}),ie.jsxs("div",{className:"bg-main/20 p-4 rounded-lg mb-6",children:[ie.jsx("p",{className:`font-semibold ${v?"text-red-500":"text-amber-100"}`,children:o}),ie.jsx("div",{className:"h-2 w-full my-2  rounded-full bg-amber-100/30",style:{background:`linear-gradient(to right, rgba(255,255,255,0.7) ${u}%, transparent ${u}%)`,transition:"background 0.5s ease"}}),ie.jsxs("p",{className:"text-amber-100/70 text-sm ",children:["Attempts: ",d]})]}),m==="playing"&&ie.jsxs("div",{className:"flex gap-2 mb-4 flex-col md:flex-row md:mx-11 sm:mx-7 mx-0",children:[ie.jsx("input",{type:"text",value:t,onChange:R=>{const I=R.target.value.replace(/[^0-9]/g,"");r(I),S(!1)},onKeyDown:R=>R.key==="Enter"&&L(),className:`w-full p-3 bg-main/10 text-amber-100 border-2 ${v?"border-red-500":"border-amber-100/30"} rounded-lg focus:outline-none focus:border-amber-100 transition-all`,placeholder:"Enter your guess (1-100)",maxLength:"3"}),ie.jsx("button",{onClick:L,className:"bg-primary/30 text-amber-100/80 p-3 rounded-lg hover:bg-primary cursor-pointer transition-opacity",children:"Guess"})]}),m==="won"&&ie.jsxs("div",{className:"flex items-center justify-center gap-2 text-amber-100",children:[ie.jsx(PM,{size:32,className:"animate-pulse hover:animate-spin transition-all duration-500 ease-in-out transform hover:rotate-180"}),"                        ",ie.jsxs("span",{className:"font-bold",children:["You Won in ",d," attempts!"]})]}),ie.jsxs("button",{onClick:b,className:"mt-4 cursor-pointer flex items-center justify-center gap-2 w-full bg-primary/20 text-amber-100 p-3 rounded-lg hover:bg-primary transition-colors",children:[ie.jsx($M,{size:20}),"Reset Game"]})]})})};function qA(){const[n,e]=Oe.useState(!1),t=()=>{e(!n)};return ie.jsxs("div",{className:"container mx-auto   flex flex-col gap-44 min-h-screen max-w-fit  ",children:[ie.jsxs("div",{className:"bg-main/40 z-10   flex md:gap-12 sm:gap-8 gap-2 justify-center items-center border-b-8 border-primary/40 rounded-4xl px-2 md:px-12 p-2 py-4  w-fit mx-auto ",children:[ie.jsx("div",{id:"hero",children:ie.jsx(NA,{})}),ie.jsx(VA,{})]}),ie.jsx("div",{id:"skills",children:ie.jsx(jA,{})}),ie.jsx("div",{id:"experience",children:ie.jsx(zA,{})}),ie.jsx("div",{id:"education",children:ie.jsx(DA,{})}),ie.jsx(XA,{}),ie.jsxs("div",{className:"flex flex-col items-center",children:[ie.jsx("button",{onClick:t,className:"mx-auto cursor-pointer bg-primary text-amber-100 px-6 py-3 rounded-lg hover:bg-primary/40 transition-opacity",children:n?"Hide Game":"Let's Play"}),n&&ie.jsx("div",{className:"mx-auto",children:ie.jsx(YA,{})})]}),ie.jsx("div",{id:"contact",children:ie.jsx(iE,{})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="172",$A=0,T0=1,KA=2,sx=1,ZA=2,Ki=3,Gr=0,Wn=1,Zi=2,kr=0,To=1,w0=2,A0=3,C0=4,QA=5,_s=100,JA=101,eC=102,tC=103,nC=104,iC=200,rC=201,sC=202,oC=203,Qd=204,Jd=205,aC=206,lC=207,uC=208,cC=209,fC=210,dC=211,hC=212,pC=213,mC=214,eh=0,th=1,nh=2,bo=3,ih=4,rh=5,sh=6,oh=7,ox=0,gC=1,vC=2,Br=0,_C=1,yC=2,xC=3,SC=4,MC=5,EC=6,TC=7,ax=300,Do=301,Lo=302,ah=303,lh=304,rc=306,uh=1e3,Ss=1001,ch=1002,Si=1003,wC=1004,fu=1005,Di=1006,nd=1007,Ms=1008,sr=1009,lx=1010,ux=1011,Ga=1012,Sp=1013,ws=1014,Qi=1015,$a=1016,Mp=1017,Ep=1018,No=1020,cx=35902,fx=1021,dx=1022,xi=1023,hx=1024,px=1025,wo=1026,Io=1027,mx=1028,Tp=1029,gx=1030,wp=1031,Ap=1033,ku=33776,Bu=33777,zu=33778,Vu=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,gh=37492,vh=37496,_h=37808,yh=37809,xh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,wh=37815,Ah=37816,Ch=37817,Rh=37818,Ph=37819,bh=37820,Dh=37821,Hu=36492,Lh=36494,Nh=36495,vx=36283,Ih=36284,Uh=36285,Fh=36286,AC=3200,CC=3201,RC=0,PC=1,Or="",li="srgb",Uo="srgb-linear",Ku="linear",bt="srgb",Qs=7680,R0=519,bC=512,DC=513,LC=514,_x=515,NC=516,IC=517,UC=518,FC=519,Oh=35044,P0="300 es",Ji=2e3,Zu=2001;class Bo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,kh=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function OC(n,e){return(n%e+e)%e}function rd(n,e,t){return(1-t)*n+t*e}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],S=r[5],M=r[8],E=o[0],x=o[3],y=o[6],L=o[1],b=o[4],R=o[7],I=o[2],O=o[5],U=o[8];return l[0]=u*E+c*L+d*I,l[3]=u*x+c*b+d*O,l[6]=u*y+c*R+d*U,l[1]=h*E+m*L+g*I,l[4]=h*x+m*b+g*O,l[7]=h*y+m*R+g*U,l[2]=v*E+S*L+M*I,l[5]=v*x+S*b+M*O,l[8]=v*y+S*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,v=c*d-m*l,S=h*l-u*d,M=t*g+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(c*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-c*t)*E,e[6]=S*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new lt;function yx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kC(){const n=Wa("canvas");return n.style.display="block",n}const b0={};function vo(n){n in b0||(b0[n]=!0,console.warn(n))}function BC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function zC(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VC(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const D0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HC(){const n={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===bt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===bt&&(o.r=Ao(o.r),o.g=Ao(o.g),o.b=Ao(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Or?Ku:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Uo]:{primaries:e,whitePoint:r,transfer:Ku,toXYZ:D0,fromXYZ:L0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:D0,fromXYZ:L0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),n}const wt=HC();function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Js;class GC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Wa("canvas")),Js.width=e.width,Js.height=e.height;const r=Js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ir(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WC=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WC++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(od(o[u].image)):l.push(od(o[u]))}else l=od(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function od(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?GC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jC=0;class Cn extends Bo{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=Ss,o=Ss,l=Di,u=Ms,c=xi,d=sr,h=Cn.DEFAULT_ANISOTROPY,m=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=zr(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=ax;Cn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],M=d[9],E=d[2],x=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,R=(S+1)/2,I=(y+1)/2,O=(m+v)/4,U=(g+E)/4,z=(M+x)/4;return b>R&&b>I?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=O/r,l=U/r):R>I?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=O/o,l=z/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=U/l,o=z/l),this.set(r,o,l,t),this}let L=Math.sqrt((x-M)*(x-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(x-M)/L,this.y=(g-E)/L,this.z=(v-m)/L,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XC extends Bo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Cn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new xx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends XC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Sx extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YC extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const v=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==S||m!==M){let x=1-c;const y=d*v+h*S+m*M+g*E,L=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const I=Math.sqrt(b),O=Math.atan2(I,y*L);x=Math.sin(x*O)/I,c=Math.sin(c*O)/I}const R=c*L;if(d=d*x+v*R,h=h*x+S*R,m=m*x+M*R,g=g*x+E*R,x===1-c){const I=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=I,h*=I,m*=I,g*=I}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[t]=c*M+m*g+d*S-h*v,e[t+1]=d*M+m*v+h*g-c*S,e[t+2]=h*M+m*S+c*v-d*g,e[t+3]=m*M-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),g=c(l/2),v=d(r/2),S=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"YZX":this._x=v*m*g+h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g-v*S*M;break;case"XZY":this._x=v*m*g-h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(N0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(N0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*m,this.y=r+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new $,N0=new Ka;class Za{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),du.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),du.copy(r.boundingBox)),du.applyMatrix4(e.matrixWorld),this.union(du)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),hu.subVectors(this.max,xa),eo.subVectors(e.a,xa),to.subVectors(e.b,xa),no.subVectors(e.c,xa),Pr.subVectors(to,eo),br.subVectors(no,to),ls.subVectors(eo,no);let t=[0,-Pr.z,Pr.y,0,-br.z,br.y,0,-ls.z,ls.y,Pr.z,0,-Pr.x,br.z,0,-br.x,ls.z,0,-ls.x,-Pr.y,Pr.x,0,-br.y,br.x,0,-ls.y,ls.x,0];return!ld(t,eo,to,no,hu)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,eo,to,no,hu))?!1:(pu.crossVectors(Pr,br),t=[pu.x,pu.y,pu.z],ld(t,eo,to,no,hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new $,new $,new $,new $,new $,new $,new $,new $],gi=new $,du=new Za,eo=new $,to=new $,no=new $,Pr=new $,br=new $,ls=new $,xa=new $,hu=new $,pu=new $,us=new $;function ld(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){us.fromArray(n,l);const c=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),d=e.dot(us),h=t.dot(us),m=r.dot(us);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const qC=new Za,Sa=new $,ud=new $;class Cp{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):qC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Sa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(ud)),this.expandByPoint(Sa.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new $,cd=new $,mu=new $,Dr=new $,fd=new $,gu=new $,dd=new $;class $C{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){cd.copy(e).add(t).multiplyScalar(.5),mu.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(cd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(mu),c=Dr.dot(this.direction),d=-Dr.dot(mu),h=Dr.lengthSq(),m=Math.abs(1-u*u);let g,v,S,M;if(m>0)if(g=u*d-c,v=u*c-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(cd).addScaledVector(mu,v),S}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),o=Xi.dot(Xi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,r,o,l){fd.subVectors(t,e),gu.subVectors(r,e),dd.crossVectors(fd,gu);let u=this.direction.dot(dd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Dr.subVectors(this.origin,e);const d=c*this.direction.dot(gu.crossVectors(Dr,gu));if(d<0)return null;const h=c*this.direction.dot(fd.cross(Dr));if(h<0||d+h>u)return null;const m=-c*Dr.dot(dd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,o,l,u,c,d,h,m,g,v,S,M,E,x){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,g,v,S,M,E,x)}set(e,t,r,o,l,u,c,d,h,m,g,v,S,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/io.setFromMatrixColumn(e,0).length(),l=1/io.setFromMatrixColumn(e,1).length(),u=1/io.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,S=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=v-E*h,t[9]=-c*d,t[2]=E-v*h,t[6]=M+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v+E*c,t[4]=M*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=S*c-M,t[6]=E+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v-E*c,t[4]=-u*g,t[8]=M+S*c,t[1]=S+M*c,t[5]=u*m,t[9]=E-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,S=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=M*h-S,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=S*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+S,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=S*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,S=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=u*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=c*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KC,e,ZC)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Lr.crossVectors(r,$n),Lr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Lr.crossVectors(r,$n)),Lr.normalize(),vu.crossVectors($n,Lr),o[0]=Lr.x,o[4]=vu.x,o[8]=$n.x,o[1]=Lr.y,o[5]=vu.y,o[9]=$n.y,o[2]=Lr.z,o[6]=vu.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],S=r[13],M=r[2],E=r[6],x=r[10],y=r[14],L=r[3],b=r[7],R=r[11],I=r[15],O=o[0],U=o[4],z=o[8],P=o[12],C=o[1],H=o[5],ae=o[9],te=o[13],ce=o[2],pe=o[6],ue=o[10],re=o[14],B=o[3],le=o[7],se=o[11],F=o[15];return l[0]=u*O+c*C+d*ce+h*B,l[4]=u*U+c*H+d*pe+h*le,l[8]=u*z+c*ae+d*ue+h*se,l[12]=u*P+c*te+d*re+h*F,l[1]=m*O+g*C+v*ce+S*B,l[5]=m*U+g*H+v*pe+S*le,l[9]=m*z+g*ae+v*ue+S*se,l[13]=m*P+g*te+v*re+S*F,l[2]=M*O+E*C+x*ce+y*B,l[6]=M*U+E*H+x*pe+y*le,l[10]=M*z+E*ae+x*ue+y*se,l[14]=M*P+E*te+x*re+y*F,l[3]=L*O+b*C+R*ce+I*B,l[7]=L*U+b*H+R*pe+I*le,l[11]=L*z+b*ae+R*ue+I*se,l[15]=L*P+b*te+R*re+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],E=e[7],x=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*S-r*d*S)+E*(+t*d*S-t*h*v+l*u*v-o*u*S+o*h*m-l*d*m)+x*(+t*h*g-t*c*S-l*u*g+r*u*S+l*c*m-r*h*m)+y*(-o*c*m-t*d*g+t*c*v+o*u*g-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],E=e[13],x=e[14],y=e[15],L=g*x*h-E*v*h+E*d*S-c*x*S-g*d*y+c*v*y,b=M*v*h-m*x*h-M*d*S+u*x*S+m*d*y-u*v*y,R=m*E*h-M*g*h+M*c*S-u*E*S-m*c*y+u*g*y,I=M*g*d-m*E*d-M*c*v+u*E*v+m*c*x-u*g*x,O=t*L+r*b+o*R+l*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=L*U,e[1]=(E*v*l-g*x*l-E*o*S+r*x*S+g*o*y-r*v*y)*U,e[2]=(c*x*l-E*d*l+E*o*h-r*x*h-c*o*y+r*d*y)*U,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*S-r*d*S)*U,e[4]=b*U,e[5]=(m*x*l-M*v*l+M*o*S-t*x*S-m*o*y+t*v*y)*U,e[6]=(M*d*l-u*x*l-M*o*h+t*x*h+u*o*y-t*d*y)*U,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*S+t*d*S)*U,e[8]=R*U,e[9]=(M*g*l-m*E*l-M*r*S+t*E*S+m*r*y-t*g*y)*U,e[10]=(u*E*l-M*c*l+M*r*h-t*E*h-u*r*y+t*c*y)*U,e[11]=(m*c*l-u*g*l-m*r*h+t*g*h+u*r*S-t*c*S)*U,e[12]=I*U,e[13]=(m*E*o-M*g*o+M*r*v-t*E*v-m*r*x+t*g*x)*U,e[14]=(M*c*o-u*E*o-M*r*d+t*E*d+u*r*x-t*c*x)*U,e[15]=(u*g*o-m*c*o+m*r*d-t*g*d-u*r*v+t*c*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,v=l*h,S=l*m,M=l*g,E=u*m,x=u*g,y=c*g,L=d*h,b=d*m,R=d*g,I=r.x,O=r.y,U=r.z;return o[0]=(1-(E+y))*I,o[1]=(S+R)*I,o[2]=(M-b)*I,o[3]=0,o[4]=(S-R)*O,o[5]=(1-(v+y))*O,o[6]=(x+L)*O,o[7]=0,o[8]=(M+b)*U,o[9]=(x-L)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=io.set(o[0],o[1],o[2]).length();const u=io.set(o[4],o[5],o[6]).length(),c=io.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],vi.copy(this);const h=1/l,m=1/u,g=1/c;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=m,vi.elements[5]*=m,vi.elements[6]*=m,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ji){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let S,M;if(c===Ji)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===Zu)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ji){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(u-l),v=(t+e)*h,S=(r+o)*m;let M,E;if(c===Ji)M=(u+l)*g,E=-2*g;else if(c===Zu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const io=new $,vi=new Ht,KC=new $(0,0,0),ZC=new $(1,1,1),Lr=new $,vu=new $,$n=new $,I0=new Ht,U0=new Ka;class or{constructor(e=0,t=0,r=0,o=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return U0.setFromEuler(this),this.setFromQuaternion(U0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QC=0;const F0=new $,ro=new Ka,Yi=new Ht,_u=new $,Ma=new $,JC=new $,eR=new Ka,O0=new $(1,0,0),k0=new $(0,1,0),B0=new $(0,0,1),z0={type:"added"},tR={type:"removed"},so={type:"childadded",child:null},hd={type:"childremoved",child:null};class Fn extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new $,t=new or,r=new Ka,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new lt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(O0,e)}rotateY(e){return this.rotateOnAxis(k0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,t){return F0.copy(e).applyQuaternion(this.quaternion),this.position.add(F0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(O0,e)}translateY(e){return this.translateOnAxis(k0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_u.copy(e):_u.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ma,_u,this.up):Yi.lookAt(_u,Ma,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),ro.setFromRotationMatrix(Yi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z0),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tR),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z0),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,JC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,eR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new $(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new $,qi=new $,pd=new $,$i=new $,oo=new $,ao=new $,V0=new $,md=new $,gd=new $,vd=new $,_d=new Lt,yd=new Lt,xd=new Lt;class ui{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_i.subVectors(e,t),o.cross(_i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){_i.subVectors(o,t),qi.subVectors(r,t),pd.subVectors(e,t);const u=_i.dot(_i),c=_i.dot(qi),d=_i.dot(pd),h=qi.dot(qi),m=qi.dot(pd),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-c*m)*v,M=(u*m-c*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,$i)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,$i.x),d.addScaledVector(u,$i.y),d.addScaledVector(c,$i.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return _d.setScalar(0),yd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,r),xd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(_d,l.x),u.addScaledVector(yd,l.y),u.addScaledVector(xd,l.z),u}static isFrontFacing(e,t,r,o){return _i.subVectors(r,t),qi.subVectors(e,t),_i.cross(qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;oo.subVectors(o,r),ao.subVectors(l,r),md.subVectors(e,r);const d=oo.dot(md),h=ao.dot(md);if(d<=0&&h<=0)return t.copy(r);gd.subVectors(e,o);const m=oo.dot(gd),g=ao.dot(gd);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(oo,u);vd.subVectors(e,l);const S=oo.dot(vd),M=ao.dot(vd);if(M>=0&&S<=M)return t.copy(l);const E=S*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(ao,c);const x=m*M-S*g;if(x<=0&&g-m>=0&&S-M>=0)return V0.subVectors(l,o),c=(g-m)/(g-m+(S-M)),t.copy(o).addScaledVector(V0,c);const y=1/(x+E+v);return u=E*y,c=v*y,t.copy(r).addScaledVector(oo,u).addScaledVector(ao,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},yu={h:0,s:0,l:0};function Sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=OC(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Sd(u,l,e+1/3),this.g=Sd(u,l,e),this.b=Sd(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const r=Ex[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return wt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=li){wt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(yu);const r=rd(Nr.h,yu.h,t),o=rd(Nr.s,yu.s,t),l=rd(Nr.l,yu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ct;Ct.NAMES=Ex;let nR=0;class Qa extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=To,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Jd&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tx extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new $,xu=new mt;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Oh,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xu.fromBufferAttribute(this,t),xu.applyMatrix3(e),this.setXY(t,xu.x,xu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),o=Dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),o=Dt(o,this.array),l=Dt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class wx extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ax extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ts extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let iR=0;const oi=new Ht,Md=new Fn,lo=new $,Kn=new Za,Ea=new Za,fn=new $;class Xr extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Ax:wx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ts(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];Ea.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Kn.min,Ea.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,Ea.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(Ea.min),Kn.expandByPoint(Ea.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)fn.fromBufferAttribute(c,h),d&&(lo.fromBufferAttribute(e,h),fn.add(lo)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<r.count;z++)c[z]=new $,d[z]=new $;const h=new $,m=new $,g=new $,v=new mt,S=new mt,M=new mt,E=new $,x=new $;function y(z,P,C){h.fromBufferAttribute(r,z),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),v.fromBufferAttribute(l,z),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),m.sub(h),g.sub(h),S.sub(v),M.sub(v);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(H),x.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(H),c[z].add(E),c[P].add(E),c[C].add(E),d[z].add(x),d[P].add(x),d[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,P=L.length;z<P;++z){const C=L[z],H=C.start,ae=C.count;for(let te=H,ce=H+ae;te<ce;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new $,R=new $,I=new $,O=new $;function U(z){I.fromBufferAttribute(o,z),O.copy(I);const P=c[z];b.copy(P),b.sub(I.multiplyScalar(I.dot(P))).normalize(),R.crossVectors(O,P);const H=R.dot(d[z])<0?-1:1;u.setXYZW(z,b.x,b.y,b.z,H)}for(let z=0,P=L.length;z<P;++z){const C=L[z],H=C.start,ae=C.count;for(let te=H,ce=H+ae;te<ce;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new $,l=new $,u=new $,c=new $,d=new $,h=new $,m=new $,g=new $;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,x),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,v=new h.constructor(d.length*m);let S=0,M=0;for(let E=0,x=d.length;E<x;E++){c.isInterleavedBufferAttribute?S=d[E]*c.data.stride+c.offset:S=d[E]*m;for(let y=0;y<m;y++)v[M++]=h[S++]}return new Mi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,r);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H0=new Ht,cs=new $C,Su=new Cp,G0=new $,Mu=new $,Eu=new $,Tu=new $,Ed=new $,wu=new $,W0=new $,Au=new $;class er extends Fn{constructor(e=new Xr,t=new Tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){wu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(Ed.fromBufferAttribute(g,e),u?wu.addScaledVector(Ed,m):wu.addScaledVector(Ed.sub(t),m))}t.add(wu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(Su.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Su,G0)===null||cs.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(H0.copy(l).invert(),cs.copy(e.ray).applyMatrix4(H0),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],L=Math.max(x.start,S.start),b=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let R=L,I=b;R<I;R+=3){const O=c.getX(R),U=c.getX(R+1),z=c.getX(R+2);o=Cu(this,y,e,r,h,m,g,O,U,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const L=c.getX(x),b=c.getX(x+1),R=c.getX(x+2);o=Cu(this,u,e,r,h,m,g,L,b,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],L=Math.max(x.start,S.start),b=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=L,I=b;R<I;R+=3){const O=R,U=R+1,z=R+2;o=Cu(this,y,e,r,h,m,g,O,U,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const L=x,b=x+1,R=x+2;o=Cu(this,u,e,r,h,m,g,L,b,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function rR(n,e,t,r,o,l,u,c){let d;if(e.side===Wn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Gr,c),d===null)return null;Au.copy(c),Au.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Au);return h<t.near||h>t.far?null:{distance:h,point:Au.clone(),object:n}}function Cu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,Mu),n.getVertexPosition(d,Eu),n.getVertexPosition(h,Tu);const m=rR(n,e,t,r,Mu,Eu,Tu,W0);if(m){const g=new $;ui.getBarycoord(W0,Mu,Eu,Tu,g),o&&(m.uv=ui.getInterpolatedAttribute(o,c,d,h,g,new mt)),l&&(m.uv1=ui.getInterpolatedAttribute(l,c,d,h,g,new mt)),u&&(m.normal=ui.getInterpolatedAttribute(u,c,d,h,g,new $),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new $,materialIndex:0};ui.getNormal(Mu,Eu,Tu,v.normal),m.face=v,m.barycoord=g}return m}class Ja extends Xr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Ts(h,3)),this.setAttribute("normal",new Ts(m,3)),this.setAttribute("uv",new Ts(g,2));function M(E,x,y,L,b,R,I,O,U,z,P){const C=R/U,H=I/z,ae=R/2,te=I/2,ce=O/2,pe=U+1,ue=z+1;let re=0,B=0;const le=new $;for(let se=0;se<ue;se++){const F=se*H-te;for(let ne=0;ne<pe;ne++){const Ue=ne*C-ae;le[E]=Ue*L,le[x]=F*b,le[y]=ce,h.push(le.x,le.y,le.z),le[E]=0,le[x]=0,le[y]=O>0?1:-1,m.push(le.x,le.y,le.z),g.push(ne/U),g.push(1-se/z),re+=1}}for(let se=0;se<z;se++)for(let F=0;F<U;F++){const ne=v+F+pe*se,Ue=v+F+pe*(se+1),Q=v+(F+1)+pe*(se+1),he=v+(F+1)+pe*se;d.push(ne,Ue,he),d.push(Ue,Q,he),B+=6}c.addGroup(S,B,P),S+=B,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const r=Fo(n[t]);for(const o in r)e[o]=r[o]}return e}function sR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const oR={clone:Fo,merge:In};var aR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aR,this.fragmentShader=lR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=sR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Rx extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new $,j0=new mt,X0=new mt;class Zn extends Rx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,j0,X0),t.subVectors(X0,j0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(id*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,co=1;class uR extends Fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(uo,co,e,t);o.layers=this.layers,this.add(o);const l=new Zn(uo,co,e,t);l.layers=this.layers,this.add(l);const u=new Zn(uo,co,e,t);u.layers=this.layers,this.add(u);const c=new Zn(uo,co,e,t);c.layers=this.layers,this.add(c);const d=new Zn(uo,co,e,t);d.layers=this.layers,this.add(d);const h=new Zn(uo,co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Px extends Cn{constructor(e,t,r,o,l,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Do,super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cR extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Px(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ja(5,5,5),l=new Wr({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:kr});l.uniforms.tEquirect.value=t;const u=new er(o,l),c=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Di),new uR(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class fR extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=zr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new $;class Qu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),o=Dt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),o=Dt(o,this.array),l=Dt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bx extends Qa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fo;const Ta=new $,ho=new $,po=new $,mo=new mt,wa=new mt,Dx=new Ht,Ru=new $,Aa=new $,Pu=new $,Y0=new mt,Td=new mt,q0=new mt;class hR extends Fn{constructor(e=new bx){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new Xr;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new dR(t,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new Qu(r,3,0,!1)),fo.setAttribute("uv",new Qu(r,2,3,!1))}this.geometry=fo,this.material=e,this.center=new mt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ho.setFromMatrixScale(this.matrixWorld),Dx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ho.multiplyScalar(-po.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;bu(Ru.set(-.5,-.5,0),po,u,ho,o,l),bu(Aa.set(.5,-.5,0),po,u,ho,o,l),bu(Pu.set(.5,.5,0),po,u,ho,o,l),Y0.set(0,0),Td.set(1,0),q0.set(1,1);let c=e.ray.intersectTriangle(Ru,Aa,Pu,!1,Ta);if(c===null&&(bu(Aa.set(-.5,.5,0),po,u,ho,o,l),Td.set(0,1),c=e.ray.intersectTriangle(Ru,Pu,Aa,!1,Ta),c===null))return;const d=e.ray.origin.distanceTo(Ta);d<e.near||d>e.far||t.push({distance:d,point:Ta.clone(),uv:ui.getInterpolation(Ta,Ru,Aa,Pu,Y0,Td,q0,new mt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bu(n,e,t,r,o,l){mo.subVectors(n,t).addScalar(.5).multiply(r),o!==void 0?(wa.x=l*mo.x-o*mo.y,wa.y=o*mo.x+l*mo.y):wa.copy(mo),n.copy(e),n.x+=wa.x,n.y+=wa.y,n.applyMatrix4(Dx)}const wd=new $,pR=new $,mR=new lt;class gs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=wd.subVectors(r,t).cross(pR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(wd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||mR.getNormalMatrix(e),o=this.coplanarPoint(wd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Cp,Du=new $;class Rp{constructor(e=new gs,t=new gs,r=new gs,o=new gs,l=new gs,u=new gs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ji){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],m=o[5],g=o[6],v=o[7],S=o[8],M=o[9],E=o[10],x=o[11],y=o[12],L=o[13],b=o[14],R=o[15];if(r[0].setComponents(d-l,v-h,x-S,R-y).normalize(),r[1].setComponents(d+l,v+h,x+S,R+y).normalize(),r[2].setComponents(d+u,v+m,x+M,R+L).normalize(),r[3].setComponents(d-u,v-m,x-M,R-L).normalize(),r[4].setComponents(d-c,v-g,x-E,R-b).normalize(),t===Ji)r[5].setComponents(d+c,v+g,x+E,R+b).normalize();else if(t===Zu)r[5].setComponents(c,g,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Du.x=o.normal.x>0?e.max.x:e.min.x,Du.y=o.normal.y>0?e.max.y:e.min.y,Du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Da extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gR extends Cn{constructor(e,t,r,o,l,u,c,d,h){super(e,t,r,o,l,u,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lx extends Cn{constructor(e,t,r,o,l,u,c,d,h,m=wo){if(m!==wo&&m!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===wo&&(r=ws),r===void 0&&m===Io&&(r=No),super(null,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Si,this.minFilter=d!==void 0?d:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sc extends Xr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,g=e/c,v=t/d,S=[],M=[],E=[],x=[];for(let y=0;y<m;y++){const L=y*v-u;for(let b=0;b<h;b++){const R=b*g-l;M.push(R,-L,0),E.push(0,0,1),x.push(b/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const b=L+h*y,R=L+h*(y+1),I=L+1+h*(y+1),O=L+1+h*y;S.push(b,R,O),S.push(R,I,O)}this.setIndex(S),this.setAttribute("position",new Ts(M,3)),this.setAttribute("normal",new Ts(E,3)),this.setAttribute("uv",new Ts(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vR extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _R extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class yR{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){c++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,c),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const xR=new yR;class Pp{constructor(e){this.manager=e!==void 0?e:xR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pp.DEFAULT_MATERIAL_NAME="__DEFAULT";class SR extends Pp{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=$0.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Wa("img");function d(){m(),$0.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),o&&o(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class MR extends Pp{constructor(e){super(e)}load(e,t,r,o){const l=new Cn,u=new SR(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Nx extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ad=new Ht,K0=new $,Z0=new $;class ER{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),t.position.copy(K0),Z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Z0),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q0=new Ht,Ca=new $,Cd=new $;class TR extends ER{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ca),Cd.copy(r.position),Cd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Cd),r.updateMatrixWorld(),o.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Q0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0)}}class wR extends Nx{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new TR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AR extends Rx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class CR extends Nx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class RR extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function J0(n,e,t,r){const o=PR(r);switch(t){case fx:return n*e;case hx:return n*e;case px:return n*e*2;case mx:return n*e/o.components*o.byteLength;case Tp:return n*e/o.components*o.byteLength;case gx:return n*e*2/o.components*o.byteLength;case wp:return n*e*2/o.components*o.byteLength;case dx:return n*e*3/o.components*o.byteLength;case xi:return n*e*4/o.components*o.byteLength;case Ap:return n*e*4/o.components*o.byteLength;case ku:case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(n,16)*Math.max(e,8)/4;case fh:case hh:return Math.max(n,8)*Math.max(e,8)/2;case mh:case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hu:case Lh:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vx:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PR(n){switch(n){case sr:case lx:return{byteLength:1,components:1};case Ga:case ux:case $a:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case ws:case Sp:case Qi:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ix(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function bR(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,m);else{g.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<g.length;S++){const M=g[v],E=g[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let S=0,M=g.length;S<M;S++){const E=g[S];n.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var DR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aP="gl_FragColor = linearToOutputTexel( gl_FragColor );",lP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_P=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$P=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ob=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:DR,alphahash_pars_fragment:LR,alphamap_fragment:NR,alphamap_pars_fragment:IR,alphatest_fragment:UR,alphatest_pars_fragment:FR,aomap_fragment:OR,aomap_pars_fragment:kR,batching_pars_vertex:BR,batching_vertex:zR,begin_vertex:VR,beginnormal_vertex:HR,bsdfs:GR,iridescence_fragment:WR,bumpmap_pars_fragment:jR,clipping_planes_fragment:XR,clipping_planes_pars_fragment:YR,clipping_planes_pars_vertex:qR,clipping_planes_vertex:$R,color_fragment:KR,color_pars_fragment:ZR,color_pars_vertex:QR,color_vertex:JR,common:eP,cube_uv_reflection_fragment:tP,defaultnormal_vertex:nP,displacementmap_pars_vertex:iP,displacementmap_vertex:rP,emissivemap_fragment:sP,emissivemap_pars_fragment:oP,colorspace_fragment:aP,colorspace_pars_fragment:lP,envmap_fragment:uP,envmap_common_pars_fragment:cP,envmap_pars_fragment:fP,envmap_pars_vertex:dP,envmap_physical_pars_fragment:EP,envmap_vertex:hP,fog_vertex:pP,fog_pars_vertex:mP,fog_fragment:gP,fog_pars_fragment:vP,gradientmap_pars_fragment:_P,lightmap_pars_fragment:yP,lights_lambert_fragment:xP,lights_lambert_pars_fragment:SP,lights_pars_begin:MP,lights_toon_fragment:TP,lights_toon_pars_fragment:wP,lights_phong_fragment:AP,lights_phong_pars_fragment:CP,lights_physical_fragment:RP,lights_physical_pars_fragment:PP,lights_fragment_begin:bP,lights_fragment_maps:DP,lights_fragment_end:LP,logdepthbuf_fragment:NP,logdepthbuf_pars_fragment:IP,logdepthbuf_pars_vertex:UP,logdepthbuf_vertex:FP,map_fragment:OP,map_pars_fragment:kP,map_particle_fragment:BP,map_particle_pars_fragment:zP,metalnessmap_fragment:VP,metalnessmap_pars_fragment:HP,morphinstance_vertex:GP,morphcolor_vertex:WP,morphnormal_vertex:jP,morphtarget_pars_vertex:XP,morphtarget_vertex:YP,normal_fragment_begin:qP,normal_fragment_maps:$P,normal_pars_fragment:KP,normal_pars_vertex:ZP,normal_vertex:QP,normalmap_pars_fragment:JP,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:rb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:lb,dithering_pars_fragment:ub,roughnessmap_fragment:cb,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:hb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:vb,skinning_vertex:_b,skinnormal_vertex:yb,specularmap_fragment:xb,specularmap_pars_fragment:Sb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:wb,uv_pars_fragment:Ab,uv_pars_vertex:Cb,uv_vertex:Rb,worldpos_vertex:Pb,background_vert:bb,background_frag:Db,backgroundCube_vert:Lb,backgroundCube_frag:Nb,cube_vert:Ib,cube_frag:Ub,depth_vert:Fb,depth_frag:Ob,distanceRGBA_vert:kb,distanceRGBA_frag:Bb,equirect_vert:zb,equirect_frag:Vb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Wb,meshbasic_frag:jb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:qb,meshmatcap_frag:$b,meshnormal_vert:Kb,meshnormal_frag:Zb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:e2,meshphysical_frag:t2,meshtoon_vert:n2,meshtoon_frag:i2,points_vert:r2,points_frag:s2,shadow_vert:o2,shadow_frag:a2,sprite_vert:l2,sprite_frag:u2},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Lu={r:0,b:0,g:0},ds=new or,c2=new Ht;function f2(n,e,t,r,o,l,u){const c=new Ct(0);let d=l===!0?0:1,h,m,g=null,v=0,S=null;function M(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function E(b){let R=!1;const I=M(b);I===null?y(c,d):I&&I.isColor&&(y(I,1),R=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,R){const I=M(R);I&&(I.isCubeTexture||I.mapping===rc)?(m===void 0&&(m=new er(new Ja(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Fo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ds.copy(R.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(ds)),m.material.toneMapped=wt.getTransfer(I.colorSpace)!==bt,(g!==I||v!==I.version||S!==n.toneMapping)&&(m.material.needsUpdate=!0,g=I,v=I.version,S=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new er(new sc(2,2),new Wr({name:"BackgroundMaterial",uniforms:Fo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=wt.getTransfer(I.colorSpace)!==bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,g=I,v=I.version,S=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,R){b.getRGB(Lu,Cx(n)),r.buffers.color.setClear(Lu.r,Lu.g,Lu.b,R,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,R=1){c.set(b),d=R,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:E,addToRenderList:x,dispose:L}}function d2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,H,ae,te,ce){let pe=!1;const ue=g(te,ae,H);l!==ue&&(l=ue,h(l.object)),pe=S(C,te,ae,ce),pe&&M(C,te,ae,ce),ce!==null&&e.update(ce,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,H,ae,te),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function m(C){return n.deleteVertexArray(C)}function g(C,H,ae){const te=ae.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let pe=ce[H.id];pe===void 0&&(pe={},ce[H.id]=pe);let ue=pe[te];return ue===void 0&&(ue=v(d()),pe[te]=ue),ue}function v(C){const H=[],ae=[],te=[];for(let ce=0;ce<t;ce++)H[ce]=0,ae[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ae,attributeDivisors:te,object:C,attributes:{},index:null}}function S(C,H,ae,te){const ce=l.attributes,pe=H.attributes;let ue=0;const re=ae.getAttributes();for(const B in re)if(re[B].location>=0){const se=ce[B];let F=pe[B];if(F===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ue++}return l.attributesNum!==ue||l.index!==te}function M(C,H,ae,te){const ce={},pe=H.attributes;let ue=0;const re=ae.getAttributes();for(const B in re)if(re[B].location>=0){let se=pe[B];se===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),ce[B]=F,ue++}l.attributes=ce,l.attributesNum=ue,l.index=te}function E(){const C=l.newAttributes;for(let H=0,ae=C.length;H<ae;H++)C[H]=0}function x(C){y(C,0)}function y(C,H){const ae=l.newAttributes,te=l.enabledAttributes,ce=l.attributeDivisors;ae[C]=1,te[C]===0&&(n.enableVertexAttribArray(C),te[C]=1),ce[C]!==H&&(n.vertexAttribDivisor(C,H),ce[C]=H)}function L(){const C=l.newAttributes,H=l.enabledAttributes;for(let ae=0,te=H.length;ae<te;ae++)H[ae]!==C[ae]&&(n.disableVertexAttribArray(ae),H[ae]=0)}function b(C,H,ae,te,ce,pe,ue){ue===!0?n.vertexAttribIPointer(C,H,ae,ce,pe):n.vertexAttribPointer(C,H,ae,te,ce,pe)}function R(C,H,ae,te){E();const ce=te.attributes,pe=ae.getAttributes(),ue=H.defaultAttributeValues;for(const re in pe){const B=pe[re];if(B.location>=0){let le=ce[re];if(le===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,F=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ue=ne.buffer,Q=ne.type,he=ne.bytesPerElement,Me=Q===n.INT||Q===n.UNSIGNED_INT||le.gpuType===Sp;if(le.isInterleavedBufferAttribute){const ye=le.data,we=ye.stride,Ie=le.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<B.locationSize;Je++)y(B.location+Je,ye.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<B.locationSize;Je++)x(B.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Je=0;Je<B.locationSize;Je++)b(B.location+Je,F/B.locationSize,Q,se,we*he,(Ie+F/B.locationSize*Je)*he,Me)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<B.locationSize;ye++)x(B.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ye=0;ye<B.locationSize;ye++)b(B.location+ye,F/B.locationSize,Q,se,F*he,F/B.locationSize*ye*he,Me)}}else if(ue!==void 0){const se=ue[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(B.location,se);break;case 3:n.vertexAttrib3fv(B.location,se);break;case 4:n.vertexAttrib4fv(B.location,se);break;default:n.vertexAttrib1fv(B.location,se)}}}}L()}function I(){z();for(const C in r){const H=r[C];for(const ae in H){const te=H[ae];for(const ce in te)m(te[ce].object),delete te[ce];delete H[ae]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const ae in H){const te=H[ae];for(const ce in te)m(te[ce].object),delete te[ce];delete H[ae]}delete r[C.id]}function U(C){for(const H in r){const ae=r[H];if(ae[C.id]===void 0)continue;const te=ae[C.id];for(const ce in te)m(te[ce].object),delete te[ce];delete ae[C.id]}}function z(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:z,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:x,disableUnusedAttributes:L}}function h2(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,r,1)}function d(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function p2(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==xi&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const z=U===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==sr&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qi&&!z)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:I,maxSamples:O}}function m2(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new gs,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||r!==0||o;return o=v,r=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!x)l?m(null):h();else{const L=l?0:r,b=L*4;let R=y.clippingState||null;d.value=R,R=m(M,v,b,S);for(let I=0;I!==b;++I)R[I]=t[I];y.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,S,M){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const y=S+E*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let b=0,R=S;b!==E;++b,R+=4)u.copy(g[b]).applyMatrix4(L,c),u.normal.toArray(x,R),x[R+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function g2(n){let e=new WeakMap;function t(u,c){return c===ah?u.mapping=Do:c===lh&&(u.mapping=Lo),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===ah||c===lh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new cR(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Eo=4,e_=[.125,.215,.35,.446,.526,.582],ys=20,Rd=new AR,t_=new Ct;let Pd=null,bd=0,Dd=0,Ld=!1;const vs=(1+Math.sqrt(5))/2,go=1/vs,n_=[new $(-vs,go,0),new $(vs,go,0),new $(-go,0,vs),new $(go,0,vs),new $(0,vs,-go),new $(0,vs,go),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Pd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,bd,Dd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,Nu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Do||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:$a,format:xi,colorSpace:Uo,depthBuffer:!1},o=r_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v2(l)),this._blurMaterial=_2(l,e,t)}return o}_compileMaterial(e){const t=new er(this._lodPlanes[0],e);this._renderer.compile(t,Rd)}_sceneToCubeUV(e,t,r,o){const c=new Zn(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(t_),m.toneMapping=Br,m.autoClear=!1;const S=new Tx({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new er(new Ja,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(t_),E=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const b=this._cubeSize;Nu(o,L*b,y>2?b:0,b,b),m.setRenderTarget(o),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Do||e.mapping===Lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new er(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Nu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Rd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=n_[(o-l-1)%n_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new er(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ys-1),E=l/M,x=isFinite(l)?1+Math.floor(m*E):ys;x>ys&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const y=[];let L=0;for(let U=0;U<ys;++U){const z=U/E,P=Math.exp(-z*z/2);y.push(P),U===0?L+=P:U<x&&(L+=2*P)}for(let U=0;U<y.length;U++)y[U]=y[U]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const R=this._sizeLods[o],I=3*R*(o>b-Eo?o-b+Eo:0),O=4*(this._cubeSize-R);Nu(t,I,O,3*R,2*R),d.setRenderTarget(t),d.render(g,Rd)}}function v2(n){const e=[],t=[],r=[];let o=n;const l=n-Eo+1+e_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-Eo?d=e_[u-n+Eo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,x=2,y=1,L=new Float32Array(E*M*S),b=new Float32Array(x*M*S),R=new Float32Array(y*M*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,z=O>2?0:-1,P=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];L.set(P,E*M*O),b.set(v,x*M*O);const C=[O,O,O,O,O,O];R.set(C,y*M*O)}const I=new Xr;I.setAttribute("position",new Mi(L,E)),I.setAttribute("uv",new Mi(b,x)),I.setAttribute("faceIndex",new Mi(R,y)),e.push(I),o>Eo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function r_(n,e,t){const r=new As(n,e,t);return r.texture.mapping=rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function _2(n,e,t){const r=new Float32Array(ys),o=new $(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function s_(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function o_(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function bp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y2(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===ah||d===lh,m=d===Do||d===Lo;if(h||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new i_(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const S=c.image;return h&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new i_(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function x2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&vo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function S2(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const S in v)e.update(v[S],n.ARRAY_BUFFER)}function h(g){const v=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let b=0,R=L.length;b<R;b+=3){const I=L[b+0],O=L[b+1],U=L[b+2];v.push(I,O,O,U,U,I)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,R=L.length/3-1;b<R;b+=3){const I=b+0,O=b+1,U=b+2;v.push(I,O,O,U,U,I)}}else return;const x=new(yx(v)?Ax:wx)(v,1);x.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,x)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function M2(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,S){n.drawElements(r,S,l,v*u),t.update(S,r,1)}function h(v,S,M){M!==0&&(n.drawElementsInstanced(r,S,l,v*u,M),t.update(S,r,M))}function m(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,r,1)}function g(v,S,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)h(v[y]/u,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=S[L]*E[L];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function E2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function T2(n,e,t){const r=new WeakMap,o=new Lt;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){z.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),x===!0&&(R=3);let I=c.attributes.position.count*R,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*O*4*g),z=new Sx(U,I,O,g);z.type=Qi,z.needsUpdate=!0;const P=R*4;for(let H=0;H<g;H++){const ae=y[H],te=L[H],ce=b[H],pe=I*O*4*H;for(let ue=0;ue<ae.count;ue++){const re=ue*P;M===!0&&(o.fromBufferAttribute(ae,ue),U[pe+re+0]=o.x,U[pe+re+1]=o.y,U[pe+re+2]=o.z,U[pe+re+3]=0),E===!0&&(o.fromBufferAttribute(te,ue),U[pe+re+4]=o.x,U[pe+re+5]=o.y,U[pe+re+6]=o.z,U[pe+re+7]=0),x===!0&&(o.fromBufferAttribute(ce,ue),U[pe+re+8]=o.x,U[pe+re+9]=o.y,U[pe+re+10]=o.z,U[pe+re+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new mt(I,O)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function w2(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const Ux=new Cn,a_=new Lx(1,1),Fx=new Sx,Ox=new YC,kx=new Px,l_=[],u_=[],c_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);function zo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=l_[o];if(l===void 0&&(l=new Float32Array(o),l_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function oc(n,e){let t=u_[e];t===void 0&&(t=new Int32Array(e),u_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function A2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function b2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;d_.set(r),n.uniformMatrix2fv(this.addr,!1,d_),sn(t,r)}}function D2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;f_.set(r),n.uniformMatrix3fv(this.addr,!1,f_),sn(t,r)}}function L2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;c_.set(r),n.uniformMatrix4fv(this.addr,!1,c_),sn(t,r)}}function N2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function O2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function z2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function V2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(a_.compareFunction=_x,l=a_):l=Ux,t.setTexture2D(e||l,o)}function H2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Ox,o)}function G2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||kx,o)}function W2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Fx,o)}function j2(n){switch(n){case 5126:return A2;case 35664:return C2;case 35665:return R2;case 35666:return P2;case 35674:return b2;case 35675:return D2;case 35676:return L2;case 5124:case 35670:return N2;case 35667:case 35671:return I2;case 35668:case 35672:return U2;case 35669:case 35673:return F2;case 5125:return O2;case 36294:return k2;case 36295:return B2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return W2}}function X2(n,e){n.uniform1fv(this.addr,e)}function Y2(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function q2(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function $2(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function K2(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z2(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q2(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J2(n,e){n.uniform1iv(this.addr,e)}function eD(n,e){n.uniform2iv(this.addr,e)}function tD(n,e){n.uniform3iv(this.addr,e)}function nD(n,e){n.uniform4iv(this.addr,e)}function iD(n,e){n.uniform1uiv(this.addr,e)}function rD(n,e){n.uniform2uiv(this.addr,e)}function sD(n,e){n.uniform3uiv(this.addr,e)}function oD(n,e){n.uniform4uiv(this.addr,e)}function aD(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Ux,l[u])}function lD(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Ox,l[u])}function uD(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||kx,l[u])}function cD(n,e,t){const r=this.cache,o=e.length,l=oc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Fx,l[u])}function fD(n){switch(n){case 5126:return X2;case 35664:return Y2;case 35665:return q2;case 35666:return $2;case 35674:return K2;case 35675:return Z2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return eD;case 35668:case 35672:return tD;case 35669:case 35673:return nD;case 5125:return iD;case 36294:return rD;case 36295:return sD;case 36296:return oD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return lD;case 35680:case 36300:case 36308:case 36293:return uD;case 36289:case 36303:case 36311:case 36292:return cD}}class dD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=j2(t.type)}}class hD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fD(t.type)}}class pD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function h_(n,e){n.seq.push(e),n.map[e.id]=e}function mD(n,e,t){const r=n.name,o=r.length;for(Nd.lastIndex=0;;){const l=Nd.exec(r),u=Nd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){h_(t,h===void 0?new dD(c,n,e):new hD(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new pD(c),h_(t,g)),t=g}}}class Gu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);mD(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function p_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const gD=37297;let vD=0;function _D(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const m_=new lt;function yD(n){wt._getMatrix(m_,wt.workingColorSpace,n);const e=`mat3( ${m_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Ku:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function g_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+_D(n.getShaderSource(e),u)}else return o}function xD(n,e){const t=yD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SD(n,e){let t;switch(e){case _C:t="Linear";break;case yC:t="Reinhard";break;case xC:t="Cineon";break;case SC:t="ACESFilmic";break;case EC:t="AgX";break;case TC:t="Neutral";break;case MC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Iu=new $;function MD(){wt.getLuminanceCoefficients(Iu);const n=Iu.x.toFixed(4),e=Iu.y.toFixed(4),t=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ED(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function TD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function wD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function La(n){return n!==""}function v_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(AD,RD)}const CD=new Map;function RD(n,e){let t=ut[e];if(t===void 0){const r=CD.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const PD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(n){return n.replace(PD,bD)}function bD(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function x_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ZA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function LD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Do:case Lo:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ND(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function ID(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ox:e="ENVMAP_BLENDING_MULTIPLY";break;case gC:e="ENVMAP_BLENDING_MIX";break;case vC:e="ENVMAP_BLENDING_ADD";break}return e}function UD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function FD(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=DD(t),h=LD(t),m=ND(t),g=ID(t),v=UD(t),S=ED(t),M=TD(l),E=o.createProgram();let x,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),y.length>0&&(y+=`
`)):(x=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),y=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ut.tonemapping_pars_fragment:"",t.toneMapping!==Br?SD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,xD("linearToOutputTexel",t.outputColorSpace),MD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),u=Bh(u),u=v_(u,t),u=__(u,t),c=Bh(c),c=v_(c,t),c=__(c,t),u=y_(u),c=y_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=L+x+u,R=L+y+c,I=p_(o,o.VERTEX_SHADER,b),O=p_(o,o.FRAGMENT_SHADER,R);o.attachShader(E,I),o.attachShader(E,O),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(H){if(n.debug.checkShaderErrors){const ae=o.getProgramInfoLog(E).trim(),te=o.getShaderInfoLog(I).trim(),ce=o.getShaderInfoLog(O).trim();let pe=!0,ue=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,I,O);else{const re=g_(o,I,"vertex"),B=g_(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+re+`
`+B)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||ce==="")&&(ue=!1);ue&&(H.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:te,prefix:x},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(I),o.deleteShader(O),z=new Gu(o,E),P=wD(o,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,gD)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vD++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=O,this}let OD=0;class kD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new BD(e),t.set(e,r)),r}}class BD{constructor(e){this.id=OD++,this.code=e,this.usedTimes=0}}function zD(n,e,t,r,o,l,u){const c=new Mx,d=new kD,h=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function x(P,C,H,ae,te){const ce=ae.fog,pe=te.geometry,ue=P.isMeshStandardMaterial?ae.environment:null,re=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),B=re&&re.mapping===rc?re.image.height:null,le=M[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,F=se!==void 0?se.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,Q,he,Me;if(le){const St=Pi[le];Ue=St.vertexShader,Q=St.fragmentShader}else Ue=P.vertexShader,Q=P.fragmentShader,d.update(P),he=d.getVertexShaderID(P),Me=d.getFragmentShaderID(P);const ye=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Je=te.isBatchedMesh===!0,Pt=!!P.map,gt=!!P.matcap,It=!!re,V=!!P.aoMap,Rn=!!P.lightMap,pt=!!P.bumpMap,ft=!!P.normalMap,qe=!!P.displacementMap,Rt=!!P.emissiveMap,je=!!P.metalnessMap,D=!!P.roughnessMap,w=P.anisotropy>0,Z=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,fe=P.sheen>0,Xe=P.transmission>0,Ae=w&&!!P.anisotropyMap,Fe=Z&&!!P.clearcoatMap,ct=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,Be=ve&&!!P.iridescenceMap,Ke=ve&&!!P.iridescenceThicknessMap,nt=fe&&!!P.sheenColorMap,ze=fe&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,W=Xe&&!!P.transmissionMap,Ce=Xe&&!!P.thicknessMap,oe=!!P.gradientMap,de=!!P.alphaMap,De=P.alphaTest>0,be=!!P.alphaHash,ot=!!P.extensions;let Ft=Br;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ft=n.toneMapping);const en={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Je,batchingColor:Je&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Uo,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:gt,envMap:It,envMapMode:It&&re.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Rn,bumpMap:pt,normalMap:ft,displacementMap:v&&qe,emissiveMap:Rt,normalMapObjectSpace:ft&&P.normalMapType===PC,normalMapTangentSpace:ft&&P.normalMapType===RC,metalnessMap:je,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:Ke,sheen:fe,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:st,specularIntensityMap:At,transmission:Xe,transmissionMap:W,thicknessMap:Ce,gradientMap:oe,opaque:P.transparent===!1&&P.blending===To&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:be,combine:P.combine,mapUv:Pt&&E(P.map.channel),aoMapUv:V&&E(P.aoMap.channel),lightMapUv:Rn&&E(P.lightMap.channel),bumpMapUv:pt&&E(P.bumpMap.channel),normalMapUv:ft&&E(P.normalMap.channel),displacementMapUv:qe&&E(P.displacementMap.channel),emissiveMapUv:Rt&&E(P.emissiveMap.channel),metalnessMapUv:je&&E(P.metalnessMap.channel),roughnessMapUv:D&&E(P.roughnessMap.channel),anisotropyMapUv:Ae&&E(P.anisotropyMap.channel),clearcoatMapUv:Fe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(P.sheenRoughnessMap.channel),specularMapUv:dt&&E(P.specularMap.channel),specularColorMapUv:st&&E(P.specularColorMap.channel),specularIntensityMapUv:At&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Ce&&E(P.thicknessMap.channel),alphaMapUv:de&&E(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ft||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(Pt||de),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Zi,flipSided:P.side===Wn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)C.push(H),C.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(L(C,P),b(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function L(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const C=M[P.type];let H;if(C){const ae=Pi[C];H=oR.clone(ae.uniforms)}else H=P.uniforms;return H}function I(P,C){let H;for(let ae=0,te=m.length;ae<te;ae++){const ce=m[ae];if(ce.cacheKey===C){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new FD(n,C,P,l),m.push(H)),H}function O(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function U(P){d.remove(P)}function z(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:R,acquireProgram:I,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:z}}function VD(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function HD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function S_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,S,M,E,x){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:x},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=x),e++,y}function c(g,v,S,M,E,x){const y=u(g,v,S,M,E,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,v,S,M,E,x){const y=u(g,v,S,M,E,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||HD),r.length>1&&r.sort(v||S_),o.length>1&&o.sort(v||S_)}function m(){for(let g=e,v=n.length;g<v;g++){const S=n[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function GD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new M_,n.set(r,[u])):o>=l.length?(u=new M_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function WD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ct};break;case"SpotLight":t={position:new $,direction:new $,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function jD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XD=0;function YD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qD(n){const e=new WD,t=jD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const o=new $,l=new Ht,u=new Ht;function c(h){let m=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,L=0,b=0,R=0,I=0,O=0,U=0;h.sort(YD);for(let P=0,C=h.length;P<C;P++){const H=h[P],ae=H.color,te=H.intensity,ce=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=ae.r*te,g+=ae.g*te,v+=ae.b*te;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(H.sh.coefficients[ue],te);U++}else if(H.isDirectionalLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const re=H.shadow,B=t.get(H);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=H.shadow.matrix,L++}r.directional[S]=ue,S++}else if(H.isSpotLight){const ue=e.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy(ae).multiplyScalar(te),ue.distance=ce,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,r.spot[E]=ue;const re=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,re.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[E]=re.matrix,H.castShadow){const B=t.get(H);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.spotShadow[E]=B,r.spotShadowMap[E]=pe,R++}E++}else if(H.isRectAreaLight){const ue=e.get(H);ue.color.copy(ae).multiplyScalar(te),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=ue,x++}else if(H.isPointLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const re=H.shadow,B=t.get(H);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,B.shadowCameraNear=re.camera.near,B.shadowCameraFar=re.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=pe,r.pointShadowMatrix[M]=H.shadow.matrix,b++}r.point[M]=ue,M++}else if(H.isHemisphereLight){const ue=e.get(H);ue.skyColor.copy(H.color).multiplyScalar(te),ue.groundColor.copy(H.groundColor).multiplyScalar(te),r.hemi[y]=ue,y++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==S||z.pointLength!==M||z.spotLength!==E||z.rectAreaLength!==x||z.hemiLength!==y||z.numDirectionalShadows!==L||z.numPointShadows!==b||z.numSpotShadows!==R||z.numSpotMaps!==I||z.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+I-O,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,z.directionalLength=S,z.pointLength=M,z.spotLength=E,z.rectAreaLength=x,z.hemiLength=y,z.numDirectionalShadows=L,z.numPointShadows=b,z.numSpotShadows=R,z.numSpotMaps=I,z.numLightProbes=U,r.version=XD++)}function d(h,m){let g=0,v=0,S=0,M=0,E=0;const x=m.matrixWorldInverse;for(let y=0,L=h.length;y<L;y++){const b=h[y];if(b.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),g++}else if(b.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),S++}else if(b.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(x),u.identity(),l.copy(b.matrixWorld),l.premultiply(x),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(x),v++}else if(b.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(x),E++}}}return{setup:c,setupView:d,state:r}}function E_(n){const e=new qD(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function $D(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new E_(n),e.set(o,[c])):l>=u.length?(c=new E_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const KD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QD(n,e,t){let r=new Rp;const o=new mt,l=new mt,u=new Lt,c=new vR({depthPacking:CC}),d=new _R,h={},m=t.maxTextureSize,g={[Gr]:Wn,[Wn]:Gr,[Zi]:Zi},v=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:KD,fragmentShader:ZD}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xr;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new er(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let y=this.type;this.render=function(O,U,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(kr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=y!==Ki&&this.type===Ki,ce=y===Ki&&this.type!==Ki;for(let pe=0,ue=O.length;pe<ue;pe++){const re=O[pe],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const le=B.getFrameExtents();if(o.multiply(le),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,B.mapSize.y=l.y)),B.map===null||te===!0||ce===!0){const F=this.type!==Ki?{minFilter:Si,magFilter:Si}:{};B.map!==null&&B.map.dispose(),B.map=new As(o.x,o.y,F),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const se=B.getViewportCount();for(let F=0;F<se;F++){const ne=B.getViewport(F);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ae.viewport(u),B.updateMatrices(re,F),r=B.getFrustum(),R(U,z,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===Ki&&L(B,z),B.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(P,C,H)};function L(O,U){const z=e.update(E);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new As(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(U,null,z,v,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(U,null,z,S,E,null)}function b(O,U,z,P){let C=null;const H=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)C=H;else if(C=z.isPointLight===!0?d:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=C.uuid,te=U.uuid;let ce=h[ae];ce===void 0&&(ce={},h[ae]=ce);let pe=ce[te];pe===void 0&&(pe=C.clone(),ce[te]=pe,U.addEventListener("dispose",I)),C=pe}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Ki?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=n.properties.get(C);ae.light=z}return C}function R(O,U,z,P,C){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ce=O.material;if(Array.isArray(ce)){const pe=te.groups;for(let ue=0,re=pe.length;ue<re;ue++){const B=pe[ue],le=ce[B.materialIndex];if(le&&le.visible){const se=b(O,le,P,C);O.onBeforeShadow(n,O,U,z,te,se,B),n.renderBufferDirect(z,null,te,se,O,B),O.onAfterShadow(n,O,U,z,te,se,B)}}}else if(ce.visible){const pe=b(O,ce,P,C);O.onBeforeShadow(n,O,U,z,te,pe,null),n.renderBufferDirect(z,null,te,pe,O,null),O.onAfterShadow(n,O,U,z,te,pe,null)}}const ae=O.children;for(let te=0,ce=ae.length;te<ce;te++)R(ae[te],U,z,P,C)}function I(O){O.target.removeEventListener("dispose",I);for(const z in h){const P=h[z],C=O.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const JD={[eh]:th,[nh]:sh,[ih]:oh,[bo]:rh,[th]:eh,[sh]:nh,[oh]:ih,[rh]:bo};function eL(n,e){function t(){let W=!1;const Ce=new Lt;let oe=null;const de=new Lt(0,0,0,0);return{setMask:function(De){oe!==De&&!W&&(n.colorMask(De,De,De,De),oe=De)},setLocked:function(De){W=De},setClear:function(De,be,ot,Ft,en){en===!0&&(De*=Ft,be*=Ft,ot*=Ft),Ce.set(De,be,ot,Ft),de.equals(Ce)===!1&&(n.clearColor(De,be,ot,Ft),de.copy(Ce))},reset:function(){W=!1,oe=null,de.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,oe=null,de=null,De=null;return{setReversed:function(be){if(Ce!==be){const ot=e.get("EXT_clip_control");Ce?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=De;De=null,this.setClear(Ft)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?ye(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(be){oe!==be&&!W&&(n.depthMask(be),oe=be)},setFunc:function(be){if(Ce&&(be=JD[be]),de!==be){switch(be){case eh:n.depthFunc(n.NEVER);break;case th:n.depthFunc(n.ALWAYS);break;case nh:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case ih:n.depthFunc(n.EQUAL);break;case rh:n.depthFunc(n.GEQUAL);break;case sh:n.depthFunc(n.GREATER);break;case oh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=be}},setLocked:function(be){W=be},setClear:function(be){De!==be&&(Ce&&(be=1-be),n.clearDepth(be),De=be)},reset:function(){W=!1,oe=null,de=null,De=null,Ce=!1}}}function o(){let W=!1,Ce=null,oe=null,de=null,De=null,be=null,ot=null,Ft=null,en=null;return{setTest:function(St){W||(St?ye(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(St){Ce!==St&&!W&&(n.stencilMask(St),Ce=St)},setFunc:function(St,On,Pn){(oe!==St||de!==On||De!==Pn)&&(n.stencilFunc(St,On,Pn),oe=St,de=On,De=Pn)},setOp:function(St,On,Pn){(be!==St||ot!==On||Ft!==Pn)&&(n.stencilOp(St,On,Pn),be=St,ot=On,Ft=Pn)},setLocked:function(St){W=St},setClear:function(St){en!==St&&(n.clearStencil(St),en=St)},reset:function(){W=!1,Ce=null,oe=null,de=null,De=null,be=null,ot=null,Ft=null,en=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,S=[],M=null,E=!1,x=null,y=null,L=null,b=null,R=null,I=null,O=null,U=new Ct(0,0,0),z=0,P=!1,C=null,H=null,ae=null,te=null,ce=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,re=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(B)[1]),ue=re>=1):B.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ue=re>=2);let le=null,se={};const F=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Ue=new Lt().fromArray(F),Q=new Lt().fromArray(ne);function he(W,Ce,oe,de){const De=new Uint8Array(4),be=n.createTexture();n.bindTexture(W,be),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<oe;ot++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return be}const Me={};Me[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ye(n.DEPTH_TEST),u.setFunc(bo),pt(!1),ft(T0),ye(n.CULL_FACE),V(kr);function ye(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function we(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function Ie(W,Ce){return g[W]!==Ce?(n.bindFramebuffer(W,Ce),g[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Je(W,Ce){let oe=S,de=!1;if(W){oe=v.get(Ce),oe===void 0&&(oe=[],v.set(Ce,oe));const De=W.textures;if(oe.length!==De.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let be=0,ot=De.length;be<ot;be++)oe[be]=n.COLOR_ATTACHMENT0+be;oe.length=De.length,de=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,de=!0);de&&n.drawBuffers(oe)}function Pt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const gt={[_s]:n.FUNC_ADD,[JA]:n.FUNC_SUBTRACT,[eC]:n.FUNC_REVERSE_SUBTRACT};gt[tC]=n.MIN,gt[nC]=n.MAX;const It={[iC]:n.ZERO,[rC]:n.ONE,[sC]:n.SRC_COLOR,[Qd]:n.SRC_ALPHA,[fC]:n.SRC_ALPHA_SATURATE,[uC]:n.DST_COLOR,[aC]:n.DST_ALPHA,[oC]:n.ONE_MINUS_SRC_COLOR,[Jd]:n.ONE_MINUS_SRC_ALPHA,[cC]:n.ONE_MINUS_DST_COLOR,[lC]:n.ONE_MINUS_DST_ALPHA,[dC]:n.CONSTANT_COLOR,[hC]:n.ONE_MINUS_CONSTANT_COLOR,[pC]:n.CONSTANT_ALPHA,[mC]:n.ONE_MINUS_CONSTANT_ALPHA};function V(W,Ce,oe,de,De,be,ot,Ft,en,St){if(W===kr){E===!0&&(we(n.BLEND),E=!1);return}if(E===!1&&(ye(n.BLEND),E=!0),W!==QA){if(W!==x||St!==P){if((y!==_s||R!==_s)&&(n.blendEquation(n.FUNC_ADD),y=_s,R=_s),St)switch(W){case To:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case w0:n.blendFunc(n.ONE,n.ONE);break;case A0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case To:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case w0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case A0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,b=null,I=null,O=null,U.set(0,0,0),z=0,x=W,P=St}return}De=De||Ce,be=be||oe,ot=ot||de,(Ce!==y||De!==R)&&(n.blendEquationSeparate(gt[Ce],gt[De]),y=Ce,R=De),(oe!==L||de!==b||be!==I||ot!==O)&&(n.blendFuncSeparate(It[oe],It[de],It[be],It[ot]),L=oe,b=de,I=be,O=ot),(Ft.equals(U)===!1||en!==z)&&(n.blendColor(Ft.r,Ft.g,Ft.b,en),U.copy(Ft),z=en),x=W,P=!1}function Rn(W,Ce){W.side===Zi?we(n.CULL_FACE):ye(n.CULL_FACE);let oe=W.side===Wn;Ce&&(oe=!oe),pt(oe),W.blending===To&&W.transparent===!1?V(kr):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const de=W.stencilWrite;c.setTest(de),de&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){C!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),C=W)}function ft(W){W!==$A?(ye(n.CULL_FACE),W!==H&&(W===T0?n.cullFace(n.BACK):W===KA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),H=W}function qe(W){W!==ae&&(ue&&n.lineWidth(W),ae=W)}function Rt(W,Ce,oe){W?(ye(n.POLYGON_OFFSET_FILL),(te!==Ce||ce!==oe)&&(n.polygonOffset(Ce,oe),te=Ce,ce=oe)):we(n.POLYGON_OFFSET_FILL)}function je(W){W?ye(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function D(W){W===void 0&&(W=n.TEXTURE0+pe-1),le!==W&&(n.activeTexture(W),le=W)}function w(W,Ce,oe){oe===void 0&&(le===null?oe=n.TEXTURE0+pe-1:oe=le);let de=se[oe];de===void 0&&(de={type:void 0,texture:void 0},se[oe]=de),(de.type!==W||de.texture!==Ce)&&(le!==oe&&(n.activeTexture(oe),le=oe),n.bindTexture(W,Ce||Me[W]),de.type=W,de.texture=Ce)}function Z(){const W=se[le];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Ue.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ue.copy(W))}function ze(W){Q.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function dt(W,Ce){let oe=h.get(Ce);oe===void 0&&(oe=new WeakMap,h.set(Ce,oe));let de=oe.get(W);de===void 0&&(de=n.getUniformBlockIndex(Ce,W.name),oe.set(W,de))}function st(W,Ce){const de=h.get(Ce).get(W);d.get(Ce)!==de&&(n.uniformBlockBinding(Ce,de,W.__bindingPointIndex),d.set(Ce,de))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},le=null,se={},g={},v=new WeakMap,S=[],M=null,E=!1,x=null,y=null,L=null,b=null,R=null,I=null,O=null,U=new Ct(0,0,0),z=0,P=!1,C=null,H=null,ae=null,te=null,ce=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ye,disable:we,bindFramebuffer:Ie,drawBuffers:Je,useProgram:Pt,setBlending:V,setMaterial:Rn,setFlipSided:pt,setCullFace:ft,setLineWidth:qe,setPolygonOffset:Rt,setScissorTest:je,activeTexture:D,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Be,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:nt,viewport:ze,reset:At}}function tL(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return S?new OffscreenCanvas(D,w):Wa("canvas")}function E(D,w,Z){let me=1;const ve=je(D);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(me*ve.width),Xe=Math.floor(me*ve.height);g===void 0&&(g=M(fe,Xe));const Ae=w?M(fe,Xe):g;return Ae.width=fe,Ae.height=Xe,Ae.getContext("2d").drawImage(D,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Xe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function x(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,w,Z,me,ve=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=w;if(w===n.RED&&(Z===n.FLOAT&&(fe=n.R32F),Z===n.HALF_FLOAT&&(fe=n.R16F),Z===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.R8UI),Z===n.UNSIGNED_SHORT&&(fe=n.R16UI),Z===n.UNSIGNED_INT&&(fe=n.R32UI),Z===n.BYTE&&(fe=n.R8I),Z===n.SHORT&&(fe=n.R16I),Z===n.INT&&(fe=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(fe=n.RG32F),Z===n.HALF_FLOAT&&(fe=n.RG16F),Z===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RG16UI),Z===n.UNSIGNED_INT&&(fe=n.RG32UI),Z===n.BYTE&&(fe=n.RG8I),Z===n.SHORT&&(fe=n.RG16I),Z===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),Z===n.UNSIGNED_INT&&(fe=n.RGB32UI),Z===n.BYTE&&(fe=n.RGB8I),Z===n.SHORT&&(fe=n.RGB16I),Z===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(fe=n.RGBA32UI),Z===n.BYTE&&(fe=n.RGBA8I),Z===n.SHORT&&(fe=n.RGBA16I),Z===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),w===n.RGBA){const Xe=ve?Ku:wt.getTransfer(me);Z===n.FLOAT&&(fe=n.RGBA32F),Z===n.HALF_FLOAT&&(fe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(fe=Xe===bt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(D,w){let Z;return D?w===null||w===ws||w===No?Z=n.DEPTH24_STENCIL8:w===Qi?Z=n.DEPTH32F_STENCIL8:w===Ga&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ws||w===No?Z=n.DEPTH_COMPONENT24:w===Qi?Z=n.DEPTH_COMPONENT32F:w===Ga&&(Z=n.DEPTH_COMPONENT16),Z}function I(D,w){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Si&&D.minFilter!==Di?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function O(D){const w=D.target;w.removeEventListener("dispose",O),z(w),w.isVideoTexture&&m.delete(w)}function U(D){const w=D.target;w.removeEventListener("dispose",U),C(w)}function z(D){const w=r.get(D);if(w.__webglInit===void 0)return;const Z=D.source,me=v.get(Z);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(me).length===0&&v.delete(Z)}r.remove(D)}function P(D){const w=r.get(D);n.deleteTexture(w.__webglTexture);const Z=D.source,me=v.get(Z);delete me[w.__cacheKey],u.memory.textures--}function C(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)n.deleteFramebuffer(w.__webglFramebuffer[me]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let me=0,ve=Z.length;me<ve;me++){const fe=r.get(Z[me]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Z[me])}r.remove(D)}let H=0;function ae(){H=0}function te(){const D=H;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),H+=1,D}function ce(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function pe(D,w){const Z=r.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,D,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function ue(D,w){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function re(D,w){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function B(D,w){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){he(Z,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const le={[uh]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[ch]:n.MIRRORED_REPEAT},se={[Si]:n.NEAREST,[wC]:n.NEAREST_MIPMAP_NEAREST,[fu]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[nd]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},F={[bC]:n.NEVER,[FC]:n.ALWAYS,[DC]:n.LESS,[_x]:n.LEQUAL,[LC]:n.EQUAL,[UC]:n.GEQUAL,[NC]:n.GREATER,[IC]:n.NOTEQUAL};function ne(D,w){if(w.type===Qi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Di||w.magFilter===nd||w.magFilter===fu||w.magFilter===Ms||w.minFilter===Di||w.minFilter===nd||w.minFilter===fu||w.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,le[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,le[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,le[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,se[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Si||w.minFilter!==fu&&w.minFilter!==Ms||w.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const fe=ce(w);if(fe!==D.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[fe].usedTimes++;const Xe=ve[D.__cacheKey];Xe!==void 0&&(ve[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),D.__cacheKey=fe,D.__webglTexture=ve[fe].texture}return Z}function Q(D,w,Z){let me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=n.TEXTURE_3D);const ve=Ue(D,w),fe=w.source;t.bindTexture(me,D.__webglTexture,n.TEXTURE0+Z);const Xe=r.get(fe);if(fe.version!==Xe.__version||ve===!0){t.activeTexture(n.TEXTURE0+Z);const Ae=wt.getPrimaries(wt.workingColorSpace),Fe=w.colorSpace===Or?null:wt.getPrimaries(w.colorSpace),ct=w.colorSpace===Or||Ae===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=E(w.image,!1,o.maxTextureSize);Ee=Rt(w,Ee);const Be=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let nt=b(w.internalFormat,Be,Ke,w.colorSpace,w.isVideoTexture);ne(me,w);let ze;const dt=w.mipmaps,st=w.isVideoTexture!==!0,At=Xe.__version===void 0||ve===!0,W=fe.dataReady,Ce=I(w,Ee);if(w.isDepthTexture)nt=R(w.format===Io,w.type),At&&(st?t.texStorage2D(n.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Ke,null));else if(w.isDataTexture)if(dt.length>0){st&&At&&t.texStorage2D(n.TEXTURE_2D,Ce,nt,dt[0].width,dt[0].height);for(let oe=0,de=dt.length;oe<de;oe++)ze=dt[oe],st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,Be,Ke,ze.data);w.generateMipmaps=!1}else st?(At&&t.texStorage2D(n.TEXTURE_2D,Ce,nt,Ee.width,Ee.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Ke,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Ke,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,nt,dt[0].width,dt[0].height,Ee.depth);for(let oe=0,de=dt.length;oe<de;oe++)if(ze=dt[oe],w.format!==xi)if(Be!==null)if(st){if(W)if(w.layerUpdates.size>0){const De=J0(ze.width,ze.height,w.format,w.type);for(const be of w.layerUpdates){const ot=ze.data.subarray(be*De/ze.data.BYTES_PER_ELEMENT,(be+1)*De/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,be,ze.width,ze.height,1,Be,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,nt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,Ke,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,nt,ze.width,ze.height,Ee.depth,0,Be,Ke,ze.data)}else{st&&At&&t.texStorage2D(n.TEXTURE_2D,Ce,nt,dt[0].width,dt[0].height);for(let oe=0,de=dt.length;oe<de;oe++)ze=dt[oe],w.format!==xi?Be!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,Be,Ke,ze.data)}else if(w.isDataArrayTexture)if(st){if(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,nt,Ee.width,Ee.height,Ee.depth),W)if(w.layerUpdates.size>0){const oe=J0(Ee.width,Ee.height,w.format,w.type);for(const de of w.layerUpdates){const De=Ee.data.subarray(de*oe/Ee.data.BYTES_PER_ELEMENT,(de+1)*oe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Ee.width,Ee.height,1,Be,Ke,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ke,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Ke,Ee.data);else if(w.isData3DTexture)st?(At&&t.texStorage3D(n.TEXTURE_3D,Ce,nt,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ke,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Ke,Ee.data);else if(w.isFramebufferTexture){if(At)if(st)t.texStorage2D(n.TEXTURE_2D,Ce,nt,Ee.width,Ee.height);else{let oe=Ee.width,de=Ee.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,nt,oe,de,0,Be,Ke,null),oe>>=1,de>>=1}}else if(dt.length>0){if(st&&At){const oe=je(dt[0]);t.texStorage2D(n.TEXTURE_2D,Ce,nt,oe.width,oe.height)}for(let oe=0,de=dt.length;oe<de;oe++)ze=dt[oe],st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Be,Ke,ze):t.texImage2D(n.TEXTURE_2D,oe,nt,Be,Ke,ze);w.generateMipmaps=!1}else if(st){if(At){const oe=je(Ee);t.texStorage2D(n.TEXTURE_2D,Ce,nt,oe.width,oe.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Ke,Ee)}else t.texImage2D(n.TEXTURE_2D,0,nt,Be,Ke,Ee);x(w)&&y(me),Xe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function he(D,w,Z){if(w.image.length!==6)return;const me=Ue(D,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Z);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const Xe=wt.getPrimaries(wt.workingColorSpace),Ae=w.colorSpace===Or?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Or||Xe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let de=0;de<6;de++)!ct&&!Ee?Be[de]=E(w.image[de],!0,o.maxCubemapSize):Be[de]=Ee?w.image[de].image:w.image[de],Be[de]=Rt(w,Be[de]);const Ke=Be[0],nt=l.convert(w.format,w.colorSpace),ze=l.convert(w.type),dt=b(w.internalFormat,nt,ze,w.colorSpace),st=w.isVideoTexture!==!0,At=fe.__version===void 0||me===!0,W=ve.dataReady;let Ce=I(w,Ke);ne(n.TEXTURE_CUBE_MAP,w);let oe;if(ct){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,dt,Ke.width,Ke.height);for(let de=0;de<6;de++){oe=Be[de].mipmaps;for(let De=0;De<oe.length;De++){const be=oe[De];w.format!==xi?nt!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,be.width,be.height,nt,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,be.width,be.height,nt,ze,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,dt,be.width,be.height,0,nt,ze,be.data)}}}else{if(oe=w.mipmaps,st&&At){oe.length>0&&Ce++;const de=je(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,dt,de.width,de.height)}for(let de=0;de<6;de++)if(Ee){st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be[de].width,Be[de].height,nt,ze,Be[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,Be[de].width,Be[de].height,0,nt,ze,Be[de].data);for(let De=0;De<oe.length;De++){const ot=oe[De].image[de].image;st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,ot.width,ot.height,nt,ze,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,dt,ot.width,ot.height,0,nt,ze,ot.data)}}else{st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,nt,ze,Be[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,nt,ze,Be[de]);for(let De=0;De<oe.length;De++){const be=oe[De];st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,nt,ze,be.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,dt,nt,ze,be.image[de])}}}x(w)&&y(n.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Me(D,w,Z,me,ve,fe){const Xe=l.convert(Z.format,Z.colorSpace),Ae=l.convert(Z.type),Fe=b(Z.internalFormat,Xe,Ae,Z.colorSpace),ct=r.get(w),Ee=r.get(Z);if(Ee.__renderTarget=w,!ct.__hasExternalTextures){const Be=Math.max(1,w.width>>fe),Ke=Math.max(1,w.height>>fe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Fe,Be,Ke,w.depth,0,Xe,Ae,null):t.texImage2D(ve,fe,Fe,Be,Ke,0,Xe,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,pt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Ee.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(D,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=R(w.stencilBuffer,ve),Xe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=pt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,fe,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,D)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],Xe=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Fe=b(fe.internalFormat,Xe,Ae,fe.colorSpace),ct=pt(w);Z&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Fe,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ve=me.__webglTexture,fe=pt(w);if(w.depthTexture.format===wo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Io)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const w=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=n.createRenderbuffer(),ye(w.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ye(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(D,w,Z){const me=r.get(D);w!==void 0&&Me(me.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ie(D)}function Pt(D){const w=D.texture,Z=r.get(D),me=r.get(w);D.addEventListener("dispose",U);const ve=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=w.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=n.createFramebuffer()}else Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ct=r.get(ve[Ae]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(D.samples>0&&ft(D)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];Z.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ct=l.convert(Fe.format,Fe.colorSpace),Ee=l.convert(Fe.type),Be=b(Fe.internalFormat,ct,Ee,Fe.colorSpace,D.isXRRenderTarget===!0),Ke=pt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Be,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),ne(n.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(Z.__webglFramebuffer[Ae][Fe],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Me(Z.__webglFramebuffer[Ae],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ct=ve[Ae],Ee=r.get(ct);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),ne(n.TEXTURE_2D,ct),Me(Z.__webglFramebuffer,D,ct,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),x(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ne(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(Z.__webglFramebuffer[Fe],D,w,n.COLOR_ATTACHMENT0,Ae,Fe);else Me(Z.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,Ae,0);x(w)&&y(Ae),t.unbindTexture()}D.depthBuffer&&Ie(D)}function gt(D){const w=D.textures;for(let Z=0,me=w.length;Z<me;Z++){const ve=w[Z];if(x(ve)){const fe=L(D),Xe=r.get(ve).__webglTexture;t.bindTexture(fe,Xe),y(fe),t.unbindTexture()}}}const It=[],V=[];function Rn(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,Z=D.width,me=D.height;let ve=n.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=r.get(D),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,n.NEAREST),d===!0&&(It.length=0,V.length=0,It.push(n.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(It.push(fe),V.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pt(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(D){const w=u.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Rt(D,w){const Z=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Uo&&Z!==Or&&(wt.getTransfer(Z)===bt?(me!==xi||ve!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=ue,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function nL(n,e){function t(r,o=Or){let l;const u=wt.getTransfer(o);if(r===sr)return n.UNSIGNED_BYTE;if(r===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ep)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===lx)return n.BYTE;if(r===ux)return n.SHORT;if(r===Ga)return n.UNSIGNED_SHORT;if(r===Sp)return n.INT;if(r===ws)return n.UNSIGNED_INT;if(r===Qi)return n.FLOAT;if(r===$a)return n.HALF_FLOAT;if(r===fx)return n.ALPHA;if(r===dx)return n.RGB;if(r===xi)return n.RGBA;if(r===hx)return n.LUMINANCE;if(r===px)return n.LUMINANCE_ALPHA;if(r===wo)return n.DEPTH_COMPONENT;if(r===Io)return n.DEPTH_STENCIL;if(r===mx)return n.RED;if(r===Tp)return n.RED_INTEGER;if(r===gx)return n.RG;if(r===wp)return n.RG_INTEGER;if(r===Ap)return n.RGBA_INTEGER;if(r===ku||r===Bu||r===zu||r===Vu)if(u===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ku)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ku)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fh||r===dh||r===hh||r===ph)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===fh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh||r===gh||r===vh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===mh||r===gh)return u===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===vh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_h||r===yh||r===xh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===Ph||r===bh||r===Dh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_h)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Th)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ah)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ph)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hu||r===Lh||r===Nh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hu)return u===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vx||r===Ih||r===Uh||r===Fh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const iL={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,r),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(iL)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Da;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const rL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Cn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wr({vertexShader:rL,fragmentShader:sL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new sc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aL extends Bo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,M=null;const E=new oL,x=t.getContextAttributes();let y=null,L=null;const b=[],R=[],I=new mt;let O=null;const U=new Zn;U.viewport=new Lt;const z=new Zn;z.viewport=new Lt;const P=[U,z],C=new RR;let H=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new Id,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new Id,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new Id,b[Q]=he),he.getHandSpace()};function te(Q){const he=R.indexOf(Q.inputSource);if(he===-1)return;const Me=b[he];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,h||u),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",pe);for(let Q=0;Q<b.length;Q++){const he=R[Q];he!==null&&(R[Q]=null,b[Q].disconnect(he))}H=null,ae=null,E.reset(),e.setRenderTarget(y),S=null,v=null,g=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",pe),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(I),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let Me=null,ye=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Io:wo,ye=x.stencil?No:ws);const Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ie),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new As(v.textureWidth,v.textureHeight,{format:xi,type:sr,depthTexture:new Lx(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new As(S.framebufferWidth,S.framebufferHeight,{format:xi,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function pe(Q){for(let he=0;he<Q.removed.length;he++){const Me=Q.removed[he],ye=R.indexOf(Me);ye>=0&&(R[ye]=null,b[ye].disconnect(Me))}for(let he=0;he<Q.added.length;he++){const Me=Q.added[he];let ye=R.indexOf(Me);if(ye===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=R.length){R.push(Me),ye=Ie;break}else if(R[Ie]===null){R[Ie]=Me,ye=Ie;break}if(ye===-1)break}const we=b[ye];we&&we.connect(Me)}}const ue=new $,re=new $;function B(Q,he,Me){ue.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const ye=ue.distanceTo(re),we=he.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Je=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),gt=(we[9]+1)/we[5],It=(we[9]-1)/we[5],V=(we[8]-1)/we[0],Rn=(Ie[8]+1)/Ie[0],pt=Je*V,ft=Je*Rn,qe=ye/(-V+Rn),Rt=qe*-V;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const je=Je+qe,D=Pt+qe,w=pt-Rt,Z=ft+(ye-Rt),me=gt*Pt/D*je,ve=It*Pt/D*je;Q.projectionMatrix.makePerspective(w,Z,me,ve,je,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let he=Q.near,Me=Q.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(Me=E.depthFar)),C.near=z.near=U.near=he,C.far=z.far=U.far=Me,(H!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ae=C.far),U.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,C.layers.mask=U.layers.mask|z.layers.mask;const ye=Q.parent,we=C.cameras;le(C,ye);for(let Ie=0;Ie<we.length;Ie++)le(we[Ie],ye);we.length===2?B(C,U,z):C.projectionMatrix.copy(U.projectionMatrix),se(Q,C,ye)};function se(Q,he,Me){Me===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let F=null;function ne(Q,he){if(m=he.getViewerPose(h||u),M=he,m!==null){const Me=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ie=0;Ie<Me.length;Ie++){const Je=Me[Ie];let Pt=null;if(S!==null)Pt=S.getViewport(Je);else{const It=g.getViewSubImage(v,Je);Pt=It.viewport,Ie===0&&(e.setRenderTargetTextures(L,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(L))}let gt=P[Ie];gt===void 0&&(gt=new Zn,gt.layers.enable(Ie),gt.viewport=new Lt,P[Ie]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ie===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(gt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ie=g.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,o.renderState)}}for(let Me=0;Me<b.length;Me++){const ye=R[Me],we=b[Me];ye!==null&&we!==void 0&&we.update(ye,he,h||u)}F&&F(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ue=new Ix;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const hs=new or,lL=new Ht;function uL(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Cx(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,L,b,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),E(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,L,b):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Wn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Wn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=e.get(y),b=L.envMap,R=L.envMapRotation;b&&(x.envMap.value=b,hs.copy(R),hs.x*=-1,hs.y*=-1,hs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),x.envMapRotation.value.setFromMatrix4(lL.makeRotationFromEuler(hs)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,L,b){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=b*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const L=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function cL(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const R=b.program;r.uniformBlockBinding(L,R)}function h(L,b){let R=o[L.id];R===void 0&&(M(L),R=m(L),o[L.id]=R,L.addEventListener("dispose",x));const I=b.program;r.updateUBOMapping(L,I);const O=e.render.frame;l[L.id]!==O&&(v(L),l[L.id]=O)}function m(L){const b=g();L.__bindingPointIndex=b;const R=n.createBuffer(),I=L.__size,O=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const b=o[L.id],R=L.uniforms,I=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let O=0,U=R.length;O<U;O++){const z=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,C=z.length;P<C;P++){const H=z[P];if(S(H,O,P,I)===!0){const ae=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let pe=0;pe<te.length;pe++){const ue=te[pe],re=E(ue);typeof ue=="number"||typeof ue=="boolean"?(H.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,ae+ce,H.__data)):ue.isMatrix3?(H.__data[0]=ue.elements[0],H.__data[1]=ue.elements[1],H.__data[2]=ue.elements[2],H.__data[3]=0,H.__data[4]=ue.elements[3],H.__data[5]=ue.elements[4],H.__data[6]=ue.elements[5],H.__data[7]=0,H.__data[8]=ue.elements[6],H.__data[9]=ue.elements[7],H.__data[10]=ue.elements[8],H.__data[11]=0):(ue.toArray(H.__data,ce),ce+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(L,b,R,I){const O=L.value,U=b+"_"+R;if(I[U]===void 0)return typeof O=="number"||typeof O=="boolean"?I[U]=O:I[U]=O.clone(),!0;{const z=I[U];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return I[U]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function M(L){const b=L.uniforms;let R=0;const I=16;for(let U=0,z=b.length;U<z;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,H=P.length;C<H;C++){const ae=P[C],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let ce=0,pe=te.length;ce<pe;ce++){const ue=te[ce],re=E(ue),B=R%I,le=B%re.boundary,se=B+le;R+=le,se!==0&&I-se<re.storage&&(R+=I-se),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=re.storage}}}const O=R%I;return O>0&&(R+=I-O),L.__size=R,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function x(L){const b=L.target;b.removeEventListener("dispose",x);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const L in o)n.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class fL{constructor(e={}){const{canvas:t=kC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),E=new Int32Array(4);let x=null,y=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Br,this.toneMappingExposure=1;const R=this;let I=!1,O=0,U=0,z=null,P=-1,C=null;const H=new Lt,ae=new Lt;let te=null;const ce=new Ct(0);let pe=0,ue=t.width,re=t.height,B=1,le=null,se=null;const F=new Lt(0,0,ue,re),ne=new Lt(0,0,ue,re);let Ue=!1;const Q=new Rp;let he=!1,Me=!1;this.transmissionResolutionScale=1;const ye=new Ht,we=new Ht,Ie=new $,Je=new Lt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function It(){return z===null?B:1}let V=r;function Rn(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xp}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),V===null){const j="webgl2";if(V=Rn(j,A),V===null)throw Rn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ft,qe,Rt,je,D,w,Z,me,ve,fe,Xe,Ae,Fe,ct,Ee,Be,Ke,nt,ze,dt,st,At,W;function Ce(){pt=new x2(V),pt.init(),st=new nL(V,pt),ft=new p2(V,pt,e,st),qe=new eL(V,pt),ft.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),Rt=new E2(V),je=new VD,D=new tL(V,pt,qe,je,ft,st,Rt),w=new g2(R),Z=new y2(R),me=new bR(V),At=new d2(V,me),ve=new S2(V,me,Rt,At),fe=new w2(V,ve,me,Rt),nt=new T2(V,ft,D),Ee=new m2(je),Xe=new zD(R,w,Z,pt,ft,At,Ee),Ae=new uL(R,je),Fe=new GD,ct=new $D(pt),Ke=new f2(R,w,Z,qe,fe,S,d),Be=new QD(R,fe,ft),W=new cL(V,Rt,ft,qe),ze=new h2(V,pt,Rt),dt=new M2(V,pt,Rt),Rt.programs=Xe.programs,R.capabilities=ft,R.extensions=pt,R.properties=je,R.renderLists=Fe,R.shadowMap=Be,R.state=qe,R.info=Rt}Ce();const oe=new aL(R,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(ue,re,!1))},this.getSize=function(A){return A.set(ue,re)},this.setSize=function(A,j,J=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,re=j,t.width=Math.floor(A*B),t.height=Math.floor(j*B),J===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ue*B,re*B).floor()},this.setDrawingBufferSize=function(A,j,J){ue=A,re=j,B=J,t.width=Math.floor(A*J),t.height=Math.floor(j*J),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,j,J,q){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,j,J,q),qe.viewport(H.copy(F).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,j,J,q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,j,J,q),qe.scissor(ae.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){qe.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,J=!0){let q=0;if(A){let X=!1;if(z!==null){const Se=z.texture.format;X=Se===Ap||Se===wp||Se===Tp}if(X){const Se=z.texture.type,Re=Se===sr||Se===ws||Se===Ga||Se===No||Se===Mp||Se===Ep,Le=Ke.getClearColor(),Ve=Ke.getClearAlpha(),it=Le.r,tt=Le.g,Ge=Le.b;Re?(M[0]=it,M[1]=tt,M[2]=Ge,M[3]=Ve,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=it,E[1]=tt,E[2]=Ge,E[3]=Ve,V.clearBufferiv(V.COLOR,0,E))}else q|=V.COLOR_BUFFER_BIT}j&&(q|=V.DEPTH_BUFFER_BIT),J&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ke.dispose(),Fe.dispose(),ct.dispose(),je.dispose(),w.dispose(),Z.dispose(),fe.dispose(),At.dispose(),W.dispose(),Xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Rs),oe.removeEventListener("sessionend",ar),Ii.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Rt.autoReset,j=Be.enabled,J=Be.autoUpdate,q=Be.needsUpdate,X=Be.type;Ce(),Rt.autoReset=A,Be.enabled=j,Be.autoUpdate=J,Be.needsUpdate=q,Be.type=X}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const j=A.target;j.removeEventListener("dispose",ot),Ft(j)}function Ft(A){en(A),je.remove(A)}function en(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(J){Xe.releaseProgram(J)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,J,q,X,Se){j===null&&(j=Pt);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Le=nl(A,j,J,q,X);qe.setMaterial(q,Re);let Ve=J.index,it=1;if(q.wireframe===!0){if(Ve=ve.getWireframeAttribute(J),Ve===void 0)return;it=2}const tt=J.drawRange,Ge=J.attributes.position;let _t=tt.start*it,at=(tt.start+tt.count)*it;Se!==null&&(_t=Math.max(_t,Se.start*it),at=Math.min(at,(Se.start+Se.count)*it)),Ve!==null?(_t=Math.max(_t,0),at=Math.min(at,Ve.count)):Ge!=null&&(_t=Math.max(_t,0),at=Math.min(at,Ge.count));const Xt=at-_t;if(Xt<0||Xt===1/0)return;At.setup(X,q,Le,J,Ve);let zt,xt=ze;if(Ve!==null&&(zt=me.get(Ve),xt=dt,xt.setIndex(zt)),X.isMesh)q.wireframe===!0?(qe.setLineWidth(q.wireframeLinewidth*It()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(X.isLine){let $e=q.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*It()),X.isLineSegments?xt.setMode(V.LINES):X.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else X.isPoints?xt.setMode(V.POINTS):X.isSprite&&xt.setMode(V.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,Yt=X._multiDrawCounts,vt=X._multiDrawCount,vn=Ve?me.get(Ve).bytesPerElement:1,ur=je.get(q).currentProgram.getUniforms();for(let bn=0;bn<vt;bn++)ur.setValue(V,"_gl_DrawID",bn),xt.render($e[bn]/vn,Yt[bn])}else if(X.isInstancedMesh)xt.renderInstances(_t,Xt,X.count);else if(J.isInstancedBufferGeometry){const $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Yt=Math.min(J.instanceCount,$e);xt.renderInstances(_t,Xt,Yt)}else xt.render(_t,Xt)};function St(A,j,J){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Ps(A,j,J),A.side=Gr,A.needsUpdate=!0,Ps(A,j,J),A.side=Zi):Ps(A,j,J)}this.compile=function(A,j,J=null){J===null&&(J=A),y=ct.get(J),y.init(j),b.push(y),J.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];St(Le,J,X),q.add(Le)}else St(Se,J,X),q.add(Se)}),b.pop(),y=null,q},this.compileAsync=function(A,j,J=null){const q=this.compile(A,j,J);return new Promise(X=>{function Se(){if(q.forEach(function(Re){je.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){X(A);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let On=null;function Pn(A){On&&On(A)}function Rs(){Ii.stop()}function ar(){Ii.start()}const Ii=new Ix;Ii.setAnimationLoop(Pn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(A){On=A,oe.setAnimationLoop(A),A===null?Ii.stop():Ii.start()},oe.addEventListener("sessionstart",Rs),oe.addEventListener("sessionend",ar),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,z),y=ct.get(A,b.length),y.init(j),b.push(y),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(we),Me=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,Me),x=Fe.get(A,L.length),x.init(),L.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Ui(Se,j,-1/0,R.sortObjects)}Ui(A,j,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(le,se),gt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,gt&&Ke.addToRenderList(x,A),this.info.render.frame++,he===!0&&Ee.beginShadows();const J=y.state.shadowsArray;Be.render(J,A,j),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,X=x.transmissive;if(y.setupLights(),j.isArrayCamera){const Se=j.cameras;if(X.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const Ve=Se[Re];qr(q,X,A,Ve)}gt&&Ke.render(A);for(let Re=0,Le=Se.length;Re<Le;Re++){const Ve=Se[Re];Yr(x,A,Ve,Ve.viewport)}}else X.length>0&&qr(q,X,A,j),gt&&Ke.render(A),Yr(x,A,j);z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(R,A,j),At.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(y=b[b.length-1],he===!0&&Ee.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Ui(A,j,J,q){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){q&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=fe.update(A),Le=A.material;Le.visible&&x.push(A,Re,Le,J,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Re=fe.update(A),Le=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const Ve=Re.groups;for(let it=0,tt=Ve.length;it<tt;it++){const Ge=Ve[it],_t=Le[Ge.materialIndex];_t&&_t.visible&&x.push(A,Re,_t,J,Je.z,Ge)}}else Le.visible&&x.push(A,Re,Le,J,Je.z,null)}}const Se=A.children;for(let Re=0,Le=Se.length;Re<Le;Re++)Ui(Se[Re],j,J,q)}function Yr(A,j,J,q){const X=A.opaque,Se=A.transmissive,Re=A.transparent;y.setupLightsView(J),he===!0&&Ee.setGlobalState(R.clippingPlanes,J),q&&qe.viewport(H.copy(q)),X.length>0&&lr(X,j,J),Se.length>0&&lr(Se,j,J),Re.length>0&&lr(Re,j,J),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function qr(A,j,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new As(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?$a:sr,minFilter:Ms,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[q.id],Re=q.viewport||H;Se.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const Le=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(ce),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Ke.render(J);const Ve=R.toneMapping;R.toneMapping=Br;const it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),he===!0&&Ee.setGlobalState(R.clippingPlanes,q),lr(A,J,q),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,_t=j.length;Ge<_t;Ge++){const at=j[Ge],Xt=at.object,zt=at.geometry,xt=at.material,$e=at.group;if(xt.side===Zi&&Xt.layers.test(q.layers)){const Yt=xt.side;xt.side=Wn,xt.needsUpdate=!0,el(Xt,J,q,zt,xt,$e),xt.side=Yt,xt.needsUpdate=!0,tt=!0}}tt===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}R.setRenderTarget(Le),R.setClearColor(ce,pe),it!==void 0&&(q.viewport=it),R.toneMapping=Ve}function lr(A,j,J){const q=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){const Re=A[X],Le=Re.object,Ve=Re.geometry,it=q===null?Re.material:q,tt=Re.group;Le.layers.test(J.layers)&&el(Le,j,J,Ve,it,tt)}}function el(A,j,J,q,X,Se){A.onBeforeRender(R,j,J,q,X,Se),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(R,j,J,q,A,Se),X.transparent===!0&&X.side===Zi&&X.forceSinglePass===!1?(X.side=Wn,X.needsUpdate=!0,R.renderBufferDirect(J,j,q,X,A,Se),X.side=Gr,X.needsUpdate=!0,R.renderBufferDirect(J,j,q,X,A,Se),X.side=Zi):R.renderBufferDirect(J,j,q,X,A,Se),A.onAfterRender(R,j,J,q,X,Se)}function Ps(A,j,J){j.isScene!==!0&&(j=Pt);const q=je.get(A),X=y.state.lights,Se=y.state.shadowsArray,Re=X.state.version,Le=Xe.getParameters(A,X.state,Se,j,J),Ve=Xe.getProgramCacheKey(Le);let it=q.programs;q.environment=A.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",ot),it=new Map,q.programs=it);let tt=it.get(Ve);if(tt!==void 0){if(q.currentProgram===tt&&q.lightsStateVersion===Re)return Ei(A,Le),tt}else Le.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Le,R),tt=Xe.acquireProgram(Le,Ve),it.set(Ve,tt),q.uniforms=Le.uniforms;const Ge=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),Ei(A,Le),q.needsLights=ac(A),q.lightsStateVersion=Re,q.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=tt,q.uniformsList=null,tt}function tl(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Gu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ei(A,j){const J=je.get(A);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.batchingColor=j.batchingColor,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.instancingMorph=j.instancingMorph,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function nl(A,j,J,q,X){j.isScene!==!0&&(j=Pt),D.resetTextureUnits();const Se=j.fog,Re=q.isMeshStandardMaterial?j.environment:null,Le=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Uo,Ve=(q.isMeshStandardMaterial?Z:w).get(q.envMap||Re),it=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,at=!!J.morphAttributes.color;let Xt=Br;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const zt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=zt!==void 0?zt.length:0,$e=je.get(q),Yt=y.state.lights;if(he===!0&&(Me===!0||A!==C)){const dn=A===C&&q.id===P;Ee.setState(q,A,dn)}let vt=!1;q.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Yt.state.version||$e.outputColorSpace!==Le||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==Ve||q.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==it||$e.vertexTangents!==tt||$e.morphTargets!==Ge||$e.morphNormals!==_t||$e.morphColors!==at||$e.toneMapping!==Xt||$e.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,$e.__version=q.version);let vn=$e.currentProgram;vt===!0&&(vn=Ps(q,j,X));let ur=!1,bn=!1,Fi=!1;const Nt=vn.getUniforms(),_n=$e.uniforms;if(qe.useProgram(vn.program)&&(ur=!0,bn=!0,Fi=!0),q.id!==P&&(P=q.id,bn=!0),ur||C!==A){qe.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),zC(ye),VC(ye),Nt.setValue(V,"projectionMatrix",ye)):Nt.setValue(V,"projectionMatrix",A.projectionMatrix),Nt.setValue(V,"viewMatrix",A.matrixWorldInverse);const an=Nt.map.cameraPosition;an!==void 0&&an.setValue(V,Ie.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,bn=!0,Fi=!0)}if(X.isSkinnedMesh){Nt.setOptional(V,X,"bindMatrix"),Nt.setOptional(V,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Nt.setValue(V,"boneTexture",dn.boneTexture,D))}X.isBatchedMesh&&(Nt.setOptional(V,X,"batchingTexture"),Nt.setValue(V,"batchingTexture",X._matricesTexture,D),Nt.setOptional(V,X,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",X._indirectTexture,D),Nt.setOptional(V,X,"batchingColorTexture"),X._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",X._colorsTexture,D));const on=J.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&nt.update(X,J,vn),(bn||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Nt.setValue(V,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_n.envMap.value=Ve,_n.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&j.environment!==null&&(_n.envMapIntensity.value=j.environmentIntensity),bn&&(Nt.setValue(V,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&il(_n,Fi),Se&&q.fog===!0&&Ae.refreshFogUniforms(_n,Se),Ae.refreshMaterialUniforms(_n,q,B,re,y.state.transmissionRenderTarget[A.id]),Gu.upload(V,tl($e),_n,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gu.upload(V,tl($e),_n,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(V,"center",X.center),Nt.setValue(V,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(V,"normalMatrix",X.normalMatrix),Nt.setValue(V,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const dn=q.uniformsGroups;for(let an=0,Mt=dn.length;an<Mt;an++){const Ti=dn[an];W.update(Ti,vn),W.bind(Ti,vn)}}return vn}function il(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ac(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,j,J){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=J;const q=je.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const J=je.get(A);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0};const rl=V.createFramebuffer();this.setRenderTarget=function(A,j=0,J=0){z=A,O=j,U=J;let q=!0,X=null,Se=!1,Re=!1;if(A){const Ve=je.get(A);if(Ve.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(V.FRAMEBUFFER,null),q=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Ve.__hasExternalTextures)D.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Re=!0);const tt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?X=tt[j][J]:X=tt[j],Se=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?X=je.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[J]:X=tt,H.copy(A.viewport),ae.copy(A.scissor),te=A.scissorTest}else H.copy(F).multiplyScalar(B).floor(),ae.copy(ne).multiplyScalar(B).floor(),te=Ue;if(J!==0&&(X=rl),qe.bindFramebuffer(V.FRAMEBUFFER,X)&&q&&qe.drawBuffers(A,X),qe.viewport(H),qe.scissor(ae),qe.setScissorTest(te),Se){const Ve=je.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,J)}else if(Re){const Ve=je.get(A.texture),it=j;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.__webglTexture,J,it)}else if(A!==null&&J!==0){const Ve=je.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(A,j,J,q,X,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){qe.bindFramebuffer(V.FRAMEBUFFER,Le);try{const Ve=A.texture,it=Ve.format,tt=Ve.type;if(!ft.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-q&&J>=0&&J<=A.height-X&&V.readPixels(j,J,q,X,st.convert(it),st.convert(tt),Se)}finally{const Ve=z!==null?je.get(z).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,j,J,q,X,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Ve=A.texture,it=Ve.format,tt=Ve.type;if(!ft.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-q&&J>=0&&J<=A.height-X){qe.bindFramebuffer(V.FRAMEBUFFER,Le);const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),V.readPixels(j,J,q,X,st.convert(it),st.convert(tt),0);const _t=z!==null?je.get(z).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,_t);const at=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await BC(V,at,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer(Ge),V.deleteSync(at),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,J=0){A.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-J),X=Math.floor(A.image.width*q),Se=Math.floor(A.image.height*q),Re=j!==null?j.x:0,Le=j!==null?j.y:0;D.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Re,Le,X,Se),qe.unbindTexture()};const sl=V.createFramebuffer(),ol=V.createFramebuffer();this.copyTextureToTexture=function(A,j,J=null,q=null,X=0,Se=null){A.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],j=arguments[2],Se=arguments[3]||0,J=null),Se===null&&(X!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Re,Le,Ve,it,tt,Ge,_t,at,Xt;const zt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,Ve=J.isBox3?J.max.z-J.min.z:1,it=J.min.x,tt=J.min.y,Ge=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-X);Re=Math.floor(zt.width*on),Le=Math.floor(zt.height*on),A.isDataArrayTexture?Ve=zt.depth:A.isData3DTexture?Ve=Math.floor(zt.depth*on):Ve=1,it=0,tt=0,Ge=0}q!==null?(_t=q.x,at=q.y,Xt=q.z):(_t=0,at=0,Xt=0);const xt=st.convert(j.format),$e=st.convert(j.type);let Yt;j.isData3DTexture?(D.setTexture3D(j,0),Yt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Yt=V.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=V.getParameter(V.UNPACK_ROW_LENGTH),vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ur=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),Fi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,zt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,zt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ge);const Nt=A.isDataArrayTexture||A.isData3DTexture,_n=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const on=je.get(A),dn=je.get(j),an=je.get(on.__renderTarget),Mt=je.get(dn.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,an.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ti=0;Ti<Ve;Ti++)Nt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.get(A).__webglTexture,X,Ge+Ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.get(j).__webglTexture,Se,Xt+Ti)),V.blitFramebuffer(it,tt,Re,Le,_t,at,Re,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||je.has(A)){const on=je.get(A),dn=je.get(j);qe.bindFramebuffer(V.READ_FRAMEBUFFER,sl),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ol);for(let an=0;an<Ve;an++)Nt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,X,Ge+an):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,X),_n?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Se,Xt+an):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Se),X!==0?V.blitFramebuffer(it,tt,Re,Le,_t,at,Re,Le,V.COLOR_BUFFER_BIT,V.NEAREST):_n?V.copyTexSubImage3D(Yt,Se,_t,at,Xt+an,it,tt,Re,Le):V.copyTexSubImage2D(Yt,Se,_t,at,it,tt,Re,Le);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Yt,Se,_t,at,Xt,Re,Le,Ve,xt,$e,zt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,Se,_t,at,Xt,Re,Le,Ve,xt,zt.data):V.texSubImage3D(Yt,Se,_t,at,Xt,Re,Le,Ve,xt,$e,zt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,_t,at,Re,Le,xt,$e,zt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,_t,at,zt.width,zt.height,xt,zt.data):V.texSubImage2D(V.TEXTURE_2D,Se,_t,at,Re,Le,xt,$e,zt);V.pixelStorei(V.UNPACK_ROW_LENGTH,vt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ur),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fi),Se===0&&j.generateMipmaps&&V.generateMipmap(Yt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,j,J=null,q=null,X=0){return A.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,q=arguments[1]||null,A=arguments[2],j=arguments[3],X=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,J,q,X)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){O=0,U=0,z=null,qe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const dL=()=>{const n=Oe.useRef(null);return Oe.useEffect(()=>{const e=n.current,t=window.innerWidth,r=window.innerHeight,o=new fR,l=new Zn(75,t/r,.1,1e3),u=new fL({antialias:!0,alpha:!0});u.setSize(t,r),u.setClearColor(661801,1),e.appendChild(u.domElement);const c=["<div>","</div>","<span>","{color:","useState()","useEffect()","display: flex","@media","import React","npm install","<App />","margin:","padding:","tailwind","useState",".map()",".filter()","onClick={}","<main>","<header>","className=","async/await","{children}","props","components","<html>","git commit","flex:","grid-cols","useState","flex-1","<nav>","const","let","=>","{styles}","return","export","default","<img/>","<link>","npm run","yarn add","push()","pop()","<React.Fragment>"],d=new Da;new MR,c.forEach(M=>{const E=document.createElement("canvas"),x=E.getContext("2d");E.width=256,E.height=64;const y=["#61DAFB","#38BDF8","#00D8FF","#2965F1","#F0DB4F","#61DBFB","#38BDF8"];x.fillStyle=y[Math.floor(Math.random()*y.length)],x.font="bold 32px monospace",x.textAlign="center",x.textBaseline="middle",x.fillText(M,128,32);const L=new gR(E),b=new bx({map:L,transparent:!0,opacity:.7}),R=new hR(b),I=Math.random()*Math.PI*2,O=Math.random()*Math.PI,U=900+Math.random()*20;R.position.x=U*Math.sin(O)*Math.cos(I),R.position.y=U*Math.sin(O)*Math.sin(I),R.position.z=U*Math.cos(O),R.scale.set(10,2.5,1),d.add(R)}),o.add(d);const h=new CR(16777215,.5);o.add(h);const m=new wR(6413051,1);m.position.set(0,0,50),o.add(m),l.position.z=60;const g=()=>{const M=window.innerWidth,E=window.innerHeight;l.aspect=M/E,l.updateProjectionMatrix(),u.setSize(M,E)};window.addEventListener("resize",g);let v=0;const S=()=>{v=requestAnimationFrame(S),d.rotation.y+=5e-4,d.rotation.x+=2e-4,d.children.forEach((M,E)=>{const x=Date.now()*.001;M.position.y+=Math.sin(x+E)*.02,M.position.x+=Math.cos(x+E)*.02;const y=50,L=M.position.length();L>y&&M.position.multiplyScalar(y/L)}),l.position.x=Math.sin(v*2e-4)*40,l.position.z=Math.cos(v*2e-4)*40,l.lookAt(o.position),u.render(o,l)};return S(),()=>{window.removeEventListener("resize",g),cancelAnimationFrame(v),u.dispose(),d.children.forEach(M=>{M.material.map.dispose(),M.material.dispose()}),e&&e.removeChild(u.domElement)}},[]),ie.jsx("div",{ref:n,style:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",overflow:"hidden",backgroundColor:"#0a1929",transition:"opacity 0.5s ease-in-out"}})};function hL(){const[n,e]=Oe.useState(!1);return ie.jsxs("div",{className:`px-2 bg-transparent ${n?"bg-transparent":"bg-main"} relative sm:px-4 md:px-10 xl:px-20 min-h-screen w-full overflow-x-hidden`,children:[ie.jsx("div",{className:"fixed inset-0 -z-10",children:ie.jsx(dL,{onLoad:()=>e(!0)})}),ie.jsx("div",{className:"relative",children:ie.jsx(qA,{})})]})}TM.createRoot(document.getElementById("root")).render(ie.jsx(Oe.StrictMode,{children:ie.jsx(hL,{})}));
