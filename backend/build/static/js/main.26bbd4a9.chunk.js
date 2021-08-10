(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),r=a.n(c),s=a(7),i=a(54),o=a(6),u=a(30),l=a(91),j=a(88),d=a(93),b=a(16),p=a(9),h=a(17),O=a.n(h),x=a(22),m="LOGIN_SUCCESS",f="LOGIN_FAILED",g="LOAD_USER_SUCCESS",v="LOAD_USER_FAILED",y="AUTHENTICATED_SUCCESS",A="AUTHENTICATED_FAILED",S="LOGOUT",w=a(48),k=a.n(w).a.create({baseURL:"http://127.0.0.1:8000"}),L=function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=13;break}return e.prev=1,e.next=4,k.get("/auth/users/me/",{headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}});case 4:a=e.sent,t({type:g,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:v});case 11:e.next=14;break;case 13:t({type:v});case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},N=a(2),C=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:S})}}})((function(e){var t=e.logout,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(u.a)(c,2);r[0],r[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(l.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)(l.a.Brand,{as:p.b,to:"/",children:"Login System"}),Object(N.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(d.a,{className:"me-auto",children:[Object(N.jsx)(d.a.Link,{as:p.b,to:"/",children:"Home"}),Object(N.jsx)(d.a.Link,{as:p.b,to:"/",children:"Link"}),a?Object(N.jsx)(d.a.Link,{onClick:function(){t()},children:"Logout"}):Object(N.jsx)(d.a.Link,{as:p.b,to:"/login",children:"Login"})]})})]})})})})),T={path:"/"},E={path:"/login"},I={path:"/signup"},F={path:"/reset-password"},U={path:"/password/reset/confrim/:uid/:token"},D={path:"/activate/:uid/:token"},_=a(23),R=Object(b.b)(null,{checkAuthentication:function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=22;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,k.post("/auth/jwt/verify/",n,a);case 6:if("token_not_valid"===e.sent.data.code){e.next=12;break}return t({type:y}),e.abrupt("return",!0);case 12:return t({type:A}),e.abrupt("return",!1);case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(3),t({type:A}),e.abrupt("return",!1);case 20:e.next=24;break;case 22:return t({type:A}),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}()},loadUser:L})((function(e){var t=e.checkAuthentication,a=e.loadUser,c=e.children;return Object(n.useEffect)((function(){t(),a()}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(C,{}),Object(N.jsx)(_.b,{transition:_.a}),c]})})),G=function(){return Object(N.jsx)("div",{children:"Activation"})},B=a(89),J=a(51),P=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return Object(N.jsx)(N.Fragment,{children:t?Object(N.jsx)(j.a,{children:Object(N.jsx)(B.a,{children:Object(N.jsx)(J.a,{xl:12,children:Object(N.jsxs)("div",{className:"mt-5 p-5 bg-light",children:[Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsx)("h1",{children:"Session Authentication App"}),Object(N.jsx)("p",{className:"text-muted",children:"The Application uses a Django rest framework session authentication to login and logout users. Here I use React as Frontend."})]}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsx)(p.b,{className:"btn btn-secondary me-3",to:"/login",children:"Login"}),Object(N.jsx)(p.b,{className:"btn btn-outline-secondary",to:"/signup",children:"Sign up"})]})})})}):Object(N.jsx)(o.a,{to:"/login"})})})),H=a(27),q=a(94),W=a(92),z=a(90),M=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(x.a)(O.a.mark((function a(n){var c,r,s,i,o,u,l,j,d,b,p,h,x,g,v,y;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,k.post("/auth/jwt/create/",r,c);case 5:if(s=a.sent,200!==s.status){a.next=15;break}return i=s.status,o=s.statusText,u={status:i,statusText:o},n({type:m,payload:s.data}),n(L()),a.abrupt("return",u);case 15:return l=s.response,j=l.status,d=l.statusText,b=l.data,p={status:j,statusText:d,data:b},n({type:f}),a.abrupt("return",p);case 19:a.next=27;break;case 21:return a.prev=21,a.t0=a.catch(2),h=a.t0.response,x=h.status,g=h.statusText,v=h.data,y={status:x,statusText:g,data:v},n({type:f}),a.abrupt("return",y);case 27:case"end":return a.stop()}}),a,null,[[2,21]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),r=Object(u.a)(c,2),i=r[0],l=r[1],d=i.email,b=i.password,h=function(e){return l(Object(s.a)(Object(s.a)({},i),{},Object(H.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(x.a)(O.a.mark((function e(a){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(d,b);case 3:200===(n=e.sent).status?("Login Success",_.c.success("Login Success",{hideProgressBar:!0,autoClose:4e3})):(c="".concat(n.status," ").concat(n.statusText,", ").concat(n.data.detail),_.c.error(c,{hideProgressBar:!0,autoClose:4e3}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(N.jsx)(o.a,{to:"/"}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"d-flex align-items-center min-vh-100 py-3",children:Object(N.jsx)(j.a,{children:Object(N.jsx)(B.a,{className:"justify-content-center",children:Object(N.jsx)(J.a,{lg:5,children:Object(N.jsx)(q.a,{children:Object(N.jsxs)(q.a.Body,{className:"p-4",children:[Object(N.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(N.jsx)("h3",{className:"text-dark mb-3",children:"Login"}),Object(N.jsx)("p",{className:"text-muted mb-4",children:"Enter your credentials to access admin panel"})]}),Object(N.jsxs)(W.a,{onSubmit:function(e){return m(e)},children:[Object(N.jsxs)(W.a.Group,{className:"mb-3",children:[Object(N.jsx)(W.a.Label,{htmlFor:"#email",children:"Email Address"}),Object(N.jsx)(W.a.Control,{type:"email",name:"email",id:"email",placeholder:"Email Address",value:d||"",onChange:function(e){return h(e)},required:!0})]}),Object(N.jsxs)(W.a.Group,{className:"mb-3",children:[Object(N.jsx)(p.b,{to:"/reset-password",className:"text-muted float-end ",children:Object(N.jsx)("small",{children:"Forgot your password?"})}),Object(N.jsx)(W.a.Label,{htmlFor:"#password",children:"Password"}),Object(N.jsx)(W.a.Control,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:b||"",onChange:function(e){return h(e)},minLength:"8",required:!0})]}),Object(N.jsx)(W.a.Group,{className:"mt-3 mb-3 text-center",children:Object(N.jsx)(z.a,{type:"submit",variant:"primary",value:"Login",children:"Login"})})]}),Object(N.jsx)("div",{className:"text-center mt-5",children:Object(N.jsxs)("p",{className:"text-muted",children:["Not registered?"," ",Object(N.jsx)(p.b,{to:"/signup",children:"Create an account"})]})})]})})})})})})})})),K=function(){return Object(N.jsx)("div",{children:"Resetpassword"})},Q=function(){return Object(N.jsx)("div",{children:"ResetPasswordConfrim"})},V=function(){return Object(N.jsx)("div",{children:"Signup"})},X=function(){var e=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return Object(N.jsx)(o.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){return Object(N.jsx)(R,{children:Object(N.jsx)(t,Object(s.a)({},e))})}}))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(e,{component:P,path:T.path,exact:!0}),Object(N.jsx)(e,{component:M,path:E.path,exact:!0}),Object(N.jsx)(e,{component:V,path:I.path,exact:!0}),Object(N.jsx)(e,{component:G,path:D.path,exact:!0}),Object(N.jsx)(e,{component:K,path:F.path,exact:!0}),Object(N.jsx)(e,{component:Q,path:U.path,exact:!0})]})})},Y=a(21),Z=a(52),$=a(53),ee={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},te=Object(Y.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return localStorage.setItem("access",n.access),Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case g:return Object(s.a)(Object(s.a)({},e),{},{user:n});case y:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!0});case A:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!1});case f:case S:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(s.a)(Object(s.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case v:return Object(s.a)(Object(s.a)({},e),{},{user:null});default:return e}}}),ae=[$.a],ne=Object(Y.createStore)(te,{},Object(Z.composeWithDevTools)(Y.applyMiddleware.apply(void 0,ae))),ce=(a(85),document.getElementById("root")),re=Object(N.jsx)(b.a,{store:ne,children:Object(N.jsx)(p.a,{children:Object(N.jsx)(X,{})})});r.a.render(re,ce)}},[[86,1,2]]]);
//# sourceMappingURL=main.26bbd4a9.chunk.js.map