<script setup lang="ts">
import type { Program } from '~/types/program'

defineProps<{ programs: Program[] }>()
</script>

<template>
  <div class="grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3" container>
    <div v-for="program in programs" class="relative flex flex-col rounded-3xl border bg-white p-2 shadow-lg" card>
      <div class="aspect-square overflow-hidden" header>
        <img v-if="program.image" :src="getImage300(program.image)" class="size-full rounded-2xl object-cover" alt="" />
        <div v-else class="size-full rounded-2xl bg-zinc-300 object-cover"></div>
      </div>
      <div class="p-2 max-md:mt-2" body>
        <h3 class="text-2xl font-bold">{{ program.title }}</h3>
      </div>
      <div class="absolute inset-0" footer>
        <NuxtLink class="absolute inset-0" :to="`/programs/${program.slug}`" />
      </div>
    </div>
  </div>
</template>
