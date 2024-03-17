import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-white">
        <div>
          <Story />
        </div>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof TextField> = {
  args: {
    label: 'Name',
    placeholder: 'Your name',
    icon: 'user'
  }
}

export const Disabled: StoryObj<typeof TextField> = {
  args: {
    label: 'E-mail',
    placeholder: 'Your e-mail',
    icon: 'mail',
    initialValue: 'devmauriciogirardi@gmail.com',
    disabled: true
  }
}

export const Error: StoryObj<typeof TextField> = {
  args: {
    label: 'E-mail',
    placeholder: 'Your e-mail',
    icon: 'mail',
    error: 'Field e-mail is required!'
  }
}
