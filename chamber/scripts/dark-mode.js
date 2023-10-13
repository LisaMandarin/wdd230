const modeButton =document.querySelector('#mode');
const event = document.querySelector('#event');
const weather = document.querySelector('#weather');
const spotlights = document.querySelector('#spotlights')

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🕶️')) {
        event.style.background = '#2D3142';
        event.style.color = '#f8f8f8';
        weather.style.background = '#2D3142';
        weather.style.color = '#f8f8f8';
        spotlights.style.background = '#2D3142';
        spotlights.style.color = '#f8f8f8';
        modeButton.textContent = "🔆";
    }
    else {
        event.style.background = '#f8f8f8';
        event.style.color = '#2D3142';
        weather.style.background = '#f8f8f8';
        weather.style.color = '#2D3142';
        spotlights.style.background = '#f8f8f8';
        spotlights.style.color = '#2D3142';
        modeButton.textContent = "🕶️";
    }
});
