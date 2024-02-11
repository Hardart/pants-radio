import type { Article } from '@/types/article'

export const useFetchProducts = () => {
  const nuxt = useNuxtApp()
  function findOneBySlug(slug: string) {
    return useFetch<Article>('/api/article', {
      query: { slug },
      key: slug,
      getCachedData: key => nuxt.payload.data[key],
    })
  }
  async function find(page: Ref<number>) {
    return await useAsyncData('news-list', () => $fetch('/api/news', { query: { page: page.value } }), {
      getCachedData: key => (nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key]),
      watch: [page],
    })
  }
  return { findOneBySlug, find }
}
