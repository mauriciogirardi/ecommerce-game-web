'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const headingVariants = cva('font-bold', {
  variants: {
    line: {
      left: 'pl-xxsmall border-l-4',
      bottom:
        'relative after:absolute after:bottom-[-3px] after:left-0 after:w-[30px] after:border-b-4 after:content-[""]'
    },
    lineColor: {
      primary: 'after:border-primary border-primary',
      secondary: 'after:border-secondary border-secondary'
    },
    size: {
      default: 'text-[28px]',
      medium: 'text-xl',
      small: 'text-base'
    },
    color: {
      white: 'text-white',
      black: 'text-black'
    }
  },
  defaultVariants: {
    lineColor: 'secondary',
    size: 'default',
    color: 'white'
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
  size,
  line,
  className
}: HeadingProps) {
  return (
    <h2
      className={cn(
        headingVariants({ line, lineColor, size, color, className })
      )}
    >
      {children}
    </h2>
  )
}

Heading.displayName = 'Heading'

export { Heading, headingVariants }
