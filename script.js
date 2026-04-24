gsap.registerPlugin(ScrollTrigger);

// HERO FADE OUT
gsap.to(".hero", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// SCROLL STORY PANELS
const panels = gsap.utils.toArray(".panel");

panels.forEach((panel, i) => {
  gsap.to(panel, {
    opacity: 1,
    scrollTrigger: {
      trigger: ".scroll-section",
      start: () => "top -" + (window.innerHeight * i),
      end: () => "+=" + window.innerHeight,
      scrub: true
    }
  });
});
