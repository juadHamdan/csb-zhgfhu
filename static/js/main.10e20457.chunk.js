(this["webpackJsonpreact-cat-facts-chatbot"]=this["webpackJsonpreact-cat-facts-chatbot"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(30),a=c(10),r=(c(41),c(69)),i=(c(42),c(19)),l=c(31),j=c(17),u=c(32),o=c.n(u),d="Cat Facts Chatbot",b=function(){var e=Object(s.useState)([{sender:d,text:"\ud83d\udc4b Hi! Send any message"}]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(null),u=Object(a.a)(r,2),b=u[0],h=u[1];function O(e){return{sender:d,text:e}}function f(e){n((function(t){return[].concat(Object(j.a)(t),[O(e)])}))}function x(){return(x=Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://catfact.ninja/fact",e.prev=1,e.next=4,o()({method:"get",url:"https://catfact.ninja/fact"});case 4:f(e.sent.data.fact),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return{messages:c,setNewMessage:h,addNewUserMessage:function(e){null!=b&&(n((function(e){return[].concat(Object(j.a)(e),[{sender:"User",text:b}])})),h(null),e.target.value="",function(){x.apply(this,arguments)}())}}},h=c(70),O=c(18),f=c(16),x=c(2),g=function(e){var t=e.handleClose,c=e.active,n=b(),a=n.messages,i=n.setNewMessage,l=n.addNewUserMessage,j=Object(s.useRef)(null);Object(s.useEffect)((function(){j.current.focus()}),[c]);var u=Object(s.useRef)(null);return Object(s.useEffect)((function(){a.length>1&&function(){return(e=u).current.scrollTo(0,e.current.scrollHeight-e.current.clientHeight);var e}()}),[a]),Object(x.jsx)("div",{class:"container",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{class:"header",children:[Object(x.jsxs)("div",{class:"header-logo",children:[Object(x.jsx)("p",{style:{margin:"0"},children:"\ud83d\ude3a"}),Object(x.jsx)("div",{class:"status",style:{background:c?"#00FF00":"#FF0000"}})]}),Object(x.jsxs)("div",{class:"header-text",children:[Object(x.jsx)("h2",{children:d}),Object(x.jsx)("small",{children:c?Object(x.jsx)(x.Fragment,{children:"Online"}):Object(x.jsx)(x.Fragment,{children:"Offline"})})]}),Object(x.jsx)(O.a,{className:"close-btn",onClick:t,icon:f.b})]}),Object(x.jsx)("div",{class:"messages",ref:u,children:Object(x.jsx)(h.a,{children:a.map((function(e,t){return Object(x.jsx)(r.a,{timeout:200,classNames:"messages",children:Object(x.jsx)("div",{class:e.sender===d?"chat-message-container":"user-message-container",children:Object(x.jsx)("div",{class:e.sender===d?"message chat-message":"message user-message",children:e.text})})},t)}))})}),Object(x.jsxs)("div",{class:"form",children:[Object(x.jsx)("input",{placeholder:"Send a message...",onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&l(e)},ref:j}),Object(x.jsx)(O.a,{className:"send-btn",onClick:l,icon:f.a})]})]})})};function m(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{class:"footer",children:[Object(x.jsx)("button",{class:"btn",onClick:function(){return n((function(e){return!e}))},children:c?Object(x.jsx)("p",{children:"Close Chat"}):Object(x.jsx)("p",{children:"Open Chat"})}),Object(x.jsx)(r.a,{unmountOnExit:!0,in:c,timeout:200,classNames:"chat",children:Object(x.jsx)(g,{handleClose:function(){return n(!1)},active:c})})]})})}var p=document.getElementById("root");Object(n.createRoot)(p).render(Object(x.jsx)(s.StrictMode,{children:Object(x.jsx)(m,{})}))}},[[68,1,2]]]);
//# sourceMappingURL=main.10e20457.chunk.js.map