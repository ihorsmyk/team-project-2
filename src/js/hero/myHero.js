import axios from 'axios';
import drinkCardTemplate from '../../templates/drink-card.hbs';
import mobileLearnMore from '../../templates/mobile-modal-cocktail.hbs';
import tabletDesktopCocktail from '../../templates/tablet-desktop-cocktail.hbs';
import tabletDesctopIngr from '../../templates/tablet-desctop-ingr-modal.hbs';
import mobileIngrModal from '../../templates/mobile-ingr-modal.hbs';
import { handlerLearnMore } from '../header/header.js';
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php`;

// function fetchCocktail(value) {
//   return fetch(`${URL}?f=${value}`).then(response => {
//     return response.json();
//   });
// }
const fetchCocktail = value => {
  const res = axios.get(`${URL}?f=${value}`);
  return res;
};

const axiosGetImages = query => {
  const res = axios.get(`${BASE_URL}?s=${query}`);
  return res;
};
const axiosGetIngrByName = query => {
  const res = axios.get(`${INGR_URL}?i=${query}`);
  return res;
};

const refs = {
  formSelect: document.querySelector('.js-hero-mobile'),
  formItems: document.querySelector('.js-hero-desktop'),
  //   ========
  cardsContainerEl: document.querySelector('.cards-container'),
  cardsCaption: document.querySelector('.cards-title'),
  errorEl: document.querySelector('.not-found-markup'),
  modalIngr: document.querySelector('.modal-ingr'),
  paginationContainer: document.querySelector('.pagination-container'),
  paginationListContainer: document.querySelector('.pagination'),
  // ==========
};
// console.log(refs.formSelect);

const array = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

let markup = [];
let markupItems = [];

function renderLitery(array) {
  markup = array
    .map(element => {
      // console.log(element)
      return `<option class="hero__name-search" value="${element}">${element}</option>`;
    })
    .join('');
}

renderLitery(array);

refs.formSelect.insertAdjacentHTML('beforeend', markup);

function renderItemsLitery(array) {
  markupItems = array
    .map(element => {
      return `<li class="hero__name-items list">${element}</li>`;
    })
    .join('');
}

renderItemsLitery(array);
refs.formItems.insertAdjacentHTML('beforeend', markupItems);

refs.formItems.addEventListener('click', onTargetCocktailClick);

// my listeners

// refs.cardsContainerEl.addEventListener('click', handlerAddToLS);
// refs.cardsContainerEl.addEventListener('click', handlerRemoveFromLS);
refs.cardsContainerEl.addEventListener('click', handlerLearnMore);

async function onTargetCocktailClick(event) {
  event.preventDefault();
  //
  refs.paginationContainer.innerHTML = '';
  refs.paginationListContainer.innerHTML = '';
  try {
    const nameCocktail = event.target.textContent;
    const { data } = await fetchCocktail(nameCocktail);

    if (data.drinks === null) {
      refs.cardsCaption.style.display = 'none';
      refs.cardsContainerEl.innerHTML = refs.errorEl.innerHTML;
      return;
    }

    refs.cardsCaption.style.display = 'block';
    const btnsRemove = document.querySelectorAll('.card-btn__remove');
    for (let btn of btnsRemove) {
      btn.style.display = 'none';
    }

    //   pagination test //
    const cocktailsData = data.drinks;
    let currentPage = 1;
    let rows;
    if (window.innerWidth < 768) {
      rows = 3;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      rows = 6;
    } else if (window.innerWidth >= 1280) {
      rows = 9;
    }

    function displayList(cocktailsArr, rowPerPage, page) {
      const paginationContainer = document.querySelector(
        '.pagination-container'
      );
      paginationContainer.innerHTML = '';
      page--;
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = cocktailsArr.slice(start, end);
      //
      refs.cardsContainerEl.innerHTML = drinkCardTemplate(paginatedData);
      const btnsRemove = document.querySelectorAll('.card-btn__remove');
      for (let btn of btnsRemove) {
        btn.style.display = 'none';
      }
      //

      paginatedData.forEach(el => {
        const cocktailEl = document.createElement('div');
        cocktailEl.innerHTML = el.strDrink;
      });
    }
    function displayPagination(cocktailsArr, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(cocktailsArr.length / rowPerPage);
      const ulEl = document.createElement('ul');
      ulEl.classList.add('pagination-list');

      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
      }
      paginationEl.appendChild(ulEl);
    }
    function displayPaginationBtn(page) {
      const liEl = document.createElement('li');
      const spanEl = document.createElement('span');
      spanEl.classList.add('pagination-btn-page');
      liEl.classList.add('pagination-btn');
      liEl.appendChild(spanEl);
      spanEl.textContent = page;

      if (currentPage === page) liEl.classList.add('pagination-btn-active');

      liEl.addEventListener('click', () => {
        currentPage = page;
        displayList(cocktailsData, rows, currentPage);

        const currentLi = document.querySelector('li.pagination-btn-active');
        currentLi.classList.remove('pagination-btn-active');

        liEl.classList.add('pagination-btn-active');
      });
      return liEl;
    }

    displayList(cocktailsData, rows, currentPage);
    displayPagination(cocktailsData, rows);
    //   pagination test //
  } catch (error) {
    console.log(error);
  }
}

refs.formSelect.addEventListener('change', onTargetSearchCocktailChange);

async function onTargetSearchCocktailChange(event) {
  event.preventDefault();
  refs.paginationContainer.innerHTML = '';
  refs.paginationListContainer.innerHTML = '';
  console.log(event.target.value);

  try {
    const nameSearchCoctail = event.target.value;
    const { data } = await fetchCocktail(nameSearchCoctail);
    console.log(data);
    if (data.drinks === null) {
      refs.cardsCaption.style.display = 'none';
      refs.cardsContainerEl.innerHTML = refs.errorEl.innerHTML;
      return;
    }
    refs.cardsCaption.style.display = 'block';
    const btnsRemove = document.querySelectorAll('.card-btn__remove');
    for (let btn of btnsRemove) {
      btn.style.display = 'none';
    }

    //   pagination test //
    const cocktailsData = data.drinks;
    let currentPage = 1;
    let rows;
    if (window.innerWidth < 768) {
      rows = 3;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      rows = 6;
    } else if (window.innerWidth >= 1280) {
      rows = 9;
    }

    function displayList(cocktailsArr, rowPerPage, page) {
      const paginationContainer = document.querySelector(
        '.pagination-container'
      );
      paginationContainer.innerHTML = '';
      page--;
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = cocktailsArr.slice(start, end);
      //
      refs.cardsContainerEl.innerHTML = drinkCardTemplate(paginatedData);
      const btnsRemove = document.querySelectorAll('.card-btn__remove');
      for (let btn of btnsRemove) {
        btn.style.display = 'none';
      }
      //

      paginatedData.forEach(el => {
        const cocktailEl = document.createElement('div');
        cocktailEl.innerHTML = el.strDrink;
      });
    }
    function displayPagination(cocktailsArr, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(cocktailsArr.length / rowPerPage);
      const ulEl = document.createElement('ul');
      ulEl.classList.add('pagination-list');

      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
      }
      paginationEl.appendChild(ulEl);
    }
    function displayPaginationBtn(page) {
      const liEl = document.createElement('li');
      const spanEl = document.createElement('span');
      spanEl.classList.add('pagination-btn-page');
      liEl.classList.add('pagination-btn');
      liEl.appendChild(spanEl);
      spanEl.textContent = page;

      if (currentPage === page) liEl.classList.add('pagination-btn-active');

      liEl.addEventListener('click', () => {
        currentPage = page;
        displayList(cocktailsData, rows, currentPage);

        const currentLi = document.querySelector('li.pagination-btn-active');
        currentLi.classList.remove('pagination-btn-active');

        liEl.classList.add('pagination-btn-active');
      });
      return liEl;
    }

    displayList(cocktailsData, rows, currentPage);
    displayPagination(cocktailsData, rows);
  } catch (error) {
    console.log(error);
  }
  //  old
  //   const nameSearchCoctail = event.target.value;

  //   fetchCocktail(nameSearchCoctail).then(data => {
  //     console.log('data mobile');
  //     console.log(data);
  //   });
}

//  =========== paste

// const modalCocktailEl = document.querySelector('.modal-cocktail');

// async function handlerLearnMore(e) {
//   const article = e.target.closest('.card');

//   if (e.target.classList.contains('card-btn__learn')) {
//     const nameQuery = article.children[1].textContent;
//     const { data } = await axiosGetImages(nameQuery);
//     console.log(data);
//     const newOneData = { ...data.drinks[0] };
//     const ingridientsArray = [];

//     for (let key in newOneData) {
//       if (key.includes('strIngredient') && newOneData[key] !== null) {
//         ingridientsArray.push(newOneData[key]);
//       }
//     }
//     newOneData['ingridients'] = ingridientsArray;
//     const newData = [{ ...newOneData }];
//     console.log(newOneData);

//     console.log(window.innerWidth);
//     if (window.innerWidth > 768) {
//       modalCocktailEl.innerHTML = tabletDesktopCocktail(newData);

//       const listIngridients = document.querySelector(
//         '.cocktail-ingridients-list'
//       );
//       listIngridients.addEventListener('click', async e => {
//         if (e.target.nodeName === 'LI') {
//           const ingrNameQuery = e.target.textContent;
//           console.log(ingrNameQuery);

//           const ingrData = await axiosGetIngrByName(ingrNameQuery);
//           console.log(ingrData.data.ingredients[0]);
//           const ingrArr = [{ ...ingrData.data.ingredients[0] }];
//           refs.modalIngr.innerHTML = tabletDesctopIngr(ingrArr);
//           const ingrBackdrop = document.querySelector('.ingr-backdrop');
//           ingrBackdrop.classList.remove('is-hidden');

//           const ingrIconClose = document.querySelector('.ingr-icon-close');
//           ingrIconClose.addEventListener('click', () => {
//             ingrBackdrop.classList.add('is-hidden');
//           });

//           const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
//           const ingrBtnAdd = document.querySelector('.ingr-btn__add');
//           ingrBtnRemove.style.display = 'none';

//           ingrBtnAdd.addEventListener('click', () => {
//             favoriteIngridients.push(ingrData.data.ingredients[0]);
//             localStorage.setItem(
//               'ingridients',
//               JSON.stringify(favoriteIngridients)
//             );

//             ingrBtnAdd.style.display = 'none';
//             ingrBtnRemove.style.display = 'block';
//           });
//           ingrBtnRemove.addEventListener('click', () => {
//             favoriteIngridients.pop();
//             localStorage.setItem(
//               'ingridients',
//               JSON.stringify(favoriteIngridients)
//             );
//             ingrBtnRemove.style.display = 'none';
//             ingrBtnAdd.style.display = 'block';
//           });
//         }
//       });

//       const backdrop = document.querySelector('.backdrop');
//       backdrop.classList.remove('is-hidden');
//       document.body.style.overflow = 'hidden';

//       const addBtn = document.querySelector('.tablet-btn-add');
//       const removeBtn = document.querySelector('.tablet-btn-remove');
//       removeBtn.style.display = 'none';

//       addBtn.addEventListener('click', () => {
//         favoriteDrinks.push(data.drinks[0]);
//         localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
//         removeBtn.style.display = 'block';
//         addBtn.style.display = 'none';
//       });

//       removeBtn.addEventListener('click', () => {
//         favoriteDrinks.pop();
//         localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
//         removeBtn.style.display = 'none';
//         addBtn.style.display = 'block';
//       });

//       backdrop.addEventListener('click', e => {
//         if (e.target.classList.contains('backdrop')) {
//           backdrop.classList.add('is-hidden');
//           document.body.style.overflow = 'auto';
//         }
//       });

//       const iconClose = document.querySelector('.cocktail-icon-close');
//       iconClose.addEventListener('click', () => {
//         backdrop.classList.add('is-hidden');
//         document.body.style.overflow = 'auto';
//       });
//     } else if (window.innerWidth < 768) {
//       modalCocktailEl.innerHTML = mobileLearnMore(newData);
//       const cocktailModal = document.querySelector('.coctail');
//       console.log(cocktailModal);

//       //
//       document.body.style.overflow = 'hidden';
//       //
//       const listIngridients = document.querySelector(
//         '.cocktail-ingridients-list'
//       );
//       listIngridients.addEventListener('click', async e => {
//         if (e.target.nodeName === 'LI') {
//           const ingrNameQuery = e.target.textContent;
//           console.log(ingrNameQuery);

//           const ingrData = await axiosGetIngrByName(ingrNameQuery);
//           console.log(ingrData.data.ingredients[0]);
//           const ingrArr = [{ ...ingrData.data.ingredients[0] }];
//           refs.modalIngr.innerHTML = mobileIngrModal(ingrArr);
//           const ingrBackdrop = document.querySelector('.ingr-backdrop');
//           ingrBackdrop.classList.remove('is-hidden');
//           document.body.style.overflow = 'hidden';

//           const ingrIconClose = document.querySelector('.ingr-icon-close');
//           ingrIconClose.addEventListener('click', () => {
//             ingrBackdrop.classList.add('is-hidden');
//             document.body.style.overflow = 'auto';
//           });

//           const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
//           const ingrBtnAdd = document.querySelector('.ingr-btn__add');
//           ingrBtnRemove.style.display = 'none';

//           ingrBtnAdd.addEventListener('click', () => {
//             favoriteIngridients.push(ingrData.data.ingredients[0]);
//             localStorage.setItem(
//               'ingridients',
//               JSON.stringify(favoriteIngridients)
//             );

//             ingrBtnAdd.style.display = 'none';
//             ingrBtnRemove.style.display = 'block';
//           });
//           ingrBtnRemove.addEventListener('click', () => {
//             favoriteIngridients.pop();
//             localStorage.setItem(
//               'ingridients',
//               JSON.stringify(favoriteIngridients)
//             );
//             ingrBtnRemove.style.display = 'none';
//             ingrBtnAdd.style.display = 'block';
//           });
//         }
//       });
//       //

//       cocktailModal.style.transform = 'translateX(0%)';

//       const iconClose = document.querySelector('.mobile-icon-close');
//       iconClose.addEventListener('click', () => {
//         cocktailModal.style.transform = 'translateX(-150%)';
//         document.body.style.overflow = 'auto';
//       });

//       const addBtn = document.querySelector('.modal-btn-add');
//       const removeBtn = document.querySelector('.modal-btn-remove');
//       removeBtn.style.display = 'none';

//       addBtn.addEventListener('click', () => {
//         console.log('me add');
//         favoriteDrinks.push(data.drinks[0]);
//         localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
//         removeBtn.style.display = 'block';
//         addBtn.style.display = 'none';
//       });

//       removeBtn.addEventListener('click', () => {
//         favoriteDrinks.pop();
//         localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
//         removeBtn.style.display = 'none';
//         addBtn.style.display = 'block';
//       });
//     }
//   }
// }
