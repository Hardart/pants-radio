export function correctImageSrc(src: string | undefined) {
  return process.dev ? 'http://hardart.site' + src : src
}
