(this["webpackJsonpcountry-map"]=this["webpackJsonpcountry-map"]||[]).push([[0],{59:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),s=n.n(r),i=(n(59),n(19)),o=n.n(i),j=n(21),u=n(10),d=n(34),l=n(5),b=n(49),h=n.n(b),O=(n(61),n(40)),p=n.n(O),x=n(2);var f=function(e){var t=e.dmode,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useContext)(B);return Object(c.useEffect)((function(){t?document.querySelector("input[type=text]").style.setProperty("--c","white"):document.querySelector("input[type=text]").style.setProperty("--c","black")}),[t]),Object(x.jsxs)("div",{className:"search ".concat(t&&"darkmode"),children:[Object(x.jsx)(p.a,{}),Object(x.jsx)("input",{type:"text",className:t&&"input-dark",value:r,placeholder:"Search for a country...",onChange:function(e){s(e.target.value),i.dispatch1D({type:"searchChange",value:e.target.value})}})]})};n(67);var m=function(e){var t=e.changeRegion,n=e.dmode;return Object(x.jsx)("div",{children:Object(x.jsxs)("select",{className:"".concat(n&&"dark-elem"),onChange:function(e){t(e.target.value)},children:[Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"filter",children:"Filter by region"}),Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"Africa",children:"Africa"}),Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"Americas",children:"Americas"}),Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"Asia",children:"Asia"}),Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"Europe",children:"Europe"}),Object(x.jsx)("option",{onChange:function(e){t(e.target.value)},value:"Oceania",children:"Oceania"})]})})},v=n(17),g=n(98),k=n(104),y=n(99),N=n(101),C=n(100),S=n(102),w=(n(68),Object(g.a)({root:{width:240,height:290,margin:30},media:{height:140},dark:{backgroundColor:"hsl(209, 23%, 22%)",color:"white"}}));function E(e){var t=e.Ob,n=e.dmode,c=w();return Object(x.jsx)("div",{children:Object(x.jsx)(v.b,{to:"/".concat(t.name),children:Object(x.jsx)(k.a,{className:"".concat(c.root," ").concat(n&&c.dark),children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(C.a,{className:c.media,image:t.flag,title:t.name}),Object(x.jsxs)(N.a,{id:"cards",className:n&&c.dark,children:[Object(x.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(x.jsxs)(S.a,{variant:"body2",component:"p",children:["Population: ",Object(x.jsx)("span",{children:t.population})]}),Object(x.jsxs)(S.a,{variant:"body2",component:"p",children:["Region: ",Object(x.jsx)("span",{children:t.region})]}),Object(x.jsxs)(S.a,{variant:"body2",component:"p",children:["Capital: ",Object(x.jsx)("span",{children:t.capital})]})]})]})})})})}n(71);function D(e){var t=e.region,n=e.data,a=e.dmode,r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)([]),d=Object(u.a)(j,2),l=d[0],b=d[1],h=Object(c.useContext)(B).redirecD.search.toUpperCase();Object(c.useEffect)((function(){!function(e){var t=i.filter((function(e){return e.name.toUpperCase().includes(h)}));b(t)}()}),[h]);return Object(c.useEffect)((function(){!function(){var e=i.filter((function(e){return e.region===t}));b(e)}()}),[t]),Object(c.useEffect)((function(){o(n)}),[]),Object(x.jsx)("div",{className:"countryDisplay",children:l.length>0?l.map((function(e){return Object(x.jsx)(E,{Ob:e,dmode:a},e.name)})):i.map((function(e){return Object(x.jsx)(E,{Ob:e,dmode:a},e.name)}))})}var A=a.a.memo(D);n(72),n(73);var L=function(e){var t=e.j,n=e.dmode,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],i=r[1],d="https://restcountries.com/v3.1/alpha/".concat(t),l=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d).then((function(e){return e.json()})).then((function(e){i(e[0].name.common)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[t]),Object(x.jsx)("div",{className:"labels ".concat(n&&"neighbour-dark"),children:Object(x.jsx)(v.b,{className:n&&"a-dark",to:"/".concat(s),children:Object(x.jsx)("h5",{children:s})})})},P=(n(74),n(103));var R=function(e){var t=e.dmode,n=Object(c.useState)([]),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(l.e)().name,d="https://restcountries.com/v3.1/name/".concat(i,"?fullText=true");return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d).then((function(e){return e.json()})).then((function(e){s(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(x.jsxs)("div",{className:"details",children:[Object(x.jsx)("div",{className:"btn",children:Object(x.jsx)(v.b,{to:"/",children:Object(x.jsx)(P.a,{className:t&&"btn-dark",variant:"outlined",children:"\u2190 Back"})})}),r.length>0?r.map((function(e){return Object(x.jsxs)("div",{className:"detail",children:[Object(x.jsx)("div",{className:"flag",children:Object(x.jsx)("img",{src:e.flags.svg})}),Object(x.jsxs)("div",{className:"text",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h2",{children:e.name.common})}),Object(x.jsxs)("div",{className:"page-text",children:[Object(x.jsxs)("p",{children:["Population: ",Object(x.jsx)("span",{children:e.population})]}),Object(x.jsxs)("p",{children:["Region: ",Object(x.jsx)("span",{children:e.region})]}),Object(x.jsxs)("p",{children:["Sub Region: ",Object(x.jsx)("span",{children:e.subregion})]}),Object(x.jsxs)("p",{children:["Capital: ",Object(x.jsx)("span",{children:e.capital})]}),Object(x.jsx)("span",{className:"break"}),Object(x.jsxs)("p",{children:["Top Level Domain: ",Object(x.jsx)("span",{children:e.tld[0]})]}),Object(x.jsxs)("p",{children:["Currencies: ",Object(x.jsx)("span",{children:e.currencies[Object.keys(e.currencies)[0]].name})]}),Object(x.jsxs)("p",{className:"coma",children:["Languages:"," ",Object.keys(e.languages).map((function(t){return Object(x.jsx)("span",{children:e.languages[t]})}))]})]}),Object(x.jsxs)("div",{className:"label",children:[Object(x.jsx)("h4",{children:"Border Countries: "}),e.borders?e.borders.map((function(e){return Object(x.jsx)(L,{j:e,dmode:t})})):Object(x.jsx)("h5",{children:" \xa0 None"})]})]})]})})):Object(x.jsx)("div",{className:"load",children:Object(x.jsx)("h1",{children:"Loading..."})})]})},B=a.a.createContext(),F={search:""},T=function(e,t){switch(t.type){case"searchChange":return Object(d.a)(Object(d.a)({},F),{},{search:t.value});default:return e}};var q=function(){var e=Object(c.useReducer)(T,F),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],d=s[1],b=Object(c.useState)(""),O=Object(u.a)(b,2),p=O[0],v=O[1],g=Object(c.useState)(!1),k=Object(u.a)(g,2),y=k[0],N=k[1],C=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){d(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){C()}),[]),Object(x.jsxs)("div",{className:"App ".concat(y&&"dark-background"),children:[Object(x.jsxs)("div",{className:"head ".concat(y&&"dark-head"),children:[Object(x.jsx)("h2",{children:"Where in the World?"}),Object(x.jsxs)("p",{onClick:function(){return document.body.classList.toggle("dark-background"),void N(!y)},className:"mode",children:[Object(x.jsx)(h.a,{}),"Dark Mode"]})]}),Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsxs)(B.Provider,{value:{redirecD:n,dispatch1D:a},children:[Object(x.jsxs)("div",{className:"search-bar",children:[Object(x.jsx)(f,{dmode:y}),Object(x.jsx)(m,{changeRegion:function(e){v(e)},dmode:y})]}),Object(x.jsx)("div",{className:"data",children:i.length>0?Object(x.jsx)(A,{region:p,data:i,dmode:y}):Object(x.jsx)("div",{className:"load",children:Object(x.jsx)("h1",{children:"Loading..."})})})]})}),Object(x.jsx)(l.a,{exact:!0,path:"/:name",children:Object(x.jsx)(R,{dmode:y})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(v.a,{children:Object(x.jsx)(q,{})})}),document.getElementById("root")),I()}},[[76,1,2]]]);
//# sourceMappingURL=main.dcc5720b.chunk.js.map