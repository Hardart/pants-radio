export const useBreadcrumbs = () => {
  const route = useRoute()
  const labelList = useState<string[]>('breadcrumbs', () => [])
  const initBreadcrumbs = (list: string[]) => labelList.value = list
  const crumbs = computed(() => {
    let to = ''
    return route.fullPath.substring(1).split('/').reduce((acc, curr, index) => {
      to += `/${curr}`
      const label = labelList.value[index].toLowerCase()
      if (index === labelList.value.length - 1) acc.push({label })
      else acc.push({label, to})
      return acc
    }, [] as {label: string, to?: string}[])
  })
  return {crumbs, initBreadcrumbs}
}