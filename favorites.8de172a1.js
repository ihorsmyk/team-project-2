!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),i=o("dDDEV"),l=o("2TvXO"),c=o("dIxxU"),s=o("2emMu"),d=e(o("7jKnM")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){return'<section class="no-cocktails section">\n\t<div class="no-cocktails-container container">\n\t\t<p class="no-cocktails-title">Favorite cocktails</p>\n\t\t<p class="no-cocktails-subtitle">You haven\'t added any favorite cocktails yet</p>\n\t</div>\n</section>'},useData:!0}),u=o("4WCXd"),y=o("iBguk"),f=o("6ia3e"),v=o("2iLY8"),m={mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),formEl:document.querySelector(".header-form"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),modalIngr:document.querySelector(".modal-ingr"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper")};m.favoriteHeaderWrapper.style.display="none",m.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){m.favoriteHeaderWrapper.style.display="block"})),m.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){m.favoriteHeaderWrapper.style.display="none"}));var p=document.querySelector(".div-icon-heart1"),g=document.querySelector(".div-icon-heart2"),h=document.querySelector(".div-icon-close"),S=p.href.baseVal,b=g.href.baseVal,k=h.href.baseVal;m.mobileFavorite.addEventListener("click",(function(){m.mobileFavorites.classList.toggle("hide-show"),m.iconArrow.classList.toggle("rotate180")}));var L=function(e){return c.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?s=").concat(e))},w=function(e){return c.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(e))},q=[];m.cardsCaption.style.display="none",window.addEventListener("load",(function(){if(E&&0!==E.length){var e=(0,s.default)(E);m.cardsCaption.style.display="block",m.cardsContainerEl.innerHTML=e;var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){a.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}H()}else m.cardsContainerEl.innerHTML=d()})),m.cardsContainerEl.addEventListener("click",(function(e){var t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){E=E.filter((function(e){return e.idDrink!==t.id})),localStorage.setItem("favorites",JSON.stringify(E)),t.children[2].children[2].style.display="none",t.children[2].children[1].style.display="block";var n=(0,s.default)(E);m.cardsContainerEl.innerHTML=n,H();var r=document.querySelectorAll(".card-btn__add"),o=!0,a=!1,i=void 0;try{for(var l,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}if(0===E.length)return m.cardsCaption.style.display="none",void(m.cardsContainerEl.innerHTML=d())}})),m.cardsContainerEl.addEventListener("click",(function(e){return x.apply(this,arguments)}));var E=JSON.parse(localStorage.getItem("favorites"));var _=document.querySelector(".modal-cocktail");function x(){return x=e(a)(e(l).mark((function t(n){var r,o,c,p,g,h,S,b,E,x,T,M,C;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__learn")){t.next=12;break}return o=r.children[1].textContent,t.next=5,L(o);case 5:for(h in c=t.sent.data,p=e(i)({},c.drinks[0]),g=[],p)h.includes("strIngredient")&&null!==p[h]&&g.push(p[h]);p.ingridients=g,S=[e(i)({},p)],window.innerWidth>768?(_.innerHTML=(0,y.default)(S),document.querySelector(".cocktail-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(k,"'></use>"),document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(a)(e(l).mark((function t(n){var r,o,a,c,s,d;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=17;break}return r=n.target.textContent,t.next=4,w(r);case 4:o=t.sent,a=[e(i)({},o.data.ingredients[0])],m.modalIngr.innerHTML=(0,f.default)(a),document.querySelector(".ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(k,"'></use>"),(c=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(){c.classList.add("is-hidden"),document.body.style.overflow="hidden"})),s=document.querySelector(".ingr-btn__remove"),d=document.querySelector(".ingr-btn__add"),s.style.display="none",d.addEventListener("click",(function(){q.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(q)),d.style.display="none",s.style.display="block"})),s.addEventListener("click",(function(){q.pop(),localStorage.setItem("ingridients",JSON.stringify(q)),s.style.display="none",d.style.display="block"}));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(b=document.querySelector(".backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",E=document.querySelector(".tablet-btn-add"),x=document.querySelector(".tablet-btn-remove"),E.style.display="none",E.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("favorites"));e.push(c.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),x.style.display="block",E.style.display="none",m.cardsContainerEl.innerHTML=(0,s.default)(e),H();var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){a.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}})),x.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem("favorites"));t=t.filter((function(t){return t.idDrink!==e.target.id})),localStorage.setItem("favorites",JSON.stringify(t)),x.style.display="none",E.style.display="block",m.cardsContainerEl.innerHTML=(0,s.default)(t),H();var n=document.querySelectorAll(".card-btn__add"),r=!0,o=!1,a=void 0;try{for(var i,l=n[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){i.value.style.display="none"}}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}t.length||(m.cardsContainerEl.innerHTML=d())})),b.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&(b.classList.add("is-hidden"),document.body.style.overflow="auto")})),document.querySelector(".cocktail-icon-close").addEventListener("click",(function(){b.classList.add("is-hidden"),document.body.style.overflow="auto"}))):window.innerWidth<768&&(_.innerHTML=(0,u.default)(S),document.querySelector(".mobile-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(k,"'></use>"),T=document.querySelector(".coctail"),document.body.style.overflow="hidden",document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(a)(e(l).mark((function t(n){var r,o,a,c,s,d;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=18;break}return r=n.target.textContent,t.next=4,w(r);case 4:o=t.sent,a=[e(i)({},o.data.ingredients[0])],m.modalIngr.innerHTML=(0,v.default)(a),document.querySelector(".mobile-ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(k,"'></use>"),(c=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector(".ingr-icon-close").addEventListener("click",(function(){c.classList.add("is-hidden"),document.body.style.overflow="hidden"})),s=document.querySelector(".ingr-btn__remove"),d=document.querySelector(".ingr-btn__add"),s.style.display="none",d.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("ingridients"));e||(e=[]),e.push(o.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(e)),d.style.display="none",s.style.display="block"})),s.addEventListener("click",(function(){q.pop(),localStorage.setItem("ingridients",JSON.stringify(q)),s.style.display="none",d.style.display="block"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),T.style.transform="translateX(0%)",document.querySelector(".mobile-icon-close").addEventListener("click",(function(){T.style.transform="translateX(-150%)",document.body.style.overflow="auto"})),M=document.querySelector(".modal-btn-add"),C=document.querySelector(".modal-btn-remove"),M.style.display="none",M.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("favorites"));e.push(c.drinks[0]),localStorage.setItem("favorites",JSON.stringify(e)),C.style.display="block",M.style.display="none",m.cardsContainerEl.innerHTML=(0,s.default)(e),H();var t=document.querySelectorAll(".card-btn__add"),n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){a.value.style.display="none"}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}})),C.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem("favorites"));t=t.filter((function(t){return t.idDrink!==e.target.id})),localStorage.setItem("favorites",JSON.stringify(t)),C.style.display="none",M.style.display="block",m.cardsContainerEl.innerHTML=(0,s.default)(t),H();var n=document.querySelectorAll(".card-btn__add"),r=!0,o=!1,a=void 0;try{for(var i,l=n[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){i.value.style.display="none"}}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}t.length||(m.cardsContainerEl.innerHTML=d())})));case 12:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function H(){var e=document.querySelectorAll(".card-btn__add svg"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value.innerHTML='<use class="use-heart1" href=\''.concat(S,"'></use>")}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var i=document.querySelectorAll(".card-btn__remove svg"),l=!0,c=!1,s=void 0;try{for(var d,u=i[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){d.value.innerHTML='<use class="use-heart1" href=\''.concat(b,"'></use>")}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}}();
//# sourceMappingURL=favorites.8de172a1.js.map
