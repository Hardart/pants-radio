type NewsPageData = {
  news: ICard[]
  tags: string[]
}
export const useNewsStore = defineStore('news', () => {
  const { page, tags } = useQueryParams()
  const total = useState('x-total', () => 0)
  const limit = 4

  async function fetchNews() {
    const { data } = await useFetch<ICard[]>('/api/news', { query: { page, limit, tags }, onResponse })
    return { newsData: data }
  }

  function onResponse({ response }: any) {
    total.value = Number(response.headers.get('x-total'))
  }

  const storeRefs = () => ({ limit, total, page })

  return { storeRefs, fetchNews }
})
