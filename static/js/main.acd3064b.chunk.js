(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),o=n.n(c),s=(n(21),n(22),n(2)),i=n.n(s),l=n(15),u=n(5),d=n(3),f=n(30),p=n(29),b=n(4),j=n.n(b),m="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(m+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var v,x=function(e){return O(e)},g=function(e,t){return O(e,"POST",t)},y=function(e,t){return O(e,"PATCH",t)},N=function(e){return O(e,"DELETE")},k=function(e,t){return g("/todos?userId=".concat(e),{title:t,completed:!1,userId:e})},_=function(e){return N("/todos/".concat(e))},T=function(e,t){return y("/todos/".concat(e),t)},C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/users?email=".concat(t));case 2:return n=e.sent,e.abrupt("return",n[0]||null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.name,e.abrupt("return",g("/users",{email:n,name:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(0),L=function(e){var t=e.onLogin,n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),l=Object(d.a)(s,2),f=l[0],p=l[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),h=m[0],O=m[1],v=Object(a.useState)(!1),x=Object(d.a)(v,2),g=x[0],y=x[1],N=Object(a.useState)(""),k=Object(d.a)(N,2),_=k[0],T=k[1],L=function(e){localStorage.setItem("user",JSON.stringify(e)),t(e)};Object(a.useEffect)((function(){var e=localStorage.getItem("user");if(e)try{var n=JSON.parse(e);t(n)}catch(a){throw new Error("Try to login again.")}}),[]);var S=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(c);case 2:(t=e.sent)?L(t):O(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),T(""),y(!0),e.prev=3,!h){e.next=9;break}return e.next=7,w({name:f,email:c}).then(L);case 7:e.next=11;break;case 9:return e.next=11,S();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),T("Something went wrtong");case 16:return e.prev=16,y(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)("form",{onSubmit:A,className:"box mt-5",children:[Object(E.jsx)("h1",{className:"title is-3",children:h?"You need to register":"Log in to open todos"}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{className:"label",htmlFor:"user-email",children:"Email"}),Object(E.jsxs)("div",{className:j()("control has-icons-left",{"is-loading":g}),children:[Object(E.jsx)("input",{type:"email",id:"user-email",className:j()("input",{"is-danger":!h&&_}),placeholder:"Enter your email",disabled:g||h,value:c,required:!0,onChange:function(e){return o(e.target.value)}}),Object(E.jsx)("span",{className:"icon is-small is-left",children:Object(E.jsx)("i",{className:"fas fa-envelope"})})]}),!h&&_&&Object(E.jsx)("p",{className:"help is-danger",children:_})]}),h&&Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{className:"label",htmlFor:"user-name",children:"Your Name"}),Object(E.jsxs)("div",{className:j()("control has-icons-left",{"is-loading":g}),children:[Object(E.jsx)("input",{type:"text",id:"user-name",className:j()("input",{"is-danger":h&&_}),placeholder:"Enter your name",required:!0,minLength:4,disabled:g,value:f,onChange:function(e){return p(e.target.value)}}),Object(E.jsx)("span",{className:"icon is-small is-left",children:Object(E.jsx)("i",{className:"fas fa-user"})})]}),h&&_&&Object(E.jsx)("p",{className:"help is-danger",children:_})]}),Object(E.jsx)("div",{className:"field",children:Object(E.jsx)("button",{type:"submit",className:j()("button is-primary",{"is-loading":g}),children:h?"Register":"Login"})})]})},S=r.a.createContext(null),A=function(e){var t=e.children,n=Object(a.useState)(null),r=Object(d.a)(n,2),c=r[0],o=r[1];return c?Object(E.jsx)(S.Provider,{value:c,children:t}):Object(E.jsx)(L,{onLogin:o})},I=function(e){var t=e.todo,n=e.removeTodo,r=e.changeTodo,c=e.isLoading,o=e.setIsLoading,s=e.selectedIds,i=Object(a.useState)(!1),l=Object(d.a)(i,2),u=l[0],f=l[1],p=Object(a.useState)(t.title),b=Object(d.a)(p,2),m=b[0],h=b[1],O=function(e,t){""!==m&&m!==e&&(o(!0),r(t.id,{title:m}),f(!1)),""===m&&n(t.id),setTimeout((function(){o(!1)}),1e3)};return Object(E.jsxs)("div",{"data-cy":"Todo",className:j()("todo",{"todo completed":t.completed}),children:[Object(E.jsx)("label",{className:"todo__status-label",children:Object(E.jsx)("input",{"data-cy":"TodoStatus",type:"checkbox",className:"todo__status",onChange:function(){r(t.id,{completed:!t.completed})}})}),u?Object(E.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(t.title,t)},children:Object(E.jsx)("input",{type:"text",value:m,className:"todo__title-field",onChange:function(e){h(e.target.value)},onKeyDown:function(e){"Escape"===e.key&&(f(!1),h(t.title))},onBlur:function(){O(t.title,t)}})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{"data-cy":"TodoTitle",className:"todo__title",onDoubleClick:function(){f(!0)},children:m}),Object(E.jsx)("button",{type:"button",className:"todo__remove","data-cy":"TodoDeleteButton",onClick:function(){n(t.id)},children:"\xd7"})]}),c&&s.includes(t.id)&&Object(E.jsxs)("div",{"data-cy":"TodoLoader",className:"modal overlay is-active",children:[Object(E.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(E.jsx)("div",{className:"loader"})]})]},t.id)};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(v||(v={}));var D,F=function(e){var t=e.setFilter,n=e.filter,a=e.todos,r=e.removeTodo,c=a.filter((function(e){return e.completed})),o=a.length-c.length;return Object(E.jsxs)("footer",{className:"todoapp__footer","data-cy":"Footer",children:[Object(E.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(o," items left")}),Object(E.jsxs)("nav",{className:"filter","data-cy":"Filter",children:[Object(E.jsx)("a",{"data-cy":"FilterLinkAll",href:"#/",className:j()("filter__link",{"filter__link selected":n===v.ALL}),onClick:function(){t(v.ALL)},children:"All"}),Object(E.jsx)("a",{"data-cy":"FilterLinkActive",href:"#/active",className:j()("filter__link",{"filter__link selected":n===v.ACTIVE}),onClick:function(){t(v.ACTIVE)},children:"Active"}),Object(E.jsx)("a",{"data-cy":"FilterLinkCompleted",href:"#/completed",className:j()("filter__link",{"filter__link selected":n===v.COMPLETED}),onClick:function(){t(v.COMPLETED)},children:"Completed"})]}),Object(E.jsx)("button",{"data-cy":"ClearCompletedButton",type:"button",className:j()("todoapp__clear-completed",{"has-text-white":!c.length}),onClick:function(){a.forEach((function(e){e.completed&&r(e.id)}))},disabled:!c.length,children:"Clear completed"})]})},P=function(e){var t=e.error,n=e.setError;return Object(E.jsxs)("div",{"data-cy":"ErrorNotification",className:"notification is-danger is-light has-text-weight-normal",children:[Object(E.jsx)("button",{"data-cy":"HideErrorButton","aria-label":"HideErrorButton",type:"button",className:"delete",onClick:function(){return n("")}}),t]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(D||(D={}));var B=function(){var e=Object(a.useContext)(S),t=Object(a.useRef)(null),n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),b=Object(d.a)(s,2),m=b[0],h=b[1],O=Object(a.useState)(D.ALL),v=Object(d.a)(O,2),g=v[0],y=v[1],N=Object(a.useState)(""),C=Object(d.a)(N,2),w=C[0],L=C[1],A=Object(a.useState)(!1),B=Object(d.a)(A,2),M=B[0],U=B[1],J=Object(a.useState)([]),V=Object(d.a)(J,2),H=V[0],q=V[1],R=function(){setTimeout((function(){L("")}),3e3)},Y=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m.trim()){t.next=4;break}return L("Title can't be empty"),R(),t.abrupt("return");case 4:return t.prev=4,t.next=7,k(null===e||void 0===e?void 0:e.id,m);case 7:n=t.sent,o((function(e){return[].concat(Object(l.a)(e),[n])})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),L("Unable to add a todo"),R();case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}(),G=Object(a.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:o((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),L("Unable to delete a todo"),R();case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[]),K=Object(a.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q([t]),e.prev=1,e.next=4,T(t,n);case 4:a=e.sent,o((function(e){return e.map((function(e){return e.id===t?a:e}))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),L("Unable to update a todo"),R();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),[]),W=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=c.filter((function(e){return!e.completed})).map((function(e){return e.id})),q(t),0!==t.length){e.next=9;break}return q(c.map((function(e){return e.id}))),e.next=7,Promise.all(c.map((function(e){return K(e.id,{completed:!1})})));case 7:e.next=11;break;case 9:return e.next=11,Promise.all(c.map((function(e){return e.completed?null:K(e.id,{completed:!0})})));case 11:q([]),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),L("Unable to update a todo");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,a=e.id,x("/todos?userId=".concat(a));case 4:n=t.sent,o(n);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),L("Unable to load todos"),R();case 12:case"end":return t.stop()}var a}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){z(),t.current&&t.current.focus()}),[]);var Q=Object(a.useMemo)((function(){switch(g){case D.ACTIVE:return c.filter((function(e){return!e.completed}));case D.COMPLETED:return c.filter((function(e){return e.completed}));default:return Object(l.a)(c)}}),[c,g]);return Object(E.jsxs)("div",{className:"todoapp",children:[Object(E.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(E.jsxs)("div",{className:"todoapp__content",children:[Object(E.jsxs)("header",{className:"todoapp__header",children:[c.length>0&&Object(E.jsx)("button",{"data-cy":"ToggleAllButton","aria-label":"ToggleAllButton",type:"button",className:j()("todoapp__toggle-all",{"todoapp__toggle-all active":c.every((function(e){return e.completed}))}),onClick:W}),Object(E.jsx)("form",{onSubmit:function(e){e.preventDefault(),Y(),h("")},children:Object(E.jsx)("input",{"data-cy":"NewTodoField",type:"text",ref:t,className:"todoapp__new-todo",placeholder:"What needs to be done?",value:m,onChange:function(e){h(e.target.value)}})})]}),Object(E.jsx)("section",{className:"todoapp__main","data-cy":"TodoList",children:Object(E.jsx)(f.a,{children:Q.map((function(e){return Object(E.jsx)(p.a,{timeout:300,classNames:"item",children:Object(E.jsx)(I,{todo:e,removeTodo:G,changeTodo:K,isLoading:M,setIsLoading:U,selectedIds:H})},e.id)}))})}),c.length>0&&Object(E.jsx)(F,{setFilter:y,filter:g,todos:c,removeTodo:G})]}),w&&Object(E.jsx)(P,{error:w,setError:L})]})};o.a.render(Object(E.jsx)(A,{children:Object(E.jsx)(B,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.acd3064b.chunk.js.map