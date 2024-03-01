/*=============== SHOW MENU ===============*/
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-menu').addClass('show-menu')
    });
    $('#nav-close').click(function(){
        $('#nav-menu').removeClass('show-menu')
    });
    $('.nav__link').click(function(){
        $('#nav-menu').removeClass('show-menu')
    });

    $('#nav-shoppingg').click(function(){
        $('#Shopping').addClass('show-shopping')
    });
    $('#Close').click(function(){
        $('#Shopping').removeClass('show-shopping')
    });



    /*=============== CHANGE BACKGROUND HEADER ===============*/
    $(window).scroll(function() {
        $('#header').toggleClass('blur-header', $(this).scrollTop() >= 50);

        /*=============== SHOW SCROLL UP ===============*/ 
        // Khi cuộn cao hơn 350 chiều cao khung nhìn, hãy thêm lớp hiển thị cuộn vào thẻ có lớp cuộn lên
        $('#scroll-up').toggleClass('show-scroll', $(this).scrollTop() >= 350);

        $('.active-link').addClass('nav_menu')
        // $()
    });
    /*=============== ADD BLUR HEADER ===============*/
})