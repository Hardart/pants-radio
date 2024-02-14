import { StorageSerializers } from '@vueuse/core'
import type { LocationQuery } from 'vue-router'

export default async <T>(url: string, query?: LocationQuery) => {
  const serializer = StorageSerializers.object
  const cached = useSessionStorage<T>(`${url}_${JSON.stringify(query)}`, null, { serializer })

  if (!cached.value) {
    try {
      const data = await $fetch<T>(url, { query, headers: useRequestHeaders(['cookie']) })
      cached.value = data as T
    } catch (error) {
      throw createError({ statusMessage: `Не могу получить данные по адресу - ${url}` })
    }
  }

  return cached
}
