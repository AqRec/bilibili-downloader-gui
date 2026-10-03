import { mockInvoke } from '@/test/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { fetchSongInfo } from './songApi'

afterEach(() => vi.clearAllMocks())

describe('fetchSongInfo', () => {
  it('requests only the au ID and returns actual stream quality', async () => {
    const song = {
      id: 821521,
      title: 'Song',
      author: 'Artist',
      cover: null,
      duration: 229,
      audioQuality: 2,
      format: 'm4a',
      losslessAvailable: false,
    }
    mockInvoke.mockResolvedValueOnce(song)
    await expect(fetchSongInfo(821521)).resolves.toEqual(song)
    expect(mockInvoke).toHaveBeenCalledWith('fetch_song_info', {
      songId: 821521,
    })
  })
})
