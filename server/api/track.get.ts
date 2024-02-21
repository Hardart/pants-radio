import { IRadioData } from '~/types/track'

export default defineEventHandler(async event => {
  try {
    const { limit } = getQuery(event)
    const data = await $fetch<IRadioData[]>('http://localhost:3009/api/track', { query: { limit } })
    return data
  } catch (error) {
    return []
  }
})
