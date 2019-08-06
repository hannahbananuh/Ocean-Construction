
$(document).ready(function () {
    $('.parallax').parallax();
    $('.slider').slider({
        height: 550,
        interval: 5000,
        duration: 400
    });
    $('.modal').modal();
    $('.sidenav').sidenav();

      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});



$(document).ready(function () {
    $('.parallax').parallax();
    var stickyNavTop = $('body').offset().top;
    var navHeight = $('.navbar').height();
    $('.home-link').click(function (e) {
        // e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#home').offset().top
        }, 300);
    });
    $('.about-link').click(function (e) {
        // e.preventDefault();
        $('html,body').animate({
            scrollTop: ($('#about').offset().top - navHeight)
        }, 300);
    });
    // $('.project-link').click(function (e) {
    //     e.preventDefault(); 
    //     $('html,body').animate({
    //         scrollTop: ($('#project').offset().top - navHeight)
    //     }, 300);
    // });
    $('.news-link').click(function (e) {
        // e.preventDefault();
        $('html,body').animate({
            scrollTop: ($('#news').offset().top - navHeight)
        }, 300);
    });
    $('.contact-link').click(function (e) {
        $('html,body').animate({
            scrollTop: ($('#contact').offset().top - navHeight)
        }, 300);
    });

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    };


    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
});


function onSubmit(e) {
    e.preventDefault();
    M.toast({html: 'Form Submitted!'})
}