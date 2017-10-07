$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.top-bar').addClass('fixed');
    } else {
        $('.top-bar').removeClass('fixed');
    }
});