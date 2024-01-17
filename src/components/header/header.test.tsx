import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Header } from '.'

describe('<Header />', () => {
  it('should be able to render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()
  })
})
