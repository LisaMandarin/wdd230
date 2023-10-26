var year = new Date().getFullYear();
var yearElement = document.getElementById('year');
yearElement.textContent = year;

var lastModified = new Date(document.lastModified);
var lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = lastModified;