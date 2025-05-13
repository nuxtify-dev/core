// Types
import type { ModuleOptions } from '../../types'

import { useAppConfig } from '#imports'

export const useNuxtifyConfig = (): ModuleOptions => useAppConfig().nuxtify
