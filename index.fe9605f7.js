var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("2shzp"),r=o("QG6gt");o("8EZAg"),o("aN9pz"),o("eT0hc"),o("iZbkS");var a=o("7Th1V");const l=document.querySelector(".div-icon-heart1"),c=document.querySelector(".div-icon-heart2"),d=document.querySelector(".div-icon-close"),s=l.href.baseVal,u=c.href.baseVal,p=(d.href.baseVal,e=>i.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`)),f={formSelect:document.querySelector(".js-hero-mobile"),formItems:document.querySelector(".js-hero-desktop"),cardsContainerEl:document.querySelector(".cards-container"),cardsCaption:document.querySelector(".cards-title"),errorEl:document.querySelector(".not-found-markup"),modalIngr:document.querySelector(".modal-ingr"),paginationContainer:document.querySelector(".pagination-container"),paginationListContainer:document.querySelector(".pagination")},y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let h=[],m=[];h=y.map((e=>`<option class="hero__name-search" value="${e}">${e}</option>`)).join(""),f.formSelect.insertAdjacentHTML("beforeend",h),m=y.map((e=>`<li class="hero__name-items list">${e}</li>`)).join(""),f.formItems.insertAdjacentHTML("beforeend",m),f.formItems.addEventListener("click",(async function(e){e.preventDefault(),f.paginationContainer.innerHTML="",f.paginationListContainer.innerHTML="";try{const o=e.target.textContent,{data:i}=await p(o);if(null===i.drinks)return f.cardsCaption.style.display="none",void(f.cardsContainerEl.innerHTML=f.errorEl.innerHTML);f.cardsCaption.style.display="block";const a=document.querySelectorAll(".card-btn__remove");for(let s of a)s.style.display="none";const l=i.drinks;let c,d=1;function n(e,n,t){document.querySelector(".pagination-container").innerHTML="";const o=n*--t,i=o+n,a=e.slice(o,i);f.cardsContainerEl.innerHTML=(0,r.default)(a),C();const l=JSON.parse(localStorage.getItem("favorites")),c=document.querySelectorAll(".card");if(console.log(c),console.log(l),null!==l&&l.length)for(let e of c){console.log(e.children[1].textContent);for(let n of l){if(e.children[1].textContent===n.strDrink){console.log("yes"),e.children[2].children[1].style.display="none",e.children[2].children[2].style.display="block";break}e.children[2].children[1].style.display="block",e.children[2].children[2].style.display="none"}}else for(let e of c)e.children[2].children[1].style.display="block",e.children[2].children[2].style.display="none";a.forEach((e=>{document.createElement("div").innerHTML=e.strDrink}))}function t(e){const t=document.createElement("li"),o=document.createElement("span");return o.classList.add("pagination-btn-page"),t.classList.add("pagination-btn"),t.appendChild(o),o.textContent=e,d===e&&t.classList.add("pagination-btn-active"),t.addEventListener("click",(()=>{d=e,n(l,c,d);document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),t.classList.add("pagination-btn-active")})),t}window.innerWidth<768?c=3:window.innerWidth>=768&&window.innerWidth<1280?c=6:window.innerWidth>=1280&&(c=9),n(l,c,d),l.length>c&&function(e,n){const o=document.querySelector(".pagination"),i=Math.ceil(e.length/n),r=document.createElement("ul");r.classList.add("pagination-list");for(let e=0;e<i;e++){const n=t(e+1);r.appendChild(n)}o.appendChild(r)}(l,c)}catch(u){console.log(u)}})),f.cardsContainerEl.addEventListener("click",a.handlerLearnMore),f.formSelect.addEventListener("change",(async function(e){e.preventDefault(),f.paginationContainer.innerHTML="",f.paginationListContainer.innerHTML="";try{const o=e.target.value,{data:i}=await p(o);if(null===i.drinks)return f.cardsCaption.style.display="none",void(f.cardsContainerEl.innerHTML=f.errorEl.innerHTML);f.cardsCaption.style.display="block";const a=document.querySelectorAll(".card-btn__remove");for(let s of a)s.style.display="none";const l=i.drinks;let c,d=1;function n(e,n,t){document.querySelector(".pagination-container").innerHTML="";const o=n*--t,i=o+n,a=e.slice(o,i);f.cardsContainerEl.innerHTML=(0,r.default)(a),C();const l=document.querySelectorAll(".card-btn__remove");for(let e of l)e.style.display="none";a.forEach((e=>{document.createElement("div").innerHTML=e.strDrink}))}function t(e){const t=document.createElement("li"),o=document.createElement("span");return o.classList.add("pagination-btn-page"),t.classList.add("pagination-btn"),t.appendChild(o),o.textContent=e,d===e&&t.classList.add("pagination-btn-active"),t.addEventListener("click",(()=>{d=e,n(l,c,d);document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),t.classList.add("pagination-btn-active")})),t}window.innerWidth<768?c=3:window.innerWidth>=768&&window.innerWidth<1280?c=6:window.innerWidth>=1280&&(c=9),n(l,c,d),l.length>c&&function(e,n){const o=document.querySelector(".pagination"),i=Math.ceil(e.length/n),r=document.createElement("ul");r.classList.add("pagination-list");for(let e=0;e<i;e++){const n=t(e+1);r.appendChild(n)}o.appendChild(r)}(l,c)}catch(u){console.log(u)}}));const g=document.querySelector(".my-form"),L=document.querySelector(".my-select"),v=document.querySelector(".my-div-options"),b=document.querySelector(".my-div-arrow");function C(){const e=document.querySelectorAll(".card-btn__add svg");for(let n of e)n.innerHTML=`<use class="use-heart1" href='${s}'></use>`;const n=document.querySelectorAll(".card-btn__remove svg");for(let e of n)e.innerHTML=`<use class="use-heart1" href='${u}'></use>`}g.addEventListener("click",(async e=>{e.preventDefault(),L.classList.toggle("active-select"),L.addEventListener("click",(async e=>{e.preventDefault(),f.paginationContainer.innerHTML="",f.paginationListContainer.innerHTML="";try{const o=e.target.textContent.trim();v.textContent=o,g.style.backgroundColor="#fd5103",g.style.borderRadius="4px",v.style.color="#fff",b.style.stroke="#fff";const{data:i}=await p(o);if(null===i.drinks)return f.cardsCaption.style.display="none",void(f.cardsContainerEl.innerHTML=f.errorEl.innerHTML);f.cardsCaption.style.display="block";const a=document.querySelectorAll(".card-btn__remove");for(let s of a)s.style.display="none";const l=i.drinks;let c,d=1;function n(e,n,t){document.querySelector(".pagination-container").innerHTML="";const o=n*--t,i=o+n,a=e.slice(o,i);f.cardsContainerEl.innerHTML=(0,r.default)(a),C();const l=JSON.parse(localStorage.getItem("favorites")),c=document.querySelectorAll(".card");if(console.log(c),console.log(l),null!==l&&l.length)for(let e of c){console.log(e.children[1].textContent);for(let n of l){if(e.children[1].textContent===n.strDrink){console.log("yes"),e.children[2].children[1].style.display="none",e.children[2].children[2].style.display="block";break}e.children[2].children[1].style.display="block",e.children[2].children[2].style.display="none"}}else for(let e of c)e.children[2].children[1].style.display="block",e.children[2].children[2].style.display="none";a.forEach((e=>{document.createElement("div").innerHTML=e.strDrink}))}function t(e){const t=document.createElement("li"),o=document.createElement("span");return o.classList.add("pagination-btn-page"),t.classList.add("pagination-btn"),t.appendChild(o),o.textContent=e,d===e&&t.classList.add("pagination-btn-active"),t.addEventListener("click",(()=>{d=e,n(l,c,d);document.querySelector("li.pagination-btn-active").classList.remove("pagination-btn-active"),t.classList.add("pagination-btn-active")})),t}window.innerWidth<768?c=3:window.innerWidth>=768&&window.innerWidth<1280?c=6:window.innerWidth>=1280&&(c=9),n(l,c,d),l.length>c&&function(e,n){const o=document.querySelector(".pagination"),i=Math.ceil(e.length/n),r=document.createElement("ul");r.classList.add("pagination-list");for(let e=0;e<i;e++){const n=t(e+1);r.appendChild(n)}o.appendChild(r)}(l,c)}catch(u){console.log(u)}}))}));
//# sourceMappingURL=index.fe9605f7.js.map
