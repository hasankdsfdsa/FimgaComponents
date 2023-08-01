/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1BBF00',
        'secondary': '#48409C',
        'middle': '#141135',
        'sky': '#726E9E',
      },
      fontSize: {
        extraLarge: '84px',
        large: '64px',
        medium: '64px',
      },
      fontFamily: {
        'sans': ['Open Sans'],
        'paprika': ['Paprika'],
        'nunito': ['Nunito Sans']
      },
      maxWidth: {
        'container': '1170px',
      }
    },
  },
  plugins: [],
}


