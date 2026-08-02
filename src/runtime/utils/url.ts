export const getBaseUrl = (url: string) => {
  const urlObject = new URL(url)
  urlObject.search = ''
  urlObject.hash = ''
  return urlObject.href
}

export const getUtmParams = (url: string) => {
  const urlSearchParams = new URLSearchParams(new URL(url).search)
  return {
    utmSource: urlSearchParams.get('utm_source'),
    utmMedium: urlSearchParams.get('utm_medium'),
    utmCampaign: urlSearchParams.get('utm_campaign'),
    utmTerm: urlSearchParams.get('utm_term'),
    utmContent: urlSearchParams.get('utm_content'),
  }
}

export const isExternalUrl = (url: string, hostname: string) => {
  // Empty URL
  if (!url) {
    return false
  }

  // Relative URL
  if (url.startsWith('/')) {
    return false
  }
  // Absolute url
  else {
    const linkHostname = new URL(url).hostname
    return linkHostname !== hostname
  }
}

/**
 * Matches a URL route path against a pattern that can contain wildcards.
 * Supports:
 * - Exact matching (e.g., `/admin` matches `/admin`)
 * - Single-level wildcard `*` (e.g., `/user/*` matches `/user/123`, but not `/user/123/profile`)
 * - Multi-level wildcard `**` (e.g., `/admin/**` matches `/admin`, `/admin/`, `/admin/settings`)
 *
 * @param pattern - The route pattern (may contain wildcards * and **)
 * @param path - The actual route path to check
 * @returns True if the path matches the pattern
 */
export const matchRoute = (pattern: string, path: string): boolean => {
  const cleanPattern = pattern.endsWith('/') && pattern.length > 1 ? pattern.slice(0, -1) : pattern
  const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path

  if (cleanPattern === cleanPath) {
    return true
  }

  // Escape standard RegExp special characters, including * and ?
  // Regexp special chars: . + * ? ^ $ { } ( ) | [ ] \
  let regexString = cleanPattern.replace(/[.+*?^${}()|[\]\\]/g, '\\$&')

  // Check if it ends with '/**' to make it an optional subpath
  const suffix = '/\\*\\*'
  if (regexString.endsWith(suffix)) {
    regexString = regexString.slice(0, -suffix.length) + '(?:/.*)?'
  }
  else {
    // Replace ** and * with their RegExp equivalents
    regexString = regexString
      .replace(/\\\*\\\*/g, 'TEMP_DOUBLE_STAR')
      .replace(/\\\*/g, '[^/]*')
      .replace(/TEMP_DOUBLE_STAR/g, '.*')
  }

  const regex = new RegExp(`^${regexString}$`)
  return regex.test(cleanPath)
}
