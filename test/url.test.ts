import { describe, it, expect } from 'vitest'
import { getBaseUrl, getUtmParams, isExternalUrl, matchRoute } from '../src/runtime/utils/url'

describe('url utils', () => {
  describe('getBaseUrl', () => {
    it('returns baseUrl without search and hash', () => {
      expect(getBaseUrl('https://example.com/path?search=1#hash')).toBe('https://example.com/path')
    })
  })

  describe('getUtmParams', () => {
    it('parses UTM parameters from URL', () => {
      const url = 'https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&utm_term=shoes&utm_content=banner'
      expect(getUtmParams(url)).toEqual({
        utmSource: 'google',
        utmMedium: 'cpc',
        utmCampaign: 'summer_sale',
        utmTerm: 'shoes',
        utmContent: 'banner',
      })
    })

    it('returns nulls for missing UTM parameters', () => {
      const url = 'https://example.com/'
      expect(getUtmParams(url)).toEqual({
        utmSource: null,
        utmMedium: null,
        utmCampaign: null,
        utmTerm: null,
        utmContent: null,
      })
    })
  })

  describe('isExternalUrl', () => {
    it('returns false for empty URL', () => {
      expect(isExternalUrl('', 'example.com')).toBe(false)
    })

    it('returns false for relative URL', () => {
      expect(isExternalUrl('/path/to/page', 'example.com')).toBe(false)
    })

    it('returns false for absolute URL with matching hostname', () => {
      expect(isExternalUrl('https://example.com/path', 'example.com')).toBe(false)
    })

    it('returns true for absolute URL with non-matching hostname', () => {
      expect(isExternalUrl('https://other.com/path', 'example.com')).toBe(true)
    })
  })

  describe('matchRoute', () => {
    describe('Exact Matching & Normalization', () => {
      it('returns true for exact matching', () => {
        expect(matchRoute('/admin', '/admin')).toBe(true)
        expect(matchRoute('/about', '/about')).toBe(true)
      })

      it('returns false for non-matching paths', () => {
        expect(matchRoute('/admin', '/about')).toBe(false)
        expect(matchRoute('/admin', '/administrator')).toBe(false)
      })

      it('normalizes trailing slashes for exact matches', () => {
        expect(matchRoute('/admin/', '/admin')).toBe(true)
        expect(matchRoute('/admin', '/admin/')).toBe(true)
        expect(matchRoute('/admin/', '/admin/')).toBe(true)
      })

      it('handles root path trailing slash properly', () => {
        expect(matchRoute('/', '/')).toBe(true)
      })
    })

    describe('Single-level Wildcard (*)', () => {
      it('matches single path segment with *', () => {
        expect(matchRoute('/user/*', '/user/123')).toBe(true)
        expect(matchRoute('/user/*', '/user/abc')).toBe(true)
      })

      it('does not cross slashes with *', () => {
        expect(matchRoute('/user/*', '/user/123/profile')).toBe(false)
        expect(matchRoute('/user/*/profile', '/user/123/profile')).toBe(true)
        expect(matchRoute('/user/*/profile', '/user/123/settings/profile')).toBe(false)
      })

      it('matches suffix segments', () => {
        expect(matchRoute('/about*', '/about')).toBe(true)
        expect(matchRoute('/about*', '/aboutme')).toBe(true)
        expect(matchRoute('/about*', '/about-us')).toBe(true)
        expect(matchRoute('/about*', '/about/us')).toBe(false)
      })
    })

    describe('Multi-level Wildcard (**)', () => {
      it('matches subpaths of any depth with trailing **', () => {
        expect(matchRoute('/admin/**', '/admin')).toBe(true)
        expect(matchRoute('/admin/**', '/admin/')).toBe(true)
        expect(matchRoute('/admin/**', '/admin/dashboard')).toBe(true)
        expect(matchRoute('/admin/**', '/admin/settings/security/logs')).toBe(true)
      })

      it('does not match outside the prefix with trailing **', () => {
        expect(matchRoute('/admin/**', '/other')).toBe(false)
        expect(matchRoute('/admin/**', '/administrator')).toBe(false)
      })

      it('matches any route with **', () => {
        expect(matchRoute('**', '/')).toBe(true)
        expect(matchRoute('**', '/any/nested/path/here')).toBe(true)
      })

      it('matches ** in middle of patterns', () => {
        expect(matchRoute('/posts/**/comments', '/posts/1/comments')).toBe(true)
        expect(matchRoute('/posts/**/comments', '/posts/1/2/3/comments')).toBe(true)
        expect(matchRoute('/posts/**/comments', '/posts/1/likes')).toBe(false)
      })
    })
  })
})
