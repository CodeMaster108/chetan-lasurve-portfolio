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

// HORIZONTAL SCROLL
let sections = gsap.utils.toArray(".h-panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontal-section").offsetWidth
  }
});

// IMAGE ZOOM EFFECT
gsap.utils.toArray(".h-panel img").forEach((img) => {
  gsap.to(img, {
    scale: 1,
    scrollTrigger: {
      trigger: img,
      scrub: true
    }
  });
});
