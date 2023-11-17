const currentTemperature = document.querySelector('#current-temperature');
const currentWeather = document.querySelector('#current-weather');
const weatherForcast = document.querySelector('#weather-forcast');

const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=22.67&lon=120.31&units=metric&appid=6df76dc2dca1a837e79bfff8b684afe4';
const currentURL = 'https://api.openweathermap.org/data/2.5/weather?lat=22.67&lon=120.31&units=metric&appid=6df76dc2dca1a837e79bfff8b684afe4';

async function apiFetchCurrent() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            const temp = data.main.temp
            const description = data.weather[0].description
            // console.log(temp);
            // console.log(description);
            currentTemperature.textContent = `Current Temperaturent: ${temp}℃`;
            currentWeather.textContent = `Current Weather: ${description.toUpperCase()}`;
        } else {
            throw Error (await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

async function apiFetchForcast() {
    try {
        const response = await fetch(forcastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            const temp1 = data.list[8].main.temp;
            const timeString1 = data.list[8].dt_txt;
            const day1 = getReadableDay(timeString1);
            const date1 = getReadableDate(timeString1);
            
            styleForcast(day1, date1, temp1);

            const temp2 = data.list[16].main.temp;
            const timeString2 = data.list[16].dt_txt;
            const day2 = getReadableDay(timeString2);
            const date2 = getReadableDate(timeString2);
            
            styleForcast(day2, date2, temp2);

            const temp3 = data.list[24].main.temp;
            const timeString3 = data.list[24].dt_txt;
            const day3 = getReadableDay(timeString3);
            const date3 = getReadableDate(timeString3);
            
            styleForcast(day3, date3, temp3);

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

function styleForcast(day, date, temperature) {
    const div = document.createElement('div')
    const h3 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    h3.innerHTML = day;
    p1.textContent = date;
    p2.textContent = `${temperature}℃`;
    h3.style.background = "none";
    h3.style.color = "#EF8354";
    p1.style.textAlign = "center";
    p1.style.padding = "0";
    p2.style.textAlign = "center";
    p2.style.fontSize = "2rem";
    div.style.boxSizing = "border-box";
    weatherForcast.style.boxSizing = "border-box";
    
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);

    weatherForcast.appendChild(div);
}
apiFetchCurrent();
apiFetchForcast();