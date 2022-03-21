$(function() {
    accordeon();
});


function accordeon(){
    $('.accordeon').on('click','.accordeon__item', function (){
        $(this).toggleClass('active').siblings().removeClass('active');
    })
}

