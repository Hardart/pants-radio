<script setup lang="ts">
import type { Program } from '~/types/program'

defineProps<{ programs: Program[] }>()
</script>

<template>
  <div class="grid max-w-4xl grid-cols-3 gap-4" container>
    <div v-for="program in programs" class="relative flex flex-col rounded-3xl border bg-white p-2 shadow-lg" card>
      <div header class="aspect-square">
        <img v-if="program.image" :src="correctImageSrc(program.image)" class="size-full rounded-2xl object-cover" alt="" />
        <div v-else class="size-full rounded-2xl bg-zinc-300 object-cover"></div>
      </div>
      <div class="p-2" body>
        <h3 class="text-2xl font-bold">{{ program.title }}</h3>
      </div>
      <div class="absolute inset-0" footer>
        <NuxtLink class="absolute inset-0" :to="`/programs/${program.slug}`" />
      </div>
    </div>
  </div>
</template>
