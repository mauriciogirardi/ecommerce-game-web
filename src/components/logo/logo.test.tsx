import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should be able to render the logo', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'w-[6.875rem]'
    )
    expect(
      screen.getByLabelText(/won games/i).parentElement
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should be able to change the theme to dark by props', () => {
    render(<Logo color="black" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should be able to change the size to large', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'w-[12.5rem]'
    )
  })
})
