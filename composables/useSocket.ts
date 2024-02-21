import type { IRadioData } from '~/types/track'

export const useSocket = (trackData: Ref<IRadioData>) => {
  const { $ws } = useNuxtApp()
  const socket = ref()

  function onSocketConnect() {
    socket.value = $ws(3068, null)
    socket.value.on('radio:track', (data: IRadioData) => {
      trackData.value = data
    })
    socket.value.on('radio:jingle', (data: IRadioData) => {
      trackData.value = data
    })
  }
  return { onSocketConnect }
}
