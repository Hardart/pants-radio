export const removeAbsoluteURL = (input: string) => input.replace(/https?:\/\/[^\/]*/, '')
export const changePort = (input: string, port: string) => input.replace(/:\d[^\/]*/, `:${port}`)
export const addDevPort = (input: string, port: string) => (input.includes('http') ? input : `http://localhost:${port}${input}`)

export const parseHtml = (input: string) => {
  input.match(/<img[^<]*/g)?.forEach((string) => {
    string = string.replaceAll('http://localhost:3068', '')
    input = input.replace(string, `<p>${string}</p>`)
  })
  return input
}
