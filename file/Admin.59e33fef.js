import{_ as r,a as p}from"./main.dddc2fa3.js";import{h as _,o as l,c,j as t,k as e,w as a,p as h,q as f,t as o,f as v}from"./vendor.45e48e1f.js";const g={},s=i=>(h("data-v-33280cfe"),i=i(),f(),i),A=s(()=>t("h3",{class:"sidebar-title p-3"},"ADMIN DASHBOARD",-1)),S=s(()=>t("li",{class:"menu-heading"},"data",-1)),D=o(" Input Candidate Data "),C=o(" Candidate data "),I=o(" Delegation "),x=o(" Input Participant Data "),k=o(" Participant "),b=o(" election tokens "),w=o(" Live Count "),y=s(()=>t("li",{class:"menu-heading"},"Setting",-1)),B=o(" Account "),L=o(" application "),N=s(()=>t("li",{class:"menu-heading"},"Logout",-1)),P=o(" Logout ");function $(i,d){const n=_("router-link");return l(),c("aside",null,[A,t("ul",null,[S,t("li",null,[e(n,{class:"menu-item",to:{name:"adminInputCandidateData"}},{default:a(()=>[D]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminCandidate"}},{default:a(()=>[C]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminDelegation"}},{default:a(()=>[I]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminInputParticipantData"}},{default:a(()=>[x]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminParticipant"}},{default:a(()=>[k]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminElectionToken"}},{default:a(()=>[b]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminLiveCount"}},{default:a(()=>[w]),_:1})]),y,t("li",null,[e(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[B]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[L]),_:1})]),N,t("li",null,[e(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[P]),_:1})])])])}var V=r(g,[["render",$],["__scopeId","data-v-33280cfe"]]);const E={class:"admin-layout"},T={class:"sidebar"},j={class:"content p-5"},M=v({setup(i){return p().getAdminData(),(d,n)=>{const u=V,m=_("router-view");return l(),c("div",E,[t("div",T,[e(u)]),t("div",j,[e(m)])])}}});export{M as default};
