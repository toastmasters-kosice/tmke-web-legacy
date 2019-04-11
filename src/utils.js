const globalNavigator = typeof navigator !== 'undefined' ? navigator : {}

export const getIsOnline = () => globalNavigator.onLine
export const scrollToElement = (elementId) => {
  const element = document.querySelector(`#${elementId}`)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
