const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
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
            'dark-blue': '#020010',
            'qonexia-blue': '#00b0ff',
        },
    },
    plugins: [],
}
