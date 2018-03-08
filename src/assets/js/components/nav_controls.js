var menu = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        menu.classList.add('navbarScrolled');
    } else {
        menu.classList.remove('navbarScrolled');
    }
});
$(document).ready(function () {
    $('#feature').on('click', function () {
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 600);
    });
    $('#home').on('click', function () {
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        $('html, body').animate({
            scrollTop: $('.homePage').offset().top
        }, 600);
    });
});