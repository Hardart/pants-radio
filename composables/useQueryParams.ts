export const useQueryParams = () => {
  const route = useRoute()
  const router = useRouter()
  const query = ref({})

  const page = useState('news-page', () => Number(route.query.page) || 1)
  const tag = useState('news-tag', () => '')
  const changeTag = (tagTitle: string) => (tag.value = tag.value === tagTitle ? '' : tagTitle)

  const getNewsQuery = () => {
    switch (true) {
      case page.value !== 1 && tag.value !== '':
        query.value = { page: page.value, tag: tag.value }
        break
      case page.value == 1 && tag.value !== '':
        query.value = { tag: tag.value }
        break
      case page.value !== 1 && tag.value === '':
        query.value = { page: page.value }
        break
      default:
        query.value = {}
        break
    }
    router.push({ path: '/news', query: query.value })
  }

  return { page, tag, changeTag, query, getNewsQuery }
}
