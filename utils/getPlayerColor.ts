enum EColor {
  blue = 'text-blue-400',
  pink = 'text-pink-400',
  yellow = 'text-yellow-300',
  black = 'text-neutral-900',
  red = 'text-red-600',
  green = 'text-green-500',
}

export const getColor = (color: PlayerColor) => EColor[color]
