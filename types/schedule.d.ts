export interface IScheduleProgram {
  start: string
  end: string
  title: string
  image?: string
  replay?: boolean
}

export interface IScheduleItem {
  _id: number
  programs: IScheduleProgram[]
}
