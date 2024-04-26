<script setup lang='ts'>
import type { Program } from '~/types/program';

const { slug } = useRoute().params
if (!slug || typeof slug !== 'string') throw createError('there are no SLUG in route or type of SLUG parameter is not a STRING')

const { data } = await useFetch<Program>(`/api/v1/programs/${slug}`, {
  key: slug,
  getCachedData: key => useNuxtApp().payload.data[key],
})
const program = toValue(data)
if (!program) throw createError('Program is not define')
</script>
 
<template>
  <HdrtBreadcrumbs show-home :label-list="['программы', program.title]"/>
  <Section padding="small" v-if="program">
   
    <div class="flex max-sm:flex-col items-center md:space-x-8">
      <div class="min-w-80 rounded-lg overflow-hidden">
        <img :src="program.image || '/images/plug280x280.svg'" class="size-full object-cover" :alt="program.title" />
      </div>
      <div class="flex max-sm:items-center flex-col p-4 space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">{{ program.title }}</h1>
        <div class="flex  items-center space-x-4" v-for="host in program.hosts">
          <div class="w-16 border-2 border-primary rounded-full overflow-hidden">
            <img :src="host.avatar || '/images/hosts/larin.png'" width="64" height="64" alt="" />
          </div>
          <div>
            <p class="font-medium leading-6">Ведущ{{ program.hosts.length > 1 ? 'ие' : 'ий' }}</p>
            <p class="text-lg font-bold leading-6">{{ host.fullName }}</p>
          </div>
        </div>
        <div class="flex max-lg:flex-col flex-nowrap lg:space-x-4 max-lg:space-y-2">
          <ProgramsScheduleCard v-for="schedule in program.schedule" :schedule :image-src="program.image" />
        </div>
      </div>
    </div>
  </Section>
  <Section>
    <ProgramsDescription :description="program.description" />
  </Section>
</template>
 
<style></style>