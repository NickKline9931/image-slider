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
}

function displayTwo() {
    photo.src = "face2.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleTwo.style.backgroundColor = "black";
}

function displayThree() {
    photo.src = "face3.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleThree.style.backgroundColor = "black";
}

function displayFour() {
    photo.src = "face4.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleFour.style.backgroundColor = "black";
}

function displayFive() {
    photo.src = "face5.svg";
    Array.from(circleButtons).forEach(circle => {
        circle.style.backgroundColor = "white";
    });
    circleFive.style.backgroundColor = "black";
}

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
}

const backButton = document.getElementById("backbutton");
backButton.addEventListener("click", lastImage);

const nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", nextImage);

circleOne.addEventListener("click", displayOne);
circleTwo.addEventListener("click", displayTwo);
circleThree.addEventListener("click", displayThree);
circleFour.addEventListener("click", displayFour);
circleFive.addEventListener("click", displayFive);
