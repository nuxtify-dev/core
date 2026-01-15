import {
  addComponentsDir,
  addImportsDir,
  addRouteMiddleware,
  addServerImportsDir,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'

// Types
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>().with({
  meta: {
    name,
    version,
    configKey: 'nuxtifyCore',
    compatibility: {
      nuxt: '>=3.16.0',
      bridge: false,
    },
  },
  moduleDependencies: {
    'vuetify-nuxt-module': {
      version: '>=0.19.2',
      defaults: {
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
      },
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
  async setup(resolvedOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const logger = useLogger('nuxtify-core')

    if (resolvedOptions.verboseLogs) logger.info('Verbose logging enabled.')

    // Expose module options to app config
    nuxt.options.appConfig.nuxtify = defu(nuxt.options.appConfig.nuxtify || {}, {
      ...resolvedOptions,
    })

    // Components
    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    // Composables
    addImportsDir(resolve('./runtime/composables'))
    addServerImportsDir(resolve('./runtime/server/composables'))

    // Utils
    addImportsDir(resolve('./runtime/utils'))
    addServerImportsDir(resolve('./runtime/server/utils'))

    // Middleware
    addRouteMiddleware({
      name: 'setup',
      path: resolve('./runtime/middleware/setup'),
      global: true,
    })
  },
})
