<script lang="ts" setup>
const isShowHomePath = true
const route = useRoute()
const menuList = useState<IMenuItem[]>('menu-list')
const params = route.path.substring(1).split('/')
let link = ``
const linksFromParams = params.reduce((acc, curr) => {
  link += `/${curr}`
  acc.push(link)
  return acc
}, [] as string[])

const crumbs = linksFromParams.reduce((acc, curr) => {
  menuList.value?.forEach(findBySlug(acc, curr))
  return acc
}, [] as IBreadcrumbsItem[])

function findBySlug(acc: IBreadcrumbsItem[], curr: string) {
  return function menuMap(item: IMenuItem) {
    if (item.childrens) item.childrens.forEach(menuMap)
    if (item.link === curr) return acc.push({ label: item.label, link: item.link })
  }
}
</script>

<template>
  <Section padding="none">
    <ul class="flex items-center">
      <li v-if="isShowHomePath" class="text-primary hover:text-primary/80">
        <NuxtLink to="/"><Icon name="mdi:home" size="24" /></NuxtLink>
      </li>
      <li v-for="(item, i) in crumbs">
        <span class="mx-2 text-neutral-400" v-if="isShowHomePath || i">/</span>
        <NuxtLink class="font-medium hover:text-primary/80" v-if="i < crumbs.length - 1" :to="item.link">{{ item.label }}</NuxtLink>
        <span class="text-neutral-600 dark:text-neutral-500" v-else>{{ item.label }}</span>
      </li>
    </ul>
  </Section>
</template>
