function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
};

const buttonChangeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');


buttonChangeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
});


