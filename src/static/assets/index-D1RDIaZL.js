import{j as ot,E as rt,w as N,b as d,A as E,D as nt}from"./vendor-LJTP5CNr.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function it(){const e=new Map;return{on(a,s){return e.has(a)||e.set(a,new Set),e.get(a).add(s),()=>e.get(a).delete(s)},emit(a,s){if(e.has(a))for(const o of e.get(a))o(s)}}}function de(e){let a=e;const s=new Set;return{get:()=>a,set:o=>{a=typeof o=="function"?o(a):o;for(const t of s)t(a)},subscribe:o=>(s.add(o),()=>s.delete(o))}}function lt(e){const a=de({current:null,params:{}});let s=null;async function o(t){const i=window.location.hash.slice(1)||"/";if(s&&a.get().current&&a.get().current.path!==i&&!await s(i)){window.removeEventListener("hashchange",o),window.location.hash=a.get().current.path,setTimeout(()=>window.addEventListener("hashchange",o),0);return}const c=e.find(u=>u.path===i)||e[0];a.set({current:c,params:{}})}return window.addEventListener("hashchange",o),o(),{store:a,navigate(t){window.location.hash=t},setBeforeNavigateHook(t){s=t}}}const Ke=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={CHILD:2},Je=e=>(...a)=>({_$litDirective$:e,values:a});let Xe=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,s,o){this._$Ct=a,this._$AM=s,this._$Ci=o}_$AS(a,s){return this.update(a,s)}update(a,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ct}=ot,Ue=e=>e,dt=e=>e.strings===void 0,Ve=()=>document.createComment(""),ve=(e,a,s)=>{var i;const o=e._$AA.parentNode,t=a===void 0?e._$AB:a._$AA;if(s===void 0){const c=o.insertBefore(Ve(),t),u=o.insertBefore(Ve(),t);s=new ct(c,u,e,e.options)}else{const c=s._$AB.nextSibling,u=s._$AM,r=u!==e;if(r){let l;(i=s._$AQ)==null||i.call(s,e),s._$AM=e,s._$AP!==void 0&&(l=e._$AU)!==u._$AU&&s._$AP(l)}if(c!==t||r){let l=s._$AA;for(;l!==c;){const n=Ue(l).nextSibling;Ue(o).insertBefore(l,t),l=n}}}return s},oe=(e,a,s=e)=>(e._$AI(a,s),e),ut={},pt=(e,a=ut)=>e._$AH=a,vt=e=>e._$AH,Ce=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(e,a,s)=>{const o=new Map;for(let t=a;t<=s;t++)o.set(e[t],t);return o},Qe=Je(class extends Xe{constructor(e){if(super(e),e.type!==We.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,a,s){let o;s===void 0?s=a:a!==void 0&&(o=a);const t=[],i=[];let c=0;for(const u of e)t[c]=o?o(u,c):c,i[c]=s(u,c),c++;return{values:i,keys:t}}render(e,a,s){return this.dt(e,a,s).values}update(e,[a,s,o]){const t=vt(e),{values:i,keys:c}=this.dt(a,s,o);if(!Array.isArray(t))return this.ut=c,i;const u=this.ut??(this.ut=[]),r=[];let l,n,v=0,m=t.length-1,p=0,g=i.length-1;for(;v<=m&&p<=g;)if(t[v]===null)v++;else if(t[m]===null)m--;else if(u[v]===c[p])r[p]=oe(t[v],i[p]),v++,p++;else if(u[m]===c[g])r[g]=oe(t[m],i[g]),m--,g--;else if(u[v]===c[g])r[g]=oe(t[v],i[g]),ve(e,r[g+1],t[v]),v++,g--;else if(u[m]===c[p])r[p]=oe(t[m],i[p]),ve(e,t[v],t[m]),m--,p++;else if(l===void 0&&(l=Ge(c,p,g),n=Ge(u,v,m)),l.has(u[v]))if(l.has(u[m])){const f=n.get(c[p]),b=f!==void 0?t[f]:null;if(b===null){const y=ve(e,t[v]);oe(y,i[p]),r[p]=y}else r[p]=oe(b,i[p]),ve(e,t[v],b),t[f]=null;p++}else Ce(t[m]),m--;else Ce(t[v]),v++;for(;p<=g;){const f=ve(e,r[g+1]);oe(f,i[p]),r[p++]=f}for(;v<=m;){const f=t[v++];f!==null&&Ce(f)}return this.ut=c,pt(e,r),rt}}),mt={x:N`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:N`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:N`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:N`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:N`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:N`<polyline points="20 6 9 17 4 12"></polyline>`,tool:N`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:N`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":N`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:N`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:N`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:N`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:N`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:N`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:N`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:N`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:N`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:N`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:N`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,terminal:N`<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>`,copy:N`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`,plus:N`<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>`};function Q({name:e,size:a=16,label:s}){const o=mt[e];return o?d`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width=${a} height=${a} 
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
  </svg>`:d`<span style="width:${a}px; height:${a}px; display:inline-block; background:red;"></span>`}const gt="-FyYHK",ft="hQIh8E",bt="vjCp9N",xt="aWcKCO",yt="XdvXnE",ht="Yr8TTV",$t="yefrc2",Et="UnbUQg",_t="z6Wtj-",wt="WEwa7u",kt="rr8RRm",St="_8nqxsa",At="EMU1IN",It="erzuUm",Tt="IX2naX",Ct="UuwGh4",Ot="HRKVqM",P={sidebar:gt,brand:ft,logo:bt,title:xt,nav:yt,navItem:ht,sidebarFooter:$t,toggleBtn:Et,toggleText:_t,footerDetails:wt,statusWrapper:kt,statusDot:St,branchBox:At,expanded:It,brandText:Tt,statusText:Ct,commitText:Ot},V=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),Mt=new Set([502,503,504]);function Rt(e){const a=e&&typeof e=="object"?e.detail:null;return typeof a=="string"?a:Array.isArray(a)?a.map(s=>`${(s.loc??[]).slice(1).join(".")||"body"}: ${s.msg}`).join("; "):null}class ie extends Error{constructor(a,{code:s,status:o=0,detail:t=null,cause:i}={}){super(a,{cause:i}),this.name="ApiError",this.code=s,this.status=o,this.detail=t}get retryable(){return this.code===V.NETWORK||this.code===V.TIMEOUT||this.code===V.HTTP&&Mt.has(this.status)}get userMessage(){switch(this.code){case V.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case V.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case V.ABORTED:return"";case V.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const Nt=new Set(["GET","HEAD"]),Dt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function Pt(e={}){const a={...Dt,...e},s=e.fetchImpl??((...g)=>globalThis.fetch(...g)),o={request:[],response:[],error:[]},t=new Map,i=()=>new ie("Request aborted",{code:V.ABORTED}),c=(g,f)=>{const b=new URLSearchParams;for(const[_,x]of Object.entries(f??{}))x!=null&&x!==""&&b.set(_,String(x));const y=b.toString();return`${a.baseUrl}${g}${y?"?"+y:""}`};async function u(g){if(g.status===204)return null;const f=g.headers.get("content-type")??"";try{return f.includes("application/json")?await g.json():await g.text()}catch(b){throw new ie("Malformed response body",{code:V.PARSE,status:g.status,cause:b})}}async function r(g,f,b){const y=AbortSignal.timeout(b),_=f?AbortSignal.any([f,y]):y;let x;try{x=await s(g.url,{method:g.method,headers:g.headers,body:g.body,signal:_})}catch(R){throw y.aborted?new ie(`Request timed out after ${b} ms`,{code:V.TIMEOUT,cause:R}):f!=null&&f.aborted?i():new ie("Network request failed",{code:V.NETWORK,cause:R})}const S=await u(x);if(!x.ok)throw new ie(Rt(S)??`HTTP ${x.status}`,{code:V.HTTP,status:x.status,detail:S});return{status:x.status,data:S,headers:x.headers}}const l=(g,f)=>new Promise((b,y)=>{const _=setTimeout(b,g);f==null||f.addEventListener("abort",()=>{clearTimeout(_),y(i())},{once:!0})}),n=g=>Math.random()*Math.min(a.retryMaxMs,a.retryBaseMs*2**g);async function v(g,{signal:f,timeoutMs:b,retries:y}){for(let _=0;;_+=1)try{return await r(g,f,b)}catch(x){if(!(x instanceof ie)||!x.retryable||_>=y)throw x;await l(n(_),f)}}function m(g,f,b){let y=t.get(g);if(!y){const _=new AbortController,x={controller:_,refs:0,promise:null};x.promise=f(_.signal).finally(()=>{t.get(g)===x&&t.delete(g)}),x.promise.catch(()=>{}),t.set(g,x),y=x}return y.refs+=1,new Promise((_,x)=>{const S=()=>{y.refs-=1,y.refs===0&&(t.get(g)===y&&t.delete(g),y.controller.abort()),x(i())};if(b!=null&&b.aborted){S();return}b==null||b.addEventListener("abort",S,{once:!0}),y.promise.then(R=>{b==null||b.removeEventListener("abort",S),_(R)},R=>{b==null||b.removeEventListener("abort",S),x(R)})})}async function p(g,f,b={}){const{query:y,body:_,headers:x={},signal:S,meta:R={}}=b,L=b.timeoutMs??a.timeoutMs,A=b.retries??(Nt.has(g)?a.retries:0),O=b.dedupe??g==="GET";let w={method:g,url:c(f,y),headers:{Accept:"application/json",...x},body:void 0,meta:R};_!==void 0&&(w.body=JSON.stringify(_),w.headers["Content-Type"]="application/json");for(const W of o.request)w=await W(w);const D=async W=>{try{let J=await v(w,{signal:W,timeoutMs:L,retries:A});for(const H of o.response)J=await H(J,w);return J.data}catch(J){let H=J;for(const ee of o.error)H=await ee(H,w)??H;throw H}};return O?m(`${w.method} ${w.url}`,D,S):D(S)}return{get:(g,f)=>p("GET",g,f),post:(g,f,b)=>p("POST",g,{...b,body:f}),put:(g,f,b)=>p("PUT",g,{...b,body:f}),delete:(g,f)=>p("DELETE",g,f),use({request:g,response:f,error:b}){g&&o.request.push(g),f&&o.response.push(f),b&&o.error.push(b)}}}const Oe=()=>{};function Lt(e,a){return a?new Promise((s,o)=>{const t=()=>o(new DOMException("Aborted","AbortError"));if(a.aborted){t();return}a.addEventListener("abort",t,{once:!0}),e.then(s,o).finally(()=>a.removeEventListener("abort",t))}):e}const Pe=e=>JSON.stringify(e,(a,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([o],[t])=>o<t?-1:1)):s),zt=(e,a)=>a.every((s,o)=>o<e.length&&Pe(s)===Pe(e[o]));function Bt({now:e=()=>Date.now(),gcMs:a=5*6e4}={}){const s=new Map,o=r=>Object.freeze({status:r.status,data:r.data,error:r.error,isFetching:!!r.promise,updatedAt:r.updatedAt});function t(r){const l=Pe(r);let n=s.get(l);return n||(n={keyParts:r,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},n.snapshot=o(n),s.set(l,n)),n}function i(r){r.snapshot=o(r);for(const l of[...r.listeners])l(r.snapshot)}function c(){for(const[r,l]of s)l.listeners.size===0&&!l.promise&&l.updatedAt&&e()-l.updatedAt>a&&s.delete(r)}function u(r){return r.promise||(r.invalidated=!1,r.status==="idle"&&(r.status="loading"),r.promise=Promise.resolve().then(()=>r.fetcher()).then(l=>(Object.assign(r,{data:l,error:null,status:"success",updatedAt:e()}),l),l=>{throw Object.assign(r,{error:l,status:"error"}),l}).finally(()=>{r.promise=null,i(r),r.invalidated&&r.listeners.size>0&&u(r).catch(Oe)}),r.promise.catch(Oe),i(r)),r.promise}return{load(r,l,{staleMs:n=0,signal:v}={}){c();const m=t(r);m.fetcher=l;const p=m.status==="success"&&!m.invalidated&&e()-m.updatedAt<n;return Lt(p?Promise.resolve(m.data):u(m),v)},read:r=>t(r).snapshot,subscribe(r,l){const n=t(r);return n.listeners.add(l),l(n.snapshot),()=>{n.listeners.delete(l)}},invalidate(r){for(const l of s.values())zt(l.keyParts,r)&&(l.invalidated=!0,i(l),l.listeners.size>0&&l.fetcher&&u(l).catch(Oe))},setData(r,l){const n=t(r),v={data:n.data,status:n.status,updatedAt:n.updatedAt},m=typeof l=="function"?l(n.data):l;return Object.assign(n,{data:m,status:"success",updatedAt:e()}),i(n),function(){n.data===m&&(Object.assign(n,v),i(n))}},set(r,l){return this.setData(r,typeof l=="function"?l:()=>l)}}}function jt(e,{mutationFn:a,optimistic:s,invalidates:o=[]}){return async function(i){const c=((s==null?void 0:s(i))??[]).map(({key:u,update:r})=>e.setData(u,r));try{const u=await a(i);return(typeof o=="function"?o(i,u):o).forEach(l=>e.invalidate(l)),u}catch(u){throw c.reverse().forEach(r=>r()),u}}}const le={},Ft=it(),T=Pt({baseUrl:(le==null?void 0:le.VITE_API_BASE)??"",timeoutMs:Number((le==null?void 0:le.VITE_HTTP_TIMEOUT_MS)??1e4)}),$=Bt();T.use({error:e=>((e==null?void 0:e.status)===401&&Ft.emit("auth:required",e),e)});const ye={all:["overview"]},Ze={getOverview:e=>$.load(ye.all,()=>T.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let we=!1;function Ut(){we=!we;const e=document.getElementById("app-sidebar");e&&(we?e.classList.add(P.expanded):e.classList.remove(P.expanded))}function Vt({routes:e,activeId:a,onNavigate:s}){var u,r,l,n,v,m,p,g,f;const o=$.read(ye.all),t=((r=(u=o==null?void 0:o.data)==null?void 0:u.gitops)==null?void 0:r.commit)||((n=(l=o==null?void 0:o.data)==null?void 0:l.telemetry)==null?void 0:n.short_commit)||"-",i=((m=(v=o==null?void 0:o.data)==null?void 0:v.gitops)==null?void 0:m.branch)||((g=(p=o==null?void 0:o.data)==null?void 0:p.telemetry)==null?void 0:g.branch)||"-",c=(f=o==null?void 0:o.data)!=null&&f.version?o.data.version.startsWith("v")?o.data.version:`v${o.data.version}`:"...";return d`<aside id="app-sidebar" class="${P.sidebar} ${we?P.expanded:""}">
    <div class=${P.brand}>
      <div class=${P.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${P.brandText}>
        <div class=${P.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${c}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${P.nav}>
      ${Qe(e,b=>b.id,b=>d`
        <button class=${P.navItem} aria-current=${b.id===a?"page":"false"}
          @click=${()=>s(b.path)}>
          ${Q({name:b.icon,size:16})}
          <span>${b.title}</span>
        </button>
      `)}
    </nav>
    <div class=${P.sidebarFooter}>
      <button class=${P.toggleBtn} @click=${Ut}>
        ${Q({name:"menu",size:16})}
        <span class=${P.toggleText}>Collapse Menu</span>
      </button>
      <div class=${P.footerDetails}>
        <div class=${P.statusWrapper}>
          <div class=${P.statusDot}></div>
          <span class=${P.statusText}>Manager Online</span>
        </div>
        <div class=${P.branchBox}>
          <span style="color: var(--color-accent);">${i}</span>
          <span class=${P.commitText}>${t}</span>
        </div>
      </div>
    </div>
  </aside>`}const Gt="MFUTlq",qt="kBMrej",Me={topbar:Gt,title:qt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=e=>e??E;function ce(...e){return e.filter(Boolean).join(" ")}function Ht(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function Yt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Kt="PSMDQ2",Wt={spinner:Kt};function Jt({size:e=16}={}){return d`<svg class=${Wt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Xt="vZLpx0",me={btn:Xt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function h({label:e,variant:a="secondary",size:s="md",icon:o,iconOnly:t=!1,ariaLabel:i,loading:c=!1,disabled:u=!1,type:r="button",id:l,onClick:n}){const v=ce(me.btn,me[`btn--${a}`],me[`btn--${s}`],t&&me["btn--icon-only"]);return d`<button id=${qe(l)} class=${v} type=${r}
    aria-label=${qe(i)} aria-busy=${c?"true":"false"}
    ?disabled=${u||c} @click=${n}>
    ${c?Jt():o?Q({name:o,size:s==="sm"?14:16}):E}
    ${t?E:d`<span class=${me.btn__label}>${e}</span>`}
  </button>`}const Qt=({icon:e,ariaLabel:a,...s})=>h({...s,icon:e,ariaLabel:a,iconOnly:!0,variant:s.variant??"ghost"});function Zt({title:e}){return d`<header class=${Me.topbar}>
    <h1 class=${Me.title}>${e}</h1>
    <div class=${Me.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${h({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{$.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function es(){const e=de({stack:[]});let a=0;function s(t){return new Promise(i=>{const c=`modal-${a+=1}`;let u=!1;const r=l=>{u||(u=!0,e.set(n=>({stack:n.stack.filter(v=>v.id!==c)})),i(l))};e.set(l=>({stack:[...l.stack,{id:c,view:()=>t({close:r,id:c})}]}))})}return{open:s,refresh:()=>e.set(t=>({stack:[...t.stack]})),store:e}}const ts=es(),ke=ts;function ss(){const{stack:e}=ke.store.get();return d`<div id="modal-root">${e.map(a=>a.view())}</div>`}const as="sCMZyq",os="Fk5OML",rs="_0AKuiv",Re={layout:as,mainContent:os,page:rs};function ns({routerStore:e,routes:a,router:s,pageContent:o}){const{current:t}=e;return d`<div class=${Re.layout}>
    ${Vt({routes:a,activeId:t==null?void 0:t.id,onNavigate:s.navigate})}
    <div class=${Re.mainContent}>
      ${Zt({title:(t==null?void 0:t.pageTitle)||(t==null?void 0:t.title)||""})}
      <main class=${Re.page}>
        ${o}
      </main>
    </div>
    ${ss()}
  </div>`}const is="fuSbcq",ls="fu9t4u",cs="elFvvy",ds="_2Hu4ZP",us="r2dRuM",ps="AjfFun",U={table:is,table__scroll:ls,table__grid:cs,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:ds,table__skeleton:us,table__stale:ps};function Ae({id:e,caption:a,columns:s,snapshot:o,getRows:t=n=>Array.isArray(n)?n:(n==null?void 0:n.items)??[],rowKey:i=(n,v)=>v,emptyMessage:c="No records found.",onRetry:u,footer:r=E,fallbackColumns:l=[]}){const{status:n,data:v,error:m,isFetching:p}=o,g=v!==void 0,f=typeof s=="function"?g?s(v):l:s,b=Math.max(f.length,1),y=g?t(v):[],_=(S,R)=>d`<td class=${ce(S.align==="end"&&U["table__cell--end"],S.align==="center"&&U["table__cell--center"],S.mono&&U["table__cell--mono"])}>
    ${S.render?S.render(R):Yt(R[S.key])}</td>`;let x;return!g&&(n==="idle"||n==="loading")?x=Array.from({length:5},()=>d`<tr aria-hidden="true">${f.map(()=>d`<td><span class=${U.table__skeleton}></span></td>`)}</tr>`):g?y.length===0?x=d`<tr><td colspan=${b} class=${U.table__message}>${c}</td></tr>`:x=Qe(y,i,S=>d`<tr>${f.map(R=>_(R,S))}</tr>`):x=d`<tr><td colspan=${b} class=${U.table__message} role="alert">
      ${(m==null?void 0:m.userMessage)||(m==null?void 0:m.message)||"Failed to load data."}
      ${u?h({label:"Retry",icon:"refresh",size:"sm",onClick:u}):E}</td></tr>`,d`<div class=${U.table}>
    ${n==="error"&&g?d`<div class=${U.table__stale} role="status">Showing cached data. ${(m==null?void 0:m.userMessage)??""} ${u?h({label:"Retry",size:"sm",variant:"ghost",onClick:u}):E}</div>`:E}
    <div class=${U.table__scroll} aria-busy=${p?"true":"false"}>
      <table id=${e??E} class=${U.table__grid}>
        ${a?d`<caption class="u-sr-only">${a}</caption>`:E}
        <thead><tr>${f.map(S=>d`<th scope="col" class=${ce(S.align==="end"&&U["table__cell--end"],S.align==="center"&&U["table__cell--center"])}>${S.header}</th>`)}</tr></thead>
        <tbody>${x}</tbody>
      </table>
    </div>
    ${r}
  </div>`}const xe={all:["pipeline"],columns:["pipeline","columns"]};let K={limit:50,offset:0};const G={getPipeline:(e={},a={})=>{const{dedupe:s,staleMs:o,signal:t,...i}=e,c={...s!==void 0?{dedupe:s}:{},...o!==void 0?{staleMs:o}:{},...t!==void 0?{signal:t}:{},...a};return K={...K,...i},(K.stage===""||K.stage===null)&&delete K.stage,(K.status===""||K.status===null)&&delete K.status,$.load(xe.all,()=>T.get("/api/v1/pipeline",{query:K,dedupe:!1}),{dedupe:!1,...c})},getCurrentParams:()=>({...K}),getColumns:e=>$.load(xe.columns,()=>T.get("/api/v1/pipeline/columns"),e)},vs="_0BpBt1",ae={badge:vs,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2","badge--bool":"FpUTU-","badge--bool-true":"_8izwGO","badge--bool-false":"_5AzcWm"};function ge({label:e,tone:a="neutral",mono:s=!1,uppercase:o=!1}){const t=ce(ae.badge,ae[`badge--${a}`],s&&ae["badge--mono"],o&&ae["badge--uppercase"]);return d`<span class=${t}>${e}</span>`}function ms({value:e}){if(e==null||e==="")return d`<span class="u-text-muted">-</span>`;const a=e===1||e==="1"||e===!0||String(e).toLowerCase()==="true";return d`<span class=${ce(ae.badge,ae["badge--bool"],a?ae["badge--bool-true"]:ae["badge--bool-false"])}>${a?"TRUE":"FALSE"}</span>`}const gs=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","CREATED_AT","LAST_UPDATED"]);function fs(e){if(!e||!e.columns)return[];const a=(e==null?void 0:e.column_types)||{};return e.columns.map(s=>{const o=s.toUpperCase(),t=(a[s]||a[o]||"").toUpperCase(),i=gs.has(o),c=t.includes("INT"),u=t.includes("BOOL"),r=i||c||u?"center":void 0;return{key:s,header:o,align:r,render:l=>{const n=l[s];return n==null||n===""?d`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`:u?ms({value:n}):d`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${r==="center"?"text-align: center;":""}" title=${n}>${n}</span>`}}})}function bs(){return{view(){var n,v,m,p;const e=$.read(xe.all),a=((n=e.data)==null?void 0:n.items)??[],s=((v=e.data)==null?void 0:v.total)??a.length,o=((m=e.data)==null?void 0:m.limit)??50,t=((p=e.data)==null?void 0:p.offset)??0,i=s===0?0:t+1,c=Math.min(t+a.length,s),u=t>0,r=t+o<s,l=d`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${i}-${c} of ${s} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(o)}
                ?disabled=${e.isFetching}
                @change=${g=>{const f=Number(g.target.value);G.getPipeline({limit:f,offset:0})}}
              >
                <option value="50" ?selected=${o===50}>50</option>
                <option value="100" ?selected=${o===100}>100</option>
                <option value="200" ?selected=${o===200}>200</option>
                <option value="500" ?selected=${o===500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${h({label:"Previous",size:"sm",variant:"secondary",disabled:!u||e.isFetching,onClick:()=>G.getPipeline({offset:Math.max(0,t-o)})})}
              ${h({label:"Next",size:"sm",variant:"secondary",disabled:!r||e.isFetching,onClick:()=>G.getPipeline({offset:t+o})})}
            </div>
          </div>
        </div>
      `;return Ae({id:"pipeline-table",snapshot:e,columns:g=>fs(g),getRows:g=>(g==null?void 0:g.items)??[],rowKey:(g,f)=>g.ID??g.id??f,onRetry:()=>G.getPipeline(),footer:l})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=(e,a)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const t of s)(o=t._$AO)==null||o.call(t,a,!1),fe(t,a);return!0},Se=e=>{let a,s;do{if((a=e._$AM)===void 0)break;s=a._$AN,s.delete(e),e=a}while((s==null?void 0:s.size)===0)},et=e=>{for(let a;a=e._$AM;e=a){let s=a._$AN;if(s===void 0)a._$AN=s=new Set;else if(s.has(e))break;s.add(e),hs(a)}};function xs(e){this._$AN!==void 0?(Se(this),this._$AM=e,et(this)):this._$AM=e}function ys(e,a=!1,s=0){const o=this._$AH,t=this._$AN;if(t!==void 0&&t.size!==0)if(a)if(Array.isArray(o))for(let i=s;i<o.length;i++)fe(o[i],!1),Se(o[i]);else o!=null&&(fe(o,!1),Se(o));else fe(this,e)}const hs=e=>{e.type==We.CHILD&&(e._$AP??(e._$AP=ys),e._$AQ??(e._$AQ=xs))};class $s extends Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,s,o){super._$AT(a,s,o),et(this),this.isConnected=a._$AU}_$AO(a,s=!0){var o,t;a!==this.isConnected&&(this.isConnected=a,a?(o=this.reconnected)==null||o.call(this):(t=this.disconnected)==null||t.call(this)),s&&(fe(this,a),Se(this))}setValue(a){if(dt(this._$Ct))this._$Ct._$AI(a,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=a,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const Ne=new WeakMap,Es=Je(class extends $s{render(e){return E}update(e,[a]){var o;const s=a!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=a,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),E}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const a=this.ht??globalThis;let s=Ne.get(a);s===void 0&&(s=new WeakMap,Ne.set(a,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,a;return typeof this.G=="function"?(e=Ne.get(this.ht??globalThis))==null?void 0:e.get(this.G):(a=this.G)==null?void 0:a.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_s="_9lH80h",ws="_91-Xo5",ks="SEYdJQ",Ss="CRt7-E",As="gj4qUB",Is="hUDIR7",re={modal:_s,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:ws,modal__header:ks,modal__title:Ss,modal__body:As,modal__footer:Is};function Z({title:e,size:a="md",body:s,footer:o=E,onClose:t,dismissible:i=!0}){const c=Ht("modal-title"),u=n=>{n&&!n.open&&requestAnimationFrame(()=>{!n.open&&n.isConnected&&n.showModal()})},r=n=>{n.preventDefault(),i&&t(void 0)},l=n=>{i&&n.target===n.currentTarget&&t(void 0)};return d`<dialog class=${ce(re.modal,re[`modal--${a}`])} aria-labelledby=${c}
      ${Es(u)} @cancel=${r} @click=${l}>
    <div class=${re.modal__panel}>
      <header class=${re.modal__header}>
        <h2 id=${c} class=${re.modal__title}>${e}</h2>
        ${i?Qt({icon:"x",ariaLabel:"Close dialog",onClick:()=>t(void 0)}):E}
      </header>
      <div class=${re.modal__body}>${s}</div>
      ${o!==E?d`<footer class=${re.modal__footer}>${o}</footer>`:E}
    </div>
  </dialog>`}function he({title:e,message:a,tone:s="danger",confirmLabel:o="Confirm",requireText:t}){return new Promise(i=>{let c="";""+Math.random().toString(36).substring(2);const u=()=>{ke.open(({close:l})=>Z({title:e,body:d`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${a}</p>
            ${t?d`
              <p class="u-text-sm u-text-muted">Type <strong>${t}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${n=>{c=n.target.value,r()}} />
            `:""}
          </div>
        `,footer:d`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${h({label:"Cancel",variant:"ghost",onClick:()=>{l(),i(!1)}})}
            ${h({label:o,variant:s==="danger"?"delete":"add",disabled:t?c!==t:!1,onClick:()=>{l(),i(!0)}})}
          </div>
        `,onClose:()=>{l(),i(!1)}}))};function r(){ke.refresh()}u()})}function Ts(e){const a=e.get(),s=()=>{e.set(l=>({...l,isManageColumnsModalOpen:!1}))},o=l=>{if(l===0)return;const n=[...a.columnsData],v=n[l-1];n[l-1]=n[l],n[l]=v,e.set(m=>({...m,columnsData:n}))},t=l=>{if(l===a.columnsData.length-1)return;const n=[...a.columnsData],v=n[l+1];n[l+1]=n[l],n[l]=v,e.set(m=>({...m,columnsData:n}))},i=async()=>{const l=a.columnsData.map(n=>n.name);try{await T.put("/api/v1/pipeline/columns/order",{column_order:l}),e.set(n=>({...n,isManageColumnsModalOpen:!1})),G.getPipeline()}catch(n){alert("Failed to save column order: "+n.message)}},c=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await T.post("/api/v1/pipeline/columns/prune");const l=await T.get("/api/v1/pipeline/columns");e.set(n=>({...n,columnsData:l})),G.getPipeline()}catch(l){alert("Failed to prune columns: "+l.message)}},u=d`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${a.isLoadingColumns?d`<div class="u-text-center u-p-4">Loading columns...</div>`:E}
    
    ${!a.isLoadingColumns&&a.columnsData?d`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${a.columnsData.map((l,n)=>{const v=l.is_system;return d`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${v?"var(--color-accent)":"var(--color-text)"};">${l.name}</span>
                <span class="u-text-xs u-text-muted">${l.type}</span>
                ${l.is_deprecated?d`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:E}
                ${v?d`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:E}
              </div>
              
              <div class="u-flex u-gap-1">
                ${h({label:"▲",variant:"ghost",size:"sm",disabled:v||n>0&&a.columnsData[n-1].is_system,onClick:()=>o(n)})}
                ${h({label:"▼",variant:"ghost",size:"sm",disabled:v||n===a.columnsData.length-1,onClick:()=>t(n)})}
              </div>
            </div>
          `})}
      </div>
    `:E}
  `,r=d`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${h({label:"Prune Deprecated",variant:"delete",onClick:c})}
      </div>
      <div class="u-flex u-gap-2">
        ${h({label:"Cancel",variant:"secondary",onClick:s})}
        ${h({label:"Save Order",variant:"save",onClick:i})}
      </div>
    </div>
  `;return Z({title:"Manage Columns",size:"md",onClose:s,body:u,footer:r})}function Cs(){const e=de({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),a=bs();let s,o;async function t(){if(await he({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await T.post("/api/v1/pipeline/purge"),G.getPipeline({offset:0})}catch(c){alert("Error purging pipeline: "+c.message)}}return{mount(i){s=$.subscribe(xe.all,()=>i()),o=e.subscribe(()=>i()),G.getPipeline()},unmount(){s&&s(),o&&o()},view(){var v,m;const i=$.read(xe.all),c=((v=i.data)==null?void 0:v.available_stages)??[],u=((m=i.data)==null?void 0:m.available_statuses)??[],r=G.getCurrentParams(),l=r.stage||"",n=r.status||"";return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${h({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${h({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(p=>({...p,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const p=await T.get("/api/v1/pipeline/columns");e.set(g=>({...g,columnsData:p,isLoadingColumns:!1}))}catch(p){alert("Error loading columns: "+p.message),e.set(g=>({...g,isLoadingColumns:!1}))}}})}
              ${h({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div class="u-flex u-gap-2">
              ${h({label:"Sync Now",variant:"secondary",size:"sm",icon:"refresh",onClick:async()=>{try{await T.post("/api/v1/settings/scheduler/restart"),setTimeout(()=>G.getPipeline({offset:0}),1200)}catch(p){alert("Error triggering sync: "+p.message)}}})}
              ${h({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:t})}
            </div>
            <div class="u-flex u-gap-2">
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${p=>{G.getPipeline({stage:p.target.value,offset:0})}}
              >
                <option value="" ?selected=${!l}>All Stages</option>
                ${c.map(p=>d`
                  <option value=${p.id} ?selected=${l===p.id}>${p.name||p.id}</option>
                `)}
              </select>
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${p=>{G.getPipeline({status:p.target.value,offset:0})}}
              >
                <option value="" ?selected=${!n}>All Statuses</option>
                ${u.map(p=>d`
                  <option value=${p} ?selected=${n===p}>${p}</option>
                `)}
              </select>
            </div>
          </div>
          ${a.view()}
          
          ${e.get().isManageColumnsModalOpen?Ts(e):E}
        </div>
      `}}}function Os(){return{view(){var l,n,v;const{status:e,data:a,error:s}=$.read(ye.all);if(e==="error")return d`<div class="u-text-danger">${s.message}</div>`;if(e==="loading"||!a)return d`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const o=a.pipeline_total_items||0,t=a.active_incidents||0,i=a.registered_services||0,c=((l=a.telemetry)==null?void 0:l.branch)||"main",u=((n=a.telemetry)==null?void 0:n.clean)!==!1,r=(m,p,g,f,b="u-text-accent")=>d`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${m}</span>
            <span class="${b}">${Q({name:f,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${p}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${g}>${g}</div>
          </div>
        </div>
      `;return d`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${r("Pipeline Items",o,"Items tracked in universal pipeline","package","u-text-accent")}
            ${r("Active Incidents",t,t>0?`${t} critical anomalies`:"0 critical anomalies","alert",(t>0,"u-text-danger"))}
            ${r("Active Services",i,"Configured upstream services","play","u-text-success")}
            ${r("GitOps Status",c,u?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(v=a.stages)!=null&&v.length?a.stages.map(m=>d`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${m.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${m.name}</strong> <span class="u-text-muted">(${m.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      ${m.enabled?d`<span class="u-text-xs u-text-success">Active</span>`:d`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):d`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function Ms(){const e=Os();let a;return{mount(s){a=$.subscribe(ye.all,()=>s()),Ze.getOverview()},unmount(){a&&a()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const Le={all:["tools"]},Rs={getTools:e=>$.load(Le.all,()=>T.get("/api/v1/tools"),e)},Ns="cg2FU3",Ds="Jh4yC3",He={console:Ns,output:Ds};function Ps({text:e,status:a="idle"}){return d`
    <div class=${He.console}>
      <pre class=${He.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function Ls(){const e=de({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let a,s;const o=async t=>{e.set(i=>({...i,executionStatus:"running",output:`Executing...
`}));try{const i=await T.post(`/api/v1/tools/${encodeURIComponent(t.name)}/run`);e.set(c=>({...c,executionStatus:"success",output:c.output+`
`+JSON.stringify(i,null,2)}))}catch(i){e.set(c=>({...c,executionStatus:"error",output:c.output+`
ERROR: `+i.message}))}};return{mount(t){a=$.subscribe(Le.all,()=>t()),s=e.subscribe(()=>t()),Rs.getTools()},unmount(){a&&a(),s&&s()},view(){const{status:t,data:i,error:c,isFetching:u}=$.read(Le.all),r=e.get(),l=Array.isArray(i)?i:(i==null?void 0:i.items)??[];return d`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${t==="loading"&&!i?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:E}
              ${t==="error"&&!i?d`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${c==null?void 0:c.message}</div>`:E}
              ${l.length===0&&i?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:E}
              
              ${l.map(n=>{var v,m,p;return d`
                <button 
                  class="u-text-left"
                  style="background: ${((v=r.selectedTool)==null?void 0:v.name)===n.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((m=r.selectedTool)==null?void 0:m.name)===n.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(g=>({...g,selectedTool:n,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((p=r.selectedTool)==null?void 0:p.name)===n.name?"u-text-accent":""}">${n.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${n.description}>${n.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${r.selectedTool,"Select a tool to execute"}</h3>
              ${h({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!r.selectedTool||r.executionStatus==="running",loading:r.executionStatus==="running",onClick:()=>o(r.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${Ps({text:r.output,status:r.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const Be={all:["views"]},tt={getViews:e=>$.load(Be.all,()=>T.get("/api/v1/views"),e)};function zs(){return{view(){var s;const e=$.read(Be.all),a=Array.isArray(e.data)?e.data:((s=e.data)==null?void 0:s.items)??[];return!a.length&&e.status!=="loading"?d`
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
        `:Ae({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>a,onRetry:()=>tt.getViews()})}}}function Bs(){const e=zs();let a;return{mount(s){a=$.subscribe(Be.all,()=>s()),tt.getViews()},unmount(){a&&a()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${h({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const q={all:["incidents"],list:e=>[...q.all,e?"resolved":"active"],catalog:["incidents","catalog"]},ne={getIncidents:(e,a)=>$.load(q.list(e),()=>T.get("/api/v1/incidents",{query:{resolved:e?1:0}}),a),resolveIncident:(e,a)=>T.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:a||""}),createIncident:e=>T.post("/api/v1/incidents",e),getCatalog:e=>$.load(q.catalog,()=>T.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>T.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>T.delete(`/api/v1/incidents/catalog/errors/${e}`)};function Ye({resolved:e}){const a=jt($,{mutationFn:t=>ne.resolveIncident(t.id,t.note),invalidates:[q.all]});async function s(t){const i=prompt("Enter a resolution note (optional):","Resolved manually");if(i===null)return;if(await he({title:"Resolve Incident",message:`Are you sure you want to mark incident #${t} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await a({id:t,note:i})}catch(u){alert("Failed to resolve incident: "+u.message)}}const o=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:t=>{const i=t.SEVERITY==="CRITICAL"?"danger":t.SEVERITY==="WARNING"?"warning":"info";return ge({label:t.SEVERITY||"INFO",tone:i})}},{key:"COMPONENT",header:"Component",render:t=>d`<strong class="u-text-sm">${t.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:t=>d`<span class="u-font-mono u-text-xs">${t.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:t=>d`<span class="u-text-sm">${t.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:t=>t.REMEDY?d`<span class="u-text-xs u-text-muted">${t.REMEDY}</span>`:E},{key:"CREATED_AT",header:"Created At",mono:!0,render:t=>d`<span class="u-text-xs u-text-muted">${t.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>t.RESOLVED?d`<span class="u-text-success u-text-xs">Resolved${t.RESOLUTION_NOTE?`: ${t.RESOLUTION_NOTE}`:""}</span>`:h({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>s(t.ID)})}];return{view(){const t=$.read(q.list(e));return Ae({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:t,getRows:i=>(i==null?void 0:i.items)??(Array.isArray(i)?i:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function js({onEditError:e}={}){const a=[{key:"ERROR_CODE",header:"Code",render:s=>d`<strong class="u-text-sm u-font-mono">${s.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:s=>d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${s.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:s=>{if(s.SEVERITY==="INFO")return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`;const o=s.SEVERITY==="CRITICAL"?"danger":"warning";return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${o}) 20%, transparent); color: var(--color-${o}); padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:s=>d`<span class="u-text-sm">${s.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:s=>d`<span class="u-text-sm u-text-muted">${s.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:s=>d`<span class="u-text-sm">${s.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:s=>h({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(s)})}];return{view(){const s=$.read(q.catalog);return Ae({id:"error-catalog-table",columns:a,snapshot:s,getRows:o=>Array.isArray(o)?o:(o==null?void 0:o.value)||(o==null?void 0:o.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>ne.getCatalog()})}}}function Fs({onClose:e,onIncidentCreated:a}){let s=!1;async function o(c){c.preventDefault();const u=c.target,r=u.incident_code.value.trim().toUpperCase(),l=u.severity.value,n=u.component.value.trim(),v=u.details.value.trim();if(!r||!n||!v){alert("Please fill in Code, Component, and Details.");return}s=!0;try{await ne.createIncident({incident_code:r,severity:l,component:n,details:v}),$.invalidate(q.all),a==null||a(),e()}catch(m){alert("Failed to report incident: "+m.message)}finally{s=!1}}const t=d`
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
  `,i=d`
    <div class="u-flex u-gap-2 u-justify-end">
      ${h({label:"Cancel",variant:"secondary",onClick:e})}
      ${h({label:"Report Incident",variant:"save",type:"submit",loading:s,onClick:()=>{const c=document.getElementById("report-incident-form");c&&c.requestSubmit()}})}
    </div>
  `;return Z({title:"Report System Incident",size:"md",onClose:e,body:t,footer:i})}function Us({onClose:e,onErrorCreated:a,initialData:s=null}){let o=!1;const t=!!(s&&s.ERROR_CODE);async function i(r){var b;r.preventDefault();const l=r.target,n=l.error_code.value.trim().toUpperCase(),v=l.category.value.trim().toUpperCase(),m=l.severity.value,p=l.description.value.trim(),g=l.trigger_condition.value.trim(),f=l.remedy.value.trim();if(!n||!v||!p){alert("Please fill in Error Code, Category, and Description.");return}if(!t){const y=$.read(q.catalog),x=(Array.isArray(y==null?void 0:y.data)?y.data:((b=y==null?void 0:y.data)==null?void 0:b.items)??[]).find(S=>S.ERROR_CODE===n);if(x&&!await he({title:"Error Template Already Exists",message:`An error template with code '${n}' is already registered under category '${x.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}o=!0;try{await ne.upsertError({error_code:n,category:v,severity:m,description:p,trigger_condition:g,remedy:f}),$.invalidate(q.catalog),a==null||a(),e()}catch(y){alert("Failed to save error template: "+y.message)}finally{o=!1}}const c=d`
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
            value="${(s==null?void 0:s.ERROR_CODE)||""}"
            ?readonly=${t}
            style="${t?"background: var(--color-bg-surface); opacity: 0.8;":""}"
            required 
          />
          ${t?d`<small class="u-text-muted u-text-xs">Error code cannot be changed when editing.</small>`:""}
        </div>
        <div class="form-group" style="flex: 1;">
          <label for="input-err-category" class="u-text-sm u-font-medium">Category</label>
          <input 
            id="input-err-category" 
            name="category" 
            type="text" 
            class="form-input" 
            placeholder="e.g. DATABASE" 
            value="${(s==null?void 0:s.CATEGORY)||""}"
            required 
          />
        </div>
      </div>

      <div class="form-group u-mb-3">
        <label for="input-err-severity" class="u-text-sm u-font-medium">Severity</label>
        <select id="input-err-severity" name="severity" class="form-select">
          <option value="CRITICAL" ?selected=${(s==null?void 0:s.SEVERITY)==="CRITICAL"}>CRITICAL</option>
          <option value="WARNING" ?selected=${!s||(s==null?void 0:s.SEVERITY)==="WARNING"}>WARNING</option>
          <option value="INFO" ?selected=${(s==null?void 0:s.SEVERITY)==="INFO"}>INFO</option>
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
          value="${(s==null?void 0:s.DESCRIPTION)||""}"
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
          value="${(s==null?void 0:s.TRIGGER_CONDITION)||""}"
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
        >${(s==null?void 0:s.REMEDY)||""}</textarea>
      </div>
    </form>
  `,u=d`
    <div class="u-flex u-gap-2 u-justify-end">
      ${h({label:"Cancel",variant:"secondary",onClick:e})}
      ${h({label:t?"Update Error":"Register Error",variant:"save",type:"submit",loading:o,onClick:()=>{const r=document.getElementById("add-error-form");r&&r.requestSubmit()}})}
    </div>
  `;return Z({title:t?`Edit Error: ${s.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:c,footer:u})}function Vs(){const e=de({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),a=Ye({resolved:!1}),s=Ye({resolved:!0}),o=js({onEditError:r=>e.set(l=>({...l,isAddErrorModalOpen:!0,editingError:r}))});let t,i,c,u;return{mount(r){t=$.subscribe(q.list(!1),()=>r()),i=$.subscribe(q.list(!0),()=>r()),c=$.subscribe(q.catalog,()=>r()),u=e.subscribe(()=>r()),ne.getIncidents(!1),ne.getIncidents(!0),ne.getCatalog()},unmount(){t&&t(),i&&i(),c&&c(),u&&u()},view(){const{activeTab:r,isReportModalOpen:l,isAddErrorModalOpen:n,editingError:v}=e.get(),m=(p,g,f)=>{const b=r===p;return d`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(S=>({...S,activeTab:p}))}
          >
            ${Q({name:g,size:16})}
            <span>${f}</span>
          </button>
        `};return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${m("active","alert","Active Incidents")}
              ${m("resolved","check","Resolved")}
              ${m("catalog","search","Error Index Catalog")}
            </div>
            
            ${h(r==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(p=>({...p,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(p=>({...p,isReportModalOpen:!0}))})}
          </div>
          
          ${r==="active"?a.view():E}
          ${r==="resolved"?s.view():E}
          ${r==="catalog"?o.view():E}

          <!-- Modals -->
          ${l?Fs({onClose:()=>e.set(p=>({...p,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):E}

          ${n?Us({onClose:()=>e.set(p=>({...p,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:v}):E}
        </div>
      `}}}const ze={all:["gitops"]},Gs={getGitOps:e=>$.load(ze.all,()=>T.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function qs(){let e;return{mount(a){e=$.subscribe(ze.all,()=>a()),Gs.getGitOps()},unmount(){e&&e()},view(){const a=$.read(ze.all),{status:s,data:o,error:t,isFetching:i}=a;if(s==="loading"&&!o)return d`<p class="u-text-muted">Loading GitOps status...</p>`;if(s==="error"&&!o)return d`<p class="u-text-danger">Error: ${t==null?void 0:t.message}</p>`;const c=(o==null?void 0:o.telemetry)||{};return d`
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
      `}}}const I={all:["settings"]},Hs={getSettings:e=>$.load(I.all,()=>T.get("/api/v1/settings"),e),saveConfig:e=>T.post("/api/v1/settings/config",e),triggerSweep:()=>T.post("/api/v1/settings/sweep"),triggerBackup:()=>T.post("/api/v1/settings/backup")};function Ys(e,a={},s=300){const o=Object.keys(a),t=()=>{e.set(c=>({...c,isServiceModalOpen:!0}))},i=(c,u,r)=>{var v;const l=((v=u.field_mappings)==null?void 0:v.length)||0,n=Object.keys(u.enrichment_endpoints||{}).join(", ");return d`
      <div style="padding: var(--space-4); border-bottom: ${r?"none":"1px solid var(--color-border)"};">
        <div class="u-flex u-items-center u-justify-between u-mb-2">
          <div class="u-flex u-items-center u-gap-3">
            <strong style="font-size: 1.1rem; color: var(--color-text);">${u.name}</strong>
            <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${u.name.toUpperCase()}</span>
            ${u.enabled?d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); padding: 2px 6px; border-radius: 4px;">ACTIVE</span>`:d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-text-muted) 20%, transparent); color: var(--color-text-muted); padding: 2px 6px; border-radius: 4px;">DISABLED</span>`}
            <span class="u-font-mono u-text-xs" style="color: #fff; font-weight: bold;">
              ${u.poll_interval_seconds?`POLLS EVERY ${u.poll_interval_seconds}S`:`INHERITS GLOBAL (${s}S)`}
            </span>
          </div>
          <div class="u-flex u-gap-2">
            ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(m=>({...m,isServiceModalOpen:!0,editingServiceId:c}))})}
            ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${u.base_url||"N/A"} | API Key ${u.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${l}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${n||"none"}</span>
        </div>
      </div>
    `};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${h({label:"+ Add Service",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?d`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:E}
        ${o.map((c,u)=>i(c,a[c],u===o.length-1))}
      </div>
    </div>
  `}function Ks(e){var ee;const a=e.get(),s=$.read(I.all),o=((ee=s==null?void 0:s.data)==null?void 0:ee.services)||{},t=a.editingServiceId?o[a.editingServiceId]:null,i=a.serviceAllowedEvents!==void 0?a.serviceAllowedEvents:(t==null?void 0:t.allowed_event_types)||[],c=a.serviceDiscoveredEvents||[],u=a.isDiscoveringEvents||!1,r=a.discoveryEventsError||null,l=()=>{var ue,pe;const C=document.getElementById("srv-name"),k=document.getElementById("srv-id"),B=document.getElementById("srv-url"),F=document.getElementById("srv-api"),M=document.getElementById("chk-service-inherit-poll"),j=document.getElementById("srv-endpoint"),Y=document.getElementById("srv-pipeline"),te=document.getElementById("srv-enrich"),z=document.getElementById("chk-service-enabled");return{name:C?C.value:(t==null?void 0:t.name)||"",id:k?k.value:a.editingServiceId||"",base_url:B?B.value:(t==null?void 0:t.base_url)||"",api_key:F?F.value:(t==null?void 0:t.api_key)||"",inherit_poll:M?M.checked:t?t.poll_interval_seconds==null:!0,poll_endpoint:j?j.value:(t==null?void 0:t.poll_endpoint)||(t==null?void 0:t.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pipeline_key_template:Y?Y.value:(t==null?void 0:t.pipeline_key_template)||"{service}:{id}",enrichments:te?te.value:t!=null&&t.enrichment_endpoints?Object.entries(t.enrichment_endpoints).map(([se,Ee])=>`${se}: ${Ee}`).join(`
`):"",fallback_lookup_column:(((ue=document.getElementById("srv-fallback-col"))==null?void 0:ue.value)||"").trim()||null,fallback_lookup_field:(((pe=document.getElementById("srv-fallback-field"))==null?void 0:pe.value)||"").trim()||null,enabled:z?z.checked:t?t.enabled:!0}},n=()=>{e.set(C=>({...C,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))},v=()=>{var C,k,B,F,M,j,Y,te,z,ue,pe;try{const se=(((C=document.getElementById("srv-id"))==null?void 0:C.value)||"").trim();if(!se){alert("Service ID is required");return}const Ee=(((k=document.getElementById("srv-enrich"))==null?void 0:k.value)||"").trim(),je={};Ee&&Ee.split(`
`).forEach(Ie=>{const Te=Ie.split(":");Te.length>=2&&(je[Te[0].trim()]=Te.slice(1).join(":").trim())});const at={name:(((B=document.getElementById("srv-name"))==null?void 0:B.value)||"").trim()||se,base_url:(((F=document.getElementById("srv-url"))==null?void 0:F.value)||"").trim(),api_key:(((M=document.getElementById("srv-api"))==null?void 0:M.value)||"").trim(),poll_interval_seconds:(j=document.getElementById("chk-service-inherit-poll"))!=null&&j.checked?null:60,poll_endpoint:(((Y=document.getElementById("srv-endpoint"))==null?void 0:Y.value)||"").trim(),pipeline_key_template:(((te=document.getElementById("srv-pipeline"))==null?void 0:te.value)||"").trim(),fallback_lookup_column:(((z=document.getElementById("srv-fallback-col"))==null?void 0:z.value)||"").trim()||null,fallback_lookup_field:(((ue=document.getElementById("srv-fallback-field"))==null?void 0:ue.value)||"").trim()||null,enrichment_endpoints:je,enabled:((pe=document.getElementById("chk-service-enabled"))==null?void 0:pe.checked)??!0,allowed_event_types:i,field_mappings:(t==null?void 0:t.field_mappings)||[]},Fe={...o,[se]:at};a.editingServiceId&&a.editingServiceId!==se&&delete Fe[a.editingServiceId],$.setData(I.all,()=>({...s.data,services:Fe})),e.set(Ie=>({...Ie,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))}catch(se){alert("Error saving service: "+se.stack)}},m=async()=>{var F;const C=l(),k=C.id.trim(),B=C.poll_endpoint.trim()||"/api/v3/history";if(!k){alert("Service ID is required before discovering events.");return}e.set(M=>({...M,serviceModalDraft:C,isDiscoveringEvents:!0,discoveryEventsError:null}));try{const M=await T.post("/api/v1/pipeline/sample",{service_id:k,endpoint:B});if(M&&M.success===!1){e.set(z=>({...z,serviceModalDraft:l(),isDiscoveringEvents:!1,discoveryEventsError:M.error||"Failed to discover events from API."}));return}let j=[];Array.isArray(M==null?void 0:M.sample_payload)?j=M.sample_payload:(F=M==null?void 0:M.sample_payload)!=null&&F.records&&Array.isArray(M.sample_payload.records)?j=M.sample_payload.records:M!=null&&M.sample_payload&&typeof M.sample_payload=="object"&&(j=[M.sample_payload]);const Y=new Set;for(const z of j)z&&typeof z=="object"&&(z.eventType?Y.add(String(z.eventType)):z.event_type?Y.add(String(z.event_type)):z.type&&Y.add(String(z.type)));const te=Array.from(Y);e.set(z=>({...z,serviceModalDraft:l(),isDiscoveringEvents:!1,serviceDiscoveredEvents:te,discoveryEventsError:te.length===0?`No eventType found in sample payload (${j.length} records).`:null}))}catch(M){e.set(j=>({...j,serviceModalDraft:l(),isDiscoveringEvents:!1,discoveryEventsError:M.message||"Error communicating with sample endpoint."}))}},p=C=>{const k=l();let B;i.includes(C)?B=i.filter(F=>F!==C):B=[...i,C],e.set(F=>({...F,serviceModalDraft:k,serviceAllowedEvents:B}))},g=C=>{const k=l();C==="sonarr"?(k.name=k.name||"Sonarr",k.id=k.id||"sonarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments=`episode: /api/v3/episode/{episodeId}
series: /api/v3/series/{seriesId}`):C==="radarr"?(k.name=k.name||"Radarr",k.id=k.id||"radarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments="movie: /api/v3/movie/{movieId}"):C==="jellyfin"?(k.name=k.name||"Jellyfin",k.id=k.id||"jellyfin",k.poll_endpoint="/Items?Recursive=true",k.pipeline_key_template="{service}:{Id}"):C==="shoko"&&(k.name=k.name||"Shoko",k.id=k.id||"shoko",k.poll_endpoint="/api/v3/Series",k.pipeline_key_template="{service}:{id}"),e.set(B=>({...B,serviceModalDraft:k}))},f=a.serviceModalDraft,b=f?f.name:(t==null?void 0:t.name)||"",y=f?f.id:a.editingServiceId||"",_=f?f.base_url:(t==null?void 0:t.base_url)||"",x=f?f.api_key:(t==null?void 0:t.api_key)||"",S=f?f.inherit_poll:t?t.poll_interval_seconds==null:!0,R=f?f.poll_endpoint:(t==null?void 0:t.poll_endpoint)||(t==null?void 0:t.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",L=f?f.pipeline_key_template:(t==null?void 0:t.pipeline_key_template)||"{service}:{id}",A=f?f.enrichments:t!=null&&t.enrichment_endpoints?Object.entries(t.enrichment_endpoints).map(([C,k])=>`${C}: ${k}`).join(`
`):"",O=(f==null?void 0:f.fallback_lookup_column)??((t==null?void 0:t.fallback_lookup_column)||""),w=(f==null?void 0:f.fallback_lookup_field)??((t==null?void 0:t.fallback_lookup_field)||""),D=f?f.enabled:t?t.enabled:!0,W=Array.from(new Set([...i,...c])),J=d`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${h({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>g("sonarr")})}
      ${h({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>g("radarr")})}
      ${h({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>g("jellyfin")})}
      ${h({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>g("shoko")})}
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
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${x}>
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
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${O}>
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
          ${h({label:u?"Discovering...":"Discover Events from API",variant:"secondary",size:"sm",loading:u,disabled:u,onClick:m})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        
        ${r?d`<div class="u-text-danger u-text-xs u-mb-2">${r}</div>`:E}

        ${W.length>0?d`
          <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ${W.map(C=>{const k=i.includes(C);return d`
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
        `:d`
          <div class="u-text-muted u-text-sm">Click 'Discover Events from API' to fetch supported eventTypes from the primary poll endpoint.</div>
        `}
      </div>
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="chk-service-enabled" .checked=${D}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,H=d`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:n})}
      ${h({label:a.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:v})}
    </div>
  `;return Z({title:a.editingServiceId?"Edit Service":"Register Service",size:"lg",onClose:n,body:J,footer:H})}function Ws({checked:e=!1,onChange:a,label:s=""}){return d`
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
      ${s?d`<span class="u-text-sm u-font-mono" style="color: ${e?"var(--color-success)":"var(--color-text-muted)"}; font-weight: bold;">${s}</span>`:""}
    </label>
  `}function Js(e,a=[]){const s=()=>{e.set(i=>({...i,isStageModalOpen:!0,editingStageId:null}))},o=(i,c)=>{const u=$.read(I.all);if(!u||!u.data)return;const r=[...u.data.stages],l=i+c;l<0||l>=r.length||([r[i],r[l]]=[r[l],r[i]],$.setData(I.all,()=>({...u.data,stages:r})),e.set(n=>({...n,isDirty:!0})))},t=i=>i.start_condition?i.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${h({label:"+ Add Stage",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${a.length===0?d`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:a.map((i,c)=>{const u=t(i);return d`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${u.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${u.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${i.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${i.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${u.bg}; color: ${u.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${u.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Ws({checked:i.enabled,label:i.enabled?"ACTIVE":"INACTIVE",onChange:r=>{const l={...$.read(I.all).data},n=l.stages.find(v=>v.id===i.id);n&&(n.enabled=r,r&&!n.start_condition&&!n.last_activated_at&&(n.last_activated_at=new Date().toISOString()),$.setData(I.all,()=>l),e.set(v=>({...v,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${h({label:"↑",variant:"ghost",size:"sm",disabled:c===0,onClick:()=>o(c,-1)})}
                      ${h({label:"↓",variant:"ghost",size:"sm",disabled:c===a.length-1,onClick:()=>o(c,1)})}
                      ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(r=>({...r,isStageModalOpen:!0,editingStageId:i.id}))})}
                      ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
                    </div>
                  </div>
                </div>
                <div class="u-text-sm u-text-muted u-mt-1">${i.description||"No description provided."}</div>
                <div class="u-text-xs u-font-mono u-mt-3" style="background: color-mix(in srgb, var(--color-bg-card) 50%, transparent); padding: 8px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);">
                  <div style="margin-bottom: 4px; color: var(--color-success);">
                    ${i.start_condition?"":"✓ "}<strong>START CONDITION:</strong> ${i.start_condition?i.start_condition:"NULL (ROOT STAGE - Immediate Execution)"}
                  </div>
                  <div style="color: var(--color-warning);">
                    ${i.complete_condition?"":"✗ "}<strong>COMPLETE CONDITION:</strong> ${i.complete_condition?i.complete_condition:"NULL (SINK STAGE - Ends on Start)"}
                  </div>
                  ${!i.start_condition&&i.last_activated_at?d`
                    <div style="margin-top: 4px; color: var(--color-text-muted);">
                      <strong>CUTOFF:</strong> ${i.last_activated_at}
                    </div>
                  `:E}
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function De(e,a){const s=document.querySelectorAll(`.stage-scope-col-${e}:checked`).length,o=document.getElementById(`stage-scope-status-${e}`);if(!o)return;const t=s>0&&s<a?`(${s} of ${a} active)`:"(All fields active by default)";o.setAttribute("data-status",t)}function Xs(e,a,s){if(!e||e.length===0)return d`<span class="u-text-muted u-text-sm">No services configured.</span>`;const o=(s==null?void 0:s.service_mapping_scopes)||{};return d`
    <style>
      .stage-scope-status-badge::after {
        content: attr(data-status);
      }
    </style>
    <div class="u-flex u-flex-col u-gap-3">
      ${e.map(t=>{var n,v;const i=((n=s==null?void 0:s.service_ids)==null?void 0:n.includes(t))??!1,c=((v=a[t])==null?void 0:v.field_mappings)||[],u=o[t]||[],r=Array.isArray(u)&&u.length>0&&u.length<c.length,l=r?`(${u.length} of ${c.length} active)`:"(All fields active by default)";return d`
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <div class="u-flex u-items-center u-justify-between">
              <label class="form-checkbox" style="cursor: pointer; margin: 0;">
                <input type="checkbox" name="stage-service" value="${t}" ?checked=${i}>
                <span class="u-text-sm font-mono" style="font-weight: 600;">${t}</span>
              </label>
              ${c.length>0?d`<span class="u-text-xs u-text-muted font-mono stage-scope-status-badge" id="stage-scope-status-${t}" data-status="${l}"></span>`:E}
            </div>

            ${c.length>0?d`
              <details ?open=${r} style="margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px dashed var(--color-border);">
                <summary style="cursor: pointer; user-select: none;" class="u-text-xs u-text-muted">
                  <span>Configure Field Scope for <strong>${t}</strong></span>
                </summary>
                <div style="margin-top: var(--space-2);">
                  <div class="u-flex u-items-center u-justify-between u-mb-2">
                    <p class="u-text-xs u-text-muted" style="margin: 0;">
                      Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage.
                    </p>
                    <div class="u-flex u-gap-1">
                      ${h({label:"Select All",variant:"ghost",size:"sm",onClick:m=>{m.preventDefault(),document.querySelectorAll(`.stage-scope-col-${t}`).forEach(p=>{p.checked=!0}),De(t,c.length)}})}
                      ${h({label:"Clear All",variant:"ghost",size:"sm",onClick:m=>{m.preventDefault(),document.querySelectorAll(`.stage-scope-col-${t}`).forEach(p=>{p.checked=!1}),De(t,c.length)}})}
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-2);">
                    ${c.map(m=>{const p=(m.target_column||"").toUpperCase(),g=r&&u.map(f=>f.toUpperCase()).includes(p);return d`
                        <label class="form-checkbox u-flex u-items-center u-gap-2" style="font-size: 0.8rem; background: var(--color-bg-card); padding: 4px 6px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
                          <input type="checkbox"
                            class="stage-scope-col stage-scope-col-${t}"
                            data-service="${t}"
                            value="${p}"
                            ?checked=${g}
                            @change=${()=>De(t,c.length)}>
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
  `}function Qs(e,a){var o,t;const s={};for(const i of e){const c=((t=(o=a[i])==null?void 0:o.field_mappings)==null?void 0:t.length)||0;if(c===0)continue;const u=Array.from(document.querySelectorAll(`.stage-scope-col-${i}:checked`));u.length>0&&u.length<c&&(s[i]=u.map(r=>r.value.toUpperCase()))}return s}function Zs(e){if(!e)return"";try{const a=new Date(e);if(isNaN(a.getTime()))return"";const s=o=>String(o).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())}T${s(a.getHours())}:${s(a.getMinutes())}`}catch{return""}}function ea(e){var p,g,f;const a=e.get(),s=$.read(I.all),o=((p=s==null?void 0:s.data)==null?void 0:p.stages)||[],t=((g=s==null?void 0:s.data)==null?void 0:g.services)||((f=s==null?void 0:s.data)==null?void 0:f.apps)||{},i=Object.keys(t),c=a.editingStageId?o.find(b=>b.id===a.editingStageId):null,u=a.stageIsSink??(c?!c.complete_condition:!1),r=a.stageIsRoot??(c?!c.start_condition:!1),l=()=>{e.set(b=>({...b,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},n=()=>{var b,y,_;try{const x=document.getElementById("stage-id").value.trim();if(!x){alert("Stage ID is required");return}let S=null;if(r){const w=(b=document.getElementById("stage-last-activated"))==null?void 0:b.value;if(w)try{S=new Date(w).toISOString()}catch{S=(c==null?void 0:c.last_activated_at)||null}}const R=Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(w=>w.value),L=Qs(R,t),A={id:x,name:document.getElementById("stage-name").value.trim()||x,description:document.getElementById("stage-desc").value.trim(),service_ids:R,service_mapping_scopes:L,start_condition:r?null:((y=document.getElementById("stage-start"))==null?void 0:y.value.trim())||null,complete_condition:u?null:((_=document.getElementById("stage-complete"))==null?void 0:_.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:c?c.order:o.length+1,last_activated_at:S};let O=[...o];a.editingStageId?O=O.map(w=>w.id===a.editingStageId?A:w):O.push(A),$.setData(I.all,()=>({...s.data,stages:O})),e.set(w=>({...w,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(x){alert("Error in Save Stage: "+x.stack)}},v=d`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(c==null?void 0:c.id)||""} ?disabled=${!!c} @input=${b=>{b.target.value=b.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(c==null?void 0:c.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(c==null?void 0:c.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services & Field Scopes</label>
      ${Xs(i,t,c)}
      <small class="u-text-muted u-mt-1" style="display: block;">Select services operating within this pipeline stage and optionally restrict mapped fields.</small>
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
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(c==null?void 0:c.start_condition)||""}>
          ${h({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-start").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>

      <div style="display: ${r?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Only service events occurring on or after this timestamp will be ingested. Leave empty to ingest all events without cutoff.</p>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${Zs(c?c.last_activated_at:r?new Date().toISOString():"")}>
          ${h({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");if(b){const y=new Date,_=x=>String(x).padStart(2,"0");b.value=`${y.getFullYear()}-${_(y.getMonth()+1)}-${_(y.getDate())}T${_(y.getHours())}:${_(y.getMinutes())}`}}})}
          ${h({label:"Clear",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");b&&(b.value="")}})}
        </div>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-sink" .checked=${u} @change=${b=>e.set(y=>({...y,stageIsSink:b.target.checked}))}>
        <label for="chk-stage-sink"><strong>Sink Collector Stage (Final)</strong> — <code>complete_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Sink stages never "complete" in the DAG; they collect items at the end of the pipeline.</p>
      
      <div style="display: ${u?"none":"block"};">
        <label class="form-label u-text-sm"><strong>Complete Condition Predicate (Optional)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Evaluated to determine if this stage has finished processing the item. Leave empty to complete immediately upon mapping.</p>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(c==null?void 0:c.complete_condition)||""}>
          ${h({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-complete").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(c==null?void 0:c.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(c==null?void 0:c.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${c?c.enabled:!1}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,m=d`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:l})}
      ${h({label:a.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:n})}
    </div>
  `;return Z({title:"Configure DAG Stage",size:"lg",onClose:l,body:v,footer:m})}function ta(e,a={}){const s=Object.keys(a),o=e.get().selectedMappingService||s[0]||"",t=()=>{e.set(n=>({...n,isSampleApiModalOpen:!0,selectedMappingService:o}))},i=()=>{e.set(n=>({...n,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},c=(n,v)=>{e.set(m=>({...m,isMappingModalOpen:!0,editingMapping:{...n},editingMappingIndex:v}))},u=(n,v)=>{const p={...$.read(I.all).data},g=p.services[o].field_mappings,f=n+v;if(f<0||f>=g.length)return;const b=g[n];g[n]=g[f],g[f]=b,$.setData(I.all,()=>p),e.set(y=>({...y,isDirty:!0}))},r=n=>{if(confirm("Are you sure you want to delete this mapping?")){const m={...$.read(I.all).data};m.services[o].field_mappings.splice(n,1),$.setData(I.all,()=>m),e.set(p=>({...p,isDirty:!0}))}},l=()=>d`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${n=>e.set(v=>({...v,selectedMappingService:n.target.value}))}
        >
          ${s.map(n=>d`<option value="${n}" ?selected=${n===o}>${a[n].name}</option>`)}
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
          ${h({label:"Sample API",variant:"test",size:"sm",onClick:t})}
          ${h({label:"+ Add Mapping",variant:"add",size:"sm",onClick:i})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${s.length>0?l():E}
        
        ${(()=>{const n=a[o];return!n||!n.field_mappings||n.field_mappings.length===0?d`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:d`
            <div class="u-flex u-flex-col u-gap-3">
              ${n.field_mappings.map((v,m)=>d`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${v.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${v.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${v.data_type})</span>
                    ${v.transformer?d`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${v.transformer}</div>`:E}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${h({label:"▲",variant:"ghost",size:"sm",disabled:m===0,ariaLabel:"Move Up",onClick:()=>u(m,-1)})}
                    ${h({label:"▼",variant:"ghost",size:"sm",disabled:m===n.field_mappings.length-1,ariaLabel:"Move Down",onClick:()=>u(m,1)})}
                    ${h({label:"Edit",variant:"ghost",size:"sm",onClick:()=>c(v,m)})}
                    ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>r(m)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function sa(e){const a=e.get(),s=a.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},o=()=>{e.set(u=>({...u,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},t=()=>{const r={...$.read(I.all).data},l=Object.keys(r.services||{}),n=a.selectedMappingService||l[0];n&&(r.services[n].field_mappings||(r.services[n].field_mappings=[]),a.editingMappingIndex>=0?r.services[n].field_mappings[a.editingMappingIndex]=s:r.services[n].field_mappings.push(s),$.setData(I.all,()=>r),e.set(v=>({...v,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},i=d`
    <div class="form-group u-mb-3">
      <label>Target Service</label>
      <input type="text" class="form-input" readonly value="${a.selectedMappingService}">
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Source Payload Field</label>
        <input type="text" class="form-input font-mono" placeholder="tags, title, seriesId" .value=${s.source_field} @input=${u=>s.source_field=u.target.value}>
      </div>
      <div class="form-group">
        <label>Target DB Column (Uppercase)</label>
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${s.target_column} @input=${u=>{let r=u.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");r=r.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),u.target.value=r,s.target_column=r}}>
        <small class="u-text-muted">Strict regex: <code>^[A-Z0-9_]+$</code></small>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Data Type</label>
      <select class="form-select" .value=${s.data_type} @change=${u=>s.data_type=u.target.value}>
        <option value="TEXT" ?selected=${s.data_type==="TEXT"}>TEXT</option>
        <option value="INTEGER" ?selected=${s.data_type==="INTEGER"}>INTEGER</option>
        <option value="REAL" ?selected=${s.data_type==="REAL"}>REAL</option>
        <option value="BOOLEAN" ?selected=${s.data_type==="BOOLEAN"}>BOOLEAN</option>
      </select>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-2">
      <label class="form-label u-text-sm">Transformer Expression (Optional)</label>
      <input type="text" class="form-input font-mono u-mb-2" placeholder="'anime' in value" .value=${s.transformer||""} @input=${u=>s.transformer=u.target.value}>
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
          ${h({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const u=document.getElementById("transformerTestVal").value;let r;try{r=JSON.parse(u)}catch{r=u}try{const l={expression:s.transformer,sample_value:r};typeof r=="object"&&r!==null&&!Array.isArray(r)&&(l.context_dict=r);const n=await T.post("/api/v1/settings/test-transformer",l);n.valid?alert("Result: "+JSON.stringify(n.result)):alert("Error: "+n.message)}catch(l){alert("Error: "+l.message)}}})}
        </div>
      </div>
    </div>
  `,c=d`
    <div class="u-flex u-gap-2">
      ${h({label:"Cancel",variant:"secondary",onClick:o})}
      ${h({label:"Save Mapping",variant:"save",onClick:t})}
    </div>
  `;return Z({title:"Configure Field Mapping & Transformer",size:"lg",onClose:o,body:i,footer:c})}function aa(e){var L;const a=e.get(),s=$.read(I.all),o=((L=s==null?void 0:s.data)==null?void 0:L.services)||{},t=Object.keys(o),i=a.selectedMappingService||t[0]||"",c=o[i],u=(c==null?void 0:c.name)||i||"No Service Selected",r=(c==null?void 0:c.poll_endpoint)||"/api/v3/history",l=a.sampleApiEndpoint!==void 0?a.sampleApiEndpoint:r,n=a.sampleApiLoading||!1,v=a.sampleApiError||null,m=a.sampleApiFields||null,p=(a.sampleApiFilter||"").trim().toLowerCase(),g=(a.sampleApiPrefix||"").trim(),f=()=>{e.set(A=>({...A,isSampleApiModalOpen:!1,sampleApiLoading:!1,sampleApiError:null,sampleApiFilter:"",sampleApiFields:null}))},b=async()=>{const A=document.getElementById("sample-endpoint-input"),O=A?A.value.trim():l;if(!i){alert("Please select or configure a service before sampling.");return}if(!O){alert("Please provide an endpoint to sample.");return}e.set(w=>({...w,sampleApiLoading:!0,sampleApiError:null,sampleApiEndpoint:O}));try{const w=await T.post("/api/v1/pipeline/sample",{service_id:i,endpoint:O});w&&w.success===!1?e.set(D=>({...D,sampleApiLoading:!1,sampleApiError:w.error||"Failed to sample API endpoint",sampleApiFields:[]})):e.set(D=>({...D,sampleApiLoading:!1,sampleApiFields:w.fields||[],sampleApiError:null}))}catch(w){e.set(D=>({...D,sampleApiLoading:!1,sampleApiError:w.message||"Error communicating with sample endpoint",sampleApiFields:[]}))}},y=A=>{const O=document.getElementById("sample-namespace-prefix"),w=O?O.value.trim():g,D=w?`${w}.${A.path}`:A.path,W=D.replace(/[^a-zA-Z0-9_]/g,"_").toUpperCase(),H={int:"INTEGER",float:"REAL",bool:"BOOLEAN",str:"TEXT",list:"TEXT",dict:"TEXT"}[A.type]||"TEXT";e.set(ee=>({...ee,isSampleApiModalOpen:!1,isMappingModalOpen:!0,editingMapping:{source_field:D,target_column:W,data_type:H,transformer:""},editingMappingIndex:-1}))},_=m?m.filter(A=>p?A.path&&A.path.toLowerCase().includes(p)||A.type&&A.type.toLowerCase().includes(p)||A.sample&&String(A.sample).toLowerCase().includes(p):!0):[],x=()=>n?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Fetching and analyzing schema from <code>${l}</code>...</p>
        </div>
      `:v?d`
        <div style="background: color-mix(in srgb, var(--color-danger) 10%, transparent); border-radius: var(--radius-md); border: 1px solid var(--color-danger); padding: var(--space-4);">
          <strong class="u-text-danger u-text-sm">Sampling Error:</strong>
          <p class="u-text-danger u-text-xs u-mt-1 font-mono" style="margin-bottom: 0;">${v}</p>
        </div>
      `:m===null?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Click <strong>Fetch Sample</strong> to inspect payload JSON schema and available keys.</p>
        </div>
      `:m.length===0?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields discovered at this endpoint.</p>
        </div>
      `:_.length===0?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields match the current filter "<strong>${p}</strong>".</p>
        </div>
      `:d`
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
            ${_.map(A=>d`
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
                  ${h({label:"+ Map",variant:"secondary",size:"sm",onClick:()=>y(A)})}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${_.length} of ${m.length} discovered fields.
      </div>
    `,S=d`
    <div class="u-flex u-items-center u-gap-3 u-mb-3">
      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 6px 10px; border-radius: 4px; font-weight: bold; white-space: nowrap;">
        ${u} (${i})
      </span>
      <input 
        type="text" 
        id="sample-endpoint-input"
        list="common-endpoints-list" 
        class="form-input font-mono" 
        placeholder="Select an endpoint below or type custom..." 
        style="flex: 1;"
        .value=${l}
        @input=${A=>e.set(O=>({...O,sampleApiEndpoint:A.target.value}))}
      >
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${h({label:n?"Fetching...":"Fetch Sample",variant:"test",loading:n,disabled:n,onClick:b})}
    </div>
    
    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input 
          type="text" 
          id="sample-filter-input"
          class="form-input" 
          placeholder="🔍 Filter discovered attributes (e.g. episode, id, title)..."
          .value=${a.sampleApiFilter||""}
          @input=${A=>e.set(O=>({...O,sampleApiFilter:A.target.value}))}
        >
        <!-- UX-01: Add Namespace Prefix input -->
        <input 
          type="text" 
          id="sample-namespace-prefix"
          class="form-input font-mono" 
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${a.sampleApiPrefix||""}
          @input=${A=>e.set(O=>({...O,sampleApiPrefix:A.target.value}))}
        >
      </div>
    </div>
    
    ${x()}
  `,R=d`
    <div class="u-flex u-gap-2">
      ${h({label:"Close",variant:"secondary",onClick:f})}
    </div>
  `;return Z({title:"Sample Service API Schema",size:"lg",onClose:f,body:S,footer:R})}function oa(e,a={}){const s=Array.isArray(a.notification_triggers)?a.notification_triggers:Array.isArray(a.triggers)?a.triggers:[],o=()=>{e.set(r=>({...r,isNotificationModalOpen:!0}))},t=async r=>{try{const l=await T.post("/api/v1/settings/test-notification",{trigger_id:r==null?void 0:r.id,channel:(r==null?void 0:r.channel)||"ntfy",target_url:(r==null?void 0:r.target_url)||"http://host.docker.internal:8090",topic:(r==null?void 0:r.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(r==null?void 0:r.id)||"manual"}`});if(l&&l.success)alert(`✓ Notification successfully dispatched to ${(r==null?void 0:r.channel)||"ntfy"}`);else{const n=(l==null?void 0:l.error)||(l!=null&&l.status_code?`HTTP ${l.status_code}: ${l.response||"Failed"}`:(l==null?void 0:l.response)||"Unknown response");alert(`Failed to send alert: ${n}`)}}catch(l){alert(`Error sending test notification: ${l.message}`)}},i=async r=>{if(await he({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${r}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const n=$.read(I.all);if(!n||!n.data)return;const m=(Array.isArray(n.data.notification_triggers)?n.data.notification_triggers:[]).filter(p=>p.id!==r);$.setData(I.all,p=>({...p,notification_triggers:m})),e.set(p=>({...p,isDirty:!0}))}},c=(r,l)=>{const n=$.read(I.all);if(!n||!n.data)return;const m=(Array.isArray(n.data.notification_triggers)?n.data.notification_triggers:[]).map(p=>p.id===r?{...p,enabled:!l}:p);$.setData(I.all,p=>({...p,notification_triggers:m})),e.set(p=>({...p,isDirty:!0}))},u=r=>r.includes("OPEN")||r.includes("FAIL")?"warning":r.includes("RESOLVED")||r.includes("SUCCESS")||r.includes("COMPLETE")?"success":"info";return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${h({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>t({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${h({label:"+ Add Trigger",variant:"save",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${s.length===0?d`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>`:s.map(r=>d`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${r.id}</strong>
                  ${ge({label:r.event||"ON_INCIDENT_OPEN",tone:u(r.event||"")})}
                  ${ge({label:r.channel||"ntfy",tone:"neutral"})}
                  ${r.enabled===!1?ge({label:"Disabled",tone:"danger"}):E}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>c(r.id,r.enabled!==!1)}
                  >
                    ${r.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${h({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>t(r)})}
                  ${h({label:"Delete",variant:"delete",size:"sm",onClick:()=>i(r.id)})}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${r.target_url||"-"}</span>
                </div>
                ${r.topic?d`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${r.topic}</span>
                  </div>
                `:E}
                ${r.priority?d`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${r.priority}</span>
                  </div>
                `:E}
                ${r.tags?d`
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
  `}function ra(e){const a=()=>{e.set(i=>({...i,isNotificationModalOpen:!1}))},s=i=>{var y,_,x,S,R,L,A,O;i&&i.preventDefault();const c=(y=document.getElementById("input-trig-id"))==null?void 0:y.value.trim();if(!c){alert("Trigger ID is required.");return}const u=(_=document.getElementById("input-trig-event"))==null?void 0:_.value,r=(x=document.getElementById("input-trig-channel"))==null?void 0:x.value,l=(S=document.getElementById("input-trig-url"))==null?void 0:S.value.trim();if(!l){alert("Target URL is required.");return}const n=((R=document.getElementById("input-trig-topic"))==null?void 0:R.value.trim())||"",v=((L=document.getElementById("input-trig-priority"))==null?void 0:L.value.trim())||"default",m=((A=document.getElementById("input-trig-tags"))==null?void 0:A.value.trim())||"server",p=((O=document.getElementById("input-trig-template"))==null?void 0:O.value.trim())||"{event}: {details}",g=$.read(I.all);if(!g||!g.data)return;const b=(Array.isArray(g.data.notification_triggers)?[...g.data.notification_triggers]:[]).filter(w=>w.id!==c);b.push({id:c,event:u,enabled:!0,channel:r,target_url:l,topic:n,priority:v,tags:m,message_template:p}),$.setData(I.all,w=>({...w,notification_triggers:b})),e.set(w=>({...w,isDirty:!0,isNotificationModalOpen:!1}))},o=d`
    <form id="notification-trigger-form" @submit=${s}>
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
  `,t=d`
    <div class="u-flex u-gap-2 u-justify-end">
      ${h({label:"Cancel",variant:"secondary",onClick:a})}
      ${h({label:"Save Trigger",variant:"save",onClick:()=>s()})}
    </div>
  `;return Z({title:"Configure Notification Trigger",size:"md",onClose:a,body:o,footer:t})}function na(e,a={}){const s=a.retention_days||30,o=a.global_poll_interval_seconds||300;return d`
      <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Storage & Engine Maintenance</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Control data retention, global polling cadence, and inspect custom polling overrides.</p>
        </div>
        
        <div style="padding: var(--space-4);">
          <div class="form-grid-2 u-mb-4">
            <div class="form-group">
              <label>Data Retention (Days)</label>
              <input type="number" class="form-input" min="1" max="365" .value=${s} 
                @input=${t=>{const c={...$.read(I.all).data,retention_days:parseInt(t.target.value,10)||30};$.setData(I.all,()=>c),e.set(u=>({...u,isDirty:!0}))}}>
              <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
            </div>
            <div class="form-group">
              <label>Global Polling Interval (Seconds)</label>
              <input type="number" class="form-input" min="10" max="86400" .value=${o}
                @input=${t=>{const c={...$.read(I.all).data,global_poll_interval_seconds:parseInt(t.target.value,10)||300};$.setData(I.all,()=>c),e.set(u=>({...u,isDirty:!0}))}}>
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
  `}const ia={testEnrichment:e=>T.post("/api/v1/pipeline/sandbox/enrichment",e)};function la(){let e={selectedService:"",selectedRecordId:"",sampleEndpoint:"",customContextText:"",customContextError:null,testName:"",testEndpoint:"",testResponse:null,rawContextData:null,flattenedKeys:[],inspectorTab:"keys",inspectorFilter:"",copiedPath:null,testVariable:"",logs:[],isLoading:!1,error:null,saveSuccess:!1};const a=new Set,s=()=>e,o=l=>{e=typeof l=="function"?l(e):{...e,...l},a.forEach(n=>n())};return{get:s,set:o,subscribe:l=>(a.add(l),()=>a.delete(l)),runTest:async()=>{var y,_;const l=s();if(!l.selectedService){o({error:"Please select a configured service to test."});return}let n=null;if(l.customContextText.trim())try{n=JSON.parse(l.customContextText)}catch(x){o({error:`Invalid Custom JSON Context: ${x.message}`});return}const v=$.read(I.all),p=(((y=v==null?void 0:v.data)==null?void 0:y.services)||{})[l.selectedService],g={...(p==null?void 0:p.enrichment_endpoints)||{}},f=l.testName.trim()||"sandbox_test",b=!!l.testEndpoint.trim();b&&(g[f]=l.testEndpoint.trim()),o({isLoading:!0,error:null,logs:[],testResponse:null});try{const x=await ia.testEnrichment({service_id:l.selectedService,record_id:l.selectedRecordId?parseInt(l.selectedRecordId,10):null,sample_endpoint:l.sampleEndpoint.trim()||null,custom_context:n,enrichment_endpoints:g}),S=b?((_=x.context_data)==null?void 0:_[f])||null:x.context_data;o({isLoading:!1,logs:x.logs||[],rawContextData:x.context_data||null,flattenedKeys:x.flattened_keys||[],testResponse:S})}catch(x){o({isLoading:!1,error:x.message})}},saveEndpoint:async()=>{var _;const l=s();if(!l.selectedService)return;const n=l.testName.trim(),v=l.testEndpoint.trim();if(!n||!v){o({error:"Please provide both a namespace name and an endpoint to save."});return}const m=$.read(I.all),p=((_=m==null?void 0:m.data)==null?void 0:_.services)||{},g=p[l.selectedService],f={...(g==null?void 0:g.enrichment_endpoints)||{},[n]:v},b={...p,[l.selectedService]:{...g,enrichment_endpoints:f}},y={...m.data,services:b};try{await T.post("/api/v1/settings/config",y),$.setData(I.all,()=>y),o({saveSuccess:!0,error:null}),setTimeout(()=>o({saveSuccess:!1}),3e3)}catch(x){o({error:`Failed to save to service: ${x.message}`})}},copyPath:l=>{var n;(n=navigator.clipboard)==null||n.writeText(l),o({copiedPath:l}),setTimeout(()=>{s().copiedPath===l&&o({copiedPath:null})},1500)},insertPlaceholder:l=>{const n=`{${l}}`,v=s().testEndpoint;let m;v?v.endsWith("/")||v.endsWith("=")||v.endsWith("&")?m=v+n:m=v+(v.includes("?")?"&":"/")+n:m=n,o({testEndpoint:m})}}}const _e={sonarr:["/api/v3/history","/api/v3/queue","/api/v3/series","/api/v3/episode","/api/v3/tag"],radarr:["/api/v3/history","/api/v3/queue","/api/v3/movie","/api/v3/tag"],shoko:["/api/v3/Series","/api/v3/Episode","/api/v3/File"],jellyfin:["/Items?Recursive=true","/Users","/System/Info"]};function ca(e,a){if(!a&&!e)return[];const s=[];if(a!=null&&a.poll_endpoint&&typeof a.poll_endpoint=="string"){const c=a.poll_endpoint.trim();c&&s.push(c)}if(a!=null&&a.enrichment_endpoints){const c=Array.isArray(a.enrichment_endpoints)?a.enrichment_endpoints:Object.values(a.enrichment_endpoints);for(const u of c)typeof u=="string"&&u.trim()&&s.push(u.trim())}const o=String(e||"").toLowerCase(),t=String((a==null?void 0:a.name)||"").toLowerCase(),i=`${o} ${t}`;return i.includes("sonarr")?s.push(..._e.sonarr):i.includes("radarr")?s.push(..._e.radarr):i.includes("shoko")?s.push(..._e.shoko):i.includes("jellyfin")&&s.push(..._e.jellyfin),Array.from(new Set(s))}function da({services:e={},selectedService:a="",selectedRecordId:s="",sampleEndpoint:o="",customContextText:t="",customContextError:i=null,testName:c="",isLoading:u=!1,saveSuccess:r=!1,onServiceChange:l,onRecordIdChange:n,onSampleEndpointChange:v,onCustomContextChange:m,onTestNameChange:p,onRunTest:g,onSaveToService:f}){const b=Object.keys(e),y=e[a],_=ca(a,y);return d`
    <div class="u-flex u-flex-col u-gap-3" style="flex-shrink: 0;">
      <!-- Primary Controls Row -->
      <div class="u-flex u-gap-3 u-items-center" style="flex-wrap: wrap;">
        <!-- Service Selector -->
        <div style="flex: 1; min-width: 160px; max-width: 240px;">
          <select
            class="form-select u-font-mono u-text-sm"
            @change=${x=>l==null?void 0:l(x.target.value)}
          >
            ${b.length===0?d`<option value="">No services configured</option>`:E}
            ${b.map(x=>d`
              <option value=${x} ?selected=${a===x}>
                ${e[x].name||x}
              </option>
            `)}
          </select>
        </div>

        <!-- Optional Record ID -->
        <div style="width: 140px;">
          <input
            type="number"
            class="form-input u-font-mono u-text-sm"
            placeholder="Record ID (opt)"
            title="Optional Pipeline Record ID from database"
            .value=${s}
            @input=${x=>n==null?void 0:n(x.target.value)}
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
            .value=${o}
            @input=${x=>v==null?void 0:v(x.target.value)}
          />
          <datalist id="sandbox-endpoints-list">
            ${_.map(x=>d`<option value="${x}">${x}</option>`)}
          </datalist>
        </div>

        <!-- Run Action -->
        ${h({label:"RUN",variant:"test",loading:u,disabled:u||!a||!!i,onClick:g})}

        <!-- Save Namespace Controls -->
        <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
          <span style="color: var(--color-text-muted);">&gt;</span>
          <input
            type="text"
            class="form-input u-font-mono u-text-sm"
            placeholder="namespace"
            title="Enrichment point namespace name"
            .value=${c}
            @input=${x=>p==null?void 0:p(x.target.value)}
            style="width: 130px;"
          />
          ${h({label:"SAVE",variant:"secondary",disabled:u||!a,onClick:f})}
          ${r?d`<span style="color: var(--color-success);">${Q({name:"check"})}</span>`:E}
        </div>
      </div>

      <!-- Collapsible Custom Context Row -->
      <details
        style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3);"
      >
        <summary class="u-flex u-items-center u-justify-between u-text-xs u-font-mono" style="cursor: pointer; user-select: none; color: var(--color-text-secondary);">
          <div class="u-flex u-items-center u-gap-2">
            <span>Custom JSON Context (Mock / Override)</span>
            ${t.trim()?i?d`<span class="u-text-2xs" style="color: var(--color-danger);">${i}</span>`:d`<span class="u-text-2xs" style="color: var(--color-success);">✓ Valid JSON</span>`:d`<span class="u-text-2xs u-text-muted">(Optional)</span>`}
          </div>
          <span class="u-text-2xs u-text-muted">Click to toggle</span>
        </summary>
        <div class="u-mt-2">
          <textarea
            class="form-input u-font-mono u-text-xs"
            rows="3"
            placeholder='{"series": {"id": 101, "title": "Custom Show"}, "episodeId": 456}'
            .value=${t}
            @input=${x=>m==null?void 0:m(x.target.value)}
            style="resize: vertical; line-height: 1.4; width: 100%;"
          ></textarea>
        </div>
      </details>
    </div>
  `}const ua={int:"info",float:"info",bool:"success",list:"accent",dict:"warning"},pa=e=>ua[e==null?void 0:e.toLowerCase()]||"neutral";function va(e,a){if(!(!a||!e))try{return a.split(".").reduce((s,o)=>s&&s[o]!==void 0?s[o]:void 0,e)}catch{return}}function ma({flattenedKeys:e=[],response:a=null,rawContext:s=null,logs:o=[],activeTab:t="keys",filterQuery:i="",copiedPath:c=null,testVariable:u="",onTabChange:r,onFilterChange:l,onCopyPath:n,onInsertPlaceholder:v,onTestVariableChange:m}){const p=(i||"").toLowerCase().trim(),g=e.filter(b=>!p||b.path.toLowerCase().includes(p)||b.type&&b.type.toLowerCase().includes(p)||b.sample&&String(b.sample).toLowerCase().includes(p)),f=(b,y)=>{const _=t===b;return d`
      <button
        type="button"
        class="u-text-xs u-font-mono"
        style="background: ${_?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; border: 1px solid ${_?"var(--color-accent)":"var(--color-border)"}; color: ${_?"var(--color-accent)":"var(--color-text-secondary)"}; padding: 3px var(--space-2); border-radius: var(--radius-xs); cursor: pointer;"
        @click=${()=>r==null?void 0:r(b)}
      >
        ${y}
      </button>
    `};return d`
    <div class="payload-inspector u-flex u-flex-col" style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden;">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface); flex-shrink: 0; gap: var(--space-2); flex-wrap: wrap;">
        <div class="u-flex u-items-center u-gap-2">
          ${f("keys",`Discovered Keys (${e.length})`)}
          ${f("response","Endpoint Result")}
          ${f("context","Cumulative Context")}
          ${f("logs",`Logs (${o.length})`)}
        </div>
        ${t==="keys"&&e.length>0?d`
          <div style="max-width: 180px; flex: 1;">
            <input type="text" class="form-input u-font-mono u-text-xs" placeholder="Filter keys..." .value=${i} @input=${b=>l==null?void 0:l(b.target.value)} style="padding: 2px var(--space-2); height: 26px;" />
          </div>
        `:E}
      </div>

      <div style="flex: 1; min-height: 0; overflow-y: auto;">
        ${t==="keys"?ga({filteredKeys:g,totalCount:e.length,copiedPath:c,onCopyPath:n,onInsertPlaceholder:v}):E}
        ${t==="response"?fa({response:a,testVariable:u,onTestVariableChange:m}):E}
        ${t==="context"?ba(s,"No cumulative context data available."):E}
        ${t==="logs"?xa(o):E}
      </div>
    </div>
  `}function ga({filteredKeys:e,totalCount:a,copiedPath:s,onCopyPath:o,onInsertPlaceholder:t}){return a===0?d`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🔍</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload attributes discovered yet.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and extract available placeholder paths.</div>
      </div>
    `:e.length===0?d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No keys match filter query.</div>`:d`
    <div class="u-flex u-flex-col">
      ${e.map(i=>{const c=s===i.path;return d`
          <div class="u-flex u-items-center u-justify-between u-gap-2" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); font-size: var(--font-size-xs);">
            <div class="u-flex u-flex-col u-gap-1" style="min-width: 0; flex: 1;">
              <div class="u-flex u-items-center u-gap-2">
                <span class="u-font-mono u-truncate" style="color: var(--color-accent); font-weight: var(--font-weight-medium); cursor: pointer;" title="Click to copy: ${i.path}" @click=${()=>o==null?void 0:o(i.path)}>${i.path}</span>
                ${ge({label:i.type||"unknown",tone:pa(i.type),mono:!0})}
              </div>
              ${i.sample?d`<span class="u-font-mono u-truncate u-text-muted" style="font-size: 0.7rem;" title=${i.sample}>sample: ${i.sample}</span>`:E}
            </div>
            <div class="u-flex u-items-center u-gap-1" style="flex-shrink: 0;">
              <button type="button" class="u-flex u-items-center u-gap-1 u-text-2xs u-font-mono" title="Copy path to clipboard" style="padding: 3px 6px; background: ${c?"var(--color-success)":"var(--color-bg-surface)"}; border: 1px solid ${c?"var(--color-success)":"var(--color-border)"}; color: ${c?"#fff":"var(--color-text-secondary)"}; border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>o==null?void 0:o(i.path)}>
                ${Q({name:c?"check":"copy",size:12})}
                <span>${c?"Copied":"Copy"}</span>
              </button>
              <button type="button" class="u-flex u-items-center u-gap-1 u-text-2xs u-font-mono" title="Insert placeholder {${i.path}} into endpoint" style="padding: 3px 6px; background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-accent); border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>t==null?void 0:t(i.path)}>
                ${Q({name:"plus",size:12})}
                <span>Insert</span>
              </button>
            </div>
          </div>
        `})}
    </div>
  `}function fa({response:e,testVariable:a,onTestVariableChange:s}){if(!e)return d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No endpoint response data. Execute a test request to inspect output.</div>`;const o=a.trim()?va(e,a.trim()):void 0;return d`
    <div class="u-flex u-flex-col" style="height: 100%;">
      <div class="u-flex u-flex-col u-gap-2" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface);">
        <div class="u-flex u-gap-2 u-items-center">
          <span style="color: var(--color-text-muted); font-size: var(--font-size-xs);">Test Path:</span>
          <input type="text" class="form-input u-font-mono u-text-xs" placeholder="e.g. List.0.ID or title" .value=${a} @input=${t=>s==null?void 0:s(t.target.value)} style="flex: 1; height: 26px;" />
        </div>
        ${a.trim()?d`
          <div style="padding: var(--space-2); background: var(--color-bg-base); color: ${o!==void 0?"var(--color-success)":"var(--color-danger)"}; font-family: var(--font-mono); font-size: var(--font-size-xs); max-height: 120px; overflow: auto; border-radius: var(--radius-xs); border: 1px solid var(--color-border);">
            <pre style="margin: 0; white-space: pre-wrap;">${o!==void 0?JSON.stringify(o,null,2):"undefined"}</pre>
          </div>
        `:E}
      </div>
      <pre class="u-font-mono u-text-xs" style="margin: 0; padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); white-space: pre-wrap; overflow-x: auto; line-height: 1.4; flex: 1;">${JSON.stringify(e,null,2)}</pre>
    </div>
  `}function ba(e,a){return e?d`<pre class="u-font-mono u-text-xs" style="margin: 0; padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); white-space: pre-wrap; overflow-x: auto; line-height: 1.4;">${JSON.stringify(e,null,2)}</pre>`:d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">${a}</div>`}function xa(e){return!e||e.length===0?d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No server execution logs recorded.</div>`:d`<div class="u-font-mono u-text-xs" style="padding: var(--space-3); color: var(--color-console-text); background: var(--color-bg-base); min-height: 100%; line-height: 1.5; white-space: pre-wrap;">${e.map(a=>d`<div>${a}</div>`)}</div>`}function ya({endpoints:e={},selectedName:a="",onSelectEndpoint:s}){const o=Object.entries(e);return d`
    <div
      class="u-flex u-flex-col"
      style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3); overflow-y: auto;"
    >
      <div class="u-flex u-items-center u-justify-between u-mb-3" style="flex-shrink: 0;">
        <h4 style="margin: 0; color: var(--color-text); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Saved Endpoints
        </h4>
        <span class="u-text-2xs u-text-muted u-font-mono">(${o.length})</span>
      </div>

      <div class="u-flex u-flex-col u-gap-2" style="flex: 1; min-height: 0;">
        ${o.length===0?d`
          <div class="u-text-xs u-text-muted u-text-center" style="padding: var(--space-4) 0;">
            No saved endpoints for this service.
          </div>
        `:E}

        ${o.map(([t,i])=>{const c=a===t;return d`
            <div
              class="u-flex u-flex-col u-gap-1"
              style="padding: var(--space-2); border-radius: var(--radius-xs); border: 1px solid ${c?"var(--color-accent)":"var(--color-border)"}; background: ${c?"color-mix(in srgb, var(--color-accent) 10%, transparent)":"var(--color-bg-surface)"}; cursor: pointer; transition: border-color var(--transition-fast);"
              @click=${()=>s==null?void 0:s(t,i)}
            >
              <div class="u-flex u-items-center u-justify-between">
                <strong class="u-font-mono u-text-xs" style="color: ${c?"var(--color-accent)":"var(--color-text)"};">
                  ${t}
                </strong>
              </div>
              <div
                class="u-font-mono u-text-2xs u-text-muted u-truncate"
                title=${i}
              >
                ${i}
              </div>
            </div>
          `})}
      </div>
    </div>
  `}function st(){const e=la(),a=t=>{let i=null;if(t.trim())try{JSON.parse(t)}catch{i="Invalid JSON syntax"}e.set({customContextText:t,customContextError:i})},s=()=>{var l;const t=e.get(),i=$.read(I.all),c=((l=i==null?void 0:i.data)==null?void 0:l.services)||{},u=Object.keys(c),r=c[t.selectedService];return!t.selectedService&&u.length>0&&setTimeout(()=>e.set({selectedService:u[0]}),0),d`
      <div class="u-flex u-flex-col u-gap-3" style="height: 100%; min-height: 520px;">
        <!-- Top Controls: Service, Record ID, Sample Endpoint, Mock Context, Actions -->
        ${da({services:c,selectedService:t.selectedService,selectedRecordId:t.selectedRecordId,sampleEndpoint:t.sampleEndpoint,customContextText:t.customContextText,customContextError:t.customContextError,testName:t.testName,isLoading:t.isLoading,saveSuccess:t.saveSuccess,onServiceChange:n=>e.set({selectedService:n}),onRecordIdChange:n=>e.set({selectedRecordId:n}),onSampleEndpointChange:n=>e.set({sampleEndpoint:n}),onCustomContextChange:a,onTestNameChange:n=>e.set({testName:n}),onRunTest:e.runTest,onSaveToService:e.saveEndpoint})}

        <!-- Error Feedback Banner -->
        ${t.error?d`
          <div class="u-flex u-items-center u-justify-between u-text-xs" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 15%, transparent); border: 1px solid var(--color-danger); color: var(--color-danger); border-radius: var(--radius-sm);">
            <span>${t.error}</span>
            <button type="button" style="background: none; border: none; color: inherit; cursor: pointer;" @click=${()=>e.set({error:null})}>✕</button>
          </div>
        `:E}

        <!-- Main Workspace -->
        <div class="u-flex u-gap-3" style="flex: 1; min-height: 0;">
          <!-- Left Column: Endpoint Input & Payload Inspector -->
          <div class="u-flex u-flex-col u-gap-2" style="flex: 3; min-height: 0;">
            <div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-2);">
              <div class="u-flex u-items-center u-justify-between u-mb-1">
                <span class="u-text-2xs u-text-muted u-font-mono">Endpoint Template (e.g. /api/v3/series/{series.id})</span>
                <span class="u-text-2xs u-text-muted">Use {path} placeholders</span>
              </div>
              <textarea
                class="form-input u-font-mono u-text-xs"
                placeholder="/api/v3/Endpoint/{ID}?query=..."
                rows="2"
                style="resize: none; width: 100%; border: none; background: transparent; padding: 0; outline: none;"
                .value=${t.testEndpoint}
                @input=${n=>e.set({testEndpoint:n.target.value})}
              ></textarea>
            </div>

            <div style="flex: 1; min-height: 0;">
              ${ma({flattenedKeys:t.flattenedKeys,response:t.testResponse,rawContext:t.rawContextData,logs:t.logs,activeTab:t.inspectorTab,filterQuery:t.inspectorFilter,copiedPath:t.copiedPath,testVariable:t.testVariable,onTabChange:n=>e.set({inspectorTab:n}),onFilterChange:n=>e.set({inspectorFilter:n}),onCopyPath:e.copyPath,onInsertPlaceholder:e.insertPlaceholder,onTestVariableChange:n=>e.set({testVariable:n})})}
            </div>
          </div>

          <!-- Right Column: Saved Endpoints List -->
          <div style="flex: 1; max-width: 280px; min-height: 0;">
            ${ya({endpoints:(r==null?void 0:r.enrichment_endpoints)||{},selectedName:t.testName,onSelectEndpoint:(n,v)=>e.set({testName:n,testEndpoint:v})})}
          </div>
        </div>
      </div>
    `};let o;return{view:s,mount:t=>{o=e.subscribe(t);const i=$.read(I.all);i!=null&&i.data||T.get("/api/v1/settings").then(c=>{$.setData(I.all,()=>c),e.set({})}).catch(console.error)},unmount:()=>{o&&o()}}}function ha(e){const a=st(),s=de({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""});let o,t;const i=c=>{s.get().isDirty&&(c.preventDefault(),c.returnValue="")};return{mount(c){o=s.subscribe(()=>c()),t=$.subscribe(I.all,()=>c()),Hs.getSettings(),a.mount(c),window.addEventListener("beforeunload",i),e&&e.setBeforeNavigateHook(async u=>s.get().isDirty?await he({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}):!0)},unmount(){o&&o(),t&&t(),a.unmount(),window.removeEventListener("beforeunload",i),e&&e.setBeforeNavigateHook(null)},view(){const c=s.get(),{activeTab:u,saving:r,isServiceModalOpen:l,isStageModalOpen:n,isMappingModalOpen:v,isSampleApiModalOpen:m,isNotificationModalOpen:p}=c,g=$.read(I.all),{data:f,status:b,error:y}=g;if(b==="loading"&&!f)return d`<p class="u-text-muted">Loading settings...</p>`;if(b==="error"&&!f)return d`<p class="u-text-danger">Error: ${y==null?void 0:y.message}</p>`;const _={retention_days:(f==null?void 0:f.retention_days)||30,global_poll_interval_seconds:(f==null?void 0:f.global_poll_interval_seconds)||300},x=(f==null?void 0:f.services)||{},S=(f==null?void 0:f.stages)||[],R=_.global_poll_interval_seconds,L=(A,O,w)=>{const D=u===A;return d`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${D?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${D?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${D?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>s.set(ee=>({...ee,activeTab:A}))}
          >
            ${Q({name:O,size:16})}
            <span>${w}</span>
          </button>
        `};return d`
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
              ${h({label:"Save All Settings",variant:"save",size:"sm",loading:r,disabled:!c.isDirty,onClick:async()=>{const A=$.read(I.all);if(!A||!A.data)return;const O=JSON.parse(JSON.stringify(A.data));s.set(w=>({...w,saving:!0}));try{const w=await T.post("/api/v1/settings",A.data);$.setData(I.all,()=>w),s.set(D=>({...D,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(w){$.setData(I.all,()=>O),s.set(D=>({...D,isDirty:!1,saving:!1})),alert("Failed to save settings: "+w.message+`
Rolled back to previous verified configuration.`)}}})}
              ${c.isDirty?d`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:E}
            </div>
            </div>
          </div>
          
          ${u==="services"?Ys(s,x,R):E}
          ${u==="sandbox"?a.view():E}
          ${u==="mappings"?ta(s,x):E}
          ${u==="stages"?Js(s,S):E}
          ${u==="notifications"?oa(s,f):E}
          ${u==="engine"?na(s,_):E}
          
          <!-- Modals -->
          ${l?Ks(s):E}
          ${n?ea(s):E}
          ${v?sa(s):E}
          ${m?aa(s):E}
          ${p?ra(s):E}
        </div>
      `}}}const be=lt(Ke),$a={overview:Ms(),pipeline:Cs(),tools:Ls(),views:Bs(),incidents:Vs(),sandbox:st(),gitops:qs(),settings:ha(be)};let X=null;function $e(){var s,o,t,i;const{current:e}=be.store.get();X&&X.id!==e.id&&((o=(s=X.instance).unmount)==null||o.call(s),X=null),!X&&e&&(X={id:e.id,instance:$a[e.id]},(i=(t=X.instance).mount)==null||i.call(t,$e));const a=X?X.instance.view():"";nt(ns({routerStore:be.store.get(),routes:Ke,router:be,pageContent:a}),document.getElementById("app"))}be.store.subscribe($e);ke.store.subscribe($e);$.subscribe(ye.all,$e);Ze.getOverview().catch(()=>{});$e();
