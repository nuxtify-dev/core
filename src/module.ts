import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

// Types
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtify-core',
    configKey: 'nuxtifyCore',
    compatibility: {
      nuxt: '>=3.16.0',
      bridge: false,
    },
  },
  defaults: {
    // Brand
    brand: {
      name: 'nuxtify-core',
      domain: '',
      tagline: '',
      logo: {
        lightUrl: '',
        darkUrl: '',
        width: 200,
        mobileWidth: 150,
      },
    },

    // Policies
    policies: {
      privacyUrl: '/privacy',
      termsUrl: '/terms',
    },

    // Announcement
    announcement: {
      show: false,
      message: '',
      buttonText: '',
      buttonUrl: '',
    },

    // Credits
    credits: {
      creator: {
        name: '',
        domain: '',
      },
      prependText: '',
      appendText: '',
      showPoweredBy: true,
    },

    // Email
    email: {
      general: '',
      support: '',
    },
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
