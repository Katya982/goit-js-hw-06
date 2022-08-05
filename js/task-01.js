const navEl = document.querySelector("#categories");

const array = navEl.querySelector('item');
console.log(array);

const arr = document.querySelectorAll(".item ul");

arr.forEach(function callbackfn(items) {
    const elemLi = items.children;
    const number = `Elements: ${elemLi.length}`;
    console.log(number);
});

const text = document.querySelectorAll('.item h2');

text.forEach(function (number) {
    const arr = `Category: ${number.textContent}`;
    console.log(arr);
});