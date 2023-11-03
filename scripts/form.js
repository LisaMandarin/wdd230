// Check if the password follow the rule of at least 8 characters and alphanumeric 
const pw1 = document.querySelector('#password1');
const alertMesssagePWRule = document.querySelector('#alertMessagePWRule');
pw1.addEventListener('keyup', () => checkPWRule(pw1.value));
function checkPWRule(input) {
    const alphanumeric = /^[a-zA-Z0-9]+$/;
    if (input.length >= 8 && alphanumeric.test(input)) {
        pw1.style.backgroundColor = "#98C1D9";
        alertMesssagePWRule.style.display = "none";
    } else {
        alertMesssagePWRule.style.display = "block";
        alertMesssagePWRule.textContent = "❗️at least eight characters long and can only be alpha-numeric";
        pw1.style.backgroundColor = "#ffc0cb";
    }
}

// Check if the password and the re-entered password match
const pw2 = document.querySelector('#password2');
const alertMessagePWConfirm = document.querySelector('#alertMessagePWConfirm');
pw2.addEventListener('focusout', checkSame);
function checkSame() {
    if (pw1.value !== pw2.value) {
        alertMessagePWConfirm.style.display = "block";
        alertMessagePWConfirm.textContent = "❗️Password Does Not Match!";
        pw2.style.backgroundColor = "#ffc0cb";
        pw1.value = "";
        pw2.value = "";
        pw1.focus();
    } else {
        alertMessagePWConfirm.style.display = "none";
        pw2.style.backgroundColor = "#98C1D9";
    }
}

// Check if Email has @byui.edu
const email = document.querySelector('#email');
const alertMessageEmail = document.querySelector('#alertMessageEmail');
email.addEventListener('keyup', () => checkEmailRule(email.value));
function checkEmailRule(input) {
    const emailRule = /[A-Za-z0-9._%+-]+@byui\.edu$/;
    if (emailRule.test(input)) {
        alertMessageEmail.style.display = "none";
        email.style.backgroundColor = "#98C1D9";
    } else {
        alertMessageEmail.style.display = "block";
        alertMessageEmail.textContent = "❗️must cantain @byui.edu"
        email.style.backgroundColor = "#ffc0cb";
    }
}


// Show the number when moving the rating bar
const rateDisplay = document.querySelector('#rateDisplay');
const rate = document.querySelector('#rate')
rate.addEventListener('input', displayNum);
function displayNum() {
    rateDisplay.innerHTML = rate.value;
}
