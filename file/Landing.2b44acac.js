import{u as x,r as I,I as _,o,c as n,d as s,g as S,J as k,L as M,n as N,M as m,O as v,f as p,P as A,p as B,i as C,N as U,B as K,Q as h,R as f}from"./vendor.5bcef8ec.js";import{_ as y}from"./kandidat-layout.2b79f2d0.js";import{_ as P,d as E,r as g}from"./index.a1a2d004.js";var j="file/pengurus.4f541a81.png";const e=c=>(B("data-v-7737e030"),c=c(),C(),c),D={class:"container-fluid p-0"},V={class:"banner"},q={class:"background"},z={class:"container"},F={class:"row"},G=e(()=>s("div",{class:"col-12 col-md-8"},[s("div",{class:"heading-musycab"},[s("h1",null,"MUSYCAB XIII"),s("h1",null,"PC IMM BANGKALAN"),s("h3",{class:"fw-normal"},'"Amerta Adiwidia, Eka Karsa Nirmala"')])],-1)),O={class:"col-12 col-md-4 d-flex align-items-end"},$={class:"form-token-voting text-center"},J=e(()=>s("option",{value:"",hidden:""},"Delegasi",-1)),Q=e(()=>s("option",{value:"pc",class:"text-uppercase text-dark"}," PC. IMM Bangkalan ",-1)),R=["value"],X=e(()=>s("button",{type:"submit",class:"btn btn-success"},"voting",-1)),Y=e(()=>s("div",{class:"row justify-content-center m-0"},[s("div",{class:"col-11 col-md-7 text-center foto-pengurus"},[s("img",{class:"img-fluid",src:j,alt:"pengurus"})])],-1)),H={class:"calon-ketua-umum mt-5"},W={class:"container"},Z=e(()=>s("h2",null,"calon ketua umum",-1)),ss={class:"container m-4"},ts={class:"row justify-content-center"},es=e(()=>s("img",{class:"",style:{width:"100%"},src:y,alt:""},null,-1)),as={class:"nama shadow"},os={class:"calon-formatur mt-5"},ns={class:"container"},is=e(()=>s("h2",null,"calon formatur",-1)),ls={class:"container m-4"},cs={class:"row justify-content-center"},ds=e(()=>s("img",{class:"",style:{width:"100%"},src:y,alt:""},null,-1)),rs={class:"nama"},us={setup(c){const d=x(),w=d.state.caketumList,T=d.state.formaturList,L=I(d.state.komisariatList),r=_(""),i=_(""),b=async()=>{let u=_("19"+i.value.slice(0,2)+r.value+i.value.slice(2));if(d.state.tokenList.availableToken.includes(u.value.toLowerCase())){const t=U(E,"evom","token"),l=await K(t);l.exists()&&(l.data().usedToken.includes(u.value.toLowerCase())?alert("Token anda telah digunakan sebelumnya"):g.push({name:"vote",params:{token:u.value}}))}else i.value=="TESTING"?g.push({name:"vote",params:{token:i.value.toLowerCase()}}):alert("Ups,, Token tidak ditemukan")};return(u,a)=>(o(),n("div",D,[s("section",V,[s("div",q,[s("div",z,[s("div",F,[G,s("div",O,[s("div",$,[s("form",{onSubmit:a[2]||(a[2]=S(t=>b(),["prevent"]))},[k(s("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),class:N([r.value==""?"text-secondary":"","w-100 text-uppercase"]),id:"komisariat",name:"komisariat",required:""},[J,Q,(o(!0),n(m,null,v(p(L),(t,l)=>(o(),n("option",{key:l,value:l,class:"text-uppercase text-dark"},h(`PK. ${t}`),9,R))),128))],2),[[M,r.value]]),k(s("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t),class:"w-100",type:"text",placeholder:"TOKEN",required:""},null,512),[[A,i.value]]),X],32)])])])]),Y])]),s("section",H,[s("div",W,[Z,s("div",ss,[s("div",ts,[(o(!0),n(m,null,v(p(w)[0],t=>(o(),n("div",{class:"col-8 col-md-6 col-lg-4",key:t},[s("div",{class:"kandidat-img",style:f("background-image: url("+t.data.fotoUrl+")")},[es,s("span",as,h(t.data.nama),1)],4)]))),128))])])])]),s("section",os,[s("div",ns,[is,s("div",ls,[s("div",cs,[(o(!0),n(m,null,v(p(T)[0],t=>(o(),n("div",{class:"col-6 col-md-4 col-lg-3",key:t},[s("div",{class:"kandidat-img",style:f("background-image: url('"+t.data.fotoUrl+"')")},[ds,s("span",rs,h(t.data.nama),1)],4)]))),128))])])])])]))}};var hs=P(us,[["__scopeId","data-v-7737e030"]]);export{hs as default};
