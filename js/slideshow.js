
const sliderTrack = document.querySelector(".slider_track");
const slides = document.querySelectorAll(".slides");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function updateSlider() {

    sliderTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}


nextBtn.addEventListener("click", () => {

    currentSlide++;


    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlider();
});

