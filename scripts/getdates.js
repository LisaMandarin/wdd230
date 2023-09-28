var currentYear = new Date().getFullYear();
var yearElement = document.getElementById('year')
yearElement.textContent = currentYear

var dateTime = document.lastModified
var dateTimeElement = document.getElementById('lastModified')
dateTimeElement.textContent = "Last Modification: " + dateTime;

const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})