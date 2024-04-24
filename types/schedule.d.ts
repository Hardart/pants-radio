export type ScheduleProperty =  {
  start: string
  end: string
  isReplay: boolean
}

type WeekdayIds =  number[]

export type ProgramSchedule = {
  weekdayIds: WeekdayIds
  properties: ScheduleProperty[]
}