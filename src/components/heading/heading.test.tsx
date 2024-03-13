import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should be able to render the heading', () => {
    render(<Heading>Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-white')
  })

  it('should be able to render the heading color black', () => {
    render(<Heading color="black">Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveClass('text-black')
  })

  it('should be able to render the heading with a line left', () => {
    render(<Heading line="left">Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveClass('border-l-4 border-secondary')
  })

  it('should be able to render the heading with a line bottom', () => {
    render(<Heading line="bottom">Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveClass('after:border-b-4')
  })

  it('should be able to render the heading with a line with color primary', () => {
    render(
      <Heading line="bottom" lineColor="primary">
        Heading
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveClass('after:border-primary')
  })

  it('should be able to render the heading with a small size', () => {
    render(<Heading size="small">Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveClass('text-base')
  })

  it('should be able to render the heading with a medium size', () => {
    render(<Heading size="medium">Heading</Heading>)
    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toHaveStyle({
      'font-size': '16px'
    })
  })
})
