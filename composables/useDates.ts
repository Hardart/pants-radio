export const useDates = () => {
  const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' }
  const current = () => ({
    get date() {
      return new Date()
    },
    get hour() {
      return this.date.getHours()
    },
    get day() {
      return this.date.toLocaleDateString('ru', dateOptions)
    },
    isToday(date: Date) {
      return date.toLocaleDateString('ru', dateOptions) === this.day
    },
  })
  const custom = (customDate: Date) => ({
    setHour(hh: number | string) {
      return new Date(customDate.setHours(Number(hh), 0, 0))
    },
    get date() {
      return new Date(customDate).toLocaleDateString('ru', dateOptions)
    },
  })

  return { current, custom }
}
