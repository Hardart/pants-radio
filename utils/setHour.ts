export const hoursForSelect = ['00', '03', '06', '09', '12', '15', '18', '21'] as const
export type Hour = (typeof hoursForSelect)[number]
export const filteredHours = (n: number) => hoursForSelect.filter((item) => +item <= n)

export const hoursStartFrom: () => Hour = () => {
  const hh = new Date().getHours()
  return [...hoursForSelect].reverse().find((hour) => +hour <= hh) || '00'
}
