const todayElement = document.querySelector('#discover-today');
const lastTimeElement = document.querySelector('#discover-lastTime');
const messageElement = document.querySelector('#discover-welcomeMessage');

let currentTime = new Date(); // Show current Time
let currentTimeStamp = Date.now();
let lastTimeStamp = Number(localStorage.getItem('time')) || 0;
let lastTime = new Date(lastTimeStamp);

const dayToMs = 1000*60*60*24 // convert a day to milliseconds

let timeGap = currentTimeStamp - lastTimeStamp;

let lastVisit = Math.floor(timeGap / dayToMs)

if (lastTimeStamp === 0) {
    messageElement.textContent = "Welcome!  Let us Know if you have any questions.";
} else if (timeGap < dayToMs) {
    messageElement.textContent = "Back so soon!  Awesome!";
} else if (lastVisit == 1) {
    messageElement.textContent = "You last visited " + lastVisit + " day ago."
} else {
    messageElement.textContent = "You last visited " + lastVisit + " days ago."
}

todayElement.textContent = currentTime;
lastTimeElement.textContent = lastTime;
localStorage.setItem('time', currentTimeStamp);