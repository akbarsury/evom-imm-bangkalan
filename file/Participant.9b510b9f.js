import{g as d}from"./main.ff953018.js";import{f as u,c as a,j as t,m as c,S as x,T as m,Q as p,V as h,n as b,o,P as n,l as f}from"./vendor.57aa19e6.js";const g=t("h4",{class:"fw-bolder"},"PARTICIPANT",-1),k=t("div",{class:"divider mb-3"},null,-1),y={class:"table-box"},v={class:"in-admin m-3"},P=t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-center"},"No"),t("th",{class:"text-uppercase text-center"},"Name"),t("th",{class:"text-uppercase text-center"},"Delegation"),t("th",{class:"text-uppercase text-center"},"Address"),t("th",{class:"text-uppercase text-center"},"Birthday"),t("th",{class:"text-uppercase text-center"},"Token"),t("th",{class:"text-uppercase text-center"},"Photo"),t("th",{class:"text-uppercase text-center"},"Action")])],-1),w={key:0},S={class:"text-uppercase text-center"},A={class:"text-uppercase text-center"},C={class:"text-uppercase text-center"},N={class:"text-uppercase text-center"},T={class:"text-uppercase text-center"},j=t("td",{class:"text-uppercase text-center"},[t("button",{class:"btn-warning btn-sm"},"lihat token")],-1),B={class:"text-uppercase text-center"},D=["src","alt"],O={class:"text-uppercase text-center"},V=t("button",{class:"btn-primary btn-sm"},"edit",-1),E=["onClick"],I=t("td",{colspan:"8"},"Data tidak ditemukan",-1),$=[I],R=u({setup(F){const s=d().listParticipant(),_=(l,r)=>{let e=`Are you sure you to delete ${r} from participan? ?`;confirm(e)===!0&&d().deleteParticipant(l,r)};return(l,r)=>(o(),a("div",null,[g,k,t("div",y,[t("table",v,[P,c(s)?(o(),a("tbody",w,[(o(!0),a(x,null,m(c(s),(e,i)=>p((o(),a("tr",{key:i},[t("td",S,n(Object.keys(c(s)).indexOf(i.toString())+1),1),t("td",A,n(e.name),1),t("td",C,n(e.delegation),1),t("td",N,n(e.address),1),t("td",T,n(e.birthday),1),j,t("td",B,[t("img",{src:e.photo,style:{width:"100px",height:"100px"},alt:e.name},null,8,D)]),t("td",O,[V,t("button",{class:"btn-danger btn-sm",onClick:f(L=>_(i.toString(),e.name),["prevent"])}," hapus ",8,E)])])),[[h,Object.keys(c(s)).length!=0]])),128)),p(t("tr",null,$,512),[[h,Object.keys(c(s)).length==0]])])):b("",!0)])])]))}});export{R as default};