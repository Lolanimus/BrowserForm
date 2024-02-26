const email = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pswrd = document.getElementById('pswrd');
const pswrdConf = document.getElementById("pswrdConf");
const submitBtn = document.getElementById("submitBtm");
const form = document.querySelector('form');
const pswrdReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

email.addEventListener("input", e => {
    const error = document.querySelector("#mail + span");
    if (email.validity.typeMismatch) {
        error.innerHTML = "Input correct email";
        error.classList.remove("hidden");
        e.preventDefault();
    } else {
        error.classList.add("hidden");
    }
})

country.addEventListener("input", e => {
    const error = document.querySelector("#country + span");
    if (country.validity.tooShort) {
        error.innerHTML = "Too short name for a country";
        error.classList.remove("hidden");
        e.preventDefault();
    } else {
        error.classList.add("hidden");
    }
})

zip.addEventListener("input", e => {
    const error = document.querySelector("#zip + span");
    if (zip.validity.tooShort || zip.validity.tooLong) {
        error.innerHTML = "Sorry, we support only American ZIP";
        error.classList.remove("hidden");
        e.preventDefault();
    } else {
        error.classList.add("hidden");
    }
})

function confirmPswrd(e, pswrdConfElement, pswrdElement) {
    const error = document.querySelector("#pswrdConf + span");
    if (pswrdConfElement.value != pswrdElement.value) {
        error.innerHTML = "Passwords are not equal";
        error.classList.remove("hidden");
        e.preventDefault();   
    } else {
        error.classList.add("hidden");
    }
}

pswrd.addEventListener("input", e => {
    const error = document.querySelector("#pswrd + span");
    if (pswrd.validity.tooShort) {
        error.innerHTML = "Password is too short";
        error.classList.remove("hidden");
        e.preventDefault();
    } else if (!pswrdReg.test(pswrd.value)) {
        error.innerHTML = "Password should contain at least 1 number, sign and letter";
        error.classList.remove("hidden");
        e.preventDefault();
    } else {
        confirmPswrd(e, pswrdConf, pswrd);
        error.classList.add("hidden");
    }
})

pswrdConf.addEventListener("input", e => confirmPswrd(e, pswrdConf, pswrd));

form.addEventListener("submit", e => {
    e.preventDefault();
    const error = document.querySelector("#submitBtn + span");
    if (!form.checkValidity() || !pswrdConf.nextElementSibling.classList.contains("hidden")) {
        error.innerHTML = "Please, check for all errors and then submit";
        error.classList.remove("hidden");
    } else {
        error.classList.add("hidden");
        form.submit();
    }
})