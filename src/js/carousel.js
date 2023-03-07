let index = 0;
const images = ["src/images/carousel/carousel-1.jpg", "src/images/carousel/carousel-2.jpg", "src/images/carousel/carousel-3.jpg", "src/images/carousel/carousel-4.jpg", "src/images/carousel/carousel-5.jpg", "src/images/carousel/carousel-6.jpg"];
const size_carousel = 4;

function right() {

    if (index + size_carousel >= images.length) {
        document.getElementById("carousel-button-next").className = "carousel-arrow-disabled arrow-carrousel-right arrow-carrousel"
        return;
    }

    document.getElementById("carousel-button-prev").className = "arrow-carrousel-left arrow-carrousel"
    index = index + 2;

    if (index + size_carousel >= images.length) {
        document.getElementById("carousel-button-next").className = "carousel-arrow-disabled arrow-carrousel-right arrow-carrousel"
    }

    const container = document.getElementById("images-carousel");
    container.style.transform = "translateX(" + (index / 2 * -50) + "%)";

}

function left() {

    if (index <= 0) {
        document.getElementById("carousel-button-prev").className = "carousel-arrow-disabled arrow-carrousel-left arrow-carrousel"
        return;
    }
    document.getElementById("carousel-button-next").className = "arrow-carrousel-right arrow-carrousel"

    index = index - 2;

    if (index <= 0) {
        document.getElementById("carousel-button-prev").className = "carousel-arrow-disabled arrow-carrousel-left arrow-carrousel"
    }

    const container = document.getElementById("images-carousel");
    container.style.transform = "translateX(" + (index / 2 * -50) + "%)";

}