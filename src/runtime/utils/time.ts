export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export function daysSince(targetDate: Date) {
  // Current date and time
  const currentDate = new Date()

  // Calculate the difference in milliseconds
  const timeDifference = currentDate.getTime() - targetDate.getTime()

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return daysDifference
}
