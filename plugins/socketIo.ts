import io, { Socket } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (!process.client) return

  const url = `http://localhost:3071`
  if (!url || typeof url !== 'string') return
  const s = ref<Socket>()
  s.value = io(process.dev ? url  : '')
  return {
    provide: {
      ws: s,
    },
  }
})
