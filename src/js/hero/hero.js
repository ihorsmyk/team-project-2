import { fetchCocktail } from './heroAPI.js';

const refs = {
  formSelect: document.querySelector('.js-hero-mobile'),
  formItems: document.querySelector('.js-hero-desktop'),
};

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

function renderLitery(array) {
  markup = array
    .map(element => {
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

function onTargetCocktailClick(event) {
  event.preventDefault();
  const nameCocktail = event.target.textContent;

  fetchCocktail(nameCocktail).then(data => {});
}

refs.formSelect.addEventListener('change', onTargetSearchCocktailChange);

function onTargetSearchCocktailChange(event) {
  event.preventDefault();
  const nameSearchCoctail = event.target.value;
  fetchCocktail(nameSearchCoctail).then(data => {});
}
