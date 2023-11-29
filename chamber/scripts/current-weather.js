const currentTemperature = document.querySelector('#current-temperature');
const windSpeed = document.querySelector('#wind-speed')
const windChill = document.querySelector('#windchill');
const currentWeather = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#weather-icon');

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?lat=22.67&lon=120.31&units=metric&appid=6df76dc2dca1a837e79bfff8b684afe4';

async function apiFetchCurrent() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            let temp = data.main.temp;
            temp = Math.round(temp);
            const v = data.wind.speed;
            const description = data.weather[0].description
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            
            currentTemperature.textContent = `${temp}℃`;
            currentTemperature.style.fontSize = "100%";
            windSpeed.textContent = `${v} mph`;
            windSpeed.style.fontSize = "100%";
            showWindChill(temp, v);
            currentWeather.textContent = `${description.toUpperCase()}`;
            let weatherImage = document.createElement('img');
            weatherImage.setAttribute('src', iconsrc);
            weatherImage.setAttribute('alt', description);
            weatherIcon.appendChild(weatherImage);

            
        } else {
            throw Error (await response.text());
        }
    }
    catch(error) {
        console.log(error);
    };
};

function windChillFormula(temp, windspeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
};

function showWindChill(temp, windspeed) {
    if (temp > 51 || windspeed <= 3) {
        windChill.textContent = "N/A";
    } else {
        let result = windChillFormula(temp, windspeed);
        windChill.textContent = result.toFixed(2);
        
    }
}

apiFetchCurrent();