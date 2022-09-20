$(document).ready(function () {
    $(document).ready(function () {
        $('.list-image-banner').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            dots: true,
            centerMode: true,
            autoplay:true,
            infinite: true,
            autoplaySpeed: 2000,

            
        });
    });

    $('.header-right-account').click(function(){
        $('.hra-extra').toggle(200);
    });
});