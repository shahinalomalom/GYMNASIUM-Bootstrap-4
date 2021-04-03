$(function () {
    'use strict';
    var menuBg = $('.navbar');
    var backToTop = $('.back-to-top');

    //navbar link active;
    $('.navbar .nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });

    //about video venubox;
    $('.venobox').venobox({
        spinColor: '#e23e38',
        overlayColor: 'rgba(226, 62, 56, 0.6)',
        closeColor: '#fff',
    });



    //team slider;
    $('#team .team-slider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //testimonial slider;
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
    },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
        ]
    });

    //counter up;
    $('.counter').counterUp({
        time: 1500,
    });

    //brand slider;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"><i>',
        nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"><i>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                }
    },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
    },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
        ]
    });

    //back to top button;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }

        if (scrolling >= 300) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });


    backToTop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //animation scroll js;
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});