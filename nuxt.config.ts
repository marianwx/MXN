// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'MXN Lab',
      link: [{ rel: 'icon', type: 'image/png', href: '/MXN.png' }],
    }
  },
})