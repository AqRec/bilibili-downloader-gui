/** Metadata returned without the expiring, signed CDN URLs. */
export type SongInfo = {
  id: number
  title: string
  author: string
  cover: string | null
  duration: number
  audioQuality: number
  format: 'm4a' | 'flac' | 'mp3' | 'aac'
  losslessAvailable: boolean
}
