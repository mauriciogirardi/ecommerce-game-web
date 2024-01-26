'use client'

import * as DOMPurify from 'dompurify'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../button'
import { Ribbon, RibbonProps } from '../ribbon'

export type RibbonTypes = {
  label: string
  size?: RibbonProps['size']
  color?: RibbonProps['color']
}

export type BannerProps = {
  img: string
  title: string
  subtile: string
  btnLink: string
  btnLabel: string
  alt?: string
  ribbon?: RibbonTypes
}

export function Banner({
  btnLabel,
  btnLink,
  img,
  subtile,
  ribbon,
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
        className="h-[230px] w-full bg-center object-cover md:h-[580px]"
      />

      <div className="bg-black/70 p-5 text-white md:absolute md:bottom-0 md:left-0 md:right-0 md:p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subtitleSanitize }} />
        <Link href={btnLink} className="mt-4 block">
          <Button size="large">{btnLabel}</Button>
        </Link>
      </div>

      {ribbon?.label && (
        <Ribbon
          color={ribbon.color}
          size={ribbon.size}
          className="right-0 before:hidden lg:-right-4 lg:before:block"
        >
          {ribbon.label}
        </Ribbon>
      )}
    </main>
  )
}
