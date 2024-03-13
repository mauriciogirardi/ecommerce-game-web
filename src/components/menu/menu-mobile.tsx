import Link from 'next/link'

import {
  PATH_HOME,
  PATH_MY_ACCOUNT,
  PATH_SIGN_UP,
  PATH_STORE,
  PATH_WISHLIST
} from '@/constants/path'
import { cn } from '@/lib/utils'

import { Button } from '../button'
import Icon from '../Icon'
import { NavLink } from './nav-link'

type MenuMobileProps = {
  isLogged: boolean
  onOpenMenu: (isOpen: boolean) => void
  isOpen: boolean
}

export function MenuMobile({ isLogged, isOpen, onOpenMenu }: MenuMobileProps) {
  return (
    <nav
      className={cn(
        'fixed inset-0 z-20 h-screen overflow-hidden bg-white transition-menu duration-[0.3s]',
        !isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
      )}
      aria-hidden={!isOpen}
    >
      <Button
        icon={<Icon name="x" size={24} />}
        onClick={() => onOpenMenu(false)}
        aria-label="Close menu"
        variant="icon"
        className="absolute right-4 top-4 z-20 h-[24px] p-0 text-black"
      />

      <div
        className={cn(
          'flex h-screen flex-col items-center justify-center p-10 transition-link',
          !isOpen ? 'translate-y-5' : 'translate-y-0'
        )}
      >
        <div className="grow">
          <ul className="flex h-full flex-col items-center justify-center text-center">
            <NavLink label="Home" href={PATH_HOME} />
            <NavLink label="Store" href={PATH_STORE} />
            {isLogged && (
              <>
                <NavLink label="My account" href={PATH_MY_ACCOUNT} />
                <NavLink label="Wishlist" href={PATH_WISHLIST} />
              </>
            )}
          </ul>
        </div>

        {!isLogged && (
          <div className="flex w-full grow-0 flex-col items-center gap-1">
            <Button className="w-full" size="large" aria-label="Log in now">
              Log in now
            </Button>
            <span className="text-black">or</span>
            <Link
              href={PATH_SIGN_UP}
              className="mt-1 text-primary hover:text-primary/85"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
