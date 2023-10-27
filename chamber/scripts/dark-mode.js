const modeButton =document.querySelector('#mode');
const cardSmall = document.querySelectorAll('.card-small')
const discoverCard = document.querySelectorAll('.discover-card')

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
        modeButton.textContent = "🕶️";
    }
});
