module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      foodCard: "600px",
      10: "2.5rem",
    },
    extend: {
      backgroundImage: {
        "bg-food": "url('/src/images/bannerbackground.png')",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["group-focus"] },
  },
  plugins: [],
};
