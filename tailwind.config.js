/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/image1.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        "gris-trasparent": "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
