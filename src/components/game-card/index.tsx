'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { formatCurrency } from '@/utils/formatCurrency'

import { RibbonTypes } from '../banner'
import { Button } from '../button'
import Icon from '../Icon'
import { Ribbon } from '../ribbon'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: number
  ribbon?: RibbonTypes
  priceDiscount?: number
  favorite?: boolean
  onFav?: () => void
  className?: string
}

export function GameCard({
  developer,
  img,
  price,
  title,
  ribbon,
  priceDiscount,
  favorite = false,
  onFav,
  className
}: GameCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col rounded bg-white shadow-xl',
        className
      )}
    >
      <Link
        className="relative min-h-[140px] w-full rounded-t-xl bg-skeleton"
        href="/"
      >
        <Image
          src={img}
          alt={title}
          width={400}
          height={140}
          className="h-full w-full rounded-t-sm object-cover"
        />
      </Link>

      <div className="relative m-4 flex h-full flex-col justify-between">
        <div className="flex justify-between">
          <Link href="/" className="max-w-[calc(100% - 25px)]">
            <h2 className="max-w-[300px] overflow-hidden truncate text-ellipsis text-lg font-bold leading-5 text-black">
              {title}
            </h2>
            <span className="text-sm text-gray">{developer}</span>
          </Link>

          <button
            onClick={onFav}
            className="h-0 text-primary hover:scale-[1.1] hover:shadow-md"
          >
            {favorite ? (
              <Icon
                name="heart"
                fill="#F231A5"
                aria-label="Remove from Wishlist"
              />
            ) : (
              <Icon name="heart" aria-label="Add to Wishlist" />
            )}
          </button>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            {priceDiscount && (
              <span className="mr-2 animate-bounce font-bold text-gray line-through">
                {formatCurrency(priceDiscount)}
              </span>
            )}
            <span className="rounded bg-secondary px-2 py-1 font-bold text-white ">
              {formatCurrency(price)}
            </span>
            <Button
              icon={<Icon name="shopping-cart" size={20} />}
              size="small"
              aria-label="Add to Shopping cart"
            />
          </div>
        </div>
      </div>

      {ribbon?.label && (
        <Ribbon color={ribbon.color} size={ribbon.size}>
          {ribbon.label}
        </Ribbon>
      )}
    </div>
  )
}
