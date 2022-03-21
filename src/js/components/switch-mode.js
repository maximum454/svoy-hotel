$(document).on('click', '.switch-mode', function (e) {
    let target = $(e.target);
    if (target.hasClass('block')) {
        $('.catalog--list').removeClass('active').addClass('hide')
        $('.catalog--block').addClass('active').removeClass('hide')
        
        $('body').addClass('catalog-plitka');
        $('body').removeClass('catalog-table');
    }
    if (target.hasClass('list')) {
        $('.catalog--list').addClass('active').removeClass('hide')
        $('.catalog--block').removeClass('active').addClass('hide')
        $('body').addClass('catalog-table');
        $('body').removeClass('catalog-plitka');
    }
})