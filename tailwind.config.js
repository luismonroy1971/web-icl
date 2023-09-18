module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16236E",
        lightBlue: '#E7F2FA',
        gray: '#7D7D7D',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms', // and so on, add as many as you need
      },
      animate: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'fade-out': 'fadeOut 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
