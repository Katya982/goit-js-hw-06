const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    
    const {
        elements = { email, password },
    } = event.currentTarget;
    
    alert(elements.email.value);

  if (elements.email.value === "" || elements.password.value === "") {
      return alert("Please fill in all the fields!");
  }

    console.log(`Login: ${elements.email.value}, Password: ${elements.password.value}`);
  event.currentTarget.reset()
}