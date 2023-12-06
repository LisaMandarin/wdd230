const alertElement = document.querySelector('#alert');
const closeElement = document.querySelector('.close-window');

closeElement.addEventListener('click', () => {
    alertElement.classList.add('hidden');
})