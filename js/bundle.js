!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){for(var n=document.querySelectorAll(".main__section_btn"),o=document.querySelectorAll(".main__section-list"),s=document.querySelector(".main__description-read-more"),l=document.querySelector(".main__description-size"),c=document.querySelector(".main__description-item"),a=function(e){n[e].addEventListener("click",(function(){n[e].classList.contains("show-all")?(o[e].style.height="176px",n[e].classList.remove("show-all"),n[e].textContent="Показать все"):(o[e].style.height="auto",n[e].classList.add("show-all"),n[e].textContent="Скрыть")}))},i=0;i<n.length;i++)a(i);function r(){window.innerWidth>="768"?l.style.height="176px":l.style.height=c.clientHeight+"px"}s.addEventListener("click",(function(){s.classList.contains("show-all")?(r(),s.classList.remove("show-all"),s.textContent="Читать дальше"):(l.style.height="auto",s.classList.add("show-all"),s.textContent="Скрыть")})),r(),window.addEventListener("resize",(function(){r()}))},function(e,t){var n=document.querySelector(".header__navigation-toggle-btn"),o=(document.querySelector(".header__navigation-toggle-btn-close"),document.querySelector(".side__menu")),s=document.querySelector(".wrapper__open-menu"),l=(document.querySelector(".wrapper__open-menu-bg"),document.querySelector(".header__search-list")),c=document.querySelector(".informations__list"),a=document.querySelector(".contacts__list"),i=document.querySelectorAll(".feedback"),r=document.querySelector(".modal__feedback"),d=document.querySelector(".modal__close-feedback"),u=document.querySelectorAll(".callback"),_=document.querySelector(".modal__callback"),m=document.querySelector(".modal__close-callback");function p(){r.classList.add("modal__feedback-open"),s.classList.add("wrapper__open-menu-bg"),s.style.zIndex="999",d.focus()}function f(){_.classList.add("modal__callback-open"),s.classList.add("wrapper__open-menu-bg"),s.style.zIndex="999",m.focus()}n.addEventListener("click",(function(){o.classList.toggle("side__menu--active"),s.classList.toggle("wrapper__open-menu-bg"),n.classList.toggle("header__navigation-toggle-btn-close"),l.classList.toggle("header__search-list-open"),a.classList.toggle("contacts__list-open-menu"),c.classList.toggle("information__list-open-menu")})),s.addEventListener("click",(function(){o.classList.remove("side__menu--active"),s.classList.remove("wrapper__open-menu-bg"),n.classList.remove("header__navigation-toggle-btn-close"),l.classList.remove("header__search-list-open"),c.classList.remove("information__list-open-menu"),a.classList.remove("contacts__list-open-menu"),r.classList.remove("modal__feedback-open"),_.classList.remove("modal__callback-open"),s.style.zIndex="9"})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(o.classList.remove("side__menu--active"),s.classList.remove("wrapper__open-menu-bg"),n.classList.remove("header__navigation-toggle-btn-close"),l.classList.remove("header__search-list-open"),c.classList.remove("information__list-open-menu"),a.classList.remove("contacts__list-open-menu"),r.classList.remove("modal__feedback-open"),_.classList.remove("modal__callback-open"),s.style.zIndex="9")}));for(var v=0;v<i.length;v++)i[v].addEventListener("click",p);for(var g=0;g<u.length;g++)u[g].addEventListener("click",f);m.addEventListener("click",(function(){_.classList.remove("modal__callback-open"),s.classList.remove("wrapper__open-menu-bg"),n.classList.contains("header__navigation-toggle-btn-close")?(s.style.zIndex="9",s.classList.add("wrapper__open-menu-bg")):s.style.zIndex="0"})),d.addEventListener("click",(function(){r.classList.remove("modal__feedback-open"),s.classList.remove("wrapper__open-menu-bg"),n.classList.contains("header__navigation-toggle-btn-close")?(s.style.zIndex="9",s.classList.add("wrapper__open-menu-bg")):s.style.zIndex="0"}))},function(e,t){var n=void 0;function o(){var e=screen.availWidth;e<768&&null==n?n=new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}):e>=768&&null!=n&&(n.destroy(),n=void 0,document.querySelector(".swiper-wrapper").removeAttribute("style"))}o(),window.addEventListener("resize",(function(){o()}))}]);
//# sourceMappingURL=bundle.js.map