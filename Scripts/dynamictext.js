const texts = [
    "Software Engineer",
    "Computer Vision Enthusiast",
    "Solutions Architect",
    "Machine Learning Engineer",
];
let count = 0;

function changeText() {
    const dynamicText = document.getElementById("dynamic-text");

    setTimeout(() => {
        dynamicText.textContent = texts[count];
        count = (count + 1) % texts.length;
    }, 1000);
}

setInterval(changeText, 3000);