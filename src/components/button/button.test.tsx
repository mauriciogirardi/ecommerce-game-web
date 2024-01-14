import { render, screen } from '@testing-library/react'
import { Badge } from 'lucide-react'
import { describe, expect, it } from 'vitest'

import { Button } from '.'

describe('<Button />', () => {
  it('should be able to render the button', () => {
    const { container } = render(<Button>click here</Button>)

    const button = screen.getByRole('button', { name: /click here/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-linear h-9 px-3 text-sm')

    expect(container).toMatchSnapshot()
  })

  it('should be able to render the button with size small', () => {
    render(<Button size="small">click here</Button>)

    const button = screen.getByRole('button', { name: /click here/i })
    expect(button).toHaveClass('h-8 px-2.5')
  })

  it('should be able to render the button with size large', () => {
    render(<Button size="large">click here</Button>)

    const button = screen.getByRole('button', { name: /click here/i })
    expect(button).toHaveClass('h-12 px-6')
  })

  it('should be able to render the button with icon', () => {
    render(<Button size="icon" icon={<Badge data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should be able to render the button disabled', () => {
    render(<Button>click here</Button>)
    const button = screen.getByRole('button', { name: /click here/i })
    expect(button).toHaveClass(
      'disabled:cursor-not-allowed disabled:opacity-50'
    )
  })
})
