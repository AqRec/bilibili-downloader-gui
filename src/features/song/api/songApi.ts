import { invoke } from '@tauri-apps/api/core'

import type { SongInfo } from '../types'

/** Queries metadata and the highest playable source quality for an au ID. */
export function fetchSongInfo(songId: number): Promise<SongInfo> {
  return invoke<SongInfo>('fetch_song_info', { songId })
}
