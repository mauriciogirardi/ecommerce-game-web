'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

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
  subtitle: string
  btnLink: string
  btnLabel: string
  alt?: string
  ribbon?: RibbonTypes
  className?: string
}

export function Banner({
  btnLabel,
  btnLink,
  img,
  subtitle,
  ribbon,
  title,
  alt,
  className
}: BannerProps) {
  return (
    <main className={cn('relative md:shadow-sm', className)}>
      <Image
        src={img}
        alt={alt || title}
        width={700}
        height={580}
        quality={100}
        className="h-full w-full bg-center object-cover md:h-[580px]"
      />

      <div className="bg-black/70 p-5 text-white md:absolute md:bottom-0 md:left-0 md:right-0 md:p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Link href={btnLink} className="mt-4 inline-block">
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
