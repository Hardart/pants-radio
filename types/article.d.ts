export type Article = {
  title: string
  slug: string
  url: string
  content: string
  preview: string
  createdAt: string
  isPublished: boolean
  category: {
    title: string
    slug: string
  }
  tags: Tag[]
}

export type NewsData = {
  news: ICard[]
  total: number
}

export type Category = {}

export type Tag = {
  id: string
  title: string
}
