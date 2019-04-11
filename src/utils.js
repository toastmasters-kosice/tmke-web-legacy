const globalNavigator = typeof navigator !== 'undefined' ? navigator : {}

export const getIsOnline = () => globalNavigator.onLine
