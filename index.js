const error = document.createElement("span");
const email = document.getElementById("mail");
const country = document.getElementById("country");

email.addEventListener("input", e => {
    if (email.validity.typeMismatch) {
        error.innerHTML = "Input correct email";
        email.insertAdjacentElement("afterend", error);
        e.preventDefault();
    } else {
        error.remove();
    }
})

country.addEventListener("input", e => {
    if (country.validity.tooShort) {
        error.innerHTML = "Too short name for a country";
        country.insertAdjacentElement("afterend", error);
        e.preventDefault();
    } else {
        error.remove();
    }
})