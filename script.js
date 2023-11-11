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

document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll('.readmore');
  const moreInfoParagraphs = document.querySelectorAll('.moreinfo');

  readMoreLinks.forEach((readMoreLink) => {
    readMoreLink.addEventListener('click', function (e) {
      e.preventDefault();

      // First, close any open 'moreinfo' sections and show their corresponding 'readmore' links
      moreInfoParagraphs.forEach((para) => {
        para.style.display = 'none';
      });
      readMoreLinks.forEach((link) => {
        link.style.display = 'inline-block';
      });

      // Then, open the clicked 'moreinfo' section and hide its 'readmore' link
      var moreInfo = this.parentElement.nextElementSibling;
      if (moreInfo && moreInfo.classList.contains('moreinfo')) {
        moreInfo.style.display = 'inline-block';
        this.style.display = 'none';
      }
    });
  });
});