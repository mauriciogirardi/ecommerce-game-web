'use client'
import './slick-banner-styles.css'

import { Settings } from 'react-slick'

import { Banner, BannerProps } from '../banner'
import { Slider } from '../slider'

export type BannerSliderProps = {
  banners: BannerProps[]
}

const settings: Settings = {
  arrows: false,
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <div className="banner-slider">
      <Slider settings={settings}>
        {banners?.map((banner, index) => {
          return (
            <Banner
              key={index}
              {...banner}
              className="mx-auto lg:max-w-[1004px]"
            />
          )
        })}
      </Slider>
    </div>
  )
}
