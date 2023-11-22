const modeButton = document.querySelector('#mode');
const head = document.querySelector('head');
let darkLightStylesheet = null;

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🕶️')) {
        darkLightStylesheet = document.createElement('link');
        darkLightStylesheet.setAttribute('rel', "stylesheet");
        darkLightStylesheet.setAttribute('href', "styles/dark-light.css");
        head.appendChild(darkLightStylesheet);
        modeButton.textContent = "🔆";
    }
    else {
        head.removeChild(darkLightStylesheet);
        modeButton.textContent = "🕶️";
    }
});
