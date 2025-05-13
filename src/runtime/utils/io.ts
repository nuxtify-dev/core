export function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = _e => resolve(reader.result as string)
    reader.onerror = _e => reject(reader.error)
    reader.onabort = _e => reject(new Error('Read aborted'))
    reader.readAsDataURL(blob)
  })
}

export function filenameToUrl(filename: string, timestamped = false) {
  // Make a filename pretty for presentation in a URL
  // 1024 bytes is object name limit in Google Cloud Storage. See https://cloud.google.com/storage/quotas#objects
  const filenameClean = encodeURIComponent(
    filename
      .trim()
      .replace(/[^a-z0-9.-]/gi, '-')
      .replace(/-{2,}/g, '-') // eliminate consecutive '-' characters
      .replace(/\.{2,}/g, '.') // eliminate consecutive '.' characters
      .replace(/-\./g, '.') // eliminate trailing '-' characters before file extension
      .replace(/-$/g, '') // eliminate trailing '-' characters
      .replace(/^-/g, '') // eliminate starting '-' characters
      .slice(0, 500), // limit to the first 500 characters
  )

  if (timestamped) {
    return `${Date.now()}-${filenameClean}`
  }
  return filenameClean
}
