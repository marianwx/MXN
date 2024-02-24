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
      title: 'MXN',
      link: [{ rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/attachments/1208411877198266379/1208411920500265000/MXN-removebg-preview.png?ex=65e3304d&is=65d0bb4d&hm=9b49c64eed3aa79ad35946e4ed58a07ca508516339254e11f019b44f2f6fc41f&' }],
    }
  },
})