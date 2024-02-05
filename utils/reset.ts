export function resetCurrentPoints(player: IPlayer) {
  return async function () {
    player.points.showCurrent = false
    await delay(300)
    player.points.current = 0
  }
}
