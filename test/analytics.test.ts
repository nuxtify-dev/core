import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import { useAnalytics } from '../src/runtime/composables/analytics'
import { useNuxtifyConfig } from '#imports'

// Mock #imports to isolate useAnalytics testing from a running Nuxt instance
vi.mock('#imports', () => {
  return {
    useNuxtifyConfig: vi.fn(),
  }
})

describe('useAnalytics', () => {
  let consoleLogMock: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('does not log when verboseLogs is false', () => {
    vi.mocked(useNuxtifyConfig).mockReturnValue({ verboseLogs: false })

    const analytics = useAnalytics()
    analytics.userSignUp()
    analytics.userSignIn()
    analytics.userSignOut()
    analytics.userUpgrade('pro')

    expect(consoleLogMock).not.toHaveBeenCalled()
  })

  it('logs when verboseLogs is true', () => {
    vi.mocked(useNuxtifyConfig).mockReturnValue({ verboseLogs: true })

    const analytics = useAnalytics()

    analytics.userSignUp()
    expect(consoleLogMock).toHaveBeenCalledWith('[Analytics] User Sign Up')

    analytics.userSignIn()
    expect(consoleLogMock).toHaveBeenCalledWith('[Analytics] User Sign In')

    analytics.userSignOut()
    expect(consoleLogMock).toHaveBeenCalledWith('[Analytics] User Sign Out')

    analytics.userUpgrade('premium')
    expect(consoleLogMock).toHaveBeenCalledWith('[Analytics] User Upgrade to plan: premium')
  })
})
