// "use strict"
const anchors = document.querySelectorAll('.header_nav a[href*="#"]');
for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    };
};
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:1500,
        waitForAnimate:false,
    });
});