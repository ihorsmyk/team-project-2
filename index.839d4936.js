!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("bWgPh",(function(t,n){var r,i,o,l;r=t.exports,i="handlerLearnMore",o=function(){return O},Object.defineProperty(r,i,{get:o,set:l,enumerable:!0,configurable:!0});var c=a("bpxeT"),s=a("dDDEV"),d=a("2TvXO"),u=a("dIxxU"),y=a("2emMu"),p=a("4WCXd"),f=a("iBguk"),m=a("6ia3e"),v=a("2iLY8"),h="https://www.thecocktaildb.com/api/json/v1/1/random.php",b=document.querySelector(".div-icon-heart1"),g=document.querySelector(".div-icon-heart2"),k=document.querySelector(".div-icon-close"),S=b.href.baseVal,w=g.href.baseVal,L=k.href.baseVal,q=function(e){return u.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?s=").concat(e))},x=function(e){return u.default.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php","?i=").concat(e))};function E(){return(E=e(c)(e(d).mark((function t(n){var r,a,i,o,l,c,s,p,f,m,v,b,g,k,S,w,L,q,x;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],window.innerWidth<768?(a=u.default.get(h),i=u.default.get(h),o=u.default.get(h),Promise.all([a,i,o]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]);var t=(0,y.default)(r);_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),a=!0,i=!1,o=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){l.value.style.display="none"}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}J()}))):window.innerWidth>=768&&window.innerWidth<1280?(l=u.default.get(h),c=u.default.get(h),s=u.default.get(h),p=u.default.get(h),f=u.default.get(h),m=u.default.get(h),Promise.all([l,c,s,p,f,m]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]),r.push(e[3].data.drinks[0]),r.push(e[4].data.drinks[0]),r.push(e[5].data.drinks[0]);var t=(0,y.default)(r);_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),a=!0,i=!1,o=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){l.value.style.display="none"}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}J()}))):window.innerWidth>=1280&&(v=u.default.get(h),b=u.default.get(h),g=u.default.get(h),k=u.default.get(h),S=u.default.get(h),w=u.default.get(h),L=u.default.get(h),q=u.default.get(h),x=u.default.get(h),Promise.all([v,b,g,k,S,w,L,q,x]).then((function(e){r.push(e[0].data.drinks[0]),r.push(e[1].data.drinks[0]),r.push(e[2].data.drinks[0]),r.push(e[3].data.drinks[0]),r.push(e[4].data.drinks[0]),r.push(e[5].data.drinks[0]),r.push(e[6].data.drinks[0]),r.push(e[7].data.drinks[0]),r.push(e[8].data.drinks[0]);var t=(0,y.default)(r);document.body.style.display="block",_.cardsCaption.style.display="block",_.cardsContainerEl.innerHTML=t;var n=document.querySelectorAll(".card-btn__remove"),a=!0,i=!1,o=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){l.value.style.display="none"}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}J()})));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("load",(function(e){!function(e){E.apply(this,arguments)}(e)}));var _={menu:document.querySelector("[data-menu]"),formEl:document.querySelector(".search-form"),mobileFormEl:document.querySelector(".search-form-mobile"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper"),mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),errorEl:document.querySelector(".not-found-markup"),modalIngr:document.querySelector(".modal-ingr"),paginationContainer:document.querySelector(".pagination-container"),paginationListContainer:document.querySelector(".pagination")};function C(e){return H.apply(this,arguments)}function H(){return H=e(c)(e(d).mark((function t(n){var r,a,i,o,l,c,s,u,p,f,m,v,h,b;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=function(e,t,n){document.querySelector(".pagination-container").innerHTML="";var r=t*--n,a=r+t,i=e.slice(r,a);_.cardsContainerEl.innerHTML=(0,y.default)(i),J(),document.body.style.display="block";var o=document.querySelectorAll(".card-btn__remove"),l=!0,c=!1,s=void 0;try{for(var d,u=o[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){d.value.style.display="none"}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}i.forEach((function(e){document.createElement("div").innerHTML=e.strDrink}))},h=function(e,t){var n=document.querySelector(".pagination"),r=Math.ceil(e.length/t),a=document.createElement("ul");a.classList.add("pagination-list");for(var i=0;i<r;i++){var o=b(i+1);a.appendChild(o)}n.appendChild(a)},b=function(e){var t=document.createElement("li"),n=document.createElement("span");return n.classList.add("pagination-btn-page"),t.classList.add("pagination-btn"),t.appendChild(n),n.textContent=e,f===e&&t.classList.add("pagination-btn-active"),t.addEventListener("click",(function(){v(p,m,f=e),document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),t.classList.add("pagination-btn-active")})),t},n.preventDefault(),n.target[0].classList.contains("mobile-btn-search")&&(_.menu.classList.toggle("is-open"),window.scrollTo({top:800,behavior:"smooth"})),_.paginationContainer.innerHTML="",_.paginationListContainer.innerHTML="",e.prev=7,r=n.target.drink.value,e.next=11,q(r);case 11:if(null!==(a=e.sent.data).drinks){e.next=16;break}return _.cardsCaption.style.display="none",_.cardsContainerEl.innerHTML=_.errorEl.innerHTML,e.abrupt("return");case 16:for(_.cardsCaption.style.display="block",i=document.querySelectorAll(".card-btn__remove"),o=!0,l=!1,c=void 0,e.prev=19,s=i[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)u.value.style.display="none";e.next=27;break;case 23:e.prev=23,e.t0=e.catch(19),l=!0,c=e.t0;case 27:e.prev=27,e.prev=28,o||null==s.return||s.return();case 30:if(e.prev=30,!l){e.next=33;break}throw c;case 33:return e.finish(30);case 34:return e.finish(27);case 35:p=a.drinks,f=1,window.innerWidth<768?m=3:window.innerWidth>=768&&window.innerWidth<1280?m=6:window.innerWidth>=1280&&(m=9),v(p,m,f),p.length>m&&h(p,m),e.next=49;break;case 46:e.prev=46,e.t1=e.catch(7),console.log(e.t1);case 49:case"end":return e.stop()}}),t,null,[[7,46],[19,23,27,35],[28,,30,34]])}))),H.apply(this,arguments)}_.favoriteHeaderWrapper.style.display="none",_.siteFavoriteHeaderWrapper.addEventListener("mouseover",(function(){_.favoriteHeaderWrapper.style.display="block"})),_.siteFavoriteHeaderWrapper.addEventListener("mouseout",(function(){_.favoriteHeaderWrapper.style.display="none"})),_.mobileFavorite.addEventListener("click",(function(){_.mobileFavorites.classList.toggle("hide-show"),_.iconArrow.classList.toggle("rotate180")})),_.errorEl.style.display="none",_.cardsCaption.style.display="none",_.formEl.addEventListener("submit",C),_.mobileFormEl.addEventListener("submit",C),_.cardsContainerEl.addEventListener("click",(function(e){return W.apply(this,arguments)})),_.cardsContainerEl.addEventListener("click",(function(e){var t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){T=T.filter((function(e){return e.idDrink!==t.id})),localStorage.setItem("favorites",JSON.stringify(T)),t.children[2].children[2].style.display="none",t.children[2].children[1].style.display="block"}})),_.cardsContainerEl.addEventListener("click",O);var T=[],M=[];function W(){return W=e(c)(e(d).mark((function t(n){var r,a,i,o;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__add")){t.next=13;break}return a=r.children[1].textContent,t.next=5,q(a);case 5:i=t.sent.data,o=e(s)({},i.drinks[0]),T.push(o),localStorage.setItem("favorites",JSON.stringify(T)),r.children[2].children[2].style.display="block",r.children[2].children[1].style.display="none";case 13:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}var I=document.querySelector(".modal-cocktail");function O(e){return N.apply(this,arguments)}function N(){return N=e(c)(e(d).mark((function t(n){var r,a,i,o,l,u,y,h,b,g,k,S,w,E,C,H,W,O,N,J,D,F,A,P,j,V,X,U,R,B,Y,z,G,K,Q,Z,$;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".card"),!n.target.classList.contains("card-btn__learn")){t.next=118;break}return a=r.children[1].textContent,t.next=5,q(a);case 5:for(u in i=t.sent.data,o=e(s)({},i.drinks[0]),l=[],o)u.includes("strIngredient")&&null!==o[u]&&l.push(o[u]);if(o.ingridients=l,y=[e(s)({},o)],!(window.innerWidth>768)){t.next=66;break}if(I.innerHTML=(0,f.default)(y),document.querySelector(".cocktail-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),h=JSON.parse(localStorage.getItem("favorites")),console.log(h),!h.length){t.next=51;break}b=!0,g=!1,k=void 0,t.prev=18,S=h[Symbol.iterator]();case 20:if(b=(w=S.next()).done){t.next=35;break}if(+w.value.idDrink!=+r.id){t.next=31;break}return console.log(r.id),E=document.querySelector(".tablet-btn-add"),C=document.querySelector(".tablet-btn-remove"),E.style.display="none",C.style.display="block",t.abrupt("break",35);case 31:console.log(r.id),H=document.querySelector(".tablet-btn-add"),W=document.querySelector(".tablet-btn-remove"),H.style.display="block",W.style.display="none";case 32:b=!0,t.next=20;break;case 35:t.next=41;break;case 37:t.prev=37,t.t0=t.catch(18),g=!0,k=t.t0;case 41:t.prev=41,t.prev=42,b||null==S.return||S.return();case 44:if(t.prev=44,!g){t.next=47;break}throw k;case 47:return t.finish(44);case 48:return t.finish(41);case 49:t.next=52;break;case 51:O=document.querySelector(".tablet-btn-add"),N=document.querySelector(".tablet-btn-remove"),O.style.display="block",N.style.display="none";case 52:document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(c)(e(d).mark((function t(n){var r,a,i,o,l,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=17;break}return r=n.target.textContent,t.next=4,x(r);case 4:a=t.sent,i=[e(s)({},a.data.ingredients[0])],_.modalIngr.innerHTML=(0,m.default)(i),document.querySelector(".ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),(o=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.querySelector(".ingr-icon-close").addEventListener("click",(function(e){o.classList.add("is-hidden"),document.body.style.overflow="hidden"})),l=document.querySelector(".ingr-btn__remove"),c=document.querySelector(".ingr-btn__add"),l.style.display="none",c.addEventListener("click",(function(){M.push(a.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(M)),c.style.display="none",l.style.display="block"})),l.addEventListener("click",(function(){M.pop(),localStorage.setItem("ingridients",JSON.stringify(M)),l.style.display="none",c.style.display="block"}));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(J=document.querySelector(".backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",D=document.querySelector(".tablet-btn-add"),F=document.querySelector(".tablet-btn-remove"),D.addEventListener("click",(function(){T.push(i.drinks[0]),localStorage.setItem("favorites",JSON.stringify(T)),F.style.display="block",D.style.display="none";var e=r.children[2].children[1],t=r.children[2].children[2];e.style.display="none",t.style.display="block"})),F.addEventListener("click",(function(){T=T.filter((function(e){return e.idDrink!==r.id})),localStorage.setItem("favorites",JSON.stringify(T)),F.style.display="none",D.style.display="block";var e=r.children[2].children[1],t=r.children[2].children[2];e.style.display="block",t.style.display="none"})),J.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&(J.classList.add("is-hidden"),document.body.style.overflow="auto")})),document.querySelector(".cocktail-icon-close").addEventListener("click",(function(){J.classList.add("is-hidden"),document.body.style.overflow="auto"})),t.next=118;break;case 66:if(!(window.innerWidth<768)){t.next=118;break}if(I.innerHTML=(0,p.default)(y),A=document.querySelector(".coctail"),document.querySelector(".mobile-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),P=JSON.parse(localStorage.getItem("favorites")),console.log(P),!P.length){t.next=107;break}j=!0,V=!1,X=void 0,t.prev=74,U=P[Symbol.iterator]();case 76:if(j=(R=U.next()).done){t.next=91;break}if(+R.value.idDrink!=+r.id){t.next=87;break}return console.log(r.id),B=document.querySelector(".modal-btn-add"),Y=document.querySelector(".modal-btn-remove"),B.style.display="none",Y.style.display="block",t.abrupt("break",91);case 87:console.log(r.id),z=document.querySelector(".modal-btn-add"),G=document.querySelector(".modal-btn-remove"),z.style.display="block",G.style.display="none";case 88:j=!0,t.next=76;break;case 91:t.next=97;break;case 93:t.prev=93,t.t1=t.catch(74),V=!0,X=t.t1;case 97:t.prev=97,t.prev=98,j||null==U.return||U.return();case 100:if(t.prev=100,!V){t.next=103;break}throw X;case 103:return t.finish(100);case 104:return t.finish(97);case 105:t.next=108;break;case 107:K=document.querySelector(".modal-btn-add"),Q=document.querySelector(".modal-btn-remove"),K.style.display="block",Q.style.display="none";case 108:document.body.style.overflow="hidden",document.querySelector(".cocktail-ingridients-list").addEventListener("click",function(){var t=e(c)(e(d).mark((function t(n){var r,a,i,o,l,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"!==n.target.nodeName){t.next=18;break}return r=n.target.textContent,t.next=4,x(r);case 4:a=t.sent,i=[e(s)({},a.data.ingredients[0])],_.modalIngr.innerHTML=(0,v.default)(i),document.querySelector(".mobile-ingr-icon-close").innerHTML='<use class="use-heart1" href=\''.concat(L,"'></use>"),(o=document.querySelector(".ingr-backdrop")).classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector(".ingr-icon-close").addEventListener("click",(function(){o.classList.add("is-hidden"),document.body.style.overflow="hidden"})),l=document.querySelector(".ingr-btn__remove"),c=document.querySelector(".ingr-btn__add"),l.style.display="none",c.addEventListener("click",(function(){M.push(a.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(M)),c.style.display="none",l.style.display="block"})),l.addEventListener("click",(function(){M.pop(),localStorage.setItem("ingridients",JSON.stringify(M)),l.style.display="none",c.style.display="block"}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A.style.transform="translateX(0%)",document.querySelector(".mobile-icon-close").addEventListener("click",(function(){A.style.transform="translateX(-150%)",document.body.style.overflow="auto"})),Z=document.querySelector(".modal-btn-add"),$=document.querySelector(".modal-btn-remove"),Z.addEventListener("click",(function(){T.push(i.drinks[0]),localStorage.setItem("favorites",JSON.stringify(T)),$.style.display="block",Z.style.display="none";var e=r.children[2].children[1],t=r.children[2].children[2];e.style.display="none",t.style.display="block"})),$.addEventListener("click",(function(){T=T.filter((function(e){return e.idDrink!==r.id})),localStorage.setItem("favorites",JSON.stringify(T)),$.style.display="none",Z.style.display="block";var e=r.children[2].children[1],t=r.children[2].children[2];e.style.display="block",t.style.display="none"}));case 118:case"end":return t.stop()}}),t,null,[[18,37,41,49],[42,,44,48],[74,93,97,105],[98,,100,104]])}))),N.apply(this,arguments)}function J(){var e=document.querySelectorAll(".card-btn__add svg"),t=!0,n=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){a.value.innerHTML='<use class="use-heart1" href=\''.concat(S,"'></use>")}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}var o=document.querySelectorAll(".card-btn__remove svg"),l=!0,c=!1,s=void 0;try{for(var d,u=o[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){d.value.innerHTML='<use class="use-heart1" href=\''.concat(w,"'></use>")}}catch(e){c=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}})),a("bWgPh")}();
//# sourceMappingURL=index.839d4936.js.map
