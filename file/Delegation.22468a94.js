import{g as _}from"./main.851a0eec.js";import{f as g,r as h,o,c as n,j as t,m as v,O as c,S as x,l as a,k as y,Q as b,R as k,Z as m,n as $,a as I,T as p}from"./vendor.441eeb9a.js";const N={class:"modal fade",id:"modalInputDelegation","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"modalInputDelegationLabel","aria-hidden":"true"},O={class:"modal-dialog"},S={class:"modal-content"},j=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"modalInputDelegationLabel"}," Input Delegation "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},L={class:"mb-3"},C=t("label",{for:"delegation",class:"form-label d-none"}," delegation ",-1),T={class:"modal-footer"},V=["disabled"],E=g({setup(f){const e=h({delegation:"",order:"Number",code:"code"}),r=()=>e.delegation=="",i=()=>_().addDelegation(e);return(l,s)=>(o(),n("div",N,[t("div",O,[t("div",S,[j,t("div",w,[t("form",{onSubmit:s[1]||(s[1]=v(d=>i(),["prevent"]))},[t("div",L,[C,c(t("input",{type:"text",class:"form-control",id:"delegation",placeholder:"Delegation","onUpdate:modelValue":s[0]||(s[0]=d=>a(e).delegation=d),required:""},null,512),[[x,a(e).delegation]])])],32)]),t("div",T,[t("button",{type:"submit",class:"btn btn-primary",disabled:r()}," Add Delegation ",8,V)])])])]))}}),A=I('<div class="row justify-content-between"><div class="col"><h4 class="fw-bolder">DELEGATION</h4></div><div class="col-auto"><button class="btn btn-success btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#modalInputDelegation"> Input Delegation </button></div></div><div class="divider mb-3"></div>',2),B={class:"table-box"},M={class:"in-admin m-3"},q=t("thead",{class:"text-center"},[t("tr",null,[t("th",{class:"text-uppercase"},"No"),t("th",{class:"text-uppercase"},"Delegation"),t("th",{class:"text-uppercase"},"Action")])],-1),F={key:0},G={class:"text-uppercase"},H={class:"text-uppercase"},Q=t("button",{class:"btn btn-primary btn-sm"},"edit",-1),R=t("td",{colspan:"6"},"Data tidak ditemukan",-1),U=[R],K=g({setup(f){const e=h({result:Object});(()=>_().listDelegation().then(l=>{e.result=l}))();const i=()=>{confirm("Hapus nama dari calon ketua umum ?")===!0};return(l,s)=>{const d=E;return o(),n(b,null,[y(d),t("div",null,[A,t("div",B,[t("table",M,[q,a(e)?(o(),n("tbody",F,[(o(!0),n(b,null,k(a(e).result,(D,u)=>c((o(),n("tr",{class:"text-uppercase",key:u},[t("td",G,p(Object.keys(a(e).result).indexOf(u.toString())+1),1),t("td",H,p(D.delegation),1),t("td",null,[Q,t("button",{class:"btn btn-danger btn-sm",onClick:s[0]||(s[0]=v(Z=>i(),["prevent"]))}," hapus ")])])),[[m,Object.keys(a(e).result).length!=0]])),128)),c(t("tr",null,U,512),[[m,Object.keys(a(e).result).length==0]])])):$("",!0)])])])],64)}}});export{K as default};
