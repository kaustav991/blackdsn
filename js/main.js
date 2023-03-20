/** @format */
// swiper-sliders
var swiper = new Swiper(".feed-slide", {
  effect: "cards",
  loop: true,
  freeMode: true,
  parallax: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
  },
});
// ----------------------------------------
// fractional - slide
// ----------------------------------------

var swiper = new Swiper(".post-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swip2",
    type: "bullets",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for locomotive scroll

// var scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });

// gsap styles
gsap.registerPlugin(ScrollTrigger);
let container = document.querySelector(".slide");
// let sections = gsap.utils.toArray(".sec-item");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".slide",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".slide").offsetWidth,
//   },
// });
gsap.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: () => "+=" + container.offsetWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

ScrollTrigger.refresh();

