'use client'
import './slick-styles.css'

import { PropsWithChildren } from 'react'
import SlickSlider, { Settings } from 'react-slick'

export type SliderProps = PropsWithChildren & {
  settings: Settings
}

export function Slider({ children, settings }: SliderProps) {
  return (
    <SlickSlider {...settings} accessibility>
      {children}
    </SlickSlider>
  )
}
