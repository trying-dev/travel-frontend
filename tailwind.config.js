/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/image1.png')",
        "hero-map-trip": "url('/assets/images/map_trip.png')",
        "mountains-blue": "url('/assets/images/mountains-blue.png')",
        "montains-blue-card": "url('/assets/images/montains-blue-card.png')",
      },
      colors: {
        "gris-trasparent-card": "rgba(255, 255, 255, 0.1)",
        "gris-trasparent": "rgba(255, 255, 255, 0.4)",
        "black-trasparent": "rgba(0, 0, 0, 0.75)",
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
