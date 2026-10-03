import { renderWithProviders } from '@/test/test-utils'
import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { SongInfo } from '../types'
import { SongCard } from './SongCard'

const song: SongInfo = {
  id: 821521,
  title: 'Song',
  author: 'Artist',
  cover: null,
  duration: 229,
  audioQuality: 2,
  format: 'm4a',
  losslessAvailable: true,
}

describe('SongCard', () => {
  it('shows returned source quality and queues a standalone download', async () => {
    const onDownload = vi.fn()
    const { user } = renderWithProviders(
      <SongCard song={song} onDownload={onDownload} isQueued={false} />,
    )
    expect(screen.getByText('Song')).toBeInTheDocument()
    expect(screen.getByText('Artist')).toBeInTheDocument()
    expect(screen.getByText(/song\.qualityAvailable/)).toBeInTheDocument()
    expect(screen.getByText('song.losslessUnavailable')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'song.download' }))
    expect(onDownload).toHaveBeenCalledOnce()
  })

  it('explains why a queued song cannot be queued again', () => {
    renderWithProviders(<SongCard song={song} onDownload={vi.fn()} isQueued />)
    expect(screen.getByRole('button', { name: 'song.download' })).toBeDisabled()
  })
})
