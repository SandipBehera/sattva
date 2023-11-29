(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });


	    $(window).scroll(function(){

	    	// Sticky Nav
		    if ($(this).scrollTop() > 50) {
		       $('.sticky').addClass('active');
		    } else {
		       $('.sticky').removeClass('active');
		    }

		    // Scroll To Top Hide/Show
		    if ($(this).scrollTop() >= 1000) {        
		        $('#scroll-to-top').fadeIn(200);
		    } else {
		        $('#scroll-to-top').fadeOut(200);
		    }

		});


		// Scroll To Top Trigger
		$('#scroll-to-top').click(function() {      
		    $('body,html').animate({
		        scrollTop : 0
		    }, 500);
		});


		// Hero Slider
		$('.hero-slider').owlCarousel({
			loop: true,
			rewind: true,
			dots: true,
			nav: true,
			navText: [],
			responsiveClass: true,
			items: 1,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
			onInitialized  : counter, //When the plugin has initialized.
			onTranslated : counter //When the translation of the stage has finished.
		});
		// Hero Slider Counter
		function counter(event) {
			var element   = event.target;         // DOM element, in this example .owl-carousel
			var items     = event.item.count;     // Number of items
			var item      = event.item.index + 1;     // Position of the current item

			// it loop is true then reset counter from 1
			if(item > items) {
				item = item - items
			}

			// Add 0 before one digit Counter
			function pad(number) {
			    return (number < 10 ? '0' : '') + number
			}

			$('.hero-counter').html(pad(item)+" <span>/ "+pad(items)+"</span>");
		}
		// Hero Slider Animation
		$(".hero-slider").on("translated.owl.carousel", function() {
			$(".hero-slider .hero-slider-item .hero-counter").addClass("animated slideInUp").css("opacity", "1");
			$(".hero-slider .hero-slider-item h1").addClass("animated fadeInLeft").css("opacity", "1");
			$(".hero-slider .hero-slider-item p").addClass("animated fadeInRight").css("opacity", "1");
			$(".hero-slider .hero-slider-item .btn").addClass("animated slideInDown").css("opacity", "1");
		});
		$(".hero-slider").on("translate.owl.carousel", function() {
			$(".hero-slider .hero-slider-item .hero-counter").removeClass("animated slideInUp").css("opacity", "0");
			$(".hero-slider .hero-slider-item h1").removeClass("animated fadeInLeft").css("opacity", "0");
			$(".hero-slider .hero-slider-item p").removeClass("animated fadeInRight").css("opacity", "0");
			$(".hero-slider .hero-slider-item .btn").removeClass("animated slideInDown").css("opacity", "0");
		});


		// Hero Slider Two
		$('.hero-slider-two').owlCarousel({
			loop: true,
			dots: false,
			nav: true,
			navText: ["<img src='imperia-assets/img/icons/arrow-prev-short.png'>","<img src='imperia-assets/img/icons/arrow-next-short.png'>"],
			responsiveClass: true,
			items: 1,
		});
		// Hero Slider Two Animation
		$(".hero-slider-two").on("translated.owl.carousel", function() {
			$(".hero-slider-two .hero-slider-item h1").addClass("animated flipInX").css("opacity", "1");
			$(".hero-slider-two .hero-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
			$(".hero-slider-two .hero-slider-item .btn").addClass("animated fadeInUp").css("opacity", "1");
		});
		$(".hero-slider-two").on("translate.owl.carousel", function() {
			$(".hero-slider-two .hero-slider-item h1").removeClass("animated flipInX").css("opacity", "0");
			$(".hero-slider-two .hero-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".hero-slider-two .hero-slider-item .btn").removeClass("animated fadeInUp").css("opacity", "0");
		});


		// Hero Slider Three
		$('.hero-slider-three').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			responsiveClass: true,
			items: 1,
		});
		// Hero Slider Three Animation
		$(".hero-slider-three").on("translated.owl.carousel", function() {
			$(".hero-slider-three .hero-slider-item h1").addClass("animated fadeInDown").css("opacity", "1");
			$(".hero-slider-three .hero-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
			$(".hero-slider-three .hero-slider-item .btn").addClass("animated fadeInUp").css("opacity", "1");
		});
		$(".hero-slider-three").on("translate.owl.carousel", function() {
			$(".hero-slider-three .hero-slider-item h1").removeClass("animated fadeInDown").css("opacity", "0");
			$(".hero-slider-three .hero-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".hero-slider-three .hero-slider-item .btn").removeClass("animated fadeInUp").css("opacity", "0");
		});


		// About Three Slider Three
		$('.about-three-slider').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			responsiveClass: true,
			items: 1,
		});


		// Stop Modal Video on Close
		$('.modal').on('hide.bs.modal', function(e) {    
		    var $if = $(e.delegateTarget).find('iframe');
		    var src = $if.attr("src");
		    $if.attr("src", '/empty.html');
		    $if.attr("src", src);
		});


		// PGW Slider
		$('.pgwSlider').pgwSlider();

		lightbox.option({
	      'resizeDuration': 500,
	      'wrapAround': true,
	      'alwaysShowNavOnTouchDevices': true,
	    });


	    // Testimonial Slider
	    $('.testimonial-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    responsiveClass: true,
		    responsive: {
		        0: {
		            items: 1
		        },
		        600: {
		            items: 2
		        },
		        1000: {
		            items: 2
		        }
		    }
		});


	    // Testimonial Slider Two
	    $('.testimonial-carousel-two').owlCarousel({
		    loop: true,
		    margin: 30,
		    responsiveClass: true,
		    items: 1,
		});


	    // Testimonial Slider Three
	    $('.testimonial-carousel-three').owlCarousel({
		    loop: true,
		    responsiveClass: true,
		    items: 1,
		    dots: false,
			nav: true,
			navText: ["<img src='imperia-assets/img/icons/arrow-prev-short.png'>","<img src='imperia-assets/img/icons/arrow-next-short.png'>"],
		});


		// Single Portfolio Slider
		$('.single-portfolio-slider').owlCarousel({
			loop: true,
			dots: false,
			nav: true,
			navText: ["<img src='imperia-assets/img/icons/arrow-prev-short.png'>","<img src='imperia-assets/img/icons/arrow-next-short.png'>"],
			responsiveClass: true,
			items: 1,
		});


		// Header Search Form
		$("#search-modal-btn").on("click", function(e) {
			e.preventDefault();
			$(".search-modal-wrpr").addClass("active");
		});

		$('.search-modal-wrpr .close-icon').on('click', function() {
		  	$(".search-modal-wrpr").removeClass("active");
		});


		// Sliding Sidebar
		$("#sliding-sidebar-btn").on("click", function(e) {
			 e.preventDefault();
			$(".sliding-sidebar, .body-overlay").addClass("active");
		});
		$(".sliding-sidebar .close-icon").on("click", function() {
			$(".sliding-sidebar, .body-overlay").removeClass("active");
		});
		$(document).mouseup(function(e) 
		{
		    var container = $(".sliding-sidebar");

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        $(".sliding-sidebar, .body-overlay").removeClass("active");
		    }
		});

		// Sliding Sidebar
		$("#sliding-sidebar-btn2").on("click", function(e) {
			 e.preventDefault();
			$(".sliding-sidebar, .body-overlay").addClass("active");
		});
		$(".sliding-sidebar .close-icon").on("click", function() {
			$(".sliding-sidebar, .body-overlay").removeClass("active");
		});
		$(document).mouseup(function(e) 
		{
		    var container = $(".sliding-sidebar");

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        $(".sliding-sidebar, .body-overlay").removeClass("active");
		    }
		});


		// Smooth Scroll to Section
		$('.smooth-scroll').click(function(event) {
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      if (target.length) {
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000, function() {
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { 
		            return false;
		          } else {
		            $target.attr('tabindex','-1');
		            $target.focus(); 
		          };
		        });
		      }
		    }
		});
		

		// Active WOW JS
		new WOW().init();


		// Hero Section One Background Parallax
		$("#hero-section-one-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Hero Section Two Background Parallax
		$("#hero-section-two-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Hero Section Three Background Parallax
		$("#hero-section-three-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Active Count Down JS
		$('#countdown').countdown({
            year: 2022, // YYYY Format
            month: 1, // 1-12
            day: 1, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
        });


        // Contact Form
       	$('form[id="contact_form"]').validate({
			rules: {
				name: 'required',
				email: {
					required: true,
					email: true,
				},
				subject: 'required',
				message: 'required',
			},

			messages: {
				name: 'Enter your full name.',
				email: 'Enter a valid email.',
				subject: 'Enter your subject.',
				message: 'Write your message.',
			},
			submitHandler: function(form) {
				// start ajax request 
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $('#contact_form').serialize(),
					cache: false,
					success: function (data) {
						if(data == 'Y'){
							$("#message_sent").modal('show');
							$('#contact_form').trigger("reset");
						}
						else{
							$("#message_fail").modal('show');
						}
					}
				});
				
			}
		});	

    });


    jQuery(window).load(function(){

    	// Loading Spinner
    	$('.spinner-wrpr').fadeOut();

    	// Isotope Portfolio Item 
		$('.portfolio-item-list').isotope({
		  // options
		  itemSelector: '.portfolio-item',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.portfolio-item-sizer',
		    horizontalOrder: true
		  }
		});
		$('.portfolio-item-list').isotope();


		// Isotope Portfolio Filter Button 
		$('.portfolio-item-controls').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $('.portfolio-item-list').isotope({ filter: filterValue });
		});


		// Isotope Portfolio Filter Button Active Class 
		$('.portfolio-item-controls').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.active').removeClass('active');
		    $( this ).addClass('active');
		  });
		});
		
        
    });




