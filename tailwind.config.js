/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite.{js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#EDFAFA",
                    "100": "#D5F5F6",
                    "200": "#AFECEF",
                    "300": "#7EDCE2",
                    "400": "#16BFCA",
                    "500": "#009EA8",
                    "600": "#007880",
                    "700": "#036B72",
                    "800": "#05575C",
                    "900": "#014751",
                }
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'inter': ['Inter', 'Poppins', 'sans-serif'],
            },
            screens: {
                'xs': '320px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1440px',
                '3xl': '1600px',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

