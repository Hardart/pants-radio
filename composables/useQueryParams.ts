import type { RouteLocationNormalizedLoaded, LocationQuery } from 'vue-router'
export const useQueryParams = (route?: RouteLocationNormalizedLoaded) => {
  const page = useState('news-page', () => Number(route?.query.page) || 1)
  const tag = useState('news-tag', () => route?.query.tags || '')
  const changeTag = (tagTitle: string) => (tag.value = tag.value === tagTitle ? '' : tagTitle)
  const isExactTag = (someTag: string) => tag.value === someTag
  const removedPage = (queryFromUrl: LocationQuery) => {
    const query = { ...queryFromUrl }
    delete query.page
    return query
  }

  const setQuery = (route: RouteLocationNormalizedLoaded, page: number) => {
    return page === 1 ? removedPage(route.query) : { ...route.query, page }
  }

  return { page, tag, changeTag, isExactTag, setQuery }
}
