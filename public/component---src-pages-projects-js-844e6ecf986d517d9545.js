(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});a(168);var n=a(0),r=a.n(n),c=a(176),i=a(193);t.default=function(e){var t=e.data,a=e.location,n=t.allContentfulProject.edges;return r.a.createElement("div",null,r.a.createElement(c.a,{path:a.pathname},n.map(function(e,t){return r.a.createElement(i.a,{key:t,type:"project",caption:e.node.name,descr:e.node.cvDescription,link:e.node.projectUrl,repo:e.node.repositoryUrl,img:e.node.logo.file.url,imgTitle:e.node.logo.fileName,date:(a=e.node.publishedDate,new Date(Date.parse(a)).toLocaleString("en-US",{year:"numeric",month:"long"}))});var a})))};var o="3787313817"},166:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(169);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("svg",{className:"clip-svg"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:e.id,clipPathUnits:"objectBoundingBox"},r.a.createElement("polygon",{points:e.points})))),e.children)}},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(167),i=a(178),o=a.n(i),l=a(148),s=a.n(l);t.a=function(e){return r.a.createElement("div",{className:"dark"===e.theme?s.a.date_dark:s.a.date_light},r.a.createElement(c.InlineIcon,{icon:o.a,className:s.a.dateIcon}),r.a.createElement("span",null,e.dateStr))}},172:function(e,t,a){"use strict";a(168);var n=a(0),r=a.n(n),c=a(167),i=a(183),o=a.n(i),l=a(184),s=a.n(l),m=a(185),u=a.n(m),d=a(186),p=a.n(d),h=a(152),f=a.n(h),E={github:o.a,medium:s.a,twitter:u.a,mail:p.a};t.a=function(e){return r.a.createElement("div",{className:f.a.contacts},e.contacts.map(function(t,a){return r.a.createElement("a",{href:t.url,key:a,className:f.a.contact},r.a.createElement(c.InlineIcon,{icon:E[t.name.toLowerCase()],height:e.size,color:e.color}))}))}},173:function(e,t){t.__esModule=!0,t.default={body:'<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" fill="currentColor"/>',width:1024,height:1024}},174:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},175:function(e){e.exports={data:{contentfulAbout:{socialLinks:[{name:"Github",url:"https://github.com/DmitryVdovichencko"},{name:"Medium",url:"https://medium.com/@Dimetrio89"},{name:"Mail",url:"https://emanuelsuriano.typeform.com/to/OeETl6"},{name:"Twitter",url:"https://twitter.com/Dimetrio89"}]}}}},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(149),i=a.n(c),o=a(170),l=a(146),s=a.n(l),m=a(35),u=a.n(m),d=a(7),p=a.n(d),h=a(166),f=a(150),E=a.n(f),_=(a(177),a(151)),v=a.n(_),k=function(e){return r.a.createElement(h.a,{className:v.a.link,to:e.refLink,style:{color:e.color,fontSize:e.size}}," ",e.nameLink," ")},N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a.openMenu=a.openMenu.bind(u()(a)),a}p()(t,e);var a=t.prototype;return a.openMenu=function(e){if(e.currentTarget.classList.contains(E.a.menuButton)||e.currentTarget.classList.contains(E.a.menuButton_close)||e.currentTarget.parentElement.classList.contains(E.a.nav_mobile)){var t=this.state.isOpen;document.body.style.maxHeight=this.state.isOpen?"100vh":"none",document.body.style.overflow=this.state.isOpen?"hidden":"visible",this.setState({isOpen:!t})}},a.componentDidUpdate=function(){document.body.style.maxHeight=this.state.isOpen?"100vh":"none",document.body.style.overflow=this.state.isOpen?"hidden":"visible"},a.render=function(e){return r.a.createElement("div",{className:E.a.menu},r.a.createElement(h.a,{className:E.a.title,to:this.props.header.headerLink},r.a.createElement("h1",null,this.props.header.headerName)),r.a.createElement("nav",{className:this.state.isOpen?E.a.nav_mobile:E.a.nav},r.a.createElement("div",{className:E.a.nav__links,onClick:this.openMenu},this.props.links.map(function(e,t){return r.a.createElement(k,{key:t,refLink:e.refLink,nameLink:e.nameLink})}))),r.a.createElement("div",{className:this.state.isOpen?E.a.menuButton_close:E.a.menuButton,onClick:this.openMenu},r.a.createElement("div",{className:E.a.menuButton__bar}),r.a.createElement("div",{className:E.a.menuButton__bar}),r.a.createElement("div",{className:E.a.menuButton__bar})))},t}(r.a.Component),g=[{nameLink:"main",refLink:"/"},{nameLink:"articles",refLink:"/articles/"},{nameLink:"projects",refLink:"/projects/"},{nameLink:"about",refLink:"/about/"}],y=function(e,t){t.data;return r.a.createElement("header",null,r.a.createElement(N,{header:{headerName:"Dmitry Vdovichencko",headerLink:"/"},links:g}),e.displayBg?r.a.createElement(o.a,{points:"0 1, 0 0, 1 0, 1 0.7",id:"polygon-clip-trapezoid",className:s.a.header__section}):null)},b=a(175),L=a(167),w=a(145),I=a.n(w),j=a(179),B=a.n(j),C=a(180),M=a.n(C),O=a(181),T=a.n(O),S=a(182),q=a.n(S),x=a(172),D=function(e){return r.a.createElement(h.b,{query:"278677862",render:function(e){return r.a.createElement("footer",{className:I.a.footer},r.a.createElement("div",{className:I.a.footer__content},r.a.createElement("p",null," Created with",r.a.createElement(L.InlineIcon,{icon:q.a,className:I.a.footer__icon}),"Contentful",r.a.createElement(L.InlineIcon,{icon:T.a,className:I.a.footer__icon}),"and",r.a.createElement(L.InlineIcon,{icon:B.a,className:I.a.footer__icon}),"Gatsby, hosted on",r.a.createElement(L.InlineIcon,{icon:M.a,className:I.a.footer__icon}),"Netlify"),r.a.createElement(x.a,{contacts:e.contentfulAbout.socialLinks,size:"24px",color:"#8deee7"})))},data:b})};t.a=function(e){return r.a.createElement("div",{className:i.a.layout},r.a.createElement(y,{displayBg:"/"===e.path}),e.children,r.a.createElement(D,{displayBg:"/"===e.path}))}},193:function(e,t,a){"use strict";a(177);var n=a(0),r=a.n(n),c=a(156),i=a.n(c),o=a(147),l=a(167),s=a(173),m=a.n(s),u=a(171);t.a=function(e){if("article"===e.type)return r.a.createElement("div",{className:i.a.content},r.a.createElement("a",{href:"/"+e.link},r.a.createElement("h2",{className:i.a.content__header},e.caption),r.a.createElement("div",{className:i.a.content__descr},r.a.createElement("img",{className:i.a.content__img,src:e.img,alt:e.imgTitle}),r.a.createElement("p",{className:i.a.content__text},e.descr)),r.a.createElement("div",{className:i.a.content__links},r.a.createElement("a",{className:o.project__link,href:"/"+e.link}," Read more... ")),r.a.createElement(u.a,{dateStr:e.date})));if("project"===e.type){var t=e.descr.childMarkdownRemark.html;return r.a.createElement("div",{className:i.a.content},r.a.createElement("h2",{className:i.a.content__header},e.caption),r.a.createElement("div",{className:i.a.content__descr},r.a.createElement("img",{className:i.a.content__img,src:e.img,alt:e.imgTitle}),r.a.createElement("p",{className:i.a.content__text,dangerouslySetInnerHTML:{__html:t}})),r.a.createElement("div",{className:i.a.content__links},r.a.createElement("a",{className:o.project__link,href:e.link}," ",e.caption," "),r.a.createElement("a",{href:e.repo},r.a.createElement(l.InlineIcon,{height:"1.6em",icon:m.a,color:"rgba(89,81,176,1)",className:i.a.content__repo}))),r.a.createElement(u.a,{dateStr:e.date}))}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-844e6ecf986d517d9545.js.map