<script setup lang="ts">
defineProps<{ description: string }>()
</script>

<template>
  <div class="space-y-2 rounded-md p-6 text-neutral-700 shadow-md xl:w-1/2" v-if="description" v-html="description"></div>
  <div class="space-y-2 rounded-md p-6 text-neutral-700 shadow-md xl:w-1/2" v-else>
    <p>
      Каждое воскресенье на «Радио ШТАНЫ», подводим музыкальные итоги недели. И только от твоего голоса зависит, какая новинка
      станет лучшей на этой неделе.
    </p>
    <p>В воскресенье с 18 до 19. Лучшие 20 песен звучат для Вас!</p>
    <p>Пропустил в эфире? Слушай ПОДКАСТ!</p>
  </div>
</template>

<style></style>
