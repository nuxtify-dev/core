import { useNuxtifyConfig } from '#imports'

export const useAnalytics = () => {
  const config = useNuxtifyConfig()

  const userSignUp = () => {
    if (config?.verboseLogs) {
      console.log('[Analytics] User Sign Up')
    }
  }

  const userSignIn = () => {
    if (config?.verboseLogs) {
      console.log('[Analytics] User Sign In')
    }
  }

  const userSignOut = () => {
    if (config?.verboseLogs) {
      console.log('[Analytics] User Sign Out')
    }
  }

  const userUpgrade = (planId: string) => {
    if (config?.verboseLogs) {
      console.log(`[Analytics] User Upgrade to plan: ${planId}`)
    }
  }

  return {
    userSignUp,
    userSignIn,
    userSignOut,
    userUpgrade,
  }
}
