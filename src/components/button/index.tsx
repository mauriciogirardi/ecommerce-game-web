'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import {
  // AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'

import { cn } from '@/lib/utils'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-linear text-white hover:opacity-90',
        icon: 'hover:text-primary bg-transparent'
      },
      size: {
        default: 'h-9 px-3 text-sm',
        large: 'h-10 px-8 text-medium text-white',
        small: 'h-8 px-2.5 text-sm',
        icon: 'h-10 px-3 text-white flex items-center gap-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonProps = ButtonTypes &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode
    asChild?: boolean
    icon?: ReactNode
    as?: ElementType
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {!!icon && icon}
        {!!children && children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
