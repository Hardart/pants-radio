export function correctImageSrc(src: string | undefined) {
  return process.dev ? 'http://hardart.site' + src : src
}

export function setSlideshowSrcset(src: string | undefined, size: string) {
  if (!src) return ''
  src = src.replace('1536x658', size)
  return correctImageSrc(src)
}
