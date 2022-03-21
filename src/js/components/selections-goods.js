const swiperGoods = new Swiper('.swiper-container-goods', {
    slidesPerView: 3.5,
    slidesPerGroup: 6,
    spaceBetween: 28,
    mousewheel: false,
    initialSlide:0,
    speed: 300,
    navigation: {
        nextEl: '.goods-next',
        prevEl: '.goods-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 3.5,
        },
        1023: {
            slidesPerView: 5,
        },

    }
})