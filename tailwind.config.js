module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      hot: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('/public/images/hot.png')",
      cool: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('/public/images/cool.png')",
    },
    extend: {},
  },
  plugins: [],
};
