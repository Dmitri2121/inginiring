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
