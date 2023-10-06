const hamButtonElement = document.querySelector('#menu');
const navigationElement = document.querySelector('.navigation')

hamButtonElement.addEventListener('click', () => {
    navigationElement.classList.toggle('open');
    hamButtonElement.classList.toggle('open');
})