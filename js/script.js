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
let index = 0;
const projectContainer = document.querySelector(".background-block");
const projectImages = [
  "img/проекты/01.jpg",
  "img/проекты/03.jpg",
  "img/проекты/04.jpg",
  "img/проекты/05.jpg",
  "img/проекты/06.jpg",
  "img/проекты/07.jpg",
  "img/проекты/08.jpg",
];

projectImages.forEach((img, i) => {
  projectContainer.insertAdjacentHTML(
    "afterbegin",
    `<img src="${img}" alt="Project${i}" ${i === 0 ? 'class="visible"' : ""}>`
  );
});

window.addEventListener("load", () => {
  function autochange() {
    index++;
    if (index === projectImages.length) {
      index = 0;
    }
    const imageEls = document.querySelectorAll(".background-block img");
    imageEls.forEach((img) => {
      img.classList.remove("visible");
    });
    imageEls[index].classList.add("visible");
  }
  window.setInterval(autochange, 5000);
});



