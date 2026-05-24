import { describe, it, expect, vi, afterEach } from 'vitest'
import { useRouteParam } from '../src/runtime/composables/route'
import { useRoute } from '#imports'

// Mock #imports to isolate useRouteParam testing from a running Nuxt instance
vi.mock('#imports', () => {
  return {
    useRoute: vi.fn(),
  }
})

describe('useRouteParam', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns route param as string when it is a simple string', () => {
    vi.mocked(useRoute).mockReturnValue({
      params: {
        uid: 'user-123',
      },
    } as unknown as ReturnType<typeof useRoute>)

    const param = useRouteParam('uid')
    expect(param).toBe('user-123')
  })

  it('returns first element of array when route param is an array', () => {
    vi.mocked(useRoute).mockReturnValue({
      params: {
        slug: ['category', 'product-name'],
      },
    } as unknown as ReturnType<typeof useRoute>)

    const param = useRouteParam('slug')
    expect(param).toBe('category')
  })

  it('returns empty string if the route param is not present or undefined', () => {
    vi.mocked(useRoute).mockReturnValue({
      params: {},
    } as unknown as ReturnType<typeof useRoute>)

    const param = useRouteParam('uid')
    expect(param).toBe('')
  })

  it('returns empty string if the route param is null', () => {
    vi.mocked(useRoute).mockReturnValue({
      params: {
        uid: null as unknown as string,
      },
    } as unknown as ReturnType<typeof useRoute>)

    const param = useRouteParam('uid')
    expect(param).toBe('')
  })
})
