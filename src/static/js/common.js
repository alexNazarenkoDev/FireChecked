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
$('.faq-item').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    $ths.toggleClass('active');
});
$('.software-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});
$(document).ready(function(){
    // Ініціалізація слайдера тільки для ширини менше або рівно 768 пікселів
    if ($(window).width() <= 768) {
        $('.testamonials-wrap').slick({
            dots: true, // Показує пагінацію
            infinite: true, // Безкінечний слайдер
            speed: 300, // Швидкість переходу між слайдами
            slidesToShow: 1, // Показує один слайд за раз
            slidesToScroll: 1, // Прокручування одного слайду за раз
            autoplay: true, // Автопрокручування слайдів
            autoplaySpeed: 2000, // Швидкість автопрокручування
            arrows: false, // Приховує стрілки
        });
    }

    // Перевірка при зміні розміру екрану
    $(window).resize(function(){
        if ($(window).width() <= 768) {
            if (!$('.testamonials-wrap').hasClass('slick-initialized')) {
                $('.testamonials-wrap').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                });
            }
        } else {
            if ($('.testamonials-wrap').hasClass('slick-initialized')) {
                $('.testamonials-wrap').slick('unslick'); // Вимикає слайдер для більших екранів
            }
        }
    });
});
