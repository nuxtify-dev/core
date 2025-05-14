export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-13',
  nuxtifyCore: {
    brand: {
      name: '@nuxtify/core playground',
    },
    announcement: {
      show: true,
      message: 'This is the announcement bar for the @nuxtify/core playground!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },
  },
})
