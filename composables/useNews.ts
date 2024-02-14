import type { Article, NewsData } from '@/types/article'

export const useNews = () => {
  const newsData = useState<NewsData>('news', () => ({ news: [], total: 0 }))

  async function findOneBySlug(slug: string) {
    const nuxt = useNuxtApp()
    return await useFetch<Article>('/api/article', {
      method: 'post',
      body: { slug },
      key: slug,
      getCachedData: key => nuxt.payload.data[key],
    })
  }

  return { findOneBySlug, newsData }
}
