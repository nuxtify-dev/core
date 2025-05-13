import {
  addComponentsDir,
  addImportsDir,
  addServerImportsDir,
  createResolver,
  defineNuxtModule,
  installModule,
} from '@nuxt/kit'
import { defu } from 'defu'

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
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Modules
    await installModule('vuetify-nuxt-module', {
      vuetifyOptions: {
        icons: {
          defaultSet: 'mdi-svg',
        },
        theme: {
          themes: {
            light: {
              colors: {
                primary: '#020420',
                secondary: '#00DC82',
                background: '#fff',
              },
            },
          },
        },
        defaults: {
          VBtn: { color: 'secondary', variant: 'flat', class: 'text-none' },
          VAlert: {
            VBtn: { color: 'inherit' },
          },
          VFooter: {
            VBtn: { color: 'inherit' },
          },
        },
      },
    })

    // Expose module options to app config
    _nuxt.options.appConfig.nuxtify = defu(_nuxt.options.appConfig.nuxtify, {
      ..._options,
    })

    // Components
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    })

    // Composables
    addImportsDir(resolver.resolve('./runtime/composables'))
    addServerImportsDir(resolver.resolve('./runtime/server/composables'))

    // Utils
    addImportsDir(resolver.resolve('./runtime/utils'))
    addServerImportsDir(resolver.resolve('./runtime/server/utils'))
  },
})
