/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(13% 0.028 261.692)',
        secondary: 'oklch(30% 0.04 200)',
        highlight: 'oklch(90% 0.1 40)',
        textColor: 'oklch(55.1% 0.027 264.364)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        cursive: ['Parisienne', 'cursive'],
        sriracha: ['Sriracha', 'cursive'],
      },
      animation: {
        'scroll-horizontal': 'scroll-horizontal 30s linear infinite',
      },
      keyframes: {
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        'iphone7': '375px',
      },
    },
  },
  plugins: [],
}
