import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should be able to render with label.', () => {
    render(<Checkbox label="Checkbox Label" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Checkbox Label')).toBeInTheDocument()
    expect(screen.getByText('Checkbox Label')).toHaveAttribute(
      'for',
      'checkbox-label'
    )
  })

  it('should be able to render without label.', () => {
    render(<Checkbox />)
    expect(screen.queryByLabelText('Checkbox Label')).not.toBeInTheDocument()
  })

  it('should be able to render with black label color.', () => {
    render(<Checkbox label="label" color="black" />)
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('text-black')
  })

  it('should be able to dispatch onCheck when status changes.', async () => {
    const user = userEvent.setup()
    const onCheck = vi.fn()
    render(<Checkbox label="Free" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    await user.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should be able to change status when click on the Enter key.', async () => {
    const user = userEvent.setup()
    const onCheck = vi.fn()
    render(<Checkbox label="Free" onCheck={onCheck} />)

    const checkbox = screen.getByRole('checkbox')
    checkbox.focus()
    await user.keyboard('{enter}')
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })

  it('should be able to change status to unchecked.', async () => {
    const user = userEvent.setup()
    const onCheck = vi.fn()
    render(<Checkbox label="Free" onCheck={onCheck} isChecked />)

    await user.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be able to accessible with tab.', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Free" />)
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText('Free')).toHaveFocus()
  })
})
