/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/image1.png')",
        "hero-map-trip": "url('/assets/images/map_trip.png')",
        "hero-last-home": "url('/assets/images/mountains-blue.png')",
      },
      colors: {
        "gris-trasparent": "rgba(255, 255, 255, 0.5)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        example1: "200px minmax(900px, 1fr) 100px",
        layout: "270px 1fr",
      },
    },
  },
  plugins: [],
};
