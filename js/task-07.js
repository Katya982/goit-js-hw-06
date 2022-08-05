const input = document.getElementById("font-size-control");

const spanText = document.getElementById("text");
input.addEventListener("input", (event) => {
    spanText.style.fontSize = event.target.value + 'px';
});