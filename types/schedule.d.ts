export interface IScheduleProgram {
  start: string
  end: string
  title: string
  image?: string
  replay?: boolean
}

export interface IScheduleItem {
  weekdayTitle: string
  weekdayId: number
  programs: IScheduleProgram[]
}
