"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[701],{458:function(n,e,t){function i(n){return fetch(n,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk"}}).then((function(n){return n.json()}))}t.d(e,{v:function(){return i}})},701:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i,o,r=t(439),a=t(791),c=t(168),u=t(867),l=u.ZP.div(i||(i=(0,c.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 12 24px;\n  z-index: 10;\n  margin: 0 auto;\n  background-color: #0a0909;\n"]))),s=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: black;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid pink;\n  border-radius: 10px;\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-color: black;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n  button:hover {\n    opacity: 1;\n  }\n  span {\n    font-size: 30px;\n  }\n  button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n  input {\n    background-color: black;\n    margin-right: auto;\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 20px;\n    padding-right: 4px;\n    color: white;\n  }\n  input::placeholder {\n    color: white;\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),d=t(184);function p(n){var e=n.onSubmit,t=(0,a.useState)(""),i=(0,r.Z)(t,2),o=i[0],c=i[1];return(0,d.jsx)(l,{children:(0,d.jsxs)(s,{onSubmit:function(n){n.preventDefault(),""!==o.trim()&&(e(o),c(""))},className:"form",children:[(0,d.jsx)("button",{type:"submit",className:"button",children:(0,d.jsx)("span",{className:"button-label",children:"\ud83d\udd0d"})}),(0,d.jsx)("input",{onChange:function(n){c(n.currentTarget.value.toLowerCase())},value:o,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies"})]})})}var h,f,b=t(87),x=u.ZP.li(h||(h=(0,c.Z)(["\n  color: #e6e6e6;\n  padding: 0;\n  margin: 0;\n"]))),g=(0,u.ZP)(b.OL)(f||(f=(0,c.Z)(["\n  color: #e6e6e6;\n  margin: 0;\n"]))),m=t(458);var v=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1],o=(0,a.useState)(""),c=(0,r.Z)(o,2),u=c[0],l=c[1];return(0,a.useEffect)((function(){var n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1");(0,m.v)(n).then((function(n){l(n)})).catch((function(n){return console.error("error:"+n)}))}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{onSubmit:function(n){i(n)}}),u&&(0,d.jsx)("ul",{children:u.results.map((function(n){return(0,d.jsx)(x,{children:(0,d.jsx)(g,{to:"".concat(n.id),children:(0,d.jsx)("p",{children:n.original_title})})},n.id)}))})]})}}}]);
//# sourceMappingURL=701.eb231d89.chunk.js.map