"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{7200:function(e,t,n){n.r(t),n.d(t,{ContactsPage:function(){return T},default:function(){return X}});var a=n(9434),r="ContactsForm_formstyle__Yvl2D",s="ContactsForm_inputstyle__IEoPR",c="ContactsForm_inputname__oGNP1",o="ContactsForm_button__zuUB3",l=n(5984),i=n(6338),u=n(184),m=function(){var e=(0,a.v9)(i.xm),t=(0,l.x0)(),n=(0,l.x0)(),m=(0,a.I0)();return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget,a=n.elements.name.value,r=n.elements.number.value;e.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))?alert("".concat(a," is already in contacts")):e.some((function(e){return e.number===r}))?alert("".concat(r," is already used")):m((0,i.je)({name:a,number:r})),n.reset()},className:r,children:[(0,u.jsx)("label",{htmlFor:t,className:c,children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",className:s,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:t,required:!0}),(0,u.jsx)("label",{htmlFor:n,className:c,children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",className:s,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:n,required:!0}),(0,u.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})},d="ContactsPage_ContactsContainer__ZWs4T",_={},h=n(7561),x=n(2791),f=n(6474),p=n(6895),v="Contact_contactcontainer__5tXxP",b="Contact_info__CShPG",C="Contact_contactInfo__DB2xI",j="Contact_contactButtons__0lRS4",N="Contact_button__YLSCl",y=n(7322),w=n(6546),E="EditContactForm_formstyle__9XZ9v",g="EditContactForm_inputstyle__DH66l",F="EditContactForm_inputname__kuY0g",L="EditContactForm_button__6oq3H",k=function(){var e=(0,a.v9)(i.xm),t=(0,l.x0)(),n=(0,l.x0)(),r=(0,a.v9)(w.rC),s=r.name,c=r.number,o=r.id,m=e.filter((function(e){return e.name!==s})),d=e.filter((function(e){return e.number!==c})),_=(0,a.I0)();return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.name.value,a=t.elements.number.value;m.some((function(e){return e.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))?alert("".concat(n," is already in contacts")):d.some((function(e){return e.number===a}))?alert("".concat(a," is already used")):(_((0,i.hx)({id:o,newContactData:{name:n,number:a}})),_((0,w.tY)(!1)),_((0,w.sp)(null))),t.reset()},className:E,children:[(0,u.jsx)("label",{htmlFor:t,className:F,children:"New Name"}),(0,u.jsx)("input",{type:"text",name:"name",defaultValue:s,className:g,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:t,required:!0}),(0,u.jsx)("label",{htmlFor:n,className:F,children:"New Number"}),(0,u.jsx)("input",{type:"tel",name:"number",defaultValue:c,className:g,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:n,required:!0}),(0,u.jsx)("button",{type:"submit",className:L,children:"Edit contact"})]})},I="ModalEditContact_backdrop__+40sC",Y="ModalEditContact_modal__ag524",A="ModalEditContact_text__aePtk",D="ModalEditContact_closeButton__HXeLp",P=function(){var e=(0,a.I0)();return(0,x.useEffect)((function(){var t=function(t){"Escape"===t.code&&(e((0,w.tY)(!1)),e((0,w.sp)(null)))};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}})),(0,u.jsx)("div",{className:I,onClick:function(t){t.currentTarget===t.target&&(e((0,w.tY)(!1)),e((0,w.sp)(null)))},children:(0,u.jsxs)("div",{className:Y,children:[(0,u.jsx)("p",{className:A,children:"You are trying to change the next contact:"}),(0,u.jsx)("button",{className:D,onClick:function(){e((0,w.tY)(!1)),e((0,w.sp)(null))},children:"\xd7"}),(0,u.jsx)(k,{})]})})},B=function(e){var t=e.name,n=e.number,r=e.id,s=(0,a.I0)(),c=(0,a.v9)(w.Yh);return(0,x.useEffect)((function(){}),[]),(0,u.jsxs)("div",{className:v,children:[c&&(0,u.jsx)(P,{}),(0,u.jsxs)("div",{className:C,children:[(0,u.jsx)(y.e5n,{}),(0,u.jsxs)("p",{className:b,children:[t,": ",n]})]}),(0,u.jsxs)("div",{className:j,children:[(0,u.jsx)("button",{type:"button",onClick:function(){return s((0,i.xX)(r))},className:N,children:"Delete"}),(0,u.jsx)("button",{type:"button",onClick:function(){s((0,w.tY)(!0)),s((0,w.sp)({name:t,number:n,id:r}))},className:N,children:"Edit"})]})]})},M=function(){var e=(0,a.v9)(i.xm),t=(0,a.v9)(h.R7),n=(0,a.v9)(i.Cc),r=(0,a.v9)(i.Uv),s=(0,a.I0)();(0,x.useEffect)((function(){t&&s((0,i.nQ)())}),[t,s]);var c=(0,a.v9)(p.AD),o=Array.isArray(e)&&e.length>0;return(0,u.jsxs)("div",{children:[n&&(0,u.jsx)(f.Z,{}),r&&(0,u.jsxs)("p",{children:["Error occured... Error is ",r]}),(0,u.jsx)("ul",{className:_.liststyle,children:o&&function(){var t=c.toLocaleLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}))}().map((function(e){var t=e.id,n=e.name,a=e.number;return(0,u.jsx)("li",{children:(0,u.jsx)(B,{name:n,number:a,id:t})},t)}))})]})},q="Filter_filtercontainer__t-IOk",S=function(){var e=(0,a.v9)(p.AD),t=(0,a.I0)(),n=(0,l.x0)();return(0,u.jsxs)("div",{className:q,children:[(0,u.jsx)("label",{htmlFor:n,children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",id:n,value:e,onChange:function(e){var n=e.target.value;t((0,p.hL)(n))}})]})},T=function(){return(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(m,{}),(0,u.jsx)(S,{}),(0,u.jsx)(M,{})]})},X=T}}]);
//# sourceMappingURL=200.6bcb3697.chunk.js.map