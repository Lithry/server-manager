import{j as Re,E as Ne,w as k,b as p,A as h,D as Pe}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();function De(){const e=new Map;return{on(t,a){return e.has(t)||e.set(t,new Set),e.get(t).add(a),()=>e.get(t).delete(a)},emit(t,a){if(e.has(t))for(const r of e.get(t))r(a)}}}function H(e){let t=e;const a=new Set;return{get:()=>t,set:r=>{t=typeof r=="function"?r(t):r;for(const s of a)s(t)},subscribe:r=>(a.add(r),()=>a.delete(r))}}function Le(e){const t=H({current:null,params:{}});let a=null;async function r(s){const o=window.location.hash.slice(1)||"/";if(a&&t.get().current&&t.get().current.path!==o&&!await a(o)){window.removeEventListener("hashchange",r),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",r),0);return}const c=e.find(d=>d.path===o)||e[0];t.set({current:c,params:{}})}return window.addEventListener("hashchange",r),r(),{store:t,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){a=s}}}const Ee=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"sandbox",path:"/sandbox",title:"API Sandbox",pageTitle:"API Enrichment Sandbox",icon:"code"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,r){this._$Ct=t,this._$AM=a,this._$Ci=r}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Re,he=e=>e,je=e=>e.strings===void 0,ye=()=>document.createComment(""),K=(e,t,a)=>{var o;const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(a===void 0){const c=r.insertBefore(ye(),s),d=r.insertBefore(ye(),s);a=new ze(c,d,e,e.options)}else{const c=a._$AB.nextSibling,d=a._$AM,n=d!==e;if(n){let i;(o=a._$AQ)==null||o.call(a,e),a._$AM=e,a._$AP!==void 0&&(i=e._$AU)!==d._$AU&&a._$AP(i)}if(c!==s||n){let i=a._$AA;for(;i!==c;){const l=he(i).nextSibling;he(r).insertBefore(i,s),i=l}}}return a},L=(e,t,a=e)=>(e._$AI(t,a),e),Be={},Ve=(e,t=Be)=>e._$AH=t,Ue=e=>e._$AH,ce=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,a)=>{const r=new Map;for(let s=t;s<=a;s++)r.set(e[s],s);return r},Te=Ae(class extends Ie{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let r;a===void 0?a=t:t!==void 0&&(r=t);const s=[],o=[];let c=0;for(const d of e)s[c]=r?r(d,c):c,o[c]=a(d,c),c++;return{values:o,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,r]){const s=Ue(e),{values:o,keys:c}=this.dt(t,a,r);if(!Array.isArray(s))return this.ut=c,o;const d=this.ut??(this.ut=[]),n=[];let i,l,v=0,m=s.length-1,g=0,u=o.length-1;for(;v<=m&&g<=u;)if(s[v]===null)v++;else if(s[m]===null)m--;else if(d[v]===c[g])n[g]=L(s[v],o[g]),v++,g++;else if(d[m]===c[u])n[u]=L(s[m],o[u]),m--,u--;else if(d[v]===c[u])n[u]=L(s[v],o[u]),K(e,n[u+1],s[v]),v++,u--;else if(d[m]===c[g])n[g]=L(s[m],o[g]),K(e,s[v],s[m]),m--,g++;else if(i===void 0&&(i=$e(c,g,u),l=$e(d,v,m)),i.has(d[v]))if(i.has(d[m])){const f=l.get(c[g]),b=f!==void 0?s[f]:null;if(b===null){const $=K(e,s[v]);L($,o[g]),n[g]=$}else n[g]=L(b,o[g]),K(e,s[v],b),s[f]=null;g++}else ce(s[m]),m--;else ce(s[v]),v++;for(;g<=u;){const f=K(e,n[u+1]);L(f,o[g]),n[g++]=f}for(;v<=m;){const f=s[v++];f!==null&&ce(f)}return this.ut=c,Ve(e,n),Ne}}),Fe={x:k`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:k`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:k`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:k`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:k`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:k`<polyline points="20 6 9 17 4 12"></polyline>`,tool:k`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:k`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":k`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:k`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:k`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:k`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:k`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:k`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:k`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:k`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:k`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:k`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":k`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:k`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:t=16,label:a}){const r=Fe[e];return r?p`<svg 
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
  </svg>`:p`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Ge="-FyYHK",He="hQIh8E",qe="vjCp9N",Ke="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Je="yefrc2",Qe="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",nt="HRKVqM",T={sidebar:Ge,brand:He,logo:qe,title:Ke,nav:We,navItem:Ye,sidebarFooter:Je,toggleBtn:Qe,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:nt},M=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),it=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class F extends Error{constructor(t,{code:a,status:r=0,detail:s=null,cause:o}={}){super(t,{cause:o}),this.name="ApiError",this.code=a,this.status=r,this.detail=s}get retryable(){return this.code===M.NETWORK||this.code===M.TIMEOUT||this.code===M.HTTP&&it.has(this.status)}get userMessage(){switch(this.code){case M.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case M.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case M.ABORTED:return"";case M.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},a=e.fetchImpl??((...u)=>globalThis.fetch(...u)),r={request:[],response:[],error:[]},s=new Map,o=()=>new F("Request aborted",{code:M.ABORTED}),c=(u,f)=>{const b=new URLSearchParams;for(const[S,w]of Object.entries(f??{}))w!=null&&w!==""&&b.set(S,String(w));const $=b.toString();return`${t.baseUrl}${u}${$?"?"+$:""}`};async function d(u){if(u.status===204)return null;const f=u.headers.get("content-type")??"";try{return f.includes("application/json")?await u.json():await u.text()}catch(b){throw new F("Malformed response body",{code:M.PARSE,status:u.status,cause:b})}}async function n(u,f,b){const $=AbortSignal.timeout(b),S=f?AbortSignal.any([f,$]):$;let w;try{w=await a(u.url,{method:u.method,headers:u.headers,body:u.body,signal:S})}catch(I){throw $.aborted?new F(`Request timed out after ${b} ms`,{code:M.TIMEOUT,cause:I}):f!=null&&f.aborted?o():new F("Network request failed",{code:M.NETWORK,cause:I})}const _=await d(w);if(!w.ok)throw new F(lt(_)??`HTTP ${w.status}`,{code:M.HTTP,status:w.status,detail:_});return{status:w.status,data:_,headers:w.headers}}const i=(u,f)=>new Promise((b,$)=>{const S=setTimeout(b,u);f==null||f.addEventListener("abort",()=>{clearTimeout(S),$(o())},{once:!0})}),l=u=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**u);async function v(u,{signal:f,timeoutMs:b,retries:$}){for(let S=0;;S+=1)try{return await n(u,f,b)}catch(w){if(!(w instanceof F)||!w.retryable||S>=$)throw w;await i(l(S),f)}}function m(u,f,b){let $=s.get(u);if(!$){const S=new AbortController,w={controller:S,refs:0,promise:null};w.promise=f(S.signal).finally(()=>{s.get(u)===w&&s.delete(u)}),w.promise.catch(()=>{}),s.set(u,w),$=w}return $.refs+=1,new Promise((S,w)=>{const _=()=>{$.refs-=1,$.refs===0&&(s.get(u)===$&&s.delete(u),$.controller.abort()),w(o())};if(b!=null&&b.aborted){_();return}b==null||b.addEventListener("abort",_,{once:!0}),$.promise.then(I=>{b==null||b.removeEventListener("abort",_),S(I)},I=>{b==null||b.removeEventListener("abort",_),w(I)})})}async function g(u,f,b={}){const{query:$,body:S,headers:w={},signal:_,meta:I={}}=b,V=b.timeoutMs??t.timeoutMs,R=b.retries??(ct.has(u)?t.retries:0),q=b.dedupe??u==="GET";let C={method:u,url:c(f,$),headers:{Accept:"application/json",...w},body:void 0,meta:I};S!==void 0&&(C.body=JSON.stringify(S),C.headers["Content-Type"]="application/json");for(const Z of r.request)C=await Z(C);const le=async Z=>{try{let U=await v(C,{signal:Z,timeoutMs:V,retries:R});for(const D of r.response)U=await D(U,C);return U.data}catch(U){let D=U;for(const Oe of r.error)D=await Oe(D,C)??D;throw D}};return q?m(`${C.method} ${C.url}`,le,_):le(_)}return{get:(u,f)=>g("GET",u,f),post:(u,f,b)=>g("POST",u,{...b,body:f}),put:(u,f,b)=>g("PUT",u,{...b,body:f}),delete:(u,f)=>g("DELETE",u,f),use({request:u,response:f,error:b}){u&&r.request.push(u),f&&r.response.push(f),b&&r.error.push(b)}}}const de=()=>{};function pt(e,t){return t?new Promise((a,r)=>{const s=()=>r(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(a,r).finally(()=>t.removeEventListener("abort",s))}):e}const me=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([r],[s])=>r<s?-1:1)):a),vt=(e,t)=>t.every((a,r)=>r<e.length&&me(a)===me(e[r]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const a=new Map,r=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function s(n){const i=me(n);let l=a.get(i);return l||(l={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},l.snapshot=r(l),a.set(i,l)),l}function o(n){n.snapshot=r(n);for(const i of[...n.listeners])i(n.snapshot)}function c(){for(const[n,i]of a)i.listeners.size===0&&!i.promise&&i.updatedAt&&e()-i.updatedAt>t&&a.delete(n)}function d(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(i=>(Object.assign(n,{data:i,error:null,status:"success",updatedAt:e()}),i),i=>{throw Object.assign(n,{error:i,status:"error"}),i}).finally(()=>{n.promise=null,o(n),n.invalidated&&n.listeners.size>0&&d(n).catch(de)}),n.promise.catch(de),o(n)),n.promise}return{load(n,i,{staleMs:l=0,signal:v}={}){c();const m=s(n);m.fetcher=i;const g=m.status==="success"&&!m.invalidated&&e()-m.updatedAt<l;return pt(g?Promise.resolve(m.data):d(m),v)},read:n=>s(n).snapshot,subscribe(n,i){const l=s(n);return l.listeners.add(i),i(l.snapshot),()=>{l.listeners.delete(i)}},invalidate(n){for(const i of a.values())vt(i.keyParts,n)&&(i.invalidated=!0,o(i),i.listeners.size>0&&i.fetcher&&d(i).catch(de))},setData(n,i){const l=s(n),v={data:l.data,status:l.status,updatedAt:l.updatedAt},m=i(l.data);return Object.assign(l,{data:m,status:"success",updatedAt:e()}),o(l),function(){l.data===m&&(Object.assign(l,v),o(l))}}}}function gt(e,{mutationFn:t,optimistic:a,invalidates:r=[]}){return async function(o){const c=((a==null?void 0:a(o))??[]).map(({key:d,update:n})=>e.setData(d,n));try{const d=await t(o);return(typeof r=="function"?r(o,d):r).forEach(i=>e.invalidate(i)),d}catch(d){throw c.reverse().forEach(n=>n()),d}}}const G={},ft=De(),E=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),y=mt();E.use({error:e=>((e==null?void 0:e.status)===401&&ft.emit("auth:required",e),e)});const re={all:["overview"]},bt={getOverview:e=>y.load(re.all,()=>E.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let ee=!1;function xt(){ee=!ee;const e=document.getElementById("app-sidebar");e&&(ee?e.classList.add(T.expanded):e.classList.remove(T.expanded))}function ht({routes:e,activeId:t,onNavigate:a}){var c,d,n,i;const r=y.read(re.all),s=((d=(c=r==null?void 0:r.data)==null?void 0:c.telemetry)==null?void 0:d.short_commit)||"6b319ac",o=((i=(n=r==null?void 0:r.data)==null?void 0:n.telemetry)==null?void 0:i.branch)||"main";return p`<aside id="app-sidebar" class="${T.sidebar} ${ee?T.expanded:""}">
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
      ${Te(e,l=>l.id,l=>p`
        <button class=${T.navItem} aria-current=${l.id===t?"page":"false"}
          @click=${()=>a(l.path)}>
          ${j({name:l.icon,size:16})}
          <span>${l.title}</span>
        </button>
      `)}
    </nav>
    <div class=${T.sidebarFooter}>
      <button class=${T.toggleBtn} @click=${xt}>
        ${j({name:"menu",size:16})}
        <span class=${T.toggleText}>Collapse Menu</span>
      </button>
      <div class=${T.footerDetails}>
        <div class=${T.statusWrapper}>
          <div class=${T.statusDot}></div>
          <span class=${T.statusText}>Manager Online</span>
        </div>
        <div class=${T.branchBox}>
          <span style="color: var(--color-accent);">${o}</span>
          <span class=${T.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",ue={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>e??h;function te(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const _t="PSMDQ2",Et={spinner:_t};function kt({size:e=16}={}){return p`<svg class=${Et.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",W={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:t="secondary",size:a="md",icon:r,iconOnly:s=!1,ariaLabel:o,loading:c=!1,disabled:d=!1,type:n="button",id:i,onClick:l}){const v=te(W.btn,W[`btn--${t}`],W[`btn--${a}`],s&&W["btn--icon-only"]);return p`<button id=${we(i)} class=${v} type=${n}
    aria-label=${we(o)} aria-busy=${c?"true":"false"}
    ?disabled=${d||c} @click=${l}>
    ${c?kt():r?j({name:r,size:a==="sm"?14:16}):h}
    ${s?h:p`<span class=${W.btn__label}>${e}</span>`}
  </button>`}const It=({icon:e,ariaLabel:t,...a})=>x({...a,icon:e,ariaLabel:t,iconOnly:!0,variant:a.variant??"ghost"});function Tt({title:e}){return p`<header class=${ue.topbar}>
    <h1 class=${ue.title}>${e}</h1>
    <div class=${ue.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{y.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=H({stack:[]});let t=0;function a(s){return new Promise(o=>{const c=`modal-${t+=1}`;let d=!1;const n=i=>{d||(d=!0,e.set(l=>({stack:l.stack.filter(v=>v.id!==c)})),o(i))};e.set(i=>({stack:[...i.stack,{id:c,view:()=>s({close:n,id:c})}]}))})}return{open:a,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Mt=Ct(),se=Mt;function Ot(){const{stack:e}=se.store.get();return p`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Rt="sCMZyq",Nt="Fk5OML",Pt="_0AKuiv",pe={layout:Rt,mainContent:Nt,page:Pt};function Dt({routerStore:e,routes:t,router:a,pageContent:r}){const{current:s}=e;return p`<div class=${pe.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:a.navigate})}
    <div class=${pe.mainContent}>
      ${Tt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${pe.page}>
        ${r}
      </main>
    </div>
    ${Ot()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Vt="r2dRuM",Ut="AjfFun",O={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Vt,table__stale:Ut};function ne({id:e,caption:t,columns:a,snapshot:r,getRows:s=l=>(l==null?void 0:l.items)??[],rowKey:o=(l,v)=>v,emptyMessage:c="No records found.",onRetry:d,footer:n=h,fallbackColumns:i=[]}){const{status:l,data:v,error:m,isFetching:g}=r,u=v!==void 0,f=typeof a=="function"?u?a(v):i:a,b=Math.max(f.length,1),$=u?s(v):[],S=(_,I)=>p`<td class=${te(_.align==="end"&&O["table__cell--end"],_.mono&&O["table__cell--mono"])}>
    ${_.render?_.render(I):St(I[_.key])}</td>`;let w;return!u&&(l==="idle"||l==="loading")?w=Array.from({length:5},()=>p`<tr aria-hidden="true">${f.map(()=>p`<td><span class=${O.table__skeleton}></span></td>`)}</tr>`):u?$.length===0?w=p`<tr><td colspan=${b} class=${O.table__message}>${c}</td></tr>`:w=Te($,o,_=>p`<tr>${f.map(I=>S(I,_))}</tr>`):w=p`<tr><td colspan=${b} class=${O.table__message} role="alert">
      ${(m==null?void 0:m.userMessage)||(m==null?void 0:m.message)||"Failed to load data."}
      ${d?x({label:"Retry",icon:"refresh",size:"sm",onClick:d}):h}</td></tr>`,p`<div class=${O.table}>
    ${l==="error"&&u?p`<div class=${O.table__stale} role="status">Showing cached data. ${(m==null?void 0:m.userMessage)??""} ${d?x({label:"Retry",size:"sm",variant:"ghost",onClick:d}):h}</div>`:h}
    <div class=${O.table__scroll} aria-busy=${g?"true":"false"}>
      <table id=${e??h} class=${O.table__grid}>
        ${t?p`<caption class="u-sr-only">${t}</caption>`:h}
        <thead><tr>${f.map(_=>p`<th scope="col" class=${te(_.align==="end"&&O["table__cell--end"])}>${_.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const ae={all:["pipeline"],columns:["pipeline","columns"]},X={getPipeline:e=>y.load(ae.all,()=>E.get("/api/v1/pipeline"),e),getColumns:e=>y.load(ae.columns,()=>E.get("/api/v1/pipeline/columns"),e)};function Ft(e){return!e||!e.columns?[]:e.columns.map(t=>({key:t,header:t.toUpperCase(),render:a=>p`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[t]}>${a[t]}</span>`}))}function Gt(){return{view(){var s,o;const e=y.read(ae.all),t=((s=e.data)==null?void 0:s.items)??[],a=((o=e.data)==null?void 0:o.total)??t.length,r=p`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return ne({id:"pipeline-table",snapshot:e,columns:c=>Ft(c),getRows:c=>(c==null?void 0:c.items)??[],rowKey:(c,d)=>c.id??d,onRetry:()=>X.getPipeline(),footer:r})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(e,t)=>{var r;const a=e._$AN;if(a===void 0)return!1;for(const s of a)(r=s._$AO)==null||r.call(s,t,!1),Y(s,t);return!0},oe=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),Kt(t)}};function Ht(e){this._$AN!==void 0?(oe(this),this._$AM=e,Ce(this)):this._$AM=e}function qt(e,t=!1,a=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=a;o<r.length;o++)Y(r[o],!1),oe(r[o]);else r!=null&&(Y(r,!1),oe(r));else Y(this,e)}const Kt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=qt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,r){super._$AT(t,a,r),Ce(this),this.isConnected=t._$AU}_$AO(t,a=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),a&&(Y(this,t),oe(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const ve=new WeakMap,Yt=Ae(class extends Wt{render(e){return h}update(e,[t]){var r;const a=t!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),h}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=ve.get(t);a===void 0&&(a=new WeakMap,ve.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=ve.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jt="_9lH80h",Qt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",z={modal:Jt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Qt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function B({title:e,size:t="md",body:a,footer:r=h,onClose:s,dismissible:o=!0}){const c=wt("modal-title"),d=l=>{l&&!l.open&&requestAnimationFrame(()=>{!l.open&&l.isConnected&&l.showModal()})},n=l=>{l.preventDefault(),o&&s(void 0)},i=l=>{o&&l.target===l.currentTarget&&s(void 0)};return p`<dialog class=${te(z.modal,z[`modal--${t}`])} aria-labelledby=${c}
      ${Yt(d)} @cancel=${n} @click=${i}>
    <div class=${z.modal__panel}>
      <header class=${z.modal__header}>
        <h2 id=${c} class=${z.modal__title}>${e}</h2>
        ${o?It({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):h}
      </header>
      <div class=${z.modal__body}>${a}</div>
      ${r!==h?p`<footer class=${z.modal__footer}>${r}</footer>`:h}
    </div>
  </dialog>`}function be({title:e,message:t,tone:a="danger",confirmLabel:r="Confirmar",requireText:s}){return new Promise(o=>{let c="";""+Math.random().toString(36).substring(2);const d=()=>{se.open(({close:i})=>B({title:e,body:p`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?p`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${l=>{c=l.target.value,n()}} />
            `:""}
          </div>
        `,footer:p`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{i(),o(!1)}})}
            ${x({label:r,variant:a==="danger"?"delete":"add",disabled:s?c!==s:!1,onClick:()=>{i(),o(!0)}})}
          </div>
        `,onClose:()=>{i(),o(!1)}}))};function n(){se.refresh()}d()})}function ss(e){const t=e.get(),a=()=>{e.set(i=>({...i,isManageColumnsModalOpen:!1}))},r=i=>{if(i===0)return;const l=[...t.columnsData],v=l[i-1];l[i-1]=l[i],l[i]=v,e.set(m=>({...m,columnsData:l}))},s=i=>{if(i===t.columnsData.length-1)return;const l=[...t.columnsData],v=l[i+1];l[i+1]=l[i],l[i]=v,e.set(m=>({...m,columnsData:l}))},o=async()=>{const i=t.columnsData.map(l=>l.name);try{await E.put("/api/v1/pipeline/columns/order",{column_order:i}),e.set(l=>({...l,isManageColumnsModalOpen:!1})),X.getPipeline({dedupe:!1})}catch(l){alert("Failed to save column order: "+l.message)}},c=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await E.post("/api/v1/pipeline/columns/prune");const i=await E.get("/api/v1/pipeline/columns");e.set(l=>({...l,columnsData:i})),X.getPipeline({dedupe:!1})}catch(i){alert("Failed to prune columns: "+i.message)}},d=p`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${t.isLoadingColumns?p`<div class="u-text-center u-p-4">Loading columns...</div>`:h}
    
    ${!t.isLoadingColumns&&t.columnsData?p`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${t.columnsData.map((i,l)=>{const v=i.is_system;return p`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${v?"var(--color-accent)":"var(--color-text)"};">${i.name}</span>
                <span class="u-text-xs u-text-muted">${i.type}</span>
                ${i.is_deprecated?p`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:h}
                ${v?p`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:h}
              </div>
              
              <div class="u-flex u-gap-1">
                ${x({label:"▲",variant:"ghost",size:"sm",disabled:v||l>0&&t.columnsData[l-1].is_system,onClick:()=>r(l)})}
                ${x({label:"▼",variant:"ghost",size:"sm",disabled:v||l===t.columnsData.length-1,onClick:()=>s(l)})}
              </div>
            </div>
          `})}
      </div>
    `:h}
  `,n=p`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${x({label:"Prune Deprecated",variant:"delete",onClick:c})}
      </div>
      <div class="u-flex u-gap-2">
        ${x({label:"Cancel",variant:"secondary",onClick:a})}
        ${x({label:"Save Order",variant:"save",onClick:o})}
      </div>
    </div>
  `;return B({title:"Manage Columns",size:"md",onClose:a,body:d,footer:n})}function as(){const e=H({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),t=Gt();let a,r;async function s(){if(await be({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await E.post("/api/v1/pipeline/purge"),X.getPipeline({dedupe:!1})}catch(c){alert("Error purging pipeline: "+c.message)}}return{mount(o){a=y.subscribe(ae.all,()=>o()),r=e.subscribe(()=>o()),X.getPipeline()},unmount(){a&&a(),r&&r()},view(){return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${x({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${x({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(o=>({...o,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const o=await E.get("/api/v1/pipeline/columns");e.set(c=>({...c,columnsData:o,isLoadingColumns:!1}))}catch(o){alert("Error loading columns: "+o.message),e.set(c=>({...c,isLoadingColumns:!1}))}}})}
              ${x({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${x({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:s})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${t.view()}
          
          ${e.get().isManageColumnsModalOpen?ss(e):h}
        </div>
      `}}}function os(){return{view(){var i,l,v;const{status:e,data:t,error:a}=y.read(re.all);if(e==="error")return p`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!t)return p`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const r=t.pipeline_total_items||0,s=t.active_incidents||0,o=t.registered_services||0,c=((i=t.telemetry)==null?void 0:i.branch)||"main",d=((l=t.telemetry)==null?void 0:l.clean)!==!1,n=(m,g,u,f,b="u-text-accent")=>p`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${m}</span>
            <span class="${b}">${j({name:f,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${g}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${u}>${u}</div>
          </div>
        </div>
      `;return p`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",r,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${n("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",c,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(v=t.stages)!=null&&v.length?t.stages.map(m=>p`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${m.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${m.name}</strong> <span class="u-text-muted">(${m.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      ${m.enabled?p`<span class="u-text-xs u-text-success">Active</span>`:p`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):p`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function rs(){const e=os();let t;return{mount(a){t=y.subscribe(re.all,()=>a()),bt.getOverview()},unmount(){t&&t()},view(){return p`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},ns={getTools:e=>y.load(ge.all,()=>E.get("/api/v1/tools"),e)},is="cg2FU3",ls="Jh4yC3",Se={console:is,output:ls};function cs({text:e,status:t="idle"}){return p`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function ds(){const e=H({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,a;const r=async s=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await E.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(c=>({...c,executionStatus:"success",output:c.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(c=>({...c,executionStatus:"error",output:c.output+`
ERROR: `+o.message}))}};return{mount(s){t=y.subscribe(ge.all,()=>s()),a=e.subscribe(()=>s()),ns.getTools()},unmount(){t&&t(),a&&a()},view(){const{status:s,data:o,error:c,isFetching:d}=y.read(ge.all),n=e.get(),i=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return p`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!o?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:h}
              ${s==="error"&&!o?p`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${c==null?void 0:c.message}</div>`:h}
              ${i.length===0&&o?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:h}
              
              ${i.map(l=>{var v,m,g;return p`
                <button 
                  class="u-text-left"
                  style="background: ${((v=n.selectedTool)==null?void 0:v.name)===l.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((m=n.selectedTool)==null?void 0:m.name)===l.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(u=>({...u,selectedTool:l,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((g=n.selectedTool)==null?void 0:g.name)===l.name?"u-text-accent":""}">${l.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${l.description}>${l.description}</div>
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
              ${cs({text:n.output,status:n.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const xe={all:["views"]},Me={getViews:e=>y.load(xe.all,()=>E.get("/api/v1/views"),e)};function us(){return{view(){var a;const e=y.read(xe.all),t=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!t.length&&e.status!=="loading"?p`
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
        `:ne({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function ps(){const e=us();let t;return{mount(a){t=y.subscribe(xe.all,()=>a()),Me.getViews()},unmount(){t&&t()},view(){return p`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const P={all:["incidents"],list:e=>[...P.all,e?"resolved":"active"],catalog:["incidents","catalog"]},J={getIncidents:(e,t)=>y.load(P.list(e),()=>E.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>E.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>y.load(P.catalog,()=>E.get("/api/v1/incidents/catalog/errors"),e)};function _e({resolved:e}){const t=gt(y,{mutationFn:s=>J.resolveIncident(s.id,s.note),invalidates:[P.all]});async function a(s){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await be({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:o})}catch(d){alert("Failed to resolve incident: "+d.message)}}const r=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>p`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?p`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(s.ID)})}];return{view(){const s=y.read(P.list(e));return ne({id:`incidents-table-${e?"resolved":"active"}`,columns:r,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function vs(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>p`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const a=t.SEVERITY==="CRITICAL"?"danger":"warning";return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>p`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>p`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>p`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=y.read(P.catalog);return ne({id:"error-catalog-table",columns:e,snapshot:t,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>J.getCatalog()})}}}function ms(){const e=_e({resolved:!1}),t=_e({resolved:!0}),a=vs(),r=H({activeTab:"active"});let s,o,c,d;return{mount(n){s=y.subscribe(P.list(!1),()=>n()),o=y.subscribe(P.list(!0),()=>n()),c=y.subscribe(P.catalog,()=>n()),d=r.subscribe(()=>n()),J.getIncidents(!1),J.getIncidents(!0),J.getCatalog()},unmount(){s&&s(),o&&o(),c&&c(),d&&d()},view(){const{activeTab:n}=r.get(),i=(l,v,m)=>{const g=n===l;return p`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${g?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${g?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${g?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>r.set($=>({...$,activeTab:l}))}
          >
            ${j({name:v,size:16})}
            <span>${m}</span>
          </button>
        `};return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${i("active","alert","Active Incidents")}
              ${i("resolved","check","Resolved")}
              ${i("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():h}
          ${n==="resolved"?t.view():h}
          ${n==="catalog"?a.view():h}
        </div>
      `}}}const fe={all:["gitops"]},gs={getGitOps:e=>y.load(fe.all,()=>E.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function fs(){let e;return{mount(t){e=y.subscribe(fe.all,()=>t()),gs.getGitOps()},unmount(){e&&e()},view(){const t=y.read(fe.all),{status:a,data:r,error:s,isFetching:o}=t;if(a==="loading"&&!r)return p`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!r)return p`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const c=(r==null?void 0:r.telemetry)||{};return p`
        <div class="u-flex u-flex-col u-gap-4">

          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
            
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Host Repository Mount (${c.path}:ro)</h3>
              <span class="u-font-mono u-text-xs u-text-bold" style="letter-spacing: 0.05em;">${c.mounted?"MOUNTED":"NOT MOUNTED"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Current Branch:</span>
              <span class="u-font-mono u-text-accent u-text-sm">${c.branch||"N/A"}</span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Active Commit:</span>
              <span class="u-font-mono u-text-sm">${c.short_commit||"N/A"} <span class="u-text-muted">(${c.commit||"N/A"})</span></span>
            </div>

            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm">Working Tree Status:</span>
              <span class="u-text-sm ${c.clean?"u-text-success":"u-text-danger"}">${c.clean?"✓ Clean":"x Dirty"}</span>
            </div>

            <div class="u-flex u-items-start u-justify-between u-gap-4" style="padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border);">
              <span class="u-text-muted u-text-sm" style="white-space: nowrap;">Last Commit<br>Subject:</span>
              <span class="u-text-sm u-text-right">${c.last_commit||"N/A"}</span>
            </div>

            <div style="background: color-mix(in srgb, var(--color-info) 10%, transparent); padding: var(--space-3) var(--space-4); color: var(--color-info);" class="u-text-sm">
              <strong>GitOps Protocol:</strong> ServerManager container observes host repo in read-only mode (:ro). Deployment is managed via cubi-deploy or Git on host.
            </div>

          </div>
        </div>
      `}}}const A={all:["settings"]},bs={getSettings:e=>y.load(A.all,()=>E.get("/api/v1/settings"),e),saveConfig:e=>E.post("/api/v1/settings/config",e),triggerSweep:()=>E.post("/api/v1/settings/sweep"),triggerBackup:()=>E.post("/api/v1/settings/backup")};function xs(e,t={},a=300){const r=Object.keys(t),s=()=>{e.set(c=>({...c,isServiceModalOpen:!0}))},o=(c,d,n)=>{var v;const i=((v=d.field_mappings)==null?void 0:v.length)||0,l=Object.keys(d.enrichment_endpoints||{}).join(", ");return p`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${d.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${d.name.toUpperCase()}</span>
            ${d.enabled?p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${d.poll_interval_seconds?`POLLS EVERY ${d.poll_interval_seconds}S`:`INHERITS GLOBAL (${a}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(m=>({...m,isServiceModalOpen:!0,editingServiceId:c}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${d.base_url||"N/A"} | API Key ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${i}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${l||"none"}</span>
        </div>
      </div>
    `};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${r.length===0?p`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:h}
        ${r.map((c,d)=>o(c,t[c],d===r.length-1))}
      </div>
    </div>
  `}function hs(e){var l;const t=e.get(),a=y.read(A.all),r=((l=a==null?void 0:a.data)==null?void 0:l.services)||{},s=t.editingServiceId?r[t.editingServiceId]:null,o=()=>{e.set(v=>({...v,isServiceModalOpen:!1,editingServiceId:null}))},c=()=>{try{const v=document.getElementById("srv-id").value.trim();if(!v){alert("Service ID is required");return}const m=document.getElementById("srv-enrich").value.trim(),g={};m&&m.split(`
`).forEach(b=>{const $=b.split(":");$.length>=2&&(g[$[0].trim()]=$.slice(1).join(":").trim())});const u={name:document.getElementById("srv-name").value.trim()||v,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:g,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(s==null?void 0:s.field_mappings)||[]},f={...r,[v]:u};t.editingServiceId&&t.editingServiceId!==v&&delete f[t.editingServiceId],y.setData(A.all,()=>({...a.data,services:f})),e.set(b=>({...b,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(v){alert("Error saving service: "+v.stack)}},d=v=>{alert(`Applied preset: ${v}`)},n=p`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${x({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>d("sonarr")})}
      ${x({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>d("radarr")})}
      ${x({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>d("jellyfin")})}
      ${x({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>d("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${(s==null?void 0:s.name)||""}>
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
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([v,m])=>`${v}: ${m}`).join(`
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
  `,i=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:o})}
      ${x({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:c})}
    </div>
  `;return B({title:"Register Service",size:"lg",onClose:o,body:n,footer:i})}function ys(e,t=[]){const a=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},r=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?p`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,o)=>{const c=r(s);return p`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${c.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${c.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${c.bg}; color: ${c.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${c.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    <label class="u-flex u-items-center u-gap-2" style="cursor: pointer; background: var(--color-bg-surface); padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                      <input type="checkbox" .checked=${s.enabled} @change=${d=>{const n={...y.read(A.all).data},i=n.stages.find(l=>l.id===s.id);i&&(i.enabled=d.target.checked,y.setData(A.all,()=>n),e.set(l=>({...l,isDirty:!0})))}}>
                      <span class="u-text-xs" style="color: ${s.enabled?"var(--color-success)":"var(--color-text-muted)"}; font-weight: 500;">
                        ${s.enabled?"ACTIVE":"INACTIVE"}
                      </span>
                    </label>
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(d=>({...d,isStageModalOpen:!0,editingStageId:s.id}))})}
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
  `}function $s(e){var v;const t=e.get(),a=y.read(A.all),r=((v=a==null?void 0:a.data)==null?void 0:v.stages)||[],s=t.editingStageId?r.find(m=>m.id===t.editingStageId):null,o=t.stageIsSink??(s?!s.complete_condition:!1),c=t.stageIsRoot??(s?!s.start_condition:!1),d=()=>{e.set(m=>({...m,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var m,g;try{const u=document.getElementById("stage-id").value.trim();if(!u){alert("Stage ID is required");return}const f={id:u,name:document.getElementById("stage-name").value.trim()||u,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:c?null:((m=document.getElementById("stage-start"))==null?void 0:m.value.trim())||null,complete_condition:o?null:((g=document.getElementById("stage-complete"))==null?void 0:g.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let b=[...r];t.editingStageId?b=b.map($=>$.id===t.editingStageId?f:$):b.push(f),y.setData(A.all,()=>({...a.data,stages:b})),e.set($=>({...$,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(u){alert("Error in Save Stage: "+u.stack)}},i=p`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(s==null?void 0:s.id)||""} ?disabled=${!!s} @input=${m=>{m.target.value=m.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
        <input type="checkbox" id="chk-stage-root" .checked=${c} @change=${m=>e.set(g=>({...g,stageIsRoot:m.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${c?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(s==null?void 0:s.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-start").value;if(!m.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${o} @change=${m=>e.set(g=>({...g,stageIsSink:m.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(s==null?void 0:s.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-complete").value;if(!m.trim()){alert("Expression is empty!");return}try{const g=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();g.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+g.message)}catch(g){alert("Validation failed: "+g.message)}}})}
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
  `,l=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:d})}
      ${x({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return B({title:"Configure DAG Stage",size:"lg",onClose:d,body:i,footer:l})}function ws(e,t={}){const a=Object.keys(t),r=e.get().selectedMappingService||a[0]||"",s=()=>{e.set(i=>({...i,isSampleApiModalOpen:!0}))},o=()=>{e.set(i=>({...i,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},c=(i,l)=>{e.set(v=>({...v,isMappingModalOpen:!0,editingMapping:{...i},editingMappingIndex:l}))},d=i=>{if(confirm("Are you sure you want to delete this mapping?")){const v={...y.read(A.all).data};v.services[r].field_mappings.splice(i,1),y.setData(A.all,()=>v),e.set(m=>({...m,isDirty:!0}))}},n=()=>p`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${i=>e.set(l=>({...l,selectedMappingService:i.target.value}))}
        >
          ${a.map(i=>p`<option value="${i}" ?selected=${i===r}>${t[i].name}</option>`)}
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
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${a.length>0?n():h}
        
        ${(()=>{const i=t[r];return!i||!i.field_mappings||i.field_mappings.length===0?p`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:p`
            <div class="u-flex u-flex-col u-gap-3">
              ${i.field_mappings.map((l,v)=>p`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${l.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${l.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${l.data_type})</span>
                    ${l.transformer?p`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${l.transformer}</div>`:h}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>c(l,v)})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>d(v)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function Ss(e){const t=e.get(),a=t.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},r=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},s=()=>{const n={...y.read(A.all).data},i=Object.keys(n.services||{}),l=t.selectedMappingService||i[0];l&&(n.services[l].field_mappings||(n.services[l].field_mappings=[]),t.editingMappingIndex>=0?n.services[l].field_mappings[t.editingMappingIndex]=a:n.services[l].field_mappings.push(a),y.setData(A.all,()=>n),e.set(v=>({...v,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},o=p`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${t.selectedMappingService}">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId" .value=${a.source_field} @input=${d=>a.source_field=d.target.value}>
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${a.target_column} @input=${d=>{let n=d.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");n=n.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),d.target.value=n,a.target_column=n}}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select" .value=${a.data_type} @change=${d=>a.data_type=d.target.value}>
        <option value="TEXT" ?selected=${a.data_type==="TEXT"}>TEXT</option>
        <option value="INTEGER" ?selected=${a.data_type==="INTEGER"}>INTEGER</option>
        <option value="REAL" ?selected=${a.data_type==="REAL"}>REAL</option>
        <option value="BOOLEAN" ?selected=${a.data_type==="BOOLEAN"}>BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value" .value=${a.transformer||""} @input=${d=>a.transformer=d.target.value}>
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
          ${x({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let n;try{n=JSON.parse(d)}catch{n=d}try{const i={expression:a.transformer,sample_value:n};typeof n=="object"&&n!==null&&!Array.isArray(n)&&(i.context_dict=n);const l=await E.post("/api/v1/settings/test-transformer",i);alert("Result: "+JSON.stringify(l.result))}catch(i){alert("Error: "+i.message)}}})}
        </div>
      </div>
    </div>
  `,c=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:r})}
      ${x({label:"Save Mapping",variant:"save",onClick:s})}
    </div>
  `;return B({title:"Configure Field Mapping & Transformer",size:"lg",onClose:r,body:o,footer:c})}function _s(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},a=p`
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
  `,r=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return B({title:"Sample Service API Schema",size:"lg",onClose:t,body:a,footer:r})}function Es(e,t={}){const a=Object.keys(t.triggers||{}),r=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return p`
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
        ${a.length===0?p`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:h}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function ks(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},a=p`
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
  `,r=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return B({title:"Add Notification Trigger",size:"md",onClose:t,body:a,footer:r})}function As(e,t={}){const a=t.retention_days||30,r=t.global_poll_interval_seconds||300;return p`
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
  `}function Is(e){const t=H({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,r;const s=o=>{t.get().isDirty&&(o.preventDefault(),o.returnValue="")};return{mount(o){a=t.subscribe(()=>o()),r=y.subscribe(A.all,()=>o()),bs.getSettings(),window.addEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(async c=>t.get().isDirty?await be({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),r&&r(),window.removeEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(null)},view(){const o=t.get(),{activeTab:c,saving:d,isServiceModalOpen:n,isStageModalOpen:i,isMappingModalOpen:l,isSampleApiModalOpen:v,isNotificationModalOpen:m}=o,g=y.read(A.all),{data:u,status:f,error:b}=g;if(f==="loading"&&!u)return p`<p class="u-text-muted">Loading settings...</p>`;if(f==="error"&&!u)return p`<p class="u-text-danger">Error: ${b==null?void 0:b.message}</p>`;const $={retention_days:(u==null?void 0:u.retention_days)||30,global_poll_interval_seconds:(u==null?void 0:u.global_poll_interval_seconds)||300},S=(u==null?void 0:u.services)||{},w=(u==null?void 0:u.stages)||[],_=$.global_poll_interval_seconds,I=(V,R,q)=>{const C=c===V;return p`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${C?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${C?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${C?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(D=>({...D,activeTab:V}))}
          >
            ${j({name:R,size:16})}
            <span>${q}</span>
          </button>
        `};return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${I("services","database","Services")}
              ${I("stages","activity","Stages & Predicates")}
              ${I("mappings","code","Field Mappings")}
              ${I("notifications","bell","Notification Triggers")}
              ${I("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:d,disabled:!o.isDirty,onClick:async()=>{const V=y.read(A.all);t.set(R=>({...R,saving:!0}));try{await E.post("/api/v1/settings",V.data),t.set(R=>({...R,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(R){alert("Error saving settings: "+R.message),t.set(q=>({...q,saving:!1}))}}})}
              ${o.isDirty?p`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:h}
            </div>
            </div>
          </div>
          
          ${c==="services"?xs(t,S,_):h}
          ${c==="stages"?ys(t,w):h}
          ${c==="mappings"?ws(t,S):h}
          ${c==="notifications"?Es(t,u):h}
          ${c==="engine"?As(t,$):h}
          
          <!-- Modals -->
          ${n?hs(t):h}
          ${i?$s(t):h}
          ${l?Ss(t):h}
          ${v?_s(t):h}
          ${m?ks(t):h}
        </div>
      `}}}function Ts(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const t=new Set;return{get:()=>e,set:a=>{e=a(e),t.forEach(r=>r())},subscribe:a=>(t.add(a),()=>t.delete(a))}}function Cs(){const e=Ts(),t=async()=>{var b,$;const o=e.get(),{selectedService:c,selectedRecordId:d,testEndpoint:n,testName:i}=o;if(!c||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!c||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const l=y.read(A.all),m=(((b=l==null?void 0:l.data)==null?void 0:b.services)||{})[c],g={...(m==null?void 0:m.enrichment_endpoints)||{}},u=i.trim()||"sandbox_test",f=!!n.trim();f&&(g[u]=n.trim()),e.set(S=>({...S,isLoading:!0,error:null,logs:[],testResponse:null}));try{const S=await E.post("/api/v1/pipeline/sandbox/enrichment",{service_id:c,record_id:parseInt(d,10),enrichment_endpoints:g}),w=f?(($=S.context_data)==null?void 0:$[u])||null:S.context_data;e.set(_=>({..._,isLoading:!1,logs:S.logs||[],testResponse:w}))}catch(S){e.set(w=>({...w,isLoading:!1,error:S.message}))}},a=async()=>{var u;const o=e.get();if(!o.selectedService)return;const c=y.read(A.all),d=((u=c==null?void 0:c.data)==null?void 0:u.services)||{},n=d[o.selectedService],i={...(n==null?void 0:n.enrichment_endpoints)||{}},l=o.testName.trim(),v=o.testEndpoint.trim();if(!l||!v){alert("Please provide both a namespace name and an endpoint to save.");return}i[l]=v;const m={...d,[o.selectedService]:{...n,enrichment_endpoints:i}},g={...c.data,services:m};try{await E.post("/api/v1/settings/config",g),y.setData(A.all,()=>g),e.set(f=>({...f,saveSuccess:!0})),setTimeout(()=>{e.set(f=>({...f,saveSuccess:!1}))},3e3)}catch(f){alert("Failed to save to service: "+f.message)}},r=()=>{var m;const o=e.get(),c=y.read(A.all),d=((m=c==null?void 0:c.data)==null?void 0:m.services)||{},n=Object.keys(d),i=d[o.selectedService];!o.selectedService&&n.length>0&&setTimeout(()=>e.set(g=>({...g,selectedService:n[0]})),0);const l=(g,u)=>{if(!(!u||!g))try{return u.split(".").reduce((f,b)=>f&&f[b]!==void 0?f[b]:void 0,g)}catch{return}},v=o.testVariable.trim()?l(o.testResponse,o.testVariable.trim()):void 0;return p`
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
            <select class="form-select font-mono" @change=${g=>e.set(u=>({...u,selectedService:g.target.value}))} style="border: 1px solid var(--color-text);">
              ${n.length===0?p`<option value="">No services</option>`:h}
              ${n.map(g=>p`<option value=${g} ?selected=${o.selectedService===g}>${d[g].name||g}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${o.selectedRecordId} @input=${g=>e.set(u=>({...u,selectedRecordId:g.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:t,disabled:o.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${o.testName} @input=${g=>e.set(u=>({...u,testName:g.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:a,disabled:o.isLoading})}
            ${o.saveSuccess?p`<span style="color: var(--color-success);">${j({name:"check"})}</span>`:h}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${o.testEndpoint} @input=${g=>e.set(u=>({...u,testEndpoint:g.target.value}))}></textarea>
            </div>
            
            <div class="u-flex u-items-center u-justify-between u-mb-2">
              <h4 style="margin: 0; color: var(--color-text);">Respond</h4>
              <div class="u-text-xs u-text-muted">
                ${o.testEndpoint.trim()?`Showing result for new namespace: ${o.testName.trim()||"sandbox_test"}`:"Showing complete cumulative context"}
              </div>
            </div>
            
            <!-- JSON Path Evaluator -->
            ${o.testResponse?p`
              <div class="u-flex u-gap-2 u-items-center u-mb-2" style="background: var(--color-bg-surface); padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
                <span style="color: var(--color-text-muted); font-size: 0.85rem;">Test Path:</span>
                <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${o.testVariable} @input=${g=>e.set(u=>({...u,testVariable:g.target.value}))} style="flex: 1; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                <div style="flex: 1; padding: 4px 8px; background: #000; color: ${v!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${o.testVariable.trim()?v!==void 0?JSON.stringify(v):"undefined":"Enter path to test..."}
                </div>
              </div>
            `:h}
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: #FFFFFF; font-family: monospace; font-size: 0.85rem;">
              ${o.isLoading?"Running test...":h}
              ${o.error?p`<div style="color: var(--color-error);">${o.error}</div>`:h}
              ${!o.isLoading&&!o.error&&o.testResponse?p`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(o.testResponse,null,2)}</pre>`:h}
              ${!o.isLoading&&!o.error&&!o.testResponse&&o.logs.length>0?p`<div style="color: var(--color-warning);">Endpoint returned empty or failed.\n\nCheck logs:\n${o.logs.join(`
`)}</div>`:h}
              ${!o.isLoading&&!o.error&&!o.testResponse&&o.logs.length===0&&!o.testEndpoint.trim()?p`<div style="color: var(--color-text-muted);">Click RUN with an empty input to fetch the full context, or type an endpoint to test a new request.</div>`:h}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((i==null?void 0:i.enrichment_endpoints)||{}).length===0?p`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:h}
              
              ${Object.entries((i==null?void 0:i.enrichment_endpoints)||{}).map(([g,u])=>p`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(f=>({...f,testName:g,testEndpoint:u}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${g}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${u}>${u}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let s;return{view:r,mount:o=>{s=e.subscribe(o);const c=y.read(A.all);c!=null&&c.data||E.get("/api/v1/settings").then(d=>{y.setData(A.all,()=>d),e.set(n=>({...n}))}).catch(console.error)},unmount:()=>{s&&s()}}}const Q=Le(Ee),Ms={overview:rs(),pipeline:as(),tools:ds(),views:ps(),incidents:ms(),sandbox:Cs(),gitops:fs(),settings:Is(Q)};let N=null;function ie(){var a,r,s,o;const{current:e}=Q.store.get();N&&N.id!==e.id&&((r=(a=N.instance).unmount)==null||r.call(a),N=null),!N&&e&&(N={id:e.id,instance:Ms[e.id]},(o=(s=N.instance).mount)==null||o.call(s,ie));const t=N?N.instance.view():"";Pe(Dt({routerStore:Q.store.get(),routes:Ee,router:Q,pageContent:t}),document.getElementById("app"))}Q.store.subscribe(ie);se.store.subscribe(ie);ie();
