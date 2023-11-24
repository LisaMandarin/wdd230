const baseURL = "https://lisamandarin.github.io/wdd230/chamber/";
const dataURL = "https://lisamandarin.github.io/wdd230/chamber/data/members.json";

const spotlightsElement = document.querySelector('#spotlights div');

async function getGoldMembers() {
    const response = await fetch(dataURL);
    const data = await response.json();
    // console.log(data);
    let goldMembers = data.companies.filter(company => company.membershipLV === "Gold");
    console.log(goldMembers);
    goldMembers.forEach(member => {
        let section = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');
        let notes = document.createElement('p');

        
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        url.textContent = member.name;
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');
        url.setAttribute('class', 'dark-light1');
        image.setAttribute('src', `${baseURL}${member.image}`);
        image.setAttribute('alt', member.name);
        notes.textContent = member.notes;

        name.appendChild(url);
        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(notes);
        


        spotlightsElement.appendChild(section);
    });
}


getGoldMembers();