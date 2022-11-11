import{r as C,I as $,o as m,c,d as t,g as F,J as i,R as w,f as u,M as k,p as U,i as x,x as D,y as v,Y as S,Z as T,D as I,P as h,_ as L,u as V,e as N,O as q,$ as y,h as A,Q as _}from"./vendor.5bcef8ec.js";import{_ as K,d as R}from"./index.fc807a3c.js";const s=d=>(U("data-v-78f36a89"),d=d(),x(),d),j=s(()=>t("div",{class:"divider mb-3"},null,-1)),B={class:""},M=["onSubmit"],P=s(()=>t("h5",null,"Tambah Calon Formatur",-1)),z={class:"mb-3"},E=s(()=>t("label",{for:"namaCalonFormatur",class:"form-label d-none"}," nama lengkap ",-1)),J={class:"mb-3"},O=s(()=>t("label",{for:"komisariatCalonFormatur",class:"form-label d-none"}," asal komisariat ",-1)),Q={class:"mb-3"},Y=s(()=>t("label",{for:"ttlCalonFormatur",class:"form-label d-none"}," tempat, tanggal lahir ",-1)),Z={class:"mb-3"},G=s(()=>t("label",{for:"domisiliCalonFormatur",class:"form-label d-none"}," alamat domisili ",-1)),H={class:"mb-3"},W=s(()=>t("label",{for:"fotoCalonFormatur",class:"form-label d-none"}," foto calon formatur ",-1)),X={class:"d-flex justify-content-center"},tt=s(()=>t("div",{class:"mb-3 text-center"},[t("button",{type:"submit",class:"btn btn-primary"},"Tambah")],-1)),at=s(()=>t("div",{class:"divider mb-3"},null,-1)),ot={setup(d){const a={},n=()=>{const e=D(),o=v(e,"calon formatur/"+a.nama+".png");S(o,r[1],{contentType:"image/png"}).then(l=>{(async()=>await L(v(e,"calon formatur/"+a.nama+".png")))().then(g=>{a.fotoUrl=g,a.suara=[],T(I(R,"calon formatur"),a).then(()=>{alert(a.nama+" berhasil ditambahkan")}).catch(ht=>{alert(a.nama+" gagal ditambahkan")})})})},r=C(["https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"]),p=$(null),f=e=>{let o=e.target.files[0]||e.dataTransfer.files[0],l=new FileReader;o&&(l.onload=b=>{r[0]=b.target.result,r[1]=o}),l.readAsDataURL(o)};return(e,o)=>(m(),c(k,null,[j,t("div",B,[t("form",{onSubmit:F(n,["prevent"])},[P,t("div",z,[E,i(t("input",{type:"text",class:"form-control",id:"namaCalonFormatur",placeholder:"Nama Lengkap",required:"","onUpdate:modelValue":o[0]||(o[0]=l=>a.nama=l)},null,512),[[h,a.nama]])]),t("div",J,[O,i(t("input",{type:"text",class:"form-control",id:"komisariatCalonFormatur",placeholder:"Asal Komisariat","onUpdate:modelValue":o[1]||(o[1]=l=>a.asalKom=l),required:""},null,512),[[h,a.asalKom]])]),t("div",Q,[Y,i(t("input",{type:"text",class:"form-control",id:"ttlCalonFormatur",placeholder:"Tempat, Tanggal Lahir",required:"","onUpdate:modelValue":o[2]||(o[2]=l=>a.ttl=l)},null,512),[[h,a.ttl]])]),t("div",Z,[G,i(t("input",{type:"text",class:"form-control",id:"domisiliCalonFormatur",placeholder:"Alamat Domisili",required:"","onUpdate:modelValue":o[3]||(o[3]=l=>a.alamatDomisili=l)},null,512),[[h,a.alamatDomisili]])]),t("div",H,[W,t("input",{class:"form-control",type:"file",id:"formFile",placeholder:"Upload foto calon formatur",required:"",accept:"image/x-png,image/jpeg, img/jpg",ref_key:"fileInput",ref:p,onChange:f},null,544),t("div",X,[t("div",{class:"img-preview mt-3 shadow rounded",style:w("background-image: url('"+u(r)[0]+"')")},null,4)])]),tt],40,M)]),at],64))}};var et=K(ot,[["__scopeId","data-v-78f36a89"]]);const lt=t("h1",null,"Calon Formatur",-1),st={class:"table-box"},nt={class:"in-admin m-3"},rt=t("thead",null,[t("tr",null,[t("th",null,"No"),t("th",null,"Nama"),t("th",null,"Asal Komisariat"),t("th",null,"Tempat Tanggal Lahir"),t("th",null,"Foto"),t("th",null,"Aksi")])],-1),it={key:0},dt=["src","alt"],mt=t("button",{class:"btn btn-primary btn-sm"},"edit",-1),ct=["onClick"],ut=t("td",{colspan:"6"},"Data tidak ditemukan",-1),pt=[ut],bt={setup(d){const a=V(),n=a.state.formaturList,r=p=>{a.commit("hapusFormatur",p)};return(p,f)=>(m(),c("div",null,[lt,N(et),t("div",st,[t("table",nt,[rt,u(n)[0]?(m(),c("tbody",it,[(m(!0),c(k,null,q(u(n)[0],(e,o)=>i((m(),c("tr",{key:e},[t("td",null,_(o+1),1),t("td",null,_(e.data.nama),1),t("td",null,_(e.data.asalKom),1),t("td",null,_(e.data.ttl),1),t("td",null,[t("img",{src:e.data.fotoUrl,style:{width:"100px",height:"100px"},alt:e.data.nama},null,8,dt)]),t("td",null,[mt,t("button",{class:"btn btn-danger btn-sm",onClick:F(l=>r([e.key,e.data.nama]),["prevent"])}," hapus ",8,ct)])])),[[y,u(n)[0].length>=0]])),128)),i(t("tr",null,pt,512),[[y,u(n)[0].length<=0]])])):A("",!0)])])]))}};export{bt as default};
