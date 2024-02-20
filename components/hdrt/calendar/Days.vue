<script setup lang="ts">
type DateProps = {
  day: number
  month: number
  year: number
}
const emit = defineEmits(['set-day'])
const props = defineProps<DateProps>()
const isToday = (index: number) => new Date(props.year, props.month, index).toLocaleDateString() == new Date().toLocaleDateString()
const monthLength = computed(() => new Date(props.year, props.month + 1, 0).getDate())
const startWeekday = computed(() => {
  const n = new Date(props.year, props.month, 1).getDay()
  return n == 0 ? 7 : n
})
</script>

<template>
  <div class="grid grid-cols-7 grid-rows-6 gap-1 select-none">
    <div v-for="index in 42">
      <div class="flex justify-center items-center w-9 h-9" v-if="index < monthLength + startWeekday && index >= startWeekday">
        <span
          @click="$emit('set-day', index + 1 - startWeekday)"
          class="select-none w-8 h-8 rounded-full flex justify-center items-center hover:bg-primary/75 hover:cursor-pointer"
          :class="isToday(index + 1 - startWeekday) && 'bg-primary text-neutral-50'"
        >
          {{ index + 1 - startWeekday }}
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>
