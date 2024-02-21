import { IRadioData } from '~/types/track'

export default defineEventHandler(async event => {
  try {
    const data = await $fetch<IRadioData[]>('http://localhost:3009/api/track')
    return data
  } catch (error) {
    return []
  }
})
