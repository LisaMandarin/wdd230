const visitDisplay = document.querySelector('#num-visit')

let numVisit = Number(window.localStorage.getItem("num-visit"));

if (numVisit !==0) {
    visitDisplay.textContent = numVisit;
} else {
    visitDisplay.textContent = "This is your first visit!";
}

numVisit++;

localStorage.setItem("num-visit", numVisit);
