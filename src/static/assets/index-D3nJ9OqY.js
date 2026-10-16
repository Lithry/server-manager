import{j as Xe,E as Qe,w as P,b as u,A as $,D as Ze}from"./vendor-LJTP5CNr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function et(){const e=new Map;return{on(s,t){return e.has(s)||e.set(s,new Set),e.get(s).add(t),()=>e.get(s).delete(t)},emit(s,t){if(e.has(s))for(const n of e.get(s))n(t)}}}function le(e){let s=e;const t=new Set;return{get:()=>s,set:n=>{s=typeof n=="function"?n(s):n;for(const a of t)a(s)},subscribe:n=>(t.add(n),()=>t.delete(n))}}function tt(e){const s=le({current:null,params:{}});let t=null;async function n(a){const o=window.location.hash.slice(1)||"/";if(t&&s.get().current&&s.get().current.path!==o&&!await t(o)){window.removeEventListener("hashchange",n),window.location.hash=s.get().current.path,setTimeout(()=>window.addEventListener("hashchange",n),0);return}const i=e.find(d=>d.path===o)||e[0];s.set({current:i,params:{}})}return window.addEventListener("hashchange",n),n(),{store:s,navigate(a){window.location.hash=a},setBeforeNavigateHook(a){t=a}}}const Ue=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={CHILD:2},Ge=e=>(...s)=>({_$litDirective$:e,values:s});let qe=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,n){this._$Ct=s,this._$AM=t,this._$Ci=n}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:st}=Xe,Pe=e=>e,at=e=>e.strings===void 0,Le=()=>document.createComment(""),ce=(e,s,t)=>{var o;const n=e._$AA.parentNode,a=s===void 0?e._$AB:s._$AA;if(t===void 0){const i=n.insertBefore(Le(),a),d=n.insertBefore(Le(),a);t=new st(i,d,e,e.options)}else{const i=t._$AB.nextSibling,d=t._$AM,r=d!==e;if(r){let c;(o=t._$AQ)==null||o.call(t,e),t._$AM=e,t._$AP!==void 0&&(c=e._$AU)!==d._$AU&&t._$AP(c)}if(i!==a||r){let c=t._$AA;for(;c!==i;){const l=Pe(c).nextSibling;Pe(n).insertBefore(c,a),c=l}}}return t},te=(e,s,t=e)=>(e._$AI(s,t),e),rt={},ot=(e,s=rt)=>e._$AH=s,nt=e=>e._$AH,Se=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(e,s,t)=>{const n=new Map;for(let a=s;a<=t;a++)n.set(e[a],a);return n},He=Ge(class extends qe{constructor(e){if(super(e),e.type!==Ve.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let n;t===void 0?t=s:s!==void 0&&(n=s);const a=[],o=[];let i=0;for(const d of e)a[i]=n?n(d,i):i,o[i]=t(d,i),i++;return{values:o,keys:a}}render(e,s,t){return this.dt(e,s,t).values}update(e,[s,t,n]){const a=nt(e),{values:o,keys:i}=this.dt(s,t,n);if(!Array.isArray(a))return this.ut=i,o;const d=this.ut??(this.ut=[]),r=[];let c,l,f=0,g=a.length-1,p=0,v=o.length-1;for(;f<=g&&p<=v;)if(a[f]===null)f++;else if(a[g]===null)g--;else if(d[f]===i[p])r[p]=te(a[f],o[p]),f++,p++;else if(d[g]===i[v])r[v]=te(a[g],o[v]),g--,v--;else if(d[f]===i[v])r[v]=te(a[f],o[v]),ce(e,r[v+1],a[f]),f++,v--;else if(d[g]===i[p])r[p]=te(a[g],o[p]),ce(e,a[f],a[g]),g--,p++;else if(c===void 0&&(c=ze(i,p,v),l=ze(d,f,g)),c.has(d[f]))if(c.has(d[g])){const m=l.get(i[p]),b=m!==void 0?a[m]:null;if(b===null){const y=ce(e,a[f]);te(y,o[p]),r[p]=y}else r[p]=te(b,o[p]),ce(e,a[f],b),a[m]=null;p++}else Se(a[g]),g--;else Se(a[f]),f++;for(;p<=v;){const m=ce(e,r[v+1]);te(m,o[p]),r[p++]=m}for(;f<=g;){const m=a[f++];m!==null&&Se(m)}return this.ut=i,ot(e,r),Qe}}),it={x:P`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:P`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:P`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:P`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:P`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:P`<polyline points="20 6 9 17 4 12"></polyline>`,tool:P`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:P`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":P`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:P`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:P`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:P`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:P`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:P`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:P`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:P`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:P`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:P`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":P`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:P`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function re({name:e,size:s=16,label:t}){const n=it[e];return n?u`<svg 
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
    ${n}
  </svg>`:u`<span style="width:${s}px; height:${s}px; display:inline-block; background:red;"></span>`}const lt="-FyYHK",ct="hQIh8E",dt="vjCp9N",ut="aWcKCO",pt="XdvXnE",vt="Yr8TTV",mt="yefrc2",gt="UnbUQg",ft="z6Wtj-",bt="WEwa7u",yt="rr8RRm",xt="_8nqxsa",ht="EMU1IN",$t="erzuUm",Et="IX2naX",_t="UuwGh4",wt="HRKVqM",L={sidebar:lt,brand:ct,logo:dt,title:ut,nav:pt,navItem:vt,sidebarFooter:mt,toggleBtn:gt,toggleText:ft,footerDetails:bt,statusWrapper:yt,statusDot:xt,branchBox:ht,expanded:$t,brandText:Et,statusText:_t,commitText:wt},V=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),St=new Set([502,503,504]);function kt(e){const s=e&&typeof e=="object"?e.detail:null;return typeof s=="string"?s:Array.isArray(s)?s.map(t=>`${(t.loc??[]).slice(1).join(".")||"body"}: ${t.msg}`).join("; "):null}class oe extends Error{constructor(s,{code:t,status:n=0,detail:a=null,cause:o}={}){super(s,{cause:o}),this.name="ApiError",this.code=t,this.status=n,this.detail=a}get retryable(){return this.code===V.NETWORK||this.code===V.TIMEOUT||this.code===V.HTTP&&St.has(this.status)}get userMessage(){switch(this.code){case V.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case V.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case V.ABORTED:return"";case V.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const It=new Set(["GET","HEAD"]),At=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function Tt(e={}){const s={...At,...e},t=e.fetchImpl??((...v)=>globalThis.fetch(...v)),n={request:[],response:[],error:[]},a=new Map,o=()=>new oe("Request aborted",{code:V.ABORTED}),i=(v,m)=>{const b=new URLSearchParams;for(const[S,E]of Object.entries(m??{}))E!=null&&E!==""&&b.set(S,String(E));const y=b.toString();return`${s.baseUrl}${v}${y?"?"+y:""}`};async function d(v){if(v.status===204)return null;const m=v.headers.get("content-type")??"";try{return m.includes("application/json")?await v.json():await v.text()}catch(b){throw new oe("Malformed response body",{code:V.PARSE,status:v.status,cause:b})}}async function r(v,m,b){const y=AbortSignal.timeout(b),S=m?AbortSignal.any([m,y]):y;let E;try{E=await t(v.url,{method:v.method,headers:v.headers,body:v.body,signal:S})}catch(O){throw y.aborted?new oe(`Request timed out after ${b} ms`,{code:V.TIMEOUT,cause:O}):m!=null&&m.aborted?o():new oe("Network request failed",{code:V.NETWORK,cause:O})}const k=await d(E);if(!E.ok)throw new oe(kt(k)??`HTTP ${E.status}`,{code:V.HTTP,status:E.status,detail:k});return{status:E.status,data:k,headers:E.headers}}const c=(v,m)=>new Promise((b,y)=>{const S=setTimeout(b,v);m==null||m.addEventListener("abort",()=>{clearTimeout(S),y(o())},{once:!0})}),l=v=>Math.random()*Math.min(s.retryMaxMs,s.retryBaseMs*2**v);async function f(v,{signal:m,timeoutMs:b,retries:y}){for(let S=0;;S+=1)try{return await r(v,m,b)}catch(E){if(!(E instanceof oe)||!E.retryable||S>=y)throw E;await c(l(S),m)}}function g(v,m,b){let y=a.get(v);if(!y){const S=new AbortController,E={controller:S,refs:0,promise:null};E.promise=m(S.signal).finally(()=>{a.get(v)===E&&a.delete(v)}),E.promise.catch(()=>{}),a.set(v,E),y=E}return y.refs+=1,new Promise((S,E)=>{const k=()=>{y.refs-=1,y.refs===0&&(a.get(v)===y&&a.delete(v),y.controller.abort()),E(o())};if(b!=null&&b.aborted){k();return}b==null||b.addEventListener("abort",k,{once:!0}),y.promise.then(O=>{b==null||b.removeEventListener("abort",k),S(O)},O=>{b==null||b.removeEventListener("abort",k),E(O)})})}async function p(v,m,b={}){const{query:y,body:S,headers:E={},signal:k,meta:O={}}=b,N=b.timeoutMs??s.timeoutMs,_=b.retries??(It.has(v)?s.retries:0),R=b.dedupe??v==="GET";let A={method:v,url:i(m,y),headers:{Accept:"application/json",...E},body:void 0,meta:O};S!==void 0&&(A.body=JSON.stringify(S),A.headers["Content-Type"]="application/json");for(const X of n.request)A=await X(A);const D=async X=>{try{let H=await f(A,{signal:X,timeoutMs:N,retries:_});for(const I of n.response)H=await I(H,A);return H.data}catch(H){let I=H;for(const w of n.error)I=await w(I,A)??I;throw I}};return R?g(`${A.method} ${A.url}`,D,k):D(k)}return{get:(v,m)=>p("GET",v,m),post:(v,m,b)=>p("POST",v,{...b,body:m}),put:(v,m,b)=>p("PUT",v,{...b,body:m}),delete:(v,m)=>p("DELETE",v,m),use({request:v,response:m,error:b}){v&&n.request.push(v),m&&n.response.push(m),b&&n.error.push(b)}}}const ke=()=>{};function Ct(e,s){return s?new Promise((t,n)=>{const a=()=>n(new DOMException("Aborted","AbortError"));if(s.aborted){a();return}s.addEventListener("abort",a,{once:!0}),e.then(t,n).finally(()=>s.removeEventListener("abort",a))}):e}const Ce=e=>JSON.stringify(e,(s,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([n],[a])=>n<a?-1:1)):t),Mt=(e,s)=>s.every((t,n)=>n<e.length&&Ce(t)===Ce(e[n]));function Ot({now:e=()=>Date.now(),gcMs:s=5*6e4}={}){const t=new Map,n=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function a(r){const c=Ce(r);let l=t.get(c);return l||(l={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},l.snapshot=n(l),t.set(c,l)),l}function o(r){r.snapshot=n(r);for(const c of[...r.listeners])c(r.snapshot)}function i(){for(const[r,c]of t)c.listeners.size===0&&!c.promise&&c.updatedAt&&e()-c.updatedAt>s&&t.delete(r)}function d(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(c=>(Object.assign(r,{data:c,error:null,status:"success",updatedAt:e()}),c),c=>{throw Object.assign(r,{error:c,status:"error"}),c}).finally(()=>{r.promise=null,o(r),r.invalidated&&r.listeners.size>0&&d(r).catch(ke)}),r.promise.catch(ke),o(r)),r.promise}return{load(r,c,{staleMs:l=0,signal:f}={}){i();const g=a(r);g.fetcher=c;const p=g.status==="success"&&!g.invalidated&&e()-g.updatedAt<l;return Ct(p?Promise.resolve(g.data):d(g),f)},read:r=>a(r).snapshot,subscribe(r,c){const l=a(r);return l.listeners.add(c),c(l.snapshot),()=>{l.listeners.delete(c)}},invalidate(r){for(const c of t.values())Mt(c.keyParts,r)&&(c.invalidated=!0,o(c),c.listeners.size>0&&c.fetcher&&d(c).catch(ke))},setData(r,c){const l=a(r),f={data:l.data,status:l.status,updatedAt:l.updatedAt},g=typeof c=="function"?c(l.data):c;return Object.assign(l,{data:g,status:"success",updatedAt:e()}),o(l),function(){l.data===g&&(Object.assign(l,f),o(l))}},set(r,c){return this.setData(r,typeof c=="function"?c:()=>c)}}}function Rt(e,{mutationFn:s,optimistic:t,invalidates:n=[]}){return async function(o){const i=((t==null?void 0:t(o))??[]).map(({key:d,update:r})=>e.setData(d,r));try{const d=await s(o);return(typeof n=="function"?n(o,d):n).forEach(c=>e.invalidate(c)),d}catch(d){throw i.reverse().forEach(r=>r()),d}}}const ne={},Nt=et(),C=Tt({baseUrl:(ne==null?void 0:ne.VITE_API_BASE)??"",timeoutMs:Number((ne==null?void 0:ne.VITE_HTTP_TIMEOUT_MS)??1e4)}),h=Ot();C.use({error:e=>((e==null?void 0:e.status)===401&&Nt.emit("auth:required",e),e)});const he={all:["overview"]},Dt={getOverview:e=>h.load(he.all,()=>C.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let fe=!1;function Pt(){fe=!fe;const e=document.getElementById("app-sidebar");e&&(fe?e.classList.add(L.expanded):e.classList.remove(L.expanded))}function Lt({routes:e,activeId:s,onNavigate:t}){var d,r,c,l,f;const n=h.read(he.all),a=((r=(d=n==null?void 0:n.data)==null?void 0:d.telemetry)==null?void 0:r.short_commit)||"6b319ac",o=((l=(c=n==null?void 0:n.data)==null?void 0:c.telemetry)==null?void 0:l.branch)||"main",i=(f=n==null?void 0:n.data)!=null&&f.version?n.data.version.startsWith("v")?n.data.version:`v${n.data.version}`:"v0.1.7";return u`<aside id="app-sidebar" class="${L.sidebar} ${fe?L.expanded:""}">
    <div class=${L.brand}>
      <div class=${L.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${L.brandText}>
        <div class=${L.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${i}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${L.nav}>
      ${He(e,g=>g.id,g=>u`
        <button class=${L.navItem} aria-current=${g.id===s?"page":"false"}
          @click=${()=>t(g.path)}>
          ${re({name:g.icon,size:16})}
          <span>${g.title}</span>
        </button>
      `)}
    </nav>
    <div class=${L.sidebarFooter}>
      <button class=${L.toggleBtn} @click=${Pt}>
        ${re({name:"menu",size:16})}
        <span class=${L.toggleText}>Collapse Menu</span>
      </button>
      <div class=${L.footerDetails}>
        <div class=${L.statusWrapper}>
          <div class=${L.statusDot}></div>
          <span class=${L.statusText}>Manager Online</span>
        </div>
        <div class=${L.branchBox}>
          <span style="color: var(--color-accent);">${o}</span>
          <span class=${L.commitText}>${a}</span>
        </div>
      </div>
    </div>
  </aside>`}const zt="MFUTlq",Bt="kBMrej",Ie={topbar:zt,title:Bt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=e=>e??$;function ie(...e){return e.filter(Boolean).join(" ")}function jt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function Ft(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Ut="PSMDQ2",Vt={spinner:Ut};function Gt({size:e=16}={}){return u`<svg class=${Vt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const qt="vZLpx0",de={btn:qt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:s="secondary",size:t="md",icon:n,iconOnly:a=!1,ariaLabel:o,loading:i=!1,disabled:d=!1,type:r="button",id:c,onClick:l}){const f=ie(de.btn,de[`btn--${s}`],de[`btn--${t}`],a&&de["btn--icon-only"]);return u`<button id=${Be(c)} class=${f} type=${r}
    aria-label=${Be(o)} aria-busy=${i?"true":"false"}
    ?disabled=${d||i} @click=${l}>
    ${i?Gt():n?re({name:n,size:t==="sm"?14:16}):$}
    ${a?$:u`<span class=${de.btn__label}>${e}</span>`}
  </button>`}const Ht=({icon:e,ariaLabel:s,...t})=>x({...t,icon:e,ariaLabel:s,iconOnly:!0,variant:t.variant??"ghost"});function Yt({title:e}){return u`<header class=${Ie.topbar}>
    <h1 class=${Ie.title}>${e}</h1>
    <div class=${Ie.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{h.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Kt(){const e=le({stack:[]});let s=0;function t(a){return new Promise(o=>{const i=`modal-${s+=1}`;let d=!1;const r=c=>{d||(d=!0,e.set(l=>({stack:l.stack.filter(f=>f.id!==i)})),o(c))};e.set(c=>({stack:[...c.stack,{id:i,view:()=>a({close:r,id:i})}]}))})}return{open:t,refresh:()=>e.set(a=>({stack:[...a.stack]})),store:e}}const Wt=Kt(),ye=Wt;function Jt(){const{stack:e}=ye.store.get();return u`<div id="modal-root">${e.map(s=>s.view())}</div>`}const Xt="sCMZyq",Qt="Fk5OML",Zt="_0AKuiv",Ae={layout:Xt,mainContent:Qt,page:Zt};function es({routerStore:e,routes:s,router:t,pageContent:n}){const{current:a}=e;return u`<div class=${Ae.layout}>
    ${Lt({routes:s,activeId:a==null?void 0:a.id,onNavigate:t.navigate})}
    <div class=${Ae.mainContent}>
      ${Yt({title:(a==null?void 0:a.pageTitle)||(a==null?void 0:a.title)||""})}
      <main class=${Ae.page}>
        ${n}
      </main>
    </div>
    ${Jt()}
  </div>`}const ts="fuSbcq",ss="fu9t4u",as="elFvvy",rs="_2Hu4ZP",os="r2dRuM",ns="AjfFun",U={table:ts,table__scroll:ss,table__grid:as,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:rs,table__skeleton:os,table__stale:ns};function $e({id:e,caption:s,columns:t,snapshot:n,getRows:a=l=>Array.isArray(l)?l:(l==null?void 0:l.items)??[],rowKey:o=(l,f)=>f,emptyMessage:i="No records found.",onRetry:d,footer:r=$,fallbackColumns:c=[]}){const{status:l,data:f,error:g,isFetching:p}=n,v=f!==void 0,m=typeof t=="function"?v?t(f):c:t,b=Math.max(m.length,1),y=v?a(f):[],S=(k,O)=>u`<td class=${ie(k.align==="end"&&U["table__cell--end"],k.align==="center"&&U["table__cell--center"],k.mono&&U["table__cell--mono"])}>
    ${k.render?k.render(O):Ft(O[k.key])}</td>`;let E;return!v&&(l==="idle"||l==="loading")?E=Array.from({length:5},()=>u`<tr aria-hidden="true">${m.map(()=>u`<td><span class=${U.table__skeleton}></span></td>`)}</tr>`):v?y.length===0?E=u`<tr><td colspan=${b} class=${U.table__message}>${i}</td></tr>`:E=He(y,o,k=>u`<tr>${m.map(O=>S(O,k))}</tr>`):E=u`<tr><td colspan=${b} class=${U.table__message} role="alert">
      ${(g==null?void 0:g.userMessage)||(g==null?void 0:g.message)||"Failed to load data."}
      ${d?x({label:"Retry",icon:"refresh",size:"sm",onClick:d}):$}</td></tr>`,u`<div class=${U.table}>
    ${l==="error"&&v?u`<div class=${U.table__stale} role="status">Showing cached data. ${(g==null?void 0:g.userMessage)??""} ${d?x({label:"Retry",size:"sm",variant:"ghost",onClick:d}):$}</div>`:$}
    <div class=${U.table__scroll} aria-busy=${p?"true":"false"}>
      <table id=${e??$} class=${U.table__grid}>
        ${s?u`<caption class="u-sr-only">${s}</caption>`:$}
        <thead><tr>${m.map(k=>u`<th scope="col" class=${ie(k.align==="end"&&U["table__cell--end"],k.align==="center"&&U["table__cell--center"])}>${k.header}</th>`)}</tr></thead>
        <tbody>${E}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const ve={all:["pipeline"],columns:["pipeline","columns"]};let K={limit:50,offset:0};const G={getPipeline:(e={},s={})=>{const{dedupe:t,staleMs:n,signal:a,...o}=e,i={...t!==void 0?{dedupe:t}:{},...n!==void 0?{staleMs:n}:{},...a!==void 0?{signal:a}:{},...s};return K={...K,...o},(K.stage===""||K.stage===null)&&delete K.stage,(K.status===""||K.status===null)&&delete K.status,h.load(ve.all,()=>C.get("/api/v1/pipeline",{query:K,dedupe:!1}),{dedupe:!1,...i})},getCurrentParams:()=>({...K}),getColumns:e=>h.load(ve.columns,()=>C.get("/api/v1/pipeline/columns"),e)},is="_0BpBt1",ee={badge:is,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2","badge--bool":"FpUTU-","badge--bool-true":"_8izwGO","badge--bool-false":"_5AzcWm"};function be({label:e,tone:s="neutral",mono:t=!1,uppercase:n=!1}){const a=ie(ee.badge,ee[`badge--${s}`],t&&ee["badge--mono"],n&&ee["badge--uppercase"]);return u`<span class=${a}>${e}</span>`}function ls({value:e}){if(e==null||e==="")return u`<span class="u-text-muted">-</span>`;const s=e===1||e==="1"||e===!0||String(e).toLowerCase()==="true";return u`<span class=${ie(ee.badge,ee["badge--bool"],s?ee["badge--bool-true"]:ee["badge--bool-false"])}>${s?"TRUE":"FALSE"}</span>`}const cs=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","CREATED_AT","LAST_UPDATED"]);function ds(e){if(!e||!e.columns)return[];const s=(e==null?void 0:e.column_types)||{};return e.columns.map(t=>{const n=t.toUpperCase(),a=(s[t]||s[n]||"").toUpperCase(),o=cs.has(n),i=a.includes("INT"),d=a.includes("BOOL"),r=o||i||d?"center":void 0;return{key:t,header:n,align:r,render:c=>{const l=c[t];return l==null||l===""?u`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`:d?ls({value:l}):u`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${r==="center"?"text-align: center;":""}" title=${l}>${l}</span>`}}})}function us(){return{view(){var l,f,g,p;const e=h.read(ve.all),s=((l=e.data)==null?void 0:l.items)??[],t=((f=e.data)==null?void 0:f.total)??s.length,n=((g=e.data)==null?void 0:g.limit)??50,a=((p=e.data)==null?void 0:p.offset)??0,o=t===0?0:a+1,i=Math.min(a+s.length,t),d=a>0,r=a+n<t,c=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${o}-${i} of ${t} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(n)}
                ?disabled=${e.isFetching}
                @change=${v=>{const m=Number(v.target.value);G.getPipeline({limit:m,offset:0})}}
              >
                <option value="50" ?selected=${n===50}>50</option>
                <option value="100" ?selected=${n===100}>100</option>
                <option value="200" ?selected=${n===200}>200</option>
                <option value="500" ?selected=${n===500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!d||e.isFetching,onClick:()=>G.getPipeline({offset:Math.max(0,a-n)})})}
              ${x({label:"Next",size:"sm",variant:"secondary",disabled:!r||e.isFetching,onClick:()=>G.getPipeline({offset:a+n})})}
            </div>
          </div>
        </div>
      `;return $e({id:"pipeline-table",snapshot:e,columns:v=>ds(v),getRows:v=>(v==null?void 0:v.items)??[],rowKey:(v,m)=>v.ID??v.id??m,onRetry:()=>G.getPipeline(),footer:c})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=(e,s)=>{var n;const t=e._$AN;if(t===void 0)return!1;for(const a of t)(n=a._$AO)==null||n.call(a,s,!1),ue(a,s);return!0},xe=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},Ye=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),ms(s)}};function ps(e){this._$AN!==void 0?(xe(this),this._$AM=e,Ye(this)):this._$AM=e}function vs(e,s=!1,t=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(s)if(Array.isArray(n))for(let o=t;o<n.length;o++)ue(n[o],!1),xe(n[o]);else n!=null&&(ue(n,!1),xe(n));else ue(this,e)}const ms=e=>{e.type==Ve.CHILD&&(e._$AP??(e._$AP=vs),e._$AQ??(e._$AQ=ps))};class gs extends qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,n){super._$AT(s,t,n),Ye(this),this.isConnected=s._$AU}_$AO(s,t=!0){var n,a;s!==this.isConnected&&(this.isConnected=s,s?(n=this.reconnected)==null||n.call(this):(a=this.disconnected)==null||a.call(this)),t&&(ue(this,s),xe(this))}setValue(s){if(at(this._$Ct))this._$Ct._$AI(s,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=s,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Te=new WeakMap,fs=Ge(class extends gs{render(e){return $}update(e,[s]){var n;const t=s!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=s,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),$}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let t=Te.get(s);t===void 0&&(t=new WeakMap,Te.set(s,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,s;return typeof this.G=="function"?(e=Te.get(this.ht??globalThis))==null?void 0:e.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bs="_9lH80h",ys="_91-Xo5",xs="SEYdJQ",hs="CRt7-E",$s="gj4qUB",Es="hUDIR7",se={modal:bs,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:ys,modal__header:xs,modal__title:hs,modal__body:$s,modal__footer:Es};function J({title:e,size:s="md",body:t,footer:n=$,onClose:a,dismissible:o=!0}){const i=jt("modal-title"),d=l=>{l&&!l.open&&requestAnimationFrame(()=>{!l.open&&l.isConnected&&l.showModal()})},r=l=>{l.preventDefault(),o&&a(void 0)},c=l=>{o&&l.target===l.currentTarget&&a(void 0)};return u`<dialog class=${ie(se.modal,se[`modal--${s}`])} aria-labelledby=${i}
      ${fs(d)} @cancel=${r} @click=${c}>
    <div class=${se.modal__panel}>
      <header class=${se.modal__header}>
        <h2 id=${i} class=${se.modal__title}>${e}</h2>
        ${o?Ht({icon:"x",ariaLabel:"Close dialog",onClick:()=>a(void 0)}):$}
      </header>
      <div class=${se.modal__body}>${t}</div>
      ${n!==$?u`<footer class=${se.modal__footer}>${n}</footer>`:$}
    </div>
  </dialog>`}function me({title:e,message:s,tone:t="danger",confirmLabel:n="Confirm",requireText:a}){return new Promise(o=>{let i="";""+Math.random().toString(36).substring(2);const d=()=>{ye.open(({close:c})=>J({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${s}</p>
            ${a?u`
              <p class="u-text-sm u-text-muted">Type <strong>${a}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${l=>{i=l.target.value,r()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancel",variant:"ghost",onClick:()=>{c(),o(!1)}})}
            ${x({label:n,variant:t==="danger"?"delete":"add",disabled:a?i!==a:!1,onClick:()=>{c(),o(!0)}})}
          </div>
        `,onClose:()=>{c(),o(!1)}}))};function r(){ye.refresh()}d()})}function _s(e){const s=e.get(),t=()=>{e.set(c=>({...c,isManageColumnsModalOpen:!1}))},n=c=>{if(c===0)return;const l=[...s.columnsData],f=l[c-1];l[c-1]=l[c],l[c]=f,e.set(g=>({...g,columnsData:l}))},a=c=>{if(c===s.columnsData.length-1)return;const l=[...s.columnsData],f=l[c+1];l[c+1]=l[c],l[c]=f,e.set(g=>({...g,columnsData:l}))},o=async()=>{const c=s.columnsData.map(l=>l.name);try{await C.put("/api/v1/pipeline/columns/order",{column_order:c}),e.set(l=>({...l,isManageColumnsModalOpen:!1})),G.getPipeline()}catch(l){alert("Failed to save column order: "+l.message)}},i=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await C.post("/api/v1/pipeline/columns/prune");const c=await C.get("/api/v1/pipeline/columns");e.set(l=>({...l,columnsData:c})),G.getPipeline()}catch(c){alert("Failed to prune columns: "+c.message)}},d=u`
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
        ${s.columnsData.map((c,l)=>{const f=c.is_system;return u`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${f?"var(--color-accent)":"var(--color-text)"};">${c.name}</span>
                <span class="u-text-xs u-text-muted">${c.type}</span>
                ${c.is_deprecated?u`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:$}
                ${f?u`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:$}
              </div>
              
              <div class="u-flex u-gap-1">
                ${x({label:"▲",variant:"ghost",size:"sm",disabled:f||l>0&&s.columnsData[l-1].is_system,onClick:()=>n(l)})}
                ${x({label:"▼",variant:"ghost",size:"sm",disabled:f||l===s.columnsData.length-1,onClick:()=>a(l)})}
              </div>
            </div>
          `})}
      </div>
    `:$}
  `,r=u`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${x({label:"Prune Deprecated",variant:"delete",onClick:i})}
      </div>
      <div class="u-flex u-gap-2">
        ${x({label:"Cancel",variant:"secondary",onClick:t})}
        ${x({label:"Save Order",variant:"save",onClick:o})}
      </div>
    </div>
  `;return J({title:"Manage Columns",size:"md",onClose:t,body:d,footer:r})}function ws(){const e=le({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),s=us();let t,n;async function a(){if(await me({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await C.post("/api/v1/pipeline/purge"),G.getPipeline({offset:0})}catch(i){alert("Error purging pipeline: "+i.message)}}return{mount(o){t=h.subscribe(ve.all,()=>o()),n=e.subscribe(()=>o()),G.getPipeline()},unmount(){t&&t(),n&&n()},view(){var f,g;const o=h.read(ve.all),i=((f=o.data)==null?void 0:f.available_stages)??[],d=((g=o.data)==null?void 0:g.available_statuses)??[],r=G.getCurrentParams(),c=r.stage||"",l=r.status||"";return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${x({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${x({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(p=>({...p,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const p=await C.get("/api/v1/pipeline/columns");e.set(v=>({...v,columnsData:p,isLoadingColumns:!1}))}catch(p){alert("Error loading columns: "+p.message),e.set(v=>({...v,isLoadingColumns:!1}))}}})}
              ${x({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div class="u-flex u-gap-2">
              ${x({label:"Sync Now",variant:"secondary",size:"sm",icon:"refresh",onClick:async()=>{try{await C.post("/api/v1/settings/scheduler/restart"),setTimeout(()=>G.getPipeline({offset:0}),1200)}catch(p){alert("Error triggering sync: "+p.message)}}})}
              ${x({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:a})}
            </div>
            <div class="u-flex u-gap-2">
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${p=>{G.getPipeline({stage:p.target.value,offset:0})}}
              >
                <option value="" ?selected=${!c}>All Stages</option>
                ${i.map(p=>u`
                  <option value=${p.id} ?selected=${c===p.id}>${p.name||p.id}</option>
                `)}
              </select>
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${p=>{G.getPipeline({status:p.target.value,offset:0})}}
              >
                <option value="" ?selected=${!l}>All Statuses</option>
                ${d.map(p=>u`
                  <option value=${p} ?selected=${l===p}>${p}</option>
                `)}
              </select>
            </div>
          </div>
          ${s.view()}
          
          ${e.get().isManageColumnsModalOpen?_s(e):$}
        </div>
      `}}}function Ss(){return{view(){var c,l,f;const{status:e,data:s,error:t}=h.read(he.all);if(e==="error")return u`<div class="u-text-danger">${t.message}</div>`;if(e==="loading"||!s)return u`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const n=s.pipeline_total_items||0,a=s.active_incidents||0,o=s.registered_services||0,i=((c=s.telemetry)==null?void 0:c.branch)||"main",d=((l=s.telemetry)==null?void 0:l.clean)!==!1,r=(g,p,v,m,b="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${g}</span>
            <span class="${b}">${re({name:m,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${p}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${v}>${v}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${r("Pipeline Items",n,"Items tracked in universal pipeline","package","u-text-accent")}
            ${r("Active Incidents",a,a>0?`${a} critical anomalies`:"0 critical anomalies","alert",(a>0,"u-text-danger"))}
            ${r("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${r("GitOps Status",i,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(f=s.stages)!=null&&f.length?s.stages.map(g=>u`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${g.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${g.name}</strong> <span class="u-text-muted">(${g.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      ${g.enabled?u`<span class="u-text-xs u-text-success">Active</span>`:u`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):u`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function ks(){const e=Ss();let s;return{mount(t){s=h.subscribe(he.all,()=>t()),Dt.getOverview()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const Me={all:["tools"]},Is={getTools:e=>h.load(Me.all,()=>C.get("/api/v1/tools"),e)},As="cg2FU3",Ts="Jh4yC3",je={console:As,output:Ts};function Cs({text:e,status:s="idle"}){return u`
    <div class=${je.console}>
      <pre class=${je.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function Ms(){const e=le({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let s,t;const n=async a=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await C.post(`/api/v1/tools/${encodeURIComponent(a.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+o.message}))}};return{mount(a){s=h.subscribe(Me.all,()=>a()),t=e.subscribe(()=>a()),Is.getTools()},unmount(){s&&s(),t&&t()},view(){const{status:a,data:o,error:i,isFetching:d}=h.read(Me.all),r=e.get(),c=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${a==="loading"&&!o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:$}
              ${a==="error"&&!o?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:$}
              ${c.length===0&&o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:$}
              
              ${c.map(l=>{var f,g,p;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((f=r.selectedTool)==null?void 0:f.name)===l.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((g=r.selectedTool)==null?void 0:g.name)===l.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(v=>({...v,selectedTool:l,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((p=r.selectedTool)==null?void 0:p.name)===l.name?"u-text-accent":""}">${l.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${l.description}>${l.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${r.selectedTool,"Select a tool to execute"}</h3>
              ${x({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>n(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${Cs({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const Re={all:["views"]},Ke={getViews:e=>h.load(Re.all,()=>C.get("/api/v1/views"),e)};function Os(){return{view(){var t;const e=h.read(Re.all),s=Array.isArray(e.data)?e.data:((t=e.data)==null?void 0:t.items)??[];return!s.length&&e.status!=="loading"?u`
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
        `:$e({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>s,onRetry:()=>Ke.getViews()})}}}function Rs(){const e=Os();let s;return{mount(t){s=h.subscribe(Re.all,()=>t()),Ke.getViews()},unmount(){s&&s()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const q={all:["incidents"],list:e=>[...q.all,e?"resolved":"active"],catalog:["incidents","catalog"]},ae={getIncidents:(e,s)=>h.load(q.list(e),()=>C.get("/api/v1/incidents",{query:{resolved:e?1:0}}),s),resolveIncident:(e,s)=>C.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:s||""}),createIncident:e=>C.post("/api/v1/incidents",e),getCatalog:e=>h.load(q.catalog,()=>C.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>C.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>C.delete(`/api/v1/incidents/catalog/errors/${e}`)};function Fe({resolved:e}){const s=Rt(h,{mutationFn:a=>ae.resolveIncident(a.id,a.note),invalidates:[q.all]});async function t(a){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await me({title:"Resolve Incident",message:`Are you sure you want to mark incident #${a} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await s({id:a,note:o})}catch(d){alert("Failed to resolve incident: "+d.message)}}const n=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:a=>{const o=a.SEVERITY==="CRITICAL"?"danger":a.SEVERITY==="WARNING"?"warning":"info";return be({label:a.SEVERITY||"INFO",tone:o})}},{key:"COMPONENT",header:"Component",render:a=>u`<strong class="u-text-sm">${a.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:a=>u`<span class="u-font-mono u-text-xs">${a.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:a=>u`<span class="u-text-sm">${a.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:a=>a.REMEDY?u`<span class="u-text-xs u-text-muted">${a.REMEDY}</span>`:$},{key:"CREATED_AT",header:"Created At",mono:!0,render:a=>u`<span class="u-text-xs u-text-muted">${a.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:a=>a.RESOLVED?u`<span class="u-text-success u-text-xs">Resolved${a.RESOLUTION_NOTE?`: ${a.RESOLUTION_NOTE}`:""}</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>t(a.ID)})}];return{view(){const a=h.read(q.list(e));return $e({id:`incidents-table-${e?"resolved":"active"}`,columns:n,snapshot:a,getRows:o=>(o==null?void 0:o.items)??(Array.isArray(o)?o:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function Ns({onEditError:e}={}){const s=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const n=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${n}) 20%, transparent); color: var(--color-${n}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>x({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(t)})}];return{view(){const t=h.read(q.catalog);return $e({id:"error-catalog-table",columns:s,snapshot:t,getRows:n=>Array.isArray(n)?n:(n==null?void 0:n.value)||(n==null?void 0:n.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>ae.getCatalog()})}}}function Ds({onClose:e,onIncidentCreated:s}){let t=!1;async function n(i){i.preventDefault();const d=i.target,r=d.incident_code.value.trim().toUpperCase(),c=d.severity.value,l=d.component.value.trim(),f=d.details.value.trim();if(!r||!l||!f){alert("Please fill in Code, Component, and Details.");return}t=!0;try{await ae.createIncident({incident_code:r,severity:c,component:l,details:f}),h.invalidate(q.all),s==null||s(),e()}catch(g){alert("Failed to report incident: "+g.message)}finally{t=!1}}const a=u`
    <form id="report-incident-form" @submit=${n}>
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
      ${x({label:"Cancel",variant:"secondary",onClick:e})}
      ${x({label:"Report Incident",variant:"save",type:"submit",loading:t,onClick:()=>{const i=document.getElementById("report-incident-form");i&&i.requestSubmit()}})}
    </div>
  `;return J({title:"Report System Incident",size:"md",onClose:e,body:a,footer:o})}function Ps({onClose:e,onErrorCreated:s,initialData:t=null}){let n=!1;const a=!!(t&&t.ERROR_CODE);async function o(r){var b;r.preventDefault();const c=r.target,l=c.error_code.value.trim().toUpperCase(),f=c.category.value.trim().toUpperCase(),g=c.severity.value,p=c.description.value.trim(),v=c.trigger_condition.value.trim(),m=c.remedy.value.trim();if(!l||!f||!p){alert("Please fill in Error Code, Category, and Description.");return}if(!a){const y=h.read(q.catalog),E=(Array.isArray(y==null?void 0:y.data)?y.data:((b=y==null?void 0:y.data)==null?void 0:b.items)??[]).find(k=>k.ERROR_CODE===l);if(E&&!await me({title:"Error Template Already Exists",message:`An error template with code '${l}' is already registered under category '${E.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}n=!0;try{await ae.upsertError({error_code:l,category:f,severity:g,description:p,trigger_condition:v,remedy:m}),h.invalidate(q.catalog),s==null||s(),e()}catch(y){alert("Failed to save error template: "+y.message)}finally{n=!1}}const i=u`
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
      ${x({label:"Cancel",variant:"secondary",onClick:e})}
      ${x({label:a?"Update Error":"Register Error",variant:"save",type:"submit",loading:n,onClick:()=>{const r=document.getElementById("add-error-form");r&&r.requestSubmit()}})}
    </div>
  `;return J({title:a?`Edit Error: ${t.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:i,footer:d})}function Ls(){const e=le({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),s=Fe({resolved:!1}),t=Fe({resolved:!0}),n=Ns({onEditError:r=>e.set(c=>({...c,isAddErrorModalOpen:!0,editingError:r}))});let a,o,i,d;return{mount(r){a=h.subscribe(q.list(!1),()=>r()),o=h.subscribe(q.list(!0),()=>r()),i=h.subscribe(q.catalog,()=>r()),d=e.subscribe(()=>r()),ae.getIncidents(!1),ae.getIncidents(!0),ae.getCatalog()},unmount(){a&&a(),o&&o(),i&&i(),d&&d()},view(){const{activeTab:r,isReportModalOpen:c,isAddErrorModalOpen:l,editingError:f}=e.get(),g=(p,v,m)=>{const b=r===p;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(k=>({...k,activeTab:p}))}
          >
            ${re({name:v,size:16})}
            <span>${m}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${g("active","alert","Active Incidents")}
              ${g("resolved","check","Resolved")}
              ${g("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(r==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(p=>({...p,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(p=>({...p,isReportModalOpen:!0}))})}
          </div>
          
          ${r==="active"?s.view():$}
          ${r==="resolved"?t.view():$}
          ${r==="catalog"?n.view():$}

          <!-- Modals -->
          ${c?Ds({onClose:()=>e.set(p=>({...p,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):$}

          ${l?Ps({onClose:()=>e.set(p=>({...p,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:f}):$}
        </div>
      `}}}const Oe={all:["gitops"]},zs={getGitOps:e=>h.load(Oe.all,()=>C.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function Bs(){let e;return{mount(s){e=h.subscribe(Oe.all,()=>s()),zs.getGitOps()},unmount(){e&&e()},view(){const s=h.read(Oe.all),{status:t,data:n,error:a,isFetching:o}=s;if(t==="loading"&&!n)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(t==="error"&&!n)return u`<p class="u-text-danger">Error: ${a==null?void 0:a.message}</p>`;const i=(n==null?void 0:n.telemetry)||{};return u`
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
      `}}}const T={all:["settings"]},js={getSettings:e=>h.load(T.all,()=>C.get("/api/v1/settings"),e),saveConfig:e=>C.post("/api/v1/settings/config",e),triggerSweep:()=>C.post("/api/v1/settings/sweep"),triggerBackup:()=>C.post("/api/v1/settings/backup")};function Fs(e,s={},t=300){const n=Object.keys(s),a=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},o=(i,d,r)=>{var f;const c=((f=d.field_mappings)==null?void 0:f.length)||0,l=Object.keys(d.enrichment_endpoints||{}).join(", ");return u`
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
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(g=>({...g,isServiceModalOpen:!0,editingServiceId:i}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${d.base_url||"N/A"} | API Key ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${c}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${l||"none"}</span>
        </div>
      </div>
    `};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${n.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:$}
        ${n.map((i,d)=>o(i,s[i],d===n.length-1))}
      </div>
    </div>
  `}function Us(e){var H;const s=e.get(),t=h.read(T.all),n=((H=t==null?void 0:t.data)==null?void 0:H.services)||{},a=s.editingServiceId?n[s.editingServiceId]:null,o=s.serviceAllowedEvents!==void 0?s.serviceAllowedEvents:(a==null?void 0:a.allowed_event_types)||[],i=s.serviceDiscoveredEvents||[],d=s.isDiscoveringEvents||!1,r=s.discoveryEventsError||null,c=()=>{const I=document.getElementById("srv-name"),w=document.getElementById("srv-id"),B=document.getElementById("srv-url"),F=document.getElementById("srv-api"),M=document.getElementById("chk-service-inherit-poll"),j=document.getElementById("srv-endpoint"),Y=document.getElementById("srv-pipeline"),Q=document.getElementById("srv-enrich"),z=document.getElementById("chk-service-enabled");return{name:I?I.value:(a==null?void 0:a.name)||"",id:w?w.value:s.editingServiceId||"",base_url:B?B.value:(a==null?void 0:a.base_url)||"",api_key:F?F.value:(a==null?void 0:a.api_key)||"",inherit_poll:M?M.checked:a?a.poll_interval_seconds==null:!0,poll_endpoint:j?j.value:(a==null?void 0:a.poll_endpoint)||(a==null?void 0:a.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pipeline_key_template:Y?Y.value:(a==null?void 0:a.pipeline_key_template)||"{service}:{id}",enrichments:Q?Q.value:a!=null&&a.enrichment_endpoints?Object.entries(a.enrichment_endpoints).map(([Z,ge])=>`${Z}: ${ge}`).join(`
`):"",enabled:z?z.checked:a?a.enabled:!0}},l=()=>{e.set(I=>({...I,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))},f=()=>{var I,w,B,F,M,j,Y,Q,z;try{const Z=(((I=document.getElementById("srv-id"))==null?void 0:I.value)||"").trim();if(!Z){alert("Service ID is required");return}const ge=(((w=document.getElementById("srv-enrich"))==null?void 0:w.value)||"").trim(),Ne={};ge&&ge.split(`
`).forEach(_e=>{const we=_e.split(":");we.length>=2&&(Ne[we[0].trim()]=we.slice(1).join(":").trim())});const Je={name:(((B=document.getElementById("srv-name"))==null?void 0:B.value)||"").trim()||Z,base_url:(((F=document.getElementById("srv-url"))==null?void 0:F.value)||"").trim(),api_key:(((M=document.getElementById("srv-api"))==null?void 0:M.value)||"").trim(),poll_interval_seconds:(j=document.getElementById("chk-service-inherit-poll"))!=null&&j.checked?null:60,poll_endpoint:(((Y=document.getElementById("srv-endpoint"))==null?void 0:Y.value)||"").trim(),pipeline_key_template:(((Q=document.getElementById("srv-pipeline"))==null?void 0:Q.value)||"").trim(),enrichment_endpoints:Ne,enabled:((z=document.getElementById("chk-service-enabled"))==null?void 0:z.checked)??!0,allowed_event_types:o,field_mappings:(a==null?void 0:a.field_mappings)||[]},De={...n,[Z]:Je};s.editingServiceId&&s.editingServiceId!==Z&&delete De[s.editingServiceId],h.setData(T.all,()=>({...t.data,services:De})),e.set(_e=>({..._e,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))}catch(Z){alert("Error saving service: "+Z.stack)}},g=async()=>{var F;const I=c(),w=I.id.trim(),B=I.poll_endpoint.trim()||"/api/v3/history";if(!w){alert("Service ID is required before discovering events.");return}e.set(M=>({...M,serviceModalDraft:I,isDiscoveringEvents:!0,discoveryEventsError:null}));try{const M=await C.post("/api/v1/pipeline/sample",{service_id:w,endpoint:B});if(M&&M.success===!1){e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:M.error||"Failed to discover events from API."}));return}let j=[];Array.isArray(M==null?void 0:M.sample_payload)?j=M.sample_payload:(F=M==null?void 0:M.sample_payload)!=null&&F.records&&Array.isArray(M.sample_payload.records)?j=M.sample_payload.records:M!=null&&M.sample_payload&&typeof M.sample_payload=="object"&&(j=[M.sample_payload]);const Y=new Set;for(const z of j)z&&typeof z=="object"&&(z.eventType?Y.add(String(z.eventType)):z.event_type?Y.add(String(z.event_type)):z.type&&Y.add(String(z.type)));const Q=Array.from(Y);e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,serviceDiscoveredEvents:Q,discoveryEventsError:Q.length===0?`No eventType found in sample payload (${j.length} records).`:null}))}catch(M){e.set(j=>({...j,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:M.message||"Error communicating with sample endpoint."}))}},p=I=>{const w=c();let B;o.includes(I)?B=o.filter(F=>F!==I):B=[...o,I],e.set(F=>({...F,serviceModalDraft:w,serviceAllowedEvents:B}))},v=I=>{const w=c();I==="sonarr"?(w.name=w.name||"Sonarr",w.id=w.id||"sonarr",w.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",w.pipeline_key_template="{service}:{id}",w.enrichments=`episode: /api/v3/episode/{episodeId}
series: /api/v3/series/{seriesId}`):I==="radarr"?(w.name=w.name||"Radarr",w.id=w.id||"radarr",w.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",w.pipeline_key_template="{service}:{id}",w.enrichments="movie: /api/v3/movie/{movieId}"):I==="jellyfin"?(w.name=w.name||"Jellyfin",w.id=w.id||"jellyfin",w.poll_endpoint="/Items?Recursive=true",w.pipeline_key_template="{service}:{Id}"):I==="shoko"&&(w.name=w.name||"Shoko",w.id=w.id||"shoko",w.poll_endpoint="/api/v3/Series",w.pipeline_key_template="{service}:{id}"),e.set(B=>({...B,serviceModalDraft:w}))},m=s.serviceModalDraft,b=m?m.name:(a==null?void 0:a.name)||"",y=m?m.id:s.editingServiceId||"",S=m?m.base_url:(a==null?void 0:a.base_url)||"",E=m?m.api_key:(a==null?void 0:a.api_key)||"",k=m?m.inherit_poll:a?a.poll_interval_seconds==null:!0,O=m?m.poll_endpoint:(a==null?void 0:a.poll_endpoint)||(a==null?void 0:a.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",N=m?m.pipeline_key_template:(a==null?void 0:a.pipeline_key_template)||"{service}:{id}",_=m?m.enrichments:a!=null&&a.enrichment_endpoints?Object.entries(a.enrichment_endpoints).map(([I,w])=>`${I}: ${w}`).join(`
`):"",R=m?m.enabled:a?a.enabled:!0,A=Array.from(new Set([...o,...i])),D=u`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${x({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>v("sonarr")})}
      ${x({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>v("radarr")})}
      ${x({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>v("jellyfin")})}
      ${x({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>v("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${b}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${y} @input=${I=>{I.target.value=I.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${S}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${E}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${k}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${O}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${N}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${_}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${x({label:d?"Discovering...":"Discover Events from API",variant:"secondary",size:"sm",loading:d,disabled:d,onClick:g})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        
        ${r?u`<div class="u-text-danger u-text-xs u-mb-2">${r}</div>`:$}

        ${A.length>0?u`
          <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ${A.map(I=>{const w=o.includes(I);return u`
                <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${w?"var(--color-accent)":"var(--color-border)"}; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    .checked=${w}
                    @change=${()=>p(I)}
                  >
                  <span class="font-mono u-text-xs" style="color: ${w?"var(--color-accent)":"var(--color-text)"}; font-weight: ${w?"600":"normal"};">
                    ${I}
                  </span>
                </label>
              `})}
          </div>
        `:u`
          <div class="u-text-muted u-text-sm">Click 'Discover Events from API' to fetch supported eventTypes from the primary poll endpoint.</div>
        `}
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${R}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,X=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:l})}
      ${x({label:s.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:f})}
    </div>
  `;return J({title:s.editingServiceId?"Edit Service":"Register Service",size:"lg",onClose:l,body:D,footer:X})}function Vs({checked:e=!1,onChange:s,label:t=""}){return u`
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
      <input type="checkbox" .checked=${e} @change=${n=>s(n.target.checked)}>
      <span class="slider"></span>
      ${t?u`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${t}</span>`:""}
    </label>
  `}function Gs(e,s=[]){const t=()=>{e.set(o=>({...o,isStageModalOpen:!0,editingStageId:null}))},n=(o,i)=>{const d=h.read(T.all);if(!d||!d.data)return;const r=[...d.data.stages],c=o+i;c<0||c>=r.length||([r[o],r[c]]=[r[c],r[o]],h.setData(T.all,()=>({...d.data,stages:r})),e.set(l=>({...l,isDirty:!0})))},a=o=>o.start_condition?o.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${s.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:s.map((o,i)=>{const d=a(o);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${d.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${d.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${o.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${o.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${d.bg}; color: ${d.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${d.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Vs({checked:o.enabled,label:o.enabled?"ACTIVE":"INACTIVE",onChange:r=>{const c={...h.read(T.all).data},l=c.stages.find(f=>f.id===o.id);l&&(l.enabled=r,r&&!l.start_condition&&!l.last_activated_at&&(l.last_activated_at=new Date().toISOString()),h.setData(T.all,()=>c),e.set(f=>({...f,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${x({label:"↑",variant:"ghost",size:"sm",disabled:i===0,onClick:()=>n(i,-1)})}
                      ${x({label:"↓",variant:"ghost",size:"sm",disabled:i===s.length-1,onClick:()=>n(i,1)})}
                      ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(r=>({...r,isStageModalOpen:!0,editingStageId:o.id}))})}
                      ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
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
  `}function qs(e){if(!e)return"";try{const s=new Date(e);if(isNaN(s.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}T${t(s.getHours())}:${t(s.getMinutes())}`}catch{return""}}function Hs(e){var p,v,m;const s=e.get(),t=h.read(T.all),n=((p=t==null?void 0:t.data)==null?void 0:p.stages)||[],a=((v=t==null?void 0:t.data)==null?void 0:v.services)||((m=t==null?void 0:t.data)==null?void 0:m.apps)||{},o=Object.keys(a),i=s.editingStageId?n.find(b=>b.id===s.editingStageId):null,d=s.stageIsSink??(i?!i.complete_condition:!1),r=s.stageIsRoot??(i?!i.start_condition:!1),c=()=>{e.set(b=>({...b,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},l=()=>{var b,y,S;try{const E=document.getElementById("stage-id").value.trim();if(!E){alert("Stage ID is required");return}let k=null;if(r){const _=(b=document.getElementById("stage-last-activated"))==null?void 0:b.value;if(_)try{k=new Date(_).toISOString()}catch{k=(i==null?void 0:i.last_activated_at)||null}}const O={id:E,name:document.getElementById("stage-name").value.trim()||E,description:document.getElementById("stage-desc").value.trim(),service_ids:Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(_=>_.value),start_condition:r?null:((y=document.getElementById("stage-start"))==null?void 0:y.value.trim())||null,complete_condition:d?null:((S=document.getElementById("stage-complete"))==null?void 0:S.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:i?i.order:n.length+1,last_activated_at:k};let N=[...n];s.editingStageId?N=N.map(_=>_.id===s.editingStageId?O:_):N.push(O),h.setData(T.all,()=>({...t.data,stages:N})),e.set(_=>({..._,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(E){alert("Error in Save Stage: "+E.stack)}},f=u`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(i==null?void 0:i.id)||""} ?disabled=${!!i} @input=${b=>{b.target.value=b.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(i==null?void 0:i.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(i==null?void 0:i.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services</label>
      <div class="services-checkbox-grid" style="display: flex; gap: var(--space-3); flex-wrap: wrap; background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
        ${o.length===0?u`<span class="u-text-muted u-text-sm">No services configured.</span>`:o.map(b=>{var y;return u`
          <label class="form-checkbox" style="cursor: pointer; padding: 4px 8px; background: var(--color-bg-card); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <input type="checkbox" name="stage-service" value=${b} ?checked=${(y=i==null?void 0:i.service_ids)==null?void 0:y.includes(b)}>
            <span class="u-text-sm font-mono">${b}</span>
          </label>
        `})}
      </div>
      <small class="u-text-muted">Select services operating within this pipeline stage.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${r} @change=${b=>e.set(y=>({...y,stageIsRoot:b.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${r?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(i==null?void 0:i.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-start").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>

      <div style="display: ${r?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Only service events occurring on or after this timestamp will be ingested. Leave empty to ingest all events without cutoff.</p>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${qs(i?i.last_activated_at:r?new Date().toISOString():"")}>
          ${x({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");if(b){const y=new Date,S=E=>String(E).padStart(2,"0");b.value=`${y.getFullYear()}-${S(y.getMonth()+1)}-${S(y.getDate())}T${S(y.getHours())}:${S(y.getMinutes())}`}}})}
          ${x({label:"Clear",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");b&&(b.value="")}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${d} @change=${b=>e.set(y=>({...y,stageIsSink:b.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${d?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(i==null?void 0:i.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-complete").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(i==null?void 0:i.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(i==null?void 0:i.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${i?i.enabled:!1}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,g=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:c})}
      ${x({label:s.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:l})}
    </div>
  `;return J({title:"Configure DAG Stage",size:"lg",onClose:c,body:f,footer:g})}function Ys(e,s={}){const t=Object.keys(s),n=e.get().selectedMappingService||t[0]||"",a=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0,selectedMappingService:n}))},o=()=>{e.set(l=>({...l,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},i=(l,f)=>{e.set(g=>({...g,isMappingModalOpen:!0,editingMapping:{...l},editingMappingIndex:f}))},d=(l,f)=>{const p={...h.read(T.all).data},v=p.services[n].field_mappings,m=l+f;if(m<0||m>=v.length)return;const b=v[l];v[l]=v[m],v[m]=b,h.setData(T.all,()=>p),e.set(y=>({...y,isDirty:!0}))},r=l=>{if(confirm("Are you sure you want to delete this mapping?")){const g={...h.read(T.all).data};g.services[n].field_mappings.splice(l,1),h.setData(T.all,()=>g),e.set(p=>({...p,isDirty:!0}))}},c=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(f=>({...f,selectedMappingService:l.target.value}))}
        >
          ${t.map(l=>u`<option value="${l}" ?selected=${l===n}>${s[l].name}</option>`)}
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
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:a})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${t.length>0?c():$}
        
        ${(()=>{const l=s[n];return!l||!l.field_mappings||l.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map((f,g)=>u`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${f.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${f.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${f.data_type})</span>
                    ${f.transformer?u`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${f.transformer}</div>`:$}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"▲",variant:"ghost",size:"sm",disabled:g===0,ariaLabel:"Move Up",onClick:()=>d(g,-1)})}
                    ${x({label:"▼",variant:"ghost",size:"sm",disabled:g===l.field_mappings.length-1,ariaLabel:"Move Down",onClick:()=>d(g,1)})}
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>i(f,g)})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>r(g)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function Ks(e){const s=e.get(),t=s.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},n=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},a=()=>{const r={...h.read(T.all).data},c=Object.keys(r.services||{}),l=s.selectedMappingService||c[0];l&&(r.services[l].field_mappings||(r.services[l].field_mappings=[]),s.editingMappingIndex>=0?r.services[l].field_mappings[s.editingMappingIndex]=t:r.services[l].field_mappings.push(t),h.setData(T.all,()=>r),e.set(f=>({...f,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},o=u`
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
          ${x({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let r;try{r=JSON.parse(d)}catch{r=d}try{const c={expression:t.transformer,sample_value:r};typeof r=="object"&&r!==null&&!Array.isArray(r)&&(c.context_dict=r);const l=await C.post("/api/v1/settings/test-transformer",c);l.valid?alert("Result: "+JSON.stringify(l.result)):alert("Error: "+l.message)}catch(c){alert("Error: "+c.message)}}})}
        </div>
      </div>
    </div>
  `,i=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:n})}
      ${x({label:"Save Mapping",variant:"save",onClick:a})}
    </div>
  `;return J({title:"Configure Field Mapping & Transformer",size:"lg",onClose:n,body:o,footer:i})}function Ws(e){var N;const s=e.get(),t=h.read(T.all),n=((N=t==null?void 0:t.data)==null?void 0:N.services)||{},a=Object.keys(n),o=s.selectedMappingService||a[0]||"",i=n[o],d=(i==null?void 0:i.name)||o||"No Service Selected",r=(i==null?void 0:i.poll_endpoint)||"/api/v3/history",c=s.sampleApiEndpoint!==void 0?s.sampleApiEndpoint:r,l=s.sampleApiLoading||!1,f=s.sampleApiError||null,g=s.sampleApiFields||null,p=(s.sampleApiFilter||"").trim().toLowerCase(),v=(s.sampleApiPrefix||"").trim(),m=()=>{e.set(_=>({..._,isSampleApiModalOpen:!1,sampleApiLoading:!1,sampleApiError:null,sampleApiFilter:"",sampleApiFields:null}))},b=async()=>{const _=document.getElementById("sample-endpoint-input"),R=_?_.value.trim():c;if(!o){alert("Please select or configure a service before sampling.");return}if(!R){alert("Please provide an endpoint to sample.");return}e.set(A=>({...A,sampleApiLoading:!0,sampleApiError:null,sampleApiEndpoint:R}));try{const A=await C.post("/api/v1/pipeline/sample",{service_id:o,endpoint:R});A&&A.success===!1?e.set(D=>({...D,sampleApiLoading:!1,sampleApiError:A.error||"Failed to sample API endpoint",sampleApiFields:[]})):e.set(D=>({...D,sampleApiLoading:!1,sampleApiFields:A.fields||[],sampleApiError:null}))}catch(A){e.set(D=>({...D,sampleApiLoading:!1,sampleApiError:A.message||"Error communicating with sample endpoint",sampleApiFields:[]}))}},y=_=>{const R=document.getElementById("sample-namespace-prefix"),A=R?R.value.trim():v,D=A?`${A}.${_.path}`:_.path,X=D.replace(/[^a-zA-Z0-9_]/g,"_").toUpperCase(),I={int:"INTEGER",float:"REAL",bool:"BOOLEAN",str:"TEXT",list:"TEXT",dict:"TEXT"}[_.type]||"TEXT";e.set(w=>({...w,isSampleApiModalOpen:!1,isMappingModalOpen:!0,editingMapping:{source_field:D,target_column:X,data_type:I,transformer:""},editingMappingIndex:-1}))},S=g?g.filter(_=>p?_.path&&_.path.toLowerCase().includes(p)||_.type&&_.type.toLowerCase().includes(p)||_.sample&&String(_.sample).toLowerCase().includes(p):!0):[],E=()=>l?u`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Fetching and analyzing schema from <code>${c}</code>...</p>
        </div>
      `:f?u`
        <div style="background: color-mix(in srgb, var(--color-danger) 10%, transparent); border-radius: var(--radius-md); border: 1px solid var(--color-danger); padding: var(--space-4);">
          <strong class="u-text-danger u-text-sm">Sampling Error:</strong>
          <p class="u-text-danger u-text-xs u-mt-1 font-mono" style="margin-bottom: 0;">${f}</p>
        </div>
      `:g===null?u`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Click <strong>Fetch Sample</strong> to inspect payload JSON schema and available keys.</p>
        </div>
      `:g.length===0?u`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields discovered at this endpoint.</p>
        </div>
      `:S.length===0?u`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields match the current filter "<strong>${p}</strong>".</p>
        </div>
      `:u`
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
            ${S.map(_=>u`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                <td style="padding: 8px 12px;">
                  <span class="font-mono" style="color: var(--color-text); font-weight: 600;">${_.path}</span>
                </td>
                <td style="padding: 8px 12px;">
                  <span class="font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 15%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${_.type}</span>
                </td>
                <td style="padding: 8px 12px;">
                  <span class="font-mono u-text-xs u-text-muted" style="word-break: break-all;">${_.sample}</span>
                </td>
                <td style="padding: 8px 12px; text-align: right;">
                  ${x({label:"+ Map",variant:"secondary",size:"sm",onClick:()=>y(_)})}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${S.length} of ${g.length} discovered fields.
      </div>
    `,k=u`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 6px 10px; border-radius: 4px; font-weight: bold; white-space: nowrap;">
        ${d} (${o})
      </span>
      <input 
        type="text" 
        id="sample-endpoint-input"
        list="common-endpoints-list" 
        class="form-input font-mono" 
        placeholder="Select an endpoint below or type custom..." 
        style="flex: 1;"
        .value=${c}
        @input=${_=>e.set(R=>({...R,sampleApiEndpoint:_.target.value}))}
      >
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${x({label:l?"Fetching...":"Fetch Sample",variant:"test",loading:l,disabled:l,onClick:b})}
    </div>
    
    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input 
          type="text" 
          id="sample-filter-input"
          class="form-input" 
          placeholder="🔍 Filter discovered attributes (e.g. episode, id, title)..."
          .value=${s.sampleApiFilter||""}
          @input=${_=>e.set(R=>({...R,sampleApiFilter:_.target.value}))}
        >
        <!-- UX-01: Add Namespace Prefix input -->
        <input 
          type="text" 
          id="sample-namespace-prefix"
          class="form-input font-mono" 
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${s.sampleApiPrefix||""}
          @input=${_=>e.set(R=>({...R,sampleApiPrefix:_.target.value}))}
        >
      </div>
    </div>
    
    ${E()}
  `,O=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:m})}
    </div>
  `;return J({title:"Sample Service API Schema",size:"lg",onClose:m,body:k,footer:O})}function Js(e,s={}){const t=Array.isArray(s.notification_triggers)?s.notification_triggers:Array.isArray(s.triggers)?s.triggers:[],n=()=>{e.set(r=>({...r,isNotificationModalOpen:!0}))},a=async r=>{try{const c=await C.post("/api/v1/settings/test-notification",{trigger_id:r==null?void 0:r.id,channel:(r==null?void 0:r.channel)||"ntfy",target_url:(r==null?void 0:r.target_url)||"http://host.docker.internal:8090",topic:(r==null?void 0:r.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(r==null?void 0:r.id)||"manual"}`});if(c&&c.success)alert(`✓ Notification successfully dispatched to ${(r==null?void 0:r.channel)||"ntfy"}`);else{const l=(c==null?void 0:c.error)||(c!=null&&c.status_code?`HTTP ${c.status_code}: ${c.response||"Failed"}`:(c==null?void 0:c.response)||"Unknown response");alert(`Failed to send alert: ${l}`)}}catch(c){alert(`Error sending test notification: ${c.message}`)}},o=async r=>{if(await me({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${r}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const l=h.read(T.all);if(!l||!l.data)return;const g=(Array.isArray(l.data.notification_triggers)?l.data.notification_triggers:[]).filter(p=>p.id!==r);h.setData(T.all,p=>({...p,notification_triggers:g})),e.set(p=>({...p,isDirty:!0}))}},i=(r,c)=>{const l=h.read(T.all);if(!l||!l.data)return;const g=(Array.isArray(l.data.notification_triggers)?l.data.notification_triggers:[]).map(p=>p.id===r?{...p,enabled:!c}:p);h.setData(T.all,p=>({...p,notification_triggers:g})),e.set(p=>({...p,isDirty:!0}))},d=r=>r.includes("OPEN")||r.includes("FAIL")?"warning":r.includes("RESOLVED")||r.includes("SUCCESS")||r.includes("COMPLETE")?"success":"info";return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>a({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${x({label:"+ Add Trigger",variant:"save",size:"sm",onClick:n})}
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
                  ${be({label:r.event||"ON_INCIDENT_OPEN",tone:d(r.event||"")})}
                  ${be({label:r.channel||"ntfy",tone:"neutral"})}
                  ${r.enabled===!1?be({label:"Disabled",tone:"danger"}):$}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>i(r.id,r.enabled!==!1)}
                  >
                    ${r.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${x({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>a(r)})}
                  ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>o(r.id)})}
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
  `}function Xs(e){const s=()=>{e.set(o=>({...o,isNotificationModalOpen:!1}))},t=o=>{var y,S,E,k,O,N,_,R;o&&o.preventDefault();const i=(y=document.getElementById("input-trig-id"))==null?void 0:y.value.trim();if(!i){alert("Trigger ID is required.");return}const d=(S=document.getElementById("input-trig-event"))==null?void 0:S.value,r=(E=document.getElementById("input-trig-channel"))==null?void 0:E.value,c=(k=document.getElementById("input-trig-url"))==null?void 0:k.value.trim();if(!c){alert("Target URL is required.");return}const l=((O=document.getElementById("input-trig-topic"))==null?void 0:O.value.trim())||"",f=((N=document.getElementById("input-trig-priority"))==null?void 0:N.value.trim())||"default",g=((_=document.getElementById("input-trig-tags"))==null?void 0:_.value.trim())||"server",p=((R=document.getElementById("input-trig-template"))==null?void 0:R.value.trim())||"{event}: {details}",v=h.read(T.all);if(!v||!v.data)return;const b=(Array.isArray(v.data.notification_triggers)?[...v.data.notification_triggers]:[]).filter(A=>A.id!==i);b.push({id:i,event:d,enabled:!0,channel:r,target_url:c,topic:l,priority:f,tags:g,message_template:p}),h.setData(T.all,A=>({...A,notification_triggers:b})),e.set(A=>({...A,isDirty:!0,isNotificationModalOpen:!1}))},n=u`
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
      ${x({label:"Cancel",variant:"secondary",onClick:s})}
      ${x({label:"Save Trigger",variant:"save",onClick:()=>t()})}
    </div>
  `;return J({title:"Configure Notification Trigger",size:"md",onClose:s,body:n,footer:a})}function Qs(e,s={}){const t=s.retention_days||30,n=s.global_poll_interval_seconds||300;return u`
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
                @input=${a=>{const i={...h.read(T.all).data,retention_days:parseInt(a.target.value,10)||30};h.setData(T.all,()=>i),e.set(d=>({...d,isDirty:!0}))}}>
              <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
            </div>
            <div class="form-group">
              <label>Global Polling Interval (Seconds)</label>
              <input type="number" class="form-input" min="10" max="86400" .value=${n}
                @input=${a=>{const i={...h.read(T.all).data,global_poll_interval_seconds:parseInt(a.target.value,10)||300};h.setData(T.all,()=>i),e.set(d=>({...d,isDirty:!0}))}}>
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
  `}function Zs(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const s=new Set;return{get:()=>e,set:t=>{e=t(e),s.forEach(n=>n())},subscribe:t=>(s.add(t),()=>s.delete(t))}}function We(){const e=Zs(),s=async()=>{var b,y;const o=e.get(),{selectedService:i,selectedRecordId:d,testEndpoint:r,testName:c}=o;if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const l=h.read(T.all),g=(((b=l==null?void 0:l.data)==null?void 0:b.services)||{})[i],p={...(g==null?void 0:g.enrichment_endpoints)||{}},v=c.trim()||"sandbox_test",m=!!r.trim();m&&(p[v]=r.trim()),e.set(S=>({...S,isLoading:!0,error:null,logs:[],testResponse:null}));try{const S=await C.post("/api/v1/pipeline/sandbox/enrichment",{service_id:i,record_id:parseInt(d,10),enrichment_endpoints:p}),E=m?((y=S.context_data)==null?void 0:y[v])||null:S.context_data;e.set(k=>({...k,isLoading:!1,logs:S.logs||[],testResponse:E}))}catch(S){e.set(E=>({...E,isLoading:!1,error:S.message}))}},t=async()=>{var v;const o=e.get();if(!o.selectedService)return;const i=h.read(T.all),d=((v=i==null?void 0:i.data)==null?void 0:v.services)||{},r=d[o.selectedService],c={...(r==null?void 0:r.enrichment_endpoints)||{}},l=o.testName.trim(),f=o.testEndpoint.trim();if(!l||!f){alert("Please provide both a namespace name and an endpoint to save.");return}c[l]=f;const g={...d,[o.selectedService]:{...r,enrichment_endpoints:c}},p={...i.data,services:g};try{await C.post("/api/v1/settings/config",p),h.setData(T.all,()=>p),e.set(m=>({...m,saveSuccess:!0})),setTimeout(()=>{e.set(m=>({...m,saveSuccess:!1}))},3e3)}catch(m){alert("Failed to save to service: "+m.message)}},n=()=>{var g;const o=e.get(),i=h.read(T.all),d=((g=i==null?void 0:i.data)==null?void 0:g.services)||{},r=Object.keys(d),c=d[o.selectedService];!o.selectedService&&r.length>0&&setTimeout(()=>e.set(p=>({...p,selectedService:r[0]})),0);const l=(p,v)=>{if(!(!v||!p))try{return v.split(".").reduce((m,b)=>m&&m[b]!==void 0?m[b]:void 0,p)}catch{return}},f=o.testVariable.trim()?l(o.testResponse,o.testVariable.trim()):void 0;return u`
      <div class="page-container" style="display: flex; flex-direction: column; height: 100%; min-height: 500px;">
        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${p=>e.set(v=>({...v,selectedService:p.target.value}))} style="border: 1px solid var(--color-text);">
              ${r.length===0?u`<option value="">No services</option>`:$}
              ${r.map(p=>u`<option value=${p} ?selected=${o.selectedService===p}>${d[p].name||p}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${o.selectedRecordId} @input=${p=>e.set(v=>({...v,selectedRecordId:p.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:s,disabled:o.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${o.testName} @input=${p=>e.set(v=>({...v,testName:p.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:t,disabled:o.isLoading})}
            ${o.saveSuccess?u`<span style="color: var(--color-success);">${re({name:"check"})}</span>`:$}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="height: 60px; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${o.testEndpoint} @input=${p=>e.set(v=>({...v,testEndpoint:p.target.value}))}></textarea>
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
                  <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${o.testVariable} @input=${p=>e.set(v=>({...v,testVariable:p.target.value}))} style="flex: 1; min-width: 0; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                </div>
                ${o.testVariable.trim()?u`
                  <div style="padding: 8px; background: #000; color: ${f!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; max-height: 200px; overflow: auto; border-radius: var(--radius-sm);">
                    <pre style="margin: 0; white-space: pre-wrap;">${f!==void 0?JSON.stringify(f,null,2):"undefined"}</pre>
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
              ${Object.keys((c==null?void 0:c.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:$}
              
              ${Object.entries((c==null?void 0:c.enrichment_endpoints)||{}).map(([p,v])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(m=>({...m,testName:p,testEndpoint:v}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${p}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${v}>${v}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let a;return{view:n,mount:o=>{a=e.subscribe(o);const i=h.read(T.all);i!=null&&i.data||C.get("/api/v1/settings").then(d=>{h.setData(T.all,()=>d),e.set(r=>({...r}))}).catch(console.error)},unmount:()=>{a&&a()}}}function ea(e){const s=We(),t=le({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let n,a;const o=i=>{t.get().isDirty&&(i.preventDefault(),i.returnValue="")};return{mount(i){n=t.subscribe(()=>i()),a=h.subscribe(T.all,()=>i()),js.getSettings(),s.mount(i),window.addEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(async d=>t.get().isDirty?await me({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){n&&n(),a&&a(),s.unmount(),window.removeEventListener("beforeunload",o),e&&e.setBeforeNavigateHook(null)},view(){const i=t.get(),{activeTab:d,saving:r,isServiceModalOpen:c,isStageModalOpen:l,isMappingModalOpen:f,isSampleApiModalOpen:g,isNotificationModalOpen:p}=i,v=h.read(T.all),{data:m,status:b,error:y}=v;if(b==="loading"&&!m)return u`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!m)return u`<p class="u-text-danger">Error: ${y==null?void 0:y.message}</p>`;const S={retention_days:(m==null?void 0:m.retention_days)||30,global_poll_interval_seconds:(m==null?void 0:m.global_poll_interval_seconds)||300},E=(m==null?void 0:m.services)||{},k=(m==null?void 0:m.stages)||[],O=S.global_poll_interval_seconds,N=(_,R,A)=>{const D=d===_;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${D?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${D?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${D?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(w=>({...w,activeTab:_}))}
          >
            ${re({name:R,size:16})}
            <span>${A}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${N("services","database","Services")}
              ${N("sandbox","terminal","API Sandbox")}
              ${N("mappings","code","Field Mappings")}
              ${N("stages","activity","Stages & Predicates")}
              ${N("notifications","bell","Notification Triggers")}
              ${N("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:r,disabled:!i.isDirty,onClick:async()=>{const _=h.read(T.all);if(!_||!_.data)return;const R=JSON.parse(JSON.stringify(_.data));t.set(A=>({...A,saving:!0}));try{const A=await C.post("/api/v1/settings",_.data);h.setData(T.all,()=>A),t.set(D=>({...D,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(A){h.setData(T.all,()=>R),t.set(D=>({...D,isDirty:!1,saving:!1})),alert("Failed to save settings: "+A.message+`
Rolled back to previous verified configuration.`)}}})}
              ${i.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:$}
            </div>
            </div>
          </div>
          
          ${d==="services"?Fs(t,E,O):$}
          ${d==="sandbox"?s.view():$}
          ${d==="mappings"?Ys(t,E):$}
          ${d==="stages"?Gs(t,k):$}
          ${d==="notifications"?Js(t,m):$}
          ${d==="engine"?Qs(t,S):$}
          
          <!-- Modals -->
          ${c?Us(t):$}
          ${l?Hs(t):$}
          ${f?Ks(t):$}
          ${g?Ws(t):$}
          ${p?Xs(t):$}
        </div>
      `}}}const pe=tt(Ue),ta={overview:ks(),pipeline:ws(),tools:Ms(),views:Rs(),incidents:Ls(),sandbox:We(),gitops:Bs(),settings:ea(pe)};let W=null;function Ee(){var t,n,a,o;const{current:e}=pe.store.get();W&&W.id!==e.id&&((n=(t=W.instance).unmount)==null||n.call(t),W=null),!W&&e&&(W={id:e.id,instance:ta[e.id]},(o=(a=W.instance).mount)==null||o.call(a,Ee));const s=W?W.instance.view():"";Ze(es({routerStore:pe.store.get(),routes:Ue,router:pe,pageContent:s}),document.getElementById("app"))}pe.store.subscribe(Ee);ye.store.subscribe(Ee);Ee();
