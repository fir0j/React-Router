(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),u=a(18),o=a(10),m=a(7),i=a(5),E=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Home page"))},s=function(){var e=Object(m.i)().name;return l.a.createElement(n.Fragment,null,l.a.createElement("p",null," About ",e))},b=function(){var e=Object(m.j)(),t=e.url,a=e.path;return l.a.createElement(n.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"".concat(t,"/firoj")},"Firoj")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"".concat(t,"/offrose")},"Offrose")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"".concat(t,"/sakina")},"Sakina")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"".concat(t,"/saharoj")},"Saharoj"))),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"".concat(a,"/:name")},l.a.createElement(s,null))))},f=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Contact Page"))};function h(){var e=Object(m.g)();return g.isAuthenticated?l.a.createElement(n.Fragment,null,l.a.createElement("p",null,"Welcome to your ProfilePage !"),l.a.createElement("button",{className:"border",onClick:function(){g.signout((function(){return e.push("/")}))}},"Sign out")):l.a.createElement("p",null,"You are not logged in.")}var p=function(){var e=Object(m.g)(),t=(Object(m.h)().state||{from:{pathname:"/"}}).from;return l.a.createElement("div",null,l.a.createElement("p",null,"You must log in to view the page at ",t.pathname),l.a.createElement("button",{className:"border",onClick:function(){g.authenticate((function(){e.replace(t)}))}},"Log in"))},g={isAuthenticated:!1,authenticate:function(e){g.isAuthenticated=!0,e()},signout:function(e){g.isAuthenticated=!1,e()}};function d(e){var t=e.children,a=Object(o.a)(e,["children"]),n=a.location;Object(o.a)(a,["location"]);return l.a.createElement(m.b,Object.assign({},a,{render:function(){return g.isAuthenticated?t:l.a.createElement(m.a,{to:{pathname:"/login",state:{from:n}}})}}))}var j=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"flex justify-around max-width-xl"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/profile"},"Profile")))))};a(29);c.a.render(l.a.createElement((function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement(i.a,null,l.a.createElement(j,{isAuthenticated:a,setIsAuthenticated:r}),l.a.createElement("main",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/"},l.a.createElement(E,null)),l.a.createElement(m.b,{path:"/about"},l.a.createElement(b,null)),l.a.createElement(m.b,{path:"/contact"},l.a.createElement(f,null)),l.a.createElement(d,{path:"/profile"},l.a.createElement(h,null)),l.a.createElement(m.b,{path:"/login"},l.a.createElement(p,null)),l.a.createElement(m.b,{render:function(){return l.a.createElement("h1",null,"404: page not found")}}))))}),null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.40eb3f1b.chunk.js.map