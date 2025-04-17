const scrollToTopButton = document.getElementById("scrollTop");

// Event Listener untuk mendeteksi scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Jika scroll lebih dari 200px, munculkan tombol
    scrollToTopButton.classList.remove("opacity-0", "invisible");
  } else {
    // Jika di posisi atas, sembunyikan tombol
    scrollToTopButton.classList.add("opacity-0", "invisible");
  }
});

// Event Listener untuk scroll ke atas
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
