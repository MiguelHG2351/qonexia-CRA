const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        'white-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #aaa)',
        'blue-gradient':
          'radial-gradient(80% 50.24% at 49.92% 55.85%, rgba(2, 73, 138, 0.36) 0%, #0B021E 100%)',
        'blue-gradient-desk':
          'radial-gradient(80% 50.24% at 73.92% 55.85%, rgba(2, 73, 138, 0.36) 0%, #0B021E 100%)',
        'black-gradient-desk':
          'linear-gradient(0deg, rgb(0, 0, 0) 7%, rgba(0, 0, 0, 0) 73%)',
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.green,
      purple: colors.purple,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      sky: colors.sky,
      slate: colors.slate,
      indigo: colors.indigo,
      cyan: colors.cyan,
      primary: '#20D2C6',
      secondary: '#FF4FA1',
      tertiary: '#00DD4B',
      accent: '#302840',
      'dark-bg': '#0B021E',
      'dark-blue': '#020010',
      'very-dark-blue': '#1a162c',
      'qonexia-blue': '#00b0ff',
      'soft-blue': '#272263',
      'soft-blue-2': '#10032C',
    },
  },
  plugins: [],
}
