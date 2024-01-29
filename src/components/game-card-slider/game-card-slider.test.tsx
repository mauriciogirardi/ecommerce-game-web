import '../../../tests/match-media-mock'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GameCardSlider } from '.'
import { mockGameCardSlider } from './mock-game-card-slider'

describe('<GameCardSlider />', () => {
  it('should be able to render the GameCardSlider', () => {
    render(<GameCardSlider games={mockGameCardSlider.games} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /title 2/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /title 3/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /title 4/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /title 5/i })
    ).not.toBeInTheDocument()
  })
})
