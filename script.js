function smoothScroll() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
}

function pageview() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
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
  hl.from(".hero-section #text1", {
    x:-200,
    duration: 1,
    ease:"bounce",
    opacity: 0,
  });
  hl.from(".hero-section #text2", {
    x: 200,
    duration: 1,
    ease: "bounce",
    opacity: 0,
  },"<");

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
      trigger: "#case1",
      start: "-20% 30%",
      end: "bottom bottom",
    },
  });

  vl.from("#case1 .case-image", {
    scale:0.5,
    duration: 1,
    ease: Power4,
    opacity: 0,
  });
  
  let ml = gsap.timeline({
    scrollTrigger: {
      trigger: "#case2",
      start: "-20% 30%",
      end: "bottom bottom",
    },
  });

  ml.from("#case2 .case-image", {
    scale: 0.5,
    duration: 1,
    ease: Power4,
    opacity: 0,
  });
  

}
pageview();
Sidebar();
smoothScroll();
PageAnimation();
