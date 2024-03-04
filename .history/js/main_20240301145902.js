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
var nestedTabSelect = (tabsElement, currentElement) => {
    const tabs = tabsElement ?? 'ul.tabs';
    const currentClass = currentElement ?? 'active';
    
    document.querySelectorAll(tabs).forEach(function (tabContainer) {
      let activeLink, activeContent;
      const links = Array.from(tabContainer.querySelectorAll("a"));
  
      activeLink =
        links.find(function (link) {
          return link.getAttribute("href") === location.hash;
        }) || links[0];
      activeLink.classList.add(currentClass);
  
      activeContent = document.querySelector(activeLink.getAttribute("href"));
      activeContent.classList.add(currentClass);
  
      links.forEach(function (link) {
        if (link !== activeLink) {
          const content = document.querySelector(link.getAttribute("href"));
          content.classList.remove(currentClass);
        }
      });
  
      tabContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          // Make the old tab inactive.
          activeLink.classList.remove(currentClass);
          activeContent.classList.remove(currentClass);
  
          // Update the variables with the new link and content.
          activeLink = e.target;
          activeContent = document.querySelector(activeLink.getAttribute("href"));
  
          // Make the tab active.
          activeLink.classList.add(currentClass);
          activeContent.classList.add(currentClass);
  
          e.preventDefault();
        }
      });
    });
  };
  
  nestedTabSelect('ul.tabs', 'active');
  