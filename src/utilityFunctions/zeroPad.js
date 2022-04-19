export function zeroPad(num) {
  const zeros = '000'
  const paddedNum = `${zeros}${num.toString()}`
  if (paddedNum.length > 6) {
    throw 'number of contacts or jobs has exceeded 9999. If this is on purpose, adjust zeroPad() in utilityFunctions'
  }
  return paddedNum.slice(-3)
}
