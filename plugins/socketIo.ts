import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (!process.client) return
  const url = `http://localhost:3071`
  return {
    provide: {
      io: () => io(process.dev ? url  : ''),
    },
  }
})
