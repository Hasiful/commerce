$(document).ready(function(){
    $('.trending_brands_wrapper').slick({
      dots:true,
      autoplay:false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
       speed: 1000,
       responsive: [
     {
     breakpoint: 991,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 9,
     }
    },
     {
     breakpoint: 575,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 10,
     }
    },
     {
     breakpoint: 420,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 11,
     }
    },
    ]
    });
    });