(self["webpackChunkAnimeUI"]=self["webpackChunkAnimeUI"]||[]).push([[488],{80742:function(t,e,n){"use strict";n.d(e,{v:function(){return h}});var o=n(13087),i=n(62833),r=n(82482),s=(n(40561),n(92222),n(54747),n(47941),n(85827),n(60536)),c=n(60204),a=n(78566),l=n(23176),u=!1,h=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(0,o.Z)(this,t),(0,r.Z)(this,"options",null),(0,r.Z)(this,"$el",void 0),(0,r.Z)(this,"rectReset",void 0),(0,r.Z)(this,"styleStr",void 0),(0,r.Z)(this,"scrollMountIndex",-1),this.options=e,this.$el=null,this.styleStr="",n&&(t.$containerBox=n),this.rectReset=(0,a.boundRectReset)(),this.init()}return(0,i.Z)(t,[{key:"init",value:function(){this.parseOptions(),this.createElement(),this.styleStr=this.generateDisplay()}},{key:"destroy",value:function(){t.scrollElementLine.splice(this.scrollMountIndex,1),this.$el.remove()}},{key:"setElement",value:function(t){this.$el=t}},{key:"mountScrolling",value:function(){return this.scrollMountIndex=t.scrollElementLine.push(this)-1,this.scrollMountIndex}},{key:"createElement",value:function(){var e=document.createElement("div");this.$el=e,e.classList.add("adore"),t.$containerBox.append(e)}},{key:"transformEnd",value:function(){l.DEBUG&&u&&console.log(this.$el,"transform end!")}},{key:"scrollCalc",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.scrollingElement,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.rectReset(t.$containerBox,!0);return n||(n=document.children[0]),l.DEBUG&&u&&console.log(n.scrollTop,i.height),this.options.rate=n.scrollTop/i.height,o&&setTimeout((function(){e.scrollCalc(document.scrollingElement,!1)}),99),this.options}},{key:"transformCalc",value:function(){var e,n,o,i,r=this,c=(this.rectReset(t.$containerBox,!0),function(t){return!(!(0,s.is_Defined)(r.options[t])||!(0,s.is_Defined)(r.options.over[t]))&&r.options.rate*(r.options.over[t]-r.options[t])});return e=c("left"),n=c("top"),o=c("rotate")||0,i=c("scale")+this.options.scale||1,this.options._transx=e,this.options._transy=n,this.options._rotation=o,this.options._scalation=i,this.options}},{key:"parseOptions",value:function(){return this.calc_edges(),this.options}},{key:"generateDisplay",value:function(){var t=this,e=["image","origin","content","width","height","top","left"],n={image:function(t){return"background-image:url(".concat(t,");")},origin:function(t){return"transform-origin:".concat(t||"center",";")},content:function(e){return t.$el.innerHTML=e,""}},o="";return e.forEach((function(e,i,r){if(t.options[e]){var s=n[e];o+=s?s(t.options[e]):"".concat(e,":").concat(t.options[e]+"px",";")}})),o}},{key:"generateTransform",value:function(){var t="";return t+="transform:scale(".concat(this.options._scalation,") rotate(").concat(this.options._rotation,"deg) translate(").concat(this.options._transx,"px,").concat(this.options._transy,"px);"),t}},{key:"reset",value:function(){this.rectReset(t.$containerBox)}},{key:"updateInlineStyle",value:function(){this.$el.setAttribute("style",this.styleStr)}},{key:"calc_edges",value:function(){var e=this;this.options.over||(this.options.over=Object.create(null));var n=["top","right","bottom","left"],o=this.rectReset(t.$containerBox),i=[];n.forEach((function(t){(0,s.is_Number)(e.options[t])&&i.push(t)}));var r=!0,a=!0;if(i.forEach((function(t){["top","bottom"].indexOf(t)>-1&&(r=!1),["left","right"].indexOf(t)>-1&&(a=!1)})),r){var h=.9;this.options.top=(0,c.pB)(o.height,h)}if(a){var d=.9;this.options.left=(0,c.pB)(o.width,d)}return l.DEBUG&&u&&console.log(o),this.complimentBoundings(this.options,o),n.forEach((function(t){i.indexOf(t)>-1&&!e.options.over[t]&&(e.options.over[t]=0)})),this.complimentBoundings(this.options.over,o),this.options}},{key:"complimentBoundings",value:function(t,e){return Object.keys(t).forEach((function(n){switch(n){case"top":t["bottom"]||(t["bottom"]=e.height-t.top);case"bottom":t["top"]||(t["top"]=e.height-t.bottom);case"left":t["right"]||(t["right"]=e.width-t.left);case"right":t["left"]||(t["left"]=e.width-t.right)}})),l.DEBUG&&u&&console.warn(t),t}}],[{key:"listeningScroll",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{throttleTime:250},o=t,i=function(t){o.scrollElementLine.forEach((function(t){t.scrollCalc(),t.transformCalc(),t.styleStr=t.generateDisplay(),t.styleStr+=t.generateTransform(),t.updateInlineStyle()}))};return n["reduce"]?t.throttleScroll=function(){n["reduce"](i)}:t.throttleScroll=(0,s.throttle)(i,n.throttleTime),(0,a.addScrollListener)(e,t.throttleScroll,!1)}},{key:"stopListening",value:function(t,e){(0,a.removeScrollListener)(t,e)}}]),t}();(0,r.Z)(h,"$containerBox",void 0),(0,r.Z)(h,"throttleScroll",void 0),(0,r.Z)(h,"scrollElementLine",[])},49686:function(t,e,n){"use strict";n.a(t,(async function(t){n.r(e);var o=n(63355),i=n(75882),r=(n(33457),t([i]));i=(r.then?await r:r)[0],i.Z.render=o.s,e["default"]=i.Z}))},20229:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var o=n(44359);function i(t,e,n,i,r,s){return(0,o.openBlock)(),(0,o.createBlock)(o.Teleport,{to:"#bg-layer"},[(0,o.withDirectives)((0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(t.getComputedClass),style:(0,o.normalizeStyle)(t.getComputedStyle)},null,6),[[o.vShow,t.isShow]])])}n(85827),n(69600),n(57327),n(47941),n(92222),n(74916),n(15306),n(40561);var r=n(60536),s="background",c="",a={name:"backgroundProvider",setup:function(){var t=(0,o.ref)(!1),e=(0,o.ref)([]);return{isShow:t,bgPackList:e}},computed:{getComputedClass:function(){var t=this.bgPackList.length&&this.bgPackList[this.bgPackList.length-1];return t?(0,r.arbitraryWrap)(t.class).reduce((function(t,e,n){return t+=" ",(0,r.is_String)(e)?t+=e:(0,r.is_Array)(e)?t+=e.join(" "):Object.keys(e).filter((function(t){return e[t]})).join(" "),t}),s):s},getComputedStyle:function(){var t=c,e=this.bgPackList.length&&this.bgPackList[this.bgPackList.length-1];if(!e)return t;if((0,r.is_PlainObject)(e.style))for(var n in e.style)t+="".concat(n,":").concat(e.style[n],";");else console.log(e),(0,r.arbitraryFree)(e.style,(function(e){t+=e+";"})),t=t.replace(/;+?/g,";");return t}},methods:{showBackground:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isShow=t},addPack:function(t){return(0,r.objectSupplement)(t,{class:"",style:""}),this.bgPackList.push(t),t},removePack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!t)return this.bgPackList.splice(-1)[0]||null;(0,r.removeArrayItem)(this.bgPackList,t)}},created:function(){var t=this,e=this.$magic.utils.addToInterface;e((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n?t.removePack(e):t.addPack(e)}),"setBackground")},mounted:function(){this.showBackground()}},l=(0,o.defineComponent)(a);n(24379);l.render=i;var u=l},53773:function(t,e,n){"use strict";n.r(e);var o=n(23645),i=n.n(o),r=i()((function(t){return t[1]}));r.push([t.id,".adorements{position:absolute;top:0;bottom:0;left:0;right:0}.adorements div.adore{position:fixed;width:56px;height:56px;transition:transform .8s ease-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-position:50%;background-size:cover;background-repeat:no-repeat;will-change:transform}",""]),e["default"]=r},61877:function(t,e,n){"use strict";n.r(e);var o=n(23645),i=n.n(o),r=i()((function(t){return t[1]}));r.push([t.id,".background{position:fixed;top:0;bottom:0;left:0;right:0;z-index:-1;background:transparent}",""]),e["default"]=r},16976:function(t,e,n){"use strict";n.a(t,(async function(t){var o=n(63948),i=n(95082),r=(n(41539),n(78783),n(33948),n(40561),n(69826),n(54747),n(80742)),s=n(60536),c=n(78566),a=await n.e(497).then(n.bind(n,4516)),l=a.LocalConsistentCabinetName;e["Z"]={name:"adorement",data:function(){return{chartlet:[]}},computed:{},methods:{addAdorement:function(t){var e=this,n=new r.v(t,this.$refs.adoreBox),o=(0,i.Z)((0,i.Z)({},t),{},{_adorementIns:n}),s=this.chartlet.push(o)-1;return this.$nextTick((function(){n.setElement(e.$refs.adoreBox.children[s]),n.mountScrolling(),n.updateInlineStyle()})),o},removeAdorement:function(t){if(-1===this.chartlet.lastIndexOf(t))return!1;var e=this.chartlet.splice(t,1),n=(0,o.Z)(e,1),i=n[0];return i._adorementIns.destroy(),!0}},mounted:function(){var t=this;this.$magic.__immerse.setImmerseAction((function(){t.chartlet.length&&t.chartlet[0]._adorementIns.rectReset()}));var e=t.$magic.animeQueue,n=(0,s.once)((function(t){e.registerHook({name:"scroll_calc",once:!0,debounce:!0,actions:function(){t()}})})),o=document,i=null;this.$magic.deposit.registerPreference({name:"adore",belongs:l+".modules",viewData:{title:"滑动视差装饰器",hint:""},viewType:"partition",subpacks:[{name:"enable",viewData:{title:"是否启用视差滚动",hint:"可略微减轻部分浏览器滚动负担"},viewType:"switchBox",getValue:function(){return!0},onChange:function(t,s){t?i=r.v.listeningScroll(o,{reduce:function(t){n(t),e.bubble("scroll_calc"),e.find("scroll_calc")>-1&&e.bubble("scroll_calc",!0)},throttleTime:250}):r.v.stopListening(o,i)},onInitial:!0},{name:"show",viewData:{title:"隐藏所有装饰器"},viewType:"switchBox",getValue:function(){return!1},onChange:function(t,e){t?(0,c.inject_style)(".adorements{display: none!important;}","",{class:"hide-adorement"}):document.head.querySelectorAll(".hide-adorement").forEach((function(t){return t.remove()}))},onInitial:!0}]}),this.$magic.utils.addToInterface(this,"addAdorement",!0),this.$magic.utils.addToInterface(this,"removeAdorement",!0)}},t()}),1)},75882:function(t,e,n){"use strict";n.a(t,(async function(t){n.d(e,{Z:function(){return o.Z}});var o=n(16976),i=t([o]);o=(i.then?await i:i)[0]}))},33457:function(t,e,n){"use strict";n(78369)},78369:function(t,e,n){var o=n(53773);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=n(45346).Z;i("2253f098",o,!0,{sourceMap:!1,shadowMode:!1})},24379:function(t,e,n){var o=n(61877);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=n(45346).Z;i("2e11b84e",o,!0,{sourceMap:!1,shadowMode:!1})},63355:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n(44359),i={class:"adorements",ref:"adoreBox"};function r(t,e,n,r,s,c){return(0,o.openBlock)(),(0,o.createBlock)(o.Teleport,{to:"#adorementBox"},[(0,o.createElementVNode)("div",i,null,512)])}}}]);