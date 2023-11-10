function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView();
}

const texts = [
  "Software Engineer",
  "Solutions Architect",
  "Computer Vision Enthusiast",
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
