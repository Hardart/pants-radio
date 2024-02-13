export type Article = {
  title: string
  slug: string
  url: string
  text: string
  preview: string
  createdAt: string
  isPublished: boolean
  category: {
    title: string
    slug: string
  }
  tags: Tag[]
}

export type Category = {}

export type Tag = {
  id: string
  title: string
}
