export const removeAbsoluteURL = (input: string) => input.replace(/https?:\/\/[^\/]*/, '')
export const changePort = (input: string, port: string) => input.replace(/:\d[^\/]*/, `:${port}`)
export const addDevPort = (input: string, port: string) => (input.includes('http') ? input : `http://localhost:${port}${input}`)

export const parseHtml = (input: string) => {
  input.match(/<img[^<]*/g)?.forEach((string) => {
    input = input.replace(string, `<p>${string.replace('http://localhost:3068', '')}</p>`)
  })
  return input
}
