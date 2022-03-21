var swiperPopulary= swiperPopulary;
var swiperPopularyInit = false;


function swiperPopularyMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');
    let sliderSpaceBetween = document.querySelector('.swiper-container-populary').getAttribute('data-spaceBetween');
    if (mobile.matches) {
        if(swiperPopulary){
            swiperPopulary.destroy();
            swiperPopularyInit = false;
        }
        

    }

    else if (desktop.matches) {
        if (!swiperPopularyInit) {
            swiperPopularyInit = true;
            document.querySelectorAll('.slider-populary').forEach(n => {
                swiperPopulary = new Swiper(n.querySelector('.swiper-container-populary'), {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 45,
                    mousewheel: false,
                    initialSlide: 0,
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: n.querySelector('.populary-next'),
                        prevEl: n.querySelector('.populary-prev'),
                    },
                    breakpoints: {
                        320: {
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        }
                    }

                });
            });
        }
    }
    swiperPopulary.update();
}

window.addEventListener('load', function() {
    if($('.swiper-container-populary').length){
        swiperPopularyMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swiper-container-populary').length){
        swiperPopularyMode();
    }
});
