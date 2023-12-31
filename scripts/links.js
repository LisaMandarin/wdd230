const baseURL = "https://lisamandarin.github.io/wdd230/";
const linksURL = "https://lisamandarin.github.io/wdd230/data/links.json";
const lessonList = document.querySelector('#lesson-list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data.lessons);
    // console.log(data);
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let list = document.createElement('li');
        list.textContent = `${week.lesson}: `

        week.links.forEach((linkData) => {
            let link = document.createElement('a');
            link.setAttribute('href', baseURL + linkData.url);
            link.textContent = `${linkData.title} | `;
            list.appendChild(link);
        });
        
        lessonList.appendChild(list);
    });
}
getLinks();