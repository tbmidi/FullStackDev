"use strict";(self["webpackChunkfrontend_shop"]=self["webpackChunkfrontend_shop"]||[]).push([[685],{7729:function(a,e,s){s.r(e),s.d(e,{default:function(){return K}});var l=s(3396),r=s(9242),o=s(7139);const t={class:"container-fluid mb-5 mt-4"},n={class:"row justify-content-center"},i={class:"col-md-6"},d={class:"card border-0 shadow rounded"},c={class:"card-body"},m=(0,l._)("h4",null,"Register",-1),u=(0,l._)("hr",null,null,-1),p={class:"row"},w={class:"col-md-6"},_={class:"form-group"},v=(0,l._)("label",null,"Full Name",-1),f={key:0,class:"mt-2 alert alert-danger"},g={class:"col-md-6 mt-3 mt-md-0"},h={class:"form-group"},b=(0,l._)("label",null,"Email address",-1),y={key:0,class:"mt-2 alert alert-danger"},k={class:"row mt-3 mb-3"},C={class:"col-md-6"},U={class:"form-group"},x=(0,l._)("label",null,"Password",-1),q={key:0,class:"mt-2 alert alert-danger"},D={class:"col-md-6 mt-3 mt-md-0"},P={class:"form-group"},R=(0,l._)("label",null,"Confirm Password",-1),V=(0,l._)("button",{type:"submit",class:"btn btn-primary w-100"},"Register",-1),z={class:"register mt-3 text-center"},E=(0,l.Uk)(" Already have an account? "),L=(0,l.Uk)("Log In !");function S(a,e,s,S,j,A){const F=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",t,[(0,l._)("div",n,[(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",c,[m,u,(0,l._)("form",{onSubmit:e[4]||(e[4]=(0,r.iM)(((...a)=>S.register&&S.register(...a)),["prevent"]))},[(0,l._)("div",p,[(0,l._)("div",w,[(0,l._)("div",_,[v,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>S.user.name=a),class:"form-control",placeholder:"Full Name"},null,512),[[r.nr,S.user.name]])]),S.validation.name?((0,l.wg)(),(0,l.iD)("div",f,(0,o.zw)(S.validation.name[0]),1)):(0,l.kq)("",!0)]),(0,l._)("div",g,[(0,l._)("div",h,[b,(0,l.wy)((0,l._)("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=a=>S.user.email=a),class:"form-control",placeholder:"Email Address"},null,512),[[r.nr,S.user.email]])]),S.validation.email?((0,l.wg)(),(0,l.iD)("div",y,(0,o.zw)(S.validation.email[0]),1)):(0,l.kq)("",!0)])]),(0,l._)("div",k,[(0,l._)("div",C,[(0,l._)("div",U,[x,(0,l.wy)((0,l._)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=a=>S.user.password=a),class:"form-control",placeholder:"Password"},null,512),[[r.nr,S.user.password]])]),S.validation.password?((0,l.wg)(),(0,l.iD)("div",q,(0,o.zw)(S.validation.password[0]),1)):(0,l.kq)("",!0)]),(0,l._)("div",D,[(0,l._)("div",P,[R,(0,l.wy)((0,l._)("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=a=>S.user.password_confirmation=a),class:"form-control",placeholder:"Confirm Password"},null,512),[[r.nr,S.user.password_confirmation]])])])]),V],32)])]),(0,l._)("div",z,[(0,l._)("p",null,[E,(0,l.Wm)(F,{to:{name:"login"},class:"text-decoration-none"},{default:(0,l.w5)((()=>[L])),_:1})])])])])])}var j=s(4870),A=s(65),F=s(678),N=s(2492),O=s.n(N),B={setup(){const a=(0,j.qj)({name:"",email:"",password:"",password_confirmation:""}),e=(0,j.iH)([]),s=(0,A.oR)(),l=(0,F.tv)(),r=()=>{let r=a.name,o=a.email,t=a.password,n=a.password_confirmation;O().fire({title:"Loading...",text:"Silahkan tunggu beberapa saat!",icon:"info",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{O().showLoading()}}),s.dispatch("auth/register",{name:r,email:o,password:t,password_confirmation:n}).then((()=>{O().close(),l.push({name:"dashboard"}),O().fire({title:"Success",text:"Register berhasil.",icon:"success",showConfirmButton:!1,timer:1500})})).catch((a=>{O().close(),e.value=a}))};return{user:a,validation:e,register:r}}},H=s(89);const I=(0,H.Z)(B,[["render",S]]);var K=I}}]);
//# sourceMappingURL=register.d1e60d52.js.map