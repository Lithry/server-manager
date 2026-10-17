import{j as nt,E as ot,w as P,b as p,A as E,D as rt}from"./vendor-LJTP5CNr.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function it(){const e=new Map;return{on(a,t){return e.has(a)||e.set(a,new Set),e.get(a).add(t),()=>e.get(a).delete(t)},emit(a,t){if(e.has(a))for(const o of e.get(a))o(t)}}}function re(e){let a=e;const t=new Set;return{get:()=>a,set:o=>{a=typeof o=="function"?o(a):o;for(const s of t)s(a)},subscribe:o=>(t.add(o),()=>t.delete(o))}}function lt(e){const a=re({current:null,params:{}});let t=null;async function o(s){const i=window.location.hash.slice(1)||"/";if(t&&a.get().current&&a.get().current.path!==i&&!await t(i)){window.removeEventListener("hashchange",o),window.location.hash=a.get().current.path,setTimeout(()=>window.addEventListener("hashchange",o),0);return}const l=e.find(d=>d.path===i)||e[0];a.set({current:l,params:{}})}return window.addEventListener("hashchange",o),o(),{store:a,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){t=s}}}const Je=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe={CHILD:2},Xe=e=>(...a)=>({_$litDirective$:e,values:a});let Ze=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,t,o){this._$Ct=a,this._$AM=t,this._$Ci=o}_$AS(a,t){return this.update(a,t)}update(a,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ct}=nt,Ue=e=>e,dt=e=>e.strings===void 0,Fe=()=>document.createComment(""),ge=(e,a,t)=>{var i;const o=e._$AA.parentNode,s=a===void 0?e._$AB:a._$AA;if(t===void 0){const l=o.insertBefore(Fe(),s),d=o.insertBefore(Fe(),s);t=new ct(l,d,e,e.options)}else{const l=t._$AB.nextSibling,d=t._$AM,r=d!==e;if(r){let c;(i=t._$AQ)==null||i.call(t,e),t._$AM=e,t._$AP!==void 0&&(c=e._$AU)!==d._$AU&&t._$AP(c)}if(l!==s||r){let c=t._$AA;for(;c!==l;){const n=Ue(c).nextSibling;Ue(o).insertBefore(c,s),c=n}}}return t},ae=(e,a,t=e)=>(e._$AI(a,t),e),ut={},pt=(e,a=ut)=>e._$AH=a,vt=e=>e._$AH,Ce=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=(e,a,t)=>{const o=new Map;for(let s=a;s<=t;s++)o.set(e[s],s);return o},et=Xe(class extends Ze{constructor(e){if(super(e),e.type!==Qe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,a,t){let o;t===void 0?t=a:a!==void 0&&(o=a);const s=[],i=[];let l=0;for(const d of e)s[l]=o?o(d,l):l,i[l]=t(d,l),l++;return{values:i,keys:s}}render(e,a,t){return this.dt(e,a,t).values}update(e,[a,t,o]){const s=vt(e),{values:i,keys:l}=this.dt(a,t,o);if(!Array.isArray(s))return this.ut=l,i;const d=this.ut??(this.ut=[]),r=[];let c,n,v=0,m=s.length-1,g=0,u=i.length-1;for(;v<=m&&g<=u;)if(s[v]===null)v++;else if(s[m]===null)m--;else if(d[v]===l[g])r[g]=ae(s[v],i[g]),v++,g++;else if(d[m]===l[u])r[u]=ae(s[m],i[u]),m--,u--;else if(d[v]===l[u])r[u]=ae(s[v],i[u]),ge(e,r[u+1],s[v]),v++,u--;else if(d[m]===l[g])r[g]=ae(s[m],i[g]),ge(e,s[v],s[m]),m--,g++;else if(c===void 0&&(c=qe(l,g,u),n=qe(d,v,m)),c.has(d[v]))if(c.has(d[m])){const f=n.get(l[g]),b=f!==void 0?s[f]:null;if(b===null){const y=ge(e,s[v]);ae(y,i[g]),r[g]=y}else r[g]=ae(b,i[g]),ge(e,s[v],b),s[f]=null;g++}else Ce(s[m]),m--;else Ce(s[v]),v++;for(;g<=u;){const f=ge(e,r[u+1]);ae(f,i[g]),r[g++]=f}for(;v<=m;){const f=s[v++];f!==null&&Ce(f)}return this.ut=l,pt(e,r),ot}}),mt={x:P`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:P`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:P`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:P`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:P`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:P`<polyline points="20 6 9 17 4 12"></polyline>`,tool:P`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:P`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":P`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:P`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:P`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:P`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:P`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:P`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:P`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:P`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:P`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:P`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":P`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:P`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,terminal:P`<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>`,copy:P`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`,plus:P`<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>`};function te({name:e,size:a=16,label:t}){const o=mt[e];return o?p`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${a} height=${a} 
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
    ${o}
  </svg>`:p`<span style="width:${a}px; height:${a}px; display:inline-block; background:red;"></span>`}const gt="-FyYHK",ft="hQIh8E",bt="vjCp9N",xt="aWcKCO",yt="XdvXnE",ht="Yr8TTV",$t="yefrc2",Et="UnbUQg",wt="z6Wtj-",_t="WEwa7u",kt="rr8RRm",St="_8nqxsa",It="EMU1IN",At="erzuUm",Tt="IX2naX",Ct="UuwGh4",Ot="HRKVqM",z={sidebar:gt,brand:ft,logo:bt,title:xt,nav:yt,navItem:ht,sidebarFooter:$t,toggleBtn:Et,toggleText:wt,footerDetails:_t,statusWrapper:kt,statusDot:St,branchBox:It,expanded:At,brandText:Tt,statusText:Ct,commitText:Ot},G=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),Mt=new Set([502,503,504]);function Nt(e){const a=e&&typeof e=="object"?e.detail:null;return typeof a=="string"?a:Array.isArray(a)?a.map(t=>`${(t.loc??[]).slice(1).join(".")||"body"}: ${t.msg}`).join("; "):null}class ce extends Error{constructor(a,{code:t,status:o=0,detail:s=null,cause:i}={}){super(a,{cause:i}),this.name="ApiError",this.code=t,this.status=o,this.detail=s}get retryable(){return this.code===G.NETWORK||this.code===G.TIMEOUT||this.code===G.HTTP&&Mt.has(this.status)}get userMessage(){switch(this.code){case G.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case G.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case G.ABORTED:return"";case G.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const Dt=new Set(["GET","HEAD"]),Rt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function Pt(e={}){const a={...Rt,...e},t=e.fetchImpl??((...u)=>globalThis.fetch(...u)),o={request:[],response:[],error:[]},s=new Map,i=()=>new ce("Request aborted",{code:G.ABORTED}),l=(u,f)=>{const b=new URLSearchParams;for(const[I,w]of Object.entries(f??{}))w!=null&&w!==""&&b.set(I,String(w));const y=b.toString();return`${a.baseUrl}${u}${y?"?"+y:""}`};async function d(u){if(u.status===204)return null;const f=u.headers.get("content-type")??"";try{return f.includes("application/json")?await u.json():await u.text()}catch(b){throw new ce("Malformed response body",{code:G.PARSE,status:u.status,cause:b})}}async function r(u,f,b){const y=AbortSignal.timeout(b),I=f?AbortSignal.any([f,y]):y;let w;try{w=await t(u.url,{method:u.method,headers:u.headers,body:u.body,signal:I})}catch(k){throw y.aborted?new ce(`Request timed out after ${b} ms`,{code:G.TIMEOUT,cause:k}):f!=null&&f.aborted?i():new ce("Network request failed",{code:G.NETWORK,cause:k})}const x=await d(w);if(!w.ok)throw new ce(Nt(x)??`HTTP ${w.status}`,{code:G.HTTP,status:w.status,detail:x});return{status:w.status,data:x,headers:w.headers}}const c=(u,f)=>new Promise((b,y)=>{const I=setTimeout(b,u);f==null||f.addEventListener("abort",()=>{clearTimeout(I),y(i())},{once:!0})}),n=u=>Math.random()*Math.min(a.retryMaxMs,a.retryBaseMs*2**u);async function v(u,{signal:f,timeoutMs:b,retries:y}){for(let I=0;;I+=1)try{return await r(u,f,b)}catch(w){if(!(w instanceof ce)||!w.retryable||I>=y)throw w;await c(n(I),f)}}function m(u,f,b){let y=s.get(u);if(!y){const I=new AbortController,w={controller:I,refs:0,promise:null};w.promise=f(I.signal).finally(()=>{s.get(u)===w&&s.delete(u)}),w.promise.catch(()=>{}),s.set(u,w),y=w}return y.refs+=1,new Promise((I,w)=>{const x=()=>{y.refs-=1,y.refs===0&&(s.get(u)===y&&s.delete(u),y.controller.abort()),w(i())};if(b!=null&&b.aborted){x();return}b==null||b.addEventListener("abort",x,{once:!0}),y.promise.then(k=>{b==null||b.removeEventListener("abort",x),I(k)},k=>{b==null||b.removeEventListener("abort",x),w(k)})})}async function g(u,f,b={}){const{query:y,body:I,headers:w={},signal:x,meta:k={}}=b,C=b.timeoutMs??a.timeoutMs,h=b.retries??(Dt.has(u)?a.retries:0),T=b.dedupe??u==="GET";let S={method:u,url:l(f,y),headers:{Accept:"application/json",...w},body:void 0,meta:k};I!==void 0&&(S.body=JSON.stringify(I),S.headers["Content-Type"]="application/json");for(const D of o.request)S=await D(S);const M=async D=>{try{let N=await v(S,{signal:D,timeoutMs:C,retries:h});for(const L of o.response)N=await L(N,S);return N.data}catch(N){let L=N;for(const R of o.error)L=await R(L,S)??L;throw L}};return T?m(`${S.method} ${S.url}`,M,x):M(x)}return{get:(u,f)=>g("GET",u,f),post:(u,f,b)=>g("POST",u,{...b,body:f}),put:(u,f,b)=>g("PUT",u,{...b,body:f}),delete:(u,f)=>g("DELETE",u,f),use({request:u,response:f,error:b}){u&&o.request.push(u),f&&o.response.push(f),b&&o.error.push(b)}}}const Oe=()=>{};function Lt(e,a){return a?new Promise((t,o)=>{const s=()=>o(new DOMException("Aborted","AbortError"));if(a.aborted){s();return}a.addEventListener("abort",s,{once:!0}),e.then(t,o).finally(()=>a.removeEventListener("abort",s))}):e}const Pe=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([o],[s])=>o<s?-1:1)):t),jt=(e,a)=>a.every((t,o)=>o<e.length&&Pe(t)===Pe(e[o]));function zt({now:e=()=>Date.now(),gcMs:a=5*6e4}={}){const t=new Map,o=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function s(r){const c=Pe(r);let n=t.get(c);return n||(n={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},n.snapshot=o(n),t.set(c,n)),n}function i(r){r.snapshot=o(r);for(const c of[...r.listeners])c(r.snapshot)}function l(){for(const[r,c]of t)c.listeners.size===0&&!c.promise&&c.updatedAt&&e()-c.updatedAt>a&&t.delete(r)}function d(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(c=>(Object.assign(r,{data:c,error:null,status:"success",updatedAt:e()}),c),c=>{throw Object.assign(r,{error:c,status:"error"}),c}).finally(()=>{r.promise=null,i(r),r.invalidated&&r.listeners.size>0&&d(r).catch(Oe)}),r.promise.catch(Oe),i(r)),r.promise}return{load(r,c,{staleMs:n=0,signal:v}={}){l();const m=s(r);m.fetcher=c;const g=m.status==="success"&&!m.invalidated&&e()-m.updatedAt<n;return Lt(g?Promise.resolve(m.data):d(m),v)},read:r=>s(r).snapshot,subscribe(r,c){const n=s(r);return n.listeners.add(c),c(n.snapshot),()=>{n.listeners.delete(c)}},invalidate(r){for(const c of t.values())jt(c.keyParts,r)&&(c.invalidated=!0,i(c),c.listeners.size>0&&c.fetcher&&d(c).catch(Oe))},setData(r,c){const n=s(r),v={data:n.data,status:n.status,updatedAt:n.updatedAt},m=typeof c=="function"?c(n.data):c;return Object.assign(n,{data:m,status:"success",updatedAt:e()}),i(n),function(){n.data===m&&(Object.assign(n,v),i(n))}},set(r,c){return this.setData(r,typeof c=="function"?c:()=>c)}}}function Vt(e,{mutationFn:a,optimistic:t,invalidates:o=[]}){return async function(i){const l=((t==null?void 0:t(i))??[]).map(({key:d,update:r})=>e.setData(d,r));try{const d=await a(i);return(typeof o=="function"?o(i,d):o).forEach(c=>e.invalidate(c)),d}catch(d){throw l.reverse().forEach(r=>r()),d}}}const de={},Bt=it(),O=Pt({baseUrl:(de==null?void 0:de.VITE_API_BASE)??"",timeoutMs:Number((de==null?void 0:de.VITE_HTTP_TIMEOUT_MS)??1e4)}),_=zt();O.use({error:e=>((e==null?void 0:e.status)===401&&Bt.emit("auth:required",e),e)});const he={all:["overview"]},tt={getOverview:e=>_.load(he.all,()=>O.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let _e=!1;function Ut(){_e=!_e;const e=document.getElementById("app-sidebar");e&&(_e?e.classList.add(z.expanded):e.classList.remove(z.expanded))}function Ft({routes:e,activeId:a,onNavigate:t}){var d,r,c,n,v,m,g,u,f;const o=_.read(he.all),s=((r=(d=o==null?void 0:o.data)==null?void 0:d.gitops)==null?void 0:r.commit)||((n=(c=o==null?void 0:o.data)==null?void 0:c.telemetry)==null?void 0:n.short_commit)||"-",i=((m=(v=o==null?void 0:o.data)==null?void 0:v.gitops)==null?void 0:m.branch)||((u=(g=o==null?void 0:o.data)==null?void 0:g.telemetry)==null?void 0:u.branch)||"-",l=(f=o==null?void 0:o.data)!=null&&f.version?o.data.version.startsWith("v")?o.data.version:`v${o.data.version}`:"...";return p`<aside id="app-sidebar" class="${z.sidebar} ${_e?z.expanded:""}">
    <div class=${z.brand}>
      <div class=${z.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${z.brandText}>
        <div class=${z.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${l}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${z.nav}>
      ${et(e,b=>b.id,b=>p`
        <button class=${z.navItem} aria-current=${b.id===a?"page":"false"}
          @click=${()=>t(b.path)}>
          ${te({name:b.icon,size:16})}
          <span>${b.title}</span>
        </button>
      `)}
    </nav>
    <div class=${z.sidebarFooter}>
      <button class=${z.toggleBtn} @click=${Ut}>
        ${te({name:"menu",size:16})}
        <span class=${z.toggleText}>Collapse Menu</span>
      </button>
      <div class=${z.footerDetails}>
        <div class=${z.statusWrapper}>
          <div class=${z.statusDot}></div>
          <span class=${z.statusText}>Manager Online</span>
        </div>
        <div class=${z.branchBox}>
          <span style="color: var(--color-accent);">${i}</span>
          <span class=${z.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const qt="MFUTlq",Wt="kBMrej",Me={topbar:qt,title:Wt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=e=>e??E;function ue(...e){return e.filter(Boolean).join(" ")}function Kt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function Gt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Yt="PSMDQ2",Ht={spinner:Yt};function Jt({size:e=16}={}){return p`<svg class=${Ht.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Qt="vZLpx0",fe={btn:Qt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function $({label:e,variant:a="secondary",size:t="md",icon:o,iconOnly:s=!1,ariaLabel:i,loading:l=!1,disabled:d=!1,type:r="button",id:c,onClick:n}){const v=ue(fe.btn,fe[`btn--${a}`],fe[`btn--${t}`],s&&fe["btn--icon-only"]);return p`<button id=${We(c)} class=${v} type=${r}
    aria-label=${We(i)} aria-busy=${l?"true":"false"}
    ?disabled=${d||l} @click=${n}>
    ${l?Jt():o?te({name:o,size:t==="sm"?14:16}):E}
    ${s?E:p`<span class=${fe.btn__label}>${e}</span>`}
  </button>`}const Xt=({icon:e,ariaLabel:a,...t})=>$({...t,icon:e,ariaLabel:a,iconOnly:!0,variant:t.variant??"ghost"});function Zt({title:e}){return p`<header class=${Me.topbar}>
    <h1 class=${Me.title}>${e}</h1>
    <div class=${Me.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${$({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{_.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function es(){const e=re({stack:[]});let a=0;function t(s){return new Promise(i=>{const l=`modal-${a+=1}`;let d=!1;const r=c=>{d||(d=!0,e.set(n=>({stack:n.stack.filter(v=>v.id!==l)})),i(c))};e.set(c=>({stack:[...c.stack,{id:l,view:()=>s({close:r,id:l})}]}))})}return{open:t,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const ts=es(),ke=ts;function ss(){const{stack:e}=ke.store.get();return p`<div id="modal-root">${e.map(a=>a.view())}</div>`}const as="sCMZyq",ns="Fk5OML",os="_0AKuiv",Ne={layout:as,mainContent:ns,page:os};function rs({routerStore:e,routes:a,router:t,pageContent:o}){const{current:s}=e;return p`<div class=${Ne.layout}>
    ${Ft({routes:a,activeId:s==null?void 0:s.id,onNavigate:t.navigate})}
    <div class=${Ne.mainContent}>
      ${Zt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${Ne.page}>
        ${o}
      </main>
    </div>
    ${ss()}
  </div>`}const is="fuSbcq",ls="fu9t4u",cs="elFvvy",ds="_2Hu4ZP",us="r2dRuM",ps="AjfFun",K={table:is,table__scroll:ls,table__grid:cs,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:ds,table__skeleton:us,table__stale:ps};function Be({id:e,caption:a,columns:t,snapshot:o,getRows:s=n=>Array.isArray(n)?n:(n==null?void 0:n.items)??[],rowKey:i=(n,v)=>v,emptyMessage:l="No records found.",onRetry:d,footer:r=E,fallbackColumns:c=[]}){const{status:n,data:v,error:m,isFetching:g}=o,u=v!==void 0,f=typeof t=="function"?u?t(v):c:t,b=Math.max(f.length,1),y=u?s(v):[],I=(x,k)=>p`<td class=${ue(x.align==="end"&&K["table__cell--end"],x.align==="center"&&K["table__cell--center"],x.mono&&K["table__cell--mono"])}>
    ${x.render?x.render(k):Gt(k[x.key])}</td>`;let w;return!u&&(n==="idle"||n==="loading")?w=Array.from({length:5},()=>p`<tr aria-hidden="true">${f.map(()=>p`<td><span class=${K.table__skeleton}></span></td>`)}</tr>`):u?y.length===0?w=p`<tr><td colspan=${b} class=${K.table__message}>${l}</td></tr>`:w=et(y,i,x=>p`<tr>${f.map(k=>I(k,x))}</tr>`):w=p`<tr><td colspan=${b} class=${K.table__message} role="alert">
      ${(m==null?void 0:m.userMessage)||(m==null?void 0:m.message)||"Failed to load data."}
      ${d?$({label:"Retry",icon:"refresh",size:"sm",onClick:d}):E}</td></tr>`,p`<div class=${K.table}>
    ${n==="error"&&u?p`<div class=${K.table__stale} role="status">Showing cached data. ${(m==null?void 0:m.userMessage)??""} ${d?$({label:"Retry",size:"sm",variant:"ghost",onClick:d}):E}</div>`:E}
    <div class=${K.table__scroll} aria-busy=${g?"true":"false"}>
      <table id=${e??E} class=${K.table__grid}>
        ${a?p`<caption class="u-sr-only">${a}</caption>`:E}
        <thead><tr>${f.map(x=>p`<th scope="col" class=${ue(x.align==="end"&&K["table__cell--end"],x.align==="center"&&K["table__cell--center"])}>${x.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const Se={all:["pipeline"]};let W={pipeline_id:"default",limit:50,offset:0};const j={getPipeline:(e={},a={})=>{const{dedupe:t,staleMs:o,signal:s,...i}=e,l={...t!==void 0?{dedupe:t}:{},...o!==void 0?{staleMs:o}:{},...s!==void 0?{signal:s}:{},...a};return W={...W,...i},W.pipeline_id||(W.pipeline_id="default"),(W.stage===""||W.stage===null)&&delete W.stage,(W.status===""||W.status===null)&&delete W.status,_.load(Se.all,()=>O.get("/api/v1/pipeline",{query:W,dedupe:!1}),{dedupe:!1,...l})},getCurrentParams:()=>({...W}),getColumns:(e=W.pipeline_id||"default")=>O.get("/api/v1/pipeline/columns",{query:{pipeline_id:e}}),saveColumnOrder:(e,a)=>O.put("/api/v1/pipeline/columns/order",{column_order:a},{query:{pipeline_id:e}}),pruneColumns:e=>O.post("/api/v1/pipeline/columns/prune",null,{query:{pipeline_id:e}}),purgePipeline:e=>O.post("/api/v1/pipeline/purge",null,{query:{pipeline_id:e}})},vs="_0BpBt1",se={badge:vs,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2","badge--bool":"FpUTU-","badge--bool-true":"_8izwGO","badge--bool-false":"_5AzcWm"};function be({label:e,tone:a="neutral",mono:t=!1,uppercase:o=!1}){const s=ue(se.badge,se[`badge--${a}`],t&&se["badge--mono"],o&&se["badge--uppercase"]);return p`<span class=${s}>${e}</span>`}function ms({value:e}){if(e==null||e==="")return p`<span class="u-text-muted">-</span>`;const a=e===1||e==="1"||e===!0||String(e).toLowerCase()==="true";return p`<span class=${ue(se.badge,se["badge--bool"],a?se["badge--bool-true"]:se["badge--bool-false"])}>${a?"TRUE":"FALSE"}</span>`}const gs=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","CREATED_AT","LAST_UPDATED"]);function fs(e){if(!e||!e.columns)return[];const a=(e==null?void 0:e.column_types)||{};return e.columns.map(t=>{const o=t.toUpperCase(),s=(a[t]||a[o]||"").toUpperCase(),i=gs.has(o),l=s.includes("INT"),d=s.includes("BOOL"),r=i||l||d?"center":void 0;return{key:t,header:o,align:r,render:c=>{const n=c[t];return n==null||n===""?p`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`:d?ms({value:n}):p`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${r==="center"?"text-align: center;":""}" title=${n}>${n}</span>`}}})}function bs(){return{view(){var n,v,m,g;const e=_.read(Se.all),a=((n=e.data)==null?void 0:n.items)??[],t=((v=e.data)==null?void 0:v.total)??a.length,o=((m=e.data)==null?void 0:m.limit)??50,s=((g=e.data)==null?void 0:g.offset)??0,i=t===0?0:s+1,l=Math.min(s+a.length,t),d=s>0,r=s+o<t,c=p`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${i}-${l} of ${t} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(o)}
                ?disabled=${e.isFetching}
                @change=${u=>{const f=Number(u.target.value);j.getPipeline({limit:f,offset:0})}}
              >
                <option value="50" ?selected=${o===50}>50</option>
                <option value="100" ?selected=${o===100}>100</option>
                <option value="200" ?selected=${o===200}>200</option>
                <option value="500" ?selected=${o===500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${$({label:"Previous",size:"sm",variant:"secondary",disabled:!d||e.isFetching,onClick:()=>j.getPipeline({offset:Math.max(0,s-o)})})}
              ${$({label:"Next",size:"sm",variant:"secondary",disabled:!r||e.isFetching,onClick:()=>j.getPipeline({offset:s+o})})}
            </div>
          </div>
        </div>
      `;return Be({id:"pipeline-table",snapshot:e,columns:u=>fs(u),getRows:u=>(u==null?void 0:u.items)??[],rowKey:(u,f)=>u.ID??u.id??f,onRetry:()=>j.getPipeline(),footer:c})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=(e,a)=>{var o;const t=e._$AN;if(t===void 0)return!1;for(const s of t)(o=s._$AO)==null||o.call(s,a,!1),xe(s,a);return!0},Ie=e=>{let a,t;do{if((a=e._$AM)===void 0)break;t=a._$AN,t.delete(e),e=a}while((t==null?void 0:t.size)===0)},st=e=>{for(let a;a=e._$AM;e=a){let t=a._$AN;if(t===void 0)a._$AN=t=new Set;else if(t.has(e))break;t.add(e),hs(a)}};function xs(e){this._$AN!==void 0?(Ie(this),this._$AM=e,st(this)):this._$AM=e}function ys(e,a=!1,t=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(a)if(Array.isArray(o))for(let i=t;i<o.length;i++)xe(o[i],!1),Ie(o[i]);else o!=null&&(xe(o,!1),Ie(o));else xe(this,e)}const hs=e=>{e.type==Qe.CHILD&&(e._$AP??(e._$AP=ys),e._$AQ??(e._$AQ=xs))};class $s extends Ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,t,o){super._$AT(a,t,o),st(this),this.isConnected=a._$AU}_$AO(a,t=!0){var o,s;a!==this.isConnected&&(this.isConnected=a,a?(o=this.reconnected)==null||o.call(this):(s=this.disconnected)==null||s.call(this)),t&&(xe(this,a),Ie(this))}setValue(a){if(dt(this._$Ct))this._$Ct._$AI(a,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=a,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const De=new WeakMap,Es=Xe(class extends $s{render(e){return E}update(e,[a]){var o;const t=a!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=a,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),E}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const a=this.ht??globalThis;let t=De.get(a);t===void 0&&(t=new WeakMap,De.set(a,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,a;return typeof this.G=="function"?(e=De.get(this.ht??globalThis))==null?void 0:e.get(this.G):(a=this.G)==null?void 0:a.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ws="_9lH80h",_s="_91-Xo5",ks="SEYdJQ",Ss="CRt7-E",Is="gj4qUB",As="hUDIR7",ne={modal:ws,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:_s,modal__header:ks,modal__title:Ss,modal__body:Is,modal__footer:As};function J({title:e,size:a="md",body:t,footer:o=E,onClose:s,dismissible:i=!0}){const l=Kt("modal-title"),d=n=>{n&&!n.open&&requestAnimationFrame(()=>{!n.open&&n.isConnected&&n.showModal()})},r=n=>{n.preventDefault(),i&&s(void 0)},c=n=>{i&&n.target===n.currentTarget&&s(void 0)};return p`<dialog class=${ue(ne.modal,ne[`modal--${a}`])} aria-labelledby=${l}
      ${Es(d)} @cancel=${r} @click=${c}>
    <div class=${ne.modal__panel}>
      <header class=${ne.modal__header}>
        <h2 id=${l} class=${ne.modal__title}>${e}</h2>
        ${i?Xt({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):E}
      </header>
      <div class=${ne.modal__body}>${t}</div>
      ${o!==E?p`<footer class=${ne.modal__footer}>${o}</footer>`:E}
    </div>
  </dialog>`}function $e({title:e,message:a,tone:t="danger",confirmLabel:o="Confirm",requireText:s}){return new Promise(i=>{let l="";""+Math.random().toString(36).substring(2);const d=()=>{ke.open(({close:c})=>J({title:e,body:p`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${a}</p>
            ${s?p`
              <p class="u-text-sm u-text-muted">Type <strong>${s}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${n=>{l=n.target.value,r()}} />
            `:""}
          </div>
        `,footer:p`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${$({label:"Cancel",variant:"ghost",onClick:()=>{c(),i(!1)}})}
            ${$({label:o,variant:t==="danger"?"delete":"add",disabled:s?l!==s:!1,onClick:()=>{c(),i(!0)}})}
          </div>
        `,onClose:()=>{c(),i(!1)}}))};function r(){ke.refresh()}d()})}function Ts(e){const a=e.get(),t=j.getCurrentParams().pipeline_id||"default",o=()=>{e.set(n=>({...n,isManageColumnsModalOpen:!1}))},s=n=>{if(n===0)return;const v=[...a.columnsData],m=v[n-1];v[n-1]=v[n],v[n]=m,e.set(g=>({...g,columnsData:v}))},i=n=>{if(n===a.columnsData.length-1)return;const v=[...a.columnsData],m=v[n+1];v[n+1]=v[n],v[n]=m,e.set(g=>({...g,columnsData:v}))},l=async()=>{const n=a.columnsData.map(v=>v.name);try{await j.saveColumnOrder(t,n),e.set(v=>({...v,isManageColumnsModalOpen:!1})),j.getPipeline()}catch(v){alert("Failed to save column order: "+v.message)}},d=async()=>{if(confirm("Are you sure you want to delete all deprecated columns in this pipeline? This cannot be undone."))try{await j.pruneColumns(t);const n=await j.getColumns(t);e.set(v=>({...v,columnsData:n})),j.getPipeline()}catch(n){alert("Failed to prune columns: "+n.message)}},r=p`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in pipeline <code>${t}</code>. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database table but are no longer referenced by any Service Field Mapping.
      </p>
    </div>

    ${a.isLoadingColumns?p`<div class="u-text-center u-p-4">Loading columns...</div>`:E}
    
    ${!a.isLoadingColumns&&a.columnsData?p`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${a.columnsData.map((n,v)=>{const m=n.is_system;return p`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${m?"var(--color-accent)":"var(--color-text)"};">${n.name}</span>
                <span class="u-text-xs u-text-muted">${n.type}</span>
                ${n.is_deprecated?p`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:E}
                ${m?p`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:E}
              </div>
              
              <div class="u-flex u-gap-1">
                ${$({label:"▲",variant:"ghost",size:"sm",disabled:m||v>0&&a.columnsData[v-1].is_system,onClick:()=>s(v)})}
                ${$({label:"▼",variant:"ghost",size:"sm",disabled:m||v===a.columnsData.length-1,onClick:()=>i(v)})}
              </div>
            </div>
          `})}
      </div>
    `:E}
  `,c=p`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${$({label:"Prune Deprecated",variant:"delete",onClick:d})}
      </div>
      <div class="u-flex u-gap-2">
        ${$({label:"Cancel",variant:"secondary",onClick:o})}
        ${$({label:"Save Order",variant:"save",onClick:l})}
      </div>
    </div>
  `;return J({title:`Manage Columns (${t})`,size:"md",onClose:o,body:r,footer:c})}function Cs(){const e=re({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),a=bs();let t,o;async function s(){const i=j.getCurrentParams().pipeline_id||"default";if(await $e({title:`Purge Pipeline (${i})`,message:`Are you sure you want to completely clear all rows in pipeline '${i}'? This cannot be undone.`,requireText:"PURGE",confirmLabel:"Purge Data"}))try{await j.purgePipeline(i),j.getPipeline({offset:0})}catch(d){alert("Error purging pipeline: "+d.message)}}return{mount(i){t=_.subscribe(Se.all,()=>i()),o=e.subscribe(()=>i()),j.getPipeline()},unmount(){t&&t(),o&&o()},view(){var f,b,y,I,w;const i=_.read(Se.all),l=((f=i.data)==null?void 0:f.available_pipelines)??[],d=((b=i.data)==null?void 0:b.available_stages)??[],r=((y=i.data)==null?void 0:y.available_statuses)??[],c=j.getCurrentParams(),n=c.pipeline_id||((I=i.data)==null?void 0:I.pipeline_id)||"default",v=c.stage||"",m=c.status||"",g=((w=i.data)==null?void 0:w.table_name)||`PIPELINE_${n.toUpperCase()}`,u=l.find(x=>x.id===n);return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between" style="flex-wrap: wrap; gap: var(--space-3);">
            <div class="u-flex u-items-center u-gap-2" style="flex-wrap: wrap;">
              <label class="u-text-xs u-font-mono u-text-muted">PIPELINE:</label>
              <select
                class="u-text-sm u-font-mono"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-accent); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer; font-weight: 600;"
                @change=${x=>{j.getPipeline({pipeline_id:x.target.value,stage:"",status:"",offset:0})}}
              >
                ${l.length>0?l.map(x=>p`
                      <option value=${x.id} ?selected=${n===x.id}>
                        ${x.name} (${x.id})
                      </option>
                    `):p`<option value="default" selected>Default Pipeline (default)</option>`}
              </select>
              <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--color-border);">
                TABLE: ${g}${u!=null&&u.retention_days?` | RETENTION: ${u.retention_days}D`:""}
              </span>
              ${$({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(x=>({...x,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const x=await j.getColumns(n);e.set(k=>({...k,columnsData:x,isLoadingColumns:!1}))}catch(x){alert("Error loading columns: "+x.message),e.set(k=>({...k,isLoadingColumns:!1}))}}})}
              ${$({label:"Configure Mappings & Stages",variant:"ghost",size:"sm",onClick:()=>{window.location.hash="#/settings"}})}
            </div>

            <div class="u-flex u-items-center u-gap-2" style="flex-wrap: wrap;">
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${x=>{j.getPipeline({stage:x.target.value,offset:0})}}
              >
                <option value="" ?selected=${!v}>All Stages</option>
                ${d.map(x=>p`
                  <option value=${x.id} ?selected=${v===x.id}>${x.name||x.id}</option>
                `)}
              </select>
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${x=>{j.getPipeline({status:x.target.value,offset:0})}}
              >
                <option value="" ?selected=${!m}>All Statuses</option>
                ${r.map(x=>p`
                  <option value=${x} ?selected=${m===x}>${x}</option>
                `)}
              </select>
              ${$({label:"Sync Now",variant:"secondary",size:"sm",icon:"refresh",onClick:async()=>{try{await O.post("/api/v1/settings/scheduler/restart"),setTimeout(()=>j.getPipeline({offset:0}),1200)}catch(x){alert("Error triggering sync: "+x.message)}}})}
              ${$({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:s})}
            </div>
          </div>
          ${a.view()}
          
          ${e.get().isManageColumnsModalOpen?Ts(e):E}
        </div>
      `}}}function Os(){return{view(){var v,m,g;const{status:e,data:a,error:t}=_.read(he.all);if(e==="error")return p`<div class="u-text-danger">${t.message}</div>`;if(e==="loading"||!a)return p`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const o=a.pipeline_total_items||0,s=a.active_incidents||0,i=a.critical_incidents||0,l=a.registered_services||0,d=a.pipelines||[],r=((v=a.gitops)==null?void 0:v.branch)||"main",c=((m=a.gitops)==null?void 0:m.clean)!==!1,n=(u,f,b,y,I="u-text-accent")=>p`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${u}</span>
            <span class="${I}">${te({name:y,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${I}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${f}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${b}>${b}</div>
          </div>
        </div>
      `;return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",o,`Across ${d.length||1} pipeline table(s)`,"package","u-text-accent")}
            ${n("Active Incidents",s,`${i} critical anomalies`,"alert",s>0?"u-text-danger":"u-text-success")}
            ${n("Active Services",l,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",r,c?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
          </div>
          
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">Telemetry Pipelines & Health</h3>
                <a href="#/incidents" class="u-text-sm u-text-accent" style="text-decoration: none;">View Incidents</a>
              </div>
              <div style="background: var(--color-bg-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-3); text-align: center; color: ${s>0?"var(--color-danger)":"var(--color-text-muted)"};" class="u-mb-3 u-text-sm">
                ${s>0?`! ${s} active incident(s) (${i} critical). Check System Incidents.`:"✓ No active incidents. All telemetry nominal."}
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${d.map(u=>p`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                    <div>
                      <strong class="u-text-sm">${u.name}</strong>
                      <span class="u-font-mono u-text-xs u-text-muted u-ml-2">(${u.table_name})</span>
                    </div>
                    <div class="u-font-mono u-text-xs">
                      <span style="color: var(--color-accent); font-weight: bold;">${u.total_items} items</span>
                      <span class="u-text-muted"> | ${u.completed_or_sink_items} completed/sink</span>
                    </div>
                  </div>
                `)}
              </div>
            </div>

            <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 300px;">
              <div class="u-flex u-items-center u-justify-between u-mb-4">
                <h3 style="margin: 0; font-size: 1.1rem;">DAG Pipeline Stages</h3>
                <a href="#/pipeline" class="u-text-sm u-text-accent" style="text-decoration: none;">Open Pipeline</a>
              </div>
              <div class="u-flex u-flex-col u-gap-2">
                ${(g=a.stages)!=null&&g.length?a.stages.map(u=>p`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: auto 1fr auto; gap: var(--space-3); align-items: center;">
                    <div class="u-flex u-items-center u-gap-2">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${u.id}</span>
                    </div>
                    <div>
                      <div class="u-text-sm"><strong>${u.name}</strong> <span class="u-text-xs u-text-muted">(${(u.service_ids||[]).join(", ")||"passive"})</span></div>
                      <div class="u-font-mono u-text-xs u-text-muted">
                        Pipelines: ${(u.pipeline_ids||["default"]).join(", ")}${u.interval_seconds?` | ${u.interval_seconds}s`:""}
                      </div>
                    </div>
                    <div style="text-align: right;">
                      ${u.enabled?p`<span class="u-text-xs u-text-success">Active</span>`:p`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):p`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function Ms(){const e=Os();let a;return{mount(t){a=_.subscribe(he.all,()=>t()),tt.getOverview()},unmount(){a&&a()},view(){return p`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const Le={all:["tools"]},Ns={getTools:e=>_.load(Le.all,()=>O.get("/api/v1/tools"),e)},Ds="cg2FU3",Rs="Jh4yC3",Ke={console:Ds,output:Rs};function Ps({text:e,status:a="idle"}){return p`
    <div class=${Ke.console}>
      <pre class=${Ke.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function Ls(){const e=re({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let a,t;const o=async s=>{e.set(i=>({...i,executionStatus:"running",output:`Executing...
`}));try{const i=await O.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(l=>({...l,executionStatus:"success",output:l.output+`
`+JSON.stringify(i,null,2)}))}catch(i){e.set(l=>({...l,executionStatus:"error",output:l.output+`
ERROR: `+i.message}))}};return{mount(s){a=_.subscribe(Le.all,()=>s()),t=e.subscribe(()=>s()),Ns.getTools()},unmount(){a&&a(),t&&t()},view(){const{status:s,data:i,error:l,isFetching:d}=_.read(Le.all),r=e.get(),c=Array.isArray(i)?i:(i==null?void 0:i.items)??[];return p`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!i?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:E}
              ${s==="error"&&!i?p`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${l==null?void 0:l.message}</div>`:E}
              ${c.length===0&&i?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:E}
              
              ${c.map(n=>{var v,m,g;return p`
                <button 
                  class="u-text-left"
                  style="background: ${((v=r.selectedTool)==null?void 0:v.name)===n.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((m=r.selectedTool)==null?void 0:m.name)===n.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(u=>({...u,selectedTool:n,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((g=r.selectedTool)==null?void 0:g.name)===n.name?"u-text-accent":""}">${n.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${n.description}>${n.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${r.selectedTool,"Select a tool to execute"}</h3>
              ${$({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>o(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${Ps({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const Ae={all:["views"]},Y={getViews:e=>_.load(Ae.all,()=>O.get("/api/v1/views"),e),saveView:e=>O.post("/api/v1/views",e),deleteView:e=>O.delete(`/api/v1/views/${encodeURIComponent(e)}`),syncView:e=>O.post(`/api/v1/views/${encodeURIComponent(e)}/sync`),getViewData:(e,a=50,t=0)=>O.get(`/api/v1/views/${encodeURIComponent(e)}/data`,{query:{limit:a,offset:t}})};function js(e){const a=async i=>{e.set(l=>({...l,inspectingView:i,viewDataPayload:null,isLoadingViewData:!0,viewDataError:null}));try{const l=await Y.getViewData(i.VIEW_NAME,100,0);e.set(d=>({...d,viewDataPayload:l,isLoadingViewData:!1}))}catch(l){e.set(d=>({...d,isLoadingViewData:!1,viewDataError:l.message}))}},t=async i=>{try{const l=await Y.syncView(i.VIEW_NAME);await Y.getViews(),alert(`✓ Synced '${i.VIEW_NAME}' (${l.rows_synced??0} rows upserted).`)}catch(l){alert(`✗ Sync failed for '${i.VIEW_NAME}': ${l.message}`)}},o=i=>{e.set(l=>({...l,isViewModalOpen:!0,editingView:i,draftMode:i.MODE||"VIEW",viewModalError:null}))},s=async i=>{if(confirm(`Delete ${i.MODE==="TABLE"?"persistent table":"virtual view"} '${i.VIEW_NAME}'?`))try{await Y.deleteView(i.VIEW_NAME),await Y.getViews()}catch(l){alert(`✗ Failed to delete '${i.VIEW_NAME}': ${l.message}`)}};return{view(){var d;const i=_.read(Ae.all),l=Array.isArray(i.data)?i.data:((d=i.data)==null?void 0:d.items)??[];return i.status==="loading"&&!l.length?p`<div class="u-text-muted u-text-sm">Loading views and custom tables...</div>`:l.length?p`
        <div class="u-flex u-flex-col u-gap-3">
          ${l.map(r=>{const c=(r.MODE||"VIEW")==="TABLE",n=c?"var(--color-success)":"var(--color-accent)",v=c?r.REFRESH_INTERVAL_SECONDS?`AUTO EVERY ${r.REFRESH_INTERVAL_SECONDS}S`:"MANUAL SYNC ONLY":"ON-DEMAND SQL VIEW";return p`
              <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-left: 4px solid ${n}; border-radius: var(--radius-md); padding: var(--space-4);">
                <div class="u-flex u-items-center u-justify-between u-mb-2" style="flex-wrap: wrap; gap: var(--space-2);">
                  <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
                    <strong class="u-font-mono" style="font-size: 1.05rem; color: var(--color-text);">${r.VIEW_NAME}</strong>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, ${n} 20%, transparent); color: ${n}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">
                      ${c?"PERSISTENT TABLE":"VIRTUAL VIEW"}
                    </span>
                    <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">
                      ${v}
                    </span>
                    ${c?p`
                      <span class="u-font-mono u-text-xs u-text-muted">
                        KEY: <strong style="color: var(--color-text);">${r.SYNC_KEY_COLUMN||"PIPELINE_KEY"}</strong>
                        ${r.LAST_SYNCED_AT?p` | LAST SYNC: ${r.LAST_SYNCED_AT}`:E}
                      </span>
                    `:E}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${$({label:"Inspect Data",variant:"secondary",size:"sm",icon:"search",onClick:()=>a(r)})}
                    ${c?$({label:"Sync Now",variant:"test",size:"sm",icon:"refresh",onClick:()=>t(r)}):E}
                    ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>o(r)})}
                    ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>s(r)})}
                  </div>
                </div>
                ${r.DESCRIPTION?p`<div class="u-text-sm u-text-muted u-mb-2">${r.DESCRIPTION}</div>`:E}
                <div class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); color: var(--color-text-secondary); overflow-x: auto; white-space: pre-wrap;">${r.SQL_QUERY||""}</div>
              </div>
            `})}
        </div>
      `:p`
          <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden;">
            <div style="padding: var(--space-4);">
              <div style="font-weight: bold; margin-bottom: var(--space-1); font-size: var(--font-size-md);">No Views or Custom Tables Configured</div>
              <div class="u-text-muted u-text-sm">Click "+ New View / Custom Table" to define a virtual SQLite VIEW or a persistent custom table with automated Ts refresh over any pipeline.</div>
            </div>
            <div style="border-top: 1px solid var(--color-border); padding: var(--space-4); text-align: center; background: var(--color-bg-surface); font-weight: 500;" class="u-text-sm u-text-muted">
              0 active projections or persistent tables registered.
            </div>
          </div>
        `}}}function zs(e){const a=e.get(),t=a.editingView||null,o=a.draftMode||(t==null?void 0:t.MODE)||"VIEW",s=o==="TABLE",i=a.isSavingView||!1,l=()=>{e.set(n=>({...n,isViewModalOpen:!1,editingView:null,draftMode:null,isSavingView:!1,viewModalError:null}))},d=async()=>{var b,y,I,w,x;const n=(((b=document.getElementById("view-name"))==null?void 0:b.value)||"").trim().toUpperCase().replace(/[^A-Z0-9_]/g,""),v=(((y=document.getElementById("view-desc"))==null?void 0:y.value)||"").trim(),m=(((I=document.getElementById("view-sql"))==null?void 0:I.value)||"").trim(),g=(((w=document.getElementById("view-sync-key"))==null?void 0:w.value)||"PIPELINE_KEY").trim().toUpperCase().replace(/[^A-Z0-9_]/g,"")||"PIPELINE_KEY",u=(((x=document.getElementById("view-refresh-interval"))==null?void 0:x.value)||"").trim(),f=u?parseInt(u,10):null;if(!n){e.set(k=>({...k,viewModalError:"View / Table Name is required (strictly uppercase alphanumeric and underscores)."}));return}if(!m){e.set(k=>({...k,viewModalError:"SQL SELECT query is required."}));return}e.set(k=>({...k,isSavingView:!0,viewModalError:null}));try{await Y.saveView({view_name:n,description:v,sql_query:m,mode:o,sync_key_column:s?g:"PIPELINE_KEY",refresh_interval_seconds:s&&Number.isFinite(f)&&f>=10?f:null}),await Y.getViews(),l()}catch(k){e.set(C=>({...C,isSavingView:!1,viewModalError:k.message||"Failed to save custom view / table."}))}},r=p`
    ${a.viewModalError?p`
      <div class="u-text-danger u-text-xs u-mb-3" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 12%, transparent); border: 1px solid var(--color-danger); border-radius: var(--radius-sm);">
        ${a.viewModalError}
      </div>
    `:E}

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Object Identifier (Uppercase)</label>
        <input
          type="text"
          id="view-name"
          class="form-input font-mono"
          placeholder="V_ANIME_LIBRARY or TBL_RECOGNIZED_MEDIA"
          autocomplete="off"
          .value=${(t==null?void 0:t.VIEW_NAME)||""}
          ?disabled=${!!t}
          @input=${n=>{n.target.value=n.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")}}
        >
        <small class="u-text-muted">Strict identifier regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
      <div class="form-group">
        <label>Execution & Storage Mode</label>
        <select
          class="form-select font-mono"
          .value=${o}
          @change=${n=>e.set(v=>({...v,draftMode:n.target.value}))}
        >
          <option value="VIEW" ?selected=${o==="VIEW"}>VIEW — Virtual SQLite View (On-Demand)</option>
          <option value="TABLE" ?selected=${o==="TABLE"}>TABLE — Persistent Custom Table (Upsert & Automated Ts)</option>
        </select>
        <small class="u-text-muted">
          ${s?"Materializes rows into a persistent SQLite table with incremental upserts.":"Creates a virtual SQLite VIEW evaluated dynamically on query."}
        </small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input
        type="text"
        id="view-desc"
        class="form-input"
        placeholder="Aggregated projection or persistent telemetry dataset"
        .value=${(t==null?void 0:t.DESCRIPTION)||""}
      >
    </div>

    ${s?p`
      <div class="form-grid-2 u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <div class="form-group u-mb-0">
          <label>Unique Upsert Key Column</label>
          <input
            type="text"
            id="view-sync-key"
            class="form-input font-mono"
            placeholder="PIPELINE_KEY"
            .value=${(t==null?void 0:t.SYNC_KEY_COLUMN)||"PIPELINE_KEY"}
            @input=${n=>{n.target.value=n.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")}}
          >
          <small class="u-text-muted">Must be returned by the SELECT query to perform non-destructive upserts.</small>
        </div>
        <div class="form-group u-mb-0">
          <label>Automated Refresh Cycle Ts (Seconds)</label>
          <input
            type="number"
            id="view-refresh-interval"
            class="form-input font-mono"
            min="10"
            max="86400"
            placeholder="Leave empty for manual sync only"
            .value=${(t==null?void 0:t.REFRESH_INTERVAL_SECONDS)??""}
          >
          <small class="u-text-muted">Optional background sync interval (&ge; 10s). Leave empty for manual-only sync.</small>
        </div>
      </div>
    `:E}

    <div class="form-group u-mb-0">
      <label>Read-Only SQL SELECT Query</label>
      <textarea
        id="view-sql"
        class="form-input font-mono"
        rows="5"
        style="resize: vertical;"
        placeholder="SELECT PIPELINE_KEY, STAGE, STATUS, LAST_UPDATED FROM PIPELINE_DEFAULT WHERE STATUS = 'SINK'"
        .value=${(t==null?void 0:t.SQL_QUERY)||""}
      ></textarea>
      <small class="u-text-muted">Strictly read-only <code>SELECT</code> over pipeline tables (e.g. <code>PIPELINE_DEFAULT</code>). Destructive SQL keywords are blocked.</small>
    </div>
  `,c=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:l})}
      ${$({label:i?"Saving...":t?"Update & Sync":"Create & Sync",variant:"save",loading:i,disabled:i,onClick:d})}
    </div>
  `;return J({title:t?`Edit ${t.VIEW_NAME}`:"Create Custom View / Persistent Table",size:"lg",onClose:l,body:r,footer:c})}function Vs(e){const a=e.get(),t=a.inspectingView,o=a.viewDataPayload,s=a.isLoadingViewData||!1,i=a.viewDataError||null;if(!t)return E;const l=()=>{e.set(u=>({...u,inspectingView:null,viewDataPayload:null,isLoadingViewData:!1,viewDataError:null}))},d=async()=>{e.set(u=>({...u,isLoadingViewData:!0,viewDataError:null}));try{const u=await Y.getViewData(t.VIEW_NAME,100,0);e.set(f=>({...f,viewDataPayload:u,isLoadingViewData:!1}))}catch(u){e.set(f=>({...f,isLoadingViewData:!1,viewDataError:u.message}))}},r=async()=>{e.set(u=>({...u,isLoadingViewData:!0,viewDataError:null}));try{await Y.syncView(t.VIEW_NAME);const u=await Y.getViewData(t.VIEW_NAME,100,0);await Y.getViews(),e.set(f=>({...f,viewDataPayload:u,isLoadingViewData:!1}))}catch(u){e.set(f=>({...f,isLoadingViewData:!1,viewDataError:u.message}))}},c=(o==null?void 0:o.items)||[],n=c.length>0?Object.keys(c[0]):[],v=(t.MODE||"VIEW")==="TABLE",m=p`
    <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-wrap: wrap; gap: var(--space-2);">
      <div class="u-flex u-items-center u-gap-2">
        <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, ${v?"var(--color-success)":"var(--color-accent)"} 20%, transparent); color: ${v?"var(--color-success)":"var(--color-accent)"}; padding: 3px 8px; border-radius: 4px; font-weight: bold;">
          ${v?"PERSISTENT TABLE":"VIRTUAL VIEW"}
        </span>
        <span class="u-text-xs u-font-mono u-text-muted">
          Total Rows: <strong>${(o==null?void 0:o.total)??0}</strong> (Showing ${c.length})
        </span>
      </div>
      <div class="u-flex u-gap-2">
        ${v?$({label:"Sync Table Now",variant:"test",size:"sm",icon:"refresh",loading:s,onClick:r}):E}
        ${$({label:"Refresh Data",variant:"secondary",size:"sm",icon:"refresh",loading:s,onClick:d})}
      </div>
    </div>

    ${i?p`
      <div class="u-text-danger u-text-xs u-mb-3" style="padding: var(--space-3); background: color-mix(in srgb, var(--color-danger) 12%, transparent); border: 1px solid var(--color-danger); border-radius: var(--radius-sm);">
        ${i}
      </div>
    `:E}

    ${s&&!o?p`
      <div class="u-text-muted u-text-sm" style="padding: var(--space-5); text-align: center;">Loading data from <code>${t.VIEW_NAME}</code>...</div>
    `:E}

    ${!s&&c.length===0?p`
      <div style="background: var(--color-bg-subtle); border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-5); text-align: center;">
        <p class="u-text-muted u-text-sm" style="margin: 0;">No rows currently returned by <code>${t.VIEW_NAME}</code>.</p>
      </div>
    `:E}

    ${c.length>0?p`
      <div style="max-height: 420px; overflow: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem;">
          <thead>
            <tr style="background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 1;">
              ${n.map(u=>p`<th class="font-mono" style="padding: 8px 10px; font-weight: 600; white-space: nowrap;">${u}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${c.map(u=>p`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                ${n.map(f=>p`
                  <td class="font-mono" style="padding: 6px 10px; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title=${String(u[f]??"")}>
                    ${u[f]===null||u[f]===void 0?p`<span class="u-text-muted">NULL</span>`:String(u[f])}
                  </td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `:E}
  `,g=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Close",variant:"secondary",onClick:l})}
    </div>
  `;return J({title:`Inspect Data: ${t.VIEW_NAME}`,size:"lg",onClose:l,body:m,footer:g})}function Bs(){const e=re({isViewModalOpen:!1,editingView:null,draftMode:null,isSavingView:!1,viewModalError:null,inspectingView:null,viewDataPayload:null,isLoadingViewData:!1,viewDataError:null}),a=js(e);let t,o;return{mount(s){t=_.subscribe(Ae.all,()=>s()),o=e.subscribe(()=>s()),Y.getViews()},unmount(){t&&t(),o&&o()},view(){var c;const s=e.get(),i=_.read(Ae.all),l=Array.isArray(i.data)?i.data:((c=i.data)==null?void 0:c.items)??[],d=l.filter(n=>n.MODE==="TABLE").length,r=l.length-d;return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-text-muted u-text-sm">
              ${l.length===0?"Define virtual SQLite views for quick confirmation or persistent custom tables with automated Ts refresh.":`${l.length} registered (${r} virtual view${r===1?"":"s"}, ${d} persistent table${d===1?"":"s"})`}
            </div>
            ${$({label:"+ New View / Custom Table",variant:"add",size:"sm",onClick:()=>e.set(n=>({...n,isViewModalOpen:!0,editingView:null,draftMode:"VIEW",viewModalError:null}))})}
          </div>
          ${a.view()}
          ${s.isViewModalOpen?zs(e):E}
          ${s.inspectingView?Vs(e):E}
        </div>
      `}}}const H={all:["incidents"],list:e=>[...H.all,e?"resolved":"active"],catalog:["incidents","catalog"]},oe={getIncidents:(e,a)=>_.load(H.list(e),()=>O.get("/api/v1/incidents",{query:{resolved:e?1:0}}),a),resolveIncident:(e,a)=>O.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:a||""}),createIncident:e=>O.post("/api/v1/incidents",e),getCatalog:e=>_.load(H.catalog,()=>O.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>O.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>O.delete(`/api/v1/incidents/catalog/errors/${e}`)};function Ge({resolved:e}){const a=Vt(_,{mutationFn:s=>oe.resolveIncident(s.id,s.note),invalidates:[H.all]});async function t(s){const i=prompt("Enter a resolution note (optional):","Resolved manually");if(i===null)return;if(await $e({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await a({id:s,note:i})}catch(d){alert("Failed to resolve incident: "+d.message)}}const o=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:s=>{const i=s.SEVERITY==="CRITICAL"?"danger":s.SEVERITY==="WARNING"?"warning":"info";return be({label:s.SEVERITY||"INFO",tone:i})}},{key:"COMPONENT",header:"Component",render:s=>p`<strong class="u-text-sm">${s.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:s=>p`<span class="u-font-mono u-text-xs">${s.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:s=>p`<span class="u-text-sm">${s.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:s=>s.REMEDY?p`<span class="u-text-xs u-text-muted">${s.REMEDY}</span>`:E},{key:"CREATED_AT",header:"Created At",mono:!0,render:s=>p`<span class="u-text-xs u-text-muted">${s.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?p`<span class="u-text-success u-text-xs">Resolved${s.RESOLUTION_NOTE?`: ${s.RESOLUTION_NOTE}`:""}</span>`:$({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>t(s.ID)})}];return{view(){const s=_.read(H.list(e));return Be({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:s,getRows:i=>(i==null?void 0:i.items)??(Array.isArray(i)?i:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function Us({onEditError:e}={}){const a=[{key:"ERROR_CODE",header:"Code",render:t=>p`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const o=t.SEVERITY==="CRITICAL"?"danger":"warning";return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${o}) 20%, transparent); color: var(--color-${o}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>p`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>p`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>p`<span class="u-text-sm">${t.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>$({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(t)})}];return{view(){const t=_.read(H.catalog);return Be({id:"error-catalog-table",columns:a,snapshot:t,getRows:o=>Array.isArray(o)?o:(o==null?void 0:o.value)||(o==null?void 0:o.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>oe.getCatalog()})}}}function Fs({onClose:e,onIncidentCreated:a}){let t=!1;async function o(l){l.preventDefault();const d=l.target,r=d.incident_code.value.trim().toUpperCase(),c=d.severity.value,n=d.component.value.trim(),v=d.details.value.trim();if(!r||!n||!v){alert("Please fill in Code, Component, and Details.");return}t=!0;try{await oe.createIncident({incident_code:r,severity:c,component:n,details:v}),_.invalidate(H.all),a==null||a(),e()}catch(m){alert("Failed to report incident: "+m.message)}finally{t=!1}}const s=p`
    <form id="report-incident-form" @submit=${o}>
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
  `,i=p`
    <div class="u-flex u-gap-2 u-justify-end">
      ${$({label:"Cancel",variant:"secondary",onClick:e})}
      ${$({label:"Report Incident",variant:"save",type:"submit",loading:t,onClick:()=>{const l=document.getElementById("report-incident-form");l&&l.requestSubmit()}})}
    </div>
  `;return J({title:"Report System Incident",size:"md",onClose:e,body:s,footer:i})}function qs({onClose:e,onErrorCreated:a,initialData:t=null}){let o=!1;const s=!!(t&&t.ERROR_CODE);async function i(r){var b;r.preventDefault();const c=r.target,n=c.error_code.value.trim().toUpperCase(),v=c.category.value.trim().toUpperCase(),m=c.severity.value,g=c.description.value.trim(),u=c.trigger_condition.value.trim(),f=c.remedy.value.trim();if(!n||!v||!g){alert("Please fill in Error Code, Category, and Description.");return}if(!s){const y=_.read(H.catalog),w=(Array.isArray(y==null?void 0:y.data)?y.data:((b=y==null?void 0:y.data)==null?void 0:b.items)??[]).find(x=>x.ERROR_CODE===n);if(w&&!await $e({title:"Error Template Already Exists",message:`An error template with code '${n}' is already registered under category '${w.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}o=!0;try{await oe.upsertError({error_code:n,category:v,severity:m,description:g,trigger_condition:u,remedy:f}),_.invalidate(H.catalog),a==null||a(),e()}catch(y){alert("Failed to save error template: "+y.message)}finally{o=!1}}const l=p`
    <form id="add-error-form" @submit=${i}>
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
            ?readonly=${s}
            style="${s?"background: var(--color-bg-surface); opacity: 0.8;":""}"
            required 
          />
          ${s?p`<small class="u-text-muted u-text-xs">Error code cannot be changed when editing.</small>`:""}
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
  `,d=p`
    <div class="u-flex u-gap-2 u-justify-end">
      ${$({label:"Cancel",variant:"secondary",onClick:e})}
      ${$({label:s?"Update Error":"Register Error",variant:"save",type:"submit",loading:o,onClick:()=>{const r=document.getElementById("add-error-form");r&&r.requestSubmit()}})}
    </div>
  `;return J({title:s?`Edit Error: ${t.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:l,footer:d})}function Ws(){const e=re({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),a=Ge({resolved:!1}),t=Ge({resolved:!0}),o=Us({onEditError:r=>e.set(c=>({...c,isAddErrorModalOpen:!0,editingError:r}))});let s,i,l,d;return{mount(r){s=_.subscribe(H.list(!1),()=>r()),i=_.subscribe(H.list(!0),()=>r()),l=_.subscribe(H.catalog,()=>r()),d=e.subscribe(()=>r()),oe.getIncidents(!1),oe.getIncidents(!0),oe.getCatalog()},unmount(){s&&s(),i&&i(),l&&l(),d&&d()},view(){const{activeTab:r,isReportModalOpen:c,isAddErrorModalOpen:n,editingError:v}=e.get(),m=(g,u,f)=>{const b=r===g;return p`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(x=>({...x,activeTab:g}))}
          >
            ${te({name:u,size:16})}
            <span>${f}</span>
          </button>
        `};return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${m("active","alert","Active Incidents")}
              ${m("resolved","check","Resolved")}
              ${m("catalog","search","Error Index Catalog")}
            </div>
            
            ${$(r==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(g=>({...g,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(g=>({...g,isReportModalOpen:!0}))})}
          </div>
          
          ${r==="active"?a.view():E}
          ${r==="resolved"?t.view():E}
          ${r==="catalog"?o.view():E}

          <!-- Modals -->
          ${c?Fs({onClose:()=>e.set(g=>({...g,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):E}

          ${n?qs({onClose:()=>e.set(g=>({...g,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:v}):E}
        </div>
      `}}}const je={all:["gitops"]},Ks={getGitOps:e=>_.load(je.all,()=>O.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function Gs(){let e;return{mount(a){e=_.subscribe(je.all,()=>a()),Ks.getGitOps()},unmount(){e&&e()},view(){const a=_.read(je.all),{status:t,data:o,error:s,isFetching:i}=a;if(t==="loading"&&!o)return p`<p class="u-text-muted">Loading GitOps status...</p>`;if(t==="error"&&!o)return p`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const l=(o==null?void 0:o.telemetry)||{};return p`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${l.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${l.mounted?"MOUNTED":"NOT MOUNTED"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${l.branch||"N/A"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${l.short_commit||"N/A"} <span class="u-text-muted">(${l.commit||"N/A"})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${l.clean?"u-text-success":"u-text-danger"}">${l.clean?"✓ Clean":"x Dirty"}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${l.last_commit||"N/A"}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `}}}const A={all:["settings"]},Ys={getSettings:e=>_.load(A.all,()=>O.get("/api/v1/settings"),e),saveConfig:e=>O.post("/api/v1/settings/config",e),triggerSweep:()=>O.post("/api/v1/settings/sweep"),triggerBackup:()=>O.post("/api/v1/settings/backup")};function Hs(e,a={}){const t=Object.keys(a),o=()=>{e.set(l=>({...l,isServiceModalOpen:!0,editingServiceId:null}))},s=l=>{if(!confirm(`Delete service '${l}' and remove it from assigned stages?`))return;const d=_.read(A.all);if(!(d!=null&&d.data))return;const r={...d.data.services||{}};delete r[l];const c=(d.data.stages||[]).map(n=>{const v={...n.service_mapping_scopes||{}};return delete v[l],{...n,service_ids:(n.service_ids||[]).filter(m=>m!==l),service_mapping_scopes:v}});_.setData(A.all,()=>({...d.data,services:r,stages:c})),e.set(n=>({...n,isDirty:!0}))},i=(l,d,r)=>{var v;const c=((v=d.field_mappings)==null?void 0:v.length)||0,n=Object.keys(d.enrichment_endpoints||{}).join(", ");return p`
      <div style="padding: var(--space-4); border-bottom: ${r?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${d.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.toUpperCase()}</span>
            ${d.enabled?p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
          </div>
          <div class="u-flex u-gap-2">
            ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(m=>({...m,isServiceModalOpen:!0,editingServiceId:l}))})}
            ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>s(l)})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${d.base_url||"N/A"} | API Key: ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${c}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${n||"none"}</span>
        </div>
      </div>
    `};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${$({label:"+ Add Service",variant:"add",size:"sm",onClick:o})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${t.length===0?p`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:E}
        ${t.map((l,d)=>i(l,a[l],d===t.length-1))}
      </div>
    </div>
  `}function Js({store:e,getDraftForm:a,currentAllowedEvents:t,discoveredEvents:o,isDiscovering:s,discoveryError:i}){const l=async()=>{var m;const c=a(),n=c.id.trim(),v=c.poll_endpoint.trim()||"/api/v3/history";if(!n){alert("Service ID is required before discovering events.");return}e.set(g=>({...g,serviceModalDraft:c,isDiscoveringEvents:!0,discoveryEventsError:null}));try{const g=await O.post("/api/v1/pipeline/sample",{service_id:n,endpoint:v});if(g&&g.success===!1){e.set(y=>({...y,serviceModalDraft:a(),isDiscoveringEvents:!1,discoveryEventsError:g.error||"Failed to discover events from API."}));return}let u=[];Array.isArray(g==null?void 0:g.sample_payload)?u=g.sample_payload:Array.isArray((m=g==null?void 0:g.sample_payload)==null?void 0:m.records)?u=g.sample_payload.records:g!=null&&g.sample_payload&&typeof g.sample_payload=="object"&&(u=[g.sample_payload]);const f=new Set;for(const y of u)y&&typeof y=="object"&&(y.eventType?f.add(String(y.eventType)):y.event_type?f.add(String(y.event_type)):y.type&&f.add(String(y.type)));const b=Array.from(f);e.set(y=>({...y,serviceModalDraft:a(),isDiscoveringEvents:!1,serviceDiscoveredEvents:b,discoveryEventsError:b.length===0?`No eventType found in sample payload (${u.length} records).`:null}))}catch(g){e.set(u=>({...u,serviceModalDraft:a(),isDiscoveringEvents:!1,discoveryEventsError:g.message||"Error communicating with sample endpoint."}))}},d=c=>{const n=a(),v=t.includes(c)?t.filter(m=>m!==c):[...t,c];e.set(m=>({...m,serviceModalDraft:n,serviceAllowedEvents:v}))},r=Array.from(new Set([...t,...o]));return p`
    <div class="form-group u-mb-0">
      <div class="u-flex u-justify-between u-items-center u-mb-2">
        <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
        ${$({label:s?"Discovering...":"Discover Events from API",variant:"secondary",size:"sm",loading:s,disabled:s,onClick:l})}
      </div>
      <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in assigned pipelines when event filtering is used. Leave empty to accept all events.</p>

      ${i?p`<div class="u-text-danger u-text-xs u-mb-2">${i}</div>`:E}

      ${r.length>0?p`
        <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
          ${r.map(c=>{const n=t.includes(c);return p`
              <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${n?"var(--color-accent)":"var(--color-border)"}; cursor: pointer; user-select: none;">
                <input
                  type="checkbox"
                  .checked=${n}
                  @change=${()=>d(c)}
                >
                <span class="font-mono u-text-xs" style="color: ${n?"var(--color-accent)":"var(--color-text)"}; font-weight: ${n?"600":"normal"};">
                  ${c}
                </span>
              </label>
            `})}
        </div>
      `:p`
        <div class="u-text-muted u-text-sm">Click 'Discover Events from API' to fetch supported eventTypes from the primary poll endpoint.</div>
      `}
    </div>
  `}function Qs(e){var M;const a=e.get(),t=_.read(A.all),o=((M=t==null?void 0:t.data)==null?void 0:M.services)||{},s=a.editingServiceId?o[a.editingServiceId]:null,i=a.serviceAllowedEvents!==void 0?a.serviceAllowedEvents:(s==null?void 0:s.allowed_event_types)||[],l=a.serviceDiscoveredEvents||[],d=a.isDiscoveringEvents||!1,r=a.discoveryEventsError||null,c=()=>{var Q,Z;const D=document.getElementById("srv-name"),N=document.getElementById("srv-id"),L=document.getElementById("srv-url"),R=document.getElementById("srv-api"),V=document.getElementById("srv-endpoint"),q=document.getElementById("srv-pipeline"),B=document.getElementById("srv-enrich"),F=document.getElementById("chk-service-enabled");return{name:D?D.value:(s==null?void 0:s.name)||"",id:N?N.value:a.editingServiceId||"",base_url:L?L.value:(s==null?void 0:s.base_url)||"",api_key:R?R.value:(s==null?void 0:s.api_key)||"",poll_endpoint:V?V.value:(s==null?void 0:s.poll_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pipeline_key_template:q?q.value:(s==null?void 0:s.pipeline_key_template)||"{service}:{id}",enrichments:B?B.value:s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([X,ie])=>`${X}: ${ie}`).join(`
`):"",fallback_lookup_column:(((Q=document.getElementById("srv-fallback-col"))==null?void 0:Q.value)||"").trim()||null,fallback_lookup_field:(((Z=document.getElementById("srv-fallback-field"))==null?void 0:Z.value)||"").trim()||null,enabled:F?F.checked:s?s.enabled:!0}},n=()=>{e.set(D=>({...D,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))},v=()=>{var D,N,L,R,V,q,B,F,Q,Z;try{const X=(((D=document.getElementById("srv-id"))==null?void 0:D.value)||"").trim();if(!X){alert("Service ID is required");return}const ie=(((N=document.getElementById("srv-enrich"))==null?void 0:N.value)||"").trim(),pe={};ie&&ie.split(`
`).forEach(le=>{const me=le.split(":");me.length>=2&&(pe[me[0].trim()]=me.slice(1).join(":").trim())});const Te={name:(((L=document.getElementById("srv-name"))==null?void 0:L.value)||"").trim()||X,base_url:(((R=document.getElementById("srv-url"))==null?void 0:R.value)||"").trim(),api_key:(((V=document.getElementById("srv-api"))==null?void 0:V.value)||"").trim(),poll_endpoint:(((q=document.getElementById("srv-endpoint"))==null?void 0:q.value)||"").trim(),pipeline_key_template:(((B=document.getElementById("srv-pipeline"))==null?void 0:B.value)||"").trim(),fallback_lookup_column:(((F=document.getElementById("srv-fallback-col"))==null?void 0:F.value)||"").trim()||null,fallback_lookup_field:(((Q=document.getElementById("srv-fallback-field"))==null?void 0:Q.value)||"").trim()||null,enrichment_endpoints:pe,enabled:((Z=document.getElementById("chk-service-enabled"))==null?void 0:Z.checked)??!0,allowed_event_types:i,field_mappings:(s==null?void 0:s.field_mappings)||[]},ve={...o,[X]:Te};a.editingServiceId&&a.editingServiceId!==X&&delete ve[a.editingServiceId],_.setData(A.all,()=>({...t.data,services:ve})),e.set(le=>({...le,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))}catch(X){alert("Error saving service: "+X.stack)}},m=D=>{const N=c(),R={sonarr:{name:"Sonarr",id:"sonarr",ep:"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pk:"{service}:{id}",enr:`episode: /api/v3/episode/{episodeId}
series: /api/v3/series/{seriesId}`},radarr:{name:"Radarr",id:"radarr",ep:"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pk:"{service}:{id}",enr:"movie: /api/v3/movie/{movieId}"},jellyfin:{name:"Jellyfin",id:"jellyfin",ep:"/Items?Recursive=true",pk:"{service}:{Id}",enr:""},shoko:{name:"Shoko",id:"shoko",ep:"/api/v3/Series",pk:"{service}:{id}",enr:""}}[D];R&&(N.name=N.name||R.name,N.id=N.id||R.id,N.poll_endpoint=R.ep,N.pipeline_key_template=R.pk,R.enr&&(N.enrichments=R.enr)),e.set(V=>({...V,serviceModalDraft:N}))},g=a.serviceModalDraft,u=g?g.name:(s==null?void 0:s.name)||"",f=g?g.id:a.editingServiceId||"",b=g?g.base_url:(s==null?void 0:s.base_url)||"",y=g?g.api_key:(s==null?void 0:s.api_key)||"",I=g?g.poll_endpoint:(s==null?void 0:s.poll_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",w=g?g.pipeline_key_template:(s==null?void 0:s.pipeline_key_template)||"{service}:{id}",x=g?g.enrichments:s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([D,N])=>`${D}: ${N}`).join(`
`):"",k=(g==null?void 0:g.fallback_lookup_column)??((s==null?void 0:s.fallback_lookup_column)||""),C=(g==null?void 0:g.fallback_lookup_field)??((s==null?void 0:s.fallback_lookup_field)||""),h=g?g.enabled:s?s.enabled:!0,T=p`
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${$({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>m("sonarr")})}
      ${$({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>m("radarr")})}
      ${$({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>m("jellyfin")})}
      ${$({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>m("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, Custom Service..." .value=${u}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, custom_api" autocomplete="off" .value=${f} @input=${D=>{D.target.value=D.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique lowercase identifier.</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${b}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${y}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>

      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${I}>
        <small class="u-text-muted">Supports relative lookback placeholders: <code>{lookback_seconds}</code>, <code>{lookback_minutes}</code>, <code>{lookback_iso}</code>, <code>{cutoff_iso}</code>.</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${w}>
          <small class="u-text-muted">Unique tracking identifier (e.g. <code>{service}:{id}</code> or <code>{data.path}</code>).</small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${x}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line.</small>
        </div>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Fallback Match Column (Optional)</label>
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${k}>
          <small class="u-text-muted">DB column to search if primary key cannot be resolved on mutation/deletion events.</small>
        </div>
        <div class="form-group">
          <label>Fallback Source Field (Optional)</label>
          <input type="text" id="srv-fallback-field" class="form-input font-mono" placeholder="sourceTitle" .value=${C}>
          <small class="u-text-muted">Incoming event payload field to match against the DB column.</small>
        </div>
      </div>

      ${Js({store:e,getDraftForm:c,currentAllowedEvents:i,discoveredEvents:l,isDiscovering:d,discoveryError:r})}
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${h}>
      <label for="chk-service-enabled">Enable service for assigned stages</label>
    </div>
  `,S=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:n})}
      ${$({label:a.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:v})}
    </div>
  `;return J({title:a.editingServiceId?"Edit Service":"Register Service",size:"lg",onClose:n,body:T,footer:S})}function Xs(e,a={},t=[],o=30){const s=Object.keys(a).length>0?a:{default:{id:"default",name:"Default Pipeline",description:"Primary telemetry pipeline",table_name:"PIPELINE_DEFAULT",retention_days:null,enabled:!0,column_order:[]}},i=Object.keys(s),l=()=>{e.set(c=>({...c,isPipelineModalOpen:!0,editingPipelineId:null}))},d=c=>{if(c==="default"){alert("The default pipeline cannot be deleted.");return}if(!confirm(`Delete pipeline '${c}' from configuration?`))return;const n=_.read(A.all);if(!(n!=null&&n.data))return;const v={...n.data.pipelines||{}};delete v[c];const m=(n.data.stages||[]).map(g=>{const u=(g.pipeline_ids||["default"]).filter(f=>f!==c);return{...g,pipeline_ids:u.length>0?u:["default"]}});_.setData(A.all,()=>({...n.data,pipelines:v,stages:m})),e.set(g=>({...g,isDirty:!0}))},r=(c,n,v)=>{const m=n.table_name||`PIPELINE_${c.toUpperCase().replace(/[^A-Z0-9_]/g,"_")}`,g=t.filter(f=>(f.pipeline_ids||["default"]).includes(c)),u=g.map(f=>f.name||f.id).join(", ");return p`
      <div style="padding: var(--space-4); border-bottom: ${v?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${n.name||c}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${c}</span>
            <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">TABLE: ${m}</span>
            ${n.enabled!==!1?p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: var(--color-text-secondary); font-weight: 600;">
              ${n.retention_days?`RETENTION: ${n.retention_days}D (OVERRIDE)`:`RETENTION: GLOBAL (${o}D)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(f=>({...f,isPipelineModalOpen:!0,editingPipelineId:c}))})}
            ${$({label:"Delete",variant:"delete",size:"sm",disabled:c==="default",onClick:()=>d(c)})}
          </div>
        </div>
        <div class="u-text-sm u-text-muted u-mb-1">${n.description||"No description provided."}</div>
        <div class="u-text-xs u-font-mono u-text-muted">
          Assigned Stages (${g.length}): <span style="color: var(--color-text);">${u||"none"}</span>
        </div>
      </div>
    `};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Telemetry Pipelines</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Manage isolated pipeline tables, retention lifecycles, and multi-stage routing targets.</p>
        </div>
        ${$({label:"+ Add Pipeline",variant:"add",size:"sm",onClick:l})}
      </div>

      <div class="u-flex u-flex-col">
        ${i.map((c,n)=>r(c,s[c],n===i.length-1))}
      </div>
    </div>
  `}function Zs(e){var m,g;const a=e.get(),t=_.read(A.all),o=((m=t==null?void 0:t.data)==null?void 0:m.pipelines)||{},s=((g=t==null?void 0:t.data)==null?void 0:g.retention_days)||30,i=a.editingPipelineId,l=i?o[i]:null,d=a.pipelineInheritRetention??(l?l.retention_days==null:!0),r=()=>{e.set(u=>({...u,isPipelineModalOpen:!1,editingPipelineId:null,pipelineInheritRetention:null}))},c=()=>{var T,S,M,D,N,L;const u=(((T=document.getElementById("pipeline-id"))==null?void 0:T.value)||"").trim().toLowerCase().replace(/[^a-z0-9_-]/g,"");if(!u){alert("Pipeline ID is required.");return}const f=(((S=document.getElementById("pipeline-name"))==null?void 0:S.value)||"").trim()||u,b=(((M=document.getElementById("pipeline-desc"))==null?void 0:M.value)||"").trim(),y=((D=document.getElementById("chk-pipeline-inherit-retention"))==null?void 0:D.checked)??!0,I=parseInt(((N=document.getElementById("pipeline-retention"))==null?void 0:N.value)||"",10),w=y?null:Number.isFinite(I)&&I>=1?I:s,x=((L=document.getElementById("chk-pipeline-enabled"))==null?void 0:L.checked)??!0,k=`PIPELINE_${u.toUpperCase().replace(/[^A-Z0-9_]/g,"_")}`,C={id:u,name:f,description:b,table_name:(l==null?void 0:l.table_name)||k,retention_days:w,enabled:x,column_order:(l==null?void 0:l.column_order)||[]},h={default:o.default||{id:"default",name:"Default Pipeline",description:"Primary telemetry pipeline",table_name:"PIPELINE_DEFAULT",retention_days:null,enabled:!0,column_order:[]},...o,[u]:C};i&&i!==u&&i!=="default"&&delete h[i],_.setData(A.all,()=>({...t.data,pipelines:h})),e.set(R=>({...R,isDirty:!0,isPipelineModalOpen:!1,editingPipelineId:null,pipelineInheritRetention:null}))},n=p`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Pipeline ID (Slug)</label>
        <input
          type="text"
          id="pipeline-id"
          class="form-input font-mono"
          placeholder="default, media, security"
          autocomplete="off"
          .value=${(l==null?void 0:l.id)||i||""}
          ?disabled=${!!i}
          @input=${u=>{u.target.value=u.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}
        >
        <small class="u-text-muted">Creates SQLite table <code>PIPELINE_&lt;SLUG&gt;</code> automatically on save.</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input
          type="text"
          id="pipeline-name"
          class="form-input"
          placeholder="Media Ingestion Pipeline"
          .value=${(l==null?void 0:l.name)||""}
        >
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input
        type="text"
        id="pipeline-desc"
        class="form-input"
        placeholder="Tracks arrival, recognition, and library indexing for media events"
        .value=${(l==null?void 0:l.description)||""}
      >
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input
          type="checkbox"
          id="chk-pipeline-inherit-retention"
          .checked=${d}
          @change=${u=>e.set(f=>({...f,pipelineInheritRetention:u.target.checked}))}
        >
        <label for="chk-pipeline-inherit-retention">
          <strong>Inherit Global Data Retention</strong> (${s} days)
        </label>
      </div>
      <div style="display: ${d?"none":"block"};" class="u-mt-2">
        <label class="form-label u-text-sm">Custom Retention Window (Days)</label>
        <input
          type="number"
          id="pipeline-retention"
          class="form-input font-mono"
          min="1"
          max="3650"
          .value=${(l==null?void 0:l.retention_days)??s}
        >
        <small class="u-text-muted">Only rows in <code>STATUS = 'SINK'</code> with <code>LAST_UPDATED</code> older than this window are pruned.</small>
      </div>
    </div>

    <div class="form-checkbox">
      <input
        type="checkbox"
        id="chk-pipeline-enabled"
        .checked=${l?l.enabled!==!1:!0}
      >
      <label for="chk-pipeline-enabled"><strong>Enable this pipeline</strong> (Active for stage ingestion and evaluation)</label>
    </div>
  `,v=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:r})}
      ${$({label:i?"Save Pipeline":"Create Pipeline",variant:"save",onClick:c})}
    </div>
  `;return J({title:i?`Edit Pipeline (${i})`:"Create Telemetry Pipeline",size:"md",onClose:r,body:n,footer:v})}function ea({checked:e=!1,onChange:a,label:t=""}){return p`
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
      <input type="checkbox" .checked=${e} @change=${o=>a(o.target.checked)}>
      <span class="slider"></span>
      ${t?p`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${t}</span>`:""}
    </label>
  `}function ta(e,a=[],t=300){const o=()=>{e.set(d=>({...d,isStageModalOpen:!0,editingStageId:null,stageIsRoot:null,stageIsSink:null,stageInheritInterval:null}))},s=(d,r)=>{const c=_.read(A.all);if(!c||!c.data)return;const n=[...c.data.stages],v=d+r;v<0||v>=n.length||([n[d],n[v]]=[n[v],n[d]],_.setData(A.all,()=>({...c.data,stages:n})),e.set(m=>({...m,isDirty:!0})))},i=d=>{if(!confirm(`Delete stage '${d}'?`))return;const r=_.read(A.all);if(!(r!=null&&r.data))return;const c=(r.data.stages||[]).filter(n=>n.id!==d);_.setData(A.all,()=>({...r.data,stages:c})),e.set(n=>({...n,isDirty:!0}))},l=d=>{const r=!d.start_condition,c=!d.complete_condition;return r&&c?{label:"ROOT + SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)",isPassiveSink:!1}:r?{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)",isPassiveSink:!1}:c?{label:"SINK (PASSIVE)",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)",isPassiveSink:!0}:{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)",isPassiveSink:!1}};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages, execution intervals, and multi-pipeline routing. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${$({label:"+ Add Stage",variant:"add",size:"sm",onClick:o})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${a.length===0?p`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:a.map((d,r)=>{const c=l(d),n=d.pipeline_ids&&d.pipeline_ids.length>0?d.pipeline_ids:["default"],v=d.service_ids||[],m=c.isPassiveSink?"PASSIVE RETENTION (NO POLL)":d.interval_seconds?`EVERY ${d.interval_seconds}S`:`GLOBAL (${t}S)`;return p`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${c.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${c.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between" style="flex-wrap: wrap; gap: var(--space-2);">
                  <div class="u-flex u-items-center u-gap-3" style="flex-wrap: wrap;">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${d.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${d.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${c.bg}; color: ${c.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${c.label}</span>
                    <span class="u-font-mono u-text-xs" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--color-border);">
                      PIPELINES: ${n.join(", ")}
                    </span>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text); font-weight: 600;">
                      ${m}
                    </span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${ea({checked:d.enabled,label:d.enabled?"ACTIVE":"INACTIVE",onChange:g=>{const u={..._.read(A.all).data},f=u.stages.find(b=>b.id===d.id);f&&(f.enabled=g,g&&!f.start_condition&&!f.last_activated_at&&(f.last_activated_at=new Date().toISOString()),_.setData(A.all,()=>u),e.set(b=>({...b,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${$({label:"▲",variant:"ghost",size:"sm",disabled:r===0,ariaLabel:"Move Up",onClick:()=>s(r,-1)})}
                      ${$({label:"▼",variant:"ghost",size:"sm",disabled:r===a.length-1,ariaLabel:"Move Down",onClick:()=>s(r,1)})}
                      ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(g=>({...g,isStageModalOpen:!0,editingStageId:d.id,stageIsRoot:null,stageIsSink:null,stageInheritInterval:null}))})}
                      ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>i(d.id)})}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">
                  ${d.description||"No description provided."}
                  <span class="u-font-mono u-text-xs u-ml-2" style="color: var(--color-text-secondary);">
                    | Services: ${v.length>0?v.join(", "):c.isPassiveSink?"passive updates only":"none"}
                  </span>
                </div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${d.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${d.start_condition?d.start_condition:"NULL (ROOT STAGE - Immediate Ingestion)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${d.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${d.complete_condition?d.complete_condition:"NULL (SINK STAGE - Retained Until Retention Window Expires)"}
                  </div>
                  ${!d.start_condition&&d.last_activated_at?p`
                    <div style="margin-top: 4px; color: var(--color-text-muted);">
                      <strong>CUTOFF:</strong> ${d.last_activated_at}
                    </div>
                  `:E}
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function Re(e,a){const t=document.querySelectorAll(`.stage-scope-col-${e}:checked`).length,o=document.getElementById(`stage-scope-status-${e}`);if(!o)return;const s=t>0&&t<a?`(${t} of ${a} active)`:"(All fields active by default)";o.setAttribute("data-status",s)}function sa(e,a,t){if(!e||e.length===0)return p`<span class="u-text-muted u-text-sm">No services configured.</span>`;const o=(t==null?void 0:t.service_mapping_scopes)||{};return p`
    <style>
      .stage-scope-status-badge::after {
        content: attr(data-status);
      }
    </style>
    <div class="u-flex u-flex-col u-gap-3">
      ${e.map(s=>{var n,v;const i=((n=t==null?void 0:t.service_ids)==null?void 0:n.includes(s))??!1,l=((v=a[s])==null?void 0:v.field_mappings)||[],d=o[s]||[],r=Array.isArray(d)&&d.length>0&&d.length<l.length,c=r?`(${d.length} of ${l.length} active)`:"(All fields active by default)";return p`
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <div class="u-flex u-items-center u-justify-between">
              <label class="form-checkbox" style="cursor: pointer; margin: 0;">
                <input type="checkbox" name="stage-service" value="${s}" ?checked=${i}>
                <span class="u-text-sm font-mono" style="font-weight: 600;">${s}</span>
              </label>
              ${l.length>0?p`<span class="u-text-xs u-text-muted font-mono stage-scope-status-badge" id="stage-scope-status-${s}" data-status="${c}"></span>`:E}
            </div>

            ${l.length>0?p`
              <details ?open=${r} style="margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px dashed var(--color-border);">
                <summary style="cursor: pointer; user-select: none;" class="u-text-xs u-text-muted">
                  <span>Configure Field Scope for <strong>${s}</strong></span>
                </summary>
                <div style="margin-top: var(--space-2);">
                  <div class="u-flex u-items-center u-justify-between u-mb-2">
                    <p class="u-text-xs u-text-muted" style="margin: 0;">
                      Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage.
                    </p>
                    <div class="u-flex u-gap-1">
                      ${$({label:"Select All",variant:"ghost",size:"sm",onClick:m=>{m.preventDefault(),document.querySelectorAll(`.stage-scope-col-${s}`).forEach(g=>{g.checked=!0}),Re(s,l.length)}})}
                      ${$({label:"Clear All",variant:"ghost",size:"sm",onClick:m=>{m.preventDefault(),document.querySelectorAll(`.stage-scope-col-${s}`).forEach(g=>{g.checked=!1}),Re(s,l.length)}})}
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-2);">
                    ${l.map(m=>{const g=(m.target_column||"").toUpperCase(),u=r&&d.map(f=>f.toUpperCase()).includes(g);return p`
                        <label class="form-checkbox u-flex u-items-center u-gap-2" style="font-size: 0.8rem; background: var(--color-bg-card); padding: 4px 6px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
                          <input type="checkbox"
                            class="stage-scope-col stage-scope-col-${s}"
                            data-service="${s}"
                            value="${g}"
                            ?checked=${u}
                            @change=${()=>Re(s,l.length)}>
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <strong class="font-mono">${m.target_column}</strong>
                            <small class="u-text-muted font-mono">(${m.source_field})</small>
                          </span>
                        </label>
                      `})}
                  </div>
                </div>
              </details>
            `:E}
          </div>
        `})}
    </div>
  `}function aa(e,a){var o,s;const t={};for(const i of e){const l=((s=(o=a[i])==null?void 0:o.field_mappings)==null?void 0:s.length)||0;if(l===0)continue;const d=Array.from(document.querySelectorAll(`.stage-scope-col-${i}:checked`));d.length>0&&d.length<l&&(t[i]=d.map(r=>r.value.toUpperCase()))}return t}function Ye(e){if(!e)return"";try{const a=new Date(e);if(isNaN(a.getTime()))return"";const t=o=>String(o).padStart(2,"0");return`${a.getFullYear()}-${t(a.getMonth()+1)}-${t(a.getDate())}T${t(a.getHours())}:${t(a.getMinutes())}`}catch{return""}}async function He(e){var t;const a=(((t=document.getElementById(e))==null?void 0:t.value)||"").trim();if(!a){alert("Expression is empty!");return}try{const o=await O.post("/api/v1/settings/test-predicate",{expression:a});alert(o.valid?"✓ Syntax Valid!":"✗ Syntax Error: "+o.message)}catch(o){alert("Validation failed: "+o.message)}}function na(e){var x,k,C,h,T;const a=e.get(),t=_.read(A.all),o=((x=t==null?void 0:t.data)==null?void 0:x.stages)||[],s=((k=t==null?void 0:t.data)==null?void 0:k.global_poll_interval_seconds)||300,i=((C=t==null?void 0:t.data)==null?void 0:C.pipelines)||{},l=Object.keys(i).length>0?i:{default:{id:"default",name:"Default Pipeline"}},d=Object.keys(l),r=((h=t==null?void 0:t.data)==null?void 0:h.services)||{},c=Object.keys(r),n=a.editingStageId?o.find(S=>S.id===a.editingStageId):null,v=a.stageIsSink??(n?!n.complete_condition:!1),m=a.stageIsRoot??(n?!n.start_condition:!1),g=!m&&v,u=a.stageInheritInterval??(n?n.interval_seconds==null:!0),f=(T=n==null?void 0:n.pipeline_ids)!=null&&T.length?n.pipeline_ids:["default"],b=()=>{e.set(S=>({...S,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,stageInheritInterval:null,editingStageId:null}))},y=()=>{var S,M,D,N,L,R,V,q,B,F;try{const Q=(((S=document.getElementById("stage-id"))==null?void 0:S.value)||"").trim();if(!Q){alert("Stage ID is required");return}let Z=null;if(m){const U=(M=document.getElementById("stage-last-activated"))==null?void 0:M.value;if(U)try{Z=new Date(U).toISOString()}catch{Z=(n==null?void 0:n.last_activated_at)||null}}const X=Array.from(document.querySelectorAll('input[name="stage-pipeline"]:checked')).map(U=>U.value),ie=X.length>0?X:["default"],pe=g?[]:Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(U=>U.value),Te=g?{}:aa(pe,r);let ve=null;if(!g&&!u){const U=parseInt(((D=document.getElementById("stage-interval"))==null?void 0:D.value)||"",10);ve=Number.isFinite(U)&&U>=10?U:s}const le={id:Q,name:(((N=document.getElementById("stage-name"))==null?void 0:N.value)||"").trim()||Q,description:(((L=document.getElementById("stage-desc"))==null?void 0:L.value)||"").trim(),pipeline_ids:ie,service_ids:pe,service_mapping_scopes:Te,interval_seconds:ve,start_condition:m?null:((R=document.getElementById("stage-start"))==null?void 0:R.value.trim())||null,complete_condition:v?null:((V=document.getElementById("stage-complete"))==null?void 0:V.value.trim())||null,grace_period_minutes:parseInt(((q=document.getElementById("stage-grace"))==null?void 0:q.value)||"0",10)||0,timeout_minutes:parseInt(((B=document.getElementById("stage-watchdog"))==null?void 0:B.value)||"0",10)||0,enabled:((F=document.getElementById("chk-stage-enabled"))==null?void 0:F.checked)??!1,order:n?n.order:o.length+1,last_activated_at:Z},me=a.editingStageId?o.map(U=>U.id===a.editingStageId?le:U):[...o,le];_.setData(A.all,()=>({...t.data,stages:me})),e.set(U=>({...U,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,stageInheritInterval:null,editingStageId:null}))}catch(Q){alert("Error in Save Stage: "+Q.stack)}},I=p`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(n==null?void 0:n.id)||""} ?disabled=${!!n} @input=${S=>{S.target.value=S.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Primary Services)" .value=${(n==null?void 0:n.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary event arrival and custom field discovery" .value=${(n==null?void 0:n.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Pipelines</label>
      <div class="u-flex u-gap-2" style="flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        ${d.map(S=>{var M;return p`
          <label class="form-checkbox u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
            <input type="checkbox" name="stage-pipeline" value="${S}" ?checked=${f.includes(S)}>
            <span class="font-mono u-text-xs"><strong>${((M=l[S])==null?void 0:M.name)||S}</strong> (${S})</span>
          </label>
        `})}
      </div>
      <small class="u-text-muted">Select one or more pipelines where this stage will evaluate and store records.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${m} @change=${S=>e.set(M=>({...M,stageIsRoot:S.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and autonomously ingest new rows into assigned pipeline tables.</p>
      
      <div style="display: ${m?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(n==null?void 0:n.start_condition)||""}>
          ${$({label:"Test Syntax",variant:"test",size:"sm",onClick:()=>He("stage-start")})}
        </div>
      </div>

      <div style="display: ${m?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${Ye(n?n.last_activated_at:m?new Date().toISOString():"")}>
          ${$({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const S=document.getElementById("stage-last-activated");S&&(S.value=Ye(new Date().toISOString()))}})}
          ${$({label:"Clear",variant:"secondary",size:"sm",onClick:()=>{const S=document.getElementById("stage-last-activated");S&&(S.value="")}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${v} @change=${S=>e.set(M=>({...M,stageIsSink:S.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Retention Stage</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">
        ${m&&v?p`<strong>Root + Sink Mode:</strong> Actively polls assigned services and ingests items directly into <code>STATUS = 'SINK'</code> for retention monitoring.`:p`Downstream Sink stages are <strong>Passive Collectors</strong>: they do not run an active polling loop, receive passive updates by <code>PIPELINE_KEY</code>, and retain items until <code>retention_days</code> expires since <code>LAST_UPDATED</code>.`}
      </p>
      
      <div style="display: ${v?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(n==null?void 0:n.complete_condition)||""}>
          ${$({label:"Test Syntax",variant:"test",size:"sm",onClick:()=>He("stage-complete")})}
        </div>
      </div>
    </div>

    ${g?E:p`
      <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
        <div class="form-checkbox u-mb-2">
          <input type="checkbox" id="chk-stage-inherit-interval" .checked=${u} @change=${S=>e.set(M=>({...M,stageInheritInterval:S.target.checked}))}>
          <label for="chk-stage-inherit-interval"><strong>Inherit Global Stage Interval</strong> (${s}s)</label>
        </div>
        <div style="display: ${u?"none":"block"};" class="u-mt-2">
          <label class="form-label u-text-sm">Stage Execution Interval (Seconds)</label>
          <input type="number" id="stage-interval" class="form-input font-mono" min="10" max="86400" .value=${(n==null?void 0:n.interval_seconds)??s}>
          <small class="u-text-muted">All services assigned to this stage are polled on this cycle for their scoped fields.</small>
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label>Assigned Services & Monitored Field Scopes</label>
        ${sa(c,r,n)}
        <small class="u-text-muted u-mt-1" style="display: block;">Select services operating in this stage and restrict which mapped columns are evaluated/updated.</small>
      </div>
    `}

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(n==null?void 0:n.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(n==null?void 0:n.timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${n?n.enabled:!0}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,w=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:b})}
      ${$({label:a.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:y})}
    </div>
  `;return J({title:"Configure DAG Stage",size:"lg",onClose:b,body:I,footer:w})}function oa(e,a={}){const t=Object.keys(a),o=e.get().selectedMappingService||t[0]||"",s=()=>{e.set(n=>({...n,isSampleApiModalOpen:!0,selectedMappingService:o}))},i=()=>{e.set(n=>({...n,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},l=(n,v)=>{e.set(m=>({...m,isMappingModalOpen:!0,editingMapping:{...n},editingMappingIndex:v}))},d=(n,v)=>{const g={..._.read(A.all).data},u=g.services[o].field_mappings,f=n+v;if(f<0||f>=u.length)return;const b=u[n];u[n]=u[f],u[f]=b,_.setData(A.all,()=>g),e.set(y=>({...y,isDirty:!0}))},r=n=>{if(confirm("Are you sure you want to delete this mapping?")){const m={..._.read(A.all).data};m.services[o].field_mappings.splice(n,1),_.setData(A.all,()=>m),e.set(g=>({...g,isDirty:!0}))}},c=()=>p`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${n=>e.set(v=>({...v,selectedMappingService:n.target.value}))}
        >
          ${t.map(n=>p`<option value="${n}" ?selected=${n===o}>${a[n].name}</option>`)}
        </select>
      </div>
    `;return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Field Mappings & Transformers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Extract payload attributes and map them to sanitized uppercase columns.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${$({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${$({label:"+ Add Mapping",variant:"add",size:"sm",onClick:i})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${t.length>0?c():E}
        
        ${(()=>{const n=a[o];return!n||!n.field_mappings||n.field_mappings.length===0?p`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:p`
            <div class="u-flex u-flex-col u-gap-3">
              ${n.field_mappings.map((v,m)=>p`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${v.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${v.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${v.data_type})</span>
                    ${v.transformer?p`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${v.transformer}</div>`:E}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${$({label:"▲",variant:"ghost",size:"sm",disabled:m===0,ariaLabel:"Move Up",onClick:()=>d(m,-1)})}
                    ${$({label:"▼",variant:"ghost",size:"sm",disabled:m===n.field_mappings.length-1,ariaLabel:"Move Down",onClick:()=>d(m,1)})}
                    ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>l(v,m)})}
                    ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>r(m)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function ra(e){const a=e.get(),t=a.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},o=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},s=()=>{const r={..._.read(A.all).data},c=Object.keys(r.services||{}),n=a.selectedMappingService||c[0];n&&(r.services[n].field_mappings||(r.services[n].field_mappings=[]),a.editingMappingIndex>=0?r.services[n].field_mappings[a.editingMappingIndex]=t:r.services[n].field_mappings.push(t),_.setData(A.all,()=>r),e.set(v=>({...v,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},i=p`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${a.selectedMappingService}">
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
        • Condition: <code>if 'anime' in value then 1 else 0</code><br>
        • Multi-branch: <code>if EVENT == 'DELETED' then 'DELETED' else if SHOKO_ID is not None then 'RECOGNIZED' else 'UNRECOGNIZED'</code><br>
        • Functions: <code>lower(value)</code> or <code>len(value) &gt; 0</code>
      </div>
      
      <div class="u-mt-3">
        <label class="form-label u-text-sm">Test Transformer with Sample Value or Context (JSON Object)</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="transformerTestVal" class="form-input font-mono" placeholder='{"SHOKO_ID": 2639, "ANIDB_ID": 4821}' style="flex: 1;">
          ${$({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let r;try{r=JSON.parse(d)}catch{r=d}try{const c={expression:t.transformer,sample_value:r};typeof r=="object"&&r!==null&&!Array.isArray(r)&&(c.context_dict=r);const n=await O.post("/api/v1/settings/test-transformer",c);n.valid?alert("Result: "+JSON.stringify(n.result)):alert("Error: "+n.message)}catch(c){alert("Error: "+c.message)}}})}
        </div>
      </div>
    </div>
  `,l=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:o})}
      ${$({label:"Save Mapping",variant:"save",onClick:s})}
    </div>
  `;return J({title:"Configure Field Mapping & Transformer",size:"lg",onClose:o,body:i,footer:l})}const ia={int:"INTEGER",float:"REAL",bool:"BOOLEAN",str:"TEXT",list:"TEXT",dict:"TEXT"};function la(e){var C;const a=e.get(),t=_.read(A.all),o=((C=t==null?void 0:t.data)==null?void 0:C.services)||{},s=Object.keys(o),i=a.selectedMappingService||s[0]||"",l=o[i],d=(l==null?void 0:l.name)||i||"No Service Selected",r=(l==null?void 0:l.poll_endpoint)||"/api/v3/history",c=a.sampleApiEndpoint!==void 0?a.sampleApiEndpoint:r,n=a.sampleApiLoading||!1,v=a.sampleApiError||null,m=a.sampleApiFields||null,g=(a.sampleApiFilter||"").trim().toLowerCase(),u=(a.sampleApiPrefix||"").trim(),f=()=>{e.set(h=>({...h,isSampleApiModalOpen:!1,sampleApiLoading:!1,sampleApiError:null,sampleApiFilter:"",sampleApiFields:null}))},b=async()=>{const h=document.getElementById("sample-endpoint-input"),T=h?h.value.trim():c;if(!i){alert("Please select or configure a service before sampling.");return}if(!T){alert("Please provide an endpoint to sample.");return}e.set(S=>({...S,sampleApiLoading:!0,sampleApiError:null,sampleApiEndpoint:T}));try{const S=await O.post("/api/v1/pipeline/sample",{service_id:i,endpoint:T});S&&S.success===!1?e.set(M=>({...M,sampleApiLoading:!1,sampleApiError:S.error||"Failed to sample API endpoint",sampleApiFields:[]})):e.set(M=>({...M,sampleApiLoading:!1,sampleApiFields:S.fields||[],sampleApiError:null}))}catch(S){e.set(M=>({...M,sampleApiLoading:!1,sampleApiError:S.message||"Error communicating with sample endpoint",sampleApiFields:[]}))}},y=h=>{const T=document.getElementById("sample-namespace-prefix"),S=T?T.value.trim():u,M=S?`${S}.${h.path}`:h.path,D=M.replace(/[^a-zA-Z0-9_]/g,"_").toUpperCase();e.set(N=>({...N,isSampleApiModalOpen:!1,isMappingModalOpen:!0,editingMapping:{source_field:M,target_column:D,data_type:ia[h.type]||"TEXT",transformer:""},editingMappingIndex:-1}))},I=m?m.filter(h=>g?h.path&&h.path.toLowerCase().includes(g)||h.type&&h.type.toLowerCase().includes(g)||h.sample&&String(h.sample).toLowerCase().includes(g):!0):[],w=()=>{const h=T=>p`
      <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-5); text-align: center;">
        <p class="u-text-muted u-text-sm" style="margin: 0;">${T}</p>
      </div>
    `;return n?h(p`Fetching and analyzing schema from <code>${c}</code>...`):v?p`
        <div style="background: color-mix(in srgb, var(--color-danger) 10%, transparent); border-radius: var(--radius-md); border: 1px solid var(--color-danger); padding: var(--space-4);">
          <strong class="u-text-danger u-text-sm">Sampling Error:</strong>
          <p class="u-text-danger u-text-xs u-mt-1 font-mono" style="margin-bottom: 0;">${v}</p>
        </div>
      `:m===null?h(p`Click <strong>Fetch Sample</strong> to inspect payload JSON schema and available keys.`):m.length===0?h("No fields discovered at this endpoint."):I.length===0?h(p`No fields match the current filter "<strong>${g}</strong>".`):p`
      <div style="max-height: 380px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
          <thead>
            <tr style="background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 1;">
              <th style="padding: 8px 12px; font-weight: 600;">Payload Path</th>
              <th style="padding: 8px 12px; font-weight: 600; width: 80px;">Type</th>
              <th style="padding: 8px 12px; font-weight: 600;">Sample Value</th>
              <th style="padding: 8px 12px; font-weight: 600; width: 95px; text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${I.map(T=>p`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                <td style="padding: 8px 12px;"><span class="font-mono" style="color: var(--color-text); font-weight: 600;">${T.path}</span></td>
                <td style="padding: 8px 12px;"><span class="font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 15%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${T.type}</span></td>
                <td style="padding: 8px 12px;"><span class="font-mono u-text-xs u-text-muted" style="word-break: break-all;">${T.sample}</span></td>
                <td style="padding: 8px 12px; text-align: right;">
                  ${$({label:"+ Map",variant:"secondary",size:"sm",onClick:()=>y(T)})}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${I.length} of ${m.length} discovered fields.
      </div>
    `},x=p`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 6px 10px; border-radius: 4px; font-weight: bold; white-space: nowrap;">
        ${d} (${i})
      </span>
      <input
        type="text"
        id="sample-endpoint-input"
        list="common-endpoints-list"
        class="form-input font-mono"
        placeholder="Select an endpoint below or type custom..."
        style="flex: 1;"
        .value=${c}
        @input=${h=>e.set(T=>({...T,sampleApiEndpoint:h.target.value}))}
      >
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${$({label:n?"Fetching...":"Fetch Sample",variant:"test",loading:n,disabled:n,onClick:b})}
    </div>

    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input
          type="text"
          id="sample-filter-input"
          class="form-input"
          placeholder="Filter discovered attributes (e.g. episode, id, title)..."
          .value=${a.sampleApiFilter||""}
          @input=${h=>e.set(T=>({...T,sampleApiFilter:h.target.value}))}
        >
        <input
          type="text"
          id="sample-namespace-prefix"
          class="form-input font-mono"
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${a.sampleApiPrefix||""}
          @input=${h=>e.set(T=>({...T,sampleApiPrefix:h.target.value}))}
        >
      </div>
    </div>

    ${w()}
  `,k=p`
    <div class="u-flex u-gap-2">
      ${$({label:"Close",variant:"secondary",onClick:f})}
    </div>
  `;return J({title:"Sample Service API Schema",size:"lg",onClose:f,body:x,footer:k})}function ca(e,a={}){const t=Array.isArray(a.notification_triggers)?a.notification_triggers:Array.isArray(a.triggers)?a.triggers:[],o=()=>{e.set(r=>({...r,isNotificationModalOpen:!0}))},s=async r=>{try{const c=await O.post("/api/v1/settings/test-notification",{trigger_id:r==null?void 0:r.id,channel:(r==null?void 0:r.channel)||"ntfy",target_url:(r==null?void 0:r.target_url)||"http://host.docker.internal:8090",topic:(r==null?void 0:r.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(r==null?void 0:r.id)||"manual"}`});if(c&&c.success)alert(`✓ Notification successfully dispatched to ${(r==null?void 0:r.channel)||"ntfy"}`);else{const n=(c==null?void 0:c.error)||(c!=null&&c.status_code?`HTTP ${c.status_code}: ${c.response||"Failed"}`:(c==null?void 0:c.response)||"Unknown response");alert(`Failed to send alert: ${n}`)}}catch(c){alert(`Error sending test notification: ${c.message}`)}},i=async r=>{if(await $e({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${r}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const n=_.read(A.all);if(!n||!n.data)return;const m=(Array.isArray(n.data.notification_triggers)?n.data.notification_triggers:[]).filter(g=>g.id!==r);_.setData(A.all,g=>({...g,notification_triggers:m})),e.set(g=>({...g,isDirty:!0}))}},l=(r,c)=>{const n=_.read(A.all);if(!n||!n.data)return;const m=(Array.isArray(n.data.notification_triggers)?n.data.notification_triggers:[]).map(g=>g.id===r?{...g,enabled:!c}:g);_.setData(A.all,g=>({...g,notification_triggers:m})),e.set(g=>({...g,isDirty:!0}))},d=r=>r.includes("OPEN")||r.includes("FAIL")?"warning":r.includes("RESOLVED")||r.includes("SUCCESS")||r.includes("COMPLETE")?"success":"info";return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${$({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>s({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${$({label:"+ Add Trigger",variant:"save",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${t.length===0?p`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>`:t.map(r=>p`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${r.id}</strong>
                  ${be({label:r.event||"ON_INCIDENT_OPEN",tone:d(r.event||"")})}
                  ${be({label:r.channel||"ntfy",tone:"neutral"})}
                  ${r.enabled===!1?be({label:"Disabled",tone:"danger"}):E}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>l(r.id,r.enabled!==!1)}
                  >
                    ${r.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${$({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>s(r)})}
                  ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>i(r.id)})}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${r.target_url||"-"}</span>
                </div>
                ${r.topic?p`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${r.topic}</span>
                  </div>
                `:E}
                ${r.priority?p`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${r.priority}</span>
                  </div>
                `:E}
                ${r.tags?p`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Tags:</span>
                    <span class="u-ml-1">${r.tags}</span>
                  </div>
                `:E}
              </div>
            </div>
          `)}
      </div>
    </div>
  `}function da(e){const a=()=>{e.set(i=>({...i,isNotificationModalOpen:!1}))},t=i=>{var y,I,w,x,k,C,h,T;i&&i.preventDefault();const l=(y=document.getElementById("input-trig-id"))==null?void 0:y.value.trim();if(!l){alert("Trigger ID is required.");return}const d=(I=document.getElementById("input-trig-event"))==null?void 0:I.value,r=(w=document.getElementById("input-trig-channel"))==null?void 0:w.value,c=(x=document.getElementById("input-trig-url"))==null?void 0:x.value.trim();if(!c){alert("Target URL is required.");return}const n=((k=document.getElementById("input-trig-topic"))==null?void 0:k.value.trim())||"",v=((C=document.getElementById("input-trig-priority"))==null?void 0:C.value.trim())||"default",m=((h=document.getElementById("input-trig-tags"))==null?void 0:h.value.trim())||"server",g=((T=document.getElementById("input-trig-template"))==null?void 0:T.value.trim())||"{event}: {details}",u=_.read(A.all);if(!u||!u.data)return;const b=(Array.isArray(u.data.notification_triggers)?[...u.data.notification_triggers]:[]).filter(S=>S.id!==l);b.push({id:l,event:d,enabled:!0,channel:r,target_url:c,topic:n,priority:v,tags:m,message_template:g}),_.setData(A.all,S=>({...S,notification_triggers:b})),e.set(S=>({...S,isDirty:!0,isNotificationModalOpen:!1}))},o=p`
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
  `,s=p`
    <div class="u-flex u-gap-2 u-justify-end">
      ${$({label:"Cancel",variant:"secondary",onClick:a})}
      ${$({label:"Save Trigger",variant:"save",onClick:()=>t()})}
    </div>
  `;return J({title:"Configure Notification Trigger",size:"md",onClose:a,body:o,footer:s})}function ua(e,a={},t={}){const o=a.retention_days||30,s=a.global_poll_interval_seconds||300,i=(t==null?void 0:t.stages)||[],l=(t==null?void 0:t.pipelines)||{},d=i.filter(n=>n.interval_seconds!=null&&(n.complete_condition!=null||n.start_condition==null)),r=Object.values(l).filter(n=>n&&n.retention_days!=null),c=async()=>{try{await O.post("/api/v1/settings/scheduler/restart"),alert("✓ Scheduler stage and custom table loops restarted.")}catch(n){alert("✗ Failed to restart scheduler loops: "+n.message)}};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
        <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control default data retention, global stage polling cadence, and inspect per-stage / per-pipeline overrides.</p>
      </div>
      
      <div style="padding: var(--space-4);">
        <div class="form-grid-2 u-mb-4">
          <div class="form-group">
            <label>Default Data Retention (Days)</label>
            <input type="number" class="form-input" min="1" max="3650" .value=${o} 
              @input=${n=>{const m={..._.read(A.all).data,retention_days:parseInt(n.target.value,10)||30};_.setData(A.all,()=>m),e.set(g=>({...g,isDirty:!0}))}}>
            <small class="u-text-muted">Sink rows with <code>LAST_UPDATED</code> older than the retention window are pruned during maintenance.</small>
          </div>
          <div class="form-group">
            <label>Global Stage Polling Interval (Seconds)</label>
            <input type="number" class="form-input" min="10" max="86400" .value=${s}
              @input=${n=>{const m={..._.read(A.all).data,global_poll_interval_seconds:parseInt(n.target.value,10)||300};_.setData(A.all,()=>m),e.set(g=>({...g,isDirty:!0}))}}>
            <small class="u-text-muted">Default execution cadence for active Root and Consumer stages unless overridden.</small>
          </div>
        </div>

        <div class="form-grid-2 u-mb-4">
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div class="u-flex u-justify-between u-items-center u-mb-2">
              <h4 class="u-text-sm u-font-bold u-mb-0" style="color: var(--color-text);">Stage Interval Overrides</h4>
              <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${d.length} Overrides</span>
            </div>
            <p class="u-text-xs u-text-muted u-mb-2">Stages with explicit <code>interval_seconds</code> overriding the global cadence.</p>
            ${d.length>0?p`
              <div class="u-flex u-flex-col u-gap-1">
                ${d.map(n=>p`
                  <div class="u-flex u-justify-between u-text-xs u-font-mono" style="padding: 4px 6px; background: var(--color-bg-card); border-radius: 4px; border: 1px solid var(--color-border);">
                    <span>${n.name} (${n.id})</span>
                    <strong style="color: var(--color-accent);">${n.interval_seconds}s</strong>
                  </div>
                `)}
              </div>
            `:p`<div class="u-text-sm u-text-muted">All active stages inherit global (${s}s).</div>`}
          </div>

          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div class="u-flex u-justify-between u-items-center u-mb-2">
              <h4 class="u-text-sm u-font-bold u-mb-0" style="color: var(--color-text);">Pipeline Retention Overrides</h4>
              <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">${r.length} Overrides</span>
            </div>
            <p class="u-text-xs u-text-muted u-mb-2">Pipelines with custom <code>retention_days</code> overriding global retention.</p>
            ${r.length>0?p`
              <div class="u-flex u-flex-col u-gap-1">
                ${r.map(n=>p`
                  <div class="u-flex u-justify-between u-text-xs u-font-mono" style="padding: 4px 6px; background: var(--color-bg-card); border-radius: 4px; border: 1px solid var(--color-border);">
                    <span>${n.name} (${n.id})</span>
                    <strong style="color: var(--color-success);">${n.retention_days} days</strong>
                  </div>
                `)}
              </div>
            `:p`<div class="u-text-sm u-text-muted">All pipelines inherit global (${o} days).</div>`}
          </div>
        </div>

        <div style="display: grid; gap: var(--space-2); background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px dashed var(--color-border);" class="u-mb-4">
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">SQLite Journal Mode:</span>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">WAL (Write-Ahead Logging)</span>
          </div>
          <div class="u-flex u-justify-between u-items-center">
            <span class="u-text-sm u-font-bold" style="color: var(--color-text-muted);">Scheduler Engine:</span>
            <span class="u-font-mono u-text-xs" style="color: var(--color-text);">Active (Per-Stage & Custom Table Loops)</span>
          </div>
        </div>

        ${$({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:c})}
      </div>
    </div>
  `}const pa={testEnrichment:e=>O.post("/api/v1/pipeline/sandbox/enrichment",e)};function va(){let e={selectedService:"",selectedPipelineId:"default",selectedRecordId:"",sampleEndpoint:"",customContextText:"",customContextError:null,testName:"",testEndpoint:"",testResponse:null,rawContextData:null,flattenedKeys:[],inspectorTab:"keys",inspectorFilter:"",copiedPath:null,logs:[],isLoading:!1,error:null,saveSuccess:!1};const a=new Set,t=()=>e,o=n=>{e=typeof n=="function"?n(e):{...e,...n},a.forEach(v=>v())};return{get:t,set:o,subscribe:n=>(a.add(n),()=>a.delete(n)),toggleEndpoint:(n,v)=>{const m=(v||"").trim();if(!m)return;const u=t().testEndpoint.split(`
`).map(b=>b.trim()).filter(Boolean);let f;u.includes(m)?f=u.filter(b=>b!==m):f=[...u,m],o({testEndpoint:f.join(`
`)})},runTest:async()=>{var y,I,w;const n=t();if(!n.selectedService){o({error:"Please select a configured service to test."});return}let v=null;if(n.customContextText.trim())try{v=JSON.parse(n.customContextText)}catch(x){o({error:`Invalid Custom JSON Context: ${x.message}`});return}const m=_.read(A.all),u=(((y=m==null?void 0:m.data)==null?void 0:y.services)||{})[n.selectedService],f=n.testEndpoint.split(`
`).map(x=>x.trim()).filter(Boolean),b={};if(f.length>0){const x=(u==null?void 0:u.enrichment_endpoints)||{},k=new Map;for(const[C,h]of Object.entries(x))typeof h=="string"&&h.trim()&&k.set(h.trim(),C);f.forEach((C,h)=>{let T=k.get(C);if(!T){const S=n.testName.trim();if(S&&!b[S])T=S;else{T=`test_${h}`;let M=h;for(;b[T];)M++,T=`test_${M}`}}b[T]=C})}o({isLoading:!0,error:null,logs:[],testResponse:null});try{const x=await pa.testEnrichment({service_id:n.selectedService,pipeline_id:n.selectedPipelineId||"default",record_id:n.selectedRecordId?parseInt(n.selectedRecordId,10):null,sample_endpoint:n.sampleEndpoint.trim()||null,custom_context:v,enrichment_endpoints:b});let k=x.context_data;if(f.length===1){const C=Object.keys(b)[0];C&&((I=x.context_data)==null?void 0:I[C])!==void 0&&(k=x.context_data[C])}else if(f.length>1){const C={};for(const h of Object.keys(b))((w=x.context_data)==null?void 0:w[h])!==void 0&&(C[h]=x.context_data[h]);Object.keys(C).length>0&&(k=C)}o({isLoading:!1,logs:x.logs||[],rawContextData:x.context_data||null,flattenedKeys:x.flattened_keys||[],testResponse:k})}catch(x){o({isLoading:!1,error:x.message})}},saveEndpoint:async()=>{var C;const n=t();if(!n.selectedService)return;const v=n.testName.trim(),m=n.testEndpoint.split(`
`).map(h=>h.trim()).filter(Boolean);if(!v||m.length===0){o({error:"Please provide both a namespace name and an endpoint to save."});return}const g=_.read(A.all),u=((C=g==null?void 0:g.data)==null?void 0:C.services)||{},f=u[n.selectedService],b=(f==null?void 0:f.enrichment_endpoints)||{},I=m.find(h=>!Object.values(b).map(T=>String(T).trim()).includes(h))||m[m.length-1],w={...b,[v]:I},x={...u,[n.selectedService]:{...f,enrichment_endpoints:w}},k={...g.data,services:x};try{const h=await O.post("/api/v1/settings",k);_.setData(A.all,()=>h),o({saveSuccess:!0,error:null}),setTimeout(()=>o({saveSuccess:!1}),3e3)}catch(h){o({error:`Failed to save to service: ${h.message}`})}},copyPath:n=>{var v;(v=navigator.clipboard)==null||v.writeText(n),o({copiedPath:n}),setTimeout(()=>{t().copiedPath===n&&o({copiedPath:null})},1500)},insertPlaceholder:n=>{const v=`{${n}}`,m=t().testEndpoint;if(!m){o({testEndpoint:v});return}const g=m.split(`
`),u=g[g.length-1];let f;!u||u.endsWith("/")||u.endsWith("=")||u.endsWith("&")?f=u+v:f=u+(u.includes("?")?"&":"/")+v,g[g.length-1]=f,o({testEndpoint:g.join(`
`)})}}}const we={sonarr:["/api/v3/history?pageSize=1","/api/v3/queue?pageSize=1","/api/v3/history","/api/v3/queue","/api/v3/series","/api/v3/episode","/api/v3/tag"],radarr:["/api/v3/history?pageSize=1","/api/v3/queue?pageSize=1","/api/v3/history","/api/v3/queue","/api/v3/movie","/api/v3/tag"],shoko:["/api/v3/Series","/api/v3/Episode","/api/v3/File"],jellyfin:["/Items?Recursive=true","/Users","/System/Info"]};function ma(e,a){if(!a&&!e)return[];const t=[];if(a!=null&&a.poll_endpoint&&typeof a.poll_endpoint=="string"){const l=a.poll_endpoint.trim();l&&t.push(l)}if(a!=null&&a.enrichment_endpoints){const l=Array.isArray(a.enrichment_endpoints)?a.enrichment_endpoints:Object.values(a.enrichment_endpoints);for(const d of l)typeof d=="string"&&d.trim()&&t.push(d.trim())}const o=String(e||"").toLowerCase(),s=String((a==null?void 0:a.name)||"").toLowerCase(),i=`${o} ${s}`;return i.includes("sonarr")?t.push(...we.sonarr):i.includes("radarr")?t.push(...we.radarr):i.includes("shoko")?t.push(...we.shoko):i.includes("jellyfin")&&t.push(...we.jellyfin),Array.from(new Set(t))}function ga({services:e={},pipelines:a={},selectedService:t="",selectedPipelineId:o="default",selectedRecordId:s="",sampleEndpoint:i="",customContextText:l="",customContextError:d=null,testName:r="",isLoading:c=!1,saveSuccess:n=!1,onServiceChange:v,onPipelineChange:m,onRecordIdChange:g,onSampleEndpointChange:u,onCustomContextChange:f,onTestNameChange:b,onRunTest:y,onSaveToService:I}){const w=Object.keys(e),x=Object.keys(a).length>0?Object.keys(a):["default"],k=e[t],C=ma(t,k);return p`
    <div class="u-flex u-flex-col u-gap-3" style="flex-shrink: 0;">
      <!-- Primary Controls Row -->
      <div class="u-flex u-gap-3 u-items-center" style="flex-wrap: wrap;">
        <!-- Service Selector -->
        <div style="flex: 1; min-width: 150px; max-width: 220px;">
          <select
            class="form-select u-font-mono u-text-sm"
            @change=${h=>v==null?void 0:v(h.target.value)}
          >
            ${w.length===0?p`<option value="">No services configured</option>`:E}
            ${w.map(h=>p`
              <option value=${h} ?selected=${t===h}>
                ${e[h].name||h}
              </option>
            `)}
          </select>
        </div>

        <!-- Pipeline Selector for Record ID -->
        <div style="min-width: 130px; max-width: 170px;">
          <select
            class="form-select u-font-mono u-text-sm"
            title="Pipeline table for Record ID lookup"
            @change=${h=>m==null?void 0:m(h.target.value)}
          >
            ${x.map(h=>p`
              <option value=${h} ?selected=${o===h}>
                Pipeline: ${h}
              </option>
            `)}
          </select>
        </div>

        <!-- Optional Record ID -->
        <div style="min-width: 110px; max-width: 130px; flex: 1;">
          <input
            type="number"
            class="form-input u-font-mono u-text-sm"
            placeholder="Record ID"
            title="Optional Pipeline Record ID from selected pipeline table"
            .value=${s}
            @input=${h=>g==null?void 0:g(h.target.value)}
          />
        </div>

        <!-- Optional Live Sample Endpoint -->
        <div style="flex: 2; min-width: 220px;">
          <input
            type="text"
            list="sandbox-endpoints-list"
            class="form-input u-font-mono u-text-sm"
            placeholder="Sample Endpoint"
            title="Optional upstream live sample endpoint to seed context without DB records"
            .value=${i}
            @input=${h=>u==null?void 0:u(h.target.value)}
          />
          <datalist id="sandbox-endpoints-list">
            ${C.map(h=>p`<option value="${h}">${h}</option>`)}
          </datalist>
        </div>

        <!-- Run Action -->
        ${$({label:"RUN",variant:"test",loading:c,disabled:c||!t||!!d,onClick:y})}

        <!-- Save Namespace Controls -->
        <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
          <span style="color: var(--color-text-muted);">&gt;</span>
          <input
            type="text"
            class="form-input u-font-mono u-text-sm"
            placeholder="namespace"
            title="Enrichment point namespace name"
            .value=${r}
            @input=${h=>b==null?void 0:b(h.target.value)}
            style="width: 130px;"
          />
          ${$({label:"SAVE",variant:"secondary",disabled:c||!t,onClick:I})}
          ${n?p`<span style="color: var(--color-success);">${te({name:"check"})}</span>`:E}
        </div>
      </div>

      <!-- Collapsible Custom Context Row -->
      <details
        style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3);"
      >
        <summary class="u-flex u-items-center u-justify-between u-text-xs u-font-mono" style="cursor: pointer; user-select: none; color: var(--color-text-secondary);">
          <div class="u-flex u-items-center u-gap-2">
            <span>Custom JSON Context (Mock / Override)</span>
            ${l.trim()?d?p`<span class="u-text-2xs" style="color: var(--color-danger);">${d}</span>`:p`<span class="u-text-2xs" style="color: var(--color-success);">✓ Valid JSON</span>`:p`<span class="u-text-2xs u-text-muted">(Optional)</span>`}
          </div>
          <span class="u-text-2xs u-text-muted">Click to toggle</span>
        </summary>
        <div class="u-mt-2">
          <textarea
            class="form-input u-font-mono u-text-xs"
            rows="3"
            placeholder='{"series": {"id": 101, "title": "Custom Show"}, "episodeId": 456}'
            .value=${l}
            @input=${h=>f==null?void 0:f(h.target.value)}
            style="resize: none; line-height: 1.4; width: 100%;"
          ></textarea>
        </div>
      </details>
    </div>
  `}const fa=p`
  <style>
    .json-tree-wrapper { display: flex; flex-direction: column; height: 100%; min-height: 0; background: var(--color-bg-base); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.5; }
    .json-tree-toolbar { display: flex; align-items: center; justify-content: space-between; padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border-bottom: 1px solid var(--color-border); flex-shrink: 0; gap: var(--space-2); }
    .json-tree-content { flex: 1; min-height: 0; overflow: auto; padding: var(--space-3); }
    .json-tree-details summary::-webkit-details-marker, .json-tree-details summary::marker { display: none; }
    .json-tree-details summary { list-style: none; display: flex; align-items: center; cursor: pointer; user-select: none; padding: 1px 4px; border-radius: var(--radius-xs); white-space: nowrap; }
    .json-tree-details summary:hover { background: rgba(255, 255, 255, 0.04); }
    .json-tree-arrow { display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; font-size: 9px; color: var(--color-text-secondary); margin-right: 4px; flex-shrink: 0; user-select: none; }
    .json-tree-details:not([open]) > summary > .json-tree-arrow::before { content: "►"; }
    .json-tree-details[open] > summary > .json-tree-arrow::before { content: "▼"; }
    .json-tree-spacer { display: inline-block; width: 18px; flex-shrink: 0; }
    .json-tree-children { margin-left: 6px; padding-left: 12px; border-left: 1px solid rgba(255, 255, 255, 0.08); }
    .json-tree-line { display: flex; align-items: center; padding: 1px 4px; white-space: nowrap; }
    .json-tree-line:hover { background: rgba(255, 255, 255, 0.02); }
    .json-tree-key { color: #38bdf8; cursor: pointer; font-weight: 500; }
    .json-tree-key:hover { text-decoration: underline dotted #38bdf8; color: #93c5fd; }
    .json-tree-colon { color: var(--color-text-secondary); margin-right: 4px; }
    .json-tree-syntax { color: var(--color-text-secondary); }
    .json-tree-preview { color: var(--color-text-muted); font-size: 0.78rem; margin-left: 6px; }
    .json-tree-details[open] > summary .json-tree-preview { display: none; }
    .json-tree-details:not([open]) > summary .json-tree-bracket-open { display: none; }
    .json-val-str { color: #34d399; word-break: break-all; }
    .json-val-num { color: #38bdf8; font-weight: 500; }
    .json-val-bool { color: #fbbf24; font-weight: 600; }
    .json-val-null { color: #f87171; font-weight: 600; }
    .json-copied-badge { color: var(--color-success); font-size: 0.72rem; margin-left: 6px; font-weight: 500; }
    .json-btn-tool { padding: 2px 8px; background: var(--color-bg-card); border: 1px solid var(--color-border); color: var(--color-text-secondary); border-radius: var(--radius-xs); cursor: pointer; font-size: var(--font-size-xs); font-family: var(--font-mono); transition: all 0.15s ease; }
    .json-btn-tool:hover { color: var(--color-text); border-color: var(--color-accent); background: color-mix(in srgb, var(--color-accent) 10%, transparent); }
  </style>
`;function ba(e){if(e==null)return"0 items";if(Array.isArray(e))return`${e.length} ${e.length===1?"item":"items"} (Array)`;if(typeof e=="object"){const a=Object.keys(e);return`${a.length} ${a.length===1?"key":"keys"} (Object)`}return"1 value"}function xa(e){return typeof e=="string"?p`<span class="json-val-str">${JSON.stringify(e)}</span>`:typeof e=="number"?p`<span class="json-val-num">${e}</span>`:typeof e=="boolean"?p`<span class="json-val-bool">${e?"true":"false"}</span>`:e===null?p`<span class="json-val-null">null</span>`:p`<span class="json-val-null">undefined</span>`}function ze(e,a,t,o,s){const i=r=>{r.stopPropagation(),r.preventDefault(),s==null||s(t)},l=o&&o===t,d=a!==null?p`
    <span class="json-tree-key" title="Click to copy path: ${t}" @click=${i}>${a}</span>
    <span class="json-tree-colon">: </span>
  `:E;if(Array.isArray(e))return e.length===0?p`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${d}<span class="json-tree-syntax">[]</span>
          ${l?p`<span class="json-copied-badge">✓ copied</span>`:E}
        </div>
      `:p`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${d}
          <span class="json-tree-syntax json-tree-bracket-open">[</span>
          <span class="json-tree-preview">[ ${e.length} items ]</span>
          ${l?p`<span class="json-copied-badge">✓ copied</span>`:E}
        </summary>
        <div class="json-tree-children">
          ${e.map((r,c)=>ze(r,c,t?`${t}.${c}`:String(c),o,s))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">]</span></div>
      </details>
    `;if(e!==null&&typeof e=="object"){const r=Object.keys(e);return r.length===0?p`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${d}<span class="json-tree-syntax">{}</span>
          ${l?p`<span class="json-copied-badge">✓ copied</span>`:E}
        </div>
      `:p`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${d}
          <span class="json-tree-syntax json-tree-bracket-open">{</span>
          <span class="json-tree-preview">{ ${r.length} keys }</span>
          ${l?p`<span class="json-copied-badge">✓ copied</span>`:E}
        </summary>
        <div class="json-tree-children">
          ${r.map(c=>ze(e[c],c,t?`${t}.${c}`:c,o,s))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">}</span></div>
      </details>
    `}return p`
    <div class="json-tree-line">
      <span class="json-tree-spacer"></span>
      ${d}${xa(e)}
      ${l?p`<span class="json-copied-badge">✓ copied</span>`:E}
    </div>
  `}function ya({data:e=null,copiedPath:a=null,onCopyPath:t}){if(e==null)return p`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🌳</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload data available.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and navigate the JSON hierarchy.</div>
      </div>
    `;const o=i=>{const l=i.currentTarget.closest(".json-tree-wrapper");l&&l.querySelectorAll("details").forEach(d=>{d.open=!0})},s=i=>{const l=i.currentTarget.closest(".json-tree-wrapper");l&&l.querySelectorAll("details").forEach((d,r)=>{d.open=r===0})};return p`
    <div class="json-tree-wrapper">
      ${fa}
      <div class="json-tree-toolbar">
        <span class="u-text-xs u-font-mono" style="color: var(--color-text-secondary);">
          ${ba(e)}
        </span>
        <div class="u-flex u-items-center u-gap-1">
          <button type="button" class="json-btn-tool" @click=${o}>Expand All</button>
          <button type="button" class="json-btn-tool" @click=${s}>Collapse All</button>
        </div>
      </div>
      <div class="json-tree-content">
        ${ze(e,null,"",a,t)}
      </div>
    </div>
  `}const ha={int:"info",float:"info",bool:"success",list:"accent",dict:"warning",str:"neutral",string:"neutral"},$a=e=>ha[e==null?void 0:e.toLowerCase()]||"neutral";function Ea({flattenedKeys:e=[],response:a=null,rawContext:t=null,logs:o=[],activeTab:s="keys",filterQuery:i="",copiedPath:l=null,onTabChange:d,onFilterChange:r,onCopyPath:c,onInsertPlaceholder:n}){const v=(i||"").toLowerCase().trim(),m=e.filter(u=>!v||u.path.toLowerCase().includes(v)||u.type&&u.type.toLowerCase().includes(v)||u.sample!==void 0&&String(u.sample).toLowerCase().includes(v)),g=(u,f)=>p`
      <button
        type="button"
        class="tab-btn u-font-mono ${s===u?"is-active":""}"
        style="padding: 3px var(--space-2); font-size: var(--font-size-xs);"
        @click=${()=>d==null?void 0:d(u)}
      >
        ${f}
      </button>
    `;return p`
    <div class="payload-inspector u-flex u-flex-col" style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden;">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface); flex-shrink: 0; gap: var(--space-2); flex-wrap: wrap;">
        <div class="u-flex u-items-center u-gap-2">
          ${g("keys",`Discovered Keys (${e.length})`)}
          ${g("tree","Payload Tree")}
          ${g("logs",`Logs (${o.length})`)}
        </div>
        ${s==="keys"&&e.length>0?p`
          <div style="max-width: 180px; flex: 1;">
            <input type="text" class="form-input u-font-mono u-text-xs" placeholder="Filter keys..." .value=${i} @input=${u=>r==null?void 0:r(u.target.value)} style="padding: 2px var(--space-2); height: 26px;" />
          </div>
        `:E}
      </div>

      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden;">
        ${s==="keys"?p`<div style="flex: 1; overflow-y: auto;">${wa({filteredKeys:m,totalCount:e.length,copiedPath:l,onCopyPath:c,onInsertPlaceholder:n})}</div>`:E}
        ${s==="tree"?ya({data:t||a,copiedPath:l,onCopyPath:c}):E}
        ${s==="logs"?p`<div style="flex: 1; overflow-y: auto;">${_a(o)}</div>`:E}
      </div>
    </div>
  `}function wa({filteredKeys:e,totalCount:a,copiedPath:t,onCopyPath:o,onInsertPlaceholder:s}){return a===0?p`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🔍</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload attributes discovered yet.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and extract available placeholder paths.</div>
      </div>
    `:e.length===0?p`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No keys match filter query.</div>`:p`
    <div class="u-flex u-flex-col">
      ${e.map(i=>{const l=t===i.path;return p`
          <div class="u-flex u-items-center u-justify-between u-gap-3" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); font-family: var(--font-mono);">
            <div class="u-flex u-flex-col u-gap-1" style="min-width: 0; flex: 1;">
              <div class="u-flex u-items-center u-gap-2">
                <span class="u-truncate" style="font-size: var(--font-size-sm); color: var(--color-accent); font-weight: 500; cursor: pointer;" title="Click to copy: ${i.path}" @click=${()=>o==null?void 0:o(i.path)}>${i.path}</span>
                ${be({label:i.type||"unknown",tone:$a(i.type),mono:!0})}
              </div>
              ${i.sample!==void 0&&i.sample!==null?p`
                <div class="u-truncate" style="font-size: var(--font-size-xs); color: var(--color-text-secondary); line-height: 1.4;" title=${i.sample}>
                  <span style="color: var(--color-text-muted); font-size: var(--font-size-2xs);">sample: </span>${String(i.sample)}
                </div>
              `:E}
            </div>
            <div class="u-flex u-items-center u-gap-1" style="flex-shrink: 0;">
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Copy path to clipboard" style="padding: 3px 8px; font-size: 0.72rem; background: ${l?"var(--color-success)":"var(--color-bg-surface)"}; border: 1px solid ${l?"var(--color-success)":"var(--color-border-strong)"}; color: ${l?"#fff":"var(--color-text)"}; border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>o==null?void 0:o(i.path)}>
                ${te({name:l?"check":"copy",size:12})}
                <span>${l?"Copied":"Copy"}</span>
              </button>
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Insert placeholder {${i.path}} into endpoint" style="padding: 3px 8px; font-size: 0.72rem; background: var(--color-bg-surface); border: 1px solid var(--color-border-strong); color: var(--color-accent); border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>s==null?void 0:s(i.path)}>
                ${te({name:"plus",size:12})}
                <span>Insert</span>
              </button>
            </div>
          </div>
        `})}
    </div>
  `}function _a(e){return!e||e.length===0?p`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No server execution logs recorded.</div>`:p`
    <div class="u-font-mono" style="padding: var(--space-3); font-size: 0.85rem; color: var(--color-console-text); background: var(--color-bg-base); min-height: 100%; line-height: 1.5; white-space: pre-wrap;">
      ${e.map(a=>p`<div>${a}</div>`)}
    </div>
  `}function ka({endpoints:e={},activeEndpoints:a=[],onToggleEndpoint:t}){const o=Object.entries(e),s=a instanceof Set?a:new Set(Array.isArray(a)?a.map(l=>String(l||"").trim()).filter(Boolean):String(a||"").split(`
`).map(l=>l.trim()).filter(Boolean)),i=o.filter(([l,d])=>s.has(String(d||"").trim())).length;return p`
    <div
      class="u-flex u-flex-col"
      style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3); overflow-y: auto;"
    >
      <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-shrink: 0;">
        <h4 style="margin: 0; color: var(--color-text); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Saved Endpoints
        </h4>
        <span class="u-text-2xs u-text-muted u-font-mono">${i}/${o.length}</span>
      </div>

      <div class="u-flex u-flex-col u-gap-2" style="flex: 1; min-height: 0;">
        ${o.length===0?p`
          <div class="u-text-xs u-text-muted u-text-center" style="padding: var(--space-4) 0;">
            No saved endpoints for this service.
          </div>
        `:E}

        ${o.map(([l,d])=>{const r=String(d||"").trim(),c=s.has(r);return p`
            <div
              class="u-flex u-flex-col u-gap-1 selectable-item ${c?"is-selected":""}"
              style="padding: var(--space-2);"
              @click=${()=>t==null?void 0:t(l,r)}
            >
              <div class="u-flex u-items-center u-justify-between">
                <strong class="u-font-mono u-text-xs" style="color: ${c?"var(--color-accent)":"var(--color-text)"};">
                  ${l}
                </strong>
                <span
                  class="u-font-mono u-text-2xs"
                  style="padding: 1px 6px; border-radius: var(--radius-xs); font-size: var(--font-size-2xs); font-weight: var(--font-weight-medium); ${c?"background: var(--color-accent); color: #fff;":"background: var(--color-bg-base); color: var(--color-text-muted); border: 1px solid var(--color-border);"}"
                >
                  ${c?"ON":"OFF"}
                </span>
              </div>
              <div
                class="u-font-mono u-truncate"
                style="font-size: var(--font-size-xs); color: var(--color-text-secondary);"
                title=${d}
              >
                ${d}
              </div>
            </div>
          `})}
      </div>
    </div>
  `}function at(){const e=va(),a=s=>{let i=null;if(s.trim())try{JSON.parse(s)}catch{i="Invalid JSON syntax"}e.set({customContextText:s,customContextError:i})},t=()=>{var n,v;const s=e.get(),i=_.read(A.all),l=((n=i==null?void 0:i.data)==null?void 0:n.services)||{},d=((v=i==null?void 0:i.data)==null?void 0:v.pipelines)||{},r=Object.keys(l),c=l[s.selectedService];return!s.selectedService&&r.length>0&&setTimeout(()=>e.set({selectedService:r[0]}),0),p`
      <div class="u-flex u-flex-col u-gap-3" style="height: 100%; min-height: 520px;">
        <!-- Top Controls: Service, Pipeline, Record ID, Sample Endpoint, Mock Context, Actions -->
        ${ga({services:l,pipelines:d,selectedService:s.selectedService,selectedPipelineId:s.selectedPipelineId||"default",selectedRecordId:s.selectedRecordId,sampleEndpoint:s.sampleEndpoint,customContextText:s.customContextText,customContextError:s.customContextError,testName:s.testName,isLoading:s.isLoading,saveSuccess:s.saveSuccess,onServiceChange:m=>e.set({selectedService:m}),onPipelineChange:m=>e.set({selectedPipelineId:m}),onRecordIdChange:m=>e.set({selectedRecordId:m}),onSampleEndpointChange:m=>e.set({sampleEndpoint:m}),onCustomContextChange:a,onTestNameChange:m=>e.set({testName:m}),onRunTest:e.runTest,onSaveToService:e.saveEndpoint})}

        <!-- Error Feedback Banner -->
        ${s.error?p`
          <div class="u-flex u-items-center u-justify-between u-text-xs" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 15%, transparent); border: 1px solid var(--color-danger); color: var(--color-danger); border-radius: var(--radius-sm);">
            <span>${s.error}</span>
            <button type="button" style="background: none; border: none; color: inherit; cursor: pointer;" @click=${()=>e.set({error:null})}>✕</button>
          </div>
        `:E}

        <!-- Main Workspace -->
        <div class="u-flex u-gap-3" style="flex: 1; min-height: 0;">
          <!-- Left Column: Endpoint Input & Payload Inspector -->
          <div class="u-flex u-flex-col u-gap-2" style="flex: 3; min-height: 0;">
            <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2);">
              <div class="u-flex u-items-center u-justify-between u-mb-1">
                <span class="u-font-mono" style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Endpoint Templates (one per line, e.g. /api/v3/series/{seriesId})</span>
                <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Use {path} placeholders</span>
              </div>
              <textarea
                class="form-input u-font-mono"
                placeholder="/api/v3/endpoint/{id} (one per line)"
                rows="3"
                style="resize: none; min-height: 48px; width: 100%; border: none; background: transparent; padding: 0; outline: none; line-height: 1.4; font-size: var(--font-size-sm);"
                .value=${s.testEndpoint}
                @input=${m=>e.set({testEndpoint:m.target.value})}
              ></textarea>
            </div>

            <div style="flex: 1; min-height: 0;">
              ${Ea({flattenedKeys:s.flattenedKeys,response:s.testResponse,rawContext:s.rawContextData,logs:s.logs,activeTab:s.inspectorTab,filterQuery:s.inspectorFilter,copiedPath:s.copiedPath,onTabChange:m=>e.set({inspectorTab:m}),onFilterChange:m=>e.set({inspectorFilter:m}),onCopyPath:e.copyPath,onInsertPlaceholder:e.insertPlaceholder})}
            </div>
          </div>

          <!-- Right Column: Saved Endpoints List -->
          <div style="flex: 1; max-width: 280px; min-height: 0;">
            ${ka({endpoints:(c==null?void 0:c.enrichment_endpoints)||{},activeEndpoints:s.testEndpoint,onToggleEndpoint:e.toggleEndpoint})}
          </div>
        </div>
      </div>
    `};let o;return{view:t,mount:s=>{o=e.subscribe(s);const i=_.read(A.all);i!=null&&i.data||O.get("/api/v1/settings").then(l=>{_.setData(A.all,()=>l),e.set({})}).catch(console.error)},unmount:()=>{o&&o()}}}function Ve(e,a){if(e===a)return!0;if(!e||!a||typeof e!="object"||typeof a!="object"||Array.isArray(e)!==Array.isArray(a))return!1;if(Array.isArray(e))return e.length!==a.length?!1:e.every((s,i)=>Ve(s,a[i]));const t=Object.keys(e),o=Object.keys(a);return t.length!==o.length?!1:t.every(s=>Object.prototype.hasOwnProperty.call(a,s)&&Ve(e[s],a[s]))}function Sa(e){const a=at();let t=null,o=[],s,i;function l(v,m,g){const u=o.findIndex(f=>f.key===v);Ve(m,g)?u!==-1&&o.splice(u,1):u!==-1?o[u].newValue=g:o.push({key:v,oldValue:m,newValue:g})}function d(v){var g,u,f,b;if(!t||!v)return;const m=new Set([...Object.keys(t),...Object.keys(v),...o.map(y=>y.key.split(".")[0])]);for(const y of m)if(y==="services"){const I=new Set([...Object.keys(t.services||{}),...Object.keys(v.services||{}),...o.filter(w=>w.key.startsWith("services.")).map(w=>w.key.slice(9))]);for(const w of I)l(`services.${w}`,(g=t.services)==null?void 0:g[w],(u=v.services)==null?void 0:u[w])}else if(y==="pipelines"){const I=new Set([...Object.keys(t.pipelines||{}),...Object.keys(v.pipelines||{}),...o.filter(w=>w.key.startsWith("pipelines.")).map(w=>w.key.slice(10))]);for(const w of I)l(`pipelines.${w}`,(f=t.pipelines)==null?void 0:f[w],(b=v.pipelines)==null?void 0:b[w])}else y==="notification_triggers"||y==="triggers"?l("notification_triggers",t.notification_triggers??t.triggers??[],v.notification_triggers??v.triggers??[]):l(y,t[y],v[y])}const r=re({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isPipelineModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""}),c=r.set;r.set=v=>{c(m=>{var f;const g=typeof v=="function"?v(m):v,u=(f=_.read(A.all))==null?void 0:f.data;return t&&u&&d(u),{...g,isDirty:o.length>0}})};const n=v=>{o.length>0&&(v.preventDefault(),v.returnValue="")};return{mount(v){s=r.subscribe(()=>v()),i=_.subscribe(A.all,g=>{g!=null&&g.data&&(t?d(g.data):(t=JSON.parse(JSON.stringify(g.data)),o=[]),r.set(u=>({...u,isDirty:o.length>0}))),v()});const m=_.read(A.all);m!=null&&m.data&&!t&&(t=JSON.parse(JSON.stringify(m.data)),o=[]),Ys.getSettings(),a.mount(v),window.addEventListener("beforeunload",n),e&&e.setBeforeNavigateHook(async()=>o.length===0?!0:await $e({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}))},unmount(){s&&s(),i&&i(),a.unmount(),window.removeEventListener("beforeunload",n),e&&e.setBeforeNavigateHook(null),t&&o.length>0&&_.setData(A.all,()=>JSON.parse(JSON.stringify(t))),t=null,o=[]},view(){const v=r.get(),{activeTab:m,saving:g,isServiceModalOpen:u,isPipelineModalOpen:f,isStageModalOpen:b,isMappingModalOpen:y,isSampleApiModalOpen:I,isNotificationModalOpen:w}=v,x=_.read(A.all),{data:k,status:C,error:h}=x;if(C==="loading"&&!k)return p`<p class="u-text-muted">Loading settings...</p>`;if(C==="error"&&!k)return p`<p class="u-text-danger">Error: ${h==null?void 0:h.message}</p>`;const T=o.length>0,S={retention_days:(k==null?void 0:k.retention_days)||30,global_poll_interval_seconds:(k==null?void 0:k.global_poll_interval_seconds)||300},M=(k==null?void 0:k.services)||{},D=(k==null?void 0:k.pipelines)||{},N=(k==null?void 0:k.stages)||[],L=S.global_poll_interval_seconds,R=(V,q,B)=>p`
        <button type="button" class="tab-btn ${m===V?"is-active":""}" @click=${()=>r.set(F=>({...F,activeTab:V}))}>
          ${te({name:q,size:16})}
          <span>${B}</span>
        </button>
      `;return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2" style="flex-wrap: wrap; gap: var(--space-2);">
            <div class="u-flex u-gap-2" style="flex-wrap: wrap;">
              ${R("services","database","Services")}
              ${R("sandbox","terminal","API Sandbox")}
              ${R("mappings","code","Field Mappings")}
              ${R("pipelines","package","Pipelines")}
              ${R("stages","activity","Stages & Predicates")}
              ${R("notifications","bell","Notification Triggers")}
              ${R("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
                ${$({label:"Save All Settings",variant:"save",size:"sm",loading:g,disabled:!T,onClick:async()=>{const V=_.read(A.all);if(!V||!V.data)return;const q=JSON.parse(JSON.stringify(t||V.data));r.set(B=>({...B,saving:!0}));try{const B=await O.post("/api/v1/settings",V.data);_.setData(A.all,()=>B),t=JSON.parse(JSON.stringify(B)),o=[],r.set(F=>({...F,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(B){_.setData(A.all,()=>q),t=q,o=[],r.set(F=>({...F,isDirty:!1,saving:!1})),alert("Failed to save settings: "+B.message+`
Rolled back to previous verified configuration.`)}}})}
                ${T?p`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:E}
              </div>
            </div>
          </div>
          
          ${m==="services"?Hs(r,M):E}
          ${m==="sandbox"?a.view():E}
          ${m==="mappings"?oa(r,M):E}
          ${m==="pipelines"?Xs(r,D,N,S.retention_days):E}
          ${m==="stages"?ta(r,N,L):E}
          ${m==="notifications"?ca(r,k):E}
          ${m==="engine"?ua(r,S,k):E}
          
          <!-- Modals -->
          ${u?Qs(r):E}
          ${f?Zs(r):E}
          ${b?na(r):E}
          ${y?ra(r):E}
          ${I?la(r):E}
          ${w?da(r):E}
        </div>
      `}}}const ye=lt(Je),Ia={overview:Ms(),pipeline:Cs(),tools:Ls(),views:Bs(),incidents:Ws(),sandbox:at(),gitops:Gs(),settings:Sa(ye)};let ee=null;function Ee(){var t,o,s,i;const{current:e}=ye.store.get();ee&&ee.id!==e.id&&((o=(t=ee.instance).unmount)==null||o.call(t),ee=null),!ee&&e&&(ee={id:e.id,instance:Ia[e.id]},(i=(s=ee.instance).mount)==null||i.call(s,Ee));const a=ee?ee.instance.view():"";rt(rs({routerStore:ye.store.get(),routes:Je,router:ye,pageContent:a}),document.getElementById("app"))}ye.store.subscribe(Ee);ke.store.subscribe(Ee);_.subscribe(he.all,Ee);tt.getOverview().catch(()=>{});Ee();
