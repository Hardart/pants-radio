<script setup lang='ts'>
const arr1 = [5, 6]
const arr2 = [5, 6]
const arr3 = [4]

const data = [
  {days: arr3, start: '14:00'},
  {days: arr2, start: '12:00'},
  {days: arr1, start: '16:00'},
]

const isEqualArrays = (arr1: number[], arr2: number[]) => arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index])

const groupedData = data.reduce((curr, val, index) => {
  console.log(curr.days)
  curr = val
  return curr
})
</script>
 
<template>
<Section>
 
</Section>
</template>
 
<style></style>