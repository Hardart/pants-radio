<script setup lang="ts">
import { changePort } from '~/utils/parseArticle'
defineProps<{
  item: ICard
  itemType: 'news' | 'promo'
}>()
const parseDate = (date: string) =>
  Intl.DateTimeFormat('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(date))
</script>

<template>
  <article
    class="group relative flex w-full flex-col rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
  >
    <!-- CARD HEADER -->
    <div class="relative overflow-hidden rounded-lg">
      <img
        v-if="item.image"
        :src="changePort(item.image, '3070')"
        width="610"
        height="357"
        class="aspect-video object-cover object-top"
        alt=""
        loading="lazy"
      />
      <div
        v-else
        class="flex min-h-44 w-full items-center justify-center rounded-xl bg-sky-500 font-bold uppercase tracking-widest text-white"
      >
        <div class="absolute">no image</div>
        <img src="/assets/placeholder.svg" width="610" height="357" class="aspect-video" loading="lazy" />
      </div>
      <div class="absolute inset-0 rounded-xl bg-stone-500/30 transition-colors group-hover:bg-transparent"></div>
    </div>
    <!-- CARD BODY -->
    <div class="flex flex-grow flex-col space-y-4 px-4 py-4 md:space-y-6 lg:space-y-4">
      <h3 class="text-md flex-grow font-medium tracking-wide transition-colors group-hover:text-primary">{{ item.title }}</h3>
      <p v-if="itemType === 'news'" class="text-sm text-green-600">{{ parseDate(item.createdAt) }}</p>
      <p v-if="itemType === 'promo'" class="text-sm">{{ item.text }}</p>
    </div>
    <!-- CARD FOOTER -->
    <div class="absolute inset-0">
      <NuxtLink v-if="itemType === 'news'" class="absolute inset-0" :to="`/news` + item.url" />
      <NuxtLink v-else class="absolute inset-0" :to="item.url" />
    </div>
  </article>
</template>
