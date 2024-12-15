
      // Toggle mobile menu
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Fungsi untuk menambahkan kelas aktif
      function setActiveNavLink() {
        const links = document.querySelectorAll("#menu a, #mobile-menu ul li a");
        const currentPath = window.location.pathname.split("/").pop(); // Mendapatkan nama file halaman saat ini

        links.forEach((link) => {
          // Periksa jika href tautan cocok dengan path halaman saat ini
          if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
          }
        });
      }

      // Panggil fungsi setelah halaman dimuat
      document.addEventListener("DOMContentLoaded", setActiveNavLink);