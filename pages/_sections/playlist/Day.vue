<script setup lang="ts">
const date = defineModel('date', { default: new Date() })
const isOpen = ref(false)
const day = useDateFormat(date, 'DD')
const month = useDateFormat(date, 'MM')
const year = useDateFormat(date, 'YYYY')
const changeState = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div class="relative z-10 flex gap-x-4">
    <div class="grid place-items-center size-10 btn-primary rounded-lg z-20" @click="changeState">
      <Icon name="material-symbols:calendar-today-outline-rounded" size="25" class="mb-0.5" />
    </div>
    <div class="flex items-center gap-x-1">
      <UiBorderedValue :value="day" />
      <span class="text-secondary/80">–</span>
      <UiBorderedValue :value="month" />
      <span class="text-secondary/80">–</span>
      <UiBorderedValue :value="year.slice(-2)" />
    </div>
    <div>
      <TransitionFade>
        <div class="absolute left-0 top-full mt-1 bg-white border-2 rounded-lg" v-if="isOpen">
          <UiDatePicker v-model="date" @close="changeState" />
        </div>
      </TransitionFade>
    </div>
  </div>
</template>
