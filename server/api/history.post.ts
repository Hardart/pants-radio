export default defineEventHandler(async event => {
  try {
    const { date } = await readBody(event)
    const data = await $fetch('http://localhost:3068/api/history', { body: { date }, method: 'post' })
    return data
  } catch (error) {
    return []
  }
})