$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button2').click(function() {
  $('.moretext2').slideToggle();
  if ($('.moreless-button2').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button3').click(function() {
  $('.moretext3').slideToggle();
  if ($('.moreless-button3').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button4').click(function() {
  $('.moretext4').slideToggle();
  if ($('.moreless-button4').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button5').click(function() {
  $('.moretext5').slideToggle();
  if ($('.moreless-button5').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button6').click(function() {
  $('.moretext6').slideToggle();
  if ($('.moreless-button6').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button6').click(function() {
  $('.moretext6').slideToggle();
  if ($('.moreless-button6').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button7').click(function() {
  $('.moretext7').slideToggle();
  if ($('.moreless-button7').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$('.moreless-button8').click(function() {
  $('.moretext8').slideToggle();
  if ($('.moreless-button8').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$('.moreless-button9').click(function() {
  $('.moretext9').slideToggle();
  if ($('.moreless-button9').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});


$(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryt1').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryt2').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryt3').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfp').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfpp').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf1').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf2').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf3').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf4').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf5').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf6').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf7').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf8').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf9').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf10').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf11').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf12').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf13').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf14').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf144').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf15').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf16').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf17').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf18').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf19').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf20').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf21').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf22').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf23').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf233').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf24').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf25').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf26').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf27').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf28').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf29').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryf30').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd1').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd2').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd4').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd5').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd6').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd7').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd8').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd9').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd8').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd9').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd10').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd11').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd12').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd13').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd14').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd15').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd16').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd17').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd18').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd19').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd20').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd21').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd22').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd23').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd24').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd25').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd26').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd27').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd28').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd29').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd30').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryfd31').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd32').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$(document).ready(function() {
  $('#lightgalleryfd33').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});



