var swiper = new Swiper('.swiper-container', {
        duration: 2000,
        loop:true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        keyboard:{
            enabled: true,
        },
        pagination: {
                el: '.swiper-pagination',
            },
});

