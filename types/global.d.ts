import type { Tag } from './article'

export {}
interface BaseItem {
  title: string
  slug: string
  image?: string
  text?: string
  url: string
  createdAt: string
  updatedAt?: string
  isPublished: boolean
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

declare global {
  interface ICard extends BaseItem {
    preview: string
    category: {
      slug: string
      title: string
    }
  }

  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>
  }

  interface IBreadcrumbsItem {
    label: string
    to: string
  }

  type WeekDay = 'Понедельник' | 'Вторник' | 'Среда' | 'Четверг' | 'Пятница' | 'Суббота' | 'Воскресенье'
}
