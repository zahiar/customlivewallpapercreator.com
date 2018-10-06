jQuery(function($){
    $('input[type=button]').addClass('btn');
    $('input[type=submit]').addClass('btn btn-primary');
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });
    $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
    });
});

