import{j as Re,E as Pe,w as k,b as c,A as y,D as Ne}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function De(){const e=new Map;return{on(t,o){return e.has(t)||e.set(t,new Set),e.get(t).add(o),()=>e.get(t).delete(o)},emit(t,o){if(e.has(t))for(const a of e.get(t))a(o)}}}function W(e){let t=e;const o=new Set;return{get:()=>t,set:a=>{t=typeof a=="function"?a(t):a;for(const s of o)s(t)},subscribe:a=>(o.add(a),()=>o.delete(a))}}function Le(e){const t=W({current:null,params:{}});function o(){const a=window.location.hash.slice(1)||"/",s=e.find(i=>i.path===a)||e[0];t.set({current:s,params:{}})}return window.addEventListener("hashchange",o),o(),{store:t,navigate(a){window.location.hash=a}}}const Ae=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Te=e=>(...t)=>({_$litDirective$:e,values:t});let Ee=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,a){this._$Ct=t,this._$AM=o,this._$Ci=a}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Re,xe=e=>e,je=e=>e.strings===void 0,he=()=>document.createComment(""),F=(e,t,o)=>{var i;const a=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(o===void 0){const n=a.insertBefore(he(),s),l=a.insertBefore(he(),s);o=new ze(n,l,e,e.options)}else{const n=o._$AB.nextSibling,l=o._$AM,r=l!==e;if(r){let u;(i=o._$AQ)==null||i.call(o,e),o._$AM=e,o._$AP!==void 0&&(u=e._$AU)!==l._$AU&&o._$AP(u)}if(n!==s||r){let u=o._$AA;for(;u!==n;){const d=xe(u).nextSibling;xe(a).insertBefore(u,s),u=d}}}return o},P=(e,t,o=e)=>(e._$AI(t,o),e),Be={},Ue=(e,t=Be)=>e._$AH=t,Ge=e=>e._$AH,ie=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=(e,t,o)=>{const a=new Map;for(let s=t;s<=o;s++)a.set(e[s],s);return a},_e=Te(class extends Ee{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let a;o===void 0?o=t:t!==void 0&&(a=t);const s=[],i=[];let n=0;for(const l of e)s[n]=a?a(l,n):n,i[n]=o(l,n),n++;return{values:i,keys:s}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,a]){const s=Ge(e),{values:i,keys:n}=this.dt(t,o,a);if(!Array.isArray(s))return this.ut=n,i;const l=this.ut??(this.ut=[]),r=[];let u,d,f=0,v=s.length-1,x=0,p=i.length-1;for(;f<=v&&x<=p;)if(s[f]===null)f++;else if(s[v]===null)v--;else if(l[f]===n[x])r[x]=P(s[f],i[x]),f++,x++;else if(l[v]===n[p])r[p]=P(s[v],i[p]),v--,p--;else if(l[f]===n[p])r[p]=P(s[f],i[p]),F(e,r[p+1],s[f]),f++,p--;else if(l[v]===n[x])r[x]=P(s[v],i[x]),F(e,s[f],s[v]),v--,x++;else if(u===void 0&&(u=ye(n,x,p),d=ye(l,f,v)),u.has(l[f]))if(u.has(l[v])){const m=d.get(n[x]),g=m!==void 0?s[m]:null;if(g===null){const $=F(e,s[f]);P($,i[x]),r[x]=$}else r[x]=P(g,i[x]),F(e,s[f],g),s[m]=null;x++}else ie(s[v]),v--;else ie(s[f]),f++;for(;x<=p;){const m=F(e,r[p+1]);P(m,i[x]),r[x++]=m}for(;f<=v;){const m=s[f++];m!==null&&ie(m)}return this.ut=n,Ue(e,r),Pe}}),Ve={x:k`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:k`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:k`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:k`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:k`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:k`<polyline points="20 6 9 17 4 12"></polyline>`,tool:k`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:k`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":k`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:k`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:k`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:k`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:k`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:k`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:k`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:k`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:k`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:k`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":k`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:k`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:t=16,label:o}){const a=Ve[e];return a?c`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${t} height=${t} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    aria-label=${o||e}
    role=${o?"img":"presentation"}
    aria-hidden=${o?"false":"true"}
  >
    ${a}
  </svg>`:c`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",Ke="vjCp9N",qe="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Qe="yefrc2",Je="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",ot="erzuUm",at="IX2naX",rt="UuwGh4",it="HRKVqM",T={sidebar:Fe,brand:He,logo:Ke,title:qe,nav:We,navItem:Ye,sidebarFooter:Qe,toggleBtn:Je,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:ot,brandText:at,statusText:rt,commitText:it},C=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),nt=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(o=>`${(o.loc??[]).slice(1).join(".")||"body"}: ${o.msg}`).join("; "):null}class L extends Error{constructor(t,{code:o,status:a=0,detail:s=null,cause:i}={}){super(t,{cause:i}),this.name="ApiError",this.code=o,this.status=a,this.detail=s}get retryable(){return this.code===C.NETWORK||this.code===C.TIMEOUT||this.code===C.HTTP&&nt.has(this.status)}get userMessage(){switch(this.code){case C.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case C.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case C.ABORTED:return"";case C.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},o=e.fetchImpl??((...p)=>globalThis.fetch(...p)),a={request:[],response:[],error:[]},s=new Map,i=()=>new L("Request aborted",{code:C.ABORTED}),n=(p,m)=>{const g=new URLSearchParams;for(const[A,h]of Object.entries(m??{}))h!=null&&h!==""&&g.set(A,String(h));const $=g.toString();return`${t.baseUrl}${p}${$?"?"+$:""}`};async function l(p){if(p.status===204)return null;const m=p.headers.get("content-type")??"";try{return m.includes("application/json")?await p.json():await p.text()}catch(g){throw new L("Malformed response body",{code:C.PARSE,status:p.status,cause:g})}}async function r(p,m,g){const $=AbortSignal.timeout(g),A=m?AbortSignal.any([m,$]):$;let h;try{h=await o(p.url,{method:p.method,headers:p.headers,body:p.body,signal:A})}catch(_){throw $.aborted?new L(`Request timed out after ${g} ms`,{code:C.TIMEOUT,cause:_}):m!=null&&m.aborted?i():new L("Network request failed",{code:C.NETWORK,cause:_})}const w=await l(h);if(!h.ok)throw new L(lt(w)??`HTTP ${h.status}`,{code:C.HTTP,status:h.status,detail:w});return{status:h.status,data:w,headers:h.headers}}const u=(p,m)=>new Promise((g,$)=>{const A=setTimeout(g,p);m==null||m.addEventListener("abort",()=>{clearTimeout(A),$(i())},{once:!0})}),d=p=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**p);async function f(p,{signal:m,timeoutMs:g,retries:$}){for(let A=0;;A+=1)try{return await r(p,m,g)}catch(h){if(!(h instanceof L)||!h.retryable||A>=$)throw h;await u(d(A),m)}}function v(p,m,g){let $=s.get(p);if(!$){const A=new AbortController,h={controller:A,refs:0,promise:null};h.promise=m(A.signal).finally(()=>{s.get(p)===h&&s.delete(p)}),h.promise.catch(()=>{}),s.set(p,h),$=h}return $.refs+=1,new Promise((A,h)=>{const w=()=>{$.refs-=1,$.refs===0&&(s.get(p)===$&&s.delete(p),$.controller.abort()),h(i())};if(g!=null&&g.aborted){w();return}g==null||g.addEventListener("abort",w,{once:!0}),$.promise.then(_=>{g==null||g.removeEventListener("abort",w),A(_)},_=>{g==null||g.removeEventListener("abort",w),h(_)})})}async function x(p,m,g={}){const{query:$,body:A,headers:h={},signal:w,meta:_={}}=g,ae=g.timeoutMs??t.timeoutMs,U=g.retries??(ct.has(p)?t.retries:0),fe=g.dedupe??p==="GET";let I={method:p,url:n(m,$),headers:{Accept:"application/json",...h},body:void 0,meta:_};A!==void 0&&(I.body=JSON.stringify(A),I.headers["Content-Type"]="application/json");for(const G of a.request)I=await G(I);const re=async G=>{try{let V=await f(I,{signal:G,timeoutMs:ae,retries:U});for(const D of a.response)V=await D(V,I);return V.data}catch(V){let D=V;for(const Oe of a.error)D=await Oe(D,I)??D;throw D}};return fe?v(`${I.method} ${I.url}`,re,w):re(w)}return{get:(p,m)=>x("GET",p,m),post:(p,m,g)=>x("POST",p,{...g,body:m}),put:(p,m,g)=>x("PUT",p,{...g,body:m}),delete:(p,m)=>x("DELETE",p,m),use({request:p,response:m,error:g}){p&&a.request.push(p),m&&a.response.push(m),g&&a.error.push(g)}}}const ne=()=>{};function pt(e,t){return t?new Promise((o,a)=>{const s=()=>a(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(o,a).finally(()=>t.removeEventListener("abort",s))}):e}const ue=e=>JSON.stringify(e,(t,o)=>o&&typeof o=="object"&&!Array.isArray(o)?Object.fromEntries(Object.entries(o).sort(([a],[s])=>a<s?-1:1)):o),vt=(e,t)=>t.every((o,a)=>a<e.length&&ue(o)===ue(e[a]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const o=new Map,a=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function s(r){const u=ue(r);let d=o.get(u);return d||(d={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},d.snapshot=a(d),o.set(u,d)),d}function i(r){r.snapshot=a(r);for(const u of[...r.listeners])u(r.snapshot)}function n(){for(const[r,u]of o)u.listeners.size===0&&!u.promise&&u.updatedAt&&e()-u.updatedAt>t&&o.delete(r)}function l(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(u=>(Object.assign(r,{data:u,error:null,status:"success",updatedAt:e()}),u),u=>{throw Object.assign(r,{error:u,status:"error"}),u}).finally(()=>{r.promise=null,i(r),r.invalidated&&r.listeners.size>0&&l(r).catch(ne)}),r.promise.catch(ne),i(r)),r.promise}return{load(r,u,{staleMs:d=0,signal:f}={}){n();const v=s(r);v.fetcher=u;const x=v.status==="success"&&!v.invalidated&&e()-v.updatedAt<d;return pt(x?Promise.resolve(v.data):l(v),f)},read:r=>s(r).snapshot,subscribe(r,u){const d=s(r);return d.listeners.add(u),u(d.snapshot),()=>{d.listeners.delete(u)}},invalidate(r){for(const u of o.values())vt(u.keyParts,r)&&(u.invalidated=!0,i(u),u.listeners.size>0&&u.fetcher&&l(u).catch(ne))},setData(r,u){const d=s(r),f={data:d.data,status:d.status,updatedAt:d.updatedAt},v=u(d.data);return Object.assign(d,{data:v,status:"success",updatedAt:e()}),i(d),function(){d.data===v&&(Object.assign(d,f),i(d))}}}}function gt(e,{mutationFn:t,optimistic:o,invalidates:a=[]}){return async function(i){const n=((o==null?void 0:o(i))??[]).map(({key:l,update:r})=>e.setData(l,r));try{const l=await t(i);return(typeof a=="function"?a(i,l):a).forEach(u=>e.invalidate(u)),l}catch(l){throw n.reverse().forEach(r=>r()),l}}}const z={},bt=De(),E=ut({baseUrl:(z==null?void 0:z.VITE_API_BASE)??"",timeoutMs:Number((z==null?void 0:z.VITE_HTTP_TIMEOUT_MS)??1e4)}),S=mt();E.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const te={all:["overview"]},ft={getOverview:e=>S.load(te.all,()=>E.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Y=!1;function xt(){Y=!Y;const e=document.getElementById("app-sidebar");e&&(Y?e.classList.add(T.expanded):e.classList.remove(T.expanded))}function ht({routes:e,activeId:t,onNavigate:o}){var n,l,r,u;const a=S.read(te.all),s=((l=(n=a==null?void 0:a.data)==null?void 0:n.telemetry)==null?void 0:l.short_commit)||"6b319ac",i=((u=(r=a==null?void 0:a.data)==null?void 0:r.telemetry)==null?void 0:u.branch)||"main";return c`<aside id="app-sidebar" class="${T.sidebar} ${Y?T.expanded:""}">
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
      ${_e(e,d=>d.id,d=>c`
        <button class=${T.navItem} aria-current=${d.id===t?"page":"false"}
          @click=${()=>o(d.path)}>
          ${j({name:d.icon,size:16})}
          <span>${d.title}</span>
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
          <span style="color: var(--color-accent);">${i}</span>
          <span class=${T.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",le={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>e??y;function J(...e){return e.filter(Boolean).join(" ")}function St(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function wt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const At="PSMDQ2",kt={spinner:At};function Tt({size:e=16}={}){return c`<svg class=${kt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Et="vZLpx0",H={btn:Et,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function b({label:e,variant:t="secondary",size:o="md",icon:a,iconOnly:s=!1,ariaLabel:i,loading:n=!1,disabled:l=!1,type:r="button",id:u,onClick:d}){const f=J(H.btn,H[`btn--${t}`],H[`btn--${o}`],s&&H["btn--icon-only"]);return c`<button id=${$e(u)} class=${f} type=${r}
    aria-label=${$e(i)} aria-busy=${n?"true":"false"}
    ?disabled=${l||n} @click=${d}>
    ${n?Tt():a?j({name:a,size:o==="sm"?14:16}):y}
    ${s?y:c`<span class=${H.btn__label}>${e}</span>`}
  </button>`}const _t=({icon:e,ariaLabel:t,...o})=>b({...o,icon:e,ariaLabel:t,iconOnly:!0,variant:o.variant??"ghost"});function Ct({title:e}){return c`<header class=${le.topbar}>
    <h1 class=${le.title}>${e}</h1>
    <div class=${le.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${b({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{S.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function It(){const e=W({stack:[]});let t=0;function o(s){return new Promise(i=>{const n=`modal-${t+=1}`;let l=!1;const r=u=>{l||(l=!0,e.set(d=>({stack:d.stack.filter(f=>f.id!==n)})),i(u))};e.set(u=>({stack:[...u.stack,{id:n,view:()=>s({close:r,id:n})}]}))})}return{open:o,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Mt=It(),X=Mt;function Ot(){const{stack:e}=X.store.get();return c`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Rt="sCMZyq",Pt="Fk5OML",Nt="_0AKuiv",ce={layout:Rt,mainContent:Pt,page:Nt};function Dt({routerStore:e,routes:t,router:o,pageContent:a}){const{current:s}=e;return c`<div class=${ce.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:o.navigate})}
    <div class=${ce.mainContent}>
      ${Ct({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${ce.page}>
        ${a}
      </main>
    </div>
    ${Ot()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Ut="r2dRuM",Gt="AjfFun",M={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Ut,table__stale:Gt};function se({id:e,caption:t,columns:o,snapshot:a,getRows:s=d=>(d==null?void 0:d.items)??[],rowKey:i=(d,f)=>f,emptyMessage:n="No records found.",onRetry:l,footer:r=y,fallbackColumns:u=[]}){const{status:d,data:f,error:v,isFetching:x}=a,p=f!==void 0,m=typeof o=="function"?p?o(f):u:o,g=Math.max(m.length,1),$=p?s(f):[],A=(w,_)=>c`<td class=${J(w.align==="end"&&M["table__cell--end"],w.mono&&M["table__cell--mono"])}>
    ${w.render?w.render(_):wt(_[w.key])}</td>`;let h;return!p&&(d==="idle"||d==="loading")?h=Array.from({length:5},()=>c`<tr aria-hidden="true">${m.map(()=>c`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):p?$.length===0?h=c`<tr><td colspan=${g} class=${M.table__message}>${n}</td></tr>`:h=_e($,i,w=>c`<tr>${m.map(_=>A(_,w))}</tr>`):h=c`<tr><td colspan=${g} class=${M.table__message} role="alert">
      ${(v==null?void 0:v.userMessage)||(v==null?void 0:v.message)||"Failed to load data."}
      ${l?b({label:"Retry",icon:"refresh",size:"sm",onClick:l}):y}</td></tr>`,c`<div class=${M.table}>
    ${d==="error"&&p?c`<div class=${M.table__stale} role="status">Showing cached data. ${(v==null?void 0:v.userMessage)??""} ${l?b({label:"Retry",size:"sm",variant:"ghost",onClick:l}):y}</div>`:y}
    <div class=${M.table__scroll} aria-busy=${x?"true":"false"}>
      <table id=${e??y} class=${M.table__grid}>
        ${t?c`<caption class="u-sr-only">${t}</caption>`:y}
        <thead><tr>${m.map(w=>c`<th scope="col" class=${J(w.align==="end"&&M["table__cell--end"])}>${w.header}</th>`)}</tr></thead>
        <tbody>${h}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const Z={all:["pipeline"],columns:["pipeline","columns"]},pe={getPipeline:e=>S.load(Z.all,()=>E.get("/api/v1/pipeline"),e),getColumns:e=>S.load(Z.columns,()=>E.get("/api/v1/pipeline/columns"),e)};function Vt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:o=>c`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${o[t]}>${o[t]}</span>`})):[]}function Ft(){return{view(){var s,i;const e=S.read(Z.all),t=((s=e.data)==null?void 0:s.items)??[],o=((i=e.data)==null?void 0:i.total)??t.length,a=c`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${o} records</div>
          <div class="u-flex u-gap-2">
            ${b({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${b({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return se({id:"pipeline-table",snapshot:e,columns:n=>Vt((n==null?void 0:n.items)??[]),getRows:n=>(n==null?void 0:n.items)??[],rowKey:(n,l)=>n.id??l,onRetry:()=>pe.getPipeline(),footer:a})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=(e,t)=>{var a;const o=e._$AN;if(o===void 0)return!1;for(const s of o)(a=s._$AO)==null||a.call(s,t,!1),K(s,t);return!0},ee=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while((o==null?void 0:o.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),qt(t)}};function Ht(e){this._$AN!==void 0?(ee(this),this._$AM=e,Ce(this)):this._$AM=e}function Kt(e,t=!1,o=0){const a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(a))for(let i=o;i<a.length;i++)K(a[i],!1),ee(a[i]);else a!=null&&(K(a,!1),ee(a));else K(this,e)}const qt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=Kt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,a){super._$AT(t,o,a),Ce(this),this.isConnected=t._$AU}_$AO(t,o=!0){var a,s;t!==this.isConnected&&(this.isConnected=t,t?(a=this.reconnected)==null||a.call(this):(s=this.disconnected)==null||s.call(this)),o&&(K(this,t),ee(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const de=new WeakMap,Yt=Te(class extends Wt{render(e){return y}update(e,[t]){var a;const o=t!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=(a=e.options)==null?void 0:a.host,this.rt(this.ct=e.element)),y}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=de.get(t);o===void 0&&(o=new WeakMap,de.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=de.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qt="_9lH80h",Jt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",N={modal:Qt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Jt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function B({title:e,size:t="md",body:o,footer:a=y,onClose:s,dismissible:i=!0}){const n=St("modal-title"),l=d=>{d&&!d.open&&requestAnimationFrame(()=>{!d.open&&d.isConnected&&d.showModal()})},r=d=>{d.preventDefault(),i&&s(void 0)},u=d=>{i&&d.target===d.currentTarget&&s(void 0)};return c`<dialog class=${J(N.modal,N[`modal--${t}`])} aria-labelledby=${n}
      ${Yt(l)} @cancel=${r} @click=${u}>
    <div class=${N.modal__panel}>
      <header class=${N.modal__header}>
        <h2 id=${n} class=${N.modal__title}>${e}</h2>
        ${i?_t({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):y}
      </header>
      <div class=${N.modal__body}>${o}</div>
      ${a!==y?c`<footer class=${N.modal__footer}>${a}</footer>`:y}
    </div>
  </dialog>`}function Ie({title:e,message:t,tone:o="danger",confirmLabel:a="Confirmar",requireText:s}){return new Promise(i=>{let n="";""+Math.random().toString(36).substring(2);const l=()=>{X.open(({close:u})=>B({title:e,body:c`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?c`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${d=>{n=d.target.value,r()}} />
            `:""}
          </div>
        `,footer:c`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${b({label:"Cancelar",variant:"ghost",onClick:()=>{u(),i(!1)}})}
            ${b({label:a,variant:o==="danger"?"delete":"add",disabled:s?n!==s:!1,onClick:()=>{u(),i(!0)}})}
          </div>
        `,onClose:()=>{u(),i(!1)}}))};function r(){X.refresh()}l()})}function ss(){const e=Ft();let t;async function o(){if(await Ie({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await E.post("/api/v1/pipeline/purge"),pe.getPipeline({dedupe:!1})}catch(s){alert("Error purging pipeline: "+s.message)}}return{mount(a){t=S.subscribe(Z.all,()=>a()),pe.getPipeline()},unmount(){t&&t()},view(){return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${b({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${b({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:()=>alert("Manage Columns")})}
              ${b({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${b({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:o})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${e.view()}
        </div>
      `}}}function os(){return{view(){var u,d,f;const{status:e,data:t,error:o}=S.read(te.all);if(e==="error")return c`<div class="u-text-danger">${o.message}</div>`;if(e==="loading"||!t)return c`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const a=t.pipeline_total_items||0,s=t.active_incidents||0,i=t.registered_services||0,n=((u=t.telemetry)==null?void 0:u.branch)||"main",l=((d=t.telemetry)==null?void 0:d.clean)!==!1,r=(v,x,p,m,g="u-text-accent")=>c`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${v}</span>
            <span class="${g}">${j({name:m,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${g}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${x}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${p}>${p}</div>
          </div>
        </div>
      `;return c`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${r("Pipeline Items",a,"Items tracked in universal pipeline","package","u-text-accent")}
            ${r("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${r("Active Services",i,"Configured upstream services","play","u-text-success")}
            ${r("GitOps Status",n,l?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(f=t.stages)!=null&&f.length?t.stages.map(v=>c`
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
                `):c`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function as(){const e=os();let t;return{mount(o){t=S.subscribe(te.all,()=>o()),ft.getOverview()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ve={all:["tools"]},rs={getTools:e=>S.load(ve.all,()=>E.get("/api/v1/tools"),e)},is="cg2FU3",ns="Jh4yC3",Se={console:is,output:ns};function ls({text:e,status:t="idle"}){return c`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=W({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,o;const a=async s=>{e.set(i=>({...i,executionStatus:"running",output:`Executing...
`}));try{const i=await E.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(n=>({...n,executionStatus:"success",output:n.output+`
`+JSON.stringify(i,null,2)}))}catch(i){e.set(n=>({...n,executionStatus:"error",output:n.output+`
ERROR: `+i.message}))}};return{mount(s){t=S.subscribe(ve.all,()=>s()),o=e.subscribe(()=>s()),rs.getTools()},unmount(){t&&t(),o&&o()},view(){const{status:s,data:i,error:n,isFetching:l}=S.read(ve.all),r=e.get(),u=Array.isArray(i)?i:(i==null?void 0:i.items)??[];return c`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!i?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:y}
              ${s==="error"&&!i?c`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${n==null?void 0:n.message}</div>`:y}
              ${u.length===0&&i?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:y}
              
              ${u.map(d=>{var f,v,x;return c`
                <button 
                  class="u-text-left"
                  style="background: ${((f=r.selectedTool)==null?void 0:f.name)===d.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((v=r.selectedTool)==null?void 0:v.name)===d.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(p=>({...p,selectedTool:d,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((x=r.selectedTool)==null?void 0:x.name)===d.name?"u-text-accent":""}">${d.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${d.description}>${d.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${r.selectedTool,"Select a tool to execute"}</h3>
              ${b({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>a(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ls({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const be={all:["views"]},Me={getViews:e=>S.load(be.all,()=>E.get("/api/v1/views"),e)};function ds(){return{view(){var o;const e=S.read(be.all),t=Array.isArray(e.data)?e.data:((o=e.data)==null?void 0:o.items)??[];return!t.length&&e.status!=="loading"?c`
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
        `:se({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function us(){const e=ds();let t;return{mount(o){t=S.subscribe(be.all,()=>o()),Me.getViews()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${b({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const R={all:["incidents"],list:e=>[...R.all,e?"resolved":"active"],catalog:["incidents","catalog"]},q={getIncidents:(e,t)=>S.load(R.list(e),()=>E.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>E.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>S.load(R.catalog,()=>E.get("/api/v1/incidents/catalog/errors"),e)};function we({resolved:e}){const t=gt(S,{mutationFn:s=>q.resolveIncident(s.id,s.note),invalidates:[R.all]});async function o(s){const i=prompt("Enter a resolution note (optional):","Resolved manually");if(i===null)return;if(await Ie({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:i})}catch(l){alert("Failed to resolve incident: "+l.message)}}const a=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>c`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?c`<span class="u-text-success">Resolved</span>`:b({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>o(s.ID)})}];return{view(){const s=S.read(R.list(e));return se({id:`incidents-table-${e?"resolved":"active"}`,columns:a,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>c`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const o=t.SEVERITY==="CRITICAL"?"danger":"warning";return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${o}) 20%, transparent); color: var(--color-${o}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>c`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>c`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>c`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=S.read(R.catalog);return se({id:"error-catalog-table",columns:e,snapshot:t,getRows:o=>Array.isArray(o)?o:(o==null?void 0:o.value)||(o==null?void 0:o.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>q.getCatalog()})}}}function vs(){const e=we({resolved:!1}),t=we({resolved:!0}),o=ps(),a=W({activeTab:"active"});let s,i,n,l;return{mount(r){s=S.subscribe(R.list(!1),()=>r()),i=S.subscribe(R.list(!0),()=>r()),n=S.subscribe(R.catalog,()=>r()),l=a.subscribe(()=>r()),q.getIncidents(!1),q.getIncidents(!0),q.getCatalog()},unmount(){s&&s(),i&&i(),n&&n(),l&&l()},view(){const{activeTab:r}=a.get(),u=(d,f,v)=>{const x=r===d;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${x?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${x?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${x?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>a.set($=>({...$,activeTab:d}))}
          >
            ${j({name:f,size:16})}
            <span>${v}</span>
          </button>
        `};return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${u("active","alert","Active Incidents")}
              ${u("resolved","check","Resolved")}
              ${u("catalog","search","Error Index Catalog")}
            </div>
            
            ${b(r==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${r==="active"?e.view():y}
          ${r==="resolved"?t.view():y}
          ${r==="catalog"?o.view():y}
        </div>
      `}}}const me={all:["gitops"]},ms={getGitOps:e=>S.load(me.all,()=>E.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=S.subscribe(me.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=S.read(me.all),{status:o,data:a,error:s,isFetching:i}=t;if(o==="loading"&&!a)return c`<p class="u-text-muted">Loading GitOps status...</p>`;if(o==="error"&&!a)return c`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const n=(a==null?void 0:a.telemetry)||{};return c`
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
      `}}}const ge={all:["settings"]},bs={getSettings:e=>S.load(ge.all,()=>E.get("/api/v1/settings"),e),saveConfig:e=>E.post("/api/v1/settings/config",e),triggerSweep:()=>E.post("/api/v1/settings/sweep"),triggerBackup:()=>E.post("/api/v1/settings/backup")};function fs(e,t={},o=300){const a=Object.keys(t),s=()=>{e.set(n=>({...n,isServiceModalOpen:!0}))},i=(n,l,r)=>{var f;const u=((f=l.field_mappings)==null?void 0:f.length)||0,d=Object.keys(l.enrichment_endpoints||{}).join(", ");return c`
      <div style="padding: var(--space-4); border-bottom: ${r?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${l.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.name.toUpperCase()}</span>
            ${l.enabled?c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${l.poll_interval_seconds?`POLLS EVERY ${l.poll_interval_seconds}S`:`INHERITS GLOBAL (${o}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${b({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(v=>({...v,isServiceModalOpen:!0,editingServiceId:n}))})}
            ${b({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${l.base_url||"N/A"} | API Key ${l.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${u}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${d||"none"}</span>
        </div>
      </div>
    `};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${b({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${a.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:y}
        ${a.map((n,l)=>i(n,t[n],l===a.length-1))}
      </div>
    </div>
  `}function xs(e){const t=()=>{e.set(i=>({...i,isServiceModalOpen:!1}))},o=i=>{alert(`Applied preset: ${i}`)},a=c`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${b({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>o("sonarr")})}
      ${b({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>o("radarr")})}
      ${b({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>o("jellyfin")})}
      ${b({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>o("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc.">
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" @input=${i=>{i.target.value=i.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" class="form-input font-mono" placeholder="http://localhost:<port>">
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" class="form-input font-mono" placeholder="••••••••••••••••">
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" checked>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" class="form-input font-mono" placeholder="/api/v3/history?pageSize=50" value="/api/v3/history?pageSize=50&sortKey=date&sortDirection=descending">
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" class="form-input font-mono" placeholder="{service}:{id}" value="{service}:{id}">
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}"></textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${b({label:"Discover Events from API",variant:"secondary",size:"sm"})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" checked>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,s=c`
    <div class="u-flex u-gap-2">
      ${b({label:"Cancel",variant:"secondary",onClick:t})}
      ${b({label:"Save Service",variant:"save",onClick:()=>alert("Save Service")})}
    </div>
  `;return B({title:"Register Service",size:"lg",onClose:t,body:a,footer:s})}function hs(e,t=[]){const o=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},a=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${b({label:"+ Add Stage",variant:"add",size:"sm",onClick:o})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?c`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,i)=>{const n=a(s);return c`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${n.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${n.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${n.bg}; color: ${n.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${n.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${b({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(l=>({...l,isStageModalOpen:!0,editingStageId:s.id}))})}
                    ${b({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
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
  `}function ys(e){const t=e.get(),o=t.stageIsSink||!1,a=t.stageIsRoot||!1,s=()=>{e.set(l=>({...l,isStageModalOpen:!1,stageIsRoot:!1,stageIsSink:!1}))},i=c`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" @input=${l=>{l.target.value=l.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-input" placeholder="Ingestion (Sonarr / Radarr)">
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" class="form-input" placeholder="Primary file arrival and tag discovery">
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
        <input type="checkbox" id="chk-stage-root" .checked=${a} @change=${l=>e.set(r=>({...r,stageIsRoot:l.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${a?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;">
          ${b({label:"Test Syntax",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${o} @change=${l=>e.set(r=>({...r,stageIsSink:l.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;">
          ${b({label:"Test Syntax",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" class="form-input" min="0" max="1440" value="10">
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" class="form-input" min="0" max="1440" value="30">
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled">
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,n=c`
    <div class="u-flex u-gap-2">
      ${b({label:"Cancel",variant:"secondary",onClick:s})}
      ${b({label:"Save Stage",variant:"save",onClick:()=>alert("Save Stage")})}
    </div>
  `;return B({title:"Configure DAG Stage",size:"lg",onClose:s,body:i,footer:n})}function $s(e,t={}){const o=Object.keys(t),a=e.get().selectedMappingService||o[0]||"",s=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},i=()=>{e.set(l=>({...l,isMappingModalOpen:!0}))},n=()=>c`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(r=>({...r,selectedMappingService:l.target.value}))}
        >
          ${o.map(l=>c`<option value="${l}" ?selected=${l===a}>${t[l].name}</option>`)}
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
          ${b({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${b({label:"+ Add Mapping",variant:"add",size:"sm",onClick:i})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${o.length>0?n():y}
        
        ${(()=>{const l=t[a];return!l||!l.field_mappings||l.field_mappings.length===0?c`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:c`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map(r=>c`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${r.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${r.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${r.data_type})</span>
                    ${r.transformer?c`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${r.transformer}</div>`:y}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${b({label:"Edit",variant:"ghost",size:"sm",onClick:()=>alert("Edit mapping (coming soon)")})}
                    ${b({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete mapping?")})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function Ss(e){const t=()=>{e.set(s=>({...s,isMappingModalOpen:!1}))},o=c`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" @input=${s=>{let i=s.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");i=i.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),s.target.value=i}}>
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
          ${b({label:"Test Transform",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>
  `,a=c`
    <div class="u-flex u-gap-2">
      ${b({label:"Cancel",variant:"secondary",onClick:t})}
      ${b({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return B({title:"Configure Field Mapping & Transformer",size:"lg",onClose:t,body:o,footer:a})}function ws(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},o=c`
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
      ${b({label:"Fetch Sample",variant:"test"})}
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
  `,a=c`
    <div class="u-flex u-gap-2">
      ${b({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return B({title:"Sample Service API Schema",size:"lg",onClose:t,body:o,footer:a})}function As(e,t={}){const o=Object.keys(t.triggers||{}),a=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${b({label:"Test Alert",variant:"test",size:"sm",onClick:()=>alert("Test alert")})}
          ${b({label:"+ Add Trigger",variant:"add",size:"sm",onClick:a})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:y}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function ks(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},o=c`
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
  `,a=c`
    <div class="u-flex u-gap-2">
      ${b({label:"Cancel",variant:"secondary",onClick:t})}
      ${b({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return B({title:"Add Notification Trigger",size:"md",onClose:t,body:o,footer:a})}function Ts(e,t={}){const o=t.retention_days||30,a=t.global_poll_interval_seconds||300;return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
        <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control data retention, global polling cadence, and inspect custom polling overrides.</p>
      </div>
      
      <div style="padding: var(--space-4);">
        <div class="form-grid-2 u-mb-4">
          <div class="form-group">
            <label>Data Retention (Days)</label>
            <input type="number" class="form-input" min="1" max="365" .value=${o}>
            <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
          </div>
          <div class="form-group">
            <label>Global Polling Interval (Seconds)</label>
            <input type="number" class="form-input" min="10" max="86400" .value=${a}>
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

        ${b({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}function Es(){const e=W({activeTab:"services",saving:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let t,o;return{mount(a){t=e.subscribe(()=>a()),o=S.subscribe(ge.all,()=>a()),bs.getSettings()},unmount(){t&&t(),o&&o()},view(){const a=e.get(),{activeTab:s,saving:i,isServiceModalOpen:n,isStageModalOpen:l,isMappingModalOpen:r,isSampleApiModalOpen:u,isNotificationModalOpen:d}=a,f=S.read(ge.all),{data:v,status:x,error:p}=f;if(x==="loading"&&!v)return c`<p class="u-text-muted">Loading settings...</p>`;if(x==="error"&&!v)return c`<p class="u-text-danger">Error: ${p==null?void 0:p.message}</p>`;const m={retention_days:(v==null?void 0:v.retention_days)||30,global_poll_interval_seconds:(v==null?void 0:v.global_poll_interval_seconds)||300},g=(v==null?void 0:v.services)||{},$=(v==null?void 0:v.stages)||[],A=m.global_poll_interval_seconds,h=(w,_,ae)=>{const U=s===w;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${U?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${U?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${U?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(G=>({...G,activeTab:w}))}
          >
            ${j({name:_,size:16})}
            <span>${ae}</span>
          </button>
        `};return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${h("services","database","Services")}
              ${h("stages","activity","Stages & Predicates")}
              ${h("mappings","code","Field Mappings")}
              ${h("notifications","bell","Notification Triggers")}
              ${h("engine","settings","Engine & Retention")}
            </div>
            ${b({label:"Save All Settings",variant:"save",size:"sm",loading:i,onClick:()=>alert("Save coming soon")})}
          </div>
          
          ${s==="services"?fs(e,g,A):y}
          ${s==="stages"?hs(e,$):y}
          ${s==="mappings"?$s(e,g):y}
          ${s==="notifications"?As(e,v):y}
          ${s==="engine"?Ts(e,m):y}
          
          <!-- Modals -->
          ${n?xs(e):y}
          ${l?ys(e):y}
          ${r?Ss(e):y}
          ${u?ws(e):y}
          ${d?ks(e):y}
        </div>
      `}}}const Q=Le(Ae),_s={overview:as(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),gitops:gs(),settings:Es()};let O=null;function oe(){var o,a,s,i;const{current:e}=Q.store.get();O&&O.id!==e.id&&((a=(o=O.instance).unmount)==null||a.call(o),O=null),!O&&e&&(O={id:e.id,instance:_s[e.id]},(i=(s=O.instance).mount)==null||i.call(s,oe));const t=O?O.instance.view():"";Ne(Dt({routerStore:Q.store.get(),routes:Ae,router:Q,pageContent:t}),document.getElementById("app"))}Q.store.subscribe(oe);X.store.subscribe(oe);oe();
