import type { User } from './user'

export type Schedule = {
  dayIndex: number
  startTime: string
  dayRange: number
  duration: number
  isReplay: boolean
}
export type ScheduleWithManyStartTime = Omit<Schedule, 'startTime'> & {
  startTime: string[]
}

export type Program = {
  id: string
  title: string
  slug: string
  image: string
  hosts: User[]
  schedule: Schedule[]
  description: string
  isPublished: boolean
}

export type ProgramV2 = {
  id: string
  title: string
  slug: string
  image: string
  hosts: User[]
  schedule: ScheduleWithManyStartTime[]
  description: string
  isPublished: boolean
}

export type ProgramSchedule = {
  id: string
  title: string
  slug: string
  image: string
  dayIndex: number
  startTime: string
  dayRange: number
  duration: number
  hosts: [{ fullName: string }]
  description: string
  isPublished: boolean
  isReplay: boolean
  type: string
}
