import{j as Oe,E as Pe,w as k,b as c,A as y,D as Ne}from"./vendor-LJTP5CNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function De(){const e=new Map;return{on(t,s){return e.has(t)||e.set(t,new Set),e.get(t).add(s),()=>e.get(t).delete(s)},emit(t,s){if(e.has(t))for(const o of e.get(t))o(s)}}}function W(e){let t=e;const s=new Set;return{get:()=>t,set:o=>{t=typeof o=="function"?o(t):o;for(const a of s)a(t)},subscribe:o=>(s.add(o),()=>s.delete(o))}}function Le(e){const t=W({current:null,params:{}});function s(){const o=window.location.hash.slice(1)||"/",a=e.find(r=>r.path===o)||e[0];t.set({current:a,params:{}})}return window.addEventListener("hashchange",s),s(),{store:t,navigate(o){window.location.hash=o}}}const Ae=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={CHILD:2},Ee=e=>(...t)=>({_$litDirective$:e,values:t});let Te=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ze}=Oe,xe=e=>e,je=e=>e.strings===void 0,he=()=>document.createComment(""),F=(e,t,s)=>{var r;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(s===void 0){const n=o.insertBefore(he(),a),l=o.insertBefore(he(),a);s=new ze(n,l,e,e.options)}else{const n=s._$AB.nextSibling,l=s._$AM,i=l!==e;if(i){let u;(r=s._$AQ)==null||r.call(s,e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==l._$AU&&s._$AP(u)}if(n!==a||i){let u=s._$AA;for(;u!==n;){const d=xe(u).nextSibling;xe(o).insertBefore(u,a),u=d}}}return s},P=(e,t,s=e)=>(e._$AI(t,s),e),Be={},Ue=(e,t=Be)=>e._$AH=t,Ge=e=>e._$AH,ie=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=(e,t,s)=>{const o=new Map;for(let a=t;a<=s;a++)o.set(e[a],a);return o},_e=Ee(class extends Te{constructor(e){if(super(e),e.type!==ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let o;s===void 0?s=t:t!==void 0&&(o=t);const a=[],r=[];let n=0;for(const l of e)a[n]=o?o(l,n):n,r[n]=s(l,n),n++;return{values:r,keys:a}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,o]){const a=Ge(e),{values:r,keys:n}=this.dt(t,s,o);if(!Array.isArray(a))return this.ut=n,r;const l=this.ut??(this.ut=[]),i=[];let u,d,b=0,v=a.length-1,x=0,p=r.length-1;for(;b<=v&&x<=p;)if(a[b]===null)b++;else if(a[v]===null)v--;else if(l[b]===n[x])i[x]=P(a[b],r[x]),b++,x++;else if(l[v]===n[p])i[p]=P(a[v],r[p]),v--,p--;else if(l[b]===n[p])i[p]=P(a[b],r[p]),F(e,i[p+1],a[b]),b++,p--;else if(l[v]===n[x])i[x]=P(a[v],r[x]),F(e,a[b],a[v]),v--,x++;else if(u===void 0&&(u=ye(n,x,p),d=ye(l,b,v)),u.has(l[b]))if(u.has(l[v])){const m=d.get(n[x]),g=m!==void 0?a[m]:null;if(g===null){const $=F(e,a[b]);P($,r[x]),i[x]=$}else i[x]=P(g,r[x]),F(e,a[b],g),a[m]=null;x++}else ie(a[v]),v--;else ie(a[b]),b++;for(;x<=p;){const m=F(e,i[p+1]);P(m,r[x]),i[x++]=m}for(;b<=v;){const m=a[b++];m!==null&&ie(m)}return this.ut=n,Ue(e,i),Pe}}),Ve={x:k`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:k`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:k`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:k`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:k`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:k`<polyline points="20 6 9 17 4 12"></polyline>`,tool:k`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:k`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":k`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:k`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:k`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:k`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:k`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:k`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:k`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:k`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:k`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:k`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":k`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:k`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function j({name:e,size:t=16,label:s}){const o=Ve[e];return o?c`<svg 
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
    ${o}
  </svg>`:c`<span style="width:${t}px; height:${t}px; display:inline-block; background:red;"></span>`}const Fe="-FyYHK",He="hQIh8E",Ke="vjCp9N",qe="aWcKCO",We="XdvXnE",Ye="Yr8TTV",Qe="yefrc2",Je="UnbUQg",Xe="z6Wtj-",Ze="WEwa7u",et="rr8RRm",tt="_8nqxsa",st="EMU1IN",at="erzuUm",ot="IX2naX",rt="UuwGh4",it="HRKVqM",E={sidebar:Fe,brand:He,logo:Ke,title:qe,nav:We,navItem:Ye,sidebarFooter:Qe,toggleBtn:Je,toggleText:Xe,footerDetails:Ze,statusWrapper:et,statusDot:tt,branchBox:st,expanded:at,brandText:ot,statusText:rt,commitText:it},C=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),nt=new Set([502,503,504]);function lt(e){const t=e&&typeof e=="object"?e.detail:null;return typeof t=="string"?t:Array.isArray(t)?t.map(s=>`${(s.loc??[]).slice(1).join(".")||"body"}: ${s.msg}`).join("; "):null}class L extends Error{constructor(t,{code:s,status:o=0,detail:a=null,cause:r}={}){super(t,{cause:r}),this.name="ApiError",this.code=s,this.status=o,this.detail=a}get retryable(){return this.code===C.NETWORK||this.code===C.TIMEOUT||this.code===C.HTTP&&nt.has(this.status)}get userMessage(){switch(this.code){case C.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case C.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case C.ABORTED:return"";case C.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const ct=new Set(["GET","HEAD"]),dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function ut(e={}){const t={...dt,...e},s=e.fetchImpl??((...p)=>globalThis.fetch(...p)),o={request:[],response:[],error:[]},a=new Map,r=()=>new L("Request aborted",{code:C.ABORTED}),n=(p,m)=>{const g=new URLSearchParams;for(const[A,h]of Object.entries(m??{}))h!=null&&h!==""&&g.set(A,String(h));const $=g.toString();return`${t.baseUrl}${p}${$?"?"+$:""}`};async function l(p){if(p.status===204)return null;const m=p.headers.get("content-type")??"";try{return m.includes("application/json")?await p.json():await p.text()}catch(g){throw new L("Malformed response body",{code:C.PARSE,status:p.status,cause:g})}}async function i(p,m,g){const $=AbortSignal.timeout(g),A=m?AbortSignal.any([m,$]):$;let h;try{h=await s(p.url,{method:p.method,headers:p.headers,body:p.body,signal:A})}catch(_){throw $.aborted?new L(`Request timed out after ${g} ms`,{code:C.TIMEOUT,cause:_}):m!=null&&m.aborted?r():new L("Network request failed",{code:C.NETWORK,cause:_})}const w=await l(h);if(!h.ok)throw new L(lt(w)??`HTTP ${h.status}`,{code:C.HTTP,status:h.status,detail:w});return{status:h.status,data:w,headers:h.headers}}const u=(p,m)=>new Promise((g,$)=>{const A=setTimeout(g,p);m==null||m.addEventListener("abort",()=>{clearTimeout(A),$(r())},{once:!0})}),d=p=>Math.random()*Math.min(t.retryMaxMs,t.retryBaseMs*2**p);async function b(p,{signal:m,timeoutMs:g,retries:$}){for(let A=0;;A+=1)try{return await i(p,m,g)}catch(h){if(!(h instanceof L)||!h.retryable||A>=$)throw h;await u(d(A),m)}}function v(p,m,g){let $=a.get(p);if(!$){const A=new AbortController,h={controller:A,refs:0,promise:null};h.promise=m(A.signal).finally(()=>{a.get(p)===h&&a.delete(p)}),h.promise.catch(()=>{}),a.set(p,h),$=h}return $.refs+=1,new Promise((A,h)=>{const w=()=>{$.refs-=1,$.refs===0&&(a.get(p)===$&&a.delete(p),$.controller.abort()),h(r())};if(g!=null&&g.aborted){w();return}g==null||g.addEventListener("abort",w,{once:!0}),$.promise.then(_=>{g==null||g.removeEventListener("abort",w),A(_)},_=>{g==null||g.removeEventListener("abort",w),h(_)})})}async function x(p,m,g={}){const{query:$,body:A,headers:h={},signal:w,meta:_={}}=g,oe=g.timeoutMs??t.timeoutMs,U=g.retries??(ct.has(p)?t.retries:0),fe=g.dedupe??p==="GET";let I={method:p,url:n(m,$),headers:{Accept:"application/json",...h},body:void 0,meta:_};A!==void 0&&(I.body=JSON.stringify(A),I.headers["Content-Type"]="application/json");for(const G of o.request)I=await G(I);const re=async G=>{try{let V=await b(I,{signal:G,timeoutMs:oe,retries:U});for(const D of o.response)V=await D(V,I);return V.data}catch(V){let D=V;for(const Re of o.error)D=await Re(D,I)??D;throw D}};return fe?v(`${I.method} ${I.url}`,re,w):re(w)}return{get:(p,m)=>x("GET",p,m),post:(p,m,g)=>x("POST",p,{...g,body:m}),put:(p,m,g)=>x("PUT",p,{...g,body:m}),delete:(p,m)=>x("DELETE",p,m),use({request:p,response:m,error:g}){p&&o.request.push(p),m&&o.response.push(m),g&&o.error.push(g)}}}const ne=()=>{};function pt(e,t){return t?new Promise((s,o)=>{const a=()=>o(new DOMException("Aborted","AbortError"));if(t.aborted){a();return}t.addEventListener("abort",a,{once:!0}),e.then(s,o).finally(()=>t.removeEventListener("abort",a))}):e}const ue=e=>JSON.stringify(e,(t,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([o],[a])=>o<a?-1:1)):s),vt=(e,t)=>t.every((s,o)=>o<e.length&&ue(s)===ue(e[o]));function mt({now:e=()=>Date.now(),gcMs:t=5*6e4}={}){const s=new Map,o=i=>Object.freeze({status:i.status,data:i.data,error:i.error,isFetching:!!i.promise,updatedAt:i.updatedAt});function a(i){const u=ue(i);let d=s.get(u);return d||(d={keyParts:i,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},d.snapshot=o(d),s.set(u,d)),d}function r(i){i.snapshot=o(i);for(const u of[...i.listeners])u(i.snapshot)}function n(){for(const[i,u]of s)u.listeners.size===0&&!u.promise&&u.updatedAt&&e()-u.updatedAt>t&&s.delete(i)}function l(i){return i.promise||(i.invalidated=!1,i.status==="idle"&&(i.status="loading"),i.promise=Promise.resolve().then(()=>i.fetcher()).then(u=>(Object.assign(i,{data:u,error:null,status:"success",updatedAt:e()}),u),u=>{throw Object.assign(i,{error:u,status:"error"}),u}).finally(()=>{i.promise=null,r(i),i.invalidated&&i.listeners.size>0&&l(i).catch(ne)}),i.promise.catch(ne),r(i)),i.promise}return{load(i,u,{staleMs:d=0,signal:b}={}){n();const v=a(i);v.fetcher=u;const x=v.status==="success"&&!v.invalidated&&e()-v.updatedAt<d;return pt(x?Promise.resolve(v.data):l(v),b)},read:i=>a(i).snapshot,subscribe(i,u){const d=a(i);return d.listeners.add(u),u(d.snapshot),()=>{d.listeners.delete(u)}},invalidate(i){for(const u of s.values())vt(u.keyParts,i)&&(u.invalidated=!0,r(u),u.listeners.size>0&&u.fetcher&&l(u).catch(ne))},setData(i,u){const d=a(i),b={data:d.data,status:d.status,updatedAt:d.updatedAt},v=u(d.data);return Object.assign(d,{data:v,status:"success",updatedAt:e()}),r(d),function(){d.data===v&&(Object.assign(d,b),r(d))}}}}function gt(e,{mutationFn:t,optimistic:s,invalidates:o=[]}){return async function(r){const n=((s==null?void 0:s(r))??[]).map(({key:l,update:i})=>e.setData(l,i));try{const l=await t(r);return(typeof o=="function"?o(r,l):o).forEach(u=>e.invalidate(u)),l}catch(l){throw n.reverse().forEach(i=>i()),l}}}const z={},bt=De(),T=ut({baseUrl:(z==null?void 0:z.VITE_API_BASE)??"",timeoutMs:Number((z==null?void 0:z.VITE_HTTP_TIMEOUT_MS)??1e4)}),S=mt();T.use({error:e=>((e==null?void 0:e.status)===401&&bt.emit("auth:required",e),e)});const te={all:["overview"]},ft={getOverview:e=>S.load(te.all,()=>T.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Y=!1;function xt(){Y=!Y;const e=document.getElementById("app-sidebar");e&&(Y?e.classList.add(E.expanded):e.classList.remove(E.expanded))}function ht({routes:e,activeId:t,onNavigate:s}){var n,l,i,u;const o=S.read(te.all),a=((l=(n=o==null?void 0:o.data)==null?void 0:n.telemetry)==null?void 0:l.short_commit)||"6b319ac",r=((u=(i=o==null?void 0:o.data)==null?void 0:i.telemetry)==null?void 0:u.branch)||"main";return c`<aside id="app-sidebar" class="${E.sidebar} ${Y?E.expanded:""}">
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
      ${_e(e,d=>d.id,d=>c`
        <button class=${E.navItem} aria-current=${d.id===t?"page":"false"}
          @click=${()=>s(d.path)}>
          ${j({name:d.icon,size:16})}
          <span>${d.title}</span>
        </button>
      `)}
    </nav>
    <div class=${E.sidebarFooter}>
      <button class=${E.toggleBtn} @click=${xt}>
        ${j({name:"menu",size:16})}
        <span class=${E.toggleText}>Collapse Menu</span>
      </button>
      <div class=${E.footerDetails}>
        <div class=${E.statusWrapper}>
          <div class=${E.statusDot}></div>
          <span class=${E.statusText}>Manager Online</span>
        </div>
        <div class=${E.branchBox}>
          <span style="color: var(--color-accent);">${r}</span>
          <span class=${E.commitText}>${a}</span>
        </div>
      </div>
    </div>
  </aside>`}const yt="MFUTlq",$t="kBMrej",le={topbar:yt,title:$t};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>e??y;function J(...e){return e.filter(Boolean).join(" ")}function St(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function wt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const At="PSMDQ2",kt={spinner:At};function Et({size:e=16}={}){return c`<svg class=${kt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Tt="vZLpx0",H={btn:Tt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function f({label:e,variant:t="secondary",size:s="md",icon:o,iconOnly:a=!1,ariaLabel:r,loading:n=!1,disabled:l=!1,type:i="button",id:u,onClick:d}){const b=J(H.btn,H[`btn--${t}`],H[`btn--${s}`],a&&H["btn--icon-only"]);return c`<button id=${$e(u)} class=${b} type=${i}
    aria-label=${$e(r)} aria-busy=${n?"true":"false"}
    ?disabled=${l||n} @click=${d}>
    ${n?Et():o?j({name:o,size:s==="sm"?14:16}):y}
    ${a?y:c`<span class=${H.btn__label}>${e}</span>`}
  </button>`}const _t=({icon:e,ariaLabel:t,...s})=>f({...s,icon:e,ariaLabel:t,iconOnly:!0,variant:s.variant??"ghost"});function Ct({title:e}){return c`<header class=${le.topbar}>
    <h1 class=${le.title}>${e}</h1>
    <div class=${le.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${f({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{S.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function It(){const e=W({stack:[]});let t=0;function s(a){return new Promise(r=>{const n=`modal-${t+=1}`;let l=!1;const i=u=>{l||(l=!0,e.set(d=>({stack:d.stack.filter(b=>b.id!==n)})),r(u))};e.set(u=>({stack:[...u.stack,{id:n,view:()=>a({close:i,id:n})}]}))})}return{open:s,refresh:()=>e.set(a=>({stack:[...a.stack]})),store:e}}const Mt=It(),X=Mt;function Rt(){const{stack:e}=X.store.get();return c`<div id="modal-root">${e.map(t=>t.view())}</div>`}const Ot="sCMZyq",Pt="Fk5OML",Nt="_0AKuiv",ce={layout:Ot,mainContent:Pt,page:Nt};function Dt({routerStore:e,routes:t,router:s,pageContent:o}){const{current:a}=e;return c`<div class=${ce.layout}>
    ${ht({routes:t,activeId:a==null?void 0:a.id,onNavigate:s.navigate})}
    <div class=${ce.mainContent}>
      ${Ct({title:(a==null?void 0:a.pageTitle)||(a==null?void 0:a.title)||""})}
      <main class=${ce.page}>
        ${o}
      </main>
    </div>
    ${Rt()}
  </div>`}const Lt="fuSbcq",zt="fu9t4u",jt="elFvvy",Bt="_2Hu4ZP",Ut="r2dRuM",Gt="AjfFun",M={table:Lt,table__scroll:zt,table__grid:jt,"table__cell--end":"WFAaNl","table__cell--mono":"dpdvwb",table__message:Bt,table__skeleton:Ut,table__stale:Gt};function se({id:e,caption:t,columns:s,snapshot:o,getRows:a=d=>(d==null?void 0:d.items)??[],rowKey:r=(d,b)=>b,emptyMessage:n="No records found.",onRetry:l,footer:i=y,fallbackColumns:u=[]}){const{status:d,data:b,error:v,isFetching:x}=o,p=b!==void 0,m=typeof s=="function"?p?s(b):u:s,g=Math.max(m.length,1),$=p?a(b):[],A=(w,_)=>c`<td class=${J(w.align==="end"&&M["table__cell--end"],w.mono&&M["table__cell--mono"])}>
    ${w.render?w.render(_):wt(_[w.key])}</td>`;let h;return!p&&(d==="idle"||d==="loading")?h=Array.from({length:5},()=>c`<tr aria-hidden="true">${m.map(()=>c`<td><span class=${M.table__skeleton}></span></td>`)}</tr>`):p?$.length===0?h=c`<tr><td colspan=${g} class=${M.table__message}>${n}</td></tr>`:h=_e($,r,w=>c`<tr>${m.map(_=>A(_,w))}</tr>`):h=c`<tr><td colspan=${g} class=${M.table__message} role="alert">
      ${(v==null?void 0:v.userMessage)||(v==null?void 0:v.message)||"Failed to load data."}
      ${l?f({label:"Retry",icon:"refresh",size:"sm",onClick:l}):y}</td></tr>`,c`<div class=${M.table}>
    ${d==="error"&&p?c`<div class=${M.table__stale} role="status">Showing cached data. ${(v==null?void 0:v.userMessage)??""} ${l?f({label:"Retry",size:"sm",variant:"ghost",onClick:l}):y}</div>`:y}
    <div class=${M.table__scroll} aria-busy=${x?"true":"false"}>
      <table id=${e??y} class=${M.table__grid}>
        ${t?c`<caption class="u-sr-only">${t}</caption>`:y}
        <thead><tr>${m.map(w=>c`<th scope="col" class=${J(w.align==="end"&&M["table__cell--end"])}>${w.header}</th>`)}</tr></thead>
        <tbody>${h}</tbody>
      </table>
    </div>
    ${i}
  </div>`}const Z={all:["pipeline"],columns:["pipeline","columns"]},pe={getPipeline:e=>S.load(Z.all,()=>T.get("/api/v1/pipeline"),e),getColumns:e=>S.load(Z.columns,()=>T.get("/api/v1/pipeline/columns"),e)};function Vt(e=[]){return e.length?Object.keys(e[0]).map(t=>({key:t,header:t.toUpperCase(),render:s=>c`<span class="u-truncate" style="max-width: 250px; display: inline-block;" title=${s[t]}>${s[t]}</span>`})):[]}function Ft(){return{view(){var a,r;const e=S.read(Z.all),t=((a=e.data)==null?void 0:a.items)??[],s=((r=e.data)==null?void 0:r.total)??t.length,o=c`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${t.length?"1":"0"}-${t.length} of ${s} records</div>
          <div class="u-flex u-gap-2">
            ${f({label:"Previous",size:"sm",variant:"secondary",disabled:!0})}
            ${f({label:"Next",size:"sm",variant:"secondary",disabled:!0})}
          </div>
        </div>
      `;return se({id:"pipeline-table",snapshot:e,columns:n=>Vt((n==null?void 0:n.items)??[]),getRows:n=>(n==null?void 0:n.items)??[],rowKey:(n,l)=>n.id??l,onRetry:()=>pe.getPipeline(),footer:o})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=(e,t)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const a of s)(o=a._$AO)==null||o.call(a,t,!1),K(a,t);return!0},ee=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),qt(t)}};function Ht(e){this._$AN!==void 0?(ee(this),this._$AM=e,Ce(this)):this._$AM=e}function Kt(e,t=!1,s=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let r=s;r<o.length;r++)K(o[r],!1),ee(o[r]);else o!=null&&(K(o,!1),ee(o));else K(this,e)}const qt=e=>{e.type==ke.CHILD&&(e._$AP??(e._$AP=Kt),e._$AQ??(e._$AQ=Ht))};class Wt extends Te{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),Ce(this),this.isConnected=t._$AU}_$AO(t,s=!0){var o,a;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(a=this.disconnected)==null||a.call(this)),s&&(K(this,t),ee(this))}setValue(t){if(je(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const de=new WeakMap,Yt=Ee(class extends Wt{render(e){return y}update(e,[t]){var o;const s=t!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),y}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=de.get(t);s===void 0&&(s=new WeakMap,de.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=de.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qt="_9lH80h",Jt="_91-Xo5",Xt="SEYdJQ",Zt="CRt7-E",es="gj4qUB",ts="hUDIR7",N={modal:Qt,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Jt,modal__header:Xt,modal__title:Zt,modal__body:es,modal__footer:ts};function B({title:e,size:t="md",body:s,footer:o=y,onClose:a,dismissible:r=!0}){const n=St("modal-title"),l=d=>{d&&!d.open&&requestAnimationFrame(()=>{!d.open&&d.isConnected&&d.showModal()})},i=d=>{d.preventDefault(),r&&a(void 0)},u=d=>{r&&d.target===d.currentTarget&&a(void 0)};return c`<dialog class=${J(N.modal,N[`modal--${t}`])} aria-labelledby=${n}
      ${Yt(l)} @cancel=${i} @click=${u}>
    <div class=${N.modal__panel}>
      <header class=${N.modal__header}>
        <h2 id=${n} class=${N.modal__title}>${e}</h2>
        ${r?_t({icon:"x",ariaLabel:"Close dialog",onClick:()=>a(void 0)}):y}
      </header>
      <div class=${N.modal__body}>${s}</div>
      ${o!==y?c`<footer class=${N.modal__footer}>${o}</footer>`:y}
    </div>
  </dialog>`}function Ie({title:e,message:t,tone:s="danger",confirmLabel:o="Confirmar",requireText:a}){return new Promise(r=>{let n="";""+Math.random().toString(36).substring(2);const l=()=>{X.open(({close:u})=>B({title:e,body:c`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${t}</p>
            ${a?c`
              <p class="u-text-sm u-text-muted">Escribe <strong>${a}</strong> para confirmar.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${d=>{n=d.target.value,i()}} />
            `:""}
          </div>
        `,footer:c`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${f({label:"Cancelar",variant:"ghost",onClick:()=>{u(),r(!1)}})}
            ${f({label:o,variant:s==="danger"?"danger":"primary",disabled:a?n!==a:!1,onClick:()=>{u(),r(!0)}})}
          </div>
        `,onClose:()=>{u(),r(!1)}}))};function i(){X.refresh()}l()})}function ss(){const e=Ft();let t;async function s(){if(await Ie({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await T.post("/api/v1/pipeline/purge"),pe.getPipeline({dedupe:!1})}catch(a){alert("Error purging pipeline: "+a.message)}}return{mount(o){t=S.subscribe(Z.all,()=>o()),pe.getPipeline()},unmount(){t&&t()},view(){return c`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${f({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${f({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:()=>alert("Manage Columns")})}
              ${f({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div>
              ${f({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:s})}
            </div>
            <div class="u-flex u-gap-2">
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Stages</option></select>
              <select class="u-text-sm" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none;"><option>All Statuses</option></select>
            </div>
          </div>
          ${e.view()}
        </div>
      `}}}function as(){return{view(){var u,d,b;const{status:e,data:t,error:s}=S.read(te.all);if(e==="error")return c`<div class="u-text-danger">${s.message}</div>`;if(e==="loading"||!t)return c`<div style="color: var(--color-text-muted);">Cargando resumen...</div>`;const o=t.pipeline_total_items||0,a=t.active_incidents||0,r=t.registered_services||0,n=((u=t.telemetry)==null?void 0:u.branch)||"main",l=((d=t.telemetry)==null?void 0:d.clean)!==!1,i=(v,x,p,m,g="u-text-accent")=>c`
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
            ${i("Pipeline Items",o,"Items tracked in universal pipeline","package","u-text-accent")}
            ${i("Active Incidents",a,a>0?`${a} critical anomalies`:"0 critical anomalies","alert",(a>0,"u-text-danger"))}
            ${i("Active Services",r,"Configured upstream services","play","u-text-success")}
            ${i("GitOps Status",n,l?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(b=t.stages)!=null&&b.length?t.stages.map(v=>c`
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
      `}}}function os(){const e=as();let t;return{mount(s){t=S.subscribe(te.all,()=>s()),ft.getOverview()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const ve={all:["tools"]},rs={getTools:e=>S.load(ve.all,()=>T.get("/api/v1/tools"),e)},is="cg2FU3",ns="Jh4yC3",Se={console:is,output:ns};function ls({text:e,status:t="idle"}){return c`
    <div class=${Se.console}>
      <pre class=${Se.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function cs(){const e=W({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let t,s;const o=async a=>{e.set(r=>({...r,executionStatus:"running",output:`Executing...
`}));try{const r=await T.post(`/api/v1/tools/${encodeURIComponent(a.name)}/run`);e.set(n=>({...n,executionStatus:"success",output:n.output+`
`+JSON.stringify(r,null,2)}))}catch(r){e.set(n=>({...n,executionStatus:"error",output:n.output+`
ERROR: `+r.message}))}};return{mount(a){t=S.subscribe(ve.all,()=>a()),s=e.subscribe(()=>a()),rs.getTools()},unmount(){t&&t(),s&&s()},view(){const{status:a,data:r,error:n,isFetching:l}=S.read(ve.all),i=e.get(),u=Array.isArray(r)?r:(r==null?void 0:r.items)??[];return c`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${a==="loading"&&!r?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:y}
              ${a==="error"&&!r?c`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${n==null?void 0:n.message}</div>`:y}
              ${u.length===0&&r?c`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:y}
              
              ${u.map(d=>{var b,v,x;return c`
                <button 
                  class="u-text-left"
                  style="background: ${((b=i.selectedTool)==null?void 0:b.name)===d.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((v=i.selectedTool)==null?void 0:v.name)===d.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(p=>({...p,selectedTool:d,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((x=i.selectedTool)==null?void 0:x.name)===d.name?"u-text-accent":""}">${d.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${d.description}>${d.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${i.selectedTool,"Select a tool to execute"}</h3>
              ${f({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!i.selectedTool||i.executionStatus==="running",loading:i.executionStatus==="running",onClick:()=>o(i.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${ls({text:i.output,status:i.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const be={all:["views"]},Me={getViews:e=>S.load(be.all,()=>T.get("/api/v1/views"),e)};function ds(){return{view(){var s;const e=S.read(be.all),t=Array.isArray(e.data)?e.data:((s=e.data)==null?void 0:s.items)??[];return!t.length&&e.status!=="loading"?c`
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
        `:se({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>t,onRetry:()=>Me.getViews()})}}}function us(){const e=ds();let t;return{mount(s){t=S.subscribe(be.all,()=>s()),Me.getViews()},unmount(){t&&t()},view(){return c`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${f({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const O={all:["incidents"],list:e=>[...O.all,e?"resolved":"active"],catalog:["incidents","catalog"]},q={getIncidents:(e,t)=>S.load(O.list(e),()=>T.get("/api/v1/incidents",{query:{resolved:e?1:0}}),t),resolveIncident:(e,t)=>T.post("/api/v1/incidents/resolve",{id:e,note:t}),getCatalog:e=>S.load(O.catalog,()=>T.get("/api/v1/incidents/catalog/errors"),e)};function we({resolved:e}){const t=gt(S,{mutationFn:a=>q.resolveIncident(a.id,a.note),invalidates:[O.all]});async function s(a){const r=prompt("Enter a resolution note (optional):","Resolved manually");if(r===null)return;if(await Ie({title:"Resolve Incident",message:`Are you sure you want to mark incident #${a} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await t({id:a,note:r})}catch(l){alert("Failed to resolve incident: "+l.message)}}const o=[{key:"ID",header:"ID",mono:!0},{key:"PRIORITY",header:"PRIORITY",render:a=>c`<span class="u-text-${a.PRIORITY==="CRITICAL"?"danger":a.PRIORITY==="WARNING"?"accent":"muted"}">${a.PRIORITY}</span>`},{key:"CREATED_AT",header:"CREATED_AT",render:a=>new Date(a.CREATED_AT*1e3).toLocaleString(),mono:!0},{key:"APP_NAME",header:"APP",render:a=>a.APP_NAME||"SYSTEM"},{key:"MESSAGE",header:"MESSAGE"},{key:"ACTIONS",header:"",align:"end",render:a=>a.RESOLVED?c`<span class="u-text-success">Resolved</span>`:f({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>s(a.ID)})}];return{view(){const a=S.read(O.list(e));return se({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:a,emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function ps(){const e=[{key:"ERROR_CODE",header:"Code",render:t=>c`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const s=t.SEVERITY==="CRITICAL"?"danger":"warning";return c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${s}) 20%, transparent); color: var(--color-${s}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>c`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>c`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>c`<span class="u-text-sm">${t.REMEDY}</span>`}];return{view(){const t=S.read(O.catalog);return se({id:"error-catalog-table",columns:e,snapshot:t,getRows:s=>Array.isArray(s)?s:(s==null?void 0:s.value)||(s==null?void 0:s.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>q.getCatalog()})}}}function vs(){const e=we({resolved:!1}),t=we({resolved:!0}),s=ps(),o=W({activeTab:"active"});let a,r,n,l;return{mount(i){a=S.subscribe(O.list(!1),()=>i()),r=S.subscribe(O.list(!0),()=>i()),n=S.subscribe(O.catalog,()=>i()),l=o.subscribe(()=>i()),q.getIncidents(!1),q.getIncidents(!0),q.getCatalog()},unmount(){a&&a(),r&&r(),n&&n(),l&&l()},view(){const{activeTab:i}=o.get(),u=(d,b,v)=>{const x=i===d;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${x?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${x?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${x?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>o.set($=>({...$,activeTab:d}))}
          >
            ${j({name:b,size:16})}
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
            
            ${f(i==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>alert("Add Error")}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>alert("Report Incident")})}
          </div>
          
          ${i==="active"?e.view():y}
          ${i==="resolved"?t.view():y}
          ${i==="catalog"?s.view():y}
        </div>
      `}}}const me={all:["gitops"]},ms={getGitOps:e=>S.load(me.all,()=>T.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function gs(){let e;return{mount(t){e=S.subscribe(me.all,()=>t()),ms.getGitOps()},unmount(){e&&e()},view(){const t=S.read(me.all),{status:s,data:o,error:a,isFetching:r}=t;if(s==="loading"&&!o)return c`<p class="u-text-muted">Loading GitOps status...</p>`;if(s==="error"&&!o)return c`<p class="u-text-danger">Error: ${a==null?void 0:a.message}</p>`;const n=(o==null?void 0:o.telemetry)||{};return c`
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
      `}}}const ge={all:["settings"]},bs={getSettings:e=>S.load(ge.all,()=>T.get("/api/v1/settings"),e),saveConfig:e=>T.post("/api/v1/settings/config",e),triggerSweep:()=>T.post("/api/v1/settings/sweep"),triggerBackup:()=>T.post("/api/v1/settings/backup")};function fs(e,t={},s=300){const o=Object.keys(t),a=()=>{e.set(n=>({...n,isServiceModalOpen:!0}))},r=(n,l,i)=>{var b;const u=((b=l.field_mappings)==null?void 0:b.length)||0,d=Object.keys(l.enrichment_endpoints||{}).join(", ");return c`
      <div style="padding: var(--space-4); border-bottom: ${i?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${l.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${l.name.toUpperCase()}</span>
            ${l.enabled?c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:c`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${l.poll_interval_seconds?`POLLS EVERY ${l.poll_interval_seconds}S`:`INHERITS GLOBAL (${s}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${f({label:"Edit",variant:"ghost",size:"sm",onClick:()=>alert("Edit "+l.name)})}
            ${f({label:"Delete",variant:"delete",size:"sm",onClick:()=>alert("Delete "+l.name)})}
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
        ${f({label:"+ Add Service",variant:"add",size:"sm",onClick:a})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:y}
        ${o.map((n,l)=>r(n,t[n],l===o.length-1))}
      </div>
    </div>
  `}function xs(e){const t=()=>{e.set(r=>({...r,isServiceModalOpen:!1}))},s=r=>{alert(`Applied preset: ${r}`)},o=c`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${f({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>s("sonarr")})}
      ${f({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>s("radarr")})}
      ${f({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>s("jellyfin")})}
      ${f({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>s("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc.">
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" @input=${r=>{r.target.value=r.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
          ${f({label:"Discover Events from API",variant:"secondary",size:"sm"})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        <div class="u-text-muted u-text-sm">Save or click 'Discover Events from API' to fetch supported eventTypes.</div>
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" checked>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,a=c`
    <div class="u-flex u-gap-2">
      ${f({label:"Cancel",variant:"secondary",onClick:t})}
      ${f({label:"Save Service",variant:"save",onClick:()=>alert("Save Service")})}
    </div>
  `;return B({title:"Register Service",size:"lg",onClose:t,body:o,footer:a})}function hs(e,t=[]){return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${f({label:"+ Add Stage",variant:"add",size:"sm",onClick:()=>{e.set(o=>({...o,isStageModalOpen:!0}))}})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${t.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:t.map((o,a)=>c`
              <div style="padding: var(--space-4); border-bottom: ${a===t.length-1?"none":"1px solid var(--color-border)"};">
                <div class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text);">${o.name}</strong>
                    <span class="u-font-mono u-text-xs u-ml-2" style="color: var(--color-text-muted);">${o.id}</span>
                  </div>
                  <div class="u-flex u-gap-2">
                    ${f({label:"Edit",variant:"ghost",size:"sm",onClick:()=>alert("Edit "+o.name)})}
                    ${f({label:"Delete",variant:"delete",size:"sm",onClick:()=>alert("Delete "+o.name)})}
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${o.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-text-muted u-mt-2" style="background: var(--color-bg-subtle); padding: 4px 8px; border-radius: 4px;">
                  START: ${o.start_condition||"NULL (ROOT)"} | COMPLETE: ${o.complete_condition||"IMMEDIATE / SINK"}
                </div>
              </div>
            `)}
      </div>
    </div>
  `}function ys(e){const t=e.get(),s=t.stageIsSink||!1,o=t.stageIsRoot||!1,a=()=>{e.set(l=>({...l,isStageModalOpen:!1,stageIsRoot:!1,stageIsSink:!1}))},r=c`
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
        <input type="checkbox" id="chk-stage-root" .checked=${o} @change=${l=>e.set(i=>({...i,stageIsRoot:l.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;">
          ${f({label:"Test Syntax",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${s} @change=${l=>e.set(i=>({...i,stageIsSink:l.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${s?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;">
          ${f({label:"Test Syntax",variant:"test",size:"sm"})}
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
      ${f({label:"Cancel",variant:"secondary",onClick:a})}
      ${f({label:"Save Stage",variant:"save",onClick:()=>alert("Save Stage")})}
    </div>
  `;return B({title:"Configure DAG Stage",size:"lg",onClose:a,body:r,footer:n})}function $s(e,t={}){const s=Object.keys(t),o=e.get().selectedMappingService||s[0]||"",a=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0}))},r=()=>{e.set(l=>({...l,isMappingModalOpen:!0}))},n=()=>c`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(i=>({...i,selectedMappingService:l.target.value}))}
        >
          ${s.map(l=>c`<option value="${l}" ?selected=${l===o}>${t[l].name}</option>`)}
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
          ${f({label:"Sample API",variant:"test",size:"sm",onClick:a})}
          ${f({label:"+ Add Mapping",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${s.length>0?n():y}
        
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
        </div>
      </div>
    </div>
  `}function Ss(e){const t=()=>{e.set(a=>({...a,isMappingModalOpen:!1}))},s=c`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" @input=${a=>{let r=a.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");r=r.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),a.target.value=r}}>
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
          ${f({label:"Test Transform",variant:"test",size:"sm"})}
        </div>
      </div>
    </div>
  `,o=c`
    <div class="u-flex u-gap-2">
      ${f({label:"Cancel",variant:"secondary",onClick:t})}
      ${f({label:"Save Mapping",variant:"save",onClick:()=>alert("Save Mapping")})}
    </div>
  `;return B({title:"Configure Field Mapping & Transformer",size:"lg",onClose:t,body:s,footer:o})}function ws(e){const t=()=>{e.set(a=>({...a,isSampleApiModalOpen:!1}))},s=c`
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
      ${f({label:"Fetch Sample",variant:"test"})}
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
  `,o=c`
    <div class="u-flex u-gap-2">
      ${f({label:"Close",variant:"secondary",onClick:t})}
    </div>
  `;return B({title:"Sample Service API Schema",size:"lg",onClose:t,body:s,footer:o})}function As(e,t={}){const s=Object.keys(t.triggers||{}),o=()=>{e.set(a=>({...a,isNotificationModalOpen:!0}))};return c`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${f({label:"Test Alert",variant:"test",size:"sm",onClick:()=>alert("Test alert")})}
          ${f({label:"+ Add Trigger",variant:"add",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col">
        ${s.length===0?c`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No triggers configured.</div>`:y}
        <!-- In the future, map and render trigger list here -->
      </div>
    </div>
  `}function ks(e){const t=()=>{e.set(a=>({...a,isNotificationModalOpen:!1}))},s=c`
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
  `,o=c`
    <div class="u-flex u-gap-2">
      ${f({label:"Cancel",variant:"secondary",onClick:t})}
      ${f({label:"Add Trigger",variant:"save",onClick:()=>alert("Add Trigger")})}
    </div>
  `;return B({title:"Add Notification Trigger",size:"md",onClose:t,body:s,footer:o})}function Es(e,t={}){const s=t.retention_days||30,o=t.global_poll_interval_seconds||300;return c`
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

        ${f({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}function Ts(){const e=W({activeTab:"services",saving:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let t,s;return{mount(o){t=e.subscribe(()=>o()),s=S.subscribe(ge.all,()=>o()),bs.getSettings()},unmount(){t&&t(),s&&s()},view(){const o=e.get(),{activeTab:a,saving:r,isServiceModalOpen:n,isStageModalOpen:l,isMappingModalOpen:i,isSampleApiModalOpen:u,isNotificationModalOpen:d}=o,b=S.read(ge.all),{data:v,status:x,error:p}=b;if(x==="loading"&&!v)return c`<p class="u-text-muted">Loading settings...</p>`;if(x==="error"&&!v)return c`<p class="u-text-danger">Error: ${p==null?void 0:p.message}</p>`;const m=(v==null?void 0:v.system_config)||{},g=(v==null?void 0:v.upstream_services)||{},$=(v==null?void 0:v.pipeline_stages)||[],A=m.global_poll_interval_seconds||300,h=(w,_,oe)=>{const U=a===w;return c`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${U?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${U?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${U?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(G=>({...G,activeTab:w}))}
          >
            ${j({name:_,size:16})}
            <span>${oe}</span>
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
            ${f({label:"Save All Settings",variant:"save",size:"sm",loading:r,onClick:()=>alert("Save coming soon")})}
          </div>
          
          ${a==="services"?fs(e,g,A):y}
          ${a==="stages"?hs(e,$):y}
          ${a==="mappings"?$s(e,g):y}
          ${a==="notifications"?As(e,v):y}
          ${a==="engine"?Es(e,m):y}
          
          <!-- Modals -->
          ${n?xs(e):y}
          ${l?ys(e):y}
          ${i?Ss(e):y}
          ${u?ws(e):y}
          ${d?ks(e):y}
        </div>
      `}}}const Q=Le(Ae),_s={overview:os(),pipeline:ss(),tools:cs(),views:us(),incidents:vs(),gitops:gs(),settings:Ts()};let R=null;function ae(){var s,o,a,r;const{current:e}=Q.store.get();R&&R.id!==e.id&&((o=(s=R.instance).unmount)==null||o.call(s),R=null),!R&&e&&(R={id:e.id,instance:_s[e.id]},(r=(a=R.instance).mount)==null||r.call(a,ae));const t=R?R.instance.view():"";Ne(Dt({routerStore:Q.store.get(),routes:Ae,router:Q,pageContent:t}),document.getElementById("app"))}Q.store.subscribe(ae);X.store.subscribe(ae);ae();
