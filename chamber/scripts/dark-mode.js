const modeButton =document.querySelector('#mode');
const main = document.querySelector('main');
const darkLight = document.querySelectorAll('.dark-light');
let companyNames = [];
let evenList = [];
let evenCompanies = [];

function loadObject(){
        companyNames = document.querySelectorAll('.company-name');
        evenList = document.querySelectorAll('#directory-container .directory-list section:nth-child(even)');
        evenCompanies = document.querySelectorAll('#directory-container .directory-list section:nth-child(even) .company-name');
}

modeButton.addEventListener('click', () => {
    loadObject();
    if (modeButton.textContent.includes('🕶️')) {
        main.style.backgroundColor = "#2D3142";
        main.style.color = "#f8f8f8";
        darkLight.forEach((word) => {
            word.style.color = "#f8f8f8";
            word.style.background = "#2D3142"
        });
        companyNames.forEach((name) => {
            name.style.color = "#f8f8f8";
        });
        evenList.forEach((info) => {
            info.style.color = "#2D3142";
        });
        evenCompanies.forEach((evenCompany) => {
            evenCompany.style.color = "#2D3142";
        });
        modeButton.textContent = "🔆";
    }
    else {
        main.style.backgroundColor = "#f8f8f8";
        main.style.color = "#2D3142";
        darkLight.forEach((word) => {
            word.style.color = "#2D3142";
            word.style.background = "#f8f8f8"
        });
        companyNames.forEach((name) => {
            name.style.color = "#2D3142";
            console.log(6);
        });
        modeButton.textContent = "🕶️";
    }
});
