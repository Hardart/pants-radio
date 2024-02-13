<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    page: number
    total: number
    perPage: number
    showPages?: number
  }>(),
  {
    showPages: 5,
  }
)

const totalPages = computed(() => Math.ceil(props.total / props.perPage))

const emit = defineEmits(['update:page'])

const onClick = (event: Event) => {
  if (!event.target) return
  const el = event.target as HTMLElement
  emit('update:page', el.innerText)
}
const onNext = (page: number) => {
  emit('update:page', page + 1)
}
const onPrev = (page: number) => {
  emit('update:page', page - 1)
}
</script>

<template>
  <div class="container mx-auto my-5" v-if="totalPages > 1">
    <nav class="flex justify-center items-center space-x-3">
      <NuxtLink :to="`/news?page=${page}`" class="flex justify-center items-center w-10 h-10 border" v-for="page in totalPages">{{
        page
      }}</NuxtLink>
    </nav>
  </div>
</template>
