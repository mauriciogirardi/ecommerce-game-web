'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type RadioTypes = ButtonHTMLAttributes<HTMLInputElement>

const radioVariants = cva(['flex items-center gap-4'], {
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

type RadioValue = string | ReadonlyArray<string> | number
export type RadioProps = RadioTypes &
  VariantProps<typeof radioVariants> & {
    label?: string
    className?: string
    onCheck?: (value?: RadioValue) => void
    value?: RadioValue
  }

function Radio({
  label,
  color,
  className,
  onCheck,
  value,
  ...restInput
}: RadioProps) {
  const htmlForFormatted = label?.replaceAll(' ', '-').toLocaleLowerCase()

  const onChange = () => {
    onCheck?.(value)
  }

  return (
    <div className={cn(radioVariants({ className, color }))}>
      <input
        id={htmlForFormatted}
        type="radio"
        className={cn(
          'relative flex size-5 cursor-pointer appearance-none items-center justify-center rounded-full border-2 border-primary transition',
          'before:absolute before:h-2 before:w-2 before:rounded-full before:opacity-0 before:content-[""]',
          'checked:border-primary checked:bg-primary checked:before:opacity-100',
          'outline-none focus:outline-offset-2 focus:outline-primary'
        )}
        onChange={onChange}
        value={value}
        {...restInput}
      />
      {label && (
        <label className="leading-none" htmlFor={htmlForFormatted}>
          {label}
        </label>
      )}
    </div>
  )
}

Radio.displayName = 'Radio'
export { radioVariants, Radio }
