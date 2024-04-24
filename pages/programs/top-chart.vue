<script setup lang="ts">
import type { Host, IAirtimeItem, ProgramData } from '~/types/user'

const airtimeData: IAirtimeItem[] = [
  { start: '18:00', end: '19:00', weekday: 'Воскресенье' },
  { start: '16:00', end: '17:00', weekday: 'Среда', replay: true },
]

const host: Host = {
  name: 'Евгений',
  surname: 'Ларин',
  fullname: 'Ларин Евгений',
  position: '',
}

const programData: ProgramData = {
  title: 'TOP Chart 20',
  airtimeData,
  host,
}
</script>

<template>
  <Breadcrumbs />
  <Section padding="small">
    <div class="flex max-sm:flex-col items-center md:space-x-8">
      <div class="min-w-80 rounded-lg overflow-hidden">
        <img src="/images/plug280x280.svg" alt="" />
      </div>
      <div class="flex max-sm:items-center flex-col p-4 space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">{{ programData.title }}</h1>
        <div class="flex items-center space-x-4">
          <div class="w-16 border-2 border-primary rounded-full overflow-hidden">
            <img src="/images/hosts/larin.png" width="64" height="64" alt="" />
          </div>
          <div>
            <p class="font-medium leading-6">Ведущий</p>
            <p class="text-lg font-bold leading-6">{{ programData.host.fullname }}</p>
          </div>
        </div>
        <div class="flex max-lg:flex-col flex-nowrap lg:space-x-4 max-lg:space-y-2">
          <!-- <ProgramCard v-for="card in programData.airtimeData" :card-data="card" /> -->
        </div>
      </div>
    </div>
  </Section>
  <Section>
    <div class="xl:w-1/2 p-6 text-neutral-700 space-y-2 rounded-md shadow-md">
      <p>
        Каждое воскресенье на «Радио ШТАНЫ», подводим музыкальные итоги недели. И только от твоего голоса зависит, какая новинка станет
        лучшей на этой неделе.
      </p>
      <p>В воскресенье с 18 до 19. Лучшие 20 песен звучат для Вас!</p>
      <p>Пропустил в эфире? Слушай ПОДКАСТ!</p>
    </div>
  </Section>
</template>

<style></style>
