(this.webpackJsonprazorpay=this.webpackJsonprazorpay||[]).push([[0],{21:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(16),o=r.n(c),s=(r(21),r(4)),i=r.n(s),u=r(6),d=r(3),p=r.p+"static/media/logo.6ce24c58.svg",l=(r(23),r(24),r(0)),j=function(e){return Object(l.jsx)("div",{className:"productContainer",children:e.products.map((function(t){return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{children:t.description}),Object(l.jsxs)("p",{children:["Rs ",10*t.price*7]}),Object(l.jsx)("button",{onClick:function(){return e.buyNow(t.id)},children:"Buy Now"})]},t.id)}))})},b=r(7),h=r.n(b),f="http://localhost:8000";var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),o=Object(d.a)(c,2),s=o[0],b=o[1],O=Object(n.useState)(""),m=Object(d.a)(O,2),x=m[0],g=m[1],y=Object(n.useState)(""),v=Object(d.a)(y,2),w=v[0],_=v[1],k=Object(n.useState)(""),N=Object(d.a)(k,2),S=N[0],z=N[1];Object(n.useEffect)((function(){C()}),[]);var C=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(f,"/products"));case 2:t=e.sent,console.log(t),200===t.status&&a(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(f,"/order/").concat(t));case 2:if(r=e.sent,console.log(r),200===r.status){e.next=6;break}return e.abrupt("return");case 6:n={key:"rzp_test_Ql7E01KwprdCu8",amount:r.data.price,currency:r.data.currency,name:"Webscript",description:r.data.notes.desc,image:"https://example.com/your_logo",order_id:r.data.id,handler:function(e){g(e.razorpay_order_id),_(e.razorpay_payment_id),z(e.razorpay_signature),b(!0)},prefill:{name:"Kumari Misa",email:"misa@gmail.com",contact:"9999999999"}},(a=new window.Razorpay(n)).open(),a.on("payment.failed",(function(e){alert(e.error.code),alert(e.error.description),alert(e.error.source),alert(e.error.step),alert(e.error.reason),alert(e.error.metadata.order_id),alert(e.error.metadata.payment_id)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(l.jsx)("p",{children:"Welcome to online training center"}),Object(l.jsx)("a",{className:"App-link",href:"https://webscript.info",target:"_blank",rel:"noopener noreferrer",children:"WebScript.info"}),Object(l.jsx)("div",{children:s&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Payment id:",w]}),Object(l.jsxs)("p",{children:["Order id:",x]}),Object(l.jsxs)("p",{children:["signature:",S]})]})})]}),Object(l.jsx)(j,{products:r,buyNow:A})]})},m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,45)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.190e5461.chunk.js.map