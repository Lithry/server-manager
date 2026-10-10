import{j as Oe,E as Ne,w as k,b as p,A as h,D as Pe}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();function De(){const e=new Map;return{on(t,a){return e.has(t)||e.set(t,new Set),e.get(t).add(a),()=>e.get(t).delete(a)},emit(t,a){if(e.has(t))for(const r of e.get(t))r(a)}}}function Q(e){let t=e;const a=new Set;return{get:()=>t,set:r=>{t=typeof r=="function"?r(t):r;for(const s of a)s(t)},subscribe:r=>(a.add(r),()=>a.delete(r))}}function Le(e){const t=Q({current:null,params:{}});let a=null;async function r(s){const o=window.location.hash.slice(1)||"/";if(a&&t.get().current&&t.get().current.path!==o&&!await a(o)){window.removeEventListener("hashchange",r),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",r),0);return}const i=e.find(d=>d.path===o)||e[0];t.set({current:i,params:{}})}return window.addEventListener("hashchange",r),r(),{store:t,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){a=s}}}const Ee=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"sandbox",path:"/sandbox",title:"API Sandbox",pageTitle:"API Enrichment Sandbox",icon:"code"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,r){this._$Ct=t,this._$AM=a,this._$Ci=r}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Oe,he=e=>e,je=e=>e.strings===void 0,ye=()=>document.createComment(""),q=(e,t,a)=>{var o;const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(a===void 0){const i=r.insertBefore(ye(),s),d=r.insertBefore(ye(),s);a=new ze(i,d,e,e.options)}else{const i=a._$AB.nextSibling,d=a._$AM,n=d!==e;if(n){let l;(o=a._$AQ)==null||o.call(a,e),a._$AM=e,a._$AP!==void 0&&(l=e._$AU)!==d._$AU&&a._$AP(l)}if(i!==s||n){let l=a._$AA;for(;l!==i;){const u=he(l).nextSibling;he(r).insertBefore(l,s),l=u}}}return a},L=(e,t,a=e)=>(e._$AI(t,a),e),Be={},Ve=(e,t=Be)=>e._$AH=t,Ue=e=>e._$AH,le=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,a)=>{const r=new Map;for(let s=t;s<=a;s++)r.set(e[s],s);return r},Te=Ae(class extends Ie{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let r;a===void 0?a=t:t!==void 0&&(r=t);const s=[],o=[];let i=0;for(const d of e)s[i]=r?r(d,i):i,o[i]=a(d,i),i++;return{values:o,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,r]){const s=Ue(e),{values:o,keys:i}=this.dt(t,a,r);if(!Array.isArray(s))return this.ut=i,o;const d=this.ut??(this.ut=[]),n=[];let l,u,g=0,m=s.length-1,v=0,c=o.length-1;for(;g<=m&&v<=c;)if(s[g]===null)g++;else if(s[m]===null)m--;else if(d[g]===i[v])n[v]=L(s[g],o[v]),g++,v++;else if(d[m]===i[c])n[c]=L(s[m],o[c]),m--,c--;else if(d[g]===i[c])n[c]=L(s[g],o[c]),q(e,n[c+1],s[g]),g++,c--;else if(d[m]===i[v])n[v]=L(s[m],o[v]),q(e,s[g],s[m]),m--,v++;else if(l===void 0&&(l=$e(i,v,c),u=$e(d,g,m)),l.has(d[g]))if(l.has(d[m])){const f=u.get(i[v]),b=f!==void 0?s[f]:null;if(b===null){const y=q(e,s[g]);L(y,o[v]),n[v]=y}else n[v]=L(b,o[v]),q(e,s[g],b),s[f]=null;v++}else le(s[m]),m--;else le(s[g]),g++;for(;v<=c;){const f=q(e,n[c+1]);L(f,o[v]),n[v++]=f}for(;g<=m;){const f=s[g++];f!==null&&le(f)}return this.ut=i,Ve(e,n),Ne}}),Ge={x:k`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:k`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:k`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:k`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:k`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:k`<polyline points="20 6 9 17 4 12"></polyline>`,tool:k`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:k`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":k`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:k`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:k`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:k`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:k`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:k`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:k`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:k`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:k`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:k`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":k`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:k`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:t=16,label:a}){const r=Ge[e];return r?p`<svg 
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
  </svg>`:p`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",qe="vjCp9N",Ke="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Je="yefrc2",Qe="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",nt="HRKVqM",I={sidebar:Fe,brand:He,logo:qe,title:Ke,nav:We,navItem:Ye,sidebarFooter:Je,toggleBtn:Qe,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:nt},M=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),it=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class U extends Error{constructor(t,{code:a,status:r=0,detail:s=null,cause:o}={}){super(t,{cause:o}),this.name="ApiError",this.code=a,this.status=r,this.detail=s}get retryable(){return this.code===M.NETWORK||this.code===M.TIMEOUT||this.code===M.HTTP&&it.has(this.status)}get userMessage(){switch(this.code){case M.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case M.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case M.ABORTED:return"";case M.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},a=e.fetchImpl??((...c)=>globalThis.fetch(...c)),r={request:[],response:[],error:[]},s=new Map,o=()=>new U("Request aborted",{code:M.ABORTED}),i=(c,f)=>{const b=new URLSearchParams;for(const[S,w]of Object.entries(f??{}))w!=null&&w!==""&&b.set(S,String(w));const y=b.toString();return`${t.baseUrl}${c}${y?"?"+y:""}`};async function d(c){if(c.status===204)return null;const f=c.headers.get("content-type")??"";try{return f.includes("application/json")?await c.json():await c.text()}catch(b){throw new U("Malformed response body",{code:M.PARSE,status:c.status,cause:b})}}async function n(c,f,b){const y=AbortSignal.timeout(b),S=f?AbortSignal.any([f,y]):y;let w;try{w=await a(c.url,{method:c.method,headers:c.headers,body:c.body,signal:S})}catch(A){throw y.aborted?new U(`Request timed out after ${b} ms`,{code:M.TIMEOUT,cause:A}):f!=null&&f.aborted?o():new U("Network request failed",{code:M.NETWORK,cause:A})}const _=await d(w);if(!w.ok)throw new U(lt(_)??`HTTP ${w.status}`,{code:M.HTTP,status:w.status,detail:_});return{status:w.status,data:_,headers:w.headers}}const l=(c,f)=>new Promise((b,y)=>{const S=setTimeout(b,c);f==null||f.addEventListener("abort",()=>{clearTimeout(S),y(o())},{once:!0})}),u=c=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**c);async function g(c,{signal:f,timeoutMs:b,retries:y}){for(let S=0;;S+=1)try{return await n(c,f,b)}catch(w){if(!(w instanceof U)||!w.retryable||S>=y)throw w;await l(u(S),f)}}function m(c,f,b){let y=s.get(c);if(!y){const S=new AbortController,w={controller:S,refs:0,promise:null};w.promise=f(S.signal).finally(()=>{s.get(c)===w&&s.delete(c)}),w.promise.catch(()=>{}),s.set(c,w),y=w}return y.refs+=1,new Promise((S,w)=>{const _=()=>{y.refs-=1,y.refs===0&&(s.get(c)===y&&s.delete(c),y.controller.abort()),w(o())};if(b!=null&&b.aborted){_();return}b==null||b.addEventListener("abort",_,{once:!0}),y.promise.then(A=>{b==null||b.removeEventListener("abort",_),S(A)},A=>{b==null||b.removeEventListener("abort",_),w(A)})})}async function v(c,f,b={}){const{query:y,body:S,headers:w={},signal:_,meta:A={}}=b,B=b.timeoutMs??t.timeoutMs,O=b.retries??(ct.has(c)?t.retries:0),H=b.dedupe??c==="GET";let C={method:c,url:i(f,y),headers:{Accept:"application/json",...w},body:void 0,meta:A};S!==void 0&&(C.body=JSON.stringify(S),C.headers["Content-Type"]="application/json");for(const X of r.request)C=await X(C);const ie=async X=>{try{let V=await g(C,{signal:X,timeoutMs:B,retries:O});for(const D of r.response)V=await D(V,C);return V.data}catch(V){let D=V;for(const Re of r.error)D=await Re(D,C)??D;throw D}};return H?m(`${C.method} ${C.url}`,ie,_):ie(_)}return{get:(c,f)=>v("GET",c,f),post:(c,f,b)=>v("POST",c,{...b,body:f}),put:(c,f,b)=>v("PUT",c,{...b,body:f}),delete:(c,f)=>v("DELETE",c,f),use({request:c,response:f,error:b}){c&&r.request.push(c),f&&r.response.push(f),b&&r.error.push(b)}}}const ce=()=>{};function pt(e,t){return t?new Promise((a,r)=>{const s=()=>r(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(a,r).finally(()=>t.removeEventListener("abort",s))}):e}const ve=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([r],[s])=>r<s?-1:1)):a),vt=(e,t)=>t.every((a,r)=>r<e.length&&ve(a)===ve(e[r]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const a=new Map,r=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function s(n){const l=ve(n);let u=a.get(l);return u||(u={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},u.snapshot=r(u),a.set(l,u)),u}function o(n){n.snapshot=r(n);for(const l of[...n.listeners])l(n.snapshot)}function i(){for(const[n,l]of a)l.listeners.size===0&&!l.promise&&l.updatedAt&&e()-l.updatedAt>t&&a.delete(n)}function d(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(l=>(Object.assign(n,{data:l,error:null,status:"success",updatedAt:e()}),l),l=>{throw Object.assign(n,{error:l,status:"error"}),l}).finally(()=>{n.promise=null,o(n),n.invalidated&&n.listeners.size>0&&d(n).catch(ce)}),n.promise.catch(ce),o(n)),n.promise}return{load(n,l,{staleMs:u=0,signal:g}={}){i();const m=s(n);m.fetcher=l;const v=m.status==="success"&&!m.invalidated&&e()-m.updatedAt<u;return pt(v?Promise.resolve(m.data):d(m),g)},read:n=>s(n).snapshot,subscribe(n,l){const u=s(n);return u.listeners.add(l),l(u.snapshot),()=>{u.listeners.delete(l)}},invalidate(n){for(const l of a.values())vt(l.keyParts,n)&&(l.invalidated=!0,o(l),l.listeners.size>0&&l.fetcher&&d(l).catch(ce))},setData(n,l){const u=s(n),g={data:u.data,status:u.status,updatedAt:u.updatedAt},m=l(u.data);return Object.assign(u,{data:m,status:"success",updatedAt:e()}),o(u),function(){u.data===m&&(Object.assign(u,g),o(u))}}}}function gt(e,{mutationFn:t,optimistic:a,invalidates:r=[]}){return async function(o){const i=((a==null?void 0:a(o))??[]).map(({key:d,update:n})=>e.setData(d,n));try{const d=await t(o);return(typeof r=="function"?r(o,d):r).forEach(l=>e.invalidate(l)),d}catch(d){throw i.reverse().forEach(n=>n()),d}}}const G={},ft=De(),E=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),$=mt();E.use({error:e=>((e==null?void 0:e.status)===401&&ft.emit("auth:required",e),e)});const oe={all:["overview"]},bt={getOverview:e=>$.load(oe.all,()=>E.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Z=!1;function xt(){Z=!Z;const e=document.getElementById("app-sidebar");e&&(Z?e.classList.add(I.expanded):e.classList.remove(I.expanded))}function ht({routes:e,activeId:t,onNavigate:a}){var i,d,n,l;const r=$.read(oe.all),s=((d=(i=r==null?void 0:r.data)==null?void 0:i.telemetry)==null?void 0:d.short_commit)||"6b319ac",o=((l=(n=r==null?void 0:r.data)==null?void 0:n.telemetry)==null?void 0:l.branch)||"main";return p`<aside id="app-sidebar" class="${I.sidebar} ${Z?I.expanded:""}">
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
      ${Te(e,u=>u.id,u=>p`
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
 */const we=e=>e??h;function ee(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const _t="PSMDQ2",Et={spinner:_t};function kt({size:e=16}={}){return p`<svg class=${Et.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const At="vZLpx0",K={btn:At,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:t="secondary",size:a="md",icon:r,iconOnly:s=!1,ariaLabel:o,loading:i=!1,disabled:d=!1,type:n="button",id:l,onClick:u}){const g=ee(K.btn,K[`btn--${t}`],K[`btn--${a}`],s&&K["btn--icon-only"]);return p`<button id=${we(l)} class=${g} type=${n}
    aria-label=${we(o)} aria-busy=${i?"true":"false"}
    ?disabled=${d||i} @click=${u}>
    ${i?kt():r?j({name:r,size:a==="sm"?14:16}):h}
    ${s?h:p`<span class=${K.btn__label}>${e}</span>`}
  </button>`}const It=({icon:e,ariaLabel:t,...a})=>x({...a,icon:e,ariaLabel:t,iconOnly:!0,variant:a.variant??"ghost"});function Tt({title:e}){return p`<header class=${de.topbar}>
    <h1 class=${de.title}>${e}</h1>
    <div class=${de.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{$.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=Q({stack:[]});let t=0;function a(s){return new Promise(o=>{const i=`modal-${t+=1}`;let d=!1;const n=l=>{d||(d=!0,e.set(u=>({stack:u.stack.filter(g=>g.id!==i)})),o(l))};e.set(l=>({stack:[...l.stack,{id:i,view:()=>s({close:n,id:i})}]}))})}return{open:a,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Mt=Ct(),te=Mt;function Rt(){const{stack:e}=te.store.get();return p`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Ot="sCMZyq",Nt="Fk5OML",Pt="_0AKuiv",ue={layout:Ot,mainContent:Nt,page:Pt};function Dt({routerStore:e,routes:t,router:a,pageContent:r}){const{current:s}=e;return p`<div class=${ue.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:a.navigate})}
    <div class=${ue.mainContent}>
      ${Tt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${ue.page}>
        ${r}
      </main>
    </div>
    ${Rt()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Vt="r2dRuM",Ut="AjfFun",R={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Vt,table__stale:Ut};function re({id:e,caption:t,columns:a,snapshot:r,getRows:s=u=>(u==null?void 0:u.items)??[],rowKey:o=(u,g)=>g,emptyMessage:i="No records found.",onRetry:d,footer:n=h,fallbackColumns:l=[]}){const{status:u,data:g,error:m,isFetching:v}=r,c=g!==void 0,f=typeof a=="function"?c?a(g):l:a,b=Math.max(f.length,1),y=c?s(g):[],S=(_,A)=>p`<td class=${ee(_.align==="end"&&R["table__cell--end"],_.mono&&R["table__cell--mono"])}>
    ${_.render?_.render(A):St(A[_.key])}</td>`;let w;return!c&&(u==="idle"||u==="loading")?w=Array.from({length:5},()=>p`<tr aria-hidden="true">${f.map(()=>p`<td><span class=${R.table__skeleton}></span></td>`)}</tr>`):c?y.length===0?w=p`<tr><td colspan=${b} class=${R.table__message}>${i}</td></tr>`:w=Te(y,o,_=>p`<tr>${f.map(A=>S(A,_))}</tr>`):w=p`<tr><td colspan=${b} class=${R.table__message} role="alert">
      ${(m==null?void 0:m.userMessage)||(m==null?void 0:m.message)||"Failed to load data."}
      ${d?x({label:"Retry",icon:"refresh",size:"sm",onClick:d}):h}</td></tr>`,p`<div class=${R.table}>
    ${u==="error"&&c?p`<div class=${R.table__stale} role="status">Showing cached data. ${(m==null?void 0:m.userMessage)??""} ${d?x({label:"Retry",size:"sm",variant:"ghost",onClick:d}):h}</div>`:h}
    <div class=${R.table__scroll} aria-busy=${v?"true":"false"}>
      <table id=${e??h} class=${R.table__grid}>
        ${t?p`<caption class="u-sr-only">${t}</caption>`:h}
        <thead><tr>${f.map(_=>p`<th scope="col" class=${ee(_.align==="end"&&R["table__cell--end"])}>${_.header}</th>`)}</tr></thead>
        <tbody>${w}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const se={all:["pipeline"],columns:["pipeline","columns"]},me={getPipeline:e=>$.load(se.all,()=>E.get("/api/v1/pipeline"),e),getColumns:e=>$.load(se.columns,()=>E.get("/api/v1/pipeline/columns"),e)};function Gt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:a=>p`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[t]}>${a[t]}</span>`})):[]}function Ft(){return{view(){var s,o;const e=$.read(se.all),t=((s=e.data)==null?void 0:s.items)??[],a=((o=e.data)==null?void 0:o.total)??t.length,r=p`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return re({id:"pipeline-table",snapshot:e,columns:i=>Gt((i==null?void 0:i.items)??[]),getRows:i=>(i==null?void 0:i.items)??[],rowKey:(i,d)=>i.id??d,onRetry:()=>me.getPipeline(),footer:r})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(e,t)=>{var r;const a=e._$AN;if(a===void 0)return!1;for(const s of a)(r=s._$AO)==null||r.call(s,t,!1),W(s,t);return!0},ae=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),Kt(t)}};function Ht(e){this._$AN!==void 0?(ae(this),this._$AM=e,Ce(this)):this._$AM=e}function qt(e,t=!1,a=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=a;o<r.length;o++)W(r[o],!1),ae(r[o]);else r!=null&&(W(r,!1),ae(r));else W(this,e)}const Kt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=qt),e._$AQ??(e._$AQ=Ht))};class Wt extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,r){super._$AT(t,a,r),Ce(this),this.isConnected=t._$AU}_$AO(t,a=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),a&&(W(this,t),ae(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const pe=new WeakMap,Yt=Ae(class extends Wt{render(e){return h}update(e,[t]){var r;const a=t!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),h}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=pe.get(t);a===void 0&&(a=new WeakMap,pe.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=pe.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jt="_9lH80h",Qt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",z={modal:Jt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Qt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function F({title:e,size:t="md",body:a,footer:r=h,onClose:s,dismissible:o=!0}){const i=wt("modal-title"),d=u=>{u&&!u.open&&requestAnimationFrame(()=>{!u.open&&u.isConnected&&u.showModal()})},n=u=>{u.preventDefault(),o&&s(void 0)},l=u=>{o&&u.target===u.currentTarget&&s(void 0)};return p`<dialog class=${ee(z.modal,z[`modal--${t}`])} aria-labelledby=${i}
      ${Yt(d)} @cancel=${n} @click=${l}>
    <div class=${z.modal__panel}>
      <header class=${z.modal__header}>
        <h2 id=${i} class=${z.modal__title}>${e}</h2>
        ${o?It({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):h}
      </header>
      <div class=${z.modal__body}>${a}</div>
      ${r!==h?p`<footer class=${z.modal__footer}>${r}</footer>`:h}
    </div>
  </dialog>`}function be({title:e,message:t,tone:a="danger",confirmLabel:r="Confirmar",requireText:s}){return new Promise(o=>{let i="";""+Math.random().toString(36).substring(2);const d=()=>{te.open(({close:l})=>F({title:e,body:p`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?p`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${u=>{i=u.target.value,n()}} />
            `:""}
          </div>
        `,footer:p`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{l(),o(!1)}})}
            ${x({label:r,variant:a==="danger"?"delete":"add",disabled:s?i!==s:!1,onClick:()=>{l(),o(!0)}})}
          </div>
        `,onClose:()=>{l(),o(!1)}}))};function n(){te.refresh()}d()})}function ss(){const e=Ft();let t;async function a(){if(await be({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await E.post("/api/v1/pipeline/purge"),me.getPipeline({dedupe:!1})}catch(s){alert("Error purging pipeline: "+s.message)}}return{mount(r){t=$.subscribe(se.all,()=>r()),me.getPipeline()},unmount(){t&&t()},view(){return p`
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
      `}}}function as(){return{view(){var l,u,g;const{status:e,data:t,error:a}=$.read(oe.all);if(e==="error")return p`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!t)return p`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const r=t.pipeline_total_items||0,s=t.active_incidents||0,o=t.registered_services||0,i=((l=t.telemetry)==null?void 0:l.branch)||"main",d=((u=t.telemetry)==null?void 0:u.clean)!==!1,n=(m,v,c,f,b="u-text-accent")=>p`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${m}</span>
            <span class="${b}">${j({name:f,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${v}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${c}>${c}</div>
          </div>
        </div>
      `;return p`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",r,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${n("Active Services",o,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",i,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(g=t.stages)!=null&&g.length?t.stages.map(m=>p`
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
                `):p`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function os(){const e=as();let t;return{mount(a){t=$.subscribe(oe.all,()=>a()),bt.getOverview()},unmount(){t&&t()},view(){return p`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},rs={getTools:e=>$.load(ge.all,()=>E.get("/api/v1/tools"),e)},ns="cg2FU3",is="Jh4yC3",Se={console:ns,output:is};function ls({text:e,status:t="idle"}){return p`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=Q({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,a;const r=async s=>{e.set(o=>({...o,executionStatus:"running",output:`Executing...
`}));try{const o=await E.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(o,null,2)}))}catch(o){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+o.message}))}};return{mount(s){t=$.subscribe(ge.all,()=>s()),a=e.subscribe(()=>s()),rs.getTools()},unmount(){t&&t(),a&&a()},view(){const{status:s,data:o,error:i,isFetching:d}=$.read(ge.all),n=e.get(),l=Array.isArray(o)?o:(o==null?void 0:o.items)??[];return p`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!o?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:h}
              ${s==="error"&&!o?p`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:h}
              ${l.length===0&&o?p`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:h}
              
              ${l.map(u=>{var g,m,v;return p`
                <button 
                  class="u-text-left"
                  style="background: ${((g=n.selectedTool)==null?void 0:g.name)===u.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((m=n.selectedTool)==null?void 0:m.name)===u.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(c=>({...c,selectedTool:u,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((v=n.selectedTool)==null?void 0:v.name)===u.name?"u-text-accent":""}">${u.name}</div>
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
      `}}}const xe={all:["views"]},Me={getViews:e=>$.load(xe.all,()=>E.get("/api/v1/views"),e)};function ds(){return{view(){var a;const e=$.read(xe.all),t=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!t.length&&e.status!=="loading"?p`
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
        `:re({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function us(){const e=ds();let t;return{mount(a){t=$.subscribe(xe.all,()=>a()),Me.getViews()},unmount(){t&&t()},view(){return p`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const P={all:["incidents"],list:e=>[...P.all,e?"resolved":"active"],catalog:["incidents","catalog"]},Y={getIncidents:(e,t)=>$.load(P.list(e),()=>E.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>E.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>$.load(P.catalog,()=>E.get("/api/v1/incidents/catalog/errors"),e)};function _e({resolved:e}){const t=gt($,{mutationFn:s=>Y.resolveIncident(s.id,s.note),invalidates:[P.all]});async function a(s){const o=prompt("Enter a resolution note (optional):","Resolved manually");if(o===null)return;if(await be({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:o})}catch(d){alert("Failed to resolve incident: "+d.message)}}const r=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>p`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?p`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(s.ID)})}];return{view(){const s=$.read(P.list(e));return re({id:`incidents-table-${e?"resolved":"active"}`,columns:r,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>p`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const a=t.SEVERITY==="CRITICAL"?"danger":"warning";return p`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>p`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>p`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>p`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=$.read(P.catalog);return re({id:"error-catalog-table",columns:e,snapshot:t,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>Y.getCatalog()})}}}function vs(){const e=_e({resolved:!1}),t=_e({resolved:!0}),a=ps(),r=Q({activeTab:"active"});let s,o,i,d;return{mount(n){s=$.subscribe(P.list(!1),()=>n()),o=$.subscribe(P.list(!0),()=>n()),i=$.subscribe(P.catalog,()=>n()),d=r.subscribe(()=>n()),Y.getIncidents(!1),Y.getIncidents(!0),Y.getCatalog()},unmount(){s&&s(),o&&o(),i&&i(),d&&d()},view(){const{activeTab:n}=r.get(),l=(u,g,m)=>{const v=n===u;return p`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${v?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${v?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${v?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>r.set(y=>({...y,activeTab:u}))}
          >
            ${j({name:g,size:16})}
            <span>${m}</span>
          </button>
        `};return p`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${l("active","alert","Active Incidents")}
              ${l("resolved","check","Resolved")}
              ${l("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():h}
          ${n==="resolved"?t.view():h}
          ${n==="catalog"?a.view():h}
        </div>
      `}}}const fe={all:["gitops"]},ms={getGitOps:e=>$.load(fe.all,()=>E.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=$.subscribe(fe.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=$.read(fe.all),{status:a,data:r,error:s,isFetching:o}=t;if(a==="loading"&&!r)return p`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!r)return p`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const i=(r==null?void 0:r.telemetry)||{};return p`
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
      `}}}const T={all:["settings"]},fs={getSettings:e=>$.load(T.all,()=>E.get("/api/v1/settings"),e),saveConfig:e=>E.post("/api/v1/settings/config",e),triggerSweep:()=>E.post("/api/v1/settings/sweep"),triggerBackup:()=>E.post("/api/v1/settings/backup")};function bs(e,t={},a=300){const r=Object.keys(t),s=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},o=(i,d,n)=>{var g;const l=((g=d.field_mappings)==null?void 0:g.length)||0,u=Object.keys(d.enrichment_endpoints||{}).join(", ");return p`
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
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(m=>({...m,isServiceModalOpen:!0,editingServiceId:i}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${d.base_url||"N/A"} | API Key ${d.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${l}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${u||"none"}</span>
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
        ${r.map((i,d)=>o(i,t[i],d===r.length-1))}
      </div>
    </div>
  `}function xs(e){var u;const t=e.get(),a=$.read(T.all),r=((u=a==null?void 0:a.data)==null?void 0:u.services)||{},s=t.editingServiceId?r[t.editingServiceId]:null,o=()=>{e.set(g=>({...g,isServiceModalOpen:!1,editingServiceId:null}))},i=()=>{try{const g=document.getElementById("srv-id").value.trim();if(!g){alert("Service ID is required");return}const m=document.getElementById("srv-enrich").value.trim(),v={};m&&m.split(`
`).forEach(b=>{const y=b.split(":");y.length>=2&&(v[y[0].trim()]=y.slice(1).join(":").trim())});const c={name:document.getElementById("srv-name").value.trim()||g,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:v,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(s==null?void 0:s.field_mappings)||[]},f={...r,[g]:c};t.editingServiceId&&t.editingServiceId!==g&&delete f[t.editingServiceId],$.setData(T.all,()=>({...a.data,services:f})),e.set(b=>({...b,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(g){alert("Error saving service: "+g.stack)}},d=g=>{alert(`Applied preset: ${g}`)},n=p`
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
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${t.editingServiceId||""} @input=${g=>{g.target.value=g.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([g,m])=>`${g}: ${m}`).join(`
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
  `,l=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:o})}
      ${x({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:i})}
    </div>
  `;return F({title:"Register Service",size:"lg",onClose:o,body:n,footer:l})}function hs(e,t=[]){const a=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},r=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return p`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?p`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,o)=>{const i=r(s);return p`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${i.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${i.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${i.bg}; color: ${i.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${i.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
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
  `}function ys(e){var g;const t=e.get(),a=$.read(T.all),r=((g=a==null?void 0:a.data)==null?void 0:g.stages)||[],s=t.editingStageId?r.find(m=>m.id===t.editingStageId):null,o=t.stageIsSink??(s?!s.complete_condition:!1),i=t.stageIsRoot??(s?!s.start_condition:!1),d=()=>{e.set(m=>({...m,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var m,v;try{const c=document.getElementById("stage-id").value.trim();if(!c){alert("Stage ID is required");return}const f={id:c,name:document.getElementById("stage-name").value.trim()||c,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:i?null:((m=document.getElementById("stage-start"))==null?void 0:m.value.trim())||null,complete_condition:o?null:((v=document.getElementById("stage-complete"))==null?void 0:v.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let b=[...r];t.editingStageId?b=b.map(y=>y.id===t.editingStageId?f:y):b.push(f),$.setData(T.all,()=>({...a.data,stages:b})),e.set(y=>({...y,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(c){alert("Error in Save Stage: "+c.stack)}},l=p`
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
        <input type="checkbox" id="chk-stage-root" .checked=${i} @change=${m=>e.set(v=>({...v,stageIsRoot:m.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${i?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(s==null?void 0:s.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-start").value;if(!m.trim()){alert("Expression is empty!");return}try{const v=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();v.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+v.message)}catch(v){alert("Validation failed: "+v.message)}}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${o} @change=${m=>e.set(v=>({...v,stageIsSink:m.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(s==null?void 0:s.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const m=document.getElementById("stage-complete").value;if(!m.trim()){alert("Expression is empty!");return}try{const v=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:m})})).json();v.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+v.message)}catch(v){alert("Validation failed: "+v.message)}}})}
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
  `,u=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:d})}
      ${x({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return F({title:"Configure DAG Stage",size:"lg",onClose:d,body:l,footer:u})}function $s(e,t={}){const a=Object.keys(t),r=e.get().selectedMappingService||a[0]||"",s=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},o=()=>{e.set(l=>({...l,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},i=(l,u)=>{e.set(g=>({...g,isMappingModalOpen:!0,editingMapping:{...l},editingMappingIndex:u}))},d=l=>{if(confirm("Are you sure you want to delete this mapping?")){const g={...$.read(T.all).data};g.services[r].field_mappings.splice(l,1),$.setData(T.all,()=>g),e.set(m=>({...m,isDirty:!0}))}},n=()=>p`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(u=>({...u,selectedMappingService:l.target.value}))}
        >
          ${a.map(l=>p`<option value="${l}" ?selected=${l===r}>${t[l].name}</option>`)}
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
        
        ${(()=>{const l=t[r];return!l||!l.field_mappings||l.field_mappings.length===0?p`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:p`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map((u,g)=>p`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${u.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${u.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${u.data_type})</span>
                    ${u.transformer?p`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${u.transformer}</div>`:h}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>i(u,g)})}
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>d(g)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function ws(e){const t=e.get(),a=t.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},r=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},s=()=>{const n={...$.read(T.all).data},l=Object.keys(n.services||{}),u=t.selectedMappingService||l[0];u&&(n.services[u].field_mappings||(n.services[u].field_mappings=[]),t.editingMappingIndex>=0?n.services[u].field_mappings[t.editingMappingIndex]=a:n.services[u].field_mappings.push(a),$.setData(T.all,()=>n),e.set(g=>({...g,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},o=p`
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
        <label class="form-label u-text-sm">Test Transformer with Sample Value</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="transformerTestVal" class="form-input font-mono" placeholder='["anime", "shounen"]' style="flex: 1;">
          ${x({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;try{const n=await E.post("/api/v1/settings/test-transformer",{expression:a.transformer,value:d});alert("Result: "+JSON.stringify(n.result))}catch(n){alert("Error: "+n.message)}}})}
        </div>
      </div>
    </div>
  `,i=p`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:r})}
      ${x({label:"Save Mapping",variant:"save",onClick:s})}
    </div>
  `;return F({title:"Configure Field Mapping & Transformer",size:"lg",onClose:r,body:o,footer:i})}function Ss(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},a=p`
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
  `;return F({title:"Sample Service API Schema",size:"lg",onClose:t,body:a,footer:r})}function _s(e,t={}){const a=Object.keys(t.triggers||{}),r=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return p`
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
  `}function Es(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},a=p`
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
  `;return F({title:"Add Notification Trigger",size:"md",onClose:t,body:a,footer:r})}function ks(e,t={}){const a=t.retention_days||30,r=t.global_poll_interval_seconds||300;return p`
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
  `}function As(e){const t=Q({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,r;const s=o=>{t.get().isDirty&&(o.preventDefault(),o.returnValue="")};return{mount(o){a=t.subscribe(()=>o()),r=$.subscribe(T.all,()=>o()),fs.getSettings(),window.addEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(async i=>t.get().isDirty?await be({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),r&&r(),window.removeEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(null)},view(){const o=t.get(),{activeTab:i,saving:d,isServiceModalOpen:n,isStageModalOpen:l,isMappingModalOpen:u,isSampleApiModalOpen:g,isNotificationModalOpen:m}=o,v=$.read(T.all),{data:c,status:f,error:b}=v;if(f==="loading"&&!c)return p`<p class="u-text-muted">Loading settings...</p>`;if(f==="error"&&!c)return p`<p class="u-text-danger">Error: ${b==null?void 0:b.message}</p>`;const y={retention_days:(c==null?void 0:c.retention_days)||30,global_poll_interval_seconds:(c==null?void 0:c.global_poll_interval_seconds)||300},S=(c==null?void 0:c.services)||{},w=(c==null?void 0:c.stages)||[],_=y.global_poll_interval_seconds,A=(B,O,H)=>{const C=i===B;return p`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${C?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${C?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${C?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(D=>({...D,activeTab:B}))}
          >
            ${j({name:O,size:16})}
            <span>${H}</span>
          </button>
        `};return p`
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
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:d,disabled:!o.isDirty,onClick:async()=>{const B=$.read(T.all);t.set(O=>({...O,saving:!0}));try{await E.post("/api/v1/settings",B.data),t.set(O=>({...O,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(O){alert("Error saving settings: "+O.message),t.set(H=>({...H,saving:!1}))}}})}
              ${o.isDirty?p`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:h}
            </div>
            </div>
          </div>
          
          ${i==="services"?bs(t,S,_):h}
          ${i==="stages"?hs(t,w):h}
          ${i==="mappings"?$s(t,S):h}
          ${i==="notifications"?_s(t,c):h}
          ${i==="engine"?ks(t,y):h}
          
          <!-- Modals -->
          ${n?xs(t):h}
          ${l?ys(t):h}
          ${u?ws(t):h}
          ${g?Ss(t):h}
          ${m?Es(t):h}
        </div>
      `}}}function Is(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const t=new Set;return{get:()=>e,set:a=>{e=a(e),t.forEach(r=>r())},subscribe:a=>(t.add(a),()=>t.delete(a))}}function Ts(){const e=Is(),t=async()=>{var b,y;const o=e.get(),{selectedService:i,selectedRecordId:d,testEndpoint:n,testName:l}=o;if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const u=$.read(T.all),m=(((b=u==null?void 0:u.data)==null?void 0:b.services)||{})[i],v={...(m==null?void 0:m.enrichment_endpoints)||{}},c=l.trim()||"sandbox_test",f=!!n.trim();f&&(v[c]=n.trim()),e.set(S=>({...S,isLoading:!0,error:null,logs:[],testResponse:null}));try{const S=await E.post("/api/v1/pipeline/sandbox/enrichment",{service_id:i,record_id:parseInt(d,10),enrichment_endpoints:v}),w=f?((y=S.context_data)==null?void 0:y[c])||null:S.context_data;e.set(_=>({..._,isLoading:!1,logs:S.logs||[],testResponse:w}))}catch(S){e.set(w=>({...w,isLoading:!1,error:S.message}))}},a=async()=>{var c;const o=e.get();if(!o.selectedService)return;const i=$.read(T.all),d=((c=i==null?void 0:i.data)==null?void 0:c.services)||{},n=d[o.selectedService],l={...(n==null?void 0:n.enrichment_endpoints)||{}},u=o.testName.trim(),g=o.testEndpoint.trim();if(!u||!g){alert("Please provide both a namespace name and an endpoint to save.");return}l[u]=g;const m={...d,[o.selectedService]:{...n,enrichment_endpoints:l}},v={...i.data,services:m};try{await E.post("/api/v1/settings/config",v),$.setData(T.all,()=>v),e.set(f=>({...f,saveSuccess:!0})),setTimeout(()=>{e.set(f=>({...f,saveSuccess:!1}))},3e3)}catch(f){alert("Failed to save to service: "+f.message)}},r=()=>{var m;const o=e.get(),i=$.read(T.all),d=((m=i==null?void 0:i.data)==null?void 0:m.services)||{},n=Object.keys(d),l=d[o.selectedService];!o.selectedService&&n.length>0&&setTimeout(()=>e.set(v=>({...v,selectedService:n[0]})),0);const u=(v,c)=>{if(!(!c||!v))try{return c.split(".").reduce((f,b)=>f&&f[b]!==void 0?f[b]:void 0,v)}catch{return}},g=o.testVariable.trim()?u(o.testResponse,o.testVariable.trim()):void 0;return p`
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
            <select class="form-select font-mono" @change=${v=>e.set(c=>({...c,selectedService:v.target.value}))} style="border: 1px solid var(--color-text);">
              ${n.length===0?p`<option value="">No services</option>`:h}
              ${n.map(v=>p`<option value=${v} ?selected=${o.selectedService===v}>${d[v].name||v}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${o.selectedRecordId} @input=${v=>e.set(c=>({...c,selectedRecordId:v.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:t,disabled:o.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${o.testName} @input=${v=>e.set(c=>({...c,testName:v.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:a,disabled:o.isLoading})}
            ${o.saveSuccess?p`<span style="color: var(--color-success);">${j({name:"check"})}</span>`:h}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="flex: 1; border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="flex: 1; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${o.testEndpoint} @input=${v=>e.set(c=>({...c,testEndpoint:v.target.value}))}></textarea>
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
                <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${o.testVariable} @input=${v=>e.set(c=>({...c,testVariable:v.target.value}))} style="flex: 1; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                <div style="flex: 1; padding: 4px 8px; background: #000; color: ${g!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${o.testVariable.trim()?g!==void 0?JSON.stringify(g):"undefined":"Enter path to test..."}
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
              ${Object.keys((l==null?void 0:l.enrichment_endpoints)||{}).length===0?p`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:h}
              
              ${Object.entries((l==null?void 0:l.enrichment_endpoints)||{}).map(([v,c])=>p`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(f=>({...f,testName:v,testEndpoint:c}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${v}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${c}>${c}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let s;return{view:r,mount:o=>{s=e.subscribe(o);const i=$.read(T.all);i!=null&&i.data||E.get("/api/v1/settings").then(d=>{$.setData(T.all,()=>d),e.set(n=>({...n}))}).catch(console.error)},unmount:()=>{s&&s()}}}const J=Le(Ee),Cs={overview:os(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),sandbox:Ts(),gitops:gs(),settings:As(J)};let N=null;function ne(){var a,r,s,o;const{current:e}=J.store.get();N&&N.id!==e.id&&((r=(a=N.instance).unmount)==null||r.call(a),N=null),!N&&e&&(N={id:e.id,instance:Cs[e.id]},(o=(s=N.instance).mount)==null||o.call(s,ne));const t=N?N.instance.view():"";Pe(Dt({routerStore:J.store.get(),routes:Ee,router:J,pageContent:t}),document.getElementById("app"))}J.store.subscribe(ne);te.store.subscribe(ne);ne();
