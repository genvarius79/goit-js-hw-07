const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((el) => {
  console.log(`Категорія: ${el.firstElementChild.textContent}`);
  console.log(`Елементи: ${el.lastElementChild.childElementCount}`);
});
