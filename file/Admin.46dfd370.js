import{b as w,o as p,c as h,d as e,e as t,w as l,p as P,i as k,j as u,u as x,a as C,F as S,r as _,f as d,g as U,J as v,P as b,V as $,W as D,X as I}from"./vendor.5bcef8ec.js";import{_ as L}from"./main.f43fc352.js";import"./modulepreload-polyfill.f1aef043.js";const T={},g=i=>(P("data-v-a4037e4e"),i=i(),k(),i),V=g(()=>e("h3",{class:"sidebar-title p-3"},"ADMIN DASHBOARD",-1)),K=g(()=>e("li",{class:"menu-heading"},"data",-1)),N=u(" Calon Ketua Umum "),B=u(" Calon Formatur "),M=u(" Token Pemilihan "),E=u(" Perhitungan Langsung "),F=g(()=>e("li",{class:"menu-heading"},"pengaturan",-1)),O=u(" Akun ");function j(i,m){const s=w("router-link");return p(),h("aside",null,[V,e("ul",null,[K,e("li",null,[t(s,{to:{name:"adminDataCalonKetuaUmum"}},{default:l(()=>[N]),_:1})]),e("li",null,[t(s,{to:{name:"adminDataCalonFormatur"}},{default:l(()=>[B]),_:1})]),e("li",null,[t(s,{to:{name:"adminTokenPemilihan"}},{default:l(()=>[M]),_:1})]),e("li",null,[t(s,{to:{name:"adminPerhitunganLangsung"}},{default:l(()=>[E]),_:1})]),F,e("li",null,[t(s,{to:{name:"adminPengaturanAkun"}},{default:l(()=>[O]),_:1})])])])}var q=L(T,[["render",j],["__scopeId","data-v-a4037e4e"]]);const J={key:0,class:"admin-layout"},R={class:"sidebar"},W={class:"content p-5"},G={key:1},H={class:"d-flex justify-content-center pt-5"},X={class:"col-11 col-md-4 text-center"},z=e("h1",null,"LOGIN APLIKASI EVOM",-1),Q={class:"mb-3"},Y=e("label",{for:"username",class:"form-label d-none"}," Username ",-1),Z={class:"mb-3"},ee=e("label",{for:"password",class:"form-label d-none"}," Jumlah Peserta Penuh Pimpinan Cabang ",-1),se=e("div",{class:"mb-3"},[e("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),oe={setup(i){const m=x(),s=C(),r=S(),f=_(m.state.admin),o=_({username:"pcimmbangkalan",password:null}),A=()=>{const n=_({});o.username=="pcimmbangkalan"?(n.email="pcimmbangkalan@gmail.com",n.password=o.password):n.email=null,$(r,I).then(()=>D(r,n.email,n.password).then(()=>{m.commit("tryToLogin",[!0,r.currentUser]),s.push({name:"adminDataCalonKetuaUmum"})}).catch(a=>{alert("Proses login gagal "+a.code)})).catch(a=>{alert("Proses login gagal dengan session gagal "+a.code)})};return r.onAuthStateChanged(n=>{n&&(m.commit("tryToLogin",[!0,r.currentUser]),s.push({name:"adminDataCalonKetuaUmum"}))}),f.isAdmin?s.push({name:"adminDataCalonKetuaUmum"}):s.push({name:"admin"}),(n,a)=>{const y=w("router-view");return d(f).isAdmin?(p(),h("div",J,[e("div",R,[t(q)]),e("div",W,[t(y)])])):(p(),h("div",G,[e("div",H,[e("div",X,[z,e("form",{onSubmit:a[2]||(a[2]=U(c=>A(),["prevent"]))},[e("div",Q,[Y,v(e("input",{type:"username",class:"form-control",id:"username",required:"",placeholder:"username","onUpdate:modelValue":a[0]||(a[0]=c=>d(o).username=c)},null,512),[[b,d(o).username]])]),e("div",Z,[ee,v(e("input",{type:"password",class:"form-control",id:"password",placeholder:"password",required:"","onUpdate:modelValue":a[1]||(a[1]=c=>d(o).password=c)},null,512),[[b,d(o).password]])]),se],32)])])]))}}};export{oe as default};
