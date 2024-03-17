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
  [
    'inline-flex items-center gap-2 justify-center whitespace-nowrap rounded text-base transition-colors',
    'outline-none focus:outline-offset-2 focus:outline-primary',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ],
  {
    variants: {
      size: {
        default: 'h-9 px-6 text-sm',
        large: 'h-10 px-8 text-medium text-white',
        small: 'h-8 px-2.5 text-sm',
        icon: 'h-10 px-3 text-white'
      },
      variant: {
        default: 'bg-linear text-white hover:opacity-90',
        icon: 'hover:text-primary bg-transparent',
        ghost: 'text-primary hover:bg-zinc-800/10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ButtonProps = ButtonTypes &
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
