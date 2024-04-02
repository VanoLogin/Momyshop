const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const Secondswiper = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const thirdSwiper = new Swiper(".swiper-3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: true,
  // },
});

const fourSwiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const productSwiper = new Swiper('.product-swiper-container', {
  // Опции Swiper.js
  slidesPerView: 'auto', // Определяет количество слайдов, отображаемых на экране
  spaceBetween: 20, // Определяет расстояние между слайдами
  loop: true, // Определяет, будет ли карусель бесконечной
  touch: true // Разрешает свайпы пальцем для навигации
});


