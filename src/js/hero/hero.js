import { fetchCocktail } from './heroAPI.js';

const refs = {
  formSelect: document.querySelector('.js-hero-mobile'),
  formItems: document.querySelector('.js-hero-desktop'),
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

function renderLitery(array) {
  markup = array
    .map(element => {
      // console.log(element)
      return `<option value="${element}">${element}</option>`;
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
  // console.log(nameCocktail);
  fetchCocktail(nameCocktail).then(data => {
    console.log(data);
  });
}

refs.formSelect.addEventListener('chanche', onTargetSearchCocktailClick);

function onTargetSearchCocktailClick(event) {
  event.preventDefault();

  const nameSearchCoctail = event.target.value;

  console.log(nameSearchCoctail);

  fetchCocktail(nameSearchCoctail).then(data => {
    console.log(data);
  });
}
