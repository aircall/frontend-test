export const didMissCall = callType => ['missed', 'voicemail'].includes(callType)

export const parseDuration = duration => {
  const roundedValue = Math.floor(duration / 60)

  if(roundedValue < 1) return `${duration} seconds`
  if(roundedValue === 1) return `${duration} minute`
  return `${roundedValue} minutes`
}