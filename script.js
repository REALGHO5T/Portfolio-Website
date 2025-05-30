const smoothscroll = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
};
smoothscroll();


const heroAnimation = () => {
  let hl = gsap.timeline();
  hl.from(".hero-section .hero-content h1", {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power4",
    stagger: 0.1,
  });

  hl.from(
    "header p, header .btn",
    {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4",
      stagger: 0.1,
    },
    "<"
  );
 

  gsap.from(".intro-left h1, .intro-right p", {
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      end: "bottom top",
      scrub: false,
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
  });
};

const projectAnimation = () => {
  let pl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-section",
      start: "top center",
      end: "bottom top",
      scrub: false,
    },
  });

  pl.from(".project-left h1, .project-right", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
  });

   document.querySelectorAll(".project").forEach((project) => {
    gsap.from(project, {
      scrollTrigger: {
        trigger: project,
        start: "-50% center",
        end: "bottom top",
        scrub: false,
        stagger: 0.3,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
};



heroAnimation();
projectAnimation()