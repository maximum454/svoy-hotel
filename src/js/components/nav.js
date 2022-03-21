$(function(){
    $(document).on('mouseup', function (e){
        const div = $(".js-menu-dropdown");
        const popup = $('.dropdown-content');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.siblings(popup).removeClass("active");
        }else{
            popup.toggleClass("active");
        }
    });
});
