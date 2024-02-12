import type { Article } from '@/types/article'

export const useNews = () => {
  const nuxt = useNuxtApp()

  async function findOneBySlug(slug: string) {
    return await useFetch<Article>('/api/article', {
      method: 'post',
      body: { slug },
      key: slug,
      getCachedData: key => nuxt.payload.data[key],
    })
  }
  async function find(page: Ref<number>) {
    return await useAsyncData('news-list', () => $fetch('/api/news', { method: 'post', body: { page: page.value } }), {
      getCachedData: key => (nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key]),
      watch: [page],
    })
  }
  return { findOneBySlug, find }
}
