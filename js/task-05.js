const input = document.querySelector('#name-input');

const nameInput = document.querySelector('#name-output');

function onInputAction(event) {
    const valueInput = event.currentTarget.value;

    if (valueInput.length === ' ') {
        return nameInput.textContent = 'Anonimus';
    }

    nameInput.textContent = valueInput;

}

input.addEventListener('input', onInputAction)