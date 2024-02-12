import type { IScheduleProgram } from './schedule'

export type Host = {
  name: string
  surname: string
  fullname: string
  avatar?: string
  position: string
}

export type ProgramData = {
  title: string
  image?: string
  host: Host
  airtimeData: IAirtimeItem[]
}

interface IAirtimeItem extends IScheduleProgram {
  title?: string
  weekday: WeekDay
}
