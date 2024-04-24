import type { Socket } from 'socket.io-client'
import type { Track } from '~/types/track'

export const useSocket = () => {
  const { $ws } = useNuxtApp();
  
  function initSocket () {
    $ws?.value?.emit('user:connect')
  }
  
  // function onSocketConnect(trackData: Ref<Track>) {
  //   if (typeof socket === 'undefined') return console.warn('Socket is undefined')  
  //   socket.on('radio:track', (data: Track) => {
  //     trackData.value = data
  //   })
  //   socket.on('radio:jingle', (data: Track) => {
  //     trackData.value = data
  //   })
  // }

  function onHostOnAir(input: Ref<string>) {
    $ws?.value?.on('host:data', data => {
      console.log(data);
      input.value = data
    })
  }
  return { initSocket, onHostOnAir }
}
