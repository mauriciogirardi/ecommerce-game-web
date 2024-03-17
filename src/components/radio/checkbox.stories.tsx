import { Meta, StoryObj } from '@storybook/react'

import { Radio } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center">
        <Story />
      </div>
    )
  ],
  argTypes: {
    color: { control: 'radio', options: ['white', 'black'] },
    value: { control: 'text' }
  }
} as Meta

type Story = StoryObj<typeof Radio>
export const Default: Story = {
  render: ({ ...args }) => (
    <div className="space-y-4">
      <Radio name="name" value="fist" label="First" defaultChecked {...args} />
      <Radio name="name" value="second" label="Second" {...args} />
      <Radio name="name" value="third" label="Third" {...args} />
    </div>
  )
}
