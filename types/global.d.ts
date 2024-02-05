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
}
