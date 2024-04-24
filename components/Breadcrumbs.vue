<script lang="ts" setup>
const isShowHomePath = true
const route = useRoute()
const { mainMenu } = useMeta()
if (!mainMenu) throw createError('Error in breadcrumbs')
const params = route.path.substring(1).split('/')

let link = ``
const linksFromParams = params.reduce(reduceLinks, [] as string[])
const crumbs = linksFromParams.reduce(reduceBreadcrumbs, [] as IBreadcrumbsItem[])

function reduceLinks(acc: string[], curr: string) {
  link += `/${curr}`
  acc.push(link)
  return acc
}

function reduceBreadcrumbs(acc: IBreadcrumbsItem[], curr: string) {
  function menuMap(item: IMenuItem) {
    if (item.childrens) item.childrens.forEach(menuMap)
    if (item.link === curr) return acc.push({ label: item.label, link: item.link })
  }
  mainMenu.forEach(menuMap)
  return acc
}
</script>

<template>
  <Section padding="small">
    <pre>{{ mainMenu }}</pre>
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
