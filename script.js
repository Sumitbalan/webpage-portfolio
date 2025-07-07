document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  gsap.registerPlugin(ScrollTrigger);

  // General fade-up effect
  gsap.utils.toArray(".reveal").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out"
    });
  });

  // Slide from left
  gsap.utils.toArray(".reveal-left").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "power2.out"
    });
  });

  // Slide from bottom
  gsap.utils.toArray(".reveal-up").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out"
    });
  });

  // Slide from top with optional delay
  gsap.utils.toArray(".reveal-top").forEach((elem) => {
    const delayClass = Array.from(elem.classList).find(cls => cls.startsWith("delay-"));
    const delay = delayClass ? parseInt(delayClass.split("-")[1]) * 0.3 : 0;

    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      },
      duration: 1,
      delay,
      opacity: 0,
      y: -50,
      ease: "power2.out"
    });
  });
});
