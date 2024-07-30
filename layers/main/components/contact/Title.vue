<script setup lang="ts">
const { type } = defineProps<{ type: 'phone' | 'mail' | 'address' }>()
const props = [
  { type: 'phone', icon: 'ph:phone-call-light', label: 'Телефоны' },
  { type: 'mail', icon: 'ph:envelope-simple-light', label: 'Электронная почта' },
  { type: 'address', icon: 'ph:map-pin-light', label: 'Адрес' }
]
const p = computed(() => props.find((prop) => prop.type == type))
</script>

<template>
  <h4 v-if="p" class="mb-4 flex items-center gap-x-4 text-2xl font-bold"><Icon :name="p.icon" size="30" />{{ p.label }}</h4>
</template>
