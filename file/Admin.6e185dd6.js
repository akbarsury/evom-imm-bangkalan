import{_ as r,a as p}from"./main.851a0eec.js";import{h as _,o as c,c as l,j as e,k as t,w as a,p as h,q as f,t as o,f as v}from"./vendor.441eeb9a.js";const g={},i=s=>(h("data-v-6cc37366"),s=s(),f(),s),A=i(()=>e("h3",{class:"sidebar-title p-3"},"ADMIN DASHBOARD",-1)),S=i(()=>e("li",{class:"menu-heading"},"data",-1)),C=o(" Input Candidate Data "),x=o(" Candidate data "),D=o(" Delegation "),k=o(" Participant "),I=o(" election tokens "),b=o(" Live Count "),w=i(()=>e("li",{class:"menu-heading"},"Setting",-1)),y=o(" Account "),B=o(" application "),L=i(()=>e("li",{class:"menu-heading"},"Logout",-1)),N=o(" Logout ");function $(s,d){const n=_("router-link");return c(),l("aside",null,[A,e("ul",null,[S,e("li",null,[t(n,{class:"menu-item",to:{name:"adminInputCandidateData"}},{default:a(()=>[C]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"adminCandidate"}},{default:a(()=>[x]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"adminDelegation"}},{default:a(()=>[D]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"admin"}},{default:a(()=>[k]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"adminElectionToken"}},{default:a(()=>[I]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"adminLiveCount"}},{default:a(()=>[b]),_:1})]),w,e("li",null,[t(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[y]),_:1})]),e("li",null,[t(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[B]),_:1})]),L,e("li",null,[t(n,{class:"menu-item",to:{name:"adminAccountSetting"}},{default:a(()=>[N]),_:1})])])])}var V=r(g,[["render",$],["__scopeId","data-v-6cc37366"]]);const E={class:"admin-layout"},T={class:"sidebar"},j={class:"content p-5"},M=v({setup(s){return p().getAdminData(),(d,n)=>{const u=V,m=_("router-view");return c(),l("div",E,[e("div",T,[t(u)]),e("div",j,[t(m)])])}}});export{M as default};