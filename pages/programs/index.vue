<script lang="ts" setup>
import type { IProgram } from '~/types/schedule';

const {data} = await useFetch<{programs: IProgram[]}>('/api/v1/programs')


</script>

<template>
  <Section>
    <div class="grid grid-cols-3 gap-4 max-w-4xl" container>
      <div v-for="program in data?.programs" class="flex relative flex-col border shadow-lg rounded-3xl p-2 bg-white" card>
        <div header>
          <div>
            <img :src="program.image" class="size-full object-cover rounded-2xl" alt="">
          </div>
        </div>
        <div class="p-2 " body>
          <h3 class="text-2xl font-bold">{{ program.title }}</h3>
        </div>
        <div class="absolute inset-0" footer>
          <NuxtLink class="absolute inset-0" :to="`/programs/${program.slug}`"/>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
