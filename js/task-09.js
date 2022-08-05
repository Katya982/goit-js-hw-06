const widgetEl = document.querySelector(".widget");

const colorEl = document.querySelector(".color");
// console.log(colorEl);

const buttonChangeColorEl = document.querySelector(".change-color");
// console.log(colorEl);

buttonChangeColorEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};