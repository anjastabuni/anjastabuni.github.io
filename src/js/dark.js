function theme() {
  return {
    darkMode: localStorage.getItem("thema") === "dark",
    init() {
      this.applyTheme();
    },
    toggleDark() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("thema", this.darkMode ? "dark" : "light");
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.classList.toggle("dark", this.darkMode);
    },
  };
}
