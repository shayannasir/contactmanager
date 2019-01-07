(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(64)},61:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=t(7),s=t(8),i=t(10),m=t(9),u=t(11),p=t(3),h=t.n(p),d=t(12),b=t(29),f=t(17),E=t(13),v=t.n(E),y=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(f.a)({},e,{contacts:[a.payload].concat(Object(b.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return N(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=y.Consumer,O=t(65),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(d.a)(h.a.mark(function e(a,t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(C,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{color:"red",float:"right",cursor:"pointer"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(O.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Phone number: ",o),r.a.createElement("li",{className:"list-group-item"},"Email: ",c)):null)})}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(j,{key:e.id,contact:e})}))})}}]),a}(n.Component),w=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-info-circle"})," About"))))))};w.defaultProps={branding:"My App"};var x=w;function A(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contacts Manager"),r.a.createElement("p",{className:"lead"},"Simple App to manage Contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}var S=t(14),T=t(27),D=t.n(T),P=function(e){var a=e.label,t=e.name,n=e.placeholder,c=e.value,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:n,value:c,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var q=P,_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(a,n){var r,c,o,l,s,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone Number is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-light"})))))})}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(a,n){var r,c,o,l,s,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone Number is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var a,t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone Number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-light"})))))})}}]),a}(n.Component),M=t(66),L=t(68),U=t(67);function B(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, the page does not exist."))}t(59),t(61);var F=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(M.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(L.a,null,r.a.createElement(U.a,{exact:!0,path:"/",component:k}),r.a.createElement(U.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(U.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(U.a,{exact:!0,path:"/about",component:A}),r.a.createElement(U.a,{component:B}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.a6425591.chunk.js.map