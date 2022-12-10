const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php`;

export function fetchCocktail(value) {
  return fetch(`${URL}?f=${value}`).then(response => {
    return response.json();
    // console.log(response.json());
  });
}
