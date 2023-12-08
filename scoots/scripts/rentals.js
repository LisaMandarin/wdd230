const url = 'https://lisamandarin.github.io/wdd230/scoots/data/rentals.json';
const container = document.querySelector('#rentals-description')

async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
}

function formatData(type) {
    const sectionElement = document.createElement('section');
    const nameElement = document.createElement('h1');

    nameElement.textContent = type;
    sectionElement.appendChild(nameElement);
    container.appendChild(sectionElement);
}

getData();