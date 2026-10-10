import{j as Re,E as Pe,w as E,b as u,A as w,D as Ne}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();function De(){const e=new Map;return{on(t,a){return e.has(t)||e.set(t,new Set),e.get(t).add(a),()=>e.get(t).delete(a)},emit(t,a){if(e.has(t))for(const r of e.get(t))r(a)}}}function Q(e){let t=e;const a=new Set;return{get:()=>t,set:r=>{t=typeof r=="function"?r(t):r;for(const s of a)s(t)},subscribe:r=>(a.add(r),()=>a.delete(r))}}function Le(e){const t=Q({current:null,params:{}});let a=null;async function r(s){const o=window.location.hash.slice(1)||"/";if(a&&t.get().current&&t.get().current.path!==o&&!await a(o)){window.removeEventListener("hashchange",r),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",r),0);return}const l=e.find(p=>p.path===o)||e[0];t.set({current:l,params:{}})}return window.addEventListener("hashchange",r),r(),{store:t,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){a=s}}}const Ee=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"sandbox",path:"/sandbox",title:"API Sandbox",pageTitle:"API Enrichment Sandbox",icon:"code"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e={CHILD:2},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,r){this._$Ct=t,this._$AM=a,this._$Ci=r}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Re,he=e=>e,je=e=>e.strings===void 0,ye=()=>document.createComment(""),K=(e,t,a)=>{var o;const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(a===void 0){const l=r.insertBefore(ye(),s),p=r.insertBefore(ye(),s);a=new ze(l,p,e,e.options)}else{const l=a._$AB.nextSibling,p=a._$AM,n=p!==e;if(n){let i;(o=a._$AQ)==null||o.call(a,e),a._$AM=e,a._$AP!==void 0&&(i=e._$AU)!==p._$AU&&a._$AP(i)}if(l!==s||n){let i=a._$AA;for(;i!==l;){const c=he(i).nextSibling;he(r).insertBefore(i,s),i=c}}}return a},z=(e,t,a=e)=>(e._$AI(t,a),e),Be={},Ue=(e,t=Be)=>e._$AH=t,Ve=e=>e._$AH,le=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,a)=>{const r=new Map;for(let s=t;s<=a;s++)r.set(e[s],s);return r},Te=Ae(class extends Ie{constructor(e){if(super(e),e.type!==_e.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let r;a===void 0?a=t:t!==void 0&&(r=t);const s=[],o=[];let l=0;for(const p of e)s[l]=r?r(p,l):l,o[l]=a(p,l),l++;return{values:o,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,r]){const s=Ve(e),{values:o,keys:l}=this.dt(t,a,r);if(!Array.isArray(s))return this.ut=l,o;const p=this.ut??(this.ut=[]),n=[];let i,c,m=0,v=s.length-1,g=0,d=o.length-1;for(;m<=v&&g<=d;)if(s[m]===null)m++;else if(s[v]===null)v--;else if(p[m]===l[g])n[g]=z(s[m],o[g]),m++,g++;else if(p[v]===l[d])n[d]=z(s[v],o[d]),v--,d--;else if(p[m]===l[d])n[d]=z(s[m],o[d]),K(e,n[d+1],s[m]),m++,d--;else if(p[v]===l[g])n[g]=z(s[v],o[g]),K(e,s[m],s[v]),v--,g++;else if(i===void 0&&(i=$e(l,g,d),c=$e(p,m,v)),i.has(p[m]))if(i.has(p[v])){const b=c.get(l[g]),f=b!==void 0?s[b]:null;if(f===null){const h=K(e,s[m]);z(h,o[g]),n[g]=h}else n[g]=z(f,o[g]),K(e,s[m],f),s[b]=null;g++}else le(s[v]),v--;else le(s[m]),m++;for(;g<=d;){const b=K(e,n[d+1]);z(b,o[g]),n[g++]=b}for(;m<=v;){const b=s[m++];b!==null&&le(b)}return this.ut=l,Ue(e,n),Pe}}),Ge={x:E`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:E`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:E`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:E`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:E`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:E`<polyline points="20 6 9 17 4 12"></polyline>`,tool:E`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:E`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":E`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:E`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:E`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:E`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:E`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:E`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:E`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:E`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:E`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:E`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":E`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:E`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function L({name:e,size:t=16,label:a}){const r=Ge[e];return r?u`<svg 
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
  </svg>`:u`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",Ke="vjCp9N",qe="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Je="yefrc2",Qe="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",rt="IX2naX",ot="UuwGh4",it="HRKVqM",I={sidebar:Fe,brand:He,logo:Ke,title:qe,nav:We,navItem:Ye,sidebarFooter:Je,toggleBtn:Qe,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:rt,statusText:ot,commitText:it},M=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),nt=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class V extends Error{constructor(t,{code:a,status:r=0,detail:s=null,cause:o}={}){super(t,{cause:o}),this.name="ApiError",this.code=a,this.status=r,this.detail=s}get retryable(){return this.code===M.NETWORK||this.code===M.TIMEOUT||this.code===M.HTTP&&nt.has(this.status)}get userMessage(){switch(this.code){case M.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case M.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case M.ABORTED:return"";case M.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},a=e.fetchImpl??((...d)=>globalThis.fetch(...d)),r={request:[],response:[],error:[]},s=new Map,o=()=>new V("Request aborted",{code:M.ABORTED}),l=(d,b)=>{const f=new URLSearchParams;for(const[S,$]of Object.entries(b??{}))$!=null&&$!==""&&f.set(S,String($));const h=f.toString();return`${t.baseUrl}${d}${h?"?"+h:""}`};async function p(d){if(d.status===204)return null;const b=d.headers.get("content-type")??"";try{return b.includes("application/json")?await d.json():await d.text()}catch(f){throw new V("Malformed response body",{code:M.PARSE,status:d.status,cause:f})}}async function n(d,b,f){const h=AbortSignal.timeout(f),S=b?AbortSignal.any([b,h]):h;let $;try{$=await a(d.url,{method:d.method,headers:d.headers,body:d.body,signal:S})}catch(A){throw h.aborted?new V(`Request timed out after ${f} ms`,{code:M.TIMEOUT,cause:A}):b!=null&&b.aborted?o():new V("Network request failed",{code:M.NETWORK,cause:A})}const k=await p($);if(!$.ok)throw new V(lt(k)??`HTTP ${$.status}`,{code:M.HTTP,status:$.status,detail:k});return{status:$.status,data:k,headers:$.headers}}const i=(d,b)=>new Promise((f,h)=>{const S=setTimeout(f,d);b==null||b.addEventListener("abort",()=>{clearTimeout(S),h(o())},{once:!0})}),c=d=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**d);async function m(d,{signal:b,timeoutMs:f,retries:h}){for(let S=0;;S+=1)try{return await n(d,b,f)}catch($){if(!($ instanceof V)||!$.retryable||S>=h)throw $;await i(c(S),b)}}function v(d,b,f){let h=s.get(d);if(!h){const S=new AbortController,$={controller:S,refs:0,promise:null};$.promise=b(S.signal).finally(()=>{s.get(d)===$&&s.delete(d)}),$.promise.catch(()=>{}),s.set(d,$),h=$}return h.refs+=1,new Promise((S,$)=>{const k=()=>{h.refs-=1,h.refs===0&&(s.get(d)===h&&s.delete(d),h.controller.abort()),$(o())};if(f!=null&&f.aborted){k();return}f==null||f.addEventListener("abort",k,{once:!0}),h.promise.then(A=>{f==null||f.removeEventListener("abort",k),S(A)},A=>{f==null||f.removeEventListener("abort",k),$(A)})})}async function g(d,b,f={}){const{query:h,body:S,headers:$={},signal:k,meta:A={}}=f,B=f.timeoutMs??t.timeoutMs,R=f.retries??(ct.has(d)?t.retries:0),H=f.dedupe??d==="GET";let T={method:d,url:l(b,h),headers:{Accept:"application/json",...$},body:void 0,meta:A};S!==void 0&&(T.body=JSON.stringify(S),T.headers["Content-Type"]="application/json");for(const X of r.request)T=await X(T);const ne=async X=>{try{let U=await m(T,{signal:X,timeoutMs:B,retries:R});for(const D of r.response)U=await D(U,T);return U.data}catch(U){let D=U;for(const Oe of r.error)D=await Oe(D,T)??D;throw D}};return H?v(`${T.method} ${T.url}`,ne,k):ne(k)}return{get:(d,b)=>g("GET",d,b),post:(d,b,f)=>g("POST",d,{...f,body:b}),put:(d,b,f)=>g("PUT",d,{...f,body:b}),delete:(d,b)=>g("DELETE",d,b),use({request:d,response:b,error:f}){d&&r.request.push(d),b&&r.response.push(b),f&&r.error.push(f)}}}const ce=()=>{};function pt(e,t){return t?new Promise((a,r)=>{const s=()=>r(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(a,r).finally(()=>t.removeEventListener("abort",s))}):e}const ve=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([r],[s])=>r<s?-1:1)):a),vt=(e,t)=>t.every((a,r)=>r<e.length&&ve(a)===ve(e[r]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const a=new Map,r=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function s(n){const i=ve(n);let c=a.get(i);return c||(c={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},c.snapshot=r(c),a.set(i,c)),c}function o(n){n.snapshot=r(n);for(const i of[...n.listeners])i(n.snapshot)}function l(){for(const[n,i]of a)i.listeners.size===0&&!i.promise&&i.updatedAt&&e()-i.updatedAt>t&&a.delete(n)}function p(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(i=>(Object.assign(n,{data:i,error:null,status:"success",updatedAt:e()}),i),i=>{throw Object.assign(n,{error:i,status:"error"}),i}).finally(()=>{n.promise=null,o(n),n.invalidated&&n.listeners.size>0&&p(n).catch(ce)}),n.promise.catch(ce),o(n)),n.promise}return{load(n,i,{staleMs:c=0,signal:m}={}){l();const v=s(n);v.fetcher=i;const g=v.status==="success"&&!v.invalidated&&e()-v.updatedAt<c;return pt(g?Promise.resolve(v.data):p(v),m)},read:n=>s(n).snapshot,subscribe(n,i){const c=s(n);return c.listeners.add(i),i(c.snapshot),()=>{c.listeners.delete(i)}},invalidate(n){for(const i of a.values())vt(i.keyParts,n)&&(i.invalidated=!0,o(i),i.listeners.size>0&&i.fetcher&&p(i).catch(ce))},setData(n,i){const c=s(n),m={data:c.data,status:c.status,updatedAt:c.updatedAt},v=i(c.data);return Object.assign(c,{data:v,status:"success",updatedAt:e()}),o(c),function(){c.data===v&&(Object.assign(c,m),o(c))}}}}function gt(e,{mutationFn:t,optimistic:a,invalidates:r=[]}){return async function(o){const l=((a==null?void 0:a(o))??[]).map(({key:p,update:n})=>e.setData(p,n));try{const p=await t(o);return(typeof r=="function"?r(o,p):r).forEach(i=>e.invalidate(i)),p}catch(p){throw l.reverse().forEach(n=>n()),p}}}const G={},bt=De(),_=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),y=mt();_.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const re={all:["overview"]},ft={getOverview:e=>y.load(re.all,()=>_.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Z=!1;function xt(){Z=!Z;const e=document.getElementById("app-sidebar");e&&(Z?e.classList.add(I.expanded):e.classList.remove(I.expanded))}function ht({routes:e,activeId:t,onNavigate:a}){var l,p,n,i;const r=y.read(re.all),s=((p=(l=r==null?void 0:r.data)==null?void 0:l.telemetry)==null?void 0:p.short_commit)||"6b319ac",o=((i=(n=r==null?void 0:r.data)==null?void 0:n.telemetry)==null?void 0:i.branch)||"main";return u`<aside id="app-sidebar" class="${I.sidebar} ${Z?I.expanded:""}">
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
        <button class=${I.navItem} aria-current=${c.id===t?"page":"false"}
          @click=${()=>a(c.path)}>
          ${L({name:c.icon,size:16})}
          <span>${c.title}</span>
        </button>
      `)}
    </nav>
    <div class=${I.sidebarFooter}>
      <button class=${I.toggleBtn} @click=${xt}>
        ${L({name:"menu",size:16})}
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
 */const we=e=>e??w;function ee(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const kt="PSMDQ2",Et={spinner:kt};function _t({size:e=16}={}){return u`<svg class=${Et.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",q={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:t="secondary",size:a="md",icon:r,iconOnly:s=!1,ariaLabel:o,loading:l=!1,disabled:p=!1,type:n="button",id:i,onClick:c}){const m=ee(q.btn,q[`btn--${t}`],q[`btn--${a}`],s&&q["btn--icon-only"]);return u`<button id=${we(i)} class=${m} type=${n}
    aria-label=${we(o)} aria-busy=${l?"true":"false"}
    ?disabled=${p||l} @click=${c}>
    ${l?_t():r?L({name:r,size:a==="sm"?14:16}):w}
    ${s?w:u`<span class=${q.btn__label}>${e}</span>`}
  </button>`}const It=({icon:e,ariaLabel:t,...a})=>x({...a,icon:e,ariaLabel:t,iconOnly:!0,variant:a.variant??"ghost"});function Tt({title:e}){return u`<header class=${de.topbar}>
    <h1 class=${de.title}>${e}</h1>
    <div class=${de.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{y.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=Q({stack:[]});let t=0;function a(s){return new Promise(o=>{const l=`modal-${t+=1}`;let p=!1;const n=i=>{p||(p=!0,e.set(c=>({stack:c.stack.filter(m=>m.id!==l)})),o(i))};e.set(i=>({stack:[...i.stack,{id:l,view:()=>s({close:n,id:l})}]}))})}return{open:a,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Mt=Ct(),te=Mt;function Ot(){const{stack:e}=te.store.get();return u`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Rt="sCMZyq",Pt="Fk5OML",Nt="_0AKuiv",ue={layout:Rt,mainContent:Pt,page:Nt};function Dt({routerStore:e,routes:t,router:a,pageContent:r}){const{current:s}=e;return u`<div class=${ue.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:a.navigate})}
    <div class=${ue.mainContent}>
      ${Tt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${ue.page}>
        ${r}
      </main>
    </div>
    ${Ot()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Ut="r2dRuM",Vt="AjfFun",O={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Ut,table__stale:Vt};function oe({id:e,caption:t,columns:a,snapshot:r,getRows:s=c=>(c==null?void 0:c.items)??[],rowKey:o=(c,m)=>m,emptyMessage:l="No records found.",onRetry:p,footer:n=w,fallbackColumns:i=[]}){const{status:c,data:m,error:v,isFetching:g}=r,d=m!==void 0,b=typeof a=="function"?d?a(m):i:a,f=Math.max(b.length,1),h=d?s(m):[],S=(k,A)=>u`<td class=${ee(k.align==="end"&&O["table__cell--end"],k.mono&&O["table__cell--mono"])}>
    ${k.render?k.render(A):St(A[k.key])}</td>`;let $;return!d&&(c==="idle"||c==="loading")?$=Array.from({length:5},()=>u`<tr aria-hidden="true">${b.map(()=>u`<td><span class=${O.table__skeleton}></span></td>`)}</tr>`):d?h.length===0?$=u`<tr><td colspan=${f} class=${O.table__message}>${l}</td></tr>`:$=Te(h,o,k=>u`<tr>${b.map(A=>S(A,k))}</tr>`):$=u`<tr><td colspan=${f} class=${O.table__message} role="alert">
      ${(v==null?void 0:v.userMessage)||(v==null?void 0:v.message)||"Failed to load data."}
      ${p?x({label:"Retry",icon:"refresh",size:"sm",onClick:p}):w}</td></tr>`,u`<div class=${O.table}>
    ${c==="error"&&d?u`<div class=${O.table__stale} role="status">Showing cached data. ${(v==null?void 0:v.userMessage)??""} ${p?x({label:"Retry",size:"sm",variant:"ghost",onClick:p}):w}</div>`:w}
    <div class=${O.table__scroll} aria-busy=${g?"true":"false"}>
      <table id=${e??w} class=${O.table__grid}>
        ${t?u`<caption class="u-sr-only">${t}</caption>`:w}
        <thead><tr>${b.map(k=>u`<th scope="col" class=${ee(k.align==="end"&&O["table__cell--end"])}>${k.header}</th>`)}</tr></thead>
        <tbody>${$}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const se={all:["pipeline"],columns:["pipeline","columns"]},me={getPipeline:e=>y.load(se.all,()=>_.get("/api/v1/pipeline"),e),getColumns:e=>y.load(se.columns,()=>_.get("/api/v1/pipeline/columns"),e)};function Gt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:a=>u`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[t]}>${a[t]}</span>`})):[]}function Ft(){return{view(){var s,o;const e=y.read(se.all),t=((s=e.data)==null?void 0:s.items)??[],a=((o=e.data)==null?void 0:o.total)??t.length,r=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return oe({id:"pipeline-table",snapshot:e,columns:l=>Gt((l==null?void 0:l.items)??[]),getRows:l=>(l==null?void 0:l.items)??[],rowKey:(l,p)=>l.id??p,onRetry:()=>me.getPipeline(),footer:r})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(e,t)=>{var r;const a=e._$AN;if(a===void 0)return!1;for(const s of a)(r=s._$AO)==null||r.call(s,t,!1),W(s,t);return!0},ae=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),qt(t)}};function Ht(e){this._$AN!==void 0?(ae(this),this._$AM=e,Ce(this)):this._$AM=e}function Kt(e,t=!1,a=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=a;o<r.length;o++)W(r[o],!1),ae(r[o]);else r!=null&&(W(r,!1),ae(r));else W(this,e)}const qt=e=>{e.type==_e.CHILD&&(e._$AP??(e._$AP=Kt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,r){super._$AT(t,a,r),Ce(this),this.isConnected=t._$AU}_$AO(t,a=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),a&&(W(this,t),ae(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const pe=new WeakMap,Yt=Ae(class extends Wt{render(e){return w}update(e,[t]){var r;const a=t!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),w}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=pe.get(t);a===void 0&&(a=new WeakMap,pe.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=pe.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jt="_9lH80h",Qt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",j={modal:Jt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Qt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function F({title:e,size:t="md",body:a,footer:r=w,onClose:s,dismissible:o=!0}){const l=wt("modal-title"),p=c=>{c&&!c.open&&requestAnimationFrame(()=>{!c.open&&c.isConnected&&c.showModal()})},n=c=>{c.preventDefault(),o&&s(void 0)},i=c=>{o&&c.target===c.currentTarget&&s(void 0)};return u`<dialog class=${ee(j.modal,j[`modal--${t}`])} aria-labelledby=${l}
      ${Yt(p)} @cancel=${n} @click=${i}>
    <div class=${j.modal__panel}>
      <header class=${j.modal__header}>
        <h2 id=${l} class=${j.modal__title}>${e}</h2>
        ${o?It({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):w}
      </header>
      <div class=${j.modal__body}>${a}</div>
      ${r!==w?u`<footer class=${j.modal__footer}>${r}</footer>`:w}
    </div>
  </dialog>`}function fe({title:e,message:t,tone:a="danger",confirmLabel:r="Confirmar",requireText:s}){return new Promise(o=>{let l="";""+Math.random().toString(36).substring(2);const p=()=>{te.open(({close:i})=>F({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?u`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${c=>{l=c.target.value,n()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{i(),o(!1)}})}
            ${x({label:r,variant:a==="danger"?"delete":"add",disabled:s?l!==s:!1,onClick:()=>{i(),o(!0)}})}
          </div>
        `,onClose:()=>{i(),o(!1)}}))};function n(){te.refresh()}p()})}function ss(){const e=Ft();let t;async function a(){if(await fe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await _.post("/api/v1/pipeline/purge"),me.getPipeline({dedupe:!1})}catch(s){alert("Error purging pipeline: "+s.message)}}return{mount(r){t=y.subscribe(se.all,()=>r()),me.getPipeline()},unmount(){t&&t()},view(){return u`
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
      `}}}function as(){return{view(){var i,c,m;const{status:e,data:t,error:a}=y.read(re.all);if(e==="error")return u`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!t)return u`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const r=t.pipeline_total_items||0,s=t.active_incidents||0,o=t.registered_services||0,l=((i=t.telemetry)==null?void 0:i.branch)||"main",p=((c=t.telemetry)==null?void 0:c.clean)!==!1,n=(v,g,d,b,f="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${v}</span>
            <span class="${f}">${L({name:b,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${f}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${g}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${d}>${d}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",r,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${n("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",l,p?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(m=t.stages)!=null&&m.length?t.stages.map(v=>u`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${v.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${v.name}</strong> <span class="u-text-muted">(${v.service_ids.join(", ")})</span></span>
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
      `}}}function rs(){const e=as();let t;return{mount(a){t=y.subscribe(re.all,()=>a()),ft.getOverview()},unmount(){t&&t()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},os={getTools:e=>y.load(ge.all,()=>_.get("/api/v1/tools"),e)},is="cg2FU3",ns="Jh4yC3",Se={console:is,output:ns};function ls({text:e,status:t="idle"}){return u`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=Q({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,a;const r=async s=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await _.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(l=>({...l,executionStatus:"success",output:l.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(l=>({...l,executionStatus:"error",output:l.output+`
ERROR: `+o.message}))}};return{mount(s){t=y.subscribe(ge.all,()=>s()),a=e.subscribe(()=>s()),os.getTools()},unmount(){t&&t(),a&&a()},view(){const{status:s,data:o,error:l,isFetching:p}=y.read(ge.all),n=e.get(),i=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:w}
              ${s==="error"&&!o?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${l==null?void 0:l.message}</div>`:w}
              ${i.length===0&&o?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:w}
              
              ${i.map(c=>{var m,v,g;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((m=n.selectedTool)==null?void 0:m.name)===c.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((v=n.selectedTool)==null?void 0:v.name)===c.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(d=>({...d,selectedTool:c,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((g=n.selectedTool)==null?void 0:g.name)===c.name?"u-text-accent":""}">${c.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${c.description}>${c.description}</div>
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
      `}}}const xe={all:["views"]},Me={getViews:e=>y.load(xe.all,()=>_.get("/api/v1/views"),e)};function ds(){return{view(){var a;const e=y.read(xe.all),t=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!t.length&&e.status!=="loading"?u`
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
        `:oe({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function us(){const e=ds();let t;return{mount(a){t=y.subscribe(xe.all,()=>a()),Me.getViews()},unmount(){t&&t()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const N={all:["incidents"],list:e=>[...N.all,e?"resolved":"active"],catalog:["incidents","catalog"]},Y={getIncidents:(e,t)=>y.load(N.list(e),()=>_.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>_.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>y.load(N.catalog,()=>_.get("/api/v1/incidents/catalog/errors"),e)};function ke({resolved:e}){const t=gt(y,{mutationFn:s=>Y.resolveIncident(s.id,s.note),invalidates:[N.all]});async function a(s){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await fe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:o})}catch(p){alert("Failed to resolve incident: "+p.message)}}const r=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>u`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?u`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(s.ID)})}];return{view(){const s=y.read(N.list(e));return oe({id:`incidents-table-${e?"resolved":"active"}`,columns:r,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const a=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=y.read(N.catalog);return oe({id:"error-catalog-table",columns:e,snapshot:t,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>Y.getCatalog()})}}}function vs(){const e=ke({resolved:!1}),t=ke({resolved:!0}),a=ps(),r=Q({activeTab:"active"});let s,o,l,p;return{mount(n){s=y.subscribe(N.list(!1),()=>n()),o=y.subscribe(N.list(!0),()=>n()),l=y.subscribe(N.catalog,()=>n()),p=r.subscribe(()=>n()),Y.getIncidents(!1),Y.getIncidents(!0),Y.getCatalog()},unmount(){s&&s(),o&&o(),l&&l(),p&&p()},view(){const{activeTab:n}=r.get(),i=(c,m,v)=>{const g=n===c;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${g?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${g?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${g?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>r.set(h=>({...h,activeTab:c}))}
          >
            ${L({name:m,size:16})}
            <span>${v}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${i("active","alert","Active Incidents")}
              ${i("resolved","check","Resolved")}
              ${i("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():w}
          ${n==="resolved"?t.view():w}
          ${n==="catalog"?a.view():w}
        </div>
      `}}}const be={all:["gitops"]},ms={getGitOps:e=>y.load(be.all,()=>_.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=y.subscribe(be.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=y.read(be.all),{status:a,data:r,error:s,isFetching:o}=t;if(a==="loading"&&!r)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!r)return u`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const l=(r==null?void 0:r.telemetry)||{};return u`
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
      `}}}const C={all:["settings"]},bs={getSettings:e=>y.load(C.all,()=>_.get("/api/v1/settings"),e),saveConfig:e=>_.post("/api/v1/settings/config",e),triggerSweep:()=>_.post("/api/v1/settings/sweep"),triggerBackup:()=>_.post("/api/v1/settings/backup")};function fs(e,t={},a=300){const r=Object.keys(t),s=()=>{e.set(l=>({...l,isServiceModalOpen:!0}))},o=(l,p,n)=>{var m;const i=((m=p.field_mappings)==null?void 0:m.length)||0,c=Object.keys(p.enrichment_endpoints||{}).join(", ");return u`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${p.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${p.name.toUpperCase()}</span>
            ${p.enabled?u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${p.poll_interval_seconds?`POLLS EVERY ${p.poll_interval_seconds}S`:`INHERITS GLOBAL (${a}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(v=>({...v,isServiceModalOpen:!0,editingServiceId:l}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${p.base_url||"N/A"} | API Key ${p.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${i}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${c||"none"}</span>
        </div>
      </div>
    `};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${r.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:w}
        ${r.map((l,p)=>o(l,t[l],p===r.length-1))}
      </div>
    </div>
  `}function xs(e){var c;const t=e.get(),a=y.read(C.all),r=((c=a==null?void 0:a.data)==null?void 0:c.services)||{},s=t.editingServiceId?r[t.editingServiceId]:null,o=()=>{e.set(m=>({...m,isServiceModalOpen:!1,editingServiceId:null}))},l=()=>{try{const m=document.getElementById("srv-id").value.trim();if(!m){alert("Service ID is required");return}const v=document.getElementById("srv-enrich").value.trim(),g={};v&&v.split(`
`).forEach(f=>{const h=f.split(":");h.length>=2&&(g[h[0].trim()]=h.slice(1).join(":").trim())});const d={name:document.getElementById("srv-name").value.trim()||m,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:g,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(s==null?void 0:s.field_mappings)||[]},b={...r,[m]:d};t.editingServiceId&&t.editingServiceId!==m&&delete b[t.editingServiceId],y.setData(C.all,()=>({...a.data,services:b})),e.set(f=>({...f,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(m){alert("Error saving service: "+m.stack)}},p=m=>{alert(`Applied preset: ${m}`)},n=u`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${x({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>p("sonarr")})}
      ${x({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>p("radarr")})}
      ${x({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>p("jellyfin")})}
      ${x({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>p("shoko")})}
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
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([m,v])=>`${m}: ${v}`).join(`
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
  `,i=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:o})}
      ${x({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:l})}
    </div>
  `;return F({title:"Register Service",size:"lg",onClose:o,body:n,footer:i})}function hs(e,t=[]){const a=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},r=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,o)=>{const l=r(s);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${l.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${l.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${l.bg}; color: ${l.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${l.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(p=>({...p,isStageModalOpen:!0,editingStageId:s.id}))})}
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
  `}function ys(e){var m;const t=e.get(),a=y.read(C.all),r=((m=a==null?void 0:a.data)==null?void 0:m.stages)||[],s=t.editingStageId?r.find(v=>v.id===t.editingStageId):null,o=t.stageIsSink??(s?!s.complete_condition:!1),l=t.stageIsRoot??(s?!s.start_condition:!1),p=()=>{e.set(v=>({...v,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var v,g;try{const d=document.getElementById("stage-id").value.trim();if(!d){alert("Stage ID is required");return}const b={id:d,name:document.getElementById("stage-name").value.trim()||d,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:l?null:((v=document.getElementById("stage-start"))==null?void 0:v.value.trim())||null,complete_condition:o?null:((g=document.getElementById("stage-complete"))==null?void 0:g.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let f=[...r];t.editingStageId?f=f.map(h=>h.id===t.editingStageId?b:h):f.push(b),y.setData(C.all,()=>({...a.data,stages:f})),e.set(h=>({...h,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(d){alert("Error in Save Stage: "+d.stack)}},i=u`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(s==null?void 0:s.id)||""} ?disabled=${!!s} @input=${v=>{v.target.value=v.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
        <input type="checkbox" id="chk-stage-root" .checked=${l} @change=${v=>e.set(g=>({...g,stageIsRoot:v.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${l?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(s==null?void 0:s.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const v=document.getElementById("stage-start").value;if(!v.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:v})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${o} @change=${v=>e.set(g=>({...g,stageIsSink:v.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(s==null?void 0:s.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const v=document.getElementById("stage-complete").value;if(!v.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:v})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
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
  `,c=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:p})}
      ${x({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return F({title:"Configure DAG Stage",size:"lg",onClose:p,body:i,footer:c})}function $s(e,t={}){const a=Object.keys(t),r=e.get().selectedMappingService||a[0]||"",s=()=>{e.set(p=>({...p,isSampleApiModalOpen:!0}))},o=()=>{e.set(p=>({...p,isMappingModalOpen:!0}))},l=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${p=>e.set(n=>({...n,selectedMappingService:p.target.value}))}
        >
          ${a.map(p=>u`<option value="${p}" ?selected=${p===r}>${t[p].name}</option>`)}
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
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${a.length>0?l():w}
        
        ${(()=>{const p=t[r];return!p||!p.field_mappings||p.field_mappings.length===0?u`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:u`
            <div class="u-flex u-flex-col u-gap-3">
              ${p.field_mappings.map(n=>u`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${n.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${n.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${n.data_type})</span>
                    ${n.transformer?u`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${n.transformer}</div>`:w}
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
  `}function ws(e){const t=()=>{e.set(s=>({...s,isMappingModalOpen:!1}))},a=u`
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
  `,r=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return F({title:"Configure Field Mapping & Transformer",size:"lg",onClose:t,body:a,footer:r})}function Ss(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},a=u`
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
  `,r=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return F({title:"Sample Service API Schema",size:"lg",onClose:t,body:a,footer:r})}function ks(e,t={}){const a=Object.keys(t.triggers||{}),r=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return u`
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
        ${a.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:w}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function Es(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},a=u`
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
  `,r=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return F({title:"Add Notification Trigger",size:"md",onClose:t,body:a,footer:r})}function _s(e,t={}){const a=t.retention_days||30,r=t.global_poll_interval_seconds||300;return u`
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
  `}function As(e){const t=Q({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,r;const s=o=>{t.get().isDirty&&(o.preventDefault(),o.returnValue="")};return{mount(o){a=t.subscribe(()=>o()),r=y.subscribe(C.all,()=>o()),bs.getSettings(),window.addEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(async l=>t.get().isDirty?await fe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),r&&r(),window.removeEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(null)},view(){const o=t.get(),{activeTab:l,saving:p,isServiceModalOpen:n,isStageModalOpen:i,isMappingModalOpen:c,isSampleApiModalOpen:m,isNotificationModalOpen:v}=o,g=y.read(C.all),{data:d,status:b,error:f}=g;if(b==="loading"&&!d)return u`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!d)return u`<p class="u-text-danger">Error: ${f==null?void 0:f.message}</p>`;const h={retention_days:(d==null?void 0:d.retention_days)||30,global_poll_interval_seconds:(d==null?void 0:d.global_poll_interval_seconds)||300},S=(d==null?void 0:d.services)||{},$=(d==null?void 0:d.stages)||[],k=h.global_poll_interval_seconds,A=(B,R,H)=>{const T=l===B;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${T?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${T?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${T?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(D=>({...D,activeTab:B}))}
          >
            ${L({name:R,size:16})}
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
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:p,disabled:!o.isDirty,onClick:async()=>{const B=y.read(C.all);t.set(R=>({...R,saving:!0}));try{await _.post("/api/v1/settings",B.data),t.set(R=>({...R,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(R){alert("Error saving settings: "+R.message),t.set(H=>({...H,saving:!1}))}}})}
              ${o.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:w}
            </div>
            </div>
          </div>
          
          ${l==="services"?fs(t,S,k):w}
          ${l==="stages"?hs(t,$):w}
          ${l==="mappings"?$s(t,S):w}
          ${l==="notifications"?ks(t,d):w}
          ${l==="engine"?_s(t,h):w}
          
          <!-- Modals -->
          ${n?xs(t):w}
          ${i?ys(t):w}
          ${c?ws(t):w}
          ${m?Ss(t):w}
          ${v?Es(t):w}
        </div>
      `}}}function Is(){let e={selectedService:"",selectedRecordId:"",namespaces:[{name:"file",endpoint:"/api/v3/File/PathEndsWith?path={FILE_PATH}"}],logs:[],flattenedKeys:[],contextData:null,isLoading:!1,error:null,saveSuccess:!1};const t=new Set;return{get:()=>e,set:a=>{e=a(e),t.forEach(r=>r())},subscribe:a=>(t.add(a),()=>t.delete(a))}}function Ts(){const e=Is(),t=async()=>{const{selectedService:i,selectedRecordId:c,namespaces:m}=e.get();if(!i||!c){alert("Please select a service and provide a valid Pipeline Record ID.");return}const v={};for(const g of m)g.name.trim()&&g.endpoint.trim()&&(v[g.name.trim()]=g.endpoint.trim());if(Object.keys(v).length===0){alert("Please define at least one enrichment endpoint to test.");return}e.set(g=>({...g,isLoading:!0,error:null,logs:[],flattenedKeys:[],contextData:null}));try{const g=await _.post("/api/v1/pipeline/sandbox/enrichment",{service_id:i,record_id:parseInt(c,10),enrichment_endpoints:v});e.set(d=>({...d,isLoading:!1,logs:g.logs||[],flattenedKeys:g.flattened_keys||[],contextData:g.context_data||null}))}catch(g){e.set(d=>({...d,isLoading:!1,error:g.message}))}},a=async()=>{var h;const i=e.get();if(!i.selectedService)return;const c=y.read(C.all),m=((h=c==null?void 0:c.data)==null?void 0:h.services)||{},v=m[i.selectedService];if(!v){alert("Service not found in settings.");return}const g={...v.enrichment_endpoints||{}};let d=0;for(const S of i.namespaces){const $=S.name.trim(),k=S.endpoint.trim();$&&k&&(g[$]=k,d++)}if(d===0)return;const b={...m,[i.selectedService]:{...v,enrichment_endpoints:g}},f={...c.data,services:b};try{await _.post("/api/v1/settings/config",f),y.setData(C.all,()=>f),e.set(S=>({...S,saveSuccess:!0})),setTimeout(()=>{e.set(S=>({...S,saveSuccess:!1}))},3e3)}catch(S){alert("Failed to save to service: "+S.message)}},r=(i,c,m)=>{e.set(v=>{const g=[...v.namespaces];return g[i]={...g[i],[c]:m},{...v,namespaces:g,saveSuccess:!1}})},s=()=>{e.set(i=>({...i,namespaces:[...i.namespaces,{name:"",endpoint:""}]}))},o=i=>{e.set(c=>{const m=c.namespaces.filter((v,g)=>g!==i);return{...c,namespaces:m}})},l=i=>u`
      <div class="u-flex u-flex-col u-gap-3 u-mb-4">
        ${i.namespaces.map((c,m)=>u`
          <div class="u-flex u-items-center u-gap-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
            <div style="flex: 1;">
              <label class="u-text-xs u-text-muted u-mb-1 u-block">Namespace</label>
              <input type="text" class="form-input font-mono" placeholder="e.g. file, episode" .value=${c.name} @input=${v=>r(m,"name",v.target.value)}>
            </div>
            <div style="flex: 3;">
              <label class="u-text-xs u-text-muted u-mb-1 u-block">API Endpoint</label>
              <input type="text" class="form-input font-mono" placeholder="/api/v3/Endpoint/{ID}" .value=${c.endpoint} @input=${v=>r(m,"endpoint",v.target.value)}>
            </div>
            <div style="align-self: flex-end; padding-bottom: 2px;">
              ${x({label:L({name:"trash"}),variant:"ghost",onClick:()=>o(m)})}
            </div>
          </div>
        `)}
      </div>
      
      <div class="u-mb-4">
        ${x({label:"+ Add Endpoint to Chain",variant:"secondary",size:"sm",onClick:s})}
      </div>
    `,p=i=>i.isLoading?u`<div class="u-text-muted" style="padding: var(--space-4); text-align: center;">Executing enrichment chain...</div>`:i.error?u`<div style="color: var(--color-error); padding: var(--space-4); background: color-mix(in srgb, var(--color-error) 10%, transparent); border-radius: var(--radius-md);">${i.error}</div>`:i.logs.length===0&&i.flattenedKeys.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4); text-align: center; border: 1px dashed var(--color-border); border-radius: var(--radius-md);">
        Configure a service, record ID, and at least one endpoint, then click Test.
      </div>`:u`
      <div class="form-grid-2">
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: var(--space-2) var(--space-3); background: var(--color-bg-card); border-bottom: 1px solid var(--color-border); font-weight: bold; font-size: 0.9rem;">
            Execution Logs
          </div>
          <div style="padding: var(--space-3); flex: 1; overflow-y: auto; max-height: 400px; font-family: monospace; font-size: 0.85rem; line-height: 1.5; color: var(--color-text-muted);">
            ${i.logs.map(c=>u`<div class="u-mb-1" style="color: ${c.includes("Error")||c.includes("Exception")?"var(--color-error)":c.includes("Skipped")?"var(--color-warning)":"inherit"};">${c}</div>`)}
          </div>
        </div>

        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: var(--space-2) var(--space-3); background: var(--color-bg-card); border-bottom: 1px solid var(--color-border); font-weight: bold; font-size: 0.9rem;">
            Discovered Context Variables (Flattened)
          </div>
          <div style="padding: var(--space-3); flex: 1; overflow-y: auto; max-height: 400px; font-size: 0.85rem;">
            ${i.flattenedKeys.length===0?u`<div class="u-text-muted">No additional fields discovered.</div>`:u`<table style="width: 100%; text-align: left; border-collapse: collapse;">
                  <tbody>
                    ${i.flattenedKeys.map(c=>u`
                      <tr style="border-bottom: 1px solid var(--color-border);">
                        <td style="padding: 4px 0; font-family: monospace; color: var(--color-accent);">{${c.path}}</td>
                        <td style="padding: 4px 0; color: var(--color-text-muted); font-size: 0.8rem; text-align: right; overflow: hidden; text-overflow: ellipsis; max-width: 150px; white-space: nowrap;" title=${c.sample}>${c.sample}</td>
                      </tr>
                    `)}
                  </tbody>
                </table>`}
          </div>
        </div>
      </div>
      
      <div class="u-mt-4 u-flex u-items-center u-justify-between" style="padding-top: var(--space-4); border-top: 1px solid var(--color-border);">
        <p class="u-text-sm u-text-muted" style="margin: 0; max-width: 500px;">
          If the variables look correct, you can save these endpoints directly to the Service configuration.
        </p>
        <div class="u-flex u-gap-2 u-items-center">
          ${i.saveSuccess?u`<span style="color: var(--color-success); font-weight: bold; font-size: 0.9rem;" class="u-flex u-items-center u-gap-1">${L({name:"check"})} Saved!</span>`:w}
          ${x({label:"Save to Service Config",variant:"save",onClick:a,disabled:i.isLoading||!i.contextData})}
        </div>
      </div>
    `;return{view:()=>{var g;const i=e.get(),c=y.read(C.all),m=((g=c==null?void 0:c.data)==null?void 0:g.services)||{},v=Object.keys(m);return!i.selectedService&&v.length>0&&setTimeout(()=>e.set(d=>({...d,selectedService:v[0]})),0),u`
      <div class="page-container">
        <header class="page-header u-mb-6">
          <div class="u-flex u-items-center u-gap-3 u-mb-2">
            <h1 class="page-title u-m-0">API Enrichment Sandbox</h1>
            <span class="badge" style="background: var(--color-accent); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">BETA</span>
          </div>
          <p class="page-subtitle">Interactively build, test, and chain enrichment endpoints before deploying them.</p>
        </header>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);" class="u-mb-5">
          <h3 style="margin-top: 0; font-size: 1.1rem; color: var(--color-text); margin-bottom: var(--space-4);">1. Target & Context</h3>
          
          <div class="form-grid-2 u-mb-4">
            <div class="form-group u-mb-0">
              <label>Service Configuration</label>
              <select class="form-select" @change=${d=>e.set(b=>({...b,selectedService:d.target.value}))}>
                ${v.length===0?u`<option value="">No services configured</option>`:w}
                ${v.map(d=>u`<option value=${d} ?selected=${i.selectedService===d}>${m[d].name||d}</option>`)}
              </select>
            </div>
            
            <div class="form-group u-mb-0">
              <label>Pipeline Record ID (Base Context)</label>
              <input type="number" class="form-input font-mono" placeholder="e.g. 42" .value=${i.selectedRecordId} @input=${d=>e.set(b=>({...b,selectedRecordId:d.target.value}))}>
              <small class="u-text-muted">Enter the numeric ID of a row in the Pipeline table to use its columns as starting variables.</small>
            </div>
          </div>
        </div>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);" class="u-mb-5">
          <div class="u-flex u-items-center u-justify-between u-mb-4">
            <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-text);">2. Enrichment Chain</h3>
            ${x({label:"Test Chain",variant:"test",onClick:t,disabled:i.isLoading})}
          </div>
          
          ${l(i)}
        </div>

        <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); padding: var(--space-4);">
          <h3 style="margin-top: 0; font-size: 1.1rem; color: var(--color-text); margin-bottom: var(--space-4);">3. Results & Mapping Context</h3>
          
          ${p(i)}
        </div>
      </div>
    `},mount:()=>{const i=y.read(C.all);i!=null&&i.data||_.get("/api/v1/settings").then(c=>{y.setData(C.all,()=>c),e.set(m=>({...m}))}).catch(console.error)}}}const J=Le(Ee),Cs={overview:rs(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),sandbox:Ts(),gitops:gs(),settings:As(J)};let P=null;function ie(){var a,r,s,o;const{current:e}=J.store.get();P&&P.id!==e.id&&((r=(a=P.instance).unmount)==null||r.call(a),P=null),!P&&e&&(P={id:e.id,instance:Cs[e.id]},(o=(s=P.instance).mount)==null||o.call(s,ie));const t=P?P.instance.view():"";Ne(Dt({routerStore:J.store.get(),routes:Ee,router:J,pageContent:t}),document.getElementById("app"))}J.store.subscribe(ie);te.store.subscribe(ie);ie();
