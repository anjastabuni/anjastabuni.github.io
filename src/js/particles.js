particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    size: { value: 2, random: true },
    move: { speed: 1.2, random: true },
    opacity: { value: 0.7, anim: { enable: true, speed: 0.5 } },
    color: { value: "#ffffff" },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" }, // Tambahkan efek bubble
      onclick: { enable: true, mode: "repulse" }, // Efek menjauh saat klik
    },
    modes: {
      bubble: { distance: 200, size: 5, duration: 1.5, opacity: 1 },
      repulse: { distance: 100, duration: 0.5 },
    },
  },
});
