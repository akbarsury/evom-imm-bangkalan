var ea=Object.defineProperty,na=Object.defineProperties;var oa=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var ia=Object.prototype.hasOwnProperty,sa=Object.prototype.propertyIsEnumerable;var B=(t,n,a)=>n in t?ea(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,b=(t,n)=>{for(var a in n||(n={}))ia.call(n,a)&&B(t,a,n[a]);if(S)for(var a of S(n))sa.call(n,a)&&B(t,a,n[a]);return t},T=(t,n)=>na(t,oa(n));import{o as C,c as E,a as ra,i as da,g as ca,L as la,b as U,u as V,r as k,s as ma,d as ua,e as pa,f as G,h as X,j as u,k as P,w as F,l as Y,m as _a,n as ha,p as ga,q as fa,t as Z,M as v,v as p,x as R,y as H,z as j,A as va,I as L,B as Aa,C as N,D as ba,E as M,F as ka,G as ya,H as La,J as Pa,K as Ca}from"./vendor.441eeb9a.js";const Ea=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};Ea();var Ia="/evom-imm-bangkalan/file/footer-brand.8968f0c2.png";var q=(t,n)=>{const a=t.__vccOpts||t;for(const[c,e]of n)a[c]=e;return a};const wa={},Da={class:""},Ta=ra('<div class="navigation p-5 container" data-v-3f57abca><div class="row" data-v-3f57abca><div class="col-12 col-md-4 mb-5" data-v-3f57abca><img class="img-fluid pe-5" src="'+Ia+'" alt="" data-v-3f57abca></div><div class="col-12 col-md-4 mb-5" data-v-3f57abca><h3 data-v-3f57abca>Hubungi kami</h3><ul data-v-3f57abca><li data-v-3f57abca><a href="javascript:void()" data-v-3f57abca>Telang Indah VI, Kamal, Bangkalan - 69162</a></li><li data-v-3f57abca><a href="mailto:pcimmbangkalan@gmail.com" data-v-3f57abca> pcimmbangkalan@gmail.com </a></li><li data-v-3f57abca><a href="http://pcimmbangkalan.blogspot.com" data-v-3f57abca> pcimmbangkalan.blogspot.com </a></li><li data-v-3f57abca><a href="http://wa.me/6285608481194" data-v-3f57abca>0856-0848-1194 </a></li></ul></div><div class="col-12 col-md-4 mb-5" data-v-3f57abca><h3 data-v-3f57abca>Service</h3><ul data-v-3f57abca><li data-v-3f57abca><a href="#" data-v-3f57abca> Voting </a></li><li data-v-3f57abca><a href="#" data-v-3f57abca> Hasil Pemilihan </a></li><li data-v-3f57abca><a href="#" data-v-3f57abca> Admin </a></li><li data-v-3f57abca><a href="http://wa.me/6285608481194" data-v-3f57abca>0856-0848-1194</a></li></ul></div></div></div><div class="copyright container-fluid text-center" data-v-3f57abca> Designed by <a href="http://instagram.com/akbarr.sury" target="_blank" data-v-3f57abca>Akbar</a> | Managed by Bidang Medkom PC IMM Bangkalan </div>',2),Ra=[Ta];function xa(t,n){return C(),E("footer",Da,Ra)}var Oa=q(wa,[["render",xa],["__scopeId","data-v-3f57abca"]]);const Sa={apiKey:"AIzaSyBnQdw_6piF6b5F2s1ORYUjcmhXIuO3fzI",authDomain:"imm-bangkalan-101112.firebaseapp.com",projectId:"imm-bangkalan-101112",storageBucket:"imm-bangkalan-101112.appspot.com",messagingSenderId:"764517615389",appId:"1:764517615389:web:e479539763ed2f02d303f4"},$=da(Sa),I=ca($),m=la($),w=U(()=>{const{isAuthenticated:t,user:n}=V(I);let a=k({data:{secretKey:String},isAdmin:!1});return{admin:a,getAdminData:()=>a,tryToLogin:(r,A)=>{let y={secretKey:A.accessToken,providerData:A.providerData[0]};r?(a.data=y,a.isAdmin=r):(a.data=null,a.isAdmin=!1)},tryToLogout:()=>{ma(I).then(()=>{a.isAdmin=null,a.data=n,alert("Berhasil logout user")}).catch(()=>{alert("Gagal logout user")})}}}),Ba="modulepreload",z={},Fa="/evom-imm-bangkalan/",_=function(n,a){return!a||a.length===0?n():Promise.all(a.map(c=>{if(c=`${Fa}${c}`,c in z)return;z[c]=!0;const e=c.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":Ba,e||(r.as="script",r.crossOrigin=""),r.href=c,document.head.appendChild(r),e)return new Promise((A,y)=>{r.addEventListener("load",A),r.addEventListener("error",y)})})).then(()=>n())},K=()=>_(()=>import("./Landing.1da78597.js"),["file/Landing.1da78597.js","file/Landing.81d12058.css","file/vendor.441eeb9a.js"]),Ha=()=>_(()=>import("./Login.7410ee76.js"),["file/Login.7410ee76.js","file/vendor.441eeb9a.js"]),ja=()=>_(()=>import("./Admin.6e185dd6.js"),["file/Admin.6e185dd6.js","file/Admin.ab4ac3f6.css","file/vendor.441eeb9a.js"]),Na=()=>_(()=>import("./InputDataCandidate.4d2a9281.js"),["file/InputDataCandidate.4d2a9281.js","file/InputDataCandidate.bbf92145.css","file/vendor.441eeb9a.js"]),Ma=()=>_(()=>import("./Candidate.f3d1546a.js"),["file/Candidate.f3d1546a.js","file/vendor.441eeb9a.js"]),za=()=>_(()=>import("./Delegation.22468a94.js"),["file/Delegation.22468a94.js","file/vendor.441eeb9a.js"]),Ka=()=>_(()=>import("./ChairmanCandidate.7f577783.js"),["file/ChairmanCandidate.7f577783.js","file/vendor.441eeb9a.js"]),Qa=()=>_(()=>import("./FormaturCandidate.be5cbf38.js"),["file/FormaturCandidate.be5cbf38.js","file/vendor.441eeb9a.js"]),Ua=()=>_(()=>import("./ElectionToken.6e8be998.js"),["file/ElectionToken.6e8be998.js","file/vendor.441eeb9a.js"]),Q=()=>_(()=>import("./AccountSetting.16fc6410.js"),["file/AccountSetting.16fc6410.js","file/vendor.441eeb9a.js"]),Va=[{name:"landing",path:"/",component:K},{name:"vote",path:"/vote",component:K},{name:"login",path:"/login",meta:{auth:!0},component:Ha},{name:"admin",path:"/admin",redirect:{name:"adminCandidate"},meta:{protected:!0},component:ja,children:[{name:"adminInputCandidateData",path:"input-candidate-data",component:Na},{name:"adminCandidate",path:"candidate",component:Ma},{name:"adminDelegation",path:"delegation",component:za},{name:"adminChairmanCandidate",path:"chairman-candidate",component:Ka},{name:"adminFormaturCandidate",path:"formatur-candidate",component:Qa},{name:"adminElectionToken",path:"election-token",component:Ua},{name:"adminLiveCount",path:"live-count",component:Q},{name:"adminAccountSetting",path:"account-setting",component:Q}]}],f=ua({history:pa("/evom-imm-bangkalan/"),routes:Va});var Ga="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAYAAACG9x+sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgBvVfLcdwwDH35FODccjM7iFKB5QridKBUkC1hU4GdCjYdxK7Acge7FYSuwPItt4QYE7NPEPTZXSZvBkOQegQBAqSkN/j3OEvyPklI8jtLUdRJ/kzIeZIn02es6dkN+o5fm7kimxwMIxjOE3z8NLzmNZYhkv4Rw8U9nji/wksgjCY7MgWZUzvjlR2wAWyTfDHynOTBGGecm/nIizdZj0k+J7nEPsCKno+hcvrBI9bYp+QePlbwy0Twi55pcBsaWxG3ofFbGg8Ylu79hA8Hl1BrFoPTl93vHM52RP8AHzG3NgMXjg0ccwa4ZHiRR9IDfHQLOFqu9hyo3jJ5aQCycHQWZn2LMogYZkFaLU/eqMUBCNRBMaRZCM7zUyG2NQu1aSP6WRwEIJFuSPjG2ZH+LreBxiLKQTfjwrQ7S3xr+uJwQ/019hHzDle5rwexQ7kMCFryRzISaLx3jdsArCPPpPN4oAXssxLQG03sy/tDz0Kb5IqJ3ovskoTrLVJfz4AaHqT2BATyRaDl42b5kEMsiLmt0L9CI8rjLre6426WDw1AdzqgX4ulS4ht6joPHunQANho7YyXhLXZeqRjAxB8orHO8Lh/NqLPBS022jn+KQHoGXh0eJzuMKIvydqOuJ1HsNdowPAz95Ym6ydFmHFE5nzNurRtnntNnDvM4ybbj1OkGtN/ZLXh27+iqxG7PyZsbgw3YP6TXrHGEZ/TDFsycYTXJPmOfupF/4aXH6UieIX/g5DbDiO1fCz+AjCKvHg3KuGwAAAAAElFTkSuQmCC";const J=t=>(ga("data-v-91851502"),t=t(),fa(),t),Xa={class:"shadow-sm"},Ya={class:"container"},Za={class:"row"},qa=J(()=>u("div",{class:"col-auto brand"},[u("img",{src:Ga,alt:""})],-1)),$a={class:"col navigation"},Ja=J(()=>u("button",{class:"btn navigation-toggle"},[u("i",{class:"fa-solid fa-bars"})],-1)),Wa=Z("voting"),at=Z("admin"),tt=G({setup(t){const n=w().getAdminData(),a=()=>{w().tryToLogout(),f.push({name:"login"})};return(c,e)=>{const o=X("router-link");return C(),E("header",Xa,[u("div",Ya,[u("div",Za,[qa,u("div",$a,[Ja,u("ul",null,[u("li",null,[P(o,{to:{name:"landing"}},{default:F(()=>[Wa]),_:1})]),u("li",null,[P(o,{class:"btn btn-main btn-sm me-2",to:{name:"admin"}},{default:F(()=>[at]),_:1}),Y(n).isAdmin?(C(),E("button",{key:0,onClick:e[0]||(e[0]=_a(r=>a(),["prevent"])),class:"btn btn-danger btn-sm"}," Logout ")):ha("",!0)])])])])])])}}});var et=q(tt,[["__scopeId","data-v-91851502"]]);const g={evom:v(p(m,"evom")),komisariat:v(p(m,"komisariat")),calonKetuaUmum:v(p(m,"calon ketua umum")),calonFormatur:v(p(m,"calon formatur")),candidate:v(p(m,"candidate")),addCandidate:t=>R(p(m,"candidate"),t),candidatePosition:v(p(m,"candidate-position")),addCandidatePosition:t=>R(p(m,"candidate-position"),t),deleteCandidatePosition:t=>H(j(m,"candidate-position",t)),Delegation:v(p(m,"delegation"),va("delegation","asc")),addDelegation:t=>R(p(m,"delegation"),t),deleteDelegation:t=>H(j(m,"delegation",t))},x=U(()=>{const t=()=>{const i=k({});return L(g.candidate,d=>{const l=[];d.forEach(s=>{l.push({key:s.id,data:s.data()})}),l.reduce((s,h)=>(i[h.key]=h.data,b({},s)),{})}),i},n=i=>{const d=Aa(),l=N(d,"candidate/"+i.name+".png");ba(l,i.photo,"data_url",{contentType:"image/png"}).then(s=>{(async()=>await ka(N(d,"candidate/"+i.name+".png")))().then(O=>{i.photo=O,g.addCandidate(i).then(()=>{alert(i.name+" berhasil ditambahkan")}).catch(st=>{alert(i.name+" gagal ditambahkan")})})})},a=async()=>{const i=await M(g.candidatePosition).then(s=>s),d=[];return i.forEach(s=>{d.push({key:s.id,data:s.data()})}),d.reduce((s,h)=>T(b({},s),{[h.key]:h.data}),{})},c=async()=>{const i=await M(g.Delegation).then(s=>s),d=[];return i.forEach(s=>{d.push({key:s.id,data:s.data()})}),d.reduce((s,h)=>T(b({},s),{[h.key]:h.data}),{})},e=i=>{g.addDelegation(i).then(()=>{alert("Delegation : "+i.delegation+" berhasil ditambahkan")}).catch(d=>{alert("Delegation : "+i.delegation+" gagal ditambahkan")})};let o=k({});const r=()=>{L(g.calonKetuaUmum,i=>{const d=[];i.forEach(l=>{d.push({key:l.id,data:l.data()})}),d.reduce((l,s)=>(o[s.key]=s.data,b({},l)),{})})};let A=k({});const y=()=>{L(g.calonFormatur,i=>{const d=[];i.forEach(l=>{d.push({key:l.id,data:l.data()})}),d.reduce((l,s)=>(o[s.key]=s.data,b({},l)),{})})};let D=k({data:{}});const aa=()=>{L(g.komisariat,i=>{const d=[];i.forEach(l=>{d.push(l)}),D.data=d})};let ta=k({data:{}});return{list_caketum:o,updateCaketumList:r,list_formatur:A,updateFormaturList:y,list_komisariat:D,updateKomisariatList:aa,list_token:ta,updateTokenList:()=>{L(g.komisariat,i=>{const d=[];i.forEach(l=>{d.push(l)}),D.data=d})},listCandidate:t,addCandidate:n,listCandidatePosition:a,listDelegation:c,addDelegation:e}});const nt={class:"container-fluid body p-0 mt-5"},ot=G({setup(t){ya(()=>{x().updateCaketumList(),x().updateFormaturList(),x().updateKomisariatList()});const n=w().admin;return f.beforeResolve((a,c,e)=>{a.matched.some(o=>{o.meta.protected})&&n.isAdmin&&f.push({name:"login"}),e()}),La(I,a=>{V(I),a!=null&&w().tryToLogin(!0,a),f.afterEach((c,e,o)=>{c.matched.some(r=>{r.meta.auth})&&n.isAdmin&&f.push({name:"admin"})}),f.beforeEach((c,e,o)=>{c.matched.some(r=>r.meta.protected)&&(n.isAdmin||f.push({name:"login"})),o()})}),(a,c)=>{const e=et,o=X("router-view"),r=Oa;return C(),E("div",null,[P(e),u("div",nt,[P(o)]),P(r,{class:Pa([Y(n).isAdmin?"d-none":"d-block"])},null,8,["class"])])}}}),W=Ca(ot);W.use(f);f.isReady().then(()=>W.mount("body"));export{q as _,w as a,g as d,x as g};