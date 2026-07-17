export function getDeviceTier() {
  const memory = navigator.deviceMemory
  const cores = navigator.hardwareConcurrency
  const narrowScreen = window.innerWidth < 768
  const mobileUA = /Mobi|Android/i.test(navigator.userAgent)
  if (narrowScreen || mobileUA) return 'mobile'
  if (memory && memory <= 2) return 'low'
  if (cores && cores <= 2) return 'low'
  return 'high'
}

export const tier = getDeviceTier()
export const isHigh = tier === 'high'
export const isMobile = tier === 'mobile'
export const isLow = tier === 'low'