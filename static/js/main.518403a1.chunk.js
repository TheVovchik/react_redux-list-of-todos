(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(4),r=c(18),o=c(7),i=Object(o.b)({name:"currentTodo",initialState:{currentTodo:null,user:null,loading:!1,error:""},reducers:{addTodo:function(e,t){e.currentTodo=t.payload},setLoading:function(e,t){e.loading=t.payload},setError:function(e,t){e.error=t.payload},removeTodo:function(e){e.currentTodo=null,e.user=null,e.error=""},addUser:function(e,t){e.user=t.payload}}}),l=i.reducer,d=i.actions,u=d.addTodo,j=d.removeTodo,b=d.addUser,h=d.setLoading,m=d.setError,O=Object(o.b)({name:"filter",initialState:{query:"",status:"all"},reducers:{changeStatus:function(e,t){e.status=t.payload},setQuery:function(e,t){e.query=t.payload},clearQuery:function(e){e.query=""}}}),f=O.reducer,x=O.actions,p=x.changeStatus,v=x.setQuery,N=x.clearQuery,y=Object(o.b)({name:"todos",initialState:{todos:[],loading:!1,error:""},reducers:{setLoading:function(e,t){e.loading=t.payload},setError:function(e,t){e.error=t.payload},setTodos:function(e,t){e.todos=t.payload}}}),g=y.reducer,T=y.actions,k=T.setTodos,w=T.setLoading,C=T.setError,S=Object(o.a)({reducer:{currentTodo:l,filter:f,todos:g}}),E=c(0),L=(s.b,s.c),q=(c(27),c(28),c(29),c(1)),_=function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})},Q=c(5),B=Object(E.memo)((function(){return Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})})})),I=c(14),A=c.n(I),D=Object(E.memo)((function(e){var t=e.todo,c=t.id,n=t.title,a=t.completed,r=Object(s.b)(),o=L((function(e){return e.currentTodo})).currentTodo,i=Object(E.useMemo)((function(){return(null===o||void 0===o?void 0:o.id)===c}),[o]),l=Object(E.useCallback)((function(){r(u(t))}),[]);return Object(q.jsxs)("tr",{"data-cy":"todo",className:A()({"has-background-info-light":i}),children:[Object(q.jsx)("td",{className:"is-vcentered",children:c}),Object(q.jsx)("td",{className:"is-vcentered",children:a&&Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:A()({"has-text-danger":!a,"has-text-success":a}),children:n})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:l,children:Object(q.jsx)("span",{className:"icon",children:i?Object(q.jsx)("i",{className:"far fa-eye-slash"}):Object(q.jsx)("i",{className:"far fa-eye"})})})})]})})),F=function(){var e=Object(E.useState)([]),t=Object(Q.a)(e,2),c=t[0],n=t[1],a=L((function(e){return e.todos})).todos,s=Object(E.useMemo)((function(){return 0===c.length}),[c]),r=L((function(e){return e.filter})),o=r.status,i=r.query;return Object(E.useEffect)((function(){var e=a.filter((function(e){switch(o){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())}));n(e)}),[a,o,i]),Object(q.jsxs)(q.Fragment,{children:[s&&Object(q.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),!s&&Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(q.jsx)(B,{}),Object(q.jsx)("tbody",{children:c.map((function(e){return Object(q.jsx)(D,{todo:e},e.id)}))})]})]})};function J(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var M=c(17),P=c.n(M),U=Object(E.memo)((function(){var e=Object(s.b)(),t=L((function(e){return e.filter})).query,c=Object(E.useState)(t),n=Object(Q.a)(c,2),a=n[0],r=n[1],o=Object(E.useCallback)((function(t){e(p(t.target.value))}),[]),i=Object(E.useCallback)((function(){r(""),e(N())}),[]),l=Object(E.useCallback)(P()((function(t){return e(v(t))}),1e3),[]);return Object(q.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsxs)("select",{"data-cy":"statusSelect",onChange:o,children:[Object(q.jsx)("option",{value:"all",children:"All"}),Object(q.jsx)("option",{value:"active",children:"Active"}),Object(q.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){var t=e.target.value;r(t),l(t)}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(q.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear search",onClick:i})})]})]})})),z=function(){var e=Object(s.b)(),t=L((function(e){return e.currentTodo})),c=t.currentTodo,n=t.loading,a=t.user,r=t.error,o=function(){e(j())};return Object(E.useEffect)((function(){var t;e(h(!0)),c&&(t=null===c||void 0===c?void 0:c.userId,J("/users/".concat(t))).then((function(t){e(b(t))})).catch((function(){return e(m("Something went wrong"))})).finally((function(){return e(h(!1))}))}),[]),Object(q.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),n&&Object(q.jsx)(_,{}),r&&Object(q.jsxs)("div",{className:"modal is-active is-clipped",children:[Object(q.jsx)("div",{className:"modal-background"}),Object(q.jsx)("div",{className:"modal-content",children:r}),Object(q.jsx)("button",{type:"button",className:"modal-close is-large","aria-label":"close",onClick:o})]}),!n&&a&&c&&!r&&Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(q.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:o,"aria-label":"close modal"})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(q.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(q.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]})]})},G=function(){var e=Object(s.b)(),t=L((function(e){return e.todos})),c=t.todos,n=t.loading,a=t.error,r=L((function(e){return e.currentTodo})).currentTodo;return Object(E.useEffect)((function(){e(w(!0)),J("/todos").then((function(t){e(k(t))})).catch((function(){return e(C("Something went wrong"))})).finally((function(){return e(w(!1))}))}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(U,{})}),Object(q.jsxs)("div",{className:"block",children:[n&&Object(q.jsx)(_,{}),a&&Object(q.jsx)("p",{children:a}),!n&&c&&!a&&Object(q.jsx)(F,{})]})]})})}),r&&Object(q.jsx)(z,{})]})},H=function(){return Object(q.jsx)(s.a,{store:S,children:Object(q.jsx)(r.a,{children:Object(q.jsx)(G,{})})})};a.a.render(Object(q.jsx)(H,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.518403a1.chunk.js.map