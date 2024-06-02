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
      link: [{ rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/attachments/1208411877198266379/1210973800976490556/MXN.png?ex=665d3a7c&is=665be8fc&hm=4377d1ffc0a6838d3b1a9596f3f7ab11e159131e8f54b2d4f6b0d128e1ecdae4&' }],
    }
  },
})