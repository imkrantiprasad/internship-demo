(this["webpackJsonpinternship-demo"]=this["webpackJsonpinternship-demo"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":1,"name":"Kranti","comments":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","up":3,"down":0},{"id":2,"name":"Chetan","comments":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","up":0,"down":7}]')},15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),r=(n(20),n(3)),l=n(10),s=n(11),m=n(2),u=n(14),d=n(13),p=(n(21),n(12)),h=n(7),b=n(5);var v=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("span",{className:"boxHead"},e.id,". ",e.name),o.a.createElement("p",null,e.comments)),o.a.createElement("div",{className:"vote"},o.a.createElement("button",{class:"btnIcon",onClick:function(){return e.handleUpClick(e.id)}},o.a.createElement("span",{className:"up"},o.a.createElement(b.a,{icon:h.b})))," ",e.up," upvotes",o.a.createElement("br",null),o.a.createElement("button",{class:"btnIcon",onClick:function(){return e.handleDownClick(e.id)}},o.a.createElement("span",{className:"down"},o.a.createElement(b.a,{icon:h.a})))," ",e.down," downvotes")))},k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={votes:p},e.handleUpClick=e.handleUpClick.bind(Object(m.a)(e)),e.handleDownClick=e.handleDownClick.bind(Object(m.a)(e)),e}return Object(s.a)(n,[{key:"handleUpClick",value:function(e){this.setState((function(t){return{votes:t.votes.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{up:t.up+1}):t}))}}))}},{key:"handleDownClick",value:function(e){this.setState((function(t){return{votes:t.votes.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{down:t.down+1}):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.votes.map((function(t){return o.a.createElement(v,{id:t.id,name:t.name,comments:t.comments,up:t.up,down:t.down,handleUpClick:e.handleUpClick,handleDownClick:e.handleDownClick})}));return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"formBox"},o.a.createElement("form",null,o.a.createElement("input",{style:{width:"100%",height:200},type:"text",className:"inptBox",placeholder:"Type a comment..."}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"btn1"},"Post Comment"),o.a.createElement("br",null))),o.a.createElement("div",{className:"commentBox"},t))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4d7ad710.chunk.js.map