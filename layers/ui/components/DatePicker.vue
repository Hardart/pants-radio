<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import 'v-calendar/style.css'
defineProps<{ startFrom: string }>()
const dateModel = defineModel<Date>({ required: true })

const emit = defineEmits(['update:model-value', 'close'])

const date = computed({
  get: () => dateModel.value,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  }
})

const attrs = {
  transparent: true,
  borderless: true,
  color: 'primary',
  'first-day-of-week': 2
}
</script>

<template>
  <VCalendarDatePicker v-model="date" v-bind="{ ...attrs }" :min-date="startFrom" :max-date="new Date()" />
</template>

<style>
.vc-primary {
  --vc-accent-50: rgb(var(--color-primary-50));
  --vc-accent-100: rgb(var(--color-primary-100));
  --vc-accent-200: rgb(var(--color-primary-200));
  --vc-accent-300: rgb(var(--color-primary-300));
  --vc-accent-400: rgb(var(--color-primary-400));
  --vc-accent-500: rgb(var(--color-primary-500));
  --vc-accent-600: rgb(var(--color-primary-600));
  --vc-accent-700: rgb(var(--color-primary-700));
  --vc-accent-800: rgb(var(--color-primary-800));
  --vc-accent-900: rgb(var(--color-primary-900));
}

.vc-disabled {
  @apply cursor-default hover:bg-white;
}
</style>
