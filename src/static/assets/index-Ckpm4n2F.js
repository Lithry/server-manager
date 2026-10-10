import{j as Ne,E as Pe,w as A,b as u,A as y,D as De}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function Le(){const e=new Map;return{on(t,s){return e.has(t)||e.set(t,new Set),e.get(t).add(s),()=>e.get(t).delete(s)},emit(t,s){if(e.has(t))for(const n of e.get(t))n(s)}}}function K(e){let t=e;const s=new Set;return{get:()=>t,set:n=>{t=typeof n=="function"?n(t):n;for(const a of s)a(t)},subscribe:n=>(s.add(n),()=>s.delete(n))}}function ze(e){const t=K({current:null,params:{}});let s=null;async function n(a){const r=window.location.hash.slice(1)||"/";if(s&&t.get().current&&t.get().current.path!==r&&!await s(r)){window.removeEventListener("hashchange",n),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",n),0);return}const o=e.find(d=>d.path===r)||e[0];t.set({current:o,params:{}})}return window.addEventListener("hashchange",n),n(),{store:t,navigate(a){window.location.hash=a},setBeforeNavigateHook(a){s=a}}}const Ee=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae={CHILD:2},Ie=e=>(...t)=>({_$litDirective$:e,values:t});let Te=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:je}=Ne,ye=e=>e,Be=e=>e.strings===void 0,$e=()=>document.createComment(""),W=(e,t,s)=>{var r;const n=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(s===void 0){const o=n.insertBefore($e(),a),d=n.insertBefore($e(),a);s=new je(o,d,e,e.options)}else{const o=s._$AB.nextSibling,d=s._$AM,i=d!==e;if(i){let l;(r=s._$AQ)==null||r.call(s,e),s._$AM=e,s._$AP!==void 0&&(l=e._$AU)!==d._$AU&&s._$AP(l)}if(o!==a||i){let l=s._$AA;for(;l!==o;){const c=ye(l).nextSibling;ye(n).insertBefore(l,a),l=c}}}return s},z=(e,t,s=e)=>(e._$AI(t,s),e),Ve={},Ue=(e,t=Ve)=>e._$AH=t,Fe=e=>e._$AH,de=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,s)=>{const n=new Map;for(let a=t;a<=s;a++)n.set(e[a],a);return n},Ce=Ie(class extends Te{constructor(e){if(super(e),e.type!==Ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const a=[],r=[];let o=0;for(const d of e)a[o]=n?n(d,o):o,r[o]=s(d,o),o++;return{values:r,keys:a}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const a=Fe(e),{values:r,keys:o}=this.dt(t,s,n);if(!Array.isArray(a))return this.ut=o,r;const d=this.ut??(this.ut=[]),i=[];let l,c,v=0,f=a.length-1,b=0,p=r.length-1;for(;v<=f&&b<=p;)if(a[v]===null)v++;else if(a[f]===null)f--;else if(d[v]===o[b])i[b]=z(a[v],r[b]),v++,b++;else if(d[f]===o[p])i[p]=z(a[f],r[p]),f--,p--;else if(d[v]===o[p])i[p]=z(a[v],r[p]),W(e,i[p+1],a[v]),v++,p--;else if(d[f]===o[b])i[b]=z(a[f],r[b]),W(e,a[v],a[f]),f--,b++;else if(l===void 0&&(l=we(o,b,p),c=we(d,v,f)),l.has(d[v]))if(l.has(d[f])){const m=c.get(o[b]),g=m!==void 0?a[m]:null;if(g===null){const x=W(e,a[v]);z(x,r[b]),i[b]=x}else i[b]=z(g,r[b]),W(e,a[v],g),a[m]=null;b++}else de(a[f]),f--;else de(a[v]),v++;for(;b<=p;){const m=W(e,i[p+1]);z(m,r[b]),i[b++]=m}for(;v<=f;){const m=a[v++];m!==null&&de(m)}return this.ut=o,Ue(e,i),Pe}}),Ge={x:A`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:A`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:A`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:A`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:A`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:A`<polyline points="20 6 9 17 4 12"></polyline>`,tool:A`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:A`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":A`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:A`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:A`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:A`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:A`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:A`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:A`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:A`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:A`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:A`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":A`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:A`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function B({name:e,size:t=16,label:s}){const n=Ge[e];return n?u`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${t} height=${t} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    aria-label=${s||e}
    role=${s?"img":"presentation"}
    aria-hidden=${s?"false":"true"}
  >
    ${n}
  </svg>`:u`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const He="-FyYHK",qe="hQIh8E",Ke="vjCp9N",We="aWcKCO",Ye="XdvXnE",Je="Yr8TTV",Qe="yefrc2",Xe="UnbUQg",Ze="z6Wtj-",et="WEwa7u",tt="rr8RRm",st="_8nqxsa",at="EMU1IN",ot="erzuUm",rt="IX2naX",nt="UuwGh4",it="HRKVqM",T={sidebar:He,brand:qe,logo:Ke,title:We,nav:Ye,navItem:Je,sidebarFooter:Qe,toggleBtn:Xe,toggleText:Ze,footerDetails:et,statusWrapper:tt,statusDot:st,branchBox:at,expanded:ot,brandText:rt,statusText:nt,commitText:it},M=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),lt=new Set([502,503,504]);function ct(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(s=>`${(s.loc??[]).slice(1).join(".")||"body"}: ${s.msg}`).join("; "):null}class H extends Error{constructor(t,{code:s,status:n=0,detail:a=null,cause:r}={}){super(t,{cause:r}),this.name="ApiError",this.code=s,this.status=n,this.detail=a}get retryable(){return this.code===M.NETWORK||this.code===M.TIMEOUT||this.code===M.HTTP&&lt.has(this.status)}get userMessage(){switch(this.code){case M.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case M.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case M.ABORTED:return"";case M.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const dt=new Set(["GET","HEAD"]),ut=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function pt(e={}){const t={...ut,...e},s=e.fetchImpl??((...p)=>globalThis.fetch(...p)),n={request:[],response:[],error:[]},a=new Map,r=()=>new H("Request aborted",{code:M.ABORTED}),o=(p,m)=>{const g=new URLSearchParams;for(const[S,w]of Object.entries(m??{}))w!=null&&w!==""&&g.set(S,String(w));const x=g.toString();return`${t.baseUrl}${p}${x?"?"+x:""}`};async function d(p){if(p.status===204)return null;const m=p.headers.get("content-type")??"";try{return m.includes("application/json")?await p.json():await p.text()}catch(g){throw new H("Malformed response body",{code:M.PARSE,status:p.status,cause:g})}}async function i(p,m,g){const x=AbortSignal.timeout(g),S=m?AbortSignal.any([m,x]):x;let w;try{w=await s(p.url,{method:p.method,headers:p.headers,body:p.body,signal:S})}catch(E){throw x.aborted?new H(`Request timed out after ${g} ms`,{code:M.TIMEOUT,cause:E}):m!=null&&m.aborted?r():new H("Network request failed",{code:M.NETWORK,cause:E})}const _=await d(w);if(!w.ok)throw new H(ct(_)??`HTTP ${w.status}`,{code:M.HTTP,status:w.status,detail:_});return{status:w.status,data:_,headers:w.headers}}const l=(p,m)=>new Promise((g,x)=>{const S=setTimeout(g,p);m==null||m.addEventListener("abort",()=>{clearTimeout(S),x(r())},{once:!0})}),c=p=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**p);async function v(p,{signal:m,timeoutMs:g,retries:x}){for(let S=0;;S+=1)try{return await i(p,m,g)}catch(w){if(!(w instanceof H)||!w.retryable||S>=x)throw w;await l(c(S),m)}}function f(p,m,g){let x=a.get(p);if(!x){const S=new AbortController,w={controller:S,refs:0,promise:null};w.promise=m(S.signal).finally(()=>{a.get(p)===w&&a.delete(p)}),w.promise.catch(()=>{}),a.set(p,w),x=w}return x.refs+=1,new Promise((S,w)=>{const _=()=>{x.refs-=1,x.refs===0&&(a.get(p)===x&&a.delete(p),x.controller.abort()),w(r())};if(g!=null&&g.aborted){_();return}g==null||g.addEventListener("abort",_,{once:!0}),x.promise.then(E=>{g==null||g.removeEventListener("abort",_),S(E)},E=>{g==null||g.removeEventListener("abort",_),w(E)})})}async function b(p,m,g={}){const{query:x,body:S,headers:w={},signal:_,meta:E={}}=g,D=g.timeoutMs??t.timeoutMs,U=g.retries??(dt.has(p)?t.retries:0),R=g.dedupe??p==="GET";let C={method:p,url:o(m,x),headers:{Accept:"application/json",...w},body:void 0,meta:E};S!==void 0&&(C.body=JSON.stringify(S),C.headers["Content-Type"]="application/json");for(const ee of n.request)C=await ee(C);const F=async ee=>{try{let G=await v(C,{signal:ee,timeoutMs:D,retries:U});for(const L of n.response)G=await L(G,C);return G.data}catch(G){let L=G;for(const ce of n.error)L=await ce(L,C)??L;throw L}};return R?f(`${C.method} ${C.url}`,F,_):F(_)}return{get:(p,m)=>b("GET",p,m),post:(p,m,g)=>b("POST",p,{...g,body:m}),put:(p,m,g)=>b("PUT",p,{...g,body:m}),delete:(p,m)=>b("DELETE",p,m),use({request:p,response:m,error:g}){p&&n.request.push(p),m&&n.response.push(m),g&&n.error.push(g)}}}const ue=()=>{};function vt(e,t){return t?new Promise((s,n)=>{const a=()=>n(new DOMException("Aborted","AbortError"));if(t.aborted){a();return}t.addEventListener("abort",a,{once:!0}),e.then(s,n).finally(()=>t.removeEventListener("abort",a))}):e}const ge=e=>JSON.stringify(e,(t,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([n],[a])=>n<a?-1:1)):s),mt=(e,t)=>t.every((s,n)=>n<e.length&&ge(s)===ge(e[n]));function gt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const s=new Map,n=i=>Object.freeze({status:i.status,data:i.data,error:i.error,isFetching:!!i.promise,updatedAt:i.updatedAt});function a(i){const l=ge(i);let c=s.get(l);return c||(c={keyParts:i,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},c.snapshot=n(c),s.set(l,c)),c}function r(i){i.snapshot=n(i);for(const l of[...i.listeners])l(i.snapshot)}function o(){for(const[i,l]of s)l.listeners.size===0&&!l.promise&&l.updatedAt&&e()-l.updatedAt>t&&s.delete(i)}function d(i){return i.promise||(i.invalidated=!1,i.status==="idle"&&(i.status="loading"),i.promise=Promise.resolve().then(()=>i.fetcher()).then(l=>(Object.assign(i,{data:l,error:null,status:"success",updatedAt:e()}),l),l=>{throw Object.assign(i,{error:l,status:"error"}),l}).finally(()=>{i.promise=null,r(i),i.invalidated&&i.listeners.size>0&&d(i).catch(ue)}),i.promise.catch(ue),r(i)),i.promise}return{load(i,l,{staleMs:c=0,signal:v}={}){o();const f=a(i);f.fetcher=l;const b=f.status==="success"&&!f.invalidated&&e()-f.updatedAt<c;return vt(b?Promise.resolve(f.data):d(f),v)},read:i=>a(i).snapshot,subscribe(i,l){const c=a(i);return c.listeners.add(l),l(c.snapshot),()=>{c.listeners.delete(l)}},invalidate(i){for(const l of s.values())mt(l.keyParts,i)&&(l.invalidated=!0,r(l),l.listeners.size>0&&l.fetcher&&d(l).catch(ue))},setData(i,l){const c=a(i),v={data:c.data,status:c.status,updatedAt:c.updatedAt},f=l(c.data);return Object.assign(c,{data:f,status:"success",updatedAt:e()}),r(c),function(){c.data===f&&(Object.assign(c,v),r(c))}}}}function ft(e,{mutationFn:t,optimistic:s,invalidates:n=[]}){return async function(r){const o=((s==null?void 0:s(r))??[]).map(({key:d,update:i})=>e.setData(d,i));try{const d=await t(r);return(typeof n=="function"?n(r,d):n).forEach(l=>e.invalidate(l)),d}catch(d){throw o.reverse().forEach(i=>i()),d}}}const q={},bt=Le(),k=pt({baseUrl:(q==null?void 0:q.VITE_API_BASE)??"",timeoutMs:Number((q==null?void 0:q.VITE_HTTP_TIMEOUT_MS)??1e4)}),$=gt();k.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const ne={all:["overview"]},xt={getOverview:e=>$.load(ne.all,()=>k.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let te=!1;function ht(){te=!te;const e=document.getElementById("app-sidebar");e&&(te?e.classList.add(T.expanded):e.classList.remove(T.expanded))}function yt({routes:e,activeId:t,onNavigate:s}){var o,d,i,l;const n=$.read(ne.all),a=((d=(o=n==null?void 0:n.data)==null?void 0:o.telemetry)==null?void 0:d.short_commit)||"6b319ac",r=((l=(i=n==null?void 0:n.data)==null?void 0:i.telemetry)==null?void 0:l.branch)||"main";return u`<aside id="app-sidebar" class="${T.sidebar} ${te?T.expanded:""}">
    <div class=${T.brand}>
      <div class=${T.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${T.brandText}>
        <div class=${T.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">v0.1.6</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${T.nav}>
      ${Ce(e,c=>c.id,c=>u`
        <button class=${T.navItem} aria-current=${c.id===t?"page":"false"}
          @click=${()=>s(c.path)}>
          ${B({name:c.icon,size:16})}
          <span>${c.title}</span>
        </button>
      `)}
    </nav>
    <div class=${T.sidebarFooter}>
      <button class=${T.toggleBtn} @click=${ht}>
        ${B({name:"menu",size:16})}
        <span class=${T.toggleText}>Collapse Menu</span>
      </button>
      <div class=${T.footerDetails}>
        <div class=${T.statusWrapper}>
          <div class=${T.statusDot}></div>
          <span class=${T.statusText}>Manager Online</span>
        </div>
        <div class=${T.branchBox}>
          <span style="color: var(--color-accent);">${r}</span>
          <span class=${T.commitText}>${a}</span>
        </div>
      </div>
    </div>
  </aside>`}const $t="MFUTlq",wt="kBMrej",pe={topbar:$t,title:wt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>e??y;function se(...e){return e.filter(Boolean).join(" ")}function St(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function _t(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const kt="PSMDQ2",Et={spinner:kt};function At({size:e=16}={}){return u`<svg class=${Et.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const It="vZLpx0",Y={btn:It,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function h({label:e,variant:t="secondary",size:s="md",icon:n,iconOnly:a=!1,ariaLabel:r,loading:o=!1,disabled:d=!1,type:i="button",id:l,onClick:c}){const v=se(Y.btn,Y[`btn--${t}`],Y[`btn--${s}`],a&&Y["btn--icon-only"]);return u`<button id=${Se(l)} class=${v} type=${i}
    aria-label=${Se(r)} aria-busy=${o?"true":"false"}
    ?disabled=${d||o} @click=${c}>
    ${o?At():n?B({name:n,size:s==="sm"?14:16}):y}
    ${a?y:u`<span class=${Y.btn__label}>${e}</span>`}
  </button>`}const Tt=({icon:e,ariaLabel:t,...s})=>h({...s,icon:e,ariaLabel:t,iconOnly:!0,variant:s.variant??"ghost"});function Ct({title:e}){return u`<header class=${pe.topbar}>
    <h1 class=${pe.title}>${e}</h1>
    <div class=${pe.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${h({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{$.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Mt(){const e=K({stack:[]});let t=0;function s(a){return new Promise(r=>{const o=`modal-${t+=1}`;let d=!1;const i=l=>{d||(d=!0,e.set(c=>({stack:c.stack.filter(v=>v.id!==o)})),r(l))};e.set(l=>({stack:[...l.stack,{id:o,view:()=>a({close:i,id:o})}]}))})}return{open:s,refresh:()=>e.set(a=>({stack:[...a.stack]})),store:e}}const Ot=Mt(),ae=Ot;function Rt(){const{stack:e}=ae.store.get();return u`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Nt="sCMZyq",Pt="Fk5OML",Dt="_0AKuiv",ve={layout:Nt,mainContent:Pt,page:Dt};function Lt({routerStore:e,routes:t,router:s,pageContent:n}){const{current:a}=e;return u`<div class=${ve.layout}>
    ${yt({routes:t,activeId:a==null?void 0:a.id,onNavigate:s.navigate})}
    <div class=${ve.mainContent}>
      ${Ct({title:(a==null?void 0:a.pageTitle)||(a==null?void 0:a.title)||""})}
      <main class=${ve.page}>
        ${n}
      </main>
    </div>
    ${Rt()}
  </div>`}const zt="fuSbcq",jt="fu9t4u",Bt="elFvvy",Vt="_2Hu4ZP",Ut="r2dRuM",Ft="AjfFun",O={table:zt,table__scroll:jt,table__grid:Bt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Vt,table__skeleton:Ut,table__stale:Ft};function ie({id:e,caption:t,columns:s,snapshot:n,getRows:a=c=>(c==null?void 0:c.items)??[],rowKey:r=(c,v)=>v,emptyMessage:o="No records found.",onRetry:d,footer:i=y,fallbackColumns:l=[]}){const{status:c,data:v,error:f,isFetching:b}=n,p=v!==void 0,m=typeof s=="function"?p?s(v):l:s,g=Math.max(m.length,1),x=p?a(v):[],S=(_,E)=>u`<td class=${se(_.align==="end"&&O["table__cell--end"],_.mono&&O["table__cell--mono"])}>
    ${_.render?_.render(E):_t(E[_.key])}</td>`;let w;return!p&&(c==="idle"||c==="loading")?w=Array.from({length:5},()=>u`<tr aria-hidden="true">${m.map(()=>u`<td><span class=${O.table__skeleton}></span></td>`)}</tr>`):p?x.length===0?w=u`<tr><td colspan=${g} class=${O.table__message}>${o}</td></tr>`:w=Ce(x,r,_=>u`<tr>${m.map(E=>S(E,_))}</tr>`):w=u`<tr><td colspan=${g} class=${O.table__message} role="alert">
      ${(f==null?void 0:f.userMessage)||(f==null?void 0:f.message)||"Failed to load data."}
      ${d?h({label:"Retry",icon:"refresh",size:"sm",onClick:d}):y}</td></tr>`,u`<div class=${O.table}>
    ${c==="error"&&p?u`<div class=${O.table__stale} role="status">Showing cached data. ${(f==null?void 0:f.userMessage)??""} ${d?h({label:"Retry",size:"sm",variant:"ghost",onClick:d}):y}</div>`:y}
    <div class=${O.table__scroll} aria-busy=${b?"true":"false"}>
      <table id=${e??y} class=${O.table__grid}>
        ${t?u`<caption class="u-sr-only">${t}</caption>`:y}
        <thead><tr>${m.map(_=>u`<th scope="col" class=${se(_.align==="end"&&O["table__cell--end"])}>${_.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${i}
  </div>`}const oe={all:["pipeline"],columns:["pipeline","columns"]},Z={getPipeline:e=>$.load(oe.all,()=>k.get("/api/v1/pipeline"),e),getColumns:e=>$.load(oe.columns,()=>k.get("/api/v1/pipeline/columns"),e)};function Gt(e){return!e||!e.columns?[]:e.columns.map(t=>({key:t,header:t.toUpperCase(),render:s=>u`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${s[t]}>${s[t]}</span>`}))}function Ht(){return{view(){var a,r;const e=$.read(oe.all),t=((a=e.data)==null?void 0:a.items)??[],s=((r=e.data)==null?void 0:r.total)??t.length,n=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${s} records</div>
          <div class="u-flex u-gap-2">
            ${h({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${h({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return ie({id:"pipeline-table",snapshot:e,columns:o=>Gt(o),getRows:o=>(o==null?void 0:o.items)??[],rowKey:(o,d)=>o.id??d,onRetry:()=>Z.getPipeline(),footer:n})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=(e,t)=>{var n;const s=e._$AN;if(s===void 0)return!1;for(const a of s)(n=a._$AO)==null||n.call(a,t,!1),J(a,t);return!0},re=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Me=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Wt(t)}};function qt(e){this._$AN!==void 0?(re(this),this._$AM=e,Me(this)):this._$AM=e}function Kt(e,t=!1,s=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)J(n[r],!1),re(n[r]);else n!=null&&(J(n,!1),re(n));else J(this,e)}const Wt=e=>{e.type==Ae.CHILD&&(e._$AP??(e._$AP=Kt),e._$AQ??(e._$AQ=qt))};class Yt extends Te{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),Me(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,a;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(a=this.disconnected)==null||a.call(this)),s&&(J(this,t),re(this))}setValue(t){if(Be(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const me=new WeakMap,Jt=Ie(class extends Yt{render(e){return y}update(e,[t]){var n;const s=t!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),y}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=me.get(t);s===void 0&&(s=new WeakMap,me.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=me.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qt="_9lH80h",Xt="_91-Xo5",Zt="SEYdJQ",es="CRt7-E",ts="gj4qUB",ss="hUDIR7",j={modal:Qt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Xt,modal__header:Zt,modal__title:es,modal__body:ts,modal__footer:ss};function V({title:e,size:t="md",body:s,footer:n=y,onClose:a,dismissible:r=!0}){const o=St("modal-title"),d=c=>{c&&!c.open&&requestAnimationFrame(()=>{!c.open&&c.isConnected&&c.showModal()})},i=c=>{c.preventDefault(),r&&a(void 0)},l=c=>{r&&c.target===c.currentTarget&&a(void 0)};return u`<dialog class=${se(j.modal,j[`modal--${t}`])} aria-labelledby=${o}
      ${Jt(d)} @cancel=${i} @click=${l}>
    <div class=${j.modal__panel}>
      <header class=${j.modal__header}>
        <h2 id=${o} class=${j.modal__title}>${e}</h2>
        ${r?Tt({icon:"x",ariaLabel:"Close dialog",onClick:()=>a(void 0)}):y}
      </header>
      <div class=${j.modal__body}>${s}</div>
      ${n!==y?u`<footer class=${j.modal__footer}>${n}</footer>`:y}
    </div>
  </dialog>`}function xe({title:e,message:t,tone:s="danger",confirmLabel:n="Confirmar",requireText:a}){return new Promise(r=>{let o="";""+Math.random().toString(36).substring(2);const d=()=>{ae.open(({close:l})=>V({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${a?u`
              <p class="u-text-sm u-text-muted">Escribe <strong>${a}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${c=>{o=c.target.value,i()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${h({label:"Cancelar",variant:"ghost",onClick:()=>{l(),r(!1)}})}
            ${h({label:n,variant:s==="danger"?"delete":"add",disabled:a?o!==a:!1,onClick:()=>{l(),r(!0)}})}
          </div>
        `,onClose:()=>{l(),r(!1)}}))};function i(){ae.refresh()}d()})}function as(e){const t=e.get(),s=()=>{e.set(l=>({...l,isManageColumnsModalOpen:!1}))},n=l=>{if(l===0)return;const c=[...t.columnsData],v=c[l-1];c[l-1]=c[l],c[l]=v,e.set(f=>({...f,columnsData:c}))},a=l=>{if(l===t.columnsData.length-1)return;const c=[...t.columnsData],v=c[l+1];c[l+1]=c[l],c[l]=v,e.set(f=>({...f,columnsData:c}))},r=async()=>{const l=t.columnsData.map(c=>c.name);try{await k.put("/api/v1/pipeline/columns/order",{column_order:l}),e.set(c=>({...c,isManageColumnsModalOpen:!1})),Z.getPipeline({dedupe:!1})}catch(c){alert("Failed to save column order: "+c.message)}},o=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await k.post("/api/v1/pipeline/columns/prune");const l=await k.get("/api/v1/pipeline/columns");e.set(c=>({...c,columnsData:l})),Z.getPipeline({dedupe:!1})}catch(l){alert("Failed to prune columns: "+l.message)}},d=u`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${t.isLoadingColumns?u`<div class="u-text-center u-p-4">Loading columns...</div>`:y}
    
    ${!t.isLoadingColumns&&t.columnsData?u`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${t.columnsData.map((l,c)=>{const v=l.is_system;return u`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${v?"var(--color-accent)":"var(--color-text)"};">${l.name}</span>
                <span class="u-text-xs u-text-muted">${l.type}</span>
                ${l.is_deprecated?u`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:y}
                ${v?u`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:y}
              </div>
              
              <div class="u-flex u-gap-1">
                ${h({label:"▲",variant:"ghost",size:"sm",disabled:v||c>0&&t.columnsData[c-1].is_system,onClick:()=>n(c)})}
                ${h({label:"▼",variant:"ghost",size:"sm",disabled:v||c===t.columnsData.length-1,onClick:()=>a(c)})}
              </div>
            </div>
          `})}
      </div>
    `:y}
  `,i=u`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${h({label:"Prune Deprecated",variant:"delete",onClick:o})}
      </div>
      <div class="u-flex u-gap-2">
        ${h({label:"Cancel",variant:"secondary",onClick:s})}
        ${h({label:"Save Order",variant:"save",onClick:r})}
      </div>
    </div>
  `;return V({title:"Manage Columns",size:"md",onClose:s,body:d,footer:i})}function os(){const e=K({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),t=Ht();let s,n;async function a(){if(await xe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await k.post("/api/v1/pipeline/purge"),Z.getPipeline({dedupe:!1})}catch(o){alert("Error purging pipeline: "+o.message)}}return{mount(r){s=$.subscribe(oe.all,()=>r()),n=e.subscribe(()=>r()),Z.getPipeline()},unmount(){s&&s(),n&&n()},view(){return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${h({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${h({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(r=>({...r,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const r=await k.get("/api/v1/pipeline/columns");e.set(o=>({...o,columnsData:r,isLoadingColumns:!1}))}catch(r){alert("Error loading columns: "+r.message),e.set(o=>({...o,isLoadingColumns:!1}))}}})}
              ${h({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${h({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:a})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${t.view()}
          
          ${e.get().isManageColumnsModalOpen?as(e):y}
        </div>
      `}}}function rs(){return{view(){var l,c,v;const{status:e,data:t,error:s}=$.read(ne.all);if(e==="error")return u`<div class="u-text-danger">${s.message}</div>`;if(e==="loading"||!t)return u`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const n=t.pipeline_total_items||0,a=t.active_incidents||0,r=t.registered_services||0,o=((l=t.telemetry)==null?void 0:l.branch)||"main",d=((c=t.telemetry)==null?void 0:c.clean)!==!1,i=(f,b,p,m,g="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${f}</span>
            <span class="${g}">${B({name:m,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${g}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${b}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${p}>${p}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${i("Pipeline Items",n,"Items tracked in universal pipeline","package","u-text-accent")}
            ${i("Active Incidents",a,a>0?`${a} critical anomalies`:"0 critical anomalies","alert",(a>0,"u-text-danger"))}
            ${i("Active Services",r,"Configured upstream services","play","u-text-success")}
            ${i("GitOps Status",o,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(v=t.stages)!=null&&v.length?t.stages.map(f=>u`
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
      `}}}function ns(){const e=rs();let t;return{mount(s){t=$.subscribe(ne.all,()=>s()),xt.getOverview()},unmount(){t&&t()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const fe={all:["tools"]},is={getTools:e=>$.load(fe.all,()=>k.get("/api/v1/tools"),e)},ls="cg2FU3",cs="Jh4yC3",_e={console:ls,output:cs};function ds({text:e,status:t="idle"}){return u`
    <div class=${_e.console}>
      <pre class=${_e.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function us(){const e=K({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,s;const n=async a=>{e.set(r=>({...r,executionStatus:"running",output:`Executing...
`}));try{const r=await k.post(`/api/v1/tools/${encodeURIComponent(a.name)}/run`);e.set(o=>({...o,executionStatus:"success",output:o.output+`
`+JSON.stringify(r,null,2)}))}catch(r){e.set(o=>({...o,executionStatus:"error",output:o.output+`
ERROR: `+r.message}))}};return{mount(a){t=$.subscribe(fe.all,()=>a()),s=e.subscribe(()=>a()),is.getTools()},unmount(){t&&t(),s&&s()},view(){const{status:a,data:r,error:o,isFetching:d}=$.read(fe.all),i=e.get(),l=Array.isArray(r)?r:(r==null?void 0:r.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${a==="loading"&&!r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:y}
              ${a==="error"&&!r?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${o==null?void 0:o.message}</div>`:y}
              ${l.length===0&&r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:y}
              
              ${l.map(c=>{var v,f,b;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((v=i.selectedTool)==null?void 0:v.name)===c.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((f=i.selectedTool)==null?void 0:f.name)===c.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(p=>({...p,selectedTool:c,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((b=i.selectedTool)==null?void 0:b.name)===c.name?"u-text-accent":""}">${c.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${c.description}>${c.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${i.selectedTool,"Select a tool to execute"}</h3>
              ${h({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!i.selectedTool||i.executionStatus==="running",loading:i.executionStatus==="running",onClick:()=>n(i.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ds({text:i.output,status:i.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const he={all:["views"]},Oe={getViews:e=>$.load(he.all,()=>k.get("/api/v1/views"),e)};function ps(){return{view(){var s;const e=$.read(he.all),t=Array.isArray(e.data)?e.data:((s=e.data)==null?void 0:s.items)??[];return!t.length&&e.status!=="loading"?u`
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
        `:ie({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Oe.getViews()})}}}function vs(){const e=ps();let t;return{mount(s){t=$.subscribe(he.all,()=>s()),Oe.getViews()},unmount(){t&&t()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${h({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const P={all:["incidents"],list:e=>[...P.all,e?"resolved":"active"],catalog:["incidents","catalog"]},Q={getIncidents:(e,t)=>$.load(P.list(e),()=>k.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>k.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>$.load(P.catalog,()=>k.get("/api/v1/incidents/catalog/errors"),e)};function ke({resolved:e}){const t=ft($,{mutationFn:a=>Q.resolveIncident(a.id,a.note),invalidates:[P.all]});async function s(a){const r=prompt("Enter a resolution note (optional):","Resolved manually");if(r===null)return;if(await xe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${a} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:a,note:r})}catch(d){alert("Failed to resolve incident: "+d.message)}}const n=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:a=>u`<span class="u-text-${a.PRIORITY==="CRITICAL"?"danger":a.PRIORITY==="WARNING"?"accent":"muted"}">${a.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:a=>new Date(a.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:a=>a.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:a=>a.RESOLVED?u`<span class="u-text-success">Resolved</span>`:h({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>s(a.ID)})}];return{view(){const a=$.read(P.list(e));return ie({id:`incidents-table-${e?"resolved":"active"}`,columns:n,snapshot:a,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ms(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const s=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${s}) 20%, transparent); color: var(--color-${s}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=$.read(P.catalog);return ie({id:"error-catalog-table",columns:e,snapshot:t,getRows:s=>Array.isArray(s)?s:(s==null?void 0:s.value)||(s==null?void 0:s.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>Q.getCatalog()})}}}function gs(){const e=ke({resolved:!1}),t=ke({resolved:!0}),s=ms(),n=K({activeTab:"active"});let a,r,o,d;return{mount(i){a=$.subscribe(P.list(!1),()=>i()),r=$.subscribe(P.list(!0),()=>i()),o=$.subscribe(P.catalog,()=>i()),d=n.subscribe(()=>i()),Q.getIncidents(!1),Q.getIncidents(!0),Q.getCatalog()},unmount(){a&&a(),r&&r(),o&&o(),d&&d()},view(){const{activeTab:i}=n.get(),l=(c,v,f)=>{const b=i===c;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>n.set(x=>({...x,activeTab:c}))}
          >
            ${B({name:v,size:16})}
            <span>${f}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${l("active","alert","Active Incidents")}
              ${l("resolved","check","Resolved")}
              ${l("catalog","search","Error Index Catalog")}
            </div>
            
            ${h(i==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${i==="active"?e.view():y}
          ${i==="resolved"?t.view():y}
          ${i==="catalog"?s.view():y}
        </div>
      `}}}const be={all:["gitops"]},fs={getGitOps:e=>$.load(be.all,()=>k.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function bs(){let e;return{mount(t){e=$.subscribe(be.all,()=>t()),fs.getGitOps()},unmount(){e&&e()},view(){const t=$.read(be.all),{status:s,data:n,error:a,isFetching:r}=t;if(s==="loading"&&!n)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(s==="error"&&!n)return u`<p class="u-text-danger">Error: ${a==null?void 0:a.message}</p>`;const o=(n==null?void 0:n.telemetry)||{};return u`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${o.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${o.mounted?"MOUNTED":"NOT MOUNTED"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${o.branch||"N/A"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${o.short_commit||"N/A"} <span class="u-text-muted">(${o.commit||"N/A"})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${o.clean?"u-text-success":"u-text-danger"}">${o.clean?"✓ Clean":"x Dirty"}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${o.last_commit||"N/A"}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `}}}const I={all:["settings"]},xs={getSettings:e=>$.load(I.all,()=>k.get("/api/v1/settings"),e),saveConfig:e=>k.post("/api/v1/settings/config",e),triggerSweep:()=>k.post("/api/v1/settings/sweep"),triggerBackup:()=>k.post("/api/v1/settings/backup")};function hs(e,t={},s=300){const n=Object.keys(t),a=()=>{e.set(o=>({...o,isServiceModalOpen:!0}))},r=(o,d,i)=>{var v;const l=((v=d.field_mappings)==null?void 0:v.length)||0,c=Object.keys(d.enrichment_endpoints||{}).join(", ");return u`
      <div style="padding: var(--space-4); border-bottom: ${i?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${d.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${d.name.toUpperCase()}</span>
            ${d.enabled?u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${d.poll_interval_seconds?`POLLS EVERY ${d.poll_interval_seconds}S`:`INHERITS GLOBAL (${s}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(f=>({...f,isServiceModalOpen:!0,editingServiceId:o}))})}
            ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
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
        ${h({label:"+ Add Service",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${n.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:y}
        ${n.map((o,d)=>r(o,t[o],d===n.length-1))}
      </div>
    </div>
  `}function ys(e){var c;const t=e.get(),s=$.read(I.all),n=((c=s==null?void 0:s.data)==null?void 0:c.services)||{},a=t.editingServiceId?n[t.editingServiceId]:null,r=()=>{e.set(v=>({...v,isServiceModalOpen:!1,editingServiceId:null}))},o=()=>{try{const v=document.getElementById("srv-id").value.trim();if(!v){alert("Service ID is required");return}const f=document.getElementById("srv-enrich").value.trim(),b={};f&&f.split(`
`).forEach(g=>{const x=g.split(":");x.length>=2&&(b[x[0].trim()]=x.slice(1).join(":").trim())});const p={name:document.getElementById("srv-name").value.trim()||v,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:b,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(a==null?void 0:a.field_mappings)||[]},m={...n,[v]:p};t.editingServiceId&&t.editingServiceId!==v&&delete m[t.editingServiceId],$.setData(I.all,()=>({...s.data,services:m})),e.set(g=>({...g,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(v){alert("Error saving service: "+v.stack)}},d=v=>{alert(`Applied preset: ${v}`)},i=u`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${h({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>d("sonarr")})}
      ${h({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>d("radarr")})}
      ${h({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>d("jellyfin")})}
      ${h({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>d("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${(a==null?void 0:a.name)||""}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${t.editingServiceId||""} @input=${v=>{v.target.value=v.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${a!=null&&a.enrichment_endpoints?Object.entries(a.enrichment_endpoints).map(([v,f])=>`${v}: ${f}`).join(`
`):""}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${h({label:"Discover Events from API",variant:"secondary",size:"sm"})}
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
      ${h({label:"Cancel",variant:"secondary",onClick:r})}
      ${h({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:o})}
    </div>
  `;return V({title:"Register Service",size:"lg",onClose:r,body:i,footer:l})}function $s({checked:e=!1,onChange:t,label:s=""}){return u`
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
      <input type="checkbox" .checked=${e} @change=${n=>t(n.target.checked)}>
      <span class="slider"></span>
      ${s?u`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${s}</span>`:""}
    </label>
  `}function ws(e,t=[]){const s=()=>{e.set(a=>({...a,isStageModalOpen:!0,editingStageId:null}))},n=a=>a.start_condition?a.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${h({label:"+ Add Stage",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((a,r)=>{const o=n(a);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${o.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${o.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${a.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${a.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${o.bg}; color: ${o.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${o.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${$s({checked:a.enabled,label:a.enabled?"ACTIVE":"INACTIVE",onChange:d=>{const i={...$.read(I.all).data},l=i.stages.find(c=>c.id===a.id);l&&(l.enabled=d,$.setData(I.all,()=>i),e.set(c=>({...c,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(d=>({...d,isStageModalOpen:!0,editingStageId:a.id}))})}
                      ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${a.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${a.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${a.start_condition?a.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${a.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${a.complete_condition?a.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function Ss(e){var b,p,m;const t=e.get(),s=$.read(I.all),n=((b=s==null?void 0:s.data)==null?void 0:b.stages)||[],a=((p=s==null?void 0:s.data)==null?void 0:p.services)||((m=s==null?void 0:s.data)==null?void 0:m.apps)||{},r=Object.keys(a),o=t.editingStageId?n.find(g=>g.id===t.editingStageId):null,d=t.stageIsSink??(o?!o.complete_condition:!1),i=t.stageIsRoot??(o?!o.start_condition:!1),l=()=>{e.set(g=>({...g,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},c=()=>{var g,x;try{const S=document.getElementById("stage-id").value.trim();if(!S){alert("Stage ID is required");return}const w={id:S,name:document.getElementById("stage-name").value.trim()||S,description:document.getElementById("stage-desc").value.trim(),service_ids:Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(E=>E.value),start_condition:i?null:((g=document.getElementById("stage-start"))==null?void 0:g.value.trim())||null,complete_condition:d?null:((x=document.getElementById("stage-complete"))==null?void 0:x.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:o?o.order:n.length+1};let _=[...n];t.editingStageId?_=_.map(E=>E.id===t.editingStageId?w:E):_.push(w),$.setData(I.all,()=>({...s.data,stages:_})),e.set(E=>({...E,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(S){alert("Error in Save Stage: "+S.stack)}},v=u`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(o==null?void 0:o.id)||""} ?disabled=${!!o} @input=${g=>{g.target.value=g.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(o==null?void 0:o.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(o==null?void 0:o.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services</label>
      <div class="services-checkbox-grid" style="display: flex; gap: var(--space-3); flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        ${r.length===0?u`<span class="u-text-muted u-text-sm">No services configured.</span>`:r.map(g=>{var x;return u`
          <label class="form-checkbox" style="cursor: pointer; padding: 4px 8px; background: var(--color-bg-card); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <input type="checkbox" name="stage-service" value=${g} ?checked=${(x=o==null?void 0:o.service_ids)==null?void 0:x.includes(g)}>
            <span class="u-text-sm font-mono">${g}</span>
          </label>
        `})}
      </div>
      <small class="u-text-muted">Select services operating within this pipeline stage.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${i} @change=${g=>e.set(x=>({...x,stageIsRoot:g.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${i?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(o==null?void 0:o.start_condition)||""}>
          ${h({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const g=document.getElementById("stage-start").value;if(!g.trim()){alert("Expression is empty!");return}try{const x=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:g})})).json();x.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+x.message)}catch(x){alert("Validation failed: "+x.message)}}})}
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
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(o==null?void 0:o.complete_condition)||""}>
          ${h({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const g=document.getElementById("stage-complete").value;if(!g.trim()){alert("Expression is empty!");return}try{const x=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:g})})).json();x.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+x.message)}catch(x){alert("Validation failed: "+x.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(o==null?void 0:o.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(o==null?void 0:o.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${o?o.enabled:!1}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,f=u`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:l})}
      ${h({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:c})}
    </div>
  `;return V({title:"Configure DAG Stage",size:"lg",onClose:l,body:v,footer:f})}function _s(e,t={}){const s=Object.keys(t),n=e.get().selectedMappingService||s[0]||"",a=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},r=()=>{e.set(l=>({...l,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},o=(l,c)=>{e.set(v=>({...v,isMappingModalOpen:!0,editingMapping:{...l},editingMappingIndex:c}))},d=l=>{if(confirm("Are you sure you want to delete this mapping?")){const v={...$.read(I.all).data};v.services[n].field_mappings.splice(l,1),$.setData(I.all,()=>v),e.set(f=>({...f,isDirty:!0}))}},i=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(c=>({...c,selectedMappingService:l.target.value}))}
        >
          ${s.map(l=>u`<option value="${l}" ?selected=${l===n}>${t[l].name}</option>`)}
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
          ${h({label:"Sample API",variant:"test",size:"sm",onClick:a})}
          ${h({label:"+ Add Mapping",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${s.length>0?i():y}
        
        ${(()=>{const l=t[n];return!l||!l.field_mappings||l.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map((c,v)=>u`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${c.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${c.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${c.data_type})</span>
                    ${c.transformer?u`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${c.transformer}</div>`:y}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>o(c,v)})}
                    ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>d(v)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function ks(e){const t=e.get(),s=t.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},n=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},a=()=>{const i={...$.read(I.all).data},l=Object.keys(i.services||{}),c=t.selectedMappingService||l[0];c&&(i.services[c].field_mappings||(i.services[c].field_mappings=[]),t.editingMappingIndex>=0?i.services[c].field_mappings[t.editingMappingIndex]=s:i.services[c].field_mappings.push(s),$.setData(I.all,()=>i),e.set(v=>({...v,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},r=u`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${t.selectedMappingService}">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId" .value=${s.source_field} @input=${d=>s.source_field=d.target.value}>
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${s.target_column} @input=${d=>{let i=d.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");i=i.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),d.target.value=i,s.target_column=i}}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select" .value=${s.data_type} @change=${d=>s.data_type=d.target.value}>
        <option value="TEXT" ?selected=${s.data_type==="TEXT"}>TEXT</option>
        <option value="INTEGER" ?selected=${s.data_type==="INTEGER"}>INTEGER</option>
        <option value="REAL" ?selected=${s.data_type==="REAL"}>REAL</option>
        <option value="BOOLEAN" ?selected=${s.data_type==="BOOLEAN"}>BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value" .value=${s.transformer||""} @input=${d=>s.transformer=d.target.value}>
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
          ${h({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let i;try{i=JSON.parse(d)}catch{i=d}try{const l={expression:s.transformer,sample_value:i};typeof i=="object"&&i!==null&&!Array.isArray(i)&&(l.context_dict=i);const c=await k.post("/api/v1/settings/test-transformer",l);c.valid?alert("Result: "+JSON.stringify(c.result)):alert("Error: "+c.message)}catch(l){alert("Error: "+l.message)}}})}
        </div>
      </div>
    </div>
  `,o=u`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:n})}
      ${h({label:"Save Mapping",variant:"save",onClick:a})}
    </div>
  `;return V({title:"Configure Field Mapping & Transformer",size:"lg",onClose:n,body:r,footer:o})}function Es(e){const t=()=>{e.set(a=>({...a,isSampleApiModalOpen:!1}))},s=u`
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
      ${h({label:"Fetch Sample",variant:"test"})}
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
  `,n=u`
    <div class="u-flex u-gap-2">
      ${h({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return V({title:"Sample Service API Schema",size:"lg",onClose:t,body:s,footer:n})}function As(e,t={}){const s=Object.keys(t.triggers||{}),n=()=>{e.set(a=>({...a,isNotificationModalOpen:!0}))};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${h({label:"Test Alert",variant:"test",size:"sm",onClick:()=>alert("Test alert")})}
          ${h({label:"+ Add Trigger",variant:"add",size:"sm",onClick:n})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${s.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:y}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function Is(e){const t=()=>{e.set(a=>({...a,isNotificationModalOpen:!1}))},s=u`
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
  `,n=u`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:t})}
      ${h({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return V({title:"Add Notification Trigger",size:"md",onClose:t,body:s,footer:n})}function Ts(e,t={}){const s=t.retention_days||30,n=t.global_poll_interval_seconds||300;return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
        <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control data retention, global polling cadence, and inspect custom polling overrides.</p>
      </div>
      
      <div style="padding: var(--space-4);">
        <div class="form-grid-2 u-mb-4">
          <div class="form-group">
            <label>Data Retention (Days)</label>
            <input type="number" class="form-input" min="1" max="365" .value=${s}>
            <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
          </div>
          <div class="form-group">
            <label>Global Polling Interval (Seconds)</label>
            <input type="number" class="form-input" min="10" max="86400" .value=${n}>
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

        ${h({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}function Cs(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const t=new Set;return{get:()=>e,set:s=>{e=s(e),t.forEach(n=>n())},subscribe:s=>(t.add(s),()=>t.delete(s))}}function Re(){const e=Cs(),t=async()=>{var g,x;const r=e.get(),{selectedService:o,selectedRecordId:d,testEndpoint:i,testName:l}=r;if(!o||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!o||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const c=$.read(I.all),f=(((g=c==null?void 0:c.data)==null?void 0:g.services)||{})[o],b={...(f==null?void 0:f.enrichment_endpoints)||{}},p=l.trim()||"sandbox_test",m=!!i.trim();m&&(b[p]=i.trim()),e.set(S=>({...S,isLoading:!0,error:null,logs:[],testResponse:null}));try{const S=await k.post("/api/v1/pipeline/sandbox/enrichment",{service_id:o,record_id:parseInt(d,10),enrichment_endpoints:b}),w=m?((x=S.context_data)==null?void 0:x[p])||null:S.context_data;e.set(_=>({..._,isLoading:!1,logs:S.logs||[],testResponse:w}))}catch(S){e.set(w=>({...w,isLoading:!1,error:S.message}))}},s=async()=>{var p;const r=e.get();if(!r.selectedService)return;const o=$.read(I.all),d=((p=o==null?void 0:o.data)==null?void 0:p.services)||{},i=d[r.selectedService],l={...(i==null?void 0:i.enrichment_endpoints)||{}},c=r.testName.trim(),v=r.testEndpoint.trim();if(!c||!v){alert("Please provide both a namespace name and an endpoint to save.");return}l[c]=v;const f={...d,[r.selectedService]:{...i,enrichment_endpoints:l}},b={...o.data,services:f};try{await k.post("/api/v1/settings/config",b),$.setData(I.all,()=>b),e.set(m=>({...m,saveSuccess:!0})),setTimeout(()=>{e.set(m=>({...m,saveSuccess:!1}))},3e3)}catch(m){alert("Failed to save to service: "+m.message)}},n=()=>{var f;const r=e.get(),o=$.read(I.all),d=((f=o==null?void 0:o.data)==null?void 0:f.services)||{},i=Object.keys(d),l=d[r.selectedService];!r.selectedService&&i.length>0&&setTimeout(()=>e.set(b=>({...b,selectedService:i[0]})),0);const c=(b,p)=>{if(!(!p||!b))try{return p.split(".").reduce((m,g)=>m&&m[g]!==void 0?m[g]:void 0,b)}catch{return}},v=r.testVariable.trim()?c(r.testResponse,r.testVariable.trim()):void 0;return u`
      <div class="page-container" style="display: flex; flex-direction: column; height: 100%; min-height: 500px;">
        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${b=>e.set(p=>({...p,selectedService:b.target.value}))} style="border: 1px solid var(--color-text);">
              ${i.length===0?u`<option value="">No services</option>`:y}
              ${i.map(b=>u`<option value=${b} ?selected=${r.selectedService===b}>${d[b].name||b}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${r.selectedRecordId} @input=${b=>e.set(p=>({...p,selectedRecordId:b.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${h({label:"RUN",variant:"test",onClick:t,disabled:r.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${r.testName} @input=${b=>e.set(p=>({...p,testName:b.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${h({label:"SAVE",variant:"secondary",onClick:s,disabled:r.isLoading})}
            ${r.saveSuccess?u`<span style="color: var(--color-success);">${B({name:"check"})}</span>`:y}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${r.testEndpoint} @input=${b=>e.set(p=>({...p,testEndpoint:b.target.value}))}></textarea>
            </div>
            
            <div class="u-flex u-items-center u-justify-between u-mb-2">
              <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
              <div class="u-text-xs u-text-muted">
                ${r.testEndpoint.trim()?`Showing result for new namespace: ${r.testName.trim()||"sandbox_test"}`:"Showing complete cumulative context"}
              </div>
            </div>
            
            <!-- JSON Path Evaluator -->
            ${r.testResponse?u`
              <div class="u-flex u-flex-col u-gap-2 u-mb-2" style="background: var(--color-bg-surface); padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); min-width: 0;">
                <div class="u-flex u-gap-2 u-items-center">
                  <span style="color: var(--color-text-muted); font-size: 0.85rem;">Test Path:</span>
                  <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${r.testVariable} @input=${b=>e.set(p=>({...p,testVariable:b.target.value}))} style="flex: 1; min-width: 0; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                </div>
                ${r.testVariable.trim()?u`
                  <div style="padding: 8px; background: #000; color: ${v!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; max-height: 200px; overflow: auto; border-radius: var(--radius-sm);">
                    <pre style="margin: 0; white-space: pre-wrap;">${v!==void 0?JSON.stringify(v,null,2):"undefined"}</pre>
                  </div>
                `:y}
              </div>
            `:y}
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: #FFFFFF; font-family: monospace; font-size: 0.85rem;">
              ${r.isLoading?"Running test...":y}
              ${r.error?u`<div style="color: var(--color-error);">${r.error}</div>`:y}
              ${!r.isLoading&&!r.error&&r.testResponse?u`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(r.testResponse,null,2)}</pre>`:y}
              ${!r.isLoading&&!r.error&&!r.testResponse&&r.logs.length>0?u`<div style="color: var(--color-warning);">Endpoint returned empty or failed.\n\nCheck logs:\n${r.logs.join(`
`)}</div>`:y}
              ${!r.isLoading&&!r.error&&!r.testResponse&&r.logs.length===0&&!r.testEndpoint.trim()?u`<div style="color: var(--color-text-muted);">Click RUN with an empty input to fetch the full context, or type an endpoint to test a new request.</div>`:y}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((l==null?void 0:l.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:y}
              
              ${Object.entries((l==null?void 0:l.enrichment_endpoints)||{}).map(([b,p])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(m=>({...m,testName:b,testEndpoint:p}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${b}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${p}>${p}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let a;return{view:n,mount:r=>{a=e.subscribe(r);const o=$.read(I.all);o!=null&&o.data||k.get("/api/v1/settings").then(d=>{$.setData(I.all,()=>d),e.set(i=>({...i}))}).catch(console.error)},unmount:()=>{a&&a()}}}function Ms(e){const t=Re(),s=K({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let n,a;const r=o=>{s.get().isDirty&&(o.preventDefault(),o.returnValue="")};return{mount(o){n=s.subscribe(()=>o()),a=$.subscribe(I.all,()=>o()),xs.getSettings(),t.mount(o),window.addEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(async d=>s.get().isDirty?await xe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){n&&n(),a&&a(),t.unmount(),window.removeEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(null)},view(){const o=s.get(),{activeTab:d,saving:i,isServiceModalOpen:l,isStageModalOpen:c,isMappingModalOpen:v,isSampleApiModalOpen:f,isNotificationModalOpen:b}=o,p=$.read(I.all),{data:m,status:g,error:x}=p;if(g==="loading"&&!m)return u`<p class="u-text-muted">Loading settings...</p>`;if(g==="error"&&!m)return u`<p class="u-text-danger">Error: ${x==null?void 0:x.message}</p>`;const S={retention_days:(m==null?void 0:m.retention_days)||30,global_poll_interval_seconds:(m==null?void 0:m.global_poll_interval_seconds)||300},w=(m==null?void 0:m.services)||{},_=(m==null?void 0:m.stages)||[],E=S.global_poll_interval_seconds,D=(U,R,C)=>{const F=d===U;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${F?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${F?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${F?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>s.set(ce=>({...ce,activeTab:U}))}
          >
            ${B({name:R,size:16})}
            <span>${C}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${D("services","database","Services")}
              ${D("sandbox","code","API Sandbox")}
              ${D("mappings","code","Field Mappings")}
              ${D("stages","activity","Stages & Predicates")}
              ${D("notifications","bell","Notification Triggers")}
              ${D("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${h({label:"Save All Settings",variant:"save",size:"sm",loading:i,disabled:!o.isDirty,onClick:async()=>{const U=$.read(I.all);s.set(R=>({...R,saving:!0}));try{await k.post("/api/v1/settings",U.data),s.set(R=>({...R,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(R){alert("Error saving settings: "+R.message),s.set(C=>({...C,saving:!1}))}}})}
              ${o.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:y}
            </div>
            </div>
          </div>
          
          ${d==="services"?hs(s,w,E):y}
          ${d==="sandbox"?t.view():y}
          ${d==="mappings"?_s(s,w):y}
          ${d==="stages"?ws(s,_):y}
          ${d==="notifications"?As(s,m):y}
          ${d==="engine"?Ts(s,S):y}
          
          <!-- Modals -->
          ${l?ys(s):y}
          ${c?Ss(s):y}
          ${v?ks(s):y}
          ${f?Es(s):y}
          ${b?Is(s):y}
        </div>
      `}}}const X=ze(Ee),Os={overview:ns(),pipeline:os(),tools:us(),views:vs(),incidents:gs(),sandbox:Re(),gitops:bs(),settings:Ms(X)};let N=null;function le(){var s,n,a,r;const{current:e}=X.store.get();N&&N.id!==e.id&&((n=(s=N.instance).unmount)==null||n.call(s),N=null),!N&&e&&(N={id:e.id,instance:Os[e.id]},(r=(a=N.instance).mount)==null||r.call(a,le));const t=N?N.instance.view():"";De(Lt({routerStore:X.store.get(),routes:Ee,router:X,pageContent:t}),document.getElementById("app"))}X.store.subscribe(le);ae.store.subscribe(le);le();
