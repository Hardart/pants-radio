<script setup lang="ts">
const date = ref(new Date())
const isOpen = ref(false)
const formatted = useDateFormat(date, 'DD-MM-YY')
const changeState = () => (isOpen.value = !isOpen.value)
const openState = computed(() => isOpen.value)
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
    <div class="text-neutral-50 bg-primary w-14 h-14 grid place-items-center rounded-lg z-20 cursor-pointer" @click="changeState">
      <Icon name="material-symbols:calendar-today-outline-rounded" size="30" />
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
