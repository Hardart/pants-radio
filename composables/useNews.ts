import type { Article } from '@/types/article'
type NewsData = {
  news: ICard[]
  total: number
}
export const useNews = () => {
  const nuxt = useNuxtApp()
  const newsData = useState<NewsData>('news', () => ({ news: [], total: 0 }))

  async function findOneBySlug(slug: string) {
    return await useFetch<Article>('/api/article', {
      method: 'post',
      body: { slug },
      key: slug,
      getCachedData: key => nuxt.payload.data[key],
    })
  }

  return { findOneBySlug }
}
