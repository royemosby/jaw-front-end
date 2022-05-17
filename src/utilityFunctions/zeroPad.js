export function zeroPad(num) {
  const zeros = '000'
  const paddedNum = `${zeros}${num.toString()}`
  if (paddedNum.length > 6) {
    throw new Error('number of contacts or jobs has exceeded 9999')
  }
  return paddedNum.slice(-3)
}
