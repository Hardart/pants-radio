export function correctImageSrc(src: string | undefined) {
  return process.dev ? 'http://localhost:3068' + src : src
}
