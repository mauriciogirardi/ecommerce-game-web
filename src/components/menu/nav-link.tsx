import Link from 'next/link'

import { cn } from '@/lib/utils'

export type NavLinkProps = {
  href: string
  label: string
  className?: string
}

export function NavLink({ href, label, className }: NavLinkProps) {
  return (
    <li className={cn('mb-xsmall list-none text-large text-black', className)}>
      <Link
        aria-label={label}
        href={href}
        className="relative font-bold hover:after:absolute hover:after:left-0 hover:after:block hover:after:h-[3px] hover:after:animate-hover-link hover:after:bg-primary md:font-normal "
      >
        {label}
      </Link>
    </li>
  )
}
