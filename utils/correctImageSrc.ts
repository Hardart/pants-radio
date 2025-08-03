export function correctImageSrc(src: string | undefined) {
  return process.dev ? 'https://radioshtani.ru' + src : src
}

export function getImage600(src?: string) {
  const mediumUrl = changeImageQuality(src, '600')
  return correctImageSrc(mediumUrl)
}

export function getImage300(src?: string) {
  const mediumUrl = changeImageQuality(src, '300')
  return correctImageSrc(mediumUrl)
}

export function getImage50(src?: string) {
  const mediumUrl = changeImageQuality(src, '50')
  return correctImageSrc(mediumUrl)
}

function changeImageQuality(src?: string, quality?: string) {
  const imageSrc = isImageSrcExist(src)
  return imageSrc.replace(/(?<=_)[^_\.]+(?=\.)/g, quality || '')
}

function isImageSrcExist(src?: string) {
  if (!src) throw new Error(`image src is undefined`)
  return src
}

export function setSlideshowSrcset(src: string | undefined, size: string) {
  if (!src) return ''
  src = src.replace('1536x658', size)
  return correctImageSrc(src)
}
