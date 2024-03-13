import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const navLinkVariants = cva('mb-4 list-none text-black md:mb-0', {
  variants: {
    size: {
      default: 'text-md',
      medium: 'text-lg'
    },
    color: {
      white: 'text-white',
      black: 'text-black'
    }
  },
  defaultVariants: {
    size: 'default',
    color: 'black'
  }
})

export type NavLinkProps = VariantProps<typeof navLinkVariants> & {
  href: string
  label: string
  className?: string
}

export function NavLink({ href, label, className, size, color }: NavLinkProps) {
  return (
    <li className={cn(navLinkVariants({ size, color, className }))}>
      <Link
        aria-label={label}
        href={href}
        className="relative font-bold hover:after:absolute hover:after:left-0 hover:after:block hover:after:h-[3px] hover:after:animate-hover-link hover:after:bg-primary md:font-normal"
      >
        {label}
      </Link>
    </li>
  )
}
