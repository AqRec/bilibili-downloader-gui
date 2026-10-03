/** Returns a safe au ID only for a canonical standalone Bilibili song URL. */
export function parseStandaloneAudioId(value: string | URL): number | null {
  try {
    const url = typeof value === 'string' ? new URL(value) : value
    if (url.hostname.toLowerCase() !== 'www.bilibili.com') return null
    const id = url.pathname.match(/^\/audio\/au([1-9]\d*)\/?$/i)?.[1]
    if (!id) return null
    const parsed = Number(id)
    return Number.isSafeInteger(parsed) ? parsed : null
  } catch {
    return null
  }
}
