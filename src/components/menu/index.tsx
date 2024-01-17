'use client'

import Link from 'next/link'
import { useState } from 'react'

import { PATH_EXPLORE, PATH_HOME } from '@/constants/path'

import { Button } from '../button'
import Icon from '../Icon'
import { Logo } from '../logo'
import { MenuMobile } from './menu-mobile'
import { NavLink } from './nav-link'

export type MenuProps = {
  username?: string
}

export function Menu({ username }: MenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="relative flex items-center justify-between p-small text-white">
      <Button
        aria-label="Open menu"
        onClick={() => setIsOpenMenu(true)}
        icon={<Icon name="menu" size={26} />}
        variant="icon"
        className="h-[26px] p-0 md:hidden"
      />

      <div className="flex items-center gap-6">
        <Link
          href={PATH_HOME}
          className="absolute left-1/2 -translate-x-1/2 md:relative md:left-[55px] md:h-8 md:w-[110px]"
        >
          <Logo hideOnMobile />
        </Link>

        <div className="ml-8 hidden items-center gap-6 md:flex">
          <NavLink
            href={PATH_HOME}
            label="Home"
            className="mb-0 ml-8 text-[1.2rem] text-white"
          />
          <NavLink
            href={PATH_EXPLORE}
            label="Explore"
            className="mb-0 text-[1.2rem] text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Button
          icon={<Icon name="search" size={24} />}
          aria-label="Search"
          variant="icon"
          className="h-[24px] p-0"
        />
        <Button
          icon={<Icon name="shopping-cart" size={24} />}
          aria-label="Open shopping cart"
          variant="icon"
          className="h-[24px] p-0"
        />
        {!username && (
          <Button aria-label="Sign in" className="hidden md:block" size="large">
            Sign in
          </Button>
        )}
      </div>

      <MenuMobile
        isLogged={!!username}
        onOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
    </div>
  )
}
