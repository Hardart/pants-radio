export const useQueryParams = () => {
  const route = useRoute()
  const page = computed(() => Number(route.query.page || 1))
  const tags = computed(() => route.query.tags || '')

  const isExactTag = (tag: string) => tags.value === tag

  const queryWithoutPage = () => {
    const query = { ...route.query }
    delete query.page
    return query
  }

  const setQuery = (page: number) => {
    return page === 1 ? queryWithoutPage() : { ...route.query, page }
  }

  return { page, tags, isExactTag, setQuery, route }
}
