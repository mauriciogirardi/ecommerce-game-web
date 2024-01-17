'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const headingVariants = cva('text-xlarge lg:text-xxlarge font-bold', {
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    line: {
      left: 'pl-xxsmall border-l-4',
      bottom:
        'relative after:absolute  after:bottom-[-3px] after:left-0 after:w-12 after:border-b-4 after:content-[""]'
    },
    lineColor: {
      primary: 'after:border-primary border-primary',
      secondary: 'after:border-secondary border-secondary'
    }
  },
  defaultVariants: {
    color: 'white',
    lineColor: 'secondary'
  }
})

export type HeadingProps = VariantProps<typeof headingVariants> & {
  children: ReactNode
  className?: string
}

function Heading({
  children,
  color,
  lineColor,
  line,
  className
}: HeadingProps) {
  return (
    <h2 className={cn(headingVariants({ color, line, lineColor, className }))}>
      {children}
    </h2>
  )
}

Heading.displayName = 'Heading'

export { Heading, headingVariants }
