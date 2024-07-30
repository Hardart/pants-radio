<script setup lang="ts">
const { custom } = useDates()
const [isOpen, toggle] = useToggle()
const date = defineModel<Date>({ required: true })
defineProps<{ startFrom: string }>()
const target = ref()
onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
  <div class="relative z-10" ref="target">
    <div class="btn-primary z-20 flex h-10 items-center justify-center gap-x-2 rounded-lg px-3" @click="toggle()">
      <Icon name="material-symbols:calendar-today-outline-rounded" size="25" class="mb-0.5" />
      <div class="text-lg">{{ custom(date).date }}</div>
    </div>
    <div>
      <TransitionFade>
        <div class="absolute left-0 top-full mt-1 rounded-lg border-2 bg-white" v-if="isOpen">
          <UiDatePicker v-model="date" :start-from @close="toggle" />
        </div>
      </TransitionFade>
    </div>
  </div>
</template>
