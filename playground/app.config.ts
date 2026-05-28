export default defineAppConfig({
  nuxtify: {
    // Brand
    brand: {
      name: '@nuxtify/core',
      tagline: 'Catchy tagline for tne @nuxtify/core module.',
      logo: {
        lightUrl: '/img/nuxtify-logo-light.png', // Recommended 5:1 aspect ratio (e.g. 400 x 80 px)
        darkUrl: '/img/nuxtify-logo-dark.png', // Recommended 5:1 aspect ratio (e.g. 400 x 80 px)
        width: 400,
        height: 80,
        mobileWidth: 200,
        mobileHeight: 40,
      },
    },

    // Announcement
    announcement: {
      show: true,
      chipText: 'News',
      message: 'This is a site wide announcement!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
      exclude: ['/privacy', '/terms'],
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
