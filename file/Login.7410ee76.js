import{f as p,g,r as l,c as _,j as e,m as h,O as i,S as d,l as n,V as f,W as b,X as w,o as v,Y as y}from"./vendor.441eeb9a.js";import{a as c}from"./main.851a0eec.js";const P={class:"login-layout"},x={class:"d-flex justify-content-center py-5"},L={class:"col-11 col-md-4 text-center"},V=e("h1",null,"LOGIN EVOM",-1),k={class:"mb-3"},A=e("label",{for:"username",class:"form-label d-none"}," Username ",-1),S={class:"mb-3"},U=e("label",{for:"password",class:"form-label d-none"}," Jumlah Peserta Penuh Pimpinan Cabang ",-1),B=e("div",{class:"mb-3"},[e("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),T=p({setup(E){const m=f(),r=g();c().getAdminData();const a=l({username:"",password:""}),u=()=>{const o=l({email:"",password:""});a.username=="admin"?(o.email="pcimmbangkalan@gmail.com",o.password=a.password):o.email="",b(r,y).then(async()=>{try{await w(r,o.email,o.password).then(s=>{c().tryToLogin(!0,s.user),m.push({name:"admin"})}).catch(s=>{console.log(s)})}catch(s){alert("Proses login gagal "+s.code)}}).catch(s=>{alert("Proses login gagal dengan session gagal "+s.code)})};return(o,s)=>(v(),_("div",P,[e("div",x,[e("div",L,[V,e("form",{onSubmit:s[2]||(s[2]=h(t=>u(),["prevent"]))},[e("div",k,[A,i(e("input",{type:"username",class:"form-control",id:"username",required:"",placeholder:"username","onUpdate:modelValue":s[0]||(s[0]=t=>n(a).username=t)},null,512),[[d,n(a).username]])]),e("div",S,[U,i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"password",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>n(a).password=t)},null,512),[[d,n(a).password]])]),B],32)])])]))}});export{T as default};
