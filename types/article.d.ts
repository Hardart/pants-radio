export type Article = {
  title: string
  slug: string
  to: string
  content: string
  image: string
  createdAt: string
  isPublished: boolean
  category: {
    title: string
    slug: string
  }
  tags: string[]
}

export type Category = {
  title: string
  slug: string
  image: string
  articles: Article[]
}
