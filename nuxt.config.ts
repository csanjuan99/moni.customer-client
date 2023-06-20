// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:3000',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Poppins: {
                wght: [100, 200, 300, 400, 500, 600, 700],
            },
            Inter: {
                wght: [100, 200, 300, 400, 500, 600, 700],
            }
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
    },
    css: [
        '~/assets/css/main.css',
    ],
})
