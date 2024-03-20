import type { Article } from '@/types/article'
import { STATE } from '@/types/state-enum'
export const useNews = () => {
  const { page, tags, route } = useQueryParams()
  const total = useState(STATE.TOTAL_NEWS, () => 0)
  const newsList = useState<ICard[]>(STATE.NEWS_LIST, () => [])
  const limit = 12

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
      total.value = Number(response.headers.get(STATE.TOTAL_NEWS))
      newsList.value = response._data
    },
  })

  async function fetchNews() {
    try {
      return await $fetch<ICard[]>('/api/news', fetchParams())
    } catch (error) {
      console.warn(error)
      return []
    }
  }

  async function initNews() {
    const { pending } = await useAsyncData(fetchNews)
    return { pending }
  }

  watch(() => route.query, fetchNews)

  return { newsList, total, page, tags, limit, fetchNews, findOneBySlug, initNews }
}
