(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s={app:0},i=[];function c(t){return r.p+"js/"+({form:"form",layout:"layout"}[t]||t)+"."+{"chunk-067c7bca":"520a7044","chunk-2d0e5e97":"2100db71","chunk-7259c503":"3114a0dc",form:"54a3d275",layout:"39588c14"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a={"chunk-7259c503":1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({form:"form",layout:"layout"}[t]||t)+"."+{"chunk-067c7bca":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-7259c503":"11b6d7e8",form:"31d6cfe0",layout:"31d6cfe0"}[t]+".css",s=r.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),a(i)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"49fa":function(t,e,a){"use strict";var n=a("9750"),o=a.n(n);e["default"]=o.a},5566:function(t,e,a){"use strict";a("99af"),a("d3b7");var n=a("2909"),o=[{path:"/developguide",component:function(){return a.e("chunk-7259c503").then(a.bind(null,"c967"))},name:"developguide",meta:{name:"开发指南",isMenu:!0},children:[{path:"ReadMe",name:"ReadMe",component:function(){return a.e("layout").then(a.bind(null,"8a35"))},meta:{name:"指南",isMenu:!0}}]}],s=o,i=function(){return a.e("chunk-7259c503").then(a.bind(null,"c967"))},c=[{path:"/form",name:"form",component:i,meta:{name:"表单组件",icon:"",isMenu:!0},children:[{path:"/form/sswitch",name:"SSwitch",component:function(){return a.e("form").then(a.bind(null,"bdd2"))},meta:{name:"SSwitch 开关",isMenu:!0}}]}],r=c,l=function(){return a.e("chunk-7259c503").then(a.bind(null,"c967"))},u=[{path:"/layout",name:"layout",component:l,meta:{name:"框架布局",isMenu:!0},children:[{path:"/layout/sidebar",name:"SideBar",component:function(){return a.e("layout").then(a.bind(null,"00d3"))},meta:{name:"SideBar 侧边导航栏",isMenu:!0}},{path:"/layout/tabsbar",name:"TabsBar",component:function(){return a.e("layout").then(a.bind(null,"117b"))},meta:{name:"TabsBar 顶部页签栏",isMenu:!0}},{path:"/layout/titlebar",name:"TitleBar",component:function(){return a.e("layout").then(a.bind(null,"7524"))},meta:{name:"TitleBar 页面顶部标签",isMenu:!0}}]}],d=u,p=[{path:"/",component:function(){return a.e("chunk-067c7bca").then(a.bind(null,"bb51"))},meta:{name:"首页",isMenu:!1}}].concat(Object(n["a"])(s),Object(n["a"])(r),Object(n["a"])(d),[{path:"*",name:"NotFound",component:function(){return a.e("chunk-2d0e5e97").then(a.bind(null,"9703"))},meta:{isMenu:!1}}]);e["a"]=p},9750:function(t,e,a){t.exports={wrapper:"DemoBlock_wrapper_1ntk3",view:"DemoBlock_view_27zvo",btn:"DemoBlock_btn_gz1Sc",code:"DemoBlock_code_3mWei"}},b20f:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"app"}},[a("layout-container",{attrs:{"is-custom":!0}},[a("side-bar",{attrs:{slot:"sidebar",color:"#E90",menus:t.routes,"is-custom":!0,active:t.activeRoute},on:{route:t.sideRoute,open:t.handleSideBarOpen},slot:"sidebar"}),a("TabsBar",{attrs:{slot:"tabsbar",home:!1,menus:t.tabsRoutes,keep:t.keepTab,active:t.activeRoute},on:{close:t.closeTab},slot:"tabsbar"}),a("router-view",{staticClass:"demo__wrap"})],1)],1)},s=[],i=(a("99af"),a("4de4"),a("7db0"),a("c740"),a("a434"),a("b0c0"),a("2909")),c=a("d4ec"),r=a("bee2"),l=a("262e"),u=a("2caf"),d=a("9ab4"),p=a("2fe1"),h=a("60a3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sync-LayoutContainer__wrapper"},[a("div",{staticClass:"sync-LayoutContainer__content"},[t.isSideBar?a("div",{staticClass:"sync-LayoutContainer__content__aside"},[t._t("sidebar")],2):t._e(),a("div",{staticClass:"sync-LayoutContainer_content__content"},[t.isTabsBar?a("div",{staticClass:"sync-LayoutContainer_content__tabsbar"},[t._t("tabsbar")],2):t._e(),t.isCustom?t._t("default"):t._e(),t.isCustom?t._e():a("router-view")],2)])])},b=[],m=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);Object(d["a"])([Object(h["c"])({default:!0})],m.prototype,"isHeader",void 0),Object(d["a"])([Object(h["c"])({default:!0})],m.prototype,"isTabsBar",void 0),Object(d["a"])([Object(h["c"])({default:!0})],m.prototype,"isSideBar",void 0),Object(d["a"])([Object(h["c"])({default:!1})],m.prototype,"isCustom",void 0),m=Object(d["a"])([p["b"]],m);var v=m,_=v,y=a("2877"),O=Object(y["a"])(_,f,b,!1,null,null,null),j=O.exports;j.install=function(t){t.component("LayoutContainer",j)};var k=j,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"sidebar__container"},[a("div",{staticClass:"collapse__btn",class:{collapse:t.collapse},on:{click:t.toggleCollapse}},[a("b",{style:{backgroundColor:t.color}}),a("span",{staticClass:"l"}),a("span",{staticClass:"r"})]),a("el-scrollbar",{staticClass:"sidebar__scrollbar"},[a("el-menu",{staticClass:"menus",attrs:{mode:"vertical","background-color":"#393A40","active-text-color":"#FFF","text-color":"#FFF",collapse:t.collapse,"unique-opened":!0,router:!1,"default-openeds":t.defaultOpeneds},on:{open:t.open,close:t.close,select:t.select}},[t._l(t.menus,(function(e){return[e.meta.isMenu&&!e.meta.onlyOne&&e.children?a("el-submenu",{key:e.name,attrs:{index:e.path,"show-timeout":100,"hide-timeout":100}},[a("template",{slot:"title"},[e.meta.icon?a("i",{staticClass:"iconfont",class:e.meta.icon,style:{color:0===t.active.path.indexOf(e.path)?t.color:"#909399"}}):t._e(),e.meta.icon?t._e():a("i",{staticClass:"icon",style:{borderColor:0===t.active.path.indexOf(e.path)?t.color:"#909399"}}),a("span",[t._v(" "+t._s(e.meta.name)+" ")])]),t._l(e.children,(function(e){return[e.meta&&e.meta.isMenu?a("el-menu-item",{key:e.name,class:{active:0===t.active.path.indexOf(e.path)},attrs:{index:e.path},on:{click:function(a){return t.link(e)}}},[t._v(" "+t._s(e.meta.name)+" ")]):t._e()]}))],2):t._e(),e.meta.isMenu&&!e.children||e.meta.onlyOne?a("el-menu-item",{key:e.name,class:{active:0===t.active.path.indexOf(e.path)},attrs:{index:e.path},on:{click:function(a){return t.link(e)}}},[e.meta.icon?a("i",{staticClass:"iconfont",class:e.meta.icon,style:{color:0===t.active.path.indexOf(e.path)?t.color:"#909399"}}):t._e(),e.meta.icon?t._e():a("i",{staticClass:"icon",style:{borderColor:0===t.active.path.indexOf(e.path)?t.color:"#909399"}}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.name))])]):t._e()]}))],2)],1)],1)},C=[],w=a("14e9"),B=a.n(w),S=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.collapse=!1,t}return Object(r["a"])(a,[{key:"route",value:function(t){return t}},{key:"open",value:function(t,e){return{index:t,path:e}}},{key:"close",value:function(t,e){return{index:t,path:e}}},{key:"select",value:function(t,e){return{index:t,path:e}}},{key:"toggleCollapse",value:function(){this.collapse=!this.collapse}},{key:"link",value:function(t){return this.isCustom?this.route(t):(t.name?this.$router.push({name:t.name}):this.$router.push({path:t.path}),"")}},{key:"defaultOpeneds",get:function(){var t=this,e=this.menus.find((function(e){return!!e.children&&!!e.children.find((function(e){return t.active.name===e.name}))}))||{path:"/"};return[e.path||"/"]}}]),a}(n["default"]);Object(d["a"])([Object(h["c"])({default:"#FF6551"})],S.prototype,"color",void 0),Object(d["a"])([Object(h["c"])({default:function(){return[]},required:!0})],S.prototype,"menus",void 0),Object(d["a"])([Object(h["c"])()],S.prototype,"active",void 0),Object(d["a"])([Object(h["c"])({default:!1})],S.prototype,"isCustom",void 0),Object(d["a"])([Object(h["b"])()],S.prototype,"route",null),Object(d["a"])([Object(h["b"])()],S.prototype,"open",null),Object(d["a"])([Object(h["b"])()],S.prototype,"close",null),Object(d["a"])([Object(h["b"])()],S.prototype,"select",null),S=Object(d["a"])([Object(p["b"])({components:{elScrollbar:B.a}})],S);var T=S,x=T,R=Object(y["a"])(x,g,C,!1,null,null,null),$=R.exports;$.install=function(t){t.component("SideBar",$)};var E=$,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sync-tabsBar"},[a("div",{staticClass:"sync-tabsBar__wrapper"},[t.isSlide?a("div",{staticClass:"sync-tabsBar__slide sync-tabsBar__slide--prev",on:{click:function(e){return t.slide("prev")}}},[t._m(0)]):t._e(),a("div",{staticClass:"sync-tabsBar__container",attrs:{id:"TB__Container"}},[a("div",{staticClass:"sync-tabsBar__items",style:{transform:"translateX(-"+t.navOffset+"px)"},attrs:{id:"TB__Items"}},[t.home&&!t.keep?a("span",{class:["sync-tabsBar__item sync-tabsBar__item_no--close",t.home===t.active.path?"sync-tabsBar__item-active":""]},[a("router-link",{attrs:{id:[t.home===t.active.path?"TB__Active":""],to:t.home}},[t._v(" "+t._s(t.homeText||"首页")+" ")])],1):t._e(),t._l(t.menus,(function(e,n){return[e.meta.isMenu?a("span",{key:n+e.name,class:["sync-tabsBar__item",t.keep===e.name?"sync-tabsBar__close":"",t.active.name&&t.active.name.replace("3","")===e.name.replace("3","")?"sync-tabsBar__item-active":""]},[a("router-link",{attrs:{id:[t.active.name&&t.active.name.replace("3","")===e.name.replace("3","")?"TB__Active":""],to:e.path}},[t._v(" "+t._s(e.meta.name)+" ")]),t.keep!==e.name?a("i",{staticClass:"sync-tabsBar__close",on:{click:function(e){return t.close("current",n)}}},[t._v("×")]):t._e()],1):t._e()]}))],2)]),t.isSlide?a("div",{staticClass:"sync-tabsBar__slide sync-tabsBar__slide--next",on:{click:function(e){return t.slide("next")}}},[t._m(1)]):t._e()]),a("div",{staticClass:"sync-tabsBar__opts"},[a("el-dropdown",{staticClass:"sync-tabsBar__opts__layout",attrs:{trigger:"click"},on:{"visible-change":t.handleOptsBackGround,command:t.handleDropdownItemClick}},[a("div",{class:["sync-tabsBar__opts__arrow",t.isShowOpts?"sync-tabsBar__opts__arrow--show":""]},[a("span")]),a("el-dropdown-menu",{staticClass:"sync-tabsBar__opts__dropdown__menu",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"others"}},[t._v(" 关闭当前页面以外 ")]),a("el-dropdown-item",{attrs:{command:"all"}},[t._v(" 关闭所有页面 ")])],1)],1)],1)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"sync-tabsBar__slide_left"}),a("i",{staticClass:"sync-tabsBar__slide_right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"sync-tabsBar__slide_left"}),a("i",{staticClass:"sync-tabsBar__slide_right"})])}],L=a("2ef0"),N=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isSlide=!1,t.isShowOpts=!1,t.navOffset=0,t}return Object(r["a"])(a,[{key:"close",value:function(t,e){return this.detectSlide(),{command:t,index:e}}},{key:"activeChange",value:function(t){var e=this;this.detectSlide(),setTimeout((function(){e.scrollToActiveTab()}),300)}},{key:"slideChange",value:function(t){var e=this;setTimeout((function(){e.scrollToActiveTab()}),300)}},{key:"detectSlide",value:function(){var t=this;setTimeout((function(){var e=t.isSlide,a=t.tabsEleWidthLeft(),n=a.container,o=a.items;t.isSlide=o.width>n.width,e&&!t.isSlide&&t.slide("prev")}),50)}},{key:"scrollToActiveTab",value:function(){if(this.slide){var t=document.querySelector("#TB__Container"),e=document.querySelector("#TB__Items"),a=document.querySelector("#TB__Active");if(a){var n=a.getBoundingClientRect(),o=t.getBoundingClientRect(),s=e.offsetWidth-o.width,i=this.navOffset,c=i;n.left-70<o.left&&(c=i-(o.left-n.left)-70),n.right+70>o.right&&(c=i+n.right-o.right+70),c=Math.max(c,0),this.navOffset=Math.min(c,s)}}}},{key:"slide",value:function(t){var e=document.querySelector("#TB__Items"),a=document.querySelector("#TB__Container").clientWidth,n=e.clientWidth;switch(t){case"prev":this.navOffset=0;break;case"next":this.navOffset=n-a;break;default:break}}},{key:"tabsEleWidthLeft",value:function(){var t=document.querySelector("#TB__Items"),e=t?t.clientWidth:0,a=document.querySelector("#TB__Container"),n=a?a.clientWidth:0;return{container:{ele:a,width:n},items:{ele:t,width:e}}}},{key:"handleOptsBackGround",value:function(t){this.isShowOpts=t}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.detectSlide(),window.addEventListener("resize",Object(L["throttle"])((function(){t.detectSlide(),t.scrollToActiveTab()}),500)),document.addEventListener("transitionend",(function(e){"width"===e.propertyName&&(t.detectSlide(),t.scrollToActiveTab())}))}))}},{key:"handleDropdownItemClick",value:function(t){var e=this;switch(t){case"others":this.close("others",this.menus.findIndex((function(t){return t.path===e.active.path})));break;case"all":this.close("all");break;default:break}}}]),a}(n["default"]);Object(d["a"])([Object(h["c"])({default:"/"})],N.prototype,"home",void 0),Object(d["a"])([Object(h["c"])({default:""})],N.prototype,"homeText",void 0),Object(d["a"])([Object(h["c"])({default:""})],N.prototype,"keep",void 0),Object(d["a"])([Object(h["c"])({default:function(){return[]}})],N.prototype,"menus",void 0),Object(d["a"])([Object(h["c"])()],N.prototype,"active",void 0),Object(d["a"])([Object(h["b"])()],N.prototype,"close",null),Object(d["a"])([Object(h["e"])("active",{immediate:!0})],N.prototype,"activeChange",null),Object(d["a"])([Object(h["e"])("isSlide",{immediate:!0})],N.prototype,"slideChange",null),N=Object(d["a"])([p["b"]],N);var P=N,q=P,D=Object(y["a"])(q,M,A,!1,null,null,null),F=D.exports;F.install=function(t){t.component("TabsBar",F)};var I=F,J=a("5566"),W=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isShowInterActive=!0,t.unread=89,t.appLink="#",t.showDialog=!1,t.headerData={system:{name:"这是系统名字"},company:{name:"这是品牌名称"},user:{name:"这是用户名",pic:"http://img2.imgtn.bdimg.com/it/u=3377302992,3361149372&fm=26&gp=0.jpg"}},t.keepTab=J["a"][1].children[0].name,t.routes=[],t.tabsRoutes=localStorage.tabsRoutes&&JSON.parse(localStorage.tabsRoutes)||[],t.activeRoute={path:"/",fullPath:"/",name:"Index",hash:"",params:{},query:{}},t}return Object(r["a"])(a,[{key:"langChange",value:function(){sessionStorage.lang="en"===sessionStorage.lang?"zhCN":"en",this.$router.go(0)}},{key:"$routeChange",value:function(t,e){var a=this,n=t.name,o=t.path,s=t.meta,c=t.hash,r=t.query,l=t.params,u=t.fullPath;t.matched;this.activeRoute={name:n,path:o,meta:s,hash:c,query:r,params:l,fullPath:u};var d=this.tabsRoutes.find((function(t){return t.path===a.activeRoute.path}));return"/"===this.activeRoute.path&&this.keepTab?this.$router.push({name:this.keepTab}):(d||"/"===this.activeRoute.path||(this.tabsRoutes.push(this.activeRoute),localStorage.tabsRoutes=JSON.stringify(Object(i["a"])(this.tabsRoutes))),"")}},{key:"closeTab",value:function(t){var e=this,a=t.command,n=t.index,o=this.tabsRoutes.filter((function(t){return t.name===e.keepTab}));switch(a){case"current":var s=n,c=(this.tabsRoutes[s],this.tabsRoutes.findIndex((function(t){return t.path===e.activeRoute.path})));s===c&&this.$router.push({path:this.tabsRoutes[s?s-1:s+1].path}),this.tabsRoutes.splice(s,1),localStorage.tabsRoutes=JSON.stringify(Object(i["a"])(this.tabsRoutes));break;case"others":this.tabsRoutes=this.tabsRoutes.splice(n,1),localStorage.tabsRoutes=JSON.stringify([].concat(Object(i["a"])(o),Object(i["a"])(this.tabsRoutes)));break;case"all":this.tabsRoutes=Object(i["a"])(o),localStorage.tabsRoutes=JSON.stringify(Object(i["a"])(this.tabsRoutes)),this.$router.push({path:"/"});break;default:break}}},{key:"handleSideBarOpen",value:function(t){console.log(t)}},{key:"sideRoute",value:function(t){t.name?this.$router.push({name:t.name}):this.$router.push({path:t.path})}},{key:"created",value:function(){this.routes=JSON.parse(JSON.stringify(J["a"]))}},{key:"handleItemClick",value:function(t){console.log("1",t),this.showDialog=!0}},{key:"handleDialogClose",value:function(){this.showDialog=!1}}],[{key:"handlePrev",value:function(){console.log("prev")}},{key:"handleNext",value:function(){console.log("next")}}]),a}(n["default"]);Object(d["a"])([Object(h["e"])("$route",{immediate:!0,deep:!0})],W.prototype,"$routeChange",null),W=Object(d["a"])([Object(p["b"])({components:{LayoutContainer:k,SideBar:E,TabsBar:I}})],W);var z=W,G=z,H=Object(y["a"])(G,o,s,!1,null,null,null),V=H.exports,K=a("8c4f");n["default"].use(K["a"]);var U=new K["a"]({mode:"hash",base:"./",routes:J["a"]}),X=U,Q=a("2f62");n["default"].use(Q["a"]);var Y=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sync-titleBar",style:"border-color: "+t.color},[a("div",{ref:"tabsBar",staticClass:"sync-titleBar__tabs"},[t._l(t.tabs,(function(e,n){return a("div",{key:n,staticClass:"item",class:["sync-titleBar__tabs_item",n===t.active?"sync-titleBar__tabs_item-active":""],on:{click:function(e){return t.tab(n)}}},[t._v(" "+t._s(e)+" ")])})),a("div",{ref:"tabsArrow",staticClass:"sync-titleBar__tabs__arrow",style:"color: "+t.color})],2),a("div",{staticClass:"sync-titleBar__opts"},[t._t("opts")],2)])}),tt=[],et=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"choose",value:function(t){return t}},{key:"tab",value:function(t){var e=this.$refs.tabsBar.querySelectorAll(".item")[t],a=this.$refs.tabsArrow;a.style.width="".concat(e.clientWidth,"px"),a.style.left="".concat(e.offsetLeft,"px"),this.choose(t)}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.tab(0)}))}}]),a}(n["default"]);Object(d["a"])([Object(h["c"])({default:function(){return["标签"]}})],et.prototype,"tabs",void 0),Object(d["a"])([Object(h["c"])({default:0})],et.prototype,"active",void 0),Object(d["a"])([Object(h["c"])({default:"#37b69c"})],et.prototype,"color",void 0),Object(d["a"])([Object(h["b"])()],et.prototype,"choose",null),et=Object(d["a"])([p["b"]],et);var at=et,nt=at,ot=Object(y["a"])(nt,Z,tt,!1,null,null,null),st=ot.exports;st.install=function(t){t.component("TitleBar",st)};var it=st,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sync-pageContainer__container"},[t.isTitle?a("div",{staticClass:"sync-pageContainer__titlebar"},[t._t("title")],2):t._e(),t.isSearch?a("div",{staticClass:"sync-pageContainer__searcharea"},[t._t("search")],2):t._e(),a("div",{staticClass:"sync-pageContainer__content"},[t._t("default")],2),t.isFooter?a("div",{staticClass:"sync-pageContainer__footer"},[t._t("footer")],2):t._e()])},rt=[],lt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);Object(d["a"])([Object(h["c"])({default:!0})],lt.prototype,"isSearch",void 0),Object(d["a"])([Object(h["c"])({default:!0})],lt.prototype,"isTitle",void 0),Object(d["a"])([Object(h["c"])({default:!0})],lt.prototype,"isFooter",void 0),lt=Object(d["a"])([p["b"]],lt);var ut=lt,dt=ut,pt=Object(y["a"])(dt,ct,rt,!1,null,null,null),ht=pt.exports;ht.install=function(t){t.component("PageContainer",ht)};var ft=ht,bt=[E,I,it,k,ft],mt=function t(e){t.installed||bt.map((function(t){return e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&mt(window.Vue);var vt={install:mt,SideBar:E,TabsBar:I,TitleBar:it,LayoutContainer:k,PageContainer:ft},_t=a("5c96"),yt=a.n(_t),Ot=(a("b20f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.$style["wrapper"]},[a("div",{class:t.$style["view"]},[t._t("source")],2),a("p",{class:t.$style["btn"],on:{click:function(e){t.showCode=!t.showCode}}},[t._v(" 显示/隐藏代码 ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],class:t.$style["code"]},[t._t("highlight")],2)])])}),jt=[],kt=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.showCode=!1,t}return a}(h["d"]);kt=Object(d["a"])([h["a"]],kt);var gt=kt,Ct=gt,wt=a("49fa");function Bt(t){this["$style"]=wt["default"].locals||wt["default"]}var St=Object(y["a"])(Ct,Ot,jt,!1,Bt,null,null),Tt=St.exports;Tt.install=function(t){t.component(Tt.name,Tt)};var xt=Tt;a("581d");n["default"].config.productionTip=!1,n["default"].use(yt.a),n["default"].use(vt),n["default"].component("demo-block",xt),new n["default"]({router:X,store:Y,render:function(t){return t(V)}}).$mount("#app")}});
//# sourceMappingURL=app.41e4bb72.js.map