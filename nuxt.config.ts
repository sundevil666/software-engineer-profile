import { siteMeta } from './config/site'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-16',
  css: ['~/assets/styles/main.scss'],
  devtools: {
    enabled: false,
  },
  modules: ['@nuxt/eslint'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: siteMeta.description,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      title: siteMeta.title,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
