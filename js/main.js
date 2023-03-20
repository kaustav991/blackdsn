window.onload = function () {
  let body = document.querySelector("body");
  body.classList.add("startanimate");

  //! add animation to this class. It is initializing the moment side got fully loaded //
};

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

// gsap styles
gsap.registerPlugin(ScrollTrigger);
let container = document.querySelector('.slide');
// let sections = gsap.utils.toArray(".sec-item");

gsap.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    start: 'top top',
    end: () => '+=' + container.offsetWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let t3 = gsap.timeline();
  t3.to(
    '.go-top',
    2,
    {
      y: -150,
      ease: Power3.easeInOut,
    },
    '-=2',
  ).to(
    '.go-bottom',
    2,
    {
      y: 150,
      ease: Power3.easeInOut,
    },
    '-=2',
  );

  let scene3 = new ScrollMagic.Scene({
    triggerElement: '.sec-slide',
    duration: '2000',
    triggerHook: 0,
    offset: 'onLeave',
  })
    .setTween(t3)
    //.setPin(".sec-slide")
    .addTo(controller);

  let controller2 = new ScrollMagic.Controller();

  let t5 = gsap.timeline();
  t5.to(
    '.from-top',
    2,
    {
      y: 0,
      ease: Power3.easeInOut,
    },
    '-=2',
  ).to(
    '.from-bottom',
    2,
    {
      y: 0,
      ease: Power3.easeInOut,
    },
    '-=2',
  );

  let scene5 = new ScrollMagic.Scene({
    triggerElement: '.sec-slide',
    duration: '5000',
    triggerHook: 0,
    offset: 'onLeave',
  })
    .setTween(t5)
    //.setPin(".sec-slide")
    .addTo(controller2);
});

ScrollTrigger.refresh();
