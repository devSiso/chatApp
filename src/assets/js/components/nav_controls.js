var menu = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        menu.classList.add('navbarScrolled');
    } else {
        menu.classList.remove('navbarScrolled');
    }
});
$(document).ready(function () {
    $('.nav-itens').on('click', function (e) {
        e.preventDefault();
        $('.menu').removeClass('navbar-active');
        $('.menu-hamburger').removeClass('menu-hamburger-active');
        var scrolling = $(this).data('nav');
        $('html, body').animate({
            scrollTop: $(scrolling).offset().top - 100
        }, 1000);
        return false;
    });
});