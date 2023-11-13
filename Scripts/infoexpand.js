document.addEventListener('DOMContentLoaded', function() {
    var toggleElements = document.querySelectorAll('.toggle');
    var moreInfos = document.querySelectorAll('.moreinfo');

    moreInfos.forEach(function(moreInfo, index) {
        if (index === 0) {
            moreInfo.style.display = 'block'; // First moreinfo section is expanded
        } else {
            moreInfo.style.display = 'none'; // Other moreinfo sections are collapsed
        }
    });

    if (toggleElements.length > 0) {
        toggleElements[0].querySelector('.toggle-info').textContent = '-';
    }

    toggleElements.forEach(function(toggleElement) {
        toggleElement.addEventListener('click', function() {
            var moreInfo = this.closest('.role').nextElementSibling;
            while (moreInfo && !moreInfo.classList.contains('moreinfo')) {
                moreInfo = moreInfo.nextElementSibling;
            }

            if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                moreInfo.style.display = 'block';
                this.querySelector('.toggle-info').textContent = '-';
            } else {
                moreInfo.style.display = 'none';
                this.querySelector('.toggle-info').textContent = '+';
            }
        });
    });
});
