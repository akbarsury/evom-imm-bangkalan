import{f as w,r as x,z as m,c,j as e,A as n,m as s,l as S,B as v,C,x as D,F as k,D as b,E as j,p as L,q as T,o as l,G as E}from"./vendor.34c2f06c.js";import{g as h}from"./evomStore.003a9f1f.js";import{_ as I,r as U}from"./main.a2a25b53.js";var B="/evom-imm-bangkalan/file/pengurus.4f541a81.png";const u=d=>(L("data-v-6d8a9eaa"),d=d(),T(),d),O={class:"container-fluid p-0"},q={class:"banner"},M={class:"background"},N={class:"container"},V={class:"row"},z={class:"col-12 col-md-8"},A={class:"heading-content text-uppercase no-select"},F={class:"heading"},G={class:"executor"},$={class:"thema"},K={class:"col-12 col-md-4 d-flex align-items-end"},H={class:"form-token-voting text-center"},J=u(()=>e("option",{value:"",hidden:""},"Delegasi",-1)),P=["value"],Q=u(()=>e("button",{type:"submit",class:"btne btn-success"},"voting",-1)),R=u(()=>e("div",{class:"row justify-content-center m-0"},[e("div",{class:"col-11 col-md-7 text-center foto-pengurus"},[e("img",{class:"img-fluid",src:B,alt:"pengurus"})])],-1)),W={class:"calon-formatur mt-5"},X={class:"container"},Y=u(()=>e("h2",null,"calon formatur",-1)),Z={class:"container m-4"},ee={class:"row justify-content-center"},te={class:"kandidat-img"},se=["src"],oe={class:"nama no-select"},ae={class:"number no-select"},ne=w({setup(d){const g=x({result:Object});(()=>h().listDelegation().then(p=>{g.result=p}))();const f=h().listCandidate(),i=x({application:Object});h().applicationSetting().then(p=>{i.application=p});const r=m(""),o=m(""),y=async()=>{m("19"+o.value.slice(0,2)+r.value+o.value.slice(2)),o.value.toUpperCase()=="TESTING"?U.push({name:"vote",params:{token:o.value.toLowerCase()}}):alert("Ups,, Token tidak ditemukan")};return(p,a)=>(l(),c("div",O,[e("section",q,[e("div",M,[e("div",N,[e("div",V,[e("div",z,[e("div",A,[e("h1",F,n(s(i).application.heading),1),e("h2",G,n(s(i).application.executor),1),e("h3",$,n(`${s(i).application.thema!=null?s(i).application.thema:""}`),1)])]),e("div",K,[e("div",H,[e("form",{onSubmit:a[2]||(a[2]=S(t=>y(),["prevent"]))},[v(e("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),class:D([r.value==""?"text-secondary":"","w-100 text-uppercase"]),id:"delegation",name:"delegation",required:""},[J,(l(!0),c(k,null,b(s(g).result,(t,_)=>(l(),c("option",{key:_,value:t.code,class:"text-uppercase text-dark"},n(t.delegation.toUpperCase()),9,P))),128))],2),[[C,r.value]]),v(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>o.value=t),class:"w-100 text-uppercase",type:"text",placeholder:"TOKEN",required:""},null,512),[[j,o.value]]),Q],32)])])])]),R])]),e("section",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[(l(!0),c(k,null,b(s(f),(t,_)=>v((l(),c("div",{class:"col-6 col-md-4 col-lg-3",key:_},[e("div",te,[e("img",{class:"no-select",src:t.photo,alt:"x.name"},null,8,se),e("span",oe,n(t.name),1),e("span",ae,n(t.number),1)])])),[[E,Object.keys(s(f)).length!=0]])),128))])])])])]))}});var re=I(ne,[["__scopeId","data-v-6d8a9eaa"]]);export{re as default};