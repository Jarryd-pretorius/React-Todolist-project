(this["webpackJsonpinterview-todo"]=this["webpackJsonpinterview-todo"]||[]).push([[0],{25:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},49:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(15),a=c.n(s),o=(c(42),c(43),c(7)),i=c(5),r=c(18),l=Object(r.b)({name:"users",initialState:{userName:"Wayne",password:"",theme:"light",todos:[]},reducers:{addUser:function(e,t){e.userName=t.payload.name,e.password=t.payload.password},modifiyUser:function(e,t){e.userName=t.payload.user},changeThemeDark:function(e,t){e.theme=t.payload.themeDark},changeThemeLight:function(e,t){e.theme=t.payload.themeLight},addTodoList:function(e,t){e.todos=t.payload.todos}}}),d=l.actions,j=d.addUser,u=d.modifiyUser,b=(d.changeTheme,d.changeThemeLight),O=d.changeThemeDark,m=d.addTodoList,h=l.reducer,f=(c(49),c(4)),x=c(2);var p=function(){var e=Object(f.f)(),t=Object(i.b)(),c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),u=d[0],b=d[1];console.log(a,u);var O=Object(i.c)((function(e){return e.user.userName})),m=Object(i.c)((function(e){return e.user.theme}));return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"signin-ctn-"+m,children:[Object(x.jsx)("span",{id:"slogan-"+m,children:"keeping track of things? - "}),Object(x.jsx)("span",{id:"Useverb",children:"UseList"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{placeholder:"Name: 4+ digits like "+O+"!",className:"form-inner",value:a,type:"text",onChange:function(e){return r(e.target.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{placeholder:"Password: "+O+"Rockz!123",className:"form-inner",value:u,type:"password",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{id:"logoin-btn-"+m,onClick:function(c){a.length<4?e.push("/signin"):(c.preventDefault(),t(j({name:a,password:u})),e.push("/Dashboard"))},children:"login"})]})})};c(55),c(56);var v=function(e){var t=e.modalClose,c=Object(i.b)(),s=Object(n.useState)(""),a=Object(o.a)(s,2),r=a[0],l=a[1],d=(Object(i.c)((function(e){return e.user.userName})),Object(i.c)((function(e){return e.user.theme})));return Object(x.jsx)("div",{className:"modal-transback",children:Object(x.jsxs)("div",{className:"modalcontain-"+d,children:[Object(x.jsx)("input",{placeholder:"New name...",className:"form-inner",value:r,type:"text",onChange:function(e){return l(e.target.value)}}),Object(x.jsx)("button",{onClick:function(){t(!1)},className:"cross-"+d,children:"X"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsx)("button",{onClick:void c(u({user:r})),children:"save name"}),Object(x.jsx)("button",{onClick:function(){c("light"===d?O({themeDark:"dark"}):b({themeLight:"light"}))},children:d+" mode"})]})]})})},g=c(35);var N=function(){var e=Object(i.c)((function(e){return e.user.theme})),t=Object(f.f)(),c=Object(n.useState)(!1),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(x.jsxs)("div",{className:"navbar-"+e,children:[Object(x.jsx)("button",{className:"logout-"+e,onClick:function(){t.push("/signin")},children:"logout"}),Object(x.jsx)("button",{className:"openModalBtn-"+e,onClick:function(){r(!0),console.log(a)},children:Object(x.jsx)(g.a,{size:30})}),a&&Object(x.jsx)(v,{modalClose:r})]})},k=c(19),y=c(37),S=(c(25),c(24)),C=c(36),w=c.n(C);var T=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user.userName})),c=Object(n.useState)([]),s=Object(o.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)([]),O=Object(o.a)(b,2),h=(O[0],O[1],Object(n.useState)(!1)),f=Object(o.a)(h,2),p=f[0],v=f[1],g=Object(n.useState)([]),N=Object(o.a)(g,2),C=N[0],T=N[1],D=Object(n.useState)(""),L=Object(o.a)(D,2),U=L[0],B=L[1];function J(e){var t=Object(k.a)(a);t[e].completed=!t[e].completed,r(t)}return Object(n.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&r(t)}),[]),Object(n.useEffect)((function(){var e=JSON.stringify(a);localStorage.setItem("todos",e)}),[a]),Object(n.useEffect)((function(){var e=JSON.stringify(a);localStorage.setItem("todos",e)}),[C]),Object(x.jsxs)("div",{className:"todolist-contain",children:[Object(x.jsx)("h1",{className:"todoTitle",children:"Hello  "+t}),Object(x.jsx)("h2",{className:"todoTitle",children:"What needs doing today?"}),Object(x.jsx)("button",{className:"showTodos-"+p,onClick:function(){!function(e){var t=a.filter((function(e){return!1!==e.completed}));T(t),console.log(C)}(),v(!p)},children:"Show only completed Tasks"}),Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={text:j,completed:!1};r(Object(k.a)(a).concat(c)),u(""),e(m({todos:a}))},children:[Object(x.jsx)("button",{className:"input-btn",type:"submit",children:Object(x.jsx)(y.a,{size:20})}),Object(x.jsx)("input",{className:"input-box",placeholder:"Add task...",type:"text",onChange:function(e){return u(e.target.value)},value:j})]}),Object(x.jsx)("div",{className:"organiser",children:Object(x.jsx)("button",{onClick:function(){w.a.get("https://www.boredapi.com/api/activity").then((function(e){B(e.data.activity),console.log(U),u(U)})).catch((function(e){return console.error(e)}))},className:"random-idea",children:"random idea generator"})}),Object(x.jsx)("div",{children:p?Object(x.jsx)("div",{className:"todoText-ctn",children:C.map((function(e,t){return Object(x.jsxs)("div",{className:"todo-"+e.completed,children:[Object(x.jsx)("div",{className:"todos-text",children:e.text}),Object(x.jsx)("div",{className:"todo-actions",children:Object(x.jsx)("button",{className:"todoBtn-"+e.completed,onClick:function(){return J(t)},children:Object(x.jsx)(S.a,{})})})]},e.id)}))}):Object(x.jsxs)("div",{className:"todoText-ctn",children:[a.map((function(e,t){return Object(x.jsxs)("div",{className:"todo-"+e.completed,children:[Object(x.jsx)("div",{className:"todos-text",children:e.text}),Object(x.jsxs)("div",{className:"todo-actions",children:[Object(x.jsx)("button",{className:"todoBtn-"+e.completed,onClick:function(){return J(t)},children:Object(x.jsx)(S.a,{})}),Object(x.jsx)("button",{className:"todoClsBtn-"+e.completed,onClick:function(){return function(e){var t=Object(k.a)(a).filter((function(t){return t.id!==e}));r(t)}(e.id)},children:"X"})]})]},e.id)}))," "]})})]})},D=c(16);var L=function(){return Object(x.jsx)(D.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)(f.a,{from:"/",to:"signin"}),Object(x.jsx)(N,{}),Object(x.jsx)(f.b,{path:"/signin",basename:"/sigin",component:p}),Object(x.jsx)(f.b,{path:"/Dashboard",exact:!0,component:T})]})})})},U=Object(r.a)({reducer:{user:h}});a.a.render(Object(x.jsx)(i.a,{store:U,children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2d4fc31d.chunk.js.map