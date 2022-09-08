let photo = document.getElementById("photo");

function displayOne() {
    photo.src = "face1.svg";
}

function displayTwo() {
    photo.src = "face2.svg";
}

function displayThree() {
    photo.src = "face3.svg";
}

function displayFour() {
    photo.src = "face4.svg";
}

function displayFive() {
    photo.src = "face5.svg";
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

let backButton = document.getElementById("backbutton");
backButton.addEventListener("click", lastImage);

let nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", nextImage);