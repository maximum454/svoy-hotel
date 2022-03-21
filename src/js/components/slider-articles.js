const swiperArticles = new Swiper('.swiper-container-articles', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    freeMode: true,
    mousewheel: false,
    initialSlide: 0,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.articles-next',
        prevEl: '.articles-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        }
    }

});