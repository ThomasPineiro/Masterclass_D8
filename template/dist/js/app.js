//click
(function () {
    var burger = document.querySelector('.burger');
    var item = document.querySelector('.items');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        item.classList.toggle('is-active');
    });
})();


//slide
(function () {
    var swiper = new Swiper('#swipper1', {
        spaceBetween: 30,
        centeredSlides: true,
        // effect: 'fade',
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

})();

(function () {
    var swiper = new Swiper('#swipper2', {
        spaceBetween: 10,
        freeMode: true,
    });
})();

