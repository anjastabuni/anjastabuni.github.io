/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-cols": "repeat(2, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "2-rows": "repeat(2, auto)",
      },
    },
  },
  plugins: [],
};
