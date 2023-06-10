// Saved

$(document).ready(function () {

    $(".flip").click(function () {

        $(".panel").slideToggle("slow");

    });
});

// Icon Change

jQuery(function ($) {

    $('.changeIcon').on('click', function () {

        let $el = $(this),

            textNode = this.lastChild;

        $el.find('span').toggleClass('far fa-bookmark fas fa-bookmark');

    });
});

// Topnav Change

function topNavFunction() {

    let x = document.getElementById("myTopNav");

    if (x.className === "topNav") {

        x.className += " responsive";

    } else {

        x.className = "topNav";
    }
}

// Slide

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Read List

// Click on a close button to hide the current list item

let close = document.getElementsByClassName("close");

let i;

for (i = 0; i < close.length; i++) {

    close[i].onclick = function () {

        let div = this.parentElement;

        div.style.display = "none";
    }
}

// Hide Search Content

function searchFunction() {

    let x = document.getElementById("search");

    if (x.style.display === "none") {

        x.style.display = "block";
    }
}