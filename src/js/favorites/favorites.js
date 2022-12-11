import axios from 'axios';
import drinkCardTemplate from '../../templates/drink-card.hbs';
import notCocktails from '../../templates/no-cocktails.hbs';
import mobileLearnMore from '../../templates/mobile-modal-cocktail.hbs';
import tabletDesktopCocktail from '../../templates/tablet-desktop-cocktail.hbs';
//
import tabletDesctopIngr from '../../templates/tablet-desctop-ingr-modal.hbs';
import mobileIngrModal from '../../templates/mobile-ingr-modal.hbs';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const refs = {
  mobileFavorite: document.querySelector('.mobile-favorite'),
  mobileFavorites: document.querySelector('.mobile-favorites'),
  iconArrow: document.querySelector('.mobile-arrow'),
  //
  formEl: document.querySelector('.header-form'),
  cardsContainerEl: document.querySelector('.cards-container'),
  cardsCaption: document.querySelector('.cards-title'),
  modalIngr: document.querySelector('.modal-ingr'),
  //
  siteFavoriteHeaderWrapper: document.querySelector(
    '.site-nav-favorite-wrapper'
  ),
  favoriteHeaderWrapper: document.querySelector('.favorite-wrapper'),
};

refs.favoriteHeaderWrapper.style.display = 'none';
refs.siteFavoriteHeaderWrapper.addEventListener('mouseover', () => {
  refs.favoriteHeaderWrapper.style.display = 'block';
});
refs.siteFavoriteHeaderWrapper.addEventListener('mouseout', () => {
  refs.favoriteHeaderWrapper.style.display = 'none';
});

// refs.iconArrow.transform = 'rotate(180deg)';
refs.mobileFavorite.addEventListener('click', () => {
  console.log('111');
  refs.mobileFavorites.classList.toggle('hide-show');
  refs.iconArrow.classList.toggle('rotate180');
});

const axiosGetImages = query => {
  const res = axios.get(`${BASE_URL}?s=${query}`);
  return res;
};

//
const INGR_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const axiosGetIngrByName = query => {
  const res = axios.get(`${INGR_URL}?i=${query}`);
  return res;
};
//
let favoriteIngridients = [];
refs.cardsCaption.style.display = 'none';

window.addEventListener('load', loadFromLS);
refs.cardsContainerEl.addEventListener('click', handlerRemoveFromLS);
refs.cardsContainerEl.addEventListener('click', handlerLearnMore);

// let favoriteIngridients = [];

let favorite = JSON.parse(localStorage.getItem('favorites'));
function loadFromLS() {
  if (!favorite || favorite.length === 0) {
    refs.cardsContainerEl.innerHTML = notCocktails();
  } else {
    const markup = drinkCardTemplate(favorite);
    refs.cardsCaption.style.display = 'block';
    refs.cardsContainerEl.innerHTML = markup;

    const btnsAdd = document.querySelectorAll('.card-btn__add');
    for (let btn of btnsAdd) {
      btn.style.display = 'none';
    }
  }
}

function handlerRemoveFromLS(e) {
  const article = e.target.closest('.card');
  if (e.target.classList.contains('card-btn__remove')) {
    favorite = favorite.filter(drink => drink.idDrink !== article.id);

    localStorage.setItem('favorites', JSON.stringify(favorite));

    const btnRemove = article.children[2].children[2];
    btnRemove.style.display = 'none';
    const btnAdd = article.children[2].children[1];
    btnAdd.style.display = 'block';

    const markup = drinkCardTemplate(favorite);
    refs.cardsContainerEl.innerHTML = markup;

    const btnsAdd = document.querySelectorAll('.card-btn__add');
    for (let btn of btnsAdd) {
      btn.style.display = 'none';
    }
    if (favorite.length === 0) {
      refs.cardsCaption.style.display = 'none';
      refs.cardsContainerEl.innerHTML = notCocktails();
      return;
    }
  }
}

//   =============== Lean More ===============//

const modalCocktailEl = document.querySelector('.modal-cocktail');

