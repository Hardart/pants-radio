<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    page: number
    total: number
    perPage: number
    showPages?: number
  }>(),
  {
    showPages: 5
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
    <nav class="flex justify-center space-x-3" v-if="totalPages > showPages + 2">
      <HdrtPaginationButton @click="onPrev(page)" :is-disabled="page == 1" text="prev" />

      <template v-if="page >= showPages">
        <HdrtPaginationButton @click="onClick" :text="1" />
        <HdrtPaginationEmpty />
      </template>

      <template v-else>
        <HdrtPaginationButton v-for="i in showPages" @click="onClick" :is-active="page == i" :text="i" />
      </template>

      <template v-if="page >= showPages && page < totalPages - 2">
        <HdrtPaginationButton @click="onClick" :text="page - 1" />
        <HdrtPaginationButton is-active :text="page" />
        <HdrtPaginationButton @click="onClick" :text="page + 1" />
      </template>

      <template v-for="n in totalPages" v-if="page >= totalPages - 2">
        <HdrtPaginationButton @click="onClick" v-if="n > totalPages - 5" :is-active="page == n" :text="n" />
      </template>

      <template v-if="page < totalPages - 2">
        <HdrtPaginationEmpty />
        <HdrtPaginationButton @click="onClick" :is-active="page == totalPages" :text="totalPages" />
      </template>

      <HdrtPaginationButton @click="onNext(page)" :is-disabled="page == totalPages" text="next" />
    </nav>

    <nav class="flex items-center justify-center space-x-3" v-else>
      <HdrtPaginationButton @click="onPrev(page)" :is-disabled="page == 1" type="prev" />
      <HdrtPaginationButton v-for="i in totalPages" @click="onClick" :is-active="page == i" :text="i" />
      <HdrtPaginationButton @click="onNext(page)" :is-disabled="page == totalPages" type="next" />
    </nav>
  </div>
</template>
