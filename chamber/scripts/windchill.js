const windChill = document.querySelector('#windchill');
let t = 85;
let v = 6.710;
let floatT = parseFloat(t);
let floatV = parseFloat(v);

function windChillFormula(temp, windspeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
};

const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#wind-speed')

temperature.textContent = "Temperature: " + t;
windSpeed.textContent = "Wind Speed: " + v;

if (floatT > 51 || floatV <= 3) {
    windChill.textContent = "Wind Chill: " + "N/A";
} else {
    let result = windChillFormula(floatT, floatV);
    windChill.textContent = "Wind Chill: " + result.toFixed(2);
}

