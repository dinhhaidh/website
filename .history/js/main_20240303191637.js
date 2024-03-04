//*=============== SHOW MENU ===============*/
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-menu').addClass('show-menu')
    });
    $('#nav-close').click(function(){
        $('#nav-toggle').hide();
    });
    $('.nav__link').click(function(){
        $('#nav-menu').hide();
    });
    $('#nav-close').click(function(){
        $('#nav-menu').removeClass('show-menu')
    });
    $('.nav__link').click(function(){
        $('#nav-menu').fadeIn();
    });
    $('.nav__link').click(function(){
        $('#nav-menu').removeClass('show-menu')
    });

    $('#nav-shopping').click(function(){
        $('#Shopping').addClass('show__shopping')
    });
    $('#Close').click(function(){
        $('#Shopping').removeClass('show__shopping')
    });

    // dropdown
    $('.dropdown__arrow').click(function(){
        $('dropdown__list').addClass('dropdown__list li a')
    });



    /*=============== CHANGE BACKGROUND HEADER ===============*/
    $(window).scroll(function() {
        $('#header').toggleClass('blur-header', $(this).scrollTop() >= 50);

        /*=============== SHOW SCROLL UP ===============*/ 
        // Khi cuộn cao hơn 350 chiều cao khung nhìn, hãy thêm lớp hiển thị cuộn vào thẻ có lớp cuộn lên
        $('#Sticky').toggleClass('show-scroll', $(this).scrollTop() >= 350);

        // $()
    });
    /*=============== ADD BLUR HEADER ===============*/
})

/*===============Baseball ===============*/
var swiperBaseball = new Swiper(".baseball__image", {
    loop: true,
    cssMode: true,
    slidesPerView: 'auto',
        centeredSlides: 'auto',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
})

