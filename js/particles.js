particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    color: { value: "#ffffff" },
    line_linked: { enable: true, color: "#ffffff", opacity: 0.3 },
  },
  interactivity: {
    detect_on: "canvas", // Pastikan deteksi dilakukan di area canvas
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "repulse"], // Tambahkan efek "grab" agar partikel tertarik ke kursor
      },
      onclick: {
        enable: true,
        mode: "push", // Saat klik, partikel bertambah
      },
    },
    modes: {
      grab: {
        distance: 150, // Jarak partikel mengikuti kursor
        line_linked: { opacity: 0.5 },
      },
      repulse: {
        distance: 100, // Jarak efek menjauh saat kursor mendekati partikel
        duration: 0.4,
      },
      push: {
        particles_nb: 4, // Jumlah partikel bertambah saat klik
      },
    },
  },
});
