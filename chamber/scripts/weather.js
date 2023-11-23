const weatherForcast = document.querySelector('#weather-forcast');
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=22.67&lon=120.31&units=metric&appid=6df76dc2dca1a837e79bfff8b684afe4';

async function apiFetchForcast() {
    try {
        const response = await fetch(forcastURL);
        if (response.ok) {
            const data = await response.json();
            
            let temp1 = data.list[8].main.temp;
            let iconSrc1 = data.list[8].weather[0].icon;
            const weatherIcon1 = `https://openweathermap.org/img/w/${iconSrc1}.png`;
            
            temp1 = Math.round(temp1);
            const timeString1 = data.list[8].dt_txt;
            const day1 = getReadableDay(timeString1);
            const date1 = getReadableDate(timeString1);
            
            styleForcast(day1, date1, temp1, weatherIcon1);

            let temp2 = data.list[16].main.temp;
            let iconSrc2 = data.list[16].weather[0].icon;
            const weatherIcon2 = `https://openweathermap.org/img/w/${iconSrc2}.png`;

            temp2 = Math.round(temp2);
            const timeString2 = data.list[16].dt_txt;
            const day2 = getReadableDay(timeString2);
            const date2 = getReadableDate(timeString2);
            
            styleForcast(day2, date2, temp2, weatherIcon2);

            let temp3 = data.list[24].main.temp;
            let iconSrc3 = data.list[24].weather[0].icon;
            const weatherIcon3 = `https://openweathermap.org/img/w/${iconSrc3}.png`;

            temp3 = Math.round(temp3); 
            const timeString3 = data.list[24].dt_txt;
            const day3 = getReadableDay(timeString3);
            const date3 = getReadableDate(timeString3);
            
            styleForcast(day3, date3, temp3, weatherIcon3);

        } else {
            throw Error (await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

function getReadableDate(timeString) {
    const date = new Date(timeString);
    const month = date.getMonth()+1;
    const day = date.getDate();
    return `${month <10 ? "0": ""}${month}-${day <10 ? "0": ""}${day}`;
}

function getReadableDay(timeString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(timeString);
    const dayNum = date.getDay();
    const day = days[dayNum];
    return day;
}

function styleForcast(day, date, temperature, weatherIcon) {
    const div = document.createElement('div')
    const h3date = document.createElement('h3');
    const h3day = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3date.textContent = date;
    h3day.textContent = day;
    p.textContent = `${temperature}℃`;

    h3date.style.marginBottom = "0";
    h3date.style.fontSize = "2rem";
    h3day.style.marginTop = "0";

    p.style.padding = "0";
    p.style.fontSize = "1.5rem";

    img.setAttribute('src', weatherIcon);
    img.setAttribute('alt', 'weather icon');

    div.style.boxSizing = "border-box";
    div.style.textAlign = "center";
    div.style.border = "2px solid #2D3142";
    div.style.boxShadow = "5px 5px 5px #2D3142";
    div.style.padding = "10px";
    div.style.margin = "5px";
    weatherForcast.style.boxSizing = "border-box";
    
    div.appendChild(h3date);
    div.appendChild(h3day);
    div.appendChild(img);
    div.appendChild(p);

    weatherForcast.appendChild(div);
}

apiFetchForcast();