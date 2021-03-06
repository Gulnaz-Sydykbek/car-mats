const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
    320: {
      direction: "vertical",
      slidesPerView: 3,
      mousewheel: true,
      loop: true,
      spaceBetween: 110,
    },
    891: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});
