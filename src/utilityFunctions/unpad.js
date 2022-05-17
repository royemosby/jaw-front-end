export function unpad(storeId) {
  const trimmed = Number(storeId.slice(-3))
  if (isNaN(trimmed)) {
    throw new Error(`${storeId} is not a valid contact or job id.`)
  } else {
    return trimmed
  }
}
