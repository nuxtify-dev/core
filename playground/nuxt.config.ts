export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  nuxtifyCore: {
    brand: {
      name: '@nuxtify/core playground',
    },
    announcement: {
      show: true,
      message: 'Welcome to the @nuxtify/core playground!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },
  },
})
