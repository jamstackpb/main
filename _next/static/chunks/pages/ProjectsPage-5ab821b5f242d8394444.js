(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[225],{4349:function(i,e,t){"use strict";t.d(e,{A:function(){return n.A}});var n=t(6632)},1250:function(i,e,t){"use strict";t.r(e),t.d(e,{default:function(){return z}});var n=t(5893),r=t(4349),a=t(5153),o=t(2467),s=t(7261),u=t(7294),m=t(5772),c=t(4648),l=t(917);function p(){var i=(0,s.Z)(["\n    &.arrow {\n        cursor: pointer;\n        height: 100%;\n        width: 100%;\n        left: 70%;\n        position: absolute;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: transform 0.1s;\n    }\n    & .arrow-top,\n    .arrow-bottom {\n        background-color: #6e62d8;\n        height: 4px;\n        position: absolute;\n        top: 50%;\n        width: 65%;\n    }\n    & .arrow-top:after,\n    & .arrow-bottom:after {\n        background-color: ",";\n        content: '';\n        height: 100%;\n        position: absolute;\n        top: 0;\n        transition: all 0.15s;\n    }\n    & .arrow-top.left {\n        transform-origin: left;\n\n        transform: rotate(45deg);\n\n        top: 43%;\n    }\n    & .arrow-top.right {\n        transform-origin: right;\n\n        transform: rotate(45deg);\n\n        top: 49%;\n    }\n    & .arrow-top:after {\n        left: 100%;\n        right: 0;\n        transition-delay: 0.15s;\n    }\n    & .arrow-bottom.left {\n        transform-origin: left;\n        transform: rotate(-45deg);\n        top: 51%;\n    }\n    & .arrow-bottom.right {\n        transform-origin: right;\n        transform: rotate(-45deg);\n        top: 45%;\n    }\n\n    & .arrow-bottom:after {\n        left: 0;\n        right: 100%;\n        transition-delay: 0s;\n    }\n    &.arrow:hover .arrow-top.right:after {\n        left: 0;\n        transition-delay: 0.15s;\n    }\n    &.arrow:hover .arrow-top.left:after {\n        left: 0;\n        transition-delay: 0s;\n    }\n    &.arrow:hover .arrow-bottom.right:after {\n        right: 0;\n        transition-delay: 0s;\n    }\n    &.arrow:hover .arrow-bottom.left:after {\n        right: 0;\n        transition-delay: 0.15s;\n    }\n\n    &.arrow.right:active {\n        transform: translateX(-40%) translateY(-50%);\n    }\n    &.arrow.left:active {\n        transform: translateX(-60%) translateY(-50%);\n    }\n"]);return p=function(){return i},i}function d(){var i=(0,s.Z)(["\n    font-size: 1.5rem;\n    font-weight: 500;\n    color: ",";\n"]);return d=function(){return i},i}function f(){var i=(0,s.Z)(["\n    padding-top: 5vh;\n    display: flex;\n    flex-direction: column;\n    padding-left: 25%;\n"]);return f=function(){return i},i}function g(){var i=(0,s.Z)(["\n    background-image: url(",");\n    height: 40vh;\n    width: 100%;\n    background-position: center;\n"]);return g=function(){return i},i}function h(){var i=(0,s.Z)(["\n    transition: 0.5s;\n    width: 6vh;\n    height: 6vh;\n    border: 2px solid ",";\n    position: relative;\n    margin-right: 1vh;\n    display: flex;\n    text-transform: uppercase;\n    cursor: pointer;\n    transform-origin: right center;\n\n    &:hover {\n        border-color: ",";\n    }\n"]);return h=function(){return i},i}function v(){var i=(0,s.Z)(["\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]);return v=function(){return i},i}function q(){var i=(0,s.Z)(["\n    width: 50%;\n    height: 15vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    font-size: 3rem;\n"]);return q=function(){return i},i}function b(){var i=(0,s.Z)(["\n    display: flex;\n    padding: 0 20% 5% 25%;\n    width: 100%;\n"]);return b=function(){return i},i}function x(){var i=(0,s.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 5vh 10vh;\n    background-color: #eeeef176;\n"]);return x=function(){return i},i}function j(){var i=(0,s.Z)(["\n                  font-size: 1.5rem;\n              "]);return j=function(){return i},i}function w(){var i=(0,s.Z)(["\n                  font-size: 4rem;\n                  align-self: flex-start;\n              "]);return w=function(){return i},i}function Z(){var i=(0,s.Z)(["\n                  font-size: 2rem;\n                  text-transform: uppercase;\n                  font-weight: 700;\n                  align-self: flex-start;\n                  margin-top: auto;\n              "]);return Z=function(){return i},i}function k(){var i=(0,s.Z)(["\n    color: ",";\n    font-weight: 900;\n    ",";\n"]);return k=function(){return i},i}var _=c.Z.div(k(),m.O.nav_color,(function(i){var e=i.whichTitle;return"subTitle"===e?(0,l.iv)(Z()):"h1"===e?(0,l.iv)(w()):"h2"===e?(0,l.iv)(j()):null})),L=c.Z.section(x()),T=c.Z.div(b()),y=c.Z.div(q()),N=c.Z.div(v()),P=c.Z.div(h(),m.O.nav_color,m.O.nav_color),O=c.Z.div(g(),(function(i){return i.imgUrl})),A=c.Z.div(f()),C=c.Z.div(d(),m.O.footer_text),E=c.Z.div(p(),m.O.nav_color),U=function(i){var e=i.projects,t=(0,u.useState)(0),r=t[0],a=t[1];return(0,n.jsxs)(L,{children:[(0,n.jsxs)(T,{children:[(0,n.jsxs)(y,{children:[(0,n.jsx)(_,{whichTitle:"subTitle",children:e[r].subTitle}),(0,n.jsx)(_,{whichTitle:"h1",children:e[r].h1})]}),(0,n.jsxs)(N,{children:[(0,n.jsx)(P,{children:(0,n.jsxs)(E,{className:"arrow left",onClick:function(){a(0==r?e.length-1:r-1)},children:[(0,n.jsx)("div",{className:"arrow-top left"}),(0,n.jsx)("div",{className:"arrow-bottom left"})]})}),(0,n.jsx)(P,{children:(0,n.jsxs)(E,{className:"arrow right",onClick:function(){r==e.length-1?a(0):a(r+1)},children:[(0,n.jsx)("div",{className:"arrow-top right"}),(0,n.jsx)("div",{className:"arrow-bottom right"})]})})]})]}),(0,n.jsx)(O,{imgUrl:e[r].imageUrl}),(0,n.jsxs)(A,{children:[(0,n.jsx)(_,{whichTitle:"h2",children:e[r].h2}),(0,n.jsx)(C,{children:e[r].description})]})]})},S=[{subTitle:"Projekt 1",h1:"Lorem ipsum dolor sit amet.",h2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?",imageUrl:"/_next/static/image/public/images/ProjectsSiteImgs/projekt1.c25a6ebbe260d7cf16f93b4ee65ec286.png",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea recusandae pariatur, aperiam, iure error corporis placeat vel at laborum, laudantium similique temporibus optio officia exercitationem atque neque repellat quia maiores. Molestiae est, quasi corporis nostrum iure exercitationem vero quod voluptatibus voluptas fugiat accusantium culpa pariatur quisquam? Neque impedit, officia corrupti commodi eligendi sed atque perspiciatis, magni repellendus debitis nemo sapiente repellat eaque asperiores odio temporibus amet iure quia, mollitia expedita? Reprehenderit harum molestias iure mollitia. Dignissimos aliquam dicta natus officia quisquam magnam molestiae eligendi voluptatum facere minus ducimus perferendis, nostrum laboriosam excepturi voluptatem sit ratione ea culpa maiores mollitia, impedit vero! Neque, ipsa voluptatibus. Nesciunt magnam porro at voluptatibus veritatis repellendus, minima quisquam rerum accusantium, quidem assumenda, quaerat ullam eaque? Magni esse ex quod at dignissimos et! Aliquam cumque dignissimos perspiciatis animi consequatur at. Labore officiis voluptatum ratione iusto suscipit ut odio recusandae quasi veritatis beatae accusamus, exercitationem accusantium corrupti nostrum quisquam aspernatur libero laborum laudantium ex minima blanditiis aliquam quod? Saepe quod temporibus facere cum officiis magni labore fuga nostrum veniam maiores, corporis, odit harum accusantium. Velit rerum aperiam omnis aliquam ipsa repudiandae consequuntur aspernatur maxime laboriosam necessitatibus harum illo fugiat perferendis itaque saepe sint, ratione et totam deleniti. Corrupti minima quos blanditiis amet, numquam nisi, incidunt dolorum reprehenderit perspiciatis tempora excepturi! A recusandae totam saepe, quia perferendis quae accusamus consectetur aliquam, nisi assumenda corporis! Commodi, modi possimus non a incidunt placeat expedita quaerat nisi cupiditate quia quae, necessitatibus optio sunt nihil amet quisquam delectus. Repellendus porro necessitatibus eum voluptate! Eveniet eaque sint repellat veniam iste corrupti velit, ut maiores, dolorem dignissimos, tempore itaque magnam sunt! Ab doloribus in tenetur debitis dolor, veritatis nostrum excepturi ipsam. Ut dolor libero iste possimus veritatis. Odit, facilis ad provident dignissimos nihil adipisci earum corporis cumque! Consectetur nulla molestiae iste vitae explicabo quibusdam recusandae nemo iusto minima molestias, inventore exercitationem voluptates placeat aut at a excepturi quae corporis rem rerum. At excepturi quae blanditiis repudiandae fugit non nostrum magni, quo labore ex delectus dolorum quia est nemo rem quaerat aliquam molestiae recusandae animi pariatur quos, sed quisquam? Quae ex vitae unde voluptatem optio commodi consectetur facere quam fugit? Earum ea sit corporis odio fugit, quod officia voluptate ullam mollitia impedit eum temporibus accusantium totam vel incidunt? Nostrum laboriosam, voluptatibus in, impedit deserunt quaerat vero facere est obcaecati quasi aperiam! Enim molestiae necessitatibus laboriosam iure illum ea, vel aspernatur quibusdam omnis vitae velit fugit odit natus magni quaerat ducimus nisi quia perferendis aut amet temporibus. Deleniti explicabo culpa consectetur quidem eum labore dolore laudantium quibusdam tenetur delectus iste, adipisci atque ipsum fuga enim excepturi numquam ratione vero porro temporibus impedit hic doloremque! Corrupti nobis porro quia deleniti illum nesciunt labore qui recusandae ipsam, tempora expedita cum voluptas quo ipsum itaque sit consequuntur natus eum earum omnis reprehenderit sed. Molestias saepe officia beatae totam magni assumenda facere, vel eligendi. Tempora impedit fuga praesentium perferendis corporis ipsa vitae excepturi sequi suscipit dolore vel, aliquid hic reiciendis dolorum itaque! Delectus possimus quos voluptatem inventore, dolorem ipsam?"},{subTitle:"Projekt 2",h1:"Lorem ipsum dolor sit amet.",h2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?",imageUrl:"/_next/static/image/public/images/ProjectsSiteImgs/projekt2.61ee0d62c948e11508256fa1d968a10f.jpg",description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique numquam unde? Distinctio nemo dignissimos tempore, ipsum error ea est, dicta quis cum incidunt veniam molestiae totam illum, beatae culpa deleniti. Nihil dolorum in hic provident. Molestias quam qui deserunt!"},{subTitle:"Projekt 3",h1:"Lorem ipsum dolor sit amet consectetur.",h2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?",imageUrl:"/_next/static/image/public/images/ProjectsSiteImgs/projekt3.8ee16d947dad7695aac17672d7221e7c.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit itaque at quae nihil officiis fugit placeat optio, facilis ratione enim quia blanditiis rem mollitia rerum assumenda sapiente repudiandae numquam temporibus tempore maxime vero consequatur! Animi, asperiores! Eligendi ratione, explicabo sed itaque sapiente corporis minima!"},{subTitle:"Projekt 4",h1:"Lorem ipsum dolor si.",h2:"Lorem ipsum dolor sit amet consectetur . Officiis, totam?",imageUrl:"/_next/static/image/public/images/ProjectsSiteImgs/projekt4.9f50650294650a5f86409aeae98103fd.jpg",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas, officia error officiis temporibus unde, corporis voluptas fugiat sit saepe, exercitationem eaque magnam facere praesentium non ea alias aperiam illum?"},{subTitle:"Projekt 5",h1:"Lorem amet consectetur adipisicing elit.",h2:"Lorem ipsum dolor sit amet consectetur adipisicing elit totam?",imageUrl:"/_next/static/image/public/images/ProjectsSiteImgs/projekt5.7686593d9cd4d41f528db92b4ceb3309.png",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas, officia error officiis temporibus unde, corporis voluptas fugiat sit saepe, exercitationem eaque magnam facere praesentium non ea alias aperiam illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur cupiditate nam non et officiis ut reiciendis quaerat a dicta dolore."}],z=function(){return(0,n.jsxs)(r.A,{pageTitle:"Projects",children:[(0,n.jsx)(a.h,{isHomepage:!1}),(0,n.jsx)(U,{projects:S}),(0,n.jsx)(o.y,{children:(0,n.jsx)("p",{children:"All rights reserved \xa9 JAMstack PB 2021"})})]})}},129:function(i,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ProjectsPage",function(){return t(1250)}])}},function(i){i.O(0,[257,632,774,888,179],(function(){return e=129,i(i.s=e);var e}));var e=i.O();_N_E=e}]);