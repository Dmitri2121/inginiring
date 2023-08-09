//Свайпер
let swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

swiper.on("click", function (e) {
  console.log("Click on slide", e.clickedIndex);
});


//Смена картинок по времени

let index = 0,
          container = document.querySelector(".background-block");

        function autochange() {
          let image = ['img/проекты/01.jpg', 'img/проекты/03.jpg', 'img/проекты/04.jpg',  'img/проекты/05.jpg', 'img/проекты/06.jpg', 'img/проекты/07.jpg', 'img/проекты/08.jpg'];
          container.style.backgroundImage = 'url(' + image[index++] + ')';
          if (index > 6) {
            index = 0;
          }
        }
        window.setInterval(autochange, 3000);





