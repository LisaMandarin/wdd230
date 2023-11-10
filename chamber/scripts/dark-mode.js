const modeButton =document.querySelector('#mode');
const cardSmall = document.querySelectorAll('.card-small');
const discoverCard = document.querySelectorAll('.discover-card');
const main = document.querySelector('main');
const darkLight = document.querySelectorAll('.dark-light');
const thankyouH1 = document.querySelectorAll('.thankyou-h1');
const directoryContainer = document.querySelector('#directory-container');
const directoryNames = document.querySelectorAll('#directory-container .directoryname');


modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🕶️')) {
        cardSmall.forEach((card) => {
            card.style.background = '#2D3142';
            card.style.color = '#f8f8f8'
        })
        discoverCard.forEach((card) => {
            card.style.background = '#2D3142'
            card.style.color = '#f8f8f8';
        });
        main.style.backgroundColor = "#2D3142";
        darkLight.forEach((word) => {
            word.style.color = "#f8f8f8";
        });
        thankyouH1.forEach((word)=> {
            word.style.color = "#f8f8f8";
        });
        directoryContainer.style.color = '#f8f8f8';
        directoryNames.forEach((name) => {
            name.style.color = "#f8f8f8";
        });
        modeButton.textContent = "🔆";
    }
    else {
        cardSmall.forEach((card) => {
            card.style.background = '#f8f8f8';
            card.style.color = '#2D3142'
        })
        discoverCard.forEach((card) => {
            card.style.background = '#f8f8f8'
            card.style.color = '#2D3142';
        });
        main.style.backgroundColor = "#f8f8f8";
        darkLight.forEach((word) => {
            word.style.color = "#2D3142";
        });
        thankyouH1.forEach((word)=> {
            word.style.color = "#2D3142";
        });
        directoryContainer.style.color = '#2D3142';
        directoryNames.forEach((name) => {
            name.style.color = "#2D3142";
        });
        modeButton.textContent = "🕶️";
    }
});
