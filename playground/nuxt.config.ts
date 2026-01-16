export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2026-01-15',
  nuxtifyCore: {
    // Logs
    verboseLogs: true,

    // Brand
    brand: {
      tagline: 'Catchy tagline',
    },

    // Announcement
    announcement: {
      show: true,
      message: 'This is the announcement bar for the @nuxtify/core playground!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },

    // Credits
    credits: {
      creator: {
        name: 'Nuxtify',
        domain: 'nuxtify.dev',
      },
      prependText: 'Made with love by',
      appendText: ' Ship weirdly fast.',
    },
  },
})
