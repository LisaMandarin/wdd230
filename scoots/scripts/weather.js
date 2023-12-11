// current weather setting
const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.94&appid=6df76dc2dca1a837e79bfff8b684afe4&units=imperial';
const currentTemperature = document.querySelector('#current-temperature');
const currentHumidity = document.querySelector('#current-humidity');
const currentDescription = document.querySelector('#current-description');
const homepageCurrentWeather = document.querySelector('#homepage-current-weather');
const todayMonthElement = document.querySelector('#today-month');
const todayDayElement = document.querySelector('#today-day');
const todayWeekdayElement = document.querySelector('#today-weekday');
const todayWeatherElement = document.querySelector('#today-weather');


async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();

            // set readable time
            const utcTimestamp = data.dt;
            const date = new Date(utcTimestamp * 1000);
            const todayMonth = date.toLocaleString('en-US', {month:'long'});
            const todayDay = date.toLocaleString('en-US', {day:'numeric'});
            const todayWeekday = date.toLocaleString('en-US', {weekday:'long'});
            todayMonthElement.textContent = todayMonth;
            todayDayElement.textContent = todayDay;
            todayWeekdayElement.textContent = todayWeekday;

            // set temperature, humidity, description and icon
            let temp = data.main.temp;
            temp = Math.round(temp);
            let humidity = data.main.humidity;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
            let weather = data.weather[0].main;
            
            todayWeatherElement.textContent = weather;
            currentTemperature.textContent = temp;
            currentHumidity.textContent = humidity;
            currentDescription.textContent = description;
            const image = document.createElement('img');
            image.setAttribute('src', iconsrc);
            image.setAttribute('alt', description);
            homepageCurrentWeather.appendChild(image);

        } else {
            throw new Error (await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

getCurrentWeather();


// -----------------------------------------------------
// tomorrow weather setting
const tomorrowWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.94&appid=6df76dc2dca1a837e79bfff8b684afe4&units=imperial';
const tomorrowTemperature = document.querySelector('#tomorrow-temperature');
const tomorrowHumidity = document.querySelector('#tomorrow-humidity');
const tomorrowDescription = document.querySelector('#tomorrow-description');
const homepageTomorrowWeather = document.querySelector('#homepage-tomorrow-weather');
const tomorrowMonthElement = document.querySelector('#tomorrow-month');
const tomorrowDayElement = document.querySelector('#tomorrow-day');
const tomorrowWeekdayElement = document.querySelector('#tomorrow-weekday');
const tomorrowWeatherElement = document.querySelector('#tomorrow-weather');

async function getTomorrowWeather() {
    try {
        const response = await fetch(tomorrowWeatherURL);
        if (response.ok) {
            const data = await response.json();
            
            const tomorrow = data.list[7];

            //Set readable time
            const utcTimestamp = tomorrow.dt;
            const date = new Date(utcTimestamp * 1000);
            const tomorrowMonth = date.toLocaleString('en-US', {month:'long'});
            const tomorrowDay = date.toLocaleString('en-US', {day:'numeric'});
            const tomorrowWeekday = date.toLocaleString('en-US', {weekday:'long'});
            tomorrowMonthElement.textContent = tomorrowMonth;
            tomorrowDayElement.textContent = tomorrowDay;
            tomorrowWeekdayElement.textContent = tomorrowWeekday;

            // set temperature, humidity, description and icon
            let temp = tomorrow.main.temp;
            temp = Math.round(temp);
            let humidity = tomorrow.main.humidity;
            let weather = tomorrow.weather[0].main;
            let description = tomorrow.weather[0].description;
            let icon = tomorrow.weather[0].icon;
            let iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
            tomorrowWeatherElement.textContent = weather;
            tomorrowTemperature.textContent = temp;
            tomorrowHumidity.textContent = humidity;
            tomorrowDescription.textContent = description;
            const image = document.createElement('img');
            image.setAttribute('src', iconsrc);
            image.setAttribute('alt', description);
            homepageTomorrowWeather.appendChild(image);

        } else {
            throw new Error (await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

getTomorrowWeather();

