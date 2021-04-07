$(function () {
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite:true,
        dots:true,
        variableWidth:true,
    });
    function scrollNav() {
        $('.nav a, .scrollDown, .scrollUp').click(function(){
          $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
          }, 300);
          return false;
        });
      }
      scrollNav();






})