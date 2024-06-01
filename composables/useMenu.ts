export const useMenu = () => {
  const isOpen = useState('menu-state', () => false)
  const toggleMenuState = () => {
    console.log(isOpen.value)
    isOpen.value = !isOpen.value
  }
  return { isOpen, toggleMenuState }
}
