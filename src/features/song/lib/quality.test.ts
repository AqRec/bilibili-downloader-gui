import type { TFunction } from 'i18next'
import { describe, expect, it } from 'vitest'

import { songQualityLabel } from './quality'

const t = ((key: string) => key) as TFunction

describe('songQualityLabel', () => {
  it('labels the returned quality, not the requested quality', () => {
    expect(songQualityLabel(2, t)).toBe('song.quality.q320')
    expect(songQualityLabel(3, t)).toBe('song.quality.lossless')
    expect(songQualityLabel(99, t)).toBe('song.quality.unknown')
  })
})
