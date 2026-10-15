import{j as Pe,E as Le,w as A,b as u,A as $,D as ze}from"./vendor-LJTP5CNr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Be(){const e=new Map;return{on(s,t){return e.has(s)||e.set(s,new Set),e.get(s).add(t),()=>e.get(s).delete(t)},emit(s,t){if(e.has(s))for(const i of e.get(s))i(t)}}}function W(e){let s=e;const t=new Set;return{get:()=>s,set:i=>{s=typeof i=="function"?i(s):i;for(const a of t)a(s)},subscribe:i=>(t.add(i),()=>t.delete(i))}}function je(e){const s=W({current:null,params:{}});let t=null;async function i(a){const o=window.location.hash.slice(1)||"/";if(t&&s.get().current&&s.get().current.path!==o&&!await t(o)){window.removeEventListener("hashchange",i),window.location.hash=s.get().current.path,setTimeout(()=>window.addEventListener("hashchange",i),0);return}const n=e.find(d=>d.path===o)||e[0];s.set({current:n,params:{}})}return window.addEventListener("hashchange",i),i(),{store:s,navigate(a){window.location.hash=a},setBeforeNavigateHook(a){t=a}}}const ke=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={CHILD:2},Ae=e=>(...s)=>({_$litDirective$:e,values:s});let Oe=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,i){this._$Ct=s,this._$AM=t,this._$Ci=i}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ue}=Pe,we=e=>e,Ve=e=>e.strings===void 0,_e=()=>document.createComment(""),K=(e,s,t)=>{var o;const i=e._$AA.parentNode,a=s===void 0?e._$AB:s._$AA;if(t===void 0){const n=i.insertBefore(_e(),a),d=i.insertBefore(_e(),a);t=new Ue(n,d,e,e.options)}else{const n=t._$AB.nextSibling,d=t._$AM,r=d!==e;if(r){let l;(o=t._$AQ)==null||o.call(t,e),t._$AM=e,t._$AP!==void 0&&(l=e._$AU)!==d._$AU&&t._$AP(l)}if(n!==a||r){let l=t._$AA;for(;l!==n;){const c=we(l).nextSibling;we(i).insertBefore(l,a),l=c}}}return t},U=(e,s,t=e)=>(e._$AI(s,t),e),Fe={},Ge=(e,s=Fe)=>e._$AH=s,qe=e=>e._$AH,ve=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=(e,s,t)=>{const i=new Map;for(let a=s;a<=t;a++)i.set(e[a],a);return i},Re=Ae(class extends Oe{constructor(e){if(super(e),e.type!==Ce.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let i;t===void 0?t=s:s!==void 0&&(i=s);const a=[],o=[];let n=0;for(const d of e)a[n]=i?i(d,n):n,o[n]=t(d,n),n++;return{values:o,keys:a}}render(e,s,t){return this.dt(e,s,t).values}update(e,[s,t,i]){const a=qe(e),{values:o,keys:n}=this.dt(s,t,i);if(!Array.isArray(a))return this.ut=n,o;const d=this.ut??(this.ut=[]),r=[];let l,c,p=0,f=a.length-1,m=0,v=o.length-1;for(;p<=f&&m<=v;)if(a[p]===null)p++;else if(a[f]===null)f--;else if(d[p]===n[m])r[m]=U(a[p],o[m]),p++,m++;else if(d[f]===n[v])r[v]=U(a[f],o[v]),f--,v--;else if(d[p]===n[v])r[v]=U(a[p],o[v]),K(e,r[v+1],a[p]),p++,v--;else if(d[f]===n[m])r[m]=U(a[f],o[m]),K(e,a[p],a[f]),f--,m++;else if(l===void 0&&(l=Ee(n,m,v),c=Ee(d,p,f)),l.has(d[p]))if(l.has(d[f])){const b=c.get(n[m]),g=b!==void 0?a[b]:null;if(g===null){const x=K(e,a[p]);U(x,o[m]),r[m]=x}else r[m]=U(g,o[m]),K(e,a[p],g),a[b]=null;m++}else ve(a[f]),f--;else ve(a[p]),p++;for(;m<=v;){const b=K(e,r[v+1]);U(b,o[m]),r[m++]=b}for(;p<=f;){const b=a[p++];b!==null&&ve(b)}return this.ut=n,Ge(e,r),Le}}),He={x:A`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:A`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:A`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:A`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:A`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:A`<polyline points="20 6 9 17 4 12"></polyline>`,tool:A`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:A`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":A`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:A`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:A`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:A`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:A`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:A`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:A`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:A`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:A`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:A`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":A`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:A`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function G({name:e,size:s=16,label:t}){const i=He[e];return i?u`<svg 
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
    ${i}
  </svg>`:u`<span style="width:${s}px; height:${s}px; display:inline-block; background:red;"></span>`}const Ye="-FyYHK",We="hQIh8E",Ke="vjCp9N",Je="aWcKCO",Xe="XdvXnE",Qe="Yr8TTV",Ze="yefrc2",et="UnbUQg",tt="z6Wtj-",st="WEwa7u",at="rr8RRm",rt="_8nqxsa",ot="EMU1IN",nt="erzuUm",it="IX2naX",lt="UuwGh4",ct="HRKVqM",O={sidebar:Ye,brand:We,logo:Ke,title:Je,nav:Xe,navItem:Qe,sidebarFooter:Ze,toggleBtn:et,toggleText:tt,footerDetails:st,statusWrapper:at,statusDot:rt,branchBox:ot,expanded:nt,brandText:it,statusText:lt,commitText:ct},N=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),dt=new Set([502,503,504]);function ut(e){const s=e&&typeof e=="object"?e.detail:null;return typeof s=="string"?s:Array.isArray(s)?s.map(t=>`${(t.loc??[]).slice(1).join(".")||"body"}: ${t.msg}`).join("; "):null}class H extends Error{constructor(s,{code:t,status:i=0,detail:a=null,cause:o}={}){super(s,{cause:o}),this.name="ApiError",this.code=t,this.status=i,this.detail=a}get retryable(){return this.code===N.NETWORK||this.code===N.TIMEOUT||this.code===N.HTTP&&dt.has(this.status)}get userMessage(){switch(this.code){case N.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case N.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case N.ABORTED:return"";case N.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const pt=new Set(["GET","HEAD"]),vt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function mt(e={}){const s={...vt,...e},t=e.fetchImpl??((...v)=>globalThis.fetch(...v)),i={request:[],response:[],error:[]},a=new Map,o=()=>new H("Request aborted",{code:N.ABORTED}),n=(v,b)=>{const g=new URLSearchParams;for(const[_,w]of Object.entries(b??{}))w!=null&&w!==""&&g.set(_,String(w));const x=g.toString();return`${s.baseUrl}${v}${x?"?"+x:""}`};async function d(v){if(v.status===204)return null;const b=v.headers.get("content-type")??"";try{return b.includes("application/json")?await v.json():await v.text()}catch(g){throw new H("Malformed response body",{code:N.PARSE,status:v.status,cause:g})}}async function r(v,b,g){const x=AbortSignal.timeout(g),_=b?AbortSignal.any([b,x]):x;let w;try{w=await t(v.url,{method:v.method,headers:v.headers,body:v.body,signal:_})}catch(C){throw x.aborted?new H(`Request timed out after ${g} ms`,{code:N.TIMEOUT,cause:C}):b!=null&&b.aborted?o():new H("Network request failed",{code:N.NETWORK,cause:C})}const E=await d(w);if(!w.ok)throw new H(ut(E)??`HTTP ${w.status}`,{code:N.HTTP,status:w.status,detail:E});return{status:w.status,data:E,headers:w.headers}}const l=(v,b)=>new Promise((g,x)=>{const _=setTimeout(g,v);b==null||b.addEventListener("abort",()=>{clearTimeout(_),x(o())},{once:!0})}),c=v=>Math.random()*Math.min(s.retryMaxMs,s.retryBaseMs*2**v);async function p(v,{signal:b,timeoutMs:g,retries:x}){for(let _=0;;_+=1)try{return await r(v,b,g)}catch(w){if(!(w instanceof H)||!w.retryable||_>=x)throw w;await l(c(_),b)}}function f(v,b,g){let x=a.get(v);if(!x){const _=new AbortController,w={controller:_,refs:0,promise:null};w.promise=b(_.signal).finally(()=>{a.get(v)===w&&a.delete(v)}),w.promise.catch(()=>{}),a.set(v,w),x=w}return x.refs+=1,new Promise((_,w)=>{const E=()=>{x.refs-=1,x.refs===0&&(a.get(v)===x&&a.delete(v),x.controller.abort()),w(o())};if(g!=null&&g.aborted){E();return}g==null||g.addEventListener("abort",E,{once:!0}),x.promise.then(C=>{g==null||g.removeEventListener("abort",E),_(C)},C=>{g==null||g.removeEventListener("abort",E),w(C)})})}async function m(v,b,g={}){const{query:x,body:_,headers:w={},signal:E,meta:C={}}=g,R=g.timeoutMs??s.timeoutMs,k=g.retries??(pt.has(v)?s.retries:0),B=g.dedupe??v==="GET";let T={method:v,url:n(b,x),headers:{Accept:"application/json",...w},body:void 0,meta:C};_!==void 0&&(T.body=JSON.stringify(_),T.headers["Content-Type"]="application/json");for(const se of i.request)T=await se(T);const P=async se=>{try{let q=await p(T,{signal:se,timeoutMs:R,retries:k});for(const j of i.response)q=await j(q,T);return q.data}catch(q){let j=q;for(const pe of i.error)j=await pe(j,T)??j;throw j}};return B?f(`${T.method} ${T.url}`,P,E):P(E)}return{get:(v,b)=>m("GET",v,b),post:(v,b,g)=>m("POST",v,{...g,body:b}),put:(v,b,g)=>m("PUT",v,{...g,body:b}),delete:(v,b)=>m("DELETE",v,b),use({request:v,response:b,error:g}){v&&i.request.push(v),b&&i.response.push(b),g&&i.error.push(g)}}}const me=()=>{};function gt(e,s){return s?new Promise((t,i)=>{const a=()=>i(new DOMException("Aborted","AbortError"));if(s.aborted){a();return}s.addEventListener("abort",a,{once:!0}),e.then(t,i).finally(()=>s.removeEventListener("abort",a))}):e}const xe=e=>JSON.stringify(e,(s,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([i],[a])=>i<a?-1:1)):t),ft=(e,s)=>s.every((t,i)=>i<e.length&&xe(t)===xe(e[i]));function bt({now:e=()=>Date.now(),gcMs:s=5*6e4}={}){const t=new Map,i=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function a(r){const l=xe(r);let c=t.get(l);return c||(c={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},c.snapshot=i(c),t.set(l,c)),c}function o(r){r.snapshot=i(r);for(const l of[...r.listeners])l(r.snapshot)}function n(){for(const[r,l]of t)l.listeners.size===0&&!l.promise&&l.updatedAt&&e()-l.updatedAt>s&&t.delete(r)}function d(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(l=>(Object.assign(r,{data:l,error:null,status:"success",updatedAt:e()}),l),l=>{throw Object.assign(r,{error:l,status:"error"}),l}).finally(()=>{r.promise=null,o(r),r.invalidated&&r.listeners.size>0&&d(r).catch(me)}),r.promise.catch(me),o(r)),r.promise}return{load(r,l,{staleMs:c=0,signal:p}={}){n();const f=a(r);f.fetcher=l;const m=f.status==="success"&&!f.invalidated&&e()-f.updatedAt<c;return gt(m?Promise.resolve(f.data):d(f),p)},read:r=>a(r).snapshot,subscribe(r,l){const c=a(r);return c.listeners.add(l),l(c.snapshot),()=>{c.listeners.delete(l)}},invalidate(r){for(const l of t.values())ft(l.keyParts,r)&&(l.invalidated=!0,o(l),l.listeners.size>0&&l.fetcher&&d(l).catch(me))},setData(r,l){const c=a(r),p={data:c.data,status:c.status,updatedAt:c.updatedAt},f=typeof l=="function"?l(c.data):l;return Object.assign(c,{data:f,status:"success",updatedAt:e()}),o(c),function(){c.data===f&&(Object.assign(c,p),o(c))}},set(r,l){return this.setData(r,typeof l=="function"?l:()=>l)}}}function xt(e,{mutationFn:s,optimistic:t,invalidates:i=[]}){return async function(o){const n=((t==null?void 0:t(o))??[]).map(({key:d,update:r})=>e.setData(d,r));try{const d=await s(o);return(typeof i=="function"?i(o,d):i).forEach(l=>e.invalidate(l)),d}catch(d){throw n.reverse().forEach(r=>r()),d}}}const Y={},yt=Be(),I=mt({baseUrl:(Y==null?void 0:Y.VITE_API_BASE)??"",timeoutMs:Number((Y==null?void 0:Y.VITE_HTTP_TIMEOUT_MS)??1e4)}),h=bt();I.use({error:e=>((e==null?void 0:e.status)===401&&yt.emit("auth:required",e),e)});const ce={all:["overview"]},ht={getOverview:e=>h.load(ce.all,()=>I.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let re=!1;function $t(){re=!re;const e=document.getElementById("app-sidebar");e&&(re?e.classList.add(O.expanded):e.classList.remove(O.expanded))}function wt({routes:e,activeId:s,onNavigate:t}){var d,r,l,c,p;const i=h.read(ce.all),a=((r=(d=i==null?void 0:i.data)==null?void 0:d.telemetry)==null?void 0:r.short_commit)||"6b319ac",o=((c=(l=i==null?void 0:i.data)==null?void 0:l.telemetry)==null?void 0:c.branch)||"main",n=(p=i==null?void 0:i.data)!=null&&p.version?i.data.version.startsWith("v")?i.data.version:`v${i.data.version}`:"v0.1.7";return u`<aside id="app-sidebar" class="${O.sidebar} ${re?O.expanded:""}">
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
  </aside>`}const _t="MFUTlq",Et="kBMrej",ge={topbar:_t,title:Et};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>e??$;function Z(...e){return e.filter(Boolean).join(" ")}function St(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function It(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Tt="PSMDQ2",kt={spinner:Tt};function Ct({size:e=16}={}){return u`<svg class=${kt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",J={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function y({label:e,variant:s="secondary",size:t="md",icon:i,iconOnly:a=!1,ariaLabel:o,loading:n=!1,disabled:d=!1,type:r="button",id:l,onClick:c}){const p=Z(J.btn,J[`btn--${s}`],J[`btn--${t}`],a&&J["btn--icon-only"]);return u`<button id=${Se(l)} class=${p} type=${r}
    aria-label=${Se(o)} aria-busy=${n?"true":"false"}
    ?disabled=${d||n} @click=${c}>
    ${n?Ct():i?G({name:i,size:t==="sm"?14:16}):$}
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
  </header>`}function Mt(){const e=W({stack:[]});let s=0;function t(a){return new Promise(o=>{const n=`modal-${s+=1}`;let d=!1;const r=l=>{d||(d=!0,e.set(c=>({stack:c.stack.filter(p=>p.id!==n)})),o(l))};e.set(l=>({stack:[...l.stack,{id:n,view:()=>a({close:r,id:n})}]}))})}return{open:t,refresh:()=>e.set(a=>({stack:[...a.stack]})),store:e}}const Nt=Mt(),ne=Nt;function Dt(){const{stack:e}=ne.store.get();return u`<div id="modal-root">${e.map(s=>s.view())}</div>`}const Pt="sCMZyq",Lt="Fk5OML",zt="_0AKuiv",fe={layout:Pt,mainContent:Lt,page:zt};function Bt({routerStore:e,routes:s,router:t,pageContent:i}){const{current:a}=e;return u`<div class=${fe.layout}>
    ${wt({routes:s,activeId:a==null?void 0:a.id,onNavigate:t.navigate})}
    <div class=${fe.mainContent}>
      ${Rt({title:(a==null?void 0:a.pageTitle)||(a==null?void 0:a.title)||""})}
      <main class=${fe.page}>
        ${i}
      </main>
    </div>
    ${Dt()}
  </div>`}const jt="fuSbcq",Ut="fu9t4u",Vt="elFvvy",Ft="_2Hu4ZP",Gt="r2dRuM",qt="AjfFun",M={table:jt,table__scroll:Ut,table__grid:Vt,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:Ft,table__skeleton:Gt,table__stale:qt};function de({id:e,caption:s,columns:t,snapshot:i,getRows:a=c=>Array.isArray(c)?c:(c==null?void 0:c.items)??[],rowKey:o=(c,p)=>p,emptyMessage:n="No records found.",onRetry:d,footer:r=$,fallbackColumns:l=[]}){const{status:c,data:p,error:f,isFetching:m}=i,v=p!==void 0,b=typeof t=="function"?v?t(p):l:t,g=Math.max(b.length,1),x=v?a(p):[],_=(E,C)=>u`<td class=${Z(E.align==="end"&&M["table__cell--end"],E.align==="center"&&M["table__cell--center"],E.mono&&M["table__cell--mono"])}>
    ${E.render?E.render(C):It(C[E.key])}</td>`;let w;return!v&&(c==="idle"||c==="loading")?w=Array.from({length:5},()=>u`<tr aria-hidden="true">${b.map(()=>u`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):v?x.length===0?w=u`<tr><td colspan=${g} class=${M.table__message}>${n}</td></tr>`:w=Re(x,o,E=>u`<tr>${b.map(C=>_(C,E))}</tr>`):w=u`<tr><td colspan=${g} class=${M.table__message} role="alert">
      ${(f==null?void 0:f.userMessage)||(f==null?void 0:f.message)||"Failed to load data."}
      ${d?y({label:"Retry",icon:"refresh",size:"sm",onClick:d}):$}</td></tr>`,u`<div class=${M.table}>
    ${c==="error"&&v?u`<div class=${M.table__stale} role="status">Showing cached data. ${(f==null?void 0:f.userMessage)??""} ${d?y({label:"Retry",size:"sm",variant:"ghost",onClick:d}):$}</div>`:$}
    <div class=${M.table__scroll} aria-busy=${m?"true":"false"}>
      <table id=${e??$} class=${M.table__grid}>
        ${s?u`<caption class="u-sr-only">${s}</caption>`:$}
        <thead><tr>${b.map(E=>u`<th scope="col" class=${Z(E.align==="end"&&M["table__cell--end"],E.align==="center"&&M["table__cell--center"])}>${E.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const ie={all:["pipeline"],columns:["pipeline","columns"]},ee={getPipeline:e=>h.load(ie.all,()=>I.get("/api/v1/pipeline"),e),getColumns:e=>h.load(ie.columns,()=>I.get("/api/v1/pipeline/columns"),e)},Ht=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","LAST_UPDATED"]);function Yt(e){if(!e||!e.columns)return[];const s=(e==null?void 0:e.column_types)||{};return e.columns.map(t=>{const i=t.toUpperCase(),a=(s[t]||s[i]||"").toUpperCase(),o=Ht.has(i),n=a.includes("INT"),d=o||n?"center":void 0;return{key:t,header:i,align:d,render:r=>u`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${d==="center"?"text-align: center;":""}" title=${r[t]??""}>${r[t]??""}</span>`}})}function Wt(){return{view(){var a,o;const e=h.read(ie.all),s=((a=e.data)==null?void 0:a.items)??[],t=((o=e.data)==null?void 0:o.total)??s.length,i=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${s.length?"1":"0"}-${s.length} of ${t} records</div>
          <div class="u-flex u-gap-2">
            ${y({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${y({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return de({id:"pipeline-table",snapshot:e,columns:n=>Yt(n),getRows:n=>(n==null?void 0:n.items)??[],rowKey:(n,d)=>n.id??d,onRetry:()=>ee.getPipeline(),footer:i})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=(e,s)=>{var i;const t=e._$AN;if(t===void 0)return!1;for(const a of t)(i=a._$AO)==null||i.call(a,s,!1),X(a,s);return!0},le=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},Me=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),Xt(s)}};function Kt(e){this._$AN!==void 0?(le(this),this._$AM=e,Me(this)):this._$AM=e}function Jt(e,s=!1,t=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(s)if(Array.isArray(i))for(let o=t;o<i.length;o++)X(i[o],!1),le(i[o]);else i!=null&&(X(i,!1),le(i));else X(this,e)}const Xt=e=>{e.type==Ce.CHILD&&(e._$AP??(e._$AP=Jt),e._$AQ??(e._$AQ=Kt))};class Qt extends Oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,i){super._$AT(s,t,i),Me(this),this.isConnected=s._$AU}_$AO(s,t=!0){var i,a;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(a=this.disconnected)==null||a.call(this)),t&&(X(this,s),le(this))}setValue(s){if(Ve(this._$Ct))this._$Ct._$AI(s,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=s,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const be=new WeakMap,Zt=Ae(class extends Qt{render(e){return $}update(e,[s]){var i;const t=s!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=s,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),$}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let t=be.get(s);t===void 0&&(t=new WeakMap,be.set(s,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,s;return typeof this.G=="function"?(e=be.get(this.ht??globalThis))==null?void 0:e.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),es="_9lH80h",ts="_91-Xo5",ss="SEYdJQ",as="CRt7-E",rs="gj4qUB",os="hUDIR7",V={modal:es,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:ts,modal__header:ss,modal__title:as,modal__body:rs,modal__footer:os};function z({title:e,size:s="md",body:t,footer:i=$,onClose:a,dismissible:o=!0}){const n=St("modal-title"),d=c=>{c&&!c.open&&requestAnimationFrame(()=>{!c.open&&c.isConnected&&c.showModal()})},r=c=>{c.preventDefault(),o&&a(void 0)},l=c=>{o&&c.target===c.currentTarget&&a(void 0)};return u`<dialog class=${Z(V.modal,V[`modal--${s}`])} aria-labelledby=${n}
      ${Zt(d)} @cancel=${r} @click=${l}>
    <div class=${V.modal__panel}>
      <header class=${V.modal__header}>
        <h2 id=${n} class=${V.modal__title}>${e}</h2>
        ${o?Ot({icon:"x",ariaLabel:"Close dialog",onClick:()=>a(void 0)}):$}
      </header>
      <div class=${V.modal__body}>${t}</div>
      ${i!==$?u`<footer class=${V.modal__footer}>${i}</footer>`:$}
    </div>
  </dialog>`}function te({title:e,message:s,tone:t="danger",confirmLabel:i="Confirm",requireText:a}){return new Promise(o=>{let n="";""+Math.random().toString(36).substring(2);const d=()=>{ne.open(({close:l})=>z({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${s}</p>
            ${a?u`
              <p class="u-text-sm u-text-muted">Type <strong>${a}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${c=>{n=c.target.value,r()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${y({label:"Cancel",variant:"ghost",onClick:()=>{l(),o(!1)}})}
            ${y({label:i,variant:t==="danger"?"delete":"add",disabled:a?n!==a:!1,onClick:()=>{l(),o(!0)}})}
          </div>
        `,onClose:()=>{l(),o(!1)}}))};function r(){ne.refresh()}d()})}function ns(e){const s=e.get(),t=()=>{e.set(l=>({...l,isManageColumnsModalOpen:!1}))},i=l=>{if(l===0)return;const c=[...s.columnsData],p=c[l-1];c[l-1]=c[l],c[l]=p,e.set(f=>({...f,columnsData:c}))},a=l=>{if(l===s.columnsData.length-1)return;const c=[...s.columnsData],p=c[l+1];c[l+1]=c[l],c[l]=p,e.set(f=>({...f,columnsData:c}))},o=async()=>{const l=s.columnsData.map(c=>c.name);try{await I.put("/api/v1/pipeline/columns/order",{column_order:l}),e.set(c=>({...c,isManageColumnsModalOpen:!1})),ee.getPipeline({dedupe:!1})}catch(c){alert("Failed to save column order: "+c.message)}},n=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await I.post("/api/v1/pipeline/columns/prune");const l=await I.get("/api/v1/pipeline/columns");e.set(c=>({...c,columnsData:l})),ee.getPipeline({dedupe:!1})}catch(l){alert("Failed to prune columns: "+l.message)}},d=u`
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
        ${s.columnsData.map((l,c)=>{const p=l.is_system;return u`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${p?"var(--color-accent)":"var(--color-text)"};">${l.name}</span>
                <span class="u-text-xs u-text-muted">${l.type}</span>
                ${l.is_deprecated?u`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:$}
                ${p?u`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:$}
              </div>
              
              <div class="u-flex u-gap-1">
                ${y({label:"▲",variant:"ghost",size:"sm",disabled:p||c>0&&s.columnsData[c-1].is_system,onClick:()=>i(c)})}
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
  `;return z({title:"Manage Columns",size:"md",onClose:t,body:d,footer:r})}function is(){const e=W({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),s=Wt();let t,i;async function a(){if(await te({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await I.post("/api/v1/pipeline/purge"),ee.getPipeline({dedupe:!1})}catch(n){alert("Error purging pipeline: "+n.message)}}return{mount(o){t=h.subscribe(ie.all,()=>o()),i=e.subscribe(()=>o()),ee.getPipeline()},unmount(){t&&t(),i&&i()},view(){return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${y({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${y({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(o=>({...o,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const o=await I.get("/api/v1/pipeline/columns");e.set(n=>({...n,columnsData:o,isLoadingColumns:!1}))}catch(o){alert("Error loading columns: "+o.message),e.set(n=>({...n,isLoadingColumns:!1}))}}})}
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
          
          ${e.get().isManageColumnsModalOpen?ns(e):$}
        </div>
      `}}}function ls(){return{view(){var l,c,p;const{status:e,data:s,error:t}=h.read(ce.all);if(e==="error")return u`<div class="u-text-danger">${t.message}</div>`;if(e==="loading"||!s)return u`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const i=s.pipeline_total_items||0,a=s.active_incidents||0,o=s.registered_services||0,n=((l=s.telemetry)==null?void 0:l.branch)||"main",d=((c=s.telemetry)==null?void 0:c.clean)!==!1,r=(f,m,v,b,g="u-text-accent")=>u`
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
            ${r("Pipeline Items",i,"Items tracked in universal pipeline","package","u-text-accent")}
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
      `}}}function cs(){const e=ls();let s;return{mount(t){s=h.subscribe(ce.all,()=>t()),ht.getOverview()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ye={all:["tools"]},ds={getTools:e=>h.load(ye.all,()=>I.get("/api/v1/tools"),e)},us="cg2FU3",ps="Jh4yC3",Ie={console:us,output:ps};function vs({text:e,status:s="idle"}){return u`
    <div class=${Ie.console}>
      <pre class=${Ie.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function ms(){const e=W({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let s,t;const i=async a=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await I.post(`/api/v1/tools/${encodeURIComponent(a.name)}/run`);e.set(n=>({...n,executionStatus:"success",output:n.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(n=>({...n,executionStatus:"error",output:n.output+`
ERROR: `+o.message}))}};return{mount(a){s=h.subscribe(ye.all,()=>a()),t=e.subscribe(()=>a()),ds.getTools()},unmount(){s&&s(),t&&t()},view(){const{status:a,data:o,error:n,isFetching:d}=h.read(ye.all),r=e.get(),l=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return u`
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
              ${l.length===0&&o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:$}
              
              ${l.map(c=>{var p,f,m;return u`
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
              ${y({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>i(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${vs({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const $e={all:["views"]},Ne={getViews:e=>h.load($e.all,()=>I.get("/api/v1/views"),e)};function gs(){return{view(){var t;const e=h.read($e.all),s=Array.isArray(e.data)?e.data:((t=e.data)==null?void 0:t.items)??[];return!s.length&&e.status!=="loading"?u`
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
        `:de({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>s,onRetry:()=>Ne.getViews()})}}}function fs(){const e=gs();let s;return{mount(t){s=h.subscribe($e.all,()=>t()),Ne.getViews()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${y({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const D={all:["incidents"],list:e=>[...D.all,e?"resolved":"active"],catalog:["incidents","catalog"]},F={getIncidents:(e,s)=>h.load(D.list(e),()=>I.get("/api/v1/incidents",{query:{resolved:e?1:0}}),s),resolveIncident:(e,s)=>I.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:s||""}),createIncident:e=>I.post("/api/v1/incidents",e),getCatalog:e=>h.load(D.catalog,()=>I.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>I.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>I.delete(`/api/v1/incidents/catalog/errors/${e}`)},bs="_0BpBt1",ae={badge:bs,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2"};function oe({label:e,tone:s="neutral",mono:t=!1,uppercase:i=!1}){const a=Z(ae.badge,ae[`badge--${s}`],t&&ae["badge--mono"],i&&ae["badge--uppercase"]);return u`<span class=${a}>${e}</span>`}function Te({resolved:e}){const s=xt(h,{mutationFn:a=>F.resolveIncident(a.id,a.note),invalidates:[D.all]});async function t(a){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await te({title:"Resolve Incident",message:`Are you sure you want to mark incident #${a} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await s({id:a,note:o})}catch(d){alert("Failed to resolve incident: "+d.message)}}const i=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:a=>{const o=a.SEVERITY==="CRITICAL"?"danger":a.SEVERITY==="WARNING"?"warning":"info";return oe({label:a.SEVERITY||"INFO",tone:o})}},{key:"COMPONENT",header:"Component",render:a=>u`<strong class="u-text-sm">${a.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:a=>u`<span class="u-font-mono u-text-xs">${a.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:a=>u`<span class="u-text-sm">${a.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:a=>a.REMEDY?u`<span class="u-text-xs u-text-muted">${a.REMEDY}</span>`:$},{key:"CREATED_AT",header:"Created At",mono:!0,render:a=>u`<span class="u-text-xs u-text-muted">${a.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:a=>a.RESOLVED?u`<span class="u-text-success u-text-xs">Resolved${a.RESOLUTION_NOTE?`: ${a.RESOLUTION_NOTE}`:""}</span>`:y({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>t(a.ID)})}];return{view(){const a=h.read(D.list(e));return de({id:`incidents-table-${e?"resolved":"active"}`,columns:i,snapshot:a,getRows:o=>(o==null?void 0:o.items)??(Array.isArray(o)?o:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function xs({onEditError:e}={}){const s=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const i=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${i}) 20%, transparent); color: var(--color-${i}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>y({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(t)})}];return{view(){const t=h.read(D.catalog);return de({id:"error-catalog-table",columns:s,snapshot:t,getRows:i=>Array.isArray(i)?i:(i==null?void 0:i.value)||(i==null?void 0:i.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>F.getCatalog()})}}}function ys({onClose:e,onIncidentCreated:s}){let t=!1;async function i(n){n.preventDefault();const d=n.target,r=d.incident_code.value.trim().toUpperCase(),l=d.severity.value,c=d.component.value.trim(),p=d.details.value.trim();if(!r||!c||!p){alert("Please fill in Code, Component, and Details.");return}t=!0;try{await F.createIncident({incident_code:r,severity:l,component:c,details:p}),h.invalidate(D.all),s==null||s(),e()}catch(f){alert("Failed to report incident: "+f.message)}finally{t=!1}}const a=u`
    <form id="report-incident-form" @submit=${i}>
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
  `;return z({title:"Report System Incident",size:"md",onClose:e,body:a,footer:o})}function hs({onClose:e,onErrorCreated:s,initialData:t=null}){let i=!1;const a=!!(t&&t.ERROR_CODE);async function o(r){var g;r.preventDefault();const l=r.target,c=l.error_code.value.trim().toUpperCase(),p=l.category.value.trim().toUpperCase(),f=l.severity.value,m=l.description.value.trim(),v=l.trigger_condition.value.trim(),b=l.remedy.value.trim();if(!c||!p||!m){alert("Please fill in Error Code, Category, and Description.");return}if(!a){const x=h.read(D.catalog),w=(Array.isArray(x==null?void 0:x.data)?x.data:((g=x==null?void 0:x.data)==null?void 0:g.items)??[]).find(E=>E.ERROR_CODE===c);if(w&&!await te({title:"Error Template Already Exists",message:`An error template with code '${c}' is already registered under category '${w.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}i=!0;try{await F.upsertError({error_code:c,category:p,severity:f,description:m,trigger_condition:v,remedy:b}),h.invalidate(D.catalog),s==null||s(),e()}catch(x){alert("Failed to save error template: "+x.message)}finally{i=!1}}const n=u`
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
      ${y({label:a?"Update Error":"Register Error",variant:"save",type:"submit",loading:i,onClick:()=>{const r=document.getElementById("add-error-form");r&&r.requestSubmit()}})}
    </div>
  `;return z({title:a?`Edit Error: ${t.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:n,footer:d})}function $s(){const e=W({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),s=Te({resolved:!1}),t=Te({resolved:!0}),i=xs({onEditError:r=>e.set(l=>({...l,isAddErrorModalOpen:!0,editingError:r}))});let a,o,n,d;return{mount(r){a=h.subscribe(D.list(!1),()=>r()),o=h.subscribe(D.list(!0),()=>r()),n=h.subscribe(D.catalog,()=>r()),d=e.subscribe(()=>r()),F.getIncidents(!1),F.getIncidents(!0),F.getCatalog()},unmount(){a&&a(),o&&o(),n&&n(),d&&d()},view(){const{activeTab:r,isReportModalOpen:l,isAddErrorModalOpen:c,editingError:p}=e.get(),f=(m,v,b)=>{const g=r===m;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${g?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${g?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${g?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(E=>({...E,activeTab:m}))}
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
          ${r==="catalog"?i.view():$}

          <!-- Modals -->
          ${l?ys({onClose:()=>e.set(m=>({...m,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):$}

          ${c?hs({onClose:()=>e.set(m=>({...m,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:p}):$}
        </div>
      `}}}const he={all:["gitops"]},ws={getGitOps:e=>h.load(he.all,()=>I.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function _s(){let e;return{mount(s){e=h.subscribe(he.all,()=>s()),ws.getGitOps()},unmount(){e&&e()},view(){const s=h.read(he.all),{status:t,data:i,error:a,isFetching:o}=s;if(t==="loading"&&!i)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(t==="error"&&!i)return u`<p class="u-text-danger">Error: ${a==null?void 0:a.message}</p>`;const n=(i==null?void 0:i.telemetry)||{};return u`
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
      `}}}const S={all:["settings"]},Es={getSettings:e=>h.load(S.all,()=>I.get("/api/v1/settings"),e),saveConfig:e=>I.post("/api/v1/settings/config",e),triggerSweep:()=>I.post("/api/v1/settings/sweep"),triggerBackup:()=>I.post("/api/v1/settings/backup")};function Ss(e,s={},t=300){const i=Object.keys(s),a=()=>{e.set(n=>({...n,isServiceModalOpen:!0}))},o=(n,d,r)=>{var p;const l=((p=d.field_mappings)==null?void 0:p.length)||0,c=Object.keys(d.enrichment_endpoints||{}).join(", ");return u`
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
          Base URL: ${d.base_url||"N/A"} | API Key ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${l}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${c||"none"}</span>
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
        ${i.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:$}
        ${i.map((n,d)=>o(n,s[n],d===i.length-1))}
      </div>
    </div>
  `}function Is(e){var c;const s=e.get(),t=h.read(S.all),i=((c=t==null?void 0:t.data)==null?void 0:c.services)||{},a=s.editingServiceId?i[s.editingServiceId]:null,o=()=>{e.set(p=>({...p,isServiceModalOpen:!1,editingServiceId:null}))},n=()=>{try{const p=document.getElementById("srv-id").value.trim();if(!p){alert("Service ID is required");return}const f=document.getElementById("srv-enrich").value.trim(),m={};f&&f.split(`
`).forEach(g=>{const x=g.split(":");x.length>=2&&(m[x[0].trim()]=x.slice(1).join(":").trim())});const v={name:document.getElementById("srv-name").value.trim()||p,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:m,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(a==null?void 0:a.field_mappings)||[]},b={...i,[p]:v};s.editingServiceId&&s.editingServiceId!==p&&delete b[s.editingServiceId],h.setData(S.all,()=>({...t.data,services:b})),e.set(g=>({...g,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(p){alert("Error saving service: "+p.stack)}},d=p=>{alert(`Applied preset: ${p}`)},r=u`
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
  `,l=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Cancel",variant:"secondary",onClick:o})}
      ${y({label:s.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:n})}
    </div>
  `;return z({title:"Register Service",size:"lg",onClose:o,body:r,footer:l})}function Ts({checked:e=!1,onChange:s,label:t=""}){return u`
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
      <input type="checkbox" .checked=${e} @change=${i=>s(i.target.checked)}>
      <span class="slider"></span>
      ${t?u`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${t}</span>`:""}
    </label>
  `}function ks(e,s=[]){const t=()=>{e.set(o=>({...o,isStageModalOpen:!0,editingStageId:null}))},i=(o,n)=>{const d=h.read(S.all);if(!d||!d.data)return;const r=[...d.data.stages],l=o+n;l<0||l>=r.length||([r[o],r[l]]=[r[l],r[o]],h.setData(S.all,()=>({...d.data,stages:r})),e.set(c=>({...c,isDirty:!0})))},a=o=>o.start_condition?o.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
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
                    ${Ts({checked:o.enabled,label:o.enabled?"ACTIVE":"INACTIVE",onChange:r=>{const l={...h.read(S.all).data},c=l.stages.find(p=>p.id===o.id);c&&(c.enabled=r,r&&!c.start_condition&&!c.last_activated_at&&(c.last_activated_at=new Date().toISOString()),h.setData(S.all,()=>l),e.set(p=>({...p,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${y({label:"↑",variant:"ghost",size:"sm",disabled:n===0,onClick:()=>i(n,-1)})}
                      ${y({label:"↓",variant:"ghost",size:"sm",disabled:n===s.length-1,onClick:()=>i(n,1)})}
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
  `}function Cs(e){if(!e)return"";try{const s=new Date(e);if(isNaN(s.getTime()))return"";const t=i=>String(i).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`}catch{return""}}function As(e){var m,v,b;const s=e.get(),t=h.read(S.all),i=((m=t==null?void 0:t.data)==null?void 0:m.stages)||[],a=((v=t==null?void 0:t.data)==null?void 0:v.services)||((b=t==null?void 0:t.data)==null?void 0:b.apps)||{},o=Object.keys(a),n=s.editingStageId?i.find(g=>g.id===s.editingStageId):null,d=s.stageIsSink??(n?!n.complete_condition:!1),r=s.stageIsRoot??(n?!n.start_condition:!1),l=()=>{e.set(g=>({...g,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},c=()=>{var g,x,_;try{const w=document.getElementById("stage-id").value.trim();if(!w){alert("Stage ID is required");return}let E=null;if(r){const k=(g=document.getElementById("stage-last-activated"))==null?void 0:g.value;if(k)try{E=new Date(k).toISOString()}catch{E=(n==null?void 0:n.last_activated_at)||null}}const C={id:w,name:document.getElementById("stage-name").value.trim()||w,description:document.getElementById("stage-desc").value.trim(),service_ids:Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(k=>k.value),start_condition:r?null:((x=document.getElementById("stage-start"))==null?void 0:x.value.trim())||null,complete_condition:d?null:((_=document.getElementById("stage-complete"))==null?void 0:_.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:n?n.order:i.length+1,last_activated_at:E};let R=[...i];s.editingStageId?R=R.map(k=>k.id===s.editingStageId?C:k):R.push(C),h.setData(S.all,()=>({...t.data,stages:R})),e.set(k=>({...k,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(w){alert("Error in Save Stage: "+w.stack)}},p=u`
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
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${Cs(n?n.last_activated_at:r?new Date().toISOString():"")}>
          ${y({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const g=document.getElementById("stage-last-activated");if(g){const x=new Date,_=w=>String(w).padStart(2,"0");g.value=`${x.getFullYear()}-${_(x.getMonth()+1)}-${_(x.getDate())}T${_(x.getHours())}:${_(x.getMinutes())}`}}})}
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
      ${y({label:"Cancel",variant:"secondary",onClick:l})}
      ${y({label:s.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:c})}
    </div>
  `;return z({title:"Configure DAG Stage",size:"lg",onClose:l,body:p,footer:f})}function Os(e,s={}){const t=Object.keys(s),i=e.get().selectedMappingService||t[0]||"",a=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},o=()=>{e.set(l=>({...l,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},n=(l,c)=>{e.set(p=>({...p,isMappingModalOpen:!0,editingMapping:{...l},editingMappingIndex:c}))},d=l=>{if(confirm("Are you sure you want to delete this mapping?")){const p={...h.read(S.all).data};p.services[i].field_mappings.splice(l,1),h.setData(S.all,()=>p),e.set(f=>({...f,isDirty:!0}))}},r=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(c=>({...c,selectedMappingService:l.target.value}))}
        >
          ${t.map(l=>u`<option value="${l}" ?selected=${l===i}>${s[l].name}</option>`)}
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
        
        ${(()=>{const l=s[i];return!l||!l.field_mappings||l.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map((c,p)=>u`
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
  `}function Rs(e){const s=e.get(),t=s.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},i=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},a=()=>{const r={...h.read(S.all).data},l=Object.keys(r.services||{}),c=s.selectedMappingService||l[0];c&&(r.services[c].field_mappings||(r.services[c].field_mappings=[]),s.editingMappingIndex>=0?r.services[c].field_mappings[s.editingMappingIndex]=t:r.services[c].field_mappings.push(t),h.setData(S.all,()=>r),e.set(p=>({...p,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},o=u`
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
          ${y({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let r;try{r=JSON.parse(d)}catch{r=d}try{const l={expression:t.transformer,sample_value:r};typeof r=="object"&&r!==null&&!Array.isArray(r)&&(l.context_dict=r);const c=await I.post("/api/v1/settings/test-transformer",l);c.valid?alert("Result: "+JSON.stringify(c.result)):alert("Error: "+c.message)}catch(l){alert("Error: "+l.message)}}})}
        </div>
      </div>
    </div>
  `,n=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Cancel",variant:"secondary",onClick:i})}
      ${y({label:"Save Mapping",variant:"save",onClick:a})}
    </div>
  `;return z({title:"Configure Field Mapping & Transformer",size:"lg",onClose:i,body:o,footer:n})}function Ms(e){const s=()=>{e.set(a=>({...a,isSampleApiModalOpen:!1}))},t=u`
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
  `,i=u`
    <div class="u-flex u-gap-2">
      ${y({label:"Close",variant:"secondary",onClick:s})}
    </div>
  `;return z({title:"Sample Service API Schema",size:"lg",onClose:s,body:t,footer:i})}function Ns(e,s={}){const t=Array.isArray(s.notification_triggers)?s.notification_triggers:Array.isArray(s.triggers)?s.triggers:[],i=()=>{e.set(r=>({...r,isNotificationModalOpen:!0}))},a=async r=>{try{const l=await I.post("/api/v1/settings/test-notification",{trigger_id:r==null?void 0:r.id,channel:(r==null?void 0:r.channel)||"ntfy",target_url:(r==null?void 0:r.target_url)||"http://host.docker.internal:8090",topic:(r==null?void 0:r.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(r==null?void 0:r.id)||"manual"}`});if(l&&l.success)alert(`✓ Notification successfully dispatched to ${(r==null?void 0:r.channel)||"ntfy"}`);else{const c=(l==null?void 0:l.error)||(l!=null&&l.status_code?`HTTP ${l.status_code}: ${l.response||"Failed"}`:(l==null?void 0:l.response)||"Unknown response");alert(`Failed to send alert: ${c}`)}}catch(l){alert(`Error sending test notification: ${l.message}`)}},o=async r=>{if(await te({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${r}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const c=h.read(S.all);if(!c||!c.data)return;const f=(Array.isArray(c.data.notification_triggers)?c.data.notification_triggers:[]).filter(m=>m.id!==r);h.setData(S.all,m=>({...m,notification_triggers:f})),e.set(m=>({...m,isDirty:!0}))}},n=(r,l)=>{const c=h.read(S.all);if(!c||!c.data)return;const f=(Array.isArray(c.data.notification_triggers)?c.data.notification_triggers:[]).map(m=>m.id===r?{...m,enabled:!l}:m);h.setData(S.all,m=>({...m,notification_triggers:f})),e.set(m=>({...m,isDirty:!0}))},d=r=>r.includes("OPEN")||r.includes("FAIL")?"warning":r.includes("RESOLVED")||r.includes("SUCCESS")||r.includes("COMPLETE")?"success":"info";return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${y({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>a({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${y({label:"+ Add Trigger",variant:"save",size:"sm",onClick:i})}
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
  `}function Ds(e){const s=()=>{e.set(o=>({...o,isNotificationModalOpen:!1}))},t=o=>{var x,_,w,E,C,R,k,B;o&&o.preventDefault();const n=(x=document.getElementById("input-trig-id"))==null?void 0:x.value.trim();if(!n){alert("Trigger ID is required.");return}const d=(_=document.getElementById("input-trig-event"))==null?void 0:_.value,r=(w=document.getElementById("input-trig-channel"))==null?void 0:w.value,l=(E=document.getElementById("input-trig-url"))==null?void 0:E.value.trim();if(!l){alert("Target URL is required.");return}const c=((C=document.getElementById("input-trig-topic"))==null?void 0:C.value.trim())||"",p=((R=document.getElementById("input-trig-priority"))==null?void 0:R.value.trim())||"default",f=((k=document.getElementById("input-trig-tags"))==null?void 0:k.value.trim())||"server",m=((B=document.getElementById("input-trig-template"))==null?void 0:B.value.trim())||"{event}: {details}",v=h.read(S.all);if(!v||!v.data)return;const g=(Array.isArray(v.data.notification_triggers)?[...v.data.notification_triggers]:[]).filter(T=>T.id!==n);g.push({id:n,event:d,enabled:!0,channel:r,target_url:l,topic:c,priority:p,tags:f,message_template:m}),h.setData(S.all,T=>({...T,notification_triggers:g})),e.set(T=>({...T,isDirty:!0,isNotificationModalOpen:!1}))},i=u`
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
  `;return z({title:"Configure Notification Trigger",size:"md",onClose:s,body:i,footer:a})}function Ps(e,s={}){const t=s.retention_days||30,i=s.global_poll_interval_seconds||300;return u`
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
              <input type="number" class="form-input" min="10" max="86400" .value=${i}
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
  `}function Ls(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const s=new Set;return{get:()=>e,set:t=>{e=t(e),s.forEach(i=>i())},subscribe:t=>(s.add(t),()=>s.delete(t))}}function De(){const e=Ls(),s=async()=>{var g,x;const o=e.get(),{selectedService:n,selectedRecordId:d,testEndpoint:r,testName:l}=o;if(!n||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!n||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const c=h.read(S.all),f=(((g=c==null?void 0:c.data)==null?void 0:g.services)||{})[n],m={...(f==null?void 0:f.enrichment_endpoints)||{}},v=l.trim()||"sandbox_test",b=!!r.trim();b&&(m[v]=r.trim()),e.set(_=>({..._,isLoading:!0,error:null,logs:[],testResponse:null}));try{const _=await I.post("/api/v1/pipeline/sandbox/enrichment",{service_id:n,record_id:parseInt(d,10),enrichment_endpoints:m}),w=b?((x=_.context_data)==null?void 0:x[v])||null:_.context_data;e.set(E=>({...E,isLoading:!1,logs:_.logs||[],testResponse:w}))}catch(_){e.set(w=>({...w,isLoading:!1,error:_.message}))}},t=async()=>{var v;const o=e.get();if(!o.selectedService)return;const n=h.read(S.all),d=((v=n==null?void 0:n.data)==null?void 0:v.services)||{},r=d[o.selectedService],l={...(r==null?void 0:r.enrichment_endpoints)||{}},c=o.testName.trim(),p=o.testEndpoint.trim();if(!c||!p){alert("Please provide both a namespace name and an endpoint to save.");return}l[c]=p;const f={...d,[o.selectedService]:{...r,enrichment_endpoints:l}},m={...n.data,services:f};try{await I.post("/api/v1/settings/config",m),h.setData(S.all,()=>m),e.set(b=>({...b,saveSuccess:!0})),setTimeout(()=>{e.set(b=>({...b,saveSuccess:!1}))},3e3)}catch(b){alert("Failed to save to service: "+b.message)}},i=()=>{var f;const o=e.get(),n=h.read(S.all),d=((f=n==null?void 0:n.data)==null?void 0:f.services)||{},r=Object.keys(d),l=d[o.selectedService];!o.selectedService&&r.length>0&&setTimeout(()=>e.set(m=>({...m,selectedService:r[0]})),0);const c=(m,v)=>{if(!(!v||!m))try{return v.split(".").reduce((b,g)=>b&&b[g]!==void 0?b[g]:void 0,m)}catch{return}},p=o.testVariable.trim()?c(o.testResponse,o.testVariable.trim()):void 0;return u`
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
              ${Object.keys((l==null?void 0:l.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:$}
              
              ${Object.entries((l==null?void 0:l.enrichment_endpoints)||{}).map(([m,v])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(b=>({...b,testName:m,testEndpoint:v}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${m}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${v}>${v}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let a;return{view:i,mount:o=>{a=e.subscribe(o);const n=h.read(S.all);n!=null&&n.data||I.get("/api/v1/settings").then(d=>{h.setData(S.all,()=>d),e.set(r=>({...r}))}).catch(console.error)},unmount:()=>{a&&a()}}}function zs(e){const s=De(),t=W({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let i,a;const o=n=>{t.get().isDirty&&(n.preventDefault(),n.returnValue="")};return{mount(n){i=t.subscribe(()=>n()),a=h.subscribe(S.all,()=>n()),Es.getSettings(),s.mount(n),window.addEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(async d=>t.get().isDirty?await te({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){i&&i(),a&&a(),s.unmount(),window.removeEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(null)},view(){const n=t.get(),{activeTab:d,saving:r,isServiceModalOpen:l,isStageModalOpen:c,isMappingModalOpen:p,isSampleApiModalOpen:f,isNotificationModalOpen:m}=n,v=h.read(S.all),{data:b,status:g,error:x}=v;if(g==="loading"&&!b)return u`<p class="u-text-muted">Loading settings...</p>`;if(g==="error"&&!b)return u`<p class="u-text-danger">Error: ${x==null?void 0:x.message}</p>`;const _={retention_days:(b==null?void 0:b.retention_days)||30,global_poll_interval_seconds:(b==null?void 0:b.global_poll_interval_seconds)||300},w=(b==null?void 0:b.services)||{},E=(b==null?void 0:b.stages)||[],C=_.global_poll_interval_seconds,R=(k,B,T)=>{const P=d===k;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${P?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${P?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${P?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(pe=>({...pe,activeTab:k}))}
          >
            ${G({name:B,size:16})}
            <span>${T}</span>
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
              ${y({label:"Save All Settings",variant:"save",size:"sm",loading:r,disabled:!n.isDirty,onClick:async()=>{const k=h.read(S.all);if(!k||!k.data)return;const B=JSON.parse(JSON.stringify(k.data));t.set(T=>({...T,saving:!0}));try{const T=await I.post("/api/v1/settings",k.data);h.setData(S.all,()=>T),t.set(P=>({...P,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(T){h.setData(S.all,()=>B),t.set(P=>({...P,isDirty:!1,saving:!1})),alert("Failed to save settings: "+T.message+`
Rolled back to previous verified configuration.`)}}})}
              ${n.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:$}
            </div>
            </div>
          </div>
          
          ${d==="services"?Ss(t,w,C):$}
          ${d==="sandbox"?s.view():$}
          ${d==="mappings"?Os(t,w):$}
          ${d==="stages"?ks(t,E):$}
          ${d==="notifications"?Ns(t,b):$}
          ${d==="engine"?Ps(t,_):$}
          
          <!-- Modals -->
          ${l?Is(t):$}
          ${c?As(t):$}
          ${p?Rs(t):$}
          ${f?Ms(t):$}
          ${m?Ds(t):$}
        </div>
      `}}}const Q=je(ke),Bs={overview:cs(),pipeline:is(),tools:ms(),views:fs(),incidents:$s(),sandbox:De(),gitops:_s(),settings:zs(Q)};let L=null;function ue(){var t,i,a,o;const{current:e}=Q.store.get();L&&L.id!==e.id&&((i=(t=L.instance).unmount)==null||i.call(t),L=null),!L&&e&&(L={id:e.id,instance:Bs[e.id]},(o=(a=L.instance).mount)==null||o.call(a,ue));const s=L?L.instance.view():"";ze(Bt({routerStore:Q.store.get(),routes:ke,router:Q,pageContent:s}),document.getElementById("app"))}Q.store.subscribe(ue);ne.store.subscribe(ue);ue();
