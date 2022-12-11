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
const iconHeart1 = document.querySelector('.div-icon-heart1');
const iconHeart2 = document.querySelector('.div-icon-heart2');
const iconClose = document.querySelector('.div-icon-close');
const useHeart1 = iconHeart1.href.baseVal;
const useHeart2 = iconHeart2.href.baseVal;
const useClose = iconClose.href.baseVal;

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
      addSvgUseHearts();
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
    //  displayPagination(cocktailsData, rows);
    if (cocktailsData.length > rows) {
      displayPagination(cocktailsData, rows);
    }
    //   pagination test //
  } catch (error) {
    console.log(error);
  }
}

refs.formSelect.addEventListener('change', onTargetSearchCocktailChange);

const myForm = document.querySelector('.my-form');
const mySelect = document.querySelector('.my-select');
const myDivOptions = document.querySelector('.my-div-options');
const myDivArrow = document.querySelector('.my-div-arrow');
console.dir(myDivOptions);

myForm.addEventListener('click', async event => {
  event.preventDefault();
  mySelect.classList.toggle('active-select');

  mySelect.addEventListener('click', async event => {
    event.preventDefault();
    refs.paginationContainer.innerHTML = '';
    refs.paginationListContainer.innerHTML = '';

    try {
      const nameSearchCoctail = event.target.textContent.trim();
      myDivOptions.textContent = nameSearchCoctail;

      myForm.style.backgroundColor = '#fd5103';
      myForm.style.borderRadius = '4px';
		 myDivOptions.style.color = '#fff';
		 
      myDivArrow.style.stroke = '#fff';

      const { data } = await fetchCocktail(nameSearchCoctail);
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
        addSvgUseHearts();
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
      // displayPagination(cocktailsData, rows);
      if (cocktailsData.length > rows) {
        displayPagination(cocktailsData, rows);
      }
    } catch (error) {
      console.log(error);
    }
  });
});

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
      addSvgUseHearts();
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
    //  displayPagination(cocktailsData, rows);
    if (cocktailsData.length > rows) {
      displayPagination(cocktailsData, rows);
    }
  } catch (error) {
    console.log(error);
  }
}

//
function addSvgUseHearts() {
  const addBtnsSvg = document.querySelectorAll('.card-btn__add svg');
  for (let svg of addBtnsSvg) {
    svg.innerHTML = `<use class="use-heart1" href='${useHeart1}'></use>`;
  }
  const removeBtnsSvg = document.querySelectorAll('.card-btn__remove svg');
  for (let svg of removeBtnsSvg) {
    svg.innerHTML = `<use class="use-heart1" href='${useHeart2}'></use>`;
  }
}
