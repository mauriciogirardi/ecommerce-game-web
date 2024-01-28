import { Meta } from '@storybook/react'

import { Slider } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

export const Horizontal = () => (
  <div className="text-white">
    <Slider
      settings={{
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="h-[250px] w-[300px] bg-white p-7 shadow-lg">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray font-bold text-white">
            {index + 1}
          </span>
        </div>
      ))}
    </Slider>
  </div>
)

export const Vertical = () => (
  <div className="text-white">
    <Slider
      settings={{
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        slidesToShow: 1
      }}
    >
      <div className="h-[400px] w-[400px] bg-white p-7 shadow-lg">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray font-bold text-white">
          01
        </span>
      </div>
      <div className="h-[400px] w-[400px] bg-white p-7 shadow-lg">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray font-bold text-white">
          02
        </span>
      </div>
    </Slider>
  </div>
)
