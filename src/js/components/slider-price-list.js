const swiperPriceList = new Swiper('.swiper-container-price-list', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    freeMode: true,
    navigation: {
        nextEl: '.price-list-next',
        prevEl: '.price-list-prev',
    },
    observer: true,
    observeParents: true
})

$(function () {
    $('.slider-price-list__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.slider-price-list').find('.slider-price-list__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})