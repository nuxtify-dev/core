import { useHead } from '@unhead/vue'
import type { ModuleOptions } from '../../types'
import { useAppConfig } from '#imports'

export const useNuxtifyConfig = (): ModuleOptions => useAppConfig().nuxtify

export const useNuxtifySiteTitle = ({
  separator = '|',
  siteName = '',
}: { separator?: string, siteName?: string } = {}) => {
  // App state
  const nuxtifyConfig = useNuxtifyConfig()

  useHead({
    titleTemplate: `%s ${separator} ${siteName || nuxtifyConfig.brand?.name}`,
  })
}
