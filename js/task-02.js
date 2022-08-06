const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrOfLi = [];
  ingredients.forEach((ingredients) => {
  const elemLi = document.createElement('li');
  elemLi.classList.add('item');
  elemLi.textContent = ingredients;
  
  arrOfLi.push(elemLi);
});

list.append(...arrOfLi);