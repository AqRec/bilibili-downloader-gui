import { describe, expect, it } from 'vitest'
import { parseStandaloneAudioId } from './parseStandaloneAudioId'

describe('parseStandaloneAudioId', () => {
  it('accepts a canonical song URL with an optional query', () => {
    expect(
      parseStandaloneAudioId(
        'https://www.bilibili.com/audio/au821521?from=search',
      ),
    ).toBe(821521)
  })

  it.each([
    'https://example.com/audio/au821521',
    'https://www.bilibili.com.evil.test/audio/au821521',
    'https://www.bilibili.com/audio/au0',
    'https://www.bilibili.com/audio/au9007199254740992',
    'https://www.bilibili.com/audio/au821521/other',
  ])('rejects malformed or spoofed song URL %s', (url) => {
    expect(parseStandaloneAudioId(url)).toBeNull()
  })
})
