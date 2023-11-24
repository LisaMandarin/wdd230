const hamButtonElement = document.querySelector('#menu');
const navigationElement = document.querySelector('.navigation')
const slideUp = document.querySelector('#slide-up');

hamButtonElement.addEventListener('click', () => {
    navigationElement.classList.toggle('open');
    hamButtonElement.classList.toggle('open');
})