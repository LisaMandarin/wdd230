const quantity = document.querySelector('#form-quantity');
const quantityAlert = document.querySelector('#quantity-alert');

quantity.addEventListener('keyup', () => checkQuantityRule(quantity.value));

function checkQuantityRule(input) {
    const regEx = /^[1-5]$/;
    if (regEx.test(input)) {
        quantityAlert.style.display = "none";
        console.log(input + "right")
    } else {
        quantityAlert.style.display = "block";
        quantityAlert.textContent = "Enter number 1 to 5";
        quantityAlert.style.color = "red";
    }
}
