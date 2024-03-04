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

    $('#nav-shopping').click(function(){
        $('#Shopping').addClass('show__shopping')
    });
    $('#Close').click(function(){
        $('#Shopping').removeClass('show__shopping')
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


// tabs

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicator = tabs.querySelector(".tab-indicator > div");

for(let i=0; i<tabHeaderElements.length; i++){
  tabHeaderElements[i].addEventListener("click", function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    tabIndicator.style.left = `${i*25}%`;
  });
}