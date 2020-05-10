var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("btnRand");
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

function displayGradient() {
    css.textContent = body.style.background + "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
    ";";
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

function randomGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        randomColor +
        ", " +
        randomColor +
        ")";;
}

displayGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btnRandom.addEventListener("click", randomGradient);