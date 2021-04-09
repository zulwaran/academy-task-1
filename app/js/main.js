$(function () {
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite:true,
        dots:true,
        variableWidth:true,
      });

    $('.btn-year').on('click', function(){
      $('.cost-month').addClass('off').removeClass('on');;
      $('.cost-year').addClass('on').removeClass('off');
      $('.btn-month').removeClass('active');
      $('.btn-year').addClass('active');
      });
    $('.btn-month').on('click', function(){
      $('.cost-month').addClass('on').removeClass('off');
      $('.cost-year').addClass('off').removeClass('on');
      $('.btn-year').removeClass('active');
      $('.btn-month').addClass('active');
      });


    function scrollNav() {
        $('.nav a, .scrollDwn, .scrollUp').on('click', function(){
          $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
          }, 300);
          return false;
        });
      }
      scrollNav();






})