const menuIcon = document.querySelector('#menu-icon');
const menuIconSmall = document.querySelector('#menu-icon-small-screen');
const navigation = document.querySelector('#sub-header nav');
const menuCloseButton = document.querySelector('#menu-close-button');
const darkSwitch = document.querySelector('#dark-mode input[type="checkbox"] + label');

menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})

menuIconSmall.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})

menuCloseButton.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
})

function handleScreenSizeChange() {
    if (window.innerWidth <=800) {
        navigation.classList.add('dark-mode');
    } else {
        navigation.classList.remove('dark-mode');
    }
}

function darkModeToggle() {
    handleScreenSizeChange();
    location.reload();
}

handleScreenSizeChange();

window.addEventListener('resize', handleScreenSizeChange);
darkSwitch.addEventListener('change', darkModeToggle);
