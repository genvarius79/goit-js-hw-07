const nameInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
const span = output.textContent;
nameInput.addEventListener("input", (event) => {
  if (event.target.value.trim() !== "") {
    output.textContent = event.target.value;
  } else output.textContent = span;
});
