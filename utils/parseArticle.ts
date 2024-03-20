export const parseHtml = (input: string) => {
  input.match(/<img[^<]*/g)?.forEach(string => {
    input = input.replace(string, `<div>${string}</div>`)
  })
  return input
}
