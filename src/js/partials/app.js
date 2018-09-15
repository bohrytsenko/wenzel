$( document ).ready(function() {

    // Slider

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Slider offer

    var swiper = new Swiper('.swiper-offer', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });

});


