import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  if (!process.client) return
  const url = `http://87.251.66.75`
  return {
    provide: {
      io: () => io(process.dev ? url : '')
    }
  }
})
