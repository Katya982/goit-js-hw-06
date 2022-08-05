let counterValue = 0;

const minusButton = document.querySelector('[data-action = "decrement"]');
const plusButton = document.querySelector('[data-action = "increment"]');
const counterButton = document.querySelector('#value');

const minusClick = () => {
    counterValue -= 1;

    counterButton.textContent = counterValue
};

const plusClick = () => {
    counterValue += 1;

    counterButton.textContent = counterValue
};

minusButton.addEventListener("click", minusClick);

plusButton.addEventListener("click", plusClick);