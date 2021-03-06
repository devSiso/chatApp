$(document).ready(function () {
    $('.menu-hamburger').on('click', function (a) {
        a.stopPropagation();
        if (!$('.menu').hasClass('navbar-active')) {
            $(document).on('click touchstart', closeOnClickOutside);
        }
        $('.menu-hamburger').toggleClass('menu-hamburger-active');
        $('.menu').toggleClass('navbar-active');
    });
});
var closeOnClickOutside = function (e) {
    if ($('.menu').hasClass('navbar-active') && $(e.target).closest('.menu').length || $('.menu').hasClass('navbar-active') && $(e.target).closest('.menu-hamburger').length != 0 || $('.menu').hasClass('navbar-active') && $(e.target).closest('#navbar').length != 0) return;
    if ($('.menu').hasClass('navbar-active') && $('.menu-hamburger').hasClass('menu-hamburger-active')) {
        $(document).off('click touchstart', closeOnClickOutside);
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
    }
};