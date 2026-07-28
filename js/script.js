/* =======================================
                Preloader
========================================= */

setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 2500);

/* =======================================
                Portfolio
========================================= */

$(window).on("load", function () {

    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // Get Filter Values
        var filterValue = $(this).attr('data-filter');

        // Filter Portfolio Items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

/* =======================================
                Navigation Bar
========================================= */

// Show and Hide Nav Buttons

$(function () {

    // Show/Hide Nav on page load
    showHideNav();

    $(window).scroll(function () {

        // Show/Hide Nav on window's scroll
        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show White Nav
            $('nav').addClass("white-nav-top");

            // Show Dark Logo
            $('.navbar-brand img').attr("src", "img/logo/logo-dark.png");

            // Show Back To Top Button
            $('#back-to-top').fadeIn();

        } else {

            // Hide White Nav
            $('nav').removeClass("white-nav-top");

            // Show Dark Logo
            $('.navbar-brand img').attr("src", "img/logo/logo.png");

            // Show Back To Top Button
            $('#back-to-top').fadeOut();
        }

    }
});

// Smooth Scrolling
$(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        // Get Section Id
        var section_id = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(section_id).offset().top - 64

        }, 1250, "easeInOutExpo");

    });

});

/* =======================================
                Mobile Menu
========================================= */

$(function () {

    // Show Mobile Nav
    $('#mobile-nav-open-btn').click(function () {
        $('#mobile-nav').css("height", "100%");
    });

    // Hide Mobile Nav
    $('#mobile-nav-close-btn, #mobile-nav a').click(function () {
        $('#mobile-nav').css("height", "0%");
    });
});

/* =======================================
                Animate
========================================= */

$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $('.home-heading p').addClass('animated fadeInLeft');
    $('.home-heading h1').addClass('animated fadeInLeft');
    $('.home-text').addClass('animated fadeInLeft');
});