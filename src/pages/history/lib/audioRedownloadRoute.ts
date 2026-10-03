import { parseStandaloneAudioId } from '@/shared/lib/parseStandaloneAudioId'

export function audioRedownloadRoute(url: string): string | null {
  return parseStandaloneAudioId(url) !== null
    ? `/search?autoFetch=${encodeURIComponent(url)}`
    : null
}
