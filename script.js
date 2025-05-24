// script.js

gsap.registerPlugin(ScrollTrigger);

// Animar el trazo del SVG (dibujo)
const paths = document.querySelectorAll("#plano path");

paths.forEach(path => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
});

gsap.to(paths, {
  strokeDashoffset: 0,
  duration: 3,
  ease: "none",
  scrollTrigger: {
    trigger: ".svg-section",
    start: "top center",
    end: "bottom top",
    scrub: true,
  }
});

// Animar contenido servicios y contacto
gsap.from(".servicios h2, .servicios p, .servicios img", {
  scrollTrigger: {
    trigger: ".servicios",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});

gsap.from(".contacto h2, .contacto p", {
  scrollTrigger: {
    trigger: ".contacto",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});
