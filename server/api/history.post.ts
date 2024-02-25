export default defineEventHandler(async event => {
  try {
    const { date } = await readBody(event)
    const data = await $fetch('http://localhost:3009/api/history', { body: { createdAt: date }, method: 'post' })
    return data
  } catch (error) {
    return []
  }
})
