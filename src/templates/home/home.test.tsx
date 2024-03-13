import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { mockBannerSlider } from '@/components/banner-slider/mock-banner-slider'
import { mockGameCardSlider } from '@/components/game-card-slider/mock-game-card-slider'
import { mockHighlight } from '@/components/highlight/mock-highlight'

import { HomeTemplate, HomeTemplateProps } from '.'

const games = [mockGameCardSlider.games[0]]

const props: HomeTemplateProps = {
  banners: mockBannerSlider.banners,
  freeGames: games,
  newGames: games,
  upcomingMoreGames: games,
  upcomingGames: games,
  mostPopularGames: games,
  freeGamesHighlight: mockHighlight,
  mostPopularHighlight: mockHighlight,
  upcomingGamesHighlight: mockHighlight
}

describe('<HomeTemplate/>', () => {
  it('should render correctly', () => {
    render(<HomeTemplate {...props} />)

    // Menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // Footer
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    // Sections Heading
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    // Banner
    expect(screen.getAllByText('Defy death')).toHaveLength(1)
    // Card games
    expect(screen.getAllByText('Population Zero')).toHaveLength(5)
    // Highlight
    expect(screen.getAllByText(/read dead is back/i)).toHaveLength(3)
  })
})
