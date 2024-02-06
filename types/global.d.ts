export {}
interface BaseItem {
  id: string
  title: string
  slug: string
  image?: string
  text?: string
  link: string
  createdAt?: string
  updatedAt?: string
  isPublished: boolean
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

declare global {
  interface ITrackData {
    id: number
    title: string
    artist: string
    link: string
    artUrl?: string
  }

  interface IItunesData {
    art30: string
    art60: string
    art100: string
    art300?: string
    art600?: string
  }

  interface IRadioData {
    artistName: string
    trackTitle: string
    covers: IItunesData
  }

  interface ICard extends BaseItem {}

  interface IMenuItem {
    label: string
    link: string
    slug: string
    icon?: string
    childrens?: IMenuItem[]
  }

  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>
  }

  interface IBreadcrumbsItem {
    label: string
    link: string
  }

  interface IScheduleItem {
    weekdayTitle: string
    weekdayId: number
    programs: IScheduleProgram[]
  }

  interface IScheduleProgram {
    start: string
    end: string
    title: string
    image?: string
    replay?: boolean
    onair?: boolean
  }

  interface IAirtimeItem extends IScheduleProgram {
    title?: string
    weekday: WeekDay
    onair?: boolean
  }

  type Host = {
    name: string
    surname: string
    fullname: string
  }

  type ProgramData = {
    title: string
    image?: string
    host: Host
    airtimeData: IAirtimeItem[]
  }

  type WeekDay = 'Понедельник' | 'Вторник' | 'Среда' | 'Четверг' | 'Пятница' | 'Суббота' | 'Воскресенье'
}
