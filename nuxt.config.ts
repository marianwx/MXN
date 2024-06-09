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
      link: [{ rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/attachments/1208411877198266379/1210973800976490556/MXN.png?ex=666674fc&is=6665237c&hm=ded677585d8d0459e0b73cf49ca3f089586c578c8c5723f13fc17086af0263e5&' }],
    }
  },
})