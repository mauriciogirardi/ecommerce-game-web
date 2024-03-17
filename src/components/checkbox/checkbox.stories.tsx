import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center">
        <div className="space-y-4">
          <Story args={{ isChecked: true, label: 'Action' }} />
          <Story args={{ isChecked: false, label: 'Advanced' }} />
          <Story args={{ isChecked: false, label: 'GTA' }} />
        </div>
      </div>
    )
  ],
  argTypes: {
    color: { control: 'radio', options: ['white', 'black'] }
  }
} as Meta

export const Default: StoryObj<typeof Checkbox> = {}
