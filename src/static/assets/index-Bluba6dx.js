import{j as Oe,E as Ne,w as _,b as u,A as y,D as Pe}from"./vendor-LJTP5CNr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function De(){const e=new Map;return{on(s,a){return e.has(s)||e.set(s,new Set),e.get(s).add(a),()=>e.get(s).delete(a)},emit(s,a){if(e.has(s))for(const o of e.get(s))o(a)}}}function Q(e){let s=e;const a=new Set;return{get:()=>s,set:o=>{s=typeof o=="function"?o(s):o;for(const t of a)t(s)},subscribe:o=>(a.add(o),()=>a.delete(o))}}function Le(e){const s=Q({current:null,params:{}});let a=null;async function o(t){const r=window.location.hash.slice(1)||"/";if(a&&s.get().current&&s.get().current.path!==r&&!await a(r)){window.removeEventListener("hashchange",o),window.location.hash=s.get().current.path,setTimeout(()=>window.addEventListener("hashchange",o),0);return}const i=e.find(l=>l.path===r)||e[0];s.set({current:i,params:{}})}return window.addEventListener("hashchange",o),o(),{store:s,navigate(t){window.location.hash=t},setBeforeNavigateHook(t){a=t}}}const _e=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"sandbox",path:"/sandbox",title:"API Sandbox",pageTitle:"API Enrichment Sandbox",icon:"code"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Ae=e=>(...s)=>({_$litDirective$:e,values:s});let Ie=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,a,o){this._$Ct=s,this._$AM=a,this._$Ci=o}_$AS(s,a){return this.update(s,a)}update(s,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Oe,he=e=>e,je=e=>e.strings===void 0,ye=()=>document.createComment(""),q=(e,s,a)=>{var r;const o=e._$AA.parentNode,t=s===void 0?e._$AB:s._$AA;if(a===void 0){const i=o.insertBefore(ye(),t),l=o.insertBefore(ye(),t);a=new ze(i,l,e,e.options)}else{const i=a._$AB.nextSibling,l=a._$AM,n=l!==e;if(n){let p;(r=a._$AQ)==null||r.call(a,e),a._$AM=e,a._$AP!==void 0&&(p=e._$AU)!==l._$AU&&a._$AP(p)}if(i!==t||n){let p=a._$AA;for(;p!==i;){const c=he(p).nextSibling;he(o).insertBefore(p,t),p=c}}}return a},L=(e,s,a=e)=>(e._$AI(s,a),e),Be={},Ue=(e,s=Be)=>e._$AH=s,Ve=e=>e._$AH,le=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,s,a)=>{const o=new Map;for(let t=s;t<=a;t++)o.set(e[t],t);return o},Te=Ae(class extends Ie{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,a){let o;a===void 0?a=s:s!==void 0&&(o=s);const t=[],r=[];let i=0;for(const l of e)t[i]=o?o(l,i):i,r[i]=a(l,i),i++;return{values:r,keys:t}}render(e,s,a){return this.dt(e,s,a).values}update(e,[s,a,o]){const t=Ve(e),{values:r,keys:i}=this.dt(s,a,o);if(!Array.isArray(t))return this.ut=i,r;const l=this.ut??(this.ut=[]),n=[];let p,c,v=0,m=t.length-1,b=0,d=r.length-1;for(;v<=m&&b<=d;)if(t[v]===null)v++;else if(t[m]===null)m--;else if(l[v]===i[b])n[b]=L(t[v],r[b]),v++,b++;else if(l[m]===i[d])n[d]=L(t[m],r[d]),m--,d--;else if(l[v]===i[d])n[d]=L(t[v],r[d]),q(e,n[d+1],t[v]),v++,d--;else if(l[m]===i[b])n[b]=L(t[m],r[b]),q(e,t[v],t[m]),m--,b++;else if(p===void 0&&(p=$e(i,b,d),c=$e(l,v,m)),p.has(l[v]))if(p.has(l[m])){const f=c.get(i[b]),g=f!==void 0?t[f]:null;if(g===null){const h=q(e,t[v]);L(h,r[b]),n[b]=h}else n[b]=L(g,r[b]),q(e,t[v],g),t[f]=null;b++}else le(t[m]),m--;else le(t[v]),v++;for(;b<=d;){const f=q(e,n[d+1]);L(f,r[b]),n[b++]=f}for(;v<=m;){const f=t[v++];f!==null&&le(f)}return this.ut=i,Ue(e,n),Ne}}),Ge={x:_`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:_`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:_`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:_`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:_`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:_`<polyline points="20 6 9 17 4 12"></polyline>`,tool:_`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:_`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":_`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:_`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:_`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:_`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:_`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:_`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:_`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:_`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:_`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:_`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":_`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:_`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:s=16,label:a}){const o=Ge[e];return o?u`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${s} height=${s} 
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
    ${o}
  </svg>`:u`<span style="width:${s}px; height:${s}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",qe="vjCp9N",Ke="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Je="yefrc2",Qe="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",nt="HRKVqM",I={sidebar:Fe,brand:He,logo:qe,title:Ke,nav:We,navItem:Ye,sidebarFooter:Je,toggleBtn:Qe,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:nt},R=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),it=new Set([502,503,504]);function lt(e){const s=e&&typeof e=="object"?e.detail:null;return typeof s=="string"?s:Array.isArray(s)?s.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class V extends Error{constructor(s,{code:a,status:o=0,detail:t=null,cause:r}={}){super(s,{cause:r}),this.name="ApiError",this.code=a,this.status=o,this.detail=t}get retryable(){return this.code===R.NETWORK||this.code===R.TIMEOUT||this.code===R.HTTP&&it.has(this.status)}get userMessage(){switch(this.code){case R.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case R.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case R.ABORTED:return"";case R.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const s={...dt,...e},a=e.fetchImpl??((...d)=>globalThis.fetch(...d)),o={request:[],response:[],error:[]},t=new Map,r=()=>new V("Request aborted",{code:R.ABORTED}),i=(d,f)=>{const g=new URLSearchParams;for(const[S,w]of Object.entries(f??{}))w!=null&&w!==""&&g.set(S,String(w));const h=g.toString();return`${s.baseUrl}${d}${h?"?"+h:""}`};async function l(d){if(d.status===204)return null;const f=d.headers.get("content-type")??"";try{return f.includes("application/json")?await d.json():await d.text()}catch(g){throw new V("Malformed response body",{code:R.PARSE,status:d.status,cause:g})}}async function n(d,f,g){const h=AbortSignal.timeout(g),S=f?AbortSignal.any([f,h]):h;let w;try{w=await a(d.url,{method:d.method,headers:d.headers,body:d.body,signal:S})}catch(A){throw h.aborted?new V(`Request timed out after ${g} ms`,{code:R.TIMEOUT,cause:A}):f!=null&&f.aborted?r():new V("Network request failed",{code:R.NETWORK,cause:A})}const E=await l(w);if(!w.ok)throw new V(lt(E)??`HTTP ${w.status}`,{code:R.HTTP,status:w.status,detail:E});return{status:w.status,data:E,headers:w.headers}}const p=(d,f)=>new Promise((g,h)=>{const S=setTimeout(g,d);f==null||f.addEventListener("abort",()=>{clearTimeout(S),h(r())},{once:!0})}),c=d=>Math.random()*Math.min(s.retryMaxMs,s.retryBaseMs*2**d);async function v(d,{signal:f,timeoutMs:g,retries:h}){for(let S=0;;S+=1)try{return await n(d,f,g)}catch(w){if(!(w instanceof V)||!w.retryable||S>=h)throw w;await p(c(S),f)}}function m(d,f,g){let h=t.get(d);if(!h){const S=new AbortController,w={controller:S,refs:0,promise:null};w.promise=f(S.signal).finally(()=>{t.get(d)===w&&t.delete(d)}),w.promise.catch(()=>{}),t.set(d,w),h=w}return h.refs+=1,new Promise((S,w)=>{const E=()=>{h.refs-=1,h.refs===0&&(t.get(d)===h&&t.delete(d),h.controller.abort()),w(r())};if(g!=null&&g.aborted){E();return}g==null||g.addEventListener("abort",E,{once:!0}),h.promise.then(A=>{g==null||g.removeEventListener("abort",E),S(A)},A=>{g==null||g.removeEventListener("abort",E),w(A)})})}async function b(d,f,g={}){const{query:h,body:S,headers:w={},signal:E,meta:A={}}=g,B=g.timeoutMs??s.timeoutMs,O=g.retries??(ct.has(d)?s.retries:0),H=g.dedupe??d==="GET";let C={method:d,url:i(f,h),headers:{Accept:"application/json",...w},body:void 0,meta:A};S!==void 0&&(C.body=JSON.stringify(S),C.headers["Content-Type"]="application/json");for(const X of o.request)C=await X(C);const ie=async X=>{try{let U=await v(C,{signal:X,timeoutMs:B,retries:O});for(const D of o.response)U=await D(U,C);return U.data}catch(U){let D=U;for(const Me of o.error)D=await Me(D,C)??D;throw D}};return H?m(`${C.method} ${C.url}`,ie,E):ie(E)}return{get:(d,f)=>b("GET",d,f),post:(d,f,g)=>b("POST",d,{...g,body:f}),put:(d,f,g)=>b("PUT",d,{...g,body:f}),delete:(d,f)=>b("DELETE",d,f),use({request:d,response:f,error:g}){d&&o.request.push(d),f&&o.response.push(f),g&&o.error.push(g)}}}const ce=()=>{};function pt(e,s){return s?new Promise((a,o)=>{const t=()=>o(new DOMException("Aborted","AbortError"));if(s.aborted){t();return}s.addEventListener("abort",t,{once:!0}),e.then(a,o).finally(()=>s.removeEventListener("abort",t))}):e}const ve=e=>JSON.stringify(e,(s,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([o],[t])=>o<t?-1:1)):a),vt=(e,s)=>s.every((a,o)=>o<e.length&&ve(a)===ve(e[o]));function mt({now:e=()=>Date.now(),gcMs:s=5*6e4}={}){const a=new Map,o=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function t(n){const p=ve(n);let c=a.get(p);return c||(c={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},c.snapshot=o(c),a.set(p,c)),c}function r(n){n.snapshot=o(n);for(const p of[...n.listeners])p(n.snapshot)}function i(){for(const[n,p]of a)p.listeners.size===0&&!p.promise&&p.updatedAt&&e()-p.updatedAt>s&&a.delete(n)}function l(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(p=>(Object.assign(n,{data:p,error:null,status:"success",updatedAt:e()}),p),p=>{throw Object.assign(n,{error:p,status:"error"}),p}).finally(()=>{n.promise=null,r(n),n.invalidated&&n.listeners.size>0&&l(n).catch(ce)}),n.promise.catch(ce),r(n)),n.promise}return{load(n,p,{staleMs:c=0,signal:v}={}){i();const m=t(n);m.fetcher=p;const b=m.status==="success"&&!m.invalidated&&e()-m.updatedAt<c;return pt(b?Promise.resolve(m.data):l(m),v)},read:n=>t(n).snapshot,subscribe(n,p){const c=t(n);return c.listeners.add(p),p(c.snapshot),()=>{c.listeners.delete(p)}},invalidate(n){for(const p of a.values())vt(p.keyParts,n)&&(p.invalidated=!0,r(p),p.listeners.size>0&&p.fetcher&&l(p).catch(ce))},setData(n,p){const c=t(n),v={data:c.data,status:c.status,updatedAt:c.updatedAt},m=p(c.data);return Object.assign(c,{data:m,status:"success",updatedAt:e()}),r(c),function(){c.data===m&&(Object.assign(c,v),r(c))}}}}function gt(e,{mutationFn:s,optimistic:a,invalidates:o=[]}){return async function(r){const i=((a==null?void 0:a(r))??[]).map(({key:l,update:n})=>e.setData(l,n));try{const l=await s(r);return(typeof o=="function"?o(r,l):o).forEach(p=>e.invalidate(p)),l}catch(l){throw i.reverse().forEach(n=>n()),l}}}const G={},bt=De(),k=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),$=mt();k.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const oe={all:["overview"]},ft={getOverview:e=>$.load(oe.all,()=>k.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Z=!1;function xt(){Z=!Z;const e=document.getElementById("app-sidebar");e&&(Z?e.classList.add(I.expanded):e.classList.remove(I.expanded))}function ht({routes:e,activeId:s,onNavigate:a}){var i,l,n,p;const o=$.read(oe.all),t=((l=(i=o==null?void 0:o.data)==null?void 0:i.telemetry)==null?void 0:l.short_commit)||"6b319ac",r=((p=(n=o==null?void 0:o.data)==null?void 0:n.telemetry)==null?void 0:p.branch)||"main";return u`<aside id="app-sidebar" class="${I.sidebar} ${Z?I.expanded:""}">
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
      ${Te(e,c=>c.id,c=>u`
        <button class=${I.navItem} aria-current=${c.id===s?"page":"false"}
          @click=${()=>a(c.path)}>
          ${j({name:c.icon,size:16})}
          <span>${c.title}</span>
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
          <span style="color: var(--color-accent);">${r}</span>
          <span class=${I.commitText}>${t}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",de={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>e??y;function ee(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Et="PSMDQ2",_t={spinner:Et};function kt({size:e=16}={}){return u`<svg class=${_t.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",K={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:s="secondary",size:a="md",icon:o,iconOnly:t=!1,ariaLabel:r,loading:i=!1,disabled:l=!1,type:n="button",id:p,onClick:c}){const v=ee(K.btn,K[`btn--${s}`],K[`btn--${a}`],t&&K["btn--icon-only"]);return u`<button id=${we(p)} class=${v} type=${n}
    aria-label=${we(r)} aria-busy=${i?"true":"false"}
    ?disabled=${l||i} @click=${c}>
    ${i?kt():o?j({name:o,size:a==="sm"?14:16}):y}
    ${t?y:u`<span class=${K.btn__label}>${e}</span>`}
  </button>`}const It=({icon:e,ariaLabel:s,...a})=>x({...a,icon:e,ariaLabel:s,iconOnly:!0,variant:a.variant??"ghost"});function Tt({title:e}){return u`<header class=${de.topbar}>
    <h1 class=${de.title}>${e}</h1>
    <div class=${de.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{$.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=Q({stack:[]});let s=0;function a(t){return new Promise(r=>{const i=`modal-${s+=1}`;let l=!1;const n=p=>{l||(l=!0,e.set(c=>({stack:c.stack.filter(v=>v.id!==i)})),r(p))};e.set(p=>({stack:[...p.stack,{id:i,view:()=>t({close:n,id:i})}]}))})}return{open:a,refresh:()=>e.set(t=>({stack:[...t.stack]})),store:e}}const Rt=Ct(),te=Rt;function Mt(){const{stack:e}=te.store.get();return u`<div id="modal-root">${e.map(s=>s.view())}</div>`}const Ot="sCMZyq",Nt="Fk5OML",Pt="_0AKuiv",ue={layout:Ot,mainContent:Nt,page:Pt};function Dt({routerStore:e,routes:s,router:a,pageContent:o}){const{current:t}=e;return u`<div class=${ue.layout}>
    ${ht({routes:s,activeId:t==null?void 0:t.id,onNavigate:a.navigate})}
    <div class=${ue.mainContent}>
      ${Tt({title:(t==null?void 0:t.pageTitle)||(t==null?void 0:t.title)||""})}
      <main class=${ue.page}>
        ${o}
      </main>
    </div>
    ${Mt()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Ut="r2dRuM",Vt="AjfFun",M={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Ut,table__stale:Vt};function re({id:e,caption:s,columns:a,snapshot:o,getRows:t=c=>(c==null?void 0:c.items)??[],rowKey:r=(c,v)=>v,emptyMessage:i="No records found.",onRetry:l,footer:n=y,fallbackColumns:p=[]}){const{status:c,data:v,error:m,isFetching:b}=o,d=v!==void 0,f=typeof a=="function"?d?a(v):p:a,g=Math.max(f.length,1),h=d?t(v):[],S=(E,A)=>u`<td class=${ee(E.align==="end"&&M["table__cell--end"],E.mono&&M["table__cell--mono"])}>
    ${E.render?E.render(A):St(A[E.key])}</td>`;let w;return!d&&(c==="idle"||c==="loading")?w=Array.from({length:5},()=>u`<tr aria-hidden="true">${f.map(()=>u`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):d?h.length===0?w=u`<tr><td colspan=${g} class=${M.table__message}>${i}</td></tr>`:w=Te(h,r,E=>u`<tr>${f.map(A=>S(A,E))}</tr>`):w=u`<tr><td colspan=${g} class=${M.table__message} role="alert">
      ${(m==null?void 0:m.userMessage)||(m==null?void 0:m.message)||"Failed to load data."}
      ${l?x({label:"Retry",icon:"refresh",size:"sm",onClick:l}):y}</td></tr>`,u`<div class=${M.table}>
    ${c==="error"&&d?u`<div class=${M.table__stale} role="status">Showing cached data. ${(m==null?void 0:m.userMessage)??""} ${l?x({label:"Retry",size:"sm",variant:"ghost",onClick:l}):y}</div>`:y}
    <div class=${M.table__scroll} aria-busy=${b?"true":"false"}>
      <table id=${e??y} class=${M.table__grid}>
        ${s?u`<caption class="u-sr-only">${s}</caption>`:y}
        <thead><tr>${f.map(E=>u`<th scope="col" class=${ee(E.align==="end"&&M["table__cell--end"])}>${E.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const se={all:["pipeline"],columns:["pipeline","columns"]},me={getPipeline:e=>$.load(se.all,()=>k.get("/api/v1/pipeline"),e),getColumns:e=>$.load(se.columns,()=>k.get("/api/v1/pipeline/columns"),e)};function Gt(e=[]){return e.length?Object.keys(e[0]).map(s=>({key:s,header:s.toUpperCase(),render:a=>u`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[s]}>${a[s]}</span>`})):[]}function Ft(){return{view(){var t,r;const e=$.read(se.all),s=((t=e.data)==null?void 0:t.items)??[],a=((r=e.data)==null?void 0:r.total)??s.length,o=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${s.length?"1":"0"}-${s.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return re({id:"pipeline-table",snapshot:e,columns:i=>Gt((i==null?void 0:i.items)??[]),getRows:i=>(i==null?void 0:i.items)??[],rowKey:(i,l)=>i.id??l,onRetry:()=>me.getPipeline(),footer:o})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(e,s)=>{var o;const a=e._$AN;if(a===void 0)return!1;for(const t of a)(o=t._$AO)==null||o.call(t,s,!1),W(t,s);return!0},ae=e=>{let s,a;do{if((s=e._$AM)===void 0)break;a=s._$AN,a.delete(e),e=s}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let s;s=e._$AM;e=s){let a=s._$AN;if(a===void 0)s._$AN=a=new Set;else if(a.has(e))break;a.add(e),Kt(s)}};function Ht(e){this._$AN!==void 0?(ae(this),this._$AM=e,Ce(this)):this._$AM=e}function qt(e,s=!1,a=0){const o=this._$AH,t=this._$AN;if(t!==void 0&&t.size!==0)if(s)if(Array.isArray(o))for(let r=a;r<o.length;r++)W(o[r],!1),ae(o[r]);else o!=null&&(W(o,!1),ae(o));else W(this,e)}const Kt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=qt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,a,o){super._$AT(s,a,o),Ce(this),this.isConnected=s._$AU}_$AO(s,a=!0){var o,t;s!==this.isConnected&&(this.isConnected=s,s?(o=this.reconnected)==null||o.call(this):(t=this.disconnected)==null||t.call(this)),a&&(W(this,s),ae(this))}setValue(s){if(je(this._$Ct))this._$Ct._$AI(s,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=s,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const pe=new WeakMap,Yt=Ae(class extends Wt{render(e){return y}update(e,[s]){var o;const a=s!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=s,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),y}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let a=pe.get(s);a===void 0&&(a=new WeakMap,pe.set(s,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,s;return typeof this.G=="function"?(e=pe.get(this.ht??globalThis))==null?void 0:e.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jt="_9lH80h",Qt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",z={modal:Jt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Qt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function F({title:e,size:s="md",body:a,footer:o=y,onClose:t,dismissible:r=!0}){const i=wt("modal-title"),l=c=>{c&&!c.open&&requestAnimationFrame(()=>{!c.open&&c.isConnected&&c.showModal()})},n=c=>{c.preventDefault(),r&&t(void 0)},p=c=>{r&&c.target===c.currentTarget&&t(void 0)};return u`<dialog class=${ee(z.modal,z[`modal--${s}`])} aria-labelledby=${i}
      ${Yt(l)} @cancel=${n} @click=${p}>
    <div class=${z.modal__panel}>
      <header class=${z.modal__header}>
        <h2 id=${i} class=${z.modal__title}>${e}</h2>
        ${r?It({icon:"x",ariaLabel:"Close dialog",onClick:()=>t(void 0)}):y}
      </header>
      <div class=${z.modal__body}>${a}</div>
      ${o!==y?u`<footer class=${z.modal__footer}>${o}</footer>`:y}
    </div>
  </dialog>`}function fe({title:e,message:s,tone:a="danger",confirmLabel:o="Confirmar",requireText:t}){return new Promise(r=>{let i="";""+Math.random().toString(36).substring(2);const l=()=>{te.open(({close:p})=>F({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${s}</p>
            ${t?u`
              <p class="u-text-sm u-text-muted">Escribe <strong>${t}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${c=>{i=c.target.value,n()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{p(),r(!1)}})}
            ${x({label:o,variant:a==="danger"?"delete":"add",disabled:t?i!==t:!1,onClick:()=>{p(),r(!0)}})}
          </div>
        `,onClose:()=>{p(),r(!1)}}))};function n(){te.refresh()}l()})}function ss(){const e=Ft();let s;async function a(){if(await fe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await k.post("/api/v1/pipeline/purge"),me.getPipeline({dedupe:!1})}catch(t){alert("Error purging pipeline: "+t.message)}}return{mount(o){s=$.subscribe(se.all,()=>o()),me.getPipeline()},unmount(){s&&s()},view(){return u`
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
      `}}}function as(){return{view(){var p,c,v;const{status:e,data:s,error:a}=$.read(oe.all);if(e==="error")return u`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!s)return u`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const o=s.pipeline_total_items||0,t=s.active_incidents||0,r=s.registered_services||0,i=((p=s.telemetry)==null?void 0:p.branch)||"main",l=((c=s.telemetry)==null?void 0:c.clean)!==!1,n=(m,b,d,f,g="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${m}</span>
            <span class="${g}">${j({name:f,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${g}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${b}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${d}>${d}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",o,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",t,t>0?`${t} critical anomalies`:"0 critical anomalies","alert",(t>0,"u-text-danger"))}
            ${n("Active Services",r,"Configured upstream services","play","u-text-success")}
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
                ${(v=s.stages)!=null&&v.length?s.stages.map(m=>u`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${m.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${m.name}</strong> <span class="u-text-muted">(${m.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      <span class="u-text-xs u-text-success">Active</span>
                    </div>
                  </div>
                `):u`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function os(){const e=as();let s;return{mount(a){s=$.subscribe(oe.all,()=>a()),ft.getOverview()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},rs={getTools:e=>$.load(ge.all,()=>k.get("/api/v1/tools"),e)},ns="cg2FU3",is="Jh4yC3",Se={console:ns,output:is};function ls({text:e,status:s="idle"}){return u`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=Q({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let s,a;const o=async t=>{e.set(r=>({...r,executionStatus:"running",output:`Executing...
`}));try{const r=await k.post(`/api/v1/tools/${encodeURIComponent(t.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(r,null,2)}))}catch(r){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+r.message}))}};return{mount(t){s=$.subscribe(ge.all,()=>t()),a=e.subscribe(()=>t()),rs.getTools()},unmount(){s&&s(),a&&a()},view(){const{status:t,data:r,error:i,isFetching:l}=$.read(ge.all),n=e.get(),p=Array.isArray(r)?r:(r==null?void 0:r.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${t==="loading"&&!r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:y}
              ${t==="error"&&!r?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:y}
              ${p.length===0&&r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:y}
              
              ${p.map(c=>{var v,m,b;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((v=n.selectedTool)==null?void 0:v.name)===c.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((m=n.selectedTool)==null?void 0:m.name)===c.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(d=>({...d,selectedTool:c,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((b=n.selectedTool)==null?void 0:b.name)===c.name?"u-text-accent":""}">${c.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${c.description}>${c.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${n.selectedTool,"Select a tool to execute"}</h3>
              ${x({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!n.selectedTool||n.executionStatus==="running",loading:n.executionStatus==="running",onClick:()=>o(n.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ls({text:n.output,status:n.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const xe={all:["views"]},Re={getViews:e=>$.load(xe.all,()=>k.get("/api/v1/views"),e)};function ds(){return{view(){var a;const e=$.read(xe.all),s=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!s.length&&e.status!=="loading"?u`
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
        `:re({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>s,onRetry:()=>Re.getViews()})}}}function us(){const e=ds();let s;return{mount(a){s=$.subscribe(xe.all,()=>a()),Re.getViews()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const P={all:["incidents"],list:e=>[...P.all,e?"resolved":"active"],catalog:["incidents","catalog"]},Y={getIncidents:(e,s)=>$.load(P.list(e),()=>k.get("/api/v1/incidents",{query:{resolved:e?1:0}}),s),resolveIncident:(e,s)=>k.post("/api/v1/incidents/resolve",{id:e,note:s}),getCatalog:e=>$.load(P.catalog,()=>k.get("/api/v1/incidents/catalog/errors"),e)};function Ee({resolved:e}){const s=gt($,{mutationFn:t=>Y.resolveIncident(t.id,t.note),invalidates:[P.all]});async function a(t){const r=prompt("Enter a resolution note (optional):","Resolved manually");if(r===null)return;if(await fe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${t} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await s({id:t,note:r})}catch(l){alert("Failed to resolve incident: "+l.message)}}const o=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:t=>u`<span class="u-text-${t.PRIORITY==="CRITICAL"?"danger":t.PRIORITY==="WARNING"?"accent":"muted"}">${t.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:t=>new Date(t.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:t=>t.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:t=>t.RESOLVED?u`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(t.ID)})}];return{view(){const t=$.read(P.list(e));return re({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:t,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:s=>u`<strong class="u-text-sm u-font-mono">${s.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:s=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${s.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:s=>{if(s.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`;const a=s.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:s=>u`<span class="u-text-sm">${s.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:s=>u`<span class="u-text-sm u-text-muted">${s.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:s=>u`<span class="u-text-sm">${s.REMEDY}</span>`}];return{view(){const s=$.read(P.catalog);return re({id:"error-catalog-table",columns:e,snapshot:s,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>Y.getCatalog()})}}}function vs(){const e=Ee({resolved:!1}),s=Ee({resolved:!0}),a=ps(),o=Q({activeTab:"active"});let t,r,i,l;return{mount(n){t=$.subscribe(P.list(!1),()=>n()),r=$.subscribe(P.list(!0),()=>n()),i=$.subscribe(P.catalog,()=>n()),l=o.subscribe(()=>n()),Y.getIncidents(!1),Y.getIncidents(!0),Y.getCatalog()},unmount(){t&&t(),r&&r(),i&&i(),l&&l()},view(){const{activeTab:n}=o.get(),p=(c,v,m)=>{const b=n===c;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>o.set(h=>({...h,activeTab:c}))}
          >
            ${j({name:v,size:16})}
            <span>${m}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${p("active","alert","Active Incidents")}
              ${p("resolved","check","Resolved")}
              ${p("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():y}
          ${n==="resolved"?s.view():y}
          ${n==="catalog"?a.view():y}
        </div>
      `}}}const be={all:["gitops"]},ms={getGitOps:e=>$.load(be.all,()=>k.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(s){e=$.subscribe(be.all,()=>s()),ms.getGitOps()},unmount(){e&&e()},view(){const s=$.read(be.all),{status:a,data:o,error:t,isFetching:r}=s;if(a==="loading"&&!o)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!o)return u`<p class="u-text-danger">Error: ${t==null?void 0:t.message}</p>`;const i=(o==null?void 0:o.telemetry)||{};return u`
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
      `}}}const T={all:["settings"]},bs={getSettings:e=>$.load(T.all,()=>k.get("/api/v1/settings"),e),saveConfig:e=>k.post("/api/v1/settings/config",e),triggerSweep:()=>k.post("/api/v1/settings/sweep"),triggerBackup:()=>k.post("/api/v1/settings/backup")};function fs(e,s={},a=300){const o=Object.keys(s),t=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},r=(i,l,n)=>{var v;const p=((v=l.field_mappings)==null?void 0:v.length)||0,c=Object.keys(l.enrichment_endpoints||{}).join(", ");return u`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${l.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.name.toUpperCase()}</span>
            ${l.enabled?u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${l.poll_interval_seconds?`POLLS EVERY ${l.poll_interval_seconds}S`:`INHERITS GLOBAL (${a}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(m=>({...m,isServiceModalOpen:!0,editingServiceId:i}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${l.base_url||"N/A"} | API Key ${l.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${p}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${c||"none"}</span>
        </div>
      </div>
    `};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:y}
        ${o.map((i,l)=>r(i,s[i],l===o.length-1))}
      </div>
    </div>
  `}function xs(e){var c;const s=e.get(),a=$.read(T.all),o=((c=a==null?void 0:a.data)==null?void 0:c.services)||{},t=s.editingServiceId?o[s.editingServiceId]:null,r=()=>{e.set(v=>({...v,isServiceModalOpen:!1,editingServiceId:null}))},i=()=>{try{const v=document.getElementById("srv-id").value.trim();if(!v){alert("Service ID is required");return}const m=document.getElementById("srv-enrich").value.trim(),b={};m&&m.split(`
`).forEach(g=>{const h=g.split(":");h.length>=2&&(b[h[0].trim()]=h.slice(1).join(":").trim())});const d={name:document.getElementById("srv-name").value.trim()||v,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:b,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(t==null?void 0:t.field_mappings)||[]},f={...o,[v]:d};s.editingServiceId&&s.editingServiceId!==v&&delete f[s.editingServiceId],$.setData(T.all,()=>({...a.data,services:f})),e.set(g=>({...g,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(v){alert("Error saving service: "+v.stack)}},l=v=>{alert(`Applied preset: ${v}`)},n=u`
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
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${(t==null?void 0:t.name)||""}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${s.editingServiceId||""} @input=${v=>{v.target.value=v.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${(t==null?void 0:t.base_url)||""}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${(t==null?void 0:t.api_key)||""}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${t?t.poll_interval_seconds==null:!0}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" .value=${(t==null?void 0:t.primary_endpoint)||"/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending"}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${(t==null?void 0:t.pipeline_key_template)||"{service}:{id}"}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${t!=null&&t.enrichment_endpoints?Object.entries(t.enrichment_endpoints).map(([v,m])=>`${v}: ${m}`).join(`
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
      <input type="checkbox" id="chk-service-enabled" .checked=${t?t.enabled:!0}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,p=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:r})}
      ${x({label:s.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:i})}
    </div>
  `;return F({title:"Register Service",size:"lg",onClose:r,body:n,footer:p})}function hs(e,s=[]){const a=()=>{e.set(t=>({...t,isStageModalOpen:!0,editingStageId:null}))},o=t=>t.start_condition?t.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${s.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:s.map((t,r)=>{const i=o(t);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${i.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${i.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${t.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${t.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${i.bg}; color: ${i.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${i.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(l=>({...l,isStageModalOpen:!0,editingStageId:t.id}))})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${t.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${t.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${t.start_condition?t.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${t.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${t.complete_condition?t.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function ys(e){var v;const s=e.get(),a=$.read(T.all),o=((v=a==null?void 0:a.data)==null?void 0:v.stages)||[],t=s.editingStageId?o.find(m=>m.id===s.editingStageId):null,r=s.stageIsSink??(t?!t.complete_condition:!1),i=s.stageIsRoot??(t?!t.start_condition:!1),l=()=>{e.set(m=>({...m,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var m,b;try{const d=document.getElementById("stage-id").value.trim();if(!d){alert("Stage ID is required");return}const f={id:d,name:document.getElementById("stage-name").value.trim()||d,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:i?null:((m=document.getElementById("stage-start"))==null?void 0:m.value.trim())||null,complete_condition:r?null:((b=document.getElementById("stage-complete"))==null?void 0:b.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let g=[...o];s.editingStageId?g=g.map(h=>h.id===s.editingStageId?f:h):g.push(f),$.setData(T.all,()=>({...a.data,stages:g})),e.set(h=>({...h,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(d){alert("Error in Save Stage: "+d.stack)}},p=u`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(t==null?void 0:t.id)||""} ?disabled=${!!t} @input=${m=>{m.target.value=m.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(t==null?void 0:t.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(t==null?void 0:t.description)||""}>
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
        <input type="checkbox" id="chk-stage-root" .checked=${i} @change=${m=>e.set(b=>({...b,stageIsRoot:m.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${i?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(t==null?void 0:t.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-start").value;if(!m.trim()){alert("Expression is empty!");return}try{const b=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();b.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+b.message)}catch(b){alert("Validation failed: "+b.message)}}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${r} @change=${m=>e.set(b=>({...b,stageIsSink:m.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${r?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(t==null?void 0:t.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-complete").value;if(!m.trim()){alert("Expression is empty!");return}try{const b=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();b.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+b.message)}catch(b){alert("Validation failed: "+b.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(t==null?void 0:t.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(t==null?void 0:t.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled">
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,c=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:l})}
      ${x({label:s.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return F({title:"Configure DAG Stage",size:"lg",onClose:l,body:p,footer:c})}function $s(e,s={}){const a=Object.keys(s),o=e.get().selectedMappingService||a[0]||"",t=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},r=()=>{e.set(l=>({...l,isMappingModalOpen:!0}))},i=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(n=>({...n,selectedMappingService:l.target.value}))}
        >
          ${a.map(l=>u`<option value="${l}" ?selected=${l===o}>${s[l].name}</option>`)}
        </select>
      </div>
    `;return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Field Mappings & Transformers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Extract payload attributes and map them to sanitized uppercase columns.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:t})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${a.length>0?i():y}
        
        ${(()=>{const l=s[o];return!l||!l.field_mappings||l.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map(n=>u`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${n.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${n.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${n.data_type})</span>
                    ${n.transformer?u`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${n.transformer}</div>`:y}
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
  `}function ws(e){const s=()=>{e.set(t=>({...t,isMappingModalOpen:!1}))},a=u`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" @input=${t=>{let r=t.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");r=r.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),t.target.value=r}}>
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
  `,o=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:s})}
      ${x({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return F({title:"Configure Field Mapping & Transformer",size:"lg",onClose:s,body:a,footer:o})}function Ss(e){const s=()=>{e.set(t=>({...t,isSampleApiModalOpen:!1}))},a=u`
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
  `,o=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:s})}
    </div>
  `;return F({title:"Sample Service API Schema",size:"lg",onClose:s,body:a,footer:o})}function Es(e,s={}){const a=Object.keys(s.triggers||{}),o=()=>{e.set(t=>({...t,isNotificationModalOpen:!0}))};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Test Alert",variant:"test",size:"sm",onClick:()=>alert("Test alert")})}
          ${x({label:"+ Add Trigger",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${a.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:y}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function _s(e){const s=()=>{e.set(t=>({...t,isNotificationModalOpen:!1}))},a=u`
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
  `,o=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:s})}
      ${x({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return F({title:"Add Notification Trigger",size:"md",onClose:s,body:a,footer:o})}function ks(e,s={}){const a=s.retention_days||30,o=s.global_poll_interval_seconds||300;return u`
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
            <input type="number" class="form-input" min="10" max="86400" .value=${o}>
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
  `}function As(e){const s=Q({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,o;const t=r=>{s.get().isDirty&&(r.preventDefault(),r.returnValue="")};return{mount(r){a=s.subscribe(()=>r()),o=$.subscribe(T.all,()=>r()),bs.getSettings(),window.addEventListener("beforeunload",t),e&&e.setBeforeNavigateHook(async i=>s.get().isDirty?await fe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),o&&o(),window.removeEventListener("beforeunload",t),e&&e.setBeforeNavigateHook(null)},view(){const r=s.get(),{activeTab:i,saving:l,isServiceModalOpen:n,isStageModalOpen:p,isMappingModalOpen:c,isSampleApiModalOpen:v,isNotificationModalOpen:m}=r,b=$.read(T.all),{data:d,status:f,error:g}=b;if(f==="loading"&&!d)return u`<p class="u-text-muted">Loading settings...</p>`;if(f==="error"&&!d)return u`<p class="u-text-danger">Error: ${g==null?void 0:g.message}</p>`;const h={retention_days:(d==null?void 0:d.retention_days)||30,global_poll_interval_seconds:(d==null?void 0:d.global_poll_interval_seconds)||300},S=(d==null?void 0:d.services)||{},w=(d==null?void 0:d.stages)||[],E=h.global_poll_interval_seconds,A=(B,O,H)=>{const C=i===B;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${C?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${C?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${C?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>s.set(D=>({...D,activeTab:B}))}
          >
            ${j({name:O,size:16})}
            <span>${H}</span>
          </button>
        `};return u`
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
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:l,disabled:!r.isDirty,onClick:async()=>{const B=$.read(T.all);s.set(O=>({...O,saving:!0}));try{await k.post("/api/v1/settings",B.data),s.set(O=>({...O,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(O){alert("Error saving settings: "+O.message),s.set(H=>({...H,saving:!1}))}}})}
              ${r.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:y}
            </div>
            </div>
          </div>
          
          ${i==="services"?fs(s,S,E):y}
          ${i==="stages"?hs(s,w):y}
          ${i==="mappings"?$s(s,S):y}
          ${i==="notifications"?Es(s,d):y}
          ${i==="engine"?ks(s,h):y}
          
          <!-- Modals -->
          ${n?xs(s):y}
          ${p?ys(s):y}
          ${c?ws(s):y}
          ${v?Ss(s):y}
          ${m?_s(s):y}
        </div>
      `}}}function Is(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1};const s=new Set;return{get:()=>e,set:a=>{e=a(e),s.forEach(o=>o())},subscribe:a=>(s.add(a),()=>s.delete(a))}}function Ts(){const e=Is(),s=async()=>{var d,f;const t=e.get(),{selectedService:r,selectedRecordId:i,testEndpoint:l,testName:n}=t;if(!r||!i){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!l.trim()){alert("Please enter an endpoint to test.");return}const p=$.read(T.all),v=(((d=p==null?void 0:p.data)==null?void 0:d.services)||{})[r],m={...(v==null?void 0:v.enrichment_endpoints)||{}},b=n.trim()||"sandbox_test";m[b]=l.trim(),e.set(g=>({...g,isLoading:!0,error:null,logs:[],testResponse:null}));try{const g=await k.post("/api/v1/pipeline/sandbox/enrichment",{service_id:r,record_id:parseInt(i,10),enrichment_endpoints:m}),h=((f=g.context_data)==null?void 0:f[b])||null;e.set(S=>({...S,isLoading:!1,logs:g.logs||[],testResponse:h}))}catch(g){e.set(h=>({...h,isLoading:!1,error:g.message}))}},a=async()=>{var b;const t=e.get();if(!t.selectedService)return;const r=$.read(T.all),i=((b=r==null?void 0:r.data)==null?void 0:b.services)||{},l=i[t.selectedService],n={...(l==null?void 0:l.enrichment_endpoints)||{}},p=t.testName.trim(),c=t.testEndpoint.trim();if(!p||!c){alert("Please provide both a namespace name and an endpoint to save.");return}n[p]=c;const v={...i,[t.selectedService]:{...l,enrichment_endpoints:n}},m={...r.data,services:v};try{await k.post("/api/v1/settings/config",m),$.setData(T.all,()=>m),e.set(d=>({...d,saveSuccess:!0})),setTimeout(()=>{e.set(d=>({...d,saveSuccess:!1}))},3e3)}catch(d){alert("Failed to save to service: "+d.message)}};return{view:()=>{var p;const t=e.get(),r=$.read(T.all),i=((p=r==null?void 0:r.data)==null?void 0:p.services)||{},l=Object.keys(i),n=i[t.selectedService];return!t.selectedService&&l.length>0&&setTimeout(()=>e.set(c=>({...c,selectedService:l[0]})),0),u`
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
            <select class="form-select font-mono" @change=${c=>e.set(v=>({...v,selectedService:c.target.value}))} style="border: 1px solid var(--color-text);">
              ${l.length===0?u`<option value="">No services</option>`:y}
              ${l.map(c=>u`<option value=${c} ?selected=${t.selectedService===c}>${i[c].name||c}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${t.selectedRecordId} @input=${c=>e.set(v=>({...v,selectedRecordId:c.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:s,disabled:t.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${t.testName} @input=${c=>e.set(v=>({...v,testName:c.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:a,disabled:t.isLoading})}
            ${t.saveSuccess?u`<span style="color: var(--color-success);">${j({name:"check"})}</span>`:y}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${t.testEndpoint} @input=${c=>e.set(v=>({...v,testEndpoint:c.target.value}))}></textarea>
            </div>
            
            <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: var(--color-text-muted); font-family: monospace; font-size: 0.85rem;">
              ${t.isLoading?"Running test...":y}
              ${t.error?u`<div style="color: var(--color-error);">${t.error}</div>`:y}
              ${!t.isLoading&&!t.error&&t.testResponse?u`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(t.testResponse,null,2)}</pre>`:y}
              ${!t.isLoading&&!t.error&&!t.testResponse&&t.logs.length>0?u`<div style="color: var(--color-warning);">Endpoint returned empty or failed. Check logs: ${t.logs.join(`
`)}</div>`:y}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((n==null?void 0:n.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:y}
              
              ${Object.entries((n==null?void 0:n.enrichment_endpoints)||{}).map(([c,v])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(m=>({...m,testName:c,testEndpoint:v}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${c}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${v}>${v}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `},mount:()=>{const t=$.read(T.all);t!=null&&t.data||k.get("/api/v1/settings").then(r=>{$.setData(T.all,()=>r),e.set(i=>({...i}))}).catch(console.error)}}}const J=Le(_e),Cs={overview:os(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),sandbox:Ts(),gitops:gs(),settings:As(J)};let N=null;function ne(){var a,o,t,r;const{current:e}=J.store.get();N&&N.id!==e.id&&((o=(a=N.instance).unmount)==null||o.call(a),N=null),!N&&e&&(N={id:e.id,instance:Cs[e.id]},(r=(t=N.instance).mount)==null||r.call(t,ne));const s=N?N.instance.view():"";Pe(Dt({routerStore:J.store.get(),routes:_e,router:J,pageContent:s}),document.getElementById("app"))}J.store.subscribe(ne);te.store.subscribe(ne);ne();
