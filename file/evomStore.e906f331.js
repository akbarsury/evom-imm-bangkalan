var De=Object.defineProperty,Le=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&oe(e,n,t[n]);if(re)for(var n of re(t))$e.call(t,n)&&oe(e,n,t[n]);return e},G=(e,t)=>Le(e,Fe(t));import{f as g}from"./main.a6ad6238.js";import{M as E,H as R,I as M,J as $,K as N,N as A,O as se,P as Ne,_ as je,Q as He,R as ie,S as W,T as qe,U as ze,V as We,W as Xe,X as Ke,Y as Ge,Z as Ve,b as Ye,r as j,$ as ae,a0 as I,a1 as Je,a2 as Ze}from"./vendor.34c2f06c.js";const y={evom:E(R(g,"evom")),komisariat:E(R(g,"komisariat")),calonKetuaUmum:E(R(g,"calon ketua umum")),calonFormatur:E(R(g,"calon formatur")),candidate:E(R(g,"candidate"),M("number","asc")),addCandidate:e=>$(R(g,"candidate"),e),deleteCandidate:e=>N(A(g,"candidate",e)),participant:E(R(g,"participant"),M("delegation","asc")),addParticipant:e=>$(R(g,"participant"),e),deleteParticipant:e=>N(A(g,"participant",e)),candidatePosition:E(R(g,"candidate-position"),M("order","asc")),addCandidatePosition:e=>$(R(g,"candidate-position"),e),deleteCandidatePosition:e=>N(A(g,"candidate-position",e)),Delegation:E(R(g,"delegation"),M("delegation","asc")),addDelegation:e=>$(R(g,"delegation"),e),deleteDelegation:e=>N(A(g,"delegation",e)),token:E(R(g,"token")),addToken:(e,t,n)=>{e==!0?se(A(g,"token",t.toString()),n):Ne(A(g,"token",t.toString()),n)},deleteToken:e=>se(A(g,"participant",e),{token:""}),applicationSetting:A(g,"evom","setting")};/**
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
 */const me="firebasestorage.googleapis.com",_e="storageBucket",Qe=2*60*1e3,et=10*60*1e3;/**
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
 */class m extends Ke{constructor(t,n,r=0){super(V(t),`Firebase Storage: ${n} (${V(t)})`);this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return V(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function V(e){return"storage/"+e}function Z(){const e="An unknown error occurred, please check the error payload for server response.";return new m("unknown",e)}function tt(e){return new m("object-not-found","Object '"+e+"' does not exist.")}function nt(e){return new m("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m("unauthenticated",e)}function ot(){return new m("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function st(e){return new m("unauthorized","User does not have permission to access '"+e+"'.")}function it(){return new m("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function at(){return new m("canceled","User canceled the upload/download.")}function lt(e){return new m("invalid-url","Invalid URL '"+e+"'.")}function ct(e){return new m("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function ut(){return new m("no-default-bucket","No default bucket found. Did you set the '"+_e+"' property when initializing the app?")}function dt(){return new m("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ht(){return new m("no-download-url","The given file does not have any download URLs.")}function pt(e){return new m("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function J(e){return new m("invalid-argument",e)}function be(){return new m("app-deleted","The Firebase app was deleted.")}function ft(e){return new m("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new m("invalid-format","String does not match format '"+e+"': "+t)}function B(e){throw new m("internal-error","Internal error: "+e)}/**
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
 */class P{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=P.makeFromUrl(t,n)}catch{return new P(t,"")}if(r.path==="")return r;throw ct(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const i="(/(.*))?$",u=new RegExp("^gs://"+o+i,"i"),d={bucket:1,path:3};function h(k){k.path_=decodeURIComponent(k.path)}const C="v[A-Za-z0-9_]+",S=n.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",a=new RegExp(`^https?://${S}/${C}/b/${o}/o${T}`,"i"),c={bucket:1,path:3},p=n===me?"(?:storage.googleapis.com|storage.cloud.google.com)":n,l="([^?#]*)",f=new RegExp(`^https?://${p}/${o}/${l}`,"i"),b=[{regex:u,indices:d,postModify:s},{regex:a,indices:c,postModify:h},{regex:f,indices:{bucket:1,path:2},postModify:h}];for(let k=0;k<b.length;k++){const L=b[k],X=L.regex.exec(t);if(X){const Be=X[L.indices.bucket];let K=X[L.indices.path];K||(K=""),r=new P(Be,K),L.postModify(r);break}}if(r==null)throw lt(t);return r}}class gt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function mt(e,t,n){let r=1,o=null,s=null,i=!1,u=0;function d(){return u===2}let h=!1;function C(...l){h||(h=!0,t.apply(null,l))}function S(l){o=setTimeout(()=>{o=null,e(a,d())},l)}function T(){s&&clearTimeout(s)}function a(l,...f){if(h){T();return}if(l){T(),C.call(null,l,...f);return}if(d()||i){T(),C.call(null,l,...f);return}r<64&&(r*=2);let b;u===1?(u=2,b=0):b=(r+Math.random())*1e3,S(b)}let c=!1;function p(l){c||(c=!0,T(),!h&&(o!==null?(l||(u=2),clearTimeout(o),S(0)):l||(u=1)))}return S(0),s=setTimeout(()=>{i=!0,p(!0)},n),p}function _t(e){e(!1)}/**
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
 */function bt(e){return e!==void 0}function wt(e){return typeof e=="object"&&!Array.isArray(e)}function Q(e){return typeof e=="string"||e instanceof String}function le(e){return ee()&&e instanceof Blob}function ee(){return typeof Blob!="undefined"&&!Ge()}function ce(e,t,n,r){if(r<t)throw J(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw J(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function te(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function we(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */var v;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(v||(v={}));/**
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
 */function kt(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||o||s}/**
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
 */class yt{constructor(t,n,r,o,s,i,u,d,h,C,S,T=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=d,this.timeout_=h,this.progressCallback_=C,this.connectionFactory_=S,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((a,c)=>{this.resolve_=a,this.reject_=c,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new H(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=u=>{const d=u.loaded,h=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,h)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const u=s.getErrorCode()===v.NO_ERROR,d=s.getStatus();if((!u||kt(d,this.additionalRetryCodes_))&&this.retry){const C=s.getErrorCode()===v.ABORT;r(!1,new H(!1,null,C));return}const h=this.successCodes_.indexOf(d)!==-1;r(!0,new H(h,s))})},n=(r,o)=>{const s=this.resolve_,i=this.reject_,u=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());bt(d)?s(d):s()}catch(d){i(d)}else if(u!==null){const d=Z();d.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,d)):i(d)}else if(o.canceled){const d=this.appDelete_?be():at();i(d)}else{const d=it();i(d)}};this.canceled_?n(!1,new H(!1,null,!0)):this.backoffId_=mt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&_t(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class H{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Rt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ct(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Tt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Pt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function St(e,t,n,r,o,s,i=!0){const u=we(e.urlParams),d=e.url+u,h=Object.assign({},e.headers);return Tt(h,t),Rt(h,n),Ct(h,s),Pt(h,r),new yt(d,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
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
 */function xt(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Et(...e){const t=xt();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(ee())return new Blob(e);throw new m("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function At(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Ut(e){if(typeof atob=="undefined")throw pt("base-64");return atob(e)}/**
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
 */const x={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Y{constructor(t,n){this.data=t,this.contentType=n||null}}function ke(e,t){switch(e){case x.RAW:return new Y(ye(t));case x.BASE64:case x.BASE64URL:return new Y(Re(e,t));case x.DATA_URL:return new Y(Ot(t),It(t))}throw Z()}function ye(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,i=e.charCodeAt(++n);r=65536|(s&1023)<<10|i&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function vt(e){let t;try{t=decodeURIComponent(e)}catch{throw D(x.DATA_URL,"Malformed data URL.")}return ye(t)}function Re(e,t){switch(e){case x.BASE64:{const o=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(o||s)throw D(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case x.BASE64URL:{const o=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(o||s)throw D(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ut(t)}catch(o){throw o.message.includes("polyfill")?o:D(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class Ce{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw D(x.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Bt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Ot(e){const t=new Ce(e);return t.base64?Re(x.BASE64,t.rest):vt(t.rest)}function It(e){return new Ce(e).contentType}function Bt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class U{constructor(t,n){let r=0,o="";le(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(le(this.data_)){const r=this.data_,o=At(r,t,n);return o===null?null:new U(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new U(r,!0)}}static getBlob(...t){if(ee()){const n=t.map(r=>r instanceof U?r.data_:r);return new U(Et.apply(null,n))}else{const n=t.map(i=>Q(i)?ke(x.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)o[s++]=i[u]}),new U(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Te(e){let t;try{t=JSON.parse(e)}catch{return null}return wt(t)?t:null}/**
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
 */function Dt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Lt(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Pe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ft(e,t){return t}class w{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||Ft}}let q=null;function Mt(e){return!Q(e)||e.length<2?e:Pe(e)}function Se(){if(q)return q;const e=[];e.push(new w("bucket")),e.push(new w("generation")),e.push(new w("metageneration")),e.push(new w("name","fullPath",!0));function t(s,i){return Mt(i)}const n=new w("name");n.xform=t,e.push(n);function r(s,i){return i!==void 0?Number(i):i}const o=new w("size");return o.xform=r,e.push(o),e.push(new w("timeCreated")),e.push(new w("updated")),e.push(new w("md5Hash",null,!0)),e.push(new w("cacheControl",null,!0)),e.push(new w("contentDisposition",null,!0)),e.push(new w("contentEncoding",null,!0)),e.push(new w("contentLanguage",null,!0)),e.push(new w("contentType",null,!0)),e.push(new w("metadata","customMetadata",!0)),q=e,q}function $t(e,t){function n(){const r=e.bucket,o=e.fullPath,s=new P(r,o);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function Nt(e,t,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const i=n[s];r[i.local]=i.xform(r,t[i.server])}return $t(r,e),r}function xe(e,t,n){const r=Te(t);return r===null?null:Nt(e,r,n)}function jt(e,t,n,r){const o=Te(t);if(o===null||!Q(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(h=>{const C=e.bucket,S=e.fullPath,T="/b/"+i(C)+"/o/"+i(S),a=te(T,n,r),c=we({alt:"media",token:h});return a+c})[0]}function Ht(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const s=t[o];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Ee{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ae(e){if(!e)throw Z()}function qt(e,t){function n(r,o){const s=xe(e,o,t);return Ae(s!==null),s}return n}function zt(e,t){function n(r,o){const s=xe(e,o,t);return Ae(s!==null),jt(s,o,e.host,e._protocol)}return n}function Ue(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=ot():o=rt():n.getStatus()===402?o=nt(e.bucket):n.getStatus()===403?o=st(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function Wt(e){const t=Ue(e);function n(r,o){let s=t(r,o);return r.getStatus()===404&&(s=tt(e.path)),s.serverResponse=o.serverResponse,s}return n}function Xt(e,t,n){const r=t.fullServerUrl(),o=te(r,e.host,e._protocol),s="GET",i=e.maxOperationRetryTime,u=new Ee(o,s,zt(e,n),i);return u.errorHandler=Wt(t),u}function Kt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Gt(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=Kt(null,t)),r}function Vt(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let b="";for(let k=0;k<2;k++)b=b+Math.random().toString().slice(2);return b}const d=u();i["Content-Type"]="multipart/related; boundary="+d;const h=Gt(t,r,o),C=Ht(h,n),S="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+C+`\r
--`+d+`\r
Content-Type: `+h.contentType+`\r
\r
`,T=`\r
--`+d+"--",a=U.getBlob(S,r,T);if(a===null)throw dt();const c={name:h.fullPath},p=te(s,e.host,e._protocol),l="POST",f=e.maxUploadRetryTime,_=new Ee(p,l,qt(e,n),f);return _.urlParams=c,_.headers=i,_.body=a.uploadData(),_.errorHandler=Ue(t),_}class Yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=v.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=v.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=v.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw B("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw B("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw B("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw B("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw B("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Jt extends Yt{initXhr(){this.xhr_.responseType="text"}}function ve(){return new Jt}/**
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
 */class O{constructor(t,n){this._service=t,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new O(t,n)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pe(this._location.path)}get storage(){return this._service}get parent(){const t=Dt(this._location.path);if(t===null)return null;const n=new P(this._location.bucket,t);return new O(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ft(t)}}function Zt(e,t,n){e._throwIfRoot("uploadBytes");const r=Vt(e.storage,e._location,Se(),new U(t,!0),n);return e.storage.makeRequestWithTokens(r,ve).then(o=>({metadata:o,ref:e}))}function Qt(e,t,n=x.RAW,r){e._throwIfRoot("uploadString");const o=ke(n,t),s=Object.assign({},r);return s.contentType==null&&o.contentType!=null&&(s.contentType=o.contentType),Zt(e,o.data,s)}function en(e){e._throwIfRoot("getDownloadURL");const t=Xt(e.storage,e._location,Se());return e.storage.makeRequestWithTokens(t,ve).then(n=>{if(n===null)throw ht();return n})}function tn(e,t){const n=Lt(e._location.path,t),r=new P(e._location.bucket,n);return new O(e.storage,r)}/**
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
 */function nn(e){return/^[A-Za-z]+:\/\//.test(e)}function rn(e,t){return new O(e,t)}function Oe(e,t){if(e instanceof ne){const n=e;if(n._bucket==null)throw ut();const r=new O(n,n._bucket);return t!=null?Oe(r,t):r}else return t!==void 0?tn(e,t):e}function on(e,t){if(t&&nn(t)){if(e instanceof ne)return rn(e,t);throw J("To use ref(service, url), the first argument must be a Storage instance.")}else return Oe(e,t)}function ue(e,t){const n=t==null?void 0:t[_e];return n==null?null:P.makeFromBucketSpec(n,e)}function sn(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:Ve(o,e.app.options.projectId))}class ne{constructor(t,n,r,o,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=s,this._bucket=null,this._host=me,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qe,this._maxUploadRetryTime=et,this._requests=new Set,o!=null?this._bucket=P.makeFromBucketSpec(o,this._host):this._bucket=ue(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=ue(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,n,r,o,s=!0){if(this._deleted)return new gt(be());{const i=St(t,this._appId,r,o,n,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const de="@firebase/storage",he="0.9.14";/**
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
 */const Ie="storage";function pe(e,t,n,r){return e=W(e),Qt(e,t,n,r)}function fe(e){return e=W(e),en(e)}function z(e,t){return e=W(e),on(e,t)}function ge(e=qe(),t){e=W(e);const r=ze(e,Ie).getImmediate({identifier:t}),o=We("storage");return o&&an(r,...o),r}function an(e,t,n,r={}){sn(e,t,n,r)}function ln(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ne(n,r,o,t,Xe)}function cn(){je(new He(Ie,ln,"PUBLIC").setMultipleInstances(!0)),ie(de,he,""),ie(de,he,"esm2017")}cn();const pn=Ye(()=>({listCandidate:()=>{const a=j({});return ae(y.candidate,c=>{const p=[];c.forEach(l=>{p.push({key:l.id,data:l.data()})}),p.reduce((l,f)=>(a[f.key]=f.data,F({},l)),{})}),a},addCandidate:a=>{const c=ge(),p=z(c,"candidate/"+a.name+".png");pe(p,a.photo,"data_url",{contentType:"image/png"}).then(l=>{(async()=>await fe(z(c,"candidate/"+a.name+".png")))().then(_=>{a.photo=_,y.addCandidate(a).then(()=>{alert(a.name+" berhasil ditambahkan"),location.reload()}).catch(b=>{alert(a.name+" gagal ditambahkan")})})})},deleteCandidate:(a,c)=>{y.deleteCandidate(a).then(()=>{alert("Candidate : "+c+" berhasil dihapus"),location.reload()})},listParticipant:()=>{let a=j({result:{}}),c=j({result:{}});return(async()=>await I(y.Delegation).then(l=>l))().then(l=>{l.forEach(f=>{let _=f.data();c.result[_.code]=_.delegation})}),ae(y.participant,l=>{const f={};l.forEach(_=>{let b=_.data();b.delegation=c.result[b.delegation],f[_.id]=b}),a.result=f}),a},addParticipant:a=>{const c=ge(),p=z(c,"participant/"+a.name+".png");pe(p,a.photo,"data_url",{contentType:"image/png"}).then(l=>{(async()=>await fe(z(c,"participant/"+a.name+".png")))().then(_=>{a.photo=_,y.addParticipant(a).then(()=>{alert(a.name+" berhasil ditambahkan"),location.reload()}).catch(b=>{alert(a.name+" gagal ditambahkan")})})})},deleteParticipant:(a,c)=>{y.deleteParticipant(a).then(()=>{alert("Participant : "+c+" berhasil dihapus"),location.reload()})},listCandidatePosition:async()=>{const a=await I(y.candidatePosition).then(l=>l),c=[];return a.forEach(l=>{c.push({key:l.id,data:l.data()})}),c.reduce((l,f)=>G(F({},l),{[f.key]:f.data}),{})},addCandidatePosition:a=>{y.addCandidatePosition(a).then(()=>{alert("Candidate Position : "+a.position+" berhasil ditambahkan"),location.reload()}).catch(c=>{alert("Candidate Position : "+a.position+" gagal ditambahkan")})},listDelegation:async()=>{const a=await I(y.Delegation).then(l=>l),c=[];return a.forEach(l=>{c.push({key:l.id,data:l.data()})}),c.reduce((l,f)=>G(F({},l),{[f.key]:f.data}),{})},addDelegation:a=>{y.addDelegation(a).then(()=>{alert("Delegation : "+a.delegation+" berhasil ditambahkan"),location.reload()}).catch(c=>{alert("Delegation : "+a.delegation+" gagal ditambahkan")})},deleteDelegation:(a,c)=>{y.deleteDelegation(a).then(()=>{alert(`Delegation : ${c} berhasil dihapus`),location.reload()})},generateParticipantToken:async a=>{const c=j({token:[],participant:{}});await I(y.token).then(p=>{p.forEach(l=>{c.token.push(l.id),console.log(l.id)})}),await I(E(R(g,"participant"),Ze("delegation","==",a))).then(p=>{p.forEach(l=>{c.participant[l.id]=l.data(),console.log(l.id)})}),Object.keys(c.participant).forEach(p=>{console.log({participant:c.participant},{token:c.token},{x:p},p.includes(c.participant)),p.includes(c.participant)&&alert("token sudah ada")})},applicationSetting:async()=>{let a=await Je(y.applicationSetting).then(c=>c);if(a.exists())return a.data()}}));export{pn as g};
