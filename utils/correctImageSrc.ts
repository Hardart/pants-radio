export function correctImageSrc(src: string | undefined) {
  return process.dev ? 'https://radioshtani.ru' + src : src
}

export function getMediumImage(src?: string) {
  const imageSrc = isImageSrcExist(src)
  const mediumUrl = imageSrc.replace('_orig', '_600')
  return correctImageSrc(mediumUrl)
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
