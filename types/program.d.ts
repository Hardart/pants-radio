import type { ProgramSchedule, ScheduleProperty } from "./schedule"

export type Program = {
  id: string
  title: string
  slug: string
  image: string
  schedule: ProgramSchedule[]
  hosts: User[]
  description: string
}

export type ProgramResponse = Omit<Program, 'schedule' | 'slug' | 'id'> & ScheduleProperty