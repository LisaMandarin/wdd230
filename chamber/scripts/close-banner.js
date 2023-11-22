const bannerElement = document.querySelector('#banner');
const closeBannerElement = document.querySelector('#close-banner');

const today = new Date().getDay();
if (today >=1 && today <= 3) {
    bannerElement.classList.remove('hidden');
    closeBannerElement.addEventListener('click', () => {
        bannerElement.classList.add('hidden');
    });
}


