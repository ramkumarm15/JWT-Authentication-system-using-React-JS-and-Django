(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(20),s=a.n(n),c=a(6),i=a(54),o=a(8),u=a(14),l=a(94),j=a(92),d=a(88),b=a(11),p=a(9),h=a(7),m=a.n(h),O=a(12),x="SIGNUP_SUCCESS",f="SIGNUP_FAILED",v="LOGIN_SUCCESS",g="LOGIN_FAILED",w="LOAD_USER_SUCCESS",y="LOAD_USER_FAILED",S="AUTHENTICATED_SUCCESS",N="AUTHENTICATED_FAILED",k="LOGOUT",C="PASSWORD_RESET_SUCCESS",_="PASSWORD_RESET_FAILED",A="PASSWORD_RESET_CONFIRM_SUCCESS",E="PASSWORD_RESET_CONFIRM_FAILED",L=a(48),T=a.n(L).a.create({baseURL:"http://127.0.0.1:8000"}),F=function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=13;break}return e.prev=1,e.next=4,T.get("/auth/users/me/",{headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}});case 4:a=e.sent,t({type:w,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:y});case 11:e.next=14;break;case 13:t({type:y});case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},I=a(1),R=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:k})}}})((function(e){var t=e.logout,a=e.isAuthenticated,n=Object(r.useState)(!1),s=Object(u.a)(n,2),c=(s[0],s[1],function(){t()}),i=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(l.a.Link,{onClick:c,children:"Logout"})})},o=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(l.a.Link,{as:p.b,to:"/login",children:"Login"}),Object(I.jsx)(l.a.Link,{as:p.b,to:"/signup",children:"Signup"})]})};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(j.a,{bg:"light",expand:"lg",children:Object(I.jsxs)(d.a,{children:[Object(I.jsx)(j.a.Brand,{as:p.b,to:"/",children:"Login System"}),Object(I.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(I.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(I.jsxs)(l.a,{className:"ms-auto",children:[Object(I.jsx)(l.a.Link,{as:p.b,to:"/",children:"Home"}),Object(I.jsx)(l.a.Link,{as:p.b,to:"/",children:"FAQ"}),a?Object(I.jsx)(i,{}):Object(I.jsx)(o,{})]})})]})})})})),P={path:"/"},D={path:"/login"},G={path:"/signup"},U={path:"/reset-password"},q={path:"/password/reset/:uid/:token"},B={path:"/activate/:uid/:token"},J=a(13),W=Object(b.b)(null,{checkAuthentication:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=22;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},r=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,T.post("/auth/jwt/verify/",r,a);case 6:if("token_not_valid"===e.sent.data.code){e.next=12;break}return t({type:S}),e.abrupt("return",!0);case 12:return t({type:N}),e.abrupt("return",!1);case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(3),t({type:N}),e.abrupt("return",!1);case 20:e.next=24;break;case 22:return t({type:N}),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}()},loadUser:F})((function(e){var t=e.checkAuthentication,a=e.loadUser,n=e.children;return Object(r.useEffect)((function(){t(),a()}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R,{}),Object(I.jsx)(J.b,{transition:J.a}),n]})})),H=function(){return Object(I.jsx)("div",{children:"Activation"})},M=a(89),z=a(51),Y=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return Object(I.jsx)(I.Fragment,{children:t?Object(I.jsx)(d.a,{children:Object(I.jsx)(M.a,{children:Object(I.jsx)(z.a,{xl:12,children:Object(I.jsxs)("div",{className:"mt-5 p-5 bg-light",children:[Object(I.jsxs)("div",{className:"text-center",children:[Object(I.jsx)("h1",{children:"Session Authentication App"}),Object(I.jsx)("p",{className:"text-muted",children:"The Application uses a Django rest framework session authentication to login and logout users. Here I use React as Frontend."})]}),Object(I.jsx)("hr",{className:"my-4"}),Object(I.jsx)(p.b,{className:"btn btn-secondary me-3",to:"/login",children:"Login"}),Object(I.jsx)(p.b,{className:"btn btn-outline-secondary",to:"/signup",children:"Sign up"})]})})})}):Object(I.jsx)(o.a,{to:"/login"})})})),Q=a(21),K=a(95),V=a(93),X=a(90),Z=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){var n,s,c,i,o,u,l,j,d,b,p,h,O,x,f,w;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,T.post("/auth/jwt/create/",s,n);case 5:if(c=a.sent,200!==c.status){a.next=15;break}return i=c.status,o=c.statusText,u={status:i,statusText:o},r({type:v,payload:c.data}),r(F()),a.abrupt("return",u);case 15:return l=c.response,j=l.status,d=l.statusText,b=l.data,p={status:j,statusText:d,data:b},r({type:g}),a.abrupt("return",p);case 19:a.next=27;break;case 21:return a.prev=21,a.t0=a.catch(2),h=a.t0.response,O=h.status,x=h.statusText,f=h.data,w={status:O,statusText:x,data:f},r({type:g}),a.abrupt("return",w);case 27:case"end":return a.stop()}}),a,null,[[2,21]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,n=Object(r.useState)({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],l=s[1],j=i.email,b=i.password,h=function(e){return l(Object(c.a)(Object(c.a)({},i),{},Object(Q.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(O.a)(m.a.mark((function e(a){var r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(j,b);case 3:200===(r=e.sent).status?("Login Success",J.c.success("Login Success",{hideProgressBar:!0,autoClose:4e3})):(n="".concat(r.status," ").concat(r.statusText,", ").concat(r.data.detail),J.c.error(n,{hideProgressBar:!0,autoClose:4e3}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(I.jsx)(o.a,{to:"/"}):Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3",children:Object(I.jsx)(d.a,{children:Object(I.jsx)(M.a,{className:"justify-content-center",children:Object(I.jsx)(z.a,{lg:5,children:Object(I.jsx)(K.a,{children:Object(I.jsxs)(K.a.Body,{className:"p-4",children:[Object(I.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(I.jsx)("h3",{className:"text-dark mb-3",children:"Login"}),Object(I.jsx)("p",{className:"text-muted mb-4",children:"Enter your credentials to access admin panel"})]}),Object(I.jsxs)(V.a,{onSubmit:function(e){return x(e)},children:[Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#email",children:"Email Address"}),Object(I.jsx)(V.a.Control,{type:"email",name:"email",id:"email",placeholder:"Email Address",value:j||"",onChange:function(e){return h(e)},required:!0})]}),Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(p.b,{to:"/reset-password",className:"text-muted float-end ",children:Object(I.jsx)("small",{children:"Forgot your password?"})}),Object(I.jsx)(V.a.Label,{htmlFor:"#password",children:"Password"}),Object(I.jsx)(V.a.Control,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:b||"",onChange:function(e){return h(e)},minLength:"8",required:!0})]}),Object(I.jsx)(V.a.Group,{className:"mt-3 mb-3 text-center",children:Object(I.jsx)(X.a,{type:"submit",variant:"primary",value:"Login",children:"Login"})})]}),Object(I.jsx)("div",{className:"text-center mt-5",children:Object(I.jsxs)("p",{className:"text-muted",children:["Not registered?"," ",Object(I.jsx)(p.b,{to:"/signup",children:"Create an account"})]})})]})})})})})})})})),$=Object(b.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var r,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:e}),t.prev=2,t.next=5,T.post("/auth/users/reset_password/",n,r);case 5:return t.sent,a({type:C}),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),a({type:_}),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(r.useState)({email:""}),n=Object(u.a)(a,2),s=n[0],i=n[1],o=s.email,l=function(){var e=Object(O.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(o);case 3:e.sent&&J.c.dark("Check your email inbox for reset link",{autoClose:4e3});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3",children:Object(I.jsx)(d.a,{children:Object(I.jsx)(M.a,{className:"justify-content-center",children:Object(I.jsx)(z.a,{lg:5,children:Object(I.jsx)(K.a,{children:Object(I.jsxs)(K.a.Body,{className:"p-4",children:[Object(I.jsx)("div",{className:"text-center w-75 m-auto",children:Object(I.jsx)("h3",{className:"text-dark mb-3",children:"Password reset link"})}),Object(I.jsxs)(V.a,{onSubmit:function(e){return l(e)},children:[Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#email",children:"Email Address"}),Object(I.jsx)(V.a.Control,{type:"email",name:"email",id:"email",placeholder:"Email Address",value:o||"",onChange:function(e){return function(e){return i(Object(c.a)(Object(c.a)({},s),{},Object(Q.a)({},e.target.name,e.target.value)))}(e)},required:!0})]}),Object(I.jsx)(V.a.Group,{className:"mt-3 mb-3 text-center",children:Object(I.jsx)(X.a,{type:"submit",variant:"primary",children:"Send Link"})})]})]})})})})})})})})),ee=Object(b.b)(null,{reset_password_confirm:function(e,t,a,r){return function(){var n=Object(O.a)(m.a.mark((function n(s){var c,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},i=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:r}),n.prev=2,n.next=5,T.post("/auth/users/reset_password_confirm/",i,c);case 5:return n.sent,s({type:A}),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(2),s({type:E}),console.log(n.t0.response),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,n=Object(r.useState)({new_password:"",re_new_password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],l=Object(r.useState)(!1),j=Object(u.a)(l,2),b=j[0],h=j[1],x=i.new_password,f=i.re_new_password,v=function(e){return o(Object(c.a)(Object(c.a)({},i),{},Object(Q.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(O.a)(m.a.mark((function e(r){var n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=t.params.uid,s=t.params.token,x!==f){e.next=10;break}return e.next=6,a(n,s,x,f);case 6:e.sent?(J.c.dark("Password has been reset successfully",{autoClose:4e3}),h(!0)):J.c.dark("Password reset link can used only one time.",{autoClose:4e3}),e.next=11;break;case 10:J.c.error("Password don't match",{autoClose:4e3});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3",children:Object(I.jsx)(d.a,{children:Object(I.jsx)(M.a,{className:"justify-content-center",children:Object(I.jsx)(z.a,{lg:5,children:Object(I.jsx)(K.a,{children:Object(I.jsxs)(K.a.Body,{className:"p-4",children:[Object(I.jsx)("div",{className:"text-center w-75 m-auto",children:Object(I.jsx)("h3",{className:"text-dark mb-3",children:"Reset your password"})}),Object(I.jsxs)(V.a,{onSubmit:function(e){return g(e)},children:[Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#password",children:"New Password"}),Object(I.jsx)(V.a.Control,{type:"password",name:"new_password",id:"new_password",placeholder:"Enter new password",value:x||"",onChange:function(e){return v(e)},required:!0})]}),Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#re_password",children:"Re-Enter New password"}),Object(I.jsx)(V.a.Control,{type:"password",name:"re_new_password",id:"re_new_password",placeholder:"Re-Enter new password",value:f||"",onChange:function(e){return v(e)},required:!0})]}),Object(I.jsx)(V.a.Group,{className:"mt-3 mb-3 text-center",children:Object(I.jsx)(X.a,{type:"submit",variant:"primary",children:"Reset Password"})})]}),b?Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"text-center mt-3",children:Object(I.jsx)("p",{className:"text-muted",children:Object(I.jsx)(p.b,{to:"/login",children:"Login"})})})}):null]})})})})})})})})),te=a(91),ae=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,r){return function(){var n=Object(O.a)(m.a.mark((function n(s){var c,i,o,u,l,j,d,b,p,h,O,v,g,w,y,S;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},i=JSON.stringify({email:e,name:t,password:a,re_password:r}),n.prev=2,n.next=5,T.post("/auth/users/",i,c);case 5:if(o=n.sent,201!==o.status){n.next=14;break}return u=o.status,l=o.statusText,j={status:u,statusText:l},s({type:x}),n.abrupt("return",j);case 14:return d=o.response,b=d.status,p=d.statusText,h=d.data,O={status:b,statusText:p,data:h},s({type:f}),n.abrupt("return",O);case 18:n.next=26;break;case 20:return n.prev=20,n.t0=n.catch(2),v=n.t0.response,g=v.status,w=v.statusText,y=v.data,S={status:g,statusText:w,data:y},s({type:f}),n.abrupt("return",S);case 26:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,n=Object(r.useState)({email:"",name:"",password:"",re_password:""}),s=Object(u.a)(n,2),i=s[0],l=s[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),p=b[0],h=b[1],x=Object(r.useState)(""),f=Object(u.a)(x,2),v=f[0],g=f[1],w=Object(r.useState)(""),y=Object(u.a)(w,2),S=y[0],N=y[1],k=i.email,C=i.name,_=i.password,A=i.re_password,E=function(e){return l(Object(c.a)(Object(c.a)({},i),{},Object(Q.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(O.a)(m.a.mark((function e(a){var r,n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),_!==A){e.next=9;break}return h(!0),e.next=5,t(k,C,_,A);case 5:if(201===(r=e.sent).status)"Activation link sent to email. You can login to your after activation",g(""),N(""),h(!1),J.c.success("Activation link sent to email. You can login to your after activation",{hideProgressBar:!0,autoClose:5e3});else for(s in h(!1),n=r.data)g("email"===s?n[s][0]:null),N("password"===s?n[s]:null);e.next=10;break;case 9:J.c.error("Password doesn't match, Try another password");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(I.jsx)(o.a,{to:"/"}):Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3",children:Object(I.jsx)(d.a,{children:Object(I.jsx)(M.a,{className:"justify-content-center",children:Object(I.jsx)(z.a,{lg:5,children:Object(I.jsx)(K.a,{children:Object(I.jsxs)(K.a.Body,{className:"p-4",children:[Object(I.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(I.jsx)("h3",{className:"text-dark mb-3",children:"Login"}),Object(I.jsx)("p",{className:"text-muted mb-4",children:"Enter your credentials to access admin panel"})]}),Object(I.jsxs)(V.a,{onSubmit:function(e){return L(e)},children:[Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#email",children:"Email Address"}),Object(I.jsx)(V.a.Control,{type:"email",name:"email",id:"email",placeholder:"Email Address",value:k||"",onChange:function(e){return E(e)},required:!0,isInvalid:!!v}),Object(I.jsx)(V.a.Control.Feedback,{type:"invalid",children:v||""})]}),Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#name",children:"Username"}),Object(I.jsx)(V.a.Control,{type:"text",name:"name",id:"name",placeholder:"Username",value:C||"",onChange:function(e){return E(e)},required:!0})]}),Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#password",children:"Password"}),Object(I.jsx)(V.a.Control,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:_||"",onChange:function(e){return E(e)},minLength:"8",isInvalid:!!S,required:!0}),Object(I.jsx)(V.a.Control.Feedback,{type:"invalid",children:S||""})]}),Object(I.jsxs)(V.a.Group,{className:"mb-3",children:[Object(I.jsx)(V.a.Label,{htmlFor:"#re_password",children:"Re-enter Password"}),Object(I.jsx)(V.a.Control,{type:"password",name:"re_password",id:"re_password",placeholder:"Re-Enter Password",value:A||"",onChange:function(e){return E(e)},minLength:"8",required:!0})]}),Object(I.jsx)(V.a.Group,{className:"mt-3 mb-3 text-center",children:p?Object(I.jsxs)(X.a,{variant:"primary",disabled:!0,children:[Object(I.jsx)(te.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),"  ","Send Request..."]}):Object(I.jsx)(X.a,{type:"submit",variant:"primary",value:"Login",children:"Register"})})]})]})})})})})})})})),re=function(){var e=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return Object(I.jsx)(o.b,Object(c.a)(Object(c.a)({},a),{},{render:function(e){return Object(I.jsx)(W,{children:Object(I.jsx)(t,Object(c.a)({},e))})}}))};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(o.d,{children:[Object(I.jsx)(e,{component:Y,path:P.path,exact:!0}),Object(I.jsx)(e,{component:Z,path:D.path,exact:!0}),Object(I.jsx)(e,{component:ae,path:G.path,exact:!0}),Object(I.jsx)(e,{component:H,path:B.path,exact:!0}),Object(I.jsx)(e,{component:$,path:U.path,exact:!0}),Object(I.jsx)(e,{component:ee,path:q.path,exact:!0})]})})},ne=a(25),se=a(52),ce=a(53),ie={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},oe=Object(ne.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case v:return localStorage.setItem("access",r.access),Object(c.a)(Object(c.a)({},e),{},{isAuthenticated:!0,access:r.access,refresh:r.refresh});case w:return Object(c.a)(Object(c.a)({},e),{},{user:r});case x:return Object(c.a)(Object(c.a)({},e),{},{isAuthenticated:!1});case S:return Object(c.a)(Object(c.a)({},e),{},{isAuthenticated:!0});case N:return Object(c.a)(Object(c.a)({},e),{},{isAuthenticated:!1});case f:case g:case k:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(c.a)(Object(c.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case y:return Object(c.a)(Object(c.a)({},e),{},{user:null});case C:case _:case A:case E:return Object(c.a)({},e);default:return e}}}),ue=[ce.a],le=Object(ne.createStore)(oe,{},Object(se.composeWithDevTools)(ne.applyMiddleware.apply(void 0,ue))),je=(a(85),document.getElementById("root")),de=Object(I.jsx)(b.a,{store:le,children:Object(I.jsx)(p.a,{children:Object(I.jsx)(re,{})})});s.a.render(de,je)}},[[86,1,2]]]);
//# sourceMappingURL=main.48631ea4.chunk.js.map