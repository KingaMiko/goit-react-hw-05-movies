"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var i=t(439),r=t(791),c=t(689),h=t(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,r.useState)(null),t=(0,i.Z)(n,2),o=t[0],s=t[1];return(0,r.useEffect)((function(){var n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1");fetch(n,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk"}}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.error("error:"+e)}))}),[e]),null===o?(0,h.jsx)("p",{children:"Loading..."}):o.results&&o.results.length>0?(0,h.jsx)("ul",{children:o.results.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e.author}),(0,h.jsx)("p",{children:e.content})]},e.id)}))}):(0,h.jsx)("p",{children:"No reviews found."})}}}]);
//# sourceMappingURL=186.1841f645.chunk.js.map