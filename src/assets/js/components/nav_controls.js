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
            scrollTop: $('.feature-wrapper').offset().top - 100
        }, 600);
    });
    $('#home').on('click', function () {
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        $('html, body').animate({
            scrollTop: $('.homePage').offset().top
        }, 600);
    });
    $('#howItWork').on('click', function () {
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        $('html, body').animate({ 
            scrollTop: $('.howItWork').offset().top - 50
        }, 600);
    });
    $('#download').on('click', function () {
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        $('html, body').animate({ 
            scrollTop: $('.download').offset().top - 50
        }, 600);
    });

});