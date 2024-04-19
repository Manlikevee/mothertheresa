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



  gsap.fromTo(".tween", {stagger: 0.9, y:18,  yoyo: true}, {x:18 ,   repeat:-1,  duration:1.2, yoyo: true});

gsap.to(".tweena" , {stagger: 0.5, y:18, fill:"yellow",  duration:0.8, repeat:-1, yoyo: true});


gsap.to(".image-stack", {y:-6, repeat:-1, duration:1,  yoyo: true, stagger:{
    amount:1.2, from:"edges", ease:"bounce"
  }})



  var text = "Mother Teresa was born Agnes Gonxha Bojaxhiu, the daughter of an ethnic Albanian grocer. She went to Ireland in 1928 to join the Sisters of Loretto at the Institute of the Blessed Virgin Mary and sailed six weeks later to India, where she taught for 17 years at the order’s school in Calcutta (Kolkata).";

// Typewriter effect function
function typeWriter(text, i, subtextElement) {
    if (i < text.length) {
        subtextElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, subtextElement);
        }, 50); // Adjust typing speed here (milliseconds)
    }
}

// Trigger typewriter effect when page loads



// script.js
window.addEventListener('load', function() {
  const progressBar = document.getElementById('progress-bar');
  const mainContent = document.getElementById('main-content');

  let progress = 0;
  const interval = setInterval(function() {
    progress += 1;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        progressBar.parentElement.parentElement.style.transition = '1s';
        progressBar.parentElement.parentElement.style.transform = 'translateY(-100%)';
        var subtextElement = document.getElementById('subtext');
        typeWriter(text, 0, subtextElement);
        setTimeout(function() {
          mainContent.style.display = 'block';
        }, 1000);
      }, 1000);
    }
  }, 50); // Adjust the speed of progress
});





const timelineEvents = [
  {
    year: "1910",
    date: "August 26",
    event: "Agnes Gonxha Bojaxhiu is born in Skopje, now the capital of North Macedonia, then part of the Ottoman Empire."
  },
  {
    year: "1928 - 1929",
    event: "Agnes decides to become a nun and leaves home to join the Sisters of Loreto in Ireland."
  },
  {
    year: "1929",
    event: "Agnes arrives in Ireland and begins her novitiate with the Sisters of Loreto."
  },
  {
    year: "1931",
    event: "Agnes takes her first vows as a nun, adopting the name Sister Mary Teresa after Saint Thérèse of Lisieux."
  },
  {
    year: "1937",
    event: "Sister Teresa takes her final vows and becomes known as Mother Teresa."
  },
  {
    year: "1946",
    event: "While traveling by train from Calcutta to Darjeeling for her annual retreat, Mother Teresa receives what she describes as a 'call within a call' from Jesus, urging her to leave the convent and work with the poorest of the poor in the slums of Calcutta."
  },
  {
    year: "1950",
    event: "Mother Teresa founds the Missionaries of Charity, a Roman Catholic religious congregation that provides food, shelter, medical care, and other basic services to the destitute and dying."
  },
  {
    year: "1952",
    event: "Mother Teresa opens her first home for the dying in Calcutta, where the terminally ill receive compassionate care in their final days."
  },
  {
    year: "1979",
    event: "Mother Teresa is awarded the Nobel Peace Prize for her tireless efforts to alleviate the suffering of the poor and marginalized."
  },
  {
    year: "1980s - 1990s",
    event: "Mother Teresa's fame grows worldwide, and she becomes an iconic figure of compassion and selflessness."
  },
  {
    year: "1997",
    event: "Mother Teresa passes away at the age of 87 in Calcutta, leaving behind a legacy of love, service, and devotion to the poorest of the poor."
  },
  {
    year: "2016",
    event: "Pope Francis declares Mother Teresa a saint of the Roman Catholic Church during a canonization ceremony at the Vatican."
  }
];



const timelineContainer = document.getElementById("ag-timeline-carousel");

// Populate the timeline
timelineEvents.forEach(event => {
  // Create the list item
  const listItem = document.createElement("li");

  // Create the year div
  const yearDiv = document.createElement("div");
  yearDiv.classList.add("ag-timeline_year");
  yearDiv.textContent = event.year;

  // Create the text div
  const textDiv = document.createElement("div");
  textDiv.classList.add("ag-timeline_text");
  textDiv.innerHTML = `
    <p>${event.event}</p>
    <div class="immc">
      <div class="imgcar">
        <div class="carflex">

        </div>
      </div>
    </div>
  `;

  // Append the year and text divs to the list item
  listItem.appendChild(yearDiv);
  listItem.appendChild(textDiv);

  // Append the list item to the timeline container
  timelineContainer.appendChild(listItem);
});



// <div class="imgcarthree">
// <img src="6e94efc4-c0ca-11ed-8678-0210609a3fe2.jpg" alt="">
// </div>