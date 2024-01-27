'use client'

import Image from 'next/image'

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
}

export function GameCard({
  developer,
  img,
  price,
  title,
  ribbon,
  priceDiscount,
  favorite = false,
  onFav
}: GameCardProps) {
  return (
    <div className="relative h-[260px] w-[320px] rounded bg-white shadow-xl md:h-[315px] md:w-[380px]">
      <Image
        src={img}
        alt={title}
        width={380}
        height={160}
        className="h-[160px] rounded-t object-cover md:h-[200px]"
      />

      <div className="flex flex-col p-3 md:p-5">
        <div className="flex justify-between">
          <div className="w-full">
            <h2 className="max-w-[300px] overflow-hidden truncate text-ellipsis text-lg font-bold leading-5">
              {title}
            </h2>
            <span className="text-sm text-gray">{developer}</span>
          </div>
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
