const defaultTheme = require('tailwindcss/defaultTheme')

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
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
