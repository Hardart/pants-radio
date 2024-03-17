export type Article = {
  title: string
  slug: string
  url: string
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

export type Category = {}
