const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '20px',
        md: '30px'
      }
    },
    extend: {
      colors: {
        accent: '#cfc493'
      },
      fontFamily: {
        heading: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
