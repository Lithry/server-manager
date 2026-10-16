import{j as at,E as ot,w as D,b as u,A as $,D as rt}from"./vendor-LJTP5CNr.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function nt(){const e=new Map;return{on(a,t){return e.has(a)||e.set(a,new Set),e.get(a).add(t),()=>e.get(a).delete(t)},emit(a,t){if(e.has(a))for(const n of e.get(a))n(t)}}}function de(e){let a=e;const t=new Set;return{get:()=>a,set:n=>{a=typeof n=="function"?n(a):n;for(const s of t)s(a)},subscribe:n=>(t.add(n),()=>t.delete(n))}}function it(e){const a=de({current:null,params:{}});let t=null;async function n(s){const r=window.location.hash.slice(1)||"/";if(t&&a.get().current&&a.get().current.path!==r&&!await t(r)){window.removeEventListener("hashchange",n),window.location.hash=a.get().current.path,setTimeout(()=>window.addEventListener("hashchange",n),0);return}const i=e.find(d=>d.path===r)||e[0];a.set({current:i,params:{}})}return window.addEventListener("hashchange",n),n(),{store:a,navigate(s){window.location.hash=s},setBeforeNavigateHook(s){t=s}}}const Ye=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke={CHILD:2},We=e=>(...a)=>({_$litDirective$:e,values:a});let Je=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,t,n){this._$Ct=a,this._$AM=t,this._$Ci=n}_$AS(a,t){return this.update(a,t)}update(a,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:lt}=at,je=e=>e,ct=e=>e.strings===void 0,Ue=()=>document.createComment(""),me=(e,a,t)=>{var r;const n=e._$AA.parentNode,s=a===void 0?e._$AB:a._$AA;if(t===void 0){const i=n.insertBefore(Ue(),s),d=n.insertBefore(Ue(),s);t=new lt(i,d,e,e.options)}else{const i=t._$AB.nextSibling,d=t._$AM,o=d!==e;if(o){let c;(r=t._$AQ)==null||r.call(t,e),t._$AM=e,t._$AP!==void 0&&(c=e._$AU)!==d._$AU&&t._$AP(c)}if(i!==s||o){let c=t._$AA;for(;c!==i;){const l=je(c).nextSibling;je(n).insertBefore(c,s),c=l}}}return t},ae=(e,a,t=e)=>(e._$AI(a,t),e),dt={},ut=(e,a=dt)=>e._$AH=a,pt=e=>e._$AH,Te=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(e,a,t)=>{const n=new Map;for(let s=a;s<=t;s++)n.set(e[s],s);return n},Xe=We(class extends Je{constructor(e){if(super(e),e.type!==Ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,a,t){let n;t===void 0?t=a:a!==void 0&&(n=a);const s=[],r=[];let i=0;for(const d of e)s[i]=n?n(d,i):i,r[i]=t(d,i),i++;return{values:r,keys:s}}render(e,a,t){return this.dt(e,a,t).values}update(e,[a,t,n]){const s=pt(e),{values:r,keys:i}=this.dt(a,t,n);if(!Array.isArray(s))return this.ut=i,r;const d=this.ut??(this.ut=[]),o=[];let c,l,f=0,g=s.length-1,p=0,m=r.length-1;for(;f<=g&&p<=m;)if(s[f]===null)f++;else if(s[g]===null)g--;else if(d[f]===i[p])o[p]=ae(s[f],r[p]),f++,p++;else if(d[g]===i[m])o[m]=ae(s[g],r[m]),g--,m--;else if(d[f]===i[m])o[m]=ae(s[f],r[m]),me(e,o[m+1],s[f]),f++,m--;else if(d[g]===i[p])o[p]=ae(s[g],r[p]),me(e,s[f],s[g]),g--,p++;else if(c===void 0&&(c=Ve(i,p,m),l=Ve(d,f,g)),c.has(d[f]))if(c.has(d[g])){const v=l.get(i[p]),b=v!==void 0?s[v]:null;if(b===null){const y=me(e,s[f]);ae(y,r[p]),o[p]=y}else o[p]=ae(b,r[p]),me(e,s[f],b),s[v]=null;p++}else Te(s[g]),g--;else Te(s[f]),f++;for(;p<=m;){const v=me(e,o[m+1]);ae(v,r[p]),o[p++]=v}for(;f<=g;){const v=s[f++];v!==null&&Te(v)}return this.ut=i,ut(e,o),ot}}),mt={x:D`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:D`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:D`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:D`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:D`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:D`<polyline points="20 6 9 17 4 12"></polyline>`,tool:D`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:D`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":D`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:D`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:D`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:D`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:D`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:D`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:D`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:D`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:D`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:D`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":D`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:D`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`};function ne({name:e,size:a=16,label:t}){const n=mt[e];return n?u`<svg 
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
    ${n}
  </svg>`:u`<span style="width:${a}px; height:${a}px; display:inline-block; background:red;"></span>`}const vt="-FyYHK",gt="hQIh8E",ft="vjCp9N",bt="aWcKCO",yt="XdvXnE",xt="Yr8TTV",ht="yefrc2",$t="UnbUQg",Et="z6Wtj-",_t="WEwa7u",wt="rr8RRm",kt="_8nqxsa",St="EMU1IN",At="erzuUm",It="IX2naX",Tt="UuwGh4",Ct="HRKVqM",P={sidebar:vt,brand:gt,logo:ft,title:bt,nav:yt,navItem:xt,sidebarFooter:ht,toggleBtn:$t,toggleText:Et,footerDetails:_t,statusWrapper:wt,statusDot:kt,branchBox:St,expanded:At,brandText:It,statusText:Tt,commitText:Ct},V=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),Mt=new Set([502,503,504]);function Ot(e){const a=e&&typeof e=="object"?e.detail:null;return typeof a=="string"?a:Array.isArray(a)?a.map(t=>`${(t.loc??[]).slice(1).join(".")||"body"}: ${t.msg}`).join("; "):null}class ie extends Error{constructor(a,{code:t,status:n=0,detail:s=null,cause:r}={}){super(a,{cause:r}),this.name="ApiError",this.code=t,this.status=n,this.detail=s}get retryable(){return this.code===V.NETWORK||this.code===V.TIMEOUT||this.code===V.HTTP&&Mt.has(this.status)}get userMessage(){switch(this.code){case V.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case V.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case V.ABORTED:return"";case V.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const Rt=new Set(["GET","HEAD"]),Nt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function Dt(e={}){const a={...Nt,...e},t=e.fetchImpl??((...m)=>globalThis.fetch(...m)),n={request:[],response:[],error:[]},s=new Map,r=()=>new ie("Request aborted",{code:V.ABORTED}),i=(m,v)=>{const b=new URLSearchParams;for(const[_,E]of Object.entries(v??{}))E!=null&&E!==""&&b.set(_,String(E));const y=b.toString();return`${a.baseUrl}${m}${y?"?"+y:""}`};async function d(m){if(m.status===204)return null;const v=m.headers.get("content-type")??"";try{return v.includes("application/json")?await m.json():await m.text()}catch(b){throw new ie("Malformed response body",{code:V.PARSE,status:m.status,cause:b})}}async function o(m,v,b){const y=AbortSignal.timeout(b),_=v?AbortSignal.any([v,y]):y;let E;try{E=await t(m.url,{method:m.method,headers:m.headers,body:m.body,signal:_})}catch(R){throw y.aborted?new ie(`Request timed out after ${b} ms`,{code:V.TIMEOUT,cause:R}):v!=null&&v.aborted?r():new ie("Network request failed",{code:V.NETWORK,cause:R})}const S=await d(E);if(!E.ok)throw new ie(Ot(S)??`HTTP ${E.status}`,{code:V.HTTP,status:E.status,detail:S});return{status:E.status,data:S,headers:E.headers}}const c=(m,v)=>new Promise((b,y)=>{const _=setTimeout(b,m);v==null||v.addEventListener("abort",()=>{clearTimeout(_),y(r())},{once:!0})}),l=m=>Math.random()*Math.min(a.retryMaxMs,a.retryBaseMs*2**m);async function f(m,{signal:v,timeoutMs:b,retries:y}){for(let _=0;;_+=1)try{return await o(m,v,b)}catch(E){if(!(E instanceof ie)||!E.retryable||_>=y)throw E;await c(l(_),v)}}function g(m,v,b){let y=s.get(m);if(!y){const _=new AbortController,E={controller:_,refs:0,promise:null};E.promise=v(_.signal).finally(()=>{s.get(m)===E&&s.delete(m)}),E.promise.catch(()=>{}),s.set(m,E),y=E}return y.refs+=1,new Promise((_,E)=>{const S=()=>{y.refs-=1,y.refs===0&&(s.get(m)===y&&s.delete(m),y.controller.abort()),E(r())};if(b!=null&&b.aborted){S();return}b==null||b.addEventListener("abort",S,{once:!0}),y.promise.then(R=>{b==null||b.removeEventListener("abort",S),_(R)},R=>{b==null||b.removeEventListener("abort",S),E(R)})})}async function p(m,v,b={}){const{query:y,body:_,headers:E={},signal:S,meta:R={}}=b,L=b.timeoutMs??a.timeoutMs,A=b.retries??(Rt.has(m)?a.retries:0),M=b.dedupe??m==="GET";let w={method:m,url:i(v,y),headers:{Accept:"application/json",...E},body:void 0,meta:R};_!==void 0&&(w.body=JSON.stringify(_),w.headers["Content-Type"]="application/json");for(const W of n.request)w=await W(w);const N=async W=>{try{let J=await f(w,{signal:W,timeoutMs:L,retries:A});for(const H of n.response)J=await H(J,w);return J.data}catch(J){let H=J;for(const Z of n.error)H=await Z(H,w)??H;throw H}};return M?g(`${w.method} ${w.url}`,N,S):N(S)}return{get:(m,v)=>p("GET",m,v),post:(m,v,b)=>p("POST",m,{...b,body:v}),put:(m,v,b)=>p("PUT",m,{...b,body:v}),delete:(m,v)=>p("DELETE",m,v),use({request:m,response:v,error:b}){m&&n.request.push(m),v&&n.response.push(v),b&&n.error.push(b)}}}const Ce=()=>{};function Pt(e,a){return a?new Promise((t,n)=>{const s=()=>n(new DOMException("Aborted","AbortError"));if(a.aborted){s();return}a.addEventListener("abort",s,{once:!0}),e.then(t,n).finally(()=>a.removeEventListener("abort",s))}):e}const De=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([n],[s])=>n<s?-1:1)):t),Lt=(e,a)=>a.every((t,n)=>n<e.length&&De(t)===De(e[n]));function zt({now:e=()=>Date.now(),gcMs:a=5*6e4}={}){const t=new Map,n=o=>Object.freeze({status:o.status,data:o.data,error:o.error,isFetching:!!o.promise,updatedAt:o.updatedAt});function s(o){const c=De(o);let l=t.get(c);return l||(l={keyParts:o,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},l.snapshot=n(l),t.set(c,l)),l}function r(o){o.snapshot=n(o);for(const c of[...o.listeners])c(o.snapshot)}function i(){for(const[o,c]of t)c.listeners.size===0&&!c.promise&&c.updatedAt&&e()-c.updatedAt>a&&t.delete(o)}function d(o){return o.promise||(o.invalidated=!1,o.status==="idle"&&(o.status="loading"),o.promise=Promise.resolve().then(()=>o.fetcher()).then(c=>(Object.assign(o,{data:c,error:null,status:"success",updatedAt:e()}),c),c=>{throw Object.assign(o,{error:c,status:"error"}),c}).finally(()=>{o.promise=null,r(o),o.invalidated&&o.listeners.size>0&&d(o).catch(Ce)}),o.promise.catch(Ce),r(o)),o.promise}return{load(o,c,{staleMs:l=0,signal:f}={}){i();const g=s(o);g.fetcher=c;const p=g.status==="success"&&!g.invalidated&&e()-g.updatedAt<l;return Pt(p?Promise.resolve(g.data):d(g),f)},read:o=>s(o).snapshot,subscribe(o,c){const l=s(o);return l.listeners.add(c),c(l.snapshot),()=>{l.listeners.delete(c)}},invalidate(o){for(const c of t.values())Lt(c.keyParts,o)&&(c.invalidated=!0,r(c),c.listeners.size>0&&c.fetcher&&d(c).catch(Ce))},setData(o,c){const l=s(o),f={data:l.data,status:l.status,updatedAt:l.updatedAt},g=typeof c=="function"?c(l.data):c;return Object.assign(l,{data:g,status:"success",updatedAt:e()}),r(l),function(){l.data===g&&(Object.assign(l,f),r(l))}},set(o,c){return this.setData(o,typeof c=="function"?c:()=>c)}}}function Bt(e,{mutationFn:a,optimistic:t,invalidates:n=[]}){return async function(r){const i=((t==null?void 0:t(r))??[]).map(({key:d,update:o})=>e.setData(d,o));try{const d=await a(r);return(typeof n=="function"?n(r,d):n).forEach(c=>e.invalidate(c)),d}catch(d){throw i.reverse().forEach(o=>o()),d}}}const le={},Ft=nt(),T=Dt({baseUrl:(le==null?void 0:le.VITE_API_BASE)??"",timeoutMs:Number((le==null?void 0:le.VITE_HTTP_TIMEOUT_MS)??1e4)}),h=zt();T.use({error:e=>((e==null?void 0:e.status)===401&&Ft.emit("auth:required",e),e)});const ye={all:["overview"]},Qe={getOverview:e=>h.load(ye.all,()=>T.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let Ee=!1;function jt(){Ee=!Ee;const e=document.getElementById("app-sidebar");e&&(Ee?e.classList.add(P.expanded):e.classList.remove(P.expanded))}function Ut({routes:e,activeId:a,onNavigate:t}){var d,o,c,l,f,g,p,m,v;const n=h.read(ye.all),s=((o=(d=n==null?void 0:n.data)==null?void 0:d.gitops)==null?void 0:o.commit)||((l=(c=n==null?void 0:n.data)==null?void 0:c.telemetry)==null?void 0:l.short_commit)||"-",r=((g=(f=n==null?void 0:n.data)==null?void 0:f.gitops)==null?void 0:g.branch)||((m=(p=n==null?void 0:n.data)==null?void 0:p.telemetry)==null?void 0:m.branch)||"-",i=(v=n==null?void 0:n.data)!=null&&v.version?n.data.version.startsWith("v")?n.data.version:`v${n.data.version}`:"...";return u`<aside id="app-sidebar" class="${P.sidebar} ${Ee?P.expanded:""}">
    <div class=${P.brand}>
      <div class=${P.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${P.brandText}>
        <div class=${P.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${i}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${P.nav}>
      ${Xe(e,b=>b.id,b=>u`
        <button class=${P.navItem} aria-current=${b.id===a?"page":"false"}
          @click=${()=>t(b.path)}>
          ${ne({name:b.icon,size:16})}
          <span>${b.title}</span>
        </button>
      `)}
    </nav>
    <div class=${P.sidebarFooter}>
      <button class=${P.toggleBtn} @click=${jt}>
        ${ne({name:"menu",size:16})}
        <span class=${P.toggleText}>Collapse Menu</span>
      </button>
      <div class=${P.footerDetails}>
        <div class=${P.statusWrapper}>
          <div class=${P.statusDot}></div>
          <span class=${P.statusText}>Manager Online</span>
        </div>
        <div class=${P.branchBox}>
          <span style="color: var(--color-accent);">${r}</span>
          <span class=${P.commitText}>${s}</span>
        </div>
      </div>
    </div>
  </aside>`}const Vt="MFUTlq",Gt="kBMrej",Me={topbar:Vt,title:Gt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=e=>e??$;function ce(...e){return e.filter(Boolean).join(" ")}function qt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function Ht(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Yt="PSMDQ2",Kt={spinner:Yt};function Wt({size:e=16}={}){return u`<svg class=${Kt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Jt="vZLpx0",ve={btn:Jt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function x({label:e,variant:a="secondary",size:t="md",icon:n,iconOnly:s=!1,ariaLabel:r,loading:i=!1,disabled:d=!1,type:o="button",id:c,onClick:l}){const f=ce(ve.btn,ve[`btn--${a}`],ve[`btn--${t}`],s&&ve["btn--icon-only"]);return u`<button id=${Ge(c)} class=${f} type=${o}
    aria-label=${Ge(r)} aria-busy=${i?"true":"false"}
    ?disabled=${d||i} @click=${l}>
    ${i?Wt():n?ne({name:n,size:t==="sm"?14:16}):$}
    ${s?$:u`<span class=${ve.btn__label}>${e}</span>`}
  </button>`}const Xt=({icon:e,ariaLabel:a,...t})=>x({...t,icon:e,ariaLabel:a,iconOnly:!0,variant:t.variant??"ghost"});function Qt({title:e}){return u`<header class=${Me.topbar}>
    <h1 class=${Me.title}>${e}</h1>
    <div class=${Me.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${x({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{h.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function Zt(){const e=de({stack:[]});let a=0;function t(s){return new Promise(r=>{const i=`modal-${a+=1}`;let d=!1;const o=c=>{d||(d=!0,e.set(l=>({stack:l.stack.filter(f=>f.id!==i)})),r(c))};e.set(c=>({stack:[...c.stack,{id:i,view:()=>s({close:o,id:i})}]}))})}return{open:t,refresh:()=>e.set(s=>({stack:[...s.stack]})),store:e}}const es=Zt(),we=es;function ts(){const{stack:e}=we.store.get();return u`<div id="modal-root">${e.map(a=>a.view())}</div>`}const ss="sCMZyq",as="Fk5OML",os="_0AKuiv",Oe={layout:ss,mainContent:as,page:os};function rs({routerStore:e,routes:a,router:t,pageContent:n}){const{current:s}=e;return u`<div class=${Oe.layout}>
    ${Ut({routes:a,activeId:s==null?void 0:s.id,onNavigate:t.navigate})}
    <div class=${Oe.mainContent}>
      ${Qt({title:(s==null?void 0:s.pageTitle)||(s==null?void 0:s.title)||""})}
      <main class=${Oe.page}>
        ${n}
      </main>
    </div>
    ${ts()}
  </div>`}const ns="fuSbcq",is="fu9t4u",ls="elFvvy",cs="_2Hu4ZP",ds="r2dRuM",us="AjfFun",U={table:ns,table__scroll:is,table__grid:ls,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:cs,table__skeleton:ds,table__stale:us};function Se({id:e,caption:a,columns:t,snapshot:n,getRows:s=l=>Array.isArray(l)?l:(l==null?void 0:l.items)??[],rowKey:r=(l,f)=>f,emptyMessage:i="No records found.",onRetry:d,footer:o=$,fallbackColumns:c=[]}){const{status:l,data:f,error:g,isFetching:p}=n,m=f!==void 0,v=typeof t=="function"?m?t(f):c:t,b=Math.max(v.length,1),y=m?s(f):[],_=(S,R)=>u`<td class=${ce(S.align==="end"&&U["table__cell--end"],S.align==="center"&&U["table__cell--center"],S.mono&&U["table__cell--mono"])}>
    ${S.render?S.render(R):Ht(R[S.key])}</td>`;let E;return!m&&(l==="idle"||l==="loading")?E=Array.from({length:5},()=>u`<tr aria-hidden="true">${v.map(()=>u`<td><span class=${U.table__skeleton}></span></td>`)}</tr>`):m?y.length===0?E=u`<tr><td colspan=${b} class=${U.table__message}>${i}</td></tr>`:E=Xe(y,r,S=>u`<tr>${v.map(R=>_(R,S))}</tr>`):E=u`<tr><td colspan=${b} class=${U.table__message} role="alert">
      ${(g==null?void 0:g.userMessage)||(g==null?void 0:g.message)||"Failed to load data."}
      ${d?x({label:"Retry",icon:"refresh",size:"sm",onClick:d}):$}</td></tr>`,u`<div class=${U.table}>
    ${l==="error"&&m?u`<div class=${U.table__stale} role="status">Showing cached data. ${(g==null?void 0:g.userMessage)??""} ${d?x({label:"Retry",size:"sm",variant:"ghost",onClick:d}):$}</div>`:$}
    <div class=${U.table__scroll} aria-busy=${p?"true":"false"}>
      <table id=${e??$} class=${U.table__grid}>
        ${a?u`<caption class="u-sr-only">${a}</caption>`:$}
        <thead><tr>${v.map(S=>u`<th scope="col" class=${ce(S.align==="end"&&U["table__cell--end"],S.align==="center"&&U["table__cell--center"])}>${S.header}</th>`)}</tr></thead>
        <tbody>${E}</tbody>
      </table>
    </div>
    ${o}
  </div>`}const be={all:["pipeline"],columns:["pipeline","columns"]};let K={limit:50,offset:0};const G={getPipeline:(e={},a={})=>{const{dedupe:t,staleMs:n,signal:s,...r}=e,i={...t!==void 0?{dedupe:t}:{},...n!==void 0?{staleMs:n}:{},...s!==void 0?{signal:s}:{},...a};return K={...K,...r},(K.stage===""||K.stage===null)&&delete K.stage,(K.status===""||K.status===null)&&delete K.status,h.load(be.all,()=>T.get("/api/v1/pipeline",{query:K,dedupe:!1}),{dedupe:!1,...i})},getCurrentParams:()=>({...K}),getColumns:e=>h.load(be.columns,()=>T.get("/api/v1/pipeline/columns"),e)},ps="_0BpBt1",se={badge:ps,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2","badge--bool":"FpUTU-","badge--bool-true":"_8izwGO","badge--bool-false":"_5AzcWm"};function _e({label:e,tone:a="neutral",mono:t=!1,uppercase:n=!1}){const s=ce(se.badge,se[`badge--${a}`],t&&se["badge--mono"],n&&se["badge--uppercase"]);return u`<span class=${s}>${e}</span>`}function ms({value:e}){if(e==null||e==="")return u`<span class="u-text-muted">-</span>`;const a=e===1||e==="1"||e===!0||String(e).toLowerCase()==="true";return u`<span class=${ce(se.badge,se["badge--bool"],a?se["badge--bool-true"]:se["badge--bool-false"])}>${a?"TRUE":"FALSE"}</span>`}const vs=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","CREATED_AT","LAST_UPDATED"]);function gs(e){if(!e||!e.columns)return[];const a=(e==null?void 0:e.column_types)||{};return e.columns.map(t=>{const n=t.toUpperCase(),s=(a[t]||a[n]||"").toUpperCase(),r=vs.has(n),i=s.includes("INT"),d=s.includes("BOOL"),o=r||i||d?"center":void 0;return{key:t,header:n,align:o,render:c=>{const l=c[t];return l==null||l===""?u`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`:d?ms({value:l}):u`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${o==="center"?"text-align: center;":""}" title=${l}>${l}</span>`}}})}function fs(){return{view(){var l,f,g,p;const e=h.read(be.all),a=((l=e.data)==null?void 0:l.items)??[],t=((f=e.data)==null?void 0:f.total)??a.length,n=((g=e.data)==null?void 0:g.limit)??50,s=((p=e.data)==null?void 0:p.offset)??0,r=t===0?0:s+1,i=Math.min(s+a.length,t),d=s>0,o=s+n<t,c=u`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${r}-${i} of ${t} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(n)}
                ?disabled=${e.isFetching}
                @change=${m=>{const v=Number(m.target.value);G.getPipeline({limit:v,offset:0})}}
              >
                <option value="50" ?selected=${n===50}>50</option>
                <option value="100" ?selected=${n===100}>100</option>
                <option value="200" ?selected=${n===200}>200</option>
                <option value="500" ?selected=${n===500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${x({label:"Previous",size:"sm",variant:"secondary",disabled:!d||e.isFetching,onClick:()=>G.getPipeline({offset:Math.max(0,s-n)})})}
              ${x({label:"Next",size:"sm",variant:"secondary",disabled:!o||e.isFetching,onClick:()=>G.getPipeline({offset:s+n})})}
            </div>
          </div>
        </div>
      `;return Se({id:"pipeline-table",snapshot:e,columns:m=>gs(m),getRows:m=>(m==null?void 0:m.items)??[],rowKey:(m,v)=>m.ID??m.id??v,onRetry:()=>G.getPipeline(),footer:c})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(e,a)=>{var n;const t=e._$AN;if(t===void 0)return!1;for(const s of t)(n=s._$AO)==null||n.call(s,a,!1),ge(s,a);return!0},ke=e=>{let a,t;do{if((a=e._$AM)===void 0)break;t=a._$AN,t.delete(e),e=a}while((t==null?void 0:t.size)===0)},Ze=e=>{for(let a;a=e._$AM;e=a){let t=a._$AN;if(t===void 0)a._$AN=t=new Set;else if(t.has(e))break;t.add(e),xs(a)}};function bs(e){this._$AN!==void 0?(ke(this),this._$AM=e,Ze(this)):this._$AM=e}function ys(e,a=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(a)if(Array.isArray(n))for(let r=t;r<n.length;r++)ge(n[r],!1),ke(n[r]);else n!=null&&(ge(n,!1),ke(n));else ge(this,e)}const xs=e=>{e.type==Ke.CHILD&&(e._$AP??(e._$AP=ys),e._$AQ??(e._$AQ=bs))};class hs extends Je{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,t,n){super._$AT(a,t,n),Ze(this),this.isConnected=a._$AU}_$AO(a,t=!0){var n,s;a!==this.isConnected&&(this.isConnected=a,a?(n=this.reconnected)==null||n.call(this):(s=this.disconnected)==null||s.call(this)),t&&(ge(this,a),ke(this))}setValue(a){if(ct(this._$Ct))this._$Ct._$AI(a,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=a,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Re=new WeakMap,$s=We(class extends hs{render(e){return $}update(e,[a]){var n;const t=a!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=a,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),$}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const a=this.ht??globalThis;let t=Re.get(a);t===void 0&&(t=new WeakMap,Re.set(a,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,a;return typeof this.G=="function"?(e=Re.get(this.ht??globalThis))==null?void 0:e.get(this.G):(a=this.G)==null?void 0:a.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Es="_9lH80h",_s="_91-Xo5",ws="SEYdJQ",ks="CRt7-E",Ss="gj4qUB",As="hUDIR7",oe={modal:Es,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:_s,modal__header:ws,modal__title:ks,modal__body:Ss,modal__footer:As};function Q({title:e,size:a="md",body:t,footer:n=$,onClose:s,dismissible:r=!0}){const i=qt("modal-title"),d=l=>{l&&!l.open&&requestAnimationFrame(()=>{!l.open&&l.isConnected&&l.showModal()})},o=l=>{l.preventDefault(),r&&s(void 0)},c=l=>{r&&l.target===l.currentTarget&&s(void 0)};return u`<dialog class=${ce(oe.modal,oe[`modal--${a}`])} aria-labelledby=${i}
      ${$s(d)} @cancel=${o} @click=${c}>
    <div class=${oe.modal__panel}>
      <header class=${oe.modal__header}>
        <h2 id=${i} class=${oe.modal__title}>${e}</h2>
        ${r?Xt({icon:"x",ariaLabel:"Close dialog",onClick:()=>s(void 0)}):$}
      </header>
      <div class=${oe.modal__body}>${t}</div>
      ${n!==$?u`<footer class=${oe.modal__footer}>${n}</footer>`:$}
    </div>
  </dialog>`}function xe({title:e,message:a,tone:t="danger",confirmLabel:n="Confirm",requireText:s}){return new Promise(r=>{let i="";""+Math.random().toString(36).substring(2);const d=()=>{we.open(({close:c})=>Q({title:e,body:u`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${a}</p>
            ${s?u`
              <p class="u-text-sm u-text-muted">Type <strong>${s}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${l=>{i=l.target.value,o()}} />
            `:""}
          </div>
        `,footer:u`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${x({label:"Cancel",variant:"ghost",onClick:()=>{c(),r(!1)}})}
            ${x({label:n,variant:t==="danger"?"delete":"add",disabled:s?i!==s:!1,onClick:()=>{c(),r(!0)}})}
          </div>
        `,onClose:()=>{c(),r(!1)}}))};function o(){we.refresh()}d()})}function Is(e){const a=e.get(),t=()=>{e.set(c=>({...c,isManageColumnsModalOpen:!1}))},n=c=>{if(c===0)return;const l=[...a.columnsData],f=l[c-1];l[c-1]=l[c],l[c]=f,e.set(g=>({...g,columnsData:l}))},s=c=>{if(c===a.columnsData.length-1)return;const l=[...a.columnsData],f=l[c+1];l[c+1]=l[c],l[c]=f,e.set(g=>({...g,columnsData:l}))},r=async()=>{const c=a.columnsData.map(l=>l.name);try{await T.put("/api/v1/pipeline/columns/order",{column_order:c}),e.set(l=>({...l,isManageColumnsModalOpen:!1})),G.getPipeline()}catch(l){alert("Failed to save column order: "+l.message)}},i=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await T.post("/api/v1/pipeline/columns/prune");const c=await T.get("/api/v1/pipeline/columns");e.set(l=>({...l,columnsData:c})),G.getPipeline()}catch(c){alert("Failed to prune columns: "+c.message)}},d=u`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${a.isLoadingColumns?u`<div class="u-text-center u-p-4">Loading columns...</div>`:$}
    
    ${!a.isLoadingColumns&&a.columnsData?u`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${a.columnsData.map((c,l)=>{const f=c.is_system;return u`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${f?"var(--color-accent)":"var(--color-text)"};">${c.name}</span>
                <span class="u-text-xs u-text-muted">${c.type}</span>
                ${c.is_deprecated?u`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:$}
                ${f?u`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:$}
              </div>
              
              <div class="u-flex u-gap-1">
                ${x({label:"▲",variant:"ghost",size:"sm",disabled:f||l>0&&a.columnsData[l-1].is_system,onClick:()=>n(l)})}
                ${x({label:"▼",variant:"ghost",size:"sm",disabled:f||l===a.columnsData.length-1,onClick:()=>s(l)})}
              </div>
            </div>
          `})}
      </div>
    `:$}
  `,o=u`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${x({label:"Prune Deprecated",variant:"delete",onClick:i})}
      </div>
      <div class="u-flex u-gap-2">
        ${x({label:"Cancel",variant:"secondary",onClick:t})}
        ${x({label:"Save Order",variant:"save",onClick:r})}
      </div>
    </div>
  `;return Q({title:"Manage Columns",size:"md",onClose:t,body:d,footer:o})}function Ts(){const e=de({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),a=fs();let t,n;async function s(){if(await xe({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await T.post("/api/v1/pipeline/purge"),G.getPipeline({offset:0})}catch(i){alert("Error purging pipeline: "+i.message)}}return{mount(r){t=h.subscribe(be.all,()=>r()),n=e.subscribe(()=>r()),G.getPipeline()},unmount(){t&&t(),n&&n()},view(){var f,g;const r=h.read(be.all),i=((f=r.data)==null?void 0:f.available_stages)??[],d=((g=r.data)==null?void 0:g.available_statuses)??[],o=G.getCurrentParams(),c=o.stage||"",l=o.status||"";return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${x({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${x({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(p=>({...p,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const p=await T.get("/api/v1/pipeline/columns");e.set(m=>({...m,columnsData:p,isLoadingColumns:!1}))}catch(p){alert("Error loading columns: "+p.message),e.set(m=>({...m,isLoadingColumns:!1}))}}})}
              ${x({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div class="u-flex u-gap-2">
              ${x({label:"Sync Now",variant:"secondary",size:"sm",icon:"refresh",onClick:async()=>{try{await T.post("/api/v1/settings/scheduler/restart"),setTimeout(()=>G.getPipeline({offset:0}),1200)}catch(p){alert("Error triggering sync: "+p.message)}}})}
              ${x({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:s})}
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
          ${a.view()}
          
          ${e.get().isManageColumnsModalOpen?Is(e):$}
        </div>
      `}}}function Cs(){return{view(){var c,l,f;const{status:e,data:a,error:t}=h.read(ye.all);if(e==="error")return u`<div class="u-text-danger">${t.message}</div>`;if(e==="loading"||!a)return u`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const n=a.pipeline_total_items||0,s=a.active_incidents||0,r=a.registered_services||0,i=((c=a.telemetry)==null?void 0:c.branch)||"main",d=((l=a.telemetry)==null?void 0:l.clean)!==!1,o=(g,p,m,v,b="u-text-accent")=>u`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${g}</span>
            <span class="${b}">${ne({name:v,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${p}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${m}>${m}</div>
          </div>
        </div>
      `;return u`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${o("Pipeline Items",n,"Items tracked in universal pipeline","package","u-text-accent")}
            ${o("Active Incidents",s,s>0?`${s} critical anomalies`:"0 critical anomalies","alert",(s>0,"u-text-danger"))}
            ${o("Active Services",r,"Configured upstream services","play","u-text-success")}
            ${o("GitOps Status",i,d?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(f=a.stages)!=null&&f.length?a.stages.map(g=>u`
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
      `}}}function Ms(){const e=Cs();let a;return{mount(t){a=h.subscribe(ye.all,()=>t()),Qe.getOverview()},unmount(){a&&a()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const Pe={all:["tools"]},Os={getTools:e=>h.load(Pe.all,()=>T.get("/api/v1/tools"),e)},Rs="cg2FU3",Ns="Jh4yC3",qe={console:Rs,output:Ns};function Ds({text:e,status:a="idle"}){return u`
    <div class=${qe.console}>
      <pre class=${qe.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function Ps(){const e=de({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let a,t;const n=async s=>{e.set(r=>({...r,executionStatus:"running",output:`Executing...
`}));try{const r=await T.post(`/api/v1/tools/${encodeURIComponent(s.name)}/run`);e.set(i=>({...i,executionStatus:"success",output:i.output+`
`+JSON.stringify(r,null,2)}))}catch(r){e.set(i=>({...i,executionStatus:"error",output:i.output+`
ERROR: `+r.message}))}};return{mount(s){a=h.subscribe(Pe.all,()=>s()),t=e.subscribe(()=>s()),Os.getTools()},unmount(){a&&a(),t&&t()},view(){const{status:s,data:r,error:i,isFetching:d}=h.read(Pe.all),o=e.get(),c=Array.isArray(r)?r:(r==null?void 0:r.items)??[];return u`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${s==="loading"&&!r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:$}
              ${s==="error"&&!r?u`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${i==null?void 0:i.message}</div>`:$}
              ${c.length===0&&r?u`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:$}
              
              ${c.map(l=>{var f,g,p;return u`
                <button 
                  class="u-text-left"
                  style="background: ${((f=o.selectedTool)==null?void 0:f.name)===l.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((g=o.selectedTool)==null?void 0:g.name)===l.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(m=>({...m,selectedTool:l,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((p=o.selectedTool)==null?void 0:p.name)===l.name?"u-text-accent":""}">${l.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${l.description}>${l.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${o.selectedTool,"Select a tool to execute"}</h3>
              ${x({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!o.selectedTool||o.executionStatus==="running",loading:o.executionStatus==="running",onClick:()=>n(o.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${Ds({text:o.output,status:o.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const ze={all:["views"]},et={getViews:e=>h.load(ze.all,()=>T.get("/api/v1/views"),e)};function Ls(){return{view(){var t;const e=h.read(ze.all),a=Array.isArray(e.data)?e.data:((t=e.data)==null?void 0:t.items)??[];return!a.length&&e.status!=="loading"?u`
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
        `:Se({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>a,onRetry:()=>et.getViews()})}}}function zs(){const e=Ls();let a;return{mount(t){a=h.subscribe(ze.all,()=>t()),et.getViews()},unmount(){a&&a()},view(){return u`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${x({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const q={all:["incidents"],list:e=>[...q.all,e?"resolved":"active"],catalog:["incidents","catalog"]},re={getIncidents:(e,a)=>h.load(q.list(e),()=>T.get("/api/v1/incidents",{query:{resolved:e?1:0}}),a),resolveIncident:(e,a)=>T.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:a||""}),createIncident:e=>T.post("/api/v1/incidents",e),getCatalog:e=>h.load(q.catalog,()=>T.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>T.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>T.delete(`/api/v1/incidents/catalog/errors/${e}`)};function He({resolved:e}){const a=Bt(h,{mutationFn:s=>re.resolveIncident(s.id,s.note),invalidates:[q.all]});async function t(s){const r=prompt("Enter a resolution note (optional):","Resolved manually");if(r===null)return;if(await xe({title:"Resolve Incident",message:`Are you sure you want to mark incident #${s} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await a({id:s,note:r})}catch(d){alert("Failed to resolve incident: "+d.message)}}const n=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:s=>{const r=s.SEVERITY==="CRITICAL"?"danger":s.SEVERITY==="WARNING"?"warning":"info";return _e({label:s.SEVERITY||"INFO",tone:r})}},{key:"COMPONENT",header:"Component",render:s=>u`<strong class="u-text-sm">${s.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:s=>u`<span class="u-font-mono u-text-xs">${s.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:s=>u`<span class="u-text-sm">${s.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:s=>s.REMEDY?u`<span class="u-text-xs u-text-muted">${s.REMEDY}</span>`:$},{key:"CREATED_AT",header:"Created At",mono:!0,render:s=>u`<span class="u-text-xs u-text-muted">${s.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:s=>s.RESOLVED?u`<span class="u-text-success u-text-xs">Resolved${s.RESOLUTION_NOTE?`: ${s.RESOLUTION_NOTE}`:""}</span>`:x({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>t(s.ID)})}];return{view(){const s=h.read(q.list(e));return Se({id:`incidents-table-${e?"resolved":"active"}`,columns:n,snapshot:s,getRows:r=>(r==null?void 0:r.items)??(Array.isArray(r)?r:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function Bs({onEditError:e}={}){const a=[{key:"ERROR_CODE",header:"Code",render:t=>u`<strong class="u-text-sm u-font-mono">${t.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:t=>u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${t.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:t=>{if(t.SEVERITY==="INFO")return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`;const n=t.SEVERITY==="CRITICAL"?"danger":"warning";return u`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${n}) 20%, transparent); color: var(--color-${n}); padding: 2px 6px; border-radius: 4px;">${t.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:t=>u`<span class="u-text-sm">${t.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:t=>u`<span class="u-text-sm u-text-muted">${t.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:t=>u`<span class="u-text-sm">${t.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>x({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(t)})}];return{view(){const t=h.read(q.catalog);return Se({id:"error-catalog-table",columns:a,snapshot:t,getRows:n=>Array.isArray(n)?n:(n==null?void 0:n.value)||(n==null?void 0:n.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>re.getCatalog()})}}}function Fs({onClose:e,onIncidentCreated:a}){let t=!1;async function n(i){i.preventDefault();const d=i.target,o=d.incident_code.value.trim().toUpperCase(),c=d.severity.value,l=d.component.value.trim(),f=d.details.value.trim();if(!o||!l||!f){alert("Please fill in Code, Component, and Details.");return}t=!0;try{await re.createIncident({incident_code:o,severity:c,component:l,details:f}),h.invalidate(q.all),a==null||a(),e()}catch(g){alert("Failed to report incident: "+g.message)}finally{t=!1}}const s=u`
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
  `,r=u`
    <div class="u-flex u-gap-2 u-justify-end">
      ${x({label:"Cancel",variant:"secondary",onClick:e})}
      ${x({label:"Report Incident",variant:"save",type:"submit",loading:t,onClick:()=>{const i=document.getElementById("report-incident-form");i&&i.requestSubmit()}})}
    </div>
  `;return Q({title:"Report System Incident",size:"md",onClose:e,body:s,footer:r})}function js({onClose:e,onErrorCreated:a,initialData:t=null}){let n=!1;const s=!!(t&&t.ERROR_CODE);async function r(o){var b;o.preventDefault();const c=o.target,l=c.error_code.value.trim().toUpperCase(),f=c.category.value.trim().toUpperCase(),g=c.severity.value,p=c.description.value.trim(),m=c.trigger_condition.value.trim(),v=c.remedy.value.trim();if(!l||!f||!p){alert("Please fill in Error Code, Category, and Description.");return}if(!s){const y=h.read(q.catalog),E=(Array.isArray(y==null?void 0:y.data)?y.data:((b=y==null?void 0:y.data)==null?void 0:b.items)??[]).find(S=>S.ERROR_CODE===l);if(E&&!await xe({title:"Error Template Already Exists",message:`An error template with code '${l}' is already registered under category '${E.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}n=!0;try{await re.upsertError({error_code:l,category:f,severity:g,description:p,trigger_condition:m,remedy:v}),h.invalidate(q.catalog),a==null||a(),e()}catch(y){alert("Failed to save error template: "+y.message)}finally{n=!1}}const i=u`
    <form id="add-error-form" @submit=${r}>
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
          ${s?u`<small class="u-text-muted u-text-xs">Error code cannot be changed when editing.</small>`:""}
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
      ${x({label:s?"Update Error":"Register Error",variant:"save",type:"submit",loading:n,onClick:()=>{const o=document.getElementById("add-error-form");o&&o.requestSubmit()}})}
    </div>
  `;return Q({title:s?`Edit Error: ${t.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:i,footer:d})}function Us(){const e=de({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),a=He({resolved:!1}),t=He({resolved:!0}),n=Bs({onEditError:o=>e.set(c=>({...c,isAddErrorModalOpen:!0,editingError:o}))});let s,r,i,d;return{mount(o){s=h.subscribe(q.list(!1),()=>o()),r=h.subscribe(q.list(!0),()=>o()),i=h.subscribe(q.catalog,()=>o()),d=e.subscribe(()=>o()),re.getIncidents(!1),re.getIncidents(!0),re.getCatalog()},unmount(){s&&s(),r&&r(),i&&i(),d&&d()},view(){const{activeTab:o,isReportModalOpen:c,isAddErrorModalOpen:l,editingError:f}=e.get(),g=(p,m,v)=>{const b=o===p;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(S=>({...S,activeTab:p}))}
          >
            ${ne({name:m,size:16})}
            <span>${v}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${g("active","alert","Active Incidents")}
              ${g("resolved","check","Resolved")}
              ${g("catalog","search","Error Index Catalog")}
            </div>
            
            ${x(o==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(p=>({...p,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(p=>({...p,isReportModalOpen:!0}))})}
          </div>
          
          ${o==="active"?a.view():$}
          ${o==="resolved"?t.view():$}
          ${o==="catalog"?n.view():$}

          <!-- Modals -->
          ${c?Fs({onClose:()=>e.set(p=>({...p,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):$}

          ${l?js({onClose:()=>e.set(p=>({...p,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:f}):$}
        </div>
      `}}}const Le={all:["gitops"]},Vs={getGitOps:e=>h.load(Le.all,()=>T.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function Gs(){let e;return{mount(a){e=h.subscribe(Le.all,()=>a()),Vs.getGitOps()},unmount(){e&&e()},view(){const a=h.read(Le.all),{status:t,data:n,error:s,isFetching:r}=a;if(t==="loading"&&!n)return u`<p class="u-text-muted">Loading GitOps status...</p>`;if(t==="error"&&!n)return u`<p class="u-text-danger">Error: ${s==null?void 0:s.message}</p>`;const i=(n==null?void 0:n.telemetry)||{};return u`
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
      `}}}const I={all:["settings"]},qs={getSettings:e=>h.load(I.all,()=>T.get("/api/v1/settings"),e),saveConfig:e=>T.post("/api/v1/settings/config",e),triggerSweep:()=>T.post("/api/v1/settings/sweep"),triggerBackup:()=>T.post("/api/v1/settings/backup")};function Hs(e,a={},t=300){const n=Object.keys(a),s=()=>{e.set(i=>({...i,isServiceModalOpen:!0}))},r=(i,d,o)=>{var f;const c=((f=d.field_mappings)==null?void 0:f.length)||0,l=Object.keys(d.enrichment_endpoints||{}).join(", ");return u`
      <div style="padding: var(--space-4); border-bottom: ${o?"none":"1px solid var(--color-border)"};">
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
        ${x({label:"+ Add Service",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${n.length===0?u`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:$}
        ${n.map((i,d)=>r(i,a[i],d===n.length-1))}
      </div>
    </div>
  `}function Ys(e){var Z;const a=e.get(),t=h.read(I.all),n=((Z=t==null?void 0:t.data)==null?void 0:Z.services)||{},s=a.editingServiceId?n[a.editingServiceId]:null,r=a.serviceAllowedEvents!==void 0?a.serviceAllowedEvents:(s==null?void 0:s.allowed_event_types)||[],i=a.serviceDiscoveredEvents||[],d=a.isDiscoveringEvents||!1,o=a.discoveryEventsError||null,c=()=>{var ue,pe;const C=document.getElementById("srv-name"),k=document.getElementById("srv-id"),B=document.getElementById("srv-url"),j=document.getElementById("srv-api"),O=document.getElementById("chk-service-inherit-poll"),F=document.getElementById("srv-endpoint"),Y=document.getElementById("srv-pipeline"),ee=document.getElementById("srv-enrich"),z=document.getElementById("chk-service-enabled");return{name:C?C.value:(s==null?void 0:s.name)||"",id:k?k.value:a.editingServiceId||"",base_url:B?B.value:(s==null?void 0:s.base_url)||"",api_key:j?j.value:(s==null?void 0:s.api_key)||"",inherit_poll:O?O.checked:s?s.poll_interval_seconds==null:!0,poll_endpoint:F?F.value:(s==null?void 0:s.poll_endpoint)||(s==null?void 0:s.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pipeline_key_template:Y?Y.value:(s==null?void 0:s.pipeline_key_template)||"{service}:{id}",enrichments:ee?ee.value:s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([te,$e])=>`${te}: ${$e}`).join(`
`):"",fallback_lookup_column:(((ue=document.getElementById("srv-fallback-col"))==null?void 0:ue.value)||"").trim()||null,fallback_lookup_field:(((pe=document.getElementById("srv-fallback-field"))==null?void 0:pe.value)||"").trim()||null,enabled:z?z.checked:s?s.enabled:!0}},l=()=>{e.set(C=>({...C,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))},f=()=>{var C,k,B,j,O,F,Y,ee,z,ue,pe;try{const te=(((C=document.getElementById("srv-id"))==null?void 0:C.value)||"").trim();if(!te){alert("Service ID is required");return}const $e=(((k=document.getElementById("srv-enrich"))==null?void 0:k.value)||"").trim(),Be={};$e&&$e.split(`
`).forEach(Ae=>{const Ie=Ae.split(":");Ie.length>=2&&(Be[Ie[0].trim()]=Ie.slice(1).join(":").trim())});const st={name:(((B=document.getElementById("srv-name"))==null?void 0:B.value)||"").trim()||te,base_url:(((j=document.getElementById("srv-url"))==null?void 0:j.value)||"").trim(),api_key:(((O=document.getElementById("srv-api"))==null?void 0:O.value)||"").trim(),poll_interval_seconds:(F=document.getElementById("chk-service-inherit-poll"))!=null&&F.checked?null:60,poll_endpoint:(((Y=document.getElementById("srv-endpoint"))==null?void 0:Y.value)||"").trim(),pipeline_key_template:(((ee=document.getElementById("srv-pipeline"))==null?void 0:ee.value)||"").trim(),fallback_lookup_column:(((z=document.getElementById("srv-fallback-col"))==null?void 0:z.value)||"").trim()||null,fallback_lookup_field:(((ue=document.getElementById("srv-fallback-field"))==null?void 0:ue.value)||"").trim()||null,enrichment_endpoints:Be,enabled:((pe=document.getElementById("chk-service-enabled"))==null?void 0:pe.checked)??!0,allowed_event_types:r,field_mappings:(s==null?void 0:s.field_mappings)||[]},Fe={...n,[te]:st};a.editingServiceId&&a.editingServiceId!==te&&delete Fe[a.editingServiceId],h.setData(I.all,()=>({...t.data,services:Fe})),e.set(Ae=>({...Ae,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))}catch(te){alert("Error saving service: "+te.stack)}},g=async()=>{var j;const C=c(),k=C.id.trim(),B=C.poll_endpoint.trim()||"/api/v3/history";if(!k){alert("Service ID is required before discovering events.");return}e.set(O=>({...O,serviceModalDraft:C,isDiscoveringEvents:!0,discoveryEventsError:null}));try{const O=await T.post("/api/v1/pipeline/sample",{service_id:k,endpoint:B});if(O&&O.success===!1){e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:O.error||"Failed to discover events from API."}));return}let F=[];Array.isArray(O==null?void 0:O.sample_payload)?F=O.sample_payload:(j=O==null?void 0:O.sample_payload)!=null&&j.records&&Array.isArray(O.sample_payload.records)?F=O.sample_payload.records:O!=null&&O.sample_payload&&typeof O.sample_payload=="object"&&(F=[O.sample_payload]);const Y=new Set;for(const z of F)z&&typeof z=="object"&&(z.eventType?Y.add(String(z.eventType)):z.event_type?Y.add(String(z.event_type)):z.type&&Y.add(String(z.type)));const ee=Array.from(Y);e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,serviceDiscoveredEvents:ee,discoveryEventsError:ee.length===0?`No eventType found in sample payload (${F.length} records).`:null}))}catch(O){e.set(F=>({...F,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:O.message||"Error communicating with sample endpoint."}))}},p=C=>{const k=c();let B;r.includes(C)?B=r.filter(j=>j!==C):B=[...r,C],e.set(j=>({...j,serviceModalDraft:k,serviceAllowedEvents:B}))},m=C=>{const k=c();C==="sonarr"?(k.name=k.name||"Sonarr",k.id=k.id||"sonarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments=`episode: /api/v3/episode/{episodeId}
series: /api/v3/series/{seriesId}`):C==="radarr"?(k.name=k.name||"Radarr",k.id=k.id||"radarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments="movie: /api/v3/movie/{movieId}"):C==="jellyfin"?(k.name=k.name||"Jellyfin",k.id=k.id||"jellyfin",k.poll_endpoint="/Items?Recursive=true",k.pipeline_key_template="{service}:{Id}"):C==="shoko"&&(k.name=k.name||"Shoko",k.id=k.id||"shoko",k.poll_endpoint="/api/v3/Series",k.pipeline_key_template="{service}:{id}"),e.set(B=>({...B,serviceModalDraft:k}))},v=a.serviceModalDraft,b=v?v.name:(s==null?void 0:s.name)||"",y=v?v.id:a.editingServiceId||"",_=v?v.base_url:(s==null?void 0:s.base_url)||"",E=v?v.api_key:(s==null?void 0:s.api_key)||"",S=v?v.inherit_poll:s?s.poll_interval_seconds==null:!0,R=v?v.poll_endpoint:(s==null?void 0:s.poll_endpoint)||(s==null?void 0:s.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",L=v?v.pipeline_key_template:(s==null?void 0:s.pipeline_key_template)||"{service}:{id}",A=v?v.enrichments:s!=null&&s.enrichment_endpoints?Object.entries(s.enrichment_endpoints).map(([C,k])=>`${C}: ${k}`).join(`
`):"",M=(v==null?void 0:v.fallback_lookup_column)??((s==null?void 0:s.fallback_lookup_column)||""),w=(v==null?void 0:v.fallback_lookup_field)??((s==null?void 0:s.fallback_lookup_field)||""),N=v?v.enabled:s?s.enabled:!0,W=Array.from(new Set([...r,...i])),J=u`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${x({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>m("sonarr")})}
      ${x({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>m("radarr")})}
      ${x({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>m("jellyfin")})}
      ${x({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>m("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${b}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${y} @input=${C=>{C.target.value=C.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Auto-generated or custom identifier (lowercase, no spaces).</small>
      </div>
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Base URL</label>
        <input type="text" id="srv-url" class="form-input font-mono" placeholder="http://localhost:<port>" .value=${_}>
        <small class="u-text-muted">Use <code>http://localhost:&lt;port&gt;</code> for services on host.</small>
      </div>
      <div class="form-group">
        <label>API Key / Bearer Token</label>
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${E}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${S}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${R}>
        <small class="u-text-muted">Polled when this service is assigned to a Root Stage (e.g. <code>/api/v3/history</code> for Sonarr/Radarr).</small>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Pipeline Key Template</label>
          <input type="text" id="srv-pipeline" class="form-input font-mono" placeholder="{service}:{id}" .value=${L}>
          <small class="u-text-muted">Unique tracking identifier. Presets: <code>{service}:{id}</code> or <code>{data.path}</code></small>
        </div>
        <div class="form-group">
          <label>Secondary Enrichment Endpoints (Optional)</label>
          <textarea id="srv-enrich" class="form-input font-mono" rows="4" style="resize: none;" placeholder="episode: /api/v3/episode/{episodeId}&#10;series: /api/v3/series/{seriesId}">${A}</textarea>
          <small class="u-text-muted">Specify <code>namespace: /endpoint/{param}</code> per line to isolate attributes.</small>
        </div>
      </div>

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Fallback Match Column (Optional)</label>
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${M}>
          <small class="u-text-muted">DB column to search if primary key cannot be resolved on mutation/deletion events (e.g. <code>FILE_PATH</code>).</small>
        </div>
        <div class="form-group">
          <label>Fallback Source Field (Optional)</label>
          <input type="text" id="srv-fallback-field" class="form-input font-mono" placeholder="sourceTitle" .value=${w}>
          <small class="u-text-muted">Incoming event payload field to match against the DB column (e.g. <code>sourceTitle</code>).</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${x({label:d?"Discovering...":"Discover Events from API",variant:"secondary",size:"sm",loading:d,disabled:d,onClick:g})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        
        ${o?u`<div class="u-text-danger u-text-xs u-mb-2">${o}</div>`:$}

        ${W.length>0?u`
          <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ${W.map(C=>{const k=r.includes(C);return u`
                <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${k?"var(--color-accent)":"var(--color-border)"}; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    .checked=${k}
                    @change=${()=>p(C)}
                  >
                  <span class="font-mono u-text-xs" style="color: ${k?"var(--color-accent)":"var(--color-text)"}; font-weight: ${k?"600":"normal"};">
                    ${C}
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
      <input type="checkbox" id="chk-service-enabled" .checked=${N}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,H=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:l})}
      ${x({label:a.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:f})}
    </div>
  `;return Q({title:a.editingServiceId?"Edit Service":"Register Service",size:"lg",onClose:l,body:J,footer:H})}function Ks({checked:e=!1,onChange:a,label:t=""}){return u`
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
      <input type="checkbox" .checked=${e} @change=${n=>a(n.target.checked)}>
      <span class="slider"></span>
      ${t?u`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${t}</span>`:""}
    </label>
  `}function Ws(e,a=[]){const t=()=>{e.set(r=>({...r,isStageModalOpen:!0,editingStageId:null}))},n=(r,i)=>{const d=h.read(I.all);if(!d||!d.data)return;const o=[...d.data.stages],c=r+i;c<0||c>=o.length||([o[r],o[c]]=[o[c],o[r]],h.setData(I.all,()=>({...d.data,stages:o})),e.set(l=>({...l,isDirty:!0})))},s=r=>r.start_condition?r.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${x({label:"+ Add Stage",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${a.length===0?u`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:a.map((r,i)=>{const d=s(r);return u`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${d.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${d.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${r.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${r.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${d.bg}; color: ${d.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${d.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Ks({checked:r.enabled,label:r.enabled?"ACTIVE":"INACTIVE",onChange:o=>{const c={...h.read(I.all).data},l=c.stages.find(f=>f.id===r.id);l&&(l.enabled=o,o&&!l.start_condition&&!l.last_activated_at&&(l.last_activated_at=new Date().toISOString()),h.setData(I.all,()=>c),e.set(f=>({...f,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${x({label:"↑",variant:"ghost",size:"sm",disabled:i===0,onClick:()=>n(i,-1)})}
                      ${x({label:"↓",variant:"ghost",size:"sm",disabled:i===a.length-1,onClick:()=>n(i,1)})}
                      ${x({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(o=>({...o,isStageModalOpen:!0,editingStageId:r.id}))})}
                      ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${r.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${r.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${r.start_condition?r.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${r.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${r.complete_condition?r.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                  ${!r.start_condition&&r.last_activated_at?u`
                    <div style="margin-top: 4px; color: var(--color-text-muted);">
                      <strong>CUTOFF:</strong> ${r.last_activated_at}
                    </div>
                  `:$}
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function Ne(e,a){const t=document.querySelectorAll(`.stage-scope-col-${e}:checked`).length,n=document.getElementById(`stage-scope-status-${e}`);if(!n)return;const s=t>0&&t<a?`(${t} of ${a} active)`:"(All fields active by default)";n.setAttribute("data-status",s)}function Js(e,a,t){if(!e||e.length===0)return u`<span class="u-text-muted u-text-sm">No services configured.</span>`;const n=(t==null?void 0:t.service_mapping_scopes)||{};return u`
    <style>
      .stage-scope-status-badge::after {
        content: attr(data-status);
      }
    </style>
    <div class="u-flex u-flex-col u-gap-3">
      ${e.map(s=>{var l,f;const r=((l=t==null?void 0:t.service_ids)==null?void 0:l.includes(s))??!1,i=((f=a[s])==null?void 0:f.field_mappings)||[],d=n[s]||[],o=Array.isArray(d)&&d.length>0&&d.length<i.length,c=o?`(${d.length} of ${i.length} active)`:"(All fields active by default)";return u`
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <div class="u-flex u-items-center u-justify-between">
              <label class="form-checkbox" style="cursor: pointer; margin: 0;">
                <input type="checkbox" name="stage-service" value="${s}" ?checked=${r}>
                <span class="u-text-sm font-mono" style="font-weight: 600;">${s}</span>
              </label>
              ${i.length>0?u`<span class="u-text-xs u-text-muted font-mono stage-scope-status-badge" id="stage-scope-status-${s}" data-status="${c}"></span>`:$}
            </div>

            ${i.length>0?u`
              <details ?open=${o} style="margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px dashed var(--color-border);">
                <summary style="cursor: pointer; user-select: none;" class="u-text-xs u-text-muted">
                  <span>Configure Field Scope for <strong>${s}</strong></span>
                </summary>
                <div style="margin-top: var(--space-2);">
                  <div class="u-flex u-items-center u-justify-between u-mb-2">
                    <p class="u-text-xs u-text-muted" style="margin: 0;">
                      Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage.
                    </p>
                    <div class="u-flex u-gap-1">
                      ${x({label:"Select All",variant:"ghost",size:"sm",onClick:g=>{g.preventDefault(),document.querySelectorAll(`.stage-scope-col-${s}`).forEach(p=>{p.checked=!0}),Ne(s,i.length)}})}
                      ${x({label:"Clear All",variant:"ghost",size:"sm",onClick:g=>{g.preventDefault(),document.querySelectorAll(`.stage-scope-col-${s}`).forEach(p=>{p.checked=!1}),Ne(s,i.length)}})}
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-2);">
                    ${i.map(g=>{const p=(g.target_column||"").toUpperCase(),m=o&&d.map(v=>v.toUpperCase()).includes(p);return u`
                        <label class="form-checkbox u-flex u-items-center u-gap-2" style="font-size: 0.8rem; background: var(--color-bg-card); padding: 4px 6px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
                          <input type="checkbox"
                            class="stage-scope-col stage-scope-col-${s}"
                            data-service="${s}"
                            value="${p}"
                            ?checked=${m}
                            @change=${()=>Ne(s,i.length)}>
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <strong class="font-mono">${g.target_column}</strong>
                            <small class="u-text-muted font-mono">(${g.source_field})</small>
                          </span>
                        </label>
                      `})}
                  </div>
                </div>
              </details>
            `:$}
          </div>
        `})}
    </div>
  `}function Xs(e,a){var n,s;const t={};for(const r of e){const i=((s=(n=a[r])==null?void 0:n.field_mappings)==null?void 0:s.length)||0;if(i===0)continue;const d=Array.from(document.querySelectorAll(`.stage-scope-col-${r}:checked`));d.length>0&&d.length<i&&(t[r]=d.map(o=>o.value.toUpperCase()))}return t}function Qs(e){if(!e)return"";try{const a=new Date(e);if(isNaN(a.getTime()))return"";const t=n=>String(n).padStart(2,"0");return`${a.getFullYear()}-${t(a.getMonth()+1)}-${t(a.getDate())}T${t(a.getHours())}:${t(a.getMinutes())}`}catch{return""}}function Zs(e){var p,m,v;const a=e.get(),t=h.read(I.all),n=((p=t==null?void 0:t.data)==null?void 0:p.stages)||[],s=((m=t==null?void 0:t.data)==null?void 0:m.services)||((v=t==null?void 0:t.data)==null?void 0:v.apps)||{},r=Object.keys(s),i=a.editingStageId?n.find(b=>b.id===a.editingStageId):null,d=a.stageIsSink??(i?!i.complete_condition:!1),o=a.stageIsRoot??(i?!i.start_condition:!1),c=()=>{e.set(b=>({...b,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},l=()=>{var b,y,_;try{const E=document.getElementById("stage-id").value.trim();if(!E){alert("Stage ID is required");return}let S=null;if(o){const w=(b=document.getElementById("stage-last-activated"))==null?void 0:b.value;if(w)try{S=new Date(w).toISOString()}catch{S=(i==null?void 0:i.last_activated_at)||null}}const R=Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(w=>w.value),L=Xs(R,s),A={id:E,name:document.getElementById("stage-name").value.trim()||E,description:document.getElementById("stage-desc").value.trim(),service_ids:R,service_mapping_scopes:L,start_condition:o?null:((y=document.getElementById("stage-start"))==null?void 0:y.value.trim())||null,complete_condition:d?null:((_=document.getElementById("stage-complete"))==null?void 0:_.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:i?i.order:n.length+1,last_activated_at:S};let M=[...n];a.editingStageId?M=M.map(w=>w.id===a.editingStageId?A:w):M.push(A),h.setData(I.all,()=>({...t.data,stages:M})),e.set(w=>({...w,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(E){alert("Error in Save Stage: "+E.stack)}},f=u`
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
      <label>Assigned Services & Field Scopes</label>
      ${Js(r,s,i)}
      <small class="u-text-muted u-mt-1" style="display: block;">Select services operating within this pipeline stage and optionally restrict mapped fields.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${o} @change=${b=>e.set(y=>({...y,stageIsRoot:b.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${o?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(i==null?void 0:i.start_condition)||""}>
          ${x({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-start").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>

      <div style="display: ${o?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Only service events occurring on or after this timestamp will be ingested. Leave empty to ingest all events without cutoff.</p>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${Qs(i?i.last_activated_at:o?new Date().toISOString():"")}>
          ${x({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");if(b){const y=new Date,_=E=>String(E).padStart(2,"0");b.value=`${y.getFullYear()}-${_(y.getMonth()+1)}-${_(y.getDate())}T${_(y.getHours())}:${_(y.getMinutes())}`}}})}
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
      ${x({label:a.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:l})}
    </div>
  `;return Q({title:"Configure DAG Stage",size:"lg",onClose:c,body:f,footer:g})}function ea(e,a={}){const t=Object.keys(a),n=e.get().selectedMappingService||t[0]||"",s=()=>{e.set(l=>({...l,isSampleApiModalOpen:!0,selectedMappingService:n}))},r=()=>{e.set(l=>({...l,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},i=(l,f)=>{e.set(g=>({...g,isMappingModalOpen:!0,editingMapping:{...l},editingMappingIndex:f}))},d=(l,f)=>{const p={...h.read(I.all).data},m=p.services[n].field_mappings,v=l+f;if(v<0||v>=m.length)return;const b=m[l];m[l]=m[v],m[v]=b,h.setData(I.all,()=>p),e.set(y=>({...y,isDirty:!0}))},o=l=>{if(confirm("Are you sure you want to delete this mapping?")){const g={...h.read(I.all).data};g.services[n].field_mappings.splice(l,1),h.setData(I.all,()=>g),e.set(p=>({...p,isDirty:!0}))}},c=()=>u`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${l=>e.set(f=>({...f,selectedMappingService:l.target.value}))}
        >
          ${t.map(l=>u`<option value="${l}" ?selected=${l===n}>${a[l].name}</option>`)}
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
          ${x({label:"+ Add Mapping",variant:"add",size:"sm",onClick:r})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${t.length>0?c():$}
        
        ${(()=>{const l=a[n];return!l||!l.field_mappings||l.field_mappings.length===0?u`
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
                    ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>o(g)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function ta(e){const a=e.get(),t=a.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},n=()=>{e.set(d=>({...d,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},s=()=>{const o={...h.read(I.all).data},c=Object.keys(o.services||{}),l=a.selectedMappingService||c[0];l&&(o.services[l].field_mappings||(o.services[l].field_mappings=[]),a.editingMappingIndex>=0?o.services[l].field_mappings[a.editingMappingIndex]=t:o.services[l].field_mappings.push(t),h.setData(I.all,()=>o),e.set(f=>({...f,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},r=u`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${t.target_column} @input=${d=>{let o=d.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");o=o.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),d.target.value=o,t.target_column=o}}>
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
          ${x({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const d=document.getElementById("transformerTestVal").value;let o;try{o=JSON.parse(d)}catch{o=d}try{const c={expression:t.transformer,sample_value:o};typeof o=="object"&&o!==null&&!Array.isArray(o)&&(c.context_dict=o);const l=await T.post("/api/v1/settings/test-transformer",c);l.valid?alert("Result: "+JSON.stringify(l.result)):alert("Error: "+l.message)}catch(c){alert("Error: "+c.message)}}})}
        </div>
      </div>
    </div>
  `,i=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Cancel",variant:"secondary",onClick:n})}
      ${x({label:"Save Mapping",variant:"save",onClick:s})}
    </div>
  `;return Q({title:"Configure Field Mapping & Transformer",size:"lg",onClose:n,body:r,footer:i})}function sa(e){var L;const a=e.get(),t=h.read(I.all),n=((L=t==null?void 0:t.data)==null?void 0:L.services)||{},s=Object.keys(n),r=a.selectedMappingService||s[0]||"",i=n[r],d=(i==null?void 0:i.name)||r||"No Service Selected",o=(i==null?void 0:i.poll_endpoint)||"/api/v3/history",c=a.sampleApiEndpoint!==void 0?a.sampleApiEndpoint:o,l=a.sampleApiLoading||!1,f=a.sampleApiError||null,g=a.sampleApiFields||null,p=(a.sampleApiFilter||"").trim().toLowerCase(),m=(a.sampleApiPrefix||"").trim(),v=()=>{e.set(A=>({...A,isSampleApiModalOpen:!1,sampleApiLoading:!1,sampleApiError:null,sampleApiFilter:"",sampleApiFields:null}))},b=async()=>{const A=document.getElementById("sample-endpoint-input"),M=A?A.value.trim():c;if(!r){alert("Please select or configure a service before sampling.");return}if(!M){alert("Please provide an endpoint to sample.");return}e.set(w=>({...w,sampleApiLoading:!0,sampleApiError:null,sampleApiEndpoint:M}));try{const w=await T.post("/api/v1/pipeline/sample",{service_id:r,endpoint:M});w&&w.success===!1?e.set(N=>({...N,sampleApiLoading:!1,sampleApiError:w.error||"Failed to sample API endpoint",sampleApiFields:[]})):e.set(N=>({...N,sampleApiLoading:!1,sampleApiFields:w.fields||[],sampleApiError:null}))}catch(w){e.set(N=>({...N,sampleApiLoading:!1,sampleApiError:w.message||"Error communicating with sample endpoint",sampleApiFields:[]}))}},y=A=>{const M=document.getElementById("sample-namespace-prefix"),w=M?M.value.trim():m,N=w?`${w}.${A.path}`:A.path,W=N.replace(/[^a-zA-Z0-9_]/g,"_").toUpperCase(),H={int:"INTEGER",float:"REAL",bool:"BOOLEAN",str:"TEXT",list:"TEXT",dict:"TEXT"}[A.type]||"TEXT";e.set(Z=>({...Z,isSampleApiModalOpen:!1,isMappingModalOpen:!0,editingMapping:{source_field:N,target_column:W,data_type:H,transformer:""},editingMappingIndex:-1}))},_=g?g.filter(A=>p?A.path&&A.path.toLowerCase().includes(p)||A.type&&A.type.toLowerCase().includes(p)||A.sample&&String(A.sample).toLowerCase().includes(p):!0):[],E=()=>l?u`
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
      `:_.length===0?u`
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
            ${_.map(A=>u`
              <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-bg-card);">
                <td style="padding: 8px 12px;">
                  <span class="font-mono" style="color: var(--color-text); font-weight: 600;">${A.path}</span>
                </td>
                <td style="padding: 8px 12px;">
                  <span class="font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 15%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${A.type}</span>
                </td>
                <td style="padding: 8px 12px;">
                  <span class="font-mono u-text-xs u-text-muted" style="word-break: break-all;">${A.sample}</span>
                </td>
                <td style="padding: 8px 12px; text-align: right;">
                  ${x({label:"+ Map",variant:"secondary",size:"sm",onClick:()=>y(A)})}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${_.length} of ${g.length} discovered fields.
      </div>
    `,S=u`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 6px 10px; border-radius: 4px; font-weight: bold; white-space: nowrap;">
        ${d} (${r})
      </span>
      <input 
        type="text" 
        id="sample-endpoint-input"
        list="common-endpoints-list" 
        class="form-input font-mono" 
        placeholder="Select an endpoint below or type custom..." 
        style="flex: 1;"
        .value=${c}
        @input=${A=>e.set(M=>({...M,sampleApiEndpoint:A.target.value}))}
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
          .value=${a.sampleApiFilter||""}
          @input=${A=>e.set(M=>({...M,sampleApiFilter:A.target.value}))}
        >
        <!-- UX-01: Add Namespace Prefix input -->
        <input 
          type="text" 
          id="sample-namespace-prefix"
          class="form-input font-mono" 
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${a.sampleApiPrefix||""}
          @input=${A=>e.set(M=>({...M,sampleApiPrefix:A.target.value}))}
        >
      </div>
    </div>
    
    ${E()}
  `,R=u`
    <div class="u-flex u-gap-2">
      ${x({label:"Close",variant:"secondary",onClick:v})}
    </div>
  `;return Q({title:"Sample Service API Schema",size:"lg",onClose:v,body:S,footer:R})}function aa(e,a={}){const t=Array.isArray(a.notification_triggers)?a.notification_triggers:Array.isArray(a.triggers)?a.triggers:[],n=()=>{e.set(o=>({...o,isNotificationModalOpen:!0}))},s=async o=>{try{const c=await T.post("/api/v1/settings/test-notification",{trigger_id:o==null?void 0:o.id,channel:(o==null?void 0:o.channel)||"ntfy",target_url:(o==null?void 0:o.target_url)||"http://host.docker.internal:8090",topic:(o==null?void 0:o.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(o==null?void 0:o.id)||"manual"}`});if(c&&c.success)alert(`✓ Notification successfully dispatched to ${(o==null?void 0:o.channel)||"ntfy"}`);else{const l=(c==null?void 0:c.error)||(c!=null&&c.status_code?`HTTP ${c.status_code}: ${c.response||"Failed"}`:(c==null?void 0:c.response)||"Unknown response");alert(`Failed to send alert: ${l}`)}}catch(c){alert(`Error sending test notification: ${c.message}`)}},r=async o=>{if(await xe({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${o}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const l=h.read(I.all);if(!l||!l.data)return;const g=(Array.isArray(l.data.notification_triggers)?l.data.notification_triggers:[]).filter(p=>p.id!==o);h.setData(I.all,p=>({...p,notification_triggers:g})),e.set(p=>({...p,isDirty:!0}))}},i=(o,c)=>{const l=h.read(I.all);if(!l||!l.data)return;const g=(Array.isArray(l.data.notification_triggers)?l.data.notification_triggers:[]).map(p=>p.id===o?{...p,enabled:!c}:p);h.setData(I.all,p=>({...p,notification_triggers:g})),e.set(p=>({...p,isDirty:!0}))},d=o=>o.includes("OPEN")||o.includes("FAIL")?"warning":o.includes("RESOLVED")||o.includes("SUCCESS")||o.includes("COMPLETE")?"success":"info";return u`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${x({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>s({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${x({label:"+ Add Trigger",variant:"save",size:"sm",onClick:n})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${t.length===0?u`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>`:t.map(o=>u`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${o.id}</strong>
                  ${_e({label:o.event||"ON_INCIDENT_OPEN",tone:d(o.event||"")})}
                  ${_e({label:o.channel||"ntfy",tone:"neutral"})}
                  ${o.enabled===!1?_e({label:"Disabled",tone:"danger"}):$}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>i(o.id,o.enabled!==!1)}
                  >
                    ${o.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${x({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>s(o)})}
                  ${x({label:"Delete",variant:"delete",size:"sm",onClick:()=>r(o.id)})}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${o.target_url||"-"}</span>
                </div>
                ${o.topic?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${o.topic}</span>
                  </div>
                `:$}
                ${o.priority?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${o.priority}</span>
                  </div>
                `:$}
                ${o.tags?u`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Tags:</span>
                    <span class="u-ml-1">${o.tags}</span>
                  </div>
                `:$}
              </div>
            </div>
          `)}
      </div>
    </div>
  `}function oa(e){const a=()=>{e.set(r=>({...r,isNotificationModalOpen:!1}))},t=r=>{var y,_,E,S,R,L,A,M;r&&r.preventDefault();const i=(y=document.getElementById("input-trig-id"))==null?void 0:y.value.trim();if(!i){alert("Trigger ID is required.");return}const d=(_=document.getElementById("input-trig-event"))==null?void 0:_.value,o=(E=document.getElementById("input-trig-channel"))==null?void 0:E.value,c=(S=document.getElementById("input-trig-url"))==null?void 0:S.value.trim();if(!c){alert("Target URL is required.");return}const l=((R=document.getElementById("input-trig-topic"))==null?void 0:R.value.trim())||"",f=((L=document.getElementById("input-trig-priority"))==null?void 0:L.value.trim())||"default",g=((A=document.getElementById("input-trig-tags"))==null?void 0:A.value.trim())||"server",p=((M=document.getElementById("input-trig-template"))==null?void 0:M.value.trim())||"{event}: {details}",m=h.read(I.all);if(!m||!m.data)return;const b=(Array.isArray(m.data.notification_triggers)?[...m.data.notification_triggers]:[]).filter(w=>w.id!==i);b.push({id:i,event:d,enabled:!0,channel:o,target_url:c,topic:l,priority:f,tags:g,message_template:p}),h.setData(I.all,w=>({...w,notification_triggers:b})),e.set(w=>({...w,isDirty:!0,isNotificationModalOpen:!1}))},n=u`
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
  `,s=u`
    <div class="u-flex u-gap-2 u-justify-end">
      ${x({label:"Cancel",variant:"secondary",onClick:a})}
      ${x({label:"Save Trigger",variant:"save",onClick:()=>t()})}
    </div>
  `;return Q({title:"Configure Notification Trigger",size:"md",onClose:a,body:n,footer:s})}function ra(e,a={}){const t=a.retention_days||30,n=a.global_poll_interval_seconds||300;return u`
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
                @input=${s=>{const i={...h.read(I.all).data,retention_days:parseInt(s.target.value,10)||30};h.setData(I.all,()=>i),e.set(d=>({...d,isDirty:!0}))}}>
              <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
            </div>
            <div class="form-group">
              <label>Global Polling Interval (Seconds)</label>
              <input type="number" class="form-input" min="10" max="86400" .value=${n}
                @input=${s=>{const i={...h.read(I.all).data,global_poll_interval_seconds:parseInt(s.target.value,10)||300};h.setData(I.all,()=>i),e.set(d=>({...d,isDirty:!0}))}}>
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
  `}function na(){let e={selectedService:"",selectedRecordId:"",testName:"",testEndpoint:"",testResponse:null,logs:[],isLoading:!1,error:null,saveSuccess:!1,testVariable:""};const a=new Set;return{get:()=>e,set:t=>{e=t(e),a.forEach(n=>n())},subscribe:t=>(a.add(t),()=>a.delete(t))}}function tt(){const e=na(),a=async()=>{var b,y;const r=e.get(),{selectedService:i,selectedRecordId:d,testEndpoint:o,testName:c}=r;if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}if(!i||!d){alert("Please select a service and provide a valid Pipeline Record ID.");return}const l=h.read(I.all),g=(((b=l==null?void 0:l.data)==null?void 0:b.services)||{})[i],p={...(g==null?void 0:g.enrichment_endpoints)||{}},m=c.trim()||"sandbox_test",v=!!o.trim();v&&(p[m]=o.trim()),e.set(_=>({..._,isLoading:!0,error:null,logs:[],testResponse:null}));try{const _=await T.post("/api/v1/pipeline/sandbox/enrichment",{service_id:i,record_id:parseInt(d,10),enrichment_endpoints:p}),E=v?((y=_.context_data)==null?void 0:y[m])||null:_.context_data;e.set(S=>({...S,isLoading:!1,logs:_.logs||[],testResponse:E}))}catch(_){e.set(E=>({...E,isLoading:!1,error:_.message}))}},t=async()=>{var m;const r=e.get();if(!r.selectedService)return;const i=h.read(I.all),d=((m=i==null?void 0:i.data)==null?void 0:m.services)||{},o=d[r.selectedService],c={...(o==null?void 0:o.enrichment_endpoints)||{}},l=r.testName.trim(),f=r.testEndpoint.trim();if(!l||!f){alert("Please provide both a namespace name and an endpoint to save.");return}c[l]=f;const g={...d,[r.selectedService]:{...o,enrichment_endpoints:c}},p={...i.data,services:g};try{await T.post("/api/v1/settings/config",p),h.setData(I.all,()=>p),e.set(v=>({...v,saveSuccess:!0})),setTimeout(()=>{e.set(v=>({...v,saveSuccess:!1}))},3e3)}catch(v){alert("Failed to save to service: "+v.message)}},n=()=>{var g;const r=e.get(),i=h.read(I.all),d=((g=i==null?void 0:i.data)==null?void 0:g.services)||{},o=Object.keys(d),c=d[r.selectedService];!r.selectedService&&o.length>0&&setTimeout(()=>e.set(p=>({...p,selectedService:o[0]})),0);const l=(p,m)=>{if(!(!m||!p))try{return m.split(".").reduce((v,b)=>v&&v[b]!==void 0?v[b]:void 0,p)}catch{return}},f=r.testVariable.trim()?l(r.testResponse,r.testVariable.trim()):void 0;return u`
      <div class="page-container" style="display: flex; flex-direction: column; height: 100%; min-height: 500px;">
        <!-- Top Controls -->
        <div class="u-flex u-gap-4 u-items-center u-mb-4" style="flex-shrink: 0;">
          <div style="flex: 1; max-width: 300px;">
            <select class="form-select font-mono" @change=${p=>e.set(m=>({...m,selectedService:p.target.value}))} style="border: 1px solid var(--color-text);">
              ${o.length===0?u`<option value="">No services</option>`:$}
              ${o.map(p=>u`<option value=${p} ?selected=${r.selectedService===p}>${d[p].name||p}</option>`)}
            </select>
          </div>
          
          <div style="flex: 1; max-width: 200px;">
            <input type="number" class="form-input font-mono" placeholder="Record ID (e.g. 42)" .value=${r.selectedRecordId} @input=${p=>e.set(m=>({...m,selectedRecordId:p.target.value}))} style="border: 1px solid var(--color-text);">
          </div>
          
          ${x({label:"RUN",variant:"test",onClick:a,disabled:r.isLoading})}
          
          <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
            <span style="font-size: 1.2rem; color: var(--color-text);">&gt;</span>
            <input type="text" class="form-input font-mono" placeholder="namespace" .value=${r.testName} @input=${p=>e.set(m=>({...m,testName:p.target.value}))} style="border: 1px solid var(--color-text); width: 120px;">
            ${x({label:"SAVE",variant:"secondary",onClick:t,disabled:r.isLoading})}
            ${r.saveSuccess?u`<span style="color: var(--color-success);">${ne({name:"check"})}</span>`:$}
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="u-flex u-gap-4" style="flex: 1; min-height: 0;">
          
          <!-- Left Column (Inputs and Response) -->
          <div class="u-flex u-flex-col u-gap-4" style="flex: 3; min-height: 0;">
            
            <div style="border: 1px solid var(--color-text); display: flex; flex-direction: column;">
              <textarea class="font-mono" placeholder="/api/v3/Endpoint/{ID}?query=..." style="height: 60px; background: transparent; border: none; padding: var(--space-3); color: var(--color-text); resize: none; outline: none;" .value=${r.testEndpoint} @input=${p=>e.set(m=>({...m,testEndpoint:p.target.value}))}></textarea>
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
                  <input type="text" class="form-input font-mono u-text-sm" placeholder="e.g. file.List.0.ID" .value=${r.testVariable} @input=${p=>e.set(m=>({...m,testVariable:p.target.value}))} style="flex: 1; min-width: 0; border: 1px solid var(--color-border); padding: 4px 8px; background: transparent;">
                </div>
                ${r.testVariable.trim()?u`
                  <div style="padding: 8px; background: #000; color: ${f!==void 0?"var(--color-success)":"var(--color-error)"}; font-family: monospace; font-size: 0.85rem; max-height: 200px; overflow: auto; border-radius: var(--radius-sm);">
                    <pre style="margin: 0; white-space: pre-wrap;">${f!==void 0?JSON.stringify(f,null,2):"undefined"}</pre>
                  </div>
                `:$}
              </div>
            `:$}
            
            <div style="flex: 2; border: 1px solid var(--color-text); background: #000; overflow: auto; padding: var(--space-3); color: #FFFFFF; font-family: monospace; font-size: 0.85rem;">
              ${r.isLoading?"Running test...":$}
              ${r.error?u`<div style="color: var(--color-error);">${r.error}</div>`:$}
              ${!r.isLoading&&!r.error&&r.testResponse?u`<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(r.testResponse,null,2)}</pre>`:$}
              ${!r.isLoading&&!r.error&&!r.testResponse&&r.logs.length>0?u`<div style="color: var(--color-warning);">Endpoint returned empty or failed.\n\nCheck logs:\n${r.logs.join(`
`)}</div>`:$}
              ${!r.isLoading&&!r.error&&!r.testResponse&&r.logs.length===0&&!r.testEndpoint.trim()?u`<div style="color: var(--color-text-muted);">Click RUN with an empty input to fetch the full context, or type an endpoint to test a new request.</div>`:$}
            </div>
            
          </div>
          
          <!-- Right Column (Saved Enrichment Points) -->
          <div style="flex: 1; border: 1px solid var(--color-text); padding: var(--space-4); overflow-y: auto;">
            <h3 style="margin-top: 0; text-align: center; color: var(--color-text); font-weight: 500; font-size: 1.1rem; margin-bottom: var(--space-4);">Enrichment Points</h3>
            
            <div class="u-flex u-flex-col u-gap-3">
              ${Object.keys((c==null?void 0:c.enrichment_endpoints)||{}).length===0?u`<div class="u-text-muted u-text-center">No saved endpoints.</div>`:$}
              
              ${Object.entries((c==null?void 0:c.enrichment_endpoints)||{}).map(([p,m])=>u`
                <div style="padding: var(--space-2) 0; cursor: pointer;" @click=${()=>e.set(v=>({...v,testName:p,testEndpoint:m}))}>
                  <strong style="color: var(--color-text); display: block; margin-bottom: 2px;">${p}</strong>
                  <div style="color: var(--color-text-muted); font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title=${m}>${m}</div>
                </div>
              `)}
            </div>
          </div>
          
        </div>
      </div>
    `};let s;return{view:n,mount:r=>{s=e.subscribe(r);const i=h.read(I.all);i!=null&&i.data||T.get("/api/v1/settings").then(d=>{h.setData(I.all,()=>d),e.set(o=>({...o}))}).catch(console.error)},unmount:()=>{s&&s()}}}function ia(e){const a=tt(),t=de({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let n,s;const r=i=>{t.get().isDirty&&(i.preventDefault(),i.returnValue="")};return{mount(i){n=t.subscribe(()=>i()),s=h.subscribe(I.all,()=>i()),qs.getSettings(),a.mount(i),window.addEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(async d=>t.get().isDirty?await xe({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){n&&n(),s&&s(),a.unmount(),window.removeEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(null)},view(){const i=t.get(),{activeTab:d,saving:o,isServiceModalOpen:c,isStageModalOpen:l,isMappingModalOpen:f,isSampleApiModalOpen:g,isNotificationModalOpen:p}=i,m=h.read(I.all),{data:v,status:b,error:y}=m;if(b==="loading"&&!v)return u`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!v)return u`<p class="u-text-danger">Error: ${y==null?void 0:y.message}</p>`;const _={retention_days:(v==null?void 0:v.retention_days)||30,global_poll_interval_seconds:(v==null?void 0:v.global_poll_interval_seconds)||300},E=(v==null?void 0:v.services)||{},S=(v==null?void 0:v.stages)||[],R=_.global_poll_interval_seconds,L=(A,M,w)=>{const N=d===A;return u`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${N?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${N?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${N?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>t.set(Z=>({...Z,activeTab:A}))}
          >
            ${ne({name:M,size:16})}
            <span>${w}</span>
          </button>
        `};return u`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${L("services","database","Services")}
              ${L("sandbox","terminal","API Sandbox")}
              ${L("mappings","code","Field Mappings")}
              ${L("stages","activity","Stages & Predicates")}
              ${L("notifications","bell","Notification Triggers")}
              ${L("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
              ${x({label:"Save All Settings",variant:"save",size:"sm",loading:o,disabled:!i.isDirty,onClick:async()=>{const A=h.read(I.all);if(!A||!A.data)return;const M=JSON.parse(JSON.stringify(A.data));t.set(w=>({...w,saving:!0}));try{const w=await T.post("/api/v1/settings",A.data);h.setData(I.all,()=>w),t.set(N=>({...N,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(w){h.setData(I.all,()=>M),t.set(N=>({...N,isDirty:!1,saving:!1})),alert("Failed to save settings: "+w.message+`
Rolled back to previous verified configuration.`)}}})}
              ${i.isDirty?u`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:$}
            </div>
            </div>
          </div>
          
          ${d==="services"?Hs(t,E,R):$}
          ${d==="sandbox"?a.view():$}
          ${d==="mappings"?ea(t,E):$}
          ${d==="stages"?Ws(t,S):$}
          ${d==="notifications"?aa(t,v):$}
          ${d==="engine"?ra(t,_):$}
          
          <!-- Modals -->
          ${c?Ys(t):$}
          ${l?Zs(t):$}
          ${f?ta(t):$}
          ${g?sa(t):$}
          ${p?oa(t):$}
        </div>
      `}}}const fe=it(Ye),la={overview:Ms(),pipeline:Ts(),tools:Ps(),views:zs(),incidents:Us(),sandbox:tt(),gitops:Gs(),settings:ia(fe)};let X=null;function he(){var t,n,s,r;const{current:e}=fe.store.get();X&&X.id!==e.id&&((n=(t=X.instance).unmount)==null||n.call(t),X=null),!X&&e&&(X={id:e.id,instance:la[e.id]},(r=(s=X.instance).mount)==null||r.call(s,he));const a=X?X.instance.view():"";rt(rs({routerStore:fe.store.get(),routes:Ye,router:fe,pageContent:a}),document.getElementById("app"))}fe.store.subscribe(he);we.store.subscribe(he);h.subscribe(ye.all,he);Qe.getOverview().catch(()=>{});he();
