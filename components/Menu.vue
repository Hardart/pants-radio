<script lang="ts" setup>
const pages = [
  { label: 'Главная', link: '/' },
  { label: 'Контакты', link: 'contacts' },
  { label: 'Новости', link: 'blog' },
]
</script>

<template>
  <ul class="flex text-neutral-100">
    <li v-for="page in pages" class="relative px-2 py-1">
      <NuxtLink :to="page.link" active-class="text-slate-300">{{ page.label }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
