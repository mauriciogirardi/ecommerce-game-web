'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, KeyboardEvent, useState } from 'react'

import { cn } from '@/lib/utils'

type CheckboxTypes = ButtonHTMLAttributes<HTMLInputElement>

const checkboxVariants = cva(['flex items-center gap-4'], {
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

export type CheckboxProps = CheckboxTypes &
  VariantProps<typeof checkboxVariants> & {
    label?: string
    className?: string
    isChecked?: boolean
    onCheck?: (status: boolean) => void
    value?: string | ReadonlyArray<string> | number
  }

function Checkbox({
  label,
  color,
  className,
  onCheck,
  isChecked = false,
  value,
  ...restInput
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked)
  const htmlForFormatted = label?.replaceAll(' ', '-').toLocaleLowerCase()

  const onChange = () => {
    const status = !checked
    setChecked(status)
    onCheck?.(status)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onChange()
    }
  }

  return (
    <div className={cn(checkboxVariants({ className, color }))}>
      <input
        id={htmlForFormatted}
        type="checkbox"
        className={cn(
          'relative flex size-5 cursor-pointer appearance-none items-center justify-center rounded-sm border-2 border-darkGray transition',
          'before:absolute before:top-[2px] before:h-[9px] before:w-[6px] before:rotate-45 before:border-2 before:border-l-0 before:border-t-0 before:border-white before:opacity-0 before:content-[""]',
          'checked:border-primary checked:bg-primary checked:before:opacity-100',
          'outline-none focus:outline-offset-2 focus:outline-primary'
        )}
        onChange={onChange}
        checked={checked}
        onKeyDown={handleKeyDown}
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

Checkbox.displayName = 'Checkbox'
export { checkboxVariants, Checkbox }
