/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { useBreakpoints } from '@/hooks/useBreakpoints'

import { Highlight } from '.'
import { mockHighlight } from './mock-highlight'

vi.mock('@/hooks/useBreakpoints')

describe('<Highlight />', () => {
  beforeAll(() => {
    vi.mocked(useBreakpoints).mockReturnValue({
      lg: false,
      '2xl': false,
      md: false,
      sm: false,
      xl: false
    })
  })

  it('should be able to render the headings and button', () => {
    render(<Highlight {...mockHighlight} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i, level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should be able to render the background image', () => {
    render(<Highlight {...mockHighlight} />)

    expect(screen.getByRole('img', { name: /heading 1/i })).toHaveAttribute(
      'alt',
      'Heading 1'
    )
    const backgroundImg = screen.getAllByRole('img', { name: /heading 1/i })
    expect(backgroundImg[0]).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fassets%2Fimgs%2Fdead-bg.png&w=1920&q=75'
    )
  })

  it('should be able to render the float image', () => {
    render(
      <Highlight {...mockHighlight} floatImage={'/assets/imgs/dead-img.png'} />
    )
    const floatImg = screen.getAllByRole('img', { name: /heading 1/i })
    expect(floatImg[1]).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fassets%2Fimgs%2Fdead-img.png&w=640&q=75'
    )
  })

  it('should be able to render the float right position', () => {
    render(
      <Highlight
        {...mockHighlight}
        floatImage={'/assets/imgs/dead-img.png'}
        float="right"
      />
    )
    const floatImg = screen.getAllByRole('img', { name: /heading 1/i })
    expect(floatImg[1]).toHaveClass('scale-x-[-1] right-4 md:right-9')
  })
})
