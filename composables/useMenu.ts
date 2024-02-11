export const useMenu = () => {
  const isOpen = useState('menu-state', () => false)
  const toggleMenuState = () => (isOpen.value = !isOpen.value)
  return { isOpen, toggleMenuState }
}
