const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);


categories.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent} 
     Elements: ${item.lastElementChild.children.length} `)

});
