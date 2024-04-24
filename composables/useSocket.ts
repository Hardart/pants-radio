import type { Socket } from 'socket.io-client'
import type { Track } from '~/types/track'

export const useSocket = () => {
  
  const socket = inject<Socket>('socket')



  function onSocketConnect(trackData: Ref<Track>) {
    if (typeof socket === 'undefined') return console.warn('Socket is undefined')  
    socket.on('radio:track', (data: Track) => {
      trackData.value = data
    })
    socket.on('radio:jingle', (data: Track) => {
      trackData.value = data
    })
  }

  function onHostOnAir(input: Ref<string>) {
    if (typeof socket === 'undefined') return console.warn('Socket is undefined')
    socket.emit('user:connect')
    socket.on('host:on-air', data => {
      input.value = data
    })
  }
  return { onSocketConnect,  onHostOnAir }
}
