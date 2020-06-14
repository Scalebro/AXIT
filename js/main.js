$(document).ready(function() {

    $(function() {
        $(".nav-link").click(function() {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });


    $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');

    });

    $('.tabs-item').click(function(e) {
        e.preventDefault();

        $('.tabs-item').removeClass('tabs-item--active');
        $('.tabs__body').removeClass('tabs__body--active');

        $(this).addClass('tabs-item--active');
        $($(this).attr('href')).addClass('tabs__body--active');
    });
    $('.tabs-item:first').click();


});