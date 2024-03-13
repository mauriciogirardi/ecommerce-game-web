import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should be able to render the footer', () => {
    render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link')).toHaveLength(10)
  })
})
