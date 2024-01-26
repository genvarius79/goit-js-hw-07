const registerForm = document.querySelector(".login-form");

function submitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const user = {};
  user[form.elements.email.name] = login.trim();
  user[form.elements.password.name] = password.trim();

  console.log(user);
  form.reset();
}
registerForm.addEventListener("submit", submitHandler);
