import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Banner } from '.'
import { mockBanner } from './mock-banner'

describe('<Banner />', () => {
  it('should be able to render the Banner', () => {
    const { container } = render(<Banner {...mockBanner} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i, level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Play the new/i,
        level: 2
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Play the new/i,
        level: 2
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Defy death')
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
