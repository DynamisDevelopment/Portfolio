(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){e.exports=a(290)},123:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(0),i=a.n(s),r=a(112),l=a.n(r),o=(a(123),a(21)),c=(a(127),a(1)),m=a(114),u=a.n(m)()((function(e){return{isMobile:e.width<650}}))((function(e){var t=e.show,a=e.isMobile,r=[{name:"Services"},{name:"Portfolio"},{name:"Articles"},{name:"About"},{name:"Contact"}],l=Object(s.useState)(!1),o=Object(n.a)(l,2),m=o[0],u=o[1],g=Object(c.d)(r.length,{from:{transform:"translate(10px, -50px)"},to:{transform:"translate(0, 0)"}}),p=Object(c.c)({to:{backgroundColor:t||m?"#fff":"rgba(0,0,0,0)",color:t||m?"black":"#fff"},config:c.b.slow}),d=Object(c.c)({to:{display:m?"flex":"none"}}),h=Object(c.c)({to:{color:t?"rgba(0,0,0,1)":"#fff"}});return Object(s.useEffect)((function(){a||u(!1)})),i.a.createElement(c.a.div,{className:"navbar",style:p},i.a.createElement("a",{href:"https://www.dynamisdevelopment.com/",target:"_blank"},i.a.createElement("img",{src:"../assets/icons/dynamis-logo-white.svg",alt:"Dynamis Development Logo",className:"profile-pic"})),i.a.createElement("img",{src:"../assets/icons/burger.svg",alt:"Navigation Burger",className:"burger",onClick:function(){return u(!m)}}),i.a.createElement(c.a.ul,{className:"links",style:a?d:h},g.map((function(e,t){return i.a.createElement(c.a.a,{href:"#".concat(r[t].name),style:e,key:t,onClick:function(){return u(!m)}},i.a.createElement("li",null,r[t].name))}))))})),g=(a(128),function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"jumbotron-bg"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"title"},"Joshua Hall"),i.a.createElement("div",{className:"subtitle"},"Just another US based, self-taught, full-stack web and app developer trying not to starve to death \xaf\\_\u0f3c \u2022\u0301 \u035c\u0296 \u2022\u0300 \u0f3d_/\xaf."))))}),p=(a(129),a(130),function(e){var t=e.title,a=e.subtitle;return i.a.createElement("div",{className:"SectionTitle"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"line"}),i.a.createElement("h1",null,t),i.a.createElement("div",{className:"line"})),i.a.createElement("div",{className:"subtitle"},a))}),d=(a(131),function(e){return i.a.createElement("div",{className:"skill"},i.a.createElement("div",{className:"icon-bg"},i.a.createElement("img",{src:e.icon,alt:"Skill Icon",className:"icon"})),i.a.createElement("h1",null,e.title),i.a.createElement("div",{className:"shortLine"}),i.a.createElement("div",{className:"text"},e.text))}),h=[{icon:"../assets/icons/development.svg",title:"Web Design",text:"I work with the best designers to create efficient and engaging web experiences with the focus on user and business needs."},{icon:"../assets/icons/development.svg",title:"Web Development",text:"Quick, clean, and maintanable solutions using the latest technology and best practices."},{icon:"../assets/icons/development.svg",title:"Mobile Development",text:"I use Flutter and React Native to create dynamic and scalable apps for Android."},{icon:"../assets/icons/development.svg",title:"Testing and Maintenance",text:"Looking for long-term partnerships to continuously update and improve your site."}],b=function(){return i.a.createElement("div",{className:"bg center",id:"Services"},i.a.createElement(p,{title:"Services",subtitle:"These are just a few things that I can provide, but I'm always open to anything interesting."}),i.a.createElement("div",{className:"skills"},h.map((function(e,t){return i.a.createElement(d,{icon:e.icon,title:e.title,text:e.text,key:t})}))))},f=(a(132),a(133),function(e){var t=e.image,a=e.name;return i.a.createElement("div",{className:"tool"},i.a.createElement("img",{src:t,alt:a}),i.a.createElement("h2",null,a))}),E=[{image:"../assets/icons/react-logo.svg",name:"React"},{image:"../assets/icons/gatsby-logo.svg",name:"Gatsby"},{image:"../assets/icons/flutter-logo.svg",name:"Flutter"},{image:"../assets/icons/mongo-logo.svg",name:"MongoDB"},{image:"../assets/icons/graphql-logo.svg",name:"GraphQL"},{image:"../assets/icons/electron.png",name:"Electron"},{image:"../assets/icons/docker-logo.svg",name:"Docker"}],v=function(){return i.a.createElement("div",{className:"bg"},i.a.createElement(p,{title:"Tech",subtitle:"I can figure out pretty much anything, but these are what I'm the most confident with."}),i.a.createElement("div",{className:"tools"},E.map((function(e,t){return i.a.createElement(f,{image:e.image,name:e.name,key:t})}))))},y=(a(134),a(135),function(e){var t=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},a=Object(c.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),r=Object(n.a)(a,2),l=r[0],o=r[1],m=Object(s.useState)(!1),u=Object(n.a)(m,2),g=u[0],p=u[1],d=Object(c.c)({to:{opacity:g?1:0,backgroundColor:g?"#293347":"rgba(0,0,0,0)"}}),h=Object(c.c)({to:{opacity:g?0:1}});return i.a.createElement(c.a.div,{className:"project",onMouseMove:function(e){var a=e.clientX,n=e.clientY;return o({xys:t(a,n)})},onMouseLeave:function(){return o({xys:[0,0,1]})},style:{transform:l.xys.interpolate((function(e,t,a){return"perspective(3000px) rotateX(".concat(e/2,"deg) rotateY(").concat(t/2,"deg)")}))}},i.a.createElement("div",{onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},onClick:function(){return p(!g)}},g?i.a.createElement(c.a.div,{className:"details",style:d},i.a.createElement("h2",null,e.desc),i.a.createElement("div",{className:"more-links"},e.complete&&i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener"},i.a.createElement("button",{className:"visit-btn"},"Visit Website")),i.a.createElement("a",{href:e.git,className:"github-link",target:"_blank"},i.a.createElement("img",{className:"git-link",src:"./assets/icons/github-logo.svg",alt:"Github logo"}))),i.a.createElement("div",{className:"extras"},e.designBy?i.a.createElement("p",{className:"design-by"},"Design By: ",e.designBy):i.a.createElement("p",null),i.a.createElement("p",null,e.tech.join("/")))):i.a.createElement(c.a.img,{className:"thumnail",src:e.image,alt:e.name,style:h})),!e.complete&&i.a.createElement("p",{className:"not-complete"},"-- Work in Progress --"))}),k=[{image:"../assets/projects/bauwerk.jpg",name:"Bauwerk",desc:"Blog and portfolio site for an architectural design company.",link:"https://bauwerk.netlify.com/",git:"https://github.com/DynamisDevelopment/Bauwerk",designBy:"itimasthemes",tech:["React","Gatsby","Contentful"],complete:!0,id:1},{image:"../assets/projects/happy_paws.jpg",name:"Happy Paws",desc:"Branding page and blog for a pet adoption service.",link:"",git:"https://github.com/DynamisDevelopment/Happy-Paws.git",designBy:"ThemesPlace",tech:["Gatsby","React","Wordpress","WooCommerce"],complete:!1,id:2},{image:"../assets/projects/eren.jpg",name:"Eren",desc:"A fullstack furniture store based on a clean and modern aesthetic.",link:"",git:"",designBy:"Erendesigner",tech:["React","NextJS","GraphQL","Moltin"],complete:!1,id:4}],w=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(c.d)(k.length,{to:{opacity:a?1:0},config:c.b.slow});return i.a.createElement("div",{className:"center",id:"Portfolio"},i.a.createElement(p,{title:"Portfolio",subtitle:"Learning projects I've done in the past and some that I'm currently working on."}),i.a.createElement("div",{className:"responsive-grid"},l.map((function(e,t){return i.a.createElement(c.a.div,{style:e,key:t},i.a.createElement(o.a,{onEnter:function(){a||r(!0)},bottomOffset:"30%"}),i.a.createElement(y,{image:k[t].image,name:k[t].name,desc:k[t].desc,link:k[t].link,git:k[t].link,tech:k[t].tech,designBy:k[t].designBy,complete:k[t].complete,id:k[t].id}))}))))},j=(a(136),a(137),function(e){var t=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},a=Object(c.c)((function(){return{xys:[0,0,1],config:{mass:2,tension:350,friction:40}}})),s=Object(n.a)(a,2),r=s[0],l=s[1];return i.a.createElement(c.a.div,{className:"post",onMouseMove:function(e){var a=e.clientX,n=e.clientY;return l({xys:t(a,n)})},onMouseLeave:function(){return l({xys:[0,0,1]})},style:{transform:r.xys.interpolate((function(e,t,a){return"perspective(2000px) rotateX(".concat(e/1.5,"deg) rotateY(").concat(t/1.5,"deg)")}))}},i.a.createElement("a",{href:e.link,target:"_blanck",rel:"noopener"},i.a.createElement("img",{src:e.thumb,alt:"".concat(e.title," thumbnail")})),i.a.createElement("p",{className:"desc"},e.desc))}),N=[{thumb:"../assets/articles/mutations-min.jpg",title:"Mutations and Subscriptions in GraphQL",desc:"Learn how to set up an advanced GraphQL APIs with Mutations and Subscriptions using the graphql-yoga Node.js library.",link:"https://alligator.io/graphql/mutations-subscriptions/"},{thumb:"../assets/articles/tailwind-min.jpg",title:"Introduction to Tailwind CSS",desc:"Explore Tailwind CSS, a popular utility-based CSS library that's easy to learn, customizable and responsive.",link:"https://alligator.io/css/tailwind-css/"},{thumb:"../assets/articles/react-spring-min.jpg",title:"Intro to Animations in React Using React Spring",desc:"Learn how to create dynamic physics-based animations in your React apps using the react-spring spring-physics animation library.",link:"https://alligator.io/react/intro-to-react-spring/"},{thumb:"../assets/articles/electron-part1-min.jpg",title:"Intro to Electron.js - Part 1: Setup",desc:"Get started using Electron.js to create your own native desktop applications.",link:"https://alligator.io/electron/intro-to-electron-setup/"},{thumb:"../assets/articles/electron-part2-min.jpg",title:"Intro to Electron.js - Part 2: Todo App",desc:"In this post we'll be creating a basic todo list app desktop app for Windows, Mac or Linux using Electron.js.",link:"https://alligator.io/electron/intro-to-electron-todo-app/"},{thumb:"../assets/articles/advanced-spring-min.jpg",title:"Creating Complex Animations in React Using react-spring",desc:"Here's a tutorial where I use react-spring and the help of the useSprings, useTrail and useChain hooks to create complex animations in React.",link:"https://alligator.io/react/advanced-react-spring/"},{thumb:"../assets/articles/flutter-layout-min.jpg",title:"Creating a Basic Layout in Flutter",desc:"In this post we'll briefly look at how to create a basic Flutter app layout in Dart. A great post if you're just getting started with Flutter.",link:"https://alligator.io/flutter/basic-layout/"},{thumb:"../assets/articles/schemas-min.jpg",title:"Schemas and Resolvers in GraphQL",desc:"Learn how to set up a basic GraphQL API with schemas and resolvers using graphql-yoga and nodemon.",link:"https://alligator.io/graphql/schemas-resolvers-graphql/"},{thumb:"../assets/articles/mongoose-min.jpg",title:"CRUD Operations with Mongoose and MongoDB Atlas",desc:"Learn How to Setup a Basic REST Api with Mongoose and the MongoDB Atlas Database.",link:"https://alligator.io/nodejs/crud-operations-mongoose-mongodb-atlas/"},{thumb:"../assets/articles/socketio-min.jpg",title:"Introduction to Socket.IO: Building a Simple Chat App",desc:"In this post you'll learn the fundamentals of the Socket.IO realtime Node.js application framework by building a chat web app.",link:"https://alligator.io/nodejs/intro-to-socketio/"},{thumb:"../assets/articles/pug-min.jpg",title:"An Introduction to the Pug Template Engine for Writing HTML",desc:"Explore the HTML equivalent of what Sass is to CSS with Pug: a clean and simple alternative template engine to write HTML.",link:"https://alligator.io/html/exploring-pug-to-write-html/"},{thumb:"../assets/articles/particles-min.jpg",title:"Create Awesome Background Effects with Particles.js",desc:"Here's how to create stunning, interactive, and customizable particles effects using Particles.js, an incredibly easy to master library.",link:"https://alligator.io/js/background-effects-particlesjs/"}],S=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(c.d)(N.length,{to:{opacity:a?1:0},config:c.b.slow});return i.a.createElement("div",{className:"bg center",id:"Articles"},i.a.createElement(p,{title:"Articles",subtitle:"I am currently a consistent technical writer for Alligator.io"}),i.a.createElement("div",{className:"responsive-grid"},l.map((function(e,t){return i.a.createElement(c.a.div,{style:e,key:t},i.a.createElement(o.a,{onEnter:function(){a||r(!0)},bottomOffset:"30%"}),i.a.createElement(j,{thumb:N[t].thumb,title:N[t].title,desc:N[t].desc,link:N[t].link}))}))),i.a.createElement("a",{href:"https://alligator.io/author/joshua-hall",target:"_blanck"},i.a.createElement("button",{className:"btn"},"See All")))},x=(a(138),function(){return i.a.createElement("div",{id:"About"},i.a.createElement("div",{className:"about"},i.a.createElement(p,{title:"About",subtitle:""}),i.a.createElement("p",null,"I'm currently in the process of building my own agency, Dynamis Development, to start having more oportunities to work with other great developers and designers on more intersting projects."),i.a.createElement("button",{className:"btn"},i.a.createElement("a",{href:"https://www.dynamisdevelopment.com/",target:"_blank"},"See Agency"))))}),O=(a(139),a(59)),M=a.n(O),L=a(22),A=a(27),I=Object(L.c)({mapPropsToValues:function(){return{name:"",email:"",message:""}},validationSchema:A.object().shape({name:A.string().required("A name is required"),email:A.string().email("Please use a valid email").required("An email is required"),message:A.string().min(25,"Message must be more than 25 characters long, be descriptive :)").required("A message is required")}),handleSubmit:function(e,t){var a=t.resetForm;M()({method:"post",url:"/send",data:{name:e.name,email:e.email,message:e.message}}).then((function(e){return a()})).catch((function(e){return console.log(e)}))}})((function(e){var t=e.errors,a=e.touched;return i.a.createElement("div",null,i.a.createElement(L.b,{className:"contact-form"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement(L.a,{type:"text",name:"name",placeholder:"Name",required:!0}),a.name&&t.name&&i.a.createElement("p",{className:"error"},t.name),i.a.createElement("label",{htmlFor:"name"},"Email"),i.a.createElement(L.a,{type:"email",name:"email",placeholder:"Email",required:!0}),a.name&&t.email&&i.a.createElement("p",{className:"error"},t.email),i.a.createElement("label",{htmlFor:"name"},"Message"),i.a.createElement(L.a,{component:"textarea",name:"message",placeholder:"Message"}),a.message&&t.message&&i.a.createElement("p",{className:"error"},t.message),i.a.createElement("button",{type:"submit",className:"btn"},"Submit")))})),C=function(){return i.a.createElement("div",{className:"contact",id:"Contact"},i.a.createElement(p,{title:"Contact",subtitle:"Got something interesting?"}),i.a.createElement(I,null),i.a.createElement("div",{className:"social"},i.a.createElement("a",{href:"https://www.linkedin.com/in/joshua-hall-51b182185/",className:"circle",target:"_blanck"},i.a.createElement("img",{src:"../assets/icons/linkedin-logo.svg",alt:"Linkedin Logo"})),i.a.createElement("a",{href:"https://www.upwork.com/o/profiles/users/_~013e4465c7ba054054/",className:"circle",target:"_blanck"},i.a.createElement("img",{src:"../assets/icons/upwork-logo.svg",alt:"Upwork Logo"})),i.a.createElement("a",{href:"https://codepen.io/dynamisdevelopment",className:"circle",target:"_blanck"},i.a.createElement("img",{src:"../assets/icons/codepen-logo.svg",alt:"Codepen Logo"})),i.a.createElement("a",{href:"https://github.com/DynamisDevelopment",className:"circle",target:"_blanck"},i.a.createElement("img",{src:"../assets/icons/github-logo.svg",alt:"Github Logo"}))),i.a.createElement("div",{className:"copyright"},"Made by yours truly \xa9 ",(new Date).getFullYear()))};l.a.render(i.a.createElement((function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1];return i.a.createElement("div",null,i.a.createElement(g,null),i.a.createElement(u,{show:a}),i.a.createElement(o.a,{onEnter:function(){return r(!a)},bottomOffset:"80%"}),i.a.createElement(b,null),i.a.createElement(v,null),i.a.createElement(w,null),i.a.createElement(S,null),i.a.createElement(x,null),i.a.createElement(C,null))}),null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.ddb8d8fa.chunk.js.map