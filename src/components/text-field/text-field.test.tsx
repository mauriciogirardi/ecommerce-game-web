import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should be able to render the TextField with label.', () => {
    render(<TextField label="Label" />)
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should be able to render the TextField without label.', () => {
    render(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should be able to change value when typing.', () => {
    render(<TextField placeholder="Label" label="Label" />)
    expect(screen.getByPlaceholderText('Label')).toBeInTheDocument()
  })

  it('should be able to render the TextField with placeholder.', async () => {
    const onInput = vi.fn()
    const user = userEvent.setup()
    render(<TextField placeholder="Label" label="Label" onInput={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    await user.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be able to accessible with tab.', async () => {
    const user = userEvent.setup()

    render(<TextField label="Free" />)
    const input = screen.getByLabelText('Free')

    expect(document.body).toHaveFocus()

    await user.tab()
    expect(input).toHaveFocus()
  })

  it('should be able to render with icon.', async () => {
    render(<TextField label="Free" icon="user" />)

    await waitFor(() => {
      expect(screen.getByTestId('user')).toBeInTheDocument()
    })
  })

  it('should be able to move icon to right.', async () => {
    render(<TextField label="Free" icon="user" iconPosition="right" />)

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveClass('order-1')
    })
  })

  it('should be able to disabled.', () => {
    render(<TextField label="Free" disabled />)
    const wrapperDiv =
      screen.getByLabelText('Free').parentElement?.parentElement
    expect(screen.getByLabelText('Free')).toBeDisabled()
    expect(wrapperDiv).toHaveClass('opacity-50')
  })

  it('should not be able to give focus in disabled element.', async () => {
    const user = userEvent.setup()

    render(<TextField label="Free" disabled />)
    const input = screen.queryByLabelText('Free')

    expect(document.body).toHaveFocus()

    await user.tab()
    expect(input).not.toHaveFocus()
  })

  it('should be able to render error message.', () => {
    render(<TextField label="Free" error="Filed required!" />)
    const error = screen.getByText('Filed required!')
    const wrapperDiv =
      screen.getByLabelText('Free').parentElement?.parentElement

    expect(error).toBeInTheDocument()
    expect(error).toHaveClass('text-red-400')
    expect(screen.getByLabelText('Free')).toHaveFocus()

    expect(wrapperDiv).toMatchSnapshot()
  })
})
