(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(27),a(6)),m=a(7),u=a(11),o=a(8),s=a(12),p=(a(17),a(40)),d=a(41),E=a(20),h=(a(28),a(13)),f=a.n(h),g=a(19),v=a.n(g),b=a(14),y=a.n(b),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:y.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:y.a,alt:"miasto"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}})))},j=a(38),k=(a(32),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),w=function(){var e=k.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(j.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},J=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},O=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"},{id:2,title:"Czym jest paradoks fermiego?",author:"Ania Kwiatkowska",text:"2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Kowalski",text:"4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."}],S=function(){var e=O.map(function(e){return r.a.createElement(J,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},z=a(15),C=function(e){return r.a.createElement("article",{className:"product"},e.id)},N=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(C,{id:t.params.id}),r.a.createElement(z.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},F=(a(33),["car","bike","motorcycle"]),q=function(){var e=F.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(z.a,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},A=(a(34),a(42)),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0&&a.setState({value:e.target.value,isEmpty:!1}),a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(A.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony forumlarz. Czy na pewno chcesz opu\u015bcic t\u0119 stron\u0119"}))}}]),t}(r.a.Component),L=a(39),B=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(L.a,{to:"/login"})}})},K=function(){return r.a.createElement("div",null,"Strona startowa")},T=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"text"})),r.a.createElement("button",null,"Zaloguj"))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:S}),r.a.createElement(E.a,{path:"/products",component:q}),r.a.createElement(E.a,{path:"/product/:id",component:N}),r.a.createElement(E.a,{path:"/contact",component:P}),r.a.createElement(E.a,{path:"/admin",component:B}),r.a.createElement(E.a,{path:"/login",component:T}),r.a.createElement(E.a,{component:K})))},D=(a(35),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(E.a,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(E.a,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"blog"},r.a.createElement(W,null))),r.a.createElement("footer",null,r.a.createElement(D,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.8fc2081b.chunk.js.map