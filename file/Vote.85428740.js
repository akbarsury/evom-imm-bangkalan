import{u as D,a as S,I as A,r as v,A as M,N as B,l as H,S as N,o as c,c as u,d as t,M as k,O as g,f as l,Q as r,j as y,g as _,k as V,p as L,i as R,R as U,n as b}from"./vendor.5bcef8ec.js";import{_ as K}from"./kandidat-layout.2b79f2d0.js";import{_ as P,d as T}from"./index.64f3c53e.js";var O="./file/imm-bangkalan.25c6fc19.png",X="./file/musycab-XIII.ce89112c.png",$="./file/basmalah.3d4545ea.png";const o=d=>(L("data-v-c43a82b2"),d=d(),R(),d),z={class:"container py-5"},E={class:"row justify-content-center"},G={class:"vote col-11 col-md-8 p-0 shadow"},q=V('<div class="header" data-v-c43a82b2><div class="row align-items-center" data-v-c43a82b2><div class="col-2" data-v-c43a82b2><img src="'+O+'" alt="IMM Bangkalan" data-v-c43a82b2></div><div class="col-8 mt-4" data-v-c43a82b2><h1 data-v-c43a82b2>MUSYCAB XIII PC IMM BANGKALAN</h1><p data-v-c43a82b2>Pemilihan Ketua Umum dan Formatur</p></div><div class="col-2" data-v-c43a82b2><img src="'+X+'" alt="Musycab XII" data-v-c43a82b2></div></div></div>',1),Q={class:"content p-5"},Y=o(()=>t("img",{class:"mb-3",src:$,style:{width:"40%"},alt:"bismillahirrahmanirrahim"},null,-1)),J=o(()=>t("blockquote",{class:"fw-bold"},' "Sesuatu yang dilakukan dari dan oleh hati, akan sampai juga ke hati." (Bagus Rifani) ',-1)),W=o(()=>t("div",{class:"divider my-3"},null,-1)),Z=o(()=>t("h3",{class:"fw-bold"},"Calon Ketua Umum",-1)),x={class:"row justify-content-center"},aa=o(()=>t("img",{class:"",style:{width:"100%"},src:K,alt:""},null,-1)),ta={class:"data shadow"},sa={class:"nama"},ea=["onClick"],ia={class:"text-center mt-3",id:"selected-ketum-count"},oa=y("/1 Dipilih "),la=o(()=>t("div",{class:"divider my-3"},null,-1)),na=o(()=>t("h3",{class:"fw-bold"},"Calon Formatur",-1)),ra={class:"vote-formatur row"},ca=["onClick"],ua={class:""},da={class:"text-center mt-3",id:"selected-formatur-count"},ma=o(()=>t("div",{class:"divider my-3"},null,-1)),ha=["onClick"],_a={setup(d){const m=D(),p=S(),I=m.state.caketumList,w=m.state.formaturList,h=A(),i=v({}),a=v({ketum:[],formatur:[],pemilih:null});M(B(T,"evom","pengaturan"),s=>{i.statusVotingAktif=s.data().statusVotingAktif,i.jumlahFormaturHarusDipilih=s.data().jumlahFormaturHarusDipilih,i.statusVotingAktif||(alert("Tidak dalam masa pemilihan.(Panlih)"),p.push({name:"landing"}))});const F=()=>{a.pemilih=h.data,a.ketum.length<1||a.formatur.length<i.jumlahFormaturHarusDipilih?alert(`harus memilih 1 ketua umum dan ${i.jumlahFormaturHarusDipilih} formatur`):a.pemilih=="TESTING"?(alert("Testing berhasil"),window.location.reload()):m.commit("kirimPilihan",a)},j=s=>{a.ketum.length==1&&a.ketum.includes(s)?a.ketum.pop():a.ketum.length==1&&!a.ketum.includes(s)||a.ketum.push(s)},C=s=>{if(a.formatur.length<i.jumlahFormaturHarusDipilih&&a.formatur.includes(s)){const n=a.formatur.indexOf(s);n!=-1&&a.formatur.splice(n,1)}else if(a.formatur.length<i.jumlahFormaturHarusDipilih&&!a.formatur.includes(s))a.formatur.push(s);else if(a.formatur.length==i.jumlahFormaturHarusDipilih&&a.formatur.includes(s)){const n=a.formatur.indexOf(s);n!=-1&&a.formatur.splice(n,1)}};return h.data=H().params.token,N(()=>{h.data||p.push({name:"landing"})}),(s,n)=>(c(),u("div",z,[t("div",E,[t("div",G,[q,t("div",Q,[Y,J,W,Z,t("div",x,[(c(!0),u(k,null,g(l(I)[0],e=>(c(),u("div",{class:"col-11 col-md-8 col-lg-6 mb-3",key:e},[t("div",{class:"kandidat-img mb-2",style:U("background-image: url('"+e.data.fotoUrl+"')")},[aa,t("div",ta,[t("span",sa,r(e.data.nama),1)])],4),t("button",{class:b([l(a).ketum.includes(e.key)?"selected":"","btn btn-secondary btn-pilih-ketum"]),onClick:_(f=>j(e.key),["prevent"])}," pilih ",10,ea)]))),128)),t("div",ia,[t("span",null,r(l(a).ketum.length),1),oa])]),la,na,t("div",ra,[(c(!0),u(k,null,g(l(w)[0],(e,f)=>(c(),u("div",{key:e,class:"col-12 col-md-6"},[t("div",{class:b([l(a).formatur.includes(e.key)?"selected":"","btn-select-formatur"]),onClick:_(pa=>C(e.key),["prevent"])},[t("span",ua,r(f+1),1),t("span",null,r(e.data.nama),1)],10,ca)]))),128)),t("div",da,[t("span",null,r(l(a).formatur.length),1),y("/"+r(l(i).jumlahFormaturHarusDipilih)+" Dipilih ",1)])]),ma,t("button",{class:"btn btn-primary",onClick:_(F,["prevent"])}," kirim ",8,ha)])])])]))}};var ga=P(_a,[["__scopeId","data-v-c43a82b2"]]);export{ga as default};