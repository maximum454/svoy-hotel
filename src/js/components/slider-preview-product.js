let sliderPreviewThumbs = new Swiper(".sliderpreviewthumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
});
let sliderPreview = new Swiper(".sliderpreview", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: sliderPreviewThumbs
    }
});

sliderPreview.on('slideChangeTransitionStart', function () {
    sliderPreviewThumbs.slideTo(sliderPreview.activeIndex);
});

sliderPreviewThumbs.on('transitionStart', function () {
    sliderPreview.slideTo(sliderPreviewThumbs.activeIndex);
});