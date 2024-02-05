export function actionAfterDelay() {
  let timer: NodeJS.Timeout | null = null
  return function (fn: () => void, ms: number = 0, getTimerId?: NodeJS.Timeout | null) {
    if (getTimerId) timer = getTimerId
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(), ms)
    if (getTimerId) getTimerId = timer // NOT WORK!!
  }
}
