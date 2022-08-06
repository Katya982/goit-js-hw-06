const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    
    const {
        elements = { email, password },
    } = event.currentTarget;
    
    console.log(elements.email.value);

  if (elements.email.value === "" || elements.password.value === "") {
      return console.log("Please fill in all the fields!");
  }

    console.log(`Login: ${elements.email.value}, Password: ${elements.password.value}`);
  event.currentTarget.reset()
};
