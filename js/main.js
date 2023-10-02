$(document).ready(function(){

$('.slids').slick({
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      arrows:false,
                      dots:false,
                      fade: false,
                      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:false,
            centerPadding: '300px',
            }
          }
      ]

});

$('.next-arrow').on('click', function() {
  $('.slids').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.slids').slick('slickPrev');
});


    $('.slidss').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:true,
                      dots: true,
                      fade: false,
                      centerMode:true,
                      centerPadding: '180px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '80px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:false,
            centerPadding: '80px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '80px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:true,
            centerPadding: '80px',
            }
          }
      ]

});

$('.next-arrow').on('click', function() {
  $('.slidss').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.slidss').slick('slickPrev');
});


});