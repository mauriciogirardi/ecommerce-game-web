'use client'

import Link from 'next/link'

import { PATH_EXPLORE, PATH_HOME } from '@/constants/path'

import { Heading } from '../heading'
import { Logo } from '../logo'

// export type FooterProps = {}

export function Footer() {
  return (
    <footer className="flex flex-col">
      <Logo color="black" />
      <div className="mt-7 grid  grid-cols-2 gap-5 lg:grid-cols-4 ">
        <div className="flex flex-col gap-1 text-gray">
          <Heading
            size="small"
            color="black"
            line="bottom"
            className="mb-3 uppercase"
          >
            Contact
          </Heading>
          <nav
            aria-labelledby="footer contacts"
            className="flex flex-col gap-1"
          >
            <a
              className="w-min hover:text-gray/80"
              href="mailto:devmauriciogirardi@gmail.com"
            >
              devmauriciogirardi@gmail.com
            </a>
            <a className="w-min hover:text-gray/80" href="tel:+351000000000">
              +351000000000
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-1 text-gray">
          <Heading
            size="small"
            color="black"
            line="bottom"
            className="mb-3 uppercase"
          >
            Follow us
          </Heading>
          <nav aria-labelledby="social media" className="flex flex-col gap-1">
            <a className="w-min hover:text-gray/80" href="#">
              Instagram
            </a>
            <a className="w-min hover:text-gray/80" href="#">
              Twitter
            </a>
            <a className="w-min hover:text-gray/80" href="#">
              YouTube
            </a>
            <a className="w-min hover:text-gray/80" href="#">
              Facebook
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-1 text-gray">
          <Heading
            size="small"
            color="black"
            line="bottom"
            className="mb-3 uppercase"
          >
            Links
          </Heading>
          <nav
            aria-labelledby="footer resources"
            className="flex flex-col gap-1"
          >
            <Link href={PATH_HOME} className="w-min hover:text-gray/80">
              Store
            </Link>
            <Link href={PATH_EXPLORE} className="w-min hover:text-gray/80">
              Explore
            </Link>
            <a
              className="w-min hover:text-gray/80"
              href="#"
              target="_blank"
              rel="noopener, noreferrer"
            >
              Search
            </a>
            <a
              className="w-min hover:text-gray/80"
              href="#"
              target="_blank"
              rel="noopener, noreferrer"
            >
              FAQ
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-1 text-gray">
          <Heading
            size="small"
            color="black"
            line="bottom"
            className="mb-3 uppercase"
          >
            Location
          </Heading>
          <p>Rua 7 de Maio</p>
          <p>527, 895624</p>
          <p>Porto, Portugal</p>
        </div>
      </div>
      <span className="mt-5 text-center text-[12px] text-gray md:mt-8">
        Won Games 2024 © All rights reserved
      </span>
    </footer>
  )
}
