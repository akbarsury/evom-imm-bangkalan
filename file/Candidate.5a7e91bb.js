import{g as l}from"./evomStore.e906f331.js";import{f as u,c as n,j as t,m as a,F as x,D as m,B as p,G as _,n as b,o,A as s,l as f}from"./vendor.34c2f06c.js";import"./main.a6ad6238.js";const g=t("h4",{class:"fw-bolder"},"CANDIDATE",-1),y=t("div",{class:"divider mb-3"},null,-1),k={class:"table-box"},C={class:"in-admin m-3"},v=t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-center"},"No"),t("th",{class:"text-uppercase text-center"},"Name"),t("th",{class:"text-uppercase text-center"},"Serial Number"),t("th",{class:"text-uppercase text-center"},"Delegation"),t("th",{class:"text-uppercase text-center"},"Candidate Position"),t("th",{class:"text-uppercase text-center"},"Birthday"),t("th",{class:"text-uppercase text-center"},"Photo"),t("th",{class:"text-uppercase text-center"},"Action")])],-1),D={key:0},N={class:"text-uppercase text-center"},S={class:"text-uppercase text-center"},w={class:"text-uppercase text-center"},A={class:"text-uppercase text-center"},B={class:"text-uppercase text-center"},j={class:"text-uppercase text-center"},O={class:"text-uppercase text-center"},E=["src","alt"],P={class:"text-uppercase text-center"},F=t("button",{class:"btne btn-primary btn-sm"},"edit",-1),T=["onClick"],V=t("td",{colspan:"8"},"Data tidak ditemukan",-1),$=[V],z=u({setup(G){const c=l().listCandidate(),h=(d,r)=>{let e=`Are you sure you to delete ${r} from candidate ?`;confirm(e)===!0&&l().deleteCandidate(d,r)};return(d,r)=>(o(),n("div",null,[g,y,t("div",k,[t("table",C,[v,a(c)?(o(),n("tbody",D,[(o(!0),n(x,null,m(a(c),(e,i)=>p((o(),n("tr",{key:i},[t("td",N,s(Object.keys(a(c)).indexOf(i.toString())+1),1),t("td",S,s(e.name),1),t("td",w,s(e.number),1),t("td",A,s(e.delegation),1),t("td",B,s(e.candidatePosition),1),t("td",j,s(e.birthday),1),t("td",O,[t("img",{src:e.photo,style:{width:"100px",height:"100px"},alt:e.name},null,8,E)]),t("td",P,[F,t("button",{class:"btne btn-danger btn-sm",onClick:f(I=>h(i.toString(),e.name),["prevent"])}," hapus ",8,T)])])),[[_,Object.keys(a(c)).length!=0]])),128)),p(t("tr",null,$,512),[[_,Object.keys(a(c)).length==0]])])):b("",!0)])])]))}});export{z as default};