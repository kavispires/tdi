(this.webpackJsonptdi=this.webpackJsonptdi||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(25),i=c.n(r),o=(c(98),c(60)),s=c(10),d=c.p+"static/media/logo.95dca254.svg",l=c(16);function u(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("img",{src:d,className:"App-logo",alt:"logo"})})})}var j=c(12),b=c(110),h=c(109),f=c(108),m=c(105);var O=function(e){return e<120?1:e<400?2:e<800?4:e<1e3?6:e<1440?8:10},g=m.a.Header,p=m.a.Content,v=Array(10).fill(1).map((function(e,t){return{label:"TD Deck ".concat(e+t),key:"d".concat(e+t),icon:Object(l.jsx)(b.a,{})}}));function x(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.b)(),c=Object(j.a)(t,2),a=c[0],r=c[1],i=function(e,t){void 0===t?a.delete(e):a.set(e,String(t)),r(a)},s=function(e,t){a.delete(e),r(a)};Object(n.useEffect)((function(){Object.entries(e).forEach((function(e){var t=Object(j.a)(e,2),c=t[0],n=t[1];a.has(c)||i(c,n)}))}),[]);var d=a.toString().split("&").reduce((function(e,t){var c=t.split("="),n=Object(j.a)(c,2),a=n[0],r=n[1];return a&&void 0!==r&&(e[a]=r),e}),{});return{add:i,remove:s,queryParams:d}}({deck:"d1"}),t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],i=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,a=document.getElementById("page"),r=null!==(e=null===a||void 0===a?void 0:a.offsetWidth)&&void 0!==e?e:320,i=O(r);return Object(n.useMemo)((function(){var e=Math.min(Math.max(Math.floor(r/i),t),c);return Number.isNaN(e)?t:e}),[r,i,t,c])}();return Object(n.useEffect)((function(){r(e.queryParams.deck)}),[e.queryParams]),Object(l.jsxs)(m.a,{className:"page",id:"page",children:[Object(l.jsx)(g,{className:"page__header",style:{paddingInline:0},children:Object(l.jsx)(h.a,{onClick:function(t){e.add("deck",t.key)},selectedKeys:[a],mode:"horizontal",items:v,theme:"dark"})}),Object(l.jsx)(p,{className:"page__content",children:Boolean(a)&&Object(l.jsx)(f.a.PreviewGroup,{children:Array(84).fill(1).map((function(e,t){var c=e+t<10?"0".concat(e+t):"".concat(e+t);return Object(l.jsx)(f.a,{width:i,src:"".concat("/tdi","/images/td/").concat(a,"/").concat(c,".jpg"),placeholder:!0},"img-".concat(c))}))})})]})}var y=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(s.a,{path:"/image-cards",element:Object(l.jsx)(x,{})})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),k()},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.5d31ea8a.chunk.js.map