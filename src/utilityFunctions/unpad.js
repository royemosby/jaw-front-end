export function unpad(storeId) {
  const trimmed = Number(storeId.slice(-3))
  if (isNaN(trimmed)) {
    throw `id: ${storeId} is not a valid contact or job id.`
  } else {
    return trimmed
  }
}
