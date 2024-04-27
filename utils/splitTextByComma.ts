export const splitTextByComma = (input: string) =>
  input.replace(/.[^,]*,\s(.\.+.*)?/gm, (value) => `\n<span class="whitespace-nowrap">${value}</span>`)
