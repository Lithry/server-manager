import{j as Pe,E as Le,w as A,b as u,A as $,D as ze}from"./vendor-LJTP5CNr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Be(){const e=new Map;return{on(s,t){return e.has(s)||e.set(s,new Set),e.get(s).add(t),()=>e.get(s).delete(t)},emit(s,t){if(e.has(s))for(const l of e.get(s))l(t)}}}function W(e){let s=e;const t=new Set;return{get:()=>s,set:l=>{s=typeof l=="function"?l(s):l;for(const a of t)a(s)},subscribe:l=>(t.add(l),()=>t.delete(l))}}function je(e){const s=W({current:null,params:{}});let t=null;async function l(a){const o=window.location.hash.slice(1)||"/";if(t&&s.get().current&&s.get().current.path!==o&&!await t(o)){window.removeEventListener("hashchange",l),window.location.hash=s.get().current.path,setTimeout(()=>window.addEventListener("hashchange",l),0);return}const n=e.find(d=>d.path===o)||e[0];s.set({current:n,params:{}})}return window.addEventListener("hashchange",l),l(),{store:s,navigate(a){window.location.hash=a},setBeforeNavigateHook(a){t=a}}}const Te=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={CHILD:2},Ae=e=>(...s)=>({_$litDirective$:e,values:s});let Oe=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,l){this._$Ct=s,this._$AM=t,this._$Ci=l}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ve}=Pe,we=e=>e,Ue=e=>e.strings===void 0,Ee=()=>document.createComment(""),K=(e,s,t)=>{var o;const l=e._$AA.parentNode,a=s===void 0?e._$AB:s._$AA;if(t===void 0){const n=l.insertBefore(Ee(),a),d=l.insertBefore(Ee(),a);t=new Ve(n,d,e,e.options)}else{const n=t._$AB.nextSibling,d=t._$AM,r=d!==e;if(r){let i;(o=t._$AQ)==null||o.call(t,e),t._$AM=e,t._$AP!==void 0&&(i=e._$AU)!==d._$AU&&t._$AP(i)}if(n!==a||r){let i=t._$AA;for(;i!==n;){const c=we(i).nextSibling;we(l).insertBefore(i,a),i=c}}}return t},V=(e,s,t=e)=>(e._$AI(s,t),e),Fe={},Ge=(e,s=Fe)=>e._$AH=s,qe=e=>e._$AH,ve=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=(e,s,t)=>{const l=new Map;for(let a=s;a<=t;a++)l.set(e[a],a);return l},Re=Ae(class extends Oe{constructor(e){if(super(e),e.type!==Ce.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let l;t===void 0?t=s:s!==void 0&&(l=s);const a=[],o=[];let n=0;for(const d of e)a[n]=l?l(d,n):n,o[n]=t(d,n),n++;return{values:o,keys:a}}render(e,s,t){return this.dt(e,s,t).values}update(e,[s,t,l]){const a=qe(e),{values:o,keys:n}=this.dt(s,t,l);if(!Array.isArray(a))return this.ut=n,o;const d=this.ut??(this.ut=[]),r=[];let i,c,p=0,f=a.length-1,m=0,v=o.length-1;for(;p<=f&&m<=v;)if(a[p]===null)p++;else if(a[f]===null)f--;else if(d[p]===n[m])r[m]=V(a[p],o[m]),p++,m++;else if(d[f]===n[v])r[v]=V(a[f],o[v]),f--,v--;else if(d[p]===n[v])r[v]=V(a[p],o[v]),K(e,r[v+1],a[p]),p++,v--;else if(d[f]===n[m])r[m]=V(a[f],o[m]),K(e,a[p],a[f]),f--,m++;else if(i===void 0&&(i=_e(n,m,v),c=_e(d,p,f)),i.has(d[p]))if(i.has(d[f])){const b=c.get(n[m]),g=b!==void 0?a[b]:null;if(g===null){const x=K(e,a[p]);V(x,o[m]),r[m]=x}else r[m]=V(g,o[m]),K(e,a[p],g),a[b]=null;m++}else ve(a[f]),f--;else ve(a[p]),p++;for(;m<=v;){const b=K(e,r[v+1]);V(b,o[m]),r[m++]=b}for(;p<=f;){const b=a[p++];b!==null&&ve(b)}return this.ut=n,Ge(e,r),Le}}),He={x:A`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:A`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:A`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:A`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:A`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:A`<polyline points="20 6 9 17 4 12"></polyline>`,tool:A`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:A`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":A`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:A`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:A`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:A`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:A`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:A`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:A`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:A`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:A`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:A`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":A`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:A`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function G({name:e,size:s=16,label:t}){const l=He[e];return l?u`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${s} height=${s} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    aria-label=${t||e}
    role=${t?"img":"presentation"}
    aria-hidden=${t?"false":"true"}
  >
    ${l}
  </svg>`:u`<span style="width:${s}px; height:${s}px; display:inline-block; background:red;"></span>`}const Ye="-FyYHK",We="hQIh8E",Ke="vjCp9N",Je="aWcKCO",Qe="XdvXnE",Xe="Yr8TTV",Ze="yefrc2",et="UnbUQg",tt="z6Wtj-",st="WEwa7u",at="rr8RRm",rt="_8nqxsa",ot="EMU1IN",nt="erzuUm",it="IX2naX",lt="UuwGh4",ct="HRKVqM",O={sidebar:Ye,brand:We,logo:Ke,title:Je,nav:Qe,navItem:Xe,sidebarFooter:Ze,toggleBtn:et,toggleText:tt,footerDetails:st,statusWrapper:at,statusDot:rt,branchBox:ot,expanded:nt,brandText:it,statusText:lt,commitText:ct},M=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),dt=new Set([502,503,504]);function ut(e){const s=e&&typeof e=="object"?e.detail:null;return typeof s=="string"?s:Array.isArray(s)?s.map(t=>`${(t.loc??[]).slice(1).join(".")||"body"}: ${t.msg}`).join("; "):null}class H extends Error{constructor(s,{code:t,status:l=0,detail:a=null,cause:o}={}){super(s,{cause:o}),this.name="ApiError",this.code=t,this.status=l,this.detail=a}get retryable(){return this.code===M.NETWORK||this.code===M.TIMEOUT||this.code===M.HTTP&&dt.has(this.status)}get userMessage(){switch(this.code){case M.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case M.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case M.ABORTED:return"";case M.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const pt=new Set(["GET","HEAD"]),vt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function mt(e={}){const s={...vt,...e},t=e.fetchImpl??((...v)=>globalThis.fetch(...v)),l={request:[],response:[],error:[]},a=new Map,o=()=>new H("Request aborted",{code:M.ABORTED}),n=(v,b)=>{const g=new URLSearchParams;for(const[E,w]of Object.entries(b??{}))w!=null&&w!==""&&g.set(E,String(w));const x=g.toString();return`${s.baseUrl}${v}${x?"?"+x:""}`};async function d(v){if(v.status===204)return null;const b=v.headers.get("content-type")??"";try{return b.includes("application/json")?await v.json():await v.text()}catch(g){throw new H("Malformed response body",{code:M.PARSE,status:v.status,cause:g})}}async function r(v,b,g){const x=AbortSignal.timeout(g),E=b?AbortSignal.any([b,x]):x;let w;try{w=await t(v.url,{method:v.method,headers:v.headers,body:v.body,signal:E})}catch(C){throw x.aborted?new H(`Request timed out after ${g} ms`,{code:M.TIMEOUT,cause:C}):b!=null&&b.aborted?o():new H("Network request failed",{code:M.NETWORK,cause:C})}const _=await d(w);if(!w.ok)throw new H(ut(_)??`HTTP ${w.status}`,{code:M.HTTP,status:w.status,detail:_});return{status:w.status,data:_,headers:w.headers}}const i=(v,b)=>new Promise((g,x)=>{const E=setTimeout(g,v);b==null||b.addEventListener("abort",()=>{clearTimeout(E),x(o())},{once:!0})}),c=v=>Math.random()*Math.min(s.retryMaxMs,s.retryBaseMs*2**v);async function p(v,{signal:b,timeoutMs:g,retries:x}){for(let E=0;;E+=1)try{return await r(v,b,g)}catch(w){if(!(w instanceof H)||!w.retryable||E>=x)throw w;await i(c(E),b)}}function f(v,b,g){let x=a.get(v);if(!x){const E=new AbortController,w={controller:E,refs:0,promise:null};w.promise=b(E.signal).finally(()=>{a.get(v)===w&&a.delete(v)}),w.promise.catch(()=>{}),a.set(v,w),x=w}return x.refs+=1,new Promise((E,w)=>{const _=()=>{x.refs-=1,x.refs===0&&(a.get(v)===x&&a.delete(v),x.controller.abort()),w(o())};if(g!=null&&g.aborted){_();return}g==null||g.addEventListener("abort",_,{once:!0}),x.promise.then(C=>{g==null||g.removeEventListener("abort",_),E(C)},C=>{g==null||g.removeEventListener("abort",_),w(C)})})}async function m(v,b,g={}){const{query:x,body:E,headers:w={},signal:_,meta:C={}}=g,R=g.timeoutMs??s.timeoutMs,T=g.retries??(pt.has(v)?s.retries:0),B=g.dedupe??v==="GET";let I={method:v,url:n(b,x),headers:{Accept:"application/json",...w},body:void 0,meta:C};E!==void 0&&(I.body=JSON.stringify(E),I.headers["Content-Type"]="application/json");for(const se of l.request)I=await se(I);const D=async se=>{try{let q=await p(I,{signal:se,timeoutMs:R,retries:T});for(const j of l.response)q=await j(q,I);return q.data}catch(q){let j=q;for(const pe of l.error)j=await pe(j,I)??j;throw j}};return B?f(`${I.method} ${I.url}`,D,_):D(_)}return{get:(v,b)=>m("GET",v,b),post:(v,b,g)=>m("POST",v,{...g,body:b}),put:(v,b,g)=>m("PUT",v,{...g,body:b}),delete:(v,b)=>m("DELETE",v,b),use({request:v,response:b,error:g}){v&&l.request.push(v),b&&l.response.push(b),g&&l.error.push(g)}}}const me=()=>{};function gt(e,s){return s?new Promise((t,l)=>{const a=()=>l(new DOMException("Aborted","AbortError"));if(s.aborted){a();return}s.addEventListener("abort",a,{once:!0}),e.then(t,l).finally(()=>s.removeEventListener("abort",a))}):e}const xe=e=>JSON.stringify(e,(s,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([l],[a])=>l<a?-1:1)):t),ft=(e,s)=>s.every((t,l)=>l<e.length&&xe(t)===xe(e[l]));function bt({now:e=()=>Date.now(),gcMs:s=5*6e4}={}){const t=new Map,l=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function a(r){const i=xe(r);let c=t.get(i);return c||(c={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},c.snapshot=l(c),t.set(i,c)),c}function o(r){r.snapshot=l(r);for(const i of[...r.listeners])i(r.snapshot)}function n(){for(const[r,i]of t)i.listeners.size===0&&!i.promise&&i.updatedAt&&e()-i.updatedAt>s&&t.delete(r)}function d(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(i=>(Object.assign(r,{data:i,error:null,status:"success",updatedAt:e()}),i),i=>{throw Object.assign(r,{error:i,status:"error"}),i}).finally(()=>{r.promise=null,o(r),r.invalidated&&r.listeners.size>0&&d(r).catch(me)}),r.promise.catch(me),o(r)),r.promise}return{load(r,i,{staleMs:c=0,signal:p}={}){n();const f=a(r);f.fetcher=i;const m=f.status==="success"&&!f.invalidated&&e()-f.updatedAt<c;return gt(m?Promise.resolve(f.data):d(f),p)},read:r=>a(r).snapshot,subscribe(r,i){const c=a(r);return c.listeners.add(i),i(c.snapshot),()=>{c.listeners.delete(i)}},invalidate(r){for(const i of t.values())ft(i.keyParts,r)&&(i.invalidated=!0,o(i),i.listeners.size>0&&i.fetcher&&d(i).catch(me))},setData(r,i){const c=a(r),p={data:c.data,status:c.status,updatedAt:c.updatedAt},f=typeof i=="function"?i(c.data):i;return Object.assign(c,{data:f,status:"success",updatedAt:e()}),o(c),function(){c.data===f&&(Object.assign(c,p),o(c))}},set(r,i){return this.setData(r,typeof i=="function"?i:()=>i)}}}function xt(e,{mutationFn:s,optimistic:t,invalidates:l=[]}){return async function(o){const n=((t==null?void 0:t(o))??[]).map(({key:d,update:r})=>e.setData(d,r));try{const d=await s(o);return(typeof l=="function"?l(o,d):l).forEach(i=>e.invalidate(i)),d}catch(d){throw n.reverse().forEach(r=>r()),d}}}const Y={},yt=Be(),k=mt({baseUrl:(Y==null?void 0:Y.VITE_API_BASE)??"",timeoutMs:Number((Y==null?void 0:Y.VITE_HTTP_TIMEOUT_MS)??1e4)}),h=bt();k.use({error:e=>((e==null?void 0:e.status)===401&&yt.emit("auth:required",e),e)});const ce={all:["overview"]},ht={getOverview:e=>h.load(ce.all,()=>k.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let re=!1;function $t(){re=!re;const e=document.getElementById("app-sidebar");e&&(re?e.classList.add(O.expanded):e.classList.remove(O.expanded))}function wt({routes:e,activeId:s,onNavigate:t}){var d,r,i,c,p;const l=h.read(ce.all),a=((r=(d=l==null?void 0:l.data)==null?void 0:d.telemetry)==null?void 0:r.short_commit)||"6b319ac",o=((c=(i=l==null?void 0:l.data)==null?void 0:i.telemetry)==null?void 0:c.branch)||"main",n=(p=l==null?void 0:l.data)!=null&&p.version?l.data.version.startsWith("v")?l.data.version:`v${l.data.version}`:"v0.1.7";return u`<aside id="app-sidebar" class="${O.sidebar} ${re?O.expanded:""}">
    <div class=${O.brand}>
      <div class=${O.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${O.brandText}>
        <div class=${O.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${n}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${O.nav}>
      ${Re(e,f=>f.id,f=>u`
        <button class=${O.navItem} aria-current=${f.id===s?"page":"false"}
          @click=${()=>t(f.path)}>
          ${G({name:f.icon,size:16})}
          <span>${f.title}</span>
        </button>
      `)}
    </nav>
    <div class=${O.sidebarFooter}>
      <button class=${O.toggleBtn} @click=${$t}>
        ${G({name:"menu",size:16})}
        <span class=${O.toggleText}>Collapse Menu</span>
      </button>
      <div class=${O.footerDetails}>
        <div class=${O.statusWrapper}>
          <div class=${O.statusDot}></div>
          <span class=${O.statusText}>Manager Online</span>
        </div>
        <div class=${O.branchBox}>
          <span style="color: var(--color-accent);">${o}</span>
          <span class=${O.commitText}>${a}</span>
        </div>
      </div>
    </div>
  </aside>`}const Et="MFUTlq",_t="kBMrej",ge={topbar:Et,title:_t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>e??$;function Z(...e){return e.filter(Boolean).join(" ")}function St(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function kt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const It="PSMDQ2",Tt={spinner:It};function Ct({size:e=16}={}){return u`<svg class=${Tt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",J={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function y({label:e,variant:s="secondary",size:t="md",icon:l,iconOnly:a=!1,ariaLabel:o,loading:n=!1,disabled:d=!1,type:r="button",id:i,onClick:c}){const p=Z(J.btn,J[`btn--${s}`],J[`btn--${t}`],a&&J["btn--icon-only"]);return u`<button id=${Se(i)} class=${p} type=${r}
    aria-label=${Se(o)} aria-busy=${n?"true":"false"}
    ?disabled=${d||n} @click=${c}>
    ${n?Ct():l?G({name:l,size:t==="sm"?14:16}):$}
    ${a?$:u`<span class=${J.btn__label}>${e}</span>`}
  </button>`}const Ot=({icon:e,ariaLabel:s,...t})=>y({...t,icon:e,ariaLabel:s,iconOnly:!0,variant:t.variant??"ghost"});function Rt({title:e}){return u`<header class=${ge.topbar}>
    <h1 class=${ge.title}>${e}</h1>
    <div class=${ge.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${y({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{h.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Mt(){const e=W({stack:[]});let s=0;function t(a){return new Promise(o=>{const n=`modal-${s+=1}`;let d=!1;const r=i=>{d||(d=!0,e.set(c=>({stack:c.stack.filter(p=>p.id!==n)})),o(i))};e.set(i=>({stack:[...i.stack,{id:n,view:()=>a({close:r,id:n})}]}))})}return{open:t,refresh:()=>e.set(a=>({stack:[...a.stack]})),store:e}}const Nt=Mt(),ne=Nt;function Dt(){const{stack:e}=ne.store.get();return u`<div id="modal-root">${e.map(s=>s.view())}</div>`}const Pt="sCMZyq",Lt="Fk5OML",zt="_0AKuiv",fe={layout:Pt,mainContent:Lt,page:zt};function Bt({routerStore:e,routes:s,router:t,pageContent:l}){const{current:a}=e;return u`<div class=${fe.layout}>
    ${wt({routes:s,activeId:a==null?void 0:a.id,onNavigate:t.navigate})}
    <div class=${fe.mainContent}>
      ${Rt({title:(a==null?void 0:a.pageTitle)||(a==null?void 0:a.title)||""})}
      <main class=${fe.page}>
        ${l}
      </main>
    </div>
    ${Dt()}
  </div>`}const jt="fuSbcq",Vt="fu9t4u",Ut="elFvvy",Ft="_2Hu4ZP",Gt="r2dRuM",qt="AjfFun",P={table:jt,table__scroll:Vt,table__grid:Ut,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Ft,table__skeleton:Gt,table__stale:qt};function de({id:e,caption:s,columns:t,snapshot:l,getRows:a=c=>Array.isArray(c)?c:(c==null?void 0:c.items)??[],rowKey:o=(c,p)=>p,emptyMessage:n="No records found.",onRetry:d,footer:r=$,fallbackColumns:i=[]}){const{status:c,data:p,error:f,isFetching:m}=l,v=p!==void 0,b=typeof t=="function"?v?t(p):i:t,g=Math.max(b.length,1),x=v?a(p):[],E=(_,C)=>u`<td class=${Z(_.align==="end"&&P["table__cell--end"],_.mono&&P["table__cell--mono"])}>
    ${_.render?_.render(C):kt(C[_.key])}</td>`;let w;return!v&&(c==="idle"||c==="loading")?w=Array.from({length:5},()=>u`<tr aria-hidden="true">${b.map(()=>u`<td><span class=${P.table__skeleton}></span></td>`)}</tr>`):v?x.length===0?w=u`<tr><td colspan=${g} class=${P.table__message}>${n}</td></tr>`:w=Re(x,o,_=>u`<tr>${b.map(C=>E(C,_))}</tr>`):w=u`<tr><td colspan=${g} class=${P.table__message} role="alert">
      ${(f==null?void 0:f.userMessage)||(f==null?void 0:f.message)||"Failed to load data."}
      ${d?y({label:"Retry",icon:"refresh",size:"sm",onClick:d}):$}</td></tr>`,u`<div class=${P.table}>
    ${c==="error"&&v?u`<div class=${P.table__stale} role="status">Showing cached data. ${(f==null?void 0:f.userMessage)??""} ${d?y({label:"Retry",size:"sm",variant:"ghost",onClick:d}):$}</div>`:$}
    <div class=${P.table__scroll} aria-busy=${m?"true":"false"}>
      <table id=${e??$} class=${P.table__grid}>
        ${s?u`<caption class="u-sr-only">${s}</caption>`:$}
        <thead><tr>${b.map(_=>u`<th scope="col" class=${Z(_.align==="end"&&P["table__cell--end"])}>${_.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const ie={all:["pipeline"],columns:["pipeline","columns"]},ee={getPipeline:e=>h.load(ie.all,()=>k.get("/api/v1/pipeline"),e),getColumns:e=>h.load(ie.columns,()=>k.get("/api/v1/pipeline/columns"),e)};function Ht(e){return!e||!e.columns?[]:e.columns.map(s=>({key:s,header:s.toUpperCase(),render:t=>u`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${t[s]}>${t[s]}</span>`}))}function Yt(){return{view(){var a,o;const e=h.read(ie.all),s=((a=e.data)==null?void 0:a.items)??[],t=((o=e.data)==null?void 0:o.total)??s.length,l=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${s.length?"1":"0"}-${s.length} of ${t} records</div>
          <div class="u-flex u-gap-2">
            ${y({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${y({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return de({id:"pipeline-table",snapshot:e,columns:n=>Ht(n),getRows:n=>(n==null?void 0:n.items)??[],rowKey:(n,d)=>n.id??d,onRetry:()=>ee.getPipeline(),footer:l})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=(e,s)=>{var l;const t=e._$AN;if(t===void 0)return!1;for(const a of t)(l=a._$AO)==null||l.call(a,s,!1),Q(a,s);return!0},le=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},Me=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),Jt(s)}};function Wt(e){this._$AN!==void 0?(le(this),this._$AM=e,Me(this)):this._$AM=e}function Kt(e,s=!1,t=0){const l=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(s)if(Array.isArray(l))for(let o=t;o<l.length;o++)Q(l[o],!1),le(l[o]);else l!=null&&(Q(l,!1),le(l));else Q(this,e)}const Jt=e=>{e.type==Ce.CHILD&&(e._$AP??(e._$AP=Kt),e._$AQ??(e._$AQ=Wt))};class Qt extends Oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,l){super._$AT(s,t,l),Me(this),this.isConnected=s._$AU}_$AO(s,t=!0){var l,a;s!==this.isConnected&&(this.isConnected=s,s?(l=this.reconnected)==null||l.call(this):(a=this.disconnected)==null||a.call(this)),t&&(Q(this,s),le(this))}setValue(s){if(Ue(this._$Ct))this._$Ct._$AI(s,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=s,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const be=new WeakMap,Xt=Ae(class extends Qt{render(e){return $}update(e,[s]){var l;const t=s!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=s,this.ht=(l=e.options)==null?void 0:l.host,this.rt(this.ct=e.element)),$}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let t=be.get(s);t===void 0&&(t=new WeakMap,be.set(s,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,s;return typeof this.G=="function"?(e=be.get(this.ht??globalThis))==null?void 0:e.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Zt="_9lH80h",es="_91-Xo5",ts="SEYdJQ",ss="CRt7-E",as="gj4qUB",rs="hUDIR7",U={modal:Zt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:es,modal__header:ts,modal__title:ss,modal__body:as,modal__footer:rs};function z({title:e,size:s="md",body:t,footer:l=$,onClose:a,dismissible:o=!0}){const n=St("modal-title"),d=c=>{c&&!c.open&&requestAnimationFrame(()=>{!c.open&&c.isConnected&&c.showModal()})},r=c=>{c.preventDefault(),o&&a(void 0)},i=c=>{o&&c.target===c.currentTarget&&a(void 0)};return u`<dialog class=${Z(U.modal,U[`modal--${s}`])} aria-labelledby=${n}
      ${Xt(d)} @cancel=${r} @click=${i}>
    <div class=${U.modal__panel}>
      <header class=${U.modal__header}>
        <h2 id=${n} class=${U.modal__title}>${e}</h2>
        ${o?Ot({icon:"x",ariaLabel:"Close dialog",onClick:()=>a(void 0)}):$}
      </header>
      <div class=${U.modal__body}>${t}</div>
      ${l!==$?u`<footer class=${U.modal__footer}>${l}</footer>`:$}
    </div>
  </dialog>`}function te({title:e,message:s,tone:t="danger",confirmLabel:l="Confirmar",requireText:a}){return new Promise(o=>{let n="";""+Math.random().toString(36).substring(2);const d=()=>{ne.open(({close:i})=>z({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${s}</p>
            ${a?u`
              <p class="u-text-sm u-text-muted">Escribe <strong>${a}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${c=>{n=c.target.value,r()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${y({label:"Cancelar",variant:"ghost",onClick:()=>{i(),o(!1)}})}
            ${y({label:l,variant:t==="danger"?"delete":"add",disabled:a?n!==a:!1,onClick:()=>{i(),o(!0)}})}
          </div>
        `,onClose:()=>{i(),o(!1)}}))};function r(){ne.refresh()}d()})}function os(e){const s=e.get(),t=()=>{e.set(i=>({...i,isManageColumnsModalOpen:!1}))},l=i=>{if(i===0)return;const c=[...s.columnsData],p=c[i-1];c[i-1]=c[i],c[i]=p,e.set(f=>({...f,columnsData:c}))},a=i=>{if(i===s.columnsData.length-1)return;const c=[...s.columnsData],p=c[i+1];c[i+1]=c[i],c[i]=p,e.set(f=>({...f,columnsData:c}))},o=async()=>{const i=s.columnsData.map(c=>c.name);try{await k.put("/api/v1/pipeline/columns/order",{column_order:i}),e.set(c=>({...c,isManageColumnsModalOpen:!1})),ee.getPipeline({dedupe:!1})}catch(c){alert("Failed to save column order: "+c.message)}},n=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await k.post("/api/v1/pipeline/columns/prune");const i=await k.get("/api/v1/pipeline/columns");e.set(c=>({...c,columnsData:i})),ee.getPipeline({dedupe:!1})}catch(i){alert("Failed to prune columns: "+i.message)}},d=u`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${s.isLoadingColumns?u`<div class="u-text-center u-p-4">Loading columns...</div>`:$}
    
    ${!s.isLoadingColumns&&s.columnsData?u`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${s.columnsData.map((i,c)=>{const p=i.is_system;return u`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${p?"var(--color-accent)":"var(--color-text)"};">${i.name}</span>
                <span class="u-text-xs u-text-muted">${i.type}</span>
                ${i.is_deprecated?u`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:$}
                ${p?u`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:$}
              </div>
              
              <div class="u-flex u-gap-1">
                ${y({label:"▲",variant:"ghost",size:"sm",disabled:p||c>0&&s.columnsData[c-1].is_system,onClick:()=>l(c)})}
                ${y({label:"▼",variant:"ghost",size:"sm",disabled:p||c===s.columnsData.length-1,onClick:()=>a(c)})}
              </div>
            </div>
          `})}
      </div>
    `:$}
  `,r=u`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${y({label:"Prune Deprecated",variant:"delete",onClick:n})}
      </div>
      <div class="u-flex u-gap-2">
        ${y({label:"Cancel",variant:"secondary",onClick:t})}
        ${y({label:"Save Order",variant:"save",onClick:o})}
      </div>
    </div>
  `;return z({title:"Manage Columns",size:"md",onClose:t,body:d,footer:r})}function ns(){const e=W({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),s=Yt();let t,l;async function a(){if(await te({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await k.post("/api/v1/pipeline/purge"),ee.getPipeline({dedupe:!1})}catch(n){alert("Error purging pipeline: "+n.message)}}return{mount(o){t=h.subscribe(ie.all,()=>o()),l=e.subscribe(()=>o()),ee.getPipeline()},unmount(){t&&t(),l&&l()},view(){return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${y({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${y({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(o=>({...o,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const o=await k.get("/api/v1/pipeline/columns");e.set(n=>({...n,columnsData:o,isLoadingColumns:!1}))}catch(o){alert("Error loading columns: "+o.message),e.set(n=>({...n,isLoadingColumns:!1}))}}})}
              ${y({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${y({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:a})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${s.view()}
          
          ${e.get().isManageColumnsModalOpen?os(e):$}
        </div>
      `}}}function is(){return{view(){var i,c,p;const{status:e,data:s,error:t}=h.read(ce.all);if(e==="error")return u`<div class="u-text-danger">${t.message}</div>`;if(e==="loading"||!s)return u`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const l=s.pipeline_total_items||0,a=s.active_incidents||0,o=s.registered_services||0,n=((i=s.telemetry)==null?void 0:i.branch)||"main",d=((c=s.telemetry)==null?void 0:c.clean)!==!1,r=(f,m,v,b,g="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${f}</span>
            <span class="${g}">${G({name:b,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${g}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${m}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${v}>${v}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${r("Pipeline Items",l,"Items tracked in universal pipeline","package","u-text-accent")}
            ${r("Active Incidents",a,a>0?`${a} critical anomalies`:"0 critical anomalies","alert",(a>0,"u-text-danger"))}
            ${r("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${r("GitOps Status",n,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(p=s.stages)!=null&&p.length?s.stages.map(f=>u`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${f.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${f.name}</strong> <span class="u-text-muted">(${f.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      ${f.enabled?u`<span class="u-text-xs u-text-success">Active</span>`:u`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):u`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function ls(){const e=is();let s;return{mount(t){s=h.subscribe(ce.all,()=>t()),ht.getOverview()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ye={all:["tools"]},cs={getTools:e=>h.load(ye.all,()=>k.get("/api/v1/tools"),e)},ds="cg2FU3",us="Jh4yC3",ke={console:ds,output:us};function ps({text:e,status:s="idle"}){return u`
    <div class=${ke.console}>
      <pre class=${ke.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function vs(){const e=W({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let s,t;const l=async a=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await k.post(`/api/v1/tools/${encodeURIComponent(a.name)}/run`);e.set(n=>({...n,executionStatus:"success",output:n.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(n=>({...n,executionStatus:"error",output:n.output+`
ERROR: `+o.message}))}};return{mount(a){s=h.subscribe(ye.all,()=>a()),t=e.subscribe(()=>a()),cs.getTools()},unmount(){s&&s(),t&&t()},view(){const{status:a,data:o,error:n,isFetching:d}=h.read(ye.all),r=e.get(),i=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${a==="loading"&&!o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:$}
              ${a==="error"&&!o?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${n==null?void 0:n.message}</div>`:$}
              ${i.length===0&&o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:$}
              
              ${i.map(c=>{var p,f,m;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((p=r.selectedTool)==null?void 0:p.name)===c.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((f=r.selectedTool)==null?void 0:f.name)===c.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(v=>({...v,selectedTool:c,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((m=r.selectedTool)==null?void 0:m.name)===c.name?"u-text-accent":""}">${c.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${c.description}>${c.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${r.selectedTool,"Select a tool to execute"}</h3>
              ${y({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>l(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ps({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const $e={all:["views"]},Ne={getViews:e=>h.load($e.all,()=>k.get("/api/v1/views"),e)};function ms(){return{view(){var t;const e=h.read($e.all),s=Array.isArray(e.data)?e.data:((t=e.data)==null?void 0:t.items)??[];return!s.length&&e.status!=="loading"?u`
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
        `:de({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>s,onRetry:()=>Ne.getViews()})}}}function gs(){const e=ms();let s;return{mount(t){s=h.subscribe($e.all,()=>t()),Ne.getViews()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${y({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const N={all:["incidents"],list:e=>[...N.all,e?"resolved":"active"],catalog:["incidents","catalog"]},F={getIncidents:(e,s)=>h.load(N.list(e),()=>k.get("/api/v1/incidents",{query:{resolved:e?1:0}}),s),resolveIncident:(e,s)=>k.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:s||""}),createIncident:e=>k.post("/api/v1/incidents",e),getCatalog:e=>h.load(N.catalog,()=>k.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>k.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>k.delete(`/api/v1/incidents/catalog/errors/${e}`)},fs="_0BpBt1",ae={badge:fs,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2"};function oe({label:e,tone:s="neutral",mono:t=!1,uppercase:l=!1}){const a=Z(ae.badge,ae[`badge--${s}`],t&&ae["badge--mono"],l&&ae["badge--uppercase"]);return u`<span class=${a}>${e}</span>`}function Ie({resolved:e}){const s=xt(h,{mutationFn:a=>F.resolveIncident(a.id,a.note),invalidates:[N.all]});async function t(a){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await te({title:"Resolve Incident",message:`Are you sure you want to mark incident #${a} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await s({id:a,note:o})}catch(d){alert("Failed to resolve incident: "+d.message)}}const l=[{key:"ID",header:"ID",mono:!0},{key:"SEVERITY",header:"Severity",render:a=>{const o=a.SEVERITY==="CRITICAL"?"danger":a.SEVERITY==="WARNING"?"warning":"info";return oe({label:a.SEVERITY||"INFO",tone:o})}},{key:"COMPONENT",header:"Component",render:a=>u`<strong class="u-text-sm">${a.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:a=>u`<span class="u-font-mono u-text-xs">${a.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:a=>u`<span class="u-text-sm">${a.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:a=>a.REMEDY?u`<span class="u-text-xs u-text-muted">${a.REMEDY}</span>`:$},{key:"CREATED_AT",header:"Created At",mono:!0,render:a=>u`<span class="u-text-xs u-text-muted">${a.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:a=>a.RESOLVED?u`<span class="u-text-success u-text-xs">Resolved${a.RESOLUTION_NOTE?`: ${a.RESOLUTION_NOTE}`:""}</span>`:y({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>t(a.ID)})}];return{view(){const a=h.read(N.list(e));return de({id:`incidents-table-${e?"resolved":"active"}`,columns:l,snapshot:a,getRows:o=>(o==null?void 0:o.items)??(Array.isArray(o)?o:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function bs({onEditError:e}={}){const s=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const l=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${l}) 20%, transparent); color: var(--color-${l}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>y({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(t)})}];return{view(){const t=h.read(N.catalog);return de({id:"error-catalog-table",columns:s,snapshot:t,getRows:l=>Array.isArray(l)?l:(l==null?void 0:l.value)||(l==null?void 0:l.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>F.getCatalog()})}}}function xs({onClose:e,onIncidentCreated:s}){let t=!1;async function l(n){n.preventDefault();const d=n.target,r=d.incident_code.value.trim().toUpperCase(),i=d.severity.value,c=d.component.value.trim(),p=d.details.value.trim();if(!r||!c||!p){alert("Please fill in Code, Component, and Details.");return}t=!0;try{await F.createIncident({incident_code:r,severity:i,component:c,details:p}),h.invalidate(N.all),s==null||s(),e()}catch(f){alert("Failed to report incident: "+f.message)}finally{t=!1}}const a=u`
    <form id="report-incident-form" @submit=${l}>
      <div class="form-group u-mb-3">
        <label for="input-inc-code" class="u-text-sm u-font-medium">Incident / Error Code</label>
        <input 
          id="input-inc-code" 
          name="incident_code" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. ERR_SERVICE_UNREACHABLE" 
          required 
        />
        <small class="u-text-muted u-text-xs">Identifies the error category. If new, it auto-registers in catalog.</small>
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-inc-severity" class="u-text-sm u-font-medium">Severity</label>
          <select id="input-inc-severity" name="severity" class="form-select">
            <option value="CRITICAL">CRITICAL</option>
            <option value="WARNING" selected>WARNING</option>
            <option value="INFO">INFO</option>
          </select>
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-inc-component" class="u-text-sm u-font-medium">Component</label>
          <input 
            id="input-inc-component" 
            name="component" 
            type="text" 
            class="form-input" 
            placeholder="e.g. sonarr, storage, docker" 
            required 
          />
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-inc-details" class="u-text-sm u-font-medium">Incident Details</label>
        <textarea 
          id="input-inc-details" 
          name="details" 
          class="form-input" 
          rows="3" 
          placeholder="Detailed description of the observed anomaly..." 
          required
        ></textarea>
      </div>
    </form>
  `,o=u`
    <div class="u-flex u-gap-2 u-justify-end">
      ${y({label:"Cancel",variant:"secondary",onClick:e})}
      ${y({label:"Report Incident",variant:"save",type:"submit",loading:t,onClick:()=>{const n=document.getElementById("report-incident-form");n&&n.requestSubmit()}})}
    </div>
  `;return z({title:"Report System Incident",size:"md",onClose:e,body:a,footer:o})}function ys({onClose:e,onErrorCreated:s,initialData:t=null}){let l=!1;const a=!!(t&&t.ERROR_CODE);async function o(r){var g;r.preventDefault();const i=r.target,c=i.error_code.value.trim().toUpperCase(),p=i.category.value.trim().toUpperCase(),f=i.severity.value,m=i.description.value.trim(),v=i.trigger_condition.value.trim(),b=i.remedy.value.trim();if(!c||!p||!m){alert("Please fill in Error Code, Category, and Description.");return}if(!a){const x=h.read(N.catalog),w=(Array.isArray(x==null?void 0:x.data)?x.data:((g=x==null?void 0:x.data)==null?void 0:g.items)??[]).find(_=>_.ERROR_CODE===c);if(w&&!await te({title:"Error Template Already Exists",message:`An error template with code '${c}' is already registered under category '${w.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}l=!0;try{await F.upsertError({error_code:c,category:p,severity:f,description:m,trigger_condition:v,remedy:b}),h.invalidate(N.catalog),s==null||s(),e()}catch(x){alert("Failed to save error template: "+x.message)}finally{l=!1}}const n=u`
    <form id="add-error-form" @submit=${o}>
      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 2;">
          <label for="input-err-code" class="u-text-sm u-font-medium">Error Code</label>
          <input 
            id="input-err-code" 
            name="error_code" 
            type="text" 
            class="form-input u-font-mono" 
            placeholder="e.g. ERR_DB_CORRUPTION" 
            value="${(t==null?void 0:t.ERROR_CODE)||""}"
            ?readonly=${a}
            style="${a?"background: var(--color-bg-surface); opacity: 0.8;":""}"
            required 
          />
          ${a?u`<small class="u-text-muted u-text-xs">Error code cannot be changed when editing.</small>`:""}
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-err-category" class="u-text-sm u-font-medium">Category</label>
          <input 
            id="input-err-category" 
            name="category" 
            type="text" 
            class="form-input" 
            placeholder="e.g. DATABASE" 
            value="${(t==null?void 0:t.CATEGORY)||""}"
            required 
          />
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-severity" class="u-text-sm u-font-medium">Severity</label>
        <select id="input-err-severity" name="severity" class="form-select">
          <option value="CRITICAL" ?selected=${(t==null?void 0:t.SEVERITY)==="CRITICAL"}>CRITICAL</option>
          <option value="WARNING" ?selected=${!t||(t==null?void 0:t.SEVERITY)==="WARNING"}>WARNING</option>
          <option value="INFO" ?selected=${(t==null?void 0:t.SEVERITY)==="INFO"}>INFO</option>
        </select>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-desc" class="u-text-sm u-font-medium">Description</label>
        <input 
          id="input-err-desc" 
          name="description" 
          type="text" 
          class="form-input" 
          placeholder="Clear explanation of the error condition" 
          value="${(t==null?void 0:t.DESCRIPTION)||""}"
          required 
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-trigger" class="u-text-sm u-font-medium">Trigger Condition (Optional)</label>
        <input 
          id="input-err-trigger" 
          name="trigger_condition" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. integrity_check == false" 
          value="${(t==null?void 0:t.TRIGGER_CONDITION)||""}"
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-remedy" class="u-text-sm u-font-medium">Remedy Runbook / Script (Optional)</label>
        <textarea 
          id="input-err-remedy" 
          name="remedy" 
          class="form-input" 
          rows="2" 
          placeholder="Runbook action or script name in /config/custom_tools/..."
        >${(t==null?void 0:t.REMEDY)||""}</textarea>
      </div>
    </form>
  `,d=u`
    <div class="u-flex u-gap-2 u-justify-end">
      ${y({label:"Cancel",variant:"secondary",onClick:e})}
      ${y({label:a?"Update Error":"Register Error",variant:"save",type:"submit",loading:l,onClick:()=>{const r=document.getElementById("add-error-form");r&&r.requestSubmit()}})}
    </div>
  `;return z({title:a?`Edit Error: ${t.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:n,footer:d})}function hs(){const e=W({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),s=Ie({resolved:!1}),t=Ie({resolved:!0}),l=bs({onEditError:r=>e.set(i=>({...i,isAddErrorModalOpen:!0,editingError:r}))});let a,o,n,d;return{mount(r){a=h.subscribe(N.list(!1),()=>r()),o=h.subscribe(N.list(!0),()=>r()),n=h.subscribe(N.catalog,()=>r()),d=e.subscribe(()=>r()),F.getIncidents(!1),F.getIncidents(!0),F.getCatalog()},unmount(){a&&a(),o&&o(),n&&n(),d&&d()},view(){const{activeTab:r,isReportModalOpen:i,isAddErrorModalOpen:c,editingError:p}=e.get(),f=(m,v,b)=>{const g=r===m;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${g?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${g?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${g?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(_=>({..._,activeTab:m}))}
          >
            ${G({name:v,size:16})}
            <span>${b}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${f("active","alert","Active Incidents")}
              ${f("resolved","check","Resolved")}
              ${f("catalog","search","Error Index Catalog")}
            </div>
            
            ${y(r==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(m=>({...m,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(m=>({...m,isReportModalOpen:!0}))})}
          </div>
          
          ${r==="active"?s.view():$}
          ${r==="resolved"?t.view():$}
          ${r==="catalog"?l.view():$}

          <!-- Modals -->
          ${i?xs({onClose:()=>e.set(m=>({...m,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):$}

          ${c?ys({onClose:()=>e.set(m=>({...m,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:p}):$}
        </div>
      `}}}const he={all:["gitops"]},$s={getGitOps:e=>h.load(he.all,()=>k.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function ws(){let e;return{mount(s){e=h.subscribe(he.all,()=>s()),$s.getGitOps()},unmount(){e&&e()},view(){const s=h.read(he.all),{status:t,data:l,error:a,isFetching:o}=s;if(t==="loading"&&!l)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(t==="error"&&!l)return u`<p class="u-text-danger">Error: ${a==null?void 0:a.message}</p>`;const n=(l==null?void 0:l.telemetry)||{};return u`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${n.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${n.mounted?"MOUNTED":"NOT MOUNTED"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${n.branch||"N/A"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${n.short_commit||"N/A"} <span class="u-text-muted">(${n.commit||"N/A"})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${n.clean?"u-text-success":"u-text-danger"}">${n.clean?"✓ Clean":"x Dirty"}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${n.last_commit||"N/A"}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `}}}const S={all:["settings"]},Es={getSettings:e=>h.load(S.all,()=>k.get("/api/v1/settings"),e),saveConfig:e=>k.post("/api/v1/settings/config",e),triggerSweep:()=>k.post("/api/v1/settings/sweep"),triggerBackup:()=>k.post("/api/v1/settings/backup")};function _s(e,s={},t=300){const l=Object.keys(s),a=()=>{e.set(n=>({...n,isServiceModalOpen:!0}))},o=(n,d,r)=>{var p;const i=((p=d.field_mappings)==null?void 0:p.length)||0,c=Object.keys(d.enrichment_endpoints||{}).join(", ");return u`
      <div style="padding: var(--space-4); border-bottom: ${r?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${d.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${d.name.toUpperCase()}</span>
            ${d.enabled?u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${d.poll_interval_seconds?`POLLS EVERY ${d.poll_interval_seconds}S`:`INHERITS GLOBAL (${t}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${y({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(f=>({...f,isServiceModalOpen:!0,editingServiceId:n}))})}
            ${y({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${d.base_url||"N/A"} | API Key ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${i}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${c||"none"}</span>
        </div>
      </div>
    `};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${y({label:"+ Add Service",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${l.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:$}
        ${l.map((n,d)=>o(n,s[n],d===l.length-1))}
      </div>
    </div>
  `}function Ss(e){var c;const s=e.get(),t=h.read(S.all),l=((c=t==null?void 0:t.data)==null?void 0:c.services)||{},a=s.editingServiceId?l[s.editingServiceId]:null,o=()=>{e.set(p=>({...p,isServiceModalOpen:!1,editingServiceId:null}))},n=()=>{try{const p=document.getElementById("srv-id").value.trim();if(!p){alert("Service ID is required");return}const f=document.getElementById("srv-enrich").value.trim(),m={};f&&f.split(`
`).forEach(g=>{const x=g.split(":");x.length>=2&&(m[x[0].trim()]=x.slice(1).join(":").trim())});const v={name:document.getElementById("srv-name").value.trim()||p,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:m,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(a==null?void 0:a.field_mappings)||[]},b={...l,[p]:v};s.editingServiceId&&s.editingServiceId!==p&&delete b[s.editingServiceId],h.setData(S.all,()=>({...t.data,services:b})),e.set(g=>({...g,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(p){alert("Error saving service: "+p.stack)}},d=p=>{alert(`Applied preset: ${p}`)},r=u`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${y({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>d("sonarr")})}
      ${y({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>d("radarr")})}
      ${y({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>d("jellyfin")})}
      ${y({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>d("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${(a==null?void 0:a.name)||""}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${s.editingServiceId||""} @input=${p=>{p.target.value=p.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${(a==null?void 0:a.base_url)||""}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${(a==null?void 0:a.api_key)||""}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${a?a.poll_interval_seconds==null:!0}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" .value=${(a==null?void 0:a.primary_endpoint)||"/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending"}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${(a==null?void 0:a.pipeline_key_template)||"{service}:{id}"}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${a!=null&&a.enrichment_endpoints?Object.entries(a.enrichment_endpoints).map(([p,f])=>`${p}: ${f}`).join(`
`):""}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${y({label:"Discover Events from API",variant:"secondary",size:"sm"})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${a?a.enabled:!0}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,i=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Cancel",variant:"secondary",onClick:o})}
      ${y({label:s.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:n})}
    </div>
  `;return z({title:"Register Service",size:"lg",onClose:o,body:r,footer:i})}function ks({checked:e=!1,onChange:s,label:t=""}){return u`
    <style>
      .custom-toggle {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      .custom-toggle input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }
      .custom-toggle .slider {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: var(--color-bg-surface);
        border: 1px solid var(--color-border);
        border-radius: 20px;
        transition: 0.3s;
      }
      .custom-toggle .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 2px;
        bottom: 2px;
        background-color: var(--color-text-muted);
        border-radius: 50%;
        transition: 0.3s;
      }
      .custom-toggle input:checked + .slider {
        background-color: var(--color-success);
        border-color: var(--color-success);
      }
      .custom-toggle input:checked + .slider:before {
        transform: translateX(20px);
        background-color: white;
      }
      .custom-toggle:hover .slider:before {
        box-shadow: 0 0 4px rgba(255,255,255,0.3);
      }
    </style>
    <label class="custom-toggle">
      <input type="checkbox" .checked=${e} @change=${l=>s(l.target.checked)}>
      <span class="slider"></span>
      ${t?u`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${t}</span>`:""}
    </label>
  `}function Is(e,s=[]){const t=()=>{e.set(o=>({...o,isStageModalOpen:!0,editingStageId:null}))},l=(o,n)=>{const d=h.read(S.all);if(!d||!d.data)return;const r=[...d.data.stages],i=o+n;i<0||i>=r.length||([r[o],r[i]]=[r[i],r[o]],h.setData(S.all,()=>({...d.data,stages:r})),e.set(c=>({...c,isDirty:!0})))},a=o=>o.start_condition?o.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${y({label:"+ Add Stage",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${s.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:s.map((o,n)=>{const d=a(o);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${d.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${d.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${o.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${o.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${d.bg}; color: ${d.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${d.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${ks({checked:o.enabled,label:o.enabled?"ACTIVE":"INACTIVE",onChange:r=>{const i={...h.read(S.all).data},c=i.stages.find(p=>p.id===o.id);c&&(c.enabled=r,r&&!c.start_condition&&!c.last_activated_at&&(c.last_activated_at=new Date().toISOString()),h.setData(S.all,()=>i),e.set(p=>({...p,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${y({label:"↑",variant:"ghost",size:"sm",disabled:n===0,onClick:()=>l(n,-1)})}
                      ${y({label:"↓",variant:"ghost",size:"sm",disabled:n===s.length-1,onClick:()=>l(n,1)})}
                      ${y({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(r=>({...r,isStageModalOpen:!0,editingStageId:o.id}))})}
                      ${y({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${o.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${o.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${o.start_condition?o.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${o.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${o.complete_condition?o.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                  ${!o.start_condition&&o.last_activated_at?u`
                    <div style="margin-top: 4px; color: var(--color-text-muted);">
                      <strong>CUTOFF:</strong> ${o.last_activated_at}
                    </div>
                  `:$}
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function Ts(e){if(!e)return"";try{const s=new Date(e);if(isNaN(s.getTime()))return"";const t=l=>String(l).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`}catch{return""}}function Cs(e){var m,v,b;const s=e.get(),t=h.read(S.all),l=((m=t==null?void 0:t.data)==null?void 0:m.stages)||[],a=((v=t==null?void 0:t.data)==null?void 0:v.services)||((b=t==null?void 0:t.data)==null?void 0:b.apps)||{},o=Object.keys(a),n=s.editingStageId?l.find(g=>g.id===s.editingStageId):null,d=s.stageIsSink??(n?!n.complete_condition:!1),r=s.stageIsRoot??(n?!n.start_condition:!1),i=()=>{e.set(g=>({...g,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},c=()=>{var g,x,E;try{const w=document.getElementById("stage-id").value.trim();if(!w){alert("Stage ID is required");return}let _=null;if(r){const T=(g=document.getElementById("stage-last-activated"))==null?void 0:g.value;if(T)try{_=new Date(T).toISOString()}catch{_=(n==null?void 0:n.last_activated_at)||null}}const C={id:w,name:document.getElementById("stage-name").value.trim()||w,description:document.getElementById("stage-desc").value.trim(),service_ids:Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(T=>T.value),start_condition:r?null:((x=document.getElementById("stage-start"))==null?void 0:x.value.trim())||null,complete_condition:d?null:((E=document.getElementById("stage-complete"))==null?void 0:E.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:n?n.order:l.length+1,last_activated_at:_};let R=[...l];s.editingStageId?R=R.map(T=>T.id===s.editingStageId?C:T):R.push(C),h.setData(S.all,()=>({...t.data,stages:R})),e.set(T=>({...T,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(w){alert("Error in Save Stage: "+w.stack)}},p=u`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(n==null?void 0:n.id)||""} ?disabled=${!!n} @input=${g=>{g.target.value=g.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(n==null?void 0:n.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(n==null?void 0:n.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services</label>
      <div class="services-checkbox-grid" style="display: flex; gap: var(--space-3); flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        ${o.length===0?u`<span class="u-text-muted u-text-sm">No services configured.</span>`:o.map(g=>{var x;return u`
          <label class="form-checkbox" style="cursor: pointer; padding: 4px 8px; background: var(--color-bg-card); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <input type="checkbox" name="stage-service" value=${g} ?checked=${(x=n==null?void 0:n.service_ids)==null?void 0:x.includes(g)}>
            <span class="u-text-sm font-mono">${g}</span>
          </label>
        `})}
      </div>
      <small class="u-text-muted">Select services operating within this pipeline stage.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${r} @change=${g=>e.set(x=>({...x,stageIsRoot:g.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${r?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(n==null?void 0:n.start_condition)||""}>
          ${y({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const g=document.getElementById("stage-start").value;if(!g.trim()){alert("Expression is empty!");return}try{const x=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:g})})).json();x.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+x.message)}catch(x){alert("Validation failed: "+x.message)}}})}
        </div>
      </div>

      <div style="display: ${r?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Only service events occurring on or after this timestamp will be ingested. Leave empty to ingest all events without cutoff.</p>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${Ts(n?n.last_activated_at:r?new Date().toISOString():"")}>
          ${y({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const g=document.getElementById("stage-last-activated");if(g){const x=new Date,E=w=>String(w).padStart(2,"0");g.value=`${x.getFullYear()}-${E(x.getMonth()+1)}-${E(x.getDate())}T${E(x.getHours())}:${E(x.getMinutes())}`}}})}
          ${y({label:"Clear",variant:"secondary",size:"sm",onClick:()=>{const g=document.getElementById("stage-last-activated");g&&(g.value="")}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${d} @change=${g=>e.set(x=>({...x,stageIsSink:g.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${d?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(n==null?void 0:n.complete_condition)||""}>
          ${y({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const g=document.getElementById("stage-complete").value;if(!g.trim()){alert("Expression is empty!");return}try{const x=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:g})})).json();x.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+x.message)}catch(x){alert("Validation failed: "+x.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(n==null?void 0:n.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(n==null?void 0:n.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${n?n.enabled:!1}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,f=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Cancel",variant:"secondary",onClick:i})}
      ${y({label:s.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:c})}
    </div>
  `;return z({title:"Configure DAG Stage",size:"lg",onClose:i,body:p,footer:f})}function As(e,s={}){const t=Object.keys(s),l=e.get().selectedMappingService||t[0]||"",a=()=>{e.set(i=>({...i,isSampleApiModalOpen:!0}))},o=()=>{e.set(i=>({...i,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},n=(i,c)=>{e.set(p=>({...p,isMappingModalOpen:!0,editingMapping:{...i},editingMappingIndex:c}))},d=i=>{if(confirm("Are you sure you want to delete this mapping?")){const p={...h.read(S.all).data};p.services[l].field_mappings.splice(i,1),h.setData(S.all,()=>p),e.set(f=>({...f,isDirty:!0}))}},r=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${i=>e.set(c=>({...c,selectedMappingService:i.target.value}))}
        >
          ${t.map(i=>u`<option value="${i}" ?selected=${i===l}>${s[i].name}</option>`)}
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
          ${y({label:"Sample API",variant:"test",size:"sm",onClick:a})}
          ${y({label:"+ Add Mapping",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${t.length>0?r():$}
        
        ${(()=>{const i=s[l];return!i||!i.field_mappings||i.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${i.field_mappings.map((c,p)=>u`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${c.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${c.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${c.data_type})</span>
                    ${c.transformer?u`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${c.transformer}</div>`:$}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${y({label:"Edit",variant:"ghost",size:"sm",onClick:()=>n(c,p)})}
                    ${y({label:"Delete",variant:"delete",size:"sm",onClick:()=>d(p)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function Os(e){const s=e.get(),t=s.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},l=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},a=()=>{const r={...h.read(S.all).data},i=Object.keys(r.services||{}),c=s.selectedMappingService||i[0];c&&(r.services[c].field_mappings||(r.services[c].field_mappings=[]),s.editingMappingIndex>=0?r.services[c].field_mappings[s.editingMappingIndex]=t:r.services[c].field_mappings.push(t),h.setData(S.all,()=>r),e.set(p=>({...p,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},o=u`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${s.selectedMappingService}">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId" .value=${t.source_field} @input=${d=>t.source_field=d.target.value}>
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${t.target_column} @input=${d=>{let r=d.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");r=r.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),d.target.value=r,t.target_column=r}}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select" .value=${t.data_type} @change=${d=>t.data_type=d.target.value}>
        <option value="TEXT" ?selected=${t.data_type==="TEXT"}>TEXT</option>
        <option value="INTEGER" ?selected=${t.data_type==="INTEGER"}>INTEGER</option>
        <option value="REAL" ?selected=${t.data_type==="REAL"}>REAL</option>
        <option value="BOOLEAN" ?selected=${t.data_type==="BOOLEAN"}>BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value" .value=${t.transformer||""} @input=${d=>t.transformer=d.target.value}>
      <div class="u-text-xs u-text-muted u-mb-2">
        Leave empty to store direct value. The payload data is in <code>value</code>.<br>
        <strong>Syntax examples:</strong><br>
        • Direct boolean: <code>'anime' in value</code> or <code>value == 'anime'</code><br>
        • Explicit condition: <code>if 'anime' in value then 1 else 0</code><br>
        • Functions: <code>lower(value)</code> or <code>len(value) &gt; 0</code>
      </div>
      
      <div class="u-mt-3">
        <label class="form-label u-text-sm">Test Transformer with Sample Value or Context (JSON Object)</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="transformerTestVal" class="form-input font-mono" placeholder='{"SHOKO_ID": 2639, "ANIDB_ID": 4821}' style="flex: 1;">
          ${y({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let r;try{r=JSON.parse(d)}catch{r=d}try{const i={expression:t.transformer,sample_value:r};typeof r=="object"&&r!==null&&!Array.isArray(r)&&(i.context_dict=r);const c=await k.post("/api/v1/settings/test-transformer",i);c.valid?alert("Result: "+JSON.stringify(c.result)):alert("Error: "+c.message)}catch(i){alert("Error: "+i.message)}}})}
        </div>
      </div>
    </div>
  `,n=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Cancel",variant:"secondary",onClick:l})}
      ${y({label:"Save Mapping",variant:"save",onClick:a})}
    </div>
  `;return z({title:"Configure Field Mapping & Transformer",size:"lg",onClose:l,body:o,footer:n})}function Rs(e){const s=()=>{e.set(a=>({...a,isSampleApiModalOpen:!1}))},t=u`
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
      ${y({label:"Fetch Sample",variant:"test"})}
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
  `,l=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Close",variant:"secondary",onClick:s})}
    </div>
  `;return z({title:"Sample Service API Schema",size:"lg",onClose:s,body:t,footer:l})}function Ms(e,s={}){const t=Array.isArray(s.notification_triggers)?s.notification_triggers:Array.isArray(s.triggers)?s.triggers:[],l=()=>{e.set(r=>({...r,isNotificationModalOpen:!0}))},a=async r=>{try{const i=await k.post("/api/v1/settings/test-notification",{trigger_id:r==null?void 0:r.id,channel:(r==null?void 0:r.channel)||"ntfy",target_url:(r==null?void 0:r.target_url)||"http://host.docker.internal:8090",topic:(r==null?void 0:r.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(r==null?void 0:r.id)||"manual"}`});if(i&&i.success)alert(`✓ Notification successfully dispatched to ${(r==null?void 0:r.channel)||"ntfy"}`);else{const c=(i==null?void 0:i.error)||(i!=null&&i.status_code?`HTTP ${i.status_code}: ${i.response||"Failed"}`:(i==null?void 0:i.response)||"Unknown response");alert(`Failed to send alert: ${c}`)}}catch(i){alert(`Error sending test notification: ${i.message}`)}},o=async r=>{if(await te({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${r}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const c=h.read(S.all);if(!c||!c.data)return;const f=(Array.isArray(c.data.notification_triggers)?c.data.notification_triggers:[]).filter(m=>m.id!==r);h.setData(S.all,m=>({...m,notification_triggers:f})),e.set(m=>({...m,isDirty:!0}))}},n=(r,i)=>{const c=h.read(S.all);if(!c||!c.data)return;const f=(Array.isArray(c.data.notification_triggers)?c.data.notification_triggers:[]).map(m=>m.id===r?{...m,enabled:!i}:m);h.setData(S.all,m=>({...m,notification_triggers:f})),e.set(m=>({...m,isDirty:!0}))},d=r=>r.includes("OPEN")||r.includes("FAIL")?"warning":r.includes("RESOLVED")||r.includes("SUCCESS")||r.includes("COMPLETE")?"success":"info";return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${y({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>a({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${y({label:"+ Add Trigger",variant:"save",size:"sm",onClick:l})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${t.length===0?u`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>`:t.map(r=>u`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${r.id}</strong>
                  ${oe({label:r.event||"ON_INCIDENT_OPEN",tone:d(r.event||"")})}
                  ${oe({label:r.channel||"ntfy",tone:"neutral"})}
                  ${r.enabled===!1?oe({label:"Disabled",tone:"danger"}):$}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>n(r.id,r.enabled!==!1)}
                  >
                    ${r.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${y({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>a(r)})}
                  ${y({label:"Delete",variant:"delete",size:"sm",onClick:()=>o(r.id)})}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${r.target_url||"-"}</span>
                </div>
                ${r.topic?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${r.topic}</span>
                  </div>
                `:$}
                ${r.priority?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${r.priority}</span>
                  </div>
                `:$}
                ${r.tags?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Tags:</span>
                    <span class="u-ml-1">${r.tags}</span>
                  </div>
                `:$}
              </div>
            </div>
          `)}
      </div>
    </div>
  `}function Ns(e){const s=()=>{e.set(o=>({...o,isNotificationModalOpen:!1}))},t=o=>{var x,E,w,_,C,R,T,B;o&&o.preventDefault();const n=(x=document.getElementById("input-trig-id"))==null?void 0:x.value.trim();if(!n){alert("Trigger ID is required.");return}const d=(E=document.getElementById("input-trig-event"))==null?void 0:E.value,r=(w=document.getElementById("input-trig-channel"))==null?void 0:w.value,i=(_=document.getElementById("input-trig-url"))==null?void 0:_.value.trim();if(!i){alert("Target URL is required.");return}const c=((C=document.getElementById("input-trig-topic"))==null?void 0:C.value.trim())||"",p=((R=document.getElementById("input-trig-priority"))==null?void 0:R.value.trim())||"default",f=((T=document.getElementById("input-trig-tags"))==null?void 0:T.value.trim())||"server",m=((B=document.getElementById("input-trig-template"))==null?void 0:B.value.trim())||"{event}: {details}",v=h.read(S.all);if(!v||!v.data)return;const g=(Array.isArray(v.data.notification_triggers)?[...v.data.notification_triggers]:[]).filter(I=>I.id!==n);g.push({id:n,event:d,enabled:!0,channel:r,target_url:i,topic:c,priority:p,tags:f,message_template:m}),h.setData(S.all,I=>({...I,notification_triggers:g})),e.set(I=>({...I,isDirty:!0,isNotificationModalOpen:!1}))},l=u`
    <form id="notification-trigger-form" @submit=${t}>
      <div class="form-group u-mb-3">
        <label for="input-trig-id" class="u-text-sm u-font-medium">Trigger ID</label>
        <input 
          id="input-trig-id" 
          name="trigger_id" 
          type="text" 
          class="form-input u-font-mono" 
          placeholder="e.g. alert_critical_incident" 
          required 
        />
        <small class="u-text-muted u-text-xs">Unique identifier for this notification trigger rule.</small>
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-event" class="u-text-sm u-font-medium">Event</label>
          <select id="input-trig-event" name="event" class="form-select">
            <option value="ON_INCIDENT_OPEN" selected>Incident Opened</option>
            <option value="ON_INCIDENT_RESOLVED">Incident Resolved</option>
            <option value="ON_PIPELINE_COMPLETE">Pipeline Completed</option>
            <option value="ON_DEPLOY_SUCCESS">Deployment Succeeded</option>
          </select>
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-channel" class="u-text-sm u-font-medium">Channel</label>
          <select id="input-trig-channel" name="channel" class="form-select">
            <option value="ntfy" selected>NTFY Push Notification</option>
            <option value="webhook">Generic HTTP Webhook</option>
          </select>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-url" class="u-text-sm u-font-medium">Target URL</label>
        <input 
          id="input-trig-url" 
          name="target_url" 
          type="text" 
          class="form-input" 
          value="http://host.docker.internal:8090" 
          placeholder="http://host.docker.internal:8090" 
          required 
        />
      </div>

      <div class="u-flex u-gap-3 u-mb-3">
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-topic" class="u-text-sm u-font-medium">Topic (NTFY)</label>
          <input 
            id="input-trig-topic" 
            name="topic" 
            type="text" 
            class="form-input" 
            value="cubi-alerts" 
            placeholder="cubi-alerts" 
          />
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-trig-priority" class="u-text-sm u-font-medium">Priority</label>
          <select id="input-trig-priority" name="priority" class="form-select">
            <option value="low">Low</option>
            <option value="default" selected>Default</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-tags" class="u-text-sm u-font-medium">Tags (Comma-separated)</label>
        <input 
          id="input-trig-tags" 
          name="tags" 
          type="text" 
          class="form-input" 
          value="warning,server" 
          placeholder="warning,server" 
        />
      </div>

      <div class="form-group u-mb-3">
        <label for="input-trig-template" class="u-text-sm u-font-medium">Message Template</label>
        <input 
          id="input-trig-template" 
          name="message_template" 
          type="text" 
          class="form-input u-font-mono" 
          value="{event}: {details}" 
          placeholder="{event}: {details}" 
        />
      </div>
    </form>
  `,a=u`
    <div class="u-flex u-gap-2 u-justify-end">
      ${y({label:"Cancel",variant:"secondary",onClick:s})}
      ${y({label:"Save Trigger",variant:"save",onClick:()=>t()})}
    </div>
  `;return z({title:"Configure Notification Trigger",size:"md",onClose:s,body:l,footer:a})}function Ds(e,s={}){const t=s.retention_days||30,l=s.global_poll_interval_seconds||300;return u`
      <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control data retention, global polling cadence, and inspect custom polling overrides.</p>
        </div>
        
        <div style="padding: var(--space-4);">
          <div class="form-grid-2 u-mb-4">
            <div class="form-group">
              <label>Data Retention (Days)</label>
              <input type="number" class="form-input" min="1" max="365" .value=${t} 
                @input=${a=>{const n={...h.read(S.all).data,retention_days:parseInt(a.target.value,10)||30};h.setData(S.all,()=>n),e.set(d=>({...d,isDirty:!0}))}}>
              <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
            </div>
            <div class="form-group">
              <label>Global Polling Interval (Seconds)</label>
              <input type="number" class="form-input" min="10" max="86400" .value=${l}
                @input=${a=>{const n={...h.read(S.all).data,global_poll_interval_seconds:parseInt(a.target.value,10)||300};h.setData(S.all,()=>n),e.set(d=>({...d,isDirty:!0}))}}>
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

        ${y({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}function Ps(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const s=new Set;return{get:()=>e,set:t=>{e=t(e),s.forEach(l=>l())},subscribe:t=>(s.add(t),()=>s.delete(t))}}function De(){const e=Ps(),s=async()=>{var g,x;const o=e.get(),{selectedService:n,selectedRecordId:d,testEndpoint:r,testName:i}=o;if(!n||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!n||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const c=h.read(S.all),f=(((g=c==null?void 0:c.data)==null?void 0:g.services)||{})[n],m={...(f==null?void 0:f.enrichment_endpoints)||{}},v=i.trim()||"sandbox_test",b=!!r.trim();b&&(m[v]=r.trim()),e.set(E=>({...E,isLoading:!0,error:null,logs:[],testResponse:null}));try{const E=await k.post("/api/v1/pipeline/sandbox/enrichment",{service_id:n,record_id:parseInt(d,10),enrichment_endpoints:m}),w=b?((x=E.context_data)==null?void 0:x[v])||null:E.context_data;e.set(_=>({..._,isLoading:!1,logs:E.logs||[],testResponse:w}))}catch(E){e.set(w=>({...w,isLoading:!1,error:E.message}))}},t=async()=>{var v;const o=e.get();if(!o.selectedService)return;const n=h.read(S.all),d=((v=n==null?void 0:n.data)==null?void 0:v.services)||{},r=d[o.selectedService],i={...(r==null?void 0:r.enrichment_endpoints)||{}},c=o.testName.trim(),p=o.testEndpoint.trim();if(!c||!p){alert("Please provide both a namespace name and an endpoint to save.");return}i[c]=p;const f={...d,[o.selectedService]:{...r,enrichment_endpoints:i}},m={...n.data,services:f};try{await k.post("/api/v1/settings/config",m),h.setData(S.all,()=>m),e.set(b=>({...b,saveSuccess:!0})),setTimeout(()=>{e.set(b=>({...b,saveSuccess:!1}))},3e3)}catch(b){alert("Failed to save to service: "+b.message)}},l=()=>{var f;const o=e.get(),n=h.read(S.all),d=((f=n==null?void 0:n.data)==null?void 0:f.services)||{},r=Object.keys(d),i=d[o.selectedService];!o.selectedService&&r.length>0&&setTimeout(()=>e.set(m=>({...m,selectedService:r[0]})),0);const c=(m,v)=>{if(!(!v||!m))try{return v.split(".").reduce((b,g)=>b&&b[g]!==void 0?b[g]:void 0,m)}catch{return}},p=o.testVariable.trim()?c(o.testResponse,o.testVariable.trim()):void 0;return u`
      <div class="page-container" style="display: flex; flex-direction: column; height: 100%; min-height: 500px;">
        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${m=>e.set(v=>({...v,selectedService:m.target.value}))} style="border: 1px solid var(--color-text);">
              ${r.length===0?u`<option value="">No services</option>`:$}
              ${r.map(m=>u`<option value=${m} ?selected=${o.selectedService===m}>${d[m].name||m}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${o.selectedRecordId} @input=${m=>e.set(v=>({...v,selectedRecordId:m.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${y({label:"RUN",variant:"test",onClick:s,disabled:o.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${o.testName} @input=${m=>e.set(v=>({...v,testName:m.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${y({label:"SAVE",variant:"secondary",onClick:t,disabled:o.isLoading})}
            ${o.saveSuccess?u`<span style="color: var(--color-success);">${G({name:"check"})}</span>`:$}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="height: 60px; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${o.testEndpoint} @input=${m=>e.set(v=>({...v,testEndpoint:m.target.value}))}></textarea>
            </div>
            
            <div class="u-flex u-items-center u-justify-between u-mb-2">
              <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
              <div class="u-text-xs u-text-muted">
                ${o.testEndpoint.trim()?`Showing result for new namespace: ${o.testName.trim()||"sandbox_test"}`:"Showing complete cumulative context"}
              </div>
            </div>
            
            <!-- JSON Path Evaluator -->
            ${o.testResponse?u`
              <div class="u-flex u-flex-col u-gap-2 u-mb-2" style="background: var(--color-bg-surface); padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); min-width: 0;">
                <div class="u-flex u-gap-2 u-items-center">
                  <span style="color: var(--color-text-muted); font-size: 0.85rem;">Test Path:</span>
                  <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${o.testVariable} @input=${m=>e.set(v=>({...v,testVariable:m.target.value}))} style="flex: 1; min-width: 0; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                </div>
                ${o.testVariable.trim()?u`
                  <div style="padding: 8px; background: #000; color: ${p!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; max-height: 200px; overflow: auto; border-radius: var(--radius-sm);">
                    <pre style="margin: 0; white-space: pre-wrap;">${p!==void 0?JSON.stringify(p,null,2):"undefined"}</pre>
                  </div>
                `:$}
              </div>
            `:$}
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: #FFFFFF; font-family: monospace; font-size: 0.85rem;">
              ${o.isLoading?"Running test...":$}
              ${o.error?u`<div style="color: var(--color-error);">${o.error}</div>`:$}
              ${!o.isLoading&&!o.error&&o.testResponse?u`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(o.testResponse,null,2)}</pre>`:$}
              ${!o.isLoading&&!o.error&&!o.testResponse&&o.logs.length>0?u`<div style="color: var(--color-warning);">Endpoint returned empty or failed.\n\nCheck logs:\n${o.logs.join(`
`)}</div>`:$}
              ${!o.isLoading&&!o.error&&!o.testResponse&&o.logs.length===0&&!o.testEndpoint.trim()?u`<div style="color: var(--color-text-muted);">Click RUN with an empty input to fetch the full context, or type an endpoint to test a new request.</div>`:$}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((i==null?void 0:i.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:$}
              
              ${Object.entries((i==null?void 0:i.enrichment_endpoints)||{}).map(([m,v])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(b=>({...b,testName:m,testEndpoint:v}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${m}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${v}>${v}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let a;return{view:l,mount:o=>{a=e.subscribe(o);const n=h.read(S.all);n!=null&&n.data||k.get("/api/v1/settings").then(d=>{h.setData(S.all,()=>d),e.set(r=>({...r}))}).catch(console.error)},unmount:()=>{a&&a()}}}function Ls(e){const s=De(),t=W({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let l,a;const o=n=>{t.get().isDirty&&(n.preventDefault(),n.returnValue="")};return{mount(n){l=t.subscribe(()=>n()),a=h.subscribe(S.all,()=>n()),Es.getSettings(),s.mount(n),window.addEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(async d=>t.get().isDirty?await te({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){l&&l(),a&&a(),s.unmount(),window.removeEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(null)},view(){const n=t.get(),{activeTab:d,saving:r,isServiceModalOpen:i,isStageModalOpen:c,isMappingModalOpen:p,isSampleApiModalOpen:f,isNotificationModalOpen:m}=n,v=h.read(S.all),{data:b,status:g,error:x}=v;if(g==="loading"&&!b)return u`<p class="u-text-muted">Loading settings...</p>`;if(g==="error"&&!b)return u`<p class="u-text-danger">Error: ${x==null?void 0:x.message}</p>`;const E={retention_days:(b==null?void 0:b.retention_days)||30,global_poll_interval_seconds:(b==null?void 0:b.global_poll_interval_seconds)||300},w=(b==null?void 0:b.services)||{},_=(b==null?void 0:b.stages)||[],C=E.global_poll_interval_seconds,R=(T,B,I)=>{const D=d===T;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${D?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${D?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${D?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(pe=>({...pe,activeTab:T}))}
          >
            ${G({name:B,size:16})}
            <span>${I}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${R("services","database","Services")}
              ${R("sandbox","terminal","API Sandbox")}
              ${R("mappings","code","Field Mappings")}
              ${R("stages","activity","Stages & Predicates")}
              ${R("notifications","bell","Notification Triggers")}
              ${R("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${y({label:"Save All Settings",variant:"save",size:"sm",loading:r,disabled:!n.isDirty,onClick:async()=>{const T=h.read(S.all);if(!T||!T.data)return;const B=JSON.parse(JSON.stringify(T.data));t.set(I=>({...I,saving:!0}));try{const I=await k.post("/api/v1/settings",T.data);h.setData(S.all,()=>I),t.set(D=>({...D,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(I){h.setData(S.all,()=>B),t.set(D=>({...D,isDirty:!1,saving:!1})),alert("Failed to save settings: "+I.message+`
Rolled back to previous verified configuration.`)}}})}
              ${n.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:$}
            </div>
            </div>
          </div>
          
          ${d==="services"?_s(t,w,C):$}
          ${d==="sandbox"?s.view():$}
          ${d==="mappings"?As(t,w):$}
          ${d==="stages"?Is(t,_):$}
          ${d==="notifications"?Ms(t,b):$}
          ${d==="engine"?Ds(t,E):$}
          
          <!-- Modals -->
          ${i?Ss(t):$}
          ${c?Cs(t):$}
          ${p?Os(t):$}
          ${f?Rs(t):$}
          ${m?Ns(t):$}
        </div>
      `}}}const X=je(Te),zs={overview:ls(),pipeline:ns(),tools:vs(),views:gs(),incidents:hs(),sandbox:De(),gitops:ws(),settings:Ls(X)};let L=null;function ue(){var t,l,a,o;const{current:e}=X.store.get();L&&L.id!==e.id&&((l=(t=L.instance).unmount)==null||l.call(t),L=null),!L&&e&&(L={id:e.id,instance:zs[e.id]},(o=(a=L.instance).mount)==null||o.call(a,ue));const s=L?L.instance.view():"";ze(Bt({routerStore:X.store.get(),routes:Te,router:X,pageContent:s}),document.getElementById("app"))}X.store.subscribe(ue);ne.store.subscribe(ue);ue();
