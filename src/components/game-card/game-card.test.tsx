import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { GameCard } from '.'
import { mockGameCard } from './mock-game-card'

describe('<GameCard />', () => {
  it('should be able to render the GameCard', () => {
    render(<GameCard {...mockGameCard} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i, level: 2 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/other ocean/i)).toBeInTheDocument()
    expect(screen.getByText('$215.00')).toBeInTheDocument()
  })

  it('should be able to render with the discount price', () => {
    render(<GameCard {...mockGameCard} priceDiscount={125} />)
    expect(screen.getByText('$125.00')).toBeInTheDocument()
  })

  it('should be able to render with the ribbon', () => {
    render(<GameCard {...mockGameCard} ribbon={{ label: 'promotion' }} />)
    expect(screen.getByText('promotion')).toBeInTheDocument()
  })

  it('should be able to render icon when favorite is true', async () => {
    render(<GameCard {...mockGameCard} favorite />)

    await waitFor(() => {
      expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
    })
  })

  it('should be able to call onFav method when favorite is clicked', async () => {
    const onFav = vi.fn()
    render(<GameCard {...mockGameCard} favorite onFav={onFav} />)
    await waitFor(() => {
      fireEvent.click(screen.getAllByRole('button')[0])

      expect(onFav).toBeCalled()
    })
  })
})
