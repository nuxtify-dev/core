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
