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
</script>

<template>
  <div class="container mx-auto mt-10" v-if="totalPages > 1">
    <nav class="flex justify-center items-center space-x-3" v-if="totalPages > showPages + 2">
      <template v-if="page >= showPages">
        <HdrtPaginationLink :is-active="page === 1" :page-number="1" />
        <HdrtPaginationEmpty />
      </template>

      <template v-else v-for="p in showPages">
        <HdrtPaginationLink :is-active="page === p" :page-number="p" />
      </template>

      <template v-if="page >= showPages && page < totalPages - 2">
        <HdrtPaginationLink :page-number="page - 1" />
        <HdrtPaginationLink is-active :page-number="page" />
        <HdrtPaginationLink :page-number="page + 1" />
      </template>

      <template v-for="n in totalPages" v-if="page >= totalPages - 2">
        <HdrtPaginationLink v-if="n > totalPages - 5" :page-number="n" :is-active="page == n" />
      </template>

      <template v-if="page < totalPages - 2">
        <HdrtPaginationEmpty />
        <HdrtPaginationLink :page-number="totalPages" />
      </template>
    </nav>
    <nav class="flex justify-center items-center space-x-3" v-else>
      <HdrtPaginationArrow :page-number="page - 1" type="prev" :is-disable-link="page == 1" />
      <HdrtPaginationLink v-for="i in totalPages" :is-active="page == i" :page-number="i" />
      <HdrtPaginationArrow :page-number="page + 1" type="next" :is-disable-link="page == totalPages" />
    </nav>
  </div>
</template>
