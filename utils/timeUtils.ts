// Конвертация минут в "HH:MM"
export function minutesToTime(minutes: number): string {
  const hour = Math.floor(minutes / 60)
  const correctHour = hour === 24 ? 0 : hour
  const minute = minutes % 60
  return `${String(correctHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

// Конвертация времени из "HH:MM" в минуты
export function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

export function getProgramStartAndEnd(startTime: string, duration: number) {
  const start = timeToMinutes(startTime)
  console.log(duration)

  const end = minutesToTime(start + duration)

  return { start: startTime, end }
}
