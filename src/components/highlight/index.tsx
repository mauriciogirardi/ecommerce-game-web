'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useBreakpoints } from '@/hooks/useBreakpoints'
import { cn } from '@/lib/utils'

import { Button } from '../button'

export type HighlightProps = {
  title: string
  subtitle: string
  btnLabel: string
  btnLink: string
  backgroundImage: string
  floatImage?: string
  float?: 'left' | 'right'
}

export function Highlight({
  subtitle,
  title,
  backgroundImage,
  floatImage,
  btnLabel,
  btnLink,
  float = 'left'
}: HighlightProps) {
  const { lg } = useBreakpoints()

  return (
    <div className="relative grid min-h-[230px] w-full overflow-hidden after:absolute after:inset-0 after:z-30 after:h-full after:w-full after:bg-black/60 after:content-[''] md:min-h-[320px]">
      <Image
        src={backgroundImage}
        alt={title}
        height={230}
        width={800}
        className="absolute inset-0 h-[230px] w-full object-cover md:h-[320px]"
      />

      {floatImage && (
        <Image
          src={floatImage}
          alt={title}
          height={230}
          width={230}
          className={cn(
            float === 'right' && 'scale-x-[-1]',
            `${float}-4 md:${float}-9 `,
            'absolute bottom-0 z-40 max-h-[180px] max-w-min md:max-h-[320px]'
          )}
        />
      )}

      <div
        className={cn(
          float === 'left' ? 'text-right' : 'text-left',
          'relative z-40 p-4 text-white md:self-end md:p-9'
        )}
      >
        <h1 className="text-xl font-bold md:text-3xl">{title}</h1>
        <h2 className="mb-3 text-sm md:mb-5 md:text-lg">{subtitle}</h2>
        <Link href={btnLink}>
          <Button size={lg ? 'large' : 'default'}>{btnLabel}</Button>
        </Link>
      </div>
    </div>
  )
}
