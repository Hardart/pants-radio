<script setup lang="ts">
const date = ref(new Date())
const isOpen = ref(false)
const day = useDateFormat(date, 'DD')
const month = useDateFormat(date, 'MM')
const year = useDateFormat(date, 'YY')
const changeState = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <Section padding="topSmall">
    <SectionTitle title="Ранее в эфире">
      <template #desc>
        <div class="px-2 mt-2 mb-5 leading-4 text-secondary/45 text-xs -space-y-0.5">
          <p>Пока доступен только список треков, которые прозвучали в московском (федеральном) эфире.</p>
          <p>
            Плейлист в других городах обычно ничем не отличается, а лишь смещается относительно разницы во времени между вашим городом и
            Москвой.
          </p>
        </div>
      </template>
    </SectionTitle>
  </Section>
  <Section padding="none">
    <div class="flex">
      <div class="grid place-items-center w-10 h-10 text-neutral-50 bg-primary rounded-lg z-20 cursor-pointer" @click="changeState">
        <Icon name="material-symbols:calendar-today-outline-rounded" size="25" class="mb-0.5" />
      </div>
      <div class="grid place-items-center w-10 h-10 rounded-lg border-2">{{ day }}</div>
      <div class="grid place-items-center w-10 h-10 rounded-lg border-2">{{ month }}</div>
      <div class="grid place-items-center w-10 h-10 rounded-lg border-2">{{ year }}</div>
    </div>
    <div class="relative z-10">
      <TransitionFade>
        <div class="absolute bg-white" v-if="isOpen">
          <UiDatePicker v-model="date" @close="changeState" />
        </div>
      </TransitionFade>
    </div>
  </Section>
</template>

<style></style>
