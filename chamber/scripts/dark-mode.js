const modeButton =document.querySelector('#mode');
const cardSmall = document.querySelectorAll('.card-small');
const discoverCard = document.querySelectorAll('.discover-card');
const main = document.querySelector('main');
const darkLight = document.querySelectorAll('.dark-light');
const thankyouH1 = document.querySelectorAll('.thankyou-h1');
const directoryContainer = document.querySelector('#directory-container');
const directoryNames = document.querySelectorAll('#directory-container .directory-name');
const directoryNamesAnchor = document.querySelectorAll('.company-name');


modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🕶️')) {
        cardSmall.forEach((card) => {
            card.style.background = '#2D3142';
            card.style.color = '#f8f8f8'
            alert(1);
        })
        discoverCard.forEach((card) => {
            card.style.background = '#2D3142'
            card.style.color = '#f8f8f8';
            alert(2);
        });
        main.style.backgroundColor = "#2D3142";
        darkLight.forEach((word) => {
            word.style.color = "#f8f8f8";
            alert(3);
        });
        thankyouH1.forEach((word)=> {
            word.style.color = "#f8f8f8";
            alert(4);
        });
        directoryContainer.style.color = '#f8f8f8';
        directoryNames.forEach((directoryNames) => {
            directoryNames.style.color = "#f8f8f8";
            alert(5);
        });
        directoryNamesAnchor.forEach((directoryNamesAnchor) => {
            directoryNamesAnchor.style.color = "red";
            alert(6);
        })
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
        directoryNames.forEach((directoryNames) => {
            directoryNames.style.color = "#2D3142";
        });
        modeButton.textContent = "🕶️";
    }
});
