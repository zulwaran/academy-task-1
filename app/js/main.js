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
      $('.cost-month').addClass('off');
      $('.cost-month').removeClass('on');
      $('.cost-year').addClass('on');
      $('.cost-year').removeClass('off');
      $('.btn-month').removeClass('active');
      $('.btn-year').addClass('active');
      });
    $('.btn-month').on('click', function(){
      $('.cost-month').addClass('on');
      $('.cost-month').removeClass('off');
      $('.cost-year').addClass('off');
      $('.cost-year').removeClass('on');
      $('.btn-year').removeClass('active');
      $('.btn-month').addClass('active');
      });


    function scrollNav() {
        $('.nav a, .scrollDown, .scrollUp').on('click', function(){
          $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
          }, 300);
          return false;
        });
      }
      scrollNav();






})