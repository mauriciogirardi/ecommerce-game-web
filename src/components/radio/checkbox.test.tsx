import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'

import { Radio } from '.'

describe('<Radio />', () => {
  it('should be able to render with label.', () => {
    render(<Radio label="Radio Label" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Radio Label')).toBeInTheDocument()
    expect(screen.getByText('Radio Label')).toHaveAttribute(
      'for',
      'radio-label'
    )
  })

  it('should be able to render without label.', () => {
    render(<Radio />)
    expect(screen.queryByLabelText('Radio Label')).not.toBeInTheDocument()
  })

  it('should be able to render with black label color.', () => {
    render(<Radio label="label" color="black" />)
    expect(screen.getByRole('radio').parentElement).toHaveClass('text-black')
  })

  it('should be able to dispatch onCheck when status changes.', async () => {
    const user = userEvent.setup()
    const onCheck = vi.fn()
    render(<Radio label="Free" onCheck={onCheck} value="free" />)

    expect(onCheck).not.toHaveBeenCalled()

    await user.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('free')
  })

  it('should be able to accessible with tab.', async () => {
    const user = userEvent.setup()
    render(<Radio label="Free" />)
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText('Free')).toHaveFocus()
  })
})
