const baseURL = "https://lisamandarin.github.io/wdd230/chamber/";
const dataURL = "https://lisamandarin.github.io/wdd230/chamber/data/members.json";

const spotlightsElement = document.querySelector('#spotlights div');

async function getMembers() {
    const response = await fetch(dataURL);
    const data = await response.json();
    
    const goldList = chooseMembers('Gold', data.companies);
    const silverList = chooseMembers('Silver', data.companies);
    const memberArray = combineMembers(goldList, silverList);
    randomArray = chooseRandomArray(2, memberArray);
    
    randomArray.forEach(member => {
        styleMember(member);
    });
};

function chooseMembers(membershipLV, companies) {
    return companies.filter(company => company.membershipLV === membershipLV);
}

function combineMembers(array1, array2) {
    const newArray = [...array1, ...array2];
    return newArray;
}

function chooseRandomArray(number, array) {
    if (number > array.length) {
        console.error('Not enought items');
        return [];
    };

    let copyArray = [...array];
    let randomArray = [];
    
    for (let i=0; i<number; i++) {
        const randomIndex = Math.floor(Math.random() * copyArray.length);
        randomArray.push(copyArray[randomIndex]);
        copyArray.splice(randomIndex, 1);
    }

    return randomArray;
}

function styleMember(member) {

    let section = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let membership = document.createElement('p');
    let url = document.createElement('a');
    let image = document.createElement('img');
    let notes = document.createElement('p');                        

        
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    membership.textContent = `Membership Level: ${member.membershipLV}`;
    url.textContent = member.name + addIconLV(member.membershipLV, member);
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
    section.appendChild(membership);
    section.appendChild(notes);

    spotlightsElement.appendChild(section);
}

function addIconLV(membershipLV, member) {
    if (membershipLV === 'Gold') {
        return '🥇';
    } else if (membershipLV === 'Silver'){
        return '🥈';
    }
}

getMembers();

