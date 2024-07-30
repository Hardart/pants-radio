export const useMenu = () => {
  const isMenuOpen = useState('menu-state', () => false)
  const toggleMenuState = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  return { isMenuOpen, toggleMenuState }
}
