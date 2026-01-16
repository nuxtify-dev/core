import type { ModuleOptions } from '../../types'
import { useHead } from '#app'
import { useAppConfig } from '#imports'

export const useNuxtifyConfig = (): ModuleOptions => useAppConfig().nuxtify

export const useNuxtifySiteTitle = ({
  separator = '|',
  siteName = '',
}: { separator?: string, siteName?: string } = {}) => {
  // App state
  const nuxtifyConfig = useNuxtifyConfig()

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName'
    },
    templateParams: {
      siteName: siteName || nuxtifyConfig.brand?.name,
      separator,
    },
  })
}
