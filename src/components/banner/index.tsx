'use client'

import * as DOMPurify from 'dompurify'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../button'

export type BannerProps = {
  img: string
  title: string
  subtile: string
  btnLink: string
  btnLabel: string
  alt?: string
}

export function Banner({
  btnLabel,
  btnLink,
  img,
  subtile,
  title,
  alt
}: BannerProps) {
  const subtitleSanitize = DOMPurify.sanitize(subtile)
  return (
    <main className="relative md:shadow-sm">
      <Image
        src={img}
        alt={alt || title}
        width={500}
        height={368}
        quality={100}
        objectFit="cover"
        className="h-[230px] w-full bg-center md:h-[580px]"
      />

      <div className="bg-black/70 p-5 text-white md:absolute md:bottom-0 md:left-0 md:right-0 md:p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subtitleSanitize }} />
        <Link href={btnLink} className="mt-4 block">
          <Button size="large">{btnLabel}</Button>
        </Link>
      </div>
    </main>
  )
}
