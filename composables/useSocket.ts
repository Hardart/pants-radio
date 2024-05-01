import type { Socket } from 'socket.io-client'
import type { Track } from '~/types/track'

export const useSocket = () => {
  
  
  function initSocket () {
    // const { $ws } = useNuxtApp();
    // $ws?.value?.emit('user:connect')
  }

  
  
  function onTrackMeta(trackData: Ref<Track>) {
    
    // console.log(socket)
    // socket.on('meta', (data: Track) => {
    //   trackData.value = data
    // })
  }

  function onHostOnAir(input: Ref<string>) {
    // const { $ws } = useNuxtApp();
    // $ws?.value?.on('host:data', data => {
    //   input.value = data
    // })
  }
  return { initSocket, onHostOnAir, onTrackMeta }
}
