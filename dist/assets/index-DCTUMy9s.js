const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BrxDFvB6.js","assets/animations-GKZhgXY7.js","assets/vendor-BiB75SwS.js","assets/shopping-bag-BtS-_ZMN.js","assets/arrow-right-Dd6-jqNw.js","assets/chevron-right-CFXjkiKi.js","assets/star-CG6hcREx.js","assets/state-lhlGBJ2o.js","assets/CategoryPage-A0YK8Lkr.js","assets/heart-DBm05onT.js","assets/ProductDetail-BOiLFqYH.js","assets/Cart-DCk2X6Sm.js","assets/plus-BPH5T7hu.js","assets/Checkout-apS-yRjB.js","assets/lock-CYa9IQ_N.js","assets/Checkout-BIvYwVwe.css","assets/OrderConfirmation-l8Im0vrL.js","assets/NewsHome-t6qsrN89.js","assets/message-square-gdqlqrB_.js","assets/ArticleDetail-DBYjDjll.js","assets/Login-D3Ztnsyo.js","assets/Account-B8icu5s4.js","assets/AdminDashboard-BMVXA7oe.js"])))=>i.map(i=>d[i]);
var hp=Object.defineProperty;var dp=(n,e,t)=>e in n?hp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var on=(n,e,t)=>dp(n,typeof e!="symbol"?e+"":e,t);import{j as R,A as Ms,m as vr}from"./animations-GKZhgXY7.js";import{f as fp,d as pp,r as j,R as ze,h as mp,L as De,u as gp,B as _p,b as yp,a as Le}from"./vendor-BiB75SwS.js";import{c as Ll}from"./state-lhlGBJ2o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var gs={},Hc;function vp(){if(Hc)return gs;Hc=1;var n=fp();return gs.createRoot=n.createRoot,gs.hydrateRoot=n.hydrateRoot,gs}var wp=vp();const Ep=pp(wp);var Ml=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(Ml||{}),oo={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(Ml);var Qo={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(Qo).reduce((n,[e,t])=>(n[t]=e,n),{});var Rr="data-rh",Tp=n=>Array.isArray(n)?n.join(""):n,bp=(n,e)=>{const t=Object.keys(n);for(let r=0;r<t.length;r+=1)if(e[t[r]]&&e[t[r]].includes(n[t[r]]))return!0;return!1},ao=(n,e)=>Array.isArray(n)?n.reduce((t,r)=>(bp(r,e)?t.priority.push(r):t.default.push(r),t),{priority:[],default:[]}):{default:n,priority:[]},Ip=["noscript","script","style"],Eo=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ul=n=>Object.keys(n).reduce((e,t)=>{const r=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${r}`:r},""),Ap=(n,e,t,r)=>{const s=Ul(t),i=Tp(e);return s?`<${n} ${Rr}="true" ${s}>${Eo(i,r)}</${n}>`:`<${n} ${Rr}="true">${Eo(i,r)}</${n}>`},Rp=(n,e,t=!0)=>e.reduce((r,s)=>{const i=s,a=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,f)=>{const m=typeof i[f]>"u"?f:`${f}="${Eo(i[f],t)}"`;return d?`${d} ${m}`:m},""),c=i.innerHTML||i.cssText||"",l=Ip.indexOf(n)===-1;return`${r}<${n} ${Rr}="true" ${a}${l?"/>":`>${c}</${n}>`}`},""),Fl=(n,e={})=>Object.keys(n).reduce((t,r)=>{const s=Qo[r];return t[s||r]=n[r],t},e),Sp=(n,e,t)=>{const r={key:e,[Rr]:!0},s=Fl(t,r);return[ze.createElement("title",s,e)]},As=(n,e)=>e.map((t,r)=>{const s={key:r,[Rr]:!0};return Object.keys(t).forEach(i=>{const c=Qo[i]||i;if(c==="innerHTML"||c==="cssText"){const l=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[c]=t[i]}),ze.createElement(n,s)}),je=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>Sp(n,e.title,e.titleAttributes),toString:()=>Ap(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Fl(e),toString:()=>Ul(e)};default:return{toComponent:()=>As(n,e),toString:()=>Rp(n,e,t)}}},Pp=({metaTags:n,linkTags:e,scriptTags:t,encode:r})=>{const s=ao(n,oo.meta),i=ao(e,oo.link),a=ao(t,oo.script);return{priorityMethods:{toComponent:()=>[...As("meta",s.priority),...As("link",i.priority),...As("script",a.priority)],toString:()=>`${je("meta",s.priority,r)} ${je("link",i.priority,r)} ${je("script",a.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},Cp=n=>{const{baseTag:e,bodyAttributes:t,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:c="",titleAttributes:l,prioritizeSeoTags:d}=n;let{linkTags:f,metaTags:m,scriptTags:v}=n,S={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:S,linkTags:f,metaTags:m,scriptTags:v}=Pp(n)),{priority:S,base:je("base",e,r),bodyAttributes:je("bodyAttributes",t,r),htmlAttributes:je("htmlAttributes",s,r),link:je("link",f,r),meta:je("meta",m,r),noscript:je("noscript",i,r),script:je("script",v,r),style:je("style",a,r),title:je("title",{title:c,titleAttributes:l},r)}},kp=Cp,_s=[],jl=!!(typeof window<"u"&&window.document&&window.document.createElement),Dp=class{constructor(n,e){on(this,"instances",[]);on(this,"canUseDOM",jl);on(this,"context");on(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?_s:this.instances,add:n=>{(this.canUseDOM?_s:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?_s:this.instances).indexOf(n);(this.canUseDOM?_s:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=kp({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Np={},Op=ze.createContext(Np),ln,Vp=(ln=class extends j.Component{constructor(t){super(t);on(this,"helmetData");this.helmetData=new Dp(this.props.context||{},ln.canUseDOM)}render(){return ze.createElement(Op.Provider,{value:this.helmetData.value},this.props.children)}},on(ln,"canUseDOM",jl),ln);const xp="modulepreload",Lp=function(n){return"/"+n},Wc={},Qe=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=Lp(d),d in Wc)return;Wc[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":xp,f||(v.as="script"),v.crossOrigin="",v.href=d,l&&v.setAttribute("nonce",l),document.head.appendChild(v),f)return new Promise((S,D)=>{v.addEventListener("load",S),v.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * react-paypal-js v9.2.0 (2026-04-27T17:34:47.479Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n.INITIAL="initial",n.PENDING="pending",n.REJECTED="rejected",n.RESOLVED="resolved"})(Oe||(Oe={}));var Vt;(function(n){n.LOADING_STATUS="setLoadingStatus",n.RESET_OPTIONS="resetOptions",n.SET_BRAINTREE_INSTANCE="braintreeInstance"})(Vt||(Vt={}));var Kc;(function(n){n.NUMBER="number",n.CVV="cvv",n.EXPIRATION_DATE="expirationDate",n.EXPIRATION_MONTH="expirationMonth",n.EXPIRATION_YEAR="expirationYear",n.POSTAL_CODE="postalCode"})(Kc||(Kc={}));var To=function(n,e){return To=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])},To(n,e)};function Mp(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");To(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ce=function(){return ce=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ce.apply(this,arguments)};function Bl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Yc(n,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return n.concat(i||Array.prototype.slice.call(e))}var Sr="data-react-paypal-script-id",cn={DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource"},Up="Failed to load the PayPal JS SDK script.",$l="paypal",Fp="usePayPalScriptReducer must be used within a PayPalScriptProvider";function jp(n){return n===void 0&&(n=$l),window[n]}function Bp(n){for(var e="",t=0;t<n.length;t++){var r=n[t].charCodeAt(0)*t;n[t+1]&&(r+=n[t+1].charCodeAt(0)*(t-1)),e+=String.fromCharCode(97+Math.abs(r)%26)}return e}function $p(n){var e=n.reactComponentName,t=n.sdkComponentKey,r=n.sdkRequestedComponents,s=r===void 0?"":r,i=n.sdkDataNamespace,a=i===void 0?$l:i,c=t.charAt(0).toUpperCase().concat(t.substring(1)),l="Unable to render <".concat(e," /> because window.").concat(a,".").concat(c," is undefined."),d=typeof s=="string"?s:s.join(",");if(!d.includes(t)){var f=[d,t].filter(Boolean).join();l+=`
To fix the issue, add '`.concat(t,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(f,"'}}>`.")}return l}function ql(n){var e=n,t=Sr;e[t];var r=Bl(e,[t+""]);return"react-paypal-js-".concat(Bp(JSON.stringify(r)))}function qp(n){var e=self.document.querySelector("script[".concat(Sr,'="').concat(n,'"]'));e!=null&&e.parentNode&&e.parentNode.removeChild(e)}function zp(n,e){var t,r;switch(e.type){case Vt.LOADING_STATUS:return typeof e.value=="object"?ce(ce({},n),{loadingStatus:e.value.state,loadingStatusErrorMessage:e.value.message}):ce(ce({},n),{loadingStatus:e.value});case Vt.RESET_OPTIONS:return qp(n.options[Sr]),ce(ce({},n),{loadingStatus:Oe.PENDING,options:ce(ce((t={},t[cn.DATA_SDK_INTEGRATION_SOURCE]=cn.DATA_LIBRARY_VALUE,t),e.value),(r={},r[Sr]="".concat(ql(e.value)),r))});case Vt.SET_BRAINTREE_INSTANCE:return ce(ce({},n),{braintreePayPalCheckoutInstance:e.value});default:return n}}var zl=j.createContext(null);function Gp(n){if(typeof(n==null?void 0:n.dispatch)=="function"&&n.dispatch.length!==0)return n;throw new Error(Fp)}function Hp(){var n=Gp(j.useContext(zl)),e=ce(ce({},n),{isInitial:n.loadingStatus===Oe.INITIAL,isPending:n.loadingStatus===Oe.PENDING,isResolved:n.loadingStatus===Oe.RESOLVED,isRejected:n.loadingStatus===Oe.REJECTED});return[e,n.dispatch]}j.createContext({});function Wp(n){var e=j.useRef(new Proxy({},{get:function(t,r,s){return typeof t[r]=="function"?function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return t[r].apply(t,i)}:Reflect.get(t,r,s)}}));return e.current=Object.assign(e.current,n),e.current}var Kp=(function(n){Mp(e,n);function e(t){var r=n.call(this,t)||this;return r.state={hasError:!1},r}return e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.componentDidCatch=function(t,r){console.error("Error in PayPalButtons component:",t,r),typeof this.props.onError=="function"&&this.props.onError({message:t.message,name:t.name,stack:t.stack,componentStack:r.componentStack})},e.prototype.render=function(){return this.state.hasError?null:this.props.children},e})(j.Component),Gl=function(n){var e,t=n.className,r=t===void 0?"":t,s=n.disabled,i=s===void 0?!1:s,a=n.children,c=n.forceReRender,l=c===void 0?[]:c,d=Bl(n,["className","disabled","children","forceReRender"]),f=i?{opacity:.38}:{},m="".concat(r," ").concat(i?"paypal-buttons-disabled":"").trim(),v=j.useRef(null),S=j.useRef(null),D=Wp(d),x=Hp()[0],k=x.isResolved,q=x.options,W=j.useState(null),K=W[0],Z=W[1],re=j.useState(!0),oe=re[0],E=re[1],g=j.useState(null),y=g[1];function T(){S.current!==null&&S.current.close().catch(function(){})}return!((e=S.current)===null||e===void 0)&&e.updateProps&&S.current.updateProps({message:d.message}),j.useEffect(function(){if(k===!1)return T;var w=jp(q.dataNamespace);if(w===void 0||w.Buttons===void 0)return y(function(){throw new Error($p({reactComponentName:Hl.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:q.components,sdkDataNamespace:q[cn.DATA_NAMESPACE]}))}),T;var I=function(_,ve){Z(ve),typeof d.onInit=="function"&&d.onInit(_,ve)};try{S.current=w.Buttons(ce(ce({},D),{onInit:I}))}catch(_){return y(function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(_))})}return S.current.isEligible()===!1?(E(!1),T):(v.current&&S.current.render(v.current).catch(function(_){v.current===null||v.current.children.length===0||y(function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(_))})}),T)},Yc(Yc([k],l,!0),[d.fundingSource],!1)),j.useEffect(function(){K!==null&&(i===!0?K.disable().catch(function(){}):K.enable().catch(function(){}))},[i,K]),ze.createElement(ze.Fragment,null,oe?ze.createElement("div",{ref:v,style:f,className:m}):a)};Gl.displayName="PayPalButtons";var Hl=function(n){return ze.createElement(Kp,{onError:n.onError},ze.createElement(Gl,ce({},n)))};Hl.displayName="PayPalButtons";function Yp(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Qp(n,e){var t=document.querySelector('script[src="'.concat(n,'"]'));if(t===null)return null;var r=Wl(n,e),s=t.cloneNode();if(delete s.dataset.uidAuto,Object.keys(s.dataset).length!==Object.keys(r.dataset).length)return null;var i=!0;return Object.keys(s.dataset).forEach(function(a){s.dataset[a]!==r.dataset[a]&&(i=!1)}),i?t:null}function Jp(n){var e=n.url,t=n.attributes,r=n.onSuccess,s=n.onError,i=Wl(e,t);i.onerror=s,i.onload=r,document.head.insertBefore(i,document.head.firstElementChild)}function Xp(n){var e=Object.prototype.hasOwnProperty.call(n,"sdkBaseUrl")?n.sdkBaseUrl:void 0,t=n.environment;n.sdkBaseUrl;var r=Yp(n,["environment","sdkBaseUrl"]),s=e||tm(t),i=r,a=Object.keys(i).filter(function(d){return typeof i[d]<"u"&&i[d]!==null&&i[d]!==""}).reduce(function(d,f){var m=i[f].toString();return f=Zp(f),f.substring(0,4)==="data"||f==="crossorigin"?d.attributes[f]=m:d.queryParams[f]=m,d},{queryParams:{},attributes:{}}),c=a.queryParams,l=a.attributes;return c["merchant-id"]&&c["merchant-id"].indexOf(",")!==-1&&(l["data-merchant-id"]=c["merchant-id"],c["merchant-id"]="*"),{url:"".concat(s,"?").concat(em(c)),attributes:l}}function Zp(n){var e=function(t,r){return(r?"-":"")+t.toLowerCase()};return n.replace(/[A-Z]+(?![a-z])|[A-Z]/g,e)}function em(n){var e="";return Object.keys(n).forEach(function(t){e.length!==0&&(e+="&"),e+=t+"="+n[t]}),e}function tm(n){return n==="sandbox"?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js"}function Wl(n,e){e===void 0&&(e={});var t=document.createElement("script");return t.src=n,Object.keys(e).forEach(function(r){t.setAttribute(r,e[r]),r==="data-csp-nonce"&&t.setAttribute("nonce",e["data-csp-nonce"])}),t}function nm(n,e){if(e===void 0&&(e=Promise),Kl(n,e),typeof document>"u")return e.resolve(null);var t=Xp(n),r=t.url,s=t.attributes,i=s["data-namespace"]||"paypal",a=Qc(i);return s["data-js-sdk-library"]||(s["data-js-sdk-library"]="paypal-js"),Qp(r,s)&&a?e.resolve(a):rm({url:r,attributes:s},e).then(function(){var c=Qc(i);if(c)return c;throw new Error("The window.".concat(i," global variable is not available."))})}function rm(n,e){e===void 0&&(e=Promise),Kl(n,e);var t=n.url,r=n.attributes;if(typeof t!="string"||t.length===0)throw new Error("Invalid url.");if(typeof r<"u"&&typeof r!="object")throw new Error("Expected attributes to be an object.");return new e(function(s,i){if(typeof document>"u")return s();Jp({url:t,attributes:r,onSuccess:function(){return s()},onError:function(){var a=new Error('The script "'.concat(t,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));return i(a)}})})}function Qc(n){return window[n]}function Kl(n,e){if(typeof n!="object"||n===null)throw new Error("Expected an options object.");var t=n.environment;if(t&&t!=="production"&&t!=="sandbox")throw new Error('The `environment` option must be either "production" or "sandbox".');if(typeof e<"u"&&typeof e!="function")throw new Error("Expected PromisePonyfill to be a function.")}var sm=function(n){var e,t=n.options,r=t===void 0?{clientId:"test"}:t,s=n.children,i=n.deferLoading,a=i===void 0?!1:i,c=j.useReducer(zp,{options:ce(ce({},r),(e={},e[cn.DATA_JS_SDK_LIBRARY]=cn.DATA_LIBRARY_VALUE,e[cn.DATA_SDK_INTEGRATION_SOURCE]=cn.DATA_LIBRARY_VALUE,e[Sr]="".concat(ql(r)),e)),loadingStatus:a?Oe.INITIAL:Oe.PENDING}),l=c[0],d=c[1];return j.useEffect(function(){if(a===!1&&l.loadingStatus===Oe.INITIAL)return d({type:Vt.LOADING_STATUS,value:Oe.PENDING});if(l.loadingStatus===Oe.PENDING){var f=!0;return nm(l.options).then(function(){f&&d({type:Vt.LOADING_STATUS,value:Oe.RESOLVED})}).catch(function(m){console.error("".concat(Up," ").concat(m)),f&&d({type:Vt.LOADING_STATUS,value:{state:Oe.REJECTED,message:String(m)}})}),function(){f=!1}}},[l.options,a,l.loadingStatus]),ze.createElement(zl.Provider,{value:ce(ce({},l),{dispatch:d})},s)};function Jc(){}j.createContext({cardFieldsForm:null,fields:{},registerField:Jc,unregisterField:Jc});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yl=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var om={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=j.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...c},l)=>j.createElement("svg",{ref:l,...om,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Yl("lucide",s),...c},[...a.map(([d,f])=>j.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(n,e)=>{const t=j.forwardRef(({className:r,...s},i)=>j.createElement(am,{ref:i,iconNode:e,className:Yl(`lucide-${im(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=ct("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=ct("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ct("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ct("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ct("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ct("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_m=()=>{};var Xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ym=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(v=64)),r.push(t[f],t[m],t[v],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ym(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new vm;const v=i<<2|c>>4;if(r.push(v),d!==64){const S=c<<4&240|d>>2;if(r.push(S),m!==64){const D=d<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wm=function(n){const e=Jl(n);return Xl.encodeByteArray(e,!0)},Us=function(n){return wm(n).replace(/\./g,"")},Zl=function(n){try{return Xl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=()=>Em().__FIREBASE_DEFAULTS__,bm=()=>{if(typeof process>"u"||typeof Xc>"u")return;const n=Xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Im=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zl(n[1]);return e&&JSON.parse(e)},li=()=>{try{return _m()||Tm()||bm()||Im()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eh=n=>{var e,t;return(t=(e=li())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Jo=n=>{const e=eh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},th=()=>{var n;return(n=li())==null?void 0:n.config},nh=n=>{var e;return(e=li())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Sm(){var e;const n=(e=li())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dm(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nm(){return!Sm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Om(){try{return typeof indexedDB=="object"}catch{return!1}}function Vm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="FirebaseError";class ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xm,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ut(s,c,r)}}function Lm(n,e){return n.replace(Mm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mm=/\{\$([^}]+)}/g;function Um(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Zc(i)&&Zc(a)){if(!jt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Fm(n,e){const t=new jm(n,e);return t.subscribe.bind(t)}class jm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=co),s.error===void 0&&(s.error=co),s.complete===void 0&&(s.complete=co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hi(n){return(await fetch(n,{credentials:"include"})).ok}class mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Am;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zm(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(n){return n===an?void 0:n}function zm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Hm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Wm=H.INFO,Km={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Ym=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Km[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=Wm,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Qm=(n,e)=>e.some(t=>n instanceof t);let eu,tu;function Jm(){return eu||(eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xm(){return tu||(tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,bo=new WeakMap,ih=new WeakMap,uo=new WeakMap,Zo=new WeakMap;function Zm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(xt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sh.set(t,n)}).catch(()=>{}),Zo.set(e,n),e}function eg(n){if(bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});bo.set(n,e)}let Io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ih.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tg(n){Io=n(Io)}function ng(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(lo(this),e,...t);return ih.set(r,e.sort?e.sort():[e]),xt(r)}:Xm().includes(n)?function(...e){return n.apply(lo(this),e),xt(sh.get(this))}:function(...e){return xt(n.apply(lo(this),e))}}function rg(n){return typeof n=="function"?ng(n):(n instanceof IDBTransaction&&eg(n),Qm(n,Jm())?new Proxy(n,Io):n)}function xt(n){if(n instanceof IDBRequest)return Zm(n);if(uo.has(n))return uo.get(n);const e=rg(n);return e!==n&&(uo.set(n,e),Zo.set(e,n)),e}const lo=n=>Zo.get(n);function sg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=xt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(xt(a.result),l.oldVersion,l.newVersion,xt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ig=["get","getKey","getAll","getAllKeys","count"],og=["put","add","delete","clear"],ho=new Map;function nu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=og.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ig.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return ho.set(e,i),i}tg(n=>({...n,get:(e,t,r)=>nu(e,t)||n.get(e,t,r),has:(e,t)=>!!nu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ao="@firebase/app",ru="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Xo("@firebase/app"),ug="@firebase/app-compat",lg="@firebase/analytics-compat",hg="@firebase/analytics",dg="@firebase/app-check-compat",fg="@firebase/app-check",pg="@firebase/auth",mg="@firebase/auth-compat",gg="@firebase/database",_g="@firebase/data-connect",yg="@firebase/database-compat",vg="@firebase/functions",wg="@firebase/functions-compat",Eg="@firebase/installations",Tg="@firebase/installations-compat",bg="@firebase/messaging",Ig="@firebase/messaging-compat",Ag="@firebase/performance",Rg="@firebase/performance-compat",Sg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Cg="@firebase/storage",kg="@firebase/storage-compat",Dg="@firebase/firestore",Ng="@firebase/ai",Og="@firebase/firestore-compat",Vg="firebase",xg="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="[DEFAULT]",Lg={[Ao]:"fire-core",[ug]:"fire-core-compat",[hg]:"fire-analytics",[lg]:"fire-analytics-compat",[fg]:"fire-app-check",[dg]:"fire-app-check-compat",[pg]:"fire-auth",[mg]:"fire-auth-compat",[gg]:"fire-rtdb",[_g]:"fire-data-connect",[yg]:"fire-rtdb-compat",[vg]:"fire-fn",[wg]:"fire-fn-compat",[Eg]:"fire-iid",[Tg]:"fire-iid-compat",[bg]:"fire-fcm",[Ig]:"fire-fcm-compat",[Ag]:"fire-perf",[Rg]:"fire-perf-compat",[Sg]:"fire-rc",[Pg]:"fire-rc-compat",[Cg]:"fire-gcs",[kg]:"fire-gcs-compat",[Dg]:"fire-fst",[Og]:"fire-fst-compat",[Ng]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,Mg=new Map,So=new Map;function su(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bt(n){const e=n.name;if(So.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;So.set(e,n);for(const t of Fs.values())su(t,n);for(const t of Mg.values())su(t,n);return!0}function jr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Ur("app","Firebase",Ug);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=xg;function oh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ro,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(t||(t=th()),!t)throw Lt.create("no-options");const i=Fs.get(s);if(i){if(jt(t,i.options)&&jt(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const a=new Gm(s);for(const l of So.values())a.addComponent(l);const c=new Fg(t,r,a);return Fs.set(s,c),c}function di(n=Ro){const e=Fs.get(n);if(!e&&n===Ro&&th())return oh();if(!e)throw Lt.create("no-app",{appName:n});return e}function Be(n,e,t){let r=Lg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}Bt(new mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="firebase-heartbeat-database",Bg=1,Pr="firebase-heartbeat-store";let fo=null;function ah(){return fo||(fo=sg(jg,Bg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),fo}async function $g(n){try{const t=(await ah()).transaction(Pr),r=await t.objectStore(Pr).get(ch(n));return await t.done,r}catch(e){if(e instanceof ut)gt.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function iu(n,e){try{const r=(await ah()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(e,ch(n)),await r.done}catch(t){if(t instanceof ut)gt.warn(t.message);else{const r=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(r.message)}}}function ch(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1024,zg=30;class Gg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ou();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zg){const a=Kg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ou(),{heartbeatsToSend:r,unsentEntries:s}=Hg(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function ou(){return new Date().toISOString().substring(0,10)}function Hg(n,e=qg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),au(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),au(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Om()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $g(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return iu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return iu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function au(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}function Kg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){Bt(new mt("platform-logger",e=>new ag(e),"PRIVATE")),Bt(new mt("heartbeat",e=>new Gg(e),"PRIVATE")),Be(Ao,ru,n),Be(Ao,ru,"esm2020"),Be("fire-js","")}Yg("");var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,uh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.F=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(T,w,I){for(var _=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)_[ve-2]=arguments[ve];return g.prototype[w].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);const T=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)T[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;w<16;++w)T[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],w=E.g[2];let I=E.g[3],_;_=g+(I^y&(w^I))+T[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+T[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+T[2]+606105819&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+T[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+T[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+T[6]+2821735955&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+T[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+T[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+T[10]+4294925233&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+T[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+T[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+T[14]+2792965006&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+T[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(w^I&(y^w))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+T[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+T[11]+643717713&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+T[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+T[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+T[15]+3634488961&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+T[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+T[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+T[3]+4107603335&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+T[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+T[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+T[7]+1735328473&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+T[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(y^w^I)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+T[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+T[11]+1839030562&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+T[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+T[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+T[7]+4139469664&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+T[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+T[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+T[3]+3572445317&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+T[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+T[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+T[15]+530742520&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+T[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(w^(y|~I))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+T[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+T[14]+2878612391&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+T[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+T[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+T[10]+4293915773&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+T[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+T[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+T[6]+2734768916&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+T[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+T[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+T[2]+718787259&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const y=g-this.blockSize,T=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(T[w++]=E.charCodeAt(I++),w==this.blockSize){s(this,T),w=0;break}}else for(;I<g;)if(T[w++]=E[I++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)E[g++]=this.g[y]>>>T&255;return E};function i(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;const y=[];let T=!0;for(let w=E.length-1;w>=0;w--){const I=E[w]|0;T&&I==g||(y[w]=I,T=!1)}this.g=y}var c={};function l(E){return-128<=E&&E<128?i(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return k(d(-E));const g=[];let y=1;for(let T=0;E>=y;T++)g[T]=E/y|0,y*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let T=m;for(let I=0;I<E.length;I+=8){var w=Math.min(8,E.length-I);const _=parseInt(E.substring(I,I+w),g);w<8?(w=d(Math.pow(g,w)),T=T.j(w).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var m=l(0),v=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(x(this))return-k(this).m();let E=0,g=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);E+=(T>=0?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+k(this).toString(E);const g=d(Math.pow(E,6));var y=this;let T="";for(;;){const w=Z(y,g).g;y=q(y,w.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=w,D(y))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=q(this,E),x(E)?-1:D(E)?0:1};function k(E){const g=E.g.length,y=[];for(let T=0;T<g;T++)y[T]=~E.g[T];return new a(y,~E.h).add(v)}n.abs=function(){return x(this)?k(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),y=[];let T=0;for(let w=0;w<=g;w++){let I=T+(this.i(w)&65535)+(E.i(w)&65535),_=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=_>>>16,I&=65535,_&=65535,y[w]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(E,g){return E.add(k(g))}n.j=function(E){if(D(this)||D(E))return m;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(this.l(S)<0&&E.l(S)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,y=[];for(var T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let w=0;w<E.g.length;w++){const I=this.i(T)>>>16,_=this.i(T)&65535,ve=E.i(w)>>>16,Zt=E.i(w)&65535;y[2*T+2*w]+=_*Zt,W(y,2*T+2*w),y[2*T+2*w+1]+=I*Zt,W(y,2*T+2*w+1),y[2*T+2*w+1]+=_*ve,W(y,2*T+2*w+1),y[2*T+2*w+2]+=I*ve,W(y,2*T+2*w+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function W(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function K(E,g){this.g=E,this.h=g}function Z(E,g){if(D(g))throw Error("division by zero");if(D(E))return new K(m,m);if(x(E))return g=Z(k(E),g),new K(k(g.g),k(g.h));if(x(g))return g=Z(E,k(g)),new K(k(g.g),g.h);if(E.g.length>30){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,T=g;T.l(E)<=0;)y=re(y),T=re(T);var w=oe(y,1),I=oe(T,1);for(T=oe(T,2),y=oe(y,2);!D(T);){var _=I.add(T);_.l(E)<=0&&(w=w.add(y),I=_),T=oe(T,1),y=oe(y,1)}return g=q(E,w.j(g)),new K(w,g)}for(w=m;E.l(g)>=0;){for(y=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(y),_=I.j(g);x(_)||_.l(E)>0;)y-=T,I=d(y),_=I.j(g);D(I)&&(I=v),w=w.add(I),E=q(E,_)}return new K(w,E)}n.B=function(E){return Z(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let T=0;T<g;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function re(E){const g=E.g.length+1,y=[];for(let T=0;T<g;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function oe(E,g){const y=g>>5;g%=32;const T=E.g.length-y,w=[];for(let I=0;I<T;I++)w[I]=g>0?E.i(I+y)>>>g|E.i(I+y+1)<<32-g:E.i(I+y);return new a(w,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,uh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Mt=a}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lh,gr,hh,Rs,Po,dh,fh,ph;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var h=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&h.push([p,u[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,h){return o.call.apply(o.bind,arguments)}function d(o,u,h){return d=l,d.apply(null,arguments)}function f(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,u){function h(){}h.prototype=u.prototype,o.Z=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,b,A){for(var N=Array(arguments.length-2),$=2;$<arguments.length;$++)N[$-2]=arguments[$];return u.prototype[b].apply(p,N)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const u=o.length;if(u>0){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function D(o,u){for(let p=1;p<arguments.length;p++){const b=arguments[p];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const A=b.length||0;o.length=h+A;for(let N=0;N<A;N++)o[h+N]=b[N]}else o.push(b)}}class x{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(o){a.setTimeout(()=>{throw o},0)}function q(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,h){const p=K.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var K=new x(()=>new Z,o=>o.reset());class Z{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let re,oe=!1,E=new W,g=()=>{const o=Promise.resolve(void 0);re=()=>{o.then(y)}};function y(){for(var o;o=q();){try{o.h.call(o.g)}catch(h){k(h)}var u=K;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}oe=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,u),a.removeEventListener("test",h,u)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function ve(o,u){w.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(ve,w),ve.prototype.init=function(o,u){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(Math.random()*1e6|0),Of=0;function Vf(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++Of,this.da=this.fa=!1}function ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ns(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function xf(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function Ga(o){const u={};for(const h in o)u[h]=o[h];return u}const Ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let A=0;A<Ha.length;A++)h=Ha[A],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function rs(o){this.src=o,this.g={},this.h=0}rs.prototype.add=function(o,u,h,p,b){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const N=Mi(o,u,p,b);return N>-1?(u=o[N],h||(u.fa=!1)):(u=new Vf(u,this.src,A,!!p,b),u.fa=h,o.push(u)),u};function Li(o,u){const h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),A;(A=b>=0)&&Array.prototype.splice.call(p,b,1),A&&(ts(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Mi(o,u,h,p){for(let b=0;b<o.length;++b){const A=o[b];if(!A.da&&A.listener==u&&A.capture==!!h&&A.ha==p)return b}return-1}var Ui="closure_lm_"+(Math.random()*1e6|0),Fi={};function Ka(o,u,h,p,b){if(Array.isArray(u)){for(let A=0;A<u.length;A++)Ka(o,u[A],h,p,b);return null}return h=Ja(h),o&&o[Zt]?o.J(u,h,c(p)?!!p.capture:!1,b):Lf(o,u,h,!1,p,b)}function Lf(o,u,h,p,b,A){if(!u)throw Error("Invalid event type");const N=c(b)?!!b.capture:!!b;let $=Bi(o);if($||(o[Ui]=$=new rs(o)),h=$.add(u,h,p,N,A),h.proxy)return h;if(p=Mf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)I||(b=N),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(Qa(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Mf(){function o(h){return u.call(o.src,o.listener,h)}const u=Uf;return o}function Ya(o,u,h,p,b){if(Array.isArray(u))for(var A=0;A<u.length;A++)Ya(o,u[A],h,p,b);else p=c(p)?!!p.capture:!!p,h=Ja(h),o&&o[Zt]?(o=o.i,A=String(u).toString(),A in o.g&&(u=o.g[A],h=Mi(u,h,p,b),h>-1&&(ts(u[h]),Array.prototype.splice.call(u,h,1),u.length==0&&(delete o.g[A],o.h--)))):o&&(o=Bi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Mi(u,h,p,b)),(h=o>-1?u[o]:null)&&ji(h))}function ji(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Zt])Li(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(Qa(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Bi(u))?(Li(h,o),h.h==0&&(h.src=null,u[Ui]=null)):ts(o)}}}function Qa(o){return o in Fi?Fi[o]:Fi[o]="on"+o}function Uf(o,u){if(o.da)o=!0;else{u=new ve(u,this);const h=o.listener,p=o.ha||o.src;o.fa&&ji(o),o=h.call(p,u)}return o}function Bi(o){return o=o[Ui],o instanceof rs?o:null}var $i="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ja(o){return typeof o=="function"?o:(o[$i]||(o[$i]=function(u){return o.handleEvent(u)}),o[$i])}function be(){T.call(this),this.i=new rs(this),this.M=this,this.G=null}m(be,T),be.prototype[Zt]=!0,be.prototype.removeEventListener=function(o,u,h,p){Ya(this,o,u,h,p)};function Pe(o,u){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new w(u,o);else if(u instanceof w)u.target=u.target||o;else{var b=u;u=new w(p,o),Wa(u,b)}b=!0;let A,N;if(h)for(N=h.length-1;N>=0;N--)A=u.g=h[N],b=ss(A,p,!0,u)&&b;if(A=u.g=o,b=ss(A,p,!0,u)&&b,b=ss(A,p,!1,u)&&b,h)for(N=0;N<h.length;N++)A=u.g=h[N],b=ss(A,p,!1,u)&&b}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const h=o.g[u];for(let p=0;p<h.length;p++)ts(h[p]);delete o.g[u],o.h--}}this.G=null},be.prototype.J=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},be.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ss(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let b=!0;for(let A=0;A<u.length;++A){const N=u[A];if(N&&!N.da&&N.capture==h){const $=N.listener,pe=N.ha||N.src;N.fa&&Li(o.i,N),b=$.call(pe,p)!==!1&&b}}return b&&!p.defaultPrevented}function Ff(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Xa(o){o.g=Ff(()=>{o.g=null,o.i&&(o.i=!1,Xa(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class jf extends T{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){T.call(this),this.h=o,this.g={}}m(Qn,T);var Za=[];function ec(o){ns(o.g,function(u,h){this.g.hasOwnProperty(h)&&ji(u)},o),o.g={}}Qn.prototype.N=function(){Qn.Z.N.call(this),ec(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=a.JSON.stringify,Bf=a.JSON.parse,$f=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function tc(){}function nc(){}var Jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zi(){w.call(this,"d")}m(zi,w);function Gi(){w.call(this,"c")}m(Gi,w);var en={},rc=null;function is(){return rc=rc||new be}en.Ia="serverreachability";function sc(o){w.call(this,en.Ia,o)}m(sc,w);function Xn(o){const u=is();Pe(u,new sc(u))}en.STAT_EVENT="statevent";function ic(o,u){w.call(this,en.STAT_EVENT,o),this.stat=u}m(ic,w);function Ce(o){const u=is();Pe(u,new ic(u,o))}en.Ja="timingevent";function oc(o,u){w.call(this,en.Ja,o),this.size=u}m(oc,w);function Zn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function er(){this.g=!0}er.prototype.ua=function(){this.g=!1};function qf(o,u,h,p,b,A){o.info(function(){if(o.g)if(A){var N="",$=A.split("&");for(let X=0;X<$.length;X++){var pe=$[X].split("=");if(pe.length>1){const ge=pe[0];pe=pe[1];const Xe=ge.split("_");N=Xe.length>=2&&Xe[1]=="type"?N+(ge+"="+pe+"&"):N+(ge+"=redacted&")}}}else N=null;else N=A;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+N})}function zf(o,u,h,p,b,A,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+A+" "+N})}function Tn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hf(o,h)+(p?" "+p:"")})}function Gf(o,u){o.info(function(){return"TIMEOUT: "+u})}er.prototype.info=function(){};function Hf(o,u){if(!o.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var h=A[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let N=1;N<p.length;N++)p[N]=""}}}}return qi(A)}catch{return u}}var os={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ac={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cc;function Hi(){}m(Hi,tc),Hi.prototype.g=function(){return new XMLHttpRequest},cc=new Hi;function tr(o){return encodeURIComponent(String(o))}function Wf(o){var u=1;o=o.split(":");const h=[];for(;u>0&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function Tt(o,u,h,p){this.j=o,this.i=u,this.l=h,this.S=p||1,this.V=new Qn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var lc={},Wi={};function Ki(o,u,h){o.M=1,o.A=cs(Je(u)),o.u=h,o.R=!0,hc(o,null)}function hc(o,u){o.F=Date.now(),as(o),o.B=Je(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Ic(h.i,"t",p),o.C=0,h=o.j.L,o.h=new uc,o.g=$c(o.j,h?u:null,!o.u),o.P>0&&(o.O=new jf(d(o.Y,o,o.g),o.P)),u=o.V,h=o.g,p=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(Za[0]=b.toString()),b=Za);for(let A=0;A<b.length;A++){const N=Ka(h,b[A],p||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=o.J?Ga(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Xn(),qf(o.i,o.v,o.B,o.l,o.S,o.u)}Tt.prototype.ba=function(o){o=o.target;const u=this.O;u&&At(o)==3?u.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const $=At(this.g),pe=this.g.ya(),X=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||Dc(this.g)))){this.K||$!=4||pe==7||(pe==8||X<=0?Xn(3):Xn(2)),Yi(this);var u=this.g.ca();this.X=u;var h=Kf(this);if(this.o=u==200,zf(this.i,this.v,this.B,this.l,this.S,$,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var A=p;break t}}A=null}if(o=A)Tn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qi(this,o);else{this.o=!1,this.m=3,Ce(12),tn(this),nr(this);break e}}if(this.R){o=!0;let ge;for(;!this.K&&this.C<h.length;)if(ge=Yf(this,h),ge==Wi){$==4&&(this.m=4,Ce(14),o=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==lc){this.m=4,Ce(15),Tn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Tn(this.i,this.l,ge,null),Qi(this,ge);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)Tn(this.i,this.l,h,"[Invalid Chunked Response]"),tn(this),nr(this);else if(h.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),so(N),N.P=!0,Ce(11))}}else Tn(this.i,this.l,h,null),Qi(this,h);$==4&&tn(this),this.o&&!this.K&&($==4?Uc(this.j,this):(this.o=!1,as(this)))}else up(this.g),u==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),tn(this),nr(this)}}}catch{}finally{}};function Kf(o){if(!dc(o))return o.g.la();const u=Dc(o.g);if(u==="")return"";let h="";const p=u.length,b=At(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return tn(o),nr(o),"";o.h.i=new a.TextDecoder}for(let A=0;A<p;A++)o.h.h=!0,h+=o.h.i.decode(u[A],{stream:!(b&&A==p-1)});return u.length=0,o.h.g+=h,o.C=0,o.h.g}function dc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Yf(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Wi:(h=Number(u.substring(h,p)),isNaN(h)?lc:(p+=1,p+h>u.length?Wi:(u=u.slice(p,p+h),o.C=p+h,u)))}Tt.prototype.cancel=function(){this.K=!0,tn(this)};function as(o){o.T=Date.now()+o.H,fc(o,o.H)}function fc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Zn(d(o.aa,o),u)}function Yi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Gf(this.i,this.B),this.M!=2&&(Xn(),Ce(17)),tn(this),this.m=2,nr(this)):fc(this,this.T-o)};function nr(o){o.j.I==0||o.K||Uc(o.j,o)}function tn(o){Yi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,ec(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Qi(o,u){try{var h=o.j;if(h.I!=0&&(h.g==o||Ji(h.h,o))){if(!o.L&&Ji(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)fs(h),hs(h);else break e;ro(h),Ce(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Zn(d(h.Va,h),6e3));gc(h.h)<=1&&h.ta&&(h.ta=void 0)}else rn(h,11)}else if((o.L||h.g==o)&&fs(h),!_(u))for(b=h.Ba.g.parse(u),u=0;u<b.length;u++){let X=b[u];const ge=X[0];if(!(ge<=h.K))if(h.K=ge,X=X[1],h.I==2)if(X[0]=="c"){h.M=X[1],h.ba=X[2];const Xe=X[3];Xe!=null&&(h.ka=Xe,h.j.info("VER="+h.ka));const sn=X[4];sn!=null&&(h.za=sn,h.j.info("SVER="+h.za));const Rt=X[5];Rt!=null&&typeof Rt=="number"&&Rt>0&&(p=1.5*Rt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const St=o.g;if(St){const ms=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var A=p.h;A.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Xi(A,A.h),A.h=null))}if(p.G){const io=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(p.wa=io,ee(p.J,p.G,io))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var N=o;if(p.na=Bc(p,p.L?p.ba:null,p.W),N.L){_c(p.h,N);var $=N,pe=p.O;pe&&($.H=pe),$.D&&(Yi($),as($)),p.g=N}else Lc(p);h.i.length>0&&ds(h)}else X[0]!="stop"&&X[0]!="close"||rn(h,7);else h.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?rn(h,7):no(h):X[0]!="noop"&&h.l&&h.l.qa(X),h.A=0)}}Xn(4)}catch{}}var Qf=class{constructor(o,u){this.g=o,this.map=u}};function pc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gc(o){return o.h?1:o.g?o.g.size:0}function Ji(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Xi(o,u){o.g?o.g.add(u):o.h=u}function _c(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}pc.prototype.cancel=function(){if(this.i=yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function yc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.G);return u}return S(o.i)}var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jf(o,u){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let b,A=null;p>=0?(b=o[h].substring(0,p),A=o[h].substring(p+1)):b=o[h],u(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof bt?(this.l=o.l,rr(this,o.j),this.o=o.o,this.g=o.g,sr(this,o.u),this.h=o.h,Zi(this,Ac(o.i)),this.m=o.m):o&&(u=String(o).match(vc))?(this.l=!1,rr(this,u[1]||"",!0),this.o=ir(u[2]||""),this.g=ir(u[3]||"",!0),sr(this,u[4]),this.h=ir(u[5]||"",!0),Zi(this,u[6]||"",!0),this.m=ir(u[7]||"")):(this.l=!1,this.i=new ar(null,this.l))}bt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(or(u,wc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(or(u,wc,!0),"@"),o.push(tr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(or(h,h.charAt(0)=="/"?ep:Zf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",or(h,np)),o.join("")},bt.prototype.resolve=function(o){const u=Je(this);let h=!!o.j;h?rr(u,o.j):h=!!o.o,h?u.o=o.o:h=!!o.g,h?u.g=o.g:h=o.u!=null;var p=o.h;if(h)sr(u,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=u.h.lastIndexOf("/");b!=-1&&(p=u.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const A=[];for(let N=0;N<b.length;){const $=b[N++];$=="."?p&&N==b.length&&A.push(""):$==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),p&&N==b.length&&A.push("")):(A.push($),p=!0)}p=A.join("/")}else p=b}return h?u.h=p:h=o.i.toString()!=="",h?Zi(u,Ac(o.i)):h=!!o.m,h&&(u.m=o.m),u};function Je(o){return new bt(o)}function rr(o,u,h){o.j=h?ir(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function sr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Zi(o,u,h){u instanceof ar?(o.i=u,rp(o.i,o.l)):(h||(u=or(u,tp)),o.i=new ar(u,o.l))}function ee(o,u,h){o.i.set(u,h)}function cs(o){return ee(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ir(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function or(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Xf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Xf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wc=/[#\/\?@]/g,Zf=/[#\?:]/g,ep=/[#\?]/g,tp=/[#\?@]/g,np=/#/g;function ar(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function nn(o){o.g||(o.g=new Map,o.h=0,o.i&&Jf(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=ar.prototype,n.add=function(o,u){nn(this),this.i=null,o=bn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ec(o,u){nn(o),u=bn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Tc(o,u){return nn(o),u=bn(o,u),o.g.has(u)}n.forEach=function(o,u){nn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)};function bc(o,u){nn(o);let h=[];if(typeof u=="string")Tc(o,u)&&(h=h.concat(o.g.get(bn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)h=h.concat(o[u]);return h}n.set=function(o,u){return nn(this),this.i=null,o=bn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=bc(this,o),o.length>0?String(o[0]):u):u};function Ic(o,u,h){Ec(o,u),h.length>0&&(o.i=null,o.g.set(bn(o,u),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var h=u[p];const b=tr(h);h=bc(this,h);for(let A=0;A<h.length;A++){let N=b;h[A]!==""&&(N+="="+tr(h[A])),o.push(N)}}return this.i=o.join("&")};function Ac(o){const u=new ar;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function bn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function rp(o,u){u&&!o.j&&(nn(o),o.i=null,o.g.forEach(function(h,p){const b=p.toLowerCase();p!=b&&(Ec(this,p),Ic(this,b,h))},o)),o.j=u}function sp(o,u){const h=new er;if(a.Image){const p=new Image;p.onload=f(It,h,"TestLoadImage: loaded",!0,u,p),p.onerror=f(It,h,"TestLoadImage: error",!1,u,p),p.onabort=f(It,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(It,h,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function ip(o,u){const h=new er,p=new AbortController,b=setTimeout(()=>{p.abort(),It(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(A=>{clearTimeout(b),A.ok?It(h,"TestPingServer: ok",!0,u):It(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),It(h,"TestPingServer: error",!1,u)})}function It(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function op(){this.g=new $f}function eo(o){this.i=o.Sb||null,this.h=o.ab||!1}m(eo,tc),eo.prototype.g=function(){return new us(this.i,this.h)};function us(o,u){be.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(us,be),n=us.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?cr(this):ur(this),this.readyState==3&&Rc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,cr(this))},n.Na=function(o){this.g&&(this.response=o,cr(this))},n.ga=function(){this.g&&cr(this)};function cr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ur(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sc(o){let u="";return ns(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function to(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Sc(h),typeof o=="string"?h!=null&&tr(h):ee(o,u,h))}function ae(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ae,be);var ap=/^https?$/i,cp=["POST","PUT"];n=ae.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cc.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(A){Pc(this,A);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())h.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(cp,u,void 0)>=0)||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,N]of h)this.g.setRequestHeader(A,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){Pc(this,A)}};function Pc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Cc(o),ls(o)}function Cc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?kc(this):this.Xa())},n.Xa=function(){kc(this)};function kc(o){if(o.h&&typeof i<"u"){if(o.v&&At(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),At(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=A===0){let N=String(o.D).match(vc)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),p=!ap.test(N?N.toLowerCase():"")}h=p}if(h)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var b=At(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",Cc(o)}}finally{ls(o)}}}}function ls(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,u||Pe(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function At(o){return o.g?o.g.readyState:0}n.ca=function(){try{return At(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Bf(u)}};function Dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function up(o){const u={};o=(o.g&&At(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=Wf(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=u[b]||[];u[b]=A,A.push(h)}xf(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function lr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Nc(o){this.za=0,this.i=[],this.j=new er,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=lr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=lr("baseRetryDelayMs",5e3,o),this.Za=lr("retryDelaySeedMs",1e4,o),this.Ta=lr("forwardChannelMaxRetries",2,o),this.va=lr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new pc(o&&o.concurrentRequestLimit),this.Ba=new op,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Nc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,h,p){Ce(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Bc(this,null,this.W),ds(this)};function no(o){if(Oc(o),o.I==3){var u=o.V++,h=Je(o.J);if(ee(h,"SID",o.M),ee(h,"RID",u),ee(h,"TYPE","terminate"),hr(o,h),u=new Tt(o,o.j,u),u.M=2,u.A=cs(Je(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=u.A,h=!0),h||(u.g=$c(u.j,null),u.g.ea(u.A)),u.F=Date.now(),as(u)}jc(o)}function hs(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function Oc(o){hs(o),o.v&&(a.clearTimeout(o.v),o.v=null),fs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ds(o){if(!mc(o.h)&&!o.m){o.m=!0;var u=o.Ea;re||g(),oe||(re(),oe=!0),E.add(u,o),o.D=0}}function lp(o,u){return gc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Zn(d(o.Ea,o,u),Fc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Tt(this,this.j,o);let A=this.o;if(this.U&&(A?(A=Ga(A),Wa(A,this.U)):A=this.U),this.u!==null||this.R||(b.J=A,A=null),this.S)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=xc(this,b,u),h=Je(this.J),ee(h,"RID",o),ee(h,"CVER",22),this.G&&ee(h,"X-HTTP-Session-Id",this.G),hr(this,h),A&&(this.R?u="headers="+tr(Sc(A))+"&"+u:this.u&&to(h,this.u,A)),Xi(this.h,b),this.Ra&&ee(h,"TYPE","init"),this.S?(ee(h,"$req",u),ee(h,"SID","null"),b.U=!0,Ki(b,h,null)):Ki(b,h,u),this.I=2}}else this.I==3&&(o?Vc(this,o):this.i.length==0||mc(this.h)||Vc(this))};function Vc(o,u){var h;u?h=u.l:h=o.V++;const p=Je(o.J);ee(p,"SID",o.M),ee(p,"RID",h),ee(p,"AID",o.K),hr(o,p),o.u&&o.o&&to(p,o.u,o.o),h=new Tt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),u&&(o.i=u.G.concat(o.i)),u=xc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xi(o.h,h),Ki(h,p,u)}function hr(o,u){o.H&&ns(o.H,function(h,p){ee(u,p,h)}),o.l&&ns({},function(h,p){ee(u,p,h)})}function xc(o,u,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let $=-1;for(;;){const pe=["count="+h];$==-1?h>0?($=b[0].g,pe.push("ofs="+$)):$=0:pe.push("ofs="+$);let X=!0;for(let ge=0;ge<h;ge++){var A=b[ge].g;const Xe=b[ge].map;if(A-=$,A<0)$=Math.max(0,b[ge].g-100),X=!1;else try{A="req"+A+"_"||"";try{var N=Xe instanceof Map?Xe:Object.entries(Xe);for(const[sn,Rt]of N){let St=Rt;c(Rt)&&(St=qi(Rt)),pe.push(A+sn+"="+encodeURIComponent(St))}}catch(sn){throw pe.push(A+"type="+encodeURIComponent("_badmap")),sn}}catch{p&&p(Xe)}}if(X){N=pe.join("&");break e}}N=void 0}return o=o.i.splice(0,h),u.G=o,N}function Lc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;re||g(),oe||(re(),oe=!0),E.add(u,o),o.A=0}}function ro(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Zn(d(o.Da,o),Fc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Zn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),hs(this),Mc(this))};function so(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Mc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Je(o.na);ee(u,"RID","rpc"),ee(u,"SID",o.M),ee(u,"AID",o.K),ee(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ee(u,"TO",o.ia),ee(u,"TYPE","xmlhttp"),hr(o,u),o.u&&o.o&&to(u,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=cs(Je(u)),h.u=null,h.R=!0,hc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,hs(this),ro(this),Ce(19))};function fs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Uc(o,u){var h=null;if(o.g==u){fs(o),so(o),o.g=null;var p=2}else if(Ji(o.h,u))h=u.G,_c(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){h=u.u?u.u.length:0,u=Date.now()-u.F;var b=o.D;p=is(),Pe(p,new oc(p,h)),ds(o)}else Lc(o);else if(b=u.m,b==3||b==0&&u.X>0||!(p==1&&lp(o,u)||p==2&&ro(o)))switch(h&&h.length>0&&(u=o.h,u.i=u.i.concat(h)),b){case 1:rn(o,5);break;case 4:rn(o,10);break;case 3:rn(o,6);break;default:rn(o,2)}}}function Fc(o,u){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*u}function rn(o,u){if(o.j.info("Error code "+u),u==2){var h=d(o.bb,o),p=o.Ua;const b=!p;p=new bt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||rr(p,"https"),cs(p),b?sp(p.toString(),h):ip(p.toString(),h)}else Ce(2);o.I=0,o.l&&o.l.pa(u),jc(o),Oc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function jc(o){if(o.I=0,o.ja=[],o.l){const u=yc(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Bc(o,u,h){var p=h instanceof bt?Je(h):new bt(h);if(p.g!="")u&&(p.g=u+"."+p.g),sr(p,p.u);else{var b=a.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;const A=new bt(null);p&&rr(A,p),u&&(A.g=u),b&&sr(A,b),h&&(A.h=h),p=A}return h=o.G,u=o.wa,h&&u&&ee(p,h,u),ee(p,"VER",o.ka),hr(o,p),p}function $c(o,u,h){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ae(new eo({ab:h})):new ae(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qc(){}n=qc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ps(){}ps.prototype.g=function(o,u){return new xe(o,u)};function xe(o,u){be.call(this),this.g=new Nc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new In(this)}m(xe,be),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){no(this.g)},xe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=qi(o),o=h);u.i.push(new Qf(u.Ya++,o)),u.I==3&&ds(u)},xe.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,xe.Z.N.call(this)};function zc(o){zi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(zc,zi);function Gc(){Gi.call(this),this.status=1}m(Gc,Gi);function In(o){this.g=o}m(In,qc),In.prototype.ra=function(){Pe(this.g,"a")},In.prototype.qa=function(o){Pe(this.g,new zc(o))},In.prototype.pa=function(o){Pe(this.g,new Gc)},In.prototype.oa=function(){Pe(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,ph=function(){return new ps},fh=function(){return is()},dh=en,Po={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,Rs=os,ac.COMPLETE="complete",hh=ac,nc.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",be.prototype.listen=be.prototype.J,gr=nc,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,lh=ae}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="12.13.0";function Qg(n){Bn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Xo("@firebase/firestore");function An(){return dn.logLevel}function V(n,...e){if(dn.logLevel<=H.DEBUG){const t=e.map(ea);dn.debug(`Firestore (${Bn}): ${n}`,...t)}}function _t(n,...e){if(dn.logLevel<=H.ERROR){const t=e.map(ea);dn.error(`Firestore (${Bn}): ${n}`,...t)}}function fn(n,...e){if(dn.logLevel<=H.WARN){const t=e.map(ea);dn.warn(`Firestore (${Bn}): ${n}`,...t)}}function ea(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,mh(n,r,t)}function mh(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _t(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||mh(e,s,r)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class Xg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Zg{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new gh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class e_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class t_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new e_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=r_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function Co(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return po(s)===po(i)?z(s,i):po(s)?1:-1}return z(n.length,e.length)}const s_=55296,i_=57343;function po(n){const e=n.charCodeAt(0);return e>=s_&&e<=i_}function Ln(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),s=Ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):Co(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class J extends Ze{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const o_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Ze{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return o_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lu}static keyField(){return new Ee([lu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function a_(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hu(n){if(!L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function du(n){if(L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Re(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fi(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Br(n,e){if(!yh(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=-62135596800,pu=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*pu);return new te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fu)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pu}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Br(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:fe("string",te._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new te(0,0))}static max(){return new U(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=-1;function c_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new $t(s,L.empty(),e)}function u_(n){return new $t(n.readTime,n.key,Cr)}class $t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $t(U.min(),L.empty(),Cr)}static max(){return new $t(U.max(),L.empty(),Cr)}}function l_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==h_)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((s=>s?C.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new C(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function f_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function $r(n){return n==null}function js(n){return n===0&&1/n==-1/0}function p_(n){return typeof n=="number"&&Number.isInteger(n)&&!js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="";function m_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mu(e)),e=g_(n.get(t),e);return mu(e)}function g_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case vh:t+="";break;default:t+=i}}return t}function mu(n){return n+vh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new we(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _u(this.data.getIterator())}getIteratorFrom(e){return new _u(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class _u{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new me(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Eh("Invalid base64 string: "+i):i}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const __=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=__.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="server_timestamp",bh="__type__",Ih="__previous_value__",Ah="__local_write_time__";function ra(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bh])==null?void 0:r.stringValue)===Th}function mi(n){const e=n.mapValue.fields[Ih];return ra(e)?mi(e):e}function kr(n){const e=qt(n.mapValue.fields[Ah].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,r,s,i,a,c,l,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=m}}const Bs="(default)";class Dr{constructor(e,t){this.projectId=e,this.database=t||Bs}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database===Bs}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}function v_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="__type__",w_="__max__",ws={mapValue:{}},Sh="__vector__",$s="value";function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ra(n)?4:T_(n)?9007199254740991:E_(n)?10:11:M(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=Gt(n);if(t!==Gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kr(n).isEqual(kr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=qt(s.timestampValue),c=qt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return zt(s.bytesValue).isEqual(zt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),c=ue(i.doubleValue);return a===c?js(a)===js(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(gu(a)!==gu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!it(a[l],c[l])))return!1;return!0})(n,e);default:return M(52216,{left:n})}}function Nr(n,e){return(n.values||[]).find((t=>it(t,e)))!==void 0}function Mn(n,e){if(n===e)return 0;const t=Gt(n),r=Gt(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ue(i.integerValue||i.doubleValue),l=ue(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return yu(n.timestampValue,e.timestampValue);case 4:return yu(kr(n),kr(e));case 5:return Co(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=zt(i),l=zt(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=z(c[d],l[d]);if(f!==0)return f}return z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=z(ue(i.latitude),ue(a.latitude));return c!==0?c:z(ue(i.longitude),ue(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return vu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var v,S,D,x;const c=i.fields||{},l=a.fields||{},d=(v=c[$s])==null?void 0:v.arrayValue,f=(S=l[$s])==null?void 0:S.arrayValue,m=z(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:vu(d,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ws.mapValue&&a===ws.mapValue)return 0;if(i===ws.mapValue)return 1;if(a===ws.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const v=Co(l[m],f[m]);if(v!==0)return v;const S=Mn(c[l[m]],d[f[m]]);if(S!==0)return S}return z(l.length,f.length)})(n.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=qt(n),r=qt(e),s=z(t.seconds,r.seconds);return s!==0?s:z(t.nanos,r.nanos)}function vu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Mn(t[s],r[s]);if(i)return i}return z(t.length,r.length)}function Un(n){return ko(n)}function ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ko(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ko(t.fields[a])}`;return s+"}"})(n.mapValue):M(61005,{value:n})}function Ss(n){switch(Gt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mi(n);return e?16+Ss(e):16;case 5:return 2*n.stringValue.length;case 6:return zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ss(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Yt(r.fields,((i,a)=>{s+=i.length+Ss(a)})),s})(n.mapValue);default:throw M(13486,{value:n})}}function wu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Do(n){return!!n&&"integerValue"in n}function sa(n){return!!n&&"arrayValue"in n}function Eu(n){return!!n&&"nullValue"in n}function Tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ps(n){return!!n&&"mapValue"in n}function E_(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rh])==null?void 0:r.stringValue)===Sh}function wr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=wr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wr(n.arrayValue.values[t]);return e}return{...n}}function T_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===w_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=wr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ke(wr(this.value))}}function Ph(n){const e=[];return Yt(n.fields,((t,r)=>{const s=new Ee([t]);if(Ps(r)){const i=Ph(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ye(e,0,U.min(),U.min(),U.min(),ke.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,U.min(),U.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,U.min(),U.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.position=e,this.inclusive=t}}function bu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=Mn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t="asc"){this.field=e,this.dir=t}}function b_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{}class he extends Ch{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new A_(e,t,r):t==="array-contains"?new P_(e,r):t==="in"?new C_(e,r):t==="not-in"?new k_(e,r):t==="array-contains-any"?new D_(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new R_(e,r):new S_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mn(t,this.value)):t!==null&&Gt(this.value)===Gt(t)&&this.matchesComparison(Mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Ch{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new We(e,t)}matches(e){return kh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kh(n){return n.op==="and"}function Dh(n){return I_(n)&&kh(n)}function I_(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function No(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Un(n.value);if(Dh(n))return n.filters.map((e=>No(e))).join(",");{const e=n.filters.map((t=>No(t))).join(",");return`${n.op}(${e})`}}function Nh(n,e){return n instanceof he?(function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)})(n,e):n instanceof We?(function(r,s){return s instanceof We&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Nh(a,s.filters[c])),!0):!1})(n,e):void M(19439)}function Oh(n){return n instanceof he?(function(t){return`${t.field.canonicalString()} ${t.op} ${Un(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(Oh).join(" ,")+"}"})(n):"Filter"}class A_ extends he{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class R_ extends he{constructor(e,t){super(e,"in",t),this.keys=Vh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class S_ extends he{constructor(e,t){super(e,"not-in",t),this.keys=Vh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Vh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>L.fromName(r.referenceValue)))}class P_ extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sa(t)&&Nr(t.arrayValue,this.value)}}class C_ extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nr(this.value.arrayValue,t)}}class k_ extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nr(this.value.arrayValue,t)}}class D_ extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Au(n,e=null,t=[],r=[],s=null,i=null,a=null){return new N_(n,e,t,r,s,i,a)}function ia(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>No(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),$r(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Un(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Un(r))).join(",")),e.Te=t}return e.Te}function oa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!b_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Iu(n.startAt,e.startAt)&&Iu(n.endAt,e.endAt)}function Oo(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function O_(n,e,t,r,s,i,a,c){return new zn(n,e,t,r,s,i,a,c)}function gi(n){return new zn(n)}function Ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function V_(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xh(n){return n.collectionGroup!==null}function Er(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(Ee.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Or(i,r))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new Or(Ee.keyField(),r))}return e.Ie}function tt(n){const e=B(n);return e.Ee||(e.Ee=x_(e,Er(n))),e.Ee}function x_(n,e){if(n.limitType==="F")return Au(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Or(s.field,i)}));const t=n.endAt?new qs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qs(n.startAt.position,n.startAt.inclusive):null;return Au(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vo(n,e){const t=n.filters.concat([e]);return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function L_(n,e){const t=n.explicitOrderBy.concat([e]);return new zn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function xo(n,e,t){return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _i(n,e){return oa(tt(n),tt(e))&&n.limitType===e.limitType}function Lh(n){return`${ia(tt(n))}|lt:${n.limitType}`}function Rn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Oh(s))).join(", ")}]`),$r(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Un(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Un(s))).join(",")),`Target(${r})`})(tt(n))}; limitType=${n.limitType})`}function yi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Er(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const d=bu(a,c,l);return a.inclusive?d<=0:d<0})(r.startAt,Er(r),s)||r.endAt&&!(function(a,c,l){const d=bu(a,c,l);return a.inclusive?d>=0:d>0})(r.endAt,Er(r),s))})(n,e)}function M_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mh(n){return(e,t)=>{let r=!1;for(const s of Er(n)){const i=U_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function U_(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Mn(l,d):M(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new se(L.comparator);function yt(){return F_}const Uh=new se(L.comparator);function _r(...n){let e=Uh;for(const t of n)e=e.insert(t.key,t);return e}function Fh(n){let e=Uh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function un(){return Tr()}function jh(){return Tr()}function Tr(){return new wn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const j_=new se(L.comparator),B_=new me(L.comparator);function G(...n){let e=B_;for(const t of n)e=e.add(t);return e}const $_=new me(z);function q_(){return $_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:js(e)?"-0":e}}function Bh(n){return{integerValue:""+n}}function z_(n,e){return p_(e)?Bh(e):aa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function G_(n,e,t){return n instanceof zs?(function(s,i){const a={fields:{[bh]:{stringValue:Th},[Ah]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ra(i)&&(i=mi(i)),i&&(a.fields[Ih]=i),{mapValue:a}})(t,e):n instanceof Fn?qh(n,e):n instanceof Vr?zh(n,e):(function(s,i){const a=$h(s,i),c=Su(a)+Su(s.Ae);return Do(a)&&Do(s.Ae)?Bh(c):aa(s.serializer,c)})(n,e)}function H_(n,e,t){return n instanceof Fn?qh(n,e):n instanceof Vr?zh(n,e):t}function $h(n,e){return n instanceof Gs?(function(r){return Do(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class zs extends vi{}class Fn extends vi{constructor(e){super(),this.elements=e}}function qh(n,e){const t=Gh(e);for(const r of n.elements)t.some((s=>it(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vr extends vi{constructor(e){super(),this.elements=e}}function zh(n,e){let t=Gh(e);for(const r of n.elements)t=t.filter((s=>!it(s,r)));return{arrayValue:{values:t}}}class Gs extends vi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Su(n){return ue(n.integerValue||n.doubleValue)}function Gh(n){return sa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t){this.field=e,this.transform=t}}function K_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Fn&&s instanceof Fn||r instanceof Vr&&s instanceof Vr?Ln(r.elements,s.elements,it):r instanceof Gs&&s instanceof Gs?it(r.Ae,s.Ae):r instanceof zs&&s instanceof zs})(n.transform,e.transform)}class Y_{constructor(e,t){this.version=e,this.transformResults=t}}class de{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new de}static exists(e){return new de(void 0,e)}static updateTime(e){return new de(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zr(n.key,de.none()):new qr(n.key,n.data,de.none());{const t=n.data,r=ke.empty();let s=new me(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qt(n.key,r,new Ue(s.toArray()),de.none())}}function Q_(n,e,t){n instanceof qr?(function(s,i,a){const c=s.value.clone(),l=Cu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Qt?(function(s,i,a){if(!Cs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Cu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Wh(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function br(n,e,t,r){return n instanceof qr?(function(i,a,c,l){if(!Cs(i.precondition,a))return c;const d=i.value.clone(),f=ku(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Qt?(function(i,a,c,l){if(!Cs(i.precondition,a))return c;const d=ku(i.fieldTransforms,l,a),f=a.data;return f.setAll(Wh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,c){return Cs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function J_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=$h(r.transform,s||null);i!=null&&(t===null&&(t=ke.empty()),t.set(r.field,i))}return t||null}function Pu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ln(r,s,((i,a)=>K_(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Cu(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,H_(a,c,t[s]))}return r}function ku(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,G_(i,a,e))}return r}class zr extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kh extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Q_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Hh(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),G())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,((t,r)=>Pu(t,r)))&&Ln(this.baseMutations,e.baseMutations,((t,r)=>Pu(t,r)))}}class ca{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return j_})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ca(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,Y;function Yh(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Qh(n){if(n===void 0)return _t("GRPC error has no .code"),P.UNKNOWN;switch(n){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(Y=le||(le={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Mt([4294967295,4294967295],0);function Du(n){const e=ty().encode(n),t=new uh;return t.update(e),new Uint8Array(t.digest())}function Nu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mt([t,r],0),new Mt([s,i],0)]}class ua{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new yr(`Invalid padding: ${t}`);if(r<0)throw new yr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new yr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Mt.fromNumber(r)));return s.compare(ny)===1&&(s=new Mt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Du(e),[r,s]=Nu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ua(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Du(e),[r,s]=Nu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gr(U.min(),s,new se(z),yt(),G())}}class Hr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hr(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Jh{constructor(e,t){this.targetId=e,this.Ce=t}}class Xh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ou{constructor(){this.ve=0,this.Fe=Vu(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:i})}})),new Hr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Vu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ry{constructor(e){this.Ge=e,this.ze=new Map,this.je=yt(),this.Je=Es(),this.He=Es(),this.Ze=new se(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:M(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Oo(i))if(r===0){const a=new L(i.path);this.et(t,a,ye.newNoDocument(a,U.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=zt(r).toUint8Array()}catch(l){if(l instanceof Eh)return fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ua(a,s,i)}catch(l){return fn(l instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Oo(c.target)){const l=new L(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ye.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}}));let r=G();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Gr(e,t,this.Ze,this.je,r);return this.je=yt(),this.Je=Es(),this.He=Es(),this.Ze=new se(z),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ou,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new me(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new me(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ou),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Es(){return new se(L.comparator)}function Vu(){return new se(L.comparator)}const sy={asc:"ASCENDING",desc:"DESCENDING"},iy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oy={and:"AND",or:"OR"};class ay{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lo(n,e){return n.useProto3Json||$r(e)?e:{value:e}}function Hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cy(n,e){return Hs(n,e.toTimestamp())}function Fe(n){return Q(!!n,49232),U.fromTimestamp((function(t){const r=qt(t);return new te(r.seconds,r.nanos)})(n))}function la(n,e){return Mo(n,e).canonicalString()}function Mo(n,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ed(n){const e=J.fromString(n);return Q(od(e),10190,{key:e.toString()}),e}function Ws(n,e){return la(n.databaseId,e.path)}function Ir(n,e){const t=ed(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(nd(t))}function td(n,e){return la(n.databaseId,e)}function uy(n){const e=ed(n);return e.length===4?J.emptyPath():nd(e)}function Uo(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nd(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xu(n,e,t){return{name:Ws(n,e),fields:t.value.mapValue.fields}}function ly(n,e){return"found"in e?(function(r,s){Q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ir(r,s.found.name),a=Fe(s.found.updateTime),c=s.found.createTime?Fe(s.found.createTime):U.min(),l=new ke({mapValue:{fields:s.found.fields}});return ye.newFoundDocument(i,a,c,l)})(n,e):"missing"in e?(function(r,s){Q(!!s.missing,3894),Q(!!s.readTime,22933);const i=Ir(r,s.missing),a=Fe(s.readTime);return ye.newNoDocument(i,a)})(n,e):M(7234,{result:e})}function hy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(Q(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(Q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?P.UNKNOWN:Qh(d.code);return new O(f,d.message||"")})(a);t=new Xh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ir(n,r.document.name),i=Fe(r.document.updateTime),a=r.document.createTime?Fe(r.document.createTime):U.min(),c=new ke({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new ks(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ir(n,r.document),i=r.readTime?Fe(r.readTime):U.min(),a=ye.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ks([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ir(n,r.document),i=r.removedTargetIds||[];t=new ks([],i,s,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ey(s,i),c=r.targetId;t=new Jh(c,a)}}return t}function rd(n,e){let t;if(e instanceof qr)t={update:xu(n,e.key,e.value)};else if(e instanceof zr)t={delete:Ws(n,e.key)};else if(e instanceof Qt)t={update:xu(n,e.key,e.data),updateMask:wy(e.fieldMask)};else{if(!(e instanceof Kh))return M(16599,{dt:e.type});t={verify:Ws(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gs)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw M(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:cy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)})(n,e.precondition)),t}function dy(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Fe(s.updateTime):Fe(i);return a.isEqual(U.min())&&(a=Fe(i)),new Y_(a,s.transformResults||[])})(t,e)))):[]}function fy(n,e){return{documents:[td(n,e.path)]}}function py(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=td(n,s);const i=(function(d){if(d.length!==0)return id(We.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(v){return{field:Sn(v.field),direction:_y(v.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Lo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function my(n){let e=uy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const v=sd(m);return v instanceof We&&Dh(v)?v.getFilters():[v]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((v=>(function(D){return new Or(Pn(D.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let v;return v=typeof m=="object"?m.value:m,$r(v)?null:v})(t.limit));let l=null;t.startAt&&(l=(function(m){const v=!!m.before,S=m.values||[];return new qs(S,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const v=!m.before,S=m.values||[];return new qs(S,v)})(t.endAt)),O_(e,s,a,i,c,"F",l,d)}function gy(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pn(t.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pn(t.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(t){return he.create(Pn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((r=>sd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(t.compositeFilter.op))})(n):M(30097,{filter:n})}function _y(n){return sy[n]}function yy(n){return iy[n]}function vy(n){return oy[n]}function Sn(n){return{fieldPath:n.canonicalString()}}function Pn(n){return Ee.fromServerFormat(n.fieldPath)}function id(n){return n instanceof he?(function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NAN"}};if(Eu(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NOT_NAN"}};if(Eu(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sn(t.field),op:yy(t.op),value:t.value}}})(n):n instanceof We?(function(t){const r=t.getFilters().map((s=>id(s)));return r.length===1?r[0]:{compositeFilter:{op:vy(t.op),filters:r}}})(n):M(54877,{filter:n})}function wy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function od(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ad(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,s,i=U.min(),a=U.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.yt=e}}function Ty(n){const e=my({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.bn=new Iy}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve($t.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new me(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cd=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(cd,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ht(0)}static ar(){return new Ht(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="LruGarbageCollector",Ay=1048576;function Uu([n,e],[t,r]){const s=z(n,t);return s===0?z(e,r):s}class Ry{constructor(e){this.Pr=e,this.buffer=new me(Uu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Uu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(Mu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qn(t)?V(Mu,"Ignoring IndexedDB error during garbage collection: ",t):await $n(t)}await this.Ar(3e5)}))}}class Py{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(pi.ce);const r=new Ry(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Lu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),An()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Cy(n,e){return new Py(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.changes=new wn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&br(r.mutation,s,Ue.empty(),te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,G()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=G()){const s=un();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=_r();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=un();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,G())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=yt();const a=Tr(),c=(function(){return Tr()})();return t.forEach(((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Qt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),br(f.mutation,d,f.mutation.getFieldMask(),te.now())):a.set(d.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>c.set(d,new Dy(f,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Tr();let s=new se(((a,c)=>a-c)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||Ue.empty();f=c.applyToLocalView(d,f),r.set(l,f);const m=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,m)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,m=jh();f.forEach((v=>{if(!i.has(v)){const S=Hh(t.get(v),r.get(v));S!==null&&m.set(v,S),i=i.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return V_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(un());let c=Cr,l=i;return a.next((d=>C.forEach(d,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next((v=>{l=l.insert(f,v)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,l,d,G()))).next((f=>({batchId:c,changes:Fh(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((r=>{let s=_r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=_r();return this.indexManager.getCollectionParents(e,i).next((c=>C.forEach(c,(l=>{const d=(function(m,v){return new zn(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((f=>{f.forEach(((m,v)=>{a=a.insert(m,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ye.newInvalidDocument(f)))}));let c=_r();return a.forEach(((l,d)=>{const f=i.get(l);f!==void 0&&br(f.mutation,d,Ue.empty(),te.now()),yi(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Fe(s.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Ty(s.bundledQuery),readTime:Fe(s.readTime)}})(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.overlays=new se(L.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=un();return C.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=un(),i=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=un(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=un(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return C.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Z_(t,r));let i=this.Lr.get(t);i===void 0&&(i=G(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.kr=new me(_e.Kr),this.qr=new me(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new L(new J([])),r=new _e(t,e),s=new _e(t,e+1),i=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new L(new J([])),r=new _e(t,e),s=new _e(t,e+1);let i=G();return this.qr.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new _e(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return L.comparator(e.key,t.key)||z(e.Jr,t.Jr)}static Ur(e,t){return z(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new me(_e.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new X_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new _e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?na:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Jr);i.push(c)})),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(z);return t.forEach((s=>{const i=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(c=>{r=r.add(c.Jr)}))})),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new _e(new L(i),0);let c=new me(z);return this.Hr.forEachWhile((l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Jr)),!0)}),a),C.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Q(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return C.forEach(t.mutations,(s=>{const i=new _e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new _e(t,0),s=this.Hr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.ti=e,this.docs=(function(){return new se(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yt();const a=t.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||l_(u_(f),r)<=0||(s.has(f.key)||yi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){M(9500)}ni(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Uy(this)}getSize(e){return C.resolve(this.size)}}class Uy extends ky{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.persistence=e,this.ri=new wn((t=>ia(t)),oa),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new ha,this.targetCount=0,this.oi=Ht._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ht(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),C.waitFor(i).next((()=>s))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this._i={},this.overlays={},this.ai=new pi(0),this.ui=!1,this.ui=!0,this.ci=new xy,this.referenceDelegate=e(this),this.li=new Fy(this),this.indexManager=new by,this.remoteDocumentCache=(function(s){return new My(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Ey(t),this.Pi=new Oy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Ly(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new jy(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return C.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class jy extends d_{constructor(e){super(),this.currentSequenceNumber=e}}class da{constructor(e){this.persistence=e,this.Ri=new ha,this.Ai=null}static Vi(e){return new da(e)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(r=>{const s=L.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,U.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ks{constructor(e,t){this.persistence=e,this.fi=new wn((r=>m_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Cy(this,t)}static Vi(e,t){return new Ks(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?C.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ss(e.data.value)),t}wr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fa(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Nm()?8:f_(Se())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new By;return this.ys(e,t,a).next((c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(An()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Rn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(An()<=H.DEBUG&&V("QueryEngine","Query:",Rn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(An()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Rn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):C.resolve())}gs(e,t){if(Ru(t))return C.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=xo(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=G(...i);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const d=this.Ss(t,c);return this.bs(t,d,a,l.readTime)?this.gs(e,xo(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,r,s){return Ru(t)||s.isEqual(U.min())?C.resolve(null):this.fs.getDocuments(e,r).next((i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?C.resolve(null):(An()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rn(t)),this.Ds(e,a,t,c_(s,Cr)).next((c=>c)))}))}Ss(e,t){let r=new me(Mh(e));return t.forEach(((s,i)=>{yi(e,i)&&(r=r.add(i))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return An()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Rn(t)),this.fs.getDocumentsMatchingQuery(e,t,$t.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="LocalStore",qy=3e8;class zy{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new se(z),this.Fs=new wn((i=>ia(i)),oa),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ny(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Gy(n,e,t,r){return new zy(n,e,t,r)}async function ld(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=G();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Hy(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,d,f){const m=d.batch,v=m.keys();let S=C.resolve();return v.forEach((D=>{S=S.next((()=>f.getEntry(l,D))).next((x=>{const k=d.docVersions.get(D);Q(k!==null,48541),x.version.compareTo(k)<0&&(m.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(l,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=G();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function hd(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Wy(n,e){const t=B(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,m)=>{const v=s.get(m);if(!v)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,m))));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(m,S),(function(x,k,q){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=qy?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(v,S,f)&&c.push(t.li.updateTargetData(i,S))}));let l=yt(),d=G();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Ky(i,a,e.documentUpdates).next((f=>{l=f.Bs,d=f.Ls}))),!r.isEqual(U.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return C.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(t.vs=s,i)))}function Ky(n,e,t){let r=G(),s=G();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yt();return t.forEach(((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V(pa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:a,Ls:s}}))}function Yy(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Qy(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,C.resolve(s)):t.li.allocateTargetId(r).next((a=>(s=new ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Fo(n,e,t){const r=B(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!qn(a))throw a;V(pa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Fu(n,e,t){const r=B(n);let s=U.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,f){const m=B(l),v=m.Fs.get(f);return v!==void 0?C.resolve(m.vs.get(v)):m.li.getTargetData(d,f)})(r,a,tt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:G()))).next((c=>(Jy(r,M_(e),c),{documents:c,ks:i})))))}function Jy(n,e,t){let r=n.Ms.get(e)||U.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class ju{constructor(){this.activeTargetIds=q_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xy{constructor(){this.vo=new ju,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ju,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="ConnectivityMonitor";class $u{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Bu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(Bu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts=null;function jo(){return Ts===null?Ts=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ts++,"0x"+Ts.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="RestConnection",ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Bs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=jo(),c=this.Qo(e,t.toUriEncodedString());V(mo,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(c),f=yn(d);return this.zo(e,c,l,r,f).then((m=>(V(mo,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw fn(mo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m}))}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=ev[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection",dr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Dn extends tv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Dn.c_){const e=fh();dr(e,dh.STAT_EVENT,(t=>{t.stat===Po.PROXY?V(Ie,"STAT_EVENT: detected buffering proxy"):t.stat===Po.NOPROXY&&V(Ie,"STAT_EVENT: detected no buffering proxy")})),Dn.c_=!0}}zo(e,t,r,s,i){const a=jo();return new Promise(((c,l)=>{const d=new lh;d.setWithCredentials(!0),d.listenOnce(hh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Rs.NO_ERROR:const m=d.getResponseJson();V(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Rs.TIMEOUT:V(Ie,`RPC '${e}' ${a} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const v=d.getStatus();if(V(Ie,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const x=(function(q){const W=q.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(W)>=0?W:P.UNKNOWN})(D.status);l(new O(x,D.message))}else l(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(Ie,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);V(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=jo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");V(Ie,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=a.createWebChannel(d,c);this.I_(f);let m=!1,v=!1;const S=new nv({Jo:D=>{v?V(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(V(Ie,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),V(Ie,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},Ho:()=>f.close()});return dr(f,gr.EventType.OPEN,(()=>{v||(V(Ie,`RPC '${e}' stream ${s} transport opened.`),S.i_())})),dr(f,gr.EventType.CLOSE,(()=>{v||(v=!0,V(Ie,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(f))})),dr(f,gr.EventType.ERROR,(D=>{v||(v=!0,fn(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),S.o_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),dr(f,gr.EventType.MESSAGE,(D=>{var x;if(!v){const k=D.data[0];Q(!!k,16349);const q=k,W=(q==null?void 0:q.error)||((x=q[0])==null?void 0:x.error);if(W){V(Ie,`RPC '${e}' stream ${s} received error:`,W);const K=W.status;let Z=(function(E){const g=le[E];if(g!==void 0)return Qh(g)})(K),re=W.message;K==="NOT_FOUND"&&re.includes("database")&&re.includes("does not exist")&&re.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=P.INTERNAL,re="Unknown error status: "+K+" with message "+W.message),v=!0,S.o_(new O(Z,re)),f.close()}else V(Ie,`RPC '${e}' stream ${s} received:`,k),S.__(k)}})),Dn.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ph()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){return new Dn(n)}function go(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){return new ay(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.c_=!1;class ma{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="PersistentStream";class dd{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ma(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(V(qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sv extends dd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=hy(this.serializer,e),r=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Fe(a.readTime):U.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Uo(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Oo(l)?{documents:fy(i,l)}:{query:py(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zh(i,a.resumeToken);const d=Lo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Hs(i,a.snapshotVersion.toTimestamp());const d=Lo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=gy(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Uo(this.serializer),t.removeTarget=e,this.K_(t)}}class iv extends dd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dy(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Uo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>rd(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{}class av extends ov{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Mo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,Mo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function cv(n,e,t,r){return new av(n,e,t,r)}class uv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_t(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="RemoteStore";class lv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ht(1e3),this.Va=new Ht(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((a=>{r.enqueueAndForget((async()=>{En(this)&&(V(ot,"Restarting streams for network reachability change."),await(async function(l){const d=B(l);d.da.add(4),await Wr(d),d.ga.set("Unknown"),d.da.delete(4),await Ti(d)})(this))}))})),this.ga=new uv(r,s)}}async function Ti(n){if(En(n))for(const e of n.ma)await e(!0)}async function Wr(n){for(const e of n.ma)await e(!1)}function Bo(n,e){return n.Ea.get(e)||void 0}function fd(n,e){const t=B(n),r=Bo(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=(function(c,l){const d=Bo(c,l);d!==void 0&&c.Ra.delete(d);const f=(function(v,S){return S%2!=0?v.Va.next():v.Aa.next()})(c,l);return c.Ea.set(l,f),c.Ra.set(f,l),f})(t,e.targetId);V(ot,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new ht(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),va(t)?ya(t):Gn(t).O_()&&_a(t,i)}function ga(n,e){const t=B(n),r=Gn(t),s=Bo(t,e);V(ot,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&pd(t,s),t.Ia.size===0&&(r.O_()?r.L_():En(t)&&t.ga.set("Unknown"))}function _a(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void V(ot,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Gn(n).Z_(e)}function pd(n,e){n.pa.$e(e),Gn(n).X_(e)}function ya(n){n.pa=new ry({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):G()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Gn(n).start(),n.ga.ua()}function va(n){return En(n)&&!Gn(n).x_()&&n.Ia.size>0}function En(n){return B(n).da.size===0}function md(n){n.pa=void 0}async function hv(n){n.ga.set("Online")}async function dv(n){n.Ia.forEach(((e,t)=>{_a(n,e)}))}async function fv(n,e){md(n),va(n)?(n.ga.ha(e),ya(n)):n.ga.set("Unknown")}async function pv(n,e,t){if(n.ga.set("Online"),e instanceof Xh&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}})(n,e)}catch(r){V(ot,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ys(n,r)}else if(e instanceof ks?n.pa.Xe(e):e instanceof Jh?n.pa.st(e):n.pa.tt(e),!t.isEqual(U.min()))try{const r=await hd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(d.resumeToken,a))}})),c.targetMismatches.forEach(((d,f)=>{const m=i.Ia.get(d);if(!m)return;i.Ia.set(d,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),pd(i,d);const v=new ht(m.target,d,f,m.sequenceNumber);_a(i,v)}));const l=(function(f,m){const v=new Map;m.targetChanges.forEach(((D,x)=>{const k=f.Ra.get(x);k!==void 0&&v.set(k,D)}));let S=new se(z);return m.targetMismatches.forEach(((D,x)=>{const k=f.Ra.get(D);k!==void 0&&(S=S.insert(k,x))})),new Gr(m.snapshotVersion,v,S,m.documentUpdates,m.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){V(ot,"Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,e,t){if(!qn(e))throw e;n.da.add(1),await Wr(n),n.ga.set("Offline"),t||(t=()=>hd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(ot,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ti(n)}))}function gd(n,e){return e().catch((t=>Ys(n,t,e)))}async function bi(n){const e=B(n),t=Wt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:na;for(;mv(e);)try{const s=await Yy(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,gv(e,s)}catch(s){await Ys(e,s)}_d(e)&&yd(e)}function mv(n){return En(n)&&n.Ta.length<10}function gv(n,e){n.Ta.push(e);const t=Wt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function _d(n){return En(n)&&!Wt(n).x_()&&n.Ta.length>0}function yd(n){Wt(n).start()}async function _v(n){Wt(n).ra()}async function yv(n){const e=Wt(n);for(const t of n.Ta)e.ea(t.mutations)}async function vv(n,e,t){const r=n.Ta.shift(),s=ca.from(r,e,t);await gd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await bi(n)}async function wv(n,e){e&&Wt(n).Y_&&await(async function(r,s){if((function(a){return Yh(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();Wt(r).B_(),await gd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await bi(r)}})(n,e),_d(n)&&yd(n)}async function zu(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),V(ot,"RemoteStore received new credentials");const r=En(t);t.da.add(3),await Wr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ti(t)}async function Ev(n,e){const t=B(n);e?(t.da.delete(2),await Ti(t)):e||(t.da.add(2),await Wr(t),t.ga.set("Unknown"))}function Gn(n){return n.ya||(n.ya=(function(t,r,s){const i=B(t);return i.sa(),new sv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:hv.bind(null,n),Yo:dv.bind(null,n),t_:fv.bind(null,n),H_:pv.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),va(n)?ya(n):n.ga.set("Unknown")):(await n.ya.stop(),md(n))}))),n.ya}function Wt(n){return n.wa||(n.wa=(function(t,r,s){const i=B(t);return i.sa(),new iv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:_v.bind(null,n),t_:wv.bind(null,n),ta:yv.bind(null,n),na:vv.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await bi(n)):(await n.wa.stop(),n.Ta.length>0&&(V(ot,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new wa(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(n,e){if(_t("AsyncQueue",`${e}: ${n}`),qn(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{static emptySet(e){return new Nn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=_r(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.Sa=new se(L.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class jn{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new jn(e,t,Nn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class bv{constructor(){this.queries=Hu(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=B(t),i=s.queries;s.queries=Hu(),i.forEach(((a,c)=>{for(const l of c.va)l.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Hu(){return new wn((n=>Lh(n)),_i)}async function Ta(n,e){const t=B(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Tv,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ea(a,`Initialization of query '${Rn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Ia(t)}async function ba(n,e){const t=B(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Iv(n,e){const t=B(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(r=!0);a.Ca=s}}r&&Ia(t)}function Av(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Ia(n){n.xa.forEach((e=>{e.next()}))}var $o,Wu;(Wu=$o||($o={})).Ba="default",Wu.Cache="cache";class Aa{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==$o.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.key=e}}class wd{constructor(e){this.key=e}}class Rv{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=G(),this.mutatedKeys=G(),this.iu=Mh(e),this.su=new Nn(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new Gu,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const v=s.get(f),S=yi(this.query,m)?m:null,D=!!v&&this.mutatedKeys.has(v.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;v&&S?v.data.isEqual(S.data)?D!==x&&(r.track({type:3,doc:S}),k=!0):this.uu(v,S)||(r.track({type:2,doc:S}),k=!0,(l&&this.iu(S,l)>0||d&&this.iu(S,d)<0)&&(c=!0)):!v&&S?(r.track({type:0,doc:S}),k=!0):v&&!S&&(r.track({type:1,doc:v}),k=!0,(l||d)&&(c=!0)),k&&(S?(a=a.add(S),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort(((f,m)=>(function(S,D){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:k})}};return x(S)-x(D)})(f.type,m.type)||this.iu(f.doc,m.doc))),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,d=l!==this.nu;return this.nu=l,a.length!==0||d?{snapshot:new jn(this.query,e.su,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Gu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=G(),this.su.forEach((r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))}));const t=[];return e.forEach((r=>{this.ru.has(r)||t.push(new wd(r))})),this.ru.forEach((r=>{e.has(r)||t.push(new vd(r))})),t}Tu(e){this.tu=e.ks,this.ru=G();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return jn.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ra="SyncEngine";class Sv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Pv{constructor(e){this.key=e,this.Eu=!1}}class Cv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new wn((c=>Lh(c)),_i),this.Vu=new Map,this.du=new Set,this.mu=new se(L.comparator),this.fu=new Map,this.gu=new ha,this.pu={},this.yu=new Map,this.wu=Ht.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function kv(n,e,t=!0){const r=Rd(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Ed(r,e,t,!0),s}async function Dv(n,e){const t=Rd(n);await Ed(t,e,!0,!1)}async function Ed(n,e,t,r){const s=await Qy(n.localStore,tt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Nv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&fd(n.remoteStore,s),c}async function Nv(n,e,t,r,s){n.bu=(m,v,S)=>(async function(x,k,q,W){let K=k.view._u(q);K.bs&&(K=await Fu(x.localStore,k.query,!1).then((({documents:E})=>k.view._u(E,K))));const Z=W&&W.targetChanges.get(k.targetId),re=W&&W.targetMismatches.get(k.targetId)!=null,oe=k.view.applyChanges(K,x.isPrimaryClient,Z,re);return Yu(x,k.targetId,oe.hu),oe.snapshot})(n,m,v,S);const i=await Fu(n.localStore,e,!0),a=new Rv(e,i.ks),c=a._u(i.documents),l=Hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Yu(n,t,d.hu);const f=new Sv(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function Ov(n,e,t){const r=B(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter((a=>!_i(a,e)))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ga(r.remoteStore,s.targetId),qo(r,s.targetId)})).catch($n)):(qo(r,s.targetId),await Fo(r.localStore,s.targetId,!0))}async function Vv(n,e){const t=B(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ga(t.remoteStore,r.targetId))}async function xv(n,e,t){const r=$v(n);try{const s=await(function(a,c){const l=B(a),d=te.now(),f=c.reduce(((S,D)=>S.add(D.key)),G());let m,v;return l.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let D=yt(),x=G();return l.xs.getEntries(S,f).next((k=>{D=k,D.forEach(((q,W)=>{W.isValidDocument()||(x=x.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(S,D))).next((k=>{m=k;const q=[];for(const W of c){const K=J_(W,m.get(W.key).overlayedDocument);K!=null&&q.push(new Qt(W.key,K,Ph(K.value.mapValue),de.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,q,c)})).next((k=>{v=k;const q=k.applyToLocalDocumentSet(m,x);return l.documentOverlayCache.saveOverlays(S,k.batchId,q)}))})).then((()=>({batchId:v.batchId,changes:Fh(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let d=a.pu[a.currentUser.toKey()];d||(d=new se(z)),d=d.insert(c,l),a.pu[a.currentUser.toKey()]=d})(r,s.batchId,t),await Kr(r,s.changes),await bi(r.remoteStore)}catch(s){const i=Ea(s,"Failed to persist write");t.reject(i)}}async function Td(n,e){const t=B(n);try{const r=await Wy(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.fu.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?Q(a.Eu,14607):s.removedDocuments.size>0&&(Q(a.Eu,42227),a.Eu=!1))})),await Kr(t,r,e)}catch(r){await $n(r)}}function Ku(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach(((i,a)=>{const c=a.view.Oa(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=B(a);l.onlineState=c;let d=!1;l.queries.forEach(((f,m)=>{for(const v of m.va)v.Oa(c)&&(d=!0)})),d&&Ia(l)})(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lv(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new se(L.comparator);a=a.insert(i,ye.newNoDocument(i,U.min()));const c=G().add(i),l=new Gr(U.min(),new Map,new se(z),a,c);await Td(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),Sa(r)}else await Fo(r.localStore,e,!1).then((()=>qo(r,e,t))).catch($n)}async function Mv(n,e){const t=B(n),r=e.batch.batchId;try{const s=await Hy(t.localStore,e);Id(t,r,null),bd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,s)}catch(s){await $n(s)}}async function Uv(n,e,t){const r=B(n);try{const s=await(function(a,c){const l=B(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next((m=>(Q(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>l.localDocuments.getDocuments(d,f)))}))})(r.localStore,e);Id(r,e,t),bd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,s)}catch(s){await $n(s)}}function bd(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Id(n,e,t){const r=B(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((r=>{n.gu.containsKey(r)||Ad(n,r)}))}function Ad(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(ga(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Sa(n))}function Yu(n,e,t){for(const r of t)r instanceof vd?(n.gu.addReference(r.key,e),Fv(n,r)):r instanceof wd?(V(Ra,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Ad(n,r.key)):M(19791,{Cu:r})}function Fv(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(V(Ra,"New document in limbo: "+t),n.du.add(r),Sa(n))}function Sa(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new L(J.fromString(e)),r=n.wu.next();n.fu.set(r,new Pv(t)),n.mu=n.mu.insert(t,r),fd(n.remoteStore,new ht(tt(gi(t.path)),r,"TargetPurposeLimboResolution",pi.ce))}}async function Kr(n,e,t){const r=B(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach(((c,l)=>{a.push(r.bu(l,e,t).then((d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=fa.Es(l.targetId,d);i.push(m)}})))})),await Promise.all(a),r.Ru.H_(s),await(async function(l,d){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>C.forEach(d,(v=>C.forEach(v.Ts,(S=>f.persistence.referenceDelegate.addReference(m,v.targetId,S))).next((()=>C.forEach(v.Is,(S=>f.persistence.referenceDelegate.removeReference(m,v.targetId,S)))))))))}catch(m){if(!qn(m))throw m;V(pa,"Failed to update sequence numbers: "+m)}for(const m of d){const v=m.targetId;if(!m.fromCache){const S=f.vs.get(v),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);f.vs=f.vs.insert(v,x)}}})(r.localStore,i))}async function jv(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){V(Ra,"User change. New user:",e.toKey());const r=await ld(t.localStore,e);t.currentUser=e,(function(i,a){i.yu.forEach((c=>{c.forEach((l=>{l.reject(new O(P.CANCELLED,a))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.Ns)}}function Bv(n,e){const t=B(n),r=t.fu.get(e);if(r&&r.Eu)return G().add(r.key);{let s=G();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const c=t.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function Rd(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Td.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lv.bind(null,e),e.Ru.H_=Iv.bind(null,e.eventManager),e.Ru.Du=Av.bind(null,e.eventManager),e}function $v(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uv.bind(null,e),e}class Qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Gy(this.persistence,new $y,e.initialUser,this.serializer)}xu(e){return new ud(da.Vi,this.serializer)}Mu(e){return new Xy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qs.provider={build:()=>new Qs};class qv extends Qs{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Q(this.persistence.referenceDelegate instanceof Ks,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sy(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new ud((r=>Ks.Vi(r,t)),this.serializer)}}class zo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ku(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jv.bind(null,this.syncEngine),await Ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new bv})()}createDatastore(e){const t=Ei(e.databaseInfo.databaseId),r=rv(e.databaseInfo);return cv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new lv(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ku(this.syncEngine,t,0)),(function(){return $u.v()?new $u:new Zy})())}createSyncEngine(e,t){return(function(s,i,a,c,l,d,f){const m=new Cv(s,i,a,c,l,d);return f&&(m.Su=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=B(s);V(ot,"RemoteStore shutting down."),i.da.add(5),await Wr(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zo.provider={build:()=>new zo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zv=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const a=B(s),c={documents:i.map((m=>Ws(a.serializer,m)))},l=await a.jo("BatchGetDocuments",a.serializer.databaseId,J.emptyPath(),c,i.length),d=new Map;l.forEach((m=>{const v=ly(a.serializer,m);d.set(v.key.toString(),v)}));const f=[];return i.forEach((m=>{const v=d.get(m.toString());Q(!!v,55234,{key:m}),f.push(v)})),f})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=L.fromPath(r);this.mutations.push(new Kh(s,this.precondition(s)))})),await(async function(r,s){const i=B(r),a={writes:s.map((c=>rd(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,J.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M(50498,{Hu:e.constructor.name});t=U.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?de.exists(!1):de.updateTime(t):de.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new O(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return de.updateTime(t)}return de.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Zu=r.maxAttempts,this.M_=new ma(this.asyncQueue,"transaction_retry")}Xu(){this.Zu-=1,this.Yu()}Yu(){this.M_.p_((async()=>{const e=new zv(this.datastore),t=this.ec(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.tc(s)}))))})).catch((r=>{this.tc(r)}))}))}ec(e){try{const t=this.updateFunction(e);return!$r(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}tc(e){this.Zu>0&&this.nc(e)?(this.Zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Yu(),Promise.resolve())))):this.deferred.reject(e)}nc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Yh(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="FirestoreClient";class Hv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=ta.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{V(Kt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(V(Kt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ea(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function _o(n,e){n.asyncQueue.verifyOperationInProgress(),V(Kt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ld(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Qu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wv(n);V(Kt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>zu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>zu(e.remoteStore,s))),n._onlineComponents=e}async function Wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Kt,"Using user provided OfflineComponentProvider");try{await _o(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await _o(n,new Qs)}}else V(Kt,"Using default OfflineComponentProvider"),await _o(n,new qv(void 0));return n._offlineComponents}async function Ca(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Kt,"Using user provided OnlineComponentProvider"),await Qu(n,n._uninitializedComponentsProvider._online)):(V(Kt,"Using default OnlineComponentProvider"),await Qu(n,new zo))),n._onlineComponents}function Kv(n){return Ca(n).then((e=>e.syncEngine))}function Yv(n){return Ca(n).then((e=>e.datastore))}async function Js(n){const e=await Ca(n),t=e.eventManager;return t.onListen=kv.bind(null,e.syncEngine),t.onUnlisten=Ov.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vv.bind(null,e.syncEngine),t}function Qv(n,e,t,r){const s=new Pa(r),i=new Aa(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Ta(await Js(n),i))),()=>{s.Ku(),n.asyncQueue.enqueueAndForget((async()=>ba(await Js(n),i)))}}function Jv(n,e,t={}){const r=new et;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,d){const f=new Pa({next:v=>{f.Ku(),a.enqueueAndForget((()=>ba(i,m)));const S=v.docs.has(c);!S&&v.fromCache?d.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&l&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new Aa(gi(c.path),f,{includeMetadataChanges:!0,Wa:!0});return Ta(i,m)})(await Js(n),n.asyncQueue,e,t,r))),r.promise}function Xv(n,e,t={}){const r=new et;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,d){const f=new Pa({next:v=>{f.Ku(),a.enqueueAndForget((()=>ba(i,m))),v.fromCache&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new Aa(c,f,{includeMetadataChanges:!0,Wa:!0});return Ta(i,m)})(await Js(n),n.asyncQueue,e,t,r))),r.promise}function Zv(n,e){const t=new et;return n.asyncQueue.enqueueAndForget((async()=>xv(await Kv(n),e,t))),t.promise}function ew(n,e,t){const r=new et;return n.asyncQueue.enqueueAndForget((async()=>{const s=await Yv(n);new Gv(n.asyncQueue,s,t,e,r).Xu()})),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="ComponentProvider",Ju=new Map;function nw(n,e,t,r,s){return new y_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Sd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="firestore.googleapis.com",Xu=!0;class Zu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pd,this.ssl=Xu}else this.host=e.host,this.ssl=e.ssl??Xu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ay)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sd(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ii{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Jg;switch(r.type){case"firstParty":return new t_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ju.get(t);r&&(V(tw,"Removing Datastore"),Ju.delete(t),r.terminate())})(this),Promise.resolve()}}function rw(n,e,t,r={}){var d;n=Re(n,Ii);const s=yn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&hi(`https://${c}`),i.host!==Pd&&i.host!==c&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!jt(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ae.MOCK_USER;else{f=rh(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ae(v)}n._authCredentials=new Xg(new gh(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}toJSON(){return{type:ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Br(t,ie._jsonSchema))return new ie(e,r||null,new L(J.fromString(t.referencePath)))}}ie._jsonSchemaVersion="firestore/documentReference/1.0",ie._jsonSchema={type:fe("string",ie._jsonSchemaVersion),referencePath:fe("string")};class Ut extends Jt{constructor(e,t,r){super(e,t,gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new L(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function Cd(n,e,...t){if(n=ne(n),_h("collection","path",e),n instanceof Ii){const r=J.fromString(e,...t);return du(r),new Ut(n,null,r)}{if(!(n instanceof ie||n instanceof Ut))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return du(r),new Ut(n.firestore,null,r)}}function pn(n,e,...t){if(n=ne(n),arguments.length===1&&(e=ta.newId()),_h("doc","path",e),n instanceof Ii){const r=J.fromString(e,...t);return hu(r),new ie(n,null,new L(r))}{if(!(n instanceof ie||n instanceof Ut))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return hu(r),new ie(n.firestore,n instanceof Ut?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="AsyncQueue";class tl{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new ma(this,"async_queue_retry"),this.lc=()=>{const r=go();r&&V(el,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=go();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new et;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!qn(e))throw e;V(el,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((r=>{throw this._c=r,this.ac=!1,_t("INTERNAL UNHANDLED ERROR: ",nl(r)),r})).then((r=>(this.ac=!1,r))))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=wa.createAndSchedule(this,e,t,r,(i=>this.Ec(i)));return this.oc.push(s),s}Pc(){this._c&&M(47125,{Rc:nl(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function nl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ke extends Ii{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tl(e),this._firestoreClient=void 0,await e}}}function sw(n,e){const t=typeof n=="object"?n:di(),r=typeof n=="string"?n:Bs,s=jr(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jo("firestore");i&&rw(s,...i)}return s}function Hn(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iw(n),n._firestoreClient}function iw(n){var r,s,i,a;const e=n._freezeSettings(),t=nw(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Hv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(Te.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Br(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:fe("string",Me._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(Br(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:fe("string",nt._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Br(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ge(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:fe("string",Ge._jsonSchemaVersion),vectorValues:fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=/^__.*__$/;class aw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new qr(e,this.data,t,this.fieldTransforms)}}class kd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class Ri{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ri({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Xs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Dd(this.dataSource)&&ow.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class cw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ei(e)}V(e,t,r,s=!1){return new Ri({dataSource:e,methodName:t,targetDoc:r,path:Ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wn(n){const e=n._freezeSettings(),t=Ei(n._databaseId);return new cw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Si(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Oa("Data must be an object, but it was:",a,r);const c=Nd(r,a);let l,d;if(i.merge)l=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const v=mn(e,m,t);if(!a.contains(v))throw new O(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);xd(f,v)||f.push(v)}l=new Ue(f),d=a.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,d=a.fieldTransforms;return new aw(new ke(c),l,d)}class Pi extends Ai{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pi}}function uw(n,e,t){return new Ri({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ka extends Ai{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=uw(this,e,!0),r=this.vc.map((i=>Kn(i,t))),s=new Fn(r);return new W_(e.path,s)}isEqual(e){return e instanceof ka&&jt(this.vc,e.vc)}}function Da(n,e,t,r){const s=n.V(1,e,t);Oa("Data must be an object, but it was:",s,r);const i=[],a=ke.empty();Yt(r,((l,d)=>{const f=Vd(e,l,t);d=ne(d);const m=s.Sc(f);if(d instanceof Pi)i.push(f);else{const v=Kn(d,m);v!=null&&(i.push(f),a.set(f,v))}}));const c=new Ue(i);return new kd(a,c,s.fieldTransforms)}function Na(n,e,t,r,s,i){const a=n.V(1,e,t),c=[mn(e,r,t)],l=[s];if(i.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(mn(e,i[v])),l.push(i[v+1]);const d=[],f=ke.empty();for(let v=c.length-1;v>=0;--v)if(!xd(d,c[v])){const S=c[v];let D=l[v];D=ne(D);const x=a.Sc(S);if(D instanceof Pi)d.push(S);else{const k=Kn(D,x);k!=null&&(d.push(S),f.set(S,k))}}const m=new Ue(d);return new kd(f,m,a.fieldTransforms)}function lw(n,e,t,r=!1){return Kn(t,n.V(r?4:3,e))}function Kn(n,e){if(Od(n=ne(n)))return Oa("Unsupported field value:",e,n),Nd(n,e);if(n instanceof Ai)return(function(r,s){if(!Dd(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Kn(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=te.fromDate(r);return{timestampValue:Hs(s.serializer,i)}}if(r instanceof te){const i=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hs(s.serializer,i)}}if(r instanceof nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:Zh(s.serializer,r._byteString)};if(r instanceof ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:la(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ge)return(function(a,c){const l=a instanceof Ge?a.toArray():a;return{mapValue:{fields:{[Rh]:{stringValue:Sh},[$s]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.Dc("VectorValues must only contain numeric values.");return aa(c.serializer,f)}))}}}}}})(r,s);if(ad(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${fi(r)}`)})(n,e)}function Nd(n,e){const t={};return wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,((r,s)=>{const i=Kn(s,e.yc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Od(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof nt||n instanceof Me||n instanceof ie||n instanceof Ai||n instanceof Ge||ad(n))}function Oa(n,e,t){if(!Od(t)||!yh(t)){const r=fi(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function mn(n,e,t){if((e=ne(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return Vd(n,e);throw Xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const hw=new RegExp("[~\\*/\\[\\]]");function Vd(n,e,t){if(e.search(hw)>=0)throw Xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yr(...e.split("."))._internalPath}catch{throw Xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function xd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{convertValue(e,t="none"){switch(Gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[$s].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>ue(a.doubleValue)));return new Ge(t)}convertGeoPoint(e){return new nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=mi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const t=qt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);Q(od(r),9688,{name:e});const s=new Dr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Ld{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}function Kb(...n){return new ka("arrayUnion",n)}const rl="@firebase/firestore",sl="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(mn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dw extends Zs{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Va{}class Ud extends Va{}function Yb(n,e,...t){let r=[];e instanceof Va&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof xa)).length,c=i.filter((l=>l instanceof ki)).length;if(a>1||a>0&&c>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ki extends Ud{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ki(e,t,r)}_apply(e){const t=this._parse(e);return Fd(e._query,t),new Jt(e.firestore,e.converter,Vo(e._query,t))}_parse(e){const t=Wn(e.firestore);return(function(i,a,c,l,d,f,m){let v;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){al(m,f);const D=[];for(const x of m)D.push(ol(l,i,x));v={arrayValue:{values:D}}}else v=ol(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||al(m,f),v=lw(c,a,m,f==="in"||f==="not-in");return he.create(d,f,v)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qb(n,e,t){const r=e,s=mn("where",n);return ki._create(s,r,t)}class xa extends Va{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xa(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Fd(a,l),a=Vo(a,l)})(e._query,t),new Jt(e.firestore,e.converter,Vo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class La extends Ud{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new La(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Or(i,a)})(e._query,this._field,this._direction);return new Jt(e.firestore,e.converter,L_(e._query,t))}}function Jb(n,e="asc"){const t=e,r=mn("orderBy",n);return La._create(r,t)}function ol(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xh(e)&&t.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!L.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wu(n,new L(r))}if(t instanceof ie)return wu(n,t._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fi(t)}.`)}function al(n,e){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fd(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Di(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class fw extends Ld{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}class Cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ft extends Zs{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ft._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ft._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ft._jsonSchema={type:fe("string",Ft._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ds extends Ft{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ds(this._firestore,this._userDataWriter,r.key,r,new Cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new Ds(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Ds(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:pw(c.type),doc:l,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ta.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:fe("string",hn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};const mw={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wn(e)}set(e,t,r){this._verifyNotCommitted();const s=Ot(e,this._firestore),i=Di(s.converter,t,r),a=Si(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,de.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ot(e,this._firestore);let a;return a=typeof(t=ne(t))=="string"||t instanceof Yr?Na(this._dataReader,"WriteBatch.update",i._key,t,r,s):Da(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,de.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ot(e,this._firestore);return this._mutations=this._mutations.concat(new zr(t._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ot(n,e){if((n=ne(n)).firestore!==e)throw new O(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Wn(e)}get(e){const t=Ot(e,this._firestore),r=new fw(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return M(24041);const i=s[0];if(i.isFoundDocument())return new Zs(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Zs(this._firestore,r,t._key,null,t.converter);throw M(18433,{doc:i})}))}set(e,t,r){const s=Ot(e,this._firestore),i=Di(s.converter,t,r),a=Si(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,t,r,...s){const i=Ot(e,this._firestore);let a;return a=typeof(t=ne(t))=="string"||t instanceof Yr?Na(this._dataReader,"Transaction.update",i._key,t,r,s):Da(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=Ot(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends _w{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ot(e,this._firestore),r=new Ci(this._firestore);return super.get(e).then((s=>new Ft(this._firestore,r,t._key,s._document,new Cn(!1,!1),t.converter)))}}function vw(n,e,t){n=Re(n,Ke);const r={...mw,...t};(function(a){if(a.maxAttempts<1)throw new O(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=Hn(n);return ew(s,(i=>e(new yw(n,i))),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){n=Re(n,ie);const e=Re(n.firestore,Ke),t=Hn(e);return Jv(t,n._key).then((r=>$d(e,n,r)))}function Bd(n){n=Re(n,Jt);const e=Re(n.firestore,Ke),t=Hn(e),r=new Ci(e);return Md(n._query),Xv(t,n._query).then((s=>new hn(e,r,n,s)))}function ww(n,e,t){n=Re(n,ie);const r=Re(n.firestore,Ke),s=Di(n.converter,e,t),i=Wn(r);return Qr(r,[Si(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,de.none())])}function Xb(n,e,t,...r){n=Re(n,ie);const s=Re(n.firestore,Ke),i=Wn(s);let a;return a=typeof(e=ne(e))=="string"||e instanceof Yr?Na(i,"updateDoc",n._key,e,t,r):Da(i,"updateDoc",n._key,e),Qr(s,[a.toMutation(n._key,de.exists(!0))])}function Zb(n){return Qr(Re(n.firestore,Ke),[new zr(n._key,de.none())])}function eI(n,e){const t=Re(n.firestore,Ke),r=pn(n),s=Di(n.converter,e),i=Wn(n.firestore);return Qr(t,[Si(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,de.exists(!1))]).then((()=>r))}function tI(n,...e){var d,f,m;n=ne(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||il(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(il(e[r])){const v=e[r];e[r]=(d=v.next)==null?void 0:d.bind(v),e[r+1]=(f=v.error)==null?void 0:f.bind(v),e[r+2]=(m=v.complete)==null?void 0:m.bind(v)}let i,a,c;if(n instanceof ie)a=Re(n.firestore,Ke),c=gi(n._key.path),i={next:v=>{e[r]&&e[r]($d(a,n,v))},error:e[r+1],complete:e[r+2]};else{const v=Re(n,Jt);a=Re(v.firestore,Ke),c=v._query;const S=new Ci(a);i={next:D=>{e[r]&&e[r](new hn(a,S,v,D))},error:e[r+1],complete:e[r+2]},Md(n._query)}const l=Hn(a);return Qv(l,c,s,i)}function Qr(n,e){const t=Hn(n);return Zv(t,e)}function $d(n,e,t){const r=t.docs.get(e._key),s=new Ci(n);return new Ft(n,s,e._key,r,new Cn(t.hasPendingWrites,t.fromCache),e.converter)}function qd(n){return n=Re(n,Ke),Hn(n),new gw(n,(e=>Qr(n,e)))}(function(e,t=!0){Qg(vn),Bt(new mt("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ke(new Zg(r.getProvider("auth-internal")),new n_(a,r.getProvider("app-check-internal")),v_(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Be(rl,sl,e),Be(rl,sl,"esm2020")})();var Ew="firebase",Tw="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(Ew,Tw,"app");function zd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bw=zd,Gd=new Ur("auth","Firebase",zd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Xo("@firebase/auth");function Iw(n,...e){ei.logLevel<=H.WARN&&ei.warn(`Auth (${vn}): ${n}`,...e)}function Ns(n,...e){ei.logLevel<=H.ERROR&&ei.error(`Auth (${vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw Ma(n,...e)}function rt(n,...e){return Ma(n,...e)}function Hd(n,e,t){const r={...bw(),[e]:t};return new Ur("auth","Firebase",r).create(e,{appName:n.name})}function pt(n){return Hd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ma(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gd.create(n,...e)}function F(n,e,...t){if(!n)throw Ma(e,...t)}function dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ns(e),new Error(e)}function vt(n,e){n||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Aw(){return cl()==="http:"||cl()==="https:"}function cl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Aw()||Cm()||"connection"in navigator)?navigator.onLine:!0}function Sw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rm()||km()}get(){return Rw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kw=new Jr(3e4,6e4);function wt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Et(n,e,t,r,s={}){return Kd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Fr({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return Pm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&yn(n.emulatorConfig.host)&&(d.credentials="include"),Wd.fetch()(await Yd(n,n.config.apiHost,t,c),d)})}async function Kd(n,e,t){n._canInitEmulator=!1;const r={...Pw,...e};try{const s=new Nw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw bs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw bs(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw bs(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hd(n,f,d);Ye(n,f)}}catch(s){if(s instanceof ut)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Xr(n,e,t,r,s={}){const i=await Et(n,e,t,r,s);return"mfaPendingCredential"in i&&Ye(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ua(n.config,s):`${n.config.apiScheme}://${s}`;return Cw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Dw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),kw.get())})}}function bs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=rt(n,e,r);return s.customData._tokenResponse=t,s}function ul(n){return n!==void 0&&n.enterprise!==void 0}class Ow{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vw(n,e){return Et(n,"GET","/v2/recaptchaConfig",wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lw(n,e=!1){const t=ne(n),r=await t.getIdToken(e),s=Fa(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ar(yo(s.auth_time)),issuedAtTime:Ar(yo(s.iat)),expirationTime:Ar(yo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yo(n){return Number(n)*1e3}function Fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zl(t);return s?JSON.parse(s):(Ns("Failed to decode base64 JWT payload"),null)}catch(s){return Ns("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ll(n){const e=Fa(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ut&&Mw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Mw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){var m;const e=n.auth,t=await n.getIdToken(),r=await xr(n,ti(e,{idToken:t}));F(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Qd(s.providerUserInfo):[],a=jw(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ho(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Fw(n){const e=ne(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e){const t=await Kd(n,{},async()=>{const r=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Yd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&yn(n.emulatorConfig.host)&&(l.credentials="include"),Wd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $w(n,e){return Et(n,"POST","/v2/accounts:revokeToken",wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ll(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=ll(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new On;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Uw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ho(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await xr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lw(this,e)}reload(){return Fw(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await xr(this,xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:S,providerData:D,stsTokenManager:x}=t;F(m&&x,e,"internal-error");const k=On.fromJSON(this.name,x);F(typeof m=="string",e,"internal-error"),Pt(r,e.name),Pt(s,e.name),F(typeof v=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),Pt(i,e.name),Pt(a,e.name),Pt(c,e.name),Pt(l,e.name),Pt(d,e.name),Pt(f,e.name);const q=new $e({uid:m,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:d,lastLoginAt:f});return D&&Array.isArray(D)&&(q.providerData=D.map(W=>({...W}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new On;s.updateFromServerResponse(t);const i=new $e({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new On;c.updateFromIdToken(r);const l=new $e({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ho(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function ft(n){vt(n instanceof Function,"Expected a class definition");let e=hl.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jd.type="NONE";const dl=Jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e,t){return`firebase:${n}:${e}:${t}`}class Vn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Os(this.userKey,s.apiKey,i),this.fullPersistenceKey=Os("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vn(ft(dl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ft(dl);const a=Os(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const v=await ti(e,{idToken:f}).catch(()=>{});if(!v)break;m=await $e._fromGetAccountInfoResponse(e,v,f)}else m=$e._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vn(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Vn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rf(e))return"Blackberry";if(sf(e))return"Webos";if(Zd(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(nf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xd(n=Se()){return/firefox\//i.test(n)}function Zd(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(n=Se()){return/crios\//i.test(n)}function tf(n=Se()){return/iemobile/i.test(n)}function nf(n=Se()){return/android/i.test(n)}function rf(n=Se()){return/blackberry/i.test(n)}function sf(n=Se()){return/webos/i.test(n)}function ja(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qw(n=Se()){var e;return ja(n)&&!!((e=window.navigator)!=null&&e.standalone)}function zw(){return Dm()&&document.documentMode===10}function of(n=Se()){return ja(n)||nf(n)||sf(n)||rf(n)||/windows phone/i.test(n)||tf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,e=[]){let t;switch(n){case"Browser":t=fl(Se());break;case"Worker":t=`${fl(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e={}){return Et(n,"GET","/v2/passwordPolicy",wt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=6;class Kw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ww,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new Gw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(pt(this));const t=e?ne(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hw(this),t=new Kw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $w(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Iw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xt(n){return ne(n)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qw(n){Ni=n}function cf(n){return Ni.loadJS(n)}function Jw(){return Ni.recaptchaEnterpriseScript}function Xw(){return Ni.gapiScript}function Zw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eE{constructor(){this.enterprise=new tE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nE="recaptcha-enterprise",uf="NO_RECAPTCHA";class rE{constructor(e){this.type=nE,this.auth=Xt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Vw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ow(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;ul(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(uf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eE().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&ul(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Jw();l.length!==0&&(l+=c),cf(l).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ml(n,e,t,r=!1,s=!1){const i=new rE(n);let a;if(s)a=uf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ri(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ml(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ml(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n,e){const t=jr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(jt(i,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function iE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oE(n,e,t){const r=Xt(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lf(e),{host:a,port:c}=aE(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(jt(d,r.config.emulator)&&jt(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,yn(a)?hi(`${i}//${a}${l}`):cE()}function lf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aE(n){const e=lf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:gl(a)}}}function gl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function uE(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(n,e){return Xr(n,"POST","/v1/accounts:signInWithPassword",wt(n,e))}async function hf(n,e){return Et(n,"POST","/v1/accounts:sendOobCode",wt(n,e))}async function hE(n,e){return hf(n,e)}async function dE(n,e){return hf(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,e))}async function pE(n,e){return Xr(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ba{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Lr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,t,"signInWithPassword",lE);case"emailLink":return fE(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ri(e,r,"signUpPassword",uE);case"emailLink":return pE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,e){return Xr(n,"POST","/v1/accounts:signInWithIdp",wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="http://localhost";class gn extends Ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new gn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:mE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _E(n){const e=pr(mr(n)).link,t=e?pr(mr(e)).deep_link_id:null,r=pr(mr(n)).deep_link_id;return(r?pr(mr(r)).link:null)||r||t||e||n}class $a{constructor(e){const t=pr(mr(e)),r=t.apiKey??null,s=t.oobCode??null,i=gE(t.mode??null);F(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=_E(e);try{return new $a(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(e,t){return Lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=$a.parseLink(t);return F(r,"argument-error"),Lr._fromEmailAndCode(e,r.code,r.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Zr{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Zr{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Zr{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(n,e){return Xr(n,"POST","/v1/accounts:signUp",wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await $e._fromIdTokenResponse(e,r,s),a=_l(r);return new _n({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_l(r);return new _n({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _l(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ut{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new si(e,t,r,s)}}function ff(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,i,e,r):i})}async function vE(n,e,t=!1){const r=await xr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _n._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(pt(r));const s="reauthenticate";try{const i=await xr(n,ff(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=Fa(i.idToken);F(a,r,"internal-error");const{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),_n._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n,e,t=!1){if(Ve(n.app))return Promise.reject(pt(n));const r="signIn",s=await ff(n,r,e),i=await _n._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function EE(n,e){return pf(Xt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n){const e=Xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nI(n,e,t){const r=Xt(n);await ri(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",dE)}async function rI(n,e,t){if(Ve(n.app))return Promise.reject(pt(n));const r=Xt(n),a=await ri(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mf(n),l}),c=await _n._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function sI(n,e,t){return Ve(n.app)?Promise.reject(pt(n)):EE(ne(n),Yn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mf(n),r})}async function TE(n,e){const t=ne(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await hE(t.auth,s);i!==n.email&&await n.reload()}function bE(n,e,t,r){return ne(n).onIdTokenChanged(e,t,r)}function IE(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function AE(n,e,t,r){return ne(n).onAuthStateChanged(e,t,r)}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=1e3,SE=10;class _f extends gf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);zw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},RE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_f.type="LOCAL";const PE=_f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends gf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yf.type="SESSION";const vf=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Oi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await CE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=qa("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function DE(n){st().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function NE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function VE(){return wf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="firebaseLocalStorageDb",xE=1,oi="firebaseLocalStorage",Tf="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vi(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function LE(){const n=indexedDB.deleteDatabase(Ef);return new es(n).toPromise()}function Wo(){const n=indexedDB.open(Ef,xE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:Tf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?e(r):(r.close(),await LE(),e(await Wo()))})})}async function yl(n,e,t){const r=Vi(n,!0).put({[Tf]:e,value:t});return new es(r).toPromise()}async function ME(n,e){const t=Vi(n,!1).get(e),r=await new es(t).toPromise();return r===void 0?null:r.value}function vl(n,e){const t=Vi(n,!0).delete(e);return new es(t).toPromise()}const UE=800,FE=3;class bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>FE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oi._getInstance(VE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await NE(),!this.activeServiceWorker)return;this.sender=new kE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wo();return await yl(e,ii,"1"),await vl(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ME(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vi(s,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bf.type="LOCAL";const jE=bf;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n,e){return e?ft(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $E(n){return pf(n.auth,new za(n),n.bypassAuthState)}function qE(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),wE(t,new za(n),n.bypassAuthState)}async function zE(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),vE(t,new za(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $E;case"linkViaPopup":case"linkViaRedirect":return zE;case"reauthViaPopup":case"reauthViaRedirect":return qE;default:Ye(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new Jr(2e3,1e4);class kn extends If{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GE.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="pendingRedirect",Vs=new Map;class WE extends If{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{const r=await KE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KE(n,e){const t=JE(e),r=QE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function YE(n,e){Vs.set(n._key(),e)}function QE(n){return ft(n._redirectPersistence)}function JE(n){return Os(HE,n.config.apiKey,n.name)}async function XE(n,e,t=!1){if(Ve(n.app))return Promise.reject(pt(n));const r=Xt(n),s=BE(r,e),a=await new WE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=600*1e3;class eT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Af(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZE&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Af({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Af(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sT=/^https?/;async function iT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nT(n);for(const t of e)try{if(oT(t))return}catch{}Ye(n,"unauthorized-domain")}function oT(n){const e=Go(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!sT.test(t))return!1;if(rT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Jr(3e4,6e4);function El(){const n=st().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cT(n){return new Promise((e,t)=>{var s,i,a;function r(){El(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{El(),t(rt(n,"network-request-failed"))},timeout:aT.get()})}if((i=(s=st().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=st().gapi)!=null&&a.load)r();else{const c=Zw("iframefcb");return st()[c]=()=>{gapi.load?r():t(rt(n,"network-request-failed"))},cf(`${Xw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw xs=null,e})}let xs=null;function uT(n){return xs=xs||cT(n),xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Jr(5e3,15e3),hT="__/auth/iframe",dT="emulator/auth/iframe",fT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ua(e,dT):`https://${n.config.authDomain}/${hT}`,r={apiKey:e.apiKey,appName:n.name,v:vn},s=pT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Fr(r).slice(1)}`}async function gT(n){const e=await uT(n),t=st().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:mT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=rt(n,"network-request-failed"),c=st().setTimeout(()=>{i(a)},lT.get());function l(){st().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yT=500,vT=600,wT="_blank",ET="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TT(n,e,t,r=yT,s=vT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={..._T,width:r.toString(),height:s.toString(),top:i,left:a},d=Se().toLowerCase();t&&(c=ef(d)?wT:t),Xd(d)&&(e=e||ET,l.scrollbars="yes");const f=Object.entries(l).reduce((v,[S,D])=>`${v}${S}=${D},`,"");if(qw(d)&&c!=="_self")return bT(e||"",c),new Tl(null);const m=window.open(e||"",c,f);F(m,n,"popup-blocked");try{m.focus()}catch{}return new Tl(m)}function bT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="__/auth/handler",AT="emulator/auth/handler",RT=encodeURIComponent("fac");async function bl(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vn,eventId:s};if(e instanceof df){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Um(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Zr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${RT}=${encodeURIComponent(l)}`:"";return`${ST(n)}?${Fr(c).slice(1)}${d}`}function ST({config:n}){return n.emulator?Ua(n,AT):`https://${n.authDomain}/${IT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="webStorageSupport";class PT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=XE,this._overrideRedirectResult=YE}async _openPopup(e,t,r,s){var a;vt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await bl(e,t,r,Go(),s);return TT(e,i,qa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bl(e,t,r,Go(),s);return DE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await gT(e),r=new eT(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vo,{type:vo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[vo];i!==void 0&&t(!!i),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return of()||Zd()||ja()}}const CT=PT;var Il="@firebase/auth",Al="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NT(n){Bt(new mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(n)},d=new Yw(r,s,i,l);return iE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Bt(new mt("auth-internal",e=>{const t=Xt(e.getProvider("auth").getImmediate());return(r=>new kT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Il,Al,DT(n)),Be(Il,Al,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=300,VT=nh("authIdTokenMaxAge")||OT;let Rl=null;const xT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>VT)return;const s=t==null?void 0:t.token;Rl!==s&&(Rl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LT(n=di()){const e=jr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sE(n,{popupRedirectResolver:CT,persistence:[jE,PE,vf]}),r=nh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=xT(i.toString());IE(t,a,()=>a(t.currentUser)),bE(t,c=>a(c))}}const s=eh("auth");return s&&oE(t,`http://${s}`),t}function MT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Qw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",MT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NT("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="firebasestorage.googleapis.com",UT="storageBucket",FT=120*1e3,jT=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends ut{constructor(e,t,r=0){super(wo(e),`Firebase Storage: ${t} (${wo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function wo(n){return"storage/"+n}function BT(){const n="An unknown error occurred, please check the error payload for server response.";return new lt(at.UNKNOWN,n)}function $T(){return new lt(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qT(){return new lt(at.CANCELED,"User canceled the upload/download.")}function zT(n){return new lt(at.INVALID_URL,"Invalid URL '"+n+"'.")}function GT(n){return new lt(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Sl(n){return new lt(at.INVALID_ARGUMENT,n)}function Sf(){return new lt(at.APP_DELETED,"The Firebase app was deleted.")}function HT(n){return new lt(at.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=qe.makeFromUrl(e,t)}catch{return new qe(e,"")}if(r.path==="")return r;throw GT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Z){Z.path.charAt(Z.path.length-1)==="/"&&(Z.path_=Z.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(Z){Z.path_=decodeURIComponent(Z.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${s}/o${v}`,"i"),D={bucket:1,path:3},x=t===Rf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",q=new RegExp(`^https?://${x}/${s}/${k}`,"i"),K=[{regex:c,indices:l,postModify:i},{regex:S,indices:D,postModify:d},{regex:q,indices:{bucket:1,path:2},postModify:d}];for(let Z=0;Z<K.length;Z++){const re=K[Z],oe=re.regex.exec(e);if(oe){const E=oe[re.indices.bucket];let g=oe[re.indices.path];g||(g=""),r=new qe(E,g),re.postModify(r);break}}if(r==null)throw zT(e);return r}}class WT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let d=!1;function f(...k){d||(d=!0,e.apply(null,k))}function m(k){s=setTimeout(()=>{s=null,n(S,l())},k)}function v(){i&&clearTimeout(i)}function S(k,...q){if(d){v();return}if(k){v(),f.call(null,k,...q);return}if(l()||a){v(),f.call(null,k,...q);return}r<64&&(r*=2);let K;c===1?(c=2,K=0):K=(r+Math.random())*1e3,m(K)}let D=!1;function x(k){D||(D=!0,v(),!d&&(s!==null?(k||(c=2),clearTimeout(s),m(0)):k||(c=1)))}return m(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function YT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return n!==void 0}function Pl(n,e,t,r){if(r<e)throw Sl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sl(`Invalid value for '${n}'. Expected ${t} or less.`)}function JT(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ai;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ai||(ai={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,r,s,i,a,c,l,d,f,m,v=!0,S=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=v,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,x)=>{this.resolve_=D,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Is(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ai.NO_ERROR,l=i.getStatus();if(!c||XT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ai.ABORT;r(!1,new Is(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Is(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());QT(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=BT();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?Sf():qT();a(l)}else{const l=$T();a(l)}};this.canceled_?t(!1,new Is(!1,null,!0)):this.backoffId_=KT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Is{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function eb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function tb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sb(n,e,t,r,s,i,a=!0,c=!1){const l=JT(n.urlParams),d=n.url+l,f=Object.assign({},n.headers);return nb(f,e),eb(f,t),tb(f,i),rb(f,r),new ZT(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ob(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this._service=e,t instanceof qe?this._location=t:this._location=qe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ci(e,t)}get root(){const e=new qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ob(this._location.path)}get storage(){return this._service}get parent(){const e=ib(this._location.path);if(e===null)return null;const t=new qe(this._location.bucket,e);return new ci(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw HT(e)}}function Cl(n,e){const t=e==null?void 0:e[UT];return t==null?null:qe.makeFromBucketSpec(t,n)}function ab(n,e,t,r={}){n.host=`${e}:${t}`;const s=yn(e);s&&hi(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:rh(i,n.app.options.projectId))}class cb{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Rf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FT,this._maxUploadRetryTime=jT,this._requests=new Set,s!=null?this._bucket=qe.makeFromBucketSpec(s,this._host):this._bucket=Cl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qe.makeFromBucketSpec(this._url,e):this._bucket=Cl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ci(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new WT(Sf());{const a=sb(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const kl="@firebase/storage",Dl="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="storage";function ub(n=di(),e){n=ne(n);const r=jr(n,Pf).getImmediate({identifier:e}),s=Jo("storage");return s&&lb(r,...s),r}function lb(n,e,t,r={}){ab(n,e,t,r)}function hb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new cb(t,r,s,e,vn)}function db(){Bt(new mt(Pf,hb,"PUBLIC").setMultipleInstances(!0)),Be(kl,Dl,""),Be(kl,Dl,"esm2020")}db();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ve(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="us-central1";class pb{constructor(e,t,r,s,i=Ko,a=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new fb(e,t,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=Ko}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function mb(n,e,t){const r=yn(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&hi(n.emulatorOrigin+"/backends")}const Nl="@firebase/functions",Ol="0.13.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="auth-internal",_b="app-check-internal",yb="messaging-internal";function vb(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(gb),a=t.getProvider(yb),c=t.getProvider(_b);return new pb(s,i,a,c,r)};Bt(new mt(Cf,e,"PUBLIC").setMultipleInstances(!0)),Be(Nl,Ol,n),Be(Nl,Ol,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(n=di(),e=Ko){const r=jr(ne(n),Cf).getImmediate({identifier:e}),s=Jo("functions");return s&&Eb(r,...s),r}function Eb(n,e,t){mb(ne(n),e,t)}vb();const Tb={apiKey:"AIzaSyB3C0Hw-Xia5K--nU6Dw0LvE3AW7RXYr6Q",authDomain:"groove-d9207.firebaseapp.com",projectId:"groove-d9207",storageBucket:"groove-d9207.firebasestorage.app",messagingSenderId:"180966594330",appId:"1:180966594330:web:84d6322e3ff9eb6d30bea3",measurementId:"G-3RCRES4GQR"},xi=oh(Tb),Mr=LT(xi),He=sw(xi);ub(xi);wb(xi);async function Yo(n,e){try{const t=pn(He,"products",n),r=await jd(t);if(!r.exists())return console.warn(`⚠️  Producto no encontrado: ${n}`),{available:!1,message:"Producto no registrado en el inventario. Contacta al soporte.",currentStock:0};const i=r.data().stock??0,a=i>=e,c=a?`✅ Stock disponible: ${i}`:`❌ Stock insuficiente. Disponibles: ${i}, Solicitados: ${e}`;return console.log(`📦 Stock check [${n}]: ${c}`),{available:a,message:c,currentStock:i}}catch(t){return console.error(`🔥 Error checking stock for ${n}:`,t),{available:!1,message:"Error verificando el stock. Por favor intenta de nuevo.",currentStock:0}}}async function iI(n){const e=[],t=[];try{console.log(`🔍 Validando ${n.length} items de carrito...`);const r=n.map(async i=>{const a=await Yo(i.id,i.quantity),c={id:i.id,name:i.name,requested:i.quantity,available:a.currentStock,valid:a.available};return t.push(c),a.available||e.push(`${i.name}: ${a.message}`),a.available});await Promise.all(r);const s=e.length===0;return console.log(s?"✅ Validación EXITOSA - Todos los items tienen stock":`❌ Validación FALLIDA - ${e.length} items sin stock suficiente`),{valid:s,errors:e,itemDetails:t}}catch(r){return console.error("🔥 Error validating order stock:",r),{valid:!1,errors:["Error fatal al validar el stock. Por favor intenta de nuevo."],itemDetails:t}}}async function oI(n){if(!n||n.length===0)return{success:!1,message:"No hay items para procesar"};try{console.log(`⚙️  Iniciando transacción de decremento de stock para ${n.length} items...`);const e=await vw(He,async t=>{var i;console.log("📖 FASE 1: Leyendo stock actual de productos...");const r=await Promise.all(n.map(a=>t.get(pn(He,"products",a.id)))),s=[];for(let a=0;a<n.length;a++){const c=n[a],l=r[a];if(!l.exists())throw new Error(`❌ ROLLBACK: Producto '${c.name}' (${c.id}) no existe en inventario. Compra cancelada para evitar inconsistencias.`);const f=l.data().stock??0;if(f<c.quantity)throw new Error(`❌ ROLLBACK: Stock insuficiente para '${c.name}'. Disponible: ${f}, Solicitado: ${c.quantity}. Compra completamente cancelada.`);const m=f-c.quantity;s.push({ref:pn(He,"products",c.id),newStock:m,originalStock:f,itemName:c.name}),console.log(`✅ Validado: ${c.name} | Stock: ${f} → ${m}`)}console.log("✏️  FASE 2: Actualizando stock de forma ATÓMICA...");for(const a of s)t.update(a.ref,{stock:a.newStock,lastUpdated:new Date}),console.log(`📉 ${a.itemName}: ${a.originalStock} - ${(i=n.find(c=>c.id===a.ref.id))==null?void 0:i.quantity} = ${a.newStock}`);return{itemsProcessed:s.length,summary:s}});return console.log(`✅ TRANSACCIÓN EXITOSA: ${e.itemsProcessed} productos actualizados atomicamente`),{success:!0,message:`✅ Stock actualizado exitosamente para ${e.itemsProcessed} productos`,itemsProcessed:e.itemsProcessed,timestamp:new Date}}catch(e){const t=e instanceof Error?e.message:String(e);return console.error(`🔥 TRANSACCIÓN FALLIDA: ${t}`),{success:!1,message:`❌ Error actualizando inventario: ${t}`,timestamp:new Date}}}const kf={CART_CLEARED:"cart:cleared",CART_UPDATED:"cart:updated"},Df=(n,e,t,r)=>{const s=e.reduce((a,c)=>a+c.quantity,0),i=new CustomEvent(n,{detail:{items:e,totalItems:s,action:t,changedItemId:r}});window.dispatchEvent(i)},bb=()=>{const n="cart_session_initialized",e="cart_items";if(!sessionStorage.getItem(n))return sessionStorage.setItem(n,"true"),localStorage.removeItem(e),[];try{const t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}},Ib=n=>{try{localStorage.setItem("cart_items",JSON.stringify(n))}catch(e){console.error("Error persisting cart:",e)}},fr=async n=>{const e=n.reduce((s,i)=>s+i.quantity,0),t=n.reduce((s,i)=>s+i.price*i.quantity,0);console.log(`📊 Cart Sync: ${n.length} productos, ${e} items, Total: $${(t/100).toFixed(2)}`),Ib(n),console.log("💾 Guardado en localStorage");const r=Mr.currentUser;if(r)try{const s=r.uid;await ww(pn(He,"carts",s),{items:n,totalItems:e,totalPrice:t,updatedAt:new Date,userId:s},{merge:!0}),console.log(`☁️  Sincronizado con Firebase (${s})`)}catch(s){console.error("⚠️  Error sincronizando con Firebase:",s)}return Df(kf.CART_UPDATED,n,"update"),{totalItems:e,totalPrice:t}},Nf=Ll((n,e)=>({items:bb(),totalItems:0,totalPrice:0,isInitialized:!0,setCart:async t=>{const{totalItems:r,totalPrice:s}=await fr(t);n({items:t,totalItems:r,totalPrice:s})},addItem:async(t,r=1)=>{const s=e().items,i=s.find(v=>v.id===t.id),a=i?i.quantity:0,c=a+r;console.log(`
    🛒 AGREGAR ITEM - VALIDACIÓN ACUMULATIVA
    ═══════════════════════════════════════════
    Producto: ${t.name} (${t.id})
    Ya en carrito: ${a}
    Intenta agregar: ${r}
    Total acumulado: ${c}`);const l=await Yo(t.id,c);if(!l.available){console.error(`❌ FALLO - ${l.message}`);return}console.log(`✅ ÉXITO - Stock validado: ${l.currentStock} disponibles`);let d;i?d=s.map(v=>v.id===t.id?{...v,quantity:c}:v):d=[...s,{...t,quantity:r}];const{totalItems:f,totalPrice:m}=await fr(d);n({items:d,totalItems:f,totalPrice:m})},removeItem:async t=>{const s=e().items.filter(c=>c.id!==t);console.log(`🗑️  Removiendo producto: ${t}`);const{totalItems:i,totalPrice:a}=await fr(s);n({items:s,totalItems:i,totalPrice:a})},updateQuantity:async(t,r)=>{if(r<=0){await e().removeItem(t);return}const s=e().items,i=s.find(f=>f.id===t);if(!i)return;console.log(`📝 Actualizando cantidad: ${i.name} → ${r}`);const a=await Yo(t,r);if(!a.available){console.error(`❌ ${a.message}`);return}const c=s.map(f=>f.id===t?{...f,quantity:r}:f),{totalItems:l,totalPrice:d}=await fr(c);n({items:c,totalItems:l,totalPrice:d})},clearCart:async()=>{console.log("🧹 Vaciando carrito...");const{totalItems:t,totalPrice:r}=await fr([]);n({items:[],totalItems:0,totalPrice:0}),Df(kf.CART_CLEARED,[],"clear"),console.log("✅ Carrito vaciado")}})),ui=Ll(n=>({currentUser:null,isLoading:!0,isAuthenticated:!1,setUser:e=>n({currentUser:e,isAuthenticated:!!e,isLoading:!1}),setLoading:e=>n({isLoading:e}),logout:()=>n({currentUser:null,isAuthenticated:!1})})),Ls=[{id:"p1",name:"The Beatles - Abbey Road",slug:"the-beatles-abbey-road-vinyl",description:"El álbum icónico de The Beatles, remasterizado en vinilo de 180g.",category:"music",subcategory:"vinyl",brand:"Apple Records",artist:"The Beatles",album:"Abbey Road",genre:["Rock","Pop"],releaseYear:1969,images:["/images/music/vinyl/p1-01.webp","/images/music/vinyl/p1-02.webp","/images/music/vinyl/p1-03.webp"],price:3499,compareAtPrice:null,currency:"USD",stock:15,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:234,tags:["vinilo","clásico","180g"]},{id:"p2",name:"Miles Davis - Kind of Blue",slug:"miles-davis-kind-of-blue-vinyl",description:"La obra maestra de Miles Davis que definió el jazz modal.",category:"music",subcategory:"vinyl",brand:"Columbia Records",artist:"Miles Davis",album:"Kind of Blue",genre:["Jazz"],releaseYear:1959,images:["/images/music/vinyl/p2-01.webp","/images/music/vinyl/p2-02.webp","/images/music/vinyl/p2-03.webp"],price:2999,compareAtPrice:null,currency:"USD",stock:8,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:189,tags:["vinilo","jazz","modal"]},{id:"p3",name:"David Bowie - The Rise and Fall of Ziggy Stardust",slug:"david-bowie-ziggy-stardust-vinyl",description:"La obra maestra de Bowie que definió el glam rock. Edición remasterizada.",category:"music",subcategory:"vinyl",brand:"RCA Records",artist:"David Bowie",album:"The Rise and Fall of Ziggy Stardust",genre:["Rock","Glam"],releaseYear:1972,images:["/images/music/vinyl/p3-01.webp","/images/music/vinyl/p3-02.webp","/images/music/vinyl/p3-03.webp"],price:3699,compareAtPrice:null,currency:"USD",stock:12,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:156,tags:["vinilo","rock","glam"]},{id:"p4",name:"Pink Floyd - The Dark Side of the Moon",slug:"pink-floyd-dark-side-moon-vinyl",description:"Obra maestra del rock progresivo. Edición 50 aniversario en vinilo.",category:"music",subcategory:"vinyl",brand:"Harvest",artist:"Pink Floyd",album:"The Dark Side of the Moon",genre:["Rock"],releaseYear:1973,images:["/images/music/vinyl/p4-01.webp","/images/music/vinyl/p4-02.webp","/images/music/vinyl/p4-03.webp"],price:3999,compareAtPrice:null,currency:"USD",stock:9,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:421,tags:["vinilo","rock","progresivo"]},{id:"p5",name:"Led Zeppelin - IV",slug:"led-zeppelin-iv-vinyl",description:"El viaje épico de Led Zeppelin hacia la mitología del rock. Vinilo remasterizado.",category:"music",subcategory:"vinyl",brand:"Atlantic Records",artist:"Led Zeppelin",album:"IV",genre:["Rock","Blues"],releaseYear:1971,images:["/images/music/vinyl/p5-01.webp","/images/music/vinyl/p5-02.webp","/images/music/vinyl/p5-03.webp"],price:3299,compareAtPrice:null,currency:"USD",stock:14,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.9,reviewCount:387,tags:["vinilo","rock","blues"]},{id:"p6",name:"The Rolling Stones - Sticky Fingers",slug:"rolling-stones-sticky-fingers-vinyl",description:"Quintaesencia del rock and roll británico. Edición limitada con zipper de diseño.",category:"music",subcategory:"vinyl",brand:"Rolling Stones Records",artist:"The Rolling Stones",album:"Sticky Fingers",genre:["Rock","Blues"],releaseYear:1971,images:["/images/music/vinyl/p6-01.webp","/images/music/vinyl/p6-02.webp","/images/music/vinyl/p6-03.webp"],price:3599,compareAtPrice:null,currency:"USD",stock:11,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:198,tags:["vinilo","rock","blues"]},{id:"p7",name:"Fleetwood Mac - Rumours",slug:"fleetwood-mac-rumours-vinyl",description:"Fleetwood Mac en su mejor momento. Uno de los vinilos más vendidos de todos los tiempos.",category:"music",subcategory:"vinyl",brand:"Warner Bros",artist:"Fleetwood Mac",album:"Rumours",genre:["Rock","Pop"],releaseYear:1977,images:["/images/music/vinyl/p7-01.webp","/images/music/vinyl/p7-02.webp","/images/music/vinyl/p7-03.webp"],price:2799,compareAtPrice:null,currency:"USD",stock:20,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:312,tags:["vinilo","rock","clásico"]},{id:"p8",name:"Michael Jackson - Thriller",slug:"michael-jackson-thriller-vinyl",description:"El álbum más vendido de todos los tiempos. Ahora en vinilo de 180g.",category:"music",subcategory:"vinyl",brand:"Epic Records",artist:"Michael Jackson",album:"Thriller",genre:["Pop","Soul"],releaseYear:1982,images:["/images/music/vinyl/p8-01.webp","/images/music/vinyl/p8-02.webp","/images/music/vinyl/p8-03.webp"],price:3199,compareAtPrice:null,currency:"USD",stock:18,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:267,tags:["vinilo","pop","soul"]},{id:"p9",name:"Nirvana - Nevermind",slug:"nirvana-nevermind-vinyl",description:"El álbum que cambió la música para siempre. Edición de lujo en vinilo de 180g.",category:"music",subcategory:"vinyl",brand:"DGC Records",artist:"Nirvana",album:"Nevermind",genre:["Grunge","Rock"],releaseYear:1991,images:["/images/music/vinyl/p9-01.webp","/images/music/vinyl/p9-02.webp","/images/music/vinyl/p9-03.webp"],price:3899,compareAtPrice:null,currency:"USD",stock:16,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:301,tags:["vinilo","grunge","rock"]},{id:"p10",name:"Bob Dylan - Highway 61 Revisited",slug:"bob-dylan-highway-61-revisited-vinyl",description:"La obra maestra de Dylan. El día que fue eléctrico. Vinilo remasterizado 180g.",category:"music",subcategory:"vinyl",brand:"Columbia Records",artist:"Bob Dylan",album:"Highway 61 Revisited",genre:["Rock","Folk"],releaseYear:1965,images:["/images/music/vinyl/p10-01.webp","/images/music/vinyl/p10-02.webp","/images/music/vinyl/p10-03.webp"],price:2899,compareAtPrice:null,currency:"USD",stock:13,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:245,tags:["vinilo","rock","folk"]},{id:"p201",name:"Radiohead - OK Computer",slug:"radiohead-ok-computer-cd",description:"Radiohead redefinió el rock alternativo con este álbum revolucionario.",category:"music",subcategory:"cd",brand:"Parlophone",artist:"Radiohead",album:"OK Computer",genre:["Rock","Indie"],releaseYear:1997,images:["/images/music/cd/p201-01.webp","/images/music/cd/p201-02.webp","/images/music/cd/p201-03.webp"],price:1499,compareAtPrice:null,currency:"USD",stock:25,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:198,tags:["cd","alternativo"]},{id:"p202",name:"The Beatles - The White Album",slug:"the-beatles-white-album-cd",description:"El doble álbum blanco de The Beatles. Colección definitiva.",category:"music",subcategory:"cd",brand:"Apple Records",artist:"The Beatles",album:"The White Album",genre:["Rock","Pop"],releaseYear:1968,images:["/images/music/cd/p202-01.webp","/images/music/cd/p202-02.webp","/images/music/cd/p202-03.webp"],price:1699,compareAtPrice:null,currency:"USD",stock:22,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:234,tags:["cd","beatles"]},{id:"p203",name:"The Beatles - Sgt. Pepper's Lonely Hearts Club Band",slug:"beatles-sgt-pepper-cd",description:"El álbum que revolucionó la música pop en 1967. Sonido psicodélico pionero.",category:"music",subcategory:"cd",brand:"Parlophone",artist:"The Beatles",album:"Sgt. Pepper's",genre:["Rock","Pop"],releaseYear:1967,images:["/images/music/cd/p203-01.webp","/images/music/cd/p203-02.webp","/images/music/cd/p203-03.webp"],price:1599,compareAtPrice:null,currency:"USD",stock:19,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:287,tags:["cd","psicodelike"]},{id:"p204",name:"The Beatles - Revolver",slug:"the-beatles-revolver-cd",description:"El álbum que preparó el camino para Sgt. Pepper's. Innovación experimental.",category:"music",subcategory:"cd",brand:"Parlophone",artist:"The Beatles",album:"Revolver",genre:["Rock","Pop"],releaseYear:1966,images:["/images/music/cd/p204-01.webp","/images/music/cd/p204-02.webp","/images/music/cd/p204-03.webp"],price:1499,compareAtPrice:null,currency:"USD",stock:20,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:210,tags:["cd","experimental"]},{id:"p205",name:"Pink Floyd - Wish You Were Here",slug:"pink-floyd-wish-you-were-here-cd",description:"Homenaje póstumo a Syd Barrett. Obra de arte sonoro absoluta.",category:"music",subcategory:"cd",brand:"Harvest",artist:"Pink Floyd",album:"Wish You Were Here",genre:["Rock","Progressive"],releaseYear:1975,images:["/images/music/cd/p205-01.webp","/images/music/cd/p205-02.webp","/images/music/cd/p205-03.webp"],price:1699,compareAtPrice:null,currency:"USD",stock:17,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:256,tags:["cd","progresivo"]},{id:"p206",name:"Queen - Greatest Hits (Bohemian Rhapsody)",slug:"queen-greatest-hits-cd",description:"Compilación de los mayores éxitos de Queen. Incluye Bohemian Rhapsody.",category:"music",subcategory:"cd",brand:"EMI",artist:"Queen",album:"Greatest Hits",genre:["Rock","Pop"],releaseYear:1981,images:["/images/music/cd/p206-01.webp","/images/music/cd/p206-02.webp","/images/music/cd/p206-03.webp"],price:1399,compareAtPrice:null,currency:"USD",stock:28,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:312,tags:["cd","compilación"]},{id:"p207",name:"David Bowie - Heroes",slug:"david-bowie-heroes-cd",description:"La segunda parte de la trilogía de Berlín de Bowie. Épico y experimental.",category:"music",subcategory:"cd",brand:"RCA Records",artist:"David Bowie",album:"Heroes",genre:["Rock","Experimental"],releaseYear:1977,images:["/images/music/cd/p207-01.webp","/images/music/cd/p207-02.webp","/images/music/cd/p207-03.webp"],price:1599,compareAtPrice:null,currency:"USD",stock:16,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:178,tags:["cd","experimental"]},{id:"p208",name:"The Who - Tommy",slug:"the-who-tommy-cd",description:"La primera ópera rock. Una obra maestra de narración musical.",category:"music",subcategory:"cd",brand:"Decca",artist:"The Who",album:"Tommy",genre:["Rock","Opera"],releaseYear:1969,images:["/images/music/cd/p208-01.webp","/images/music/cd/p208-02.webp","/images/music/cd/p208-03.webp"],price:1799,compareAtPrice:null,currency:"USD",stock:12,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:145,tags:["cd","opera"]},{id:"p209",name:"U2 - The Joshua Tree",slug:"u2-joshua-tree-cd",description:"El álbum más exitoso de U2. Sonido épico del desierto americano.",category:"music",subcategory:"cd",brand:"Island Records",artist:"U2",album:"The Joshua Tree",genre:["Rock","Alternative"],releaseYear:1987,images:["/images/music/cd/p209-01.webp","/images/music/cd/p209-02.webp","/images/music/cd/p209-03.webp"],price:1499,compareAtPrice:null,currency:"USD",stock:24,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:201,tags:["cd","alterno"]},{id:"p210",name:"Amy Winehouse - Back to Black",slug:"amy-winehouse-back-to-black-cd",description:"Obra maestra de soul moderno. El último álbum de Amy Winehouse.",category:"music",subcategory:"cd",brand:"Island Records",artist:"Amy Winehouse",album:"Back to Black",genre:["Soul","Jazz"],releaseYear:2003,images:["/images/music/cd/p210-01.webp","/images/music/cd/p210-02.webp","/images/music/cd/p210-03.webp"],price:1299,compareAtPrice:null,currency:"USD",stock:19,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:223,tags:["cd","soul"]},{id:"p301",name:"Vintage Vinyl Records Design T-Shirt",slug:"vintage-vinyl-records-tshirt",description:"Camiseta premium con diseño vintage de vinilos coleccionables.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p301-01.webp","/images/merch/t-shirt/p301-02.webp","/images/merch/t-shirt/p301-03.webp"],price:2499,compareAtPrice:null,currency:"USD",stock:45,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.5,reviewCount:67,tags:["camiseta","merch","vintage"]},{id:"p302",name:"Music Lover Retro T-Shirt",slug:"music-lover-retro-tshirt",description:"Tee retro para los verdaderos amantes de la música.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p302-01.webp","/images/merch/t-shirt/p302-02.webp","/images/merch/t-shirt/p302-03.webp"],price:2299,compareAtPrice:null,currency:"USD",stock:52,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.4,reviewCount:43,tags:["camiseta","retro"]},{id:"p303",name:"Sound Waves Typography T-Shirt",slug:"sound-waves-tshirt",description:"Camiseta con tipografía de ondas de sonido minimalista.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p303-01.webp","/images/merch/t-shirt/p303-02.webp","/images/merch/t-shirt/p303-03.webp"],price:2199,compareAtPrice:null,currency:"USD",stock:48,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.3,reviewCount:38,tags:["camiseta","minimalista"]},{id:"p304",name:"Classic Microphone Logo T-Shirt",slug:"microphone-logo-tshirt",description:"Tee clásico con icónico logo de micrófono de estudio.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p304-01.webp","/images/merch/t-shirt/p304-02.webp","/images/merch/t-shirt/p304-03.webp"],price:2349,compareAtPrice:null,currency:"USD",stock:41,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:55,tags:["camiseta","logo"]},{id:"p305",name:"Concert Festival Vibes T-Shirt",slug:"concert-vibes-tshirt",description:"Camiseta para vivir la energía de los festivales.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p305-01.webp","/images/merch/t-shirt/p305-02.webp","/images/merch/t-shirt/p305-03.webp"],price:2449,compareAtPrice:null,currency:"USD",stock:38,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.4,reviewCount:29,tags:["camiseta","festival"]},{id:"p306",name:"Minimalist Music Note T-Shirt",slug:"minimalist-note-tshirt",description:"Diseño minimalista con nota musical estilizada.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p306-01.webp","/images/merch/t-shirt/p306-02.webp","/images/merch/t-shirt/p306-03.webp"],price:2199,compareAtPrice:null,currency:"USD",stock:50,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:51,tags:["camiseta","minimalista"]},{id:"p307",name:"Collector's Edition Pressing T-Shirt",slug:"collectors-edition-tshirt",description:"Tee de edición limitada para coleccionistas apasionados.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p307-01.webp","/images/merch/t-shirt/p307-02.webp","/images/merch/t-shirt/p307-03.webp"],price:2799,compareAtPrice:null,currency:"USD",stock:25,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.7,reviewCount:72,tags:["camiseta","edición limitada"]},{id:"p308",name:"Analog Enthusiast T-Shirt",slug:"analog-enthusiast-tshirt",description:"Para los puristas del sonido analógico.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p308-01.webp","/images/merch/t-shirt/p308-02.webp","/images/merch/t-shirt/p308-03.webp"],price:2349,compareAtPrice:null,currency:"USD",stock:43,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:44,tags:["camiseta","analógico"]},{id:"p309",name:"Groove Station Tee",slug:"groove-station-tee",description:"El tee oficial de Groove Station. Comodidad premium.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p309-01.webp","/images/merch/t-shirt/p309-02.webp","/images/merch/t-shirt/p309-03.webp"],price:2449,compareAtPrice:null,currency:"USD",stock:47,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:58,tags:["camiseta","oficial"]},{id:"p310",name:"Rhythm and Blues Heritage T-Shirt",slug:"rhythm-blues-heritage-tshirt",description:"Camiseta con la herencia cultural del Rhythm and Blues.",category:"merch",subcategory:"t-shirt",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/t-shirt/p310-01.webp","/images/merch/t-shirt/p310-02.webp","/images/merch/t-shirt/p310-03.webp"],price:2299,compareAtPrice:null,currency:"USD",stock:49,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:36,tags:["camiseta","r&b"]},{id:"p401",name:"Midnight Sound Sessions Hoodie",slug:"midnight-sound-sessions-hoodie",description:"Hoodie premium para sesiones nocturnas de estudio.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p401-01.webp","/images/merch/hoodie/p401-02.webp","/images/merch/hoodie/p401-03.webp"],price:5999,compareAtPrice:7499,currency:"USD",stock:18,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.7,reviewCount:42,tags:["hoodie","premium"]},{id:"p402",name:"Electric Pulse Energy Hoodie",slug:"electric-pulse-hoodie",description:"Hoodie con diseño de pulsos eléctricos vibrantes.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p402-01.webp","/images/merch/hoodie/p402-02.webp","/images/merch/hoodie/p402-03.webp"],price:5899,compareAtPrice:7299,currency:"USD",stock:22,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:35,tags:["hoodie","diseño"]},{id:"p403",name:"Golden Hour Frequencies Hoodie",slug:"golden-hour-hoodie",description:"Hoodie con tonos cálidos y frecuencias de la hora dorada.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p403-01.webp","/images/merch/hoodie/p403-02.webp","/images/merch/hoodie/p403-03.webp"],price:5799,compareAtPrice:7199,currency:"USD",stock:20,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:28,tags:["hoodie","cálido"]},{id:"p404",name:"Neon Lights Atmosphere Hoodie",slug:"neon-lights-hoodie",description:"Hoodie con colores neón y atmósfera urbana.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p404-01.webp","/images/merch/hoodie/p404-02.webp","/images/merch/hoodie/p404-03.webp"],price:5899,compareAtPrice:7299,currency:"USD",stock:19,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:39,tags:["hoodie","urbano"]},{id:"p405",name:"Urban Music Culture Hoodie",slug:"urban-music-culture-hoodie",description:"Hoodie que celebra la cultura urbana de la música.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p405-01.webp","/images/merch/hoodie/p405-02.webp","/images/merch/hoodie/p405-03.webp"],price:5999,compareAtPrice:7499,currency:"USD",stock:17,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:46,tags:["hoodie","urbano"]},{id:"p406",name:"Stellar Vibrations Hoodie",slug:"stellar-vibrations-hoodie",description:"Hoodie con vibración cósmica y estelar.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p406-01.webp","/images/merch/hoodie/p406-02.webp","/images/merch/hoodie/p406-03.webp"],price:5799,compareAtPrice:7199,currency:"USD",stock:21,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:31,tags:["hoodie","cósmico"]},{id:"p407",name:"Cosmic Sound Wave Hoodie",slug:"cosmic-sound-wave-hoodie",description:"Hoodie con ondas sonoras en un universo cósmico.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p407-01.webp","/images/merch/hoodie/p407-02.webp","/images/merch/hoodie/p407-03.webp"],price:5899,compareAtPrice:7299,currency:"USD",stock:18,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.6,reviewCount:44,tags:["hoodie","cósmico"]},{id:"p408",name:"Deep Bass Harmony Hoodie",slug:"deep-bass-harmony-hoodie",description:"Hoodie para los amantes del sonido profundo y armonioso.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p408-01.webp","/images/merch/hoodie/p408-02.webp","/images/merch/hoodie/p408-03.webp"],price:5799,compareAtPrice:7199,currency:"USD",stock:20,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:33,tags:["hoodie","bajo"]},{id:"p409",name:"Night Studio Sessions Hoodie",slug:"night-studio-sessions-hoodie",description:"Hoodie para largas noches de trabajo creativo en estudio.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p409-01.webp","/images/merch/hoodie/p409-02.webp","/images/merch/hoodie/p409-03.webp"],price:5999,compareAtPrice:7499,currency:"USD",stock:16,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:48,tags:["hoodie","estudio"]},{id:"p410",name:"Ethereal Melodies Hoodie",slug:"ethereal-melodies-hoodie",description:"Hoodie con tonos etéreos y melódicos.",category:"merch",subcategory:"hoodie",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/merch/hoodie/p410-01.webp","/images/merch/hoodie/p410-02.webp","/images/merch/hoodie/p410-03.webp"],price:5799,compareAtPrice:7199,currency:"USD",stock:19,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:37,tags:["hoodie","melódico"]},{id:"p501",name:"Fender Stratocaster Classic",slug:"fender-stratocaster-classic",description:"La guitarra eléctrica más icónica del mundo. Sonido versátil y clásico.",category:"instruments",subcategory:"guitars",brand:"Fender",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p501-01.webp","/images/instruments/guitars/p501-02.webp","/images/instruments/guitars/p501-03.webp"],price:84999,compareAtPrice:null,currency:"USD",stock:5,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:112,tags:["guitarra","fender","eléctrica"]},{id:"p502",name:"Gibson Les Paul Custom",slug:"gibson-les-paul-custom",description:"Tono gordo y profundo. La favorita del rock pesado y blues.",category:"instruments",subcategory:"guitars",brand:"Gibson",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p502-01.webp","/images/instruments/guitars/p502-02.webp","/images/instruments/guitars/p502-03.webp"],price:99999,compareAtPrice:null,currency:"USD",stock:3,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:87,tags:["guitarra","gibson","premium"]},{id:"p503",name:"Ibanez RG550 Prestige",slug:"ibanez-rg550-prestige",description:"Guitarra de velocidad profesional para metal y rock moderno.",category:"instruments",subcategory:"guitars",brand:"Ibanez",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p503-01.webp","/images/instruments/guitars/p503-02.webp","/images/instruments/guitars/p503-03.webp"],price:89999,compareAtPrice:null,currency:"USD",stock:4,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:64,tags:["guitarra","ibanez","metal"]},{id:"p504",name:"PRS Custom 24",slug:"prs-custom-24",description:"Versatilidad absoluta. La guitarra de los profesionales eclécticos.",category:"instruments",subcategory:"guitars",brand:"PRS",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p504-01.webp","/images/instruments/guitars/p504-02.webp","/images/instruments/guitars/p504-03.webp"],price:109999,compareAtPrice:null,currency:"USD",stock:2,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:95,tags:["guitarra","prs","versátil"]},{id:"p505",name:"Fender Telecaster Vintage",slug:"fender-telecaster-vintage",description:"El twang original. Tonos claros y definitivos del rock and roll.",category:"instruments",subcategory:"guitars",brand:"Fender",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p505-01.webp","/images/instruments/guitars/p505-02.webp","/images/instruments/guitars/p505-03.webp"],price:74999,compareAtPrice:null,currency:"USD",stock:6,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:56,tags:["guitarra","fender","vintage"]},{id:"p506",name:"Gibson SG Standard",slug:"gibson-sg-standard",description:"Cuerpo delgado y manejable. Tono cálido para blues y rock clásico.",category:"instruments",subcategory:"guitars",brand:"Gibson",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p506-01.webp","/images/instruments/guitars/p506-02.webp","/images/instruments/guitars/p506-03.webp"],price:94999,compareAtPrice:null,currency:"USD",stock:4,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:71,tags:["guitarra","gibson","blues"]},{id:"p507",name:"Fender Jazzmaster Offset",slug:"fender-jazzmaster-offset",description:"Offset único. Tono vintage y diseño icónico para alternativo e indie.",category:"instruments",subcategory:"guitars",brand:"Fender",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p507-01.webp","/images/instruments/guitars/p507-02.webp","/images/instruments/guitars/p507-03.webp"],price:79999,compareAtPrice:null,currency:"USD",stock:5,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:43,tags:["guitarra","fender","alternativo"]},{id:"p508",name:"Jackson Dinky Pro",slug:"jackson-dinky-pro",description:"Guitarra de shred profesional. Perfecta para metal extremo y tapping.",category:"instruments",subcategory:"guitars",brand:"Jackson",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p508-01.webp","/images/instruments/guitars/p508-02.webp","/images/instruments/guitars/p508-03.webp"],price:84999,compareAtPrice:null,currency:"USD",stock:3,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:58,tags:["guitarra","jackson","shred"]},{id:"p509",name:"Schecter C-1",slug:"schecter-c-1",description:"Excelente relación precio-rendimiento. Ideal para metal progresivo y moderno.",category:"instruments",subcategory:"guitars",brand:"Schecter",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p509-01.webp","/images/instruments/guitars/p509-02.webp","/images/instruments/guitars/p509-03.webp"],price:64999,compareAtPrice:null,currency:"USD",stock:7,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:49,tags:["guitarra","schecter","metal"]},{id:"p510",name:"Yamaha Pacifica 112VMX",slug:"yamaha-pacifica-112vmx",description:"Guitarra accesible y versátil. Excelente para principiantes avanzados.",category:"instruments",subcategory:"guitars",brand:"Yamaha",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/guitars/p510-01.webp","/images/instruments/guitars/p510-02.webp","/images/instruments/guitars/p510-03.webp"],price:49999,compareAtPrice:null,currency:"USD",stock:12,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:73,tags:["guitarra","yamaha","versátil"]},{id:"p601",name:"Yamaha P-515 Stage Piano",slug:"yamaha-p-515-stage-piano",description:"Piano digital profesional con sonidos de concierto y 128 polifonía.",category:"instruments",subcategory:"keyboards",brand:"Yamaha",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p601-01.webp","/images/instruments/keyboards/p601-02.webp","/images/instruments/keyboards/p601-03.webp"],price:89999,compareAtPrice:null,currency:"USD",stock:6,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:68,tags:["teclado","piano","yamaha"]},{id:"p602",name:"Korg Kross 2 Synthesizer",slug:"korg-kross-2-synthesizer",description:"Sintetizador workstation con sonidos infinitos y secuenciación avanzada.",category:"instruments",subcategory:"keyboards",brand:"Korg",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p602-01.webp","/images/instruments/keyboards/p602-02.webp","/images/instruments/keyboards/p602-03.webp"],price:119999,compareAtPrice:null,currency:"USD",stock:3,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.9,reviewCount:52,tags:["sintetizador","korg","workstation"]},{id:"p603",name:"Nord Lead A Synthesizer",slug:"nord-lead-a-synthesizer",description:"Sintetizador puro analógico. El favorito de productores de electrónica.",category:"instruments",subcategory:"keyboards",brand:"Nord",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p603-01.webp","/images/instruments/keyboards/p603-02.webp","/images/instruments/keyboards/p603-03.webp"],price:149999,compareAtPrice:null,currency:"USD",stock:2,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:5,reviewCount:41,tags:["sintetizador","nord","analógico"]},{id:"p604",name:"Roland FP-90X Digital Piano",slug:"roland-fp-90x-digital-piano",description:"Piano digital móvil con motores de sonido SuperNATURAL y 88 teclas ponderadas.",category:"instruments",subcategory:"keyboards",brand:"Roland",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p604-01.webp","/images/instruments/keyboards/p604-02.webp","/images/instruments/keyboards/p604-03.webp"],price:79999,compareAtPrice:null,currency:"USD",stock:7,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:59,tags:["teclado","piano","roland"]},{id:"p605",name:"Moog Minimoog Model D",slug:"moog-minimoog-model-d",description:"Leyenda absoluta. El sintetizador que inventó el sintetizador moderno.",category:"instruments",subcategory:"keyboards",brand:"Moog",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p605-01.webp","/images/instruments/keyboards/p605-02.webp","/images/instruments/keyboards/p605-03.webp"],price:189999,compareAtPrice:null,currency:"USD",stock:1,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:5,reviewCount:33,tags:["sintetizador","moog","leyenda"]},{id:"p606",name:"Casio Privia PX-870",slug:"casio-privia-px-870",description:"Piano de calidad profesional a precio accesible. Excelente relación valor.",category:"instruments",subcategory:"keyboards",brand:"Casio",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p606-01.webp","/images/instruments/keyboards/p606-02.webp","/images/instruments/keyboards/p606-03.webp"],price:64999,compareAtPrice:null,currency:"USD",stock:9,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:76,tags:["teclado","piano","casio"]},{id:"p607",name:"Kurzweil PC3X Workstation",slug:"kurzweil-pc3x-workstation",description:"Workstation completa con síntesis avanzada y sonidos orquestales.",category:"instruments",subcategory:"keyboards",brand:"Kurzweil",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p607-01.webp","/images/instruments/keyboards/p607-02.webp","/images/instruments/keyboards/p607-03.webp"],price:139999,compareAtPrice:null,currency:"USD",stock:2,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:44,tags:["workstation","kurzweil","orquesta"]},{id:"p608",name:"Arturia Keylab 88 Master",slug:"arturia-keylab-88-master",description:"Controlador maestro con 88 teclas ponderadas y integración DAW total.",category:"instruments",subcategory:"keyboards",brand:"Arturia",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p608-01.webp","/images/instruments/keyboards/p608-02.webp","/images/instruments/keyboards/p608-03.webp"],price:79999,compareAtPrice:null,currency:"USD",stock:5,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:62,tags:["controlador","arturia","daw"]},{id:"p609",name:"Novation Launchkey Pro",slug:"novation-launchkey-pro",description:"Controlador profesional con RGB iluminado y mapeo visual para Ableton Live.",category:"instruments",subcategory:"keyboards",brand:"Novation",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p609-01.webp","/images/instruments/keyboards/p609-02.webp","/images/instruments/keyboards/p609-03.webp"],price:54999,compareAtPrice:null,currency:"USD",stock:8,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:71,tags:["controlador","novation","ableton"]},{id:"p610",name:"Native Instruments Kontrol",slug:"native-instruments-kontrol",description:"Integración perfecta con Native Instruments Komplete. Controlador de producción.",category:"instruments",subcategory:"keyboards",brand:"Native Instruments",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/keyboards/p610-01.webp","/images/instruments/keyboards/p610-02.webp","/images/instruments/keyboards/p610-03.webp"],price:69999,compareAtPrice:null,currency:"USD",stock:6,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:58,tags:["controlador","native instruments","producción"]},{id:"p701",name:"Audio-Technica AT2020 Microphone",slug:"audio-technica-at2020-microphone",description:"Micrófono condenser de estudio con relación precio-rendimiento imbatible.",category:"instruments",subcategory:"accessories",brand:"Audio-Technica",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p701-01.webp","/images/instruments/accessories/p701-02.webp","/images/instruments/accessories/p701-03.webp"],price:19999,compareAtPrice:null,currency:"USD",stock:25,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.8,reviewCount:134,tags:["micrófono","condensador","estudio"]},{id:"p702",name:"Behringer U-Phoria UMC202HD",slug:"behringer-u-phoria-umc202hd",description:"Interfaz de audio USB 2x2 con conversión de clase A y latencia mínima.",category:"instruments",subcategory:"accessories",brand:"Behringer",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p702-01.webp","/images/instruments/accessories/p702-02.webp","/images/instruments/accessories/p702-03.webp"],price:9999,compareAtPrice:null,currency:"USD",stock:35,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:87,tags:["interfaz","audio","behringer"]},{id:"p703",name:"Shure SM7B Microphone Studio",slug:"shure-sm7b-microphone",description:"Micrófono dinámico profesional. El estándar de estudios de grabación pro.",category:"instruments",subcategory:"accessories",brand:"Shure",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p703-01.webp","/images/instruments/accessories/p703-02.webp","/images/instruments/accessories/p703-03.webp"],price:49999,compareAtPrice:null,currency:"USD",stock:12,isAvailable:!0,isFeatured:!0,isOnOffer:!1,avgRating:4.9,reviewCount:105,tags:["micrófono","dinámico","profesional"]},{id:"p704",name:"Neumann TLM102 Condenser",slug:"neumann-tlm102-condenser",description:"Micrófono condenser de referencia. Construcción alemana de precisión.",category:"instruments",subcategory:"accessories",brand:"Neumann",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p704-01.webp","/images/instruments/accessories/p704-02.webp","/images/instruments/accessories/p704-03.webp"],price:69999,compareAtPrice:null,currency:"USD",stock:8,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.9,reviewCount:62,tags:["micrófono","referencia","alemán"]},{id:"p705",name:"Rode NT1 Signature Microphone",slug:"rode-nt1-signature-microphone",description:"Micrófono condenser versátil con cápsula firmada. Excelente para voces.",category:"instruments",subcategory:"accessories",brand:"Rode",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p705-01.webp","/images/instruments/accessories/p705-02.webp","/images/instruments/accessories/p705-03.webp"],price:29999,compareAtPrice:null,currency:"USD",stock:18,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:93,tags:["micrófono","rode","voces"]},{id:"p706",name:"PreSonus Studio One DAW Software",slug:"presonus-studio-one-daw",description:"DAW profesional con flujo de trabajo intuitivo y síntesis integrada.",category:"instruments",subcategory:"accessories",brand:"PreSonus",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p706-01.webp","/images/instruments/accessories/p706-02.webp","/images/instruments/accessories/p706-03.webp"],price:39999,compareAtPrice:null,currency:"USD",stock:999,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:78,tags:["daw","presonus","software"]},{id:"p707",name:"XLR Premium Cable 10ft",slug:"xlr-premium-cable-10ft",description:"Cable XLR de calidad de estudio con conectores Neutrik de oro.",category:"instruments",subcategory:"accessories",brand:"Mogami",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p707-01.webp","/images/instruments/accessories/p707-02.webp","/images/instruments/accessories/p707-03.webp"],price:4999,compareAtPrice:null,currency:"USD",stock:100,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.7,reviewCount:156,tags:["cable","xlr","estudio"]},{id:"p708",name:"Mogami Gold Studio Cables",slug:"mogami-gold-studio-cables",description:"Pack de cables de estudio de oro puro. Conductores de bajo ruido.",category:"instruments",subcategory:"accessories",brand:"Mogami",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p708-01.webp","/images/instruments/accessories/p708-02.webp","/images/instruments/accessories/p708-03.webp"],price:14999,compareAtPrice:null,currency:"USD",stock:30,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.8,reviewCount:89,tags:["cables","mogami","oro"]},{id:"p709",name:"Neutrik NC3M XLR Connectors Pack",slug:"neutrik-nc3m-xlr-connectors",description:"Conectores XLR profesionales Neutrik en pack de 10 unidades.",category:"instruments",subcategory:"accessories",brand:"Neutrik",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p709-01.webp","/images/instruments/accessories/p709-02.webp","/images/instruments/accessories/p709-03.webp"],price:6999,compareAtPrice:null,currency:"USD",stock:50,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.6,reviewCount:71,tags:["conectores","neutrik","xlr"]},{id:"p710",name:"Rack Mount Studio System",slug:"rack-mount-studio-system",description:'Sistema de rack de 19" con fuente y refrigeración integrada para equipos.',category:"instruments",subcategory:"accessories",brand:"Groove",artist:"",album:"",genre:[],releaseYear:2024,images:["/images/instruments/accessories/p710-01.webp","/images/instruments/accessories/p710-02.webp","/images/instruments/accessories/p710-03.webp"],price:24999,compareAtPrice:null,currency:"USD",stock:8,isAvailable:!0,isFeatured:!1,isOnOffer:!1,avgRating:4.5,reviewCount:43,tags:["rack","sistema","estudio"]},{id:"bundle1",name:"Guitarist Essentials Bundle",slug:"guitarist-essentials-bundle",description:"Pack completo para guitarristas: Fender Stratocaster + cables premium + software DAW.",category:"offers",subcategory:"bundle",brand:"Groove",artist:"",album:"",genre:["Rock"],releaseYear:2024,images:["/images/offers/bundle/p801-01.webp","/images/offers/bundle/p801-02.webp","/images/offers/bundle/p801-03.webp"],price:134999,compareAtPrice:174998,currency:"USD",stock:4,isAvailable:!0,isFeatured:!0,isOnOffer:!0,avgRating:4.9,reviewCount:78,tags:["bundle","guitarra","oferta"]},{id:"bundle2",name:"Home Studio Starter Kit",slug:"home-studio-starter-kit",description:"Todo lo necesario para empezar: interfaz de audio + micrófono + software + cables.",category:"offers",subcategory:"bundle",brand:"Groove",artist:"",album:"",genre:["Recording"],releaseYear:2024,images:["/images/offers/bundle/p802-01.webp","/images/offers/bundle/p802-02.webp","/images/offers/bundle/p802-03.webp"],price:74999,compareAtPrice:104998,currency:"USD",stock:8,isAvailable:!0,isFeatured:!0,isOnOffer:!0,avgRating:4.8,reviewCount:92,tags:["bundle","estudio","principiante"]},{id:"bundle3",name:"Vinyl Collector Premium Bundle",slug:"vinyl-collector-premium-bundle",description:"5 vinilos clásicos imprescindibles: Beatles, Pink Floyd, Bowie, Nirvana, Miles Davis.",category:"offers",subcategory:"bundle",brand:"Groove",artist:"",album:"",genre:["Rock","Jazz"],releaseYear:2024,images:["/images/offers/bundle/p803-01.webp","/images/offers/bundle/p803-02.webp","/images/offers/bundle/p803-03.webp"],price:16999,compareAtPrice:18495,currency:"USD",stock:6,isAvailable:!0,isFeatured:!0,isOnOffer:!0,avgRating:4.9,reviewCount:156,tags:["bundle","vinilo","clásico"]},{id:"bundle4",name:"Producer's Choice Bundle",slug:"producers-choice-bundle",description:"Para productores: Korg Kross 2 + Arturia Keylab + Software Suite completo.",category:"offers",subcategory:"bundle",brand:"Groove",artist:"",album:"",genre:["Electronic"],releaseYear:2024,images:["/images/offers/bundle/p804-01.webp","/images/offers/bundle/p804-02.webp","/images/offers/bundle/p804-03.webp"],price:249999,compareAtPrice:274998,currency:"USD",stock:2,isAvailable:!0,isFeatured:!0,isOnOffer:!0,avgRating:5,reviewCount:34,tags:["bundle","productor","premium"]},{id:"bundle5",name:"Studio Recording Pro Bundle",slug:"studio-recording-pro-bundle",description:"Equipo profesional: Shure SM7B + Neumann monitor + cables Mogami + rack system.",category:"offers",subcategory:"bundle",brand:"Groove",artist:"",album:"",genre:["Recording"],releaseYear:2024,images:["/images/offers/bundle/p805-01.webp","/images/offers/bundle/p805-02.webp","/images/offers/bundle/p805-03.webp"],price:189999,compareAtPrice:219998,currency:"USD",stock:3,isAvailable:!0,isFeatured:!0,isOnOffer:!0,avgRating:4.9,reviewCount:67,tags:["bundle","profesional","estudio"]}],aI=[{id:"a1",title:"El vinilo no muere: ventas récord en 2025",slug:"vinilo-ventas-record-2025",subtitle:"Por tercer año consecutivo, las ventas de discos de vinilo superan a las de CDs, confirmando un renacimiento cultural.",body:`## Un formato que desafía al streaming

En un mundo dominado por plataformas digitales, el vinilo sigue creciendo. Las cifras de 2025 muestran un incremento del 15% respecto al año anterior.

> "El vinilo ofrece algo que Spotify no puede: una experiencia táctil y visual completa" — Rolling Stone

### ¿Por qué los jóvenes eligen vinilo?

La Generación Z está impulsando esta tendencia. Para muchos, coleccionar vinilos es una forma de conexión auténtica con la música.

- **Experiencia completa**: artwork, liner notes, calidad de sonido
- **Coleccionismo**: ediciones limitadas y picture discs
- **Ritual**: el acto de poner un disco tiene valor simbólico

### Las cifras hablan

| Año | Unidades vendidas | Crecimiento |
|-----|-------------------|-------------|
| 2023 | 43M | +12% |
| 2024 | 49M | +14% |
| 2025 | 56M | +15% |

Los sellos discográficos están respondiendo con reediciones de catálogo en formatos premium.`,coverImageUrl:"https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=1200&h=600&fit=crop",authorName:"María García",authorAvatarUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",category:"vinyl-culture",tags:["vinilo","ventas","industria"],linkedProductId:"p1",linkedProductName:"Abbey Road",linkedProductPrice:3499,linkedProductImage:"https://images.unsplash.com/photo-1629276301820-0f3eedc29b9c?w=200&h=200&fit=crop",isFeatured:!0,views:12453,commentCount:48,publishedAt:"2025-12-15T10:00:00Z"},{id:"a2",title:"Reseña: Random Access Memories cumple 12 años",slug:"resena-random-access-memories-12",subtitle:"Revisamos el legado del último álbum de Daft Punk, una obra maestra que fusionó lo analógico con lo digital.",body:`## Un álbum que cambió las reglas

Cuando Daft Punk lanzó Random Access Memories en 2013, nadie esperaba un disco tan orgánico de un dúo electrónico.

### Track by Track

**Give Life Back to Music** abre el álbum con guitarras funk de Nile Rodgers que marcan el tono. **Get Lucky** se convirtió en el hit del año.

Pero es en las pistas más largas donde el álbum brilla. **Giorgio by Moroder** es una masterclass en storytelling musical, y **Touch** es una sinfonía de 8 minutos que recorre 50 años de música.

### Producción impecable

Grabado en estudios analógicos con músicos de sesión legendarios, RAM suena mejor que nunca en vinilo.`,coverImageUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",authorName:"Carlos Ruiz",authorAvatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",category:"album-review",tags:["daft punk","reseña","electronic"],linkedProductId:"p3",linkedProductName:"Random Access Memories",linkedProductPrice:4299,linkedProductImage:"https://images.unsplash.com/photo-1619983081563-430f63602796?w=200&h=200&fit=crop",isFeatured:!1,views:8921,commentCount:32,publishedAt:"2025-11-28T14:00:00Z"},{id:"a3",title:"Guía definitiva: Tu primera guitarra eléctrica",slug:"guia-primera-guitarra-electrica",subtitle:"Todo lo que necesitas saber para elegir tu primer instrumento sin arrepentirte.",body:`## ¿Por dónde empezar?

Elegir tu primera guitarra eléctrica es una decisión importante. Aquí te guiamos paso a paso.

### Presupuesto

No necesitas gastar una fortuna. Entre $200 y $600 encontrarás opciones excelentes para principiantes.

### Tipos de guitarra

- **Stratocaster**: Versátil, cómoda, ideal para blues, rock, pop
- **Les Paul**: Tono gordo y cálido, ideal para rock y metal
- **Telecaster**: Twang y claridad, perfecta para country y rock

### Nuestra recomendación

La **Fender Player Stratocaster** ofrece el mejor balance entre calidad, versatilidad y precio. Es la guitarra que crece contigo.`,coverImageUrl:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&h=600&fit=crop",authorName:"Ana López",authorAvatarUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",category:"instrument-guide",tags:["guitarra","guía","principiante"],linkedProductId:"p8",linkedProductName:"Fender Stratocaster Player",linkedProductPrice:84999,linkedProductImage:"https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=200&h=200&fit=crop",isFeatured:!1,views:15678,commentCount:67,publishedAt:"2025-12-01T09:00:00Z"},{id:"a4",title:"Conciertos imperdibles de enero 2026",slug:"conciertos-enero-2026",subtitle:"Los shows en vivo que no te puedes perder para arrancar el año con buena música.",body:`## Enero viene cargado

El primer mes del año trae una agenda musical impresionante.

### Highlights

- **Arctic Monkeys** — 15 de enero, Arena CDMX
- **Tame Impala** — 20 de enero, Foro Sol
- **Foo Fighters** — 25 de enero, Estadio GNP

Consigue tus boletos antes de que se agoten.`,coverImageUrl:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop",authorName:"María García",authorAvatarUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",category:"concert-tour",tags:["conciertos","giras","en vivo"],linkedProductId:null,linkedProductName:null,linkedProductPrice:null,linkedProductImage:null,isFeatured:!1,views:9234,commentCount:21,publishedAt:"2025-12-20T11:00:00Z"}],cI=[{id:"b1",title:"Nuevos Vinilos de Temporada",subtitle:"Descubre las reediciones más esperadas del año",imageUrl:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&h=500&fit=crop",ctaText:"Explorar Música",ctaLink:"/tienda/musica"},{id:"b2",title:"Instrumentos con hasta 30% OFF",subtitle:"Ofertas especiales en guitarras, teclados y más",imageUrl:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1400&h=500&fit=crop",ctaText:"Ver Ofertas",ctaLink:"/tienda/ofertas"},{id:"b3",title:"Merch Exclusivo Groove",subtitle:"Lleva la cultura musical contigo a donde vayas",imageUrl:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1400&h=500&fit=crop",ctaText:"Comprar Merch",ctaLink:"/tienda/merch"}];function uI(n){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"USD"}).format(n/100)}function Ab(){const[n,e]=j.useState(!1),[t,r]=j.useState(""),[s,i]=j.useState(!1),a=Nf(m=>m.totalItems),c=ui(m=>m.isAuthenticated),l=mp();j.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[n]),j.useEffect(()=>{const m=document.querySelector("[data-cart-counter]");m&&(a>0?(m.textContent=a>9?"9+":a.toString(),m.style.display="flex"):m.style.display="none")},[a]);const d=t.trim()?Ls.filter(m=>{var v;return m.name.toLowerCase().includes(t.toLowerCase())||((v=m.artist)==null?void 0:v.toLowerCase().includes(t.toLowerCase()))}).slice(0,5):[],f=m=>{i(!1),r(""),l(`/producto/${m}`)};return R.jsxs(R.Fragment,{children:[R.jsx("nav",{className:"sticky top-0 z-[100] w-full bg-groove-bg-secondary/90 backdrop-blur-md border-b border-white/5",children:R.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:R.jsxs("div",{className:"flex justify-between items-center h-16",children:[R.jsxs("div",{className:"flex items-center gap-8",children:[R.jsx(De,{to:"/",className:"flex items-center","aria-label":"Go to home",children:R.jsx("img",{src:"/logo.png",alt:"Groove Logo",className:"h-10"})}),R.jsxs("div",{className:"hidden md:flex items-center gap-6 text-sm font-medium",children:[R.jsx(De,{to:"/tienda/musica",className:"hover:text-groove-gold transition-colors",children:"Música"}),R.jsx(De,{to:"/tienda/merch",className:"hover:text-groove-gold transition-colors",children:"Merch"}),R.jsx(De,{to:"/tienda/instrumentos",className:"hover:text-groove-gold transition-colors",children:"Instrumentos"}),R.jsx(De,{to:"/tienda/ofertas",className:"hover:text-groove-gold transition-colors",children:"Ofertas"}),R.jsx(De,{to:"/noticias",className:"hover:text-groove-gold transition-colors",children:"Noticias"})]})]}),R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsxs("div",{className:"relative hidden md:block",children:[R.jsxs("div",{className:`flex items-center bg-white/5 rounded-full px-3 py-1.5 border transition-colors ${s?"border-groove-gold":"border-white/10"}`,children:[R.jsx(pm,{className:"w-4 h-4 text-groove-text-secondary mr-2"}),R.jsx("input",{type:"text",placeholder:"Buscar...",value:t,onChange:m=>r(m.target.value),onFocus:()=>i(!0),onBlur:()=>setTimeout(()=>i(!1),200),className:"bg-transparent border-none outline-none text-sm w-48 focus:w-64 transition-all"})]}),R.jsx(Ms,{children:s&&t&&R.jsx(vr.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute top-full mt-2 w-full bg-groove-bg-secondary border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50",children:d.length>0?R.jsx("ul",{className:"py-2",children:d.map(m=>R.jsx("li",{children:R.jsxs("button",{onClick:()=>f(m.slug),className:"w-full text-left px-4 py-2 hover:bg-white/5 flex flex-col transition-colors",children:[R.jsx("span",{className:"text-sm font-bold text-white line-clamp-1",children:m.name}),R.jsx("span",{className:"text-xs text-groove-text-secondary",children:m.artist||m.brand})]})},m.id))}):R.jsx("div",{className:"p-4 text-sm text-groove-text-secondary text-center",children:"No se encontraron resultados"})})})]}),R.jsxs(De,{to:"/carrito",className:"p-2 hover:bg-white/5 rounded-full transition-colors relative","aria-label":"Cart",children:[R.jsx(mm,{className:"w-5 h-5"}),a>0&&R.jsx("span",{"data-cart-counter":!0,className:"absolute -top-1 -right-1 bg-groove-gold text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full",children:a>9?"9+":a})]}),R.jsx(De,{to:c?"/cuenta":"/login",className:`p-2 rounded-full transition-colors ${c?"bg-groove-gold/20 text-groove-gold hover:bg-groove-gold/30":"hover:bg-white/5"}`,"aria-label":"Account",children:R.jsx(gm,{className:"w-5 h-5"})}),R.jsx("button",{onClick:()=>e(!0),className:"p-2 hover:bg-white/5 rounded-full transition-colors md:hidden","aria-label":"Open menu",children:R.jsx(hm,{className:"w-5 h-5"})})]})]})})}),R.jsx(Ms,{children:n&&R.jsxs(R.Fragment,{children:[R.jsx(vr.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>e(!1),className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] md:hidden"}),R.jsxs(vr.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed inset-y-0 right-0 w-4/5 max-w-sm bg-groove-bg-primary border-l border-white/10 z-[200] shadow-2xl flex flex-col md:hidden",children:[R.jsxs("div",{className:"p-6 border-b border-white/10 flex justify-between items-center",children:[R.jsx("span",{className:"font-display font-bold text-xl text-gradient-gold",children:"Menú"}),R.jsx("button",{onClick:()=>e(!1),className:"p-2 bg-white/5 rounded-full hover:bg-white/10","aria-label":"Close menu",children:R.jsx(Ql,{className:"w-5 h-5"})})]}),R.jsx("div",{className:"py-4 flex-grow",children:R.jsx("nav",{className:"flex flex-col gap-2 px-4",children:[{path:"/tienda/musica",label:"Música"},{path:"/tienda/merch",label:"Merch"},{path:"/tienda/instrumentos",label:"Instrumentos"},{path:"/tienda/ofertas",label:"Ofertas Especiales"},{path:"/noticias",label:"Noticias y Editorial"}].map(m=>R.jsx(De,{to:m.path,onClick:()=>e(!1),className:"px-4 py-3 rounded-xl hover:bg-white/5 font-medium text-lg transition-colors",children:m.label},m.path))})})]})]})})]})}function Rb(){return R.jsx("footer",{className:"bg-groove-bg-secondary border-t border-white/5 pt-12 pb-8 mt-16",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[R.jsxs("div",{className:"col-span-1 md:col-span-2",children:[R.jsx("img",{src:"/logo.png",alt:"Groove Logo",className:"h-12 mb-4"}),R.jsx("p",{className:"text-groove-text-secondary max-w-sm mb-6",children:"Tu tienda especializada en música, vinilos, instrumentos y la mejor cultura musical."}),R.jsxs("div",{className:"flex gap-4",children:[R.jsx("a",{href:"https://www.instagram.com/groov_eec?igsh=ZTc3eHBqaHlqa3o1",target:"_blank",rel:"noopener noreferrer",className:"bg-white/5 p-2 rounded-full hover:bg-groove-gold hover:text-black transition-colors",children:R.jsx(um,{className:"w-5 h-5"})}),R.jsx("a",{href:"https://wa.me/qr/R5F66LK4XA2JI1",target:"_blank",rel:"noopener noreferrer",className:"bg-white/5 p-2 rounded-full hover:bg-groove-gold hover:text-black transition-colors",children:R.jsx(dm,{className:"w-5 h-5"})})]})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"font-bold text-white mb-4",children:"Enlaces"}),R.jsxs("ul",{className:"space-y-2 text-sm text-groove-text-secondary",children:[R.jsx("li",{children:R.jsx(De,{to:"/tienda",className:"hover:text-groove-gold transition-colors",children:"Tienda"})}),R.jsx("li",{children:R.jsx(De,{to:"/noticias",className:"hover:text-groove-gold transition-colors",children:"Noticias"})}),R.jsx("li",{children:R.jsx(De,{to:"/login",className:"hover:text-groove-gold transition-colors",children:"Mi Cuenta"})})]})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"font-bold text-white mb-4",children:"Soporte"}),R.jsxs("ul",{className:"space-y-2 text-sm text-groove-text-secondary",children:[R.jsx("li",{children:R.jsx(De,{to:"/contacto",className:"hover:text-groove-gold transition-colors",children:"Contacto"})}),R.jsx("li",{children:R.jsx(De,{to:"/envios",className:"hover:text-groove-gold transition-colors",children:"Envíos y Devoluciones"})})]})]})]}),R.jsx("div",{className:"border-t border-white/5 pt-8 text-center text-sm text-groove-text-secondary",children:R.jsxs("p",{children:["© ",new Date().getFullYear()," Groove Music Store. Todos los derechos reservados."]})})]})})}function Sb(){const{pathname:n}=gp();return j.useEffect(()=>{window.scrollTo(0,0)},[n]),null}function Pb(){const n=ui(l=>l.currentUser),[e,t]=j.useState(!1),[r,s]=j.useState(!1),[i,a]=j.useState("");if(!n||n.emailVerified||r)return null;const c=async()=>{t(!0);try{Mr.currentUser&&(await TE(Mr.currentUser),a("✓ Correo de verificación reenviado. Revisa tu bandeja de entrada."),setTimeout(()=>a(""),3e3))}catch(l){a("❌ Error al reenviar: "+(l.message||"Intenta más tarde")),setTimeout(()=>a(""),3e3)}finally{t(!1)}};return R.jsx(Ms,{children:R.jsxs(vr.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{type:"spring",damping:25},className:"bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-orange-500/20",children:[R.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4",children:[R.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[R.jsx(lm,{className:"w-5 h-5 text-orange-400 flex-shrink-0"}),R.jsxs("div",{className:"min-w-0",children:[R.jsx("p",{className:"text-sm font-semibold text-orange-300",children:"Email no verificado"}),R.jsx("p",{className:"text-xs text-orange-200 line-clamp-2",children:"Revisa tu correo (incluye spam) y confirma tu dirección para acceder al carrito."})]})]}),R.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[R.jsxs("button",{onClick:c,disabled:e,className:"flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 hover:bg-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-orange-300 rounded-lg text-xs font-medium transition-colors",children:[R.jsx(fm,{className:`w-3.5 h-3.5 ${e?"animate-spin":""}`}),e?"Enviando...":"Reenviar"]}),R.jsx("button",{onClick:()=>s(!0),className:"p-1.5 hover:bg-orange-500/10 rounded-lg transition-colors","aria-label":"Dismiss banner",children:R.jsx(Ql,{className:"w-4 h-4 text-orange-300"})})]})]}),R.jsx(Ms,{children:i&&R.jsxs(vr.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 text-xs text-orange-200 bg-orange-500/5",children:[i.startsWith("✓")?R.jsx(cm,{className:"w-4 h-4 text-green-400 flex-shrink-0"}):null,i]})})]})})}function Cb(){const[n,e]=j.useState(!1),[t,r]=j.useState(null);return j.useEffect(()=>{(async()=>{try{const i=Cd(He,"products"),a=await Bd(i);if(console.log(`📊 Productos existentes en Firestore: ${a.size}`),a.size<Ls.length){console.log("🔄 Sincronizando productos a Firestore...");const c=qd(He);for(const l of Ls){const d=pn(He,"products",l.id);c.set(d,{id:l.id,name:l.name,stock:l.stock,price:l.price,category:l.category,slug:l.slug,lastUpdated:new Date},{merge:!0})}await c.commit(),console.log(`✅ Productos sincronizados: ${Ls.length}`)}else console.log("✅ Productos ya inicializados en Firestore");e(!0)}catch(i){const a=i instanceof Error?i.message:"Error desconocido";console.error("❌ Error inicializando productos:",a),r(a),e(!0)}})()},[]),{isInitialized:n,error:t}}async function kb(){try{console.log("🎨 Verificando y actualizando imágenes de productos...");const n=Cd(He,"products"),e=await Bd(n),t=qd(He);let r=0;return e.docs.forEach(s=>{const i=s.data();i.image&&(!i.images||!Array.isArray(i.images)||i.images.length===0)&&(t.update(s.ref,{images:[i.image]}),r++)}),r>0?(await t.commit(),console.log(`✅ Se actualizaron ${r} productos con el campo images`),localStorage.setItem("imagesFixed","true"),r):(console.log("✅ Todos los productos ya tienen imágenes correctamente configuradas"),localStorage.setItem("imagesFixed","true"),0)}catch(n){return console.error("❌ Error al actualizar imágenes:",n),-1}}const Db=j.lazy(()=>Qe(()=>import("./Home-BrxDFvB6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Vl=j.lazy(()=>Qe(()=>import("./CategoryPage-A0YK8Lkr.js"),__vite__mapDeps([8,1,2,6,9,7]))),Nb=j.lazy(()=>Qe(()=>import("./ProductDetail-BOiLFqYH.js"),__vite__mapDeps([10,1,2,5,6,9,7]))),Ob=j.lazy(()=>Qe(()=>import("./Cart-DCk2X6Sm.js"),__vite__mapDeps([11,1,2,4,12,7]))),Vb=j.lazy(()=>Qe(()=>import("./Checkout-apS-yRjB.js"),__vite__mapDeps([13,1,2,4,14,7,15]))),xb=j.lazy(()=>Qe(()=>import("./OrderConfirmation-l8Im0vrL.js"),__vite__mapDeps([16,1,2,3,7]))),Lb=j.lazy(()=>Qe(()=>import("./NewsHome-t6qsrN89.js"),__vite__mapDeps([17,1,2,12,18,7]))),Mb=j.lazy(()=>Qe(()=>import("./ArticleDetail-DBYjDjll.js"),__vite__mapDeps([19,1,2,5,9,18,7]))),xl=j.lazy(()=>Qe(()=>import("./Login-D3Ztnsyo.js"),__vite__mapDeps([20,1,2,14,4,7]))),Ub=j.lazy(()=>Qe(()=>import("./Account-B8icu5s4.js"),__vite__mapDeps([21,1,2,7]))),Fb=j.lazy(()=>Qe(()=>import("./AdminDashboard-BMVXA7oe.js"),__vite__mapDeps([22,1,2,3,7])));function jb(){return R.jsx("div",{className:"h-screen flex items-center justify-center",children:R.jsx("div",{className:"w-10 h-10 border-4 border-groove-gold/20 border-t-groove-gold rounded-full animate-spin"})})}function Bb(){const n=ui(t=>t.setUser),e=ui(t=>t.setLoading);return Cb(),j.useEffect(()=>{kb().catch(t=>console.error("Fix images error:",t))},[]),j.useEffect(()=>{const t=AE(Mr,async r=>{if(n(r),e(!1),r)try{const s=await jd(pn(He,"carts",r.uid));if(s.exists()){const i=s.data();i.items&&Array.isArray(i.items)&&Nf.getState().setCart(i.items)}}catch(s){console.error("Error fetching cart from Firebase:",s)}});return()=>t()},[n,e]),j.useEffect(()=>{const t=setInterval(async()=>{const r=Mr.currentUser;if(r&&!r.emailVerified)try{await r.reload(),r.emailVerified&&n(r)}catch{}},3e3);return()=>clearInterval(t)},[]),R.jsx(sm,{options:{clientId:"test",currency:"USD",components:"buttons"},children:R.jsxs(_p,{children:[R.jsx(Sb,{}),R.jsxs("div",{className:"flex flex-col min-h-screen",children:[R.jsx(Ab,{}),R.jsx(Pb,{}),R.jsx("main",{className:"flex-grow",children:R.jsx(j.Suspense,{fallback:R.jsx(jb,{}),children:R.jsxs(yp,{children:[R.jsx(Le,{path:"/",element:R.jsx(Db,{})}),R.jsx(Le,{path:"/tienda",element:R.jsx(Vl,{})}),R.jsx(Le,{path:"/tienda/:categoria",element:R.jsx(Vl,{})}),R.jsx(Le,{path:"/producto/:slug",element:R.jsx(Nb,{})}),R.jsx(Le,{path:"/carrito",element:R.jsx(Ob,{})}),R.jsx(Le,{path:"/checkout",element:R.jsx(Vb,{})}),R.jsx(Le,{path:"/order-confirmation",element:R.jsx(xb,{})}),R.jsx(Le,{path:"/noticias",element:R.jsx(Lb,{})}),R.jsx(Le,{path:"/noticias/:slug",element:R.jsx(Mb,{})}),R.jsx(Le,{path:"/login",element:R.jsx(xl,{})}),R.jsx(Le,{path:"/registro",element:R.jsx(xl,{})}),R.jsx(Le,{path:"/cuenta",element:R.jsx(Ub,{})}),R.jsx(Le,{path:"/admin",element:R.jsx(Fb,{})})]})})}),R.jsx(Rb,{})]})]})})}Ep.createRoot(document.getElementById("root")).render(R.jsx(ze.StrictMode,{children:R.jsx(Vp,{children:R.jsx(Bb,{})})}));export{Nf as A,iI as B,cm as C,Qb as D,lm as M,Hl as P,fm as R,pm as S,te as T,gm as U,Ql as X,hm as a,mm as b,eI as c,Kb as d,Mr as e,Cd as f,ct as g,rI as h,He as i,oI as j,Zb as k,pn as l,uI as m,Bd as n,aI as o,cI as p,Ls as q,tI as r,Jb as s,Yb as t,TE as u,nI as v,ww as w,sI as x,Xb as y,ui as z};
