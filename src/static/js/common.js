AOS.init();
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    $ths.toggleClass('active');
    $('.header').toggleClass('is-open');
    $('body').toggleClass('is-scroll');
});
$('.software-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});