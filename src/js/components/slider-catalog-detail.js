const galleryThumbs = new Swiper(".gallery-thumbs", {
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 20,
    observer: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow:false,
    virtualTranslate: true
});
const galleryMain = new Swiper(".gallery-main", {
    slidesPerView: 1,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    initialSlide: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    observer: true,
    thumbs: {
        swiper: galleryThumbs
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 1,
        }

    }
});

const popupThumbs = new Swiper(".slider-detail-popup-thumbs", {
    slidesPerView: 5,
    spaceBetween: 20,
    observer: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow:true,
});
const popupMain = new Swiper(".slider-detail-popup-main", {
    slidesPerView: 1,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    thumbs: {
        swiper: popupThumbs
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 1,
        }

    }
});

galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
    popupMain.slideTo(galleryMain.activeIndex);

});

galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
    popupMain.slideTo(galleryThumbs.activeIndex);
});

popupMain.on('slideChangeTransitionStart', function() {
    popupThumbs.slideTo(popupMain.activeIndex);
});

popupThumbs.on('transitionStart', function(){
    popupMain.slideTo(popupThumbs.activeIndex);
});



$(document).on('opened', '.remodal.slider-detail-popup', function () {
    popupThumbs.update();
    popupMain.update();
});

window.addEventListener('load', function() {
    galleryMain.update();
    galleryThumbs.update();

    popupMain.update();
    popupThumbs.update();
});

window.addEventListener('resize', function() {
    galleryMain.update();
    galleryThumbs.update();

    popupMain.update();
    popupThumbs.update();
});




const swiperScrollTabs = new Swiper(".swiper-scroll-tab", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    freeMode: true,
});

