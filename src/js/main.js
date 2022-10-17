//слайдер
$(document).ready(function(){
    $('.slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        speed: 300,
        fade: false,
        arrows: false,
        cssEase: 'linear'
      });
  });