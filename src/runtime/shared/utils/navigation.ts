import type { NavigationItem, TitledLinks } from '../../types/module'

/**
 * Type guard to check whether a navigation item is a titled dropdown group.
 */
export const isTitledLinks = (item: NavigationItem): item is TitledLinks => {
  return typeof item === 'object' && item !== null && 'links' in item && Array.isArray(item.links)
}
