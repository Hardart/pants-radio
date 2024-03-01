import type { LocationQuery } from 'vue-router'
type NewsPageData = {
  news: ICard[]
  tags: string[]
}
export const useNewsStore = defineStore('news', () => {
  const total = useState('x-total', () => 9)
  const perPage = 4
  const news = ref<ICard[]>()
  const tags = ref<string[]>()
  const latestNews = ref<ICard[]>()

  const queryFilter = (query: LocationQuery) => ({ ...query, limit: perPage })

  async function fetchPageData(query: LocationQuery, page: Ref<number>) {
    const { data } = await useFetch<NewsPageData>('/api/newss', { query: queryFilter(query), onResponse })
    page.value = Number(query.page) || 1
    news.value = data.value?.news || []
    tags.value = data.value?.tags || []
  }
  async function fetchNews(query: LocationQuery, page: Ref<number>) {
    const response = await $fetch<ICard[]>('/api/news', {
      query: queryFilter(query),
      onResponse,
    })
    page.value = Number(query.page) || 1
    news.value = response || []
  }

  function storeRefs() {
    return { perPage, total, news, tags }
  }

  function onResponse({ response }: any) {
    total.value = Number(response.headers.get('x-total'))
  }

  return { fetchNews, fetchPageData, storeRefs }
})
