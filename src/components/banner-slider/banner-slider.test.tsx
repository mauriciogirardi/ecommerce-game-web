import '../../../tests/match-media-mock'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BannerSlider } from '.'
import { mockBannerSlider } from './mock-banner-slider'

describe('<BannerSlider />', () => {
  it('should be able to render vertical slider', () => {
    const { container } = render(
      <BannerSlider banners={mockBannerSlider.banners.slice(0, 2)} />
    )
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should be able to render with 1 active item', () => {
    const { container } = render(
      <BannerSlider banners={mockBannerSlider.banners.slice(0, 2)} />
    )
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(
      screen.getByRole('heading', { name: /Defy death/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy death 02/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should be able to render with the dots', () => {
    render(<BannerSlider banners={mockBannerSlider.banners.slice(0, 2)} />)
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument()
  })
})
