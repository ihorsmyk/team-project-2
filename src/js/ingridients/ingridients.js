import axios from 'axios';
import ingridient from '../../templates/ingridients.hbs';
import noIngridients from '../../templates/no-ingridients.hbs';

import tabletDesctopIngr from '../../templates/tablet-desctop-ingr-modal.hbs';

const refs = {
  mobileFavorite: document.querySelector('.mobile-favorite'),
  mobileFavorites: document.querySelector('.mobile-favorites'),
  iconArrow: document.querySelector('.mobile-arrow'),
  //
  ingrContainer: document.querySelector('.ingridients-container'),
  ingrCaption: document.querySelector('.ingridients-title'),
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

const INGR_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const axiosGetIngrByName = query => {
  const res = axios.get(`${INGR_URL}?i=${query}`);
  return res;
};

const ingridientsFromLS = JSON.parse(localStorage.getItem('ingridients'));
window.addEventListener('load', () => {
  if (!ingridientsFromLS || ingridientsFromLS.length === 0) {
    refs.ingrCaption.style.display = 'none';
    refs.ingrContainer.style.display = 'flex';
    refs.ingrContainer.innerHTML = noIngridients();
  } else {
    refs.ingrContainer.innerHTML = ingridient(ingridientsFromLS);
  }
});

const ingrContainer = document.querySelector('.ingridients-container');

ingrContainer.addEventListener('click', async e => {
  const article = e.target.closest('.ingridient');

  if (e.target.classList.contains('ingridient-btn__learn')) {
    const nameQuery = article.children[0].textContent;
    const { data } = await axiosGetIngrByName(nameQuery);
    console.log(data);
    const newData = [data.ingredients[0]];
    console.log(newData);
    const ingrBackDrop = document.querySelector('.ingr-backdrop');

    refs.modalIngr.innerHTML = tabletDesctopIngr(newData);
    const addBtnModal = document.querySelector('.ingr-btn__add');
    const removeBtnModal = document.querySelector('.ingr-btn__remove');
    addBtnModal.style.display = 'none';

    let itemAct;
    removeBtnModal.addEventListener('click', () => {
      addBtnModal.style.display = 'block';
      removeBtnModal.style.display = 'none';
      //
      let ingrs = JSON.parse(localStorage.getItem('ingridients'));

      itemAct = {
        ...ingrs.filter(
          item => item.strIngredient === article.children[0].textContent
        ),
      };
      ingrs = ingrs.filter(
        item => item.strIngredient !== article.children[0].textContent
      );
      refs.ingrContainer.innerHTML = ingridient(ingrs);
      console.log(ingrs.length);

      localStorage.setItem('ingridients', JSON.stringify(ingrs));

      //
      if (!ingrs.length) {
        refs.ingrCaption.style.display = 'none';
        refs.ingrContainer.style.display = 'flex';
        refs.ingrContainer.innerHTML = noIngridients();
        return;
      }
    });

    addBtnModal.addEventListener('click', () => {
      addBtnModal.style.display = 'none';
      removeBtnModal.style.display = 'block';
      //
      console.log(itemAct[0]);

      let ingrs = JSON.parse(localStorage.getItem('ingridients'));
      ingrs.push(itemAct[0]);
      localStorage.setItem('ingridients', JSON.stringify(ingrs));
      const newIngrs = JSON.parse(localStorage.getItem('ingridients'));
      refs.ingrContainer.innerHTML = ingridient(newIngrs);
    });

    const ingrBackdrop = document.querySelector('.ingr-backdrop');
    ingrBackdrop.classList.remove('is-hidden');

    const ingrIconClose = document.querySelector('.ingr-icon-close');
    ingrIconClose.addEventListener('click', () => {
      ingrBackdrop.classList.add('is-hidden');
    });
  } else if (e.target.classList.contains('ingridient-btn__remove')) {
    let ingrs = JSON.parse(localStorage.getItem('ingridients'));

    ingrs = ingrs.filter(
      item => item.strIngredient !== article.children[0].textContent
    );
    refs.ingrContainer.innerHTML = ingridient(ingrs);
    console.log(ingrs.length);

    localStorage.setItem('ingridients', JSON.stringify(ingrs));
    if (!ingrs.length) {
      refs.ingrCaption.style.display = 'none';
      refs.ingrContainer.style.display = 'flex';
      refs.ingrContainer.innerHTML = noIngridients();
      localStorage.removeItem('ingridients');
      return;
    }
  }
});
//
