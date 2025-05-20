import { defineNuxtRouteMiddleware, useErrorMessage } from '#imports'

export default defineNuxtRouteMiddleware(() => {
  // Reset error state
  const errorMessage = useErrorMessage()
  errorMessage.value = ''
})
