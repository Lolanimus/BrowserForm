const error = document.createElement("span");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pswrd = document.getElementById('psword');
const pswrdReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

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

zip.addEventListener("input", e => {
    if (zip.validity.tooShort || zip.validity.tooLong) {
        error.innerHTML = "Sorry, we support only American ZIP";
        zip.insertAdjacentElement("afterend", error);
        e.preventDefault();
    } else {
        error.remove();
    }
})

pswrd.addEventListener("input", e => {
    console.log(pswrd.validity);
    if (pswrd.validity.tooShort) {
        error.innerHTML = "Password is too short";
        pswrd.insertAdjacentElement("afterend", error);
        e.preventDefault();
    } else if (pswrdReg.test(pswrd)) {
        error.innerHTML = "Password should contain";
        pswrd.insertAdjacentElement("afterend", error);
        e.preventDefault();
    } else {
        error.remove();
    }
})

