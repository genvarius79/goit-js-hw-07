const categories = document.querySelectorAll(".item");
let temp = [];
console.log(`Number of categories: ${categories.length}`);

categories.forEach((el) => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.childElementCount);
});
