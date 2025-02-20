// Step 1: Get DOM elements
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// Append the first thumbnail item to the end of the thumbnail container
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000; // Duration of the slide transition
let timeAutoNext = 7000; // Time before the next slide transition

let runTimeOut;
let runNextAuto;

function autoSlide() {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    // Move the first slide and thumbnail to the end
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');

    // Remove the 'next' class after the transition is complete
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timeRunning);

    // Schedule the next slide transition
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(autoSlide, timeAutoNext);
}

// Start the automatic sliding
runNextAuto = setTimeout(autoSlide, timeAutoNext);