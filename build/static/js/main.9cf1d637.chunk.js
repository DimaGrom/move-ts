(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{16:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"authRegister",(function(){return N})),n.d(r,"authLogin",(function(){return R})),n.d(r,"authMe",(function(){return C})),n.d(r,"authStatuse",(function(){return k})),n.d(r,"authLogout",(function(){return H}));var c,a=n(0),s=n.n(a),i=n(24),u=n.n(i),o=n(5),l=(n(16),n(34),n(10)),j=n.p+"static/media/corn.7338c08f.png",d=n(19),b=d.c,A=n(13),x=n(7),O=n(6),h=n(4),p=n.n(h);!function(e){e.AUTH_ERROR="AUTH_ERROR",e.AUTH_STATUS="AUTH_STATUS",e.AUTH_REGISTER="AUTH_REGISTER",e.AUTH_REGISTER_SUCCESS="AUTH_CREATE_SUCCESS",e.AUTH_LOGIN="AUTH_LOGIN",e.AUTH_LOGIN_SUCCESS="AUTH_LOGIN_SUCCESS",e.AUTH_LOGIN_ERROR="AUTH_LOGIN_ERROR",e.AUTH_ME="AUTH_ME",e.AUTH_LOGOUT="AUTH_LOGOUT"}(c||(c={}));var f=n(11),m=n.n(f),v=function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.setItem("auth",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem("auth");case 2:if(t=e.sent,console.log("authUser request ",t),null!==t){e.next=6;break}return e.abrupt("return",!1);case 6:if(null===t){e.next=8;break}return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.removeItem("auth");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=n(9),T=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem("users");case 2:if(!(n=e.sent)){e.next=8;break}return e.next=6,null===n||void 0===n?void 0:n.find((function(e){return e.name===t}));case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem("users");case 2:if(null===(n=e.sent)){e.next=6;break}return e.next=6,m.a.setItem("users",[].concat(Object(U.a)(n),[t]));case 6:if(null!==n){e.next=9;break}return e.next=9,m.a.setItem("users",[t]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(40),N=function(e){return function(){var t=Object(O.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:if(void 0===t.sent){t.next=8;break}n({type:c.AUTH_STATUS,paylod:404}),t.next=17;break;case 8:return n({type:c.AUTH_REGISTER}),(r={}).id=E(),r.name=e,t.next=14,S(r);case 14:return setTimeout((function(){n({type:c.AUTH_REGISTER_SUCCESS,paylod:r.name})}),500),t.next=17,v(r.name);case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),n({type:c.AUTH_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"});case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(O.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:if(void 0!==(r=t.sent)){t.next=8;break}n({type:c.AUTH_STATUS,paylod:404}),t.next=12;break;case 8:return n({type:c.AUTH_LOGIN}),setTimeout((function(){n({type:c.AUTH_LOGIN_SUCCESS,paylod:{name:r.name,id:r.id}})}),700),t.next=12,v(e);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),n({type:c.AUTH_LOGIN_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0432\u043e\u0434\u0430 \u0438\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044f."});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},C=function(){return function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent;try{t(n?{type:c.AUTH_ME,paylod:n}:{type:c.AUTH_ERROR,paylod:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})}catch(r){t({type:c.AUTH_ERROR,paylod:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0440\u0433\u0440\u0443\u0437\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:c.AUTH_STATUS,paylod:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t({type:c.AUTH_LOGOUT});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=Object(x.a)({},r),I=function(){var e=Object(d.b)();return Object(A.b)(w,e)},L=n(2),_=function(){var e=b((function(e){return e.auth})).token,t=I().authLogout,n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1];return Object(L.jsx)("div",{className:"Navbar text-ms",children:Object(L.jsx)("div",{className:"container",children:Object(L.jsx)("div",{children:Object(L.jsxs)("div",{className:"Navbar__body flex space-between  align-center py-10",children:[Object(L.jsx)("div",{className:"Navbar__logo",children:Object(L.jsx)("img",{alt:"logo",src:j})}),Object(L.jsx)("div",{onClick:function(){s(!c),console.log(c)},className:"Navbar__burger".concat(c?" active":""),children:Object(L.jsx)("span",{})}),Object(L.jsxs)("div",{className:"Navbar__menu ".concat(c?"active":""),children:[Object(L.jsx)("div",{children:Object(L.jsx)(l.b,{onClick:function(){return s(!c)},className:"mx-5 text-ms cursor relative zind-5 text-white",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(L.jsx)("div",{className:"mx-5 cursor relative zind-5 text-white",children:Object(L.jsx)(l.b,{onClick:function(){return s(!c)},className:"mx-5 text-ms cursor relative zind-5 text-white",to:"/",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"})}),Object(L.jsx)("div",{className:"mx-5 cursor relative zind-5 text-white",children:Object(L.jsx)(l.b,{onClick:function(){return s(!c)},className:"mx-5 text-ms cursor relative zind-5 text-white",to:"/",children:"\u041c\u043e\u0438"})})]}),Object(L.jsx)("div",{children:e?Object(L.jsx)("button",{className:"text-ms",children:Object(L.jsx)("img",{onClick:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK/SURBVEiJ1VZdSJNRGH7O933bN3W/Jk7ZShpN05XSjyw1s8S6MYjoIjAMyrAbb7T8iW6CaEIUFQbG+hF/+rEwKJTUVXZRiWAXU7NEsoVTmVlTtynNvn1dqENrcyruoufm8D48533eF8457yHwDwJAI6TpnVEKcZaQoVIYQqY+j/zcDcC9xL5FYOZWGkCsSEAnR8ok+ymCxFBWKItTRbD6WHV4YkyUME6pQPkT0+9pOrSVFYkc9cbKO6eKio8yNFHbRscuWQYHW3xWGRMpr5GGiDJ06yNZvVa1bmtMFKNRhoOmyCIh7+FQ/tjE5ZYYaN3mOMhlUjhdLrjsE8jOPTH0wdyl9tmBIjQk89m5Y6rltiyViCGXSQEA4rAwiAUCCAUC2p+eItRyU68OQU7/nxkQANKgGUhksjylSm2JiI4+vZBnNkTIJwEs+xQBQNfHXjS9bJsNOA7WkRExoejjF4x1iub6WsP7Vy3x34eshQB4puxwei+AeH/JOvqtaOseQPGhVC9XariC7PxCb1yyY59YwLLpifo0bEvdE/7g5tWT9bdubLINWY8wBbcb9U9Lc/xWq9eq0djZh682u5fzeHgk783yuyen4IxEqdEeuHf5YiflAU/8KleJcY6HjSMMAMIEEnf0WyEJEWKjUuHl3IRGQ6tpkU7AstiVkgYQCg+NFXz7o6p2S485M6CBXquGXqsG7+G83PXzRXhuejMbeDgYq6pdv0D3uSuqt5ubGrj+jrc1lh5zHgA+oIEvJOkSkKRLmGvHjRfNLY4vw2N375/N38KyojLLp+5r89pVGfjC6PC3SgC1ABwL+bW8yfzfydfawCeCb8B7gmvA2KemXx801AUcmfOYdDhhH5/wxm6nC+6ZGc6nGLNPLLCCoW8amHzHsqwTAAhFEblULFly6C/R3T/fFhFDOXqsPzKwgm/LH2sY4fx8uVE5AAAAAElFTkSuQmCC",className:"cursor cursor hover-img"})}):Object(L.jsx)(l.b,{className:"text-ms relative zind-5",to:"/login",children:Object(L.jsx)("img",{alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKeSURBVEiJ3ZVfSFNhGMafs/Pt2NbO/h03zWZqoXNGYeRFoZL256YCCaIMy8qbiAqkNEiCRIguIiyCLC+6iiJGQhHhhVBRlCZJEuXfjZymi+acepxuZ+ecrhSnnmbNm3ovn+97nt/7fXx8L40/K5JiYp+ZdNpKvYbJnQqHEmQZQQDjSgZKaYFl2fwki6VKRVHqWY0hxOJIZNKvHtll7f7uQ+c370xr7+CY2+sPBcNCQJLkDl+Ab5kWxXYALgCyIiAjPa2j2flwC6HpOc3d148HjTfH6w4VGRbuj4gS+kZG0TngDbf1Do25vD7QFNqIEkBN0yRrw/ooTZiaUtoOQqvgsFngsFmY0vxNSbIwg6O3mnarFB0rVP8vQC2K0orAlwzRreGe+2f4tM9d3fEDGFZbojEbK4sultn0yVy5xmyshCRnH3Re0ZVdqkbzy1dxAYjOamzcUXPMmrI1qz45LxOhiSC0nAEasx6F9adwubYBLo8HZ46Xz5kkWcaNp29R4EjDdvu63wPUqzVC6rYcAIB1Y0b04ioG+dcqcL/eCd/dSZQWFgMABn3j8PPTMcOBWK9IBn4IPCbFUMwgpSLhiGD68Lo1SkzgWGTmZOInP4lPdY9wbs8BXDhxEj1fvgIAUhMN4Fgt3vd4Yl+RMMGXd11vskc3TlVR906b+mudaDhfg/07i6NMKopCVUnB8k7AD/mfLBSNdltJR8Xt3DePncxmR/acrtfpkG7lhGUlzzazlBjoGSrkaK17fjgAWDgz9ubZg3EDAITVhCzq1DXgwZ0X7xZ91X8DWLH69wGKE00QxUivy435I3NweEQxaKmRSSi0KgJ8o/6z+w6XVasoetHQDwkRxD30lU6cYjI4CU2tlWWpfTgw0SKK+AjAo2T4BTfyDSlgv4jyAAAAAElFTkSuQmCC",className:"cursor cursor hover-img"})})})]})})})})},G=function(e){var t=e.children;return Object(L.jsxs)(s.a.Fragment,{children:[Object(L.jsx)(_,{}),Object(L.jsx)("div",{className:"base",children:Object(L.jsx)("div",{className:"container",children:t})})]})},Y=function(){return Object(L.jsx)("div",{children:"MoveItem"})},B=function(e){var t=e.move;return console.log("MoveList movies ",t),Object(L.jsx)("div",{children:t&&t.map((function(e,t){return Object(L.jsx)(Y,{},t)}))})},Q=function(){var e=[1,2,3,4,5];return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{className:"text-h1",children:"MainPage"}),Object(L.jsx)("p",{children:"\u0430\u043c \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043b, \u043a\u0430\u043a \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u043e\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b \u0438 \u043a \u043d\u0435\u043c\u0443 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043b\u0438 \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u0443 \u041f\u0435\u043b\u0430\u0433\u0435\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u044f\u043a\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438 \u0441\u043a\u0430\u0437\u043a\u0438. \u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0431\u044b\u043b \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0432\u043b\u0435\u0447\u0435\u043d \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u043f\u0440\u043e \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a, \u0447\u0442\u043e \u0438 \u043f\u043e\u0434\u0430\u0432\u043d\u043e \u043d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u0441\u043d\u0443\u0442\u044c. \u041a\u043e\u0433\u0434\u0430 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0432\u044b\u0440\u043e\u0441, \u043e\u043d \u0437\u0430\u043f\u0438\u0441\u0430\u043b \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u044b \u0438 \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0438\u0437\u0434\u0430\u043d\u0430, \u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u0442\u0430\u043b\u0430 \u043b\u044e\u0431\u0438\u043c\u043e\u0439 \u0443 \u043c\u043d\u043e\u0433\u0438\u0445 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432 \u0438 \u0434\u0435\u0432\u043e\u0447\u0435\u043a. \u041e\u0431 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0435 \u0420\u043e\u0434\u0438\u043b\u0441\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u0438\u0447 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u0432 1791 \u0433\u043e\u0434\u0443. \u0414\u0435\u0442\u0441\u0442\u0432\u043e \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0440\u043e\u0432\u0435\u043b \u0432 \u0423\u0444\u0435 \u043f\u043e\u0434 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043b\u0438\u044f\u043d\u0438\u0435\u043c \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u0434\u0443\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e \u043f\u043e\u0432\u043b\u0438\u044f\u043b \u043d\u0430 \u043c\u0438\u0440\u043e\u0432\u043e\u0437\u0437\u0440\u0435\u043d\u0438\u0435 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u0430. \u041e\u0442\u0443\u0447\u0438\u043b\u0441\u044f \u0432 \u0433\u0438\u043c\u043d\u0430\u0437\u0438\u0438, \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044f\u0449\u0435\u0439 \u0432 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0447\u0451\u0431\u044b \u043d\u0430\u0447\u0430\u043b \u043f\u0438\u0441\u0430\u0442\u044c. \u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0441\u0442\u0438\u0445\u0438, \u0441\u0435\u043d\u0442\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435, \u043c\u043e\u0436\u0435\u0442 \u0433\u0434\u0435-\u0442\u043e \u0434\u0430\u0436\u0435 \u043f\u043e-\u044e\u043d\u043e\u0448\u0435\u0441\u043a\u0438 \u043d\u0430\u0438\u0432\u043d\u044b\u0435. \u041f\u043e\u0437\u0436\u0435 \u043e\u043d \u043f\u0438\u0448\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0447\u0435\u0440\u043a\u0438, \u043e\u0434\u043d\u0430\u043a\u043e \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u2013 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0437\u0430\u043d\u044f\u0442\u0438\u0435\u043c \u0438 \u043a \u043d\u0435\u043c\u0443 \u043e\u043d \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0438\u0437\u0440\u0435\u0434\u043a\u0430. \u0426\u0435\u043d\u0437\u043e\u0440 \u0438 \u043a\u0440\u0438\u0442\u0438\u043a \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0438\u0448\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0432\u0435\u0441\u043e\u043c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0445 \u043a\u0440\u0443\u0433\u0430\u0445. \u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0435\u0433\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0437\u0430\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0447\u0435\u0440\u043a\u0430 \u0411\u0443\u0440\u0430\u043d. \u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u0435\u043d, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u044b \u0432 \u043d\u0435\u043c \u0437\u0430\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u0434\u0443\u0445. \u0418 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0438\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0427\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u043e\u043d \u043e\u0431\u0440\u0430\u0442\u0438\u043b \u043d\u0430 \u0441\u0435\u0431\u044f \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u043c\u0438 \u0417\u0430\u043f\u0438\u0441\u043a\u0430\u043c\u0438 \u043e \u0440\u044b\u0431\u0430\u043b\u043a\u0435 \u0438 \u043e\u0431 \u043e\u0445\u043e\u0442\u0435. \u0421\u043a\u0430\u0437\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a"}),Object(L.jsx)("p",{children:"\u0430\u043c \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043b, \u043a\u0430\u043a \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u043e\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b \u0438 \u043a \u043d\u0435\u043c\u0443 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043b\u0438 \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u0443 \u041f\u0435\u043b\u0430\u0433\u0435\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u044f\u043a\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438 \u0441\u043a\u0430\u0437\u043a\u0438. \u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0431\u044b\u043b \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0432\u043b\u0435\u0447\u0435\u043d \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u043f\u0440\u043e \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a, \u0447\u0442\u043e \u0438 \u043f\u043e\u0434\u0430\u0432\u043d\u043e \u043d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u0441\u043d\u0443\u0442\u044c. \u041a\u043e\u0433\u0434\u0430 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0432\u044b\u0440\u043e\u0441, \u043e\u043d \u0437\u0430\u043f\u0438\u0441\u0430\u043b \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u044b \u0438 \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0438\u0437\u0434\u0430\u043d\u0430, \u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u0442\u0430\u043b\u0430 \u043b\u044e\u0431\u0438\u043c\u043e\u0439 \u0443 \u043c\u043d\u043e\u0433\u0438\u0445 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432 \u0438 \u0434\u0435\u0432\u043e\u0447\u0435\u043a. \u041e\u0431 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0435 \u0420\u043e\u0434\u0438\u043b\u0441\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u0438\u0447 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u0432 1791 \u0433\u043e\u0434\u0443. \u0414\u0435\u0442\u0441\u0442\u0432\u043e \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0440\u043e\u0432\u0435\u043b \u0432 \u0423\u0444\u0435 \u043f\u043e\u0434 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043b\u0438\u044f\u043d\u0438\u0435\u043c \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u0434\u0443\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e \u043f\u043e\u0432\u043b\u0438\u044f\u043b \u043d\u0430 \u043c\u0438\u0440\u043e\u0432\u043e\u0437\u0437\u0440\u0435\u043d\u0438\u0435 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u0430. \u041e\u0442\u0443\u0447\u0438\u043b\u0441\u044f \u0432 \u0433\u0438\u043c\u043d\u0430\u0437\u0438\u0438, \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044f\u0449\u0435\u0439 \u0432 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0447\u0451\u0431\u044b \u043d\u0430\u0447\u0430\u043b \u043f\u0438\u0441\u0430\u0442\u044c. \u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0441\u0442\u0438\u0445\u0438, \u0441\u0435\u043d\u0442\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435, \u043c\u043e\u0436\u0435\u0442 \u0433\u0434\u0435-\u0442\u043e \u0434\u0430\u0436\u0435 \u043f\u043e-\u044e\u043d\u043e\u0448\u0435\u0441\u043a\u0438 \u043d\u0430\u0438\u0432\u043d\u044b\u0435. \u041f\u043e\u0437\u0436\u0435 \u043e\u043d \u043f\u0438\u0448\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0447\u0435\u0440\u043a\u0438, \u043e\u0434\u043d\u0430\u043a\u043e \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u2013 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0437\u0430\u043d\u044f\u0442\u0438\u0435\u043c \u0438 \u043a \u043d\u0435\u043c\u0443 \u043e\u043d \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0438\u0437\u0440\u0435\u0434\u043a\u0430. \u0426\u0435\u043d\u0437\u043e\u0440 \u0438 \u043a\u0440\u0438\u0442\u0438\u043a \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0438\u0448\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0432\u0435\u0441\u043e\u043c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0445 \u043a\u0440\u0443\u0433\u0430\u0445. \u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0435\u0433\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0437\u0430\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0447\u0435\u0440\u043a\u0430 \u0411\u0443\u0440\u0430\u043d. \u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u0435\u043d, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u044b \u0432 \u043d\u0435\u043c \u0437\u0430\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u0434\u0443\u0445. \u0418 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0438\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0427\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u043e\u043d \u043e\u0431\u0440\u0430\u0442\u0438\u043b \u043d\u0430 \u0441\u0435\u0431\u044f \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u043c\u0438 \u0417\u0430\u043f\u0438\u0441\u043a\u0430\u043c\u0438 \u043e \u0440\u044b\u0431\u0430\u043b\u043a\u0435 \u0438 \u043e\u0431 \u043e\u0445\u043e\u0442\u0435. \u0421\u043a\u0430\u0437\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a"}),Object(L.jsx)("p",{children:"\u0430\u043c \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043b, \u043a\u0430\u043a \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u043e\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b \u0438 \u043a \u043d\u0435\u043c\u0443 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043b\u0438 \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u0443 \u041f\u0435\u043b\u0430\u0433\u0435\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u044f\u043a\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438 \u0441\u043a\u0430\u0437\u043a\u0438. \u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0431\u044b\u043b \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0432\u043b\u0435\u0447\u0435\u043d \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u043f\u0440\u043e \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a, \u0447\u0442\u043e \u0438 \u043f\u043e\u0434\u0430\u0432\u043d\u043e \u043d\u0435 \u0441\u043c\u043e\u0433 \u0437\u0430\u0441\u043d\u0443\u0442\u044c. \u041a\u043e\u0433\u0434\u0430 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0432\u044b\u0440\u043e\u0441, \u043e\u043d \u0437\u0430\u043f\u0438\u0441\u0430\u043b \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043a\u043b\u044e\u0447\u043d\u0438\u0446\u044b \u0438 \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0438\u0437\u0434\u0430\u043d\u0430, \u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u0442\u0430\u043b\u0430 \u043b\u044e\u0431\u0438\u043c\u043e\u0439 \u0443 \u043c\u043d\u043e\u0433\u0438\u0445 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432 \u0438 \u0434\u0435\u0432\u043e\u0447\u0435\u043a. \u041e\u0431 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0435 \u0420\u043e\u0434\u0438\u043b\u0441\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u0438\u0447 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u0432 1791 \u0433\u043e\u0434\u0443. \u0414\u0435\u0442\u0441\u0442\u0432\u043e \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0440\u043e\u0432\u0435\u043b \u0432 \u0423\u0444\u0435 \u043f\u043e\u0434 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043b\u0438\u044f\u043d\u0438\u0435\u043c \u0441\u0432\u043e\u0435\u0433\u043e \u0434\u0435\u0434\u0443\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e \u043f\u043e\u0432\u043b\u0438\u044f\u043b \u043d\u0430 \u043c\u0438\u0440\u043e\u0432\u043e\u0437\u0437\u0440\u0435\u043d\u0438\u0435 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u0430. \u041e\u0442\u0443\u0447\u0438\u043b\u0441\u044f \u0432 \u0433\u0438\u043c\u043d\u0430\u0437\u0438\u0438, \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044f\u0449\u0435\u0439 \u0432 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0447\u0451\u0431\u044b \u043d\u0430\u0447\u0430\u043b \u043f\u0438\u0441\u0430\u0442\u044c. \u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0441\u0442\u0438\u0445\u0438, \u0441\u0435\u043d\u0442\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435, \u043c\u043e\u0436\u0435\u0442 \u0433\u0434\u0435-\u0442\u043e \u0434\u0430\u0436\u0435 \u043f\u043e-\u044e\u043d\u043e\u0448\u0435\u0441\u043a\u0438 \u043d\u0430\u0438\u0432\u043d\u044b\u0435. \u041f\u043e\u0437\u0436\u0435 \u043e\u043d \u043f\u0438\u0448\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0447\u0435\u0440\u043a\u0438, \u043e\u0434\u043d\u0430\u043a\u043e \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u2013 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0437\u0430\u043d\u044f\u0442\u0438\u0435\u043c \u0438 \u043a \u043d\u0435\u043c\u0443 \u043e\u043d \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0438\u0437\u0440\u0435\u0434\u043a\u0430. \u0426\u0435\u043d\u0437\u043e\u0440 \u0438 \u043a\u0440\u0438\u0442\u0438\u043a \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043a\u0441\u0430\u043a\u043e\u0432 \u043f\u0438\u0448\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0432\u0435\u0441\u043e\u043c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0445 \u043a\u0440\u0443\u0433\u0430\u0445. \u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0435\u0433\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0437\u0430\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0447\u0435\u0440\u043a\u0430 \u0411\u0443\u0440\u0430\u043d. \u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u0435\u043d, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u044b \u0432 \u043d\u0435\u043c \u0437\u0430\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u0434\u0443\u0445. \u0418 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0438\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0427\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u043e\u043d \u043e\u0431\u0440\u0430\u0442\u0438\u043b \u043d\u0430 \u0441\u0435\u0431\u044f \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u043c\u0438 \u0417\u0430\u043f\u0438\u0441\u043a\u0430\u043c\u0438 \u043e \u0440\u044b\u0431\u0430\u043b\u043a\u0435 \u0438 \u043e\u0431 \u043e\u0445\u043e\u0442\u0435. \u0421\u043a\u0430\u0437\u043a\u0438 \u0410\u043a\u0441\u0430\u043a\u043e\u0432\u0430. \u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a"}),Object(L.jsx)("div",{children:e&&Object(L.jsx)(B,{move:e})})]})},V=n(3),z=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(V.l)(),s=I(),i=s.authLogin,u=s.authStatuse,j=b((function(e){return e.auth})),d=j.loadig,A=(j.id,j.name,j.success),x=j.status;console.log("LoginPage status",x),Object(a.useEffect)((function(){A&&c("/")}),[A]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);return d?Object(L.jsx)("h1",{className:"text-47ebdbe3 h-border text-32 my-50 py-20",children:"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}):Object(L.jsxs)("div",{className:"LoginPage",children:[Object(L.jsx)("h3",{children:"LoginPage"}),Object(L.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(L.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(L.jsx)("input",{value:n,onChange:function(e){r(e.target.value),u()},type:"text",placeholder:"name...",style:{border:"solid grey 1px",padding:"4px 10px"}}),Object(L.jsx)("button",{onClick:function(){i(n)},style:{background:"cyan",padding:"5px 100px",marginLeft:"10px"},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(L.jsx)("div",{children:Object(L.jsx)(l.b,{className:"",to:"/registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),404===x&&Object(L.jsx)("h3",{className:"red",children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u0438\u043c\u044f"})]})},D=function(){var e=b((function(e){return e.auth})),t=e.status,n=e.success,r=e.loadig,c=Object(a.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],j=I(),d=j.authRegister,A=j.authStatuse,x=Object(V.l)();Object(a.useEffect)((function(){n&&x("/")}),[n]);return r?Object(L.jsx)("h1",{className:"text-47ebdbe3 h-border text-32 my-50 py-20",children:"\u041e\u0440\u0431\u0430\u0442\u043e\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"}):Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(L.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(L.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(L.jsx)("input",{value:i,onChange:function(e){u(e.target.value),A()},type:"text",placeholder:"name...",style:{border:"solid grey 1px",padding:"4px 10px"}}),Object(L.jsx)("button",{onClick:function(){d(i)},style:{background:"cyan",padding:"5px 100px",marginLeft:"10px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(L.jsx)("div",{children:Object(L.jsx)(l.b,{className:"",to:"/login",children:"\u0415\u0441\u0442\u044c \u0430\u043a\u0430\u0443\u0442?"})}),404===t&&Object(L.jsx)("h3",{className:"red",children:"\u0414\u0430\u043d\u043d\u043e \u0438\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u043e"})]})]})},F=function(){var e=I().authMe,t=b((function(e){return e.auth})).token;return Object(a.useEffect)((function(){e()}),[t]),Object(L.jsx)("div",{children:Object(L.jsx)(G,{children:Object(L.jsxs)(V.c,{children:[Object(L.jsx)(V.a,{path:"/",element:Object(L.jsx)(Q,{})}),Object(L.jsx)(V.a,{path:"/login",element:Object(L.jsx)(z,{})}),Object(L.jsx)(V.a,{path:"/registration",element:Object(L.jsx)(D,{})})]})})})},K=n(29),Z={users:[],user:{id:0,name:""},loading:!1,error:null},M={id:null,name:"",loadig:!1,error:null,status:null,success:!1,token:null},W=Object(A.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.AUTH_ME:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,error:null,name:t.paylod,success:!0,token:t.paylod});case c.AUTH_REGISTER:return Object(x.a)(Object(x.a)({},e),{},{loadig:!0});case c.AUTH_REGISTER_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,name:t.paylod,success:!0,token:t.paylod});case c.AUTH_ERROR:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,error:t.paylod});case c.AUTH_STATUS:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,status:t.paylod});case c.AUTH_LOGIN:return Object(x.a)(Object(x.a)({},e),{},{loadig:!0});case c.AUTH_LOGIN_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,id:t.paylod.id,name:t.paylod.name,success:!0,token:t.paylod.name});case c.AUTH_LOGIN_ERROR:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,error:t.paylod});case c.AUTH_LOGOUT:return Object(x.a)(Object(x.a)({},e),{},{loadig:!1,token:null,success:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),X=Object(A.d)(W,Object(A.a)(K.a));u.a.render(Object(L.jsx)(d.a,{store:X,children:Object(L.jsx)(l.a,{children:Object(L.jsx)(F,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9cf1d637.chunk.js.map