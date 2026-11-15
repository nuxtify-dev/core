import { describe, it, expect } from 'vitest'
import { isTitledLinks } from '../src/runtime/shared/utils/navigation'
import type { Link, ModuleOptions, NavigationItem, TitledLinks } from '../src/types/module'

describe('navigation', () => {
  describe('isTitledLinks', () => {
    it('returns false for a flat Link item', () => {
      const link: Link = {
        text: 'Pricing',
        to: '/pricing',
      }

      expect(isTitledLinks(link)).toBe(false)
    })

    it('returns false for a Link item with a description', () => {
      const link: Link = {
        text: 'Core',
        description: 'Shared state, feedback tools, and branding defaults.',
        icon: 'mdi-cube-outline',
        to: '/core',
      }

      expect(isTitledLinks(link)).toBe(false)
    })

    it('returns true for a TitledLinks dropdown group', () => {
      const group: TitledLinks = {
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
            icon: 'mdi-book-open-outline',
            to: '/docs',
          },
        ],
      }

      expect(isTitledLinks(group)).toBe(true)
    })
  })

  describe('navigation config types', () => {
    it('allows primary navigation to contain flat links, titled groups mirroring altPrimary, or a mix of both', () => {
      const sharedGroups: TitledLinks[] = [
        {
          title: 'Product',
          links: [
            {
              text: 'Features',
              description: 'Explore core modules, components, and utilities.',
              icon: 'mdi-star-outline',
              to: '/features',
            },
          ],
        },
      ]

      const flatOnly: ModuleOptions['navigation'] = {
        primary: [{ text: 'Home', to: '/' }],
      }

      const mirroredOnly: ModuleOptions['navigation'] = {
        primary: sharedGroups,
        altPrimary: sharedGroups,
      }

      const mixedPrimary: NavigationItem[] = [
        { text: 'Pricing', to: '/pricing' },
        ...sharedGroups,
        { text: 'Login', to: '/login' },
      ]

      const mixedConfig: ModuleOptions['navigation'] = {
        primary: mixedPrimary,
        altPrimary: sharedGroups,
      }

      expect(flatOnly.primary?.map(isTitledLinks)).toEqual([false])
      expect(mirroredOnly.primary?.map(isTitledLinks)).toEqual([true])
      expect(mixedConfig.primary?.map(isTitledLinks)).toEqual([false, true, false])
    })
  })
})
