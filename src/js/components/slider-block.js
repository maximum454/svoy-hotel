if ($('.swiper-container-block').length > 0) { //some-slider-wrap-in
    let swiperInstances = [];
    $(".swiper-container-block").each(function(index, element){ //some-slider-wrap-in
        const $this = $(this);
        let sliderCount = $this.data('slide-count');
        let sliderCountTable = $this.data('slide-table');

        $this.addClass("swiper-container-block-" + index); //instance need to be unique (ex: some-slider)
        $this.parents('.slider-block').find(".swiper-button-prev").addClass("block-prev-" + index); //prev must be unique (ex: some-slider-prev)
        $this.parents('.slider-block').find(".swiper-button-next").addClass("block-next-" + index); //next must be unique (ex: some-slider-next)
        swiperInstances[index] = new Swiper(".swiper-container-block-" + index, { //instance need to be unique (ex: some-slider)
            // your settings ...
            navigation: {
                prevEl: ".block-prev-" + index,  //prev must be unique (ex: some-slider-prev)
                nextEl: ".block-next-" + index, //next must be unique (ex: some-slider-next)
            },
            slidesPerView: 3,
            slidesPerGroup: 6,
            spaceBetween: 28,
            mousewheel: false,
            initialSlide: 0,
            speed: 300,
            breakpoints: {
                400: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: !sliderCountTable ? 3: sliderCountTable,
                },
                1023: {
                    slidesPerView: !sliderCount ? 4: sliderCount,
                },

            }
        });
    });

    // Now you can call the update on a specific instance in the "swiperInstances" object
    // e.g.
    
    //swiperInstances[0].update();
    //or all of them
    setTimeout(function () {
        for (const slider of swiperInstances) {
            slider.update();
        }
    }, 50);
}