// get current year
var year = new Date().getFullYear();
var yearElement = document.getElementById('year');
yearElement.textContent = year;

// get modification time
var dateTime = document.lastModified;
var dateTimeElement = document.getElementById('lastModified');
dateTimeElement.textContent = "Last Modification: " + dateTime;