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

function nextImage() {
    if (photo.getAttribute('src') == "face1.svg") {
        photo.src = "face2.svg";
    } else if (photo.getAttribute('src') == "face2.svg") {
        photo.src = "face3.svg";
    } else if (photo.getAttribute('src') == "face3.svg") {
        photo.src = "face4.svg";
    } else if (photo.getAttribute('src') == "face4.svg") {
        photo.src = "face5.svg";
    } else if (photo.getAttribute('src') == "face5.svg") {
        photo.src = "face1.svg";
}
}

let nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", nextImage);