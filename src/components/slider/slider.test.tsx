import '../../../tests/match-media-mock'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Slider } from '.'

describe('<Slider />', () => {
  it('should be able to render the children as slider items', () => {
    const { container } = render(
      <Slider
        settings={{
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          infinite: false
        }}
      >
        <div>item 1</div>
        <div>item 2</div>
      </Slider>
    )

    expect(screen.getByText('item 1').parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )
    expect(screen.getByText('item 2').parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
