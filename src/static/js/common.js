AOS.init();
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    $ths.toggleClass('active');
    $('.header').toggleClass('is-open');
    $('body').toggleClass('is-scroll');
});
$('.tab-nav a').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    const $thsHref = $ths.attr('data-tab-href');

    $ths.closest('.tabs').find('.tab-nav a').removeClass('active');
    $ths.closest('.tabs').find('.tab-inner div[data-tab]').removeClass('active');

    $ths.addClass('active');
    $ths.closest('.tabs').find('div[data-tab="' + $thsHref + '"]').addClass('active');
});
$('.software-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});