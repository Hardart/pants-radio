export const useQueryParams = () => {
  const route = useRoute()
  const router = useRouter()
  const query = ref({ ...route.query })

  const page = useState('news-page', () => Number(route.query.page) || 1)
  const tag = useState('news-tag', () => '')
  const changeTag = (tagTitle: string) => (tag.value = tag.value === tagTitle ? '' : tagTitle)

  const getNewsQuery = computed(() => {
    if (query.value) console.log('query')
  })

  return { page, tag, changeTag, query, getNewsQuery }
}
