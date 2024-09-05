const errorMessage = document.querySelector(".error p");
const form = document.forms[0];
const email = form.email;

form.addEventListener("submit", function(e) {
    if (!email.value) {
        e.preventDefault();
        email.style.borderColor = "hsl(343, 100%, 58%)";
        errorMessage.textContent = "Oops! Please add your email";
    } else if (email.value.indexOf("@") == -1) {
        e.preventDefault();
        email.style.borderColor = "hsl(343, 100%, 58%)";
        errorMessage.textContent = "Oops! That doesn't look like an email address";
    }
})