const photo = document.getElementById("photo");
const circleButtons = document.getElementsByClassName("circle");
const circleOne = document.getElementById("circleone");
const circleTwo = document.getElementById("circletwo");
const circleThree = document.getElementById("circlethree");
const circleFour = document.getElementById("circlefour");
const circleFive = document.getElementById("circlefive");

function displayOne() {
    photo.src = "face1.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleOne.style.backgroundColor = "black";
    showNext();
}

function displayTwo() {
    photo.src = "face2.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleTwo.style.backgroundColor = "black";
    showNext();
}

function displayThree() {
    photo.src = "face3.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleThree.style.backgroundColor = "black";
    showNext();
}

function displayFour() {
    photo.src = "face4.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleFour.style.backgroundColor = "black";
    showNext();
}

function displayFive() {
    photo.src = "face5.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleFive.style.backgroundColor = "black";
    showNext();
}

let myTimeout;

function lastImage() {
    if (photo.getAttribute('src') == "face5.svg") {
        displayFour();
    } else if (photo.getAttribute('src') == "face4.svg") {
        displayThree();
    } else if (photo.getAttribute('src') == "face3.svg") {
        displayTwo();
    } else if (photo.getAttribute('src') == "face2.svg") {
        displayOne();
    } else if (photo.getAttribute('src') == "face1.svg") {
        displayFive();
}
    showNext();
}

function showNext() {
    clearTimeout(myTimeout);
    myTimeout = setTimeout(nextImage, 5000);
}

function nextImage() {
    if (photo.getAttribute('src') == "face1.svg") {
        displayTwo();
    } else if (photo.getAttribute('src') == "face2.svg") {
        displayThree();
    } else if (photo.getAttribute('src') == "face3.svg") {
        displayFour();
    } else if (photo.getAttribute('src') == "face4.svg") {
        displayFive();
    } else if (photo.getAttribute('src') == "face5.svg") {
        displayOne();
}
    showNext();
}

window.setTimeout(showNext, 0);
const backButton = document.getElementById("backbutton");
backButton.addEventListener("click", lastImage);

const nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", nextImage);

circleOne.addEventListener("click", displayOne);
circleTwo.addEventListener("click", displayTwo);
circleThree.addEventListener("click", displayThree);
circleFour.addEventListener("click", displayFour);
circleFive.addEventListener("click", displayFive);
