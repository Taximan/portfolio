!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),o=e[t[0]];return function(e,t,a){o.apply(this,[e,t,a].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){e.exports=n(11)},function(e,t){"use strict";function n(){for(var e in r)r.hasOwnProperty(e)&&r[e].classList.remove("nav__button--active")}Object.defineProperty(t,"__esModule",{value:!0});var o=document.getElementsByClassName("nav")[0],a=document.getElementsByClassName("nav__mobile-nav-toggle")[0],r={top:document.getElementsByClassName("nav__top")[0],about:document.getElementsByClassName("nav__about")[0],projects:document.getElementsByClassName("nav__projects")[0],contact:document.getElementsByClassName("nav__contact")[0]},i=function(){return o.classList.toggle("nav--make-mobile-menu-visiable")},u=function(){return o.classList.remove("nav--make-mobile-menu-visiable")};a.addEventListener("click",function(e){e.preventDefault(),i()},!1),t["default"]={node:o,toggleNav:i,closeNav:u,setActive:function(e){switch(n(),e){case"top":r.top.classList.add("nav__button--active");break;case"about":r.about.classList.add("nav__button--active");break;case"projects":r.projects.classList.add("nav__button--active");break;case"contact":r.contact.classList.add("nav__button--active")}}}},function(e,t){"use strict";function n(e){return"string"!=typeof e&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})}function o(e,t){var n=null;return function(){var o=this,a=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,a)},t)}}function a(e,t){t=t||window;var n,o,a=t.document;t.getSelection&&a.createRange?(n=t.getSelection(),o=a.createRange(),o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o)):a.body.createTextRange&&(o=a.body.createTextRange(),o.moveToElementText(e),o.select())}function r(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}function i(e,t,n){function o(){r+=1/60;var t=r/i,c=u[n](t);1>t?(s(o),window.scrollTo(0,a+(e-a)*c)):window.scrollTo(0,e)}var a=window.scrollY,e=e||0,t=t||2e3,n=n||"easeOutSine",r=0,i=Math.max(.1,Math.min(Math.abs(a-e)/t,.8)),u=(Math.PI/2,{easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}});o()}function u(e,t){for(var n in t)t.hasOwnProperty(n)&&(e=e.replace(new RegExp("{{"+n+"}}","g"),t[n]));return e}Object.defineProperty(t,"__esModule",{value:!0}),t.syntaxHighlight=n,t.debounce=o,t.selectElementText=a,t.clearSelection=r,t.scrollToY=i,t.render=u;var s=(t.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t.randCol=function(){return"#"+(16777215*Math.random()<<0).toString(16)},t.RAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}());t.HTTP={post:function(e,t,n){var o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(JSON.stringify(t)),o.onreadystatechange=function(){4==o.readyState&&o.status>200&&o.status<300?n(null,{data:o.responseText,code:o.status}):4==o.readyState&&o.status>=400&&n({data:o.responseText,code:o.status})}},head:function(e,t){var n=new XMLHttpRequest;n.open("HEAD",e,!0),n.onreadystatechange=function(){this.readyState==this.DONE&&t(404!=this.status)}}}},function(e,t){e.exports=/([\uD800-\uDBFF])([\uDC00-\uDFFF])([\uD800-\uDBFF])?([\uDC00-\uDFFF])?|([0-9])?([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\uFE0F]+)/g},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}function r(){v.classList.remove("about__left-bracket--close"),p.classList.remove("about__right-bracket--close")}function i(){v.classList.add("about__left-bracket--close"),p.classList.add("about__right-bracket--close")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),s=n(1),c=o(s),l=document.getElementsByClassName("about")[0],d=document.querySelector(".about .json-view__json"),f=document.createElement("pre"),m=JSON.stringify({firstName:"Dawid",secondName:"Czarnik",age:a(new Date("1995-07-21T00:00:00+00:00")),knows:{general:["HTML5/CSS3","latest ES6/7 JS","basic PHP","OOP patterns","functional programming techniques","basic SQL"],frameworks:{frontEnd:["react + flux(redux)","angular 1.X","bootstrap"],backEnd:["koa","express","laravel"]},tooling:["webpack(babel loader❤)","gulp","npm / composer"],other:["jquery","bookshelf / eloquent","socket.io"]}},null,2);f.innerHTML=(0,u.syntaxHighlight)(m),d.appendChild(f);var v=document.getElementsByClassName("about__left-bracket")[0],p=document.getElementsByClassName("about__right-bracket")[0];t["default"]={top:l.offsetTop,bottom:l.offsetTop+l.offsetHeight,onEnter:function(){c["default"].setActive("about"),i()},onLeave:function(){r()}}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n,o,a){var r=document.createElement("canvas"),c=r.getContext("2d");r.width=t,r.height=n;for(var l=Math.floor((r.width+r.height)/o),d=[],f=[],m=0;l>m;m++){for(var v=new u({x:(0,i.randInt)(0,r.width),y:(0,i.randInt)(0,r.height)}),p=0;p<d.length;p++){var g=Math.floor(d[p].distance(v));c.globalAlpha=o/g,50>g&&(f.push(new s(d[p],v,{color:Math.random()<.2?(0,i.randCol)():"white"})),f[f.length-1].draw(c))}d.push(v)}a?(e.style.backgroundPosition="0 100%",e.style.backgroundImage='url("'+r.toDataURL()+'")'):(r.style.position="absolute",r.style.top=0,r.style.left=0,e.appendChild(r))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t["default"]=a;var i=n(2),u=function(){function e(t){var n=t.x,a=t.y;o(this,e),this.x=n,this.y=a}return r(e,[{key:"distance",value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}},{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,3,0,2*Math.PI,!1),e.fillStyle="black",e.fill()}}]),e}(),s=function(){function e(t,n,a){var r=a.color;o(this,e),this.A=t,this.B=n,this.color=r||"black"}return r(e,[{key:"draw",value:function(e){e.beginPath(),e.strokeStyle=this.color,e.moveTo(this.A.x,this.A.y),e.lineTo(this.B.x,this.B.y),e.stroke()}}]),e}()},function(e,t){var n=Math.random,o=Math.max;e.exports=function(e,t){return function(){return~~o(e,n()*t)}}},function(e,t){"use strict";e.exports={googleAnalyticsId:"UA-52764196-2",mailServer:"https://mighty-taiga-50462.herokuapp.com/sendmail"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=o(a),i=n(2),u=n(7),s=o(u),c=document.getElementsByClassName("contact")[0],l=document.getElementsByClassName("contact__form")[0],d=document.getElementsByClassName("contact__submit")[0],f={firstName:document.querySelector(".contact__fname"),lastName:document.querySelector(".contact__lname"),email:document.querySelector(".contact__email"),message:document.querySelector(".contact__message")},m=function(){for(var e in f)f.hasOwnProperty(e)&&(f[e].value="")},v=document.getElementById("contact-overlay-tmpl"),p=function(e){var t=(0,i.render)(v.innerHTML,e),n=document.createElement("div");return n.innerHTML=t,n},g=function(){return p({title:"got it!",iconUrl:n(24),message:"The mail has been sent successfully and shall be reviewed soon. Want to add something?",buttonText:"Write one more",additionalClasses:"overlay--success"})},h=function(){return p({title:"what a bummer",iconUrl:n(23),message:"we encountered a difficulities while attempting to send your message, please try again in a little bit.",buttonText:"Retry",additionalClasses:"overlay--failed"})};l.addEventListener("submit",function(e){e.preventDefault(),d.disabled=!0,d.innerHTML="sending...";var t={firstName:f.firstName.value,lastName:f.lastName.value,email:f.email.value,message:f.message.value};i.HTTP.post(s["default"].mailServer,t,function(e,t){e?l.appendChild(h()):(l.appendChild(g()),m()),d.disabled=!1,d.innerHTML="send"})}),t["default"]={top:c.offsetTop,bottom:c.offsetTop+c.offsetHeight,onEnter:function(){r["default"].setActive("contact")},onLeave:function(){}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=o(a),i=document.getElementsByClassName("footer")[0];(0,r["default"])(i,window.innerWidth,i.offsetHeight,4,!0),t["default"]={}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(){(0,l.RAF)(a),E.drawImage(b,0,0,_,w)}function r(){(0,l.selectElementText)(x),setTimeout(function(){x.style.textAlign="center",setTimeout(function(){return(0,l.clearSelection)()},100)},300)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=o(i),s=n(25),c=o(s),l=n(2),d=n(1),f=o(d),m=n(4),v=o(m),p=document.getElementsByClassName("header")[0],g=document.getElementsByClassName("header__background")[0],h=document.getElementsByClassName("header__call-to-action")[0];h.addEventListener("click",function(e){e.preventDefault(),(0,l.scrollToY)(v["default"].top,800)});var y=document.createElement("canvas"),b=document.getElementById("bgvid"),_=window.innerWidth,w=700;y.width=_,y.height=w,g.appendChild(y),(0,u["default"])(g,_,w/2,2,!1);var E=y.getContext("2d");b.addEventListener("play",function(e){(0,l.RAF)(a)},!1);var F=["amazing","elegant","fast","great"],x=document.getElementsByClassName("header__animated-word")[0],T=(0,c["default"])(F,function(e,t){x.innerHTML=e,"great"!==e||t?"great"==e&&t&&r():T()});t["default"]={onWindowResize:function(){_=window.innerWidth,y.width=window.innerWidth},top:0,bottom:p.offsetTop+p.offsetHeight,onEnter:function(){f["default"].setActive("top"),b.play()},onLeave:function(){b.pause()}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>0?s["default"].node.classList.add("nav--scrolled"):s["default"].node.classList.remove("nav--scrolled"),i(t,[l["default"],f["default"],v["default"],g["default"]])}function r(e,t){return e>t.top-b&&e<t.bottom-b}function i(e,t){for(var n=t.length,o=0;n>o;o++){var a=t[o];if(r(e,a)){if(a==_)return;_=a;for(var i=0;n>i;i++)t[i]!=_&&t[i].onLeave();a.onEnter()}}}n(19),n(17),n(16),n(13),n(18),n(14),n(15),n(20),n(21),n(22);var u=n(1),s=o(u),c=n(10),l=o(c),d=n(4),f=o(d),m=n(12),v=o(m),p=n(8),g=o(p),h=n(9),y=(o(h),n(2));window.addEventListener("resize",function(){l["default"].onWindowResize()});var b=350;window.addEventListener("scroll",a),a();var _=null,w=document.querySelectorAll("[data-scroll-to]");Array.prototype.forEach.call(w,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById(this.getAttribute("data-scroll-to")),n=t.offsetTop-60;(0,y.scrollToY)(n,600),s["default"].closeNav()})})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=o(a),i=document.getElementsByClassName("projects")[0],u=document.getElementsByClassName("project"),s=function(){Array.prototype.forEach.call(document.querySelectorAll(".project__overlay--active"),function(e){e.classList.remove("project__overlay--active")})};Array.prototype.forEach.call(u,function(e){e.addEventListener("mouseenter",function(){s(),this.children[0].classList.add("project__overlay--active")}),e.addEventListener("mouseleave",function(){this.children[0].classList.remove("project__overlay--active")})}),t["default"]={top:i.offsetTop,bottom:i.offsetTop+i.offsetHeight,onEnter:function(){r["default"].setActive("projects")},onLeave:function(){}}},function(e,t){},13,13,13,13,13,13,13,13,13,function(e,t,n){e.exports=n.p+"1dff016bcc54b2a4b3b7dd5df14c3eea.svg"},function(e,t,n){e.exports=n.p+"6b8335f4618a2579085de54fe0271c69.svg"},function(e,t,n){function o(e,t,n){"function"==typeof t&&(n=t,t={}),t.cmin=isNaN(t.cmin)?300:t.cmin,t.cmax=isNaN(t.cmax)?800:t.cmax;var o,i=a(t.cmin,t.cmax),u=e.length-1,s=!1;return function c(a,l){t.initial=l,o=r(e[a],t,function(e,t){n(e,s),t&&!s&&setTimeout(c,i(),++a>u?0:a,e)})}(0,t.initial),function(){s=!0,o()}}var a=n(6),r=n(26);e.exports=o},function(e,t,n){function o(e,t,n){function o(t){f=a(d,0,t),t=r(f),l=d!=e&&0==e.indexOf(f),n(f,c),s=l||0==t?setTimeout(u,m(),t):setTimeout(o,m(),t-1)}function u(t){f=a(e,0,t),t=r(f),c=f==e,n(f,c),c||(s=setTimeout(u,m(),t+1))}"function"==typeof t&&(n=t,t={});var s=null,c=!1,l=!1,d=t.initial,f="";t.min=isNaN(t.min)?40:t.min,t.max=isNaN(t.max)?80:t.max;var m=i(t.min,t.max);return d?o():u(1),function(){clearTimeout(s),n(f,!0)}}var a=n(29),r=n(28),i=n(6);e.exports=o},function(e,t,n){var o=n(3),a="•";e.exports=function(e){for(var t,n=e.replace(o,a).split(""),r=0;t=o.exec(e);)t.index-=r,r+=t[0].length-1,n.splice(t.index,1,t[0]);return n}},function(e,t,n){var o=n(3);e.exports=function(e){return e.replace(o,"•").length}},function(e,t,n){var o=(n(3),n(27));e.exports=function(e,t,n){n=isNaN(n)?e.length:n;var a=o(e).slice(t,t+n);return 0>n?"":a.join("")}}]));
//# sourceMappingURL=bundle.js.map