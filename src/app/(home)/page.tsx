import { mockBannerSlider } from '@/components/banner-slider/mock-banner-slider'
import { mockGameCardSlider } from '@/components/game-card-slider/mock-game-card-slider'
import { mockHighlight } from '@/components/highlight/mock-highlight'
import { HomeTemplate } from '@/templates/home'

export default function Home() {
  return (
    <HomeTemplate
      banners={mockBannerSlider.banners}
      freeGames={mockGameCardSlider.games}
      newGames={mockGameCardSlider.games}
      upcomingMoreGames={mockGameCardSlider.games}
      upcomingGames={mockGameCardSlider.games}
      mostPopularGames={mockGameCardSlider.games}
      freeGamesHighlight={mockHighlight}
      mostPopularHighlight={mockHighlight}
      upcomingGamesHighlight={mockHighlight}
    />
  )
}
