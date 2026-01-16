export default defineAppConfig({
  nuxtify: {
    // Brand
    brand: {
      tagline: 'Catchy tagline',
    },

    // Announcement
    announcement: {
      show: true,
      message: 'This is a site wide announcement!',
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