async function handlerLearnMore(e) {
  const article = e.target.closest('.card');

  if (e.target.classList.contains('card-btn__learn')) {
    const nameQuery = article.children[1].textContent;
    const { data } = await axiosGetImages(nameQuery);
    console.log(data);
    const newOneData = { ...data.drinks[0] };
    const ingridientsArray = [];

    for (let key in newOneData) {
      if (key.includes('strIngredient') && newOneData[key] !== null) {
        ingridientsArray.push(newOneData[key]);
      }
    }
    newOneData['ingridients'] = ingridientsArray;
    const newData = [{ ...newOneData }];

    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      modalCocktailEl.innerHTML = tabletDesktopCocktail(newData);

      const listIngridients = document.querySelector(
        '.cocktail-ingridients-list'
      );
      listIngridients.addEventListener('click', async e => {
        if (e.target.nodeName === 'LI') {
          const ingrNameQuery = e.target.textContent;
          console.log(ingrNameQuery);

          const ingrData = await axiosGetIngrByName(ingrNameQuery);
          console.log(ingrData.data.ingredients[0]);
          const ingrArr = [{ ...ingrData.data.ingredients[0] }];
          refs.modalIngr.innerHTML = tabletDesctopIngr(ingrArr);
          const ingrBackdrop = document.querySelector('.ingr-backdrop');
          ingrBackdrop.classList.remove('is-hidden');

          const ingrIconClose = document.querySelector('.ingr-icon-close');
          ingrIconClose.addEventListener('click', () => {
            ingrBackdrop.classList.add('is-hidden');
          });

          const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
          const ingrBtnAdd = document.querySelector('.ingr-btn__add');
          ingrBtnRemove.style.display = 'none';

          ingrBtnAdd.addEventListener('click', () => {
            favoriteIngridients.push(ingrData.data.ingredients[0]);
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );

            ingrBtnAdd.style.display = 'none';
            ingrBtnRemove.style.display = 'block';
          });
          ingrBtnRemove.addEventListener('click', () => {
            favoriteIngridients.pop();
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );
            ingrBtnRemove.style.display = 'none';
            ingrBtnAdd.style.display = 'block';
          });
        }
      });

      const backdrop = document.querySelector('.backdrop');
      backdrop.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';

      const addBtn = document.querySelector('.tablet-btn-add');
      const removeBtn = document.querySelector('.tablet-btn-remove');
      addBtn.style.display = 'none';

      addBtn.addEventListener('click', () => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(data.drinks[0]);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        removeBtn.style.display = 'block';
        addBtn.style.display = 'none';
        refs.cardsContainerEl.innerHTML = drinkCardTemplate(favorites);

        const addBtnAll = document.querySelectorAll('.card-btn__add');
        for (let addBtn of addBtnAll) {
          addBtn.style.display = 'none';
        }
      });

      removeBtn.addEventListener('click', e => {
        console.log('remove btn');
        let favorites = JSON.parse(localStorage.getItem('favorites'));

        favorites = favorites.filter(item => item.idDrink !== e.target.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        removeBtn.style.display = 'none';
        addBtn.style.display = 'block';
        refs.cardsContainerEl.innerHTML = drinkCardTemplate(favorites);

        const addBtnAll = document.querySelectorAll('.card-btn__add');
        for (let addBtn of addBtnAll) {
          addBtn.style.display = 'none';
        }
        if (!favorites.length) {
          refs.cardsContainerEl.innerHTML = notCocktails();
        }
      });

      backdrop.addEventListener('click', e => {
        if (e.target.classList.contains('backdrop')) {
          backdrop.classList.add('is-hidden');
          document.body.style.overflow = 'auto';
        }
      });

      const iconClose = document.querySelector('.cocktail-icon-close');
      iconClose.addEventListener('click', () => {
        backdrop.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
      });
    } else if (window.innerWidth < 768) {
      modalCocktailEl.innerHTML = mobileLearnMore(newData);
      const cocktailModal = document.querySelector('.coctail');

      //
      const listIngridients = document.querySelector(
        '.cocktail-ingridients-list'
      );
      listIngridients.addEventListener('click', async e => {
        if (e.target.nodeName === 'LI') {
          const ingrNameQuery = e.target.textContent;
          console.log(ingrNameQuery);

          const ingrData = await axiosGetIngrByName(ingrNameQuery);
          console.log(ingrData.data.ingredients[0]);
          const ingrArr = [{ ...ingrData.data.ingredients[0] }];
          refs.modalIngr.innerHTML = mobileIngrModal(ingrArr);
          const ingrBackdrop = document.querySelector('.ingr-backdrop');
          ingrBackdrop.classList.remove('is-hidden');

          const ingrIconClose = document.querySelector('.ingr-icon-close');
          ingrIconClose.addEventListener('click', () => {
            ingrBackdrop.classList.add('is-hidden');
          });

          const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
          const ingrBtnAdd = document.querySelector('.ingr-btn__add');
          ingrBtnRemove.style.display = 'none';

          ingrBtnAdd.addEventListener('click', () => {
            let ingr = JSON.parse(localStorage.getItem('ingridients'));

            if (!ingr) {
              ingr = [];
            }
            ingr.push(ingrData.data.ingredients[0]);
            localStorage.setItem('ingridients', JSON.stringify(ingr));

            ingrBtnAdd.style.display = 'none';
            ingrBtnRemove.style.display = 'block';
          });
          ingrBtnRemove.addEventListener('click', () => {
            favoriteIngridients.pop();
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );
            ingrBtnRemove.style.display = 'none';
            ingrBtnAdd.style.display = 'block';
          });
        }
      });
      //

      cocktailModal.style.transform = 'translateX(0%)';

      const iconClose = document.querySelector('.mobile-icon-close');
      iconClose.addEventListener('click', () => {
        cocktailModal.style.transform = 'translateX(-150%)';
      });

      const addBtn = document.querySelector('.modal-btn-add');
      const removeBtn = document.querySelector('.modal-btn-remove');
      addBtn.style.display = 'none';

      addBtn.addEventListener('click', () => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(data.drinks[0]);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        removeBtn.style.display = 'block';
        addBtn.style.display = 'none';
        refs.cardsContainerEl.innerHTML = drinkCardTemplate(favorites);

        const addBtnAll = document.querySelectorAll('.card-btn__add');
        for (let addBtn of addBtnAll) {
          addBtn.style.display = 'none';
        }
      });

      removeBtn.addEventListener('click', e => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));

        favorites = favorites.filter(item => item.idDrink !== e.target.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        removeBtn.style.display = 'none';
        addBtn.style.display = 'block';
        refs.cardsContainerEl.innerHTML = drinkCardTemplate(favorites);

        const addBtnAll = document.querySelectorAll('.card-btn__add');
        for (let addBtn of addBtnAll) {
          addBtn.style.display = 'none';
        }
        if (!favorites.length) {
          refs.cardsContainerEl.innerHTML = notCocktails();
        }
      });
    }
  }
}
