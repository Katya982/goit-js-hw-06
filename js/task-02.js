const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function callbackfn(element) {
  const elemLi = document.createElement('li');
  elemLi.classList.add('item');
  elemLi.textContent = element;

  console.log(elemLi);
});
