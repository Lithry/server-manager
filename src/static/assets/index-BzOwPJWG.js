import{j as Re,E as Ne,w as k,b as d,A as $,D as Pe}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function De(){const e=new Map;return{on(t,a){return e.has(t)||e.set(t,new Set),e.get(t).add(a),()=>e.get(t).delete(a)},emit(t,a){if(e.has(t))for(const o of e.get(t))o(a)}}}function J(e){let t=e;const a=new Set;return{get:()=>t,set:o=>{t=typeof o=="function"?o(t):o;for(const s of a)s(t)},subscribe:o=>(a.add(o),()=>a.delete(o))}}function Le(e){const t=J({current:null,params:{}});let a=null;async function o(s){const r=window.location.hash.slice(1)||"/";if(a&&t.get().current&&t.get().current.path!==r&&!await a(r)){window.removeEventListener("hashchange",o),window.location.hash=t.get().current.path,setTimeout(()=>window.addEventListener("hashchange",o),0);return}const i=e.find(l=>l.path===r)||e[0];t.set({current:i,params:{}})}return window.addEventListener("hashchange",o),o(),{store:t,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){a=s}}}const ke=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae={CHILD:2},Ee=e=>(...t)=>({_$litDirective$:e,values:t});let Te=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,o){this._$Ct=t,this._$AM=a,this._$Ci=o}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Re,he=e=>e,Be=e=>e.strings===void 0,ye=()=>document.createComment(""),q=(e,t,a)=>{var r;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(a===void 0){const i=o.insertBefore(ye(),s),l=o.insertBefore(ye(),s);a=new ze(i,l,e,e.options)}else{const i=a._$AB.nextSibling,l=a._$AM,n=l!==e;if(n){let p;(r=a._$AQ)==null||r.call(a,e),a._$AM=e,a._$AP!==void 0&&(p=e._$AU)!==l._$AU&&a._$AP(p)}if(i!==s||n){let p=a._$AA;for(;p!==i;){const u=he(p).nextSibling;he(o).insertBefore(p,s),p=u}}}return a},L=(e,t,a=e)=>(e._$AI(t,a),e),je={},Ue=(e,t=je)=>e._$AH=t,Ge=e=>e._$AH,le=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,a)=>{const o=new Map;for(let s=t;s<=a;s++)o.set(e[s],s);return o},Ie=Ee(class extends Te{constructor(e){if(super(e),e.type!==Ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let o;a===void 0?a=t:t!==void 0&&(o=t);const s=[],r=[];let i=0;for(const l of e)s[i]=o?o(l,i):i,r[i]=a(l,i),i++;return{values:r,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,o]){const s=Ge(e),{values:r,keys:i}=this.dt(t,a,o);if(!Array.isArray(s))return this.ut=i,r;const l=this.ut??(this.ut=[]),n=[];let p,u,m=0,v=s.length-1,f=0,c=r.length-1;for(;m<=v&&f<=c;)if(s[m]===null)m++;else if(s[v]===null)v--;else if(l[m]===i[f])n[f]=L(s[m],r[f]),m++,f++;else if(l[v]===i[c])n[c]=L(s[v],r[c]),v--,c--;else if(l[m]===i[c])n[c]=L(s[m],r[c]),q(e,n[c+1],s[m]),m++,c--;else if(l[v]===i[f])n[f]=L(s[v],r[f]),q(e,s[m],s[v]),v--,f++;else if(p===void 0&&(p=$e(i,f,c),u=$e(l,m,v)),p.has(l[m]))if(p.has(l[v])){const b=u.get(i[f]),g=b!==void 0?s[b]:null;if(g===null){const h=q(e,s[m]);L(h,r[f]),n[f]=h}else n[f]=L(g,r[f]),q(e,s[m],g),s[b]=null;f++}else le(s[v]),v--;else le(s[m]),m++;for(;f<=c;){const b=q(e,n[c+1]);L(b,r[f]),n[f++]=b}for(;m<=v;){const b=s[m++];b!==null&&le(b)}return this.ut=i,Ue(e,n),Ne}}),Ve={x:k`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:k`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:k`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:k`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:k`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:k`<polyline points="20 6 9 17 4 12"></polyline>`,tool:k`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:k`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":k`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:k`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:k`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:k`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:k`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:k`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:k`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:k`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:k`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:k`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":k`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:k`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function V({name:e,size:t=16,label:a}){const o=Ve[e];return o?d`<svg 
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
    ${o}
  </svg>`:d`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",qe="vjCp9N",Ke="aWcKCO",Ye="XdvXnE",We="Yr8TTV",Qe="yefrc2",Je="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",nt="HRKVqM",E={sidebar:Fe,brand:He,logo:qe,title:Ke,nav:Ye,navItem:We,sidebarFooter:Qe,toggleBtn:Je,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:nt},C=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),it=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(a=>`${(a.loc??[]).slice(1).join(".")||"body"}: ${a.msg}`).join("; "):null}class U extends Error{constructor(t,{code:a,status:o=0,detail:s=null,cause:r}={}){super(t,{cause:r}),this.name="ApiError",this.code=a,this.status=o,this.detail=s}get retryable(){return this.code===C.NETWORK||this.code===C.TIMEOUT||this.code===C.HTTP&&it.has(this.status)}get userMessage(){switch(this.code){case C.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case C.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case C.ABORTED:return"";case C.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},a=e.fetchImpl??((...c)=>globalThis.fetch(...c)),o={request:[],response:[],error:[]},s=new Map,r=()=>new U("Request aborted",{code:C.ABORTED}),i=(c,b)=>{const g=new URLSearchParams;for(const[_,y]of Object.entries(b??{}))y!=null&&y!==""&&g.set(_,String(y));const h=g.toString();return`${t.baseUrl}${c}${h?"?"+h:""}`};async function l(c){if(c.status===204)return null;const b=c.headers.get("content-type")??"";try{return b.includes("application/json")?await c.json():await c.text()}catch(g){throw new U("Malformed response body",{code:C.PARSE,status:c.status,cause:g})}}async function n(c,b,g){const h=AbortSignal.timeout(g),_=b?AbortSignal.any([b,h]):h;let y;try{y=await a(c.url,{method:c.method,headers:c.headers,body:c.body,signal:_})}catch(A){throw h.aborted?new U(`Request timed out after ${g} ms`,{code:C.TIMEOUT,cause:A}):b!=null&&b.aborted?r():new U("Network request failed",{code:C.NETWORK,cause:A})}const S=await l(y);if(!y.ok)throw new U(lt(S)??`HTTP ${y.status}`,{code:C.HTTP,status:y.status,detail:S});return{status:y.status,data:S,headers:y.headers}}const p=(c,b)=>new Promise((g,h)=>{const _=setTimeout(g,c);b==null||b.addEventListener("abort",()=>{clearTimeout(_),h(r())},{once:!0})}),u=c=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**c);async function m(c,{signal:b,timeoutMs:g,retries:h}){for(let _=0;;_+=1)try{return await n(c,b,g)}catch(y){if(!(y instanceof U)||!y.retryable||_>=h)throw y;await p(u(_),b)}}function v(c,b,g){let h=s.get(c);if(!h){const _=new AbortController,y={controller:_,refs:0,promise:null};y.promise=b(_.signal).finally(()=>{s.get(c)===y&&s.delete(c)}),y.promise.catch(()=>{}),s.set(c,y),h=y}return h.refs+=1,new Promise((_,y)=>{const S=()=>{h.refs-=1,h.refs===0&&(s.get(c)===h&&s.delete(c),h.controller.abort()),y(r())};if(g!=null&&g.aborted){S();return}g==null||g.addEventListener("abort",S,{once:!0}),h.promise.then(A=>{g==null||g.removeEventListener("abort",S),_(A)},A=>{g==null||g.removeEventListener("abort",S),y(A)})})}async function f(c,b,g={}){const{query:h,body:_,headers:y={},signal:S,meta:A={}}=g,B=g.timeoutMs??t.timeoutMs,O=g.retries??(ct.has(c)?t.retries:0),H=g.dedupe??c==="GET";let I={method:c,url:i(b,h),headers:{Accept:"application/json",...y},body:void 0,meta:A};_!==void 0&&(I.body=JSON.stringify(_),I.headers["Content-Type"]="application/json");for(const X of o.request)I=await X(I);const ie=async X=>{try{let j=await m(I,{signal:X,timeoutMs:B,retries:O});for(const P of o.response)j=await P(j,I);return j.data}catch(j){let P=j;for(const Oe of o.error)P=await Oe(P,I)??P;throw P}};return H?v(`${I.method} ${I.url}`,ie,S):ie(S)}return{get:(c,b)=>f("GET",c,b),post:(c,b,g)=>f("POST",c,{...g,body:b}),put:(c,b,g)=>f("PUT",c,{...g,body:b}),delete:(c,b)=>f("DELETE",c,b),use({request:c,response:b,error:g}){c&&o.request.push(c),b&&o.response.push(b),g&&o.error.push(g)}}}const ce=()=>{};function pt(e,t){return t?new Promise((a,o)=>{const s=()=>o(new DOMException("Aborted","AbortError"));if(t.aborted){s();return}t.addEventListener("abort",s,{once:!0}),e.then(a,o).finally(()=>t.removeEventListener("abort",s))}):e}const ve=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.entries(a).sort(([o],[s])=>o<s?-1:1)):a),vt=(e,t)=>t.every((a,o)=>o<e.length&&ve(a)===ve(e[o]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const a=new Map,o=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function s(n){const p=ve(n);let u=a.get(p);return u||(u={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},u.snapshot=o(u),a.set(p,u)),u}function r(n){n.snapshot=o(n);for(const p of[...n.listeners])p(n.snapshot)}function i(){for(const[n,p]of a)p.listeners.size===0&&!p.promise&&p.updatedAt&&e()-p.updatedAt>t&&a.delete(n)}function l(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(p=>(Object.assign(n,{data:p,error:null,status:"success",updatedAt:e()}),p),p=>{throw Object.assign(n,{error:p,status:"error"}),p}).finally(()=>{n.promise=null,r(n),n.invalidated&&n.listeners.size>0&&l(n).catch(ce)}),n.promise.catch(ce),r(n)),n.promise}return{load(n,p,{staleMs:u=0,signal:m}={}){i();const v=s(n);v.fetcher=p;const f=v.status==="success"&&!v.invalidated&&e()-v.updatedAt<u;return pt(f?Promise.resolve(v.data):l(v),m)},read:n=>s(n).snapshot,subscribe(n,p){const u=s(n);return u.listeners.add(p),p(u.snapshot),()=>{u.listeners.delete(p)}},invalidate(n){for(const p of a.values())vt(p.keyParts,n)&&(p.invalidated=!0,r(p),p.listeners.size>0&&p.fetcher&&l(p).catch(ce))},setData(n,p){const u=s(n),m={data:u.data,status:u.status,updatedAt:u.updatedAt},v=p(u.data);return Object.assign(u,{data:v,status:"success",updatedAt:e()}),r(u),function(){u.data===v&&(Object.assign(u,m),r(u))}}}}function gt(e,{mutationFn:t,optimistic:a,invalidates:o=[]}){return async function(r){const i=((a==null?void 0:a(r))??[]).map(({key:l,update:n})=>e.setData(l,n));try{const l=await t(r);return(typeof o=="function"?o(r,l):o).forEach(p=>e.invalidate(p)),l}catch(l){throw i.reverse().forEach(n=>n()),l}}}const G={},bt=De(),T=ut({baseUrl:(G==null?void 0:G.VITE_API_BASE)??"",timeoutMs:Number((G==null?void 0:G.VITE_HTTP_TIMEOUT_MS)??1e4)}),w=mt();T.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const oe={all:["overview"]},ft={getOverview:e=>w.load(oe.all,()=>T.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Z=!1;function xt(){Z=!Z;const e=document.getElementById("app-sidebar");e&&(Z?e.classList.add(E.expanded):e.classList.remove(E.expanded))}function ht({routes:e,activeId:t,onNavigate:a}){var i,l,n,p;const o=w.read(oe.all),s=((l=(i=o==null?void 0:o.data)==null?void 0:i.telemetry)==null?void 0:l.short_commit)||"6b319ac",r=((p=(n=o==null?void 0:o.data)==null?void 0:n.telemetry)==null?void 0:p.branch)||"main";return d`<aside id="app-sidebar" class="${E.sidebar} ${Z?E.expanded:""}">
    <div class=${E.brand}>
      <div class=${E.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${E.brandText}>
        <div class=${E.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">v0.1.6</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${E.nav}>
      ${Ie(e,u=>u.id,u=>d`
        <button class=${E.navItem} aria-current=${u.id===t?"page":"false"}
          @click=${()=>a(u.path)}>
          ${V({name:u.icon,size:16})}
          <span>${u.title}</span>
        </button>
      `)}
    </nav>
    <div class=${E.sidebarFooter}>
      <button class=${E.toggleBtn} @click=${xt}>
        ${V({name:"menu",size:16})}
        <span class=${E.toggleText}>Collapse Menu</span>
      </button>
      <div class=${E.footerDetails}>
        <div class=${E.statusWrapper}>
          <div class=${E.statusDot}></div>
          <span class=${E.statusText}>Manager Online</span>
        </div>
        <div class=${E.branchBox}>
          <span style="color: var(--color-accent);">${r}</span>
          <span class=${E.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",de={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>e??$;function ee(...e){return e.filter(Boolean).join(" ")}function wt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function St(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const _t="PSMDQ2",kt={spinner:_t};function At({size:e=16}={}){return d`<svg class=${kt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Et="vZLpx0",K={btn:Et,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:t="secondary",size:a="md",icon:o,iconOnly:s=!1,ariaLabel:r,loading:i=!1,disabled:l=!1,type:n="button",id:p,onClick:u}){const m=ee(K.btn,K[`btn--${t}`],K[`btn--${a}`],s&&K["btn--icon-only"]);return d`<button id=${we(p)} class=${m} type=${n}
    aria-label=${we(r)} aria-busy=${i?"true":"false"}
    ?disabled=${l||i} @click=${u}>
    ${i?At():o?V({name:o,size:a==="sm"?14:16}):$}
    ${s?$:d`<span class=${K.btn__label}>${e}</span>`}
  </button>`}const Tt=({icon:e,ariaLabel:t,...a})=>x({...a,icon:e,ariaLabel:t,iconOnly:!0,variant:a.variant??"ghost"});function It({title:e}){return d`<header class=${de.topbar}>
    <h1 class=${de.title}>${e}</h1>
    <div class=${de.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{w.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Ct(){const e=J({stack:[]});let t=0;function a(s){return new Promise(r=>{const i=`modal-${t+=1}`;let l=!1;const n=p=>{l||(l=!0,e.set(u=>({stack:u.stack.filter(m=>m.id!==i)})),r(p))};e.set(p=>({stack:[...p.stack,{id:i,view:()=>s({close:n,id:i})}]}))})}return{open:a,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const Mt=Ct(),te=Mt;function Ot(){const{stack:e}=te.store.get();return d`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Rt="sCMZyq",Nt="Fk5OML",Pt="_0AKuiv",ue={layout:Rt,mainContent:Nt,page:Pt};function Dt({routerStore:e,routes:t,router:a,pageContent:o}){const{current:s}=e;return d`<div class=${ue.layout}>
    ${ht({routes:t,activeId:s==null?void 0:s.id,onNavigate:a.navigate})}
    <div class=${ue.mainContent}>
      ${It({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${ue.page}>
        ${o}
      </main>
    </div>
    ${Ot()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",Bt="elFvvy",jt="_2Hu4ZP",Ut="r2dRuM",Gt="AjfFun",M={table:Lt,table__scroll:zt,table__grid:Bt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:jt,table__skeleton:Ut,table__stale:Gt};function re({id:e,caption:t,columns:a,snapshot:o,getRows:s=u=>(u==null?void 0:u.items)??[],rowKey:r=(u,m)=>m,emptyMessage:i="No records found.",onRetry:l,footer:n=$,fallbackColumns:p=[]}){const{status:u,data:m,error:v,isFetching:f}=o,c=m!==void 0,b=typeof a=="function"?c?a(m):p:a,g=Math.max(b.length,1),h=c?s(m):[],_=(S,A)=>d`<td class=${ee(S.align==="end"&&M["table__cell--end"],S.mono&&M["table__cell--mono"])}>
    ${S.render?S.render(A):St(A[S.key])}</td>`;let y;return!c&&(u==="idle"||u==="loading")?y=Array.from({length:5},()=>d`<tr aria-hidden="true">${b.map(()=>d`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):c?h.length===0?y=d`<tr><td colspan=${g} class=${M.table__message}>${i}</td></tr>`:y=Ie(h,r,S=>d`<tr>${b.map(A=>_(A,S))}</tr>`):y=d`<tr><td colspan=${g} class=${M.table__message} role="alert">
      ${(v==null?void 0:v.userMessage)||(v==null?void 0:v.message)||"Failed to load data."}
      ${l?x({label:"Retry",icon:"refresh",size:"sm",onClick:l}):$}</td></tr>`,d`<div class=${M.table}>
    ${u==="error"&&c?d`<div class=${M.table__stale} role="status">Showing cached data. ${(v==null?void 0:v.userMessage)??""} ${l?x({label:"Retry",size:"sm",variant:"ghost",onClick:l}):$}</div>`:$}
    <div class=${M.table__scroll} aria-busy=${f?"true":"false"}>
      <table id=${e??$} class=${M.table__grid}>
        ${t?d`<caption class="u-sr-only">${t}</caption>`:$}
        <thead><tr>${b.map(S=>d`<th scope="col" class=${ee(S.align==="end"&&M["table__cell--end"])}>${S.header}</th>`)}</tr></thead>
        <tbody>${y}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const se={all:["pipeline"],columns:["pipeline","columns"]},me={getPipeline:e=>w.load(se.all,()=>T.get("/api/v1/pipeline"),e),getColumns:e=>w.load(se.columns,()=>T.get("/api/v1/pipeline/columns"),e)};function Vt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:a=>d`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${a[t]}>${a[t]}</span>`})):[]}function Ft(){return{view(){var s,r;const e=w.read(se.all),t=((s=e.data)==null?void 0:s.items)??[],a=((r=e.data)==null?void 0:r.total)??t.length,o=d`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${a} records</div>
          <div class="u-flex u-gap-2">
            ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${x({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return re({id:"pipeline-table",snapshot:e,columns:i=>Vt((i==null?void 0:i.items)??[]),getRows:i=>(i==null?void 0:i.items)??[],rowKey:(i,l)=>i.id??l,onRetry:()=>me.getPipeline(),footer:o})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(e,t)=>{var o;const a=e._$AN;if(a===void 0)return!1;for(const s of a)(o=s._$AO)==null||o.call(s,t,!1),Y(s,t);return!0},ae=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while((a==null?void 0:a.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),Kt(t)}};function Ht(e){this._$AN!==void 0?(ae(this),this._$AM=e,Ce(this)):this._$AM=e}function qt(e,t=!1,a=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let r=a;r<o.length;r++)Y(o[r],!1),ae(o[r]);else o!=null&&(Y(o,!1),ae(o));else Y(this,e)}const Kt=e=>{e.type==Ae.CHILD&&(e._$AP??(e._$AP=qt),e._$AQ??(e._$AQ=Ht))};class Yt extends Te{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,o){super._$AT(t,a,o),Ce(this),this.isConnected=t._$AU}_$AO(t,a=!0){var o,s;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(s=this.disconnected)==null||s.call(this)),a&&(Y(this,t),ae(this))}setValue(t){if(Be(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const pe=new WeakMap,Wt=Ee(class extends Yt{render(e){return $}update(e,[t]){var o;const a=t!==this.G;return a&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),$}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=pe.get(t);a===void 0&&(a=new WeakMap,pe.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=pe.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qt="_9lH80h",Jt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",z={modal:Qt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Jt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function F({title:e,size:t="md",body:a,footer:o=$,onClose:s,dismissible:r=!0}){const i=wt("modal-title"),l=u=>{u&&!u.open&&requestAnimationFrame(()=>{!u.open&&u.isConnected&&u.showModal()})},n=u=>{u.preventDefault(),r&&s(void 0)},p=u=>{r&&u.target===u.currentTarget&&s(void 0)};return d`<dialog class=${ee(z.modal,z[`modal--${t}`])} aria-labelledby=${i}
      ${Wt(l)} @cancel=${n} @click=${p}>
    <div class=${z.modal__panel}>
      <header class=${z.modal__header}>
        <h2 id=${i} class=${z.modal__title}>${e}</h2>
        ${r?Tt({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):$}
      </header>
      <div class=${z.modal__body}>${a}</div>
      ${o!==$?d`<footer class=${z.modal__footer}>${o}</footer>`:$}
    </div>
  </dialog>`}function fe({title:e,message:t,tone:a="danger",confirmLabel:o="Confirmar",requireText:s}){return new Promise(r=>{let i="";""+Math.random().toString(36).substring(2);const l=()=>{te.open(({close:p})=>F({title:e,body:d`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${s?d`
              <p class="u-text-sm u-text-muted">Escribe <strong>${s}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${u=>{i=u.target.value,n()}} />
            `:""}
          </div>
        `,footer:d`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancelar",variant:"ghost",onClick:()=>{p(),r(!1)}})}
            ${x({label:o,variant:a==="danger"?"delete":"add",disabled:s?i!==s:!1,onClick:()=>{p(),r(!0)}})}
          </div>
        `,onClose:()=>{p(),r(!1)}}))};function n(){te.refresh()}l()})}function ss(){const e=Ft();let t;async function a(){if(await fe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await T.post("/api/v1/pipeline/purge"),me.getPipeline({dedupe:!1})}catch(s){alert("Error purging pipeline: "+s.message)}}return{mount(o){t=w.subscribe(se.all,()=>o()),me.getPipeline()},unmount(){t&&t()},view(){return d`
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
      `}}}function as(){return{view(){var p,u,m;const{status:e,data:t,error:a}=w.read(oe.all);if(e==="error")return d`<div class="u-text-danger">${a.message}</div>`;if(e==="loading"||!t)return d`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const o=t.pipeline_total_items||0,s=t.active_incidents||0,r=t.registered_services||0,i=((p=t.telemetry)==null?void 0:p.branch)||"main",l=((u=t.telemetry)==null?void 0:u.clean)!==!1,n=(v,f,c,b,g="u-text-accent")=>d`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${v}</span>
            <span class="${g}">${V({name:b,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${g}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${f}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${c}>${c}</div>
          </div>
        </div>
      `;return d`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",o,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
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
                ${(m=t.stages)!=null&&m.length?t.stages.map(v=>d`
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
                `):d`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function os(){const e=as();let t;return{mount(a){t=w.subscribe(oe.all,()=>a()),ft.getOverview()},unmount(){t&&t()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ge={all:["tools"]},rs={getTools:e=>w.load(ge.all,()=>T.get("/api/v1/tools"),e)},ns="cg2FU3",is="Jh4yC3",Se={console:ns,output:is};function ls({text:e,status:t="idle"}){return d`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=J({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,a;const o=async s=>{e.set(r=>({...r,executionStatus:"running",output:`Executing...
`}));try{const r=await T.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(r,null,2)}))}catch(r){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+r.message}))}};return{mount(s){t=w.subscribe(ge.all,()=>s()),a=e.subscribe(()=>s()),rs.getTools()},unmount(){t&&t(),a&&a()},view(){const{status:s,data:r,error:i,isFetching:l}=w.read(ge.all),n=e.get(),p=Array.isArray(r)?r:(r==null?void 0:r.items)??[];return d`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!r?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:$}
              ${s==="error"&&!r?d`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:$}
              ${p.length===0&&r?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:$}
              
              ${p.map(u=>{var m,v,f;return d`
                <button 
                  class="u-text-left"
                  style="background: ${((m=n.selectedTool)==null?void 0:m.name)===u.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((v=n.selectedTool)==null?void 0:v.name)===u.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(c=>({...c,selectedTool:u,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((f=n.selectedTool)==null?void 0:f.name)===u.name?"u-text-accent":""}">${u.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${u.description}>${u.description}</div>
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
      `}}}const xe={all:["views"]},Me={getViews:e=>w.load(xe.all,()=>T.get("/api/v1/views"),e)};function ds(){return{view(){var a;const e=w.read(xe.all),t=Array.isArray(e.data)?e.data:((a=e.data)==null?void 0:a.items)??[];return!t.length&&e.status!=="loading"?d`
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
        `:re({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function us(){const e=ds();let t;return{mount(a){t=w.subscribe(xe.all,()=>a()),Me.getViews()},unmount(){t&&t()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const N={all:["incidents"],list:e=>[...N.all,e?"resolved":"active"],catalog:["incidents","catalog"]},W={getIncidents:(e,t)=>w.load(N.list(e),()=>T.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>T.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>w.load(N.catalog,()=>T.get("/api/v1/incidents/catalog/errors"),e)};function _e({resolved:e}){const t=gt(w,{mutationFn:s=>W.resolveIncident(s.id,s.note),invalidates:[N.all]});async function a(s){const r=prompt("Enter a resolution note (optional):","Resolved manually");if(r===null)return;if(await fe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:s,note:r})}catch(l){alert("Failed to resolve incident: "+l.message)}}const o=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:s=>d`<span class="u-text-${s.PRIORITY==="CRITICAL"?"danger":s.PRIORITY==="WARNING"?"accent":"muted"}">${s.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:s=>new Date(s.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:s=>s.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?d`<span class="u-text-success">Resolved</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>a(s.ID)})}];return{view(){const s=w.read(N.list(e));return re({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:s,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>d`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const a=t.SEVERITY==="CRITICAL"?"danger":"warning";return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${a}) 20%, transparent); color: var(--color-${a}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>d`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>d`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>d`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=w.read(N.catalog);return re({id:"error-catalog-table",columns:e,snapshot:t,getRows:a=>Array.isArray(a)?a:(a==null?void 0:a.value)||(a==null?void 0:a.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>W.getCatalog()})}}}function vs(){const e=_e({resolved:!1}),t=_e({resolved:!0}),a=ps(),o=J({activeTab:"active"});let s,r,i,l;return{mount(n){s=w.subscribe(N.list(!1),()=>n()),r=w.subscribe(N.list(!0),()=>n()),i=w.subscribe(N.catalog,()=>n()),l=o.subscribe(()=>n()),W.getIncidents(!1),W.getIncidents(!0),W.getCatalog()},unmount(){s&&s(),r&&r(),i&&i(),l&&l()},view(){const{activeTab:n}=o.get(),p=(u,m,v)=>{const f=n===u;return d`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${f?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${f?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${f?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>o.set(h=>({...h,activeTab:u}))}
          >
            ${V({name:m,size:16})}
            <span>${v}</span>
          </button>
        `};return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${p("active","alert","Active Incidents")}
              ${p("resolved","check","Resolved")}
              ${p("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${n==="active"?e.view():$}
          ${n==="resolved"?t.view():$}
          ${n==="catalog"?a.view():$}
        </div>
      `}}}const be={all:["gitops"]},ms={getGitOps:e=>w.load(be.all,()=>T.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=w.subscribe(be.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=w.read(be.all),{status:a,data:o,error:s,isFetching:r}=t;if(a==="loading"&&!o)return d`<p class="u-text-muted">Loading GitOps status...</p>`;if(a==="error"&&!o)return d`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const i=(o==null?void 0:o.telemetry)||{};return d`
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
      `}}}const D={all:["settings"]},bs={getSettings:e=>w.load(D.all,()=>T.get("/api/v1/settings"),e),saveConfig:e=>T.post("/api/v1/settings/config",e),triggerSweep:()=>T.post("/api/v1/settings/sweep"),triggerBackup:()=>T.post("/api/v1/settings/backup")};function fs(e,t={},a=300){const o=Object.keys(t),s=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},r=(i,l,n)=>{var m;const p=((m=l.field_mappings)==null?void 0:m.length)||0,u=Object.keys(l.enrichment_endpoints||{}).join(", ");return d`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${l.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.name.toUpperCase()}</span>
            ${l.enabled?d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${l.poll_interval_seconds?`POLLS EVERY ${l.poll_interval_seconds}S`:`INHERITS GLOBAL (${a}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(v=>({...v,isServiceModalOpen:!0,editingServiceId:i}))})}
            ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${l.base_url||"N/A"} | API Key ${l.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${p}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${u||"none"}</span>
        </div>
      </div>
    `};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?d`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:$}
        ${o.map((i,l)=>r(i,t[i],l===o.length-1))}
      </div>
    </div>
  `}function xs(e){var u;const t=e.get(),a=w.read(D.all),o=((u=a==null?void 0:a.data)==null?void 0:u.services)||{},s=t.editingServiceId?o[t.editingServiceId]:null,r=()=>{e.set(m=>({...m,isServiceModalOpen:!1,editingServiceId:null}))},i=()=>{try{const m=document.getElementById("srv-id").value.trim();if(!m){alert("Service ID is required");return}const v=document.getElementById("srv-enrich").value.trim(),f={};v&&v.split(`
`).forEach(g=>{const h=g.split(":");h.length>=2&&(f[h[0].trim()]=h.slice(1).join(":").trim())});const c={name:document.getElementById("srv-name").value.trim()||m,base_url:document.getElementById("srv-url").value.trim(),api_key:document.getElementById("srv-api").value.trim(),poll_interval_seconds:document.getElementById("chk-service-inherit-poll").checked?null:60,primary_endpoint:document.getElementById("srv-endpoint").value.trim(),pipeline_key_template:document.getElementById("srv-pipeline").value.trim(),enrichment_endpoints:f,enabled:document.getElementById("chk-service-enabled").checked,field_mappings:(s==null?void 0:s.field_mappings)||[]},b={...o,[m]:c};t.editingServiceId&&t.editingServiceId!==m&&delete b[t.editingServiceId],w.setData(D.all,()=>({...a.data,services:b})),e.set(g=>({...g,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null}))}catch(m){alert("Error saving service: "+m.stack)}},l=m=>{alert(`Applied preset: ${m}`)},n=d`
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
  `,p=d`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:r})}
      ${x({label:t.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:i})}
    </div>
  `;return F({title:"Register Service",size:"lg",onClose:r,body:n,footer:p})}function hs(e,t=[]){const a=()=>{e.set(s=>({...s,isStageModalOpen:!0,editingStageId:null}))},o=s=>s.start_condition?s.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${t.length===0?d`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((s,r)=>{const i=o(s);return d`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${i.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${i.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${s.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${s.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${i.bg}; color: ${i.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${i.label}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(l=>({...l,isStageModalOpen:!0,editingStageId:s.id}))})}
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
  `}function ys(e){var m;const t=e.get(),a=w.read(D.all),o=((m=a==null?void 0:a.data)==null?void 0:m.stages)||[],s=t.editingStageId?o.find(v=>v.id===t.editingStageId):null,r=t.stageIsSink??(s?!s.complete_condition:!1),i=t.stageIsRoot??(s?!s.start_condition:!1),l=()=>{e.set(v=>({...v,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var v,f;try{const c=document.getElementById("stage-id").value.trim();if(!c){alert("Stage ID is required");return}const b={id:c,name:document.getElementById("stage-name").value.trim()||c,description:document.getElementById("stage-desc").value.trim(),services:[],start_condition:i?null:((v=document.getElementById("stage-start"))==null?void 0:v.value.trim())||null,complete_condition:r?null:((f=document.getElementById("stage-complete"))==null?void 0:f.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0};let g=[...o];t.editingStageId?g=g.map(h=>h.id===t.editingStageId?b:h):g.push(b),w.setData(D.all,()=>({...a.data,stages:g})),e.set(h=>({...h,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(c){alert("Error in Save Stage: "+c.stack)}},p=d`
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
        <input type="checkbox" id="chk-stage-root" .checked=${i} @change=${v=>e.set(f=>({...f,stageIsRoot:v.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${i?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(s==null?void 0:s.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:()=>alert("Mockup: La validación de sintaxis no está conectada al parser todavía.")})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${r} @change=${v=>e.set(f=>({...f,stageIsSink:v.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${r?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(s==null?void 0:s.complete_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:()=>alert("Mockup: La validación de sintaxis no está conectada al parser todavía.")})}
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
  `,u=d`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:l})}
      ${x({label:t.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return F({title:"Configure DAG Stage",size:"lg",onClose:l,body:p,footer:u})}function $s(e,t={}){const a=Object.keys(t),o=e.get().selectedMappingService||a[0]||"",s=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},r=()=>{e.set(l=>({...l,isMappingModalOpen:!0}))},i=()=>d`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(n=>({...n,selectedMappingService:l.target.value}))}
        >
          ${a.map(l=>d`<option value="${l}" ?selected=${l===o}>${t[l].name}</option>`)}
        </select>
      </div>
    `;return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Field Mappings & Transformers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Extract payload attributes and map them to sanitized uppercase columns.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Sample API",variant:"test",size:"sm",onClick:s})}
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${a.length>0?i():$}
        
        ${(()=>{const l=t[o];return!l||!l.field_mappings||l.field_mappings.length===0?d`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:d`
            <div class="u-flex u-flex-col u-gap-3">
              ${l.field_mappings.map(n=>d`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${n.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${n.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${n.data_type})</span>
                    ${n.transformer?d`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${n.transformer}</div>`:$}
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
  `}function ws(e){const t=()=>{e.set(s=>({...s,isMappingModalOpen:!1}))},a=d`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" @input=${s=>{let r=s.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");r=r.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),s.target.value=r}}>
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
  `,o=d`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return F({title:"Configure Field Mapping & Transformer",size:"lg",onClose:t,body:a,footer:o})}function Ss(e){const t=()=>{e.set(s=>({...s,isSampleApiModalOpen:!1}))},a=d`
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
  `,o=d`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return F({title:"Sample Service API Schema",size:"lg",onClose:t,body:a,footer:o})}function _s(e,t={}){const a=Object.keys(t.triggers||{}),o=()=>{e.set(s=>({...s,isNotificationModalOpen:!0}))};return d`
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
        ${a.length===0?d`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:$}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function ks(e){const t=()=>{e.set(s=>({...s,isNotificationModalOpen:!1}))},a=d`
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
  `,o=d`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:t})}
      ${x({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return F({title:"Add Notification Trigger",size:"md",onClose:t,body:a,footer:o})}function As(e,t={}){const a=t.retention_days||30,o=t.global_poll_interval_seconds||300;return d`
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
  `}function Es(e){const t=J({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let a,o;const s=r=>{t.get().isDirty&&(r.preventDefault(),r.returnValue="")};return{mount(r){a=t.subscribe(()=>r()),o=w.subscribe(D.all,()=>r()),bs.getSettings(),window.addEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(async i=>t.get().isDirty?await fe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){a&&a(),o&&o(),window.removeEventListener("beforeunload",s),e&&e.setBeforeNavigateHook(null)},view(){const r=t.get(),{activeTab:i,saving:l,isServiceModalOpen:n,isStageModalOpen:p,isMappingModalOpen:u,isSampleApiModalOpen:m,isNotificationModalOpen:v}=r,f=w.read(D.all),{data:c,status:b,error:g}=f;if(b==="loading"&&!c)return d`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!c)return d`<p class="u-text-danger">Error: ${g==null?void 0:g.message}</p>`;const h={retention_days:(c==null?void 0:c.retention_days)||30,global_poll_interval_seconds:(c==null?void 0:c.global_poll_interval_seconds)||300},_=(c==null?void 0:c.services)||{},y=(c==null?void 0:c.stages)||[],S=h.global_poll_interval_seconds,A=(B,O,H)=>{const I=i===B;return d`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${I?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${I?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${I?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(P=>({...P,activeTab:B}))}
          >
            ${V({name:O,size:16})}
            <span>${H}</span>
          </button>
        `};return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${A("services","database","Services")}
              ${A("stages","activity","Stages & Predicates")}
              ${A("mappings","code","Field Mappings")}
              ${A("notifications","bell","Notification Triggers")}
              ${A("engine","settings","Engine & Retention")}
            </div>
            ${x({label:"Save All Settings",variant:r.isDirty?"add":"secondary",size:"sm",loading:l,disabled:!r.isDirty,onClick:async()=>{const B=w.read(D.all);t.set(O=>({...O,saving:!0}));try{await T.post("/api/v1/settings",B.data),t.set(O=>({...O,isDirty:!1,saving:!1})),alert("Settings saved successfully!")}catch(O){alert("Error saving settings: "+O.message),t.set(H=>({...H,saving:!1}))}}})}
          </div>
          
          ${i==="services"?fs(t,_,S):$}
          ${i==="stages"?hs(t,y):$}
          ${i==="mappings"?$s(t,_):$}
          ${i==="notifications"?_s(t,c):$}
          ${i==="engine"?As(t,h):$}
          
          <!-- Modals -->
          ${n?xs(t):$}
          ${p?ys(t):$}
          ${u?ws(t):$}
          ${m?Ss(t):$}
          ${v?ks(t):$}
        </div>
      `}}}const Q=Le(ke),Ts={overview:os(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),gitops:gs(),settings:Es(Q)};let R=null;function ne(){var a,o,s,r;const{current:e}=Q.store.get();R&&R.id!==e.id&&((o=(a=R.instance).unmount)==null||o.call(a),R=null),!R&&e&&(R={id:e.id,instance:Ts[e.id]},(r=(s=R.instance).mount)==null||r.call(s,ne));const t=R?R.instance.view():"";Pe(Dt({routerStore:Q.store.get(),routes:ke,router:Q,pageContent:t}),document.getElementById("app"))}Q.store.subscribe(ne);te.store.subscribe(ne);ne();
