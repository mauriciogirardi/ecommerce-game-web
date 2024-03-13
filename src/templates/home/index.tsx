'use client'

import { Suspense } from 'react'

import { BannerProps } from '@/components/banner'
import { BannerSlider } from '@/components/banner-slider'
import { Footer } from '@/components/footer'
import { GameCardProps } from '@/components/game-card'
import { GameCardSlider } from '@/components/game-card-slider'
import { Heading } from '@/components/heading'
import { Highlight, HighlightProps } from '@/components/highlight'
import { Menu } from '@/components/menu'
import { useBreakpoints } from '@/hooks/useBreakpoints'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  freeGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  mostPopularGames: GameCardProps[]
  upcomingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  mostPopularHighlight: HighlightProps
  upcomingGamesHighlight: HighlightProps
}

export function HomeTemplate({
  banners,
  newGames,
  freeGames,
  upcomingGames,
  mostPopularGames,
  upcomingMoreGames,
  freeGamesHighlight,
  mostPopularHighlight,
  upcomingGamesHighlight
}: HomeTemplateProps) {
  const { md } = useBreakpoints()

  return (
    <section>
      <div className="container mb-16 md:mb-0">
        <Menu />
        <div className="relative z-10 my-6">
          <BannerSlider banners={banners} />
        </div>
      </div>

      <div className="relative mt-0 min-h-0 md:-mt-28 md:bg-white md:pb-24 md:pt-36 md:[clip-path:polygon(0_0,100%_15%,100%_100%,0_85%)]">
        <div className="container pl-5 lg:pl-0">
          <Heading
            line="left"
            lineColor="secondary"
            color={md ? 'black' : 'white'}
          >
            News
          </Heading>
          <Suspense fallback={<p className="text-black">Loading</p>}>
            <GameCardSlider games={newGames} color="black" />
          </Suspense>
        </div>
      </div>

      <div className="container mt-16 space-y-14 md:mt-0">
        <div>
          <Heading
            line="left"
            lineColor="secondary"
            className="mb-9 ml-5 lg:ml-0"
          >
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider games={mostPopularGames} className="pl-5 lg:pl-0" />
        </div>

        <div>
          <Heading
            line="left"
            lineColor="secondary"
            className="mb-9 ml-5 lg:ml-0"
          >
            Upcoming
          </Heading>
          <div className="-pl-4">
            <Highlight {...upcomingGamesHighlight} />
            <GameCardSlider className="pl-5 lg:pl-0" games={upcomingGames} />
            <GameCardSlider
              className="pl-5 lg:pl-0"
              games={upcomingMoreGames}
            />
          </div>
        </div>

        <div>
          <Heading
            line="left"
            lineColor="secondary"
            className="mb-9 ml-5 lg:ml-0"
          >
            Free Games
          </Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider className="pl-5 lg:pl-0" games={freeGames} />
        </div>
      </div>

      <div className="mt-14 bg-white py-7 md:[clip-path:polygon(0_15%,100%_0,100%_100%,0_100%)]">
        <div className="container px-5 md:pt-14 ">
          <Footer />
        </div>
      </div>
    </section>
  )
}
