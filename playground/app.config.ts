export default defineAppConfig({
  nuxtify: {
    // Brand
    brand: {
      name: '@nuxtify/core',
      domain: 'nuxtify.dev',
      tagline: 'Catchy tagline for the @nuxtify/core module.',
      logo: {
        lightUrl: '/img/nuxtify-logo-light.png', // Recommended 4:1 aspect ratio (e.g. 400 x 100 px)
        darkUrl: '/img/nuxtify-logo-dark.png', // Recommended 4:1 aspect ratio (e.g. 400 x 100 px)
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
      message: 'This is a site wide announcement for new features.',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
      exclude: ['/signin'],
    },

    // Navigation
    navigation: {
      primary: [
        {
          text: 'Pricing',
          to: '/pricing',
        },
        {
          title: 'Product',
          links: [
            {
              text: 'Core',
              description: 'Shared state, feedback tools, and branding defaults.',
              icon: 'mdi-cube-outline',
              to: '/core',
            },
            {
              text: 'Pages',
              description: 'Marketing site building blocks and layouts.',
              icon: 'mdi-file-document-outline',
              to: '/pages',
            },
          ],
        },
        {
          title: 'Why Nuxtify?',
          links: [
            {
              text: 'Showcase',
              description: 'See production sites built with Nuxtify.',
              icon: 'mdi-heart-outline',
              to: '/showcase',
            },
            {
              text: 'Documentation',
              description: 'Guides, module configuration, and examples.',
              icon: 'mdi-book-open-outline',
              href: 'https://nuxtify.dev/docs',
              openInNew: true,
            },
          ],
        },
      ],
      altPrimary: [
        {
          title: 'Product',
          links: [
            {
              text: 'Core',
              description: 'Shared state, feedback tools, and branding defaults.',
              icon: 'mdi-cube-outline',
              to: '/core',
            },
            {
              text: 'Pages',
              description: 'Marketing site building blocks and layouts.',
              icon: 'mdi-file-document-outline',
              to: '/pages',
            },
          ],
        },
        {
          title: 'Why Nuxtify?',
          links: [
            {
              text: 'Showcase',
              description: 'See production sites built with Nuxtify.',
              icon: 'mdi-heart-outline',
              to: '/showcase',
            },
            {
              text: 'Documentation',
              description: 'Guides, module configuration, and examples.',
              icon: 'mdi-book-open-outline',
              href: 'https://nuxtify.dev/docs',
              openInNew: true,
            },
          ],
        },
      ],
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
