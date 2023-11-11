function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView();
}

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

function openCategory(evt, categoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = () => {
  document.getElementById("languagesSkill").click();
};