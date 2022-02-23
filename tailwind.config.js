const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            sky: colors.sky,
            slate: colors.slate,
            // 'dark-blue': '#050d5c',
            'dark-bg': '#0B021E',
            'dark-blue': '#020010',
            'very-dark-blue': '#1a162c',
            'qonexia-blue': '#00b0ff',
        },
    },
    plugins: [],
}
