$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    $('#iconPlay, #iconPlay_2').on('click', function(e) {
        e.preventDefault();
        $('.video').addClass('video-active');
        var symbol = $("#youtube_player")[0].src.indexOf("?") > -1 ? "&" : "?";
        $("#youtube_player")[0].src += symbol + "autoplay=1";
    });
    $('.xis').on('click', function (e) {
        $('.video').removeClass('video-active');
        $('.yt_player_iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
    });
});