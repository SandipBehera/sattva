
//=== Project Carousel ===
function projectCarousel () {
    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 10,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });    		
    }
}

//=== Project Carousel V2 ===
function projectCarouselv2 () {
    if ($('.project-carousel-v2').length) {
        $('.project-carousel-v2').owlCarousel({
            dots: true,
            loop: true,
            margin: 10,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}


//=== Project Carousel V3 ===
function projectCarouselv3 () {
    if ($('.project-carousel-v3').length) {
        $('.project-carousel-v3').owlCarousel({
            dots: false,
            loop: true,
            margin: 40,
            nav: true,
            /*navText: [
                '<img src="assets/images/amenities-icons/arrow-prev.png">',
                '<img src="assets/images/amenities-icons/arrow-next.png">'
            ],*/
            navText: [
                '<',
                '>'
            ],
            autoplayHoverPause: true,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1,
                    slideBy:1
                },
                600:{
                    items:1,
                    slideBy:1
                },
                800:{
                    items:2,
                    slideBy:2
                },
                1024:{
                    items:3,
                    slideBy:3
                },
                1100:{
                    items:3,
                    slideBy:3
                },
                1200:{
                    items:4,
                    slideBy:4
                }
            }
        });    		
    }
}



//=== Project Carousel V3 ===
function projectCarouselv3 () {
    if ($('.project-carousel-v3.sps').length) {
        $('.project-carousel-v3.sps').owlCarousel({
            dots: false,
            loop: true,
            margin: 40,
            nav: true,
            /*navText: [
                '<img src="assets/images/amenities-icons/arrow-prev.png">',
                '<img src="assets/images/amenities-icons/arrow-next.png">'
            ],*/
            navText: [
                '<',
                '>'
            ],
            autoplayHoverPause: true,
            autoplay: 15000,
            smartSpeed: 700,
            responsive:{
                0:{
                    items:1,
                    slideBy:1
                },
                600:{
                    items:1,
                    slideBy:1
                },
                800:{
                    items:2,
                    slideBy:2
                },
                1024:{
                    items:2,
                    slideBy:1
                },
                1100:{
                    items:3,
                    slideBy:1
                },
                1200:{
                    items:3,
                    slideBy:1
                }
            }
        });         
    }
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions        
        projectCarousel();
        projectCarouselv2();
        projectCarouselv3();
 
	})(jQuery);
});




