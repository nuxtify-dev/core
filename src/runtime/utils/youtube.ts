function youTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : null
}

export function youTubeUrl(url: string) {
  const videoId = youTubeId(url)

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`
  }
  else {
    return null
  }
}
