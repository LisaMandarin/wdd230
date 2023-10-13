var currentYear = new Date().getFullYear();
var yearElement = document.getElementById('year');
yearElement.textContent = currentYear;

var dateTime = new Date(document.lastModified);
var dateTimeElement = document.getElementById('lastModified')
dateTimeElement.textContent = "Last Modification: " + dateTime;