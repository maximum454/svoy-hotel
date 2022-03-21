var swiper = swiper;
var swiperInit = false;


function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');

    if (mobile.matches) {
        if (swiper) {
            swiper.destroy();
            swiperInit = false;
        }


    }

    else if (desktop.matches) {
        if (!swiperInit) {
            swiperInit = true;
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                freeMode: true,
                mousewheel: false,
                initialSlide: 0,
                speed: 300,
                navigation: {
                    nextEl: '.banners-next',
                    prevEl: '.banners-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },

            });


        }
    }
}

window.addEventListener('load', function () {
    
    if($('.swiper-container').length){
        swiperMode();
    }
});

window.addEventListener('resize', function () {
    if($('.swiper-container').length){
        swiperMode();
    }
});