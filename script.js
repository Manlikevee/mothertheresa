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
  breakpoints: {
      // When window width is >= 576px
      576: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // When window width is >= 768px
      768: {
          slidesPerView: 3,
          spaceBetween: 10
      },
      // When window width is >= 992px
      992: {
          slidesPerView: 4,
          spaceBetween: 10
      }
      // Add more breakpoints as needed
  }
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



//   gsap.fromTo(".tween", {stagger: 0.9, y:18,  yoyo: true}, {x:18 ,   repeat:-1,  duration:1.2, yoyo: true});

// gsap.to(".tweena" , {stagger: 0.5, y:18, fill:"yellow",  duration:0.8, repeat:-1, yoyo: true});


// gsap.to(".image-stack", {y:-6, repeat:-1, duration:1,  yoyo: true, stagger:{
//     amount:1.2, from:"edges", ease:"bounce"
//   }})



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


var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});


const timelineEvents = [
  {
    year: "1910",
    date: "August 26",
    event: "Agnes Gonxha Bojaxhiu is born in Skopje, now the capital of North Macedonia, then part of the Ottoman Empire.",
    img: 'https://macedonia-timeless.com/img/mother-teresa-memorial-house.jpg'
  
  
  
  },
  {
    year: "1928",
    event: "Makes First Vow with loreto sisters in Dublin",
    img: 'https://media1.catholicireland.net/wp-content/uploads/2016/09/Mother-Teressa-as-a-Loreto-nun-banner.jpg'
  },

  {
    year: "1934",
    event: "Named principal of girls school in kolkata",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTw-9OS2V-WE5ZLQXXTaf8-LMZbbO2GREvnEr2HLW2IGd5C72QuyOGHoOZAE4d0C9ew8&usqp=CAU"
  },
  {
    year: "1946",
    event: "Receives Inner Call To Serve The Poor"
    ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kpWN6NAPp7O_TVZ1yUv-QuyqjbyJ5KedZ42HKwaQT9OFj5ABi1mVSkXW-cTArtJe92w&usqp=CAU'
  },
  {
    year: "1950",
    event: "Established Missionary Of Charity"
    ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWPYCwZBkGMjAIgH9xLwdmy4JwSFBYlfSSVl4XQCS0CkjCEQ7e0q9cjF4LtGD_l_95Go&usqp=CAU'
  },
  {
    year: "1952",
    event: "Opens Home For dying destitute in kolkata"
    ,img: 'https://c8.alamy.com/comp/EH6HE6/mother-teresas-home-for-the-dying-destitute-nirmal-hriday-EH6HE6.jpg'
  },
  {
    year: "1965",
    event: "Receives pontificial approval for her order"
    ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbAmq7Bi81Bv6DcbQEPWXWMoKwLvZ2-tlsSSTbEfy3BuGcu6byqbBHhawcXmXZ0X7V3A&usqp=CAU'
  },
  {
    year: "1971",
    event: "Receives first pope John XXIII Peace Price established first U.S foundation of her order"
    ,img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pope-awards-peace-prize-to-mother-teresa-bettmann.jpg'
  },
  {
    year: "1979",
    event: "Mother Teresa is awarded the Nobel Peace Prize for her tireless efforts to alleviate the suffering of the poor and marginalized.",
    img: 'https://albaniandailynews.com/foto/2023/12/20231210100102_art.jpg'
  },
  {
    year: "1980s - 1990s",
    event: "Resigns as head of order, but reelected in unanimous vote",
    img: 'https://media1.catholicireland.net/wp-content/uploads/2016/09/Mother-Teressa-as-a-Loreto-nun-banner.jpg'
  },
  {
    year: "1997",
    event: "Receives nobel peace prize"
    ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwBzmZh2WCnT2qdwklzLRymLIXeO4vhpoN7cr8ALto0gZWIt3rq3Cc7m9UU0pDwpC6r8&usqp=CAU'
  },
  {
    year: "2003",
    event: "Mother Teresa passes away at the age of 87 in Calcutta, leaving behind a legacy of love, service, and devotion to the poorest of the poor."
    ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb0y-6jDPBJj22AXQHZ55-DbAqZNZx3qvM1O9osDENpBbznWTnGPUi4qgfEvOdthik1Y&usqp=CAU'
  },
  {
    year: "2016",
    event: "Pope Francis declares Mother Teresa a saint of the Roman Catholic Church during a canonization ceremony at the Vatican.",
    img:'https://static.india.com/wp-content/uploads/2016/08/Mother-Teresa-Photo-by-CM-Mamata-Banerjee.jpg?impolicy=Medium_Resize&w=1200&h=800'
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

        <div class="imgcarthree">
        ${event.img? 
          (
            `<img src="${event.img}" alt="" loading="lazy"></img>`
          ) 
          :
           ('') 
          }
</div>
 
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

function toggleFullScreen() {
  var elem = document.documentElement;
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        alert(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }
}

// <div class="imgcarthree">
// <img src="6e94efc4-c0ca-11ed-8678-0210609a3fe2.jpg" alt="">
// </div>


function navtoggle(){
  const links = document.getElementById('navlinks').classList.toggle('navactive')
}

