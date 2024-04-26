<script setup lang='ts'>
  defineProps<{description: string}>()
</script>
 
<template>
  <div class="xl:w-1/2 p-6 text-neutral-700 space-y-2 rounded-md shadow-md" v-if="description" v-html="description"></div>
  <div class="xl:w-1/2 p-6 text-neutral-700 space-y-2 rounded-md shadow-md" v-else>
    <p>
      Каждое воскресенье на «Радио ШТАНЫ», подводим музыкальные итоги недели. И только от твоего голоса зависит, какая новинка станет
      лучшей на этой неделе.
    </p>
    <p>В воскресенье с 18 до 19. Лучшие 20 песен звучат для Вас!</p>
    <p>Пропустил в эфире? Слушай ПОДКАСТ!</p>
  </div>
</template>
 
<style></style>