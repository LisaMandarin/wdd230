const baseURL = "https://lisamandarin.github.io/wdd230/chamber/";
const dataURL = "https://lisamandarin.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector('.directory-grid')

async function getMembers() {
    const response = await fetch(dataURL);
    const data = await response.json();
    
    displayMembers(data.companies);
}

function displayMembers(companies) {
    companies.forEach((company) => {
        let section = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a')
        let image = document.createElement('img');
        let membershipLV = document.createElement('p');
        let notes = document.createElement('p');

        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Telephone: ${company.phone}`;
        url.setAttribute('href', company.url);
        url.setAttribute('target', "_blank");
        url.setAttribute('class', "dark-light1"); 
        url.textContent = `${company.name}`;
        image.setAttribute('src', company.image);
        image.setAttribute('alt', company.name);
        membershipLV.textContent = `Membership Level: ${company.membershipLV} Membership`;
        notes.textContent = `${company.notes}`;

        let membershipIcon = document.createElement('span');
        membershipIcon.setAttribute('class', 'membership-icon');
        if (company.membershipLV==='Gold') {
            membershipIcon.textContent = '🥇';
        } else if (company.membershipLV==='Silver') {
            membershipIcon.textContent = '🥈';
        }

        name.appendChild(membershipIcon);
        name.appendChild(url);
        
        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(membershipLV);
        section.appendChild(notes);

        directory.appendChild(section);
    });
    
}

getMembers();



document.addEventListener('DOMContentLoaded', () => {
    const gridBTN = document.querySelector('#directory-gridBTN');
    const listBTN = document.querySelector('#directory-listBTN');
    const display = document.querySelector('article');
    gridBTN.addEventListener('click', () => {
        display.classList.add('directory-grid');
        display.classList.remove('directory-list');
    });

    listBTN.addEventListener('click', () => {
        display.classList.add('directory-list');
        display.classList.remove('directory-grid');

        const urls = document.querySelectorAll('.dark-light1');
        urls.forEach((url) => {
            url.classList.remove('dark-light1');
        });
    });
});
