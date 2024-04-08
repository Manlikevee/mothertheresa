var swiper = new Swiper(".swiper-panorama", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    loopAddBlankSlides: true,
    speed: 600,
    spaceBetween: 0,
    mousewheel: false, 
    effect: "coverflow",
    coverflowEffect: {
        stretch: -5,
        rotate: 10,
        depth: -65,
        modifier: 2,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000, // Time in milliseconds between slides
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes, clicks, etc.)
    },
});




const navbar = document.getElementById('navbar');

// Function to handle scroll event
function handleScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Add or remove the "active" class based on scroll position
  if (scrollPosition >= 160) {
    navbar.classList.add('navactive');
  } else {
    navbar.classList.remove('navactive');
  }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();



(function ($) {
    $(function () {
  
  
      $('.js-timeline-carousel_nav').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
  
        variableWidth: true,
        centerMode: true,
  
        asNavFor: '.js-timeline-carousel',
        focusOnSelect: true,
        mobileFirst: true,
        responsive: [
       
          {
            breakpoint: 768,
            settings: {
  
              slidesToShow: 8
            }
          },
          {
            breakpoint: 0,
            settings: {
              centerMode: false
            }
          }
        ]
      });
  
      $('.js-timeline-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
  
        slidesToShow: 1,
        slidesToScroll: 1,
  
        prevArrow: '.js-ag-timeline-carousel-arrow_prev',
        nextArrow: '.js-ag-timeline-carousel-arrow_next',
  
        asNavFor: '.js-timeline-carousel_nav',
        speed: 1500,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              centerMode: false
            }
          }
        ]
      });
  
  
    });
  })(jQuery);