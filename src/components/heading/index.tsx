'use client'

import clsx from 'clsx'
import { ReactNode } from 'react'

import { BorderColorsType, TextColorsTypes } from '@/@types/colors'

export type HeadingProps = {
  children: ReactNode
  color?: TextColorsTypes
  lineLeft?: boolean
  lineBottom?: boolean
  colorBorder?: BorderColorsType
}

export function Heading({
  children,
  color = 'text-white',
  colorBorder = 'secondary',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <h2
      className={clsx(
        color,
        lineLeft && `pl-xxsmall border-${colorBorder} border-l-4`,
        lineBottom &&
          `after:border-${colorBorder} relative after:absolute  after:bottom-[-3px] after:left-0 after:w-12 after:border-b-4  after:content-[""]`,
        'text-xlarge font-bold lg:text-xxlarge'
      )}
    >
      {children}
    </h2>
  )
}
