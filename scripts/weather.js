const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#weather-desc');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=22.67&lon=120.31&units=metric&appid=6df76dc2dca1a837e79bfff8b684afe4";

// 22.675039157321763, 120.31237765509631

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    description.innerHTML = ` - ${desc.toUpperCase()}`;
};

apiFetch();