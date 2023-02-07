var colorChange = document.getElementById("darkmode");
var text = document.getElementsByTagName("p");

colorChange.addEventListener('click', function () {
    console.log("JS");
    colorChange.style.transition="all 1s";


    if (colorChange.classList.contains("dark")) {
        colorChange.classList.remove('dark', 'darkcolorfont');
        colorChange.classList.add('light', 'lightcolorfont');
        colorChange.innerHTML = '<img src="https://www.svgrepo.com/download/79251/crescent-moon.svg" alt="">';
    } else {
        colorChange.classList.remove('light', 'lightcolorfont');
        colorChange.classList.add('dark', 'darkcolorfont');
        colorChange.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sun_white_icon.svg/1200px-Sun_white_icon.svg.png" alt="">';
    }

    for (let i = 0; i < text.length; i++) {
        text[i].style.transition = "color 1s"
        if (text[i].classList.contains("dark")) {
            text[i].classList.remove('dark', 'darkcolortext');
            text.item(i).classList.add('light', 'lightcolortext');
        } else {
            text[i].classList.remove('light', 'lightcolortext');
            text.item(i).classList.add('dark', 'darkcolortext');

        }
    }
})


const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}


const handleMoveToNextSlide = function(e) {
    hideAllSlides();
  
    // check if last slide has been reached
    if (position === numberOfSlides - 1) {
        position = 0; // go back to first slide
    } else {
        // move to next slide
        position++;
    }
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
  
    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

const handleMoveToPrevSlide = function(e) {
    hideAllSlides();
    
    // check if we're on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // move to the last slide
    } else {
        // move back one
        position--;
    }
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
  
    // update dot to represent current slide
    dots[position].classList.add("selected-dot");
    dots[position].checked = true;
}

// listen for slide change events
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);