import{_ as r,g as p}from"./main.a2a25b53.js";import{h as _,o as l,c,j as t,k as e,w as a,p as h,q as f,t as i,f as v}from"./vendor.34c2f06c.js";const g={},s=o=>(h("data-v-16a87c3a"),o=o(),f(),o),A=s(()=>t("h3",{class:"sidebar-title p-3"},"ADMIN DASHBOARD",-1)),D=s(()=>t("li",{class:"menu-heading"},"data",-1)),S=i(" Input Candidate Data "),C=i(" Candidate data "),I=i(" Delegation "),x=i(" Input Participant Data "),k=i(" Participant "),b=i(" election tokens "),w=i(" Live Count "),y=s(()=>t("li",{class:"menu-heading"},"Setting",-1)),B=i(" Account "),N=i(" application ");function P(o,d){const n=_("router-link");return l(),c("aside",null,[A,t("ul",null,[D,t("li",null,[e(n,{class:"menu-item",to:{name:"adminInputCandidateData"}},{default:a(()=>[S]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminCandidate"}},{default:a(()=>[C]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminDelegation"}},{default:a(()=>[I]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminInputParticipantData"}},{default:a(()=>[x]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminParticipant"}},{default:a(()=>[k]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminElectionToken"}},{default:a(()=>[b]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminLiveCount"}},{default:a(()=>[w]),_:1})]),y,t("li",null,[e(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[B]),_:1})]),t("li",null,[e(n,{class:"menu-item",to:{name:"adminApplicationSetting"}},{default:a(()=>[N]),_:1})])])])}var $=r(g,[["render",P],["__scopeId","data-v-16a87c3a"]]);const V={class:"admin-layout"},E={class:"sidebar"},L={class:"content p-5"},q=v({setup(o){return p().getAdminData(),(d,n)=>{const u=$,m=_("router-view");return l(),c("div",V,[t("div",E,[e(u)]),t("div",L,[e(m)])])}}});export{q as default};