import type { Article } from '@/types/article'

export const useNews = () => {
  const { page, tags, route } = useQueryParams()
  const limit = 4
  const total = useState('x-total', () => 0)
  const newsData = useState<ICard[]>('news', () => [])

  async function findOneBySlug(slug: string) {
    const nuxt = useNuxtApp()
    return await useFetch<Article>('/api/article', {
      query: { slug },
      key: slug,
      getCachedData: key => nuxt.payload.data[key],
    })
  }

  const fetchParams = () => ({
    query: { page: page.value, limit, tags: tags.value },
    onResponse({ response }: any) {
      total.value = Number(response.headers.get('x-total'))
    },
  })

  async function fetchNews() {
    const data = await $fetch<ICard[]>('/api/news', fetchParams())
    newsData.value = data
  }

  function initNews() {
    const { data, pending } = useAsyncData(fetchNews)
    newsData.value = data.value || []
    return { pending }
  }
  watch(() => route.query, fetchNews)

  return { findOneBySlug, newsData, total, page, tags, limit, fetchNews, initNews }
}
