!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i);var o=i("bpxeT"),a=i("dDDEV"),l=i("2TvXO"),s=i("dIxxU"),c=i("l5bVx"),d=e(i("7jKnM")).template({1:function(n,t,r,i,o){var a,l=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,g=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<article class="ingridient">\n\t<p class="ingridient-card-title">'+u((void 0===(a=null!=(a=g(r,"strIngredient")||(null!=t?g(t,"strIngredient"):t))?a:s)?"undefined":e(c)(a))===d?a.call(l,{name:"strIngredient",hash:{},data:o,loc:{start:{line:3,column:34},end:{line:3,column:51}}}):a)+'</p>\n\t<p class="ingridient-card-subtitle">'+u((void 0===(a=null!=(a=g(r,"strType")||(null!=t?g(t,"strType"):t))?a:s)?"undefined":e(c)(a))===d?a.call(l,{name:"strType",hash:{},data:o,loc:{start:{line:4,column:37},end:{line:4,column:48}}}):a)+'</p>\n\t<div class="ingridient-card-btn-wrapper">\n\t\t<button type="button" class="ingridient-btn ingridient-btn__learn">Learn more</button>\n\t\t<button type="button" class="ingridient-btn ingridient-btn__remove">Remove\n\t\t\t<svg width="15" height="15" class="ingridients-btn-icon">\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n</article>\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,i){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?o:""},useData:!0}),u=e(i("7jKnM")).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,r,i){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite ingredient</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite ingredients yet</p>\n\t</div>\n</section>'},useData:!0}),g=i("6ia3e"),p={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),ingrContainer:document.querySelector(".ingridients-container"),ingrCaption:document.querySelector(".ingridients-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};p.favoriteHeaderWrapper.style.display="none",p.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){p.favoriteHeaderWrapper.style.display="block"})),p.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){p.favoriteHeaderWrapper.style.display="none"})),p.mobileFavorite.addEventListener("click",(function(){console.log("111"),p.mobileFavorites.classList.toggle("hide-show"),p.iconArrow.classList.toggle("rotate180")}));var f,y=document.querySelector(".div-icon-heart1"),v=document.querySelector(".div-icon-heart2"),m=document.querySelector(".div-icon-close"),h=(y.href.baseVal,v.href.baseVal),b=m.href.baseVal,S=JSON.parse(localStorage.getItem("ingridients"));function x(){var e=document.querySelectorAll(".ingridient-btn__remove svg"),n=!0,t=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){i.value.innerHTML='<use class="use-heart1" href=\''.concat(h,"'></use>")}}catch(e){t=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(t)throw r}}}window.addEventListener("load",(function(){S&&0!==S.length?(p.ingrContainer.innerHTML=d(S),x()):(p.ingrCaption.style.display="none",p.ingrContainer.style.display="flex",p.ingrContainer.innerHTML=u())})),document.querySelector(".ingridients-container").addEventListener("click",(f=e(o)(e(l).mark((function n(t){var r,i,o,c,f,y,v,m,h;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.target.closest(".ingridient"),!t.target.classList.contains("ingridient-btn__learn")){n.next=24;break}return i=r.children[0].textContent,n.next=5,l=i,s.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(l));case 5:o=n.sent.data,console.log(o),c=[o.ingredients[0]],console.log(c),document.querySelector(".ingr-backdrop"),p.modalIngr.innerHTML=(0,g.default)(c),document.querySelector(".ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(b,"'></use>"),f=document.querySelector(".ingr-btn__add"),y=document.querySelector(".ingr-btn__remove"),f.style.display="none",y.addEventListener("click",(function(){f.style.display="block",y.style.display="none";var n=JSON.parse(localStorage.getItem("ingridients"));if(v=e(a)({},n.filter((function(e){return e.strIngredient===r.children[0].textContent}))),n=n.filter((function(e){return e.strIngredient!==r.children[0].textContent})),p.ingrContainer.innerHTML=d(n),x(),console.log(n.length),localStorage.setItem("ingridients",JSON.stringify(n)),!n.length)return p.ingrCaption.style.display="none",p.ingrContainer.style.display="flex",void(p.ingrContainer.innerHTML=u())})),f.addEventListener("click",(function(){f.style.display="none",y.style.display="block",console.log(v[0]);var e=JSON.parse(localStorage.getItem("ingridients"));e.push(v[0]),localStorage.setItem("ingridients",JSON.stringify(e));var n=JSON.parse(localStorage.getItem("ingridients"));p.ingrContainer.innerHTML=d(n),x()})),(m=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(){m.classList.add("is-hidden")})),n.next=37;break;case 24:if(!t.target.classList.contains("ingridient-btn__remove")){n.next=37;break}if(h=(h=JSON.parse(localStorage.getItem("ingridients"))).filter((function(e){return e.strIngredient!==r.children[0].textContent})),p.ingrContainer.innerHTML=d(h),x(),console.log(h.length),localStorage.setItem("ingridients",JSON.stringify(h)),h.length){n.next=37;break}return p.ingrCaption.style.display="none",p.ingrContainer.style.display="flex",p.ingrContainer.innerHTML=u(),localStorage.removeItem("ingridients"),n.abrupt("return");case 37:case"end":return n.stop()}var l}),n)}))),function(e){return f.apply(this,arguments)}))}();
//# sourceMappingURL=ingridients.ffe255c9.js.map