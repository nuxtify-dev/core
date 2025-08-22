import {
  addComponentsDir,
  addImportsDir,
  addRouteMiddleware,
  addServerImportsDir,
  createResolver,
  defineNuxtModule,
  installModule,
  useLogger,
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'

// Types
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'nuxtifyCore',
    compatibility: {
      nuxt: '>=3.16.0',
      bridge: false,
    },
  },
  defaults: {
    // Logs
    verboseLogs: false,

    // Brand
    brand: {
      name: '@nuxtify/core',
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

    // Navigation
    navigation: {
      primary: [],
      secondary: [],
      altPrimary: [],
      altSecondary: [],
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

    if (_options.verboseLogs) useLogger('[nuxtify-core] Verbose logging enabled.')

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
          VNumberInput: {
            VBtn: { color: 'inherit', variant: 'inherit' },
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

    // Middleware
    addRouteMiddleware({
      name: 'setup',
      path: resolver.resolve('./runtime/middleware/setup'),
      global: true,
    })
  },
})
