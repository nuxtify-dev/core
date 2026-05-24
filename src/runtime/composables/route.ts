import { useRoute } from '#imports'

/**
 * A composable that wraps `useRoute` and returns the specified route parameter as a string.
 * This avoids repetitive casting (e.g., `route.params.uid as string`) for route parameters.
 *
 * @param param - The name of the route parameter to retrieve.
 * @returns The route parameter value as a string (returns the first element if it is an array, or an empty string if undefined/null).
 */
export const useRouteParam = (param: string): string => {
  const route = useRoute()
  const value = route.params[param]

  if (Array.isArray(value)) {
    return value[0] ?? ''
  }

  return value ?? ''
}