$(document).ready(function() {
  $('#lightgallerydemo').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    console.log("tab shown...");
});

var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
} 



$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});


$(document).ready(function() {
  $('#lightgalleryp1').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp2').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp3').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp4').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp5').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp6').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp7').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp8').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp9').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryp10').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryv1').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryv2').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryv3').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});

$(document).ready(function() {
  $('#lightgalleryf89').lightGallery({
    pager: true,
    mode: 'lg-soft-zoom'
  });
});


$('#lightgalleryp7').lightGallery({
    closable: false
});

$('#lightgalleryp8').lightGallery({
    closable: false
});

$('#lightgalleryp9').lightGallery({
    closable: false
});

$('#lightgalleryp10').lightGallery({
    closable: false
});

$('#lightgalleryp11').lightGallery({
    closable: false
});
         



$('.list-header').on('click', function() {
   var $J_li = $(this).parents('.J_list')
   $J_li.hasClass('open') ? $J_li.removeClass('open') : $J_li.addClass('open');
})


$(function() {
  $('.iframe-link').magnificPopup({
   type:'iframe'
  });
});


jQuery('#interest_tabs').on('click', 'a[data-toggle="tab"]', function(e) {
     e.preventDefault();
     var $link = $(this);
     if (!$link.parent().hasClass('active')) {
       //remove active class from other tab-panes
       jQuery('.tab-content:not(.' + $link.attr('href').replace('#','') + ') .tab-pane').removeClass('active');
       // click first submenu tab for active section
               jQuery('a[href="' + $link.attr('href') + '_all"][data-toggle="tab"]').click();

       // activate tab-pane for active section
       jQuery('.tab-content.' + $link.attr('href').replace('#','') + ' .tab-pane:first').addClass('active');
                       $('#hello').find('a').trigger('click');

     }
     console.log(jQuery(e.target).attr("href"))
     let type = jQuery(e.target).attr("href");
     jQuery(type+"_monday").addClass('active')
   jQuery(type+" li:first-child").addClass('active')
   console.log(jQuery(type+" #hello"))
   });


}(jQuery));	














