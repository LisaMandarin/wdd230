const menuIcon = document.querySelector('#menu-icon');
const menuIconSmall = document.querySelector('#menu-icon-small-screen');
const navigation = document.querySelector('#sub-header nav');
const menuCloseButton = document.querySelector('#menu-close-button');

menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})

menuIconSmall.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})

menuCloseButton.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})