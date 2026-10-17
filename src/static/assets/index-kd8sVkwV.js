import{j as rt,E as it,w as D,b as d,A as w,D as lt}from"./vendor-LJTP5CNr.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function ct(){const e=new Map;return{on(a,s){return e.has(a)||e.set(a,new Set),e.get(a).add(s),()=>e.get(a).delete(s)},emit(a,s){if(e.has(a))for(const o of e.get(a))o(s)}}}function de(e){let a=e;const s=new Set;return{get:()=>a,set:o=>{a=typeof o=="function"?o(a):o;for(const t of s)t(a)},subscribe:o=>(s.add(o),()=>s.delete(o))}}function dt(e){const a=de({current:null,params:{}});let s=null;async function o(t){const i=window.location.hash.slice(1)||"/";if(s&&a.get().current&&a.get().current.path!==i&&!await s(i)){window.removeEventListener("hashchange",o),window.location.hash=a.get().current.path,setTimeout(()=>window.addEventListener("hashchange",o),0);return}const l=e.find(u=>u.path===i)||e[0];a.set({current:l,params:{}})}return window.addEventListener("hashchange",o),o(),{store:a,navigate(t){window.location.hash=t},setBeforeNavigateHook(t){s=t}}}const Je=[{id:"overview",path:"/",title:"Overview",pageTitle:"System Overview",icon:"grid"},{id:"pipeline",path:"/pipeline",title:"Universal Pipeline",pageTitle:"Universal Pipeline",icon:"activity"},{id:"views",path:"/views",title:"View Builder",pageTitle:"View Builder & Projections",icon:"file-text"},{id:"incidents",path:"/incidents",title:"Incidents & Errors",pageTitle:"Incidents & Error Index",icon:"alert"},{id:"tools",path:"/tools",title:"Custom Tools",pageTitle:"Sandboxed Custom Tools",icon:"tool"},{id:"gitops",path:"/gitops",title:"GitOps State",pageTitle:"GitOps Telemetry",icon:"git-branch"},{id:"settings",path:"/settings",title:"Settings",pageTitle:"System Configuration",icon:"settings"}];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={CHILD:2},Qe=e=>(...a)=>({_$litDirective$:e,values:a});let Ze=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,s,o){this._$Ct=a,this._$AM=s,this._$Ci=o}_$AS(a,s){return this.update(a,s)}update(a,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ut}=rt,Ge=e=>e,pt=e=>e.strings===void 0,qe=()=>document.createComment(""),ve=(e,a,s)=>{var i;const o=e._$AA.parentNode,t=a===void 0?e._$AB:a._$AA;if(s===void 0){const l=o.insertBefore(qe(),t),u=o.insertBefore(qe(),t);s=new ut(l,u,e,e.options)}else{const l=s._$AB.nextSibling,u=s._$AM,n=u!==e;if(n){let c;(i=s._$AQ)==null||i.call(s,e),s._$AM=e,s._$AP!==void 0&&(c=e._$AU)!==u._$AU&&s._$AP(c)}if(l!==t||n){let c=s._$AA;for(;c!==l;){const r=Ge(c).nextSibling;Ge(o).insertBefore(c,t),c=r}}}return s},oe=(e,a,s=e)=>(e._$AI(a,s),e),vt={},mt=(e,a=vt)=>e._$AH=a,gt=e=>e._$AH,Ce=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=(e,a,s)=>{const o=new Map;for(let t=a;t<=s;t++)o.set(e[t],t);return o},et=Qe(class extends Ze{constructor(e){if(super(e),e.type!==Xe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,a,s){let o;s===void 0?s=a:a!==void 0&&(o=a);const t=[],i=[];let l=0;for(const u of e)t[l]=o?o(u,l):l,i[l]=s(u,l),l++;return{values:i,keys:t}}render(e,a,s){return this.dt(e,a,s).values}update(e,[a,s,o]){const t=gt(e),{values:i,keys:l}=this.dt(a,s,o);if(!Array.isArray(t))return this.ut=l,i;const u=this.ut??(this.ut=[]),n=[];let c,r,v=0,g=t.length-1,m=0,p=i.length-1;for(;v<=g&&m<=p;)if(t[v]===null)v++;else if(t[g]===null)g--;else if(u[v]===l[m])n[m]=oe(t[v],i[m]),v++,m++;else if(u[g]===l[p])n[p]=oe(t[g],i[p]),g--,p--;else if(u[v]===l[p])n[p]=oe(t[v],i[p]),ve(e,n[p+1],t[v]),v++,p--;else if(u[g]===l[m])n[m]=oe(t[g],i[m]),ve(e,t[v],t[g]),g--,m++;else if(c===void 0&&(c=He(l,m,p),r=He(u,v,g)),c.has(u[v]))if(c.has(u[g])){const f=r.get(l[m]),b=f!==void 0?t[f]:null;if(b===null){const y=ve(e,t[v]);oe(y,i[m]),n[m]=y}else n[m]=oe(b,i[m]),ve(e,t[v],b),t[f]=null;m++}else Ce(t[g]),g--;else Ce(t[v]),v++;for(;m<=p;){const f=ve(e,n[p+1]);oe(f,i[m]),n[m++]=f}for(;v<=g;){const f=t[v++];f!==null&&Ce(f)}return this.ut=l,mt(e,n),it}}),ft={x:D`<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,search:D`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,refresh:D`<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>`,alert:D`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`,info:D`<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,check:D`<polyline points="20 6 9 17 4 12"></polyline>`,tool:D`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2 2 0 0 1-2.83-2.83l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path>`,git:D`<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>`,"git-branch":D`<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>`,package:D`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,play:D`<polygon points="5 3 19 12 5 21 5 3"></polygon>`,activity:D`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,trash:D`<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>`,settings:D`<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,database:D`<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,code:D`<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,bell:D`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>`,grid:D`<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`,"file-text":D`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,menu:D`<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,terminal:D`<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>`,copy:D`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`,plus:D`<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>`};function Z({name:e,size:a=16,label:s}){const o=ft[e];return o?d`<svg 
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
  </svg>`:d`<span style="width:${a}px; height:${a}px; display:inline-block; background:red;"></span>`}const bt="-FyYHK",yt="hQIh8E",xt="vjCp9N",ht="aWcKCO",$t="XdvXnE",Et="Yr8TTV",wt="yefrc2",_t="UnbUQg",kt="z6Wtj-",St="WEwa7u",At="rr8RRm",It="_8nqxsa",Tt="EMU1IN",Ct="erzuUm",Ot="IX2naX",Mt="UuwGh4",Nt="HRKVqM",j={sidebar:bt,brand:yt,logo:xt,title:ht,nav:$t,navItem:Et,sidebarFooter:wt,toggleBtn:_t,toggleText:kt,footerDetails:St,statusWrapper:At,statusDot:It,branchBox:Tt,expanded:Ct,brandText:Ot,statusText:Mt,commitText:Nt},q=Object.freeze({NETWORK:"NETWORK",TIMEOUT:"TIMEOUT",ABORTED:"ABORTED",HTTP:"HTTP",PARSE:"PARSE"}),Rt=new Set([502,503,504]);function Dt(e){const a=e&&typeof e=="object"?e.detail:null;return typeof a=="string"?a:Array.isArray(a)?a.map(s=>`${(s.loc??[]).slice(1).join(".")||"body"}: ${s.msg}`).join("; "):null}class ie extends Error{constructor(a,{code:s,status:o=0,detail:t=null,cause:i}={}){super(a,{cause:i}),this.name="ApiError",this.code=s,this.status=o,this.detail=t}get retryable(){return this.code===q.NETWORK||this.code===q.TIMEOUT||this.code===q.HTTP&&Rt.has(this.status)}get userMessage(){switch(this.code){case q.NETWORK:return"Cannot reach the ServerManager API. Check that the container is running.";case q.TIMEOUT:return"The request timed out. The service may be busy or unreachable.";case q.ABORTED:return"";case q.PARSE:return"The server returned an unreadable response.";default:return this.status>=500?`Server error (${this.status}). ${this.message}`:this.message}}}const jt=new Set(["GET","HEAD"]),Lt=Object.freeze({baseUrl:"",timeoutMs:1e4,retries:2,retryBaseMs:300,retryMaxMs:4e3});function Pt(e={}){const a={...Lt,...e},s=e.fetchImpl??((...p)=>globalThis.fetch(...p)),o={request:[],response:[],error:[]},t=new Map,i=()=>new ie("Request aborted",{code:q.ABORTED}),l=(p,f)=>{const b=new URLSearchParams;for(const[S,x]of Object.entries(f??{}))x!=null&&x!==""&&b.set(S,String(x));const y=b.toString();return`${a.baseUrl}${p}${y?"?"+y:""}`};async function u(p){if(p.status===204)return null;const f=p.headers.get("content-type")??"";try{return f.includes("application/json")?await p.json():await p.text()}catch(b){throw new ie("Malformed response body",{code:q.PARSE,status:p.status,cause:b})}}async function n(p,f,b){const y=AbortSignal.timeout(b),S=f?AbortSignal.any([f,y]):y;let x;try{x=await s(p.url,{method:p.method,headers:p.headers,body:p.body,signal:S})}catch(C){throw y.aborted?new ie(`Request timed out after ${b} ms`,{code:q.TIMEOUT,cause:C}):f!=null&&f.aborted?i():new ie("Network request failed",{code:q.NETWORK,cause:C})}const h=await u(x);if(!x.ok)throw new ie(Dt(h)??`HTTP ${x.status}`,{code:q.HTTP,status:x.status,detail:h});return{status:x.status,data:h,headers:x.headers}}const c=(p,f)=>new Promise((b,y)=>{const S=setTimeout(b,p);f==null||f.addEventListener("abort",()=>{clearTimeout(S),y(i())},{once:!0})}),r=p=>Math.random()*Math.min(a.retryMaxMs,a.retryBaseMs*2**p);async function v(p,{signal:f,timeoutMs:b,retries:y}){for(let S=0;;S+=1)try{return await n(p,f,b)}catch(x){if(!(x instanceof ie)||!x.retryable||S>=y)throw x;await c(r(S),f)}}function g(p,f,b){let y=t.get(p);if(!y){const S=new AbortController,x={controller:S,refs:0,promise:null};x.promise=f(S.signal).finally(()=>{t.get(p)===x&&t.delete(p)}),x.promise.catch(()=>{}),t.set(p,x),y=x}return y.refs+=1,new Promise((S,x)=>{const h=()=>{y.refs-=1,y.refs===0&&(t.get(p)===y&&t.delete(p),y.controller.abort()),x(i())};if(b!=null&&b.aborted){h();return}b==null||b.addEventListener("abort",h,{once:!0}),y.promise.then(C=>{b==null||b.removeEventListener("abort",h),S(C)},C=>{b==null||b.removeEventListener("abort",h),x(C)})})}async function m(p,f,b={}){const{query:y,body:S,headers:x={},signal:h,meta:C={}}=b,N=b.timeoutMs??a.timeoutMs,_=b.retries??(jt.has(p)?a.retries:0),O=b.dedupe??p==="GET";let A={method:p,url:l(f,y),headers:{Accept:"application/json",...x},body:void 0,meta:C};S!==void 0&&(A.body=JSON.stringify(S),A.headers["Content-Type"]="application/json");for(const W of o.request)A=await W(A);const L=async W=>{try{let B=await v(A,{signal:W,timeoutMs:N,retries:_});for(const P of o.response)B=await P(B,A);return B.data}catch(B){let P=B;for(const Y of o.error)P=await Y(P,A)??P;throw P}};return O?g(`${A.method} ${A.url}`,L,h):L(h)}return{get:(p,f)=>m("GET",p,f),post:(p,f,b)=>m("POST",p,{...b,body:f}),put:(p,f,b)=>m("PUT",p,{...b,body:f}),delete:(p,f)=>m("DELETE",p,f),use({request:p,response:f,error:b}){p&&o.request.push(p),f&&o.response.push(f),b&&o.error.push(b)}}}const Oe=()=>{};function zt(e,a){return a?new Promise((s,o)=>{const t=()=>o(new DOMException("Aborted","AbortError"));if(a.aborted){t();return}a.addEventListener("abort",t,{once:!0}),e.then(s,o).finally(()=>a.removeEventListener("abort",t))}):e}const je=e=>JSON.stringify(e,(a,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([o],[t])=>o<t?-1:1)):s),Bt=(e,a)=>a.every((s,o)=>o<e.length&&je(s)===je(e[o]));function Ft({now:e=()=>Date.now(),gcMs:a=5*6e4}={}){const s=new Map,o=n=>Object.freeze({status:n.status,data:n.data,error:n.error,isFetching:!!n.promise,updatedAt:n.updatedAt});function t(n){const c=je(n);let r=s.get(c);return r||(r={keyParts:n,data:void 0,error:null,status:"idle",updatedAt:0,invalidated:!1,promise:null,fetcher:null,listeners:new Set,snapshot:null},r.snapshot=o(r),s.set(c,r)),r}function i(n){n.snapshot=o(n);for(const c of[...n.listeners])c(n.snapshot)}function l(){for(const[n,c]of s)c.listeners.size===0&&!c.promise&&c.updatedAt&&e()-c.updatedAt>a&&s.delete(n)}function u(n){return n.promise||(n.invalidated=!1,n.status==="idle"&&(n.status="loading"),n.promise=Promise.resolve().then(()=>n.fetcher()).then(c=>(Object.assign(n,{data:c,error:null,status:"success",updatedAt:e()}),c),c=>{throw Object.assign(n,{error:c,status:"error"}),c}).finally(()=>{n.promise=null,i(n),n.invalidated&&n.listeners.size>0&&u(n).catch(Oe)}),n.promise.catch(Oe),i(n)),n.promise}return{load(n,c,{staleMs:r=0,signal:v}={}){l();const g=t(n);g.fetcher=c;const m=g.status==="success"&&!g.invalidated&&e()-g.updatedAt<r;return zt(m?Promise.resolve(g.data):u(g),v)},read:n=>t(n).snapshot,subscribe(n,c){const r=t(n);return r.listeners.add(c),c(r.snapshot),()=>{r.listeners.delete(c)}},invalidate(n){for(const c of s.values())Bt(c.keyParts,n)&&(c.invalidated=!0,i(c),c.listeners.size>0&&c.fetcher&&u(c).catch(Oe))},setData(n,c){const r=t(n),v={data:r.data,status:r.status,updatedAt:r.updatedAt},g=typeof c=="function"?c(r.data):c;return Object.assign(r,{data:g,status:"success",updatedAt:e()}),i(r),function(){r.data===g&&(Object.assign(r,v),i(r))}},set(n,c){return this.setData(n,typeof c=="function"?c:()=>c)}}}function Ut(e,{mutationFn:a,optimistic:s,invalidates:o=[]}){return async function(i){const l=((s==null?void 0:s(i))??[]).map(({key:u,update:n})=>e.setData(u,n));try{const u=await a(i);return(typeof o=="function"?o(i,u):o).forEach(c=>e.invalidate(c)),u}catch(u){throw l.reverse().forEach(n=>n()),u}}}const le={},Vt=ct(),M=Pt({baseUrl:(le==null?void 0:le.VITE_API_BASE)??"",timeoutMs:Number((le==null?void 0:le.VITE_HTTP_TIMEOUT_MS)??1e4)}),E=Ft();M.use({error:e=>((e==null?void 0:e.status)===401&&Vt.emit("auth:required",e),e)});const xe={all:["overview"]},tt={getOverview:e=>E.load(xe.all,()=>M.get("/api/v1/meta/query",{query:{target:"overview"}}),e)};let _e=!1;function Gt(){_e=!_e;const e=document.getElementById("app-sidebar");e&&(_e?e.classList.add(j.expanded):e.classList.remove(j.expanded))}function qt({routes:e,activeId:a,onNavigate:s}){var u,n,c,r,v,g,m,p,f;const o=E.read(xe.all),t=((n=(u=o==null?void 0:o.data)==null?void 0:u.gitops)==null?void 0:n.commit)||((r=(c=o==null?void 0:o.data)==null?void 0:c.telemetry)==null?void 0:r.short_commit)||"-",i=((g=(v=o==null?void 0:o.data)==null?void 0:v.gitops)==null?void 0:g.branch)||((p=(m=o==null?void 0:o.data)==null?void 0:m.telemetry)==null?void 0:p.branch)||"-",l=(f=o==null?void 0:o.data)!=null&&f.version?o.data.version.startsWith("v")?o.data.version:`v${o.data.version}`:"...";return d`<aside id="app-sidebar" class="${j.sidebar} ${_e?j.expanded:""}">
    <div class=${j.brand}>
      <div class=${j.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      </div>
      <div class=${j.brandText}>
        <div class=${j.title}>ServerManager <span style="font-size: 0.65rem; color: var(--color-accent); font-family: var(--font-mono); border: 1px solid var(--color-accent); padding: 1px 4px; border-radius: 4px; margin-left: 4px;">${l}</span></div>
        <div style="font-size: 0.65rem; color: var(--color-text-muted); letter-spacing: 0.05em;">CUBI-SERVER ENGINE</div>
      </div>
    </div>
    <nav class=${j.nav}>
      ${et(e,b=>b.id,b=>d`
        <button class=${j.navItem} aria-current=${b.id===a?"page":"false"}
          @click=${()=>s(b.path)}>
          ${Z({name:b.icon,size:16})}
          <span>${b.title}</span>
        </button>
      `)}
    </nav>
    <div class=${j.sidebarFooter}>
      <button class=${j.toggleBtn} @click=${Gt}>
        ${Z({name:"menu",size:16})}
        <span class=${j.toggleText}>Collapse Menu</span>
      </button>
      <div class=${j.footerDetails}>
        <div class=${j.statusWrapper}>
          <div class=${j.statusDot}></div>
          <span class=${j.statusText}>Manager Online</span>
        </div>
        <div class=${j.branchBox}>
          <span style="color: var(--color-accent);">${i}</span>
          <span class=${j.commitText}>${t}</span>
        </div>
      </div>
    </div>
  </aside>`}const Ht="MFUTlq",Kt="kBMrej",Me={topbar:Ht,title:Kt};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=e=>e??w;function ce(...e){return e.filter(Boolean).join(" ")}function Yt(e="id"){return`${e}-${Math.random().toString(36).slice(2,9)}`}function Wt(e){return e==null?"-":typeof e=="boolean"?e?"Yes":"No":String(e)}const Jt="PSMDQ2",Xt={spinner:Jt};function Qt({size:e=16}={}){return d`<svg class=${Xt.spinner} width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>`}const Zt="vZLpx0",me={btn:Zt,"btn--add":"eseObZ","btn--secondary":"mgAoR7","btn--ghost":"IfhAYu","btn--delete":"O88LRv","btn--save":"_9TKvm7","btn--execute":"_7iXwxN","btn--test":"HPGySJ","btn--sm":"q8NBmE","btn--icon-only":"_5q3cey"};function $({label:e,variant:a="secondary",size:s="md",icon:o,iconOnly:t=!1,ariaLabel:i,loading:l=!1,disabled:u=!1,type:n="button",id:c,onClick:r}){const v=ce(me.btn,me[`btn--${a}`],me[`btn--${s}`],t&&me["btn--icon-only"]);return d`<button id=${Ke(c)} class=${v} type=${n}
    aria-label=${Ke(i)} aria-busy=${l?"true":"false"}
    ?disabled=${u||l} @click=${r}>
    ${l?Qt():o?Z({name:o,size:s==="sm"?14:16}):w}
    ${t?w:d`<span class=${me.btn__label}>${e}</span>`}
  </button>`}const es=({icon:e,ariaLabel:a,...s})=>$({...s,icon:e,ariaLabel:a,iconOnly:!0,variant:s.variant??"ghost"});function ts({title:e}){return d`<header class=${Me.topbar}>
    <h1 class=${Me.title}>${e}</h1>
    <div class=${Me.actions} style="display: flex; gap: var(--space-3); align-items: center;">
      ${$({label:"Refresh",icon:"refresh",size:"sm",variant:"secondary",onClick:()=>{E.invalidate([]),window.dispatchEvent(new CustomEvent("app:refresh"))}})}
      <div style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.2); color: var(--color-success); font-family: var(--font-mono); font-size: var(--font-size-xs); padding: 4px 10px; border-radius: 12px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-success); box-shadow: 0 0 6px var(--color-success);"></div>
        Port 8099
      </div>
    </div>
  </header>`}function ss(){const e=de({stack:[]});let a=0;function s(t){return new Promise(i=>{const l=`modal-${a+=1}`;let u=!1;const n=c=>{u||(u=!0,e.set(r=>({stack:r.stack.filter(v=>v.id!==l)})),i(c))};e.set(c=>({stack:[...c.stack,{id:l,view:()=>t({close:n,id:l})}]}))})}return{open:s,refresh:()=>e.set(t=>({stack:[...t.stack]})),store:e}}const as=ss(),ke=as;function os(){const{stack:e}=ke.store.get();return d`<div id="modal-root">${e.map(a=>a.view())}</div>`}const ns="sCMZyq",rs="Fk5OML",is="_0AKuiv",Ne={layout:ns,mainContent:rs,page:is};function ls({routerStore:e,routes:a,router:s,pageContent:o}){const{current:t}=e;return d`<div class=${Ne.layout}>
    ${qt({routes:a,activeId:t==null?void 0:t.id,onNavigate:s.navigate})}
    <div class=${Ne.mainContent}>
      ${ts({title:(t==null?void 0:t.pageTitle)||(t==null?void 0:t.title)||""})}
      <main class=${Ne.page}>
        ${o}
      </main>
    </div>
    ${os()}
  </div>`}const cs="fuSbcq",ds="fu9t4u",us="elFvvy",ps="_2Hu4ZP",vs="r2dRuM",ms="AjfFun",G={table:cs,table__scroll:ds,table__grid:us,"table__cell--end":"WFAaNl","table__cell--center":"E19Z4X","table__cell--mono":"dpdvwb",table__message:ps,table__skeleton:vs,table__stale:ms};function Ae({id:e,caption:a,columns:s,snapshot:o,getRows:t=r=>Array.isArray(r)?r:(r==null?void 0:r.items)??[],rowKey:i=(r,v)=>v,emptyMessage:l="No records found.",onRetry:u,footer:n=w,fallbackColumns:c=[]}){const{status:r,data:v,error:g,isFetching:m}=o,p=v!==void 0,f=typeof s=="function"?p?s(v):c:s,b=Math.max(f.length,1),y=p?t(v):[],S=(h,C)=>d`<td class=${ce(h.align==="end"&&G["table__cell--end"],h.align==="center"&&G["table__cell--center"],h.mono&&G["table__cell--mono"])}>
    ${h.render?h.render(C):Wt(C[h.key])}</td>`;let x;return!p&&(r==="idle"||r==="loading")?x=Array.from({length:5},()=>d`<tr aria-hidden="true">${f.map(()=>d`<td><span class=${G.table__skeleton}></span></td>`)}</tr>`):p?y.length===0?x=d`<tr><td colspan=${b} class=${G.table__message}>${l}</td></tr>`:x=et(y,i,h=>d`<tr>${f.map(C=>S(C,h))}</tr>`):x=d`<tr><td colspan=${b} class=${G.table__message} role="alert">
      ${(g==null?void 0:g.userMessage)||(g==null?void 0:g.message)||"Failed to load data."}
      ${u?$({label:"Retry",icon:"refresh",size:"sm",onClick:u}):w}</td></tr>`,d`<div class=${G.table}>
    ${r==="error"&&p?d`<div class=${G.table__stale} role="status">Showing cached data. ${(g==null?void 0:g.userMessage)??""} ${u?$({label:"Retry",size:"sm",variant:"ghost",onClick:u}):w}</div>`:w}
    <div class=${G.table__scroll} aria-busy=${m?"true":"false"}>
      <table id=${e??w} class=${G.table__grid}>
        ${a?d`<caption class="u-sr-only">${a}</caption>`:w}
        <thead><tr>${f.map(h=>d`<th scope="col" class=${ce(h.align==="end"&&G["table__cell--end"],h.align==="center"&&G["table__cell--center"])}>${h.header}</th>`)}</tr></thead>
        <tbody>${x}</tbody>
      </table>
    </div>
    ${n}
  </div>`}const ye={all:["pipeline"],columns:["pipeline","columns"]};let X={limit:50,offset:0};const H={getPipeline:(e={},a={})=>{const{dedupe:s,staleMs:o,signal:t,...i}=e,l={...s!==void 0?{dedupe:s}:{},...o!==void 0?{staleMs:o}:{},...t!==void 0?{signal:t}:{},...a};return X={...X,...i},(X.stage===""||X.stage===null)&&delete X.stage,(X.status===""||X.status===null)&&delete X.status,E.load(ye.all,()=>M.get("/api/v1/pipeline",{query:X,dedupe:!1}),{dedupe:!1,...l})},getCurrentParams:()=>({...X}),getColumns:e=>E.load(ye.columns,()=>M.get("/api/v1/pipeline/columns"),e)},gs="_0BpBt1",ae={badge:gs,"badge--uppercase":"I4QU3X","badge--mono":"_6VVZkB","badge--info":"ZoIQjj","badge--success":"YRkFXs","badge--warning":"_32YiPS","badge--danger":"_9Wz1KA","badge--accent":"TWreAF","badge--neutral":"fNQjt2","badge--bool":"FpUTU-","badge--bool-true":"_8izwGO","badge--bool-false":"_5AzcWm"};function ge({label:e,tone:a="neutral",mono:s=!1,uppercase:o=!1}){const t=ce(ae.badge,ae[`badge--${a}`],s&&ae["badge--mono"],o&&ae["badge--uppercase"]);return d`<span class=${t}>${e}</span>`}function fs({value:e}){if(e==null||e==="")return d`<span class="u-text-muted">-</span>`;const a=e===1||e==="1"||e===!0||String(e).toLowerCase()==="true";return d`<span class=${ce(ae.badge,ae["badge--bool"],a?ae["badge--bool-true"]:ae["badge--bool-false"])}>${a?"TRUE":"FALSE"}</span>`}const bs=new Set(["ID","PIPELINE_KEY","STAGE","STATUS","CREATED_AT","LAST_UPDATED"]);function ys(e){if(!e||!e.columns)return[];const a=(e==null?void 0:e.column_types)||{};return e.columns.map(s=>{const o=s.toUpperCase(),t=(a[s]||a[o]||"").toUpperCase(),i=bs.has(o),l=t.includes("INT"),u=t.includes("BOOL"),n=i||l||u?"center":void 0;return{key:s,header:o,align:n,render:c=>{const r=c[s];return r==null||r===""?d`<span class="u-text-muted" style="display: block; text-align: center;">-</span>`:u?fs({value:r}):d`<span class="u-truncate" style="max-width: 250px; display: inline-block; ${n==="center"?"text-align: center;":""}" title=${r}>${r}</span>`}}})}function xs(){return{view(){var r,v,g,m;const e=E.read(ye.all),a=((r=e.data)==null?void 0:r.items)??[],s=((v=e.data)==null?void 0:v.total)??a.length,o=((g=e.data)==null?void 0:g.limit)??50,t=((m=e.data)==null?void 0:m.offset)??0,i=s===0?0:t+1,l=Math.min(t+a.length,s),u=t>0,n=t+o<s,c=d`
        <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-3) var(--space-4); border-top: 1px solid var(--color-border); background: var(--color-bg-card);">
          <div class="u-text-sm u-text-muted">Showing ${i}-${l} of ${s} records</div>
          <div class="u-flex u-items-center u-gap-4">
            <div class="u-flex u-items-center u-gap-2">
              <span class="u-text-sm u-text-muted">Rows per page:</span>
              <select
                class="form-select u-text-sm"
                style="width: auto; padding: 2px var(--space-2); height: auto;"
                .value=${String(o)}
                ?disabled=${e.isFetching}
                @change=${p=>{const f=Number(p.target.value);H.getPipeline({limit:f,offset:0})}}
              >
                <option value="50" ?selected=${o===50}>50</option>
                <option value="100" ?selected=${o===100}>100</option>
                <option value="200" ?selected=${o===200}>200</option>
                <option value="500" ?selected=${o===500}>500</option>
              </select>
            </div>
            <div class="u-flex u-gap-2">
              ${$({label:"Previous",size:"sm",variant:"secondary",disabled:!u||e.isFetching,onClick:()=>H.getPipeline({offset:Math.max(0,t-o)})})}
              ${$({label:"Next",size:"sm",variant:"secondary",disabled:!n||e.isFetching,onClick:()=>H.getPipeline({offset:t+o})})}
            </div>
          </div>
        </div>
      `;return Ae({id:"pipeline-table",snapshot:e,columns:p=>ys(p),getRows:p=>(p==null?void 0:p.items)??[],rowKey:(p,f)=>p.ID??p.id??f,onRetry:()=>H.getPipeline(),footer:c})}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=(e,a)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const t of s)(o=t._$AO)==null||o.call(t,a,!1),fe(t,a);return!0},Se=e=>{let a,s;do{if((a=e._$AM)===void 0)break;s=a._$AN,s.delete(e),e=a}while((s==null?void 0:s.size)===0)},st=e=>{for(let a;a=e._$AM;e=a){let s=a._$AN;if(s===void 0)a._$AN=s=new Set;else if(s.has(e))break;s.add(e),Es(a)}};function hs(e){this._$AN!==void 0?(Se(this),this._$AM=e,st(this)):this._$AM=e}function $s(e,a=!1,s=0){const o=this._$AH,t=this._$AN;if(t!==void 0&&t.size!==0)if(a)if(Array.isArray(o))for(let i=s;i<o.length;i++)fe(o[i],!1),Se(o[i]);else o!=null&&(fe(o,!1),Se(o));else fe(this,e)}const Es=e=>{e.type==Xe.CHILD&&(e._$AP??(e._$AP=$s),e._$AQ??(e._$AQ=hs))};class ws extends Ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,s,o){super._$AT(a,s,o),st(this),this.isConnected=a._$AU}_$AO(a,s=!0){var o,t;a!==this.isConnected&&(this.isConnected=a,a?(o=this.reconnected)==null||o.call(this):(t=this.disconnected)==null||t.call(this)),s&&(fe(this,a),Se(this))}setValue(a){if(pt(this._$Ct))this._$Ct._$AI(a,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=a,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const Re=new WeakMap,_s=Qe(class extends ws{render(e){return w}update(e,[a]){var o;const s=a!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=a,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),w}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const a=this.ht??globalThis;let s=Re.get(a);s===void 0&&(s=new WeakMap,Re.set(a,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,a;return typeof this.G=="function"?(e=Re.get(this.ht??globalThis))==null?void 0:e.get(this.G):(a=this.G)==null?void 0:a.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ks="_9lH80h",Ss="_91-Xo5",As="SEYdJQ",Is="CRt7-E",Ts="gj4qUB",Cs="hUDIR7",ne={modal:ks,"modal--md":"FRka--","modal--lg":"topWMw",modal__panel:Ss,modal__header:As,modal__title:Is,modal__body:Ts,modal__footer:Cs};function ee({title:e,size:a="md",body:s,footer:o=w,onClose:t,dismissible:i=!0}){const l=Yt("modal-title"),u=r=>{r&&!r.open&&requestAnimationFrame(()=>{!r.open&&r.isConnected&&r.showModal()})},n=r=>{r.preventDefault(),i&&t(void 0)},c=r=>{i&&r.target===r.currentTarget&&t(void 0)};return d`<dialog class=${ce(ne.modal,ne[`modal--${a}`])} aria-labelledby=${l}
      ${_s(u)} @cancel=${n} @click=${c}>
    <div class=${ne.modal__panel}>
      <header class=${ne.modal__header}>
        <h2 id=${l} class=${ne.modal__title}>${e}</h2>
        ${i?es({icon:"x",ariaLabel:"Close dialog",onClick:()=>t(void 0)}):w}
      </header>
      <div class=${ne.modal__body}>${s}</div>
      ${o!==w?d`<footer class=${ne.modal__footer}>${o}</footer>`:w}
    </div>
  </dialog>`}function he({title:e,message:a,tone:s="danger",confirmLabel:o="Confirm",requireText:t}){return new Promise(i=>{let l="";""+Math.random().toString(36).substring(2);const u=()=>{ke.open(({close:c})=>ee({title:e,body:d`
          <div class="u-flex u-flex-col u-gap-3">
            <p>${a}</p>
            ${t?d`
              <p class="u-text-sm u-text-muted">Type <strong>${t}</strong> to confirm.</p>
              <input type="text" style="background: var(--color-bg-input); border: 1px solid var(--color-border); padding: var(--space-2); color: white; border-radius: var(--radius-sm);" 
                @input=${r=>{l=r.target.value,n()}} />
            `:""}
          </div>
        `,footer:d`
          <div class="u-flex u-gap-2" style="justify-content: flex-end; width: 100%;">
            ${$({label:"Cancel",variant:"ghost",onClick:()=>{c(),i(!1)}})}
            ${$({label:o,variant:s==="danger"?"delete":"add",disabled:t?l!==t:!1,onClick:()=>{c(),i(!0)}})}
          </div>
        `,onClose:()=>{c(),i(!1)}}))};function n(){ke.refresh()}u()})}function Os(e){const a=e.get(),s=()=>{e.set(c=>({...c,isManageColumnsModalOpen:!1}))},o=c=>{if(c===0)return;const r=[...a.columnsData],v=r[c-1];r[c-1]=r[c],r[c]=v,e.set(g=>({...g,columnsData:r}))},t=c=>{if(c===a.columnsData.length-1)return;const r=[...a.columnsData],v=r[c+1];r[c+1]=r[c],r[c]=v,e.set(g=>({...g,columnsData:r}))},i=async()=>{const c=a.columnsData.map(r=>r.name);try{await M.put("/api/v1/pipeline/columns/order",{column_order:c}),e.set(r=>({...r,isManageColumnsModalOpen:!1})),H.getPipeline()}catch(r){alert("Failed to save column order: "+r.message)}},l=async()=>{if(confirm("Are you sure you want to delete all deprecated columns? This cannot be undone."))try{await M.post("/api/v1/pipeline/columns/prune");const c=await M.get("/api/v1/pipeline/columns");e.set(r=>({...r,columnsData:c})),H.getPipeline()}catch(c){alert("Failed to prune columns: "+c.message)}},u=d`
    <div class="u-mb-4">
      <p class="u-text-muted u-text-sm">
        Change the display order of columns in the Universal Pipeline. System columns are always pinned to the left.
        <br><br>
        <strong>Note:</strong> Deprecated columns are columns that exist in the database but are no longer used by any Service Field Mapping.
      </p>
    </div>

    ${a.isLoadingColumns?d`<div class="u-text-center u-p-4">Loading columns...</div>`:w}
    
    ${!a.isLoadingColumns&&a.columnsData?d`
      <div class="u-flex u-flex-col u-gap-2" style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
        ${a.columnsData.map((c,r)=>{const v=c.is_system;return d`
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
              <div class="u-flex u-items-center u-gap-3">
                <span style="font-weight: 500; font-family: monospace; color: ${v?"var(--color-accent)":"var(--color-text)"};">${c.name}</span>
                <span class="u-text-xs u-text-muted">${c.type}</span>
                ${c.is_deprecated?d`<span class="badge" style="background: var(--color-danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">Deprecated</span>`:w}
                ${v?d`<span class="badge" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.7rem;">System</span>`:w}
              </div>
              
              <div class="u-flex u-gap-1">
                ${$({label:"▲",variant:"ghost",size:"sm",disabled:v||r>0&&a.columnsData[r-1].is_system,onClick:()=>o(r)})}
                ${$({label:"▼",variant:"ghost",size:"sm",disabled:v||r===a.columnsData.length-1,onClick:()=>t(r)})}
              </div>
            </div>
          `})}
      </div>
    `:w}
  `,n=d`
    <div class="u-flex u-justify-between u-items-center" style="width: 100%;">
      <div>
        ${$({label:"Prune Deprecated",variant:"delete",onClick:l})}
      </div>
      <div class="u-flex u-gap-2">
        ${$({label:"Cancel",variant:"secondary",onClick:s})}
        ${$({label:"Save Order",variant:"save",onClick:i})}
      </div>
    </div>
  `;return ee({title:"Manage Columns",size:"md",onClose:s,body:u,footer:n})}function Ms(){const e=de({isManageColumnsModalOpen:!1,columnsData:[],isLoadingColumns:!1}),a=xs();let s,o;async function t(){if(await he({title:"Purge Pipeline",message:"Are you sure you want to completely clear the pipeline? This will remove all items and reset statistics.",requireText:"PURGE",confirmLabel:"Purge Data"}))try{await M.post("/api/v1/pipeline/purge"),H.getPipeline({offset:0})}catch(l){alert("Error purging pipeline: "+l.message)}}return{mount(i){s=E.subscribe(ye.all,()=>i()),o=e.subscribe(()=>i()),H.getPipeline()},unmount(){s&&s(),o&&o()},view(){var v,g;const i=E.read(ye.all),l=((v=i.data)==null?void 0:v.available_stages)??[],u=((g=i.data)==null?void 0:g.available_statuses)??[],n=H.getCurrentParams(),c=n.stage||"",r=n.status||"";return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between">
            <div class="u-flex u-gap-2">
              ${$({label:"+ Add Column",variant:"add",size:"sm",onClick:()=>alert("Add Column")})}
              ${$({label:"Manage Columns",variant:"secondary",size:"sm",icon:"settings",onClick:async()=>{e.set(m=>({...m,isManageColumnsModalOpen:!0,isLoadingColumns:!0}));try{const m=await M.get("/api/v1/pipeline/columns");e.set(p=>({...p,columnsData:m,isLoadingColumns:!1}))}catch(m){alert("Error loading columns: "+m.message),e.set(p=>({...p,isLoadingColumns:!1}))}}})}
              ${$({label:"Sample Service API",variant:"test",size:"sm",icon:"search",onClick:()=>alert("Sample API")})}
            </div>
            <div class="u-flex u-gap-2">
              ${$({label:"Sync Now",variant:"secondary",size:"sm",icon:"refresh",onClick:async()=>{try{await M.post("/api/v1/settings/scheduler/restart"),setTimeout(()=>H.getPipeline({offset:0}),1200)}catch(m){alert("Error triggering sync: "+m.message)}}})}
              ${$({label:"Purge DB",variant:"delete",size:"sm",icon:"trash",onClick:t})}
            </div>
            <div class="u-flex u-gap-2">
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${m=>{H.getPipeline({stage:m.target.value,offset:0})}}
              >
                <option value="" ?selected=${!c}>All Stages</option>
                ${l.map(m=>d`
                  <option value=${m.id} ?selected=${c===m.id}>${m.name||m.id}</option>
                `)}
              </select>
              <select
                class="u-text-sm"
                style="background: var(--color-bg-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 5px var(--space-3); border-radius: var(--radius-sm); outline: none; cursor: pointer;"
                @change=${m=>{H.getPipeline({status:m.target.value,offset:0})}}
              >
                <option value="" ?selected=${!r}>All Statuses</option>
                ${u.map(m=>d`
                  <option value=${m} ?selected=${r===m}>${m}</option>
                `)}
              </select>
            </div>
          </div>
          ${a.view()}
          
          ${e.get().isManageColumnsModalOpen?Os(e):w}
        </div>
      `}}}function Ns(){return{view(){var c,r,v;const{status:e,data:a,error:s}=E.read(xe.all);if(e==="error")return d`<div class="u-text-danger">${s.message}</div>`;if(e==="loading"||!a)return d`<div style="color: var(--color-text-muted);">Loading overview...</div>`;const o=a.pipeline_total_items||0,t=a.active_incidents||0,i=a.registered_services||0,l=((c=a.telemetry)==null?void 0:c.branch)||"main",u=((r=a.telemetry)==null?void 0:r.clean)!==!1,n=(g,m,p,f,b="u-text-accent")=>d`
        <div style="background: var(--color-bg-card); padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="u-flex u-items-center u-justify-between">
            <span class="u-text-sm u-text-muted">${g}</span>
            <span class="${b}">${Z({name:f,size:18})}</span>
          </div>
          <div>
            <div class="u-font-mono ${b}" style="font-size: 1.75rem; font-weight: bold; line-height: 1; margin: var(--space-3) 0;">${m}</div>
            <div class="u-text-xs u-text-muted u-truncate" title=${p}>${p}</div>
          </div>
        </div>
      `;return d`
        <div class="u-flex u-flex-col u-gap-4">
          <!-- Top row: 4 stat cards -->
          <div class="u-flex u-gap-4" style="flex-wrap: wrap;">
            ${n("Pipeline Items",o,"Items tracked in universal pipeline","package","u-text-accent")}
            ${n("Active Incidents",t,t>0?`${t} critical anomalies`:"0 critical anomalies","alert",(t>0,"u-text-danger"))}
            ${n("Active Services",i,"Configured upstream services","play","u-text-success")}
            ${n("GitOps Status",l,u?"Tree is clean":"Local changes detected","git-branch","u-text-accent")}
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
                ${(v=a.stages)!=null&&v.length?a.stages.map(g=>d`
                  <div style="background: var(--color-bg-surface); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
                    <div class="u-flex u-items-center">
                      <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${g.id}</span>
                    </div>
                    <div class="u-text-center">
                      <span class="u-text-sm"><strong>${g.name}</strong> <span class="u-text-muted">(${g.service_ids.join(", ")})</span></span>
                    </div>
                    <div style="text-align: right;">
                      ${g.enabled?d`<span class="u-text-xs u-text-success">Active</span>`:d`<span class="u-text-xs u-text-muted">Inactive</span>`}
                    </div>
                  </div>
                `):d`<div class="u-text-muted u-text-center u-mt-4">No stages configured.</div>`}
              </div>
            </div>
          </div>
        </div>
      `}}}function Rs(){const e=Ns();let a;return{mount(s){a=E.subscribe(xe.all,()=>s()),tt.getOverview()},unmount(){a&&a()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        ${e.view()}
      </div>`}}}const Le={all:["tools"]},Ds={getTools:e=>E.load(Le.all,()=>M.get("/api/v1/tools"),e)},js="cg2FU3",Ls="Jh4yC3",Ye={console:js,output:Ls};function Ps({text:e,status:a="idle"}){return d`
    <div class=${Ye.console}>
      <pre class=${Ye.output}>${e||"Waiting for output..."}</pre>
    </div>
  `}function zs(){const e=de({selectedTool:null,output:"Ready for execution...",executionStatus:"idle"});let a,s;const o=async t=>{e.set(i=>({...i,executionStatus:"running",output:`Executing...
`}));try{const i=await M.post(`/api/v1/tools/${encodeURIComponent(t.name)}/run`);e.set(l=>({...l,executionStatus:"success",output:l.output+`
`+JSON.stringify(i,null,2)}))}catch(i){e.set(l=>({...l,executionStatus:"error",output:l.output+`
ERROR: `+i.message}))}};return{mount(t){a=E.subscribe(Le.all,()=>t()),s=e.subscribe(()=>t()),Ds.getTools()},unmount(){a&&a(),s&&s()},view(){const{status:t,data:i,error:l,isFetching:u}=E.read(Le.all),n=e.get(),c=Array.isArray(i)?i:(i==null?void 0:i.items)??[];return d`
        <div class="u-flex u-gap-4" style="height: calc(100vh - var(--topbar-height) - (var(--space-6) * 2));">
          <!-- Left Sidebar -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); width: 300px; display: flex; flex-direction: column;">
            <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">Available Tools</h3>
              <div class="u-font-mono u-text-muted u-text-xs u-mt-1">/config/custom_tools/</div>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: var(--space-3);" class="u-flex u-flex-col u-gap-2">
              ${t==="loading"&&!i?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4">Loading tools...</div>`:w}
              ${t==="error"&&!i?d`<div class="u-text-danger u-text-sm u-text-center u-mt-4">${l==null?void 0:l.message}</div>`:w}
              ${c.length===0&&i?d`<div class="u-text-muted u-text-sm u-text-center u-mt-4" style="border: 1px dashed var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">No tools found in<br>/config/custom_tools/</div>`:w}
              
              ${c.map(r=>{var v,g,m;return d`
                <button 
                  class="u-text-left"
                  style="background: ${((v=n.selectedTool)==null?void 0:v.name)===r.name?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"transparent"}; 
                         border: 1px solid ${((g=n.selectedTool)==null?void 0:g.name)===r.name?"var(--color-accent)":"transparent"};
                         border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); cursor: pointer; color: var(--color-text);"
                  @click=${()=>e.set(p=>({...p,selectedTool:r,output:"Ready for execution...",executionStatus:"idle"}))}
                >
                  <div class="u-font-mono u-text-sm ${((m=n.selectedTool)==null?void 0:m.name)===r.name?"u-text-accent":""}">${r.name}</div>
                  <div class="u-text-xs u-text-muted u-truncate u-mt-1" title=${r.description}>${r.description}</div>
                </button>
              `})}
            </div>
          </div>
          
          <!-- Right Content Area -->
          <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); flex: 1; display: flex; flex-direction: column; overflow: hidden;">
            <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
              <h3 style="margin: 0; font-size: 1rem;">${n.selectedTool,"Select a tool to execute"}</h3>
              ${$({label:"Execute Tool",icon:"check",size:"sm",variant:"execute",disabled:!n.selectedTool||n.executionStatus==="running",loading:n.executionStatus==="running",onClick:()=>o(n.selectedTool)})}
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              ${Ps({text:n.output,status:n.executionStatus})}
            </div>
          </div>
        </div>
      `}}}const Fe={all:["views"]},at={getViews:e=>E.load(Fe.all,()=>M.get("/api/v1/views"),e)};function Bs(){return{view(){var s;const e=E.read(Fe.all),a=Array.isArray(e.data)?e.data:((s=e.data)==null?void 0:s.items)??[];return!a.length&&e.status!=="loading"?d`
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
        `:Ae({id:"views-table",snapshot:e,columns:[{key:"VIEW_NAME",header:"VIEW NAME"},{key:"QUERY",header:"QUERY"}],getRows:()=>a,onRetry:()=>at.getViews()})}}}function Fs(){const e=Bs();let a;return{mount(s){a=E.subscribe(Fe.all,()=>s()),at.getViews()},unmount(){a&&a()},view(){return d`<div class="u-flex u-flex-col u-gap-4">
        <div class="u-flex u-items-center u-justify-between u-mb-4">
          <div class="u-text-muted u-text-sm">No views configured yet.</div>
          ${$({label:"+ New Custom View",variant:"add",size:"sm",onClick:()=>alert("New Custom View")})}
        </div>
        ${e.view()}
      </div>`}}}const K={all:["incidents"],list:e=>[...K.all,e?"resolved":"active"],catalog:["incidents","catalog"]},re={getIncidents:(e,a)=>E.load(K.list(e),()=>M.get("/api/v1/incidents",{query:{resolved:e?1:0}}),a),resolveIncident:(e,a)=>M.post(`/api/v1/incidents/${e}/resolve`,{resolution_note:a||""}),createIncident:e=>M.post("/api/v1/incidents",e),getCatalog:e=>E.load(K.catalog,()=>M.get("/api/v1/incidents/catalog/errors"),e),upsertError:e=>M.post("/api/v1/incidents/catalog/errors",e),deleteError:e=>M.delete(`/api/v1/incidents/catalog/errors/${e}`)};function We({resolved:e}){const a=Ut(E,{mutationFn:t=>re.resolveIncident(t.id,t.note),invalidates:[K.all]});async function s(t){const i=prompt("Enter a resolution note (optional):","Resolved manually");if(i===null)return;if(await he({title:"Resolve Incident",message:`Are you sure you want to mark incident #${t} as resolved?`,confirmLabel:"Resolve",tone:"primary"}))try{await a({id:t,note:i})}catch(u){alert("Failed to resolve incident: "+u.message)}}const o=[{key:"ID",header:"ID",mono:!0,align:"center"},{key:"SEVERITY",header:"Severity",render:t=>{const i=t.SEVERITY==="CRITICAL"?"danger":t.SEVERITY==="WARNING"?"warning":"info";return ge({label:t.SEVERITY||"INFO",tone:i})}},{key:"COMPONENT",header:"Component",render:t=>d`<strong class="u-text-sm">${t.COMPONENT||"SYSTEM"}</strong>`},{key:"INCIDENT_CODE",header:"Code",mono:!0,render:t=>d`<span class="u-font-mono u-text-xs">${t.INCIDENT_CODE||"-"}</span>`},{key:"DETAILS",header:"Details",render:t=>d`<span class="u-text-sm">${t.DETAILS||"-"}</span>`},{key:"REMEDY",header:"Remedy",render:t=>t.REMEDY?d`<span class="u-text-xs u-text-muted">${t.REMEDY}</span>`:w},{key:"CREATED_AT",header:"Created At",mono:!0,render:t=>d`<span class="u-text-xs u-text-muted">${t.CREATED_AT||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:t=>t.RESOLVED?d`<span class="u-text-success u-text-xs">Resolved${t.RESOLUTION_NOTE?`: ${t.RESOLUTION_NOTE}`:""}</span>`:$({label:"Resolve",size:"sm",variant:"secondary",onClick:()=>s(t.ID)})}];return{view(){const t=E.read(K.list(e));return Ae({id:`incidents-table-${e?"resolved":"active"}`,columns:o,snapshot:t,getRows:i=>(i==null?void 0:i.items)??(Array.isArray(i)?i:[]),emptyMessage:e?"No resolved incidents.":"No active incidents. System is healthy."})}}}function Us({onEditError:e}={}){const a=[{key:"ERROR_CODE",header:"Code",render:s=>d`<strong class="u-text-sm u-font-mono">${s.ERROR_CODE}</strong>`},{key:"CATEGORY",header:"Category",render:s=>d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px;">${s.CATEGORY}</span>`},{key:"SEVERITY",header:"Severity",render:s=>{if(s.SEVERITY==="INFO")return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, #d5c378 20%, transparent); color: #d5c378; padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`;const o=s.SEVERITY==="CRITICAL"?"danger":"warning";return d`<span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-${o}) 20%, transparent); color: var(--color-${o}); padding: 2px 6px; border-radius: 4px;">${s.SEVERITY}</span>`}},{key:"DESCRIPTION",header:"Description",render:s=>d`<span class="u-text-sm">${s.DESCRIPTION}</span>`},{key:"TRIGGER_CONDITION",header:"Trigger Condition",render:s=>d`<span class="u-text-sm u-text-muted">${s.TRIGGER_CONDITION||"None"}</span>`},{key:"REMEDY",header:"Remedy Script/Action",render:s=>d`<span class="u-text-sm">${s.REMEDY||"-"}</span>`},{key:"ACTIONS",header:"",align:"end",render:s=>$({label:"Edit",size:"sm",variant:"secondary",onClick:()=>e==null?void 0:e(s)})}];return{view(){const s=E.read(K.catalog);return Ae({id:"error-catalog-table",columns:a,snapshot:s,getRows:o=>Array.isArray(o)?o:(o==null?void 0:o.value)||(o==null?void 0:o.items)||[],emptyMessage:"No error templates registered in catalog.",onRetry:()=>re.getCatalog()})}}}function Vs({onClose:e,onIncidentCreated:a}){let s=!1;async function o(l){l.preventDefault();const u=l.target,n=u.incident_code.value.trim().toUpperCase(),c=u.severity.value,r=u.component.value.trim(),v=u.details.value.trim();if(!n||!r||!v){alert("Please fill in Code, Component, and Details.");return}s=!0;try{await re.createIncident({incident_code:n,severity:c,component:r,details:v}),E.invalidate(K.all),a==null||a(),e()}catch(g){alert("Failed to report incident: "+g.message)}finally{s=!1}}const t=d`
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
      ${$({label:"Cancel",variant:"secondary",onClick:e})}
      ${$({label:"Report Incident",variant:"save",type:"submit",loading:s,onClick:()=>{const l=document.getElementById("report-incident-form");l&&l.requestSubmit()}})}
    </div>
  `;return ee({title:"Report System Incident",size:"md",onClose:e,body:t,footer:i})}function Gs({onClose:e,onErrorCreated:a,initialData:s=null}){let o=!1;const t=!!(s&&s.ERROR_CODE);async function i(n){var b;n.preventDefault();const c=n.target,r=c.error_code.value.trim().toUpperCase(),v=c.category.value.trim().toUpperCase(),g=c.severity.value,m=c.description.value.trim(),p=c.trigger_condition.value.trim(),f=c.remedy.value.trim();if(!r||!v||!m){alert("Please fill in Error Code, Category, and Description.");return}if(!t){const y=E.read(K.catalog),x=(Array.isArray(y==null?void 0:y.data)?y.data:((b=y==null?void 0:y.data)==null?void 0:b.items)??[]).find(h=>h.ERROR_CODE===r);if(x&&!await he({title:"Error Template Already Exists",message:`An error template with code '${r}' is already registered under category '${x.CATEGORY}'. Do you want to overwrite it with these new values?`,confirmLabel:"Overwrite Existing",tone:"warning"}))return}o=!0;try{await re.upsertError({error_code:r,category:v,severity:g,description:m,trigger_condition:p,remedy:f}),E.invalidate(K.catalog),a==null||a(),e()}catch(y){alert("Failed to save error template: "+y.message)}finally{o=!1}}const l=d`
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
      ${$({label:"Cancel",variant:"secondary",onClick:e})}
      ${$({label:t?"Update Error":"Register Error",variant:"save",type:"submit",loading:o,onClick:()=>{const n=document.getElementById("add-error-form");n&&n.requestSubmit()}})}
    </div>
  `;return ee({title:t?`Edit Error: ${s.ERROR_CODE}`:"Register Error Template (ERROR_INDEX)",size:"md",onClose:e,body:l,footer:u})}function qs(){const e=de({activeTab:"active",isReportModalOpen:!1,isAddErrorModalOpen:!1,editingError:null}),a=We({resolved:!1}),s=We({resolved:!0}),o=Us({onEditError:n=>e.set(c=>({...c,isAddErrorModalOpen:!0,editingError:n}))});let t,i,l,u;return{mount(n){t=E.subscribe(K.list(!1),()=>n()),i=E.subscribe(K.list(!0),()=>n()),l=E.subscribe(K.catalog,()=>n()),u=e.subscribe(()=>n()),re.getIncidents(!1),re.getIncidents(!0),re.getCatalog()},unmount(){t&&t(),i&&i(),l&&l(),u&&u()},view(){const{activeTab:n,isReportModalOpen:c,isAddErrorModalOpen:r,editingError:v}=e.get(),g=(m,p,f)=>{const b=n===m;return d`
          <button 
            class="u-flex u-items-center u-gap-2 u-text-sm"
            style="background: ${b?"color-mix(in srgb, var(--color-accent) 15%, transparent)":"var(--color-bg-card)"}; border: ${b?"1px solid var(--color-accent)":"1px solid var(--color-border)"}; border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3); color: ${b?"var(--color-accent)":"var(--color-text-muted)"}; cursor: pointer; transition: all 0.2s;"
            @click=${()=>e.set(h=>({...h,activeTab:m}))}
          >
            ${Z({name:p,size:16})}
            <span>${f}</span>
          </button>
        `};return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${g("active","alert","Active Incidents")}
              ${g("resolved","check","Resolved")}
              ${g("catalog","search","Error Index Catalog")}
            </div>
            
            ${$(n==="catalog"?{label:"+ Add Error",variant:"add",size:"sm",onClick:()=>e.set(m=>({...m,isAddErrorModalOpen:!0,editingError:null}))}:{label:"+ Report Incident",variant:"delete",size:"sm",onClick:()=>e.set(m=>({...m,isReportModalOpen:!0}))})}
          </div>
          
          ${n==="active"?a.view():w}
          ${n==="resolved"?s.view():w}
          ${n==="catalog"?o.view():w}

          <!-- Modals -->
          ${c?Vs({onClose:()=>e.set(m=>({...m,isReportModalOpen:!1})),onIncidentCreated:()=>{}}):w}

          ${r?Gs({onClose:()=>e.set(m=>({...m,isAddErrorModalOpen:!1,editingError:null})),onErrorCreated:()=>{},initialData:v}):w}
        </div>
      `}}}const Pe={all:["gitops"]},Hs={getGitOps:e=>E.load(Pe.all,()=>M.get("/api/v1/meta/query",{query:{target:"gitops"}}),e)};function Ks(){let e;return{mount(a){e=E.subscribe(Pe.all,()=>a()),Hs.getGitOps()},unmount(){e&&e()},view(){const a=E.read(Pe.all),{status:s,data:o,error:t,isFetching:i}=a;if(s==="loading"&&!o)return d`<p class="u-text-muted">Loading GitOps status...</p>`;if(s==="error"&&!o)return d`<p class="u-text-danger">Error: ${t==null?void 0:t.message}</p>`;const l=(o==null?void 0:o.telemetry)||{};return d`
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
      `}}}const I={all:["settings"]},Ys={getSettings:e=>E.load(I.all,()=>M.get("/api/v1/settings"),e),saveConfig:e=>M.post("/api/v1/settings/config",e),triggerSweep:()=>M.post("/api/v1/settings/sweep"),triggerBackup:()=>M.post("/api/v1/settings/backup")};function Ws(e,a={},s=300){const o=Object.keys(a),t=()=>{e.set(l=>({...l,isServiceModalOpen:!0}))},i=(l,u,n)=>{var v;const c=((v=u.field_mappings)==null?void 0:v.length)||0,r=Object.keys(u.enrichment_endpoints||{}).join(", ");return d`
      <div style="padding: var(--space-4); border-bottom: ${n?"none":"1px solid var(--color-border)"};">
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
            ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(g=>({...g,isServiceModalOpen:!0,editingServiceId:l}))})}
            ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete service?")})}
          </div>
        </div>
        <div class="u-text-sm u-font-mono u-text-muted" style="color: var(--color-text-muted);">
          Base URL: ${u.base_url||"N/A"} | API Key ${u.api_key?"configured":"missing"} | Field Mappings: <span style="color: var(--color-text); font-weight: bold;">${c}</span> | Enrichment: <span style="color: var(--color-text-secondary);">${r||"none"}</span>
        </div>
      </div>
    `};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Upstream Services</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure external API services, endpoints, and credentials dynamically with zero templates.</p>
        </div>
        ${$({label:"+ Add Service",variant:"add",size:"sm",onClick:t})}
      </div>
      
      <div class="u-flex u-flex-col">
        ${o.length===0?d`<div class="u-text-muted u-text-sm" style="padding: var(--space-4);">No services configured.</div>`:w}
        ${o.map((l,u)=>i(l,a[l],u===o.length-1))}
      </div>
    </div>
  `}function Js(e){var Y;const a=e.get(),s=E.read(I.all),o=((Y=s==null?void 0:s.data)==null?void 0:Y.services)||{},t=a.editingServiceId?o[a.editingServiceId]:null,i=a.serviceAllowedEvents!==void 0?a.serviceAllowedEvents:(t==null?void 0:t.allowed_event_types)||[],l=a.serviceDiscoveredEvents||[],u=a.isDiscoveringEvents||!1,n=a.discoveryEventsError||null,c=()=>{var ue,pe;const T=document.getElementById("srv-name"),k=document.getElementById("srv-id"),F=document.getElementById("srv-url"),V=document.getElementById("srv-api"),R=document.getElementById("chk-service-inherit-poll"),U=document.getElementById("srv-endpoint"),J=document.getElementById("srv-pipeline"),te=document.getElementById("srv-enrich"),z=document.getElementById("chk-service-enabled");return{name:T?T.value:(t==null?void 0:t.name)||"",id:k?k.value:a.editingServiceId||"",base_url:F?F.value:(t==null?void 0:t.base_url)||"",api_key:V?V.value:(t==null?void 0:t.api_key)||"",inherit_poll:R?R.checked:t?t.poll_interval_seconds==null:!0,poll_endpoint:U?U.value:(t==null?void 0:t.poll_endpoint)||(t==null?void 0:t.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",pipeline_key_template:J?J.value:(t==null?void 0:t.pipeline_key_template)||"{service}:{id}",enrichments:te?te.value:t!=null&&t.enrichment_endpoints?Object.entries(t.enrichment_endpoints).map(([se,Ee])=>`${se}: ${Ee}`).join(`
`):"",fallback_lookup_column:(((ue=document.getElementById("srv-fallback-col"))==null?void 0:ue.value)||"").trim()||null,fallback_lookup_field:(((pe=document.getElementById("srv-fallback-field"))==null?void 0:pe.value)||"").trim()||null,enabled:z?z.checked:t?t.enabled:!0}},r=()=>{e.set(T=>({...T,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))},v=()=>{var T,k,F,V,R,U,J,te,z,ue,pe;try{const se=(((T=document.getElementById("srv-id"))==null?void 0:T.value)||"").trim();if(!se){alert("Service ID is required");return}const Ee=(((k=document.getElementById("srv-enrich"))==null?void 0:k.value)||"").trim(),Ue={};Ee&&Ee.split(`
`).forEach(Ie=>{const Te=Ie.split(":");Te.length>=2&&(Ue[Te[0].trim()]=Te.slice(1).join(":").trim())});const nt={name:(((F=document.getElementById("srv-name"))==null?void 0:F.value)||"").trim()||se,base_url:(((V=document.getElementById("srv-url"))==null?void 0:V.value)||"").trim(),api_key:(((R=document.getElementById("srv-api"))==null?void 0:R.value)||"").trim(),poll_interval_seconds:(U=document.getElementById("chk-service-inherit-poll"))!=null&&U.checked?null:60,poll_endpoint:(((J=document.getElementById("srv-endpoint"))==null?void 0:J.value)||"").trim(),pipeline_key_template:(((te=document.getElementById("srv-pipeline"))==null?void 0:te.value)||"").trim(),fallback_lookup_column:(((z=document.getElementById("srv-fallback-col"))==null?void 0:z.value)||"").trim()||null,fallback_lookup_field:(((ue=document.getElementById("srv-fallback-field"))==null?void 0:ue.value)||"").trim()||null,enrichment_endpoints:Ue,enabled:((pe=document.getElementById("chk-service-enabled"))==null?void 0:pe.checked)??!0,allowed_event_types:i,field_mappings:(t==null?void 0:t.field_mappings)||[]},Ve={...o,[se]:nt};a.editingServiceId&&a.editingServiceId!==se&&delete Ve[a.editingServiceId],E.setData(I.all,()=>({...s.data,services:Ve})),e.set(Ie=>({...Ie,isDirty:!0,isServiceModalOpen:!1,editingServiceId:null,serviceModalDraft:null,serviceAllowedEvents:void 0,serviceDiscoveredEvents:null,isDiscoveringEvents:!1,discoveryEventsError:null}))}catch(se){alert("Error saving service: "+se.stack)}},g=async()=>{var V;const T=c(),k=T.id.trim(),F=T.poll_endpoint.trim()||"/api/v3/history";if(!k){alert("Service ID is required before discovering events.");return}e.set(R=>({...R,serviceModalDraft:T,isDiscoveringEvents:!0,discoveryEventsError:null}));try{const R=await M.post("/api/v1/pipeline/sample",{service_id:k,endpoint:F});if(R&&R.success===!1){e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:R.error||"Failed to discover events from API."}));return}let U=[];Array.isArray(R==null?void 0:R.sample_payload)?U=R.sample_payload:(V=R==null?void 0:R.sample_payload)!=null&&V.records&&Array.isArray(R.sample_payload.records)?U=R.sample_payload.records:R!=null&&R.sample_payload&&typeof R.sample_payload=="object"&&(U=[R.sample_payload]);const J=new Set;for(const z of U)z&&typeof z=="object"&&(z.eventType?J.add(String(z.eventType)):z.event_type?J.add(String(z.event_type)):z.type&&J.add(String(z.type)));const te=Array.from(J);e.set(z=>({...z,serviceModalDraft:c(),isDiscoveringEvents:!1,serviceDiscoveredEvents:te,discoveryEventsError:te.length===0?`No eventType found in sample payload (${U.length} records).`:null}))}catch(R){e.set(U=>({...U,serviceModalDraft:c(),isDiscoveringEvents:!1,discoveryEventsError:R.message||"Error communicating with sample endpoint."}))}},m=T=>{const k=c();let F;i.includes(T)?F=i.filter(V=>V!==T):F=[...i,T],e.set(V=>({...V,serviceModalDraft:k,serviceAllowedEvents:F}))},p=T=>{const k=c();T==="sonarr"?(k.name=k.name||"Sonarr",k.id=k.id||"sonarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments=`episode: /api/v3/episode/{episodeId}
series: /api/v3/series/{seriesId}`):T==="radarr"?(k.name=k.name||"Radarr",k.id=k.id||"radarr",k.poll_endpoint="/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",k.pipeline_key_template="{service}:{id}",k.enrichments="movie: /api/v3/movie/{movieId}"):T==="jellyfin"?(k.name=k.name||"Jellyfin",k.id=k.id||"jellyfin",k.poll_endpoint="/Items?Recursive=true",k.pipeline_key_template="{service}:{Id}"):T==="shoko"&&(k.name=k.name||"Shoko",k.id=k.id||"shoko",k.poll_endpoint="/api/v3/Series",k.pipeline_key_template="{service}:{id}"),e.set(F=>({...F,serviceModalDraft:k}))},f=a.serviceModalDraft,b=f?f.name:(t==null?void 0:t.name)||"",y=f?f.id:a.editingServiceId||"",S=f?f.base_url:(t==null?void 0:t.base_url)||"",x=f?f.api_key:(t==null?void 0:t.api_key)||"",h=f?f.inherit_poll:t?t.poll_interval_seconds==null:!0,C=f?f.poll_endpoint:(t==null?void 0:t.poll_endpoint)||(t==null?void 0:t.primary_endpoint)||"/api/v3/history?pageSize=100&sortKey=date&sortDirection=descending",N=f?f.pipeline_key_template:(t==null?void 0:t.pipeline_key_template)||"{service}:{id}",_=f?f.enrichments:t!=null&&t.enrichment_endpoints?Object.entries(t.enrichment_endpoints).map(([T,k])=>`${T}: ${k}`).join(`
`):"",O=(f==null?void 0:f.fallback_lookup_column)??((t==null?void 0:t.fallback_lookup_column)||""),A=(f==null?void 0:f.fallback_lookup_field)??((t==null?void 0:t.fallback_lookup_field)||""),L=f?f.enabled:t?t.enabled:!0,W=Array.from(new Set([...i,...l])),B=d`
    <!-- CFG-01: Quick Presets -->
    <div class="u-flex u-gap-2 u-mb-4">
      <span class="u-text-sm u-text-muted u-flex u-items-center">Quick Presets:</span>
      ${$({label:"Sonarr",variant:"secondary",size:"sm",onClick:()=>p("sonarr")})}
      ${$({label:"Radarr",variant:"secondary",size:"sm",onClick:()=>p("radarr")})}
      ${$({label:"Jellyfin",variant:"secondary",size:"sm",onClick:()=>p("jellyfin")})}
      ${$({label:"Shoko",variant:"secondary",size:"sm",onClick:()=>p("shoko")})}
    </div>

    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="srv-name" class="form-input" placeholder="Sonarr, Radarr, Jellyfin, etc." .value=${b}>
      </div>
      <div class="form-group">
        <label>Service ID (Slug)</label>
        <input type="text" id="srv-id" class="form-input font-mono" placeholder="sonarr, radarr, jellyfin" autocomplete="off" .value=${y} @input=${T=>{T.target.value=T.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
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
        <input type="password" id="srv-api" class="form-input font-mono" placeholder="••••••••••••••••" .value=${x}>
      </div>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-service-inherit-poll" .checked=${h}>
        <label for="chk-service-inherit-poll"><strong>Inherit Global Polling Cadence</strong> (Default: 300s)</label>
      </div>
    </div>

    <!-- Ingestion Pipeline Key & Filters -->
    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <h4 class="u-text-sm u-font-bold u-mb-2" style="color: var(--color-text);">Ingestion & Pipeline Identity</h4>
      
      <div class="form-group u-mb-3">
        <label>Primary Ingestion Endpoint (Root Stages)</label>
        <input type="text" id="srv-endpoint" class="form-input font-mono" placeholder="/api/v3/history?pageSize=100" .value=${C}>
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

      <div class="form-grid-2 u-mb-3">
        <div class="form-group">
          <label>Fallback Match Column (Optional)</label>
          <input type="text" id="srv-fallback-col" class="form-input font-mono" placeholder="FILE_PATH" .value=${O}>
          <small class="u-text-muted">DB column to search if primary key cannot be resolved on mutation/deletion events (e.g. <code>FILE_PATH</code>).</small>
        </div>
        <div class="form-group">
          <label>Fallback Source Field (Optional)</label>
          <input type="text" id="srv-fallback-field" class="form-input font-mono" placeholder="sourceTitle" .value=${A}>
          <small class="u-text-muted">Incoming event payload field to match against the DB column (e.g. <code>sourceTitle</code>).</small>
        </div>
      </div>

      <div class="form-group u-mb-0">
        <div class="u-flex u-justify-between u-items-center u-mb-2">
          <label class="u-mb-0"><strong>Allowed Ingestion Event Types</strong></label>
          ${$({label:u?"Discovering...":"Discover Events from API",variant:"secondary",size:"sm",loading:u,disabled:u,onClick:g})}
        </div>
        <p class="u-text-xs u-text-muted u-mb-2">Only checked event types will create new entries in SERVICES_PIPELINE. Deletions and pending downloads are excluded by default.</p>
        
        ${n?d`<div class="u-text-danger u-text-xs u-mb-2">${n}</div>`:w}

        ${W.length>0?d`
          <div class="u-flex u-flex-wrap u-gap-2 u-mt-2" style="max-height: 140px; overflow-y: auto; padding: 6px; background: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ${W.map(T=>{const k=i.includes(T);return d`
                <label class="u-flex u-items-center u-gap-2" style="background: var(--color-bg-card); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid ${k?"var(--color-accent)":"var(--color-border)"}; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    .checked=${k}
                    @change=${()=>m(T)}
                  >
                  <span class="font-mono u-text-xs" style="color: ${k?"var(--color-accent)":"var(--color-text)"}; font-weight: ${k?"600":"normal"};">
                    ${T}
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
      <input type="checkbox" id="chk-service-enabled" .checked=${L}>
      <label for="chk-service-enabled">Enable active polling loop for this service</label>
    </div>
  `,P=d`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:r})}
      ${$({label:a.editingServiceId?"Save Changes":"Create Service",variant:"save",onClick:v})}
    </div>
  `;return ee({title:a.editingServiceId?"Edit Service":"Register Service",size:"lg",onClose:r,body:B,footer:P})}function Xs({checked:e=!1,onChange:a,label:s=""}){return d`
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
  `}function Qs(e,a=[]){const s=()=>{e.set(i=>({...i,isStageModalOpen:!0,editingStageId:null}))},o=(i,l)=>{const u=E.read(I.all);if(!u||!u.data)return;const n=[...u.data.stages],c=i+l;c<0||c>=n.length||([n[i],n[c]]=[n[c],n[i]],E.setData(I.all,()=>({...u.data,stages:n})),e.set(r=>({...r,isDirty:!0})))},t=i=>i.start_condition?i.complete_condition?{label:"CONSUMER",color:"var(--color-accent)",bg:"color-mix(in srgb, var(--color-accent) 20%, transparent)"}:{label:"SINK",color:"var(--color-warning)",bg:"color-mix(in srgb, var(--color-warning) 20%, transparent)"}:{label:"ROOT",color:"var(--color-success)",bg:"color-mix(in srgb, var(--color-success) 20%, transparent)"};return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">DAG Execution Stages</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Define pipeline stages. Stages with <code>start_condition IS NULL</code> act as Root Producers.</p>
        </div>
        ${$({label:"+ Add Stage",variant:"add",size:"sm",onClick:s})}
      </div>
      
      <div class="u-flex u-flex-col u-gap-3" style="padding: var(--space-4);">
        ${a.length===0?d`<div class="u-text-muted u-text-sm">No execution stages defined yet. Click <strong>+ Add Stage</strong> to create your first pipeline stage.</div>`:a.map((i,l)=>{const u=t(i);return d`
              <div style="padding: var(--space-4); border: 1px solid var(--color-border); border-left: 4px solid ${u.color}; border-radius: var(--radius-md); background: color-mix(in srgb, ${u.color} 5%, var(--color-bg-card)); transition: background 0.2s;">
                <div class="u-flex u-items-center u-justify-between">
                  <div class="u-flex u-items-center u-gap-3">
                    <strong style="color: var(--color-text); font-size: 1.1rem;">${i.name}</strong>
                    <span class="u-font-mono u-text-xs" style="color: var(--color-text-muted);">${i.id}</span>
                    <span class="u-font-mono u-text-xs" style="background: ${u.bg}; color: ${u.color}; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${u.label}</span>
                  </div>
                  <div class="u-flex u-items-center u-gap-3">
                    ${Xs({checked:i.enabled,label:i.enabled?"ACTIVE":"INACTIVE",onChange:n=>{const c={...E.read(I.all).data},r=c.stages.find(v=>v.id===i.id);r&&(r.enabled=n,n&&!r.start_condition&&!r.last_activated_at&&(r.last_activated_at=new Date().toISOString()),E.setData(I.all,()=>c),e.set(v=>({...v,isDirty:!0})))}})}
                    <div class="u-flex u-gap-1 u-ml-2">
                      ${$({label:"▲",variant:"ghost",size:"sm",disabled:l===0,ariaLabel:"Move Up",onClick:()=>o(l,-1)})}
                      ${$({label:"▼",variant:"ghost",size:"sm",disabled:l===a.length-1,ariaLabel:"Move Down",onClick:()=>o(l,1)})}
                      ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>e.set(n=>({...n,isStageModalOpen:!0,editingStageId:i.id}))})}
                      ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>confirm("Delete stage?")})}
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
                  `:w}
                </div>
              </div>
            `})}
      </div>
    </div>
  `}function De(e,a){const s=document.querySelectorAll(`.stage-scope-col-${e}:checked`).length,o=document.getElementById(`stage-scope-status-${e}`);if(!o)return;const t=s>0&&s<a?`(${s} of ${a} active)`:"(All fields active by default)";o.setAttribute("data-status",t)}function Zs(e,a,s){if(!e||e.length===0)return d`<span class="u-text-muted u-text-sm">No services configured.</span>`;const o=(s==null?void 0:s.service_mapping_scopes)||{};return d`
    <style>
      .stage-scope-status-badge::after {
        content: attr(data-status);
      }
    </style>
    <div class="u-flex u-flex-col u-gap-3">
      ${e.map(t=>{var r,v;const i=((r=s==null?void 0:s.service_ids)==null?void 0:r.includes(t))??!1,l=((v=a[t])==null?void 0:v.field_mappings)||[],u=o[t]||[],n=Array.isArray(u)&&u.length>0&&u.length<l.length,c=n?`(${u.length} of ${l.length} active)`:"(All fields active by default)";return d`
          <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            <div class="u-flex u-items-center u-justify-between">
              <label class="form-checkbox" style="cursor: pointer; margin: 0;">
                <input type="checkbox" name="stage-service" value="${t}" ?checked=${i}>
                <span class="u-text-sm font-mono" style="font-weight: 600;">${t}</span>
              </label>
              ${l.length>0?d`<span class="u-text-xs u-text-muted font-mono stage-scope-status-badge" id="stage-scope-status-${t}" data-status="${c}"></span>`:w}
            </div>

            ${l.length>0?d`
              <details ?open=${n} style="margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px dashed var(--color-border);">
                <summary style="cursor: pointer; user-select: none;" class="u-text-xs u-text-muted">
                  <span>Configure Field Scope for <strong>${t}</strong></span>
                </summary>
                <div style="margin-top: var(--space-2);">
                  <div class="u-flex u-items-center u-justify-between u-mb-2">
                    <p class="u-text-xs u-text-muted" style="margin: 0;">
                      Leaving columns unselected updates all mapped fields for this service. Check specific columns to restrict updates for this stage.
                    </p>
                    <div class="u-flex u-gap-1">
                      ${$({label:"Select All",variant:"ghost",size:"sm",onClick:g=>{g.preventDefault(),document.querySelectorAll(`.stage-scope-col-${t}`).forEach(m=>{m.checked=!0}),De(t,l.length)}})}
                      ${$({label:"Clear All",variant:"ghost",size:"sm",onClick:g=>{g.preventDefault(),document.querySelectorAll(`.stage-scope-col-${t}`).forEach(m=>{m.checked=!1}),De(t,l.length)}})}
                    </div>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-2);">
                    ${l.map(g=>{const m=(g.target_column||"").toUpperCase(),p=n&&u.map(f=>f.toUpperCase()).includes(m);return d`
                        <label class="form-checkbox u-flex u-items-center u-gap-2" style="font-size: 0.8rem; background: var(--color-bg-card); padding: 4px 6px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0; cursor: pointer;">
                          <input type="checkbox"
                            class="stage-scope-col stage-scope-col-${t}"
                            data-service="${t}"
                            value="${m}"
                            ?checked=${p}
                            @change=${()=>De(t,l.length)}>
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <strong class="font-mono">${g.target_column}</strong>
                            <small class="u-text-muted font-mono">(${g.source_field})</small>
                          </span>
                        </label>
                      `})}
                  </div>
                </div>
              </details>
            `:w}
          </div>
        `})}
    </div>
  `}function ea(e,a){var o,t;const s={};for(const i of e){const l=((t=(o=a[i])==null?void 0:o.field_mappings)==null?void 0:t.length)||0;if(l===0)continue;const u=Array.from(document.querySelectorAll(`.stage-scope-col-${i}:checked`));u.length>0&&u.length<l&&(s[i]=u.map(n=>n.value.toUpperCase()))}return s}function ta(e){if(!e)return"";try{const a=new Date(e);if(isNaN(a.getTime()))return"";const s=o=>String(o).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())}T${s(a.getHours())}:${s(a.getMinutes())}`}catch{return""}}function sa(e){var m,p,f;const a=e.get(),s=E.read(I.all),o=((m=s==null?void 0:s.data)==null?void 0:m.stages)||[],t=((p=s==null?void 0:s.data)==null?void 0:p.services)||((f=s==null?void 0:s.data)==null?void 0:f.apps)||{},i=Object.keys(t),l=a.editingStageId?o.find(b=>b.id===a.editingStageId):null,u=a.stageIsSink??(l?!l.complete_condition:!1),n=a.stageIsRoot??(l?!l.start_condition:!1),c=()=>{e.set(b=>({...b,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))},r=()=>{var b,y,S;try{const x=document.getElementById("stage-id").value.trim();if(!x){alert("Stage ID is required");return}let h=null;if(n){const A=(b=document.getElementById("stage-last-activated"))==null?void 0:b.value;if(A)try{h=new Date(A).toISOString()}catch{h=(l==null?void 0:l.last_activated_at)||null}}const C=Array.from(document.querySelectorAll('input[name="stage-service"]:checked')).map(A=>A.value),N=ea(C,t),_={id:x,name:document.getElementById("stage-name").value.trim()||x,description:document.getElementById("stage-desc").value.trim(),service_ids:C,service_mapping_scopes:N,start_condition:n?null:((y=document.getElementById("stage-start"))==null?void 0:y.value.trim())||null,complete_condition:u?null:((S=document.getElementById("stage-complete"))==null?void 0:S.value.trim())||null,grace_period_minutes:parseInt(document.getElementById("stage-grace").value)||0,watchdog_timeout_minutes:parseInt(document.getElementById("stage-watchdog").value)||0,enabled:document.getElementById("chk-stage-enabled").checked,order:l?l.order:o.length+1,last_activated_at:h};let O=[...o];a.editingStageId?O=O.map(A=>A.id===a.editingStageId?_:A):O.push(_),E.setData(I.all,()=>({...s.data,stages:O})),e.set(A=>({...A,isDirty:!0,isStageModalOpen:!1,stageIsRoot:null,stageIsSink:null,editingStageId:null}))}catch(x){alert("Error in Save Stage: "+x.stack)}},v=d`
    <div class="form-grid-2 u-mb-3">
      <div class="form-group">
        <label>Stage Semantic Slug (ID)</label>
        <input type="text" id="stage-id" class="form-input font-mono" placeholder="ingest, recognition, library" autocomplete="off" .value=${(l==null?void 0:l.id)||""} ?disabled=${!!l} @input=${b=>{b.target.value=b.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")}}>
        <small class="u-text-muted">Unique key used in predicates (e.g. <code>stage.ingest.completed</code>).</small>
      </div>
      <div class="form-group">
        <label>Display Name</label>
        <input type="text" id="stage-name" class="form-input" placeholder="Ingestion (Sonarr / Radarr)" .value=${(l==null?void 0:l.name)||""}>
      </div>
    </div>

    <div class="form-group u-mb-3">
      <label>Description</label>
      <input type="text" id="stage-desc" class="form-input" placeholder="Primary file arrival and tag discovery" .value=${(l==null?void 0:l.description)||""}>
    </div>

    <div class="form-group u-mb-3">
      <label>Assigned Services & Field Scopes</label>
      ${Zs(i,t,l)}
      <small class="u-text-muted u-mt-1" style="display: block;">Select services operating within this pipeline stage and optionally restrict mapped fields.</small>
    </div>

    <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-mb-3">
      <div class="form-checkbox u-mb-2">
        <input type="checkbox" id="chk-stage-root" .checked=${n} @change=${b=>e.set(y=>({...y,stageIsRoot:b.target.checked}))}>
        <label for="chk-stage-root"><strong>Root Entry Stage (Root Producer)</strong> — <code>start_condition IS NULL</code></label>
      </div>
      <p class="u-text-sm u-text-muted u-mb-2">Root stages have no prerequisites and can autonomously create new rows in <code>SERVICES_PIPELINE</code>.</p>
      
      <div style="display: ${n?"none":"block"};">
        <label class="form-label u-text-sm">Start Condition Predicate</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="stage-start" class="form-input font-mono" placeholder="stage.ingest.completed AND IS_ANIME == 1" style="flex: 1;" .value=${(l==null?void 0:l.start_condition)||""}>
          ${$({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-start").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>

      <div style="display: ${n?"block":"none"};" class="u-mt-3">
        <label class="form-label u-text-sm"><strong>Historical Event Cutoff (last_activated_at)</strong></label>
        <p class="u-text-sm u-text-muted u-mb-2">Only service events occurring on or after this timestamp will be ingested. Leave empty to ingest all events without cutoff.</p>
        <div class="u-flex u-gap-2" style="align-items: center;">
          <input type="datetime-local" id="stage-last-activated" class="form-input font-mono" style="flex: 1;" .value=${ta(l?l.last_activated_at:n?new Date().toISOString():"")}>
          ${$({label:"Now",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");if(b){const y=new Date,S=x=>String(x).padStart(2,"0");b.value=`${y.getFullYear()}-${S(y.getMonth()+1)}-${S(y.getDate())}T${S(y.getHours())}:${S(y.getMinutes())}`}}})}
          ${$({label:"Clear",variant:"secondary",size:"sm",onClick:()=>{const b=document.getElementById("stage-last-activated");b&&(b.value="")}})}
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
          <input type="text" id="stage-complete" class="form-input font-mono" placeholder="FILE_PATH is not None" style="flex: 1;" .value=${(l==null?void 0:l.complete_condition)||""}>
          ${$({label:"Test Syntax",variant:"test",size:"sm",onClick:async()=>{const b=document.getElementById("stage-complete").value;if(!b.trim()){alert("Expression is empty!");return}try{const y=await(await fetch("/api/v1/settings/test-predicate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expression:b})})).json();y.valid?alert("Syntax Valid! ✅"):alert("Syntax Error ❌: "+y.message)}catch(y){alert("Validation failed: "+y.message)}}})}
        </div>
      </div>
    </div>

    <div class="form-grid-2">
      <div class="form-group">
        <label>Grace Period (Minutes)</label>
        <input type="number" id="stage-grace" class="form-input" min="0" max="1440" .value=${(l==null?void 0:l.grace_period_minutes)??10}>
        <small class="u-text-muted">Stability window before marking completed (0 to disable).</small>
      </div>
      <div class="form-group">
        <label>Watchdog Timeout (Minutes)</label>
        <input type="number" id="stage-watchdog" class="form-input" min="0" max="1440" .value=${(l==null?void 0:l.watchdog_timeout_minutes)??30}>
        <small class="u-text-muted">Emits WARN_PIPELINE_STALLED if exceeded (0 to disable).</small>
      </div>
    </div>

    <div class="form-checkbox u-mt-3">
      <input type="checkbox" id="chk-stage-enabled" ?checked=${l?l.enabled:!1}>
      <label for="chk-stage-enabled"><strong>Enable this stage</strong> (Active in execution pipeline)</label>
    </div>
  `,g=d`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:c})}
      ${$({label:a.editingStageId?"Save Changes":"Create Stage",variant:"save",onClick:r})}
    </div>
  `;return ee({title:"Configure DAG Stage",size:"lg",onClose:c,body:v,footer:g})}function aa(e,a={}){const s=Object.keys(a),o=e.get().selectedMappingService||s[0]||"",t=()=>{e.set(r=>({...r,isSampleApiModalOpen:!0,selectedMappingService:o}))},i=()=>{e.set(r=>({...r,isMappingModalOpen:!0,editingMapping:{source_field:"",target_column:"",data_type:"TEXT",transformer:""},editingMappingIndex:-1}))},l=(r,v)=>{e.set(g=>({...g,isMappingModalOpen:!0,editingMapping:{...r},editingMappingIndex:v}))},u=(r,v)=>{const m={...E.read(I.all).data},p=m.services[o].field_mappings,f=r+v;if(f<0||f>=p.length)return;const b=p[r];p[r]=p[f],p[f]=b,E.setData(I.all,()=>m),e.set(y=>({...y,isDirty:!0}))},n=r=>{if(confirm("Are you sure you want to delete this mapping?")){const g={...E.read(I.all).data};g.services[o].field_mappings.splice(r,1),E.setData(I.all,()=>g),e.set(m=>({...m,isDirty:!0}))}},c=()=>d`
      <div class="form-group u-mb-4" style="max-width: 320px;">
        <label>Select Service</label>
        <select 
          class="form-select"
          @change=${r=>e.set(v=>({...v,selectedMappingService:r.target.value}))}
        >
          ${s.map(r=>d`<option value="${r}" ?selected=${r===o}>${a[r].name}</option>`)}
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
          ${$({label:"Sample API",variant:"test",size:"sm",onClick:t})}
          ${$({label:"+ Add Mapping",variant:"add",size:"sm",onClick:i})}
        </div>
      </div>
      
      <div style="padding: var(--space-4);">
        ${s.length>0?c():w}
        
        ${(()=>{const r=a[o];return!r||!r.field_mappings||r.field_mappings.length===0?d`
              <div style="background: var(--color-bg-subtle); border-radius: var(--radius-sm); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
                <p class="u-text-muted u-text-sm">No field mappings configured for this service. Click <strong>+ Add Mapping</strong> or sample the API.</p>
              </div>
            `:d`
            <div class="u-flex u-flex-col u-gap-3">
              ${r.field_mappings.map((v,g)=>d`
                <div style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);" class="u-flex u-items-center u-justify-between">
                  <div>
                    <strong style="color: var(--color-text); font-family: monospace;">${v.source_field}</strong>
                    <span style="color: var(--color-text-muted); margin: 0 var(--space-2);">→</span>
                    <span class="u-font-mono u-text-xs" style="background: color-mix(in srgb, var(--color-accent) 20%, transparent); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; font-weight: bold;">${v.target_column}</span>
                    <span class="u-text-xs u-text-muted u-ml-2">(${v.data_type})</span>
                    ${v.transformer?d`<div class="u-text-xs u-text-muted u-mt-1 font-mono">Transformer: ${v.transformer}</div>`:w}
                  </div>
                  <div class="u-flex u-gap-2">
                    ${$({label:"▲",variant:"ghost",size:"sm",disabled:g===0,ariaLabel:"Move Up",onClick:()=>u(g,-1)})}
                    ${$({label:"▼",variant:"ghost",size:"sm",disabled:g===r.field_mappings.length-1,ariaLabel:"Move Down",onClick:()=>u(g,1)})}
                    ${$({label:"Edit",variant:"ghost",size:"sm",onClick:()=>l(v,g)})}
                    ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>n(g)})}
                  </div>
                </div>
              `)}
            </div>
          `})()}
      </div>
    </div>
  `}function oa(e){const a=e.get(),s=a.editingMapping||{source_field:"",target_column:"",data_type:"TEXT",transformer:""},o=()=>{e.set(u=>({...u,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1}))},t=()=>{const n={...E.read(I.all).data},c=Object.keys(n.services||{}),r=a.selectedMappingService||c[0];r&&(n.services[r].field_mappings||(n.services[r].field_mappings=[]),a.editingMappingIndex>=0?n.services[r].field_mappings[a.editingMappingIndex]=s:n.services[r].field_mappings.push(s),E.setData(I.all,()=>n),e.set(v=>({...v,isDirty:!0,isMappingModalOpen:!1,editingMapping:null,editingMappingIndex:-1})))},i=d`
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
        <input type="text" class="form-input font-mono" placeholder="IS_ANIME, TITLE_SONARR" autocomplete="off" .value=${s.target_column} @input=${u=>{let n=u.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");n=n.replace(/\s+/g,"_").toUpperCase().replace(/[^A-Z0-9_]/g,""),u.target.value=n,s.target_column=n}}>
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
        • Condition: <code>if 'anime' in value then 1 else 0</code><br>
        • Multi-branch: <code>if EVENT == 'DELETED' then 'DELETED' else if SHOKO_ID is not None then 'RECOGNIZED' else 'UNRECOGNIZED'</code><br>
        • Functions: <code>lower(value)</code> or <code>len(value) &gt; 0</code>
      </div>
      
      <div class="u-mt-3">
        <label class="form-label u-text-sm">Test Transformer with Sample Value or Context (JSON Object)</label>
        <div class="u-flex u-gap-2">
          <input type="text" id="transformerTestVal" class="form-input font-mono" placeholder='{"SHOKO_ID": 2639, "ANIDB_ID": 4821}' style="flex: 1;">
          ${$({label:"Test Transform",variant:"test",size:"sm",onClick:async()=>{const u=document.getElementById("transformerTestVal").value;let n;try{n=JSON.parse(u)}catch{n=u}try{const c={expression:s.transformer,sample_value:n};typeof n=="object"&&n!==null&&!Array.isArray(n)&&(c.context_dict=n);const r=await M.post("/api/v1/settings/test-transformer",c);r.valid?alert("Result: "+JSON.stringify(r.result)):alert("Error: "+r.message)}catch(c){alert("Error: "+c.message)}}})}
        </div>
      </div>
    </div>
  `,l=d`
    <div class="u-flex u-gap-2">
      ${$({label:"Cancel",variant:"secondary",onClick:o})}
      ${$({label:"Save Mapping",variant:"save",onClick:t})}
    </div>
  `;return ee({title:"Configure Field Mapping & Transformer",size:"lg",onClose:o,body:i,footer:l})}function na(e){var N;const a=e.get(),s=E.read(I.all),o=((N=s==null?void 0:s.data)==null?void 0:N.services)||{},t=Object.keys(o),i=a.selectedMappingService||t[0]||"",l=o[i],u=(l==null?void 0:l.name)||i||"No Service Selected",n=(l==null?void 0:l.poll_endpoint)||"/api/v3/history",c=a.sampleApiEndpoint!==void 0?a.sampleApiEndpoint:n,r=a.sampleApiLoading||!1,v=a.sampleApiError||null,g=a.sampleApiFields||null,m=(a.sampleApiFilter||"").trim().toLowerCase(),p=(a.sampleApiPrefix||"").trim(),f=()=>{e.set(_=>({..._,isSampleApiModalOpen:!1,sampleApiLoading:!1,sampleApiError:null,sampleApiFilter:"",sampleApiFields:null}))},b=async()=>{const _=document.getElementById("sample-endpoint-input"),O=_?_.value.trim():c;if(!i){alert("Please select or configure a service before sampling.");return}if(!O){alert("Please provide an endpoint to sample.");return}e.set(A=>({...A,sampleApiLoading:!0,sampleApiError:null,sampleApiEndpoint:O}));try{const A=await M.post("/api/v1/pipeline/sample",{service_id:i,endpoint:O});A&&A.success===!1?e.set(L=>({...L,sampleApiLoading:!1,sampleApiError:A.error||"Failed to sample API endpoint",sampleApiFields:[]})):e.set(L=>({...L,sampleApiLoading:!1,sampleApiFields:A.fields||[],sampleApiError:null}))}catch(A){e.set(L=>({...L,sampleApiLoading:!1,sampleApiError:A.message||"Error communicating with sample endpoint",sampleApiFields:[]}))}},y=_=>{const O=document.getElementById("sample-namespace-prefix"),A=O?O.value.trim():p,L=A?`${A}.${_.path}`:_.path,W=L.replace(/[^a-zA-Z0-9_]/g,"_").toUpperCase(),P={int:"INTEGER",float:"REAL",bool:"BOOLEAN",str:"TEXT",list:"TEXT",dict:"TEXT"}[_.type]||"TEXT";e.set(Y=>({...Y,isSampleApiModalOpen:!1,isMappingModalOpen:!0,editingMapping:{source_field:L,target_column:W,data_type:P,transformer:""},editingMappingIndex:-1}))},S=g?g.filter(_=>m?_.path&&_.path.toLowerCase().includes(m)||_.type&&_.type.toLowerCase().includes(m)||_.sample&&String(_.sample).toLowerCase().includes(m):!0):[],x=()=>r?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Fetching and analyzing schema from <code>${c}</code>...</p>
        </div>
      `:v?d`
        <div style="background: color-mix(in srgb, var(--color-danger) 10%, transparent); border-radius: var(--radius-md); border: 1px solid var(--color-danger); padding: var(--space-4);">
          <strong class="u-text-danger u-text-sm">Sampling Error:</strong>
          <p class="u-text-danger u-text-xs u-mt-1 font-mono" style="margin-bottom: 0;">${v}</p>
        </div>
      `:g===null?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-6); text-align: center;">
          <p class="u-text-muted u-text-sm">Click <strong>Fetch Sample</strong> to inspect payload JSON schema and available keys.</p>
        </div>
      `:g.length===0?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields discovered at this endpoint.</p>
        </div>
      `:S.length===0?d`
        <div style="background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--color-border); padding: var(--space-4); text-align: center;">
          <p class="u-text-muted u-text-sm">No fields match the current filter "<strong>${m}</strong>".</p>
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
            ${S.map(_=>d`
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
                  ${$({label:"+ Map",variant:"secondary",size:"sm",onClick:()=>y(_)})}
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      <div class="u-text-xs u-text-muted u-mt-2">
        Showing ${S.length} of ${g.length} discovered fields.
      </div>
    `,h=d`
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
        .value=${c}
        @input=${_=>e.set(O=>({...O,sampleApiEndpoint:_.target.value}))}
      >
      <datalist id="common-endpoints-list">
        <option value="/api/v3/history">History (Sonarr / Radarr)</option>
        <option value="/api/v3/queue">Queue (Sonarr / Radarr)</option>
        <option value="/api/v3/series">Series (Sonarr)</option>
        <option value="/api/v3/movie">Movies (Radarr)</option>
        <option value="/api/v3/tag">Tags (Sonarr / Radarr)</option>
        <option value="/Items?Recursive=true">Items (Jellyfin)</option>
      </datalist>
      ${$({label:r?"Fetching...":"Fetch Sample",variant:"test",loading:r,disabled:r,onClick:b})}
    </div>
    
    <div class="u-mb-3" style="background: var(--color-bg-subtle); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="form-grid-2">
        <input 
          type="text" 
          id="sample-filter-input"
          class="form-input" 
          placeholder="🔍 Filter discovered attributes (e.g. episode, id, title)..."
          .value=${a.sampleApiFilter||""}
          @input=${_=>e.set(O=>({...O,sampleApiFilter:_.target.value}))}
        >
        <!-- UX-01: Add Namespace Prefix input -->
        <input 
          type="text" 
          id="sample-namespace-prefix"
          class="form-input font-mono" 
          placeholder="Namespace prefix (optional, e.g. series, episode)"
          .value=${a.sampleApiPrefix||""}
          @input=${_=>e.set(O=>({...O,sampleApiPrefix:_.target.value}))}
        >
      </div>
    </div>
    
    ${x()}
  `,C=d`
    <div class="u-flex u-gap-2">
      ${$({label:"Close",variant:"secondary",onClick:f})}
    </div>
  `;return ee({title:"Sample Service API Schema",size:"lg",onClose:f,body:h,footer:C})}function ra(e,a={}){const s=Array.isArray(a.notification_triggers)?a.notification_triggers:Array.isArray(a.triggers)?a.triggers:[],o=()=>{e.set(n=>({...n,isNotificationModalOpen:!0}))},t=async n=>{try{const c=await M.post("/api/v1/settings/test-notification",{trigger_id:n==null?void 0:n.id,channel:(n==null?void 0:n.channel)||"ntfy",target_url:(n==null?void 0:n.target_url)||"http://host.docker.internal:8090",topic:(n==null?void 0:n.topic)||"cubi-alerts",message:`Test alert from ServerManager for trigger: ${(n==null?void 0:n.id)||"manual"}`});if(c&&c.success)alert(`✓ Notification successfully dispatched to ${(n==null?void 0:n.channel)||"ntfy"}`);else{const r=(c==null?void 0:c.error)||(c!=null&&c.status_code?`HTTP ${c.status_code}: ${c.response||"Failed"}`:(c==null?void 0:c.response)||"Unknown response");alert(`Failed to send alert: ${r}`)}}catch(c){alert(`Error sending test notification: ${c.message}`)}},i=async n=>{if(await he({title:"Delete Notification Trigger",message:`Are you sure you want to delete trigger '${n}'? This change will be applied upon saving settings.`,confirmLabel:"Delete",tone:"danger"})){const r=E.read(I.all);if(!r||!r.data)return;const g=(Array.isArray(r.data.notification_triggers)?r.data.notification_triggers:[]).filter(m=>m.id!==n);E.setData(I.all,m=>({...m,notification_triggers:g})),e.set(m=>({...m,isDirty:!0}))}},l=(n,c)=>{const r=E.read(I.all);if(!r||!r.data)return;const g=(Array.isArray(r.data.notification_triggers)?r.data.notification_triggers:[]).map(m=>m.id===n?{...m,enabled:!c}:m);E.setData(I.all,m=>({...m,notification_triggers:g})),e.set(m=>({...m,isDirty:!0}))},u=n=>n.includes("OPEN")||n.includes("FAIL")?"warning":n.includes("RESOLVED")||n.includes("SUCCESS")||n.includes("COMPLETE")?"success":"info";return d`
    <div style="background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-4); border-bottom: 1px solid var(--color-border);">
        <div>
          <h3 style="margin: 0; font-size: 1rem; color: var(--color-text);">Notification Triggers</h3>
          <p class="u-text-muted u-text-sm u-mt-1" style="margin-bottom: 0;">Configure event-driven alerts dispatching to NTFY topics or custom Webhooks.</p>
        </div>
        <div class="u-flex u-gap-2">
          ${$({label:"Test NTFY Endpoint",variant:"secondary",size:"sm",onClick:()=>t({channel:"ntfy",target_url:"http://host.docker.internal:8090",topic:"cubi-alerts"})})}
          ${$({label:"+ Add Trigger",variant:"save",size:"sm",onClick:o})}
        </div>
      </div>
      
      <div class="u-flex u-flex-col" style="padding: var(--space-4); gap: var(--space-3);">
        ${s.length===0?d`<div class="u-text-muted u-text-sm" style="text-align: center; padding: var(--space-6);">No notification triggers configured. Click <strong>+ Add Trigger</strong> to register one.</div>`:s.map(n=>d`
            <div 
              class="u-flex u-flex-col u-gap-2"
              style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-3);"
            >
              <div class="u-flex u-items-center u-justify-between">
                <div class="u-flex u-items-center u-gap-2">
                  <strong class="u-font-mono u-text-sm" style="color: var(--color-text);">${n.id}</strong>
                  ${ge({label:n.event||"ON_INCIDENT_OPEN",tone:u(n.event||"")})}
                  ${ge({label:n.channel||"ntfy",tone:"neutral"})}
                  ${n.enabled===!1?ge({label:"Disabled",tone:"danger"}):w}
                </div>
                <div class="u-flex u-items-center u-gap-2">
                  <button 
                    class="u-text-xs" 
                    style="background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 3px 8px; color: var(--color-text-muted); cursor: pointer;"
                    @click=${()=>l(n.id,n.enabled!==!1)}
                  >
                    ${n.enabled===!1?"Enable":"Disable"}
                  </button>
                  ${$({label:"Test Alert",variant:"secondary",size:"sm",onClick:()=>t(n)})}
                  ${$({label:"Delete",variant:"delete",size:"sm",onClick:()=>i(n.id)})}
                </div>
              </div>

              <div class="u-flex u-gap-4 u-mt-1 u-text-xs" style="color: var(--color-text-muted);">
                <div>
                  <span class="u-font-medium" style="color: var(--color-text);">Target:</span>
                  <span class="u-font-mono u-ml-1">${n.target_url||"-"}</span>
                </div>
                ${n.topic?d`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Topic:</span>
                    <span class="u-font-mono u-ml-1">${n.topic}</span>
                  </div>
                `:w}
                ${n.priority?d`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Priority:</span>
                    <span class="u-ml-1">${n.priority}</span>
                  </div>
                `:w}
                ${n.tags?d`
                  <div>
                    <span class="u-font-medium" style="color: var(--color-text);">Tags:</span>
                    <span class="u-ml-1">${n.tags}</span>
                  </div>
                `:w}
              </div>
            </div>
          `)}
      </div>
    </div>
  `}function ia(e){const a=()=>{e.set(i=>({...i,isNotificationModalOpen:!1}))},s=i=>{var y,S,x,h,C,N,_,O;i&&i.preventDefault();const l=(y=document.getElementById("input-trig-id"))==null?void 0:y.value.trim();if(!l){alert("Trigger ID is required.");return}const u=(S=document.getElementById("input-trig-event"))==null?void 0:S.value,n=(x=document.getElementById("input-trig-channel"))==null?void 0:x.value,c=(h=document.getElementById("input-trig-url"))==null?void 0:h.value.trim();if(!c){alert("Target URL is required.");return}const r=((C=document.getElementById("input-trig-topic"))==null?void 0:C.value.trim())||"",v=((N=document.getElementById("input-trig-priority"))==null?void 0:N.value.trim())||"default",g=((_=document.getElementById("input-trig-tags"))==null?void 0:_.value.trim())||"server",m=((O=document.getElementById("input-trig-template"))==null?void 0:O.value.trim())||"{event}: {details}",p=E.read(I.all);if(!p||!p.data)return;const b=(Array.isArray(p.data.notification_triggers)?[...p.data.notification_triggers]:[]).filter(A=>A.id!==l);b.push({id:l,event:u,enabled:!0,channel:n,target_url:c,topic:r,priority:v,tags:g,message_template:m}),E.setData(I.all,A=>({...A,notification_triggers:b})),e.set(A=>({...A,isDirty:!0,isNotificationModalOpen:!1}))},o=d`
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
      ${$({label:"Cancel",variant:"secondary",onClick:a})}
      ${$({label:"Save Trigger",variant:"save",onClick:()=>s()})}
    </div>
  `;return ee({title:"Configure Notification Trigger",size:"md",onClose:a,body:o,footer:t})}function la(e,a={}){const s=a.retention_days||30,o=a.global_poll_interval_seconds||300;return d`
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
                @input=${t=>{const l={...E.read(I.all).data,retention_days:parseInt(t.target.value,10)||30};E.setData(I.all,()=>l),e.set(u=>({...u,isDirty:!0}))}}>
              <small class="u-text-muted">Rows older than retention window will be pruned during maintenance routines.</small>
            </div>
            <div class="form-group">
              <label>Global Polling Interval (Seconds)</label>
              <input type="number" class="form-input" min="10" max="86400" .value=${o}
                @input=${t=>{const l={...E.read(I.all).data,global_poll_interval_seconds:parseInt(t.target.value,10)||300};E.setData(I.all,()=>l),e.set(u=>({...u,isDirty:!0}))}}>
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

        ${$({label:"Restart Scheduler Loops",variant:"execute",size:"sm",onClick:()=>alert("Restart Loops")})}
      </div>
    </div>
  `}const ca={testEnrichment:e=>M.post("/api/v1/pipeline/sandbox/enrichment",e)};function da(){let e={selectedService:"",selectedRecordId:"",sampleEndpoint:"",customContextText:"",customContextError:null,testName:"",testEndpoint:"",testResponse:null,rawContextData:null,flattenedKeys:[],inspectorTab:"keys",inspectorFilter:"",copiedPath:null,logs:[],isLoading:!1,error:null,saveSuccess:!1};const a=new Set,s=()=>e,o=r=>{e=typeof r=="function"?r(e):{...e,...r},a.forEach(v=>v())};return{get:s,set:o,subscribe:r=>(a.add(r),()=>a.delete(r)),toggleEndpoint:(r,v)=>{const g=(v||"").trim();if(!g)return;const p=s().testEndpoint.split(`
`).map(b=>b.trim()).filter(Boolean);let f;p.includes(g)?f=p.filter(b=>b!==g):f=[...p,g],o({testEndpoint:f.join(`
`)})},runTest:async()=>{var y,S,x;const r=s();if(!r.selectedService){o({error:"Please select a configured service to test."});return}let v=null;if(r.customContextText.trim())try{v=JSON.parse(r.customContextText)}catch(h){o({error:`Invalid Custom JSON Context: ${h.message}`});return}const g=E.read(I.all),p=(((y=g==null?void 0:g.data)==null?void 0:y.services)||{})[r.selectedService],f=r.testEndpoint.split(`
`).map(h=>h.trim()).filter(Boolean),b={};if(f.length>0){const h=(p==null?void 0:p.enrichment_endpoints)||{},C=new Map;for(const[N,_]of Object.entries(h))typeof _=="string"&&_.trim()&&C.set(_.trim(),N);f.forEach((N,_)=>{let O=C.get(N);if(!O){const A=r.testName.trim();if(A&&!b[A])O=A;else{O=`test_${_}`;let L=_;for(;b[O];)L++,O=`test_${L}`}}b[O]=N})}o({isLoading:!0,error:null,logs:[],testResponse:null});try{const h=await ca.testEnrichment({service_id:r.selectedService,record_id:r.selectedRecordId?parseInt(r.selectedRecordId,10):null,sample_endpoint:r.sampleEndpoint.trim()||null,custom_context:v,enrichment_endpoints:b});let C=h.context_data;if(f.length===1){const N=Object.keys(b)[0];N&&((S=h.context_data)==null?void 0:S[N])!==void 0&&(C=h.context_data[N])}else if(f.length>1){const N={};for(const _ of Object.keys(b))((x=h.context_data)==null?void 0:x[_])!==void 0&&(N[_]=h.context_data[_]);Object.keys(N).length>0&&(C=N)}o({isLoading:!1,logs:h.logs||[],rawContextData:h.context_data||null,flattenedKeys:h.flattened_keys||[],testResponse:C})}catch(h){o({isLoading:!1,error:h.message})}},saveEndpoint:async()=>{var N;const r=s();if(!r.selectedService)return;const v=r.testName.trim(),g=r.testEndpoint.split(`
`).map(_=>_.trim()).filter(Boolean);if(!v||g.length===0){o({error:"Please provide both a namespace name and an endpoint to save."});return}const m=E.read(I.all),p=((N=m==null?void 0:m.data)==null?void 0:N.services)||{},f=p[r.selectedService],b=(f==null?void 0:f.enrichment_endpoints)||{},S=g.find(_=>!Object.values(b).map(O=>String(O).trim()).includes(_))||g[g.length-1],x={...b,[v]:S},h={...p,[r.selectedService]:{...f,enrichment_endpoints:x}},C={...m.data,services:h};try{await M.post("/api/v1/settings/config",C),E.setData(I.all,()=>C),o({saveSuccess:!0,error:null}),setTimeout(()=>o({saveSuccess:!1}),3e3)}catch(_){o({error:`Failed to save to service: ${_.message}`})}},copyPath:r=>{var v;(v=navigator.clipboard)==null||v.writeText(r),o({copiedPath:r}),setTimeout(()=>{s().copiedPath===r&&o({copiedPath:null})},1500)},insertPlaceholder:r=>{const v=`{${r}}`,g=s().testEndpoint;if(!g){o({testEndpoint:v});return}const m=g.split(`
`),p=m[m.length-1];let f;!p||p.endsWith("/")||p.endsWith("=")||p.endsWith("&")?f=p+v:f=p+(p.includes("?")?"&":"/")+v,m[m.length-1]=f,o({testEndpoint:m.join(`
`)})}}}const we={sonarr:["/api/v3/history?pageSize=1","/api/v3/queue?pageSize=1","/api/v3/history","/api/v3/queue","/api/v3/series","/api/v3/episode","/api/v3/tag"],radarr:["/api/v3/history?pageSize=1","/api/v3/queue?pageSize=1","/api/v3/history","/api/v3/queue","/api/v3/movie","/api/v3/tag"],shoko:["/api/v3/Series","/api/v3/Episode","/api/v3/File"],jellyfin:["/Items?Recursive=true","/Users","/System/Info"]};function ua(e,a){if(!a&&!e)return[];const s=[];if(a!=null&&a.poll_endpoint&&typeof a.poll_endpoint=="string"){const l=a.poll_endpoint.trim();l&&s.push(l)}if(a!=null&&a.enrichment_endpoints){const l=Array.isArray(a.enrichment_endpoints)?a.enrichment_endpoints:Object.values(a.enrichment_endpoints);for(const u of l)typeof u=="string"&&u.trim()&&s.push(u.trim())}const o=String(e||"").toLowerCase(),t=String((a==null?void 0:a.name)||"").toLowerCase(),i=`${o} ${t}`;return i.includes("sonarr")?s.push(...we.sonarr):i.includes("radarr")?s.push(...we.radarr):i.includes("shoko")?s.push(...we.shoko):i.includes("jellyfin")&&s.push(...we.jellyfin),Array.from(new Set(s))}function pa({services:e={},selectedService:a="",selectedRecordId:s="",sampleEndpoint:o="",customContextText:t="",customContextError:i=null,testName:l="",isLoading:u=!1,saveSuccess:n=!1,onServiceChange:c,onRecordIdChange:r,onSampleEndpointChange:v,onCustomContextChange:g,onTestNameChange:m,onRunTest:p,onSaveToService:f}){const b=Object.keys(e),y=e[a],S=ua(a,y);return d`
    <div class="u-flex u-flex-col u-gap-3" style="flex-shrink: 0;">
      <!-- Primary Controls Row -->
      <div class="u-flex u-gap-3 u-items-center" style="flex-wrap: wrap;">
        <!-- Service Selector -->
        <div style="flex: 1; min-width: 160px; max-width: 240px;">
          <select
            class="form-select u-font-mono u-text-sm"
            @change=${x=>c==null?void 0:c(x.target.value)}
          >
            ${b.length===0?d`<option value="">No services configured</option>`:w}
            ${b.map(x=>d`
              <option value=${x} ?selected=${a===x}>
                ${e[x].name||x}
              </option>
            `)}
          </select>
        </div>

        <!-- Optional Record ID -->
        <div style="min-width: 120px; max-width: 140px; flex: 1;">
          <input
            type="number"
            class="form-input u-font-mono u-text-sm"
            placeholder="Record ID"
            title="Optional Pipeline Record ID from database"
            .value=${s}
            @input=${x=>r==null?void 0:r(x.target.value)}
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
            ${S.map(x=>d`<option value="${x}">${x}</option>`)}
          </datalist>
        </div>

        <!-- Run Action -->
        ${$({label:"RUN",variant:"test",loading:u,disabled:u||!a||!!i,onClick:p})}

        <!-- Save Namespace Controls -->
        <div class="u-flex u-items-center u-gap-2" style="margin-left: auto;">
          <span style="color: var(--color-text-muted);">&gt;</span>
          <input
            type="text"
            class="form-input u-font-mono u-text-sm"
            placeholder="namespace"
            title="Enrichment point namespace name"
            .value=${l}
            @input=${x=>m==null?void 0:m(x.target.value)}
            style="width: 130px;"
          />
          ${$({label:"SAVE",variant:"secondary",disabled:u||!a,onClick:f})}
          ${n?d`<span style="color: var(--color-success);">${Z({name:"check"})}</span>`:w}
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
            @input=${x=>g==null?void 0:g(x.target.value)}
            style="resize: none; line-height: 1.4; width: 100%;"
          ></textarea>
        </div>
      </details>
    </div>
  `}const va=d`
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
`;function ma(e){if(e==null)return"0 items";if(Array.isArray(e))return`${e.length} ${e.length===1?"item":"items"} (Array)`;if(typeof e=="object"){const a=Object.keys(e);return`${a.length} ${a.length===1?"key":"keys"} (Object)`}return"1 value"}function ga(e){return typeof e=="string"?d`<span class="json-val-str">${JSON.stringify(e)}</span>`:typeof e=="number"?d`<span class="json-val-num">${e}</span>`:typeof e=="boolean"?d`<span class="json-val-bool">${e?"true":"false"}</span>`:e===null?d`<span class="json-val-null">null</span>`:d`<span class="json-val-null">undefined</span>`}function ze(e,a,s,o,t){const i=n=>{n.stopPropagation(),n.preventDefault(),t==null||t(s)},l=o&&o===s,u=a!==null?d`
    <span class="json-tree-key" title="Click to copy path: ${s}" @click=${i}>${a}</span>
    <span class="json-tree-colon">: </span>
  `:w;if(Array.isArray(e))return e.length===0?d`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${u}<span class="json-tree-syntax">[]</span>
          ${l?d`<span class="json-copied-badge">✓ copied</span>`:w}
        </div>
      `:d`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${u}
          <span class="json-tree-syntax json-tree-bracket-open">[</span>
          <span class="json-tree-preview">[ ${e.length} items ]</span>
          ${l?d`<span class="json-copied-badge">✓ copied</span>`:w}
        </summary>
        <div class="json-tree-children">
          ${e.map((n,c)=>ze(n,c,s?`${s}.${c}`:String(c),o,t))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">]</span></div>
      </details>
    `;if(e!==null&&typeof e=="object"){const n=Object.keys(e);return n.length===0?d`
        <div class="json-tree-line">
          <span class="json-tree-spacer"></span>
          ${u}<span class="json-tree-syntax">{}</span>
          ${l?d`<span class="json-copied-badge">✓ copied</span>`:w}
        </div>
      `:d`
      <details open class="json-tree-details">
        <summary>
          <span class="json-tree-arrow"></span>
          ${u}
          <span class="json-tree-syntax json-tree-bracket-open">{</span>
          <span class="json-tree-preview">{ ${n.length} keys }</span>
          ${l?d`<span class="json-copied-badge">✓ copied</span>`:w}
        </summary>
        <div class="json-tree-children">
          ${n.map(c=>ze(e[c],c,s?`${s}.${c}`:c,o,t))}
        </div>
        <div class="json-tree-line"><span class="json-tree-spacer"></span><span class="json-tree-syntax">}</span></div>
      </details>
    `}return d`
    <div class="json-tree-line">
      <span class="json-tree-spacer"></span>
      ${u}${ga(e)}
      ${l?d`<span class="json-copied-badge">✓ copied</span>`:w}
    </div>
  `}function fa({data:e=null,copiedPath:a=null,onCopyPath:s}){if(e==null)return d`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🌳</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload data available.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and navigate the JSON hierarchy.</div>
      </div>
    `;const o=i=>{const l=i.currentTarget.closest(".json-tree-wrapper");l&&l.querySelectorAll("details").forEach(u=>{u.open=!0})},t=i=>{const l=i.currentTarget.closest(".json-tree-wrapper");l&&l.querySelectorAll("details").forEach((u,n)=>{u.open=n===0})};return d`
    <div class="json-tree-wrapper">
      ${va}
      <div class="json-tree-toolbar">
        <span class="u-text-xs u-font-mono" style="color: var(--color-text-secondary);">
          ${ma(e)}
        </span>
        <div class="u-flex u-items-center u-gap-1">
          <button type="button" class="json-btn-tool" @click=${o}>Expand All</button>
          <button type="button" class="json-btn-tool" @click=${t}>Collapse All</button>
        </div>
      </div>
      <div class="json-tree-content">
        ${ze(e,null,"",a,s)}
      </div>
    </div>
  `}const ba={int:"info",float:"info",bool:"success",list:"accent",dict:"warning",str:"neutral",string:"neutral"},ya=e=>ba[e==null?void 0:e.toLowerCase()]||"neutral";function xa({flattenedKeys:e=[],response:a=null,rawContext:s=null,logs:o=[],activeTab:t="keys",filterQuery:i="",copiedPath:l=null,onTabChange:u,onFilterChange:n,onCopyPath:c,onInsertPlaceholder:r}){const v=(i||"").toLowerCase().trim(),g=e.filter(p=>!v||p.path.toLowerCase().includes(v)||p.type&&p.type.toLowerCase().includes(v)||p.sample!==void 0&&String(p.sample).toLowerCase().includes(v)),m=(p,f)=>d`
      <button
        type="button"
        class="tab-btn u-font-mono ${t===p?"is-active":""}"
        style="padding: 3px var(--space-2); font-size: var(--font-size-xs);"
        @click=${()=>u==null?void 0:u(p)}
      >
        ${f}
      </button>
    `;return d`
    <div class="payload-inspector u-flex u-flex-col" style="height: 100%; min-height: 0; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden;">
      <div class="u-flex u-items-center u-justify-between" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); background: var(--color-bg-surface); flex-shrink: 0; gap: var(--space-2); flex-wrap: wrap;">
        <div class="u-flex u-items-center u-gap-2">
          ${m("keys",`Discovered Keys (${e.length})`)}
          ${m("tree","Payload Tree")}
          ${m("logs",`Logs (${o.length})`)}
        </div>
        ${t==="keys"&&e.length>0?d`
          <div style="max-width: 180px; flex: 1;">
            <input type="text" class="form-input u-font-mono u-text-xs" placeholder="Filter keys..." .value=${i} @input=${p=>n==null?void 0:n(p.target.value)} style="padding: 2px var(--space-2); height: 26px;" />
          </div>
        `:w}
      </div>

      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden;">
        ${t==="keys"?d`<div style="flex: 1; overflow-y: auto;">${ha({filteredKeys:g,totalCount:e.length,copiedPath:l,onCopyPath:c,onInsertPlaceholder:r})}</div>`:w}
        ${t==="tree"?fa({data:s||a,copiedPath:l,onCopyPath:c}):w}
        ${t==="logs"?d`<div style="flex: 1; overflow-y: auto;">${$a(o)}</div>`:w}
      </div>
    </div>
  `}function ha({filteredKeys:e,totalCount:a,copiedPath:s,onCopyPath:o,onInsertPlaceholder:t}){return a===0?d`
      <div class="u-flex u-flex-col u-items-center u-justify-center" style="padding: var(--space-6); text-align: center; color: var(--color-text-muted); height: 100%;">
        <span style="font-size: 1.5rem; margin-bottom: var(--space-2);">🔍</span>
        <div class="u-text-sm" style="color: var(--color-text);">No payload attributes discovered yet.</div>
        <div class="u-text-xs" style="margin-top: var(--space-1);">Execute a test request to inspect and extract available placeholder paths.</div>
      </div>
    `:e.length===0?d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No keys match filter query.</div>`:d`
    <div class="u-flex u-flex-col">
      ${e.map(i=>{const l=s===i.path;return d`
          <div class="u-flex u-items-center u-justify-between u-gap-3" style="padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--color-border); font-family: var(--font-mono);">
            <div class="u-flex u-flex-col u-gap-1" style="min-width: 0; flex: 1;">
              <div class="u-flex u-items-center u-gap-2">
                <span class="u-truncate" style="font-size: var(--font-size-sm); color: var(--color-accent); font-weight: 500; cursor: pointer;" title="Click to copy: ${i.path}" @click=${()=>o==null?void 0:o(i.path)}>${i.path}</span>
                ${ge({label:i.type||"unknown",tone:ya(i.type),mono:!0})}
              </div>
              ${i.sample!==void 0&&i.sample!==null?d`
                <div class="u-truncate" style="font-size: var(--font-size-xs); color: var(--color-text-secondary); line-height: 1.4;" title=${i.sample}>
                  <span style="color: var(--color-text-muted); font-size: var(--font-size-2xs);">sample: </span>${String(i.sample)}
                </div>
              `:w}
            </div>
            <div class="u-flex u-items-center u-gap-1" style="flex-shrink: 0;">
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Copy path to clipboard" style="padding: 3px 8px; font-size: 0.72rem; background: ${l?"var(--color-success)":"var(--color-bg-surface)"}; border: 1px solid ${l?"var(--color-success)":"var(--color-border-strong)"}; color: ${l?"#fff":"var(--color-text)"}; border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>o==null?void 0:o(i.path)}>
                ${Z({name:l?"check":"copy",size:12})}
                <span>${l?"Copied":"Copy"}</span>
              </button>
              <button type="button" class="u-flex u-items-center u-gap-1 u-font-mono" title="Insert placeholder {${i.path}} into endpoint" style="padding: 3px 8px; font-size: 0.72rem; background: var(--color-bg-surface); border: 1px solid var(--color-border-strong); color: var(--color-accent); border-radius: var(--radius-xs); cursor: pointer;" @click=${()=>t==null?void 0:t(i.path)}>
                ${Z({name:"plus",size:12})}
                <span>Insert</span>
              </button>
            </div>
          </div>
        `})}
    </div>
  `}function $a(e){return!e||e.length===0?d`<div style="padding: var(--space-4); text-align: center; color: var(--color-text-muted); font-size: var(--font-size-sm);">No server execution logs recorded.</div>`:d`
    <div class="u-font-mono" style="padding: var(--space-3); font-size: 0.85rem; color: var(--color-console-text); background: var(--color-bg-base); min-height: 100%; line-height: 1.5; white-space: pre-wrap;">
      ${e.map(a=>d`<div>${a}</div>`)}
    </div>
  `}function Ea({endpoints:e={},activeEndpoints:a=[],onToggleEndpoint:s}){const o=Object.entries(e),t=a instanceof Set?a:new Set(Array.isArray(a)?a.map(l=>String(l||"").trim()).filter(Boolean):String(a||"").split(`
`).map(l=>l.trim()).filter(Boolean)),i=o.filter(([l,u])=>t.has(String(u||"").trim())).length;return d`
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
        ${o.length===0?d`
          <div class="u-text-xs u-text-muted u-text-center" style="padding: var(--space-4) 0;">
            No saved endpoints for this service.
          </div>
        `:w}

        ${o.map(([l,u])=>{const n=String(u||"").trim(),c=t.has(n);return d`
            <div
              class="u-flex u-flex-col u-gap-1 selectable-item ${c?"is-selected":""}"
              style="padding: var(--space-2);"
              @click=${()=>s==null?void 0:s(l,n)}
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
                title=${u}
              >
                ${u}
              </div>
            </div>
          `})}
      </div>
    </div>
  `}function ot(){const e=da(),a=t=>{let i=null;if(t.trim())try{JSON.parse(t)}catch{i="Invalid JSON syntax"}e.set({customContextText:t,customContextError:i})},s=()=>{var c;const t=e.get(),i=E.read(I.all),l=((c=i==null?void 0:i.data)==null?void 0:c.services)||{},u=Object.keys(l),n=l[t.selectedService];return!t.selectedService&&u.length>0&&setTimeout(()=>e.set({selectedService:u[0]}),0),d`
      <div class="u-flex u-flex-col u-gap-3" style="height: 100%; min-height: 520px;">
        <!-- Top Controls: Service, Record ID, Sample Endpoint, Mock Context, Actions -->
        ${pa({services:l,selectedService:t.selectedService,selectedRecordId:t.selectedRecordId,sampleEndpoint:t.sampleEndpoint,customContextText:t.customContextText,customContextError:t.customContextError,testName:t.testName,isLoading:t.isLoading,saveSuccess:t.saveSuccess,onServiceChange:r=>e.set({selectedService:r}),onRecordIdChange:r=>e.set({selectedRecordId:r}),onSampleEndpointChange:r=>e.set({sampleEndpoint:r}),onCustomContextChange:a,onTestNameChange:r=>e.set({testName:r}),onRunTest:e.runTest,onSaveToService:e.saveEndpoint})}

        <!-- Error Feedback Banner -->
        ${t.error?d`
          <div class="u-flex u-items-center u-justify-between u-text-xs" style="padding: var(--space-2) var(--space-3); background: color-mix(in srgb, var(--color-danger) 15%, transparent); border: 1px solid var(--color-danger); color: var(--color-danger); border-radius: var(--radius-sm);">
            <span>${t.error}</span>
            <button type="button" style="background: none; border: none; color: inherit; cursor: pointer;" @click=${()=>e.set({error:null})}>✕</button>
          </div>
        `:w}

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
                .value=${t.testEndpoint}
                @input=${r=>e.set({testEndpoint:r.target.value})}
              ></textarea>
            </div>

            <div style="flex: 1; min-height: 0;">
              ${xa({flattenedKeys:t.flattenedKeys,response:t.testResponse,rawContext:t.rawContextData,logs:t.logs,activeTab:t.inspectorTab,filterQuery:t.inspectorFilter,copiedPath:t.copiedPath,onTabChange:r=>e.set({inspectorTab:r}),onFilterChange:r=>e.set({inspectorFilter:r}),onCopyPath:e.copyPath,onInsertPlaceholder:e.insertPlaceholder})}
            </div>
          </div>

          <!-- Right Column: Saved Endpoints List -->
          <div style="flex: 1; max-width: 280px; min-height: 0;">
            ${Ea({endpoints:(n==null?void 0:n.enrichment_endpoints)||{},activeEndpoints:t.testEndpoint,onToggleEndpoint:e.toggleEndpoint})}
          </div>
        </div>
      </div>
    `};let o;return{view:s,mount:t=>{o=e.subscribe(t);const i=E.read(I.all);i!=null&&i.data||M.get("/api/v1/settings").then(l=>{E.setData(I.all,()=>l),e.set({})}).catch(console.error)},unmount:()=>{o&&o()}}}function Be(e,a){if(e===a)return!0;if(!e||!a||typeof e!="object"||typeof a!="object"||Array.isArray(e)!==Array.isArray(a))return!1;if(Array.isArray(e))return e.length!==a.length?!1:e.every((t,i)=>Be(t,a[i]));const s=Object.keys(e),o=Object.keys(a);return s.length!==o.length?!1:s.every(t=>Object.prototype.hasOwnProperty.call(a,t)&&Be(e[t],a[t]))}function wa(e){const a=ot();let s=null,o=[],t,i;function l(v,g,m){const p=o.findIndex(f=>f.key===v);Be(g,m)?p!==-1&&o.splice(p,1):p!==-1?o[p].newValue=m:o.push({key:v,oldValue:g,newValue:m})}function u(v){var m,p;if(!s||!v)return;const g=new Set([...Object.keys(s),...Object.keys(v),...o.map(f=>f.key.split(".")[0])]);for(const f of g)if(f==="services"){const b=new Set([...Object.keys(s.services||{}),...Object.keys(v.services||{}),...o.filter(y=>y.key.startsWith("services.")).map(y=>y.key.slice(9))]);for(const y of b)l(`services.${y}`,(m=s.services)==null?void 0:m[y],(p=v.services)==null?void 0:p[y])}else f==="notification_triggers"||f==="triggers"?l("notification_triggers",s.notification_triggers??s.triggers??[],v.notification_triggers??v.triggers??[]):l(f,s[f],v[f])}const n=de({activeTab:"services",saving:!1,isDirty:!1,isServiceModalOpen:!1,isStageModalOpen:!1,isMappingModalOpen:!1,isSampleApiModalOpen:!1,isNotificationModalOpen:!1,selectedMappingService:""}),c=n.set;n.set=v=>{c(g=>{var f;const m=typeof v=="function"?v(g):v,p=(f=E.read(I.all))==null?void 0:f.data;return s&&p&&u(p),{...m,isDirty:o.length>0}})};const r=v=>{o.length>0&&(v.preventDefault(),v.returnValue="")};return{mount(v){t=n.subscribe(()=>v()),i=E.subscribe(I.all,m=>{m!=null&&m.data&&(s?u(m.data):(s=JSON.parse(JSON.stringify(m.data)),o=[]),n.set(p=>({...p,isDirty:o.length>0}))),v()});const g=E.read(I.all);g!=null&&g.data&&!s&&(s=JSON.parse(JSON.stringify(g.data)),o=[]),Ys.getSettings(),a.mount(v),window.addEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(async()=>o.length===0?!0:await he({title:"Unsaved Changes",message:"You have unsaved changes. Are you sure you want to leave this page without saving?",confirmLabel:"Leave without saving",tone:"danger"}))},unmount(){t&&t(),i&&i(),a.unmount(),window.removeEventListener("beforeunload",r),e&&e.setBeforeNavigateHook(null),s&&o.length>0&&E.setData(I.all,()=>JSON.parse(JSON.stringify(s))),s=null,o=[]},view(){const v=n.get(),{activeTab:g,saving:m,isServiceModalOpen:p,isStageModalOpen:f,isMappingModalOpen:b,isSampleApiModalOpen:y,isNotificationModalOpen:S}=v,x=E.read(I.all),{data:h,status:C,error:N}=x;if(C==="loading"&&!h)return d`<p class="u-text-muted">Loading settings...</p>`;if(C==="error"&&!h)return d`<p class="u-text-danger">Error: ${N==null?void 0:N.message}</p>`;const _=o.length>0,O={retention_days:(h==null?void 0:h.retention_days)||30,global_poll_interval_seconds:(h==null?void 0:h.global_poll_interval_seconds)||300},A=(h==null?void 0:h.services)||{},L=(h==null?void 0:h.stages)||[],W=O.global_poll_interval_seconds,B=(P,Y,T)=>d`
        <button type="button" class="tab-btn ${g===P?"is-active":""}" @click=${()=>n.set(k=>({...k,activeTab:P}))}>
          ${Z({name:Y,size:16})}
          <span>${T}</span>
        </button>
      `;return d`
        <div class="u-flex u-flex-col u-gap-4">
          <div class="u-flex u-items-center u-justify-between u-mb-2">
            <div class="u-flex u-gap-2">
              ${B("services","database","Services")}
              ${B("sandbox","terminal","API Sandbox")}
              ${B("mappings","code","Field Mappings")}
              ${B("stages","activity","Stages & Predicates")}
              ${B("notifications","bell","Notification Triggers")}
              ${B("engine","settings","Engine & Retention")}
            </div>
            <div class="u-flex u-items-center u-gap-3">
              <div style="position: relative; display: inline-block;">
                ${$({label:"Save All Settings",variant:"save",size:"sm",loading:m,disabled:!_,onClick:async()=>{const P=E.read(I.all);if(!P||!P.data)return;const Y=JSON.parse(JSON.stringify(s||P.data));n.set(T=>({...T,saving:!0}));try{const T=await M.post("/api/v1/settings",P.data);E.setData(I.all,()=>T),s=JSON.parse(JSON.stringify(T)),o=[],n.set(k=>({...k,isDirty:!1,saving:!1})),alert("✓ Settings saved successfully, schema migrated, and scheduler refreshed.")}catch(T){E.setData(I.all,()=>Y),s=Y,o=[],n.set(k=>({...k,isDirty:!1,saving:!1})),alert("Failed to save settings: "+T.message+`
Rolled back to previous verified configuration.`)}}})}
                ${_?d`<div title="Unsaved modifications" style="position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: var(--color-danger); color: white; border-radius: 50%; font-weight: bold; font-size: 11px; cursor: help; pointer-events: none; z-index: 10;">!</div>`:w}
              </div>
            </div>
          </div>
          
          ${g==="services"?Ws(n,A,W):w}
          ${g==="sandbox"?a.view():w}
          ${g==="mappings"?aa(n,A):w}
          ${g==="stages"?Qs(n,L):w}
          ${g==="notifications"?ra(n,h):w}
          ${g==="engine"?la(n,O):w}
          
          <!-- Modals -->
          ${p?Js(n):w}
          ${f?sa(n):w}
          ${b?oa(n):w}
          ${y?na(n):w}
          ${S?ia(n):w}
        </div>
      `}}}const be=dt(Je),_a={overview:Rs(),pipeline:Ms(),tools:zs(),views:Fs(),incidents:qs(),sandbox:ot(),gitops:Ks(),settings:wa(be)};let Q=null;function $e(){var s,o,t,i;const{current:e}=be.store.get();Q&&Q.id!==e.id&&((o=(s=Q.instance).unmount)==null||o.call(s),Q=null),!Q&&e&&(Q={id:e.id,instance:_a[e.id]},(i=(t=Q.instance).mount)==null||i.call(t,$e));const a=Q?Q.instance.view():"";lt(ls({routerStore:be.store.get(),routes:Je,router:be,pageContent:a}),document.getElementById("app"))}be.store.subscribe($e);ke.store.subscribe($e);E.subscribe(xe.all,$e);tt.getOverview().catch(()=>{});$e();
