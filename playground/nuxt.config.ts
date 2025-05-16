export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-13',
  nuxtifyCore: {
    verboseLogs: true,
    brand: {
      tagline: 'Catchy tagline',
    },
    announcement: {
      show: true,
      message: 'This is the announcement bar for the @nuxtify/core playground!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },
  },
})
