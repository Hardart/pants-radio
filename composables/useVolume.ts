export const useVolume = (volume: Ref<number>) => {
  const level = ref(5)

  watch(level, () => (volume.value = level.value / 100), { immediate: true })
  return { level }
}
