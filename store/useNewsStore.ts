import type { API } from '~/types/api'
import type { FetchContext, FetchResponse } from 'ofetch'
import { STATE } from '~/types/state-enum'

type onResponse = (
  context: FetchContext & {
    response: FetchResponse<ResponseType>
  }
) => Promise<void> | void

export const useNewsStore = defineStore('news', () => {
  const limit = ref(8)
  const total = useState(STATE.TOTAL_NEWS, () => 0)

  const onResponse: onResponse = ({ response }) => {
    const articlesCount = response.headers.get('X-Total')
    total.value = articlesCount ? parseInt(articlesCount) : 0
  }

  function fetchNews(page: MaybeRef<number>, tags: MaybeRef<any>) {
    page = toValue(page)
    tags = toValue(tags)

    return $fetch<API.NewsPage>('/api/v1/articles', {
      query: { page, tags, limit: 8 },
      onResponse
    })
  }

  return { fetchNews, total, limit }
})
