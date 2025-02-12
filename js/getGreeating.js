function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) {
    return "Selamat Pagi!";
  } else if (hour >= 11 && hour < 2) {
    return "Selamat Siang!";
  } else if (hour >= 2 && hour < 18) {
    return "Selamat Sore!";
  } else {
    return "Selamat Malam!";
  }
}

window.onload = function () {
  const messageBox = document.getElementById("greetingMessage");
  const overlay = document.getElementById("overlay");

  messageBox.textContent = getGreeting();
  messageBox.classList.remove("hidden");
  messageBox.classList.add("flex", "justify-center", "items-center");

  overlay.classList.remove("hidden");

  // Hilangkan setelah 1 detik
  setTimeout(() => {
    messageBox.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 1000);
};
