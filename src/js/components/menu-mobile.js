
$(function(){
    $('.arrow-down').on('click', function(){
        $(this).siblings('ul').toggleClass('show');
    })
    $('.menu-mobile__close').on('click', function(){
        $('.menu-mobile').removeClass('show');
    })

    $('.js-menu-mobile').on('click', function(){
        $('.menu-mobile').addClass('active');
        $('body').addClass('lock');
    })

    $('.menu-mobile__close').on('click', function(){
        $('.menu-mobile').removeClass('active');
        $('body').removeClass('lock');
    })


})
