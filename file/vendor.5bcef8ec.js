function Mc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ly=Mc(cy);function Lf(t){return!!t||t===""}function Uc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=De(r)?fy(r):Uc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(De(t))return t;if(Se(t))return t}}const uy=/;(?![^(]*\))/g,hy=/:(.+)/;function fy(t){const e={};return t.split(uy).forEach(n=>{if(n){const r=n.split(hy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fc(t){let e="";if(De(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Fc(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=po(t[r],e[r]);return n}function po(t,e){if(t===e)return!0;let n=Su(t),r=Su(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=q(t),r=q(e),n||r)return n&&r?dy(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!po(t[o],e[o]))return!1}}return String(t)===String(e)}function py(t,e){return t.findIndex(n=>po(n,e))}const rR=t=>De(t)?t:t==null?"":q(t)||Se(t)&&(t.toString===Ff||!Y(t.toString))?JSON.stringify(t,Mf,2):String(t),Mf=(t,e)=>e&&e.__v_isRef?Mf(t,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:mo(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!q(e)&&!Vf(e)?String(e):e,de={},dr=[],Et=()=>{},gy=()=>!1,my=/^on[^a-z]/,go=t=>my.test(t),Vc=t=>t.startsWith("onUpdate:"),ze=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,re=(t,e)=>yy.call(t,e),q=Array.isArray,pr=t=>yo(t)==="[object Map]",mo=t=>yo(t)==="[object Set]",Su=t=>t instanceof Date,Y=t=>typeof t=="function",De=t=>typeof t=="string",Bc=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Uf=t=>Se(t)&&Y(t.then)&&Y(t.catch),Ff=Object.prototype.toString,yo=t=>Ff.call(t),vy=t=>yo(t).slice(8,-1),Vf=t=>yo(t)==="[object Object]",jc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_y=/-(\w)/g,Mt=vo(t=>t.replace(_y,(e,n)=>n?n.toUpperCase():"")),wy=/\B([A-Z])/g,Lr=vo(t=>t.replace(wy,"-$1").toLowerCase()),_o=vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),fa=vo(t=>t?`on${_o(t)}`:""),vs=(t,e)=>!Object.is(t,e),_i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Oi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Au;const Ey=()=>Au||(Au=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $t;class Ty{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$t&&(this.parent=$t,this.index=($t.scopes||($t.scopes=[])).push(this)-1)}run(e){if(this.active)try{return $t=this,e()}finally{$t=this.parent}}on(){$t=this}off(){$t=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Iy(t,e=$t){e&&e.active&&e.effects.push(t)}const qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$f=t=>(t.w&gn)>0,Bf=t=>(t.n&gn)>0,by=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},Sy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];$f(s)&&!Bf(s)?s.delete(t):e[n++]=s,s.w&=~gn,s.n&=~gn}e.length=n}},Fa=new WeakMap;let es=0,gn=1;const Va=30;let Ot;const Dn=Symbol(""),$a=Symbol("");class Hc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iy(this,r)}run(){if(!this.active)return this.fn();let e=Ot,n=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,un=!0,gn=1<<++es,es<=Va?by(this):Cu(this),this.fn()}finally{es<=Va&&Sy(this),gn=1<<--es,Ot=this.parent,un=n,this.parent=void 0}}stop(){this.active&&(Cu(this),this.onStop&&this.onStop(),this.active=!1)}}function Cu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let un=!0;const jf=[];function Mr(){jf.push(un),un=!1}function Ur(){const t=jf.pop();un=t===void 0?!0:t}function dt(t,e,n){if(un&&Ot){let r=Fa.get(t);r||Fa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qc()),qf(s)}}function qf(t,e){let n=!1;es<=Va?Bf(t)||(t.n|=gn,n=!$f(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function zt(t,e,n,r,s,i){const o=Fa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(Dn)),pr(t)&&a.push(o.get($a)));break;case"delete":q(t)||(a.push(o.get(Dn)),pr(t)&&a.push(o.get($a)));break;case"set":pr(t)&&a.push(o.get(Dn));break}if(a.length===1)a[0]&&Ba(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ba(qc(c))}}function Ba(t,e){for(const n of q(t)?t:[...t])(n!==Ot||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ay=Mc("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Bc)),Cy=Kc(),Ry=Kc(!1,!0),ky=Kc(!0),Ru=Ny();function Ny(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mr();const r=oe(this)[e].apply(this,n);return Ur(),r}}),t}function Kc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Wy:Jf:e?Gf:zf).get(r))return r;const o=q(r);if(!t&&o&&re(Ru,s))return Reflect.get(Ru,s,i);const a=Reflect.get(r,s,i);return(Bc(s)?Hf.has(s):Ay(s))||(t||dt(r,"get",s),e)?a:Ue(a)?!o||!jc(s)?a.value:a:Se(a)?t?Qf(a):Fr(a):a}}const Oy=Kf(),Py=Kf(!0);function Kf(t=!1){return function(n,r,s,i){let o=n[r];if(_s(o)&&Ue(o)&&!Ue(s))return!1;if(!t&&!_s(s)&&(Xf(s)||(s=oe(s),o=oe(o)),!q(n)&&Ue(o)&&!Ue(s)))return o.value=s,!0;const a=q(n)&&jc(r)?Number(r)<n.length:re(n,r),c=Reflect.set(n,r,s,i);return n===oe(i)&&(a?vs(s,o)&&zt(n,"set",r,s):zt(n,"add",r,s)),c}}function Dy(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&zt(t,"delete",e,void 0),r}function xy(t,e){const n=Reflect.has(t,e);return(!Bc(e)||!Hf.has(e))&&dt(t,"has",e),n}function Ly(t){return dt(t,"iterate",q(t)?"length":Dn),Reflect.ownKeys(t)}const Wf={get:Cy,set:Oy,deleteProperty:Dy,has:xy,ownKeys:Ly},My={get:ky,set(t,e){return!0},deleteProperty(t,e){return!0}},Uy=ze({},Wf,{get:Ry,set:Py}),Wc=t=>t,wo=t=>Reflect.getPrototypeOf(t);function oi(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);e!==i&&!n&&dt(s,"get",e),!n&&dt(s,"get",i);const{has:o}=wo(s),a=r?Wc:n?Jc:ws;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ai(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return t!==s&&!e&&dt(r,"has",t),!e&&dt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function ci(t,e=!1){return t=t.__v_raw,!e&&dt(oe(t),"iterate",Dn),Reflect.get(t,"size",t)}function ku(t){t=oe(t);const e=oe(this);return wo(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Nu(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=wo(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?vs(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Ou(t){const e=oe(this),{has:n,get:r}=wo(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&zt(e,"delete",t,void 0),i}function Pu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function li(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),c=e?Wc:t?Jc:ws;return!t&&dt(a,"iterate",Dn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ui(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=pr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Wc:e?Jc:ws;return!e&&dt(i,"iterate",c?$a:Dn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function Fy(){const t={get(i){return oi(this,i)},get size(){return ci(this)},has:ai,add:ku,set:Nu,delete:Ou,clear:Pu,forEach:li(!1,!1)},e={get(i){return oi(this,i,!1,!0)},get size(){return ci(this)},has:ai,add:ku,set:Nu,delete:Ou,clear:Pu,forEach:li(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:li(!0,!1)},r={get(i){return oi(this,i,!0,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ui(i,!1,!1),n[i]=ui(i,!0,!1),e[i]=ui(i,!1,!0),r[i]=ui(i,!0,!0)}),[t,n,e,r]}const[Vy,$y,By,jy]=Fy();function zc(t,e){const n=e?t?jy:By:t?$y:Vy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const qy={get:zc(!1,!1)},Hy={get:zc(!1,!0)},Ky={get:zc(!0,!1)},zf=new WeakMap,Gf=new WeakMap,Jf=new WeakMap,Wy=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(vy(t))}function Fr(t){return _s(t)?t:Gc(t,!1,Wf,qy,zf)}function Jy(t){return Gc(t,!1,Uy,Hy,Gf)}function Qf(t){return Gc(t,!0,My,Ky,Jf)}function Gc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gr(t){return _s(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function _s(t){return!!(t&&t.__v_isReadonly)}function Xf(t){return!!(t&&t.__v_isShallow)}function Yf(t){return gr(t)||_s(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Zf(t){return Oi(t,"__v_skip",!0),t}const ws=t=>Se(t)?Fr(t):t,Jc=t=>Se(t)?Qf(t):t;function ed(t){un&&Ot&&(t=oe(t),qf(t.dep||(t.dep=qc())))}function td(t,e){t=oe(t),t.dep&&Ba(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Qy(t){return nd(t,!1)}function Xy(t){return nd(t,!0)}function nd(t,e){return Ue(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:ws(e)}get value(){return ed(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),vs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ws(e),td(this))}}function os(t){return Ue(t)?t.value:t}const Zy={get:(t,e,n)=>os(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rd(t){return gr(t)?t:new Proxy(t,Zy)}class ev{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,td(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return ed(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tv(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=Et):(r=t.get,s=t.set),new ev(r,s,i||!s,n)}Promise.resolve();function hn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Eo(i,e,n)}return s}function _t(t,e,n,r){if(Y(t)){const i=hn(t,e,n,r);return i&&Uf(i)&&i.catch(o=>{Eo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(_t(t[i],e,n,r));return s}function Eo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){hn(c,null,10,[t,o,a]);return}}nv(t,n,s,r)}function nv(t,e,n,r=!0){console.error(t)}let Di=!1,ja=!1;const lt=[];let Bt=0;const as=[];let ts=null,ar=0;const cs=[];let tn=null,cr=0;const sd=Promise.resolve();let Qc=null,qa=null;function id(t){const e=Qc||sd;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=Bt+1,n=lt.length;for(;e<n;){const r=e+n>>>1;Es(lt[r])<t?e=r+1:n=r}return e}function od(t){(!lt.length||!lt.includes(t,Di&&t.allowRecurse?Bt+1:Bt))&&t!==qa&&(t.id==null?lt.push(t):lt.splice(rv(t.id),0,t),ad())}function ad(){!Di&&!ja&&(ja=!0,Qc=sd.then(ud))}function sv(t){const e=lt.indexOf(t);e>Bt&&lt.splice(e,1)}function cd(t,e,n,r){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ad()}function iv(t){cd(t,ts,as,ar)}function ov(t){cd(t,tn,cs,cr)}function Xc(t,e=null){if(as.length){for(qa=e,ts=[...new Set(as)],as.length=0,ar=0;ar<ts.length;ar++)ts[ar]();ts=null,ar=0,qa=null,Xc(t,e)}}function ld(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,r)=>Es(n)-Es(r)),cr=0;cr<tn.length;cr++)tn[cr]();tn=null,cr=0}}const Es=t=>t.id==null?1/0:t.id;function ud(t){ja=!1,Di=!0,Xc(t),lt.sort((n,r)=>Es(n)-Es(r));const e=Et;try{for(Bt=0;Bt<lt.length;Bt++){const n=lt[Bt];n&&n.active!==!1&&hn(n,null,14)}}finally{Bt=0,lt.length=0,ld(),Di=!1,Qc=null,(lt.length||as.length||cs.length)&&ud(t)}}function av(t,e,...n){const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||de;f?s=n.map(p=>p.trim()):h&&(s=n.map(Pi))}let a,c=r[a=fa(e)]||r[a=fa(Mt(e))];!c&&i&&(c=r[a=fa(Lr(e))]),c&&_t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,s)}}function hd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=hd(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):ze(o,i),r.set(t,o),o)}function Yc(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Lr(e))||re(t,e))}let vt=null,To=null;function xi(t){const e=vt;return vt=t,To=t&&t.type.__scopeId||null,e}function sR(t){To=t}function iR(){To=null}function cv(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qu(-1);const i=xi(e),o=t(...s);return xi(i),r._d&&qu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function da(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:b}=t;let _,C;const D=xi(t);try{if(n.shapeFlag&4){const M=s||r;_=kt(u.call(M,M,h,i,p,f,m)),C=c}else{const M=e;_=kt(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),C=e.props?c:lv(c)}}catch(M){ls.length=0,Eo(M,t,1),_=st(Ut)}let V=_;if(C&&b!==!1){const M=Object.keys(C),{shapeFlag:ne}=V;M.length&&ne&7&&(o&&M.some(Vc)&&(C=uv(C,o)),V=wr(V,C))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),_=V,xi(D),_}const lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},uv=(t,e)=>{const n={};for(const r in t)(!Vc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Du(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Yc(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Du(r,o,l):!0:!!o;return!1}function Du(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yc(n,i))return!0}return!1}function fv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dv=t=>t.__isSuspense;function pv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):ov(t)}function wi(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=Pe||vt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r.proxy):e}}const xu={};function mr(t,e,n){return fd(t,e,n)}function fd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Pe;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=Xf(t)):gr(t)?(c=()=>t,r=!0):q(t)?(u=!0,l=t.some(gr),c=()=>t.map(C=>{if(Ue(C))return C.value;if(gr(C))return Nn(C);if(Y(C))return hn(C,a,2)})):Y(t)?e?c=()=>hn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:c=Et,e&&r){const C=c;c=()=>Nn(C())}let h,f=C=>{h=_.onStop=()=>{hn(C,a,4)}};if(Ts)return f=Et,e?n&&_t(e,a,3,[c(),u?[]:void 0,f]):c(),Et;let p=u?[]:xu;const m=()=>{if(!!_.active)if(e){const C=_.run();(r||l||(u?C.some((D,V)=>vs(D,p[V])):vs(C,p)))&&(h&&h(),_t(e,a,3,[C,p===xu?void 0:p,f]),p=C)}else _.run()};m.allowRecurse=!!e;let b;s==="sync"?b=m:s==="post"?b=()=>tt(m,a&&a.suspense):b=()=>{!a||a.isMounted?iv(m):m()};const _=new Hc(c,b);return e?n?m():p=_.run():s==="post"?tt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&$c(a.scope.effects,_)}}function gv(t,e,n){const r=this.proxy,s=De(t)?t.includes(".")?dd(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Pe;Er(this);const a=fd(s,i.bind(r),n);return o?Er(o):Ln(),a}function dd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Nn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(mo(t)||pr(t))t.forEach(n=>{Nn(n,e)});else if(Vf(t))for(const n in t)Nn(t[n],e);return t}function mv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vd(()=>{t.isMounted=!0}),_d(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],yv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=s_(),r=mv();let s;return()=>{const i=e.default&&gd(e.default(),!0);if(!i||!i.length)return;const o=oe(t),{mode:a}=o,c=i[0];if(r.isLeaving)return pa(c);const l=Lu(c);if(!l)return pa(c);const u=Ha(l,o,r,n);Ka(l,u);const h=n.subTree,f=h&&Lu(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const b=m();s===void 0?s=b:b!==s&&(s=b,p=!0)}if(f&&f.type!==Ut&&(!Cn(l,f)||p)){const b=Ha(f,o,r,n);if(Ka(f,b),a==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},pa(c);a==="in-out"&&l.type!==Ut&&(b.delayLeave=(_,C,D)=>{const V=pd(r,f);V[String(f.key)]=f,_._leaveCb=()=>{C(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return c}}},vv=yv;function pd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ha(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:b,onAppear:_,onAfterAppear:C,onAppearCancelled:D}=e,V=String(t.key),M=pd(n,t),ne=(Q,ve)=>{Q&&_t(Q,r,9,ve)},ce={mode:i,persisted:o,beforeEnter(Q){let ve=a;if(!n.isMounted)if(s)ve=b||a;else return;Q._leaveCb&&Q._leaveCb(!0);const pe=M[V];pe&&Cn(t,pe)&&pe.el._leaveCb&&pe.el._leaveCb(),ne(ve,[Q])},enter(Q){let ve=c,pe=l,qe=u;if(!n.isMounted)if(s)ve=_||c,pe=C||l,qe=D||u;else return;let He=!1;const Je=Q._enterCb=Xt=>{He||(He=!0,Xt?ne(qe,[Q]):ne(pe,[Q]),ce.delayedLeave&&ce.delayedLeave(),Q._enterCb=void 0)};ve?(ve(Q,Je),ve.length<=1&&Je()):Je()},leave(Q,ve){const pe=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return ve();ne(h,[Q]);let qe=!1;const He=Q._leaveCb=Je=>{qe||(qe=!0,ve(),Je?ne(m,[Q]):ne(p,[Q]),Q._leaveCb=void 0,M[pe]===t&&delete M[pe])};M[pe]=t,f?(f(Q,He),f.length<=1&&He()):He()},clone(Q){return Ha(Q,e,n,r)}};return ce}function pa(t){if(Io(t))return t=wr(t),t.children=null,t}function Lu(t){return Io(t)?t.children?t.children[0]:void 0:t}function Ka(t,e){t.shapeFlag&6&&t.component?Ka(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gd(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Rt?(i.patchFlag&128&&r++,n=n.concat(gd(i.children,e))):(e||i.type!==Ut)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function md(t){return Y(t)?{setup:t,name:t.name}:t}const Wa=t=>!!t.type.__asyncLoader,Io=t=>t.type.__isKeepAlive;function _v(t,e){yd(t,"a",e)}function wv(t,e){yd(t,"da",e)}function yd(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Io(s.parent.vnode)&&Ev(r,e,n,s),s=s.parent}}function Ev(t,e,n,r){const s=bo(e,t,r,!0);wd(()=>{$c(r[e],s)},n)}function bo(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mr(),Er(n);const a=_t(e,n,t,o);return Ln(),Ur(),a});return r?s.unshift(i):s.push(i),i}}const Qt=t=>(e,n=Pe)=>(!Ts||t==="sp")&&bo(t,e,n),Tv=Qt("bm"),vd=Qt("m"),Iv=Qt("bu"),bv=Qt("u"),_d=Qt("bum"),wd=Qt("um"),Sv=Qt("sp"),Av=Qt("rtg"),Cv=Qt("rtc");function Rv(t,e=Pe){bo("ec",t,e)}let za=!0;function kv(t){const e=Td(t),n=t.proxy,r=t.ctx;za=!1,e.beforeCreate&&Mu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:b,deactivated:_,beforeDestroy:C,beforeUnmount:D,destroyed:V,unmounted:M,render:ne,renderTracked:ce,renderTriggered:Q,errorCaptured:ve,serverPrefetch:pe,expose:qe,inheritAttrs:He,components:Je,directives:Xt,filters:er}=e;if(l&&Nv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const le=o[ge];Y(le)&&(r[ge]=le.bind(n))}if(s){const ge=s.call(n,n);Se(ge)&&(t.data=Fr(ge))}if(za=!0,i)for(const ge in i){const le=i[ge],gt=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):Et,nr=!Y(le)&&Y(le.set)?le.set.bind(n):Et,Vt=Nt({get:gt,set:nr});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:St=>Vt.value=St})}if(a)for(const ge in a)Ed(a[ge],r,n,ge);if(c){const ge=Y(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(le=>{wi(le,ge[le])})}u&&Mu(u,t,"c");function Ne(ge,le){q(le)?le.forEach(gt=>ge(gt.bind(n))):le&&ge(le.bind(n))}if(Ne(Tv,h),Ne(vd,f),Ne(Iv,p),Ne(bv,m),Ne(_v,b),Ne(wv,_),Ne(Rv,ve),Ne(Cv,ce),Ne(Av,Q),Ne(_d,D),Ne(wd,M),Ne(Sv,pe),q(qe))if(qe.length){const ge=t.exposed||(t.exposed={});qe.forEach(le=>{Object.defineProperty(ge,le,{get:()=>n[le],set:gt=>n[le]=gt})})}else t.exposed||(t.exposed={});ne&&t.render===Et&&(t.render=ne),He!=null&&(t.inheritAttrs=He),Je&&(t.components=Je),Xt&&(t.directives=Xt)}function Nv(t,e,n=Et,r=!1){q(t)&&(t=Ga(t));for(const s in t){const i=t[s];let o;Se(i)?"default"in i?o=Tt(i.from||s,i.default,!0):o=Tt(i.from||s):o=Tt(i),Ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Mu(t,e,n){_t(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ed(t,e,n,r){const s=r.includes(".")?dd(n,r):()=>n[r];if(De(t)){const i=e[t];Y(i)&&mr(s,i)}else if(Y(t))mr(s,t.bind(n));else if(Se(t))if(q(t))t.forEach(i=>Ed(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&mr(s,i,t)}}function Td(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Li(c,l,o,!0)),Li(c,e,o)),i.set(e,c),c}function Li(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Li(t,i,n,!0),s&&s.forEach(o=>Li(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ov[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ov={data:Uu,props:Sn,emits:Sn,methods:Sn,computed:Sn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Sn,directives:Sn,watch:Dv,provide:Uu,inject:Pv};function Uu(t,e){return e?t?function(){return ze(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return Sn(Ga(t),Ga(e))}function Ga(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ze(ze(Object.create(null),t),e):e}function Dv(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=Xe(t[r],e[r]);return n}function xv(t,e,n,r=!1){const s={},i={};Oi(i,So,1),t.propsDefaults=Object.create(null),Id(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const p=e[f];if(c)if(re(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=Mt(f);s[m]=Ja(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Id(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=Lr(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ja(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],l=!0)}l&&zt(t,"set","$attrs")}function Id(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vi(c))continue;const l=e[c];let u;s&&re(s,u=Mt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=oe(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ja(s,c,h,l[h],t,!re(l,h))}}return o}function Ja(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Er(s),r=l[n]=c.call(null,e),Ln())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}function bd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[f,p]=bd(h,e,!0);ze(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,dr),dr;if(q(i))for(let u=0;u<i.length;u++){const h=Mt(i[u]);Fu(h)&&(o[h]=de)}else if(i)for(const u in i){const h=Mt(u);if(Fu(h)){const f=i[u],p=o[h]=q(f)||Y(f)?{type:f}:f;if(p){const m=Bu(Boolean,p.type),b=Bu(String,p.type);p[0]=m>-1,p[1]=b<0||m<b,(m>-1||re(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Fu(t){return t[0]!=="$"}function Vu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function $u(t,e){return Vu(t)===Vu(e)}function Bu(t,e){return q(e)?e.findIndex(n=>$u(n,t)):Y(e)&&$u(e,t)?0:-1}const Sd=t=>t[0]==="_"||t==="$stable",Zc=t=>q(t)?t.map(kt):[kt(t)],Mv=(t,e,n)=>{const r=cv((...s)=>Zc(e(...s)),n);return r._c=!1,r},Ad=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sd(s))continue;const i=t[s];if(Y(i))e[s]=Mv(s,i,r);else if(i!=null){const o=Zc(i);e[s]=()=>o}}},Cd=(t,e)=>{const n=Zc(e);t.slots.default=()=>n},Uv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Oi(e,"_",n)):Ad(e,t.slots={})}else t.slots={},e&&Cd(t,e);Oi(t.slots,So,1)},Fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ad(e,s)),o=e}else e&&(Cd(t,e),o={default:1});if(i)for(const a in s)!Sd(a)&&!(a in o)&&delete s[a]};function oR(t,e){const n=vt;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Tn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mr(),_t(c,n,8,[t.el,a,t,e]),Ur())}}function Rd(){return{app:null,config:{isNativeTag:gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function $v(t,e){return function(r,s=null){s!=null&&!Se(s)&&(s=null);const i=Rd(),o=new Set;let a=!1;const c=i.app={_uid:Vv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:h_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=st(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,nl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Qa(t,e,n,r,s=!1){if(q(t)){t.forEach((f,p)=>Qa(f,e&&(q(e)?e[p]:e),n,r,s));return}if(Wa(r)&&!s)return;const i=r.shapeFlag&4?nl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,re(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),Y(c))hn(c,a,12,[o,u]);else{const f=De(c),p=Ue(c);if(f||p){const m=()=>{if(t.f){const b=f?u[c]:c.value;s?q(b)&&$c(b,i):q(b)?b.includes(i)||b.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,re(h,c)&&(h[c]=o)):Ue(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,tt(m,n)):m()}}}const tt=pv;function Bv(t){return jv(t)}function jv(t,e){const n=Ey();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Et,cloneNode:m,insertStaticContent:b}=t,_=(d,g,y,E=null,w=null,A=null,N=!1,S=null,R=!!g.dynamicChildren)=>{if(d===g)return;d&&!Cn(d,g)&&(E=U(d),mt(d,w,A,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:T,ref:$,shapeFlag:x}=g;switch(T){case el:C(d,g,y,E);break;case Ut:D(d,g,y,E);break;case Ei:d==null&&V(g,y,E,N);break;case Rt:Xt(d,g,y,E,w,A,N,S,R);break;default:x&1?ce(d,g,y,E,w,A,N,S,R):x&6?er(d,g,y,E,w,A,N,S,R):(x&64||x&128)&&T.process(d,g,y,E,w,A,N,S,R,me)}$!=null&&w&&Qa($,d&&d.ref,A,g||d,!g)},C=(d,g,y,E)=>{if(d==null)r(g.el=a(g.children),y,E);else{const w=g.el=d.el;g.children!==d.children&&l(w,g.children)}},D=(d,g,y,E)=>{d==null?r(g.el=c(g.children||""),y,E):g.el=d.el},V=(d,g,y,E)=>{[d.el,d.anchor]=b(d.children,g,y,E,d.el,d.anchor)},M=({el:d,anchor:g},y,E)=>{let w;for(;d&&d!==g;)w=f(d),r(d,y,E),d=w;r(g,y,E)},ne=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),s(d),d=y;s(g)},ce=(d,g,y,E,w,A,N,S,R)=>{N=N||g.type==="svg",d==null?Q(g,y,E,w,A,N,S,R):qe(d,g,w,A,N,S,R)},Q=(d,g,y,E,w,A,N,S)=>{let R,T;const{type:$,props:x,shapeFlag:B,transition:z,patchFlag:te,dirs:Ee}=d;if(d.el&&m!==void 0&&te===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,A,x&&x.is,x),B&8?u(R,d.children):B&16&&pe(d.children,R,null,E,w,A&&$!=="foreignObject",N,S),Ee&&Tn(d,null,E,"created"),x){for(const _e in x)_e!=="value"&&!vi(_e)&&i(R,_e,null,x[_e],A,d.children,E,w,k);"value"in x&&i(R,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Ct(T,E,d)}ve(R,d,d.scopeId,N,E)}Ee&&Tn(d,null,E,"beforeMount");const he=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;he&&z.beforeEnter(R),r(R,g,y),((T=x&&x.onVnodeMounted)||he||Ee)&&tt(()=>{T&&Ct(T,E,d),he&&z.enter(R),Ee&&Tn(d,null,E,"mounted")},w)},ve=(d,g,y,E,w)=>{if(y&&p(d,y),E)for(let A=0;A<E.length;A++)p(d,E[A]);if(w){let A=w.subTree;if(g===A){const N=w.vnode;ve(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},pe=(d,g,y,E,w,A,N,S,R=0)=>{for(let T=R;T<d.length;T++){const $=d[T]=S?nn(d[T]):kt(d[T]);_(null,$,g,y,E,w,A,N,S)}},qe=(d,g,y,E,w,A,N)=>{const S=g.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:$}=g;R|=d.patchFlag&16;const x=d.props||de,B=g.props||de;let z;y&&In(y,!1),(z=B.onVnodeBeforeUpdate)&&Ct(z,y,g,d),$&&Tn(g,d,y,"beforeUpdate"),y&&In(y,!0);const te=w&&g.type!=="foreignObject";if(T?He(d.dynamicChildren,T,S,y,E,te,A):N||gt(d,g,S,null,y,E,te,A,!1),R>0){if(R&16)Je(S,g,x,B,y,E,w);else if(R&2&&x.class!==B.class&&i(S,"class",null,B.class,w),R&4&&i(S,"style",x.style,B.style,w),R&8){const Ee=g.dynamicProps;for(let he=0;he<Ee.length;he++){const _e=Ee[he],wt=x[_e],rr=B[_e];(rr!==wt||_e==="value")&&i(S,_e,wt,rr,w,d.children,y,E,k)}}R&1&&d.children!==g.children&&u(S,g.children)}else!N&&T==null&&Je(S,g,x,B,y,E,w);((z=B.onVnodeUpdated)||$)&&tt(()=>{z&&Ct(z,y,g,d),$&&Tn(g,d,y,"updated")},E)},He=(d,g,y,E,w,A,N)=>{for(let S=0;S<g.length;S++){const R=d[S],T=g[S],$=R.el&&(R.type===Rt||!Cn(R,T)||R.shapeFlag&70)?h(R.el):y;_(R,T,$,null,E,w,A,N,!0)}},Je=(d,g,y,E,w,A,N)=>{if(y!==E){for(const S in E){if(vi(S))continue;const R=E[S],T=y[S];R!==T&&S!=="value"&&i(d,S,T,R,N,g.children,w,A,k)}if(y!==de)for(const S in y)!vi(S)&&!(S in E)&&i(d,S,y[S],null,N,g.children,w,A,k);"value"in E&&i(d,"value",y.value,E.value)}},Xt=(d,g,y,E,w,A,N,S,R)=>{const T=g.el=d?d.el:a(""),$=g.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:z}=g;z&&(S=S?S.concat(z):z),d==null?(r(T,y,E),r($,y,E),pe(g.children,y,$,w,A,N,S,R)):x>0&&x&64&&B&&d.dynamicChildren?(He(d.dynamicChildren,B,y,w,A,N,S),(g.key!=null||w&&g===w.subTree)&&kd(d,g,!0)):gt(d,g,y,$,w,A,N,S,R)},er=(d,g,y,E,w,A,N,S,R)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?w.ctx.activate(g,y,E,N,R):tr(g,y,E,w,A,N,R):Ne(d,g,R)},tr=(d,g,y,E,w,A,N)=>{const S=d.component=r_(d,E,w);if(Io(d)&&(S.ctx.renderer=me),i_(S),S.asyncDep){if(w&&w.registerDep(S,ge),!d.el){const R=S.subTree=st(Ut);D(null,R,g,y)}return}ge(S,d,g,y,w,A,N)},Ne=(d,g,y)=>{const E=g.component=d.component;if(hv(d,g,y))if(E.asyncDep&&!E.asyncResolved){le(E,g,y);return}else E.next=g,sv(E.update),E.update();else g.component=d.component,g.el=d.el,E.vnode=g},ge=(d,g,y,E,w,A,N)=>{const S=()=>{if(d.isMounted){let{next:$,bu:x,u:B,parent:z,vnode:te}=d,Ee=$,he;In(d,!1),$?($.el=te.el,le(d,$,N)):$=te,x&&_i(x),(he=$.props&&$.props.onVnodeBeforeUpdate)&&Ct(he,z,$,te),In(d,!0);const _e=da(d),wt=d.subTree;d.subTree=_e,_(wt,_e,h(wt.el),U(wt),d,w,A),$.el=_e.el,Ee===null&&fv(d,_e.el),B&&tt(B,w),(he=$.props&&$.props.onVnodeUpdated)&&tt(()=>Ct(he,z,$,te),w)}else{let $;const{el:x,props:B}=g,{bm:z,m:te,parent:Ee}=d,he=Wa(g);if(In(d,!1),z&&_i(z),!he&&($=B&&B.onVnodeBeforeMount)&&Ct($,Ee,g),In(d,!0),x&&X){const _e=()=>{d.subTree=da(d),X(x,d.subTree,d,w,null)};he?g.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=da(d);_(null,_e,y,E,d,w,A),g.el=_e.el}if(te&&tt(te,w),!he&&($=B&&B.onVnodeMounted)){const _e=g;tt(()=>Ct($,Ee,_e),w)}g.shapeFlag&256&&d.a&&tt(d.a,w),d.isMounted=!0,g=y=E=null}},R=d.effect=new Hc(S,()=>od(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,In(d,!0),T()},le=(d,g,y)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,Lv(d,g.props,E,y),Fv(d,g.children,y),Mr(),Xc(void 0,d.update),Ur()},gt=(d,g,y,E,w,A,N,S,R=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,x=g.children,{patchFlag:B,shapeFlag:z}=g;if(B>0){if(B&128){Vt(T,x,y,E,w,A,N,S,R);return}else if(B&256){nr(T,x,y,E,w,A,N,S,R);return}}z&8?($&16&&k(T,w,A),x!==T&&u(y,x)):$&16?z&16?Vt(T,x,y,E,w,A,N,S,R):k(T,w,A,!0):($&8&&u(y,""),z&16&&pe(x,y,E,w,A,N,S,R))},nr=(d,g,y,E,w,A,N,S,R)=>{d=d||dr,g=g||dr;const T=d.length,$=g.length,x=Math.min(T,$);let B;for(B=0;B<x;B++){const z=g[B]=R?nn(g[B]):kt(g[B]);_(d[B],z,y,null,w,A,N,S,R)}T>$?k(d,w,A,!0,!1,x):pe(g,y,E,w,A,N,S,R,x)},Vt=(d,g,y,E,w,A,N,S,R)=>{let T=0;const $=g.length;let x=d.length-1,B=$-1;for(;T<=x&&T<=B;){const z=d[T],te=g[T]=R?nn(g[T]):kt(g[T]);if(Cn(z,te))_(z,te,y,null,w,A,N,S,R);else break;T++}for(;T<=x&&T<=B;){const z=d[x],te=g[B]=R?nn(g[B]):kt(g[B]);if(Cn(z,te))_(z,te,y,null,w,A,N,S,R);else break;x--,B--}if(T>x){if(T<=B){const z=B+1,te=z<$?g[z].el:E;for(;T<=B;)_(null,g[T]=R?nn(g[T]):kt(g[T]),y,te,w,A,N,S,R),T++}}else if(T>B)for(;T<=x;)mt(d[T],w,A,!0),T++;else{const z=T,te=T,Ee=new Map;for(T=te;T<=B;T++){const ct=g[T]=R?nn(g[T]):kt(g[T]);ct.key!=null&&Ee.set(ct.key,T)}let he,_e=0;const wt=B-te+1;let rr=!1,Tu=0;const Jr=new Array(wt);for(T=0;T<wt;T++)Jr[T]=0;for(T=z;T<=x;T++){const ct=d[T];if(_e>=wt){mt(ct,w,A,!0);continue}let At;if(ct.key!=null)At=Ee.get(ct.key);else for(he=te;he<=B;he++)if(Jr[he-te]===0&&Cn(ct,g[he])){At=he;break}At===void 0?mt(ct,w,A,!0):(Jr[At-te]=T+1,At>=Tu?Tu=At:rr=!0,_(ct,g[At],y,null,w,A,N,S,R),_e++)}const Iu=rr?qv(Jr):dr;for(he=Iu.length-1,T=wt-1;T>=0;T--){const ct=te+T,At=g[ct],bu=ct+1<$?g[ct+1].el:E;Jr[T]===0?_(null,At,y,bu,w,A,N,S,R):rr&&(he<0||T!==Iu[he]?St(At,y,bu,2):he--)}}},St=(d,g,y,E,w=null)=>{const{el:A,type:N,transition:S,children:R,shapeFlag:T}=d;if(T&6){St(d.component.subTree,g,y,E);return}if(T&128){d.suspense.move(g,y,E);return}if(T&64){N.move(d,g,y,me);return}if(N===Rt){r(A,g,y);for(let x=0;x<R.length;x++)St(R[x],g,y,E);r(d.anchor,g,y);return}if(N===Ei){M(d,g,y);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(A),r(A,g,y),tt(()=>S.enter(A),w);else{const{leave:x,delayLeave:B,afterLeave:z}=S,te=()=>r(A,g,y),Ee=()=>{x(A,()=>{te(),z&&z()})};B?B(A,te,Ee):Ee()}else r(A,g,y)},mt=(d,g,y,E=!1,w=!1)=>{const{type:A,props:N,ref:S,children:R,dynamicChildren:T,shapeFlag:$,patchFlag:x,dirs:B}=d;if(S!=null&&Qa(S,null,y,d,!0),$&256){g.ctx.deactivate(d);return}const z=$&1&&B,te=!Wa(d);let Ee;if(te&&(Ee=N&&N.onVnodeBeforeUnmount)&&Ct(Ee,g,d),$&6)L(d.component,y,E);else{if($&128){d.suspense.unmount(y,E);return}z&&Tn(d,null,g,"beforeUnmount"),$&64?d.type.remove(d,g,y,w,me,E):T&&(A!==Rt||x>0&&x&64)?k(T,g,y,!1,!0):(A===Rt&&x&384||!w&&$&16)&&k(R,g,y),E&&ha(d)}(te&&(Ee=N&&N.onVnodeUnmounted)||z)&&tt(()=>{Ee&&Ct(Ee,g,d),z&&Tn(d,null,g,"unmounted")},y)},ha=d=>{const{type:g,el:y,anchor:E,transition:w}=d;if(g===Rt){v(y,E);return}if(g===Ei){ne(d);return}const A=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:S}=w,R=()=>N(y,A);S?S(d.el,A,R):R()}else A()},v=(d,g)=>{let y;for(;d!==g;)y=f(d),s(d),d=y;s(g)},L=(d,g,y)=>{const{bum:E,scope:w,update:A,subTree:N,um:S}=d;E&&_i(E),w.stop(),A&&(A.active=!1,mt(N,d,g,y)),S&&tt(S,g),tt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},k=(d,g,y,E=!1,w=!1,A=0)=>{for(let N=A;N<d.length;N++)mt(d[N],g,y,E,w)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ue=(d,g,y)=>{d==null?g._vnode&&mt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),ld(),g._vnode=d},me={p:_,um:mt,m:St,r:ha,mt:tr,mc:pe,pc:gt,pbc:He,n:U,o:t};let Z,X;return e&&([Z,X]=e(me)),{render:ue,hydrate:Z,createApp:$v(ue,Z)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kd(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nn(s[i]),a.el=o.el),n||kd(o,a))}}function qv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hv=t=>t.__isTeleport,Nd="components";function aR(t,e){return Wv(Nd,t,!0,e)||t}const Kv=Symbol();function Wv(t,e,n=!0,r=!1){const s=vt||Pe;if(s){const i=s.type;if(t===Nd){const a=l_(i);if(a&&(a===e||a===Mt(e)||a===_o(Mt(e))))return i}const o=ju(s[t]||i[t],e)||ju(s.appContext[t],e);return!o&&r?i:o}}function ju(t,e){return t&&(t[e]||t[Mt(e)]||t[_o(Mt(e))])}const Rt=Symbol(void 0),el=Symbol(void 0),Ut=Symbol(void 0),Ei=Symbol(void 0),ls=[];let xn=null;function zv(t=!1){ls.push(xn=t?null:[])}function Gv(){ls.pop(),xn=ls[ls.length-1]||null}let Mi=1;function qu(t){Mi+=t}function Od(t){return t.dynamicChildren=Mi>0?xn||dr:null,Gv(),Mi>0&&xn&&xn.push(t),t}function cR(t,e,n,r,s,i){return Od(Dd(t,e,n,r,s,i,!0))}function Jv(t,e,n,r,s){return Od(st(t,e,n,r,s,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const So="__vInternal",Pd=({key:t})=>t!=null?t:null,Ti=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ue(t)||Y(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function Dd(t,e=null,n=null,r=0,s=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pd(e),ref:e&&Ti(e),scopeId:To,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(tl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Mi>0&&!o&&xn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xn.push(c),c}const st=Qv;function Qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kv)&&(t=Ut),Xa(t)){const a=wr(t,e,!0);return n&&tl(a,n),a}if(u_(t)&&(t=t.__vccOpts),e){e=Xv(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Fc(a)),Se(c)&&(Yf(c)&&!q(c)&&(c=ze({},c)),e.style=Uc(c))}const o=De(t)?1:dv(t)?128:Hv(t)?64:Se(t)?4:Y(t)?2:0;return Dd(t,e,n,r,s,o,i,!0)}function Xv(t){return t?Yf(t)||So in t?ze({},t):t:null}function wr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Zv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pd(a),ref:e&&e.ref?n&&s?q(s)?s.concat(Ti(e)):[s,Ti(e)]:Ti(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor}}function Yv(t=" ",e=0){return st(el,null,t,e)}function lR(t,e){const n=st(Ei,null,t);return n.staticCount=e,n}function uR(t="",e=!1){return e?(zv(),Jv(Ut,null,t)):st(Ut,null,t)}function kt(t){return t==null||typeof t=="boolean"?st(Ut):q(t)?st(Rt,null,t.slice()):typeof t=="object"?nn(t):st(el,null,String(t))}function nn(t){return t.el===null||t.memo?t:wr(t)}function tl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),tl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(So in e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[Yv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fc([e.class,r.class]));else if(s==="style")e.style=Uc([e.style,r.style]);else if(go(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ct(t,e,n,r=null){_t(t,e,7,[n,r])}function hR(t,e,n,r){let s;const i=n&&n[r];if(q(t)||De(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ya=t=>t?xd(t)?nl(t)||t.proxy:Ya(t.parent):null,Ui=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$emit:t=>t.emit,$options:t=>Td(t),$forceUpdate:t=>()=>od(t.update),$nextTick:t=>id.bind(t.proxy),$watch:t=>gv.bind(t)}),e_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==de&&re(r,e))return o[e]=1,r[e];if(s!==de&&re(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,i[e];if(n!==de&&re(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=Ui[e];let h,f;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==de&&re(s,e)?(s[e]=n,!0):r!==de&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&re(t,o)||e!==de&&re(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(Ui,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},t_=Rd();let n_=0;function r_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||t_,i={uid:n_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(r,s),emitsOptions:hd(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=av.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const s_=()=>Pe||vt,Er=t=>{Pe=t,t.scope.on()},Ln=()=>{Pe&&Pe.scope.off(),Pe=null};function xd(t){return t.vnode.shapeFlag&4}let Ts=!1;function i_(t,e=!1){Ts=e;const{props:n,children:r}=t.vnode,s=xd(t);xv(t,n,s,e),Uv(t,r);const i=s?o_(t,e):void 0;return Ts=!1,i}function o_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zf(new Proxy(t.ctx,e_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?c_(t):null;Er(t),Mr();const i=hn(r,t,0,[t.props,s]);if(Ur(),Ln(),Uf(i)){if(i.then(Ln,Ln),e)return i.then(o=>{Hu(t,o,e)}).catch(o=>{Eo(o,t,0)});t.asyncDep=i}else Hu(t,i,e)}else Ld(t,e)}function Hu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=rd(e)),Ld(t,n)}let Ku;function Ld(t,e,n){const r=t.type;if(!t.render){if(!e&&Ku&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=Ku(s,l)}}t.render=r.render||Et}Er(t),Mr(),kv(t),Ur(),Ln()}function a_(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function c_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=a_(t))},slots:t.slots,emit:t.emit,expose:e}}function nl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rd(Zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)}}))}function l_(t){return Y(t)&&t.displayName||t.name}function u_(t){return Y(t)&&"__vccOpts"in t}const Nt=(t,e)=>tv(t,e,Ts);function Md(t,e,n){const r=arguments.length;return r===2?Se(e)&&!q(e)?Xa(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xa(n)&&(n=[n]),st(t,e,n))}const h_="3.2.31",f_="http://www.w3.org/2000/svg",Rn=typeof document!="undefined"?document:null,Wu=Rn&&Rn.createElement("template"),d_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rn.createElementNS(f_,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Wu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function p_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function g_(t,e,n){const r=t.style,s=De(n);if(n&&!s){for(const i in n)Za(r,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&Za(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const zu=/\s*!important$/;function Za(t,e,n){if(q(n))n.forEach(r=>Za(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=m_(t,e);zu.test(n)?t.setProperty(Lr(r),n.replace(zu,""),"important"):t[r]=n}}const Gu=["Webkit","Moz","ms"],ga={};function m_(t,e){const n=ga[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return ga[e]=r;r=_o(r);for(let s=0;s<Gu.length;s++){const i=Gu[s]+r;if(i in t)return ga[e]=i}return e}const Ju="http://www.w3.org/1999/xlink";function y_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ju,e.slice(6,e.length)):t.setAttributeNS(Ju,e,n);else{const i=ly(e);n==null||i&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Lf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Fi=Date.now,Ud=!1;if(typeof window!="undefined"){Fi()>document.createEvent("Event").timeStamp&&(Fi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ud=!!(t&&Number(t[1])<=53)}let ec=0;const __=Promise.resolve(),w_=()=>{ec=0},E_=()=>ec||(__.then(w_),ec=Fi());function kn(t,e,n,r){t.addEventListener(e,n,r)}function T_(t,e,n,r){t.removeEventListener(e,n,r)}function I_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=b_(e);if(r){const l=i[e]=S_(r,s);kn(t,a,l,c)}else o&&(T_(t,a,o,c),i[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function b_(t){let e;if(Qu.test(t)){e={};let n;for(;n=t.match(Qu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Lr(t.slice(2)),e]}function S_(t,e){const n=r=>{const s=r.timeStamp||Fi();(Ud||s>=n.attached-1)&&_t(A_(r,n.value),e,5,[r])};return n.value=t,n.attached=E_(),n}function A_(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xu=/^on[a-z]/,C_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?p_(t,r,s):e==="style"?g_(t,n,r):go(e)?Vc(e)||I_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):R_(t,e,r,s))?v_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),y_(t,e,r,s))};function R_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xu.test(e)&&De(n)?!1:e in t}const k_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vv.props;const Vi=t=>{const e=t.props["onUpdate:modelValue"];return q(e)?n=>_i(e,n):e};function N_(t){t.target.composing=!0}function Yu(t){const e=t.target;e.composing&&(e.composing=!1,O_(e,"input"))}function O_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const fR={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Vi(s);const i=r||s.props&&s.props.type==="number";kn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Pi(a)),t._assign(a)}),n&&kn(t,"change",()=>{t.value=t.value.trim()}),e||(kn(t,"compositionstart",N_),kn(t,"compositionend",Yu),kn(t,"change",Yu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Vi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Pi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},dR={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=mo(e);kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pi($i(o)):$i(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Vi(r)},mounted(t,{value:e}){Zu(t,e)},beforeUpdate(t,e,n){t._assign=Vi(n)},updated(t,{value:e}){Zu(t,e)}};function Zu(t,e){const n=t.multiple;if(!(n&&!q(e)&&!mo(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=$i(i);if(n)q(e)?i.selected=py(e,o)>-1:i.selected=e.has(o);else if(po($i(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $i(t){return"_value"in t?t._value:t.value}const P_=["ctrl","shift","alt","meta"],D_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>P_.some(n=>t[`${n}Key`]&&!e.includes(n))},pR=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=D_[e[s]];if(i&&i(n,e))return}return t(n,...r)},gR={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Qr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Qr(t,!0),r.enter(t)):r.leave(t,()=>{Qr(t,!1)}):Qr(t,e))},beforeUnmount(t,{value:e}){Qr(t,e)}};function Qr(t,e){t.style.display=e?t._vod:"none"}const x_=ze({patchProp:C_},d_);let eh;function L_(){return eh||(eh=Bv(x_))}const mR=(...t)=>{const e=L_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=M_(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function M_(t){return De(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Vr=t=>Fd?Symbol(t):"_vr_"+t,U_=Vr("rvlm"),th=Vr("rvd"),Ao=Vr("r"),rl=Vr("rl"),tc=Vr("rvl"),lr=typeof window!="undefined";function F_(t){return t.__esModule||Fd&&t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const us=()=>{},V_=/\/$/,$_=t=>t.replace(V_,"");function ya(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=H_(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function B_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function j_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Tr(e.matched[r],n.matched[s])&&Vd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!q_(t[n],e[n]))return!1;return!0}function q_(t,e){return Array.isArray(t)?rh(t,e):Array.isArray(e)?rh(e,t):t===e}function rh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function H_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Is;(function(t){t.pop="pop",t.push="push"})(Is||(Is={}));var hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hs||(hs={}));function K_(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$_(t)}const W_=/^[^#]+#/;function z_(t,e){return t.replace(W_,"#")+e}function G_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Co=()=>({left:window.pageXOffset,top:window.pageYOffset});function J_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=G_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sh(t,e){return(history.state?history.state.position-e:-1)+t}const nc=new Map;function Q_(t,e){nc.set(t,e)}function X_(t){const e=nc.get(t);return nc.delete(t),e}let Y_=()=>location.protocol+"//"+location.host;function $d(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),nh(c,"")}return nh(n,t)+r+s}function Z_(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=$d(t,location),m=n.value,b=e.value;let _=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}_=b?f.position-b.position:0}else r(p);s.forEach(C=>{C(n.value,m,{delta:_,type:Is.pop,direction:_?_>0?hs.forward:hs.back:hs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(fe({},f.state,{scroll:Co()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ih(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Co():null}}function ew(t){const{history:e,location:n}=window,r={value:$d(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Y_()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,ih(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Co()});i(u.current,u,!0);const h=fe({},ih(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function yR(t){t=K_(t);const e=ew(t),n=Z_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:z_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tw(t){return typeof t=="string"||t&&typeof t=="object"}function Bd(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jd=Vr("nf");var oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oh||(oh={}));function Ir(t,e){return fe(new Error,{type:t,[jd]:!0},e)}function bn(t,e){return t instanceof Error&&jd in t&&(e==null||!!(t.type&e))}const ah="[^/]+?",nw={sensitive:!1,strict:!1,start:!0,end:!0},rw=/[.+*?^${}()[\]/\\]/g;function sw(t,e){const n=fe({},nw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(rw,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:b,optional:_,regexp:C}=f;i.push({name:m,repeatable:b,optional:_});const D=C||ah;if(D!==ah){p+=10;try{new RegExp(`(${D})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+M.message)}}let V=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=_&&l.length<2?`(?:/${V})`:"/"+V),_&&(V+="?"),s+=V,p+=20,_&&(p+=-8),b&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:b,optional:_}=p,C=m in l?l[m]:"";if(Array.isArray(C)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(C)?C.join("/"):C;if(!D)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function iw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ow(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=iw(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const aw={type:0,value:""},cw=/[a-zA-Z0-9_]/;function lw(t){if(!t)return[[]];if(t==="/")return[[aw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:cw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function uw(t,e,n){const r=sw(lw(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hw(t,e){const n=[],r=new Map;e=lh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,m=dw(u);m.aliasOf=f&&f.record;const b=lh(e,u),_=[m];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of V)_.push(fe({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let C,D;for(const V of _){const{path:M}=V;if(h&&M[0]!=="/"){const ne=h.record.path,ce=ne[ne.length-1]==="/"?"":"/";V.path=h.record.path+(M&&ce+M)}if(C=uw(V,h,b),f?f.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),p&&u.name&&!ch(C)&&o(u.name)),"children"in m){const ne=m.children;for(let ce=0;ce<ne.length;ce++)i(ne[ce],C,f&&f.children[ce])}f=f||C,c(C)}return D?()=>{o(D)}:us}function o(u){if(Bd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ow(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!ch(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},m,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Ir(1,{location:u});b=f.record.name,p=fe(fw(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(D=>D.re.test(m)),f&&(p=f.parse(m),b=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Ir(1,{location:u,currentLocation:h});b=f.record.name,p=fe({},h.params,u.params),m=f.stringify(p)}const _=[];let C=f;for(;C;)_.unshift(C.record),C=C.parent;return{name:b,path:m,params:p,matched:_,meta:gw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function fw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ch(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gw(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function lh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const qd=/#/g,mw=/&/g,yw=/\//g,vw=/=/g,_w=/\?/g,Hd=/\+/g,ww=/%5B/g,Ew=/%5D/g,Kd=/%5E/g,Tw=/%60/g,Wd=/%7B/g,Iw=/%7C/g,zd=/%7D/g,bw=/%20/g;function sl(t){return encodeURI(""+t).replace(Iw,"|").replace(ww,"[").replace(Ew,"]")}function Sw(t){return sl(t).replace(Wd,"{").replace(zd,"}").replace(Kd,"^")}function rc(t){return sl(t).replace(Hd,"%2B").replace(bw,"+").replace(qd,"%23").replace(mw,"%26").replace(Tw,"`").replace(Wd,"{").replace(zd,"}").replace(Kd,"^")}function Aw(t){return rc(t).replace(vw,"%3D")}function Cw(t){return sl(t).replace(qd,"%23").replace(_w,"%3F")}function Rw(t){return t==null?"":Cw(t).replace(yw,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hd," "),o=i.indexOf("="),a=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function uh(t){let e="";for(let n in t){const r=t[n];if(n=Aw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&rc(i)):[r&&rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Nw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Xr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function rn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ir(4,{from:n,to:e})):h instanceof Error?a(h):tw(h)?a(Ir(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function va(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ow(a)){const l=(a.__vccOpts||a)[e];l&&s.push(rn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=F_(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&rn(f,n,r,i,o)()}))}}return s}function Ow(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hh(t){const e=Tt(Ao),n=Tt(rl),r=Nt(()=>e.resolve(os(t.to))),s=Nt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tr.bind(null,u));if(f>-1)return f;const p=fh(c[l-2]);return l>1&&fh(u)===p&&h[h.length-1].path!==p?h.findIndex(Tr.bind(null,c[l-2])):f}),i=Nt(()=>s.value>-1&&Lw(n.params,r.value.params)),o=Nt(()=>s.value>-1&&s.value===n.matched.length-1&&Vd(n.params,r.value.params));function a(c={}){return xw(c)?e[os(t.replace)?"replace":"push"](os(t.to)).catch(us):Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Pw=md({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hh,setup(t,{slots:e}){const n=Fr(hh(t)),{options:r}=Tt(Ao),s=Nt(()=>({[dh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Md("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dw=Pw;function xw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dh=(t,e,n)=>t!=null?t:e!=null?e:n,Mw=md({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Tt(tc),s=Nt(()=>t.route||r.value),i=Tt(th,0),o=Nt(()=>s.value.matched[i]);wi(th,i+1),wi(U_,o),wi(tc,s);const a=Qy();return mr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Tr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return ph(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Md(u,fe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return ph(n.default,{Component:b,route:c})||b}}});function ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Uw=Mw;function vR(t){const e=hw(t.routes,t),n=t.parseQuery||kw,r=t.stringifyQuery||uh,s=t.history,i=Xr(),o=Xr(),a=Xr(),c=Xy(Zt);let l=Zt;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ma.bind(null,v=>""+v),h=ma.bind(null,Rw),f=ma.bind(null,Bi);function p(v,L){let k,U;return Bd(v)?(k=e.getRecordMatcher(v),U=L):U=v,e.addRoute(U,k)}function m(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(v=>v.record)}function _(v){return!!e.getRecordMatcher(v)}function C(v,L){if(L=fe({},L||c.value),typeof v=="string"){const X=ya(n,v,L.path),d=e.resolve({path:X.path},L),g=s.createHref(X.fullPath);return fe(X,d,{params:f(d.params),hash:Bi(X.hash),redirectedFrom:void 0,href:g})}let k;if("path"in v)k=fe({},v,{path:ya(n,v.path,L.path).path});else{const X=fe({},v.params);for(const d in X)X[d]==null&&delete X[d];k=fe({},v,{params:h(v.params)}),L.params=h(L.params)}const U=e.resolve(k,L),ue=v.hash||"";U.params=u(f(U.params));const me=B_(r,fe({},v,{hash:Sw(ue),path:U.path})),Z=s.createHref(me);return fe({fullPath:me,hash:ue,query:r===uh?Nw(v.query):v.query||{}},U,{redirectedFrom:void 0,href:Z})}function D(v){return typeof v=="string"?ya(n,v,c.value.path):fe({},v)}function V(v,L){if(l!==v)return Ir(8,{from:L,to:v})}function M(v){return Q(v)}function ne(v){return M(fe(D(v),{replace:!0}))}function ce(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:k}=L;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=D(U):{path:U},U.params={}),fe({query:v.query,hash:v.hash,params:v.params},U)}}function Q(v,L){const k=l=C(v),U=c.value,ue=v.state,me=v.force,Z=v.replace===!0,X=ce(k);if(X)return Q(fe(D(X),{state:ue,force:me,replace:Z}),L||k);const d=k;d.redirectedFrom=L;let g;return!me&&j_(r,U,k)&&(g=Ir(16,{to:d,from:U}),nr(U,U,!0,!1)),(g?Promise.resolve(g):pe(d,U)).catch(y=>bn(y)?y:ge(y,d,U)).then(y=>{if(y){if(bn(y,2))return Q(fe(D(y.to),{state:ue,force:me,replace:Z}),L||d)}else y=He(d,U,!0,Z,ue);return qe(d,U,y),y})}function ve(v,L){const k=V(v,L);return k?Promise.reject(k):Promise.resolve()}function pe(v,L){let k;const[U,ue,me]=Fw(v,L);k=va(U.reverse(),"beforeRouteLeave",v,L);for(const X of U)X.leaveGuards.forEach(d=>{k.push(rn(d,v,L))});const Z=ve.bind(null,v,L);return k.push(Z),sr(k).then(()=>{k=[];for(const X of i.list())k.push(rn(X,v,L));return k.push(Z),sr(k)}).then(()=>{k=va(ue,"beforeRouteUpdate",v,L);for(const X of ue)X.updateGuards.forEach(d=>{k.push(rn(d,v,L))});return k.push(Z),sr(k)}).then(()=>{k=[];for(const X of v.matched)if(X.beforeEnter&&!L.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const d of X.beforeEnter)k.push(rn(d,v,L));else k.push(rn(X.beforeEnter,v,L));return k.push(Z),sr(k)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),k=va(me,"beforeRouteEnter",v,L),k.push(Z),sr(k))).then(()=>{k=[];for(const X of o.list())k.push(rn(X,v,L));return k.push(Z),sr(k)}).catch(X=>bn(X,8)?X:Promise.reject(X))}function qe(v,L,k){for(const U of a.list())U(v,L,k)}function He(v,L,k,U,ue){const me=V(v,L);if(me)return me;const Z=L===Zt,X=lr?history.state:{};k&&(U||Z?s.replace(v.fullPath,fe({scroll:Z&&X&&X.scroll},ue)):s.push(v.fullPath,ue)),c.value=v,nr(v,L,k,Z),gt()}let Je;function Xt(){Je=s.listen((v,L,k)=>{const U=C(v),ue=ce(U);if(ue){Q(fe(ue,{replace:!0}),U).catch(us);return}l=U;const me=c.value;lr&&Q_(sh(me.fullPath,k.delta),Co()),pe(U,me).catch(Z=>bn(Z,12)?Z:bn(Z,2)?(Q(Z.to,U).then(X=>{bn(X,20)&&!k.delta&&k.type===Is.pop&&s.go(-1,!1)}).catch(us),Promise.reject()):(k.delta&&s.go(-k.delta,!1),ge(Z,U,me))).then(Z=>{Z=Z||He(U,me,!1),Z&&(k.delta?s.go(-k.delta,!1):k.type===Is.pop&&bn(Z,20)&&s.go(-1,!1)),qe(U,me,Z)}).catch(us)})}let er=Xr(),tr=Xr(),Ne;function ge(v,L,k){gt(v);const U=tr.list();return U.length?U.forEach(ue=>ue(v,L,k)):console.error(v),Promise.reject(v)}function le(){return Ne&&c.value!==Zt?Promise.resolve():new Promise((v,L)=>{er.add([v,L])})}function gt(v){Ne||(Ne=!0,Xt(),er.list().forEach(([L,k])=>v?k(v):L()),er.reset())}function nr(v,L,k,U){const{scrollBehavior:ue}=t;if(!lr||!ue)return Promise.resolve();const me=!k&&X_(sh(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return id().then(()=>ue(v,L,me)).then(Z=>Z&&J_(Z)).catch(Z=>ge(Z,v,L))}const Vt=v=>s.go(v);let St;const mt=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:b,resolve:C,options:t,push:M,replace:ne,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tr.add,isReady:le,install(v){const L=this;v.component("RouterLink",Dw),v.component("RouterView",Uw),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>os(c)}),lr&&!St&&c.value===Zt&&(St=!0,M(s.location).catch(ue=>{}));const k={};for(const ue in Zt)k[ue]=Nt(()=>c.value[ue]);v.provide(Ao,L),v.provide(rl,Fr(k)),v.provide(tc,c);const U=v.unmount;mt.add(v),v.unmount=function(){mt.delete(v),mt.size<1&&(l=Zt,Je&&Je(),c.value=Zt,St=!1,Ne=!1),U()}}}}function sr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Fw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Tr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Tr(l,c))||s.push(c))}return[n,r,s]}function _R(){return Tt(Ao)}function wR(){return Tt(rl)}function Vw(){return Gd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Gd(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const $w=typeof Proxy=="function",Bw="devtools-plugin:setup",jw="plugin:settings:set";class qw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o}},n&&n.on(jw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Hw(t,e){const n=t,r=Gd(),s=Vw(),i=$w&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Bw,t,e);else{const o=i?new qw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Jd="store";function ER(t){return t===void 0&&(t=null),Tt(t!==null?t:Jd)}function $r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Kw(t){return t!==null&&typeof t=="object"}function Ww(t){return t&&typeof t.then=="function"}function zw(t,e){return function(){return t(e)}}function Qd(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Xd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ro(t,n,[],t._modules.root,!0),il(t,n,e)}function il(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};$r(s,function(o,a){i[a]=zw(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Fr({data:e}),t.strict&&Yw(t),r&&n&&t._withCommit(function(){r.data=null})}function Ro(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=ol(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=Gw(t,o,n);r.forEachMutation(function(u,h){var f=o+h;Jw(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;Qw(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;Xw(t,f,u,l)}),r.forEachChild(function(u,h){Ro(t,e,n.concat(h),u,s)})}function Gw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=ji(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=ji(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Yd(t,e)}},state:{get:function(){return ol(t.state,n)}}}),s}function Yd(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Jw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Qw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Ww(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Xw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Yw(t){mr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ol(t,e){return e.reduce(function(n,r){return n[r]},t)}function ji(t,e,n){return Kw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Zw="vuex bindings",gh="vuex:mutations",_a="vuex:actions",ir="vuex",eE=0;function tE(t,e){Hw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Zw]},function(n){n.addTimelineLayer({id:gh,label:"Vuex Mutations",color:mh}),n.addTimelineLayer({id:_a,label:"Vuex Actions",color:mh}),n.addInspector({id:ir,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ir)if(r.filter){var s=[];np(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[tp(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ir){var s=r.nodeId;Yd(e,s),r.state=sE(oE(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ir){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(ir),n.sendInspectorState(ir),n.addTimelineEvent({layerId:gh,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=eE++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:_a,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:_a,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var mh=8702998,nE=6710886,rE=16777215,Zd={label:"namespaced",textColor:rE,backgroundColor:nE};function ep(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function tp(t,e){return{id:e||"root",label:ep(e),tags:t.namespaced?[Zd]:[],children:Object.keys(t._children).map(function(n){return tp(t._children[n],e+n+"/")})}}function np(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Zd]:[]}),Object.keys(e._children).forEach(function(s){np(t,e._children[s],n,r+s+"/")})}function sE(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=iE(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?ep(o):o,editable:!1,value:sc(function(){return i[o]})}})}return s}function iE(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=sc(function(){return t[n]})}else e[n]=sc(function(){return t[n]})}),e}function oE(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function sc(t){try{return t()}catch(e){return e}}var bt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},rp={namespaced:{configurable:!0}};rp.namespaced.get=function(){return!!this._rawModule.namespaced};bt.prototype.addChild=function(e,n){this._children[e]=n};bt.prototype.removeChild=function(e){delete this._children[e]};bt.prototype.getChild=function(e){return this._children[e]};bt.prototype.hasChild=function(e){return e in this._children};bt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};bt.prototype.forEachChild=function(e){$r(this._children,e)};bt.prototype.forEachGetter=function(e){this._rawModule.getters&&$r(this._rawModule.getters,e)};bt.prototype.forEachAction=function(e){this._rawModule.actions&&$r(this._rawModule.actions,e)};bt.prototype.forEachMutation=function(e){this._rawModule.mutations&&$r(this._rawModule.mutations,e)};Object.defineProperties(bt.prototype,rp);var Jn=function(e){this.register([],e,!1)};Jn.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Jn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Jn.prototype.update=function(e){sp([],this.root,e)};Jn.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new bt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&$r(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Jn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Jn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function sp(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;sp(t.concat(r),e.getChild(r),n.modules[r])}}function TR(t){return new at(t)}var at=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Jn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,m){return l.call(o,f,p,m)},this.strict=s;var u=this._modules.root.state;Ro(this,u,[],this._modules.root),il(this,u),r.forEach(function(h){return h(n)})},al={state:{configurable:!0}};at.prototype.install=function(e,n){e.provide(n||Jd,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&tE(e,this)};al.state.get=function(){return this._state.data};al.state.set=function(t){};at.prototype.commit=function(e,n,r){var s=this,i=ji(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};at.prototype.dispatch=function(e,n){var r=this,s=ji(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};at.prototype.subscribe=function(e,n){return Qd(e,this._subscribers,n)};at.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Qd(r,this._actionSubscribers,n)};at.prototype.watch=function(e,n,r){var s=this;return mr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};at.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};at.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ro(this,this.state,e,this._modules.get(e),r.preserveState),il(this,this.state)};at.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=ol(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Xd(this)};at.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};at.prototype.hotUpdate=function(e){this._modules.update(e),Xd(this,!0)};at.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(at.prototype,al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uE=function(t){try{return lE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function op(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fE(){return xe().indexOf("Electron/")>=0}function cp(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dE(){return xe().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="FirebaseError";class _n extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=pE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function gE(t,e){return t.replace(mE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mE=/\{\$([^}]+)}/g;function yE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yh(i)&&yh(o)){if(!qi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vE(t,e){const n=new _E(t,e);return n.subscribe.bind(n)}class _E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wa),s.error===void 0&&(s.error=wa),s.complete===void 0&&(s.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TE(t){return t===An?void 0:t}function IE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const SE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},AE=ie.INFO,CE={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},RE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=AE,this._logHandler=RE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",vh="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new cl("@firebase/app"),OE="@firebase/app-compat",PE="@firebase/analytics-compat",DE="@firebase/analytics",xE="@firebase/app-check-compat",LE="@firebase/app-check",ME="@firebase/auth",UE="@firebase/auth-compat",FE="@firebase/database",VE="@firebase/database-compat",$E="@firebase/functions",BE="@firebase/functions-compat",jE="@firebase/installations",qE="@firebase/installations-compat",HE="@firebase/messaging",KE="@firebase/messaging-compat",WE="@firebase/performance",zE="@firebase/performance-compat",GE="@firebase/remote-config",JE="@firebase/remote-config-compat",QE="@firebase/storage",XE="@firebase/storage-compat",YE="@firebase/firestore",ZE="@firebase/firestore-compat",eT="firebase",tT="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="[DEFAULT]",nT={[ic]:"fire-core",[OE]:"fire-core-compat",[DE]:"fire-analytics",[PE]:"fire-analytics-compat",[LE]:"fire-app-check",[xE]:"fire-app-check-compat",[ME]:"fire-auth",[UE]:"fire-auth-compat",[FE]:"fire-rtdb",[VE]:"fire-rtdb-compat",[$E]:"fire-fn",[BE]:"fire-fn-compat",[jE]:"fire-iid",[qE]:"fire-iid-compat",[HE]:"fire-fcm",[KE]:"fire-fcm-compat",[WE]:"fire-perf",[zE]:"fire-perf-compat",[GE]:"fire-rc",[JE]:"fire-rc-compat",[QE]:"fire-gcs",[XE]:"fire-gcs-compat",[YE]:"fire-fst",[ZE]:"fire-fst-compat","fire-js":"fire-js",[eT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map,oc=new Map;function rT(t,e){try{t.container.addComponent(e)}catch(n){ll.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(oc.has(e))return ll.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Hi.values())rT(n,t);return!0}function ko(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ki=new Fs("app","Firebase",sT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ki.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=tT;function IR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:lp,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ki.create("bad-app-name",{appName:String(r)});const s=Hi.get(r);if(s){if(qi(t,s.options)&&qi(n,s.config))return s;throw Ki.create("duplicate-app",{appName:r})}const i=new bE(r);for(const a of oc.values())i.addComponent(a);const o=new iT(t,n,i);return Hi.set(r,o),o}function ul(t=lp){const e=Hi.get(t);if(!e)throw Ki.create("no-app",{appName:t});return e}function Dt(t,e,n){var r;let s=(r=nT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ll.warn(a.join(" "));return}br(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){br(new Vn("platform-logger",e=>new kE(e),"PRIVATE")),Dt(ic,vh,t),Dt(ic,vh,"esm2017"),Dt("fire-js","")}oT("");var aT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,hl=hl||{},K=aT||self;function Wi(){}function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $s(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cT(t){return Object.prototype.hasOwnProperty.call(t,Ea)&&t[Ea]||(t[Ea]=++lT)}var Ea="closure_uid_"+(1e9*Math.random()>>>0),lT=0;function uT(t,e,n){return t.call.apply(t.bind,arguments)}function hT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=uT:Fe=hT,Fe.apply(null,arguments)}function hi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function wn(){this.s=this.s,this.o=this.o}var fT=0,dT={};wn.prototype.s=!1;wn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),fT!=0)){var t=cT(this);delete dT[t]}};wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const up=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},hp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function pT(t){e:{var e=i0;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function _h(t){return Array.prototype.concat.apply([],arguments)}function fl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zi(t){return/^[\s\xa0]*$/.test(t)}var wh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function Ta(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var Eh=K.navigator;if(Eh){var Th=Eh.userAgent;if(Th){Ze=Th;break e}}Ze=""}function dl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fp(t){const e={};for(const n in t)e[n]=t[n];return e}var Ih="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ih.length;i++)n=Ih[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pl(t){return pl[" "](t),t}pl[" "]=Wi;function gT(t){var e=vT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mT=Ye(Ze,"Opera"),Sr=Ye(Ze,"Trident")||Ye(Ze,"MSIE"),pp=Ye(Ze,"Edge"),cc=pp||Sr,gp=Ye(Ze,"Gecko")&&!(Ye(Ze.toLowerCase(),"webkit")&&!Ye(Ze,"Edge"))&&!(Ye(Ze,"Trident")||Ye(Ze,"MSIE"))&&!Ye(Ze,"Edge"),yT=Ye(Ze.toLowerCase(),"webkit")&&!Ye(Ze,"Edge");function mp(){var t=K.document;return t?t.documentMode:void 0}var Gi;e:{var Ia="",ba=function(){var t=Ze;if(gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(pp)return/Edge\/([\d\.]+)/.exec(t);if(Sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yT)return/WebKit\/(\S+)/.exec(t);if(mT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ba&&(Ia=ba?ba[1]:""),Sr){var Sa=mp();if(Sa!=null&&Sa>parseFloat(Ia)){Gi=String(Sa);break e}}Gi=Ia}var vT={};function _T(){return gT(function(){let t=0;const e=wh(String(Gi)).split("."),n=wh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ta(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ta(s[2].length==0,i[2].length==0)||Ta(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var lc;if(K.document&&Sr){var bh=mp();lc=bh||parseInt(Gi,10)||void 0}else lc=void 0;var wT=lc,ET=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Wi,e),K.removeEventListener("test",Wi,e)}catch{}return t}();function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};function bs(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gp){e:{try{pl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bs.Z.h.call(this)}}je(bs,We);var TT={2:"touch",3:"pen",4:"mouse"};bs.prototype.h=function(){bs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),IT=0;function bT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++IT,this.ca=this.fa=!1}function No(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Oo(t){this.src=t,this.g={},this.h=0}Oo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new bT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=up(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(No(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var gl="closure_lm_"+(1e6*Math.random()|0),Aa={};function yp(t,e,n,r,s){if(r&&r.once)return _p(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yp(t,e[i],n,r,s);return null}return n=vl(n),t&&t[Bs]?t.N(e,n,$s(r)?!!r.capture:!!r,s):vp(t,e,n,!1,r,s)}function vp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=$s(s)?!!s.capture:!!s,a=yl(t);if(a||(t[gl]=a=new Oo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ST(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ET||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ep(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ST(){function t(n){return e.call(t.src,t.listener,n)}var e=AT;return t}function _p(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_p(t,e[i],n,r,s);return null}return n=vl(n),t&&t[Bs]?t.O(e,n,$s(r)?!!r.capture:!!r,s):vp(t,e,n,!0,r,s)}function wp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wp(t,e[i],n,r,s);else r=$s(r)?!!r.capture:!!r,n=vl(n),t&&t[Bs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hc(i,n,r,s),-1<n&&(No(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hc(e,n,r,s)),(n=-1<t?e[t]:null)&&ml(n))}function ml(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Bs])uc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ep(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yl(e))?(uc(n,t),n.h==0&&(n.src=null,e[gl]=null)):No(t)}}}function Ep(t){return t in Aa?Aa[t]:Aa[t]="on"+t}function AT(t,e){if(t.ca)t=!0;else{e=new bs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ml(t),t=n.call(r,e)}return t}function yl(t){return t=t[gl],t instanceof Oo?t:null}var Ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function vl(t){return typeof t=="function"?t:(t[Ca]||(t[Ca]=function(e){return t.handleEvent(e)}),t[Ca])}function Le(){wn.call(this),this.i=new Oo(this),this.P=this,this.I=null}je(Le,wn);Le.prototype[Bs]=!0;Le.prototype.removeEventListener=function(t,e,n,r){wp(this,t,e,n,r)};function Ve(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var s=e;e=new We(r,t),dp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fi(o,r,!0,e)&&s}if(o=e.g=t,s=fi(o,r,!0,e)&&s,s=fi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fi(o,r,!1,e)&&s}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)No(n[r]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&uc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var _l=K.JSON.stringify;function CT(){var t=Ip;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RT{constructor(){this.h=this.g=null}add(e,n){const r=Tp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kT,t=>t.reset());class kT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NT(t){K.setTimeout(()=>{throw t},0)}function wl(t,e){fc||OT(),dc||(fc(),dc=!0),Ip.add(t,e)}var fc;function OT(){var t=K.Promise.resolve(void 0);fc=function(){t.then(PT)}}var dc=!1,Ip=new RT;function PT(){for(var t;t=CT();){try{t.h.call(t.g)}catch(n){NT(n)}var e=Tp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dc=!1}function Po(t,e){Le.call(this),this.h=t||1,this.g=e||K,this.j=Fe(this.kb,this),this.l=Date.now()}je(Po,Le);P=Po.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ve(this,"tick"),this.da&&(El(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function El(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Po.Z.M.call(this),El(this),delete this.g};function Tl(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function bp(t){t.g=Tl(()=>{t.g=null,t.i&&(t.i=!1,bp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DT extends wn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(t){wn.call(this),this.h=t,this.g={}}je(Ss,wn);var Sh=[];function Sp(t,e,n,r){Array.isArray(n)||(n&&(Sh[0]=n.toString()),n=Sh);for(var s=0;s<n.length;s++){var i=yp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ap(t){dl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ml(e)},t),t.g={}}Ss.prototype.M=function(){Ss.Z.M.call(this),Ap(this)};Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Do(){this.g=!0}Do.prototype.Aa=function(){this.g=!1};function xT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function LT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UT(t,n)+(r?" "+r:"")})}function MT(t,e){t.info(function(){return"TIMEOUT: "+e})}Do.prototype.info=function(){};function UT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _l(n)}catch{return e}}var Qn={},Ah=null;function xo(){return Ah=Ah||new Le}Qn.Ma="serverreachability";function Cp(t){We.call(this,Qn.Ma,t)}je(Cp,We);function As(t){const e=xo();Ve(e,new Cp(e,t))}Qn.STAT_EVENT="statevent";function Rp(t,e){We.call(this,Qn.STAT_EVENT,t),this.stat=e}je(Rp,We);function et(t){const e=xo();Ve(e,new Rp(e,t))}Qn.Na="timingevent";function kp(t,e){We.call(this,Qn.Na,t),this.size=e}je(kp,We);function js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Lo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Np={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Il(){}Il.prototype.h=null;function Ch(t){return t.h||(t.h=t.i())}function Op(){}var qs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bl(){We.call(this,"d")}je(bl,We);function Sl(){We.call(this,"c")}je(Sl,We);var pc;function Mo(){}je(Mo,Il);Mo.prototype.g=function(){return new XMLHttpRequest};Mo.prototype.i=function(){return{}};pc=new Mo;function Hs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ss(this),this.P=FT,t=cc?125:void 0,this.W=new Po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var FT=45e3,gc={},Ji={};P=Hs.prototype;P.setTimeout=function(t){this.P=t};function mc(t,e,n){t.K=1,t.v=Fo(Gt(e)),t.s=n,t.U=!0,Dp(t,null)}function Dp(t,e){t.F=Date.now(),Ks(t),t.A=Gt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),$p(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Pp,t.g=og(t.l,n?e:null,!t.s),0<t.O&&(t.L=new DT(Fe(t.Ia,t,t.g),t.O)),Sp(t.V,t.g,"readystatechange",t.gb),e=t.H?fp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),As(1),xT(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||cc||this.g&&(this.h.h||this.g.ga()||Oh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?As(3):As(2)),Uo(this);var n=this.g.ba();this.N=n;t:if(xp(this)){var r=Oh(this.g);t="";var s=r.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),fs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,LT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var l=a;break t}}l=null}if(n=l)ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yc(this,n);else{this.i=!1,this.o=3,et(12),On(this),fs(this);break e}}this.U?(Lp(this,u,o),cc&&this.i&&u==3&&(Sp(this.V,this.W,"tick",this.fb),this.W.start())):(ur(this.j,this.m,o,null),yc(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?ng(this.l,this):(this.i=!1,Ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),On(this),fs(this)}}}catch{}finally{}};function xp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Lp(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=VT(t,n),s==Ji){e==4&&(t.o=4,et(14),r=!1),ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==gc){t.o=4,et(15),ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ur(t.j,t.m,s,null),yc(t,s);xp(t)&&s!=Ji&&s!=gc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),xl(e),e.L=!0,et(11))):(ur(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),fs(t))}P.fb=function(){if(this.g){var t=jt(this.g),e=this.g.ga();this.C<e.length&&(Uo(this),Lp(this,t,e),this.i&&t!=4&&Ks(this))}};function VT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ji:(n=Number(e.substring(n,r)),isNaN(n)?gc:(r+=1,r+n>e.length?Ji:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,On(this)};function Ks(t){t.Y=Date.now()+t.P,Mp(t,t.P)}function Mp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=js(Fe(t.eb,t),e)}function Uo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MT(this.j,this.A),this.K!=2&&(As(3),et(17)),On(this),this.o=2,fs(this)):Mp(this,this.Y-t)};function fs(t){t.l.G==0||t.I||ng(t.l,t)}function On(t){Uo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,El(t.W),Ap(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vc(n.i,t))){if(n.I=t.N,!t.J&&vc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Zi(n),Bo(n);else break e;Dl(n),et(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=js(Fe(n.ab,n),6e3));if(1>=qp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&Zi(n),!zi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Ye(m,"spdy")||Ye(m,"quic")||Ye(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Rl(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,Te(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ig(r,r.H?r.la:null,r.W),o.J){Hp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Uo(a),Ks(a)),r.g=o}else eg(r);0<n.l.length&&jo(n)}else l[0]!="stop"&&l[0]!="close"||Pn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Pn(n,7):Pl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}As(4)}catch{}}function $T(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Al(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")hp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ac(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=$T(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function jr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof jr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=jr.prototype;P.R=function(){Cl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return Cl(this),this.g.concat()};function Cl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];$n(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],$n(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}P.get=function(t,e){return $n(this.h,t)?this.h[t]:e};P.set=function(t,e){$n(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Up=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function BT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Bn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Bn){this.g=e!==void 0?e:t.g,Qi(this,t.j),this.s=t.s,Xi(this,t.i),Yi(this,t.m),this.l=t.l,e=t.h;var n=new Cs;n.i=e.i,e.g&&(n.g=new jr(e.g),n.h=e.h),Rh(this,n),this.o=t.o}else t&&(n=String(t).match(Up))?(this.g=!!e,Qi(this,n[1]||"",!0),this.s=ds(n[2]||""),Xi(this,n[3]||"",!0),Yi(this,n[4]),this.l=ds(n[5]||"",!0),Rh(this,n[6]||"",!0),this.o=ds(n[7]||"")):(this.g=!!e,this.h=new Cs(null,this.g))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ss(e,kh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ss(e,kh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ss(n,n.charAt(0)=="/"?WT:KT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ss(n,GT)),t.join("")};function Gt(t){return new Bn(t)}function Qi(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xi(t,e,n){t.i=n?ds(e,!0):e}function Yi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rh(t,e,n){e instanceof Cs?(t.h=e,JT(t.h,t.g)):(n||(e=ss(e,zT)),t.h=new Cs(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Fo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jT(t){return t instanceof Bn?Gt(t):new Bn(t,void 0)}function qT(t,e,n,r){var s=new Bn(null,void 0);return t&&Qi(s,t),e&&Xi(s,e),n&&Yi(s,n),r&&(s.l=r),s}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kh=/[#\/\?@]/g,KT=/[#\?:]/g,WT=/[#\?]/g,zT=/[#\?@]/g,GT=/#/g;function Cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function En(t){t.g||(t.g=new jr,t.h=0,t.i&&BT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Cs.prototype;P.add=function(t,e){En(this),this.i=null,t=qr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Fp(t,e){En(t),e=qr(t,e),$n(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$n(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Cl(t)))}function Vp(t,e){return En(t),e=qr(t,e),$n(t.g.h,e)}P.forEach=function(t,e){En(this),this.g.forEach(function(n,r){hp(n,function(s){t.call(e,s,r,this)},this)},this)};P.T=function(){En(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};P.R=function(t){En(this);var e=[];if(typeof t=="string")Vp(this,t)&&(e=_h(e,this.g.get(qr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_h(e,t[n])}return e};P.set=function(t,e){return En(this),this.i=null,t=qr(this,t),Vp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $p(t,e,n){Fp(t,e),0<n.length&&(t.i=null,t.g.set(qr(t,e),fl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function qr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(En(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Fp(this,r),$p(this,s,n))},t)),t.j=e}var QT=class{constructor(t,e){this.h=t,this.g=e}};function Bp(t){this.l=t||XT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XT=10;function jp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qp(t){return t.h?1:t.g?t.g.size:0}function vc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rl(t,e){t.g?t.g.add(e):t.h=e}function Hp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bp.prototype.cancel=function(){if(this.i=Kp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fl(t.i)}function kl(){}kl.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};kl.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function YT(){this.g=new kl}function ZT(t,e,n){const r=n||"";try{Al(t,function(s,i){let o=s;$s(s)&&(o=_l(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function e0(t,e){const n=new Do;if(K.Image){const r=new Image;r.onload=hi(di,n,r,"TestLoadImage: loaded",!0,e),r.onerror=hi(di,n,r,"TestLoadImage: error",!1,e),r.onabort=hi(di,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=hi(di,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function di(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ws(t){this.l=t.$b||null,this.j=t.ib||!1}je(Ws,Il);Ws.prototype.g=function(){return new Vo(this.l,this.j)};Ws.prototype.i=function(t){return function(){return t}}({});function Vo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Vo,Le);var Nl=0;P=Vo.prototype;P.open=function(t,e){if(this.readyState!=Nl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=Nl};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Wp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zs(this):Rs(this),this.readyState==3&&Wp(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,zs(this))};P.Ta=function(t){this.g&&(this.response=t,zs(this))};P.ha=function(){this.g&&zs(this)};function zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var t0=K.JSON.parse;function ke(t){Le.call(this),this.headers=new jr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zp,this.K=this.L=!1}je(ke,Le);var zp="",n0=/^https?$/i,r0=["POST","PUT"];P=ke.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pc.g(),this.C=this.u?Ch(this.u):Ch(pc),this.g.onreadystatechange=Fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nh(this,i);return}t=n||"";const s=new jr(this.headers);r&&Al(r,function(i,o){s.set(o,i)}),r=pT(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=up(r0,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qp(this),0<this.B&&((this.K=s0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.pa,this)):this.A=Tl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nh(this,i)}};function s0(t){return Sr&&_T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function i0(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof hl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Nh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gp(t),$o(t)}function Gp(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),$o(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$o(this,!0)),ke.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?Jp(this):this.cb())};P.cb=function(){Jp(this)};function Jp(t){if(t.h&&typeof hl!="undefined"&&(!t.C[1]||jt(t)!=4||t.ba()!=2)){if(t.v&&jt(t)==4)Tl(t.Fa,0,t);else if(Ve(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Up)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!n0.test(s?s.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Gp(t)}}finally{$o(t)}}}}function $o(t,e){if(t.g){Qp(t);const n=t.g,r=t.C[0]?Wi:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),t0(e)}};function Oh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case zp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function o0(t){let e="";return dl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=o0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xp(t){this.za=0,this.l=[],this.h=new Do,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yr("baseRetryDelayMs",5e3,t),this.$a=Yr("retryDelaySeedMs",1e4,t),this.Ya=Yr("forwardChannelMaxRetries",2,t),this.ra=Yr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Bp(t&&t.concurrentRequestLimit),this.Ca=new YT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Xp.prototype;P.ma=8;P.G=1;function Pl(t){if(Yp(t),t.G==3){var e=t.V++,n=Gt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),Gs(t,n),e=new Hs(t,t.h,e,void 0),e.K=2,e.v=Fo(Gt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=og(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ks(e)}sg(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Bo(t){t.g&&(xl(t),t.g.cancel(),t.g=null)}function Yp(t){Bo(t),t.u&&(K.clearTimeout(t.u),t.u=null),Zi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ra(t,e){t.l.push(new QT(t.Za++,e)),t.G==3&&jo(t)}function jo(t){jp(t.i)||t.m||(t.m=!0,wl(t.Ha,t),t.C=0)}function a0(t,e){return qp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=js(Fe(t.Ha,t,e),rg(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Hs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=fp(i),dp(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zp(this,s,e),n=Gt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Gs(this,n),this.o&&i&&Ol(n,this.o,i),Rl(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,mc(s,n,null)):mc(s,n,e),this.G=2}}else this.G==3&&(t?Ph(this,t):this.l.length==0||jp(this.i)||Ph(this))};function Ph(t,e){var n;e?n=e.m:n=t.V++;const r=Gt(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),Gs(t,r),t.o&&t.s&&Ol(r,t.o,t.s),n=new Hs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Zp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Rl(t.i,n),mc(n,r,e)}function Gs(t,e){t.j&&Al({},function(n,r){Te(e,r,n)})}function Zp(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Fe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{ZT(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function eg(t){t.g||t.u||(t.Y=1,wl(t.Ga,t),t.A=0)}function Dl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=js(Fe(t.Ga,t),rg(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,tg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=js(Fe(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),Bo(this),tg(this))};function xl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function tg(t){t.g=new Hs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Gt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),Gs(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Ol(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Fo(Gt(e)),n.s=null,n.U=!0,Dp(n,t)}P.ab=function(){this.v!=null&&(this.v=null,Bo(this),Dl(this),et(19))};function Zi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function ng(t,e){var n=null;if(t.g==e){Zi(t),xl(t),t.g=null;var r=2}else if(vc(t.i,e))n=e.D,Hp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=xo(),Ve(r,new kp(r,n,e,s)),jo(t)}else eg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&a0(t,e)||r==2&&Dl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function rg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Fe(t.jb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Qi(n,"https"),Fo(n)),e0(n.toString(),r)}else et(2);t.G=0,t.j&&t.j.va(e),sg(t),Yp(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function sg(t){t.G=0,t.I=-1,t.j&&((Kp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,fl(t.l),t.l.length=0),t.j.ua())}function ig(t,e,n){let r=jT(n);if(r.i!="")e&&Xi(r,e+"."+r.i),Yi(r,r.m);else{const s=K.location;r=qT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&dl(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),Gs(t,r),r}function og(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new Ws({ib:!0})):new ke(t.qa),e.L=t.H,e}function ag(){}P=ag.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function eo(){if(Sr&&!(10<=Number(wT)))throw Error("Environmental error: no available transport.")}eo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Le.call(this),this.g=new Xp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hr(this)}je(pt,Le);pt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),wl(Fe(t.hb,t,e))),et(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ig(t,null,t.W),jo(t)};pt.prototype.close=function(){Pl(this.g)};pt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ra(this.g,e)}else this.v?(e={},e.__data__=_l(t),Ra(this.g,e)):Ra(this.g,t)};pt.prototype.M=function(){this.g.j=null,delete this.j,Pl(this.g),delete this.g,pt.Z.M.call(this)};function cg(t){bl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(cg,bl);function lg(){Sl.call(this),this.status=1}je(lg,Sl);function Hr(t){this.g=t}je(Hr,ag);Hr.prototype.xa=function(){Ve(this.g,"a")};Hr.prototype.wa=function(t){Ve(this.g,new cg(t))};Hr.prototype.va=function(t){Ve(this.g,new lg(t))};Hr.prototype.ua=function(){Ve(this.g,"b")};eo.prototype.createWebChannel=eo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Lo.NO_ERROR=0;Lo.TIMEOUT=8;Lo.HTTP_ERROR=6;Np.COMPLETE="complete";Op.EventType=qs;qs.OPEN="a";qs.CLOSE="b";qs.ERROR="c";qs.MESSAGE="d";Le.prototype.listen=Le.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var c0=function(){return new eo},l0=function(){return xo()},ka=Lo,u0=Np,h0=Qn,Dh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},f0=Ws,pi=Op,d0=ke;const xh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new cl("@firebase/firestore");function Lh(){return jn.logLevel}function F(t,...e){if(jn.logLevel<=ie.DEBUG){const n=e.map(Ll);jn.debug(`Firestore (${Kr}): ${t}`,...n)}}function mn(t,...e){if(jn.logLevel<=ie.ERROR){const n=e.map(Ll);jn.error(`Firestore (${Kr}): ${t}`,...n)}}function Mh(t,...e){if(jn.logLevel<=ie.WARN){const n=e.map(Ll);jn.warn(`Firestore (${Kr}): ${t}`,...n)}}function Ll(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function ye(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class m0{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new p0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new nt(e)}}class y0{constructor(e,n,r){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class v0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new y0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(s))};const r=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),new _0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ml.I=-1;class ug{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=E0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new ft(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ks{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const T0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ks{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return T0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.fields=e,e.sort(rt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const I0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=I0.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dg(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?dg(e):e}function Os(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return t==null}function to(t){return t===0&&1/t==-1/0}function b0(t){return typeof t=="number"&&Number.isInteger(t)&&!to(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ie.fromString(e))}static fromName(e){return new W(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:10:G()}function Ft(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Os(t).isEqual(Os(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=yn(r.timestampValue),o=yn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Cr(r.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Re(r.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Re(r.integerValue)===Re(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Re(r.doubleValue),o=Re(s.doubleValue);return i===o?to(i)===to(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Uh(i)!==Uh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ft(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Ps(t,e){return(t.values||[]).find(n=>Ft(n,e))!==void 0}function Rr(t,e){if(t===e)return 0;const n=qn(t),r=qn(e);if(n!==r)return ae(n,r);switch(n){case 0:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Re(s.integerValue||s.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fh(t.timestampValue,e.timestampValue);case 4:return Fh(Os(t),Os(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Cr(s),a=Cr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ae(o[c],a[c]);if(l!==0)return l}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ae(Re(s.latitude),Re(i.latitude));return o!==0?o:ae(Re(s.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Rr(o[c],a[c]);if(l)return l}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ae(a[u],l[u]);if(h!==0)return h;const f=Rr(o[a[u]],c[l[u]]);if(f!==0)return f}return ae(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Fh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=yn(t),r=yn(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function Ul(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=yn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=_c(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${_c(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function wc(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function Vh(t){return!!t&&"nullValue"in t}function $h(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ii(t){return!!t&&"mapValue"in t}function ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ps(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ii(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ps(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ii(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ii(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(ps(this.value))}}function pg(t){const e=[];return Xn(t.fields,(n,r)=>{const s=new rt([n]);if(Ii(r)){const i=pg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ns(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Ke(e,0,se.min(),ut.empty(),0)}static newFoundDocument(e,n,r){return new Ke(e,1,n,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,ut.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function Bh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new S0(t,e,n,r,s,i,o)}function Vl(t){const e=J(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>C0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=no(e.startAt)),e.endAt&&(n+="|ub:",n+=no(e.endAt)),e.R=n}return e.R}function A0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ul(r.value)}`;var r}).join(", ")}]`),Wr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+no(t.startAt)),t.endAt&&(e+=", endAt: "+no(t.endAt)),`Target(${e})`}function $l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!L0(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ft(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qh(t.startAt,e.startAt)&&qh(t.endAt,e.endAt)}function Ec(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class it extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new R0(e,n,r):n==="array-contains"?new O0(e,r):n==="in"?new P0(e,r):n==="not-in"?new D0(e,r):n==="array-contains-any"?new x0(e,r):new it(e,n,r)}static P(e,n,r){return n==="in"?new k0(e,r):new N0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Rr(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.v(Rr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function C0(t){return t.field.canonicalString()+t.op.toString()+Ul(t.value)}class R0 extends it{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.v(n)}}class k0 extends it{constructor(e,n){super(e,"in",n),this.keys=gg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N0 extends it{constructor(e,n){super(e,"not-in",n),this.keys=gg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class O0 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Ps(n.arrayValue,this.value)}}class P0 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ps(this.value.arrayValue,n)}}class D0 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ps(this.value.arrayValue,n)}}class x0 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}class Tc{constructor(e,n){this.position=e,this.before=n}}function no(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ul(e)).join(",")}`}class gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function L0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Rr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function qh(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ft(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function M0(t,e,n,r,s,i,o,a){return new qo(t,e,n,r,s,i,o,a)}function Ho(t){return new qo(t)}function bi(t){return!Wr(t.limit)&&t.limitType==="F"}function ro(t){return!Wr(t.limit)&&t.limitType==="L"}function U0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function F0(t){for(const e of t.filters)if(e.V())return e.field;return null}function V0(t){return t.collectionGroup!==null}function Ds(t){const e=J(t);if(e.S===null){e.S=[];const n=F0(e),r=U0(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new gs(n)),e.S.push(new gs(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new gs(rt.keyField(),i))}}}return e.S}function Hn(t){const e=J(t);if(!e.D)if(e.limitType==="F")e.D=Bh(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ds(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new gs(i.field,o))}const r=e.endAt?new Tc(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Tc(e.startAt.position,!e.startAt.before):null;e.D=Bh(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.D}function $0(t,e,n){return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ko(t,e){return $l(Hn(t),Hn(e))&&t.limitType===e.limitType}function mg(t){return`${Vl(Hn(t))}|lt:${t.limitType}`}function Ic(t){return`Query(target=${A0(Hn(t))}; limitType=${t.limitType})`}function Wo(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!jh(n.startAt,Ds(n),r)||n.endAt&&jh(n.endAt,Ds(n),r))}(t,e)}function yg(t){return(e,n)=>{let r=!1;for(const s of Ds(t)){const i=B0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function B0(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Rr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function _g(t){return{integerValue:""+t}}function j0(t,e){return b0(e)?_g(e):vg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function q0(t,e,n){return t instanceof so?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof kr?Eg(t,e):t instanceof xs?Tg(t,e):function(r,s){const i=wg(r,s),o=Hh(i)+Hh(r.N);return wc(i)&&wc(r.N)?_g(o):vg(r.k,o)}(t,e)}function H0(t,e,n){return t instanceof kr?Eg(t,e):t instanceof xs?Tg(t,e):n}function wg(t,e){return t instanceof io?wc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class so extends zo{}class kr extends zo{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=Ig(e);for(const r of t.elements)n.some(s=>Ft(s,r))||n.push(r);return{arrayValue:{values:n}}}class xs extends zo{constructor(e){super(),this.elements=e}}function Tg(t,e){let n=Ig(e);for(const r of t.elements)n=n.filter(s=>!Ft(s,r));return{arrayValue:{values:n}}}class io extends zo{constructor(e,n){super(),this.k=e,this.N=n}}function Hh(t){return Re(t.integerValue||t.doubleValue)}function Ig(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.field=e,this.transform=n}}function W0(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof kr&&r instanceof kr||n instanceof xs&&r instanceof xs?Ar(n.elements,r.elements,Ft):n instanceof io&&r instanceof io?Ft(n.N,r.N):n instanceof so&&r instanceof so}(t.transform,e.transform)}class z0{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Si(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Go{}function G0(t,e,n){t instanceof Jo?function(r,s,i){const o=r.value.clone(),a=zh(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(r,s,i){if(!Si(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=zh(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(bg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function bc(t,e,n){t instanceof Jo?function(r,s,i){if(!Si(r.precondition,s))return;const o=r.value.clone(),a=Gh(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Wh(s),o).setHasLocalMutations()}(t,e,n):t instanceof Yn?function(r,s,i){if(!Si(r.precondition,s))return;const o=Gh(r.fieldTransforms,i,s),a=s.data;a.setAll(bg(r)),a.setAll(o),s.convertToFoundDocument(Wh(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Si(r.precondition,s)&&s.convertToNoDocument(se.min())}(t,e)}function J0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=wg(r.transform,s||null);i!=null&&(n==null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function Kh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ar(n,r,(s,i)=>W0(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Wh(t){return t.isFoundDocument()?t.version:se.min()}class Jo extends Go{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Yn extends Go{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function bg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zh(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,H0(o,a,n[s]))}return r}function Gh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,q0(i,o,e))}return r}class Sg extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Q0 extends Go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function Y0(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ag(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gi(this.root,e,this.comparator,!0)}}class gi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Me.RED,this.left=s!=null?s:Me.EMPTY,this.right=i!=null?i:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jh(this.data.getIterator())}getIteratorFrom(e){return new Jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Ge(W.comparator);function Kn(){return Z0}const eI=new Ge(W.comparator);function Sc(){return eI}const tI=new Ge(W.comparator);function nI(){return tI}const rI=new $e(W.comparator);function we(...t){let e=rI;for(const n of t)e=e.add(n);return e}const sI=new $e(ae);function Cg(){return sI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,n)),new Qo(se.min(),r,Cg(),Kn(),we())}}class Js{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Js(Be.EMPTY_BYTE_STRING,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r,s){this.$=e,this.removedTargetIds=n,this.key=r,this.O=s}}class Rg{constructor(e,n){this.targetId=e,this.M=n}}class kg{constructor(e,n,r=Be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qh{constructor(){this.F=0,this.L=Yh(),this.B=Be.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=we(),n=we(),r=we();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Js(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Yh()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class iI{constructor(e){this.et=e,this.nt=new Map,this.st=Kn(),this.it=Xh(),this.rt=new $e(ae)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,r=e.M.count,s=this.wt(n);if(s){const i=s.target;if(Ec(i))if(r===0){const o=new W(i.path);this.at(n,o,Ke.newNoDocument(o,se.min()))}else ye(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ec(a.target)){const c=new W(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,Ke.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let r=we();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Qo(e,n,this.rt,this.st,r);return this.st=Kn(),this.it=Xh(),this.rt=new $e(ae),s}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Qh,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new $e(ae),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Qh),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Xh(){return new Ge(W.comparator)}function Yh(){return new Ge(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cI{constructor(e,n){this.databaseId=e,this.C=n}}function oo(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ng(t,e){return t.C?e.toBase64():e.toUint8Array()}function lI(t,e){return oo(t,e.toTimestamp())}function Kt(t){return ye(!!t),se.fromTimestamp(function(e){const n=yn(e);return new ft(n.seconds,n.nanos)}(t))}function Bl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Og(t){const e=Ie.fromString(t);return ye(xg(e)),e}function Ac(t,e){return Bl(t.databaseId,e.path)}function Na(t,e){const n=Og(e);if(n.get(1)!==t.databaseId.projectId)throw new j(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Pg(n))}function Cc(t,e){return Bl(t.databaseId,e)}function uI(t){const e=Og(t);return e.length===4?Ie.emptyPath():Pg(e)}function Rc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pg(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zh(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function hI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.C?(ye(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Ag(c.code);return new j(l,c.message||"")}(o);n=new kg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Na(t,r.document.name),i=Kt(r.document.updateTime),o=new ut({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ai(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Na(t,r.document),i=r.readTime?Kt(r.readTime):se.min(),o=Ke.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Na(t,r.document),i=r.removedTargetIds||[];n=new Ai([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new X0(s),o=r.targetId;n=new Rg(o,i)}}return n}function fI(t,e){let n;if(e instanceof Jo)n={update:Zh(t,e.key,e.value)};else if(e instanceof Sg)n={delete:Ac(t,e.key)};else if(e instanceof Yn)n={update:Zh(t,e.key,e.data),updateMask:TI(e.fieldMask)};else{if(!(e instanceof Q0))return G();n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof so)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof io)return{fieldPath:i.field.canonicalString(),increment:o.N};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:lI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function dI(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Kt(r.updateTime):Kt(s);return i.isEqual(se.min())&&(i=Kt(s)),new z0(i,r.transformResults||[])}(n,e))):[]}function pI(t,e){return{documents:[Cc(t,e.path)]}}function gI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if($h(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NAN"}};if(Vh(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if($h(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NAN"}};if(Vh(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(u.field),op:_I(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:or(l.field),direction:vI(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||Wr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=ef(e.startAt)),e.endAt&&(n.structuredQuery.endAt=ef(e.endAt)),n}function mI(t){let e=uI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Dg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new gs(hr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=tf(n.startAt));let l=null;return n.endAt&&(l=tf(n.endAt)),M0(e,s,o,i,a,"F",c,l)}function yI(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dg(t){return t?t.unaryFilter!==void 0?[EI(t)]:t.fieldFilter!==void 0?[wI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dg(e)).reduce((e,n)=>e.concat(n)):G():[]}function ef(t){return{before:t.before,values:t.position}}function tf(t){const e=!!t.before,n=t.values||[];return new Tc(n,e)}function vI(t){return oI[t]}function _I(t){return aI[t]}function or(t){return{fieldPath:t.canonicalString()}}function hr(t){return rt.fromServerFormat(t.fieldPath)}function wI(t){return it.create(hr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function EI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hr(t.unaryFilter.field);return it.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hr(t.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hr(t.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hr(t.unaryFilter.field);return it.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function TI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const II="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&G0(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&bc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&bc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(se.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,r)=>Kh(n,r))&&Ar(this.baseMutations,e.baseMutations,(n,r)=>Kh(n,r))}}class jl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=nI();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jl(e,n,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=se.min(),o=se.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.Gt=e}}function CI(t){const e=mI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$0(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.zt=new kI}addToCollectionParentIndex(e,n){return this.zt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.zt.getEntries(n))}}class kI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Nr(0)}static re(){return new Nr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==II)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Xn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hg(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:se.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ke.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Pn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):V0(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new W(n)).next(r=>{let s=Sc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Dn(e,n,r){const s=n.collectionGroup;let i=Sc();return this.Jt.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new qo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Cn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Cn(e,n,r){let s,i;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=Ke.newInvalidDocument(u),s=s.insert(u,h)),bc(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Wo(n,a)||(s=s.remove(o))}),s))}Nn(e,n,r){let s=we();for(const o of n)for(const a of o.mutations)a instanceof Yn&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.Je.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=s}static $n(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ql(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(se.min())?this.Fn(e,n):this.Mn.vn(e,s).next(i=>{const o=this.Ln(n,i);return(bi(n)||ro(n))&&this.Bn(n.limitType,o,s,r)?this.Fn(e,n):(Lh()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ic(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new $e(yg(e));return n.forEach((s,i)=>{Wo(e,i)&&(r=r.add(i))}),r}Bn(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Lh()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ic(n)),this.Mn.getDocumentsMatchingQuery(e,n,se.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new Ge(ae),this.Kn=new Ys(i=>Vl(i),$l),this.jn=se.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Lg(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function DI(t,e,n,r){return new PI(t,e,n,r)}async function Mg(t,e){const n=J(t);let r=n.An,s=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Lg(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=we();for(const f of a){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of c){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return s.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=r,n.Wn=s,n.Un.On(n.Wn),i}function xI(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);ye(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&l.addEntry(m,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,s))})}function Ug(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function LI(t,e){const n=J(t),r=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(u,f),function(p,m,b){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.He.updateTargetData(i,f))});let c=Kn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(MI(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(se.min())){const l=n.He.getLastRemoteSnapshotVersion(i).next(u=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=s,i))}function MI(t,e,n,r,s){let i=we();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Kn();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function UI(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function FI(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.He.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.He.allocateTargetId(r).next(o=>(s=new Mn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qn.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function kc(t,e,n){const r=J(t),s=r.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qs(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(s.target)}function nf(t,e,n){const r=J(t);let s=se.min(),i=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Kn.get(l);return h!==void 0?O.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(r,o,Hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:we())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return O.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Kt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:CI(r.bundledQuery),readTime:Kt(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.ts=new $e(Oe.es),this.ns=new $e(Oe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Oe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new W(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.ns.forEachInRange([r,s],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new W(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=we();return this.ns.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return W.comparator(e.key,n.key)||ae(e.fs,n.fs)}static ss(e,n){return ae(e.fs,n.fs)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new $e(Oe.es)}checkEmpty(e){return O.resolve(this.An.length===0)}addMutationBatch(e,n,r,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new SI(i,n,r,s);this.An.push(o);for(const a of s)this.ws=this.ws.add(new Oe(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.gs(r),i=s<0?0:s;return O.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return O.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([r,s],o=>{const a=this._s(o.fs);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(ae);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{r=r.add(a.fs)})}),O.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new W(i),0);let a=new $e(ae);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.fs)),!0)},o),O.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return O.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Oe(n,0),s=this.ws.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,O.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ge(W.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ke.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=Kn();const i=new W(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Wo(n,c)&&(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}Es(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jI(this)}getSize(e){return O.resolve(this.size)}}class jI extends NI{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(r))):this.De.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.persistence=e,this.Is=new Ys(n=>Vl(n),$l),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.As=0,this.Rs=new Hl,this.targetCount=0,this.bs=Nr.ie()}forEachTarget(e,n){return this.Is.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),O.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Nr(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ae(n),O.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.Ps={},this.Be=new Ml(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new qI(this),this.Jt=new RI,this.Je=function(r,s){return new BI(r,s)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new AI(n),this.Ye=new VI(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new $I(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new KI(this.Be.next());return this.referenceDelegate.Vs(),r(s).next(i=>this.referenceDelegate.Ss(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ds(e,n){return O.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class KI extends bI{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.Cs=new Hl,this.Ns=null}static ks(e){return new Kl(e)}get xs(){if(this.Ns)return this.Ns;throw G()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=W.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return O.or([()=>O.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class rf{constructor(){this.activeTargetIds=Cg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WI{constructor(){this.pi=new rf,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,s,i){const o=this.Ui(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.qi(a,s,i),this.Ki(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Mh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,s,i){return this.Bi(e,n,r,s,i)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ui(e,n){const r=GI[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,s){return new Promise((i,o)=>{const a=new d0;a.listenOnce(u0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ka.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ka.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new j(I.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(m)>=0?m:I.UNKNOWN}(h.status);o(new j(f,h.message))}else o(new j(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=c0(),o=l0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new f0({})),this.qi(a.initMessageHeaders,n,r),ip()||ap()||fE()||cp()||dE()||op()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new JI({Vi:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Si:()=>l.close()}),p=(m,b,_)=>{m.listen(b,C=>{try{_(C)}catch(D){setTimeout(()=>{throw D},0)}})};return p(l,pi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),p(l,pi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.Oi())}),p(l,pi.EventType.ERROR,m=>{h||(h=!0,Mh("Connection","WebChannel transport errored:",m),f.Oi(new j(I.UNAVAILABLE,"The operation could not be completed")))}),p(l,pi.EventType.MESSAGE,m=>{var b;if(!h){const _=m.data[0];ye(!!_);const C=_,D=C.error||((b=C[0])===null||b===void 0?void 0:b.error);if(D){F("Connection","WebChannel received error:",D);const V=D.status;let M=function(ce){const Q=Ce[ce];if(Q!==void 0)return Ag(Q)}(V),ne=D.message;M===void 0&&(M=I.INTERNAL,ne="Unknown error status: "+V+" with message "+D.message),h=!0,f.Oi(new j(M,ne)),l.close()}else F("Connection","WebChannel received:",_),f.Mi(_)}}),p(o,h0.STAT_EVENT,m=>{m.stat===Dh.PROXY?F("Connection","Detected buffering proxy"):m.stat===Dh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Oa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new cI(t,!0)}class Fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r,s,i,o,a,c){this.Me=e,this.nr=r,this.sr=s,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Fg(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.rr===n&&this.Ir(r,s)},r=>{e(()=>{const s=new j(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(s)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{r(()=>this.Ar(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XI extends Vg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=hI(this.k,e),r=function(s){if(!("targetChange"in s))return se.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?se.min():i.readTime?Kt(i.readTime):se.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Rc(this.k),n.addTarget=function(s,i){let o;const a=i.target;return o=Ec(a)?{documents:pI(s,a)}:{query:gI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ng(s,i.resumeToken):i.snapshotVersion.compareTo(se.min())>0&&(o.readTime=oo(s,i.snapshotVersion.toTimestamp())),o}(this.k,e);const r=yI(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Rc(this.k),n.removeTarget=e,this.gr(n)}}class YI extends Vg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=dI(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.Cr(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Rc(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fI(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=s,this.$r=!1}Or(){if(this.$r)throw new j(I.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.Bi(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(I.UNKNOWN,s.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.ji(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(I.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class eb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(mn(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Zn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.Gr.add(4),await Zs(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Yo(c)}(this))})}),this.Jr=new eb(r,s)}}async function Yo(t){if(Zn(t))for(const e of t.zr)await e(!0)}async function Zs(t){for(const e of t.zr)await e(!1)}function $g(t,e){const n=J(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Gl(n)?zl(n):zr(n).lr()&&Wl(n,e))}function Bg(t,e){const n=J(t),r=zr(n);n.Wr.delete(e),r.lr()&&jg(n,e),n.Wr.size===0&&(r.lr()?r._r():Zn(n)&&n.Jr.set("Unknown"))}function Wl(t,e){t.Yr.X(e.targetId),zr(t).Pr(e)}function jg(t,e){t.Yr.X(e),zr(t).vr(e)}function zl(t){t.Yr=new iI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),zr(t).start(),t.Jr.Br()}function Gl(t){return Zn(t)&&!zr(t).hr()&&t.Wr.size>0}function Zn(t){return J(t).Gr.size===0}function qg(t){t.Yr=void 0}async function nb(t){t.Wr.forEach((e,n)=>{Wl(t,e)})}async function rb(t,e){qg(t),Gl(t)?(t.Jr.Kr(e),zl(t)):t.Jr.set("Unknown")}async function sb(t,e,n){if(t.Jr.set("Online"),e instanceof kg&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ao(t,r)}else if(e instanceof Ai?t.Yr.ot(e):e instanceof Rg?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(se.min()))try{const r=await Ug(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Wr.get(c);l&&s.Wr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Wr.get(a);if(!c)return;s.Wr.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),jg(s,a);const l=new Mn(c.target,a,1,c.sequenceNumber);Wl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await ao(t,r)}}async function ao(t,e,n){if(!Qs(e))throw e;t.Gr.add(1),await Zs(t),t.Jr.set("Offline"),n||(n=()=>Ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Yo(t)})}function Hg(t,e){return e().catch(n=>ao(t,n,e))}async function Zo(t){const e=J(t),n=vn(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;ib(e);)try{const s=await UI(e.localStore,r);if(s===null){e.Qr.length===0&&n._r();break}r=s.batchId,ob(e,s)}catch(s){await ao(e,s)}Kg(e)&&Wg(e)}function ib(t){return Zn(t)&&t.Qr.length<10}function ob(t,e){t.Qr.push(e);const n=vn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Kg(t){return Zn(t)&&!vn(t).hr()&&t.Qr.length>0}function Wg(t){vn(t).start()}async function ab(t){vn(t).kr()}async function cb(t){const e=vn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function lb(t,e,n){const r=t.Qr.shift(),s=jl.from(r,e,n);await Hg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zo(t)}async function ub(t,e){e&&vn(t).Sr&&await async function(n,r){if(s=r.code,Y0(s)&&s!==I.ABORTED){const i=n.Qr.shift();vn(n).wr(),await Hg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Zo(n)}var s}(t,e),Kg(t)&&Wg(t)}async function of(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Zn(n);n.Gr.add(3),await Zs(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Yo(n)}async function hb(t,e){const n=J(t);e?(n.Gr.delete(2),await Yo(n)):e||(n.Gr.add(2),await Zs(n),n.Jr.set("Unknown"))}function zr(t){return t.Xr||(t.Xr=function(e,n,r){const s=J(e);return s.Or(),new XI(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:nb.bind(null,t),Ni:rb.bind(null,t),br:sb.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Gl(t)?zl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),qg(t))})),t.Xr}function vn(t){return t.Zr||(t.Zr=function(e,n,r){const s=J(e);return s.Or(),new YI(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:ab.bind(null,t),Ni:ub.bind(null,t),Nr:cb.bind(null,t),Cr:lb.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Zo(t)):(await t.Zr.stop(),t.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Qs(t))return new j(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Sc(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.eo=new Ge(W.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):G():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Or{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Or(e,n,yr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.so=void 0,this.listeners=[]}}class db{constructor(){this.queries=new Ys(e=>mg(e),Ko),this.onlineState="Unknown",this.io=new Set}}async function zg(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new fb),s)try{i.so=await n.onListen(r)}catch(o){const a=Ql(o,`Initialization of query '${Ic(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Xl(n)}async function Gg(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pb(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(s)&&(r=!0);o.so=s}}r&&Xl(n)}function gb(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Xl(t){t.io.forEach(e=>{e.next()})}class Jg{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.key=e}}class Xg{constructor(e){this.key=e}}class mb{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=we(),this.mutatedKeys=we(),this.Ao=yg(e),this.Ro=new yr(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new af,s=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=bi(this.query)&&s.size===this.query.limit?s.last():null,l=ro(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Wo(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?m!==b&&(r.track({type:3,doc:p}),_=!0):this.Vo(f,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.Ao(p,c)>0||l&&this.Ao(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),bi(this.query)||ro(this.query))for(;o.size>this.query.limit;){const u=bi(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ro:o,vo:r,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new Or(this.query,e.Ro,s,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new af,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=we(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Xg(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Qg(r))}),n}ko(e){this.To=e.zn,this.Io=we();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Or.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class yb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vb{constructor(e){this.key=e,this.$o=!1}}class _b{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Ys(a=>mg(a),Ko),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ge(W.comparator),this.Uo=new Map,this.qo=new Hl,this.Ko={},this.jo=new Map,this.Qo=Nr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function wb(t,e){const n=Nb(t);let r,s;const i=n.Mo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await FI(n.localStore,Hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Eb(n,e,r,a==="current"),n.isPrimaryClient&&$g(n.remoteStore,o)}return s}async function Eb(t,e,n,r){t.Go=(u,h,f)=>async function(p,m,b,_){let C=m.view.Po(b);C.Bn&&(C=await nf(p.localStore,m.query,!1).then(({documents:M})=>m.view.Po(M,C)));const D=_&&_.targetChanges.get(m.targetId),V=m.view.applyChanges(C,p.isPrimaryClient,D);return lf(p,m.targetId,V.Co),V.snapshot}(t,u,h,f);const s=await nf(t.localStore,e,!0),i=new mb(e,s.zn),o=i.Po(s.documents),a=Js.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);lf(t,n,c.Co);const l=new yb(e,n,i);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Tb(t,e){const n=J(t),r=n.Mo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!Ko(i,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Bg(n.remoteStore,r.targetId),Nc(n,r.targetId)}).catch(Xs)):(Nc(n,r.targetId),await kc(n.localStore,r.targetId,!0))}async function Ib(t,e,n){const r=Ob(t);try{const s=await function(i,o){const a=J(i),c=ft.now(),l=o.reduce((h,f)=>h.add(f.key),we());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const p=[];for(const m of o){const b=J0(m,u.get(m.key));b!=null&&p.push(new Yn(m.key,b,pg(b.value.mapValue),dn.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new Ge(ae)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(r,s.batchId,n),await ei(r,s.changes),await Zo(r.remoteStore)}catch(s){const i=Ql(s,"Failed to persist write");n.reject(i)}}async function Yg(t,e){const n=J(t);try{const r=await LI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Uo.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.$o=!0:s.modifiedDocuments.size>0?ye(o.$o):s.removedDocuments.size>0&&(ye(o.$o),o.$o=!1))}),await ei(n,r,e)}catch(r){await Xs(r)}}function cf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Mo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&Xl(a)}(r.eventManager,e),s.length&&r.Oo.br(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bb(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Uo.get(e),i=s&&s.key;if(i){let o=new Ge(W.comparator);o=o.insert(i,Ke.newNoDocument(i,se.min()));const a=we().add(i),c=new Qo(se.min(),new Map,new $e(ae),o,a);await Yg(r,c),r.Bo=r.Bo.remove(i),r.Uo.delete(e),Yl(r)}else await kc(r.localStore,e,!1).then(()=>Nc(r,e,n)).catch(Xs)}async function Sb(t,e){const n=J(t),r=e.batch.batchId;try{const s=await xI(n.localStore,e);em(n,r,null),Zg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ei(n,s)}catch(s){await Xs(s)}}async function Ab(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(ye(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(r.localStore,e);em(r,e,n),Zg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ei(r,s)}catch(s){await Xs(s)}}function Zg(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function em(t,e,n){const r=J(t);let s=r.Ko[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ko[r.currentUser.toKey()]=s}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||tm(t,r)})}function tm(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Bg(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Yl(t))}function lf(t,e,n){for(const r of n)r instanceof Qg?(t.qo.addReference(r.key,e),Cb(t,r)):r instanceof Xg?(F("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||tm(t,r.key)):G()}function Cb(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Yl(t))}function Yl(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new W(Ie.fromString(e)),r=t.Qo.next();t.Uo.set(r,new vb(n)),t.Bo=t.Bo.insert(n,r),$g(t.remoteStore,new Mn(Hn(Ho(n.path)),r,2,Ml.I))}}async function ei(t,e,n){const r=J(t),s=[],i=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=ql.$n(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Oo.br(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Qs(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.qn=l.qn.insert(h,m)}}}(r.localStore,i))}async function Rb(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Mg(n.localStore,e);n.currentUser=e,function(s,i){s.jo.forEach(o=>{o.forEach(a=>{a.reject(new j(I.CANCELLED,i))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(n,r.Gn)}}function kb(t,e){const n=J(t),r=n.Uo.get(e);if(r&&r.$o)return we().add(r.key);{let s=we();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Mo.get(o);s=s.unionWith(a.view.bo)}return s}}function Nb(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bb.bind(null,e),e.Oo.br=pb.bind(null,e.eventManager),e.Oo.zo=gb.bind(null,e.eventManager),e}function Ob(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ab.bind(null,e),e}class Pb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return DI(this.persistence,new OI,e.initialUser,this.k)}Yo(e){return new HI(Kl.ks,this.k)}Jo(e){return new WI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Db{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rb.bind(null,this.syncEngine),await hb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new db}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new QI(s));var s;return function(i,o,a,c){return new ZI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>cf(this.syncEngine,a,0),o=sf.Pt()?new sf:new zI,new tb(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new _b(r,s,i,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Zs(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=ug.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ql(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lb(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Mb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ub(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>of(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>of(e.remoteStore,i)),t.onlineComponents=e}async function Ub(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Lb(t,new Pb)),t.offlineComponents}async function rm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Mb(t,new Db)),t.onlineComponents}function Fb(t){return rm(t).then(e=>e.syncEngine)}async function Oc(t){const e=await rm(t),n=e.eventManager;return n.onListen=wb.bind(null,e.syncEngine),n.onUnlisten=Tb.bind(null,e.syncEngine),n}function Vb(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new nm({next:h=>{i.enqueueAndForget(()=>Gg(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new j(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new j(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Jg(Ho(o.path),l,{includeMetadataChanges:!0,wo:!0});return zg(s,u)}(await Oc(t),t.asyncQueue,e,n,r)),r.promise}class $b{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e,n){if(!n)throw new j(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bb(t,e,n,r){if(e===!0&&r===!0)throw new j(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hf(t){if(!W.isDocumentKey(t))throw new j(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(W.isDocumentKey(t))throw new j(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new j(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1,e instanceof Ls?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new j(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(s.options.projectId)}(e))}get app(){if(!this._app)throw new j(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new g0;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new v0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=uf.get(e);n&&(F("ComponentProvider","Removing Datastore"),uf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class ea{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ea(this.firestore,e,this._query)}}class pn extends ea{constructor(e,n,r){super(e,n,Ho(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new W(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function bR(t,e,...n){if(t=be(t),sm("collection","path",e),t instanceof eu){const r=Ie.fromString(e,...n);return ff(r),new pn(t,null,r)}{if(!(t instanceof ot||t instanceof pn))throw new j(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ff(r),new pn(t.firestore,null,r)}}function jb(t,e,...n){if(t=be(t),arguments.length===1&&(e=ug.A()),sm("doc","path",e),t instanceof eu){const r=Ie.fromString(e,...n);return hf(r),new ot(t,null,new W(r))}{if(!(t instanceof ot||t instanceof pn))throw new j(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return hf(r),new ot(t.firestore,t instanceof pn?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Fg(this,"async_queue_retry"),this.bc=()=>{const n=Oa();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new fn;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Qs(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const s=Jl.createAndSchedule(this,e,n,r,i=>this.Sc(i));return this.Tc.push(s),s}Pc(){this.Ec&&G()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function pf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Wn extends eu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new qb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||im(this),this._firestoreClient.terminate()}}function SR(t=ul()){return ko(t,"firestore").getImmediate()}function tu(t){return t._firestoreClient||im(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function im(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new $b(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xb(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pr(Be.fromBase64String(e))}catch(n){throw new j(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pr(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/^__.*__$/;class Kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class om{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function am(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ra{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new ra(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.Lc(e),s}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.xc(),s}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return co(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(am(this.$c)&&Hb.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class Wb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Xo(e)}Qc(e,n,r,s=!1){return new ra({$c:e,methodName:n,jc:r,path:rt.emptyPath(),Fc:!1,Kc:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function cm(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new Wb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zb(t,e,n,r,s,i={}){const o=t.Qc(i.merge||i.mergeFields?2:0,e,n,s);ru("Data must be an object, but it was:",o,r);const a=lm(r,o);let c,l;if(i.merge)c=new Ns(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Pc(e,h,n);if(!o.contains(f))throw new j(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hm(u,f)||u.push(f)}c=new Ns(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Kb(new ut(a),c,l)}class sa extends na{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}function Gb(t,e,n){return new ra({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Jb extends na{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=Gb(this,e,!0),r=this.Wc.map(i=>ti(i,n)),s=new kr(r);return new K0(e.path,s)}isEqual(e){return this===e}}function Qb(t,e,n,r){const s=t.Qc(1,e,n);ru("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();Xn(r,(c,l)=>{const u=su(e,c,n);l=be(l);const h=s.Bc(u);if(l instanceof sa)i.push(u);else{const f=ti(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ns(i);return new om(o,a,s.fieldTransforms)}function Xb(t,e,n,r,s,i){const o=t.Qc(1,e,n),a=[Pc(e,r,n)],c=[s];if(i.length%2!=0)throw new j(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Pc(e,i[f])),c.push(i[f+1]);const l=[],u=ut.empty();for(let f=a.length-1;f>=0;--f)if(!hm(l,a[f])){const p=a[f];let m=c[f];m=be(m);const b=o.Bc(p);if(m instanceof sa)l.push(p);else{const _=ti(m,b);_!=null&&(l.push(p),u.set(p,_))}}const h=new Ns(l);return new om(u,h,o.fieldTransforms)}function ti(t,e){if(um(t=be(t)))return ru("Unsupported field value:",e,t),lm(t,e);if(t instanceof na)return function(n,r){if(!am(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=ti(o,r.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return j0(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ft.fromDate(n);return{timestampValue:oo(r.k,s)}}if(n instanceof ft){const s=new ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:oo(r.k,s)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pr)return{bytesValue:Ng(r.k,n._byteString)};if(n instanceof ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Zl(n)}`)}(t,e)}function lm(t,e){const n={};return hg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(t,(r,s)=>{const i=ti(s,e.Mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof nu||t instanceof Pr||t instanceof ot||t instanceof na)}function ru(t,e,n){if(!um(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zl(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function Pc(t,e,n){if((e=be(e))instanceof ta)return e._internalPath;if(typeof e=="string")return su(t,e);throw co("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yb=new RegExp("[~\\*/\\[\\]]");function su(t,e,n){if(e.search(Yb)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ta(...e.split("."))._internalPath}catch{throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function co(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(I.INVALID_ARGUMENT,a+t+c)}function hm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zb extends fm{data(){return super.data()}}function dm(t,e){return typeof e=="string"?su(t,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pm extends fm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ci extends pm{data(e={}){return super.data(e)}}class eS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ci(this._firestore,this._userDataWriter,r.key,r,new is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ci(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ci(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:tS(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){if(ro(t)&&t.explicitOrderBy.length===0)throw new j(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function AR(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Xn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nu(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const n=yn(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ye(xg(r));const s=new Ls(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){t=Wt(t,ot);const e=Wt(t.firestore,Wn);return Vb(tu(e),t._key).then(n=>mm(e,t,n))}class gm extends rS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function RR(t,e,n,...r){t=Wt(t,ot);const s=Wt(t.firestore,Wn),i=cm(s);let o;return o=typeof(e=be(e))=="string"||e instanceof ta?Xb(i,"updateDoc",t._key,e,n,r):Qb(i,"updateDoc",t._key,e),iu(s,[o.toMutation(t._key,dn.exists(!0))])}function kR(t){return iu(Wt(t.firestore,Wn),[new Sg(t._key,dn.none())])}function NR(t,e){const n=Wt(t.firestore,Wn),r=jb(t),s=sS(t.converter,e);return iu(n,[zb(cm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function OR(t,...e){var n,r,s;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(pf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ot)l=Wt(t.firestore,Wn),u=Ho(t._key.path),c={next:h=>{e[o]&&e[o](mm(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wt(t,ea);l=Wt(h.firestore,Wn),u=h._query;const f=new gm(l);c={next:p=>{e[o]&&e[o](new eS(l,f,h,p))},error:e[o+1],complete:e[o+2]},nS(t._query)}return function(h,f,p,m){const b=new nm(m),_=new Jg(f,b,p);return h.asyncQueue.enqueueAndForget(async()=>zg(await Oc(h),_)),()=>{b.nc(),h.asyncQueue.enqueueAndForget(async()=>Gg(await Oc(h),_))}}(tu(l),u,a,c)}function iu(t,e){return function(n,r){const s=new fn;return n.asyncQueue.enqueueAndForget(async()=>Ib(await Fb(n),r,s)),s.promise}(tu(t),e)}function mm(t,e,n){const r=n.docs.get(e._key),s=new gm(t);return new pm(t,s,e._key,r,new is(n.hasPendingWrites,n.fromCache),e.converter)}function PR(...t){return new Jb("arrayUnion",t)}(function(t,e=!0){(function(n){Kr=n})(Br),br(new Vn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Wn(s,new m0(n.getProvider("auth-internal")),new w0(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Dt(xh,"3.4.4",t),Dt(xh,"3.4.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="firebasestorage.googleapis.com",vm="storageBucket",iS=2*60*1e3,oS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends _n{constructor(e,n){super(Pa(e),`Firebase Storage: ${n} (${Pa(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}_codeEquals(e){return Pa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Pa(t){return"storage/"+t}function ou(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae("unknown",t)}function aS(t){return new Ae("object-not-found","Object '"+t+"' does not exist.")}function cS(t){return new Ae("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae("unauthenticated",t)}function uS(){return new Ae("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function hS(t){return new Ae("unauthorized","User does not have permission to access '"+t+"'.")}function fS(){return new Ae("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function dS(){return new Ae("canceled","User canceled the upload/download.")}function pS(t){return new Ae("invalid-url","Invalid URL '"+t+"'.")}function gS(t){return new Ae("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function mS(){return new Ae("no-default-bucket","No default bucket found. Did you set the '"+vm+"' property when initializing the app?")}function yS(){return new Ae("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function vS(){return new Ae("no-download-url","The given file does not have any download URLs.")}function Dc(t){return new Ae("invalid-argument",t)}function _m(){return new Ae("app-deleted","The Firebase app was deleted.")}function _S(t){return new Ae("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ms(t,e){return new Ae("invalid-format","String does not match format '"+t+"': "+e)}function Zr(t){throw new Ae("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(r.path==="")return r;throw gS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},b=n===ym?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",C=new RegExp(`^https?://${b}/${s}/${_}`,"i"),V=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<V.length;M++){const ne=V[M],ce=ne.regex.exec(e);if(ce){const Q=ce[ne.indices.bucket];let ve=ce[ne.indices.path];ve||(ve=""),r=new ht(Q,ve),ne.postModify(r);break}}if(r==null)throw pS(e);return r}}class wS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(p,c())},_)}function f(){i&&clearTimeout(i)}function p(_,...C){if(l){f();return}if(_){f(),u.call(null,_,...C);return}if(c()||o){f(),u.call(null,_,...C);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,h(V)}let m=!1;function b(_){m||(m=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function TS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){return t!==void 0}function bS(t){return typeof t=="object"&&!Array.isArray(t)}function au(t){return typeof t=="string"||t instanceof String}function gf(t){return cu()&&t instanceof Blob}function cu(){return typeof Blob!="undefined"}function mf(t,e,n,r){if(r<e)throw Dc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Un||(Un={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,s,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new mi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Un.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Un.ABORT;r(!1,new mi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new mi(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());IS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ou();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?_m():dS();o(c)}else{const c=fS();o(c)}};this.canceled_?n(!1,new mi(!1,null,!0)):this.backoffId_=ES(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class mi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function RS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NS(t,e,n,r,s,i){const o=wm(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return RS(c,e),AS(c,n),CS(c,i),kS(c,r),new SS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function PS(...t){const e=OS();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cu())return new Blob(t);throw new Ae("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function DS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Da{constructor(e,n){this.data=e,this.contentType=n||null}}function LS(t,e){switch(t){case Pt.RAW:return new Da(Em(e));case Pt.BASE64:case Pt.BASE64URL:return new Da(Tm(t,e));case Pt.DATA_URL:return new Da(US(e),FS(e))}throw ou()}function Em(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function MS(t){let e;try{e=decodeURIComponent(t)}catch{throw ms(Pt.DATA_URL,"Malformed data URL.")}return Em(e)}function Tm(t,e){switch(t){case Pt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ms(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ms(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xS(e)}catch{throw ms(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Im{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ms(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=VS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function US(t){const e=new Im(t);return e.base64?Tm(Pt.BASE64,e.rest):MS(e.rest)}function FS(t){return new Im(t).contentType}function VS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){let r=0,s="";gf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(gf(this.data_)){const r=this.data_,s=DS(r,e,n);return s===null?null:new sn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new sn(r,!0)}}static getBlob(...e){if(cu()){const n=e.map(r=>r instanceof sn?r.data_:r);return new sn(PS.apply(null,n))}else{const n=e.map(o=>au(o)?LS(Pt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new sn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){let e;try{e=JSON.parse(t)}catch{return null}return bS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Sm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e){return e}class Qe{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||jS}}let yi=null;function qS(t){return!au(t)||t.length<2?t:Sm(t)}function Am(){if(yi)return yi;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(i,o){return qS(o)}const n=new Qe("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Qe("size");return s.xform=r,t.push(s),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),yi=t,yi}function HS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ht(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function KS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return HS(r,t),r}function Cm(t,e,n){const r=bm(e);return r===null?null:KS(t,r,n)}function WS(t,e,n,r){const s=bm(e);if(s===null||!au(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=ia(f,n,r),m=wm({alt:"media",token:l});return p+m})[0]}function zS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class lu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){if(!t)throw ou()}function GS(t,e){function n(r,s){const i=Cm(t,s,e);return Rm(i!==null),i}return n}function JS(t,e){function n(r,s){const i=Cm(t,s,e);return Rm(i!==null),WS(i,s,t.host,t._protocol)}return n}function km(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=uS():s=lS():n.getStatus()===402?s=cS(t.bucket):n.getStatus()===403?s=hS(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Nm(t){const e=km(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aS(t.path)),i.serverResponse=s.serverResponse,i}return n}function QS(t,e,n){const r=e.fullServerUrl(),s=ia(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new lu(s,i,JS(t,n),o);return a.errorHandler=Nm(e),a}function XS(t,e){const n=e.fullServerUrl(),r=ia(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new lu(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Nm(e),a}function YS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=YS(null,e)),r}function eA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let V="";for(let M=0;M<2;M++)V=V+Math.random().toString().slice(2);return V}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=ZS(e,r,s),u=zS(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=sn.getBlob(h,r,f);if(p===null)throw yS();const m={name:l.fullPath},b=ia(i,t.host,t._protocol),_="POST",C=t.maxUploadRetryTime,D=new lu(b,_,GS(t,n),C);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=km(e),D}class tA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Un.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Un.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Un.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nA extends tA{initXhr(){this.xhr_.responseType="text"}}function uu(){return new nA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zn(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sm(this._location.path)}get storage(){return this._service}get parent(){const e=$S(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new zn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _S(e)}}function rA(t,e,n){t._throwIfRoot("uploadBytes");const r=eA(t.storage,t._location,Am(),new sn(e,!0),n);return t.storage.makeRequestWithTokens(r,uu).then(s=>({metadata:s,ref:t}))}function sA(t){t._throwIfRoot("getDownloadURL");const e=QS(t.storage,t._location,Am());return t.storage.makeRequestWithTokens(e,uu).then(n=>{if(n===null)throw vS();return n})}function iA(t){t._throwIfRoot("deleteObject");const e=XS(t.storage,t._location);return t.storage.makeRequestWithTokens(e,uu)}function oA(t,e){const n=BS(t._location.path,e),r=new ht(t._location.bucket,n);return new zn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return/^[A-Za-z]+:\/\//.test(t)}function cA(t,e){return new zn(t,e)}function Om(t,e){if(t instanceof hu){const n=t;if(n._bucket==null)throw mS();const r=new zn(n,n._bucket);return e!=null?Om(r,e):r}else return e!==void 0?oA(t,e):t}function lA(t,e){if(e&&aA(e)){if(t instanceof hu)return cA(t,e);throw Dc("To use ref(service, url), the first argument must be a Storage instance.")}else return Om(t,e)}function yf(t,e){const n=e==null?void 0:e[vm];return n==null?null:ht.makeFromBucketSpec(n,t)}class hu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ym,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iS,this._maxUploadRetryTime=oS,this._requests=new Set,s!=null?this._bucket=ht.makeFromBucketSpec(s,this._host):this._bucket=yf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=yf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zn(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new wS(_m());{const i=NS(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const vf="@firebase/storage",_f="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="storage";function DR(t,e,n){return t=be(t),rA(t,e,n)}function xR(t){return t=be(t),sA(t)}function LR(t){return t=be(t),iA(t)}function MR(t,e){return t=be(t),lA(t,e)}function UR(t=ul(),e){return t=be(t),ko(t,Pm).getImmediate({identifier:e})}function uA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hu(n,r,s,e,Br)}function hA(){br(new Vn(Pm,uA,"PUBLIC").setMultipleInstances(!0)),Dt(vf,_f,""),Dt(vf,_f,"esm2017")}hA();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function fu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=Dm,xm=new Fs("auth","Firebase",Dm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new cl("@firebase/auth");function Ri(t,...e){wf.logLevel<=ie.ERROR&&wf.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,...e){throw du(t,...e)}function xt(t,...e){return du(t,...e)}function dA(t,e,n){const r=Object.assign(Object.assign({},fA()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function du(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xm.create(t,...e)}function H(t,e,...n){if(!t)throw du(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ri(e),new Error(e)}function Jt(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new Map;function Ht(t){Jt(t instanceof Function,"Expected a class definition");let e=Ef.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ef.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e){const n=ko(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qi(i,e!=null?e:{}))return s;It(s,"already-initialized")}return n.initialize({options:e})}function gA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mA(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||op()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=ip()||ap()}get(){return yA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new ni(3e4,6e4);function oa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ri(t,e,n,r,s={}){return Mm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lm.fetch()(Um(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_A),e);try{const s=new EA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw dA(t,u,l);It(t,u)}}catch(s){if(s instanceof _n)throw s;It(t,"network-request-failed")}}async function aa(t,e,n,r,s={}){const i=await ri(t,e,n,r,s);return"mfaPendingCredential"in i&&It(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Um(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pu(t.config,s):`${t.config.apiScheme}://${s}`}class EA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),wA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function IA(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=gu(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ys(La(s.auth_time)),issuedAtTime:ys(La(s.iat)),expirationTime:ys(La(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function gu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=uE(n);return s?JSON.parse(s):(Ri("Failed to decode base64 JWT payload"),null)}catch(s){return Ri("Caught error parsing JWT payload as JSON",s),null}}function SA(t){const e=gu(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&AA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Dr(t,IA(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?NA(i.providerUserInfo):[],a=kA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function RA(t){const e=be(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function NA(t){return t.map(e=>{var{providerId:n}=e,r=fu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){const n=await Mm(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Um(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):SA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bA(this,e)}reload(){return RA(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,TA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:M,isAnonymous:ne,providerData:ce,stsTokenManager:Q}=n;H(V&&Q,e,"internal-error");const ve=Ms.fromJSON(this.name,Q);H(typeof V=="string",e,"internal-error"),en(h,e.name),en(f,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof ne=="boolean",e,"internal-error"),en(p,e.name),en(m,e.name),en(b,e.name),en(_,e.name),en(C,e.name),en(D,e.name);const pe=new Fn({uid:V,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:ne,photoURL:m,phoneNumber:p,tenantId:b,stsTokenManager:ve,createdAt:C,lastLoginAt:D});return ce&&Array.isArray(ce)&&(pe.providerData=ce.map(qe=>Object.assign({},qe))),_&&(pe._redirectEventId=_),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vm.type="NONE";const If=Vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=ki("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vr(Ht(If),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ht(If);const o=ki(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Fn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hm(e))return"Blackberry";if(Km(e))return"Webos";if(mu(e))return"Safari";if((e.includes("chrome/")||Bm(e))&&!e.includes("edge/"))return"Chrome";if(qm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $m(t=xe()){return/firefox\//i.test(t)}function mu(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bm(t=xe()){return/crios\//i.test(t)}function jm(t=xe()){return/iemobile/i.test(t)}function qm(t=xe()){return/android/i.test(t)}function Hm(t=xe()){return/blackberry/i.test(t)}function Km(t=xe()){return/webos/i.test(t)}function ca(t=xe()){return/iphone|ipad|ipod/i.test(t)}function PA(t=xe()){var e;return ca(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function DA(){return cp()&&document.documentMode===10}function Wm(t=xe()){return ca(t)||qm(t)||Km(t)||Hm(t)||/windows phone/i.test(t)||jm(t)}function xA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e=[]){let n;switch(t){case"Browser":n=bf(xe());break;case"Worker":n=`${bf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sf(this),this.idTokenSubscription=new Sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function yu(t){return be(t)}class Sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=vE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function Gm(t,e){return ri(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){return aa(t,"POST","/v1/accounts:signInWithPassword",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}async function FA(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends vu{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Us(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return MA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UA(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FA(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e){return aa(t,"POST","/v1/accounts:signInWithIdp",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="http://localhost";class Gn extends vu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:VA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BA(t){const e=ns(rs(t)).link,n=e?ns(rs(e)).deep_link_id:null,r=ns(rs(t)).deep_link_id;return(r?ns(rs(r)).link:null)||r||n||e||t}class _u{constructor(e){var n,r,s,i,o,a;const c=ns(rs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=$A((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BA(e);try{return new _u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_u.parseLink(n);return H(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Jm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends si{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends si{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends si{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends si{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Fn._fromIdTokenResponse(e,r,s),o=Af(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Af(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends _n{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new uo(e,n,r,s)}}function Qm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(t,i,e,r):i})}async function jA(t,e,n=!1){const r=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Dr(t,Qm(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=gu(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(t,e,n=!1){const r="signIn",s=await Qm(t,r,e),i=await xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function HA(t,e){return Xm(yu(t),e)}function FR(t,e,n){return HA(be(t),Gr.credential(e,n))}function VR(t,e){return KA(be(t),null,e)}async function KA(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Dr(t,Gm(r,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t,e){return be(t).setPersistence(e)}function BR(t){return be(t).signOut()}const ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){const t=xe();return mu(t)||ca(t)}const zA=1e3,GA=10;class Zm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WA()&&xA(),this.fallbackToPolling=Wm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zm.type="LOCAL";const JA=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ey.type="SESSION";const ty=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await QA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=wu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function YA(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(){return typeof Lt().WorkerGlobalScope!="undefined"&&typeof Lt().importScripts=="function"}async function ZA(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tC(){return ny()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firebaseLocalStorageDb",nC=1,fo="firebaseLocalStorage",sy="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function rC(){const t=indexedDB.deleteDatabase(ry);return new ii(t).toPromise()}function Lc(){const t=indexedDB.open(ry,nC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fo,{keyPath:sy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fo)?e(r):(r.close(),await rC(),e(await Lc()))})})}async function Cf(t,e,n){const r=ua(t,!0).put({[sy]:e,value:n});return new ii(r).toPromise()}async function sC(t,e){const n=ua(t,!1).get(e),r=await new ii(n).toPromise();return r===void 0?null:r.value}function Rf(t,e){const n=ua(t,!0).delete(e);return new ii(n).toPromise()}const iC=800,oC=3;class iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(tC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new XA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await Cf(e,ho,"1"),await Rf(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ua(s,!1).getAll();return new ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iy.type="LOCAL";const aC=iy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){return e?Ht(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends vu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fC(t){return Xm(t.auth,new Eu(t),t.bypassAuthState)}function dC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),qA(n,new Eu(t),t.bypassAuthState)}async function pC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),jA(n,new Eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return pC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:It(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new ni(2e3,1e4);class fr extends oy{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gC.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="pendingRedirect",Ma=new Map;class yC extends oy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await vC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vC(t,e){const n=wC(e),r=_C(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _C(t){return Ht(t._redirectPersistence)}function wC(t){return ki(mC,t.config.apiKey,t.name)}async function EC(t,e,n=!1){const r=yu(t),s=hC(r,e),o=await new yC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=10*60*1e3;class IC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ay(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(kf(e))}saveEventToCache(e){this.cachedEventUids.add(kf(e)),this.lastProcessedEventTime=Date.now()}}function kf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ay(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function RC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SC(t);for(const n of e)try{if(kC(n))return}catch{}It(t,"unauthorized-domain")}function kC(t){const e=xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CC.test(n))return!1;if(AC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new ni(3e4,6e4);function Nf(){const t=Lt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OC(t){return new Promise((e,n)=>{var r,s,i;function o(){Nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nf(),n(xt(t,"network-request-failed"))},timeout:NC.get()})}if((s=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Lt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=uC("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},lC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ni=null,e})}let Ni=null;function PC(t){return Ni=Ni||OC(t),Ni}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new ni(5e3,15e3),xC="__/auth/iframe",LC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FC(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pu(e,LC):`https://${t.config.authDomain}/${xC}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=UC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vs(r).slice(1)}`}async function VC(t){const e=await PC(t),n=Lt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:FC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},DC.get());function c(){Lt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,jC=600,qC="_blank",HC="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KC(t,e,n,r=BC,s=jC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$C),{width:r.toString(),height:s.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=Bm(l)?qC:n),$m(l)&&(e=e||HC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(PA(l)&&a!=="_self")return WC(e||"",a),new Of(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Of(h)}function WC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="__/auth/handler",GC="emulator/auth/handler";function Pf(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof Jm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof si){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${JC(t)}?${Vs(a).slice(1)}`}function JC({config:t}){return t.emulator?pu(t,GC):`https://${t.authDomain}/${zC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ty,this._completeRedirectFn=EC}async _openPopup(e,n,r,s){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Pf(e,n,r,xc(),s);return KC(e,o,wu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),YA(Pf(e,n,r,xc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VC(e),r=new IC(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wm()||mu()||ca()}}const XC=QC;var Df="@firebase/auth",xf="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eR(t){br(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),H(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zm(t)},c=new LA(o,a);return gA(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new Vn("auth-internal",e=>{const n=yu(e.getProvider("auth").getImmediate());return(r=>new YC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Df,xf,ZC(t)),Dt(Df,xf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t=ul()){const e=ko(t,"auth");return e.isInitialized()?e.getImmediate():pA(t,{popupRedirectResolver:XC,persistence:[aC,JA,ty]})}eR("Browser");var tR="firebase",nR="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(tR,nR,"app");export{gR as $,OR as A,CR as B,PR as C,bR as D,kR as E,jR as F,BR as G,mR as H,Qy as I,oR as J,AR as K,dR as L,Rt as M,jb as N,hR as O,fR as P,rR as Q,Uc as R,Tv as S,RR as T,SR as U,$R as V,FR as W,ty as X,DR as Y,NR as Z,xR as _,_R as a,VR as a0,aR as b,cR as c,Dd as d,st as e,os as f,pR as g,uR as h,iR as i,Yv as j,lR as k,wR as l,vd as m,Fc as n,zv as o,sR as p,vR as q,Fr as r,yR as s,IR as t,ER as u,TR as v,cv as w,UR as x,MR as y,LR as z};
