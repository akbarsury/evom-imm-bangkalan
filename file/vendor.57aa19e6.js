var yy=Object.defineProperty,vy=Object.defineProperties;var wy=Object.getOwnPropertyDescriptors;var wl=Object.getOwnPropertySymbols;var _y=Object.prototype.hasOwnProperty,Ey=Object.prototype.propertyIsEnumerable;var _l=(t,e,n)=>e in t?yy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,El=(t,e)=>{for(var n in e||(e={}))_y.call(e,n)&&_l(t,n,e[n]);if(wl)for(var n of wl(e))Ey.call(e,n)&&_l(t,n,e[n]);return t},bl=(t,e)=>vy(t,wy(e));function Pc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const by="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ty=Pc(by);function Lf(t){return!!t||t===""}function xc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?Cy(s):xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Le(t))return t;if(Ae(t))return t}}const Iy=/;(?![^(]*\))/g,Sy=/:(.+)/;function Cy(t){const e={};return t.split(Iy).forEach(n=>{if(n){const s=n.split(Sy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mc(t){let e="";if(Le(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Mc(t[n]);s&&(e+=s+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ay(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=jr(t[s],e[s]);return n}function jr(t,e){if(t===e)return!0;let n=Tl(t),s=Tl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=q(t),s=q(e),n||s)return n&&s?Ay(t,e):!1;if(n=Ae(t),s=Ae(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Lc(t,e){return t.findIndex(n=>jr(n,e))}const Lk=t=>Le(t)?t:t==null?"":q(t)||Ae(t)&&(t.toString===Vf||!J(t.toString))?JSON.stringify(t,Uf,2):String(t),Uf=(t,e)=>e&&e.__v_isRef?Uf(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ms(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!q(e)&&!Bf(e)?String(e):e,pe={},ds=[],_t=()=>{},ky=()=>!1,Ry=/^on[^a-z]/,wo=t=>Ry.test(t),Uc=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dy=Object.prototype.hasOwnProperty,ie=(t,e)=>Dy.call(t,e),q=Array.isArray,ps=t=>_o(t)==="[object Map]",Ms=t=>_o(t)==="[object Set]",Tl=t=>t instanceof Date,J=t=>typeof t=="function",Le=t=>typeof t=="string",Vc=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Ff=t=>Ae(t)&&J(t.then)&&J(t.catch),Vf=Object.prototype.toString,_o=t=>Vf.call(t),Ny=t=>_o(t).slice(8,-1),Bf=t=>_o(t)==="[object Object]",Bc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oy=/-(\w)/g,Mt=Eo(t=>t.replace(Oy,(e,n)=>n?n.toUpperCase():"")),Py=/\B([A-Z])/g,Ls=Eo(t=>t.replace(Py,"-$1").toLowerCase()),bo=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Eo(t=>t?`on${bo(t)}`:""),_r=(t,e)=>!Object.is(t,e),Ai=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$i=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Il;const xy=()=>Il||(Il=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Bt;class $f{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Bt&&(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Bt=this,e()}finally{Bt=this.parent}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function My(t){return new $f(t)}function Ly(t,e=Bt){e&&e.active&&e.effects.push(t)}const $c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jf=t=>(t.w&_n)>0,Hf=t=>(t.n&_n)>0,Uy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_n},Fy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];jf(r)&&!Hf(r)?r.delete(t):e[n++]=r,r.w&=~_n,r.n&=~_n}e.length=n}},Ua=new WeakMap;let er=0,_n=1;const Fa=30;let kt;const Fn=Symbol(""),Va=Symbol("");class jc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ly(this,s)}run(){if(!this.active)return this.fn();let e=kt,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,gn=!0,_n=1<<++er,er<=Fa?Uy(this):Sl(this),this.fn()}finally{er<=Fa&&Fy(this),_n=1<<--er,kt=this.parent,gn=n,this.parent=void 0}}stop(){this.active&&(Sl(this),this.onStop&&this.onStop(),this.active=!1)}}function Sl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const qf=[];function Us(){qf.push(gn),gn=!1}function Fs(){const t=qf.pop();gn=t===void 0?!0:t}function ut(t,e,n){if(gn&&kt){let s=Ua.get(t);s||Ua.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$c()),Kf(r)}}function Kf(t,e){let n=!1;er<=Fa?Hf(t)||(t.n|=_n,n=!jf(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Gt(t,e,n,s,r,i){const o=Ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Bc(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),ps(t)&&a.push(o.get(Va)));break;case"delete":q(t)||(a.push(o.get(Fn)),ps(t)&&a.push(o.get(Va)));break;case"set":ps(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Ba(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ba($c(c))}}function Ba(t,e){for(const n of q(t)?t:[...t])(n!==kt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Vy=Pc("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Vc)),By=Hc(),$y=Hc(!1,!0),jy=Hc(!0),Cl=Hy();function Hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)ut(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=ae(this)[e].apply(this,n);return Fs(),s}}),t}function Hc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?iv:Yf:e?Xf:Qf).get(s))return s;const o=q(s);if(!t&&o&&ie(Cl,r))return Reflect.get(Cl,r,i);const a=Reflect.get(s,r,i);return(Vc(r)?zf.has(r):Vy(r))||(t||ut(s,"get",r),e)?a:Be(a)?!o||!Bc(r)?a.value:a:Ae(a)?t?Jf(a):Hr(a):a}}const qy=Wf(),Ky=Wf(!0);function Wf(t=!1){return function(n,s,r,i){let o=n[s];if(Er(o)&&Be(o)&&!Be(r))return!1;if(!t&&!Er(r)&&(Zf(r)||(r=ae(r),o=ae(o)),!q(n)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=q(n)&&Bc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?_r(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),c}}function zy(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function Wy(t,e){const n=Reflect.has(t,e);return(!Vc(e)||!zf.has(e))&&ut(t,"has",e),n}function Gy(t){return ut(t,"iterate",q(t)?"length":Fn),Reflect.ownKeys(t)}const Gf={get:By,set:qy,deleteProperty:zy,has:Wy,ownKeys:Gy},Qy={get:jy,set(t,e){return!0},deleteProperty(t,e){return!0}},Xy=Qe({},Gf,{get:$y,set:Ky}),qc=t=>t,To=t=>Reflect.getPrototypeOf(t);function fi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);e!==i&&!n&&ut(r,"get",e),!n&&ut(r,"get",i);const{has:o}=To(r),a=s?qc:n?Wc:br;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function di(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return t!==r&&!e&&ut(s,"has",t),!e&&ut(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function pi(t,e=!1){return t=t.__v_raw,!e&&ut(ae(t),"iterate",Fn),Reflect.get(t,"size",t)}function Al(t){t=ae(t);const e=ae(this);return To(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function kl(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=To(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?_r(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Rl(t){const e=ae(this),{has:n,get:s}=To(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function Dl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function gi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?qc:t?Wc:br;return!t&&ut(a,"iterate",Fn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function mi(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ps(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?qc:e?Wc:br;return!e&&ut(i,"iterate",c?Va:Fn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function Yy(){const t={get(i){return fi(this,i)},get size(){return pi(this)},has:di,add:Al,set:kl,delete:Rl,clear:Dl,forEach:gi(!1,!1)},e={get(i){return fi(this,i,!1,!0)},get size(){return pi(this)},has:di,add:Al,set:kl,delete:Rl,clear:Dl,forEach:gi(!1,!0)},n={get(i){return fi(this,i,!0)},get size(){return pi(this,!0)},has(i){return di.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:gi(!0,!1)},s={get(i){return fi(this,i,!0,!0)},get size(){return pi(this,!0)},has(i){return di.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mi(i,!1,!1),n[i]=mi(i,!0,!1),e[i]=mi(i,!1,!0),s[i]=mi(i,!0,!0)}),[t,n,e,s]}const[Jy,Zy,ev,tv]=Yy();function Kc(t,e){const n=e?t?tv:ev:t?Zy:Jy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const nv={get:Kc(!1,!1)},sv={get:Kc(!1,!0)},rv={get:Kc(!0,!1)},Qf=new WeakMap,Xf=new WeakMap,Yf=new WeakMap,iv=new WeakMap;function ov(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function av(t){return t.__v_skip||!Object.isExtensible(t)?0:ov(Ny(t))}function Hr(t){return Er(t)?t:zc(t,!1,Gf,nv,Qf)}function cv(t){return zc(t,!1,Xy,sv,Xf)}function Jf(t){return zc(t,!0,Qy,rv,Yf)}function zc(t,e,n,s,r){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=av(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function gs(t){return Er(t)?gs(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Zf(t){return!!(t&&t.__v_isShallow)}function ed(t){return gs(t)||Er(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function td(t){return Bi(t,"__v_skip",!0),t}const br=t=>Ae(t)?Hr(t):t,Wc=t=>Ae(t)?Jf(t):t;function nd(t){gn&&kt&&(t=ae(t),Kf(t.dep||(t.dep=$c())))}function sd(t,e){t=ae(t),t.dep&&Ba(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function rd(t){return id(t,!1)}function uv(t){return id(t,!0)}function id(t,e){return Be(t)?t:new lv(t,e)}class lv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:br(e)}get value(){return nd(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),_r(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:br(e),sd(this))}}function cr(t){return Be(t)?t.value:t}const hv={get:(t,e,n)=>cr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function od(t){return gs(t)?t:new Proxy(t,hv)}class fv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jc(e,()=>{this._dirty||(this._dirty=!0,sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return nd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dv(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=_t):(s=t.get,r=t.set),new fv(s,r,i||!r,n)}Promise.resolve();function mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Io(i,e,n)}return r}function mt(t,e,n,s){if(J(t)){const i=mn(t,e,n,s);return i&&Ff(i)&&i.catch(o=>{Io(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mt(t[i],e,n,s));return r}function Io(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){mn(c,null,10,[t,o,a]);return}}pv(t,n,r,s)}function pv(t,e,n,s=!0){console.error(t)}let ji=!1,$a=!1;const ot=[];let $t=0;const ur=[];let tr=null,as=0;const lr=[];let on=null,cs=0;const ad=Promise.resolve();let Gc=null,ja=null;function cd(t){const e=Gc||ad;return t?e.then(this?t.bind(this):t):e}function gv(t){let e=$t+1,n=ot.length;for(;e<n;){const s=e+n>>>1;Tr(ot[s])<t?e=s+1:n=s}return e}function ud(t){(!ot.length||!ot.includes(t,ji&&t.allowRecurse?$t+1:$t))&&t!==ja&&(t.id==null?ot.push(t):ot.splice(gv(t.id),0,t),ld())}function ld(){!ji&&!$a&&($a=!0,Gc=ad.then(dd))}function mv(t){const e=ot.indexOf(t);e>$t&&ot.splice(e,1)}function hd(t,e,n,s){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),ld()}function yv(t){hd(t,tr,ur,as)}function vv(t){hd(t,on,lr,cs)}function Qc(t,e=null){if(ur.length){for(ja=e,tr=[...new Set(ur)],ur.length=0,as=0;as<tr.length;as++)tr[as]();tr=null,as=0,ja=null,Qc(t,e)}}function fd(t){if(lr.length){const e=[...new Set(lr)];if(lr.length=0,on){on.push(...e);return}for(on=e,on.sort((n,s)=>Tr(n)-Tr(s)),cs=0;cs<on.length;cs++)on[cs]();on=null,cs=0}}const Tr=t=>t.id==null?1/0:t.id;function dd(t){$a=!1,ji=!0,Qc(t),ot.sort((n,s)=>Tr(n)-Tr(s));const e=_t;try{for($t=0;$t<ot.length;$t++){const n=ot[$t];n&&n.active!==!1&&mn(n,null,14)}}finally{$t=0,ot.length=0,fd(),ji=!1,Gc=null,(ot.length||ur.length||lr.length)&&dd(t)}}function wv(t,e,...n){const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||pe;f?r=n.map(g=>g.trim()):h&&(r=n.map($i))}let a,c=s[a=ha(e)]||s[a=ha(Mt(e))];!c&&i&&(c=s[a=ha(Ls(e))]),c&&mt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(u,t,6,r)}}function pd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=pd(u,e,!0);l&&(a=!0,Qe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Qe(o,i),s.set(t,o),o)}function Xc(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Ls(e))||ie(t,e))}let gt=null,So=null;function Hi(t){const e=gt;return gt=t,So=t&&t.type.__scopeId||null,e}function Uk(t){So=t}function Fk(){So=null}function _v(t,e=gt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&$l(-1);const i=Hi(e),o=t(...r);return Hi(i),s._d&&$l(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:b}=t;let v,A;const N=Hi(t);try{if(n.shapeFlag&4){const L=r||s;v=Ct(l.call(L,L,h,i,g,f,y)),A=c}else{const L=e;v=Ct(L.length>1?L(i,{attrs:c,slots:a,emit:u}):L(i,null)),A=e.props?c:Ev(c)}}catch(L){hr.length=0,Io(L,t,1),v=st(Lt)}let j=v;if(A&&b!==!1){const L=Object.keys(A),{shapeFlag:ne}=j;L.length&&ne&7&&(o&&L.some(Uc)&&(A=bv(A,o)),j=Es(j,A))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),v=j,Hi(N),v}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},bv=(t,e)=>{const n={};for(const s in t)(!Uc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Xc(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Nl(s,o,u):!0:!!o;return!1}function Nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Xc(n,i))return!0}return!1}function Iv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sv=t=>t.__isSuspense;function Cv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):vv(t)}function ki(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Kt(t,e,n=!1){const s=Me||gt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Ol={};function Ri(t,e,n){return gd(t,e,n)}function gd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Me;let c,u=!1,l=!1;if(Be(t)?(c=()=>t.value,u=Zf(t)):gs(t)?(c=()=>t,s=!0):q(t)?(l=!0,u=t.some(gs),c=()=>t.map(A=>{if(Be(A))return A.value;if(gs(A))return xn(A);if(J(A))return mn(A,a,2)})):J(t)?e?c=()=>mn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[f])}:c=_t,e&&s){const A=c;c=()=>xn(A())}let h,f=A=>{h=v.onStop=()=>{mn(A,a,4)}};if(Ir)return f=_t,e?n&&mt(e,a,3,[c(),l?[]:void 0,f]):c(),_t;let g=l?[]:Ol;const y=()=>{if(!!v.active)if(e){const A=v.run();(s||u||(l?A.some((N,j)=>_r(N,g[j])):_r(A,g)))&&(h&&h(),mt(e,a,3,[A,g===Ol?void 0:g,f]),g=A)}else v.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>nt(y,a&&a.suspense):b=()=>{!a||a.isMounted?yv(y):y()};const v=new jc(c,b);return e?n?y():g=v.run():r==="post"?nt(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&Fc(a.scope.effects,v)}}function Av(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?md(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Me;bs(this);const a=gd(r,i.bind(s),n);return o?bs(o):Bn(),a}function md(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function xn(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))xn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(Ms(t)||ps(t))t.forEach(n=>{xn(n,e)});else if(Bf(t))for(const n in t)xn(t[n],e);return t}function kv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ed(()=>{t.isMounted=!0}),bd(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],Rv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=mw(),s=kv();let r;return()=>{const i=e.default&&vd(e.default(),!0);if(!i||!i.length)return;const o=ae(t),{mode:a}=o,c=i[0];if(s.isLeaving)return da(c);const u=Pl(c);if(!u)return da(c);const l=Ha(u,o,s,n);qa(u,l);const h=n.subTree,f=h&&Pl(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const b=y();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(f&&f.type!==Lt&&(!On(u,f)||g)){const b=Ha(f,o,s,n);if(qa(f,b),a==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},da(c);a==="in-out"&&u.type!==Lt&&(b.delayLeave=(v,A,N)=>{const j=yd(s,f);j[String(f.key)]=f,v._leaveCb=()=>{A(),v._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=N})}return c}}},Dv=Rv;function yd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ha(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:b,onAppear:v,onAfterAppear:A,onAppearCancelled:N}=e,j=String(t.key),L=yd(n,t),ne=(X,we)=>{X&&mt(X,s,9,we)},ue={mode:i,persisted:o,beforeEnter(X){let we=a;if(!n.isMounted)if(r)we=b||a;else return;X._leaveCb&&X._leaveCb(!0);const ge=L[j];ge&&On(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ne(we,[X])},enter(X){let we=c,ge=u,He=l;if(!n.isMounted)if(r)we=v||c,ge=A||u,He=N||l;else return;let qe=!1;const Je=X._enterCb=tn=>{qe||(qe=!0,tn?ne(He,[X]):ne(ge,[X]),ue.delayedLeave&&ue.delayedLeave(),X._enterCb=void 0)};we?(we(X,Je),we.length<=1&&Je()):Je()},leave(X,we){const ge=String(t.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return we();ne(h,[X]);let He=!1;const qe=X._leaveCb=Je=>{He||(He=!0,we(),Je?ne(y,[X]):ne(g,[X]),X._leaveCb=void 0,L[ge]===t&&delete L[ge])};L[ge]=t,f?(f(X,qe),f.length<=1&&qe()):qe()},clone(X){return Ha(X,e,n,s)}};return ue}function da(t){if(Co(t))return t=Es(t),t.children=null,t}function Pl(t){return Co(t)?t.children?t.children[0]:void 0:t}function qa(t,e){t.shapeFlag&6&&t.component?qa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vd(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===St?(i.patchFlag&128&&s++,n=n.concat(vd(i.children,e))):(e||i.type!==Lt)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function wd(t){return J(t)?{setup:t,name:t.name}:t}const Ka=t=>!!t.type.__asyncLoader,Co=t=>t.type.__isKeepAlive;function Nv(t,e){_d(t,"a",e)}function Ov(t,e){_d(t,"da",e)}function _d(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ao(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Co(r.parent.vnode)&&Pv(s,e,n,r),r=r.parent}}function Pv(t,e,n,s){const r=Ao(e,t,s,!0);Td(()=>{Fc(s[e],r)},n)}function Ao(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),bs(n);const a=mt(e,n,t,o);return Bn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const en=t=>(e,n=Me)=>(!Ir||t==="sp")&&Ao(t,e,n),xv=en("bm"),Ed=en("m"),Mv=en("bu"),Lv=en("u"),bd=en("bum"),Td=en("um"),Uv=en("sp"),Fv=en("rtg"),Vv=en("rtc");function Bv(t,e=Me){Ao("ec",t,e)}let za=!0;function $v(t){const e=Sd(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&xl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:b,deactivated:v,beforeDestroy:A,beforeUnmount:N,destroyed:j,unmounted:L,render:ne,renderTracked:ue,renderTriggered:X,errorCaptured:we,serverPrefetch:ge,expose:He,inheritAttrs:qe,components:Je,directives:tn,filters:ts}=e;if(u&&jv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];J(le)&&(s[me]=le.bind(n))}if(r){const me=r.call(n,n);Ae(me)&&(t.data=Hr(me))}if(za=!0,i)for(const me in i){const le=i[me],ht=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):_t,ss=!J(le)&&J(le.set)?le.set.bind(n):_t,Vt=vt({get:ht,set:ss});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:bt=>Vt.value=bt})}if(a)for(const me in a)Id(a[me],s,n,me);if(c){const me=J(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{ki(le,me[le])})}l&&xl(l,t,"c");function De(me,le){q(le)?le.forEach(ht=>me(ht.bind(n))):le&&me(le.bind(n))}if(De(xv,h),De(Ed,f),De(Mv,g),De(Lv,y),De(Nv,b),De(Ov,v),De(Bv,we),De(Vv,ue),De(Fv,X),De(bd,N),De(Td,L),De(Uv,ge),q(He))if(He.length){const me=t.exposed||(t.exposed={});He.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:ht=>n[le]=ht})})}else t.exposed||(t.exposed={});ne&&t.render===_t&&(t.render=ne),qe!=null&&(t.inheritAttrs=qe),Je&&(t.components=Je),tn&&(t.directives=tn)}function jv(t,e,n=_t,s=!1){q(t)&&(t=Wa(t));for(const r in t){const i=t[r];let o;Ae(i)?"default"in i?o=Kt(i.from||r,i.default,!0):o=Kt(i.from||r):o=Kt(i),Be(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function xl(t,e,n){mt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Id(t,e,n,s){const r=s.includes(".")?md(n,s):()=>n[s];if(Le(t)){const i=e[t];J(i)&&Ri(r,i)}else if(J(t))Ri(r,t.bind(n));else if(Ae(t))if(q(t))t.forEach(i=>Id(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Ri(r,i,t)}}function Sd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>qi(c,u,o,!0)),qi(c,e,o)),i.set(e,c),c}function qi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qi(t,i,n,!0),r&&r.forEach(o=>qi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Hv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hv={data:Ml,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Dn,directives:Dn,watch:Kv,provide:Ml,inject:qv};function Ml(t,e){return e?t?function(){return Qe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function qv(t,e){return Dn(Wa(t),Wa(e))}function Wa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function Kv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function zv(t,e,n,s=!1){const r={},i={};Bi(i,ko,1),t.propsDefaults=Object.create(null),Cd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Mt(f);r[y]=Ga(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{Cd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=Ls(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Ga(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h)&&!0)&&(delete i[h],u=!0)}u&&Gt(t,"set","$attrs")}function Cd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ci(c))continue;const u=e[c];let l;r&&ie(r,l=Mt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Xc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Ga(r,c,h,u[h],t,!ie(u,h))}}return o}function Ga(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(bs(r),s=u[n]=c.call(null,e),Bn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function Ad(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=h=>{c=!0;const[f,g]=Ad(h,e,!0);Qe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,ds),ds;if(q(i))for(let l=0;l<i.length;l++){const h=Mt(i[l]);Ll(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=Mt(l);if(Ll(h)){const f=i[l],g=o[h]=q(f)||J(f)?{type:f}:f;if(g){const y=Vl(Boolean,g.type),b=Vl(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||ie(g,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function Ll(t){return t[0]!=="$"}function Ul(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fl(t,e){return Ul(t)===Ul(e)}function Vl(t,e){return q(e)?e.findIndex(n=>Fl(n,t)):J(e)&&Fl(e,t)?0:-1}const kd=t=>t[0]==="_"||t==="$stable",Yc=t=>q(t)?t.map(Ct):[Ct(t)],Gv=(t,e,n)=>{const s=_v((...r)=>Yc(e(...r)),n);return s._c=!1,s},Rd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(kd(r))continue;const i=t[r];if(J(i))e[r]=Gv(r,i,s);else if(i!=null){const o=Yc(i);e[r]=()=>o}}},Dd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Qv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Bi(e,"_",n)):Rd(e,t.slots={})}else t.slots={},e&&Dd(t,e);Bi(t.slots,ko,1)},Xv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Rd(e,r)),o=e}else e&&(Dd(t,e),o={default:1});if(i)for(const a in r)!kd(a)&&!(a in o)&&delete r[a]};function Vk(t,e){const n=gt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function An(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),mt(c,n,8,[t.el,a,t,e]),Fs())}}function Nd(){return{app:null,config:{isNativeTag:ky,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yv=0;function Jv(t,e){return function(s,r=null){r!=null&&!Ae(r)&&(r=null);const i=Nd(),o=new Set;let a=!1;const c=i.app={_uid:Yv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=st(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,eu(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Qa(t,e,n,s,r=!1){if(q(t)){t.forEach((f,g)=>Qa(f,e&&(q(e)?e[g]:e),n,s,r));return}if(Ka(s)&&!r)return;const i=s.shapeFlag&4?eu(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Le(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),J(c))mn(c,a,12,[o,l]);else{const f=Le(c),g=Be(c);if(f||g){const y=()=>{if(t.f){const b=f?l[c]:c.value;r?q(b)&&Fc(b,i):q(b)?b.includes(i)||b.push(i):f?l[c]=[i]:(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ie(h,c)&&(h[c]=o)):Be(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,nt(y,n)):y()}}}const nt=Cv;function Zv(t){return ew(t)}function ew(t,e){const n=xy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=_t,cloneNode:y,insertStaticContent:b}=t,v=(d,p,m,E=null,_=null,k=null,O=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!On(d,p)&&(E=F(d),ft(d,_,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:B,shapeFlag:P}=p;switch(I){case Jc:A(d,p,m,E);break;case Lt:N(d,p,m,E);break;case Di:d==null&&j(p,m,E,O);break;case St:tn(d,p,m,E,_,k,O,C,R);break;default:P&1?ue(d,p,m,E,_,k,O,C,R):P&6?ts(d,p,m,E,_,k,O,C,R):(P&64||P&128)&&I.process(d,p,m,E,_,k,O,C,R,ye)}B!=null&&_&&Qa(B,d&&d.ref,k,p||d,!p)},A=(d,p,m,E)=>{if(d==null)s(p.el=a(p.children),m,E);else{const _=p.el=d.el;p.children!==d.children&&u(_,p.children)}},N=(d,p,m,E)=>{d==null?s(p.el=c(p.children||""),m,E):p.el=d.el},j=(d,p,m,E)=>{[d.el,d.anchor]=b(d.children,p,m,E,d.el,d.anchor)},L=({el:d,anchor:p},m,E)=>{let _;for(;d&&d!==p;)_=f(d),s(d,m,E),d=_;s(p,m,E)},ne=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},ue=(d,p,m,E,_,k,O,C,R)=>{O=O||p.type==="svg",d==null?X(p,m,E,_,k,O,C,R):He(d,p,_,k,O,C,R)},X=(d,p,m,E,_,k,O,C)=>{let R,I;const{type:B,props:P,shapeFlag:$,transition:W,patchFlag:re,dirs:Ee}=d;if(d.el&&y!==void 0&&re===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,k,P&&P.is,P),$&8?l(R,d.children):$&16&&ge(d.children,R,null,E,_,k&&B!=="foreignObject",O,C),Ee&&An(d,null,E,"created"),P){for(const _e in P)_e!=="value"&&!Ci(_e)&&i(R,_e,null,P[_e],k,d.children,E,_,D);"value"in P&&i(R,"value",null,P.value),(I=P.onVnodeBeforeMount)&&It(I,E,d)}we(R,d,d.scopeId,O,E)}Ee&&An(d,null,E,"beforeMount");const fe=(!_||_&&!_.pendingBranch)&&W&&!W.persisted;fe&&W.beforeEnter(R),s(R,p,m),((I=P&&P.onVnodeMounted)||fe||Ee)&&nt(()=>{I&&It(I,E,d),fe&&W.enter(R),Ee&&An(d,null,E,"mounted")},_)},we=(d,p,m,E,_)=>{if(m&&g(d,m),E)for(let k=0;k<E.length;k++)g(d,E[k]);if(_){let k=_.subTree;if(p===k){const O=_.vnode;we(d,O,O.scopeId,O.slotScopeIds,_.parent)}}},ge=(d,p,m,E,_,k,O,C,R=0)=>{for(let I=R;I<d.length;I++){const B=d[I]=C?an(d[I]):Ct(d[I]);v(null,B,p,m,E,_,k,O,C)}},He=(d,p,m,E,_,k,O)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:B}=p;R|=d.patchFlag&16;const P=d.props||pe,$=p.props||pe;let W;m&&kn(m,!1),(W=$.onVnodeBeforeUpdate)&&It(W,m,p,d),B&&An(p,d,m,"beforeUpdate"),m&&kn(m,!0);const re=_&&p.type!=="foreignObject";if(I?qe(d.dynamicChildren,I,C,m,E,re,k):O||ht(d,p,C,null,m,E,re,k,!1),R>0){if(R&16)Je(C,p,P,$,m,E,_);else if(R&2&&P.class!==$.class&&i(C,"class",null,$.class,_),R&4&&i(C,"style",P.style,$.style,_),R&8){const Ee=p.dynamicProps;for(let fe=0;fe<Ee.length;fe++){const _e=Ee[fe],yt=P[_e],rs=$[_e];(rs!==yt||_e==="value")&&i(C,_e,yt,rs,_,d.children,m,E,D)}}R&1&&d.children!==p.children&&l(C,p.children)}else!O&&I==null&&Je(C,p,P,$,m,E,_);((W=$.onVnodeUpdated)||B)&&nt(()=>{W&&It(W,m,p,d),B&&An(p,d,m,"updated")},E)},qe=(d,p,m,E,_,k,O)=>{for(let C=0;C<p.length;C++){const R=d[C],I=p[C],B=R.el&&(R.type===St||!On(R,I)||R.shapeFlag&70)?h(R.el):m;v(R,I,B,null,E,_,k,O,!0)}},Je=(d,p,m,E,_,k,O)=>{if(m!==E){for(const C in E){if(Ci(C))continue;const R=E[C],I=m[C];R!==I&&C!=="value"&&i(d,C,I,R,O,p.children,_,k,D)}if(m!==pe)for(const C in m)!Ci(C)&&!(C in E)&&i(d,C,m[C],null,O,p.children,_,k,D);"value"in E&&i(d,"value",m.value,E.value)}},tn=(d,p,m,E,_,k,O,C,R)=>{const I=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:$,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(s(I,m,E),s(B,m,E),ge(p.children,m,B,_,k,O,C,R)):P>0&&P&64&&$&&d.dynamicChildren?(qe(d.dynamicChildren,$,m,_,k,O,C),(p.key!=null||_&&p===_.subTree)&&Od(d,p,!0)):ht(d,p,m,B,_,k,O,C,R)},ts=(d,p,m,E,_,k,O,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?_.ctx.activate(p,m,E,O,R):ns(p,m,E,_,k,O,R):De(d,p,R)},ns=(d,p,m,E,_,k,O)=>{const C=d.component=gw(d,E,_);if(Co(d)&&(C.ctx.renderer=ye),yw(C),C.asyncDep){if(_&&_.registerDep(C,me),!d.el){const R=C.subTree=st(Lt);N(null,R,p,m)}return}me(C,d,p,m,_,k,O)},De=(d,p,m)=>{const E=p.component=d.component;if(Tv(d,p,m))if(E.asyncDep&&!E.asyncResolved){le(E,p,m);return}else E.next=p,mv(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},me=(d,p,m,E,_,k,O)=>{const C=()=>{if(d.isMounted){let{next:B,bu:P,u:$,parent:W,vnode:re}=d,Ee=B,fe;kn(d,!1),B?(B.el=re.el,le(d,B,O)):B=re,P&&Ai(P),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&It(fe,W,B,re),kn(d,!0);const _e=fa(d),yt=d.subTree;d.subTree=_e,v(yt,_e,h(yt.el),F(yt),d,_,k),B.el=_e.el,Ee===null&&Iv(d,_e.el),$&&nt($,_),(fe=B.props&&B.props.onVnodeUpdated)&&nt(()=>It(fe,W,B,re),_)}else{let B;const{el:P,props:$}=p,{bm:W,m:re,parent:Ee}=d,fe=Ka(p);if(kn(d,!1),W&&Ai(W),!fe&&(B=$&&$.onVnodeBeforeMount)&&It(B,Ee,p),kn(d,!0),P&&Y){const _e=()=>{d.subTree=fa(d),Y(P,d.subTree,d,_,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=fa(d);v(null,_e,m,E,d,_,k),p.el=_e.el}if(re&&nt(re,_),!fe&&(B=$&&$.onVnodeMounted)){const _e=p;nt(()=>It(B,Ee,_e),_)}p.shapeFlag&256&&d.a&&nt(d.a,_),d.isMounted=!0,p=m=E=null}},R=d.effect=new jc(C,()=>ud(d.update),d.scope),I=d.update=R.run.bind(R);I.id=d.uid,kn(d,!0),I()},le=(d,p,m)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Wv(d,p.props,E,m),Xv(d,p.children,m),Us(),Qc(void 0,d.update),Fs()},ht=(d,p,m,E,_,k,O,C,R=!1)=>{const I=d&&d.children,B=d?d.shapeFlag:0,P=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){Vt(I,P,m,E,_,k,O,C,R);return}else if($&256){ss(I,P,m,E,_,k,O,C,R);return}}W&8?(B&16&&D(I,_,k),P!==I&&l(m,P)):B&16?W&16?Vt(I,P,m,E,_,k,O,C,R):D(I,_,k,!0):(B&8&&l(m,""),W&16&&ge(P,m,E,_,k,O,C,R))},ss=(d,p,m,E,_,k,O,C,R)=>{d=d||ds,p=p||ds;const I=d.length,B=p.length,P=Math.min(I,B);let $;for($=0;$<P;$++){const W=p[$]=R?an(p[$]):Ct(p[$]);v(d[$],W,m,null,_,k,O,C,R)}I>B?D(d,_,k,!0,!1,P):ge(p,m,E,_,k,O,C,R,P)},Vt=(d,p,m,E,_,k,O,C,R)=>{let I=0;const B=p.length;let P=d.length-1,$=B-1;for(;I<=P&&I<=$;){const W=d[I],re=p[I]=R?an(p[I]):Ct(p[I]);if(On(W,re))v(W,re,m,null,_,k,O,C,R);else break;I++}for(;I<=P&&I<=$;){const W=d[P],re=p[$]=R?an(p[$]):Ct(p[$]);if(On(W,re))v(W,re,m,null,_,k,O,C,R);else break;P--,$--}if(I>P){if(I<=$){const W=$+1,re=W<B?p[W].el:E;for(;I<=$;)v(null,p[I]=R?an(p[I]):Ct(p[I]),m,re,_,k,O,C,R),I++}}else if(I>$)for(;I<=P;)ft(d[I],_,k,!0),I++;else{const W=I,re=I,Ee=new Map;for(I=re;I<=$;I++){const it=p[I]=R?an(p[I]):Ct(p[I]);it.key!=null&&Ee.set(it.key,I)}let fe,_e=0;const yt=$-re+1;let rs=!1,ml=0;const Qs=new Array(yt);for(I=0;I<yt;I++)Qs[I]=0;for(I=W;I<=P;I++){const it=d[I];if(_e>=yt){ft(it,_,k,!0);continue}let Tt;if(it.key!=null)Tt=Ee.get(it.key);else for(fe=re;fe<=$;fe++)if(Qs[fe-re]===0&&On(it,p[fe])){Tt=fe;break}Tt===void 0?ft(it,_,k,!0):(Qs[Tt-re]=I+1,Tt>=ml?ml=Tt:rs=!0,v(it,p[Tt],m,null,_,k,O,C,R),_e++)}const yl=rs?tw(Qs):ds;for(fe=yl.length-1,I=yt-1;I>=0;I--){const it=re+I,Tt=p[it],vl=it+1<B?p[it+1].el:E;Qs[I]===0?v(null,Tt,m,vl,_,k,O,C,R):rs&&(fe<0||I!==yl[fe]?bt(Tt,m,vl,2):fe--)}}},bt=(d,p,m,E,_=null)=>{const{el:k,type:O,transition:C,children:R,shapeFlag:I}=d;if(I&6){bt(d.component.subTree,p,m,E);return}if(I&128){d.suspense.move(p,m,E);return}if(I&64){O.move(d,p,m,ye);return}if(O===St){s(k,p,m);for(let P=0;P<R.length;P++)bt(R[P],p,m,E);s(d.anchor,p,m);return}if(O===Di){L(d,p,m);return}if(E!==2&&I&1&&C)if(E===0)C.beforeEnter(k),s(k,p,m),nt(()=>C.enter(k),_);else{const{leave:P,delayLeave:$,afterLeave:W}=C,re=()=>s(k,p,m),Ee=()=>{P(k,()=>{re(),W&&W()})};$?$(k,re,Ee):Ee()}else s(k,p,m)},ft=(d,p,m,E=!1,_=!1)=>{const{type:k,props:O,ref:C,children:R,dynamicChildren:I,shapeFlag:B,patchFlag:P,dirs:$}=d;if(C!=null&&Qa(C,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const W=B&1&&$,re=!Ka(d);let Ee;if(re&&(Ee=O&&O.onVnodeBeforeUnmount)&&It(Ee,p,d),B&6)M(d.component,m,E);else{if(B&128){d.suspense.unmount(m,E);return}W&&An(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,_,ye,E):I&&(k!==St||P>0&&P&64)?D(I,p,m,!1,!0):(k===St&&P&384||!_&&B&16)&&D(R,p,m),E&&la(d)}(re&&(Ee=O&&O.onVnodeUnmounted)||W)&&nt(()=>{Ee&&It(Ee,p,d),W&&An(d,null,p,"unmounted")},m)},la=d=>{const{type:p,el:m,anchor:E,transition:_}=d;if(p===St){w(m,E);return}if(p===Di){ne(d);return}const k=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:O,delayLeave:C}=_,R=()=>O(m,k);C?C(d.el,k,R):R()}else k()},w=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:E,scope:_,update:k,subTree:O,um:C}=d;E&&Ai(E),_.stop(),k&&(k.active=!1,ft(O,d,p,m)),C&&nt(C,p),nt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},D=(d,p,m,E=!1,_=!1,k=0)=>{for(let O=k;O<d.length;O++)ft(d[O],p,m,E,_)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,m)=>{d==null?p._vnode&&ft(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,m),fd(),p._vnode=d},ye={p:v,um:ft,m:bt,r:la,mt:ns,mc:ge,pc:ht,pbc:qe,n:F,o:t};let ee,Y;return e&&([ee,Y]=e(ye)),{render:he,hydrate:ee,createApp:Jv(he,ee)}}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Od(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||Od(o,a))}}function tw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nw=t=>t.__isTeleport,Pd="components";function Bk(t,e){return rw(Pd,t,!0,e)||t}const sw=Symbol();function rw(t,e,n=!0,s=!1){const r=gt||Me;if(r){const i=r.type;if(t===Pd){const a=Ew(i);if(a&&(a===e||a===Mt(e)||a===bo(Mt(e))))return i}const o=Bl(r[t]||i[t],e)||Bl(r.appContext[t],e);return!o&&s?i:o}}function Bl(t,e){return t&&(t[e]||t[Mt(e)]||t[bo(Mt(e))])}const St=Symbol(void 0),Jc=Symbol(void 0),Lt=Symbol(void 0),Di=Symbol(void 0),hr=[];let Vn=null;function iw(t=!1){hr.push(Vn=t?null:[])}function ow(){hr.pop(),Vn=hr[hr.length-1]||null}let Ki=1;function $l(t){Ki+=t}function xd(t){return t.dynamicChildren=Ki>0?Vn||ds:null,ow(),Ki>0&&Vn&&Vn.push(t),t}function $k(t,e,n,s,r,i){return xd(Ld(t,e,n,s,r,i,!0))}function aw(t,e,n,s,r){return xd(st(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const ko="__vInternal",Md=({key:t})=>t!=null?t:null,Ni=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Be(t)||J(t)?{i:gt,r:t,k:e,f:!!n}:t:null;function Ld(t,e=null,n=null,s=0,r=null,i=t===St?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Md(e),ref:e&&Ni(e),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Ki>0&&!o&&Vn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vn.push(c),c}const st=cw;function cw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===sw)&&(t=Lt),Xa(t)){const a=Es(t,e,!0);return n&&Zc(a,n),a}if(bw(t)&&(t=t.__vccOpts),e){e=uw(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Mc(a)),Ae(c)&&(ed(c)&&!q(c)&&(c=Qe({},c)),e.style=xc(c))}const o=Le(t)?1:Sv(t)?128:nw(t)?64:Ae(t)?4:J(t)?2:0;return Ld(t,e,n,s,r,o,i,!0)}function uw(t){return t?ed(t)||ko in t?Qe({},t):t:null}function Es(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?hw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Md(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Ni(e)):[r,Ni(e)]:Ni(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Es(t.ssContent),ssFallback:t.ssFallback&&Es(t.ssFallback),el:t.el,anchor:t.anchor}}function lw(t=" ",e=0){return st(Jc,null,t,e)}function jk(t,e){const n=st(Di,null,t);return n.staticCount=e,n}function Hk(t="",e=!1){return e?(iw(),aw(Lt,null,t)):st(Lt,null,t)}function Ct(t){return t==null||typeof t=="boolean"?st(Lt):q(t)?st(St,null,t.slice()):typeof t=="object"?an(t):st(Jc,null,String(t))}function an(t){return t.el===null||t.memo?t:Es(t)}function Zc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ko in e)?e._ctx=gt:r===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),s&64?(n=16,e=[lw(e)]):n=8);t.children=e,t.shapeFlag|=n}function hw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mc([e.class,s.class]));else if(r==="style")e.style=xc([e.style,s.style]);else if(wo(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function It(t,e,n,s=null){mt(t,e,7,[n,s])}function qk(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Le(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ya=t=>t?Ud(t)?eu(t)||t.proxy:Ya(t.parent):null,zi=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$emit:t=>t.emit,$options:t=>Sd(t),$forceUpdate:t=>()=>ud(t.update),$nextTick:t=>cd.bind(t.proxy),$watch:t=>Av.bind(t)}),fw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==pe&&ie(s,e))return o[e]=1,s[e];if(r!==pe&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==pe&&ie(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const l=zi[e];let h,f;if(l)return e==="$attrs"&&ut(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==pe&&ie(r,e)?(r[e]=n,!0):s!==pe&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&ie(t,o)||e!==pe&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(zi,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},dw=Nd();let pw=0;function gw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||dw,i={uid:pw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new $f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,r),emitsOptions:pd(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wv.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const mw=()=>Me||gt,bs=t=>{Me=t,t.scope.on()},Bn=()=>{Me&&Me.scope.off(),Me=null};function Ud(t){return t.vnode.shapeFlag&4}let Ir=!1;function yw(t,e=!1){Ir=e;const{props:n,children:s}=t.vnode,r=Ud(t);zv(t,n,r,e),Qv(t,s);const i=r?vw(t,e):void 0;return Ir=!1,i}function vw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=td(new Proxy(t.ctx,fw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?_w(t):null;bs(t),Us();const i=mn(s,t,0,[t.props,r]);if(Fs(),Bn(),Ff(i)){if(i.then(Bn,Bn),e)return i.then(o=>{jl(t,o,e)}).catch(o=>{Io(o,t,0)});t.asyncDep=i}else jl(t,i,e)}else Fd(t,e)}function jl(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=od(e)),Fd(t,n)}let Hl;function Fd(t,e,n){const s=t.type;if(!t.render){if(!e&&Hl&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Qe(Qe({isCustomElement:i,delimiters:a},o),c);s.render=Hl(r,u)}}t.render=s.render||_t}bs(t),Us(),$v(t),Fs(),Bn()}function ww(t){return new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}})}function _w(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ww(t))},slots:t.slots,emit:t.emit,expose:e}}function eu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(od(td(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zi)return zi[n](t)}}))}function Ew(t){return J(t)&&t.displayName||t.name}function bw(t){return J(t)&&"__vccOpts"in t}const vt=(t,e)=>dv(t,e,Ir);function Vd(t,e,n){const s=arguments.length;return s===2?Ae(e)&&!q(e)?Xa(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xa(n)&&(n=[n]),st(t,e,n))}const Tw="3.2.31",Iw="http://www.w3.org/2000/svg",Pn=typeof document!="undefined"?document:null,ql=Pn&&Pn.createElement("template"),Sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Pn.createElementNS(Iw,t):Pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ql.innerHTML=s?`<svg>${t}</svg>`:t;const a=ql.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Aw(t,e,n){const s=t.style,r=Le(n);if(n&&!r){for(const i in n)Ja(s,i,n[i]);if(e&&!Le(e))for(const i in e)n[i]==null&&Ja(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Kl=/\s*!important$/;function Ja(t,e,n){if(q(n))n.forEach(s=>Ja(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=kw(t,e);Kl.test(n)?t.setProperty(Ls(s),n.replace(Kl,""),"important"):t[s]=n}}const zl=["Webkit","Moz","ms"],pa={};function kw(t,e){const n=pa[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return pa[e]=s;s=bo(s);for(let r=0;r<zl.length;r++){const i=zl[r]+s;if(i in t)return pa[e]=i}return e}const Wl="http://www.w3.org/1999/xlink";function Rw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wl,e.slice(6,e.length)):t.setAttributeNS(Wl,e,n);else{const i=Ty(e);n==null||i&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Lf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Wi=Date.now,Bd=!1;if(typeof window!="undefined"){Wi()>document.createEvent("Event").timeStamp&&(Wi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Bd=!!(t&&Number(t[1])<=53)}let Za=0;const Nw=Promise.resolve(),Ow=()=>{Za=0},Pw=()=>Za||(Nw.then(Ow),Za=Wi());function un(t,e,n,s){t.addEventListener(e,n,s)}function xw(t,e,n,s){t.removeEventListener(e,n,s)}function Mw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Lw(e);if(s){const u=i[e]=Uw(s,r);un(t,a,u,c)}else o&&(xw(t,a,o,c),i[e]=void 0)}}const Gl=/(?:Once|Passive|Capture)$/;function Lw(t){let e;if(Gl.test(t)){e={};let n;for(;n=t.match(Gl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ls(t.slice(2)),e]}function Uw(t,e){const n=s=>{const r=s.timeStamp||Wi();(Bd||r>=n.attached-1)&&mt(Fw(s,n.value),e,5,[s])};return n.value=t,n.attached=Pw(),n}function Fw(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ql=/^on[a-z]/,Vw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cw(t,s,r):e==="style"?Aw(t,n,s):wo(e)?Uc(e)||Mw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bw(t,e,s,r))?Dw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rw(t,e,s,r))};function Bw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ql.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ql.test(e)&&Le(n)?!1:e in t}const $w={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dv.props;const Ts=t=>{const e=t.props["onUpdate:modelValue"];return q(e)?n=>Ai(e,n):e};function jw(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,Hw(e,"input"))}function Hw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Kk={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ts(r);const i=s||r.props&&r.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=$i(a)),t._assign(a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",jw),un(t,"compositionend",Xl),un(t,"change",Xl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ts(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&$i(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},zk={deep:!0,created(t,e,n){t._assign=Ts(n),un(t,"change",()=>{const s=t._modelValue,r=Sr(t),i=t.checked,o=t._assign;if(q(s)){const a=Lc(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Ms(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o($d(t,i))})},mounted:Yl,beforeUpdate(t,e,n){t._assign=Ts(n),Yl(t,e,n)}};function Yl(t,{value:e,oldValue:n},s){t._modelValue=e,q(e)?t.checked=Lc(e,s.props.value)>-1:Ms(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=jr(e,$d(t,!0)))}const Wk={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ms(e);un(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$i(Sr(o)):Sr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ts(s)},mounted(t,{value:e}){Jl(t,e)},beforeUpdate(t,e,n){t._assign=Ts(n)},updated(t,{value:e}){Jl(t,e)}};function Jl(t,e){const n=t.multiple;if(!(n&&!q(e)&&!Ms(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Sr(i);if(n)q(e)?i.selected=Lc(e,o)>-1:i.selected=e.has(o);else if(jr(Sr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Sr(t){return"_value"in t?t._value:t.value}function $d(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qw=["ctrl","shift","alt","meta"],Kw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qw.some(n=>t[`${n}Key`]&&!e.includes(n))},Gk=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Kw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Qk={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Xs(t,!0),s.enter(t)):s.leave(t,()=>{Xs(t,!1)}):Xs(t,e))},beforeUnmount(t,{value:e}){Xs(t,e)}};function Xs(t,e){t.style.display=e?t._vod:"none"}const zw=Qe({patchProp:Vw},Sw);let Zl;function Ww(){return Zl||(Zl=Zv(zw))}const Xk=(...t)=>{const e=Ww().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Gw(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gw(t){return Le(t)?document.querySelector(t):t}var eh;const Qw=typeof window!="undefined";Qw&&((eh=window==null?void 0:window.navigator)==null?void 0:eh.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Yk(t){let e=!1,n;const s=My(!0);return()=>(e||(n=s.run(t),e=!0),n)}function Jk(t){const e=rd(t.currentUser),n=vt(()=>!!e.value);return t.onIdTokenChanged(s=>e.value=s),{isAuthenticated:n,user:e}}/**
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
 */const jd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Xw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yw=function(t){const e=jd(t);return Hd.encodeByteArray(e,!0)},Gi=function(t){return Yw(t).replace(/\./g,"")},qd=function(t){try{return Hd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Zw(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n_(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s_(){return typeof indexedDB=="object"}function r_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function i_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const o_=()=>i_().__FIREBASE_DEFAULTS__,a_=()=>{!(typeof process=="undefined"||typeof process.env=="undefined")},c_=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qd(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return o_()||a_()||c_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kd=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zd=t=>{const e=Kd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},u_=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},Wd=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class l_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Gd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gi(JSON.stringify(n)),Gi(JSON.stringify(o)),a].join(".")}/**
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
 */const h_="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=h_,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?f_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ft(r,a,s)}}function f_(t,e){return t.replace(d_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const d_=/\{\$([^}]+)}/g;function p_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(th(i)&&th(o)){if(!Qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function th(t){return t!==null&&typeof t=="object"}/**
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
 */function Kr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g_(t,e){const n=new m_(t,e);return n.subscribe.bind(n)}class m_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");y_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ga),r.error===void 0&&(r.error=ga),r.complete===void 0&&(r.complete=ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class v_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new l_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(__(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:w_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w_(t){return t===Nn?void 0:t}function __(t){return t.instantiationMode==="EAGER"}/**
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
 */class E_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const b_={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},T_=oe.INFO,I_={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},S_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=I_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=T_,this._logHandler=S_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const C_=(t,e)=>e.some(n=>t instanceof n);let nh,sh;function A_(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k_(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qd=new WeakMap,ec=new WeakMap,Xd=new WeakMap,ma=new WeakMap,su=new WeakMap;function R_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qd.set(n,t)}).catch(()=>{}),su.set(e,t),e}function D_(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N_(t){tc=t(tc)}function O_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ya(this),e,...n);return Xd.set(s,e.sort?e.sort():[e]),yn(s)}:k_().includes(t)?function(...e){return t.apply(ya(this),e),yn(Qd.get(this))}:function(...e){return yn(t.apply(ya(this),e))}}function P_(t){return typeof t=="function"?O_(t):(t instanceof IDBTransaction&&D_(t),C_(t,A_())?new Proxy(t,tc):t)}function yn(t){if(t instanceof IDBRequest)return R_(t);if(ma.has(t))return ma.get(t);const e=P_(t);return e!==t&&(ma.set(t,e),su.set(e,t)),e}const ya=t=>su.get(t);function x_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yn(o.result),c.oldVersion,c.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const M_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],va=new Map;function rh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=L_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||M_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return va.set(e,i),i}N_(t=>bl(El({},t),{get:(e,n,s)=>rh(e,n)||t.get(e,n,s),has:(e,n)=>!!rh(e,n)||t.has(e,n)}));/**
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
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function F_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",ih="0.8.4";/**
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
 */const Kn=new nu("@firebase/app"),V_="@firebase/app-compat",B_="@firebase/analytics-compat",$_="@firebase/analytics",j_="@firebase/app-check-compat",H_="@firebase/app-check",q_="@firebase/auth",K_="@firebase/auth-compat",z_="@firebase/database",W_="@firebase/database-compat",G_="@firebase/functions",Q_="@firebase/functions-compat",X_="@firebase/installations",Y_="@firebase/installations-compat",J_="@firebase/messaging",Z_="@firebase/messaging-compat",eE="@firebase/performance",tE="@firebase/performance-compat",nE="@firebase/remote-config",sE="@firebase/remote-config-compat",rE="@firebase/storage",iE="@firebase/storage-compat",oE="@firebase/firestore",aE="@firebase/firestore-compat",cE="firebase",uE="9.14.0";/**
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
 */const sc="[DEFAULT]",lE={[nc]:"fire-core",[V_]:"fire-core-compat",[$_]:"fire-analytics",[B_]:"fire-analytics-compat",[H_]:"fire-app-check",[j_]:"fire-app-check-compat",[q_]:"fire-auth",[K_]:"fire-auth-compat",[z_]:"fire-rtdb",[W_]:"fire-rtdb-compat",[G_]:"fire-fn",[Q_]:"fire-fn-compat",[X_]:"fire-iid",[Y_]:"fire-iid-compat",[J_]:"fire-fcm",[Z_]:"fire-fcm-compat",[eE]:"fire-perf",[tE]:"fire-perf-compat",[nE]:"fire-rc",[sE]:"fire-rc-compat",[rE]:"fire-gcs",[iE]:"fire-gcs-compat",[oE]:"fire-fst",[aE]:"fire-fst-compat","fire-js":"fire-js",[cE]:"fire-js-all"};/**
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
 */const Xi=new Map,rc=new Map;function hE(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(rc.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of Xi.values())hE(n,t);return!0}function Ro(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new qr("app","Firebase",fE);/**
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
 */class dE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=uE;function pE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=u_()),!n)throw vn.create("no-options");const i=Xi.get(r);if(i){if(Qi(n,i.options)&&Qi(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new E_(r);for(const c of rc.values())o.addComponent(c);const a=new dE(n,s,o);return Xi.set(r,a),a}function ru(t=sc){const e=Xi.get(t);if(!e&&t===sc)return pE();if(!e)throw vn.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let r=(s=lE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}zn(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const gE="firebase-heartbeat-database",mE=1,Cr="firebase-heartbeat-store";let wa=null;function Yd(){return wa||(wa=x_(gE,mE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),wa}async function yE(t){var e;try{return(await Yd()).transaction(Cr).objectStore(Cr).get(Jd(t))}catch(n){if(n instanceof Ft)Kn.warn(n.message);else{const s=vn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Kn.warn(s.message)}}}async function oh(t,e){var n;try{const r=(await Yd()).transaction(Cr,"readwrite");return await r.objectStore(Cr).put(e,Jd(t)),r.done}catch(s){if(s instanceof Ft)Kn.warn(s.message);else{const r=vn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Kn.warn(r.message)}}}function Jd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vE=1024,wE=30*24*60*60*1e3;class _E{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ah();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=wE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ah(),{heartbeatsToSend:n,unsentEntries:s}=EE(this._heartbeatsCache.heartbeats),r=Gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ah(){return new Date().toISOString().substring(0,10)}function EE(t,e=vE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ch(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ch(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s_()?r_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ch(t){return Gi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TE(t){zn(new En("platform-logger",e=>new U_(e),"PRIVATE")),zn(new En("heartbeat",e=>new _E(e),"PRIVATE")),Rt(nc,ih,t),Rt(nc,ih,"esm2017"),Rt("fire-js","")}TE("");/*! *****************************************************************************
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
***************************************************************************** */function iu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Zd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IE=Zd,ep=new qr("auth","Firebase",Zd());/**
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
 */const uh=new nu("@firebase/auth");function Oi(t,...e){uh.logLevel<=oe.ERROR&&uh.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw ou(t,...e)}function Dt(t,...e){return ou(t,...e)}function SE(t,e,n){const s=Object.assign(Object.assign({},IE()),{[e]:n});return new qr("auth","Firebase",s).create(e,{appName:t.name})}function ou(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ep.create(t,...e)}function K(t,e,...n){if(!t)throw ou(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Qt(t,e){t||jt(e)}/**
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
 */const lh=new Map;function Ht(t){Qt(t instanceof Function,"Expected a class definition");let e=lh.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lh.set(t,e),e)}/**
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
 */function CE(t,e){const n=Ro(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Qi(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function AE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ic(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kE(){return hh()==="http:"||hh()==="https:"}function hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kE()||e_()||"connection"in navigator)?navigator.onLine:!0}function DE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Jw()||t_()}get(){return RE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function au(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const OE=new zr(3e4,6e4);function Do(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,s,r={}){return np(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Kr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),tp.fetch()(sp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function np(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NE),e);try{const r=new PE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw SE(t,l,u);Et(t,l)}}catch(r){if(r instanceof Ft)throw r;Et(t,"network-request-failed")}}async function No(t,e,n,s,r={}){const i=await Wr(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?au(t.config,r):`${t.config.apiScheme}://${r}`}class PE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),OE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function xE(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function ME(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LE(t,e=!1){const n=Ie(t),s=await n.getIdToken(e),r=cu(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:fr(_a(r.auth_time)),issuedAtTime:fr(_a(r.iat)),expirationTime:fr(_a(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _a(t){return Number(t)*1e3}function cu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=qd(s);return i?JSON.parse(i):(Oi("Failed to decode base64 JWT payload"),null)}catch(i){return Oi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function UE(t){const e=cu(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&FE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function FE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Is(t,ME(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?jE(i.providerUserInfo):[],a=$E(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function BE(t){const e=Ie(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $E(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function jE(t){return t.map(e=>{var{providerId:n}=e,s=iu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function HE(t,e){const n=await np(t,{},async()=>{const s=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=sp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):UE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await HE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ar;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function sn(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LE(this,e)}reload(){return BE(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Is(this,xE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:j,emailVerified:L,isAnonymous:ne,providerData:ue,stsTokenManager:X}=n;K(j&&X,e,"internal-error");const we=Ar.fromJSON(this.name,X);K(typeof j=="string",e,"internal-error"),sn(h,e.name),sn(f,e.name),K(typeof L=="boolean",e,"internal-error"),K(typeof ne=="boolean",e,"internal-error"),sn(g,e.name),sn(y,e.name),sn(b,e.name),sn(v,e.name),sn(A,e.name),sn(N,e.name);const ge=new $n({uid:j,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:ne,photoURL:y,phoneNumber:g,tenantId:b,stsTokenManager:we,createdAt:A,lastLoginAt:N});return ue&&Array.isArray(ue)&&(ge.providerData=ue.map(He=>Object.assign({},He))),v&&(ge._redirectEventId=v),ge}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ar;r.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yi(i),i}}/**
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
 */class ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ip.type="NONE";const fh=ip;/**
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
 */function Pi(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Pi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ms(Ht(fh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Ht(fh);const o=Pi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=$n._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ms(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ms(i,e,s))}}/**
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
 */function dh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lp(e))return"Blackberry";if(hp(e))return"Webos";if(uu(e))return"Safari";if((e.includes("chrome/")||ap(e))&&!e.includes("edge/"))return"Chrome";if(up(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function op(t=Xe()){return/firefox\//i.test(t)}function uu(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ap(t=Xe()){return/crios\//i.test(t)}function cp(t=Xe()){return/iemobile/i.test(t)}function up(t=Xe()){return/android/i.test(t)}function lp(t=Xe()){return/blackberry/i.test(t)}function hp(t=Xe()){return/webos/i.test(t)}function Oo(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qE(t=Xe()){var e;return Oo(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function KE(){return n_()&&document.documentMode===10}function fp(t=Xe()){return Oo(t)||up(t)||hp(t)||lp(t)||/windows phone/i.test(t)||cp(t)}function zE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dp(t,e=[]){let n;switch(t){case"Browser":n=dh(Xe());break;case"Worker":n=`${dh(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class WE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class GE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ph(this),this.idTokenSubscription=new ph(this),this.beforeStateQueue=new WE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Yi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Po(t){return Ie(t)}class ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=g_(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function QE(t,e,n){const s=Po(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n==null?void 0:n.disableWarnings),i=pp(e),{host:o,port:a}=XE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||YE()}function pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XE(t){const e=pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:gh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:gh(o)}}}function gh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function gp(t,e){return Wr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JE(t,e){return No(t,"POST","/v1/accounts:signInWithPassword",Do(t,e))}/**
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
 */async function ZE(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",Do(t,e))}async function eb(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",Do(t,e))}/**
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
 */class kr extends lu{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new kr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new kr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return JE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZE(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eb(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return No(t,"POST","/v1/accounts:signInWithIdp",Do(t,e))}/**
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
 */const tb="http://localhost";class Wn extends lu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=iu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kr(n)}return e}}/**
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
 */function nb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sb(t){const e=nr(sr(t)).link,n=e?nr(sr(e)).deep_link_id:null,s=nr(sr(t)).deep_link_id;return(s?nr(sr(s)).link:null)||s||n||e||t}class hu{constructor(e){var n,s,r,i,o,a;const c=nr(sr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=nb((r=c.mode)!==null&&r!==void 0?r:null);K(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sb(e);try{return new hu(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return kr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hu.parseLink(n);return K(s,"argument-error"),kr._fromEmailAndCode(e,s.code,s.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends mp{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ln extends Gr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class hn extends Gr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class fn extends Gr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class dn extends Gr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await $n._fromIdTokenResponse(e,s,r),o=mh(s);return new Ss({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=mh(s);return new Ss({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function mh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ji extends Ft{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ji(e,n,s,r)}}function yp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(t,i,e,s):i})}async function rb(t,e,n=!1){const s=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",s)}/**
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
 */async function vp(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Is(t,yp(r,i,e,t),n);K(o.idToken,r,"internal-error");const a=cu(o.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(t.uid===c,r,"user-mismatch"),Ss._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),o}}/**
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
 */async function wp(t,e,n=!1){const s="signIn",r=await yp(t,s,e),i=await Ss._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ib(t,e){return wp(Po(t),e)}async function Zk(t,e){return vp(Ie(t),e)}function eR(t,e,n){return ib(Ie(t),Bs.credential(e,n))}function tR(t,e){return ob(Ie(t),null,e)}async function ob(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Is(t,gp(s,i));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function nR(t,e){return Ie(t).setPersistence(e)}function ab(t,e,n,s){return Ie(t).onIdTokenChanged(e,n,s)}function cb(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function sR(t,e,n,s){return Ie(t).onAuthStateChanged(e,n,s)}function rR(t){return Ie(t).signOut()}const Zi="__sak";/**
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
 */class _p{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ub(){const t=Xe();return uu(t)||Oo(t)}const lb=1e3,hb=10;class Ep extends _p{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ub()&&zE(),this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);KE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ep.type="LOCAL";const fb=Ep;/**
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
 */class bp extends _p{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bp.type="SESSION";const Tp=bp;/**
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
 */function db(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await db(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
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
 */function fu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=fu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function gb(t){Nt().location.href=t}/**
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
 */function Ip(){return typeof Nt().WorkerGlobalScope!="undefined"&&typeof Nt().importScripts=="function"}async function mb(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vb(){return Ip()?self:null}/**
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
 */const Sp="firebaseLocalStorageDb",wb=1,eo="firebaseLocalStorage",Cp="fbase_key";class Qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function _b(){const t=indexedDB.deleteDatabase(Sp);return new Qr(t).toPromise()}function oc(){const t=indexedDB.open(Sp,wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(eo,{keyPath:Cp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(eo)?e(s):(s.close(),await _b(),e(await oc()))})})}async function yh(t,e,n){const s=Mo(t,!0).put({[Cp]:e,value:n});return new Qr(s).toPromise()}async function Eb(t,e){const n=Mo(t,!1).get(e),s=await new Qr(n).toPromise();return s===void 0?null:s.value}function vh(t,e){const n=Mo(t,!0).delete(e);return new Qr(n).toPromise()}const bb=800,Tb=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Tb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oc();return await yh(e,Zi,"1"),await vh(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Eb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Mo(r,!1).getAll();return new Qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const Ib=Ap;/**
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
 */function Sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Cb(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Sb().appendChild(s)})}function Ab(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zr(3e4,6e4);/**
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
 */function kb(t,e){return e?Ht(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class du extends lu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rb(t){return wp(t.auth,new du(t),t.bypassAuthState)}function Db(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),vp(n,new du(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),rb(n,new du(t),t.bypassAuthState)}/**
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
 */class kp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rb;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return Db;default:Et(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ob=new zr(2e3,1e4);class ls extends kp{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ob.get())};e()}}ls.currentPopupAction=null;/**
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
 */const Pb="pendingRedirect",xi=new Map;class xb extends kp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const s=await Mb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mb(t,e){const n=Fb(e),s=Ub(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Lb(t,e){xi.set(t._key(),e)}function Ub(t){return Ht(t._redirectPersistence)}function Fb(t){return Pi(Pb,t.config.apiKey,t.name)}async function Vb(t,e,n=!1){const s=Po(t),r=kb(s,e),o=await new xb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Bb=10*60*1e3;class $b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Rp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(wh(e))}saveEventToCache(e){this.cachedEventUids.add(wh(e)),this.lastProcessedEventTime=Date.now()}}function wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(t);default:return!1}}/**
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
 */async function Hb(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
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
 */const qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kb=/^https?/;async function zb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hb(t);for(const n of e)try{if(Wb(n))return}catch{}Et(t,"unauthorized-domain")}function Wb(t){const e=ic(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Kb.test(n))return!1;if(qb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Gb=new zr(3e4,6e4);function _h(){const t=Nt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var s,r,i;function o(){_h(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_h(),n(Dt(t,"network-request-failed"))},timeout:Gb.get()})}if((r=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((i=Nt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Ab("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},Cb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function Xb(t){return Mi=Mi||Qb(t),Mi}/**
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
 */const Yb=new zr(5e3,15e3),Jb="__/auth/iframe",Zb="emulator/auth/iframe",e0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,Zb):`https://${t.config.authDomain}/${Jb}`,s={apiKey:e.apiKey,appName:t.name,v:Vs},r=t0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Kr(s).slice(1)}`}async function s0(t){const e=await Xb(t),n=Nt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:n0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},Yb.get());function c(){Nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const r0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,o0=600,a0="_blank",c0="http://localhost";class Eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u0(t,e,n,s=i0,r=o0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},r0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Xe().toLowerCase();n&&(a=ap(u)?a0:n),op(u)&&(e=e||c0,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(qE(u)&&a!=="_self")return l0(e||"",a),new Eh(null);const h=window.open(e||"",a,l);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Eh(h)}function l0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const h0="__/auth/handler",f0="emulator/auth/handler";function bh(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vs,eventId:r};if(e instanceof mp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",p_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Gr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${d0(t)}?${Kr(a).slice(1)}`}function d0({config:t}){return t.emulator?au(t,f0):`https://${t.authDomain}/${h0}`}/**
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
 */const Ea="webStorageSupport";class p0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=Vb,this._overrideRedirectResult=Lb}async _openPopup(e,n,s,r){var i;Qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=bh(e,n,s,ic(),r);return u0(e,o,fu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),gb(bh(e,n,s,ic(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await s0(e),s=new $b(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ea,{type:Ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ea];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fp()||uu()||Oo()}}const g0=p0;var Th="@firebase/auth",Ih="0.20.11";/**
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
 */class m0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function y0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function v0(t){zn(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o==null?void 0:o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(t)},l=new GE(a,c,u);return AE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zn(new En("auth-internal",e=>{const n=Po(e.getProvider("auth").getImmediate());return(s=>new m0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Th,Ih,y0(t)),Rt(Th,Ih,"esm2017")}/**
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
 */const w0=5*60,_0=Wd("authIdTokenMaxAge")||w0;let Sh=null;const E0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_0)return;const r=n==null?void 0:n.token;Sh!==r&&(Sh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function iR(t=ru()){const e=Ro(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CE(t,{popupRedirectResolver:g0,persistence:[Ib,fb,Tp]}),s=Wd("authTokenSyncURL");if(s){const i=E0(s);cb(n,i,()=>i(n.currentUser)),ab(n,o=>i(o))}const r=Kd("auth");return r&&QE(n,`http://${r}`),n}v0("Browser");var b0="firebase",T0="9.14.0";/**
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
 */Rt(b0,T0,"app");var I0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,pu=pu||{},z=I0||self;function to(){}function Lo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function S0(t){return Object.prototype.hasOwnProperty.call(t,ba)&&t[ba]||(t[ba]=++C0)}var ba="closure_uid_"+(1e9*Math.random()>>>0),C0=0;function A0(t,e,n){return t.call.apply(t.bind,arguments)}function k0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=A0:We=k0,We.apply(null,arguments)}function vi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var R0=0;Sn.prototype.s=!1;Sn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),R0!=0)&&S0(this)};Sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ch(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Lo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var D0=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",to,e),z.removeEventListener("test",to,e)}catch{}return t}();function no(t){return/^[\s\xa0]*$/.test(t)}var Ah=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ta(t,e){return t<e?-1:t>e?1:0}function Uo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function At(t){return Uo().indexOf(t)!=-1}function mu(t){return mu[" "](t),t}mu[" "]=to;function N0(t){var e=x0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var O0=At("Opera"),Cs=At("Trident")||At("MSIE"),Np=At("Edge"),ac=Np||Cs,Op=At("Gecko")&&!(Uo().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),P0=Uo().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function Pp(){var t=z.document;return t?t.documentMode:void 0}var so;e:{var Ia="",Sa=function(){var t=Uo();if(Op)return/rv:([^\);]+)(\)|;)/.exec(t);if(Np)return/Edge\/([\d\.]+)/.exec(t);if(Cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(P0)return/WebKit\/(\S+)/.exec(t);if(O0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sa&&(Ia=Sa?Sa[1]:""),Cs){var Ca=Pp();if(Ca!=null&&Ca>parseFloat(Ia)){so=String(Ca);break e}}so=Ia}var x0={};function M0(){return N0(function(){let t=0;const e=Ah(String(so)).split("."),n=Ah("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ta(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ta(r[2].length==0,i[2].length==0)||Ta(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var cc;if(z.document&&Cs){var kh=Pp();cc=kh||parseInt(so,10)||void 0}else cc=void 0;var L0=cc;function Rr(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Op){e:{try{mu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:U0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rr.X.h.call(this)}}je(Rr,Ge);var U0={2:"touch",3:"pen",4:"mouse"};Rr.prototype.h=function(){Rr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),F0=0;function V0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++F0,this.ba=this.ea=!1}function Fo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function xp(t){const e={};for(const n in t)e[n]=t[n];return e}const Rh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Rh.length;i++)n=Rh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Vo(t){this.src=t,this.g={},this.h=0}Vo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new V0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Dp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Fo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),Aa={};function Lp(t,e,n,s,r){if(s&&s.once)return Fp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Yr]?t.N(e,n,Xr(s)?!!s.capture:!!s,r):Up(t,e,n,!1,s,r)}function Up(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Xr(r)?!!r.capture:!!r,a=_u(t);if(a||(t[vu]=a=new Vo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=B0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)D0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Bp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function B0(){function t(n){return e.call(t.src,t.listener,n)}const e=$0;return t}function Fp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Yr]?t.O(e,n,Xr(s)?!!s.capture:!!s,r):Up(t,e,n,!0,s,r)}function Vp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Vp(t,e[i],n,s,r);else s=Xr(s)?!!s.capture:!!s,n=Eu(n),t&&t[Yr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lc(i,n,s,r),-1<n&&(Fo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lc(e,n,s,r)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yr])uc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Bp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_u(e))?(uc(n,t),n.h==0&&(n.src=null,e[vu]=null)):Fo(t)}}}function Bp(t){return t in Aa?Aa[t]:Aa[t]="on"+t}function $0(t,e){if(t.ba)t=!0;else{e=new Rr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wu(t),t=n.call(s,e)}return t}function _u(t){return t=t[vu],t instanceof Vo?t:null}var ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[ka]||(t[ka]=function(e){return t.handleEvent(e)}),t[ka])}function Ue(){Sn.call(this),this.i=new Vo(this),this.P=this,this.I=null}je(Ue,Sn);Ue.prototype[Yr]=!0;Ue.prototype.removeEventListener=function(t,e,n,s){Vp(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),Mp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=wi(o,s,!0,e)&&r}if(o=e.g=t,r=wi(o,s,!0,e)&&r,r=wi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=wi(o,s,!1,e)&&r}Ue.prototype.M=function(){if(Ue.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fo(n[s]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ue.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function wi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&uc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var bu=z.JSON.stringify;function j0(){var t=Hp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class H0{constructor(){this.h=this.g=null}add(e,n){const s=$p.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var $p=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new q0,t=>t.reset());class q0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function K0(t){z.setTimeout(()=>{throw t},0)}function jp(t,e){hc||z0(),fc||(hc(),fc=!0),Hp.add(t,e)}var hc;function z0(){var t=z.Promise.resolve(void 0);hc=function(){t.then(W0)}}var fc=!1,Hp=new H0;function W0(){for(var t;t=j0();){try{t.h.call(t.g)}catch(n){K0(n)}var e=$p;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fc=!1}function Bo(t,e){Ue.call(this),this.h=t||1,this.g=e||z,this.j=We(this.lb,this),this.l=Date.now()}je(Bo,Ue);x=Bo.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(Tu(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){Bo.X.M.call(this),Tu(this),delete this.g};function Iu(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function qp(t){t.g=Iu(()=>{t.g=null,t.i&&(t.i=!1,qp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class G0 extends Sn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(t){Sn.call(this),this.h=t,this.g={}}je(Dr,Sn);var Dh=[];function Kp(t,e,n,s){Array.isArray(n)||(n&&(Dh[0]=n.toString()),n=Dh);for(var r=0;r<n.length;r++){var i=Lp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function zp(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}Dr.prototype.M=function(){Dr.X.M.call(this),zp(this)};Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $o(){this.g=!0}$o.prototype.Aa=function(){this.g=!1};function Q0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function X0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+J0(t,n)+(s?" "+s:"")})}function Y0(t,e){t.info(function(){return"TIMEOUT: "+e})}$o.prototype.info=function(){};function J0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bu(n)}catch{return e}}var Jn={},Nh=null;function jo(){return Nh=Nh||new Ue}Jn.Pa="serverreachability";function Wp(t){Ge.call(this,Jn.Pa,t)}je(Wp,Ge);function Nr(t){const e=jo();$e(e,new Wp(e))}Jn.STAT_EVENT="statevent";function Gp(t,e){Ge.call(this,Jn.STAT_EVENT,t),this.stat=e}je(Gp,Ge);function tt(t){const e=jo();$e(e,new Gp(e,t))}Jn.Qa="timingevent";function Qp(t,e){Ge.call(this,Jn.Qa,t),this.size=e}je(Qp,Ge);function Jr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Su(){}Su.prototype.h=null;function Oh(t){return t.h||(t.h=t.i())}function Yp(){}var Zr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cu(){Ge.call(this,"d")}je(Cu,Ge);function Au(){Ge.call(this,"c")}je(Au,Ge);var dc;function qo(){}je(qo,Su);qo.prototype.g=function(){return new XMLHttpRequest};qo.prototype.i=function(){return{}};dc=new qo;function ei(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Dr(this),this.O=Z0,t=ac?125:void 0,this.T=new Bo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jp}function Jp(){this.i=null,this.g="",this.h=!1}var Z0=45e3,pc={},ro={};x=ei.prototype;x.setTimeout=function(t){this.O=t};function gc(t,e,n){t.K=1,t.v=zo(Xt(e)),t.s=n,t.P=!0,Zp(t,null)}function Zp(t,e){t.F=Date.now(),ti(t),t.A=Xt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ag(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Jp,t.g=kg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new G0(We(t.La,t,t.g),t.N)),Kp(t.S,t.g,"readystatechange",t.ib),e=t.H?xp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Nr(),Q0(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const l=qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ac||this.g&&(this.h.h||this.g.fa()||Lh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Nr(3):Nr(2)),Ko(this);var n=this.g.aa();this.Y=n;t:if(eg(this)){var s=Lh(this.g);t="";var r=s.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mn(this),dr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,X0(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!no(a)){var u=a;break t}}u=null}if(n=u)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mc(this,n);else{this.i=!1,this.o=3,tt(12),Mn(this),dr(this);break e}}this.P?(tg(this,l,o),ac&&this.i&&l==3&&(Kp(this.S,this.T,"tick",this.hb),this.T.start())):(hs(this.j,this.m,o,null),mc(this,o)),l==4&&Mn(this),this.i&&!this.I&&(l==4?Ig(this.l,this):(this.i=!1,ti(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Mn(this),dr(this)}}}catch{}finally{}};function eg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function tg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=eT(t,n),r==ro){e==4&&(t.o=4,tt(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==pc){t.o=4,tt(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,r,null),mc(t,r);eg(t)&&r!=ro&&r!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xu(e),e.K=!0,tt(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),dr(t))}x.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(Ko(this),tg(this,t,e),this.i&&t!=4&&ti(this))}};function eT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ro:(n=Number(e.substring(n,s)),isNaN(n)?pc:(s+=1,s+n>e.length?ro:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,Mn(this)};function ti(t){t.V=Date.now()+t.O,ng(t,t.O)}function ng(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jr(We(t.gb,t),e)}function Ko(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Y0(this.j,this.A),this.K!=2&&(Nr(),tt(17)),Mn(this),this.o=2,dr(this)):ng(this,this.V-t)};function dr(t){t.l.G==0||t.I||Ig(t.l,t)}function Mn(t){Ko(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tu(t.T),zp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.h,t))){if(!t.J&&yc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ao(n),Qo(n);else break e;Pu(n),tt(18)}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Jr(We(n.cb,n),6e3));if(1>=lg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ln(n,11)}else if((t.J||n.g==t)&&ao(n),!no(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ku(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,be(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ag(s,s.H?s.ka:null,s.V),o.J){hg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ko(a),ti(a)),s.g=o}else bg(s);0<n.i.length&&Xo(n)}else u[0]!="stop"&&u[0]!="close"||Ln(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ln(n,7):Ou(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Nr(4)}catch{}}function tT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function nT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Lo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function sg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nT(t),s=tT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var rg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=e!==void 0?e:t.h,io(this,t.j),this.s=t.s,this.g=t.g,oo(this,t.m),this.l=t.l,e=t.i;var n=new Or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ph(this,n),this.o=t.o}else t&&(n=String(t).match(rg))?(this.h=!!e,io(this,n[1]||"",!0),this.s=rr(n[2]||""),this.g=rr(n[3]||"",!0),oo(this,n[4]),this.l=rr(n[5]||"",!0),Ph(this,n[6]||"",!0),this.o=rr(n[7]||"")):(this.h=!!e,this.i=new Or(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ir(e,xh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ir(e,xh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ir(n,n.charAt(0)=="/"?oT:iT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ir(n,cT)),t.join("")};function Xt(t){return new jn(t)}function io(t,e,n){t.j=n?rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ph(t,e,n){e instanceof Or?(t.i=e,uT(t.i,t.h)):(n||(e=ir(e,aT)),t.i=new Or(e,t.h))}function be(t,e,n){t.i.set(e,n)}function zo(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xh=/[#\/\?@]/g,iT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,cT=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cn(t){t.g||(t.g=new Map,t.h=0,t.i&&sT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Or.prototype;x.add=function(t,e){Cn(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ig(t,e){Cn(t),e=$s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function og(t,e){return Cn(t),e=$s(t,e),t.g.has(e)}x.forEach=function(t,e){Cn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.oa=function(){Cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.W=function(t){Cn(this);let e=[];if(typeof t=="string")og(this,t)&&(e=e.concat(this.g.get($s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Cn(this),this.i=null,t=$s(this,t),og(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ag(t,e,n){ig(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),gu(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uT(t,e){e&&!t.j&&(Cn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ig(this,s),ag(this,r,n))},t)),t.j=e}var lT=class{constructor(t,e){this.h=t,this.g=e}};function cg(t){this.l=t||hT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hT=10;function ug(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lg(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ku(t,e){t.g?t.g.add(e):t.h=e}function hg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cg.prototype.cancel=function(){if(this.i=fg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gu(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function fT(){this.g=new Ru}function dT(t,e,n){const s=n||"";try{sg(t,function(r,i){let o=r;Xr(r)&&(o=bu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function pT(t,e){const n=new $o;if(z.Image){const s=new Image;s.onload=vi(_i,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vi(_i,n,s,"TestLoadImage: error",!1,e),s.onabort=vi(_i,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vi(_i,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function _i(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ni(t){this.l=t.ac||null,this.j=t.jb||!1}je(ni,Su);ni.prototype.g=function(){return new Wo(this.l,this.j)};ni.prototype.i=function(t){return function(){return t}}({});function Wo(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Wo,Ue);var Du=0;x=Wo.prototype;x.open=function(t,e){if(this.readyState!=Du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=Du};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function dg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?si(this):Pr(this),this.readyState==3&&dg(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,si(this))};x.Ua=function(t){this.g&&(this.response=t,si(this))};x.ga=function(){this.g&&si(this)};function si(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gT=z.JSON.parse;function Se(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pg,this.K=this.L=!1}je(Se,Ue);var pg="",mT=/^https?$/i,yT=["POST","PUT"];x=Se.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?Oh(this.u):Oh(dc),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Mh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Dp(yT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yg(this),0<this.B&&((this.K=vT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=Iu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Mh(this,i)}};function vT(t){return Cs&&M0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof pu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Mh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gg(t),Go(t)}function gg(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),Go(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Go(this,!0)),Se.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?mg(this):this.fb())};x.fb=function(){mg(this)};function mg(t){if(t.h&&typeof pu!="undefined"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)Iu(t.Ha,0,t);else if($e(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(rg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!mT.test(r?r.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",gg(t)}}finally{Go(t)}}}}function Go(t,e){if(t.g){yg(t);const n=t.g,s=t.C[0]?to:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function yg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gT(e)}};function Lh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vg(t){let e="";return yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=vg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wg(t){this.Ca=0,this.i=[],this.j=new $o,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cg(t&&t.concurrentRequestLimit),this.Fa=new fT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=wg.prototype;x.ma=8;x.G=1;function Ou(t){if(_g(t),t.G==3){var e=t.U++,n=Xt(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),ri(t,n),e=new ei(t,t.j,e,void 0),e.K=2,e.v=zo(Xt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=kg(e.l,null),e.g.da(e.v)),e.F=Date.now(),ti(e)}Cg(t)}function Qo(t){t.g&&(xu(t),t.g.cancel(),t.g=null)}function _g(t){Qo(t),t.u&&(z.clearTimeout(t.u),t.u=null),ao(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Xo(t){ug(t.h)||t.m||(t.m=!0,jp(t.Ja,t),t.C=0)}function wT(t,e){return lg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Jr(We(t.Ja,t,e),Sg(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ei(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=xp(i),Mp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Eg(this,r,e),n=Xt(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),ri(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(vg(i)))+"&"+e:this.o&&Nu(n,this.o,i)),ku(this.h,r),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),r.Z=!0,gc(r,n,null)):gc(r,n,e),this.G=2}}else this.G==3&&(t?Uh(this,t):this.i.length==0||ug(this.h)||Uh(this))};function Uh(t,e){var n;e?n=e.m:n=t.U++;const s=Xt(t.F);be(s,"SID",t.I),be(s,"RID",n),be(s,"AID",t.T),ri(t,s),t.o&&t.s&&Nu(s,t.o,t.s),n=new ei(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Eg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ku(t.h,n),gc(n,s,e)}function ri(t,e){t.ia&&yu(t.ia,function(n,s){be(e,s,n)}),t.l&&sg({},function(n,s){be(e,s,n)})}function Eg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?We(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{dT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function bg(t){t.g||t.u||(t.Z=1,jp(t.Ia,t),t.A=0)}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Jr(We(t.Ia,t),Sg(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,Tg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Jr(We(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),Qo(this),Tg(this))};function xu(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Tg(t){t.g=new ei(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Xt(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),ri(t,e),t.o&&t.s&&Nu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zo(Xt(e)),n.s=null,n.P=!0,Zp(n,t)}x.cb=function(){this.v!=null&&(this.v=null,Qo(this),Pu(this),tt(19))};function ao(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Ig(t,e){var n=null;if(t.g==e){ao(t),xu(t),t.g=null;var s=2}else if(yc(t.h,e))n=e.D,hg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=jo(),$e(s,new Qp(s,n)),Xo(t)}else bg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&wT(t,e)||s==2&&Pu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Sg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ln(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=We(t.kb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||io(n,"https"),zo(n)),pT(n.toString(),s)}else tt(2);t.G=0,t.l&&t.l.va(e),Cg(t),_g(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Cg(t){if(t.G=0,t.la=[],t.l){const e=fg(t.h);(e.length!=0||t.i.length!=0)&&(Ch(t.la,e),Ch(t.la,t.i),t.h.i.length=0,gu(t.i),t.i.length=0),t.l.ua()}}function Ag(t,e,n){var s=n instanceof jn?Xt(n):new jn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),oo(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new jn(null,void 0);s&&io(i,s),e&&(i.g=e),r&&oo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&be(s,n,e),be(s,"VER",t.ma),ri(t,s),s}function kg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Se(new ni({jb:!0})):new Se(t.ra),e.Ka(t.H),e}function Rg(){}x=Rg.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function co(){if(Cs&&!(10<=Number(L0)))throw Error("Environmental error: no available transport.")}co.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){Ue.call(this),this.g=new wg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!no(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!no(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}je(lt,Ue);lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ag(t,null,t.V),Xo(t)};lt.prototype.close=function(){Ou(this.g)};lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bu(t),t=n);e.i.push(new lT(e.ab++,t)),e.G==3&&Xo(e)};lt.prototype.M=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,lt.X.M.call(this)};function Dg(t){Cu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(Dg,Cu);function Ng(){Au.call(this),this.status=1}je(Ng,Au);function js(t){this.g=t}je(js,Rg);js.prototype.xa=function(){$e(this.g,"a")};js.prototype.wa=function(t){$e(this.g,new Dg(t))};js.prototype.va=function(t){$e(this.g,new Ng)};js.prototype.ua=function(){$e(this.g,"b")};co.prototype.createWebChannel=co.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;Xp.COMPLETE="complete";Yp.EventType=Zr;Zr.OPEN="a";Zr.CLOSE="b";Zr.ERROR="c";Zr.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.Oa;Se.prototype.getLastErrorCode=Se.prototype.Ea;Se.prototype.getStatus=Se.prototype.aa;Se.prototype.getResponseJson=Se.prototype.Sa;Se.prototype.getResponseText=Se.prototype.fa;Se.prototype.send=Se.prototype.da;Se.prototype.setWithCredentials=Se.prototype.Ka;var _T=function(){return new co},ET=function(){return jo()},Ra=Ho,bT=Xp,TT=Jn,Fh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},IT=ni,Ei=Yp,ST=Se;const Vh="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let Hs="9.14.0";/**
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
 */const Gn=new nu("@firebase/firestore");function Bh(){return Gn.logLevel}function U(t,...e){if(Gn.logLevel<=oe.DEBUG){const n=e.map(Mu);Gn.debug(`Firestore (${Hs}): ${t}`,...n)}}function Yt(t,...e){if(Gn.logLevel<=oe.ERROR){const n=e.map(Mu);Gn.error(`Firestore (${Hs}): ${t}`,...n)}}function vc(t,...e){if(Gn.logLevel<=oe.WARN){const n=e.map(Mu);Gn.warn(`Firestore (${Hs}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Yt(e),new Error(e)}function ve(t,e){t||G()}function Q(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Og{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kT{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new Og(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ke(e)}}class RT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new RT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new NT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Pg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=PT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ne(0,0))}static max(){return new Z(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends xr{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends xr{construct(e,n,s){return new ze(e,n,s)}static isValidIdentifier(e){return xT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new V(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new V(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function MT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new bn(r,H.empty(),e)}function LT(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bn(Z.min(),H.empty(),-1)}static max(){return new bn(Z.max(),H.empty(),-1)}}function UT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ii(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==FT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function $h(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Lu.at=-1;class Pe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bi(this.root,e,this.comparator,!0)}}class bi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Fe.RED,this.left=r!=null?r:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jh(this.data.getIterator())}getIteratorFrom(e){return new jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Oe(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const BT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=BT.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ks(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function Mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lg(t){const e=t.mapValue.fields.__previous_value__;return Mg(e)?Lg(e):e}function Mr(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class $T{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}function Yo(t){return t==null}function uo(t){return t===0&&1/t==-1/0}function jT(t){return typeof t=="number"&&Number.isInteger(t)&&!uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mg(t)?4:HT(t)?9007199254740991:10:G()}function Ut(t,e){if(t===e)return!0;const n=Qn(t);if(n!==Qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mr(t).isEqual(Mr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ks(s.bytesValue).isEqual(ks(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Re(s.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Re(s.integerValue)===Re(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Re(s.doubleValue),o=Re(r.doubleValue);return i===o?uo(i)===uo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($h(i)!==$h(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ut(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Ur(t,e){return(t.values||[]).find(n=>Ut(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Qn(t),s=Qn(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Re(r.integerValue||r.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hh(t.timestampValue,e.timestampValue);case 4:return Hh(Mr(t),Mr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ks(r),a=ks(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(Re(r.latitude),Re(i.latitude));return o!==0?o:ce(Re(r.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Rs(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ti.mapValue&&i===Ti.mapValue)return 0;if(r===Ti.mapValue)return 1;if(i===Ti.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=Rs(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Hh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Tn(t),s=Tn(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function vs(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ks(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=wc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${wc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function _c(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function qh(t){return!!t&&"nullValue"in t}function Kh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Li(t){return!!t&&"mapValue"in t}function pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Li(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(n)}setAll(e){let n=ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Li(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Li(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){qs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new pt(pr(this.value))}}function Ug(t){const e=[];return qs(t.fields,(n,s)=>{const r=new ze([n]);if(Li(s)){const i=Ug(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ot(e)}/**
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
 */class Ve{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,Z.min(),Z.min(),pt.empty(),0)}static newFoundDocument(e,n,s){return new Ve(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new Ve(e,2,n,Z.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,Z.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function zh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new qT(t,e,n,s,r,i,o)}function Fu(t){const e=Q(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+vs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vs(s)).join(",")),e.ht=n}return e.ht}function KT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${vs(s.value)}`;var s}).join(", ")}]`),Yo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>vs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>vs(n)).join(",")),`Target(${e})`}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!ZT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ut(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gh(t.startAt,e.startAt)&&Gh(t.endAt,e.endAt)}function Ec(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new zT(e,n,s):n==="array-contains"?new QT(e,s):n==="in"?new XT(e,s):n==="not-in"?new YT(e,s):n==="array-contains-any"?new JT(e,s):new rt(e,n,s)}static lt(e,n,s){return n==="in"?new WT(e,s):new GT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Rs(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.ft(Rs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zT extends rt{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.ft(n)}}class WT extends rt{constructor(e,n){super(e,"in",n),this.keys=Fg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GT extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Fg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class QT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&Ur(n.arrayValue,this.value)}}class XT extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class YT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class JT extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ur(this.value.arrayValue,s))}}class lo{constructor(e,n){this.position=e,this.inclusive=n}}class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ai{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function eI(t,e,n,s,r,i,o,a){return new ai(t,e,n,s,r,i,o,a)}function Jo(t){return new ai(t)}function Qh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function tI(t){return t.collectionGroup!==null}function Fr(t){const e=Q(t);if(e._t===null){e._t=[];const n=Bg(e),s=Vg(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ws(n)),e._t.push(new ws(ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ws(ze.keyField(),i))}}}return e._t}function Jt(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=zh(e.path,e.collectionGroup,Fr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Fr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ws(i.field,o))}const s=e.endAt?new lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new lo(e.startAt.position,e.startAt.inclusive):null;e.wt=zh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function bc(t,e,n){return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return Vu(Jt(t),Jt(e))&&t.limitType===e.limitType}function $g(t){return`${Fu(Jt(t))}|lt:${t.limitType}`}function Tc(t){return`Query(target=${KT(Jt(t))}; limitType=${t.limitType})`}function Bu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Fr(n),s)||n.endAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Fr(n),s))}(t,e)}function nI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let s=!1;for(const r of Fr(t)){const i=sI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sI(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Rs(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */function Hg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function qg(t){return{integerValue:""+t}}function rI(t,e){return jT(e)?qg(e):Hg(t,e)}/**
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
 */class ea{constructor(){this._=void 0}}function iI(t,e,n){return t instanceof ho?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Vr?zg(t,e):t instanceof Br?Wg(t,e):function(s,r){const i=Kg(s,r),o=Xh(i)+Xh(s.yt);return _c(i)&&_c(s.yt)?qg(o):Hg(s.It,o)}(t,e)}function oI(t,e,n){return t instanceof Vr?zg(t,e):t instanceof Br?Wg(t,e):n}function Kg(t,e){return t instanceof fo?_c(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ho extends ea{}class Vr extends ea{constructor(e){super(),this.elements=e}}function zg(t,e){const n=Gg(e);for(const s of t.elements)n.some(r=>Ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Br extends ea{constructor(e){super(),this.elements=e}}function Wg(t,e){let n=Gg(e);for(const s of t.elements)n=n.filter(r=>!Ut(r,s));return{arrayValue:{values:n}}}class fo extends ea{constructor(e,n){super(),this.It=e,this.yt=n}}function Xh(t){return Re(t.integerValue||t.doubleValue)}function Gg(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Vr&&s instanceof Vr||n instanceof Br&&s instanceof Br?As(n.elements,s.elements,Ut):n instanceof fo&&s instanceof fo?Ut(n.yt,s.yt):n instanceof ho&&s instanceof ho}(t.transform,e.transform)}class cI{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ta{}function Qg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $u(t.key,Pt.none()):new ci(t.key,t.data,Pt.none());{const n=t.data,s=pt.empty();let r=new Oe(ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Zn(t.key,s,new Ot(r.toArray()),Pt.none())}}function uI(t,e,n){t instanceof ci?function(s,r,i){const o=s.value.clone(),a=Jh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zn?function(s,r,i){if(!Ui(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Jh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function gr(t,e,n,s){return t instanceof ci?function(r,i,o,a){if(!Ui(r.precondition,i))return o;const c=r.value.clone(),u=Zh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zn?function(r,i,o,a){if(!Ui(r.precondition,i))return o;const c=Zh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Xg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Ui(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function lI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Kg(s.transform,r||null);i!=null&&(n===null&&(n=pt.empty()),n.set(s.field,i))}return n||null}function Yh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&As(n,s,(r,i)=>aI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ci extends ta{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zn extends ta{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jh(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,oI(o,a,n[r]))}return s}function Zh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,iI(i,o,e))}return s}class $u extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hI extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fI{constructor(e){this.count=e}}/**
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
 */var ke,se;function dI(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Yg(t){if(t===void 0)return Yt("GRPC error has no .code"),T.UNKNOWN;switch(t){case ke.OK:return T.OK;case ke.CANCELLED:return T.CANCELLED;case ke.UNKNOWN:return T.UNKNOWN;case ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ke.INTERNAL:return T.INTERNAL;case ke.UNAVAILABLE:return T.UNAVAILABLE;case ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ke.NOT_FOUND:return T.NOT_FOUND;case ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ke.ABORTED:return T.ABORTED;case ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ke.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return xg(this.inner)}size(){return this.innerSize}}/**
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
 */const pI=new Pe(H.comparator);function Zt(){return pI}const Jg=new Pe(H.comparator);function or(...t){let e=Jg;for(const n of t)e=e.insert(n.key,n);return e}function Zg(t){let e=Jg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Un(){return mr()}function em(){return mr()}function mr(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const gI=new Pe(H.comparator),mI=new Oe(H.comparator);function te(...t){let e=mI;for(const n of t)e=e.add(n);return e}const yI=new Oe(ce);function tm(){return yI}/**
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
 */class na{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new na(Z.min(),r,tm(),Zt(),te())}}class ui{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ui(s,n,te(),te(),te())}}/**
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
 */class Fi{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class nm{constructor(e,n){this.targetId=e,this.At=n}}class sm{constructor(e,n,s=Ye.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ef{constructor(){this.Rt=0,this.bt=nf(),this.Pt=Ye.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),s=te();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new ui(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=nf()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class vI{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Zt(),this.qt=tf(),this.Kt=new Oe(ce)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Ec(i))if(s===0){const o=new H(i.path);this.jt(n,o,Ve.newNoDocument(o,Z.min()))}else ve(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ec(a.target)){const c=new H(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ve.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new na(e,n,this.Kt,this.Ut,s);return this.Ut=Zt(),this.qt=tf(),this.Kt=new Oe(ce),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ef,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Oe(ce),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ef),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function tf(){return new Pe(H.comparator)}function nf(){return new Pe(H.comparator)}/**
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
 */const wI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_I=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class EI{constructor(e,n){this.databaseId=e,this.gt=n}}function po(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function bI(t,e){return po(t,e.toTimestamp())}function Wt(t){return ve(!!t),Z.fromTimestamp(function(e){const n=Tn(e);return new Ne(n.seconds,n.nanos)}(t))}function ju(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function im(t){const e=Te.fromString(t);return ve(cm(e)),e}function Ic(t,e){return ju(t.databaseId,e.path)}function Da(t,e){const n=im(e);if(n.get(1)!==t.databaseId.projectId)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(om(n))}function Sc(t,e){return ju(t.databaseId,e)}function TI(t){const e=im(t);return e.length===4?Te.emptyPath():om(e)}function Cc(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function om(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sf(t,e,n){return{name:Ic(t,e),fields:n.value.mapValue.fields}}function II(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(ve(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:Yg(c.code);return new V(u,c.message||"")}(o);n=new sm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Da(t,s.document.name),i=Wt(s.document.updateTime),o=new pt({mapValue:{fields:s.document.fields}}),a=Ve.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Fi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Da(t,s.document),i=s.readTime?Wt(s.readTime):Z.min(),o=Ve.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Da(t,s.document),i=s.removedTargetIds||[];n=new Fi([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new fI(r),o=s.targetId;n=new nm(o,i)}}return n}function SI(t,e){let n;if(e instanceof ci)n={update:sf(t,e.key,e.value)};else if(e instanceof $u)n={delete:Ic(t,e.key)};else if(e instanceof Zn)n={update:sf(t,e.key,e.data),updateMask:MI(e.fieldMask)};else{if(!(e instanceof hI))return G();n={verify:Ic(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ho)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Br)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fo)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function CI(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Wt(s.updateTime):Wt(r);return i.isEqual(Z.min())&&(i=Wt(r)),new cI(i,s.transformResults||[])}(n,e))):[]}function AI(t,e){return{documents:[Sc(t,e.path)]}}function kI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Sc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Kh(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NAN"}};if(qh(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Kh(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NOT_NAN"}};if(qh(h.value))return{unaryFilter:{field:is(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(h.field),op:OI(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:is(l.field),direction:NI(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Yo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function RI(t){let e=TI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=am(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ws(fs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Yo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new lo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new lo(f,h)}(n.endAt)),eI(e,r,o,i,a,"F",c,u)}function DI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function am(t){return t?t.unaryFilter!==void 0?[xI(t)]:t.fieldFilter!==void 0?[PI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>am(e)).reduce((e,n)=>e.concat(n)):G():[]}function NI(t){return wI[t]}function OI(t){return _I[t]}function is(t){return{fieldPath:t.canonicalString()}}function fs(t){return ze.fromServerFormat(t.fieldPath)}function PI(t){return rt.create(fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function xI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fs(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fs(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fs(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fs(t.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function MI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class LI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&uI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=em();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Qg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,s)=>Yh(n,s))&&As(this.baseMutations,e.baseMutations,(n,s)=>Yh(n,s))}}class Hu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=gI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class UI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class FI{constructor(e){this.re=e}}function VI(t){const e=RI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
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
 */class BI{constructor(){this.Ye=new $I}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(bn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class $I{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Oe(Te.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Oe(Te.comparator)).toArray()}}/**
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
 */class Ds{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ds(0)}static vn(){return new Ds(-1)}}/**
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
 */class jI{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 * Copyright 2022 Google LLC
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
 */class HI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&gr(s.mutation,r,Ot.empty(),Ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Un();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Un();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Zt();const o=mr(),a=mr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Zn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),gr(l.mutation,u,l.mutation.getFieldMask(),Ne.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new HI(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=mr();let r=new Pe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ot.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=em();l.forEach(f=>{if(!i.has(f)){const g=Qg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Un());let a=-1,c=i;return o.next(u=>S.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?S.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,te())).next(l=>({batchId:a,changes:Zg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=or();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(u,l){return new ai(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ve.newInvalidDocument(u)))});let o=or();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&gr(u.mutation,c,Ot.empty(),Ne.now()),Bu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Ve.newInvalidDocument(n))}}/**
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
 */class KI{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Wt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:VI(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zI{constructor(){this.overlays=new Pe(H.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Un();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Un(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Pe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Un(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Un(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return S.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UI(n,s));let i=this.es.get(n);i===void 0&&(i=te(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class qu{constructor(){this.ns=new Oe(xe.ss),this.rs=new Oe(xe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new xe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new xe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new H(new Te([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new Te([])),s=new xe(n,e),r=new xe(n,e+1);let i=te();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||ce(e._s,n._s)}static os(e,n){return ce(e._s,n._s)||H.comparator(e.key,n.key)}}/**
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
 */class WI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Oe(xe.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Oe(ce);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new xe(new H(i),0);let a=new Oe(ce);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new xe(n,0),r=this.gs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GI{constructor(e){this.Es=e,this.docs=new Pe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let s=Zt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))}),S.resolve(s)}getAllFromCollection(e,n,s){let r=Zt();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||UT(LT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}As(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new QI(this)}getSize(e){return S.resolve(this.size)}}class QI extends jI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class XI{constructor(e){this.persistence=e,this.Rs=new Ks(n=>Fu(n),Vu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qu,this.targetCount=0,this.vs=Ds.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
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
 */class YI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Lu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new XI(this),this.indexManager=new BI,this.remoteDocumentCache=function(s){return new GI(s)}(s=>this.referenceDelegate.xs(s)),this.It=new FI(n),this.Ns=new KI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new WI(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new JI(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class JI extends VT{constructor(e){super(),this.currentSequenceNumber=e}}class Ku{constructor(e){this.persistence=e,this.Fs=new qu,this.$s=null}static Bs(e){return new Ku(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const r=H.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class zu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zu(e,n.fromCache,s,r)}}/**
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
 */class ZI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Qh(n))return S.resolve(null);let s=Jt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=bc(n,null,"F"),s=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,bc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Qh(n)||r.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Bh()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tc(n)),this.Bi(e,o,n,MT(r,-1)))})}Fi(e,n){let s=new Oe(jg(e));return n.forEach((r,i)=>{Bu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Bh()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Tc(n)),this.Ni.getDocumentsMatchingQuery(e,n,bn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class eS{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Pe(ce),this.qi=new Ks(i=>Fu(i),Vu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function tS(t,e,n,s){return new eS(t,e,n,s)}async function um(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function nS(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=S.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const b=c.docVersions.get(g);ve(b!==null),y.version.compareTo(b)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function lm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function sS(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,b,v){return y.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Zt(),u=te();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(rS(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(Z.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function rS(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Zt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function iS(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oS(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Hn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ac(t,e,n){const s=Q(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!oi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function rf(t,e,n){const s=Q(t);let r=Z.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.qi.get(u);return h!==void 0?S.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(s,o,Jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:te())).next(a=>(aS(s,nI(e),a),{documents:a,Hi:i})))}function aS(t,e,n){let s=t.Ki.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class of{constructor(){this.activeTargetIds=tm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cS{constructor(){this.Lr=new of,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new of,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uS{qr(e){}shutdown(){}}/**
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
 */class af{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const lS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class fS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw vc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=lS[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new ST;a.setWithCredentials(!0),a.listenOnce(bT.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Ra.NO_ERROR:const l=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ra.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new V(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=(u=f)===null||u===void 0?void 0:u.error;if(g&&g.status&&g.message){const y=function(b){const v=b.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(g.status);o(new V(y,g.message))}else o(new V(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=_T(),o=ET(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new IT({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new hS({Hr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,b,v)=>{y.listen(b,A=>{try{v(A)}catch(N){setTimeout(()=>{throw N},0)}})};return g(u,Ei.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,Ei.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.io())}),g(u,Ei.EventType.ERROR,y=>{h||(h=!0,vc("Connection","WebChannel transport errored:",y),f.io(new V(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ei.EventType.MESSAGE,y=>{var b;if(!h){const v=y.data[0];ve(!!v);const A=v,N=A.error||((b=A[0])===null||b===void 0?void 0:b.error);if(N){U("Connection","WebChannel received error:",N);const j=N.status;let L=function(ue){const X=ke[ue];if(X!==void 0)return Yg(X)}(j),ne=N.message;L===void 0&&(L=T.INTERNAL,ne="Unknown error status: "+j+" with message "+N.message),h=!0,f.io(new V(L,ne)),u.close()}else U("Connection","WebChannel received:",v),f.ro(v)}}),g(o,TT.STAT_EVENT,y=>{y.stat===Fh.PROXY?U("Connection","Detected buffering proxy"):y.stat===Fh.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Na(){return typeof document!="undefined"?document:null}/**
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
 */function sa(t){return new EI(t,!0)}class hm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class fm{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new hm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Yt(n.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new V(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dS extends fm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=II(this.It,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Wt(i.readTime):Z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Cc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Ec(a)?{documents:AI(r,a)}:{query:kI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=rm(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=po(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=DI(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Cc(this.It),n.removeTarget=e,this.Bo(n)}}class pS extends fm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=CI(e.writeResults,e.commitTime),s=Wt(e.commitTime);return this.listener.Zo(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Cc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>SI(this.It,s))};this.Bo(n)}}/**
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
 */class gS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(T.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class mS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Yt(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class yS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{es(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c._u.add(4),await li(c),c.gu.set("Unknown"),c._u.delete(4),await ra(c)}(this))})}),this.gu=new mS(s,r)}}async function ra(t){if(es(t))for(const e of t.wu)await e(!0)}async function li(t){for(const e of t.wu)await e(!1)}function dm(t,e){const n=Q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Qu(n)?Gu(n):zs(n).ko()&&Wu(n,e))}function pm(t,e){const n=Q(t),s=zs(n);n.du.delete(e),s.ko()&&gm(n,e),n.du.size===0&&(s.ko()?s.Fo():es(n)&&n.gu.set("Unknown"))}function Wu(t,e){t.yu.Mt(e.targetId),zs(t).zo(e)}function gm(t,e){t.yu.Mt(e),zs(t).Ho(e)}function Gu(t){t.yu=new vI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),zs(t).start(),t.gu.uu()}function Qu(t){return es(t)&&!zs(t).No()&&t.du.size>0}function es(t){return Q(t)._u.size===0}function mm(t){t.yu=void 0}async function vS(t){t.du.forEach((e,n)=>{Wu(t,e)})}async function wS(t,e){mm(t),Qu(t)?(t.gu.hu(e),Gu(t)):t.gu.set("Unknown")}async function _S(t,e,n){if(t.gu.set("Online"),e instanceof sm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await go(t,s)}else if(e instanceof Fi?t.yu.Gt(e):e instanceof nm?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const s=await lm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ye.EMPTY_BYTE_STRING,c.snapshotVersion)),gm(r,a);const u=new Hn(c.target,a,1,c.sequenceNumber);Wu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await go(t,s)}}async function go(t,e,n){if(!oi(e))throw e;t._u.add(1),await li(t),t.gu.set("Offline"),n||(n=()=>lm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ra(t)})}function ym(t,e){return e().catch(n=>go(t,n,e))}async function ia(t){const e=Q(t),n=In(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ES(e);)try{const r=await iS(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,bS(e,r)}catch(r){await go(e,r)}vm(e)&&wm(e)}function ES(t){return es(t)&&t.fu.length<10}function bS(t,e){t.fu.push(e);const n=In(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function vm(t){return es(t)&&!In(t).No()&&t.fu.length>0}function wm(t){In(t).start()}async function TS(t){In(t).eu()}async function IS(t){const e=In(t);for(const n of t.fu)e.Xo(n.mutations)}async function SS(t,e,n){const s=t.fu.shift(),r=Hu.from(s,e,n);await ym(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ia(t)}async function CS(t,e){e&&In(t).Yo&&await async function(n,s){if(r=s.code,dI(r)&&r!==T.ABORTED){const i=n.fu.shift();In(n).Mo(),await ym(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ia(n)}var r}(t,e),vm(t)&&wm(t)}async function cf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=es(n);n._u.add(3),await li(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ra(n)}async function AS(t,e){const n=Q(t);e?(n._u.delete(2),await ra(n)):e||(n._u.add(2),await li(n),n.gu.set("Unknown"))}function zs(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.su(),new dS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:vS.bind(null,t),Zr:wS.bind(null,t),Wo:_S.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Qu(t)?Gu(t):t.gu.set("Unknown")):(await t.pu.stop(),mm(t))})),t.pu}function In(t){return t.Iu||(t.Iu=function(e,n,s){const r=Q(e);return r.su(),new pS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:TS.bind(null,t),Zr:CS.bind(null,t),tu:IS.bind(null,t),Zo:SS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ia(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Xu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(Yt("AsyncQueue",`${e}: ${t}`),oi(t))return new V(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=or(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class uf{constructor(){this.Tu=new Pe(H.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ns{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ns(e,n,_s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class kS{constructor(){this.Au=void 0,this.listeners=[]}}class RS{constructor(){this.queries=new Ks(e=>$g(e),Zo),this.onlineState="Unknown",this.Ru=new Set}}async function Ju(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new kS),r)try{i.Au=await n.onListen(s)}catch(o){const a=Yu(o,`Initialization of query '${Tc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&el(n)}async function Zu(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function DS(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&el(n)}function NS(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function el(t){t.Ru.forEach(e=>{e.next()})}class tl{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class _m{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class OS{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=jg(e),this.Qu=new _s(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new uf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Bu(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==b&&(s.track({type:3,doc:g}),v=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),v=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),v=!0):f&&!g&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(g?(o=o.add(g),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ns(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Em(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new _m(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ns.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class PS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class xS{constructor(e){this.key=e,this.nc=!1}}class MS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ks(a=>$g(a),Zo),this.rc=new Map,this.oc=new Set,this.uc=new Pe(H.comparator),this.cc=new Map,this.ac=new qu,this.hc={},this.lc=new Map,this.fc=Ds.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function LS(t,e){const n=zS(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await oS(n.localStore,Jt(e));n.isPrimaryClient&&dm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await US(n,e,s,a==="current",o.resumeToken)}return r}async function US(t,e,n,s,r){t._c=(h,f,g)=>async function(y,b,v,A){let N=b.view.Wu(v);N.$i&&(N=await rf(y.localStore,b.query,!1).then(({documents:ne})=>b.view.Wu(ne,N)));const j=A&&A.targetChanges.get(b.targetId),L=b.view.applyChanges(N,y.isPrimaryClient,j);return hf(y,b.targetId,L.Xu),L.snapshot}(t,h,f,g);const i=await rf(t.localStore,e,!0),o=new OS(e,i.Hi),a=o.Wu(i.documents),c=ui.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);hf(t,n,u.Xu);const l=new PS(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function FS(t,e){const n=Q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Zo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ac(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pm(n.remoteStore,s.targetId),kc(n,s.targetId)}).catch(ii)):(kc(n,s.targetId),await Ac(n.localStore,s.targetId,!0))}async function VS(t,e,n){const s=WS(t);try{const r=await function(i,o){const a=Q(i),c=Ne.now(),u=o.reduce((f,g)=>f.add(g.key),te());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Zt(),y=te();return a.Gi.getEntries(f,u).next(b=>{g=b,g.forEach((v,A)=>{A.isValidDocument()||(y=y.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(b=>{l=b;const v=[];for(const A of o){const N=lI(A,l.get(A.key).overlayedDocument);N!=null&&v.push(new Zn(A.key,N,Ug(N.value.mapValue),Pt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(b=>{h=b;const v=b.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,b.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Zg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Pe(ce)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await hi(s,r.changes),await ia(s.remoteStore)}catch(r){const i=Yu(r,"Failed to persist write");n.reject(i)}}async function bm(t,e){const n=Q(t);try{const s=await sS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?ve(o.nc):r.removedDocuments.size>0&&(ve(o.nc),o.nc=!1))}),await hi(n,s,e)}catch(s){await ii(s)}}function lf(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&el(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function BS(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Pe(H.comparator);o=o.insert(i,Ve.newNoDocument(i,Z.min()));const a=te().add(i),c=new na(Z.min(),new Map,new Oe(ce),o,a);await bm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),nl(s)}else await Ac(s.localStore,e,!1).then(()=>kc(s,e,n)).catch(ii)}async function $S(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await nS(n.localStore,e);Im(n,s,null),Tm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hi(n,r)}catch(r){await ii(r)}}async function jS(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Im(s,e,n),Tm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hi(s,r)}catch(r){await ii(r)}}function Tm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Im(t,e,n){const s=Q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Sm(t,s)})}function Sm(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(pm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),nl(t))}function hf(t,e,n){for(const s of n)s instanceof _m?(t.ac.addReference(s.key,e),HS(t,s)):s instanceof Em?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Sm(t,s.key)):G()}function HS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(s),nl(t))}function nl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new H(Te.fromString(e)),s=t.fc.next();t.cc.set(s,new xS(n)),t.uc=t.uc.insert(n,s),dm(t.remoteStore,new Hn(Jt(Jo(n.path)),s,2,Lu.at))}}async function hi(t,e,n){const s=Q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,(u==null?void 0:u.fromCache)?"not-current":"current"),u){r.push(u);const l=zu.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>S.forEach(c,h=>S.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>S.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!oi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ui.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,y)}}}(s.localStore,i))}async function qS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await um(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new V(T.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hi(n,s.ji)}}function KS(t,e){const n=Q(t),s=n.cc.get(e);if(s&&s.nc)return te().add(s.key);{let r=te();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function zS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BS.bind(null,e),e.sc.Wo=DS.bind(null,e.eventManager),e.sc.wc=NS.bind(null,e.eventManager),e}function WS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jS.bind(null,e),e}class GS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=sa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return tS(this.persistence,new ZI,e.initialUser,this.It)}yc(e){return new YI(Ku.Bs,this.It)}gc(e){return new cS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qS.bind(null,this.syncEngine),await AS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new RS}createDatastore(e){const n=sa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new fS(r));var r;return function(i,o,a,c){return new gS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>lf(this.syncEngine,a,0),o=af.C()?new af:new uS,new yS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new MS(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await li(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Cm(t,e,n){if(!n)throw new V(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XS(t,e,n,s){if(e===!0&&s===!0)throw new V(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ff(t){if(!H.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(H.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new V(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const pf=new Map;class gf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CT;switch(n.type){case"gapi":const s=n.client;return new DT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pf.get(e);n&&(U("ComponentProvider","Removing Datastore"),pf.delete(e),n.terminate())}(this),Promise.resolve()}}function YS(t,e,n,s={}){var r;const i=(t=xt(t,oa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&vc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=Gd(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new V(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new AT(new Og(o,a))}}/**
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
 */class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Ws{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ws(this.firestore,e,this._query)}}class wn extends Ws{constructor(e,n,s){super(e,n,Jo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new H(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function oR(t,e,...n){if(t=Ie(t),Cm("collection","path",e),t instanceof oa){const s=Te.fromString(e,...n);return df(s),new wn(t,null,s)}{if(!(t instanceof ct||t instanceof wn))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return df(s),new wn(t.firestore,null,s)}}function JS(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=Pg.R()),Cm("doc","path",e),t instanceof oa){const s=Te.fromString(e,...n);return ff(s),new ct(t,null,new H(s))}{if(!(t instanceof ct||t instanceof wn))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return ff(s),new ct(t.firestore,t instanceof wn?t.converter:null,new H(s))}}/**
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
 */class rl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=Pg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eC(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await um(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nC(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>cf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cf(e.remoteStore,i)),t.onlineComponents=e}async function nC(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await eC(t,new GS)),t.offlineComponents}async function Am(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await tC(t,new QS)),t.onlineComponents}function sC(t){return Am(t).then(e=>e.syncEngine)}async function mo(t){const e=await Am(t),n=e.eventManager;return n.onListen=LS.bind(null,e.syncEngine),n.onUnlisten=FS.bind(null,e.syncEngine),n}function rC(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rl({next:h=>{i.enqueueAndForget(()=>Zu(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new V(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new V(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new tl(Jo(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Ju(r,l)}(await mo(t),t.asyncQueue,e,n,s)),s.promise}function iC(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rl({next:h=>{i.enqueueAndForget(()=>Zu(r,l)),h.fromCache&&a.source==="server"?c.reject(new V(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new tl(o,u,{includeMetadataChanges:!0,Nu:!0});return Ju(r,l)}(await mo(t),t.asyncQueue,e,n,s)),s.promise}class oC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new hm(this,"async_queue_retry"),this.Wc=()=>{const n=Na();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new zt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!oi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Xu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function mf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Xn extends oa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||km(this),this._firestoreClient.terminate()}}function aR(t,e){const n=typeof t=="object"?t:ru(),s=typeof t=="string"?t:e||"(default)",r=Ro(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=zd("firestore");i&&YS(r,...i)}return r}function aa(t){return t._firestoreClient||km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function km(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new $T(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(Ye.fromBase64String(e))}catch(n){throw new V(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class il{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rm{constructor(e){this._methodName=e}}/**
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
 */class ol{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const aC=/^__.*__$/;class cC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ci(e,this.data,n,this.fieldTransforms)}}function Dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class al{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return yo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Dm(this.sa)&&aC.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||sa(e)}da(e,n,s,r=!1){return new al({sa:e,methodName:n,fa:s,path:ze.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function lC(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new uC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hC(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);xm("Data must be an object, but it was:",o,s);const a=Om(s,o);let c,u;if(i.merge)c=new Ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=fC(e,h,n);if(!o.contains(f))throw new V(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);pC(l,f)||l.push(f)}c=new Ot(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new cC(new pt(a),c,u)}function Nm(t,e){if(Pm(t=Ie(t)))return xm("Unsupported field value:",e,t),Om(t,e);if(t instanceof Rm)return function(n,s){if(!Dm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Nm(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rI(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ne.fromDate(n);return{timestampValue:po(s.It,r)}}if(n instanceof Ne){const r=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:po(s.It,r)}}if(n instanceof ol)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Os)return{bytesValue:rm(s.It,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ju(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${sl(n)}`)}(t,e)}function Om(t,e){const n={};return xg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(s,r)=>{const i=Nm(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Pm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof ol||t instanceof Os||t instanceof ct||t instanceof Rm)}function xm(t,e,n){if(!Pm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sl(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function fC(t,e,n){if((e=Ie(e))instanceof il)return e._internalPath;if(typeof e=="string")return Mm(t,e);throw yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const dC=new RegExp("[~\\*/\\[\\]]");function Mm(t,e,n){if(e.search(dC)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new il(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new V(T.INVALID_ARGUMENT,a+t+c)}function pC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Lm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gC extends Lm{data(){return super.data()}}function cl(t,e){return typeof e=="string"?Mm(t,e):e instanceof il?e._internalPath:e._delegate._internalPath}/**
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
 */function Um(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mC{}function cR(t,...e){for(const n of e)t=n._apply(t);return t}class yC extends mC{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ws(r,i);return function(a,c){if(Vg(a)===null){const u=Bg(a);u!==null&&vC(a,u,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new Ws(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ai(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function uR(t,e="asc"){const n=e,s=cl("orderBy",t);return new yC(s,n)}function vC(t,e,n){if(!n.isEqual(e))throw new V(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class wC{convertValue(e,n="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return qs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ol(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);ve(cm(s));const r=new Lr(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||Yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _C(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ar{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fm extends Lm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vi extends Fm{data(e={}){return super.data(e)}}class Vm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ar(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vi(this._firestore,this._userDataWriter,s.key,s,new ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:EC(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function lR(t){t=xt(t,ct);const e=xt(t.firestore,Xn);return rC(aa(e),t._key).then(n=>$m(e,t,n))}class ul extends wC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function hR(t){t=xt(t,Ws);const e=xt(t.firestore,Xn),n=aa(e),s=new ul(e);return Um(t._query),iC(n,t._query).then(r=>new Vm(e,s,t,r))}function fR(t){return Bm(xt(t.firestore,Xn),[new $u(t._key,Pt.none())])}function dR(t,e){const n=xt(t.firestore,Xn),s=JS(t),r=_C(t.converter,e);return Bm(n,[hC(lC(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Pt.exists(!1))]).then(()=>s)}function pR(t,...e){var n,s,r;t=Ie(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof ct)u=xt(t.firestore,Xn),l=Jo(t._key.path),c={next:h=>{e[o]&&e[o]($m(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xt(t,Ws);u=xt(h.firestore,Xn),l=h._query;const f=new ul(u);c={next:g=>{e[o]&&e[o](new Vm(u,f,h,g))},error:e[o+1],complete:e[o+2]},Um(t._query)}return function(h,f,g,y){const b=new rl(y),v=new tl(f,b,g);return h.asyncQueue.enqueueAndForget(async()=>Ju(await mo(h),v)),()=>{b.bc(),h.asyncQueue.enqueueAndForget(async()=>Zu(await mo(h),v))}}(aa(u),l,a,c)}function Bm(t,e){return function(n,s){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>VS(await sC(n),s,r)),r.promise}(aa(t),e)}function $m(t,e,n){const s=n.docs.get(e._key),r=new ul(t);return new Fm(t,r,e._key,s,new ar(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Hs=n})(Vs),zn(new En("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xn(new kT(n.getProvider("auth-internal")),new OT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rt(Vh,"3.7.3",t),Rt(Vh,"3.7.3","esm2017")})();/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const jm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Gs=t=>jm?Symbol(t):"_vr_"+t,bC=Gs("rvlm"),yf=Gs("rvd"),ca=Gs("r"),Hm=Gs("rl"),Rc=Gs("rvl"),us=typeof window!="undefined";function TC(t){return t.__esModule||jm&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Oa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const yr=()=>{},IC=/\/$/,SC=t=>t.replace(IC,"");function Pa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=RC(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function CC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ps(e.matched[s],n.matched[r])&&qm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kC(t[n],e[n]))return!1;return!0}function kC(t,e){return Array.isArray(t)?wf(t,e):Array.isArray(e)?wf(e,t):t===e}function wf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function RC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var $r;(function(t){t.pop="pop",t.push="push"})($r||($r={}));var vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vr||(vr={}));function DC(t){if(!t)if(us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SC(t)}const NC=/^[^#]+#/;function OC(t,e){return t.replace(NC,"#")+e}function PC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function xC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=PC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _f(t,e){return(history.state?history.state.position-e:-1)+t}const Dc=new Map;function MC(t,e){Dc.set(t,e)}function LC(t){const e=Dc.get(t);return Dc.delete(t),e}let UC=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),vf(c,"")}return vf(n,t)+s+r}function FC(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Km(t,location),y=n.value,b=e.value;let v=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}v=b?f.position-b.position:0}else s(g);r.forEach(A=>{A(n.value,y,{delta:v,type:$r.pop,direction:v?v>0?vr.forward:vr.back:vr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:ua()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Ef(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ua():null}}function VC(t){const{history:e,location:n}=window,s={value:Km(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:UC()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=de({},e.state,Ef(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=de({},r.value,e.state,{forward:c,scroll:ua()});i(l.current,l,!0);const h=de({},Ef(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function BC(t){t=DC(t);const e=VC(t),n=FC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=de({location:"",base:t,go:s,createHref:OC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),BC(t)}function $C(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wm=Gs("nf");var bf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bf||(bf={}));function xs(t,e){return de(new Error,{type:t,[Wm]:!0},e)}function Rn(t,e){return t instanceof Error&&Wm in t&&(e==null||!!(t.type&e))}const Tf="[^/]+?",jC={sensitive:!1,strict:!1,start:!0,end:!0},HC=/[.+*?^${}()[\]/\\]/g;function qC(t,e){const n=de({},jC,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(HC,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:b,optional:v,regexp:A}=f;i.push({name:y,repeatable:b,optional:v});const N=A||Tf;if(N!==Tf){g+=10;try{new RegExp(`(${N})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+L.message)}}let j=b?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(j=v&&u.length<2?`(?:/${j})`:"/"+j),v&&(j+="?"),r+=j,g+=20,v&&(g+=-8),b&&(g+=-20),N===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:v}=g,A=y in u?u[y]:"";if(Array.isArray(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=Array.isArray(A)?A.join("/"):A;if(!N)if(v)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=N}}return l}return{re:o,score:s,keys:i,parse:a,stringify:c}}function KC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=KC(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const WC={type:0,value:""},GC=/[a-zA-Z0-9_]/;function QC(t){if(!t)return[[]];if(t==="/")return[[WC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:GC.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function XC(t,e,n){const s=qC(QC(t.path),n),r=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YC(t,e){const n=[],s=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=ZC(l);y.aliasOf=f&&f.record;const b=Sf(e,l),v=[y];if("alias"in l){const j=typeof l.alias=="string"?[l.alias]:l.alias;for(const L of j)v.push(de({},y,{components:f?f.record.components:y.components,path:L,aliasOf:f?f.record:y}))}let A,N;for(const j of v){const{path:L}=j;if(h&&L[0]!=="/"){const ne=h.record.path,ue=ne[ne.length-1]==="/"?"":"/";j.path=h.record.path+(L&&ue+L)}if(A=XC(j,h,b),f?f.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),g&&l.name&&!If(A)&&o(l.name)),"children"in y){const ne=y.children;for(let ue=0;ue<ne.length;ue++)i(ne[ue],A,f&&f.children[ue])}f=f||A,c(A)}return N?()=>{o(N)}:yr}function o(l){if(zm(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&zC(l,n[h])>=0;)h++;n.splice(h,0,l),l.record.name&&!If(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,b;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw xs(1,{location:l});b=f.record.name,g=de(JC(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),l.params),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(N=>N.re.test(y)),f&&(g=f.parse(y),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw xs(1,{location:l,currentLocation:h});b=f.record.name,g=de({},h.params,l.params),y=f.stringify(g)}const v=[];let A=f;for(;A;)v.unshift(A.record),A=A.parent;return{name:b,path:y,params:g,matched:v,meta:tA(v)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function JC(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ZC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function eA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function If(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tA(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Sf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Gm=/#/g,nA=/&/g,sA=/\//g,rA=/=/g,iA=/\?/g,Qm=/\+/g,oA=/%5B/g,aA=/%5D/g,Xm=/%5E/g,cA=/%60/g,Ym=/%7B/g,uA=/%7C/g,Jm=/%7D/g,lA=/%20/g;function ll(t){return encodeURI(""+t).replace(uA,"|").replace(oA,"[").replace(aA,"]")}function hA(t){return ll(t).replace(Ym,"{").replace(Jm,"}").replace(Xm,"^")}function Nc(t){return ll(t).replace(Qm,"%2B").replace(lA,"+").replace(Gm,"%23").replace(nA,"%26").replace(cA,"`").replace(Ym,"{").replace(Jm,"}").replace(Xm,"^")}function fA(t){return Nc(t).replace(rA,"%3D")}function dA(t){return ll(t).replace(Gm,"%23").replace(iA,"%3F")}function pA(t){return t==null?"":dA(t).replace(sA,"%2F")}function vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Qm," "),o=i.indexOf("="),a=vo(o<0?i:i.slice(0,o)),c=o<0?null:vo(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Cf(t){let e="";for(let n in t){const s=t[n];if(n=fA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Nc(i)):[s&&Nc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Js(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xs(4,{from:n,to:e})):h instanceof Error?a(h):$C(h)?a(xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function xa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(yA(a)){const u=(a.__vccOpts||a)[e];u&&r.push(cn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=TC(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&cn(f,n,s,i,o)()}))}}return r}function yA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Af(t){const e=Kt(ca),n=Kt(Hm),s=vt(()=>e.resolve(cr(t.to))),r=vt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ps.bind(null,l));if(f>-1)return f;const g=kf(c[u-2]);return u>1&&kf(l)===g&&h[h.length-1].path!==g?h.findIndex(Ps.bind(null,c[u-2])):f}),i=vt(()=>r.value>-1&&EA(n.params,s.value.params)),o=vt(()=>r.value>-1&&r.value===n.matched.length-1&&qm(n.params,s.value.params));function a(c={}){return _A(c)?e[cr(t.replace)?"replace":"push"](cr(t.to)).catch(yr):Promise.resolve()}return{route:s,href:vt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const vA=wd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Af,setup(t,{slots:e}){const n=Hr(Af(t)),{options:s}=Kt(ca),r=vt(()=>({[Rf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Rf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Vd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),wA=vA;function _A(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rf=(t,e,n)=>t!=null?t:e!=null?e:n,bA=wd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Kt(Rc),r=vt(()=>t.route||s.value),i=Kt(yf,0),o=vt(()=>r.value.matched[i]);ki(yf,i+1),ki(bC,o),ki(Rc,r);const a=rd();return Ri(()=>[a.value,o.value,t.name],([c,u,l],[h,f,g])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ps(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Df(n.default,{Component:l,route:c});const f=u.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Vd(l,de({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Df(n.default,{Component:b,route:c})||b}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TA=bA;function mR(t){const e=YC(t.routes,t),n=t.parseQuery||gA,s=t.stringifyQuery||Cf,r=t.history,i=Js(),o=Js(),a=Js(),c=uv(rn);let u=rn;us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Oa.bind(null,w=>""+w),h=Oa.bind(null,pA),f=Oa.bind(null,vo);function g(w,M){let D,F;return zm(w)?(D=e.getRecordMatcher(w),F=M):F=w,e.addRoute(F,D)}function y(w){const M=e.getRecordMatcher(w);M&&e.removeRoute(M)}function b(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function A(w,M){if(M=de({},M||c.value),typeof w=="string"){const Y=Pa(n,w,M.path),d=e.resolve({path:Y.path},M),p=r.createHref(Y.fullPath);return de(Y,d,{params:f(d.params),hash:vo(Y.hash),redirectedFrom:void 0,href:p})}let D;if("path"in w)D=de({},w,{path:Pa(n,w.path,M.path).path});else{const Y=de({},w.params);for(const d in Y)Y[d]==null&&delete Y[d];D=de({},w,{params:h(w.params)}),M.params=h(M.params)}const F=e.resolve(D,M),he=w.hash||"";F.params=l(f(F.params));const ye=CC(s,de({},w,{hash:hA(he),path:F.path})),ee=r.createHref(ye);return de({fullPath:ye,hash:he,query:s===Cf?mA(w.query):w.query||{}},F,{redirectedFrom:void 0,href:ee})}function N(w){return typeof w=="string"?Pa(n,w,c.value.path):de({},w)}function j(w,M){if(u!==w)return xs(8,{from:M,to:w})}function L(w){return X(w)}function ne(w){return L(de(N(w),{replace:!0}))}function ue(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let F=typeof D=="function"?D(w):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=N(F):{path:F},F.params={}),de({query:w.query,hash:w.hash,params:w.params},F)}}function X(w,M){const D=u=A(w),F=c.value,he=w.state,ye=w.force,ee=w.replace===!0,Y=ue(D);if(Y)return X(de(N(Y),{state:he,force:ye,replace:ee}),M||D);const d=D;d.redirectedFrom=M;let p;return!ye&&AC(s,F,D)&&(p=xs(16,{to:d,from:F}),ss(F,F,!0,!1)),(p?Promise.resolve(p):ge(d,F)).catch(m=>Rn(m)?m:me(m,d,F)).then(m=>{if(m){if(Rn(m,2))return X(de(N(m.to),{state:he,force:ye,replace:ee}),M||d)}else m=qe(d,F,!0,ee,he);return He(d,F,m),m})}function we(w,M){const D=j(w,M);return D?Promise.reject(D):Promise.resolve()}function ge(w,M){let D;const[F,he,ye]=IA(w,M);D=xa(F.reverse(),"beforeRouteLeave",w,M);for(const Y of F)Y.leaveGuards.forEach(d=>{D.push(cn(d,w,M))});const ee=we.bind(null,w,M);return D.push(ee),os(D).then(()=>{D=[];for(const Y of i.list())D.push(cn(Y,w,M));return D.push(ee),os(D)}).then(()=>{D=xa(he,"beforeRouteUpdate",w,M);for(const Y of he)Y.updateGuards.forEach(d=>{D.push(cn(d,w,M))});return D.push(ee),os(D)}).then(()=>{D=[];for(const Y of w.matched)if(Y.beforeEnter&&!M.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)D.push(cn(d,w,M));else D.push(cn(Y.beforeEnter,w,M));return D.push(ee),os(D)}).then(()=>(w.matched.forEach(Y=>Y.enterCallbacks={}),D=xa(ye,"beforeRouteEnter",w,M),D.push(ee),os(D))).then(()=>{D=[];for(const Y of o.list())D.push(cn(Y,w,M));return D.push(ee),os(D)}).catch(Y=>Rn(Y,8)?Y:Promise.reject(Y))}function He(w,M,D){for(const F of a.list())F(w,M,D)}function qe(w,M,D,F,he){const ye=j(w,M);if(ye)return ye;const ee=M===rn,Y=us?history.state:{};D&&(F||ee?r.replace(w.fullPath,de({scroll:ee&&Y&&Y.scroll},he)):r.push(w.fullPath,he)),c.value=w,ss(w,M,D,ee),ht()}let Je;function tn(){Je=r.listen((w,M,D)=>{const F=A(w),he=ue(F);if(he){X(de(he,{replace:!0}),F).catch(yr);return}u=F;const ye=c.value;us&&MC(_f(ye.fullPath,D.delta),ua()),ge(F,ye).catch(ee=>Rn(ee,12)?ee:Rn(ee,2)?(X(ee.to,F).then(Y=>{Rn(Y,20)&&!D.delta&&D.type===$r.pop&&r.go(-1,!1)}).catch(yr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),me(ee,F,ye))).then(ee=>{ee=ee||qe(F,ye,!1),ee&&(D.delta?r.go(-D.delta,!1):D.type===$r.pop&&Rn(ee,20)&&r.go(-1,!1)),He(F,ye,ee)}).catch(yr)})}let ts=Js(),ns=Js(),De;function me(w,M,D){ht(w);const F=ns.list();return F.length?F.forEach(he=>he(w,M,D)):console.error(w),Promise.reject(w)}function le(){return De&&c.value!==rn?Promise.resolve():new Promise((w,M)=>{ts.add([w,M])})}function ht(w){De||(De=!0,tn(),ts.list().forEach(([M,D])=>w?D(w):M()),ts.reset())}function ss(w,M,D,F){const{scrollBehavior:he}=t;if(!us||!he)return Promise.resolve();const ye=!D&&LC(_f(w.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return cd().then(()=>he(w,M,ye)).then(ee=>ee&&xC(ee)).catch(ee=>me(ee,w,M))}const Vt=w=>r.go(w);let bt;const ft=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:v,getRoutes:b,resolve:A,options:t,push:L,replace:ne,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ns.add,isReady:le,install(w){const M=this;w.component("RouterLink",wA),w.component("RouterView",TA),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>cr(c)}),us&&!bt&&c.value===rn&&(bt=!0,L(r.location).catch(he=>{}));const D={};for(const he in rn)D[he]=vt(()=>c.value[he]);w.provide(ca,M),w.provide(Hm,Hr(D)),w.provide(Rc,c);const F=w.unmount;ft.add(w),w.unmount=function(){ft.delete(w),ft.size<1&&(u=rn,Je&&Je(),c.value=rn,bt=!1,De=!1),F()}}}}function os(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function IA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ps(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||r.push(c))}return[n,s,r]}function yR(){return Kt(ca)}/**
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
 */const Zm="firebasestorage.googleapis.com",ey="storageBucket",SA=2*60*1e3,CA=10*60*1e3;/**
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
 */class Ce extends Ft{constructor(e,n,s=0){super(Ma(e),`Firebase Storage: ${n} (${Ma(e)})`);this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ma(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ma(t){return"storage/"+t}function hl(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce("unknown",t)}function AA(t){return new Ce("object-not-found","Object '"+t+"' does not exist.")}function kA(t){return new Ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce("unauthenticated",t)}function DA(){return new Ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function NA(t){return new Ce("unauthorized","User does not have permission to access '"+t+"'.")}function OA(){return new Ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function PA(){return new Ce("canceled","User canceled the upload/download.")}function xA(t){return new Ce("invalid-url","Invalid URL '"+t+"'.")}function MA(t){return new Ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function LA(){return new Ce("no-default-bucket","No default bucket found. Did you set the '"+ey+"' property when initializing the app?")}function UA(){return new Ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function FA(){return new Ce("no-download-url","The given file does not have any download URLs.")}function VA(t){return new Ce("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oc(t){return new Ce("invalid-argument",t)}function ty(){return new Ce("app-deleted","The Firebase app was deleted.")}function BA(t){return new Ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wr(t,e){return new Ce("invalid-format","String does not match format '"+t+"': "+e)}function Zs(t){throw new Ce("internal-error","Internal error: "+t)}/**
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
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(s.path==="")return s;throw MA(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),y={bucket:1,path:3},b=n===Zm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${b}/${r}/${v}`,"i"),j=[{regex:a,indices:c,postModify:i},{regex:g,indices:y,postModify:u},{regex:A,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<j.length;L++){const ne=j[L],ue=ne.regex.exec(e);if(ue){const X=ue[ne.indices.bucket];let we=ue[ne.indices.path];we||(we=""),s=new at(X,we),ne.postModify(s);break}}if(s==null)throw xA(e);return s}}class $A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jA(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...v){u||(u=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(g,c())},v)}function f(){i&&clearTimeout(i)}function g(v,...A){if(u){f();return}if(v){f(),l.call(null,v,...A);return}if(c()||o){f(),l.call(null,v,...A);return}s<64&&(s*=2);let j;a===1?(a=2,j=0):j=(s+Math.random())*1e3,h(j)}let y=!1;function b(v){y||(y=!0,f(),!u&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function HA(t){t(!1)}/**
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
 */function qA(t){return t!==void 0}function KA(t){return typeof t=="object"&&!Array.isArray(t)}function fl(t){return typeof t=="string"||t instanceof String}function Nf(t){return dl()&&t instanceof Blob}function dl(){return typeof Blob!="undefined"&&!Zw()}function Of(t,e,n,s){if(s<e)throw Oc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Oc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function pl(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ny(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var qn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qn||(qn={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function zA(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class WA{constructor(e,n,s,r,i,o,a,c,u,l,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ii(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===qn.NO_ERROR,c=i.getStatus();if((!a||zA(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===qn.ABORT;s(!1,new Ii(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ii(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qA(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=hl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ty():PA();o(c)}else{const c=OA();o(c)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=jA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function GA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JA(t,e,n,s,r,i,o=!0){const a=ny(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return XA(u,e),GA(u,n),QA(u,i),YA(u,s),new WA(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function ZA(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ek(...t){const e=ZA();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(dl())return new Blob(t);throw new Ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function tk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function nk(t){if(typeof atob=="undefined")throw VA("base-64");return atob(t)}/**
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
 */const wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class La{constructor(e,n){this.data=e,this.contentType=n||null}}function sy(t,e){switch(t){case wt.RAW:return new La(ry(e));case wt.BASE64:case wt.BASE64URL:return new La(iy(t,e));case wt.DATA_URL:return new La(rk(e),ik(e))}throw hl()}function ry(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function sk(t){let e;try{e=decodeURIComponent(t)}catch{throw wr(wt.DATA_URL,"Malformed data URL.")}return ry(e)}function iy(t,e){switch(t){case wt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw wr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case wt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw wr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nk(e)}catch(r){throw r.message.includes("polyfill")?r:wr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class oy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wr(wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ok(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rk(t){const e=new oy(t);return e.base64?iy(wt.BASE64,e.rest):sk(e.rest)}function ik(t){return new oy(t).contentType}function ok(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class pn{constructor(e,n){let s=0,r="";Nf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Nf(this.data_)){const s=this.data_,r=tk(s,e,n);return r===null?null:new pn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new pn(s,!0)}}static getBlob(...e){if(dl()){const n=e.map(s=>s instanceof pn?s.data_:s);return new pn(ek.apply(null,n))}else{const n=e.map(o=>fl(o)?sy(wt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new pn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ay(t){let e;try{e=JSON.parse(t)}catch{return null}return KA(e)?e:null}/**
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
 */function ak(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ck(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function cy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function uk(t,e){return e}class Ze{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||uk}}let Si=null;function lk(t){return!fl(t)||t.length<2?t:cy(t)}function uy(){if(Si)return Si;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return lk(o)}const n=new Ze("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ze("size");return r.xform=s,t.push(r),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Si=t,Si}function hk(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new at(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fk(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return hk(s,t),s}function ly(t,e,n){const s=ay(e);return s===null?null:fk(t,s,n)}function dk(t,e,n,s){const r=ay(e);if(r===null||!fl(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),g=pl(f,n,s),y=ny({alt:"media",token:u});return g+y})[0]}function pk(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class hy{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fy(t){if(!t)throw hl()}function gk(t,e){function n(s,r){const i=ly(t,r,e);return fy(i!==null),i}return n}function mk(t,e){function n(s,r){const i=ly(t,r,e);return fy(i!==null),dk(i,r,t.host,t._protocol)}return n}function dy(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=DA():r=RA():n.getStatus()===402?r=kA(t.bucket):n.getStatus()===403?r=NA(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function yk(t){const e=dy(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=AA(t.path)),i.serverResponse=r.serverResponse,i}return n}function vk(t,e,n){const s=e.fullServerUrl(),r=pl(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new hy(r,i,mk(t,n),o);return a.errorHandler=yk(e),a}function wk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _k(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=wk(null,e)),s}function Ek(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let j="";for(let L=0;L<2;L++)j=j+Math.random().toString().slice(2);return j}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=_k(e,s,r),l=pk(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=pn.getBlob(h,s,f);if(g===null)throw UA();const y={name:u.fullPath},b=pl(i,t.host,t._protocol),v="POST",A=t.maxUploadRetryTime,N=new hy(b,v,gk(t,n),A);return N.urlParams=y,N.headers=o,N.body=g.uploadData(),N.errorHandler=dy(e),N}class bk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Tk extends bk{initXhr(){this.xhr_.responseType="text"}}function py(){return new Tk}/**
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
 */class Yn{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yn(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cy(this._location.path)}get storage(){return this._service}get parent(){const e=ak(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new Yn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BA(e)}}function Ik(t,e,n){t._throwIfRoot("uploadBytes");const s=Ek(t.storage,t._location,uy(),new pn(e,!0),n);return t.storage.makeRequestWithTokens(s,py).then(r=>({metadata:r,ref:t}))}function Sk(t,e,n=wt.RAW,s){t._throwIfRoot("uploadString");const r=sy(n,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),Ik(t,r.data,i)}function Ck(t){t._throwIfRoot("getDownloadURL");const e=vk(t.storage,t._location,uy());return t.storage.makeRequestWithTokens(e,py).then(n=>{if(n===null)throw FA();return n})}function Ak(t,e){const n=ck(t._location.path,e),s=new at(t._location.bucket,n);return new Yn(t.storage,s)}/**
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
 */function kk(t){return/^[A-Za-z]+:\/\//.test(t)}function Rk(t,e){return new Yn(t,e)}function gy(t,e){if(t instanceof gl){const n=t;if(n._bucket==null)throw LA();const s=new Yn(n,n._bucket);return e!=null?gy(s,e):s}else return e!==void 0?Ak(t,e):t}function Dk(t,e){if(e&&kk(e)){if(t instanceof gl)return Rk(t,e);throw Oc("To use ref(service, url), the first argument must be a Storage instance.")}else return gy(t,e)}function Pf(t,e){const n=e==null?void 0:e[ey];return n==null?null:at.makeFromBucketSpec(n,t)}function Nk(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Gd(r,t.app.options.projectId))}class gl{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Zm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SA,this._maxUploadRetryTime=CA,this._requests=new Set,r!=null?this._bucket=at.makeFromBucketSpec(r,this._host):this._bucket=Pf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=Pf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yn(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new $A(ty());{const o=JA(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const xf="@firebase/storage",Mf="0.9.14";/**
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
 */const my="storage";function vR(t,e,n,s){return t=Ie(t),Sk(t,e,n,s)}function wR(t){return t=Ie(t),Ck(t)}function _R(t,e){return t=Ie(t),Dk(t,e)}function ER(t=ru(),e){t=Ie(t);const s=Ro(t,my).getImmediate({identifier:e}),r=zd("storage");return r&&Ok(s,...r),s}function Ok(t,e,n,s={}){Nk(t,e,n,s)}function Pk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new gl(n,s,r,e,Vs)}function xk(){zn(new En(my,Pk,"PUBLIC").setMultipleInstances(!0)),Rt(xf,Mf,""),Rt(xf,Mf,"esm2017")}xk();export{Bs as $,JS as A,ER as B,_R as C,vR as D,hR as E,lR as F,wR as G,Ed as H,pR as I,sR as J,Mc as K,aR as L,cR as M,Xk as N,rd as O,Lk as P,Vk as Q,Wk as R,St as S,qk as T,Kk as U,Qk as V,yR as W,nR as X,eR as Y,Tp as Z,xc as _,jk as a,Zk as a0,tR as a1,zk as a2,Yk as b,$k as c,mR as d,gR as e,wd as f,iR as g,Bk as h,pE as i,Ld as j,st as k,Gk as l,cr as m,Hk as n,iw as o,Uk as p,Fk as q,Hr as r,rR as s,lw as t,Jk as u,oR as v,_v as w,uR as x,dR as y,fR as z};
