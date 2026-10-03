import type { TFunction } from 'i18next'

const QUALITY_KEYS: Record<number, string> = {
  0: 'song.quality.q128',
  1: 'song.quality.q192',
  2: 'song.quality.q320',
  3: 'song.quality.lossless',
}

export function songQualityLabel(quality: number, t: TFunction): string {
  return t(QUALITY_KEYS[quality] ?? 'song.quality.unknown')
}
