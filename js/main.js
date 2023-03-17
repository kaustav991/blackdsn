/** @format */
// swiper-sliders
var swiper = new Swiper('.feed-slide', {
  effect: 'cards',
  loop: true,
  freeMode: true,
  parallax: true,
  speed: 1500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
});
// ----------------------------------------
// fractional - slide
// ----------------------------------------

var swiper = new Swiper('.post-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swip2',
    type: 'bullets',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// for locomotive scroll

var scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

// gsap styles
