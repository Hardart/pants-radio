<script setup lang="ts">
defineProps<{
  item: ICard
  itemType: 'news' | 'promo'
}>()
const parseDate = (date: string) => Intl.DateTimeFormat('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(date))
</script>

<template>
  <article class="relative flex flex-col w-full group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <!-- CARD HEADER -->
    <div class="relative overflow-hidden rounded-lg">
      <img
        v-if="item.preview"
        :src="item.preview"
        width="610"
        height="357"
        class="aspect-video object-top object-cover"
        alt=""
        loading="lazy"
      />
      <div
        v-else
        class="bg-sky-500 w-full min-h-44 flex justify-center items-center uppercase font-bold tracking-widest text-white rounded-xl"
      >
        <div class="absolute">no image</div>
        <img src="/images/placeholder.svg" width="610" height="357" class="aspect-video" loading="lazy" />
      </div>
      <div class="bg-stone-500/30 group-hover:bg-transparent transition-colors absolute inset-0 rounded-xl"></div>
    </div>
    <!-- CARD BODY -->
    <div class="flex-grow flex flex-col px-4 py-4 space-y-4 md:space-y-6 lg:space-y-4">
      <h3 class="text-md flex-grow font-medium tracking-wide group-hover:text-primary transition-colors">{{ item.title }}</h3>
      <p v-if="itemType === 'news'" class="text-sm text-green-600">{{ parseDate(item.createdAt) }}</p>
      <p v-if="itemType === 'promo'" class="text-sm">{{ item.text }}</p>
    </div>
    <!-- CARD FOOTER -->
    <div class="absolute inset-0">
      <NuxtLink class="absolute inset-0" :to="item.url" />
    </div>
  </article>
</template>
