function smoothScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
function pageview(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}
let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");
let sidebar = document.querySelector(".sidebar");

function Sidebar() {
  let sl = gsap.timeline();
  sl.to(".sidebar", {
    right: 0,
    duration: 0.4,
    ease: "power4",
  });
  sl.from(".sidebar ul li", {
    x: 100,
    duration: 0.4,
    stagger: 0.1,
    opacity: 0,
  });
  sl.pause();
  menuOpen.addEventListener("click", function () {
    sl.play();
  });
  menuClose.addEventListener("click", function () {
    sl.reverse();
  });
}
function PageAnimation() {
  let hl = gsap.timeline();

  hl.from("header .logo, header ul li", {
    y: -100,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.4,
    ease: Power4,
  });
  hl.from(".hero .text", {
    y: 200,
    duration: 1,
    stagger: 0.2,
    delay: 0.4,
    ease: "power3.out",
    opacity: 0,
  });
  hl.from(
    ".masker",
    {
      width: "0%",
      ease: Power4,
      stagger: 0.2,
      duration: 0.5,
    },
    "<"
  );
  hl.from("#textp", {
    x: 200,
    ease: Power2,
    opacity: 0,
  });
  let al = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "-20% 30%",
      end: "bottom bottom",
    },
  });
  al.from(".about-left", {
    x: -200,
    duration: 1,
    ease: Power4,
    opacity: 0,
  });
  al.from(
    ".about-right, .about-right p",
    {
      x: 200,
      duration: 1,
      ease: Power4,
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  );

  let vl = gsap.timeline({
    scrollTrigger: {
      trigger: ".valhalla-section",
      start: "-20% 30%",
      end: "bottom bottom",
    },
  });

  vl.from(".valhalla-left", {
    x: -100,
    duration: 1,
    ease: Power4,
    opacity: 0,
  });
  vl.from(
    ".valhalla-right-heading, .valhalla-right-sub-heading",
    {
      x: 100,
      duration: 1,
      ease: Power4,
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  );
  let ml = gsap.timeline({
    scrollTrigger: {
      trigger: ".music-section",
      start: "-20% 30%",
      end: "bottom bottom",
    },
  });

  ml.from(".music-left", {
    x: 100,
    duration: 1,
    ease: Power4,
    opacity: 0,
  });
  ml.from(
    ".music-right-heading, .music-right-sub-heading",
    {
      x: -100,
      duration: 1,
      ease: Power4,
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  );
  let pl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-section",
      start: "-60% 30%",
      end: "bottom bottom",
      scrub: 0.1,
    },
  });
  pl.to(".project-text1", {
    x: 200,
    ease: Power4,
  });
  pl.to(
    ".project-text2",
    {
      x: -300,
      ease: Power4,
    },
    "<"
  );
}
PageAnimation();
pageview()
Sidebar();
smoothScroll();

