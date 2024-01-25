import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should be able to render the text correctly', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should be able to render with the primary color by default', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveClass('bg-primary')
  })

  it('should be able to render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveClass('bg-secondary')
  })

  it('should be able to render with the default size', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveClass('text-sm h-9')
  })

  it('should be able to render with the small size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveClass('text-xs h-6')
  })
})
