'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const ribbonVariants = cva(
  'text-white flex items-center justify-center shadow-lg w-max absolute top-4 before:content-[""] before:absolute before:right-0 before:border-solid before:border-l-0 before:border-r-transparent before:border-b-transparent before:border-b-8',
  {
    variants: {
      color: {
        primary:
          'bg-primary before:border-l-[#a02e73] before:border-t-[#a02e73]',
        secondary:
          'bg-secondary before:border-l-[#326b63] before:border-t-[#326b63] text-black'
      },
      size: {
        small:
          'text-xs h-6 before:top-6 px-2 before:border-t-[7px] before:border-r-[12px] -right-3',
        default:
          'text-sm h-9 before:top-9 px-4 before:border-t-[10px] before:border-r-[16px] -right-4 '
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'default'
    }
  }
)

export type RibbonProps = VariantProps<typeof ribbonVariants> & {
  children: ReactNode
  className?: string
}

function Ribbon({ children, color, size, className }: RibbonProps) {
  return (
    <div className={cn(ribbonVariants({ color, size, className }))}>
      {children}
    </div>
  )
}

Ribbon.displayName = 'Ribbon'

export { Ribbon, ribbonVariants }
