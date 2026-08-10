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
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg?v=5',
        },
      ],
      meta: [
        {
          name: 'description',
          content: siteMeta.description,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#f4f1e8',
        },
      ],
      title: siteMeta.title,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
