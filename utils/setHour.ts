export const hoursForSelect = ['00', '03', '06', '09', '12', '15', '18', '21']

export const filteredHours = (n: number) => hoursForSelect.filter((item) => +item <= n)

export const setHour = () => {
  const hh = new Date().getHours()
  return [...hoursForSelect].reverse().find((hour) => +hour <= hh) || '00'
}
