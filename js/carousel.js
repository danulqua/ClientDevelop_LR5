let currentItem = 0;

export const nextOffer = () => {
    let carouselItems = document.querySelectorAll('.carousel-item');
    let carouselDots = document.querySelectorAll('.fa-circle');

    carouselItems[currentItem].classList.add('hide');
    carouselItems[currentItem].classList.remove('show');
    carouselDots[currentItem++].classList.toggle('selected');
    if (currentItem > 2) {
        currentItem = 0;   
    }
    carouselItems[currentItem].classList.add('show');
    carouselItems[currentItem].classList.remove('hide');
    carouselDots[currentItem].classList.toggle('selected');
};

export const prevOffer = () => {
    let carouselItems = document.querySelectorAll('.carousel-item');
    let carouselDots = document.querySelectorAll('.fa-circle');

    carouselItems[currentItem].classList.add('hide');
    carouselItems[currentItem].classList.remove('show');
    carouselDots[currentItem--].classList.toggle('selected');
    if (currentItem < 0) {
        currentItem = 2;   
    }
    carouselItems[currentItem].classList.add('show');
    carouselItems[currentItem].classList.remove('hide');
    carouselDots[currentItem].classList.toggle('selected');
};

window.addEventListener('hashchange', () => {
    currentItem = 0;
});