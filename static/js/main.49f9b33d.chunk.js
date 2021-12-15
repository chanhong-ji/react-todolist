(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var o,r=n(0),c=n.n(r),a=n(20),i=n.n(a),l=n(43),b=n(31),s={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff",cardBgColor:"rgba(0, 0, 0, 0.5)"},d=n(6),u=n(8),O=n(3),j=n(10),f=localStorage.getItem("category"),h=f?JSON.parse(f):[],g=localStorage.getItem("todos"),m=g?JSON.parse(g):[];Object(j.b)({key:"isDark",default:!0});!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var p,x=Object(j.b)({key:"todoState",default:m}),y=Object(j.b)({key:"categoryState",default:o.TO_DO}),v=Object(j.c)({key:"todoSelector",get:function(e){var t=e.get,n=t(x),o=t(y);return n.filter((function(e){return e.category===o}))}}),D=Object(j.b)({key:"customCategory",default:h}),k=n(28),N=n(4),C=function(){var e=Object(k.a)(),t=e.register,n=e.handleSubmit,o=e.setValue,r=Object(j.d)(x),c=Object(O.a)(r,2),a=c[0],i=c[1],l=Object(j.e)(y);return Object(N.jsxs)("form",{onSubmit:n((function(e){var t=e.todo;i((function(e){return[].concat(Object(u.a)(e),[{text:t,id:Date.now(),category:l}])})),o("todo",""),localStorage.setItem("todos",JSON.stringify(a))})),children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({},t("todo",{required:"Please write a Todo."})),{},{placeholder:"Todo"})),Object(N.jsx)("button",{children:"New Todo"})]})},S=function(e){var t=e.text,n=e.category,r=e.id,c=Object(j.f)(x);function a(e){var n=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:t,id:r,category:n};return[].concat(Object(u.a)(e.slice(0,o)),[c],Object(u.a)(e.slice(o+1)))}))}var i=Object(j.e)(D);return Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{children:t}),n!==o.DOING&&Object(N.jsx)("button",{name:o.DOING,onClick:a,children:"DOING"}),n!==o.DONE&&Object(N.jsx)("button",{name:o.DONE,onClick:a,children:"DONE"}),n!==o.TO_DO&&Object(N.jsx)("button",{name:o.TO_DO,onClick:a,children:"TO_DO"}),i.map((function(e){return n!==e&&Object(N.jsx)("button",{name:e,onClick:a,children:e},e)}))]})},w=function(){var e=Object(j.e)(v),t=Object(j.d)(y),n=Object(O.a)(t,2),r=n[0],c=n[1],a=Object(j.d)(D),i=Object(O.a)(a,2),l=i[0],b=i[1];var s=Object(k.a)(),f=s.register,h=s.handleSubmit,g=s.setValue;return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"To Do"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("form",{onSubmit:h((function(e){var t=e.newCategory;b((function(e){return[].concat(Object(u.a)(e),[t])})),g("newCategory",""),localStorage.setItem("category",JSON.stringify(l))})),children:[Object(N.jsx)("input",Object(d.a)({},f("newCategory",{required:"Required"}))),Object(N.jsx)("button",{children:"Create New Category"})]}),Object(N.jsxs)("select",{value:r,onInput:function(e){var t=e.currentTarget.value;c(t)},children:[Object(N.jsx)("option",{value:o.TO_DO,children:"TO_DO"}),Object(N.jsx)("option",{value:o.DOING,children:"DOING"}),Object(N.jsx)("option",{value:o.DONE,children:"DONE"}),l.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)}))]}),Object(N.jsx)(C,{}),Object(N.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(N.jsx)(S,Object(d.a)({},e),e.id)}))})]})},T=Object(b.b)(p||(p=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;800&family=Rubik:wght@500&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n* {\n  box-sizing: border-box;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var I=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(b.a,{theme:s,children:[Object(N.jsx)(T,{}),Object(N.jsx)(w,{})]})})},q=n(34),E=new q.QueryClient;i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(j.a,{children:Object(N.jsx)(q.QueryClientProvider,{client:E,children:Object(N.jsx)(I,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.49f9b33d.chunk.js.map