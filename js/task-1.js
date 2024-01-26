const ulCategories = document.querySelectorAll(".item");
let temp = [];
console.log(`Number of categories: ${ulCategories.length}`);
ulCategories.forEach((el) => {
  temp.push(el.children[1].children.length);
});
const headTwo = document.querySelectorAll(".head-two");
for (let i = 0; i < headTwo.length; i++) {
  console.log(`Category: ${headTwo[i].textContent}`);
  console.log(`Elements: ${temp[i]}`);
}
