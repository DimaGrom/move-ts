(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{16:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"authRegister",(function(){return S})),n.d(r,"authLogin",(function(){return E})),n.d(r,"authMe",(function(){return R})),n.d(r,"authStatuse",(function(){return N})),n.d(r,"authLogout",(function(){return C}));var c,a=n(0),s=n.n(a),u=n(24),i=n.n(u),o=(n(16),n(34),n(11)),l=n(19),j=l.c,d=n(13),b=n(7),A=n(6),h=n(4),O=n.n(h);!function(e){e.AUTH_ERROR="AUTH_ERROR",e.AUTH_STATUS="AUTH_STATUS",e.AUTH_REGISTER="AUTH_REGISTER",e.AUTH_REGISTER_SUCCESS="AUTH_CREATE_SUCCESS",e.AUTH_LOGIN="AUTH_LOGIN",e.AUTH_LOGIN_SUCCESS="AUTH_LOGIN_SUCCESS",e.AUTH_LOGIN_ERROR="AUTH_LOGIN_ERROR",e.AUTH_ME="AUTH_ME",e.AUTH_LOGOUT="AUTH_LOGOUT"}(c||(c={}));var p=n(10),x=n.n(p),f=function(){var e=Object(A.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.setItem("auth",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(A.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getItem("auth");case 2:if(t=e.sent,console.log("authUser request ",t),null!==t){e.next=6;break}return e.abrupt("return",!1);case 6:if(null===t){e.next=8;break}return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(A.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.removeItem("auth");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(9),y=function(){var e=Object(A.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getItem("users");case 2:if(!(n=e.sent)){e.next=8;break}return e.next=6,null===n||void 0===n?void 0:n.find((function(e){return e.name===t}));case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(A.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getItem("users");case 2:if(null===(n=e.sent)){e.next=6;break}return e.next=6,x.a.setItem("users",[].concat(Object(g.a)(n),[t]));case 6:if(null!==n){e.next=9;break}return e.next=9,x.a.setItem("users",[t]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=n(40),S=function(e){return function(){var t=Object(A.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:if(void 0===t.sent){t.next=8;break}n({type:c.AUTH_STATUS,paylod:404}),t.next=17;break;case 8:return n({type:c.AUTH_REGISTER}),(r={}).id=T(),r.name=e,t.next=14,U(r);case 14:return setTimeout((function(){n({type:c.AUTH_REGISTER_SUCCESS,paylod:r.name})}),500),t.next=17,f(r.name);case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),n({type:c.AUTH_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"});case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(A.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:if(void 0!==(r=t.sent)){t.next=8;break}n({type:c.AUTH_STATUS,paylod:404}),t.next=12;break;case 8:return n({type:c.AUTH_LOGIN}),setTimeout((function(){n({type:c.AUTH_LOGIN_SUCCESS,paylod:{name:r.name,id:r.id}})}),700),t.next=12,f(e);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),n({type:c.AUTH_LOGIN_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0432\u043e\u0434\u0430 \u0438\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044f."});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},R=function(){return function(){var e=Object(A.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:n=e.sent;try{t(n?{type:c.AUTH_ME,paylod:n}:{type:c.AUTH_ERROR,paylod:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})}catch(r){t({type:c.AUTH_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0440\u0433\u0440\u0443\u0437\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(A.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:c.AUTH_STATUS,paylod:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(A.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t({type:c.AUTH_LOGOUT});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=Object(b.a)({},r),k=function(){var e=Object(l.b)();return Object(d.b)(H,e)},I=n(2),w=function(){var e=j((function(e){return e.auth})).token,t=k().authLogout;return Object(I.jsx)("div",{className:"Navbar text-ms",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:"flex space-between  align-center py-10",children:[Object(I.jsx)("div",{children:"Avatar"}),Object(I.jsxs)("div",{className:"flex align-center",children:[Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{className:"mx-5 text-ms cursor hover",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(I.jsx)("div",{className:"mx-5 cursor hover",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(I.jsx)("div",{className:"mx-5 cursor hover",children:"\u041c\u043e\u0438"})]}),Object(I.jsx)("div",{children:e?Object(I.jsx)("button",{className:"text-ms",children:Object(I.jsx)("img",{onClick:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK/SURBVEiJ1VZdSJNRGH7O933bN3W/Jk7ZShpN05XSjyw1s8S6MYjoIjAMyrAbb7T8iW6CaEIUFQbG+hF/+rEwKJTUVXZRiWAXU7NEsoVTmVlTtynNvn1dqENrcyruoufm8D48533eF8457yHwDwJAI6TpnVEKcZaQoVIYQqY+j/zcDcC9xL5FYOZWGkCsSEAnR8ok+ymCxFBWKItTRbD6WHV4YkyUME6pQPkT0+9pOrSVFYkc9cbKO6eKio8yNFHbRscuWQYHW3xWGRMpr5GGiDJ06yNZvVa1bmtMFKNRhoOmyCIh7+FQ/tjE5ZYYaN3mOMhlUjhdLrjsE8jOPTH0wdyl9tmBIjQk89m5Y6rltiyViCGXSQEA4rAwiAUCCAUC2p+eItRyU68OQU7/nxkQANKgGUhksjylSm2JiI4+vZBnNkTIJwEs+xQBQNfHXjS9bJsNOA7WkRExoejjF4x1iub6WsP7Vy3x34eshQB4puxwei+AeH/JOvqtaOseQPGhVC9XariC7PxCb1yyY59YwLLpifo0bEvdE/7g5tWT9bdubLINWY8wBbcb9U9Lc/xWq9eq0djZh682u5fzeHgk783yuyen4IxEqdEeuHf5YiflAU/8KleJcY6HjSMMAMIEEnf0WyEJEWKjUuHl3IRGQ6tpkU7AstiVkgYQCg+NFXz7o6p2S485M6CBXquGXqsG7+G83PXzRXhuejMbeDgYq6pdv0D3uSuqt5ubGrj+jrc1lh5zHgA+oIEvJOkSkKRLmGvHjRfNLY4vw2N375/N38KyojLLp+5r89pVGfjC6PC3SgC1ABwL+bW8yfzfydfawCeCb8B7gmvA2KemXx801AUcmfOYdDhhH5/wxm6nC+6ZGc6nGLNPLLCCoW8amHzHsqwTAAhFEblULFly6C/R3T/fFhFDOXqsPzKwgm/LH2sY4fx8uVE5AAAAAElFTkSuQmCC",className:"cursor cursor hover-img"})}):Object(I.jsx)(o.b,{className:"text-ms",to:"/login",children:Object(I.jsx)("img",{alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKeSURBVEiJ3ZVfSFNhGMafs/Pt2NbO/h03zWZqoXNGYeRFoZL256YCCaIMy8qbiAqkNEiCRIguIiyCLC+6iiJGQhHhhVBRlCZJEuXfjZymi+acepxuZ+ecrhSnnmbNm3ovn+97nt/7fXx8L40/K5JiYp+ZdNpKvYbJnQqHEmQZQQDjSgZKaYFl2fwki6VKRVHqWY0hxOJIZNKvHtll7f7uQ+c370xr7+CY2+sPBcNCQJLkDl+Ab5kWxXYALgCyIiAjPa2j2flwC6HpOc3d148HjTfH6w4VGRbuj4gS+kZG0TngDbf1Do25vD7QFNqIEkBN0yRrw/ooTZiaUtoOQqvgsFngsFmY0vxNSbIwg6O3mnarFB0rVP8vQC2K0orAlwzRreGe+2f4tM9d3fEDGFZbojEbK4sultn0yVy5xmyshCRnH3Re0ZVdqkbzy1dxAYjOamzcUXPMmrI1qz45LxOhiSC0nAEasx6F9adwubYBLo8HZ46Xz5kkWcaNp29R4EjDdvu63wPUqzVC6rYcAIB1Y0b04ioG+dcqcL/eCd/dSZQWFgMABn3j8PPTMcOBWK9IBn4IPCbFUMwgpSLhiGD68Lo1SkzgWGTmZOInP4lPdY9wbs8BXDhxEj1fvgIAUhMN4Fgt3vd4Yl+RMMGXd11vskc3TlVR906b+mudaDhfg/07i6NMKopCVUnB8k7AD/mfLBSNdltJR8Xt3DePncxmR/acrtfpkG7lhGUlzzazlBjoGSrkaK17fjgAWDgz9ubZg3EDAITVhCzq1DXgwZ0X7xZ91X8DWLH69wGKE00QxUivy435I3NweEQxaKmRSSi0KgJ8o/6z+w6XVasoetHQDwkRxD30lU6cYjI4CU2tlWWpfTgw0SKK+AjAo2T4BTfyDSlgv4jyAAAAAElFTkSuQmCC",className:"cursor cursor hover-img"})})})]})})})})},L=function(e){var t=e.children;return Object(I.jsxs)(s.a.Fragment,{children:[Object(I.jsx)(w,{}),Object(I.jsx)("div",{className:"base",children:Object(I.jsx)("div",{className:"container",children:t})})]})},G=function(){return Object(I.jsx)("div",{children:"MoveItem"})},_=function(e){var t=e.move;return console.log("MoveList movies ",t),Object(I.jsx)("div",{children:t&&t.map((function(e,t){return Object(I.jsx)(G,{},t)}))})},Y=function(){var e=[1,2,3,4,5];return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{className:"text-h1",children:"MainPage"}),Object(I.jsx)("div",{children:e&&Object(I.jsx)(_,{move:e})})]})},B=n(5),Q=n(3),V=function(){var e=Object(a.useState)(""),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(Q.l)(),s=k(),u=s.authLogin,i=s.authStatuse,l=j((function(e){return e.auth})),d=l.loadig,b=(l.id,l.name,l.success),A=l.status;console.log("LoginPage status",A),Object(a.useEffect)((function(){b&&c("/")}),[b]);return d?Object(I.jsx)("h1",{className:"text-47ebdbe3 h-border text-32 my-50 py-20",children:"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}):Object(I.jsxs)("div",{children:[Object(I.jsx)("h3",{children:"LoginPage"}),Object(I.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(I.jsx)("input",{value:n,onChange:function(e){r(e.target.value),i()},type:"text",placeholder:"name...",style:{border:"solid grey 1px",padding:"4px 10px"}}),Object(I.jsx)("button",{onClick:function(){u(n)},style:{background:"cyan",padding:"5px 100px",marginLeft:"10px"},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{className:"",to:"/registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),404===A&&Object(I.jsx)("h3",{className:"red",children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u0438\u043c\u044f"})]})},D=function(){var e=j((function(e){return e.auth})),t=e.status,n=e.success,r=e.loadig,c=Object(a.useState)(""),s=Object(B.a)(c,2),u=s[0],i=s[1],l=k(),d=l.authRegister,b=l.authStatuse,A=Object(Q.l)();Object(a.useEffect)((function(){n&&A("/")}),[n]);return r?Object(I.jsx)("h1",{className:"text-47ebdbe3 h-border text-32 my-50 py-20",children:"\u041e\u0440\u0431\u0430\u0442\u043e\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"}):Object(I.jsxs)("div",{children:[Object(I.jsx)("h3",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(I.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(I.jsx)("input",{value:u,onChange:function(e){i(e.target.value),b()},type:"text",placeholder:"name...",style:{border:"solid grey 1px",padding:"4px 10px"}}),Object(I.jsx)("button",{onClick:function(){d(u)},style:{background:"cyan",padding:"5px 100px",marginLeft:"10px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{className:"",to:"/login",children:"\u0415\u0441\u0442\u044c \u0430\u043a\u0430\u0443\u0442?"})}),404===t&&Object(I.jsx)("h3",{className:"red",children:"\u0414\u0430\u043d\u043d\u043e \u0438\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u043e"})]})]})},F=function(){var e=k().authMe,t=j((function(e){return e.auth})).token;return Object(a.useEffect)((function(){e()}),[t]),Object(I.jsx)("div",{children:Object(I.jsx)(L,{children:Object(I.jsxs)(Q.c,{children:[Object(I.jsx)(Q.a,{path:"/",element:Object(I.jsx)(Y,{})}),Object(I.jsx)(Q.a,{path:"/login",element:Object(I.jsx)(V,{})}),Object(I.jsx)(Q.a,{path:"/registration",element:Object(I.jsx)(D,{})})]})})})},K=n(29),Z={users:[],user:{id:0,name:""},loading:!1,error:null},M={id:null,name:"",loadig:!1,error:null,status:null,success:!1,token:null},W=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.AUTH_ME:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,error:null,name:t.paylod,success:!0,token:t.paylod});case c.AUTH_REGISTER:return Object(b.a)(Object(b.a)({},e),{},{loadig:!0});case c.AUTH_REGISTER_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,name:t.paylod,success:!0,token:t.paylod});case c.AUTH_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,error:t.paylod});case c.AUTH_STATUS:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,status:t.paylod});case c.AUTH_LOGIN:return Object(b.a)(Object(b.a)({},e),{},{loadig:!0});case c.AUTH_LOGIN_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,id:t.paylod.id,name:t.paylod.name,success:!0,token:t.paylod.name});case c.AUTH_LOGIN_ERROR:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,error:t.paylod});case c.AUTH_LOGOUT:return Object(b.a)(Object(b.a)({},e),{},{loadig:!1,token:null,success:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),X=Object(d.d)(W,Object(d.a)(K.a));i.a.render(Object(I.jsx)(l.a,{store:X,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(F,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.874ba4df.chunk.js.map