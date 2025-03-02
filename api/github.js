document.addEventListener("DOMContentLoaded", function () {
  const username = "anjastabuni"; // Ganti dengan username GitHub-mu
  const reposContainer = document.getElementById("github-projects");

  async function fetchGitHubRepos() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.status}`);
      }

      const repos = await response.json();

      reposContainer.innerHTML = repos
        .slice(0, 3) // Menampilkan 6 repo terbaru
        .map(
          (repo) => `
      <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-5 transition duration-300 transform hover:scale-105 hover:shadow-xl marquee-item " data-aos="fade-up">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${repo.name}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
          ${repo.description || "Tidak ada deskripsi."}
        </p>
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span class="flex items-center py-1"><i class="fas fa-circle text-blue-500 mr-1"></i> ${repo.language || "N/A"}</span>
          <span class="flex items-center py-1"><i class="fas fa-star mr-1"></i> ${repo.stargazers_count}</span>
          <span class="flex items-center py-1"><i class="fas fa-code-branch mr-1"></i> ${repo.forks_count}</span>
        </div>
        <div class="flex justify-between">
          <a href="${repo.html_url}" target="_blank" class=" rounded-lg text-lg">
            <i class="fa-brands fa-github mr-2"></i>
          </a>
          ${
            repo.homepage
              ? `<a href="${repo.homepage}" target="_blank" class="px-4 py-2 text-lg rounded-lg">
                <i class="fa-solid fa-link mr-2"></i>
              </a>`
              : ""
          }
        </div>
      </div>
    `
        )
        .join("");
    } catch (error) {
      console.error("Gagal mengambil data dari GitHub API:", error);
      reposContainer.innerHTML = "<p class='error-message'>Gagal memuat data dari GitHub.</p>";
    }
  }

  fetchGitHubRepos();
});
