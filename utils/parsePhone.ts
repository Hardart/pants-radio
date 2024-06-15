export const onlyNumbers = (input: string) => {
  return input.replace(/[\(\)\s-_]/g, '')
}
