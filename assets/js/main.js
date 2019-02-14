/************* Main Js File ************************
    Template Name: Novota- Personal Portfolio Template
    Author: Tanmoy Dhar
    Version: 1.0
    Copyright 2018
****************************************/


/*==================================

        Table of Content

        1. Window Load Function
            a. Preloader Setup
            b. Portfolio Isotope Setup
        2. Document Ready Function
            a. ScrollIt Setup
            b. Navbar Scrolling Background
            c. Stats Counter Setup
            d. Navbar Close On Click Mobile Responsive
            e. Stellar Setup
            f. Magnific Popup Setup
            g. Blog OwlCarousel Setup
            h. Testimonial OwlCarousel Setup
            i. Contact Form Setup

==================================*/

    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";
    /*========Preloader========*/
       $('.preloader').fadeOut(200);

    /*========Portfolio Isotope Setup========*/
    if ($(".portfolio-section").length) {
        var $elements = $(".portfolio-section");
        $elements.isotope();
        $(".port-filter ul li").on("click", function() {
            $(".port-filter ul li").removeClass("filter-item");
            $(this).addClass("filter-item");
            var selector = $(this).attr("data-filter");
            $(".portfolio-section").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        });
    }
    var wind = $(window);

    /*========ScrollIt Setup========*/
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -15 // offste (in px) for fixed top navigation
    });

    /*========Navbar Scrolling Background========*/
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")
        if (bodyScroll > 300) {
            navbar.addClass("fixed-top");
        } else {
            navbar.removeClass("fixed-top");
        }
    });
    /*========Progress js========*/
    $('.circlechart').circlechart();
    /*========Stats Counter Setup========*/
    (function(){
        if($("section.counter-area").length > 0) {
            var a = 0;
            $(window).on('scroll', function() {
                var oTop = $('section.counter-area').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('section.counter-area .counter-item .counter').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            });
        }

    })();

    /*========Navbar Close On Click Mobile Responsive========*/
    $(".nav-item .nav-link").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });



     /*========Magnific Popup Setup========*/
     $('.portfolio .port-link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

      
  /* Slider background
  -------------------------------------------------------*/
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items:1,
      nav:false,
      loop:true,
      dots:true,
      autoplay:true
 
  });
        $("#testimonial-slider").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      dots: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        767:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });
 
      /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
});




