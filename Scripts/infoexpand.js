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