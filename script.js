// Animación inicial
gsap.from(".portada h1", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".portada p", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.6,
  ease: "power3.out"
});

gsap.from(".portada .boton", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  delay: 1,
  ease: "back.out(1.7)"
});

// ScrollTrigger para secciones
document.querySelectorAll(".pantalla").forEach((section, i) => {
  if (i === 0) return; // saltamos portada

  const elements = section.querySelectorAll("h2, p, li");

  gsap.from(elements, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });
});
