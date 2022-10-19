const form         = document.querySelector(".second-section__form"),
      inputs       = document.querySelectorAll(".second-section__form-input"),
      errorMessage = document.querySelectorAll(
    ".second-section__form-error-message"
  );

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("input-error");
      input.nextElementSibling.style.display = "block";
    } else {
      input.classList.remove("input-error");
      input.nextElementSibling.style.display = "none";

      if (input.type == "email") {
        if (validateEmail(input.value)) {
          input.classList.remove("input-error");
          input.nextElementSibling.style.display = "none";
        } else {
          input.classList.add("input-error");
          input.nextElementSibling.style.display = "block";
        }
      }
    }
  });
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
