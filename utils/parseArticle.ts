


export const removeAbsoluteURL = (input: string) => input.replace(/https?:\/\/[^\/]*/, '')
export const changePort = (input: string, port:string) => input.replace(/:\d[^\/]*/, `:${port}`)

export const parseHtml = (input: string) => {
  input.match(/<img[^<]*/g)?.forEach(string => {
    input = input.replace(string, `<p>${changePort(string, '3070')}</p>`)
  })
  return input
}