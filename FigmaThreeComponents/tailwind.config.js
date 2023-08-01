/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7628',
        'secondary': '#192239',
        'medium': '#6C7D93',
        'dark': '#202427',
      },
      maxWidth: {
        'container': '1170px'
      }
    },
    fontFamily: {
      'nunito': ['Nunito'],
      'sans': ['Open Sans'],
      'paprika': ['Paprika'],
      'roboto': ['Roboto']
    }
  },
  plugins: [],
}

