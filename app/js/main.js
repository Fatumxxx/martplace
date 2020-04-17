$(function() {
    
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        spacing: "3px",
        ratedFill: "#ffc000",
        normalFill: "#ffffff"
    });
    
    $('.products-slider__inner').slick({
        arrows: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prew"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>'
    });
});