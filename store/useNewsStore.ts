export const useNewsStore = defineStore('news', () => {
  const route = useRoute()
  const perPage = 4
  const total = useState('x-total', () => 0)
  const { page, tag } = useQueryParams(route)
  const news = ref<ICard[]>()
  const latestNews = ref<ICard[]>()

  watch(() => route.query, fetchNews)

  async function fetchNews() {
    const { data } = await useAsyncData<ICard[]>('/api/news', () =>
      $fetch('/api/news', {
        query: { ...route.query, limit: perPage },
        onResponse({ response }) {
          total.value = Number(response.headers.get('x-total'))
        },
      })
    )
    page.value = Number(route.query.page) || 1
    news.value = data.value || []
  }

  function storeRefs() {
    return { perPage, total, news, page }
  }

  return { fetchNews, storeRefs }
})
