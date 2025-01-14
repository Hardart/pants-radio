<script setup lang="ts">
import type { Program } from '~/types/program'

const { slug } = useRoute().params
if (!slug || typeof slug !== 'string') throw createError('there are no SLUG in route or type of SLUG parameter is not a STRING')

const { data } = await useFetch<Program>(`/api/v1/programs/${slug}`, {
  key: slug,
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
const program = toValue(data)
if (!program) throw createError('Program is not defined')
if (!program.isPublished) await navigateTo('/programs')
const hosts = computed(() => 'Ведущ' + (program.hosts.length > 1 ? 'ие' : 'ий'))
</script>

<template>
  <HdrtBreadcrumbs v-if="program" show-home :label-list="['программы', program.title]" />
  <Section padding="small" v-if="program">
    <div class="flex items-center max-sm:flex-col sm:items-start md:space-x-8">
      <div class="flex gap-x-4 max-sm:mb-6">
        <div class="aspect-square max-w-80 overflow-hidden rounded-lg xl:max-w-96">
          <img v-if="program.image" :src="correctImageSrc(program.image)" class="size-full object-cover" :alt="program.title" />
          <img v-else src="/assets/plug280x280.svg" class="size-full object-cover" :alt="program.title" />
        </div>
      </div>
      <div class="flex flex-col space-y-4 p-4 max-sm:order-first max-sm:items-center">
        <h1 class="text-2xl font-bold tracking-wide md:text-3xl">{{ program.title }}</h1>

        <div class="flex items-center space-x-4" v-for="host in program.hosts">
          <div class="h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
            <img :src="host.avatar || '/images/hosts/larin.png'" width="64" height="64" alt="" />
          </div>
          <div>
            <p class="font-medium leading-6">{{ hosts }}</p>
            <p class="text-lg font-bold leading-6">{{ host.fullName }}</p>
          </div>
        </div>
        <div class="flex max-lg:flex-col max-lg:space-y-2 max-sm:hidden lg:space-x-4">
          <ProgramsScheduleCard v-for="schedule in program.schedule" :schedule :image-src="program.image" />
        </div>
      </div>
      <div class="flex max-lg:flex-col max-lg:space-y-2 sm:hidden lg:space-x-4">
        <ProgramsScheduleCard v-for="schedule in program.schedule" :schedule :image-src="program.image" />
      </div>
    </div>
  </Section>
  <Section v-if="program && program.description">
    <ProgramsDescription :description="program.description" />
  </Section>
</template>
