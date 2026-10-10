import{j as Oe,E as Ne,w as _,b as c,A as y,D as Pe}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();function De(){const e=new Map;return{on(t,a){return e.has(t)||e.set(t,new Set),e.get(t).add(a),()=>e.get(t).delete(a)},emit(t,a){if(e.has(t))for(const r of e.get(t))r(a)}}}function Q(e){let t=e;const a=new Set;return{get:()=>t,set:r=>{t=typeof r=="function"?r(t):r;for(const s of a)s(t)},subscribe:r=>(a.add(r),()=>a.delete(r))}}function Le(e){const t=Q({current:null,params:{}});let a=null;async function r(s){const o=window.location.hash.slice(1)||"/";if(a&&t.get().current&&t.get().current.path!==o&&!await a(o)){window.removeEventListener("hashchange",r),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",r),0);return}const i=e.find(l=>l.path===o)||e[0];t.set({current:i,params:{}})}return window.addEventListener("hashchange",r),r(),{store:t,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){a=s}}}const _e=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"sandbox",path:"/sandbox",title:"API Sandbox",pageTitle:"API Enrichment Sandbox",icon:"code"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,r){this._$Ct=t,this._$AM=a,this._$Ci=r}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Oe,he=e=>e,je=e=>e.strings===void 0,ye=()=>document.createComment(""),q=(e,t,a)=>{var o;const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(a===void 0){const i=r.insertBefore(ye(),s),l=r.insertBefore(ye(),s);a=new ze(i,l,e,e.options)}else{const i=a._$AB.nextSibling,l=a._$AM,n=l!==e;if(n){let v;(o=a._$AQ)==null||o.call(a,e),a._$AM=e,a._$AP!==void 0&&(v=e._$AU)!==l._$AU&&a._$AP(v)}if(i!==s||n){let v=a._$AA;for(;v!==i;){const u=he(v).nextSibling;he(r).insertBefore(v,s),v=u}}}return a},L=(e,t,a=e)=>(e._$AI(t,a),e),Be={},Ue=(e,t=Be)=>e._$AH=t,Ve=e=>e._$AH,le=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,a)=>{const r=new Map;for(let s=t;s<=a;s++)r.set(e[s],s);return r},Te=Ae(class extends Ie{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let r;a===void 0?a=t:t!==void 0&&(r=t);const s=[],o=[];let i=0;for(const l of e)s[i]=r?r(l,i):i,o[i]=a(l,i),i++;return{values:o,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,r]){const s=Ve(e),{values:o,keys:i}=this.dt(t,a,r);if(!Array.isArray(s))return this.ut=i,o;const l=this.ut??(this.ut=[]),n=[];let v,u,m=0,p=s.length-1,g=0,d=o.length-1;for(;m<=p&&g<=d;)if(s[m]===null)m++;else if(s[p]===null)p--;else if(l[m]===i[g])n[g]=L(s[m],o[g]),m++,g++;else if(l[p]===i[d])n[d]=L(s[p],o[d]),p--,d--;else if(l[m]===i[d])n[d]=L(s[m],o[d]),q(e,n[d+1],s[m]),m++,d--;else if(l[p]===i[g])n[g]=L(s[p],o[g]),q(e,s[m],s[p]),p--,g++;else if(v===void 0&&(v=$e(i,g,d),u=$e(l,m,p)),v.has(l[m]))if(v.has(l[p])){const b=u.get(i[g]),f=b!==void 0?s[b]:null;if(f===null){const h=q(e,s[m]);L(h,o[g]),n[g]=h}else n[g]=L(f,o[g]),q(e,s[m],f),s[b]=null;g++}else le(s[p]),p--;else le(s[m]),m++;for(;g<=d;){const b=q(e,n[d+1]);L(b,o[g]),n[g++]=b}for(;m<=p;){const b=s[m++];b!==null&&le(b)}return this.ut=i,Ue(e,n),Ne}}),Ge={x:_`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:_`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:_`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:_`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:_`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:_`<polyline points="20 6 9 17 4 12"></polyline>`,tool:_`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:_`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":_`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:_`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:_`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:_`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:_`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:_`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:_`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:_`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:_`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:_`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":_`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:_`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:t=16,label:a}){const r=Ge[e];return r?c`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${t} height=${t} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    aria-label=${a||e}
    role=${a?"img":"presentation"}
    aria-hidden=${a?"false":"true"}
  >
    ${r}
  </svg>`:c`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",qe="vjCp9N",Ke="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Je="yefrc2",Qe="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",nt="HRKVqM",I={sidebar:Fe,brand:He,logo:qe,title:Ke,nav:We,navItem:Ye,sidebarFooter:Je,toggleBtn:Qe,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:nt},R=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),it=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class V extends Error{constructor(t,{code:a,status:r=0,detail:s=null,cause:o}={}){super(t,{cause:o}),this.name="ApiError",this.code=a,this.status=r,this.detail=s}get retryable(){return this.code===R.NETWORK||this.code===R.TIMEOUT||this.code===R.HTTP&&it.has(this.status)}get userMessage(){switch(this.code){case R.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case R.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case R.ABORTED:return"";case R.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},a=e.fetchImpl??((...d)=>globalThis.fetch(...d)),r={request:[],response:[],error:[]},s=new Map,o=()=>new V("Request aborted",{code:R.ABORTED}),i=(d,b)=>{const f=new URLSearchParams;for(const[S,w]of Object.entries(b??{}))w!=null&&w!==""&&f.set(S,String(w));const h=f.toString();return`${t.baseUrl}${d}${h?"?"+h:""}`};async function l(d){if(d.status===204)return null;const b=d.headers.get("content-type")??"";try{return b.includes("application/json")?await d.json():await d.text()}catch(f){throw new V("Malformed response body",{code:R.PARSE,status:d.status,cause:f})}}async function n(d,b,f){const h=AbortSignal.timeout(f),S=b?AbortSignal.any([b,h]):h;let w;try{w=await a(d.url,{method:d.method,headers:d.headers,body:d.body,signal:S})}catch(A){throw h.aborted?new V(`Request timed out after ${f} ms`,{code:R.TIMEOUT,cause:A}):b!=null&&b.aborted?o():new V("Network request failed",{code:R.NETWORK,cause:A})}const E=await l(w);if(!w.ok)throw new V(lt(E)??`HTTP ${w.status}`,{code:R.HTTP,status:w.status,detail:E});return{status:w.status,data:E,headers:w.headers}}const v=(d,b)=>new Promise((f,h)=>{const S=setTimeout(f,d);b==null||b.addEventListener("abort",()=>{clearTimeout(S),h(o())},{once:!0})}),u=d=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**d);async function m(d,{signal:b,timeoutMs:f,retries:h}){for(let S=0;;S+=1)try{return await n(d,b,f)}catch(w){if(!(w instanceof V)||!w.retryable||S>=h)throw w;await v(u(S),b)}}function p(d,b,f){let h=s.get(d);if(!h){const S=new AbortController,w={controller:S,refs:0,promise:null};w.promise=b(S.signal).finally(()=>{s.get(d)===w&&s.delete(d)}),w.promise.catch(()=>{}),s.set(d,w),h=w}return h.refs+=1,new Promise((S,w)=>{const E=()=>{h.refs-=1,h.refs===0&&(s.get(d)===h&&s.delete(d),h.controller.abort()),w(o())};if(f!=null&&f.aborted){E();return}f==null||f.addEventListener("abort",E,{once:!0}),h.promise.then(A=>{f==null||f.removeEventListener("abort",E),S(A)},A=>{f==null||f.removeEventListener("abort",E),w(A)})})}async function g(d,b,f={}){const{query:h,body:S,headers:w={},signal:E,meta:A={}}=f,B=f.timeoutMs??t.timeoutMs,O=f.retries??(ct.has(d)?t.retries:0),H=f.dedupe??d==="GET";let C={method:d,url:i(b,h),headers:{Accept:"application/json",...w},body:void 0,meta:A};S!==void 0&&(C.body=JSON.stringify(S),C.headers["Content-Type"]="application/json");for(const X of r.request)C=await X(C);const ie=async X=>{try{let U=await m(C,{signal:X,timeoutMs:B,retries:O});for(const D of r.response)U=await D(U,C);return U.data}catch(U){let D=U;for(const Me of r.error)D=await Me(D,C)??D;throw D}};return H?p(`${C.method} ${C.url}`,ie,E):ie(E)}return{get:(d,b)=>g("GET",d,b),post:(d,b,f)=>g("POST",d,{...f,body:b}),put:(d,b,f)=>g("PUT",d,{...f,body:b}),delete:(d,b)=>g("DELETE",d,b),use({request:d,response:b,error:f}){d&&r.request.push(d),b&&r.response.push(b),f&&r.error.push(f)}}}const ce=()=>{};function pt(e,t){return t?new Promise((a,r)=>{const s=()=>r(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(a,r).finally(()=>t.removeEventListener("abort",s))}):e}const ve=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([r],[s])=>r<s?-1:1)):a),vt=(e,t)=>t.every((a,r)=>r<e.length&&ve(a)===ve(e[r]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const a=new Map,r=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function s(n){const v=ve(n);let u=a.get(v);return u||(u={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},u.snapshot=r(u),a.set(v,u)),u}function o(n){n.snapshot=r(n);for(const v of[...n.listeners])v(n.snapshot)}function i(){for(const[n,v]of a)v.listeners.size===0&&!v.promise&&v.updatedAt&&e()-v.updatedAt>t&&a.delete(n)}function l(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(v=>(Object.assign(n,{data:v,error:null,status:"success",updatedAt:e()}),v),v=>{throw Object.assign(n,{error:v,status:"error"}),v}).finally(()=>{n.promise=null,o(n),n.invalidated&&n.listeners.size>0&&l(n).catch(ce)}),n.promise.catch(ce),o(n)),n.promise}return{load(n,v,{staleMs:u=0,signal:m}={}){i();const p=s(n);p.fetcher=v;const g=p.status==="success"&&!p.invalidated&&e()-p.updatedAt<u;return pt(g?Promise.resolve(p.data):l(p),m)},read:n=>s(n).snapshot,subscribe(n,v){const u=s(n);return u.listeners.add(v),v(u.snapshot),()=>{u.listeners.delete(v)}},invalidate(n){for(const v of a.values())vt(v.keyParts,n)&&(v.invalidated=!0,o(v),v.listeners.size>0&&v.fetcher&&l(v).catch(ce))},setData(n,v){const u=s(n),m={data:u.data,status:u.status,updatedAt:u.updatedAt},p=v(u.data);return Object.assign(u,{data:p,status:"success",updatedAt:e()}),o(u),function(){u.data===p&&(Object.assign(u,m),o(u))}}}}function gt(e,{mutationFn:t,optimistic:a,invalidates:r=[]}){return async function(o){const i=((a==null?void 0:a(o))??[]).map(({key:l,update:n})=>e.setData(l,n));try{const l=await t(o);return(typeof r=="function"?r(o,l):r).forEach(v=>e.invalidate(v)),l}catch(l){throw i.reverse().forEach(n=>n()),l}}}const G={},bt=De(),k=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),$=mt();k.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const oe={all:["overview"]},ft={getOverview:e=>$.load(oe.all,()=>k.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Z=!1;function xt(){Z=!Z;const e=document.getElementById("app-sidebar");e&&(Z?e.classList.add(I.expanded):e.classList.remove(I.expanded))}function ht({routes:e,activeId:t,onNavigate:a}){var i,l,n,v;const r=$.read(oe.all),s=((l=(i=r==null?void 0:r.data)==null?void 0:i.telemetry)==null?void 0:l.short_commit)||"6b319ac",o=((v=(n=r==null?void 0:r.data)==null?void 0:n.telemetry)==null?void 0:v.branch)||"main";return c`<aside id="app-sidebar" class="${I.sidebar} ${Z?I.expanded:""}">
    <div class=${I.brand}>
      <div class=${I.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${I.brandText}>
        <div class=${I.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">v0.1.6</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${I.nav}>
      ${Te(e,u=>u.id,u=>c`
        <button class=${I.navItem} aria-current=${u.id===t?"page":"false"}
          @click=${()=>a(u.path)}>
          ${j({name:u.icon,size:16})}
          <span>${u.title}</span>
        </button>
      `)}
    </nav>
    <div class=${I.sidebarFooter}>
      <button class=${I.toggleBtn} @click=${xt}>
        ${j({name:"menu",size:16})}
        <span class=${I.toggleText}>Collapse Menu</span>
      </button>
      <div class=${I.footerDetails}>
        <div class=${I.statusWrapper}>
          <div class=${I.statusDot}></div>
          <span class=${I.statusText}>Manager Online</span>
        </div>
        <div class=${I.branchBox}>
          <span style="color: var(--color-accent);">${o}</span>
          <span class=${I.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",de={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>e??y;function ee(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Et="PSMDQ2",_t={spinner:Et};function kt({size:e=16}={}){return c`<svg class=${_t.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",K={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:t="secondary",size:a="md",icon:r,iconOnly:s=!1,ariaLabel:o,loading:i=!1,disabled:l=!1,type:n="button",id:v,onClick:u}){const m=ee(K.btn,K[`btn--${t}`],K[`btn--${a}`],s&&K["btn--icon-only"]);return c`<button id=${we(v)} class=${m} type=${n}
    aria-label=${we(o)} aria-busy=${i?"true":"false"}
    ?disabled=${l||i} @click=${u}>
    ${i?kt():r?j({name:r,size:a==="sm"?14:16}):y}
    ${s?y:c`<span class=${K.btn__label}>${e}</span>`}
  </button>`}const It=({icon:e,ariaLabel:t,...a})=>x({...a,icon:e,ariaLabel:t,iconOnly:!0,variant:a.variant??"ghost"});function Tt({title:e}){return c`<header class=${de.topbar}>
    <h1 class=${de.title}>${e}</h1>
    <div class=${de.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{$.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=Q({stack:[]});let t=0;function a(s){return new Promise(o=>{const i=`modal-${t+=1}`;let l=!1;const n=v=>{l||(l=!0,e.set(u=>({stack:u.stack.filter(m=>m.id!==i)})),o(v))};e.set(v=>({stack:[...v.stack,{id:i,view:()=>s({close:n,id:i})}]}))})}return{open:a,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Rt=Ct(),te=Rt;function Mt(){const{stack:e}=te.store.get();return c`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Ot="sCMZyq",Nt="Fk5OML",Pt="_0AKuiv",ue={layout:Ot,mainContent:Nt,page:Pt};function Dt({routerStore:e,routes:t,router:a,pageContent:r}){const{current:s}=e;return c`<div class=${ue.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:a.navigate})}
    <div class=${ue.mainContent}>
      ${Tt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${ue.page}>
        ${r}
      </main>
    </div>
    ${Mt()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Ut="r2dRuM",Vt="AjfFun",M={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Ut,table__stale:Vt};function re({id:e,caption:t,columns:a,snapshot:r,getRows:s=u=>(u==null?void 0:u.items)??[],rowKey:o=(u,m)=>m,emptyMessage:i="No records found.",onRetry:l,footer:n=y,fallbackColumns:v=[]}){const{status:u,data:m,error:p,isFetching:g}=r,d=m!==void 0,b=typeof a=="function"?d?a(m):v:a,f=Math.max(b.length,1),h=d?s(m):[],S=(E,A)=>c`<td class=${ee(E.align==="end"&&M["table__cell--end"],E.mono&&M["table__cell--mono"])}>
    ${E.render?E.render(A):St(A[E.key])}</td>`;let w;return!d&&(u==="idle"||u==="loading")?w=Array.from({length:5},()=>c`<tr aria-hidden="true">${b.map(()=>c`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):d?h.length===0?w=c`<tr><td colspan=${f} class=${M.table__message}>${i}</td></tr>`:w=Te(h,o,E=>c`<tr>${b.map(A=>S(A,E))}</tr>`):w=c`<tr><td colspan=${f} class=${M.table__message} role="alert">
      ${(p==null?void 0:p.userMessage)||(p==null?void 0:p.message)||"Failed to load data."}
      ${l?x({label:"Retry",icon:"refresh",size:"sm",onClick:l}):y}</td></tr>`,c`<div class=${M.table}>
    ${u==="error"&&d?c`<div class=${M.table__stale} role="status">Showing cached data. ${(p==null?void 0:p.userMessage)??""} ${l?x({label:"Retry",size:"sm",variant:"ghost",onClick:l}):y}</div>`:y}
    <div class=${M.table__scroll} aria-busy=${g?"true":"false"}>
      <table id=${e??y} class=${M.table__grid}>
        ${t?c`<caption class="u-sr-only">${t}</caption>`:y}
        <thead><tr>${b.map(E=>c`<th scope="col" class=${ee(E.align==="end"&&M["table__cell--end"])}>${E.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const se={all:["pipeline"],columns:["pipeline","columns"]},me={getPipeline:e=>$.load(se.all,()=>k.get("/api/v1/pipeline"),e),getColumns:e=>$.load(se.columns,()=>k.get("/api/v1/pipeline/columns"),e)};function Gt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:a=>c`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[t]}>${a[t]}</span>`})):[]}function Ft(){return{view(){var s,o;const e=$.read(se.all),t=((s=e.data)==null?void 0:s.items)??[],a=((o=e.data)==null?void 0:o.total)??t.length,r=c`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return re({id:"pipeline-table",snapshot:e,columns:i=>Gt((i==null?void 0:i.items)??[]),getRows:i=>(i==null?void 0:i.items)??[],rowKey:(i,l)=>i.id??l,onRetry:()=>me.getPipeline(),footer:r})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(e,t)=>{var r;const a=e._$AN;if(a===void 0)return!1;for(const s of a)(r=s._$AO)==null||r.call(s,t,!1),W(s,t);return!0},ae=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),Kt(t)}};function Ht(e){this._$AN!==void 0?(ae(this),this._$AM=e,Ce(this)):this._$AM=e}function qt(e,t=!1,a=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=a;o<r.length;o++)W(r[o],!1),ae(r[o]);else r!=null&&(W(r,!1),ae(r));else W(this,e)}const Kt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=qt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,r){super._$AT(t,a,r),Ce(this),this.isConnected=t._$AU}_$AO(t,a=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),a&&(W(this,t),ae(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const pe=new WeakMap,Yt=Ae(class extends Wt{render(e){return y}update(e,[t]){var r;const a=t!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),y}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=pe.get(t);a===void 0&&(a=new WeakMap,pe.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=pe.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jt="_9lH80h",Qt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",z={modal:Jt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Qt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function F({title:e,size:t="md",body:a,footer:r=y,onClose:s,dismissible:o=!0}){const i=wt("modal-title"),l=u=>{u&&!u.open&&requestAnimationFrame(()=>{!u.open&&u.isConnected&&u.showModal()})},n=u=>{u.preventDefault(),o&&s(void 0)},v=u=>{o&&u.target===u.currentTarget&&s(void 0)};return c`<dialog class=${ee(z.modal,z[`modal--${t}`])} aria-labelledby=${i}
      ${Yt(l)} @cancel=${n} @click=${v}>
    <div class=${z.modal__panel}>
      <header class=${z.modal__header}>
        <h2 id=${i} class=${z.modal__title}>${e}</h2>
        ${o?It({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):y}
      </header>
      <div class=${z.modal__body}>${a}</div>
      ${r!==y?c`<footer class=${z.modal__footer}>${r}</footer>`:y}
    </div>
  </dialog>`}function fe({title:e,message:t,tone:a="danger",confirmLabel:r="Confirmar",requireText:s}){return new Promise(o=>{let i="";""+Math.random().toString(36).substring(2);const l=()=>{te.open(({close:v})=>F({title:e,body:c`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?c`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${u=>{i=u.target.value,n()}} />
            `:""}
          </div>
        `,footer:c`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{v(),o(!1)}})}
            ${x({label:r,variant:a==="danger"?"delete":"add",disabled:s?i!==s:!1,onClick:()=>{v(),o(!0)}})}
          </div>
        `,onClose:()=>{v(),o(!1)}}))};function n(){te.refresh()}l()})}function ss(){const e=Ft();let t;async function a(){if(await fe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await k.post("/api/v1/pipeline/purge"),me.getPipeline({dedupe:!1})}catch(s){alert("Error purging pipeline: "+s.message)}}return{mount(r){t=$.subscribe(se.all,()=>r()),me.getPipeline()},unmount(){t&&t()},view(){return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${x({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${x({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:()=>alert("Manage Columns")})}
              ${x({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${x({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:a})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${e.view()}
        </div>
      `}}}function as(){return{view(){var v,u,m;const{status:e,data:t,error:a}=$.read(oe.all);if(e==="error")return c`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!t)return c`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const r=t.pipeline_total_items||0,s=t.active_incidents||0,o=t.registered_services||0,i=((v=t.telemetry)==null?void 0:v.branch)||"main",l=((u=t.telemetry)==null?void 0:u.clean)!==!1,n=(p,g,d,b,f="u-text-accent")=>c`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${p}</span>
            <span class="${f}">${j({name:b,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${f}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${g}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${d}>${d}</div>
          </div>
        </div>
      `;return c`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",r,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${n("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",i,l?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
          </div>
          
          <!-- Bottom row: 2 panels -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            <!-- Left panel: Recent Incidents -->
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Recent System Incidents</h3>
                <a href="#/incidents" class="u-text-sm u-text-accent" style="text-decoration: none;">View All</a>
              </div>
              <div style="background: var(--color-bg-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); text-align: center; color: var(--color-text-muted);">
                ✓ No active incidents. All telemetry nominal.
              </div>
            </div>

            <!-- Right panel: Pipeline Stages -->
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Services Pipeline Stages</h3>
                <a href="#/pipeline" class="u-text-sm u-text-accent" style="text-decoration: none;">Open Pipeline</a>
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${(m=t.stages)!=null&&m.length?t.stages.map(p=>c`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${p.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${p.name}</strong> <span class="u-text-muted">(${p.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      <span class="u-text-xs u-text-success">Active</span>
                    </div>
                  </div>
                `):c`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function os(){const e=as();let t;return{mount(a){t=$.subscribe(oe.all,()=>a()),ft.getOverview()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},rs={getTools:e=>$.load(ge.all,()=>k.get("/api/v1/tools"),e)},ns="cg2FU3",is="Jh4yC3",Se={console:ns,output:is};function ls({text:e,status:t="idle"}){return c`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=Q({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,a;const r=async s=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await k.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+o.message}))}};return{mount(s){t=$.subscribe(ge.all,()=>s()),a=e.subscribe(()=>s()),rs.getTools()},unmount(){t&&t(),a&&a()},view(){const{status:s,data:o,error:i,isFetching:l}=$.read(ge.all),n=e.get(),v=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return c`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!o?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:y}
              ${s==="error"&&!o?c`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:y}
              ${v.length===0&&o?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:y}
              
              ${v.map(u=>{var m,p,g;return c`
                <button 
                  class="u-text-left"
                  style="background: ${((m=n.selectedTool)==null?void 0:m.name)===u.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((p=n.selectedTool)==null?void 0:p.name)===u.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(d=>({...d,selectedTool:u,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((g=n.selectedTool)==null?void 0:g.name)===u.name?"u-text-accent":""}">${u.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${u.description}>${u.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${n.selectedTool,"Select a tool to execute"}</h3>
              ${x({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!n.selectedTool||n.executionStatus==="running",loading:n.executionStatus==="running",onClick:()=>r(n.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ls({text:n.output,status:n.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const xe={all:["views"]},Re={getViews:e=>$.load(xe.all,()=>k.get("/api/v1/views"),e)};function ds(){return{view(){var a;const e=$.read(xe.all),t=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!t.length&&e.status!=="loading"?c`
          <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden;">
            <div style="padding: var(--space-4);">
              <div style="font-weight: bold; margin-bottom: var(--space-1); font-size: var(--font-size-md);">No Views Configured</div>
              <div class="u-text-muted u-text-sm">Click "+ Create Custom View" to define an aggregated projection over SERVICES_PIPELINE.</div>
            </div>
            <div style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: var(--space-4); text-align: center; background: var(--color-bg-surface); font-weight: 500;" class="u-text-sm">
              No active views in database. Click "+ Create Custom View" to define a projection.
            </div>
            <div style="padding: var(--space-3) var(--space-4);" class="u-text-sm u-text-muted">
              Showing 0 rows
            </div>
          </div>
        `:re({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Re.getViews()})}}}function us(){const e=ds();let t;return{mount(a){t=$.subscribe(xe.all,()=>a()),Re.getViews()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const P={all:["incidents"],list:e=>[...P.all,e?"resolved":"active"],catalog:["incidents","catalog"]},Y={getIncidents:(e,t)=>$.load(P.list(e),()=>k.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>k.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>$.load(P.catalog,()=>k.get("/api/v1/incidents/catalog/errors"),e)};function Ee({resolved:e}){const t=gt($,{mutationFn:s=>Y.resolveIncident(s.id,s.note),invalidates:[P.all]});async function a(s){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await fe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:o})}catch(l){alert("Failed to resolve incident: "+l.message)}}const r=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>c`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?c`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(s.ID)})}];return{view(){const s=$.read(P.list(e));return re({id:`incidents-table-${e?"resolved":"active"}`,columns:r,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>c`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const a=t.SEVERITY==="CRITICAL"?"danger":"warning";return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>c`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>c`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>c`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=$.read(P.catalog);return re({id:"error-catalog-table",columns:e,snapshot:t,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>Y.getCatalog()})}}}function vs(){const e=Ee({resolved:!1}),t=Ee({resolved:!0}),a=ps(),r=Q({activeTab:"active"});let s,o,i,l;return{mount(n){s=$.subscribe(P.list(!1),()=>n()),o=$.subscribe(P.list(!0),()=>n()),i=$.subscribe(P.catalog,()=>n()),l=r.subscribe(()=>n()),Y.getIncidents(!1),Y.getIncidents(!0),Y.getCatalog()},unmount(){s&&s(),o&&o(),i&&i(),l&&l()},view(){const{activeTab:n}=r.get(),v=(u,m,p)=>{const g=n===u;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${g?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${g?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${g?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>r.set(h=>({...h,activeTab:u}))}
          >
            ${j({name:m,size:16})}
            <span>${p}</span>
          </button>
        `};return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${v("active","alert","Active Incidents")}
              ${v("resolved","check","Resolved")}
              ${v("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():y}
          ${n==="resolved"?t.view():y}
          ${n==="catalog"?a.view():y}
        </div>
      `}}}const be={all:["gitops"]},ms={getGitOps:e=>$.load(be.all,()=>k.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=$.subscribe(be.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=$.read(be.all),{status:a,data:r,error:s,isFetching:o}=t;if(a==="loading"&&!r)return c`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!r)return c`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const i=(r==null?void 0:r.telemetry)||{};return c`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${i.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${i.mounted?"MOUNTED":"NOT MOUNTED"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${i.branch||"N/A"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${i.short_commit||"N/A"} <span class="u-text-muted">(${i.commit||"N/A"})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${i.clean?"u-text-success":"u-text-danger"}">${i.clean?"✓ Clean":"x Dirty"}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${i.last_commit||"N/A"}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `}}}const T={all:["settings"]},bs={getSettings:e=>$.load(T.all,()=>k.get("/api/v1/settings"),e),saveConfig:e=>k.post("/api/v1/settings/config",e),triggerSweep:()=>k.post("/api/v1/settings/sweep"),triggerBackup:()=>k.post("/api/v1/settings/backup")};function fs(e,t={},a=300){const r=Object.keys(t),s=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},o=(i,l,n)=>{var m;const v=((m=l.field_mappings)==null?void 0:m.length)||0,u=Object.keys(l.enrichment_endpoints||{}).join(", ");return c`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${l.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.name.toUpperCase()}</span>
            ${l.enabled?c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${l.poll_interval_seconds?`POLLS EVERY ${l.poll_interval_seconds}S`:`INHERITS GLOBAL (${a}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(p=>({...p,isServiceModalOpen:!0,editingServiceId:i}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${l.base_url||"N/A"} | API Key ${l.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${v}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${u||"none"}</span>
        </div>
      </div>
    `};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${r.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:y}
        ${r.map((i,l)=>o(i,t[i],l===r.length-1))}
      </div>
    </div>
  `}function xs(e){var u;const t=e.get(),a=$.read(T.all),r=((u=a==null?void 0:a.data)==null?void 0:u.services)||{},s=t.editingServiceId?r[t.editingServiceId]:null,o=()=>{e.set(m=>({...m,isServiceModalOpen:!1,editingServiceId:null}))},i=()=>{try{const m=document.getElementById("srv-id").value.trim();if(!m){alert("Service ID is required");return}const p=document.getElementById("srv-enrich").value.trim(),g={};p&&p.split(`
`).forEach(f=>{const h=f.split(":");h.length>=2&&(g[h[0].trim()]=h.slice(1).join(":").trim())});const d={name:document.getElementById("srv-name").value.trim()||m,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:g,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(s==null?void 0:s.field_mappings)||[]},b={...r,[m]:d};t.editingServiceId&&t.editingServiceId!==m&&delete b[t.editingServiceId],$.setData(T.all,()=>({...a.data,services:b})),e.set(f=>({...f,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(m){alert("Error saving service: "+m.stack)}},l=m=>{alert(`Applied preset: ${m}`)},n=c`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${x({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>l("sonarr")})}
      ${x({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>l("radarr")})}
      ${x({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>l("jellyfin")})}
      ${x({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>l("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${(s==null?void 0:s.name)||""}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${t.editingServiceId||""} @input=${m=>{m.target.value=m.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${(s==null?void 0:s.base_url)||""}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${(s==null?void 0:s.api_key)||""}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${s?s.poll_interval_seconds==null:!0}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" .value=${(s==null?void 0:s.primary_endpoint)||"/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending"}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${(s==null?void 0:s.pipeline_key_template)||"{service}:{id}"}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([m,p])=>`${m}: ${p}`).join(`
`):""}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${x({label:"Discover Events from API",variant:"secondary",size:"sm"})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${s?s.enabled:!0}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,v=c`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:o})}
      ${x({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:i})}
    </div>
  `;return F({title:"Register Service",size:"lg",onClose:o,body:n,footer:v})}function hs(e,t=[]){const a=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},r=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?c`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,o)=>{const i=r(s);return c`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${i.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${i.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${i.bg}; color: ${i.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${i.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(l=>({...l,isStageModalOpen:!0,editingStageId:s.id}))})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${s.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${s.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${s.start_condition?s.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${s.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${s.complete_condition?s.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function ys(e){var m;const t=e.get(),a=$.read(T.all),r=((m=a==null?void 0:a.data)==null?void 0:m.stages)||[],s=t.editingStageId?r.find(p=>p.id===t.editingStageId):null,o=t.stageIsSink??(s?!s.complete_condition:!1),i=t.stageIsRoot??(s?!s.start_condition:!1),l=()=>{e.set(p=>({...p,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var p,g;try{const d=document.getElementById("stage-id").value.trim();if(!d){alert("Stage ID is required");return}const b={id:d,name:document.getElementById("stage-name").value.trim()||d,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:i?null:((p=document.getElementById("stage-start"))==null?void 0:p.value.trim())||null,complete_condition:o?null:((g=document.getElementById("stage-complete"))==null?void 0:g.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let f=[...r];t.editingStageId?f=f.map(h=>h.id===t.editingStageId?b:h):f.push(b),$.setData(T.all,()=>({...a.data,stages:f})),e.set(h=>({...h,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(d){alert("Error in Save Stage: "+d.stack)}},v=c`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(s==null?void 0:s.id)||""} ?disabled=${!!s} @input=${p=>{p.target.value=p.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(s==null?void 0:s.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(s==null?void 0:s.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services</label>
      <div class="services-checkbox-grid" style="display: flex; gap: var(--space-3); flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        <span class="u-text-muted u-text-sm">Mock services selection...</span>
      </div>
      <small class="u-text-muted">Select services operating within this pipeline stage.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${i} @change=${p=>e.set(g=>({...g,stageIsRoot:p.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${i?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(s==null?void 0:s.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const p=document.getElementById("stage-start").value;if(!p.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:p})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${o} @change=${p=>e.set(g=>({...g,stageIsSink:p.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(s==null?void 0:s.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const p=document.getElementById("stage-complete").value;if(!p.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:p})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(s==null?void 0:s.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(s==null?void 0:s.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled">
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,u=c`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:l})}
      ${x({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return F({title:"Configure DAG Stage",size:"lg",onClose:l,body:v,footer:u})}function $s(e,t={}){const a=Object.keys(t),r=e.get().selectedMappingService||a[0]||"",s=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},o=()=>{e.set(l=>({...l,isMappingModalOpen:!0}))},i=()=>c`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(n=>({...n,selectedMappingService:l.target.value}))}
        >
          ${a.map(l=>c`<option value="${l}" ?selected=${l===r}>${t[l].name}</option>`)}
        </select>
      </div>
    `;return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Field Mappings & Transformers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Extract payload attributes and map them to sanitized uppercase columns.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${a.length>0?i():y}
        
        ${(()=>{const l=t[r];return!l||!l.field_mappings||l.field_mappings.length===0?c`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:c`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map(n=>c`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${n.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${n.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${n.data_type})</span>
                    ${n.transformer?c`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${n.transformer}</div>`:y}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>alert("Edit mapping (coming soon)")})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete mapping?")})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function ws(e){const t=()=>{e.set(s=>({...s,isMappingModalOpen:!1}))},a=c`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="Selected Service">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId">
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" @input=${s=>{let o=s.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");o=o.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),s.target.value=o}}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select">
        <option value="TEXT">TEXT</option>
        <option value="INTEGER">INTEGER</option>
        <option value="REAL">REAL</option>
        <option value="BOOLEAN">BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value">
      <div class="u-text-xs u-text-muted u-mb-2">
        Leave empty to store direct value. The payload data is in <code>value</code>.<br>
        <strong>Syntax examples:</strong><br>
        • Direct boolean: <code>'anime' in value</code> or <code>value == 'anime'</code><br>
        • Explicit condition: <code>if 'anime' in value then 1 else 0</code><br>
        • Functions: <code>lower(value)</code> or <code>len(value) &gt; 0</code>
      </div>
      
      <div class="u-mt-3">
        <label class="form-label u-text-sm">Test Transformer with Sample Value</label>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder='["anime", "shounen"]' style="flex: 1;">
          ${x({label:"Test Transform",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>
  `,r=c`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return F({title:"Configure Field Mapping & Transformer",size:"lg",onClose:t,body:a,footer:r})}function Ss(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},a=c`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 4px 8px; border-radius: 4px;">Service Name</span>
      <input type="text" list="common-endpoints-list" class="form-input font-mono" placeholder="Select an endpoint below or type custom..." style="flex: 1;">
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${x({label:"Fetch Sample",variant:"test"})}
    </div>
    
    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input type="text" class="form-input" placeholder="🔍 Filter discovered attributes (e.g. episode, id, title)...">
        <!-- UX-01: Add Namespace Prefix input -->
        <input type="text" class="form-input font-mono" placeholder="Namespace prefix (optional, e.g. series, episode)">
      </div>
    </div>
    
    <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); min-height: 150px; text-align: center;">
      <p class="u-text-muted u-text-sm">Click 'Fetch Sample' to inspect JSON schema and keys.</p>
    </div>
  `,r=c`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return F({title:"Sample Service API Schema",size:"lg",onClose:t,body:a,footer:r})}function Es(e,t={}){const a=Object.keys(t.triggers||{}),r=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Test Alert",variant:"test",size:"sm",onClick:()=>alert("Test alert")})}
          ${x({label:"+ Add Trigger",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${a.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:y}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function _s(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},a=c`
    <div class="form-group u-mb-3">
      <label>Trigger ID</label>
      <input type="text" class="form-input font-mono" placeholder="alert_incident">
    </div>
    <div class="form-group u-mb-3">
      <label>Event</label>
      <select class="form-select">
        <option value="ON_INCIDENT_OPEN">Incident Opened</option>
        <option value="ON_INCIDENT_RESOLVED">Incident Resolved</option>
        <option value="ON_PIPELINE_COMPLETE">Pipeline Completed</option>
        <option value="ON_DEPLOY_SUCCESS">Deployment Succeeded</option>
      </select>
    </div>
    <div class="form-group u-mb-3">
      <label>Channel</label>
      <select class="form-select">
        <option value="ntfy">NTFY Push</option>
        <option value="webhook">Generic Webhook</option>
      </select>
    </div>
    <div class="form-group u-mb-3">
      <label>Target URL</label>
      <input type="text" class="form-input" value="http://host.docker.internal:8090">
    </div>
    <div class="form-group u-mb-3">
      <label>Topic (for NTFY)</label>
      <input type="text" class="form-input" value="cubi-alerts">
    </div>
  `,r=c`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return F({title:"Add Notification Trigger",size:"md",onClose:t,body:a,footer:r})}function ks(e,t={}){const a=t.retention_days||30,r=t.global_poll_interval_seconds||300;return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
        <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control data retention, global polling cadence, and inspect custom polling overrides.</p>
      </div>
      
      <div style="padding: var(--space-4);">
        <div class="form-grid-2 u-mb-4">
          <div class="form-group">
            <label>Data Retention (Days)</label>
            <input type="number" class="form-input" min="1" max="365" .value=${a}>
            <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
          </div>
          <div class="form-group">
            <label>Global Polling Interval (Seconds)</label>
            <input type="number" class="form-input" min="10" max="86400" .value=${r}>
            <small class="u-text-muted">Default polling cadence for all services unless specifically overridden.</small>
          </div>
        </div>

        <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-4">
          <div class="u-flex u-justify-between u-items-center u-mb-2">
            <h4 class="u-text-sm u-font-bold u-mb-0" style="color: var(--color-text);">Custom Polling Overrides</h4>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">0 Overrides</span>
          </div>
          <p class="u-text-xs u-text-muted u-mb-2">Services with explicit polling rates that override the global interval.</p>
          <div class="u-text-sm u-text-muted">No explicit overrides configured.</div>
        </div>

        <div style="display: grid; gap: var(--space-2); background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px dashed var(--color-border);" class="u-mb-4">
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">SQLite Journal Mode:</span>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">WAL (Write-Ahead Logging)</span>
          </div>
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">Scheduler Engine:</span>
            <span class="u-font-mono u-text-xs" style="color: var(--color-text);">Active (Async Loops)</span>
          </div>
        </div>

        ${x({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}function As(e){const t=Q({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,r;const s=o=>{t.get().isDirty&&(o.preventDefault(),o.returnValue="")};return{mount(o){a=t.subscribe(()=>o()),r=$.subscribe(T.all,()=>o()),bs.getSettings(),window.addEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(async i=>t.get().isDirty?await fe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),r&&r(),window.removeEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(null)},view(){const o=t.get(),{activeTab:i,saving:l,isServiceModalOpen:n,isStageModalOpen:v,isMappingModalOpen:u,isSampleApiModalOpen:m,isNotificationModalOpen:p}=o,g=$.read(T.all),{data:d,status:b,error:f}=g;if(b==="loading"&&!d)return c`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!d)return c`<p class="u-text-danger">Error: ${f==null?void 0:f.message}</p>`;const h={retention_days:(d==null?void 0:d.retention_days)||30,global_poll_interval_seconds:(d==null?void 0:d.global_poll_interval_seconds)||300},S=(d==null?void 0:d.services)||{},w=(d==null?void 0:d.stages)||[],E=h.global_poll_interval_seconds,A=(B,O,H)=>{const C=i===B;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${C?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${C?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${C?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(D=>({...D,activeTab:B}))}
          >
            ${j({name:O,size:16})}
            <span>${H}</span>
          </button>
        `};return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${A("services","database","Services")}
              ${A("stages","activity","Stages & Predicates")}
              ${A("mappings","code","Field Mappings")}
              ${A("notifications","bell","Notification Triggers")}
              ${A("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:l,disabled:!o.isDirty,onClick:async()=>{const B=$.read(T.all);t.set(O=>({...O,saving:!0}));try{await k.post("/api/v1/settings",B.data),t.set(O=>({...O,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(O){alert("Error saving settings: "+O.message),t.set(H=>({...H,saving:!1}))}}})}
              ${o.isDirty?c`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:y}
            </div>
            </div>
          </div>
          
          ${i==="services"?fs(t,S,E):y}
          ${i==="stages"?hs(t,w):y}
          ${i==="mappings"?$s(t,S):y}
          ${i==="notifications"?Es(t,d):y}
          ${i==="engine"?ks(t,h):y}
          
          <!-- Modals -->
          ${n?xs(t):y}
          ${v?ys(t):y}
          ${u?ws(t):y}
          ${m?Ss(t):y}
          ${p?_s(t):y}
        </div>
      `}}}function Is(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1};const t=new Set;return{get:()=>e,set:a=>{e=a(e),t.forEach(r=>r())},subscribe:a=>(t.add(a),()=>t.delete(a))}}function Ts(){const e=Is(),t=async()=>{var b,f;const o=e.get(),{selectedService:i,selectedRecordId:l,testEndpoint:n,testName:v}=o;if(!i||!l){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!n.trim()){alert("Please enter an endpoint to test.");return}const u=$.read(T.all),p=(((b=u==null?void 0:u.data)==null?void 0:b.services)||{})[i],g={...(p==null?void 0:p.enrichment_endpoints)||{}},d=v.trim()||"sandbox_test";g[d]=n.trim(),e.set(h=>({...h,isLoading:!0,error:null,logs:[],testResponse:null}));try{const h=await k.post("/api/v1/pipeline/sandbox/enrichment",{service_id:i,record_id:parseInt(l,10),enrichment_endpoints:g}),S=((f=h.context_data)==null?void 0:f[d])||null;e.set(w=>({...w,isLoading:!1,logs:h.logs||[],testResponse:S}))}catch(h){e.set(S=>({...S,isLoading:!1,error:h.message}))}},a=async()=>{var d;const o=e.get();if(!o.selectedService)return;const i=$.read(T.all),l=((d=i==null?void 0:i.data)==null?void 0:d.services)||{},n=l[o.selectedService],v={...(n==null?void 0:n.enrichment_endpoints)||{}},u=o.testName.trim(),m=o.testEndpoint.trim();if(!u||!m){alert("Please provide both a namespace name and an endpoint to save.");return}v[u]=m;const p={...l,[o.selectedService]:{...n,enrichment_endpoints:v}},g={...i.data,services:p};try{await k.post("/api/v1/settings/config",g),$.setData(T.all,()=>g),e.set(b=>({...b,saveSuccess:!0})),setTimeout(()=>{e.set(b=>({...b,saveSuccess:!1}))},3e3)}catch(b){alert("Failed to save to service: "+b.message)}},r=()=>{var u;const o=e.get(),i=$.read(T.all),l=((u=i==null?void 0:i.data)==null?void 0:u.services)||{},n=Object.keys(l),v=l[o.selectedService];return!o.selectedService&&n.length>0&&setTimeout(()=>e.set(m=>({...m,selectedService:n[0]})),0),c`
      <div class="page-container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; height: 100vh;">
        <header class="page-header u-mb-4" style="flex-shrink: 0;">
          <div class="u-flex u-items-center u-gap-3 u-mb-2">
            <h1 class="page-title u-m-0">API Enrichment Sandbox</h1>
            <span class="badge" style="background: var(--color-accent); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">BETA</span>
          </div>
        </header>

        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${m=>e.set(p=>({...p,selectedService:m.target.value}))} style="border: 1px solid var(--color-text);">
              ${n.length===0?c`<option value="">No services</option>`:y}
              ${n.map(m=>c`<option value=${m} ?selected=${o.selectedService===m}>${l[m].name||m}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${o.selectedRecordId} @input=${m=>e.set(p=>({...p,selectedRecordId:m.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:t,disabled:o.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${o.testName} @input=${m=>e.set(p=>({...p,testName:m.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:a,disabled:o.isLoading})}
            ${o.saveSuccess?c`<span style="color: var(--color-success);">${j({name:"check"})}</span>`:y}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${o.testEndpoint} @input=${m=>e.set(p=>({...p,testEndpoint:m.target.value}))}></textarea>
            </div>
            
            <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: var(--color-text-muted); font-family: monospace; font-size: 0.85rem;">
              ${o.isLoading?"Running test...":y}
              ${o.error?c`<div style="color: var(--color-error);">${o.error}</div>`:y}
              ${!o.isLoading&&!o.error&&o.testResponse?c`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(o.testResponse,null,2)}</pre>`:y}
              ${!o.isLoading&&!o.error&&!o.testResponse&&o.logs.length>0?c`<div style="color: var(--color-warning);">Endpoint returned empty or failed. Check logs: ${o.logs.join(`
`)}</div>`:y}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((v==null?void 0:v.enrichment_endpoints)||{}).length===0?c`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:y}
              
              ${Object.entries((v==null?void 0:v.enrichment_endpoints)||{}).map(([m,p])=>c`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(g=>({...g,testName:m,testEndpoint:p}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${m}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${p}>${p}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let s;return{view:r,mount:o=>{s=e.subscribe(o);const i=$.read(T.all);i!=null&&i.data||k.get("/api/v1/settings").then(l=>{$.setData(T.all,()=>l),e.set(n=>({...n}))}).catch(console.error)},unmount:()=>{s&&s()}}}const J=Le(_e),Cs={overview:os(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),sandbox:Ts(),gitops:gs(),settings:As(J)};let N=null;function ne(){var a,r,s,o;const{current:e}=J.store.get();N&&N.id!==e.id&&((r=(a=N.instance).unmount)==null||r.call(a),N=null),!N&&e&&(N={id:e.id,instance:Cs[e.id]},(o=(s=N.instance).mount)==null||o.call(s,ne));const t=N?N.instance.view():"";Pe(Dt({routerStore:J.store.get(),routes:_e,router:J,pageContent:t}),document.getElementById("app"))}J.store.subscribe(ne);te.store.subscribe(ne);ne();
