import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should be able to render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(/explore/i)).toBeInTheDocument()
  })

  it('should be able to handle the open/close mobile menu', async () => {
    render(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', {
      hidden: true
    })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveClass('opacity-0')

    fireEvent.click(screen.getByLabelText(/open menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveClass('opacity-100')

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveClass('opacity-0')
  })

  it('should be able to show register box when logged out', () => {
    render(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should be able to show wishlist and account link when logged in', () => {
    render(<Menu username="john doe" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/account/i)).toBeInTheDocument()
  })
})
