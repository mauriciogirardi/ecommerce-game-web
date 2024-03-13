'use client'
import './game-card-slider-slick.css'

import { cva, VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Settings } from 'react-slick'

import { cn } from '@/lib/utils'

import { GameCard, GameCardProps } from '../game-card'
import { Slider } from '../slider'

const buttonVariants = cva('mt-6 overflow-hidden lg:overflow-visible', {
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    }
  },
  defaultVariants: {
    color: 'white'
  }
})

export type GameCardSliderProps = VariantProps<typeof buttonVariants> & {
  games: GameCardProps[]
  className?: string
}

const settings: Settings = {
  nextArrow: <ChevronRight aria-label="Next games" size={24} />,
  prevArrow: <ChevronLeft aria-label="Previous games" size={24} />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export function GameCardSlider({
  games,
  color,
  className
}: GameCardSliderProps) {
  return (
    <div className={cn(buttonVariants({ color, className }), 'card-slider')}>
      <Slider settings={settings}>
        {games?.map((game, index) => <GameCard key={index} {...game} />)}
      </Slider>
    </div>
  )
}
