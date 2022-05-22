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
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
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
            // 'dark-blue': '#050d5c',
            'dark-bg': '#0B021E',
            'dark-blue': '#020010',
            'very-dark-blue': '#1a162c',
            'qonexia-blue': '#00b0ff',
            'soft-blue': '#272263',
            'soft-blue-2': '#10032C'
        },
    },
    plugins: [],
}
