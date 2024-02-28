import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (!process.client) return

  const url = `http://localhost:3068`

  if (!url || typeof url !== 'string') return

  return {
    provide: {
      ws: (port: number, token: string | null) => io(process.dev ? url : ''),
    },
  }
})
