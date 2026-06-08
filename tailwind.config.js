/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'groove': {
          'bg': {
            'primary': '#0a0a0a',
            'secondary': '#1a1a1a',
          },
          'text': {
            'primary': '#ffffff',
            'secondary': '#a0a0a0',
          },
          'gold': '#fbbf24',
          'gold-light': '#fcd34d',
        },
      },
      fontFamily: {
        'display': ['DM Sans', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
