const texts = [
    "Computer Vision Enthusiast",
    "Solutions Architect",
    "Machine Learning Engineer",
    "Software Engineer"
];
let count = 0;

function changeText() {
    const dynamicText = document.getElementById("dynamic-text");
    // Start fade out
    dynamicText.style.opacity = 0;

    setTimeout(() => {
        // Change text and start fade in
        dynamicText.textContent = texts[count];
        dynamicText.style.opacity = 1;
        count = (count + 1) % texts.length;
    }, 500); 
}

setInterval(changeText, 4000);

window.onload = () => {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.style.opacity = 1;
};
