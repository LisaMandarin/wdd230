// Check title regular expression
const titleElement = document.querySelector('#title');
const alertMsgTitleElement = document.querySelector('#alertMsgTitle');

titleElement.addEventListener('keyup', () => checkTitleRule(titleElement.value));
function checkTitleRule(input) {
    const regEx = /[a-zA-Z -]{7,}/;
    if (regEx.test(input)) {
        alertMsgTitleElement.style.display = "none";
        titleElement.style.backgroundColor = "white";
        console.log(input + "right")
    } else {
        alertMsgTitleElement.style.display = "block";
        alertMsgTitleElement.textContent = "❗️Only accept alpha character, hyphens, and spaces.  At least 7 characters.";
        alertMsgTitleElement.style.color = "red";
        titleElement.focus();
        console.log(input + "wrong")
    }};



// Create Timestamp
document.addEventListener('DOMContentLoaded', function() {
    const timestampElement = document.querySelector('#timestamp');
    const currentDateTime = new Date();
    timestampElement.value = currentDateTime.toISOString();
});
