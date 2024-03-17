'use client'

import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

import { cn } from '@/lib/utils'

import Icon from '../Icon'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  initialValue?: string
  onInput?: (value: string) => void
  icon?: keyof typeof dynamicIconImports
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
}

export function TextField({
  label,
  initialValue = '',
  onInput,
  icon,
  disabled = false,
  iconPosition = 'left',
  error,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue)
  const htmlForFormatted = label?.replaceAll(' ', '-').toLocaleLowerCase()

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)
    onInput?.(newValue)
  }

  return (
    <div
      className={cn('group w-full space-y-1', disabled && 'opacity-50')}
      aria-disabled={disabled}
    >
      {label && (
        <label
          htmlFor={htmlForFormatted}
          className={cn(
            'cursor-pointer text-sm font-medium text-zinc-700',
            disabled && 'cursor-not-allowed'
          )}
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          'flex items-center rounded-md border-2 border-lightGray bg-lightGray px-3',
          'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
          error && 'focus-within:ring-red-400'
        )}
      >
        {!!icon && (
          <Icon
            name={icon}
            className={cn(
              'size-6 text-zinc-400',
              iconPosition === 'right' ? 'order-1' : 'order-none',
              error && 'text-red-400'
            )}
            data-testid={icon}
          />
        )}

        <input
          id={htmlForFormatted}
          onChange={onChange}
          value={value}
          autoComplete="off"
          disabled={disabled}
          autoFocus={!!error}
          className={cn(
            'w-full border-0 bg-transparent py-1 text-lg text-black outline-none',
            iconPosition === 'right' ? 'pr-3' : 'pl-3',
            'disabled:cursor-not-allowed disabled:text-zinc-500'
          )}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs font-medium text-red-400">{error}</span>
      )}
    </div>
  )
}
