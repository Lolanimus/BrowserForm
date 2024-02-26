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
        error.classList.add("hidden");
    }
})

pswrdConf.addEventListener("input", e => {
    const error = document.querySelector("#pswrdConf + span");
    if (pswrdConf.value != pswrd.value) {
        error.innerHTML = "Passwords are not equal";
        error.classList.remove("hidden");
        e.preventDefault();   
    } else {
        error.classList.add("hidden");
    }
})
