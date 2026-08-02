export function toPercentage(val: number, decimals = 0): string {
  const percentage = (val * 100).toFixed(decimals)
  return `${percentage}%`
}

export function roundToFixed(val: number | string, positions = 2): number {
  let text = 0
  if (typeof val === 'string') {
    text = +Number.parseFloat(val).toFixed(positions)
  }
  else if (typeof val === 'number') {
    text = +val.toFixed(positions)
  }
  return text
}
