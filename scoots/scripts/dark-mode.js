const switchElement = document.querySelector('#dark');


switchElement.addEventListener('change', () => {
    if (switchElement.checked) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});