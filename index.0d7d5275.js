var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("7Th1V",(function(e,t){var n,r,i,l;n=e.exports,r="handlerLearnMore",i=function(){return C},Object.defineProperty(n,r,{get:i,set:l,enumerable:!0,configurable:!0});var a=o("2shzp"),s=o("QG6gt"),d=o("8EZAg"),c=o("aN9pz"),u=o("eT0hc"),y=o("iZbkS");const p="https://www.thecocktaildb.com/api/json/v1/1/random.php",m=document.querySelector(".div-icon-heart1"),f=document.querySelector(".div-icon-heart2"),h=document.querySelector(".div-icon-close"),g=m.href.baseVal,b=f.href.baseVal,v=h.href.baseVal,k=e=>a.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`),S=e=>a.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`);window.addEventListener("load",(e=>{!async function(e){const t=[];if(window.innerWidth<768){const e=a.default.get(p),n=a.default.get(p),o=a.default.get(p);Promise.all([e,n,o]).then((e=>{t.push(e[0].data.drinks[0]),t.push(e[1].data.drinks[0]),t.push(e[2].data.drinks[0]);const n=(0,s.default)(t);L.cardsCaption.style.display="block",L.cardsContainerEl.innerHTML=n;const o=document.querySelectorAll(".card-btn__remove");for(let e of o)e.style.display="none";H()}))}else if(window.innerWidth>=768&&window.innerWidth<1280){const e=a.default.get(p),n=a.default.get(p),o=a.default.get(p),r=a.default.get(p),i=a.default.get(p),l=a.default.get(p);Promise.all([e,n,o,r,i,l]).then((e=>{t.push(e[0].data.drinks[0]),t.push(e[1].data.drinks[0]),t.push(e[2].data.drinks[0]),t.push(e[3].data.drinks[0]),t.push(e[4].data.drinks[0]),t.push(e[5].data.drinks[0]);const n=(0,s.default)(t);L.cardsCaption.style.display="block",L.cardsContainerEl.innerHTML=n;const o=document.querySelectorAll(".card-btn__remove");for(let e of o)e.style.display="none";H()}))}else if(window.innerWidth>=1280){const e=a.default.get(p),n=a.default.get(p),o=a.default.get(p),r=a.default.get(p),i=a.default.get(p),l=a.default.get(p),d=a.default.get(p),c=a.default.get(p),u=a.default.get(p);Promise.all([e,n,o,r,i,l,d,c,u]).then((e=>{t.push(e[0].data.drinks[0]),t.push(e[1].data.drinks[0]),t.push(e[2].data.drinks[0]),t.push(e[3].data.drinks[0]),t.push(e[4].data.drinks[0]),t.push(e[5].data.drinks[0]),t.push(e[6].data.drinks[0]),t.push(e[7].data.drinks[0]),t.push(e[8].data.drinks[0]);const n=(0,s.default)(t);document.body.style.display="block",L.cardsCaption.style.display="block",L.cardsContainerEl.innerHTML=n;const o=document.querySelectorAll(".card-btn__remove");for(let e of o)e.style.display="none";H()}))}}()}));const L={menu:document.querySelector("[data-menu]"),formEl:document.querySelector(".search-form"),mobileFormEl:document.querySelector(".search-form-mobile"),siteFavoriteHeaderWrapper:document.querySelector(".site-nav-favorite-wrapper"),favoriteHeaderWrapper:document.querySelector(".favorite-wrapper"),mobileFavorite:document.querySelector(".mobile-favorite"),mobileFavorites:document.querySelector(".mobile-favorites"),iconArrow:document.querySelector(".mobile-arrow"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),errorEl:document.querySelector(".not-found-markup"),modalIngr:document.querySelector(".modal-ingr"),paginationContainer:document.querySelector(".pagination-container"),paginationListContainer:document.querySelector(".pagination")};async function q(e){e.preventDefault(),e.target[0].classList.contains("mobile-btn-search")&&(L.menu.classList.toggle("is-open"),window.scrollTo({top:800,behavior:"smooth"})),L.paginationContainer.innerHTML="",L.paginationListContainer.innerHTML="";try{const o=e.target.drink.value,{data:r}=await k(o);if(null===r.drinks)return L.cardsCaption.style.display="none",void(L.cardsContainerEl.innerHTML=L.errorEl.innerHTML);L.cardsCaption.style.display="block";const i=document.querySelectorAll(".card-btn__remove");for(let c of i)c.style.display="none";const l=r.drinks;let a,d=1;function t(e,t,n){document.querySelector(".pagination-container").innerHTML="";const o=t*--n,r=o+t,i=e.slice(o,r);L.cardsContainerEl.innerHTML=(0,s.default)(i),H(),document.body.style.display="block";const l=document.querySelectorAll(".card-btn__remove");for(let e of l)e.style.display="none";i.forEach((e=>{document.createElement("div").innerHTML=e.strDrink}))}function n(e){const n=document.createElement("li"),o=document.createElement("span");return o.classList.add("pagination-btn-page"),n.classList.add("pagination-btn"),n.appendChild(o),o.textContent=e,d===e&&n.classList.add("pagination-btn-active"),n.addEventListener("click",(()=>{d=e,t(l,a,d);document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),n.classList.add("pagination-btn-active")})),n}window.innerWidth<768?a=3:window.innerWidth>=768&&window.innerWidth<1280?a=6:window.innerWidth>=1280&&(a=9),t(l,a,d),l.length>a&&function(e,t){const o=document.querySelector(".pagination"),r=Math.ceil(e.length/t),i=document.createElement("ul");i.classList.add("pagination-list");for(let e=0;e<r;e++){const t=n(e+1);i.appendChild(t)}o.appendChild(i)}(l,a)}catch(u){console.log(u)}}L.favoriteHeaderWrapper.style.display="none",L.siteFavoriteHeaderWrapper.addEventListener("mouseover",(()=>{L.favoriteHeaderWrapper.style.display="block"})),L.siteFavoriteHeaderWrapper.addEventListener("mouseout",(()=>{L.favoriteHeaderWrapper.style.display="none"})),L.mobileFavorite.addEventListener("click",(()=>{L.mobileFavorites.classList.toggle("hide-show"),L.iconArrow.classList.toggle("rotate180")})),L.errorEl.style.display="none",L.cardsCaption.style.display="none",L.formEl.addEventListener("submit",q),L.mobileFormEl.addEventListener("submit",q),L.cardsContainerEl.addEventListener("click",(async function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__add")){const e=t.children[1].textContent,{data:n}=await k(e);let o={...n.drinks[0]};w.push(o),localStorage.setItem("favorites",JSON.stringify(w));t.children[2].children[2].style.display="block";t.children[2].children[1].style.display="none"}})),L.cardsContainerEl.addEventListener("click",(function(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__remove")){w=w.filter((e=>e.idDrink!==t.id)),localStorage.setItem("favorites",JSON.stringify(w));t.children[2].children[2].style.display="none";t.children[2].children[1].style.display="block"}})),L.cardsContainerEl.addEventListener("click",C);let w=[],E=[];const _=document.querySelector(".modal-cocktail");async function C(e){const t=e.target.closest(".card");if(e.target.classList.contains("card-btn__learn")){const e=t.children[1].textContent,{data:n}=await k(e),o={...n.drinks[0]},r=[];for(let e in o)e.includes("strIngredient")&&null!==o[e]&&r.push(o[e]);o.ingridients=r;const i=[{...o}];if(window.innerWidth>768){_.innerHTML=(0,c.default)(i),document.querySelector(".cocktail-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const e=JSON.parse(localStorage.getItem("favorites"));if(console.log(e),e.length)for(let n of e){if(+n.idDrink==+t.id){console.log(t.id);const e=document.querySelector(".tablet-btn-add"),n=document.querySelector(".tablet-btn-remove");e.style.display="none",n.style.display="block";break}{console.log(t.id);const e=document.querySelector(".tablet-btn-add"),n=document.querySelector(".tablet-btn-remove");e.style.display="block",n.style.display="none"}}else{const e=document.querySelector(".tablet-btn-add"),t=document.querySelector(".tablet-btn-remove");e.style.display="block",t.style.display="none"}document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent,n=await S(t),o=[{...n.data.ingredients[0]}];L.modalIngr.innerHTML=(0,u.default)(o),document.querySelector(".ingr-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden");document.querySelector(".ingr-icon-close").addEventListener("click",(e=>{r.classList.add("is-hidden"),document.body.style.overflow="hidden"}));const i=document.querySelector(".ingr-btn__remove"),l=document.querySelector(".ingr-btn__add");i.style.display="none",l.addEventListener("click",(()=>{E.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(E)),l.style.display="none",i.style.display="block"})),i.addEventListener("click",(()=>{E.pop(),localStorage.setItem("ingridients",JSON.stringify(E)),i.style.display="none",l.style.display="block"}))}}));const o=document.querySelector(".backdrop");o.classList.remove("is-hidden"),document.body.style.overflow="hidden";const r=document.querySelector(".tablet-btn-add"),l=document.querySelector(".tablet-btn-remove");r.addEventListener("click",(()=>{w.push(n.drinks[0]),localStorage.setItem("favorites",JSON.stringify(w)),l.style.display="block",r.style.display="none";const e=t.children[2].children[1],o=t.children[2].children[2];e.style.display="none",o.style.display="block"})),l.addEventListener("click",(()=>{w=w.filter((e=>e.idDrink!==t.id)),localStorage.setItem("favorites",JSON.stringify(w)),l.style.display="none",r.style.display="block";const e=t.children[2].children[1],n=t.children[2].children[2];e.style.display="block",n.style.display="none"})),o.addEventListener("click",(e=>{e.target.classList.contains("backdrop")&&(o.classList.add("is-hidden"),document.body.style.overflow="auto")}));document.querySelector(".cocktail-icon-close").addEventListener("click",(()=>{o.classList.add("is-hidden"),document.body.style.overflow="auto"}))}else if(window.innerWidth<768){_.innerHTML=(0,d.default)(i);const e=document.querySelector(".coctail");document.querySelector(".mobile-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`,document.body.style.overflow="hidden";document.querySelector(".cocktail-ingridients-list").addEventListener("click",(async e=>{if("LI"===e.target.nodeName){const t=e.target.textContent,n=await S(t),o=[{...n.data.ingredients[0]}];L.modalIngr.innerHTML=(0,y.default)(o),document.querySelector(".mobile-ingr-icon-close").innerHTML=`<use class="use-heart1" href='${v}'></use>`;const r=document.querySelector(".ingr-backdrop");r.classList.remove("is-hidden"),document.body.style.overflow="hidden";document.querySelector(".ingr-icon-close").addEventListener("click",(()=>{r.classList.add("is-hidden"),document.body.style.overflow="hidden"}));const i=document.querySelector(".ingr-btn__remove"),l=document.querySelector(".ingr-btn__add");i.style.display="none",l.addEventListener("click",(()=>{E.push(n.data.ingredients[0]),localStorage.setItem("ingridients",JSON.stringify(E)),l.style.display="none",i.style.display="block"})),i.addEventListener("click",(()=>{E.pop(),localStorage.setItem("ingridients",JSON.stringify(E)),i.style.display="none",l.style.display="block"}))}})),e.style.transform="translateX(0%)";document.querySelector(".mobile-icon-close").addEventListener("click",(()=>{e.style.transform="translateX(-150%)",document.body.style.overflow="auto"}));const o=document.querySelector(".modal-btn-add"),r=document.querySelector(".modal-btn-remove");r.style.display="none",o.addEventListener("click",(()=>{w.push(n.drinks[0]),localStorage.setItem("favorites",JSON.stringify(w)),r.style.display="block",o.style.display="none";const e=t.children[2].children[1],i=t.children[2].children[2];e.style.display="none",i.style.display="block"})),r.addEventListener("click",(()=>{w=w.filter((e=>e.idDrink!==t.id)),localStorage.setItem("favorites",JSON.stringify(w)),r.style.display="none",o.style.display="block";const e=t.children[2].children[1],n=t.children[2].children[2];e.style.display="block",n.style.display="none"}))}}}function H(){const e=document.querySelectorAll(".card-btn__add svg");for(let t of e)t.innerHTML=`<use class="use-heart1" href='${g}'></use>`;const t=document.querySelectorAll(".card-btn__remove svg");for(let e of t)e.innerHTML=`<use class="use-heart1" href='${b}'></use>`}})),o("7Th1V");
//# sourceMappingURL=index.0d7d5275.js.map
