import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/animate-ui/radix/tooltip'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Download, Music2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { songQualityLabel } from '../lib/quality'
import type { SongInfo } from '../types'

export function SongCard({
  song,
  onDownload,
  isQueued,
}: {
  song: SongInfo
  onDownload: () => void
  isQueued: boolean
}) {
  const { t } = useTranslation()

  return (
    <Card data-testid="song-card">
      <CardHeader>
        <CardTitle className="font-display text-lg">
          {t('song.stepTitle')}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {song.cover ? (
          <img
            src={song.cover}
            alt=""
            className="size-24 shrink-0 rounded-md object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="bg-muted flex size-24 shrink-0 items-center justify-center rounded-md">
            <Music2 className="text-muted-foreground size-9" aria-hidden />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h2 className="font-medium break-words">{song.title}</h2>
          {song.author && (
            <p className="text-muted-foreground text-sm">{song.author}</p>
          )}
          <p className="text-muted-foreground text-sm">
            {t('song.qualityAvailable', {
              quality: songQualityLabel(song.audioQuality, t),
            })}
            {' · '}
            {t('song.outputFormat', { format: song.format.toUpperCase() })}
          </p>
          {song.losslessAvailable && song.audioQuality < 3 && (
            <p className="text-muted-foreground text-xs">
              {t('song.losslessUnavailable')}
            </p>
          )}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="self-start">
                <Button onClick={onDownload} disabled={isQueued}>
                  <Download className="size-4" />
                  {t('song.download')}
                </Button>
              </span>
            </TooltipTrigger>
            {isQueued && (
              <TooltipContent>{t('song.alreadyQueued')}</TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
