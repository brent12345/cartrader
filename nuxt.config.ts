// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  supabase: {
    redirect: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image-edge",
    "@nuxtjs/supabase",
    '@vueuse/nuxt'
  ]
})
