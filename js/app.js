$ ( function () {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 576,
              settings: {
          slidesToScroll: 1,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3
                }
              },

       
          ]
    });




})