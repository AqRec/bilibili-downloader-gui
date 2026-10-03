import { describe, expect, it } from 'vitest'

import { audioRedownloadRoute } from './audioRedownloadRoute'

describe('audioRedownloadRoute', () => {
  it('reopens a standalone song in the search flow', () => {
    const url = 'https://www.bilibili.com/audio/au821521'
    expect(audioRedownloadRoute(url)).toBe(
      `/search?autoFetch=${encodeURIComponent(url)}`,
    )
  })

  it('rejects video and spoofed audio URLs', () => {
    expect(
      audioRedownloadRoute('https://example.com/audio/au821521'),
    ).toBeNull()
    expect(
      audioRedownloadRoute('https://www.bilibili.com/video/BV1xx411c7XD'),
    ).toBeNull()
  })
})
